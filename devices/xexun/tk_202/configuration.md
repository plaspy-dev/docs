---
slug: /xexun/tk_202/configuration
id: tk_202-configuration
sidebar_label: Configuration
title: Xexun - TK-202 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Xexun TK-202 for Plaspy with server settings SMS commands and practical setup steps
keywords:
  - Xexun TK-202 configuration
  - Xexun TK-202 setup
  - TK-202 Plaspy integration
  - Xexun GPS tracker configuration
  - GPS tracker server configuration
  - TK-202 SMS setup
  - GPRS tracker setup
  - vehicle tracking configuration
  - wearable GPS tracker setup
  - fleet tracking configuration
---

# Xexun - TK-202 Configuration

This page covers the public configuration context for using the Xexun TK-202 GPS tracker with Plaspy. It collects the server settings, typical prerequisites, and a practical workflow so you can prepare the device to send location and status data to Plaspy. Where available, example SMS commands from the device maker are included as a reference for common setup tasks.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol while the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TK-202 can be configured using SMS commands and GPRS settings, so this documentation focuses on the public settings and a safe, repeatable workflow for sending tracker data to Plaspy.

## Configuration Overview

The goal of configuring the TK-202 for Plaspy is to point the tracker at the Plaspy server endpoint, ensure it has working GPRS connectivity, and confirm the tracker is reporting at an appropriate interval so it is visible in the Plaspy platform. The following actions are commonly part of the setup.

- Configure APN and GPRS credentials so the device can reach the data network.
- Point the device to the Plaspy server endpoint and port so telemetry is delivered.
- Choose the transport mode if required by the device firmware such as UDP or TCP.
- Set an update interval suitable for the use case and battery/power constraints.
- Validate connectivity and that the device appears in Plaspy after configuration.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TK-202:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol so the server accepts common tracker protocols

These values are the shared settings Plaspy uses for supported devices and should be entered on the device or sent via the manufacturer supported configuration method.

## Typical Requirements Before Setup

- A powered and charged TK-202 device ready for configuration.
- An active SIM card with mobile data enabled and correct operator APN details.
- Access to an SMS capable phone or the manufacturer configuration tool if SMS setup is used.
- Knowledge of the device administration password used in SMS commands. The sample configuration uses 123456 as the default password.
- A place to test the device where cellular reception is available for GPRS data.
- Access to the Xexun manufacturer documentation or vendor instructions for device specific behaviors.

## How This Tracker Connects to Plaspy

When configured for Plaspy the TK-202 will use its GPRS connection to send position and event data to the Plaspy server endpoint and port. Plaspy receives these messages and maps them to the correct device protocol automatically so the device becomes visible and reportable in the platform.

- The tracker sends GPRS telemetry to the Plaspy server domain or IP on port 8888.
- Transport can be UDP or TCP depending on device requirements and user selection.
- Plaspy auto detects the tracker protocol so no additional protocol selection is required on the platform side.
- Once reporting, Plaspy will display location and basic event information for monitoring and operational oversight.
- Proper APN and GPRS settings are required so the tracker can reach the Plaspy server.

## Common Configuration Workflow

1. Access the official Xexun configuration method such as SMS commands or the vendor configuration tool provided by your supplier.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 in the device server setting.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP on the device if a transport selection is required by the firmware.
5. Configure APN and any APN username or password required by the SIM operator.
6. Apply or save the configuration and restart the device if required by the device instructions.
7. Validate the device is reporting to Plaspy by checking that it appears in the platform and sends expected updates.

## Example Configuration Commands

The following commands are public SMS style commands used by Xexun devices and are provided here in the same sequence they appear in manufacturer guidance. These commands preserve the password placeholder and APN placeholders from the original source. The sample device password used in these examples is 123456 which is the default in the provided sample. Change the password or replace the placeholder if your device password differs.

- Optional initial factory reset command when starting configuration
```text
begin123456
```
- Set the operator APN. Replace {{apn}} with your operator APN string
```text
apn123456 {{apn}}
```
- Set the APN username if required. Replace {{apnu}} with the APN username
```text
apnuser123456 {{apnu}}
```
- Set the APN password if required. Replace {{apnp}} with the APN password
```text
apnpasswd123456 {{apnp}}
```
- Set the GPRS server to Plaspy using the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```
- Set the GPRS mode on the device (device specific behavior may vary)
```text
gprsmode123456
```
- Set the location update interval to 60 seconds
```text
t060s***n123456
```

Notes about placeholders and password
- {{apn}} is an operator APN placeholder you must replace with your SIM operator APN.
- {{apnu}} and {{apnp}} are optional APN username and APN password placeholders used where the operator requires credentials.
- The numeric password 123456 in these examples is the sample device password shown in manufacturer materials. If you have changed the password use the changed password in each command.

## Configuration Notes

- The TK-202 examples above use SMS based configuration which is commonly supported by Xexun devices; manufacturer tools or newer firmware may offer alternative methods.
- Behavior for commands and available options can vary between firmware versions and hardware revisions; review the Xexun documentation if a command is not recognized.
- When offered choose UDP or TCP according to device capability and network conditions. Plaspy accepts both on port 8888 and automatically detects the protocol.
- If you perform a factory reset using the initial command make sure you know the device admin password and any custom settings will be lost.
- Always confirm APN details with the SIM operator before attempting GPRS setup.

## Why Use Plaspy with This Configuration

Using the Xexun TK-202 with Plaspy provides a straightforward way to receive device telemetry in a centralized platform for monitoring locations, events, and basic operational status. Configuring the TK-202 to report to Plaspy's shared server endpoint reduces per device complexity because Plaspy uses the same port for all supported devices and handles protocol detection automatically.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer instructions verify setup details on the official Xexun site https://www.xexun.com/. Manufacturer specifications and setup methods can change over time so checking the vendor documentation ensures you have the latest instructions.
