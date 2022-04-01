# QuickPay 💚
Making transactions simple!

## Setup & Instalation
Make sure you have Node.js installed.
<pre>
git clone 'repo.git'
</pre>

###  Install all dependencies
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

### Users
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
__Response:__
```json
{
	"status_code": 201
}
```

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

### Retailers
__POST /api/v1/retailers__
```json
{
	"full_name": "Brian Craw",
	"cpf": "000000-03",
	"cnpj": "000000-0003",
	"email": "brianc@example.com",
	"password": "12345678"
}
```
__Response:__
```json
{
	"status_code": 201
}
```

__POST /api/v1/retailers/auth/login__
```json
{
	"email": "brianc@example.com",
	"password": "12345678"
}
```
__Response:__
```json
{
	"access_token": "JWT TOKEN"
}
```

### Transactions
__POST /api/v1/transactions__
```json
{
  "headers": {
		"Authorization": "Bearer token"
	}
}
```
__Request body:__
```json
{
	"amount": 200.00,
	"retailer_email": "brianc@example.com"
}
```
__Response:__
```json
{
	"status_code": 200
}
```