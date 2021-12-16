# Notes App using React, Django and Astra DB

A simple Notes App running on Astra DB that levarages django-cassandra-engine

## Objectives
* To build a simple Notes App
* Leverage [django-cassandra-engine](https://github.com/r4fek/django-cassandra-engine) and DataStax Astra DB
  
## How this works
We're using Create-React-App and Django-app to build the Notes App

## Get Started
To build and play with this app, follow the build instructions that are located here: [https://github.com/disha257/django-react-app#readme](https://github.com/disha257/django-react-app#readme).

<!--- STARTEXCLUDE --->
## Running Astra DB Notes App
Follow the instructions below to get started.

## Prerequisites
Let's do some initial setup by creating a serverless(!) database.

### DataStax Astra
1. Create a [DataStax Astra account](https://dtsx.io/2WMxoBQ) if you don't already have one:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-register-basic-auth.png)

2. On the home page. Locate the button **`Create Database`**
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-dashboard.png)

3. Locate the **`Get Started`** button to continue
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-select-plan.png)

4. Define a **database name**, **keyspace name** and select a database **region**, then click **create database**.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-create-db.png)

5. Your Astra DB will be ready when the status will change from *`Pending`* to **`Active`** 💥💥💥 
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-active.png)

6. After your database is provisioned, we need to generate an Application Token for our App. Go to the `Settings` tab in the database home screen.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings.png)

1. Select `Admin User` for the role for this Sample App and then generate the token. Download the CSV so that we can use the credentials we need later.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings-token.png)

1. After you have your Application Token, head to the database connect screen and copy the connection information that we'll need later. We'll replace `ASTRA_DB_APPLICATION_TOKEN` with the `Token` value that is part of your Application Token.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-connect.png)

1. After you have your Application Token, head to the database connect screen and select the driver connection that we need. Go ahead and download the `Secure Connect Bundle` for the driver.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-connect-bundle.png)

### Github
1. Click `Use this template` at the top of the [GitHub Repository](https://github.com/disha257/django-react-app):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-use-template.png)

2. Enter a repository name and click 'Create repository from template':
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-create-repository.png)

3. Clone the repository:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-clone.png)


## 🚀 Getting Started Paths:
*Make sure you've completed the [prerequisites](#prerequisites) before starting this step*
  - [Running on your local machine](#running-on-your-local-machine)

### Running on your local machine
1. Create a `.env` file and fill it with values from the `.env.sample` file.

2. Make sure the package dependencies are installed
```sh
# install dependencies
npm install
```
3. Then, start the app on your local host
```sh
npm start
```
4. Install the cassandra engine
```sh
pip3 install django-cassandra-engine
```
5. To start the django rest framework
```sh
python3 manage.py runserver
```
<!--- ENDEXCLUDE --->

