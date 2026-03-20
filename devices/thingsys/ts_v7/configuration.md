---
slug: /thingsys/ts_v7/configuration
id: ts_v7-configuration
sidebar_label: Configuration
title: ThingSys - TS-V7 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the ThingSys TS-V7 for Plaspy with server settings SMS commands and practical setup guidance for reliable vehicle tracking
keywords:
  - ThingSys TS-V7 configuration
  - ThingSys TS-V7 setup
  - ThingSys TS-V7 server configuration
  - TS-V7 Plaspy setup
  - TS-V7 tracking software configuration
  - ThingSys GPS tracker configuration
  - vehicle tracking platform setup
  - TS-V7 GPRS configuration
  - TS-V7 SMS commands
  - Plaspy tracker integration
---

# ThingSys - TS-V7 Configuration

This page covers the public configuration context for using the ThingSys TS-V7 with Plaspy. It collects the practical steps and public commands you can use to point the tracker at Plaspy and validate reporting so the device appears and updates correctly in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocol, while exact manufacturer setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TS-V7 also supports SMS configuration and GPRS server settings in common firmware builds, and the commands included below are the public SMS-style commands provided by ThingSys for initial setup and GPRS reporting.

## Configuration Overview

The purpose of the configuration process is to prepare a TS-V7 so it can communicate reliably with Plaspy and appear in the platform for monitoring and event reporting. The public setup steps typically include setting the device APN, assigning a reporting identifier, and pointing the device at the Plaspy server endpoint and port. For the TS-V7, ThingSys publishes SMS-style commands that many installers use for initial provisioning.

- Configure the tracker APN and optional APN credentials so it can use mobile data for GPRS reporting.
- Assign the device ID or reporting number derived from the IMEI so Plaspy can identify the unit.
- Point the tracker to the Plaspy server endpoint and port so data is routed to the platform.
- Set the desired update interval and switch the device into GPRS reporting mode.
- Validate connectivity and confirm the device appears and reports in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy settings to use when configuring the TS-V7 so the unit will report to the correct endpoint.

## Typical Requirements Before Setup

- A powered TS-V7 unit with access to its IMEI number for identification.
- A working SIM card with mobile data enabled and correct APN settings from the mobile operator.
- A means to send SMS commands to the device or access to the official ThingSys configuration tool if available.
- Basic familiarity with the device password and configuration syntax; the public commands below use the default password 123456 unless changed.
- Reliable cellular coverage at the installation location for initial GPRS registration and subsequent reporting.

## How This Tracker Connects to Plaspy

The TS-V7 is configured to report its location and event data to the shared Plaspy server endpoint and port. Once pointed at Plaspy and placed in GPRS mode, the tracker sends periodic location updates and event messages that the platform processes and shows in the user interface.

- The tracker sends GPRS packets to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy accepts either UDP or TCP transport and will detect the tracker protocol automatically.
- Regular position updates and configured alerts are forwarded to Plaspy for visibility and monitoring.
- Plaspy uses a single shared port for all devices so the same port value is applied across supported models.
- Successful setup is confirmed when the device appears and reports in the Plaspy platform.

## Common Configuration Workflow

1. Access the official ThingSys configuration method for the TS-V7, typically SMS commands or the manufacturer tool documented by ThingSys.
2. Prepare the device by noting the IMEI and confirming the device password (public default 123456 unless changed).
3. Enter the Plaspy server endpoint either as d.plaspy.com or 54.85.159.138 in the server field or command.
4. Set the port to 8888 in the device configuration.
5. Choose UDP or TCP if the device firmware requires selecting transport for GPRS reporting.
6. Apply or save the configuration, and switch the device into GPRS/web reporting mode.
7. Restart the device if the tracker firmware requires a reboot to apply network changes.
8. Validate that the device reports to Plaspy and appears in the platform with expected updates.

## Example Configuration Commands

ThingSys publishes SMS-style commands for the TS-V7. The commands below are public commands used in sample setup flows. The default device password used in these examples is 123456. If you changed the password previously, replace 123456 with your current device password.

- Optional initial factory restore (use only when you need to reset configuration):
```text
begin123456
```

- Set the operator APN (replace {{apn}} with the operator APN string):
```text
apn123456 {{apn}}
```
Explanation: {{apn}} is a placeholder for your SIM provider APN, for example internet or the APN provided by your carrier.

- Set the APN username and password if required by your operator (replace placeholders as needed):
```text
user {{apnu}} {{apnp}}
```
Explanation: {{apnu}} and {{apnp}} are placeholders for APN username and APN password. If your SIM does not require credentials, this command can be skipped.

- Set the device reporting ID using the last 11 digits of the IMEI
```text
number< last 11 digits of IMEI >
```
Example pattern: if your IMEI ends with 12345678901 then send:
```text
number12345678901
```
Explanation: The TS-V7 commonly requires an 11 digit reporting identifier derived from the IMEI. Replace the placeholder with the last 11 digits of your device IMEI.

- Set the GPRS server to report to the Plaspy server IP and port (public example using the IP):
```text
ip54.85.159.138port8888
```
Explanation: This command configures the TS-V7 GPRS server using the Plaspy server IP and port. If your device accepts a domain, you may enter d.plaspy.com where supported by firmware or tools.

- Set the update interval to 120 seconds:
```text
at120sum0
```
Explanation: Adjust the numeric value if you require a different reporting interval.

- Switch the device to GPRS/web reporting mode (final step to enable data reporting):
```text
web123456
```
Explanation: This command enables GPRS mode so the tracker will start sending data to the configured server.

Follow the command order in practice and confirm each command succeeded where your device firmware provides acknowledgements.

## Configuration Notes

- The exact SMS syntax and available commands can vary by firmware version and hardware revision. Confirm the commands with current ThingSys documentation if unsure.
- SMS-based provisioning is a common method for TS-V7 configuration; maintain a record of any password changes and device identifiers used.
- Choose UDP or TCP transport based on your deployment and device capability. Plaspy supports both and will detect the protocol automatically.
- Plaspy uses the same port across supported trackers so set port 8888 when configuring the device.
- If your device or firmware supports entering a domain instead of an IP, you can use d.plaspy.com; otherwise use the IP 54.85.159.138 shown in the public commands.

## Why Use Plaspy with This Configuration

Using the ThingSys TS-V7 with Plaspy provides a practical path to centralize vehicle visibility, alerts, and operational oversight. Pointing the TS-V7 at Plaspy and configuring update intervals and alerts allows fleet operators and administrators to monitor movement, receive events, and manage devices from a single platform.

To learn more about Plaspy and the full platform capabilities visit https://www.plaspy.com. For the most current device specific commands firmware notes and installation guidance verify the latest information on the manufacturer site https://www.thingsys.com/ as setup methods and firmware behavior can change over time.
