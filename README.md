   <img src="https://s3.us-east-2.amazonaws.com/gobarber-img/logo.svg" height = "150"/>
   
 
# APP GOBARBER
- App created with NodeJs

<img src="s3:"https://barberimages2/barber/NodeJS.png" height = "200" width = "200" />

The main learning  in this app was to manipulated routes, how they work in the right way, in addition to creating MVC design patterns, learn about using `nunjucks` to render views.

In addition, the process of authentication and user creation was created step by step through the use of Sequelize for BD, configured in a PostgresSQL database, using a Docker virtual machine to do so.

  
 ### HOW TO USE:
It is HIGHLY RECOMMENDED USE OF YARN and some linux terminal, in case you are with windows, you can use the GIT terminal.

 
  - First you will need to have docker installed on your machine: https://www.docker.com/get-started.
  - Create an account on the docker site, and once installed, log in to that account.
  - Do the DB installation, by the terminal using `docker run --name database -p 5432:5432 -d -t kartoza/postgis`.
  - Create a database with the name "gobarber".
  - No projeto usar `yarn install` para instalar todas as dependências do projeto.
  - Also, `npx sequelize db:migrate` to create the database.
  - After, run `yarn start`.
  
  ### SCREENSHOTS:
  - Login View page
  <img src="https://s3.amazonaws.com/barberimages2/barber/login-1.png" height = "400" width = "400" />

  -  Select your prefer barber
  <img src="https://s3.amazonaws.com/barberimages2/barber/choose-barber-2.png" height = "500" width = "400" />
  
   - Book Appointment
  <img src="https://s3.amazonaws.com/barberimages2/barber/appointment-3.png" height = "500" width = "400" />
  
   - Appointments dates and time.
   <img src="https://s3.amazonaws.com/barberimages2/barber/date-4.png" height = "600" width = "400" />
  
   #### Screens of the service provider :
   
   - Available times slots
   <img src="https://s3.amazonaws.com/barberimages2/barber/time-5.png" height = "400" width = "400" /> 
   
   - Create a account
   <img src="https://s3.amazonaws.com/barberimages2/barber/create-account-6.png" height = "400" width = "400" /> 
    
    
    
