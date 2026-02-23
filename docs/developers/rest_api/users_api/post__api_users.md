---
sidebar_position: 12
---
# POST /api/users
The **POST /api/users** endpoint is used to create a new user in the system. This endpoint is essential for adding new users, allowing you to specify various attributes such as name, email, country, and time zone, along with optional details like description and tags. It ensures that the system's user base can be dynamically managed, enabling administrators to add new users as needed.

This endpoint is particularly useful for applications that require user registration functionality or for system administrators who need to create user accounts manually.

### Request Details

**HTTP Method**: POST  
**URL**: ```/api/users```

### Request Parameters

The request to this endpoint does not have URL parameters, but it requires a JSON body with user details.

### Request Body Parameters

The body of the request should be a JSON object with the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| name | string | Yes | The name of the user. |
| email | string | Yes | The email address of the user. |
| country | string | Yes | The country of the user. |
| timeZone | string | Yes | The time zone of the user. |
| description | string | No | A description of the user. |
| message | string | No | A message associated with the user. |
| disabled | boolean | No | Indicates whether the user is disabled. |
| disabledMessage | string | No | A message describing why the user is disabled. |
| tags | object | No | A set of tags associated with the user. |
| privileges | array | No | A list of privileges for the user. |
| group | string | No | The group to which the user belongs. |
| deviceId | string | No | The identifier of the user's device. |
| adminDevices | integer | No | The number of devices managed by the user. |
| from | string | No | The start date and time of the user's activity. |
| expires | string | No | The expiration date and time of the user. |
| password | string | No | The user's password \(must be encrypted\). |
| creation | string | No | The date and time the user was created. \(This field is typically system-generated.\) |
| modification | string | No | The date and time of the user's last modification. \(This field is typically system-generated.\) |
| lastLogin | string | No | The date and time of the user's last login. |

###   
Authentication Required

[Authentication required](../../../rest_api/developers/authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

###   
Example Request

```POST /api/users HTTP/1.1
Host: api.plaspy.com
Content-Type: application/json
Authorization: Bearer {your_auth_token}

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "country": "USA",
  "timeZone": "America/Los_Angeles",
  "description": "New user for the marketing department",
  "tags": {
    "role": "user",
    "department": "marketing"
  },
  "privileges": ["read", "write"],
  "group": "Marketing",
  "deviceId": "dev-12345",
  "adminDevices": 2,
  "from": "2023-01-01T00:00:00Z",
  "expires": "2024-01-01T00:00:00Z",
  "password": "P@ssw0rd123",
  "creation": "2023-01-01T00:00:00Z",
  "modification": "2023-06-01T00:00:00Z",
  "lastLogin": "2024-05-01T00:00:00Z"
}
```

###   
Response Parameters

The response from this endpoint includes the details of the created user or an error message if the request was not successful.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | No | Indicates whether the request was successful. |
| error | string | No | Contains the error message if ```success``` is ```false```. |
| apiUsage | integer | No | Current API usage by the user. |
| apiDailyUsage | integer | No | Daily API usage by the user. |
| id | string | No | Unique identifier of the created user. |
| name | string | Yes | Name of the created user. |
| email | string | Yes | Email of the created user. |
| country | string | Yes | Country of the created user. |
| timeZone | string | Yes | Time zone of the created user. |
| description | string | No | Description of the created user. |
| message | string | No | Message associated with the created user. |
| disabled | boolean | No | Indicates whether the created user is disabled. |
| disabledMessage | string | No | Message describing why the created user is disabled. |
| tags | object | No | Set of tags associated with the created user. |
| privileges | array | No | List of privileges of the created user. |
| group | string | No | Group to which the created user belongs. |
| deviceId | string | No | Identifier of the created user's device. |
| adminDevices | integer | No | Number of devices managed by the created user. |
| from | string | No | Start date and time of the created user's activity. |
| expires | string | No | Expiration date and time of the created user. |
| password | string | No | Password of the created user \(encrypted\). |
| creation | string | No | Date and time the created user was created. |
| modification | string | No | Date and time of the created user's last modification. |
| lastLogin | string | No | Date and time of the created user's last login. |

###   
Example Successful Response

```{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 15,
  "id": "usr-67890",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "country": "USA",
  "timeZone": "America/Los_Angeles",
  "description": "New user for the marketing department",
  "tags": {
    "role": "user",
    "department": "marketing"
  },
  "privileges": ["read", "write"],
  "group": "Marketing",
  "deviceId": "dev-12345",
  "adminDevices": 2,
  "from": "2023-01-01T00:00:00Z",
  "expires": "2024-01-01T00:00:00Z",
  "password": null,
  "creation": "2023-01-01T00:00:00Z",
  "modification": "2023-06-01T00:00:00Z",
  "lastLogin": null
}
```

###   
Example Error Response

```{
  "success": false,
  "error": "Invalid email address.",
  "apiUsage": 150,
  "apiDailyUsage": 15
}```
