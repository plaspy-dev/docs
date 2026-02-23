---
sidebar_label: DELETE /api/users/{userId}
sidebar_position: 18
---
# DELETE /api/users/\{userId\}
The `DELETE /api/users/{userId}` endpoint allows for the removal of a specific user from the system. This method is useful for managing the deletion of users who should no longer have access or are no longer needed in the system. The user's identifier \(`userId`\) is included in the request URL.

### Request Details

- **HTTP Method:** `DELETE`
- **URL:** `/api/users/{userId}`
- **Authentication:** Requires a Bearer token.
- **Request Format:** Not applicable \(the request body is not used for this endpoint\).

### Request Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| userId | string | Yes | The unique identifier of the user to delete. |

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

#### Example Request

```
DELETE /api/users/usr-12345 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer your_auth_token
```


#### Response Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | No | Indicates if the operation was successful. |
| error | string | No | Error message if the operation was not successful. |
| apiUsage | integer | No | API usage for the current request. |
| apiDailyUsage | integer | No | Daily API usage. |

#### Example Successful Response

```
{
    "success": true,
    "apiUsage": 50,
    "apiDailyUsage": 200
}
```


#### Example Error Response

```
{
    "success": false,
    "error": "User not found",
    "apiUsage": 50,
    "apiDailyUsage": 200
}
```


This endpoint is essential for maintaining the system's cleanliness and security by allowing the removal of users who should no longer have access.
