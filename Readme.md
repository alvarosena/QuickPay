# QuickPay 💚
Making transactions simple!

## Setup & Instalation
Make sure you have Node.js installed.
<pre>
git clone 'repo.git'
</pre>

## Install all dependencies
<pre>yarn install</pre>

## Technologies
<pre>
 - Node
 - Typescript
 - PostgreSQL
 - Express
 - Prisma ORM
 - Heroku
</pre>

## API Reference
__POST /api/v1/users__
```json
{
	"full_name": "David",
	"cpf": "000000-01",
	"cnpj": "000000-0002",
	"email": "david@example.com",
	"password": "1234"
}
```
__Response: 201 Created!__

__POST /api/v1/users/auth/login__
```json
{
	"email": "david@example.com",
	"password": "1234"
}
```
__Response:__
```json
{
	"access_token": "JWT TOKEN"

}
```