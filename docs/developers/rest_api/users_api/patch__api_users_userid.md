---
sidebar_label: PATCH /api/users/{userId}
sidebar_position: 17
---
# PATCH /api/users/\{userId\}
The `PATCH /api/users/{userId}` endpoint allows for partially updating the information of a specific user. This method is useful when only a few fields need to be modified without sending all the user data. The user's identifier \(`userId`\) is included in the request URL.

### Request Details

- **HTTP Method:** `PATCH`
- **URL:** `/api/users/{userId}`
- **Authentication:** Requires a Bearer token.
- **Request Format:** JSON

### Request Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| userId | string | Yes | The unique identifier of the user to be updated. |

#### Request Body Parameters

The request body must contain an array of patch operations to indicate the modifications to be made.

#### Request Body

Each patch operation in the request body must follow the format defined in the JSON Patch specification. A patch operation includes the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| op | string | Yes | The operation to be performed, can be `add`, `remove`, `replace`, `move`, `copy`, or `test`. |
| path | string | Yes | The path to the field to be modified, following JSON Pointer syntax. |
| value | object | No | The new value for the field specified in `path` \(required for `add` and `replace`\). |

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

#### Example Request

```
PATCH /api/users/usr-12345 HTTP/1.1
Host: www.plaspy.com
Authorization: Bearer tu_token_de_autenticacion
Content-Type: application/json

[
    {
        "op": "replace",
        "path": "/email",
        "value": "nuevo_email@example.com"
    },
    {
        "op": "add",
        "path": "/tags",
        "value": { "vip": "true" }
    }
]
```

#### Response Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | No | Indicates if the operation was successful. |
| error | string | No | Error message if the operation was not successful. |
| apiUsage | integer | No | API usage for the current request. |
| apiDailyUsage | integer | No | Daily API usage. |
| id | string | No | Identifier of the updated user. |
| name | string | No | Name of the user. |
| email | string | No | Email of the user. |
| country | string | No | Country of the user. |
| timeZone | string | No | Time zone of the user. |
| description | string | No | Description of the user. |
| message | string | No | Message associated with the user. |
| disabled | boolean | No | Indicates if the user is disabled. |
| tags | object | No | Tags associated with the user. |
| privileges | array | No | Privileges of the user. |
| group | string | No | Group to which the user belongs. |
| deviceId | string | No | Identifier of the device associated with the user. |
| adminDevices | integer | No | Number of devices managed by the user. |
| from | string | No | Start date of the user's validity. |
| expires | string | No | Expiration date of the user's validity. |
| password | string | No | Password of the user. |
| creation | string | No | Date the user was created. |
| modification | string | No | Date the user was last modified. |
| lastLogin | string | No | Date of the user's last login. |

#### Example Successful Response

```
{
    "success": true,
    "id": "usr-12345",
    "name": "Juan Perez",
    "email": "new_email@example.com",
    "country": "Colombia",
    "timeZone": "America/Bogota",
    "description": "VIP User",
    "tags": {
        "vip": "true"
    },
    "privileges": ["read", "write"],
    "group": "administrators",
    "deviceId": "dev-67890",
    "adminDevices": 5,
    "from": "2023-01-01T00:00:00Z",
    "expires": "2024-01-01T00:00:00Z",
    "creation": "2022-01-01T00:00:00Z",
    "modification": "2023-06-01T00:00:00Z",
    "lastLogin": "2023-06-01T00:00:00Z"
}
```

#### Example Error Response

```
{
    "success": false,
    "error": "Invalid patch operation",
    "apiUsage": 25,
    "apiDailyUsage": 100
}
```

This endpoint facilitates updating specific data of a user, ensuring flexibility and efficiency in managing users within the Plaspy system.
