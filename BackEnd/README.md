# API Documentation

## POST `/user/register`

Registers a new user in the system.

### Endpoint

```
POST /user/register
```

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 8 chars, required)"
}
```

#### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword123"
}
```

### Responses

- **201 Created**
  - User registered successfully.
  - Returns: `{ "token": "jwt_token", "user": { ...userData } }`

- **400 Bad Request**
  - Validation failed (missing/invalid fields).
  - Returns: `{ "errors": [ ... ] }`

### Notes

- `firstname`, `email`, and `password` are required fields.
- `lastname` is optional but must be at least 3 characters if provided.
- The password must be at least 8 characters long.
- The email must be unique and valid.

---