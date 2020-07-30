# Helpper Test

- [Helpper Test](#Helpper-Test)
  - [Configuração](#Configuração)
  - [Executar Migrations](#Executar-Migrations)
  - [Iniciar o Docker](#Iniciar-o-Docker)
  - [Testes](#Executar-os-Testes)
  - [Collection Postman](#Collection-Postman)

## Configuração

Criar arquivo .env de acordo com .env.example

```
PORT=3333
NODE_ENV=development

POSTGRES_HOST=db
POSTGRES_USER=helpper
POSTGRES_PASSWORD=helpper-pass
POSTGRES_DATABASE=helpper

JWT_SECRET=c2345f957eba86267badc7fdeabf804f
EXPIRES_IN=30d
```

## Executar Migrations

Para executar as migrations dentro do container do Docker, utilize o comando:

```
$ yarn docker:yarn typeorm migration:run
```

## Iniciar o Docker

```shell
$ docker-compose up
```

## Executar os Testes

```shell
$ yarn test
```

OBS: não consegui finalizar os testes.

## Collection Postman

https://www.getpostman.com/collections/489baef529676f4c7307
