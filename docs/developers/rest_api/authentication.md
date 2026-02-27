---
sidebar_label: Authentication
sidebar_position: 4
---
# Authentication
To interact with the Plaspy REST API, you need to authenticate using an OAuth authentication scheme. The authentication process ensures that only authorized users can access the API resources. This document explains how to generate an authentication token \(JWT\) and how to use it to make requests to other API endpoints.

Authentication is a crucial step to ensure that only authorized users can access the Plaspy REST API. By following the mentioned steps, you can generate an authentication token and use it to interact with the various API endpoints securely and efficiently. For more details on other operations, refer to the [full Plaspy REST API documentation](https://app.plaspy.com/rest-api-docs).

## Authentication Endpoint

### Obtain the Authentication Token

The authentication token is obtained by making a POST request to the `/api/Auth/Token` endpoint. Below are the steps to make this request.

### Request Details

- **Endpoint:** `/api/Auth/Token`
- **Method:** `POST`
- **Header:** `Content-Type: application/json`
- **Base URL:** `https://api.plaspy.com`

### Request Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| userName | String | Yes | Your Plaspy username. |
| apiKey | String | Yes | Your API key provided by Plaspy. |

### Request Body

```
{
  "userName": "your_username",
  "apiKey": "your_api_key"
}
```

### Request Example

```
POST /api/Auth/Token HTTP/1.1Host: api.plaspy.comContent-Type: application/json
{
  "userName": "your_username",
  "apiKey": "your_api_key"
}
```

### Response Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| success | Boolean | Indicates if the request was successful \(`true` or `false`\). |
| token | String | The JWT authentication token. |
| expires | String | The token's expiration date and time. |
| error | String | Message explaining the cause of the error \(if applicable\). |

### Successful Response Example

```
{
  "success": true,
  "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...",
  "expires": "2025-12-31T23:59:59Z"
}
```

### Error Response Example

```
{
  "success": false,
  "error": "Invalid API key or username."
}
```

## Using the Authentication Token

Once the authentication token is obtained, it must be included in the `Authorization` header of all API requests. The header format is `Authorization: Bearer your_token`.

### Request Example with Token

```
GET /api/devices HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
```

## Error Handling

If the request to obtain the authentication token fails, the response will include an error message explaining the cause of the failure.

### Error Response Example

```
{
  "success": false,
  "error": "Invalid API key or username."
}
```

- **success:** Indicates that the request failed \(`false`\).
- **error:** Message explaining the cause of the error.

## Security Considerations

- **Token Protection:** Keep your authentication token secure and do not share it with unauthorized third parties.
- **Token Renewal:** The token has an expiration date \(`expires`\). Ensure to renew it before it expires to maintain continuous access to the API.
