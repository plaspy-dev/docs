---
slug: /xexun/tk_101/configuration
id: tk_101-configuration
sidebar_label: Configuration
title: Xexun - TK-101 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Xexun TK-101 GPS tracker for use with Plaspy using SMS or GPRS server settings
keywords:
  - Xexun TK-101 configuration
  - Xexun TK-101 setup
  - TK-101 Plaspy
  - GPS tracker configuration
  - vehicle tracking setup
  - SMS configuration TK-101
  - GPRS tracker setup
  - Plaspy server configuration
  - Xexun GPS platform setup
  - TK-101 APN settings
---

# Xexun - TK-101 Configuration

This page covers the public configuration context for using the Xexun TK-101 tracker with Plaspy. It explains the shared server settings Plaspy requires and provides practical, manufacturer public commands and workflow guidance for bringing a TK-101 online so it can report to Plaspy for monitoring and tracking.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TK-101 supports SMS and GPRS configuration methods; this page uses the publicly available SMS command examples as the primary configuration method and shows how to point the device to Plaspy.

## Configuration Overview

The goal of configuration is to prepare the TK-101 to communicate reliably with the Plaspy platform so you can view location and event data. Using the device default password and SMS commands you can set APN values, enable GPRS mode, and point the tracker at Plaspy so it reports automatically.

- Set the mobile operator APN so the tracker can use GPRS data.
- Configure the tracker to report to the Plaspy server endpoint and port.
- Enable or verify GPRS reporting mode so the device sends location updates.
- Adjust the reporting interval to match operational needs for visibility and battery life.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

Configure the TK-101 to send data to the Plaspy server using the following public settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP when the device requires a selection
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These exact values are the public Plaspy settings to enter on the device or via SMS commands so the tracker can reach the platform.

## Typical Requirements Before Setup

- A charged and powered TK-101 unit ready for configuration.
- A SIM card with an active data plan or SMS capability and correct APN information from the mobile operator.
- Knowledge of the device password used for SMS configuration; the public example below uses the default password 123456.
- Access to the device SMS command interface or the official Xexun configuration software if available.
- Mobile network coverage for GPRS data so the tracker can connect to the Plaspy server.

## How This Tracker Connects to Plaspy

When configured, the TK-101 uses GSM GPRS to send location and event data to the shared Plaspy endpoint and port. Plaspy receives those reports and maps device data into the platform for monitoring and alerts.

- The tracker is pointed at the Plaspy server endpoint and port so GPRS data flows to Plaspy.
- Location updates are sent on the configured reporting interval so the device becomes visible in Plaspy.
- Alerts such as SOS, geofence, movement, and low battery can be forwarded to Plaspy when properly configured.
- If GPS signals are unavailable the tracker can provide the last known location, which remains visible on Plaspy.
- Plaspy detects the tracker protocol automatically and uses the shared port to accept device connections.

## Common Configuration Workflow

1. Access the official Xexun TK-101 configuration method, typically SMS commands or a vendor tool provided by the manufacturer.
2. Ensure the SIM card is installed and APN values are known, then enter the operator APN into the tracker.
3. Point the device to d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP if the device requires a transport selection for GPRS reporting.
5. Apply or save the configuration by sending the appropriate SMS commands or using the manufacturer tool.
6. Restart the device if required by the firmware or after the configuration change.
7. Validate that the device reports to Plaspy and appears in the platform with expected updates.

The workflow above reflects the public SMS command approach and the required Plaspy server settings that must be applied.

## Example Configuration Commands

The TK-101 can be configured via SMS using the device password. The public example below uses the sample default password 123456. Send each command as a separate SMS from an authorized phone number.

- Optional initial reset to factory defaults (use only if you need to restore defaults):
```text
begin123456
```

- Set the operator APN (replace [apn] with your operator APN string):
```text
apn123456 [apn]
```

- Set the APN username if required by your operator (replace [apnu] with the APN username). Send only if your APN requires a username:
```text
apnuser123456 [apnu]
```

- Set the APN password if required by your operator (replace [apnp] with the APN password). Send only if your APN requires a password:
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server to Plaspy using the public IP and port shown in this guide:
```text
adminip123456 54.85.159.138 8888
```
Note: Some firmware versions accept a domain instead of an IP. In the general workflow you may enter d.plaspy.com rather than the IP if your device accepts domain names.

- Enable or configure GPRS reporting mode:
```text
gprsmode123456
```

- Set the update interval to 60 seconds (this example sets a 60 second reporting interval):
```text
t060s***n123456
```
Explanation of placeholders:
- [apn] — your mobile operator APN string
- [apnu] — APN username if required by operator
- [apnp] — APN password if required by operator
Keep the device configuration password (123456 in examples) matching the tracker password. If your device uses a different password, use that password in the command text.

## Configuration Notes

- Firmware differences and hardware revisions can change the exact SMS command syntax or available commands; confirm commands for your firmware if behavior differs.
- The TK-101 supports SMS based configuration as shown; some installers may prefer manufacturer tools or configuration software when available.
- Choose UDP or TCP based on your operational needs; Plaspy accepts either and automatically detects the protocol on the shared port.
- If you use the adminip command with the IP address, it points the device directly to Plaspy. Some firmware variants accept a domain name instead.
- Preserve the device password when sending SMS commands and update it if required by your security policy.

## Why Use Plaspy with This Configuration

Using the Xexun TK-101 with Plaspy provides a straightforward path to get location and event reporting into a centralized platform. By configuring APN and GPRS server settings to point to Plaspy, organizations gain consistent visibility into asset position, movement events, and alerts delivered into Plaspy for monitoring and operational oversight.

To learn more about Plaspy and the services it provides visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest device instructions and command references on the official manufacturer site https://www.xexun.com/.
