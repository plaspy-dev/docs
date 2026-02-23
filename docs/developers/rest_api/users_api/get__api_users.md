---
sidebar_position: 11
---
# GET /api/users
The **GET /api/users** endpoint allows you to retrieve a list of all users registered in the system. This endpoint is useful for managing and viewing user information, including details such as name, email, country, and other important attributes. The response includes complete details about each user, enabling efficient management and integration of these data with other applications or systems.

This endpoint is particularly useful for system administrators who need to review and manage users, whether for audits, verifications, or data updates. It can also be used in applications where user information needs to be displayed on a frontend.

### Request Details

**HTTP Method**: GET  
**URL**: ```/api/users```

### Authentication Required

[Authentication required](../../../rest_api/developers/authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```GET /api/users HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {your_auth_token}
```

###   
Response Parameters

The response from this endpoint contains a detailed structure of the users. The following table describes the fields in the response:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | No | Indicates whether the request was successful. |
| error | string | No | Contains the error message if ```success``` is ```false```. |
| apiUsage | integer | No | Current API usage by the user. |
| apiDailyUsage | integer | No | Daily API usage by the user. |
| users | array | No | List of user objects. |
| users.id | string | No | Unique identifier of the user. |
| users.name | string | Yes | Name of the user. |
| users.email | string | Yes | Email of the user. |
| users.country | string | Yes | Country of the user. |
| users.timeZone | string | Yes | Time zone of the user. |
| users.description | string | No | Additional description of the user. |
| users.message | string | No | Message associated with the user. |
| users.disabled | boolean | No | Indicates whether the user is disabled. |
| users.disabledMessage | string | No | Message describing why the user is disabled. |
| users.tags | object | No | Set of tags associated with the user. |
| users.privileges | array | No | List of user privileges. |
| users.group | string | No | Group to which the user belongs. |
| users.deviceId | string | No | Identifier of the user's device. |
| users.adminDevices | integer | No | Number of devices managed by the user. |
| users.from | string | No | Start date and time of the user's activity. |
| users.expires | string | No | Expiration date and time of the user. |
| users.password | string | No | User's password \(encrypted\). |
| users.creation | string | No | Date and time the user was created. |
| users.modification | string | No | Date and time of the user's last modification. |
| users.lastLogin | string | No | Date and time of the user's last login. |

###   
Example Successful Response

```{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 15,
  "users": [
    {
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
  ]
}
```

###   
Example Error Response

```{
  "success": false,
  "error": "Authentication failed. Invalid token.",
  "apiUsage": 150,
  "apiDailyUsage": 15
}```
