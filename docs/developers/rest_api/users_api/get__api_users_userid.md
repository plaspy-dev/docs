---
sidebar_label: GET /api/users/{userId}
sidebar_position: 15
---
# GET /api/users/\{userId\}
The **GET /api/users/\{userId\}** endpoint allows you to retrieve the details of a specific user registered in the system. It provides comprehensive information about the user, including name, email, country, time zone, and other important attributes. This endpoint is useful for user management, allowing system administrators to review and manage the data of a particular user.

This endpoint is especially beneficial for applications that need to display detailed user information or for administrators who need to verify or update a specific user's data.

### Request Details

**HTTP Method**: GET  
**URL**: `/api/users/{userId}`

### Request Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| userId | string | Yes | The unique identifier of the user. |

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```
GET /api/users/12345 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {your_auth_token}
```

### Response Parameters

The response from this endpoint contains a detailed structure of the user. The following table describes the fields in the response:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | No | Indicates whether the request was successful. |
| error | string | No | Contains the error message if `success` is `false`. |
| apiUsage | integer | No | Current API usage by the user. |
| apiDailyUsage | integer | No | Daily API usage by the user. |
| id | string | No | Unique identifier of the user. |
| name | string | Yes | Name of the user. |
| email | string | Yes | Email of the user. |
| country | string | Yes | Country of the user. |
| timeZone | string | Yes | Time zone of the user. |
| description | string | No | Additional description of the user. |
| message | string | No | Message associated with the user. |
| disabled | boolean | No | Indicates whether the user is disabled. |
| disabledMessage | string | No | Message describing why the user is disabled. |
| tags | object | No | Set of tags associated with the user. |
| privileges | array | No | List of user privileges. |
| group | string | No | Group to which the user belongs. |
| deviceId | string | No | Identifier of the user's device. |
| adminDevices | integer | No | Number of devices managed by the user. |
| from | string | No | Start date and time of the user's activity. |
| expires | string | No | Expiration date and time of the user. |
| password | string | No | User's password \(encrypted\). |
| creation | string | No | Date and time the user was created. |
| modification | string | No | Date and time of the user's last modification. |
| lastLogin | string | No | Date and time of the user's last login. |

### Example Successful Response

```
{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 15,
  "id": "usr-12345",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "country": "USA",
  "timeZone": "America/New_York",
  "description": "System Administrator",
  "message": null,
  "disabled": false,
  "disabledMessage": null,
  "tags": {
    "role": "admin"
  },
  "privileges": ["read", "write", "execute"],
  "group": "Admins",
  "deviceId": "dev-67890",
  "adminDevices": 5,
  "from": "2023-01-01T00:00:00Z",
  "expires": "2024-01-01T00:00:00Z",
  "password": null,
  "creation": "2023-01-01T00:00:00Z",
  "modification": "2023-06-01T00:00:00Z",
  "lastLogin": "2024-05-01T00:00:00Z"
}
```

### Example Error Response

```
{
  "success": false,
  "error": "User not found.",
  "apiUsage": 150,
  "apiDailyUsage": 15
}
```
