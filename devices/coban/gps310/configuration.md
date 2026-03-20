---
slug: /coban/gps310/configuration
id: gps310-configuration
sidebar_label: Configuration
title: Coban - GPS310 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Coban GPS310 for use with Plaspy including SMS commands and server settings
keywords:
  - Coban GPS310 configuration
  - Coban GPS310 setup
  - GPS310 server configuration
  - GPS310 Plaspy setup
  - Coban GPS tracker configuration
  - GPS tracker SMS configuration
  - GPRS tracker setup
  - vehicle tracking GPS310
  - GPS310 APN setup
  - GPS310 tracking platform
---

# Coban - GPS310 Configuration

This page covers the public configuration context for using the Coban GPS310 tracker with Plaspy. It brings together the server settings Plaspy requires and the common, publicly documented SMS commands used to prepare the device for reporting to our platform. Use this as a practical reference to point a GPS310 at Plaspy and verify basic connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for devices that report to the platform. Manufacturer-side setup steps can vary by firmware revision, hardware version, installation type, and vendor tools; the example SMS commands below reflect commonly published public commands for the GPS310 and should be validated against the device firmware in use.

## Configuration Overview

This configuration process prepares the GPS310 to send location and status data to Plaspy by setting network access parameters, the server endpoint, and the reporting frequency. The goal is to ensure the device can establish a GPRS connection and reliably reach the Plaspy endpoint so it appears in the platform.

- Configure the device APN and optional APN credentials so it can use the cellular network for GPRS data.
- Set the Plaspy server endpoint so the tracker sends telemetry to the platform.
- Adjust reporting interval settings so location updates meet your monitoring needs.
- Select transport mode (UDP or TCP) if required and ensure the device is set to the Plaspy port.
- Verify settings remotely using the tracker's check command and confirm the device reports to Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported on port 8888
- Plaspy automatically detects the tracker protocol when the device connects to the shared port

## Typical Requirements Before Setup

- A charged and operational Coban GPS310 with access to send and receive SMS for configuration
- A valid cellular SIM with data enabled and the correct APN for the network operator
- The device default password (commonly 123456 in published examples) or the password set by the installer
- Access to the manufacturer's SMS command list or configuration tool for the GPS310
- Basic knowledge of which transport to use (UDP or TCP) for your deployment and whether your SIM/APN allows the chosen transport

## How This Tracker Connects to Plaspy

When configured, the GPS310 uses the cellular network and GPRS service to open a data session and forward location and sensor messages to Plaspy. The device is pointed at the shared Plaspy endpoint and port so the platform can receive and interpret the incoming protocol automatically.

- Device sends GPRS connections to the Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888
- Tracker telemetry and event messages are delivered over UDP or TCP depending on device transport setting
- Plaspy automatically detects the protocol and associates the device with the appropriate parser
- Regular fix messages (configured by update interval commands) provide location updates in the platform
- Diagnostic or check commands can be used to confirm the device configuration and status before verification in Plaspy

## Common Configuration Workflow

1. Access the manufacturer configuration method for your GPS310 (SMS commands, vendor tool, or installer interface).
2. Enter d.plaspy.com or the IP address 54.85.159.138 as the GPRS server on the device.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Configure APN and optional APN credentials so the device can establish GPRS service.
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.
7. Validate the device reports to Plaspy by using the tracker check command and confirming visibility in the platform.

## Example Configuration Commands

The GPS310 is commonly configured via SMS commands. The following commands are taken from public device configuration examples. The sample commands use the device password 123456 as published. Replace placeholders and password values as appropriate for your device.

Note on placeholders:
- {{apn}} = your mobile operator APN string
- {{apnu}} = APN username if required by the operator
- {{apnp}} = APN password if required by the operator

1. Optional initial factory reset (use only when you need to reset device settings):
```
begin123456
```

2. Set the time zone to UTC+0:
```
time zone123456 0
```

3. Set the operator APN:
```
apn123456 {{apn}}
```

4. Set the APN username and password (if required by your carrier):
```
up123456 {{apnu}} {{apnp}}
```

5. Set the GPRS server to the Plaspy IP and port:
```
adminip123456 54.85.159.138 8888
```

6. Set the location update interval (example command as published; do not alter without understanding the command format):
```
fix060s060s***n123456
```

7. Switch to GPRS mode and choose transport (example variants published):
```
gprs123456,1,1
```
or simply:
```
gprs123456
```

8. Check current settings remotely:
```
check123456
```

9. Enable enhanced protocol or sensor reporting (example for fuel or digital sensors):
```
protocol123456 18
```

Use the check123456 command to verify settings after sending configuration messages. If your device uses a different password than 123456, replace 123456 with the device password in every command.

## Configuration Notes

- Firmware differences may change exact SMS syntax or available commands; confirm the command set for your GPS310 firmware.
- The GPS310 supports SMS-based configuration in public examples; some installers may prefer manufacturer software or a configuration cable where available.
- Choose UDP or TCP based on network reliability preferences; UDP is commonly used for lower overhead while TCP can provide delivery guarantees at the cost of connection overhead.
- Always verify the APN and credentials with the cellular provider before configuring the device.
- When possible, test configuration with one device before deploying at scale to confirm commands and behavior on your firmware revision.

## Why Use Plaspy with This Configuration

Using the Coban GPS310 configured to report to Plaspy gives organizations a straightforward path to centralized visibility and monitoring. With the device pointed at Plaspy's shared server endpoint and port, location updates and event messages become available in one platform where you can view, alert, and analyze vehicle or asset movement.

To learn more about Plaspy and how the platform handles device integrations, visit https://www.plaspy.com. For the latest device specific details, firmware notes, and full command references for the GPS310, verify the manufacturer documentation at https://www.coban.net/ since setup methods and firmware behavior can change over time.
