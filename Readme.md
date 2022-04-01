# QuickPay 💚
Making transactions simple!

## API Reference
<pre>
POST /api/v1/users
Payload:
{
	"full_name": "David",
	"cpf": "000000-01",
	"cnpj": "000000-0002",
	"email": "david@example.com",
	"password": "1234"
}

Response: 201 Created!
</pre>

<pre>
POST /api/v1/users/auth/login
Payload:
{
	"email": "david@example.com",
	"password": "1234"
}

Response:
{
  "acess_token": "JWT TOKEN"
}
</pre>