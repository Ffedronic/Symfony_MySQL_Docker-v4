Symfony MySQL Docker Project
============================

This project provide a dockerized environment for Symfony 6.1 with MySQL 8.0.19.

# Requirements

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
5. Run `cd /var/www/project; composer install`

## Usage

You can now access with your browser to:

- [your Symfony web application](http://localhost:8741).
- [phpmyadmin](http://localhost:8080).
- [mail](http://localhost:8081).

## Stop the system

```bash
docker stop {phpmyadmin_symfony,www_symfony,maildev_symfony,db_symfony}
```

