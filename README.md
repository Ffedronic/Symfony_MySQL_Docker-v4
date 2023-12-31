# Symfony MySQL Docker Project

This project provide a dockerized environment for Symfony 6.1 with MySQL 8.0.19.
This project contains a reservation application example. It checks the conformity of input data, informs the customer about the availability of the reservation, and prompts the customer to confirm their booking through a final form.
This project is the culmination of an exercise and is not intended for commercial or production use. We are not responsible for any incidents you may encounter if you use it for commercial or production purposes.

## Requirements

## Docker

```bash
sudo apt intall docker.io
sudo usermod -aG docker $USER
docker -v
```

**Reload the session to apply the changes.**

## Docker Compose

```bash
sudo apt install docker-compose
docker-compose -v
```

## Installation

Installation steps:

1. Clone this repository
2. Go to the directory `cd Symfony_MySQL_Docker-v4`
3. Run `docker-compose up -d`
4. Run `docker exec -it  www_symfony bash` to enter in the container *www_symfony*
5. Run `composer install`
6. Run `npm install`
7. To create the database, in order, run:
`php bin/console doctrine:database:create`
`php bin/console make:migration`
`php bin/console doctrine:migrations:migrate`
`php bin/console doctrine:fixtures:load`
8. Run `npm run watch` to compile the code and thereafter access the application following the links below.

## Usage

You can now access with your browser to:

- [your Symfony web application](http://localhost:8741).
- [phpmyadmin](http://localhost:8080).
- [mail](http://localhost:8081).

## Stop the system

```bash
docker stop {phpmyadmin_symfony,www_symfony,maildev_symfony,db_symfony}
```
