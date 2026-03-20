---
slug: /boxtrack/control/configuration
id: control-configuration
sidebar_label: Configuration
title: BoxTrack - Control Configuration
sidebar_class_name: menu_item_tracker
description: Public technical configuration guide for BoxTrack Control showing how to set up the tracker to report to Plaspy
keywords:
  - BoxTrack Control configuration
  - BoxTrack Control setup
  - BoxTrack server configuration
  - BoxTrack Plaspy integration
  - BoxTrack GPS tracker setup
  - vehicle tracking BoxTrack
  - Control tracker SMS configuration
  - GPS tracker server settings
  - tracking platform configuration
  - tracker configuration guide
---

# BoxTrack - Control Configuration

This page covers the public configuration context for using the BoxTrack Anti-Theft Control tracker with Plaspy. It explains the shared server settings Plaspy expects and shows the practical, manufacturer-provided SMS commands that are commonly used to point the tracker to the Plaspy server for real time reporting and monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware release, hardware revision, installation type, and vendor tools, so use the commands shown here as a practical reference and review the device manual for device-specific details.

## Configuration Overview

This configuration process prepares the BoxTrack Control to communicate with the Plaspy platform and to report location and event data reliably. The manufacturer provides SMS configuration commands that make it possible to set APN, server endpoint, transport mode, and reporting intervals.

- Point the tracker to the Plaspy server endpoint so data is delivered to the platform.
- Configure the device APN and GPRS settings so the tracker can send GPRS data.
- Select UDP or TCP transport if required by the device firmware.
- Set an appropriate position update interval to match your monitoring needs.
- Verify configuration with the device status and APN/IP check commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts supported protocols without per device protocol registration

## Typical Requirements Before Setup

- Access to the device SMS configuration method or the official manufacturer configuration tool
- A working SIM card with data enabled and the correct APN for the mobile operator
- Power to the tracker and readiness for a configuration session
- Knowledge of the device password if the device requires authentication for SMS commands
- Basic connectivity check tools such as a second phone to send and receive SMS for verification
- Reference to the device manual or vendor notes for firmware specific behavior

## How This Tracker Connects to Plaspy

BoxTrack Control is configured to send location and event data to the shared Plaspy server endpoint and port so that data is available in Plaspy for tracking, alerts, and operational monitoring.

- The tracker uses its GPRS connection to open a TCP or UDP session to the Plaspy server
- Device data is sent to d.plaspy.com or the equivalent server IP 54.85.159.138 on port 8888
- Plaspy receives incoming tracker connections and automatically detects the device protocol
- Regular position updates and event messages are delivered to Plaspy for visibility and historical reporting
- Verification commands can be used to check APN and server settings from the device via SMS

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the vendor tool described by BoxTrack.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 depending on your preferred method.
3. Set the server port to 8888 as the device GPRS server port.
4. Choose UDP or TCP transport if the device firmware requires a transport selection.
5. Configure APN settings and any required APN username or password for the SIM.
6. Apply or save the configuration on the tracker and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking device status and confirming incoming data in the platform.

## Example Configuration Commands

The BoxTrack Control supports SMS based configuration. The following commands are the public example commands provided by the manufacturer. The device example uses the default device password 123456 in these commands. Use these in the order shown for initial setup.

1. Optional initial restore to factory settings (use only when needed)
```text
begin123456
```

2. Set the time zone to UTC 0
```text
time zone123456 0
```

3. Set the APN of your mobile operator
```text
apn123456 [apn]
```
- [apn] is a placeholder for your operator APN string

4. Set the APN username and password if required by the operator
```text
up123456 [apnu] [apnp]
```
- [apnu] is the APN username placeholder
- [apnp] is the APN password placeholder

5. Configure the GPRS server to Plaspy using the server IP and port
```text
adminip123456 54.85.159.138 8888
```
- This sets the tracker to send GPRS data to Plaspy at the provided server IP and port

6. Set the GPS fix/report interval example
```text
fix060s060s***n123456
```
- This example string configures reporting intervals; keep the exact string as provided by the manufacturer

7. Switch the tracker to GPRS mode and select UDP or TCP as supported
```text
gprs123456,1,1
```
or, on some firmware variants:
```text
gprs123456
```

8. Verification commands to check current configuration and device status
```text
APNIP123456
```
```text
check123456
```

Notes on the commands
- The sequence is important for initial setup: APN first, server settings, then GPRS mode.
- The default password used in the examples is 123456. Change the device password following manufacturer procedures where possible.
- Preserve placeholders such as [apn], [apnu], and [apnp] when replacing them with your operator values.

## Configuration Notes

- SMS based configuration is supported and often used for remote or in-field setup of BoxTrack Control.
- Firmware versions and tool variants may accept slightly different command formats; consult the device manual when in doubt.
- Choose UDP or TCP based on network and firmware behavior; Plaspy will accept either and automatically detect the protocol.
- Confirm APN credentials with your mobile operator before applying them to the device.
- If the device includes a factory reset command, use it only when needed and after backing up required settings.

## Why Use Plaspy with This Configuration

Configuring the BoxTrack Control to report to Plaspy provides a consistent server endpoint and port for all devices, simplifying deployment and centralizing device visibility. Using the shared Plaspy server settings ensures the tracker data arrives at the platform where fleet managers can monitor location, receive alerts, and review historical reports.

To learn more about Plaspy and how it handles device connections and fleet monitoring visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions on the manufacturer website.
