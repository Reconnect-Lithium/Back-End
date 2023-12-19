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
  "access_token": string,
  "id": number,
  "role": string
}
```

&nbsp;

## 4. GET /cafe?longitude=number&latitude=number

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

_Response (200 - Created)_

```json
[
  {
    "id": 1,
    "description": String,
    "photo": String,
    "location": {
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG:4326"
        }
      },
      "type": "Point",
      "coordinates": [106.805234, -6.272244]
    },
    "name": "cafe 1",
    "address": "cafe 1",
    "UserId": 2,
    "createdAt": "2023-12-18T09:10:51.947Z",
    "updatedAt": "2023-12-18T09:10:51.947Z"
  },
  ...
]
```

&nbsp;

## 5. PATCH /cafe/change-photo/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body (FORM DATA):

```json
{
  "photo": String
}
```

_Response (200 - Updated)_

```json
{
  "message": string
}
```

&nbsp;

## 6. PATCH /cafe/description/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body:

```json
{
  "description": String
}
```

_Response (200 - Updated)_

```json
{
  "message": string
}
```

&nbsp;

## 7. PATCH /cafe/name/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body:

```json
{
  "name": String
}
```

_Response (200 - Updated)_

```json
{
  "message": string
}
```

&nbsp;

## 8. PATCH /cafe/address/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body:

```json
{
  "address": String
}
```

_Response (200 - Updated)_

```json
{
  "message": string
}
```

&nbsp;

## 9. POST /cafe/gallery/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body (FORM DATA):

```json
{
  "imgUrl": String
}
```

_Response (200 - Updated)_

```json
{
  "message": string
}
```

&nbsp;

## 10. DELETE /cafe/gallery/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

_Response (200 - Deleted)_

```json
{
  "message": string
}
```

&nbsp;

## 11. POST /occasion

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body (FORM DATA):

```json
{
  "startTime":"2023-12-16T05:43:33.437Z",
  "endTime":"2023-12-16T06:43:33.437Z",
  "photo": String,
  "eventName":String,
  "CategoryId":Number
}
```

_Response (200 - Created)_

```json
{
  "message": string
}
```

&nbsp;

## 12. PATCH /occasion/description/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body:

```json
{
  "description": String
}
```

_Response (200 - Updated)_

```json
{
  "message": string
}
```

&nbsp;

## 13. PATCH /occasion/eventName/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body:

```json
{
  "eventName": String
}
```

_Response (200 - Updated)_

```json
{
  "message": string
}
```

&nbsp;

## 14. PATCH /occasion/startTime/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body:

```json
{
  "startTime": String
}
```

_Response (200 - Updated)_

```json
{
  "message": string
}
```

&nbsp;

## 15. PATCH /occasion/endTime/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

- body:

```json
{
  "endTime": String
}
```

_Response (200 - Updated)_

```json
{
  "message": string
}
```

&nbsp;

## 16. GET /occasion?longitude=number&latitude=number&CategoryId=number

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

_Response (200 - Created)_

```json
[
  {
    "eventId": 1,
    "eventPhoto": String,
    "id": 1,
    "startTime": "2023-12-16T05:43:33.437Z",
    "endTime": "2023-12-16T05:43:33.437Z",
    "description": null,
    "photo": String,
    "eventName": "event buat 1",
    "CategoryId": 1,
    "CafeId": 1,
    "createdAt": "2023-12-18T09:10:51.947Z",
    "updatedAt": "2023-12-18T09:10:51.947Z",
    "location": {
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG:4326"
        }
      },
      "type": "Point",
      "coordinates": [106.805234, -6.272244]
    },
    "name": "cafe 1",
    "address": "cafe 1",
    "UserId": 2,
    "categoryName": "music"
  },
  ...
]
```

&nbsp;

## 16. GET /occasion/:id

- Header:

```json
{
  "Authorization": "Bearer <JWT TOKEN>"
}
```

_Response (200 - Created)_

```json
{
  "id": 1,
  "startTime": "2023-12-16T05:43:33.437Z",
  "endTime": "2023-12-16T05:43:33.437Z",
  "description": null,
  "photo": String,
  "eventName": "event buat 1",
  "CategoryId": 1,
  "CafeId": 1,
  "createdAt": "2023-12-18T09:14:56.123Z",
  "updatedAt": "2023-12-18T09:14:56.123Z",
  "Cafe": {
    "id": 1,
    "description": null,
    "photo": String,
    "location": {
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG:4326"
        }
      },
      "type": "Point",
      "coordinates": [106.805234, -6.272244]
    },
    "name": "cafe 1",
    "address": "cafe 1",
    "UserId": 2,
    "createdAt": "2023-12-18T09:10:51.947Z",
    "updatedAt": "2023-12-18T09:10:51.947Z"
  },
  "Category": {
    "id": 1,
    "name": "music",
    "thumbnail": String,
    "createdAt": "2023-12-18T08:58:21.814Z",
    "updatedAt": "2023-12-18T08:58:21.814Z"
  }
}
```

&nbsp;

## Global Error

_Response (400 - Bad Request)_

```json
{
  "message": string
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbiden)_

```json
{
  "message": string
}
```

_Response (404 - Unauthorized)_

```json
{
  "message": String
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
