---
sidebar_label: GET /api/devices/{deviceId}/lastLocation
sidebar_position: 2
---
# GET /api/devices/\{deviceId\}/lastLocation
This endpoint allows you to retrieve the last known location of a specific device in the satellite tracking application. It is useful for tracking the most recent location of the device and obtaining details about this location.

### Request Details

The request is made using the `GET` method at the `/api/devices/{deviceId}/lastLocation` URL. You must replace `{deviceId}` with the actual ID of the device you want to query.

### Request Parameters

This endpoint requires the `deviceId` parameter to be included in the URL path.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | The unique identifier of the device to query. |

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```
GET /api/devices/device123/lastLocation HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
```

### Response Parameters

The response from this endpoint includes details about the success of the operation and, if successful, information about the last location of the requested device. The response may vary depending on whether the request was successful or if there was an error.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | Yes | Indicates whether the request was successful. |
| error | string | No | Error message in case the request fails. |
| apiUsage | integer | No | API usage in the current request. |
| apiDailyUsage | integer | No | Daily API usage. |
| lastLocation | object | No | Information about the last location of the device. |

Within the `lastLocation` field, the object has the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| dateTime | string | Yes | Date and time of the last location, in ISO 8601 format. |
| latitude | number | Yes | Latitude of the last location. |
| longitude | number | Yes | Longitude of the last location. |
| speed | number | No | Speed at the last location. |
| course | number | No | Course \(direction\) at the last location. |
| battery | integer | No | Battery level of the device at the last location. |
| fuel | integer | No | Fuel level of the device at the last location. |
| fuel2 | integer | No | Secondary fuel level at the last location. |
| temperature | number | No | Temperature measured at the last location. |
| temperature2 | number | No | Secondary temperature measured at the last location. |
| sensorTime1 | integer | No | Sensor 1 time at the last location. |
| sensorTime2 | integer | No | Sensor 2 time at the last location. |
| sensorTime3 | integer | No | Sensor 3 time at the last location. |
| sensorTime4 | integer | No | Sensor 4 time at the last location. |
| inactiveSeconds | integer | No | Inactive seconds at the last location. |
| rpm | integer | No | Revolutions per minute at the last location. |
| milleage | number | No | Mileage at the last location. |
| warningTexts | array | No | Warning texts at the last location. |
| alertTexts | array | No | Alert texts at the last location. |
| alerts | array | No | Alerts at the last location. |
| warnings | array | No | Warnings at the last location. |
| hasCriticalAlert | boolean | No | Indicates if there are critical alerts at the last location. |
| attributes | object | No | Additional attributes at the last location. |
| accessoriesAttributes | array | No | Additional attributes of accessories at the last location. |
| inputs | array | No | State of the inputs at the last location. |
| outputs | array | No | State of the outputs at the last location. |

### Example Successful Response

```
{
 "success": true,
 "apiUsage": 150,
 "apiDailyUsage": 3000,
 "lastLocation": {
 "dateTime": "2024-06-02T08:48:25.009Z",
 "latitude": 0,
 "longitude": 0,
 "speed": 0,
 "course": 0,
 "battery": 0,
 "fuel": 0,
 "fuel2": 0,
 "temperature": 0,
 "temperature2": 0,
 "sensorTime1": 0,
 "sensorTime2": 0,
 "sensorTime3": 0,
 "sensorTime4": 0,
 "inactiveSeconds": 0,
 "rpm": 0,
 "milleage": 0,
 "warningTexts": [
 "string"
 ],
 "alertTexts": [
 "string"
 ],
 "alerts": [
 "string"
 ],
 "warnings": [
 "string"
 ],
 "hasCriticalAlert": true,
 "attributes": {
 "additionalProp1": "string",
 "additionalProp2": "string",
 "additionalProp3": "string"
 },
 "accessoriesAttributes": [
 {
 "additionalProp1": "string",
 "additionalProp2": "string",
 "additionalProp3": "string"
 }
 ],
 "inputs": [
 true
 ],
 "outputs": [
 true
 ]
 }
}
```

### Example Error Response

#### Error 400 \(Bad Request\) Response

```
{
 "success": false,
 "error": "Bad Request",
 "apiUsage": 150,
 "apiDailyUsage": 3000
}
```

#### Error 500 \(Internal Server Error\) Response

```
{
 "success": false,
 "error": "Internal Server Error",
 "apiUsage": 150,
 "apiDailyUsage": 3000
}
```

This endpoint is essential for tracking the last known location of a device within the system. It allows users to obtain detailed and up-to-date information about the last recorded position of a specific device, including custom attributes and accessory data.
