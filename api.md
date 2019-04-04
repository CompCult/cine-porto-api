# Cine Porto API

### Resource: User
Recurso que suporta operações de manipulação e autenticação de usuários.

* [POST /users/auth](https://github.com/CompCult/cine-porto-api/blob/master/api.md#post-usersauth)
* [GET /users](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-users)
* [GET /users/:userId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-usersuserid)
* [POST /users](https://github.com/CompCult/cine-porto-api/blob/master/api.md#post-users)
* [PATCH /users/:userId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#patch-usersuserid)
* [DELETE /users/:userId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#delete-usersuserid)

#### POST /users/auth
Autentica um usuário e retorna seu token.

##### Example Request

```POST /users/auth```
```json
{
    "username": "usuario@email.com",
    "password": "abcd1234"
}
```

##### Success Response

_Status Code_: 200  
_Example Response_  
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiIxMjM0NTY3ODkwIiwib..."
}
```

##### Client Errors

* 401 - Usuário ou senha inválidos.

#### GET /users
Retorna uma lista contendo todos os usuários cadastrados no sistema.

##### Example Request

```GET /users```

##### Success Response

_Status Code:_ 200  
_Example Response_  
```json
[
    {
        "_id": "123",
        "name": "Daniel",
        "email": "daniel@email.com",
        "nationality": "brasileiro",
        "phone": "83912341234",
        "dateOfBirth": "1999-10-22"
    },
    {
        "_id": "456",
        "name": "Douglas",
        "email": "douglas@email.com",
        "nationality": "brasileiro",
        "phone": "83956875687",
        "dateOfBirth": "1987-02-27"
    }
]
```

#### GET /users/:userId
Retorna o usuário espicificado através do id.

##### Example Request

```GET /users/123```

##### Success Response

_Status Code:_ 200  
_Example Response_  
```json
{
    "_id": "123",
    "name": "Daniel",
    "email": "daniel@email.com",
    "nationality": "brasileiro",
    "phone": "83912341234",
    "dateOfBirth": "1999-10-22"
}
```

##### Client Errors

* 403 - O cliente não possui permissão;
* 404 - Usuário não existe.


#### POST /users
Cria um novo usuário no sistema.

##### Example Request

```POST /users```
```json
{
    "name": "Daniel",
    "email": "daniel@email.com",
    "password": "abcd1234",
    "nationality": "brasileiro",
    "phone": "83912341234",
    "dateOfBirth": "1999-10-22"
}
```

##### Success Response

_Status Code:_ 201  
_Example Response_  
```json
{
    "_id": "123",
    "name": "Daniel",
    "email": "daniel@email.com",
    "nationality": "brasileiro",
    "phone": "83912341234",
    "dateOfBirth": "1999-10-22"
}
```

##### Client Errors

* 400 - Campo inválido;
* 409 - Usuário já cadastrado.


#### PATCH /users/:userId
Atualiza os dados usuário especificado através do id.

##### Example Request

```PATCH /users/123```
```json
{
    "name": "Matias",
    "email": "matias@email.com",
}
```

##### Success Response

_Status Code:_ 200  
_Example Response_  
```json
{
    "_id": "123",
    "name": "Matias",
    "email": "matias@email.com",
    "nationality": "brasileiro",
    "phone": "83912341234",
    "dateOfBirth": "1999-10-22"
}
```

##### Client Errors

* 400 - Campo inválido;
* 403 - O cliente não possui permissão.

#### DELETE /users/:userId
Remove o usuário do sistema através do id.

##### Example Request

```DELETE /users/123```

##### Success Response

_Status Code:_ 200  
_Example Response_  
```json
{
    "_id": "123",
    "name": "Daniel",
    "email": "daniel@email.com",
    "nationality": "brasileiro",
    "phone": "83912341234",
    "dateOfBirth": "1999-10-22"
}
```

##### Client Errors

* 403 - O cliente não possui permissão;
* 404 - Usuário não existe.
