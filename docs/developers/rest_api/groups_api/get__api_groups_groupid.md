---
sidebar_label: GET /api/groups/{groupId}
sidebar_position: 7
---
# GET /api/groups/\{groupId\}
This endpoint allows you to retrieve the details of a specific group using its unique identifier \(`groupId`\). It is useful for obtaining detailed information about a group, including its name, description, associated devices, and other relevant details.

## Request Details

To get the details of a group, you must send a GET request with the group's identifier in the request path. Ensure the request is authorized with a valid token.

## Request Parameters

### Path Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| groupId | string | Yes | Unique identifier of the group to retrieve |

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```
GET /api/groups/grp-125 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
```

## Response Parameters

The response includes details of the specified group.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | Yes | Indicates whether the request was successful. |
| error | string | No | Error message if the request failed. |
| apiUsage | integer | No | Total API usage at the time of the request. |
| apiDailyUsage | integer | No | Daily API usage at the time of the request. |
| id | string | No | Unique identifier of the group. |
| name | string | Yes | Name of the group. |
| description | string | No | Description of the group. |
| devices | array | No | List of IDs of devices associated with the group. |
| creation | string | No | Date and time of group creation \(in ISO 8601 format\). |
| lastModified | string | No | Date and time of the last modification of the group \(in ISO 8601 format\). |

## Example Successful Response

```
{
 "success": true,
 "error": null,
 "apiUsage": 123,
 "apiDailyUsage": 45,
 "id": "grp-125",
 "name": "Example Group",
 "description": "Description of the example group",
 "devices": ["dev-123", "dev-456"],
 "creation": "2023-01-01T12:00:00Z",
 "lastModified": "2023-06-01T12:00:00Z"
}
```

## Example Error Response

```
{
 "success": false,
 "error": "Group not found",
 "apiUsage": 123,
 "apiDailyUsage": 45
}
```

This endpoint is essential for obtaining detailed and specific information about a group in the application, allowing users to view and manage the details of a specific group.
