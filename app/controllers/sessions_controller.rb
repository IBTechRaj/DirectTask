class SessionsController < Devise::SessionsController

  def create
    user = User.find_by_email(user_params[:email])

    if user && user.valid_password?(user_params[:password])
      token = user.generate_jwt
      render json: token.to_json
    else
      render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
    end
  end

  def user_params
    params.permit(:email, :password)
    # params.require(:user).permit(:email, :password)
  end

end