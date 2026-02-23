---
sidebar_position: 6
---
# POST /api/groups
This endpoint allows you to create a new group within the system. It's essential for organizing devices and managing them efficiently by grouping them into logical units. Each group can have a unique name, description, and a list of associated devices.

## Request Details

To create a group, you need to send a POST request with the group details in the request body. Ensure the request is authorized with a valid token.

## Request Parameters

The request body must include the details of the group to be created.

### Request Body Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| name | string | Yes | The name of the group. Must be a non-empty string. |
| description | string | No | A description of the group. |
| devices | array | No | List of device IDs associated with the group. |

###   
Example Request Body

```{
  "name": "New Group",
  "description": "Description of the new group",
  "devices": ["dev-456", "dev-789"]
}
```

###   
Authentication Required

[Authentication required](../../../rest_api/developers/authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

##   
Example Request

```POST /api/groups HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
Content-Type: application/json

{
  "name": "New Group",
  "description": "Description of the new group",
  "devices": ["dev-456", "dev-789"]
}
```

##   
Response Parameters

The response includes details of the newly created group.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | Yes | Indicates whether the request was successful. |
| error | string | No | Error message if the request failed. |
| apiUsage | integer | No | Total API usage at the time of the request. |
| apiDailyUsage | integer | No | Daily API usage at the time of the request. |
| id | string | No | Unique identifier of the created group. |
| name | string | Yes | Name of the group. |
| description | string | No | Description of the group. |
| devices | array | No | List of IDs of devices associated with the group. |
| creation | string | No | Date and time of group creation \(in ISO 8601 format\). |
| lastModified | string | No | Date and time of the last modification of the group \(in ISO 8601 format\). |

##   
Example Successful Response

```{
  "success": true,
  "error": null,
  "apiUsage": 123,
  "apiDailyUsage": 45,
  "id": "grp-125",
  "name": "New Group",
  "description": "Description of the new group",
  "devices": ["dev-456", "dev-789"],
  "creation": "2023-06-01T12:00:00Z",
  "lastModified": "2023-06-01T12:00:00Z"
}
```

##   
Example Error Response

```{
  "success": false,
  "error": "Invalid input",
  "apiUsage": 123,
  "apiDailyUsage": 45
}
```

This endpoint is crucial for adding new groups to the Plaspy application, allowing for better organization and management of devices by grouping them into named and described units.
