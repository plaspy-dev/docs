---
slug: /tk_star/tk820/configuration
id: tk820-configuration
sidebar_label: Configuration
title: TK-Star - TK820 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK-Star TK820 tracker and Plaspy compatibility covering server settings, SMS commands, and setup workflow
keywords:
  - TK-Star TK820 configuration
  - TK820 Plaspy setup
  - TK820 server settings
  - TK820 SMS commands
  - TK820 GPRS setup
  - TK820 APN settings
  - TK820 GPS tracker configuration
  - Plaspy tracker configuration
  - TK820 tracking platform setup
  - TK820 installation guide
---

# TK-Star - TK820 Configuration

This page documents the public configuration context for using the TK-Star TK820 portable 4G GPS tracker with the Plaspy platform. It focuses on the practical server settings and setup workflow commonly required to get the device reporting location and alerts into Plaspy, and it references the public SMS commands provided by the manufacturer where applicable.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use the guidance here as a practical integration reference and confirm any device-specific steps with TK-Star documentation.

## Configuration Overview

The configuration process prepares the TK820 to communicate with Plaspy's collection endpoint so the device can send location updates, alerts, and status information. For the TK820 this generally means configuring the device APN and GPRS server target, establishing an upload interval, and switching the tracker into GPRS reporting mode using the manufacturer's configuration method.

- Configure the device network APN so it can use cellular data for GPRS reporting.
- Point the device to Plaspy's server endpoint and set the correct port used by the platform.
- Set an appropriate upload interval to balance reporting frequency and battery life.
- Enable GPRS reporting or switch the device to the proper reporting mode.
- Verify the tracker is visible in Plaspy and receiving location updates.
- Use the official TK-Star configuration method (SMS commands or vendor tool) as documented by the manufacturer.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the TK820 for reporting:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public endpoint details Plaspy provides for device integrations and should be set on the tracker via SMS commands or the manufacturer's configuration tool.

## Typical Requirements Before Setup

- A charged and powered TK820 with a working cellular SIM card that has data and/or SMS capability for configuration.
- The mobile network operator APN details for the installed SIM (APN, and optionally APN username and password).
- Access to the official TK-Star configuration method (SMS-based commands or vendor software) and the device password if required.
- A place to send and receive SMS commands or a manufacturer tool capable of changing server and GPRS settings.
- Basic inventory information for the device such as IMEI so you can confirm the device in Plaspy after setup.
- A test environment in Plaspy where you can validate that the tracker is reporting correctly.

## How This Tracker Connects to Plaspy

The TK820 is configured to report GPS and auxiliary positioning data to a single Plaspy server endpoint and port. Once GPRS is enabled and the GPRS server and APN are set on the device, the tracker will push periodic location updates to Plaspy where they are processed and displayed in the platform.

- The device sends periodic uploads to the Plaspy server endpoint at 54.85.159.138 on port 8888 (or by domain d.plaspy.com if configured by the device).
- The tracker uses either UDP or TCP transport depending on how the device is configured.
- Plaspy automatically detects the tracker protocol so the same port 8888 is used across supported devices.
- Uploaded data becomes available in Plaspy for real-time tracking, event alerts, and historical route playback.
- Movement and SOS events sent by the device are received by Plaspy and converted into alerts and notifications.

## Common Configuration Workflow

1. Access the official TK-Star configuration method or software as provided by the manufacturer (SMS commands or vendor tool).
2. Configure the device APN values using the carrier APN, and set APN username and password if required by the operator.
3. Enter the Plaspy server by using either d.plaspy.com or 54.85.159.138 as the server address and set port 8888.
4. Choose UDP or TCP on the device if a transport selection is required by the firmware.
5. Set a reporting/upload interval appropriate for your use case and save/apply the configuration.
6. Restart or cycle power on the device if the manufacturer recommends it for settings to take effect.
7. Validate in Plaspy that the device is reporting location and events to the server endpoint and verify the IMEI or device identifier.

## Example Configuration Commands

The TK820 supports SMS-based configuration. The public SMS commands below use the device password 123456 which is the factory default in manufacturer documentation. Replace placeholders and the password as needed per your device policy.

- Optional initial factory reset (use only when you need to restore defaults):
```sms
begin123456
```

- Set the operator APN (replace [apn] with the mobile operator APN):
```sms
apn123456 [apn]
```

- Set the APN username (if your carrier requires an APN username; replace [apnu]):
```sms
apnuser123456 [apnu]
```

- Set the APN password (if your carrier requires an APN password; replace [apnp]):
```sms
apnpasswd123456 [apnp]
```

- Set the GPRS server to Plaspy (this example uses Plaspy's public server IP and port):
```sms
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds (adjust value as needed):
```sms
upload123456 60
```

- Switch the tracker to GPRS reporting mode:
```sms
gprs123456
```

Notes on placeholders and password:
- [apn] is the mobile network APN string provided by the SIM operator.
- [apnu] is the APN username if required; [apnp] is the APN password if required.
- 123456 is the default device password shown in the public TK-Star commands; replace it if the device password has been changed.

Depending on the device firmware and regional variants, the TK820 may also accept server configuration via the domain d.plaspy.com instead of a numeric IP. Use the manufacturer tool or SMS syntax supported by your firmware to set the domain if available.

## Configuration Notes

- Firmware differences and hardware revisions can change the exact SMS syntax or available commands; always verify the exact SMS command format for your device firmware.
- The TK820 supports both UDP and TCP transport; choose the transport required by your environment, but remember Plaspy will accept either on port 8888 and auto-detect the protocol.
- SMS-based setup is convenient for field devices, but vendor configuration tools or provisioning software may be easier for bulk deployments.
- If you perform a factory reset during setup, treat that step as optional and only use it when necessary for recovery or initial provisioning.
- After configuring APN and server settings, allow a few minutes for the device to register on the network and begin GPRS uploads before troubleshooting.

## Why Use Plaspy with This Configuration

Using the TK-Star TK820 with Plaspy provides a straightforward path to real-time location, movement alerts, and historical route storage on a single platform. By configuring the TK820 to report to Plaspy's shared server endpoint and port, organizations gain consistent visibility into device location and event data that is consolidated in Plaspy dashboards and notifications.

To learn more about Plaspy and how it handles device telemetry and fleet monitoring, visit https://www.plaspy.com. For the latest device-specific command syntax, firmware behavior, and manufacturer configuration instructions, verify details on TK-Star's official site https://www.tk-star.com/ to ensure your setup reflects the most current manufacturer guidance.
