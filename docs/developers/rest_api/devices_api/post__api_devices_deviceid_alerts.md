---
sidebar_position: 4
---
# POST /api/devices/{deviceId}/alerts
This endpoint allows you to submit alert data for a specific device in the satellite tracking application. It is useful for updating the system with new alert information for the device.

### Request Details

The request is made using the ```POST``` method at the ```/api/devices/{deviceId}/alerts``` URL. You must replace ```{deviceId}``` with the actual ID of the device you want to update.

### Request Parameters

This endpoint requires the ```deviceId``` parameter to be included in the URL path.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | The unique identifier of the device to update. |

###   
Request Body Parameters

The body of the request must include a JSON object with the alert data for the device.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| from | string | Yes | Start date and time of the alert, in ISO 8601 format. |
| to | string | Yes | End date and time of the alert, in ISO 8601 format. |
| alertName | string | No | Name of the alert. |

###   
Authentication Required

[Authentication required](../../../rest_api/developers/authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

###   
Example Request

```POST /api/devices/device123/alerts HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "from": "2024-06-01T00:00:00Z",
  "to": "2024-06-01T23:59:59Z",
  "alertName": "Speeding Alert"
}
```

###   
Response Parameters

The response from this endpoint includes details about the success of the operation and any errors that may have occurred.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | Yes | Indicates whether the request was successful. |
| error | string | No | Error message in case the request fails. |
| apiUsage | integer | No | API usage in the current request. |
| apiDailyUsage | integer | No | Daily API usage. |
| alerts | array | No | List of alert objects if the request was successful. Each object contains detailed information about the alert. |

Within the ```alerts``` field, the object has the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| dateTime | string | Yes | Date and time of the alert. |
| latitude | number | Yes | Latitude of the alert. |
| longitude | number | Yes | Longitude of the alert. |
| text | string | No | Descriptive text of the alert. |
| notifications | array | No | List of notifications. |
| alerts | array | No | List of associated alerts. |

###   
Example Successful Response

```{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 3000,
  "alerts": [
    {
      "dateTime": "2024-06-01T12:00:00Z",
      "latitude": 40.712776,
      "longitude": -74.005974,
      "text": "Speeding Alert",
      "notifications": ["Email", "SMS"],
      "alerts": ["High Speed"]
    }
  ]
}
```

###   
Example Error Response

#### Error 400 \(Bad Request\) Response

```{
  "success": false,
  "error": "Bad Request",
  "apiUsage": 150,
  "apiDailyUsage": 3000
}
```

####   
Error 500 \(Internal Server Error\) Response

```{
  "success": false,
  "error": "Internal Server Error",
  "apiUsage": 150,
  "apiDailyUsage": 3000
}
```

This endpoint is essential for updating the alert data of a device within the Plaspy system. It allows users to submit detailed and up-to-date alert information for a specific device, ensuring accurate tracking and monitoring.
