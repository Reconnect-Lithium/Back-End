# Reconnect Mobile App (Back-End)

&nbsp;

## 1. POST /register/user

Request:

- body:

```json
{
  "email": "anto@mail.com",
  "password": "antoanto",
  "username": "anto"
}
```

_Response (201 - Created)_

```json
{
  "id": 3,
  "email": "anto@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": string
}
```

&nbsp;

## 2. POST /register/owner

Request:

- body:
  name is for cafe name

```json
{
  "email": "ardi@mail.com",
  "password": "ardiardi",
  "username": "ardiardi",
  "longitude": 106.805534,
  "latitude": -6.272444,
  "name": "cafe hacktiv",
  "address": "hacktiv 8"
}
```

_Response (201 - Created)_

```json
{
  "id": 4,
  "email": "ardi@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": string
}
```

&nbsp;

## 3. POST /login

- body:

```json
{
  "email": "ardi@mail.com",
  "password": "ardiardi"
}
```

_Response (201 - Created)_

```json
{
  "access_token": string
}
```

_Response (400 - Bad Request)_

```json
{
  "message": string
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
