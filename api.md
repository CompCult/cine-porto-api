# Cine Porto API

## Resource: User
Recurso que suporta operações de gerenciamento (CRUD) e autenticação de usuários.

#### GET /users
Retorna uma lista contendo todos os usuários cadastrados no sistema.

##### Data example

```json
{
    "username": "usuario@email.com",
    "password": "abcd1234"
}
```
##### Success Response

**Code** 200
**Content example**
```json
[
    {
        "name": "Daniel",
        "email": "daniel@email.com",
        "nationality": "brasileiro",
        "phone": "83912341234",
        "dateOfBirth": "1999-10-22"
    },
    {
        "name": "Douglas",
        "email": "douglas@email.com",
        "nationality": "brasileiro",
        "phone": "83956875687",
        "dateOfBirth": "1987-02-27"
    }
]
```

#### GET /users/:userId
#### POST /users
#### PUT /users/:userId
#### DELETE /users/:userId
#### POST /users/auth
