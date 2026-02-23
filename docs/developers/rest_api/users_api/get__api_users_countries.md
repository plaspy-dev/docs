---
sidebar_position: 13
---
# GET /api/users/countries
The **GET /api/users/countries** endpoint allows you to retrieve a list of all countries registered in the system along with their two-digit ISO codes. This functionality is useful for populating dropdown lists or forms where a country selection is required, ensuring that the data remains consistent and up-to-date.

This endpoint is especially beneficial for applications that require geographical information, such as user profile creation, account settings, or any other functionality needing a list of countries.

### Request Details

**HTTP Method**: GET  
**URL**: ```/api/users/countries```

### Request Parameters

This endpoint does not require any parameters in the request.

### Authentication Required

[Authentication required](../../../rest_api/developers/authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```GET /api/users/countries HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {your_auth_token}
```

###   
Response Parameters

The response from this endpoint contains a structure that includes the status of the request and a list of countries. The following table describes the fields in the response:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | No | Indicates whether the request was successful. |
| error | string | No | Contains the error message if ```success``` is ```false```. |
| apiUsage | integer | No | Current API usage by the user. |
| apiDailyUsage | integer | No | Daily API usage by the user. |
| countries | object | No | An object with two-digit ISO codes and country names. |

###   
Example Successful Response

```{
  "success": true,
  "apiUsage": 100,
  "apiDailyUsage": 10,
  "countries": {
    "US": "United States",
    "CA": "Canada",
    "AR": "Argentina",
    "BR": "Brazil",
    "GB": "United Kingdom",
    "CO": "Colombia"
  }
}
```

###   
Example Error Response

```{
  "success": false,
  "error": "Authentication failed. Invalid token.",
  "apiUsage": 100,
  "apiDailyUsage": 10
}```
