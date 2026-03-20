---
slug: /eelink/tk116/configuration
id: tk116-configuration
sidebar_label: Configuration
title: EElink - TK116 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring EElink TK116 to send data to Plaspy servers
keywords:
  - EElink TK116 configuration
  - EElink TK116 setup
  - TK116 server configuration
  - TK116 Plaspy setup
  - EElink GPS tracker configuration
  - GPS tracker server setup
  - fleet tracking TK116
  - TK116 SMS commands
  - Plaspy device configuration
  - EElink tracker integration
---

# EElink - TK116 Configuration

This page covers the public configuration context for using the EElink TK116 GPS tracker with Plaspy. It consolidates the practical, publicly available setup steps and SMS commands that are commonly used when preparing the TK116 to report position and event data to Plaspy servers. Use this guide to understand the required server settings and a typical workflow before applying manufacturer tools or commands.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps may vary by firmware, hardware revision, installation type, and vendor tools. The TK116 supports SMS based configuration in common firmware builds and the modelConfiguration below shows a standard SMS command flow that is widely used to point the device at Plaspy servers.

## Configuration Overview

This configuration prepares the TK116 to communicate with Plaspy so that location, status, and alarm events are visible in the Plaspy platform. The process focuses on setting the APN, pointing the tracker to Plaspy server endpoints, configuring reporting intervals, and verifying settings.

- Configure the device APN so GPRS data can be used for reporting.
- Set the server endpoint to the Plaspy server domain or IP and the shared port used by Plaspy.
- Select transport (UDP or TCP) on the device if required by firmware.
- Set a reporting interval to control update frequency and battery usage.
- Verify active reporting with the PARAM verification command and confirm visibility in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

These are the public Plaspy endpoints and settings to enter on the TK116 or via SMS so the device can deliver telemetry to the Plaspy platform.

## Typical Requirements Before Setup

- Device powered with a stable external supply or charged internal battery.
- A valid 2G SIM card provisioned for data and SMS as required by the local operator.
- APN and optional APN username and password from the mobile operator.
- Access to the manufacturer's SMS command method or configuration tool for the TK116.
- The TK116 IMEI or serial number available for device registration in Plaspy.
- A Plaspy account or a point of contact who will confirm the device appears in the platform after configuration.

## How This Tracker Connects to Plaspy

When configured to use the Plaspy server settings, the TK116 sends its location and event messages over the mobile data network to the shared Plaspy server endpoint and port. Plaspy receives and parses the tracker protocol automatically so the device appears on the fleet map and reporting dashboards.

- Position updates and telemetry are transmitted to d.plaspy.com or 54.85.159.138 on port 8888.
- The tracker can use either UDP or TCP transport to reach the Plaspy port depending on the device option.
- Alarms and event reports such as ACC, crash, vibration, and SOS are forwarded to Plaspy for alerts.
- Plaspy provides real-time visibility, historical traces, and event logging once the device is reporting.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

## Common Configuration Workflow

1. Access the official EElink configuration method for the TK116 such as the SMS command interface or the manufacturer configuration tool.
2. Enter the APN details provided by the mobile operator using the APN command syntax.
3. Configure the GPRS server to point to d.plaspy.com or the Plaspy server IP 54.85.159.138 and set port 8888.
4. Choose UDP or TCP transport on the device if it requires an explicit transport selection.
5. Set the reporting interval (for example every 60 seconds) and any timezone or timer options needed.
6. Apply or save the configuration and restart the device if required by the device firmware.
7. Validate device reporting by sending the PARAM verification command and confirming the tracker appears in Plaspy.

If you use the SMS method shown below, apply the commands in the presented order and verify each step before moving to the next.

## Example Configuration Commands

The TK116 commonly accepts SMS commands for configuration. These public commands are shown in the typical order used to prepare a device for Plaspy. Commands are sent as plain SMS messages to the tracker SIM number.

- Optional factory reset (use only when required or as initial setup)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,{{apn}}#
```
- If the APN requires username and password include them as placeholders
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Explanation: {{apn}} is the APN name from your mobile operator. {{apnu}} is the APN username if required. {{apnp}} is the APN password if required.)

- Set the GPRS server to the Plaspy domain using port 8888
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to the Plaspy IP using port 8888
```text
SERVER,0,54.85.159.138,8888#
```

- Set the position update interval to 60 seconds
```text
TIMER,60#
```

- Check current parameters to verify settings
```text
PARAM#
```

Send these SMS commands to the TK116 in the order shown when performing initial setup. Confirm each command is accepted by the device before proceeding.

## Configuration Notes

- SMS based setup is commonly supported for the TK116, but some installers use the manufacturer tool or a USB/serial interface where available; follow the method appropriate to your hardware and firmware.
- Firmware versions and regional hardware variants may change available commands or exact command formats; consult EElink documentation for the firmware your device is running.
- Choose UDP or TCP based on local network reliability and any recommendations from your carrier; both are accepted by Plaspy on the shared port 8888.
- Plaspy uses the same port for all devices and automatically detects the tracker protocol, so use port 8888 in every device configuration.
- Preserve APN placeholders exactly and verify operator credentials before sending commands to avoid connectivity issues.

## Why Use Plaspy with This Configuration

Using the EElink TK116 with Plaspy gives organizations a practical path to real-time location visibility, event alerts, and operational reporting. When the tracker is correctly pointed to Plaspy servers and the APN and reporting interval are configured, fleet managers can rely on continuous telemetry and alarm delivery for monitoring, dispatch, and incident response.

Learn more about Plaspy and how it can be used with devices like the TK116 at https://www.plaspy.com. For device specific commands, firmware notes, and the latest configuration instructions verify details on the manufacturer site https://www.eelink.com.cn/ as methods and firmware behavior can change over time.
