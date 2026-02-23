---
sidebar_label: GET /api/devices
sidebar_position: 0
---
# GET /api/devices
This endpoint allows you to retrieve a list of available devices in the satellite tracking application. It is useful for viewing all tracked devices and obtaining basic details about each one.

### Request Details

The request is made using the `GET` method at the `/api/devices` URL. No additional URL parameters are required to make this request.

### Authentication Required

[Authentication required](../authentication) to use the endpoint is via a Bearer token. This authentication method implies that each request must include an authorization header with a valid access token. This Bearer token acts as a credential that verifies the identity of the user or application making the request, ensuring that only authorized entities can modify the user's information. By requiring this type of authentication, the Plaspy system guarantees a high level of security and access control, protecting users' data against unauthorized access.

### Example Request

```
GET /api/devices HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
```


### Response Parameters

The response from this endpoint includes details about the success of the operation and, if successful, a list of devices. The response may vary depending on whether the request was successful or if there was an error.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| success | boolean | Yes | Indicates whether the request was successful. |
| error | string | No | Error message in case the request fails. |
| apiUsage | integer | No | API usage in the current request. |
| apiDailyUsage | integer | No | Daily API usage. |
| devices | array | No | List of devices. Each device is represented by an object with specific details. |

Within the `devices` field, each device has the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| id | string | No | Unique identifier of the device. |
| name | string | No | Name of the device. |
| description | string | No | Description of the device. |
| min \(Mobile Identity Number\) | string | No | Telephone number associated with the device. |
| tags | object | No | Tags associated with the device. |
| expires | string | No | Expiration date and time of the device, in ISO 8601 format. |

### Example Successful Response

```
{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 3000,
  "devices": [
    {
      "id": "device123",
      "name": "Device 1",
      "description": "Main tracking device",
      "min": "12345",
      "tags": {
        "tag1": "value1",
        "tag2": "value2"
      },
      "expires": "2024-12-31T23:59:59Z"
    },
    {
      "id": "device456",
      "name": "Device 2",
      "description": "Backup tracking device",
      "min": "67890",
      "tags": {
        "tagA": "valueA",
        "tagB": "valueB"
      },
      "expires": "2025-12-31T23:59:59Z"
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


This endpoint is crucial for managing and monitoring the devices tracked within the Plaspy system. It allows users to obtain detailed and up-to-date information about all devices under their control.
