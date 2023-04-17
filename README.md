# SSO Code Generator

This Node.js module allows you to generate Single Sign-On (SSO) codes for a given contact ID, expiration time, and encryption key. The SSO code is a secure token that can be used to authenticate users without requiring them to enter their credentials each time they access a resource.

## Prerequisites
Before using project, you need to docker and docker-compose installed on your system.

1. Install Docker
Linux: In most Linux distributions, you can install Docker through their package manager. For example, in Ubuntu, you can run the following command in a terminal:

sudo apt-get install docker.io
Mac: You can download and install Docker Desktop from the official Docker website.

Windows: You can download and install Docker Desktop from the official Docker website.

2. Install Docker Compose
Linux: You can install Docker Compose through your Linux distribution's package manager. For example, in Ubuntu, you can run the following command in a terminal:

sudo apt-get install docker-compose
Mac: Docker Compose is already included in Docker Desktop for Mac, so you don't need to install it separately.

Windows: Docker Compose is already included in Docker Desktop for Windows, so you don't need to install it separately.

Once Docker and Docker Compose are installed, you can run Docker Compose commands from a terminal. Make sure you have a valid docker-compose.yml file in your working directory so that Docker Compose can create and run the containers you need for your application.


## Usage
To use this application, just run:
```javascript
docker-compose up -d
```
To remove the project:
```javascript
docker-compose down
```

Once the docker image is downloaded and the entire setup process is done, simply do the following:
1- Open a browser
2- And paste the following: 'http://localhost:3000/sso/?contactId=xxxxxxxxxxxx&daysToExpire=yy'

Where contactId in this case could be your organization id and daysToExpire any number of days for example the number 15

## Functions
This module exposes the following functions:

### `Important`
This program returns two different keys
- ´contextKeyForSupportTeam´ should be sent to support and must be added to license metadata.
- ´ssoToken´ It is the SSO key and should be save in a safe place.