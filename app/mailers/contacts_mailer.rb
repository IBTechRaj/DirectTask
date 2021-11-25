class ContactsMailer < ApplicationMailer
  default :from => 'krs30018@gmail.com'
 
  def contact_email(contact)
    @contact = contact
    mail( :to => 'usha.chigurpati@gmail.com',
    :subject => 'Assignment done' )
  end
end
