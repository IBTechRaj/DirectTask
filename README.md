# Direct Task

Direct Task is a Rails React Full Stack assignment project by DirectShifts as part of recruitment

## Setup

* Clone the repo or download zip

* In the root folder run 
    - bundle install
    - rails db:create
    - rails db:migrate
    - rails s -p 3001 (to start the server)

* cd to client folder for frontend
    - run npm install
    - run npm start

## Features
    - Rails backend with Devise and JWT
    - React frontend with Material UI
    - SendGrid for Email service
    - A user can signup and then signin to send referral emails

* Note: SendGrid is the email service implemented but due to change in their usage requirements which involve downloading an app having two step verification, etc. user authentication is not taking place and hence emails not sent though they are generated in the backend.
