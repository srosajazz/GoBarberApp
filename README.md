# GOBARBER APP
- App created with NodeJs

   The learning was on the basis of routes, how they work and using nunjucks to render the views.
  
  - Step-by-step process of authentication and user creation, through the use of Sequelize.
  -Configured in a PostgresSQL database, using a Docker virtual machine.
  
  ### HOW TO USE:
   THE USE OF [YARN] (https://yarnpkg.com/en/) is HIGHLY RECOMMENDED
 
 
   - First you will need to have docker installed on your machine: https://www.docker.com/get-started.
   - Create an account on the docker website, and once installed, log in to this account.
   - Install the DB, through the terminal using `docker run --name database -p 5432: 5432 -d -t kartoza / postgis`.
   - Create a database with the name "gonodemodulo2".
   - In the project use `yarn install` to install all the dependencies of the project.
   - In addition, `npx sequelize db: migrate`, to create the database.
   - After, run `yarn start`.
