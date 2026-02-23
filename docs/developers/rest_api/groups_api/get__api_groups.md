---
sidebar_position: 5
---
# GET /api/groups
This endpoint allows you to retrieve the list of available groups. It is useful for obtaining detailed information about each group, including its name, description, associated devices, and other relevant details. It is ideal for managing groups and verifying their data.

### Authentication Required

[Authentication required](../../../rest_api/developers/authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

## Example Request

```GET /api/groups HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
```

##   
Response Parameters

The response includes a list of groups along with specific details for each group.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | Yes | Indicates whether the request was successful. |
| error | string | No | Error message if the request failed. |
| apiUsage | integer | No | Total API usage at the time of the request. |
| apiDailyUsage | integer | No | Daily API usage at the time of the request. |
| groups | array | No | List of available groups. Each group contains the following fields: |
| groups.id | string | No | Unique identifier of the group. |
| groups.name | string | Yes | Name of the group. |
| groups.description | string | No | Description of the group. |
| groups.devices | array | No | List of IDs of devices associated with the group. |
| groups.creation | string | No | Date and time of group creation \(in ISO 8601 format\). |
| groups.lastModified | string | No | Date and time of the last modification of the group \(in ISO 8601 format\). |

##   
Example Successful Response

```{
  "success": true,
  "error": null,
  "apiUsage": 123,
  "apiDailyUsage": 45,
  "groups": [
    {
      "id": "grp-123",
      "name": "Group A",
      "description": "Description of Group A",
      "devices": ["dev-456", "dev-789"],
      "creation": "2023-01-01T12:00:00Z",
      "lastModified": "2023-01-10T12:00:00Z"
    },
    {
      "id": "grp-124",
      "name": "Group B",
      "description": "Description of Group B",
      "devices": ["dev-012", "dev-345"],
      "creation": "2023-02-01T12:00:00Z",
      "lastModified": "2023-02-10T12:00:00Z"
    }
  ]
}
```

##   
Example Error Response

```{
  "success": false,
  "error": "Unauthorized access",
  "apiUsage": 123,
  "apiDailyUsage": 45,
  "groups": null
}
```

This endpoint is essential for managing and viewing groups within the Plaspy application, allowing you to get a comprehensive and detailed view of each group and its associated devices.
