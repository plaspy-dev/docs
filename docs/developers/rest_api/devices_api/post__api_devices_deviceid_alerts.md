---
sidebar_label: POST /api/devices/{deviceId}/alerts
sidebar_position: 4
---
# POST /api/devices/\{deviceId\}/alerts
This endpoint allows you to submit alert data for a specific device in the satellite tracking application. It is useful for updating the system with new alert information for the device.

### Request Details

The request is made using the `POST` method at the `/api/devices/{deviceId}/alerts` URL. You must replace `{deviceId}` with the actual ID of the device you want to update.

### Request Parameters

This endpoint requires the `deviceId` parameter to be included in the URL path.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | The unique identifier of the device to update. |

### Request Body Parameters

The body of the request must include a JSON object with the alert data for the device.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| from | string | Yes | Start date and time of the alert, in ISO 8601 format. |
| to | string | Yes | End date and time of the alert, in ISO 8601 format. |
| alertName | string | No | Name of the alert to filter by. If omitted or null, all available alerts in the specified date range will be returned. See the **Available Alert Names** section below for valid values. |

### Available Alert Names

The `alertName` parameter accepts specific string values corresponding to different types of events tracked by the device. If this field is not provided, the API will return all of the device's alerts within the date range.

Valid alert names are:

| Alert Name | Description |
| --- | --- |
| `GPSOff` | GPS is turned off. |
| `GPSNoSignal` | GPS has lost signal. |
| `ForbiddenArea` | Device entered a forbidden area (geofence). |
| `AllowedArea` | Device exited or entered an allowed area. |
| `SOSButton` | The panic/SOS button was pressed. |
| `SpeedLimit` | The device exceeded the speed limit. |
| `NoMovementTime` | Device has been inactive/stopped for too long. |
| `Sensor1On` | Sensor 1 was activated. |
| `GPSUnplugged` | The device was disconnected from its main power source. |
| `Sensor1Off` | Sensor 1 was deactivated. |
| `TemperatureGreaterThan` | Temperature exceeded the maximum limit. |
| `TemperatureLowerThan` | Temperature dropped below the minimum limit. |
| `FuelJumpDown` | Sudden drop in fuel level (possible theft). |
| `FuelJumpUp` | Sudden increase in fuel level (refueling). |
| `FuelLessThan` | Fuel level is critically low. |
| `FutureDate` | The device sent a date in the future. |
| `PastDate` | The device sent a date from the past. |
| `Sensor2On` | Sensor 2 was activated. |
| `Sensor2Off` | Sensor 2 was deactivated. |
| `Sensor3On` | Sensor 3 was activated. |
| `Sensor3Off` | Sensor 3 was deactivated. |
| `Sensor4On` | Sensor 4 was activated. |
| `Sensor4Off` | Sensor 4 was deactivated. |
| `ExpiredDate` | The data has expired. |
| `Mileage` | Mileage alert triggered. |
| `Vibration` | Vibration detected. |
| `RPM` | RPM limit exceeded. |
| `CheckPoint` | A checkpoint was reached. |
| `CheckArea` | A check area was crossed. |
| `SpeedLower` | Speed dropped below a set limit. |
| `Offline` | Device went offline. |
| `LowBattery` | Device's internal battery is low. |
| `BatteryVoltage` | Main battery voltage is out of range. |
| `SleepMode` | Device entered sleep/power-saving mode. |
| `Temperature2LessThan` | Secondary temperature dropped below the minimum limit. |
| `Temperature2GreaterThan` | Secondary temperature exceeded the maximum limit. |
| `Route` | Route deviation detected. |
| `Sensor1Time` | Sensor 1 specific time threshold met. |
| `Sensor2Time` | Sensor 2 specific time threshold met. |
| `Sensor3Time` | Sensor 3 specific time threshold met. |
| `Sensor4Time` | Sensor 4 specific time threshold met. |
| `SensorAccumulated1Time` | Accumulated time on sensor 1 exceeded threshold. |
| `SensorAccumulated2Time` | Accumulated time on sensor 2 exceeded threshold. |
| `SensorAccumulated3Time` | Accumulated time on sensor 3 exceeded threshold. |
| `SensorAccumulated4Time` | Accumulated time on sensor 4 exceeded threshold. |
| `FuelJumpDown2` | Sudden drop in fuel level for secondary tank. |
| `FuelJumpUp2` | Sudden increase in fuel level for secondary tank. |
| `FuelLessThan2` | Fuel level is critically low for secondary tank. |
| `AttributeEquals` | Custom attribute equality condition met. |
| `AttributeLessThan` | Custom attribute less-than condition met. |
| `AttributeGreaterThan` | Custom attribute greater-than condition met. |
| `HarshBraking` | Harsh or sudden braking detected. |
| `HarshAcceleration` | Harsh or sudden acceleration detected. |
| `AuthenticationFailed` | Authentication of the device or driver failed. |
| `IdleTime` | Vehicle is idling for too long. |

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```
POST /api/devices/device123/alerts HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
Content-Type: application/json

{
 "from": "2024-06-01T00:00:00Z",
 "to": "2024-06-01T23:59:59Z",
 "alertName": "Speeding Alert"
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
| alerts | array | No | List of alert objects if the request was successful. Each object contains detailed information about the alert. |

Within the `alerts` field, the object has the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| dateTime | string | Yes | Date and time of the alert. |
| latitude | number | Yes | Latitude of the alert. |
| longitude | number | Yes | Longitude of the alert. |
| text | string | No | Descriptive text of the alert. |
| notifications | array | No | List of notifications. |
| alerts | array | No | List of associated alerts. |

### Example Successful Response

```
{
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

This endpoint is essential for updating the alert data of a device within the system. It allows users to submit detailed and up-to-date alert information for a specific device, ensuring accurate tracking and monitoring.
