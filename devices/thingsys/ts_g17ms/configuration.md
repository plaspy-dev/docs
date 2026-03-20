---
slug: /thingsys/ts_g17ms/configuration
id: ts_g17ms-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17Ms Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ThingSys TS-G17Ms to connect with Plaspy using shared server settings and SMS or GPRS setup
keywords:
  - ThingSys TS-G17Ms configuration
  - ThingSys TS-G17Ms setup
  - TS-G17Ms Plaspy setup
  - TS-G17Ms server configuration
  - Plaspy GPS tracker setup
  - GPS tracker configuration ThingSys
  - vehicle tracking TS-G17Ms
  - GPRS tracker configuration
  - SMS tracker setup
  - fleet tracking Plaspy
---

# ThingSys - TS-G17Ms Configuration

This page provides the public configuration context for using the ThingSys TS-G17Ms tracker with Plaspy. It collects the practical, publicly available setup guidance you need to point the device to the Plaspy server and validate that the unit reports location and events to the platform. Where manufacturer-side SMS or GPRS commands are available in public documentation, those commands are presented below for reference.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this guide to prepare the TS-G17Ms for Plaspy, and always verify device-specific behavior with the official ThingSys documentation when needed.

## Configuration Overview

The configuration process prepares the TS-G17Ms to communicate reliably with Plaspy over GPRS or SMS and to surface location, alarm, and basic telemetry data in the Plaspy platform. Configuration typically includes APN setup for the installed SIM, setting the Plaspy server endpoint and port, and validating that the tracker reports correctly.

- Configure the tracker to report to the Plaspy server endpoint d.plaspy.com and the Plaspy server IP 54.85.159.138 on port 8888.
- Set the device APN, APN username, and APN password required by your mobile operator.
- Choose the transport type if the device requires a selection between UDP and TCP.
- Validate connectivity by checking the device status and confirming it appears in Plaspy.
- Optionally perform a factory reset or initial setup sequence before applying new settings when recommended.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for supported devices

## Typical Requirements Before Setup

- A valid SIM card with a data plan and SMS capability installed in the tracker and able to use the operator APN.
- A power source or vehicle connection to provide the required input voltage for the TS-G17Ms.
- Access to the ThingSys official configuration method such as SMS commands or vendor configuration tool.
- The device default password where applicable (the publicly provided default password in this guide is 123456).
- Knowledge of the operator APN, APN username, and APN password required for mobile data registration.
- Ability to send SMS commands from an authorized phone number if using SMS-based configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TS-G17Ms reports position and event data to the shared Plaspy server endpoint and port so fleet managers can view status, alarms, and location history. Plaspy ingests the tracker data and maps it to the correct device in the platform using its automatic protocol detection.

- The tracker is configured to send GPRS trace data to d.plaspy.com or 54.85.159.138 on port 8888.
- The device can also respond to SMS polling for on demand position requests when SMS is used.
- Alarms such as SOS, overspeed, vibration, and ACC status changes are sent and appear in Plaspy dashboards.
- Plaspy receives and processes telemetry and event messages, enabling operational monitoring and alerting.
- Choosing UDP or TCP transport affects how the tracker communicates; Plaspy supports both and auto detects the protocol.

## Common Configuration Workflow

1. Access the ThingSys official configuration method or software, such as SMS command interface or the vendor tool supplied with the TS-G17Ms.
2. Enter the Plaspy server address either as the domain d.plaspy.com or directly as the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 as required by Plaspy for all supported devices.
4. Choose UDP or TCP if the device requires you to select a transport type for server reporting.
5. Configure the operator APN, APN username, and APN password so the device can register on the mobile network.
6. Apply or save the configuration and restart the device if the tracker or vendor tool instructs you to do so.
7. Validate that the device reports to Plaspy by checking the device online status and observing initial location or heartbeat messages in the platform.

## Example Configuration Commands

The TS-G17Ms supports SMS-based configuration. The following public commands are presented in the order provided by ThingSys public guidance. Send commands from an authorized phone number and include the device password if required. The default device password shown in public materials is 123456.

1. Optional initial factory reset (only if you need to clear existing settings)
```text
FORMAT
```

2. Set the operator APN (replace {{apn}} with your mobile operator APN)
```text
apn123456 {{apn}}
```

3. Set the APN username (replace {{apnu}} with your APN username; leave blank if not required)
```text
apnuser123456 {{apnu}}
```

4. Set the APN password (replace {{apnp}} with your APN password; leave blank if not required)
```text
apnpasswd123456 {{apnp}}
```

5. Set the GPRS server to point to Plaspy. This example uses the public server IP and port for Plaspy
```text
ip54.85.159.138 8888
```

6. Check current settings on the device
```text
CXZT
```

Notes about placeholders
- {{apn}} is the mobile operator APN string required for data connectivity.
- {{apnu}} is the APN username if your operator requires one.
- {{apnp}} is the APN password if your operator requires one.
- Keep the order above when following an initial setup sequence, and only run a factory reset if explicitly needed.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available options; always check ThingSys documentation for the firmware version on your device.
- The TS-G17Ms supports both SMS-based and GPRS-based configuration in public guidance; choose the method appropriate for your installation and security requirements.
- When offered by the device, TCP and UDP are both supported; select the transport compatible with your network environment and Plaspy supports automatic detection on its side.
- After initial setup, consider changing default passwords and verifying authorized phone numbers to prevent unauthorized configuration.
- Confirm APN values and operator requirements before sending commands; incorrect APN settings prevent GPRS reporting.

## Why Use Plaspy with This Configuration

Using the TS-G17Ms with Plaspy lets organizations consolidate real-time location, alarm, and basic telemetry into a single platform for fleet management, anti-theft response, and operational oversight. The public configuration flow focuses on preparing the device for reliable GPRS reporting to Plaspy and validating visibility in the platform so you can act on events such as SOS alerts, ignition changes, and overspeed notifications.

To learn more about Plaspy and how it handles tracker data, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance for the TS-G17Ms, verify current information on the manufacturer site https://www.thingsys.com/
