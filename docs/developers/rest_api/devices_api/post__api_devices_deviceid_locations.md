---
sidebar_label: POST /api/devices/{deviceId}/locations
sidebar_position: 3
---
# POST /api/devices/\{deviceId\}/locations
This endpoint allows you to submit location data for a specific device in the satellite tracking application. It is useful for updating the system with new location information for the device.

### Request Details

The request is made using the `POST` method at the `/api/devices/{deviceId}/locations` URL. You must replace `{deviceId}` with the actual ID of the device you want to update.

### Request Parameters

This endpoint requires the `deviceId` parameter to be included in the URL path.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | The unique identifier of the device to update. |

### Request Body Parameters

The body of the request must include a JSON object with the location data for the device.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| from | string | Yes | Start date and time of the location data, in ISO 8601 format. |
| to | string | Yes | End date and time of the location data, in ISO 8601 format. |
| location | object | Yes | The location data object. |

Within the `location` field, the object has the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| dateTime | string | Yes | Date and time of the location, in ISO 8601 format. |
| latitude | number | Yes | Latitude of the location. |
| longitude | number | Yes | Longitude of the location. |
| speed | number | No | Speed at the location. |
| course | number | No | Course \(direction\) at the location. |
| battery | integer | No | Battery level of the device at the location. |
| fuel | integer | No | Fuel level of the device at the location. |
| fuel2 | integer | No | Secondary fuel level at the location. |
| temperature | number | No | Temperature measured at the location. |
| temperature2 | number | No | Secondary temperature measured at the location. |
| sensorTime1 | integer | No | Sensor 1 time at the location. |
| sensorTime2 | integer | No | Sensor 2 time at the location. |
| sensorTime3 | integer | No | Sensor 3 time at the location. |
| sensorTime4 | integer | No | Sensor 4 time at the location. |
| inactiveSeconds | integer | No | Inactive seconds at the location. |
| rpm | integer | No | Revolutions per minute at the location. |
| milleage | number | No | Mileage at the location. |
| warningTexts | array | No | Warning texts at the location. |
| alertTexts | array | No | Alert texts at the location. |
| alerts | array | No | Alerts at the location. |
| warnings | array | No | Warnings at the location. |
| hasCriticalAlert | boolean | No | Indicates if there are critical alerts at the location. |
| attributes | object | No | Additional attributes at the location. |
| accessoriesAttributes | array | No | Additional attributes of accessories at the location. |
| inputs | array | No | State of the inputs at the location. |
| outputs | array | No | State of the outputs at the location. |

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```
POST /api/devices/device123/locations HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "from": "2024-06-01T00:00:00Z",
  "to": "2024-06-01T23:59:59Z",
  "location": {
    "dateTime": "2024-06-01T12:00:00Z",
    "latitude": 40.712776,
    "longitude": -74.005974,
    "speed": 60.5,
    "course": 180.0,
    "battery": 85,
    "fuel": 50,
    "fuel2": 50,
    "temperature": 22.5,
    "temperature2": 22.0,
    "sensorTime1": 1234567890,
    "sensorTime2": 1234567891,
    "sensorTime3": 1234567892,
    "sensorTime4": 1234567893,
    "inactiveSeconds": 120,
    "rpm": 3000,
    "milleage": 15000,
    "warningTexts": ["Engine Check"],
    "alertTexts": ["Speeding"],
    "alerts": ["High Speed"],
    "warnings": ["Low Fuel"],
    "hasCriticalAlert": true,
    "attributes": {
      "customAttribute1": "value1",
      "customAttribute2": "value2"
    },
    "accessoriesAttributes": [
      {
        "accessoryType": "sensor",
        "accessoryStatus": "active"
      }
    ],
    "inputs": [true, false, true],
    "outputs": [false, true]
  }
}
```

### Response Parameters

The response from this endpoint includes details about the success of the operation and any errors that may have occurred.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | Yes | Indicates whether the request was successful. |
| error | string | No | Error message in case the request fails. |
| apiUsage | integer | No | API usage in the current request. |
| apiDailyUsage | integer | No | Daily API usage. |
| locations | array | No | List of location objects if the request was successful. Each object contains detailed information about the location. |

### Example Successful Response

```
{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 3000,
  "locations": [
    {
      "dateTime": "2024-06-01T12:00:00Z",
      "latitude": 40.712776,
      "longitude": -74.005974,
      "speed": 60.5,
      "course": 180.0,
      "battery": 85,
      "fuel": 50,
      "fuel2": 50,
      "temperature": 22.5,
      "temperature2": 22.0,
      "sensorTime1": 1234567890,
      "sensorTime2": 1234567891,
      "sensorTime3": 1234567892,
      "sensorTime4": 1234567893,
      "inactiveSeconds": 120,
      "rpm": 3000,
      "milleage": 15000,
      "warningTexts": ["Engine Check"],
      "alertTexts": ["Speeding"],
      "alerts": ["High Speed"],
      "warnings": ["Low Fuel"],
      "hasCriticalAlert": true,
      "attributes": {
        "customAttribute1": "value1",
        "customAttribute2": "value2"
      },
      "accessoriesAttributes": [
        {
          "accessoryType": "sensor",
          "accessoryStatus": "active"
        }
      ],
      "inputs": [true, false, true],
      "outputs": [false, true]
    }
  ]
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

This endpoint is essential for updating the location data of a device within the Plaspy system. It allows users to submit detailed and up-to-date location information for a specific device, ensuring accurate tracking and monitoring.
