---
slug: /condor/cm_311/configuration
id: cm_311-configuration
sidebar_label: Configuration
title: Condor - CM-311 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for the Condor CM-311 showing Plaspy server settings SMS commands and verification steps
keywords:
  - Condor CM-311 configuration
  - Condor CM-311 setup
  - CM-311 Plaspy configuration
  - Condor GPS tracker setup
  - CM-311 server settings
  - Pet GPS tracker configuration
  - Plaspy tracker setup
  - Condor CM-311 SMS commands
  - GPS tracker server configuration
  - Plaspy compatible trackers
---

# Condor - CM-311 Configuration

This page documents the public configuration context for using the Condor CM-311 tracker with Plaspy. It collects the practical server settings and the documented SMS commands that are commonly used to prepare a CM-311 for reporting to the Plaspy platform. Use this guide to understand what Plaspy expects and how the CM-311 can be set up to communicate with Plaspy servers.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device reports in. Exact manufacturer-side steps for configuring the CM-311 can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The example commands below reflect publicly available CM-311 SMS configuration patterns and should be validated against the device you have on hand.

## Configuration Overview

This configuration process prepares the CM-311 to send location updates and basic telemetry to the Plaspy platform so the device appears in your Plaspy account for live tracking and history playback.

- Configure the device APN so it can access the cellular data network used for GPRS reporting.
- Set the device identifier or alias so you can recognize the CM-311 instance in Plaspy.
- Point the tracker to the Plaspy server endpoint and port so reports are delivered to Plaspy.
- Adjust reporting interval and GPRS mode to match your tracking needs and battery expectations.
- Verify configuration using the device verification SMS to ensure the tracker is reaching Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy endpoint information to use when configuring the CM-311. Note that Plaspy uses the same port for all supported devices and will identify the protocol automatically.

## Typical Requirements Before Setup

- A charged and operational CM-311 with access to send and receive SMS messages
- An active cellular SIM with a configured APN for data access
- The device IMEI number available for aliasing or record keeping
- Access to the manufacturer configuration method such as SMS commands or vendor tool
- Basic knowledge of the device default password where required for configuration
- A Plaspy account ready to receive and display the device once it reports

## How This Tracker Connects to Plaspy

The CM-311 is configured to report location updates over the cellular network to the Plaspy server endpoint and port. Once configured, the tracker periodically opens a GPRS/TCP or GPRS/UDP session to the Plaspy server and sends position reports that the platform processes and displays.

- The device is set to send GPRS reports to d.plaspy.com or directly to 54.85.159.138 at port 8888
- You can choose UDP or TCP transport on the device where the tracker requires a transport selection
- Plaspy receives the incoming messages and automatically detects the tracker protocol
- Reports become visible in Plaspy for live tracking, route history, and basic telemetry monitoring
- Validation commands can be used to confirm the tracker is connecting to the Plaspy endpoint

## Common Configuration Workflow

1. Access the official Condor CM-311 configuration method, typically SMS commands as described by the manufacturer or vendor tool.
2. Configure the device APN using the operator APN values so it can use GPRS.
3. Enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138.
4. Set the server port to 8888.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration and restart the device if required by the tracker.
7. Validate that the device reports to Plaspy and appears in your Plaspy account or uses the provided verification SMS.

If you use the CM-311 SMS workflow below, follow the command order and substitute your APN and identifiers as needed.

## Example Configuration Commands

The CM-311 supports SMS-based configuration. The following example commands are taken from the publicly available CM-311 configuration pattern. The default device password shown in these examples is 0000. Send each line as an SMS to the device number (the device SIM). Preserve the placeholders and replace them with your actual values.

1. Set the operator APN (replace {{apn}} with your operator APN; include {{apnu}} and {{apnp}} only if your operator requires an APN username and password)
```text
APN,0000,{{apn}}
```
Or with username and password
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}
```

2. Set a 5 digit alias identifier for the device. Use the last 5 digits of the IMEI to create this alias. Replace <last5imei> with that value and include the trailing hash
```text
ALIAS,0000,<last5imei>#
```
Example explanation: if IMEI ends with 54321 then send
```text
ALIAS,0000,54321#
```

3. Set the timezone to UTC 0
```text
GMT,0000,-0#
```

4. Set the GPRS server to the Plaspy endpoint by IP with port and transport flags. This example uses the Plaspy server IP and port and selects UDP as the transport flag where required
```text
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
Notes on that line:
- 54.85.159.138 is the Plaspy server IP
- 8888 is the Plaspy port used for all devices
- The U here indicates UDP transport in this device syntax. Use a corresponding value for TCP if required by the device.

5. Set the position update interval to every 1 minute (device-specific interval units)
```text
INTERVALO,0000,M,6#
```

6. Enable GPRS mode
```text
GPRS,0000,A#
```

7. Verify the connection and settings with the device verification command
```text
CONEXION,0000#
```

Important:
- The numeric password 0000 in the examples is the device default password shown in the public configuration content. If the device password has been changed, use the current password.
- Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your operator values. Use <last5imei> as described when setting the alias.

## Configuration Notes

- The CM-311 examples above use SMS commands as provided in the public model configuration. SMS based setup is a common method for this device family.
- Choose UDP or TCP transport based on the device syntax and network conditions. Plaspy accepts either transport on port 8888 and will automatically detect protocol details.
- Firmware and regional variations may change exact SMS command syntax or available fields. Always confirm command syntax against the device version you have.
- All devices in Plaspy use the same port and Plaspy will automatically detect the tracker protocol when the device reports in.
- Confirm APN credentials with your SIM operator; some carriers require username and password and others accept only the APN string.

## Why Use Plaspy with This Configuration

Using the CM-311 with Plaspy lets pet owners and caretakers gain consistent, cloud-based visibility into location updates and route history. The CM-311’s compact design and cellular reporting combine with Plaspy’s shared server infrastructure so individual devices appear in the same telemetry and monitoring framework that supports larger-scale tracking deployments.

To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the latest, device specific commands, firmware notes, and any manufacturer changes, verify configuration steps on the official Condor documentation at https://condorskyseeker.com/ as manufacturer setup methods and firmware behavior can change over time.
