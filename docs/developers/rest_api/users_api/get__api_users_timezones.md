---
sidebar_label: GET /api/users/timeZones
sidebar_position: 14
---
# GET /api/users/timeZones
The **GET /api/users/timeZones** endpoint allows you to retrieve a list of all time zones registered in the system. This functionality is useful for populating dropdown lists or forms where a time zone selection is required, ensuring that the data remains consistent and up-to-date.

This endpoint is especially beneficial for applications that require time zone information, such as user profile creation, account settings, or any other functionality needing a list of time zones.

### Request Details

**HTTP Method**: GET 
**URL**: `/api/users/timeZones`

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```
GET /api/users/timeZones HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {your_auth_token}
```

### Response Parameters

The response from this endpoint contains a structure that includes the status of the request and a list of time zones. The following table describes the fields in the response:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | No | Indicates whether the request was successful. |
| error | string | No | Contains the error message if `success` is `false`. |
| apiUsage | integer | No | Current API usage by the user. |
| apiDailyUsage | integer | No | Daily API usage by the user. |
| timeZones | object | No | An object with time zones and their descriptions. |

### Example Successful Response

```
{
 "success": true,
 "apiUsage": 100,
 "apiDailyUsage": 10,
 "timeZones": {
 "America/New_York": "Eastern Standard Time",
 "America/Los_Angeles": "Pacific Standard Time",
 "Europe/London": "Greenwich Mean Time",
 "Asia/Tokyo": "Japan Standard Time",
 "Australia/Sydney": "Australian Eastern Standard Time"
 }
}
```

### Example Error Response

```
{
 "success": false,
 "error": "Authentication failed. Invalid token.",
 "apiUsage": 100,
 "apiDailyUsage": 10
}
```
