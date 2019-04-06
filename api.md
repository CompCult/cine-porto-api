# Cine Porto API

Documentação da API da aplicação Cine Porto.

### Table of Contents

-   [Authentication](https://github.com/CompCult/cine-porto-api/blob/master/api.md#authentication)
-   [User](https://github.com/CompCult/cine-porto-api/blob/master/api.md#resource-user)
    -   [GET /users](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-users)
    -   [GET /users/:userId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-usersuserid)
    -   [POST /users](https://github.com/CompCult/cine-porto-api/blob/master/api.md#post-users)
    -   [PATCH /users/:userId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#patch-usersuserid)
    -   [DELETE /users/:userId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#delete-usersuserid)
-   [Institution](https://github.com/CompCult/cine-porto-api/blob/master/api.md#resource-institution)
    -   [GET /institutions](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-institutions)
    -   [GET /institutions/:institutionId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-institutionsinstitutionid)
    -   [POST /institutions](https://github.com/CompCult/cine-porto-api/blob/master/api.md#post-institutions)
    -   [PATCH /institutions/:institutionId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#patch-institutionsinstitutionid)
    -   [DELETE /institutions/:institutionId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#delete-institutionsinstitutionid)

### Authentication

Autenticação de um usuário ou instituição.

##### Example Request

`POST /auth`

```json
{
    "email": "usuario@email.com",
    "password": "abcd1234"
}
```

##### Success Response

_Status Code_: 200  
_Example Response:_

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiIxMjM0NTY3ODkwIiwib..."
}
```

##### Client Errors

-   401 - Email ou senha inválidos.

### Resource: User

Recurso que suporta operações de manipulação e autenticação de usuários.

-   [GET /users](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-users)
-   [GET /users/:userId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-usersuserid)
-   [POST /users](https://github.com/CompCult/cine-porto-api/blob/master/api.md#post-users)
-   [PATCH /users/:userId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#patch-usersuserid)
-   [DELETE /users/:userId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#delete-usersuserid)

#### GET /users

Retorna uma lista contendo todos os usuários cadastrados no sistema.

##### Example Request

`GET /users`

##### Success Response

_Status Code:_ 200  
_Example Response:_

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

`GET /users/123`

##### Success Response

_Status Code:_ 200  
_Example Response:_

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

-   404 - Usuário não existe.

#### POST /users

Cria um novo usuário no sistema.

##### Example Request

`POST /users`

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
_Example Response:_

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

-   400 - Campo inválido;
-   409 - Usuário já cadastrado.

#### PATCH /users/:userId

Atualiza os dados usuário especificado através do id.

##### Example Request

`PATCH /users/123`

```json
{
    "name": "Matias",
    "email": "matias@email.com"
}
```

##### Success Response

_Status Code:_ 200  
_Example Response:_

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

-   400 - Campo inválido;
-   403 - O cliente não possui permissão.

#### DELETE /users/:userId

Remove o usuário do sistema através do id.

##### Example Request

`DELETE /users/123`

##### Success Response

_Status Code:_ 200  
_Example Response:_

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

-   403 - O cliente não possui permissão;
-   404 - Usuário não existe.

### Resource: Institution

Recurso que suporta operações de manipulação e autenticação de instituições.

-   [GET /institutions](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-institutions)
-   [GET /institutions/:institutionId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-institutionsinstitutionid)
-   [POST /institutions](https://github.com/CompCult/cine-porto-api/blob/master/api.md#post-institutions)
-   [PATCH /institutions/:institutionId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#patch-institutionsinstitutionid)
-   [DELETE /institutions/:institutionId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#delete-institutionsinstitutionid)

#### GET /institutions

Retorna uma lista contendo todas as instituições cadastradas no sistema.

##### Example Request

`GET /institutions`

##### Success Response

_Status Code:_ 200  
_Example Response:_

```json
[
    {
        "_id": "123",
        "name": "Instituição 1",
        "description": "breve descrição...",
        "email": "instituicao1@email.com",
        "sif": "123124343",
        "phone": "83912341234",
        "address": "Rua Tavares Campos 34 - Centro - Porto",
        "bankAccount": {
            "account": "123432-4",
            "bank": "12",
            "agency": "231-2"
        }
    },
    {
        "_id": "456",
        "name": "Instituição 2",
        "description": "breve descrição...",
        "email": "instituicao2@email.com",
        "sif": "4534645656",
        "phone": "83943214321",
        "address": "Rua Tavares Campos 34 - Centro - Porto",
        "bankAccount": {
            "account": "123432-4",
            "bank": "12",
            "agency": "231-2"
        }
    }
]
```

#### GET /institutions/:institutionId

Retorna a instituição espicificada através do id.

##### Example Request

`GET /institutions/123`

##### Success Response

_Status Code:_ 200  
_Example Response:_

```json
{
    "_id": "123",
    "name": "Instituição 1",
    "description": "breve descrição...",
    "email": "instituicao1@email.com",
    "sif": "123124343",
    "phone": "83912341234",
    "address": "Rua Tavares Campos 34 - Centro - Porto",
    "bankAccount": {
        "account": "123432-4",
        "bank": "12",
        "agency": "231-2"
    }
}
```

##### Client Errors

-   404 - Instituição não existe.

#### POST /institutions

Cria uma nova instituição no sistema.

##### Example Request

`POST /institutions`

```json
{
    "name": "Instituição 1",
    "description": "breve descrição...",
    "email": "instituicao1@email.com",
    "password": "abcd1234",
    "sif": "123456789",
    "phone": "83912341234",
    "address": "Rua Tavares Campos 34 - Centro - Porto",
    "bankAccount": {
        "account": "123432-4",
        "bank": "12",
        "agency": "231-2"
    }
}
```

##### Success Response

_Status Code:_ 201  
_Example Response:_

```json
{
    "_id": "123",
    "name": "Instituição 1",
    "description": "breve descrição...",
    "email": "instituicao1@email.com",
    "sif": "123456789",
    "phone": "83912341234",
    "address": "Rua Tavares Campos 34 - Centro - Porto",
    "bankAccount": {
        "account": "123432-4",
        "bank": "12",
        "agency": "231-2"
    }
}
```

##### Client Errors

-   400 - Campo inválido;
-   409 - Instituição já cadastrada.

#### PATCH /institutions/:institutionId

Atualiza os dados da instituição especificada através do id.

##### Example Request

`PATCH /institutions/123`

```json
{
    "name": "Instituição 3",
    "email": "instituicao3@email.com"
}
```

##### Success Response

_Status Code:_ 200  
_Example Response:_

```json
{
    "_id": "123",
    "name": "Instituição 3",
    "description": "breve descrição...",
    "email": "instituicao3@email.com",
    "sif": "123456789",
    "phone": "83912341234",
    "address": "Rua Tavares Campos 34 - Centro - Porto",
    "bankAccount": {
        "account": "123432-4",
        "bank": "12",
        "agency": "231-2"
    }
}
```

##### Client Errors

-   400 - Campo inválido;
-   403 - O cliente não possui permissão.

#### DELETE /institutions/:institutionId

Remove a instituição do sistema através do id.

##### Example Request

`DELETE /institutions/123`

##### Success Response

_Status Code:_ 200  
_Example Response:_

```json
{
    "_id": "123",
    "name": "Instituição 3",
    "description": "breve descrição...",
    "email": "instituicao3@email.com",
    "sif": "123456789",
    "phone": "83912341234",
    "address": "Rua Tavares Campos 34 - Centro - Porto",
    "bankAccount": {
        "account": "123432-4",
        "bank": "12",
        "agency": "231-2"
    }
}
```

##### Client Errors

-   403 - O cliente não possui permissão;
-   404 - Instituição não existe.

### Resource: Event

Recurso que suporta operações de manipulação e autenticação de eventos.

-   [GET /events](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-events)
-   [GET /events/:eventId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#get-eventseventid)
-   [POST /events](https://github.com/CompCult/cine-porto-api/blob/master/api.md#post-events)
-   [PATCH /events/:eventId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#patch-eventseventid)
-   [DELETE /events/:eventsId](https://github.com/CompCult/cine-porto-api/blob/master/api.md#delete-eventseventid)

#### GET /events

Retorna uma lista contendo todos eventos cadastrados no sistema.

##### Example Request

`GET /events`

##### Success Response

_Status Code:_ 200  
_Example Response:_

```json
[
    {
        "_id": "123",
        "title": "Meu evento",
        "description": "Descrição do meu evento",
        "photoUrl": "https://ex.com/photos/435...",
        "startDate": "2019-04-29T10:10",
        "endDate": "2019-04-30T12:30",
        "subscribers": [
            { "name": "Daniel", "photoUrl": "https://ex.com/photos/123..." },
            { "name": "Douglas", "photoUrl": "https://ex.com/photos/565..." }
        ],
        "maxNumberOfSubscribers": 22
    },
    {
        "_id": "456",
        "title": "Meu evento 2",
        "description": "Descrição do meu evento 2",
        "photoUrl": "https://ex.com/photos/487...",
        "startDate": "2019-04-15T10:10",
        "endDate": "",
        "subscribers": [],
        "maxNumberOfSubscribers": 10
    }
]
```

#### GET /events/:eventId

Retorna o evento com o id especificado.

##### Example Request

`GET /events/123`

##### Success Response

_Status Code:_ 200  
_Example Response:_

```json
{
	"_id": "123",
	"title": "Meu evento",
	"description": "Descrição do meu evento",
	"photoUrl": "https://ex.com/photos/435...",
	"startDate": "2019-04-29T10:10",
	"endDate": "2019-04-30T12:30",
	"subscribers": [
		{ "name": "Daniel", "photoUrl": "https://ex.com/photos/123..." },
		{ "name": "Douglas", "photoUrl": "https://ex.com/photos/565..." }
	],
	"maxNumberOfSubscribers": 22
}
```

##### Client Errors

-   404 - Evento não existe.

#### POST /events

Cria um novo evento no sistema.

##### Example Request

`POST /events`

```json
{
    "title": "Meu evento",
    "description": "Descrição do meu evento",
    "photo": "ASK4K53lkjr32id89ND897D89...",
    "startDate": "2019-04-29T10:10",
    "endDate": "2019-04-30T12:30",
    "maxNumberOfSubscribers": 22
}
```

##### Success Response

_Status Code:_ 201  
_Example Response:_

```json
{
    "_id": "123",
	"title": "Meu evento",
	"description": "Descrição do meu evento",
	"photoUrl": "https://ex.com/photos/435...",
	"startDate": "2019-04-29T10:10",
	"endDate": "2019-04-30T12:30",
	"subscribers": [],
	"maxNumberOfSubscribers": 22
}
```

##### Client Errors

-   400 - Campo inválido;
-   403 - O cliente não possui permissão.

#### PATCH /events/:eventId

Atualiza os dados do evento com o id especificado.

##### Example Request

`PATCH /events/123`

```json
{
    "description": "Descrição do meu evento corrigida",
    "endDate": "2019-05-01T12:30"
}
```

##### Success Response

_Status Code:_ 200  
_Example Response:_

```json
{
	"_id": "123",
	"title": "Meu evento",
	"description": "Descrição do meu evento corrigida",
	"photoUrl": "https://ex.com/photos/435...",
	"startDate": "2019-04-29T10:10",
	"endDate": "2019-05-01T12:30",
	"subscribers": [],
	"maxNumberOfSubscribers": 22
}
```

##### Client Errors

-   400 - Campo inválido;
-   403 - O cliente não possui permissão.

#### DELETE /events/:eventId

Remove o evento como o id especificado.

##### Example Request

`DELETE /events/123`

##### Success Response

_Status Code:_ 200  
_Example Response:_

```json
{
	"_id": "123",
	"title": "Meu evento",
	"description": "Descrição do meu evento corrigida",
	"photoUrl": "https://ex.com/photos/435...",
	"startDate": "2019-04-29T10:10",
	"endDate": "2019-05-01T12:30",
	"subscribers": [],
	"maxNumberOfSubscribers": 22
}
```

##### Client Errors

-   403 - O cliente não possui permissão;
-   404 - Instituição não existe.
