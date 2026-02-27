---
sidebar_label: DELETE /api/groups/{groupId}
sidebar_position: 10
---
# DELETE /api/groups/\{groupId\}
This endpoint allows you to delete an existing group from the system. It is essential for managing and organizing groups, allowing the removal of those that are no longer needed or were created by mistake.

## Request Details

To delete a group, you must send a DELETE request specifying the group's identifier \(`groupId`\) in the request path. Ensure the request is authorized with a valid token.

## Request Parameters

### Path Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| groupId | string | Yes | Unique identifier of the group to delete |

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```
DELETE /api/groups/grp-125 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
```

## Response Parameters

The response includes information about the result of the delete operation.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | Yes | Indicates whether the request was successful. |
| error | string | No | Error message if the request failed. |
| apiUsage | integer | No | Total API usage at the time of the request. |
| apiDailyUsage | integer | No | Daily API usage at the time of the request. |

## Example Successful Response

```
{
  "success": true,
  "error": null,
  "apiUsage": 123,
  "apiDailyUsage": 45
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

This endpoint is crucial for maintaining the organization and cleanliness of groups in the Plaspy application, allowing the removal of those that are no longer needed and ensuring that the information is always up-to-date and relevant.
