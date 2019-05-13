   <img src="https://s3.us-east-2.amazonaws.com/gobarber-img/logo.svg" height = "150"/>


# APP GOBARBER
- App created with NodeJs

The main learning  in this app was to manipulated routes, how they work in the right way, in addition to creating MVC design patterns, learn about using nunjucks to render views.

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
  - Initial View page
  <img src="https://s3.amazonaws.com/barberimages2/barber/Screen+Shot+2019-05-11+at+10.30.12+PM.png" height = "400" width = "400" />

  -  Registration
  <img src="https://s3.us-east-2.amazonaws.com/gobarber-img/Screenshot_8.png" height = "500" width = "400" />
  
   - View to choose a specific Barber(User)
  <img src="https://s3.us-east-2.amazonaws.com/gobarber-img/2.png" height = "500" width = "400" />
  
   - Appointments dates and time.
   <img src="https://s3.us-east-2.amazonaws.com/gobarber-img/Screenshot_5.png" height = "600" width = "400" />
  
   #### Screens of the service provider :
   
   - Principal Dashboard 
   <img src="https://s3.us-east-2.amazonaws.com/gobarber-img/Screenshot_9.png" height = "400" width = "400" /> 
   
   - Client of the day
   <img src="https://s3.us-east-2.amazonaws.com/gobarber-img/Screenshot_6.png" height = "400" width = "400" /> 
    
    
    
