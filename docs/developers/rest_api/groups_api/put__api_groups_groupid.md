---
sidebar_label: PUT /api/groups/{groupId}
sidebar_position: 8
---
# PUT /api/groups/\{groupId\}
This endpoint allows you to update the details of an existing group. It is essential for keeping group information current, including its name, description, and associated devices. Updating a group may be necessary when there are changes in team structure or device organization.

## Request Details

To update a group, you must send a PUT request with the group's details in the request body. Ensure the request is authorized with a valid token and that the group's identifier \(`groupId`\) is correct.

## Request Parameters

### Path Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| groupId | string | Yes | Unique identifier of the group to update |

### Request Body Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| name | string | Yes | The name of the group. Must be a non-empty string. |
| description | string | No | A description of the group. |
| devices | array | No | List of device IDs associated with the group. |

### Example Request Body

```
{
  "name": "Updated Group",
  "description": "Updated description of the group",
  "devices": ["dev-123", "dev-456"]
}
```

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

## Example Request

```
PUT /api/groups/grp-125 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
Content-Type: application/json

{
  "name": "Updated Group",
  "description": "Updated description of the group",
  "devices": ["dev-123", "dev-456"]
}
```

## Response Parameters

The response includes details of the updated group.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | Yes | Indicates whether the request was successful. |
| error | string | No | Error message if the request failed. |
| apiUsage | integer | No | Total API usage at the time of the request. |
| apiDailyUsage | integer | No | Daily API usage at the time of the request. |
| id | string | No | Unique identifier of the updated group. |
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
  "name": "Updated Group",
  "description": "Updated description of the group",
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

This endpoint is essential for keeping group information in the Plaspy application up to date, allowing modifications to specific details of an existing group to reflect changes in organization or device allocation.
