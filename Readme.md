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
__BaseURL:__ https://quickpay-a.herokuapp.com/

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

__GET /api/v1/transactions__
```json
{
  "headers": {
		"Authorization": "Bearer token"
	}
}
```
__Response:__
```json
[
  {
    "id": "7ca48911-4414-4c25-99f5-0f46b8d24744",
    "amount": 200,
    "user_id": "c0425d54-d5a0-4338-ad90-33c4ccf13277",
    "retailer_id": "8c487219-cf19-4b4b-b69f-6b250e541f38"
  }
]
```
```json
{
	"status_code": 200
}
```