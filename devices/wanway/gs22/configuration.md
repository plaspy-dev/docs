---
slug: /wanway/gs22/configuration
id: gs22-configuration
sidebar_label: Configuration
title: WanWay - GS22 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the WanWay GS22 for use with Plaspy using shared server settings and SMS configuration commands for quick setup and validation
keywords:
  - WanWay GS22 configuration
  - WanWay GS22 setup
  - GS22 Plaspy configuration
  - WanWay GPS tracker configuration
  - GS22 server configuration
  - Plaspy tracker setup
  - vehicle tracking configuration
  - GPS tracker SMS commands
  - OBD2 tracker configuration
  - fleet tracking setup
---

# WanWay - GS22 Configuration

This page covers the public configuration context for using the WanWay GS22 tracker with the Plaspy platform. It collects the practical, publicly available settings and SMS configuration commands needed to point a GS22 device to Plaspy and validate basic connectivity. Use this guide alongside the GS22 hardware and firmware documentation from the manufacturer for device specific details.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GS22 supports SMS based configuration commands that can be used to set APN, server and reporting interval values when preparing the device for Plaspy.

## Configuration Overview

This configuration prepares the GS22 to send position and status data to Plaspy so the device becomes visible and manageable in the platform. The steps below focus on assigning the Plaspy endpoint, validating GPRS connectivity, and enabling regular reporting.

- Point the device to the Plaspy server endpoint so inbound telemetry reaches the platform.
- Configure the carrier APN so the GS22 can use cellular data for GPRS reporting.
- Set a reporting interval to control how often the tracker uploads telemetry to Plaspy.
- Switch the tracker to GPRS mode and confirm it is actively connected.
- Verify configuration and device status with the GS22 verification commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A GS22 device that is powered and accessible for configuration.
- A working SIM card with an active data or SMS plan and the correct carrier APN details.
- Ability to send and receive SMS messages from the install location for SMS based configuration.
- Access to the official WanWay configuration method or tools for your GS22 firmware and hardware revision.
- Basic knowledge of whether your installer needs UDP or TCP for their environment if the device requires a transport selection.

## How This Tracker Connects to Plaspy

The GS22 can be configured to report location and device status to the shared Plaspy server endpoint and port so that Plaspy can display position, history, and alerts.

- The device is assigned the Plaspy server domain or IP and port so telemetry uploads reach Plaspy.
- Reporting intervals determine how often the tracker sends updates to d.plaspy.com on port 8888.
- Plaspy receives the incoming connection and automatically detects the tracker protocol for proper parsing.
- Once connected the tracker becomes visible in Plaspy for monitoring, trace playback, and event reporting.
- Verification commands can be used to confirm the device is using the configured server and sending data.

## Common Configuration Workflow

1. Access the official WanWay GS22 configuration method or software for your device or use SMS commands as provided by the manufacturer.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server configuration.
3. Set the server port to 8888 to match Plaspy settings.
4. Choose UDP or TCP if the device requires a transport selection, noting that Plaspy accepts either and will detect the protocol.
5. Apply or save the configuration on the device or send the corresponding SMS commands.
6. Restart the device if required by the GS22 firmware or after saving to ensure settings take effect.
7. Validate that the device reports to Plaspy by checking device status or using the GS22 verification commands.

## Example Configuration Commands

The GS22 supports SMS based configuration. The following public SMS commands are commonly used in the manufacturer documentation to configure APN, server, reporting intervals and to switch on GPRS. Preserve the placeholders when substituting your carrier values.

- Configure carrier APN
```text
APN,{{apn}}#
```
Optional APN username and password form (when required by the carrier)
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: {{apn}} is your mobile carrier APN. {{apnu}} and {{apnp}} are optional APN username and password placeholders.

- Setup the GPRS server to point to Plaspy
```text
SERVER,1,d.plaspy.com,8888,0#
```
Note: This command sets the server domain d.plaspy.com and port 8888. The trailing fields are vendor defined in GS22 SMS syntax.

- Set the reporting update interval (example sets primary and secondary timers)
```text
TIMER,60,60#
```
Explanation: The numbers define reporting intervals in seconds as used by the GS22 SMS interface.

- Switch to GPRS mode
```text
GPRSON,1#
```

- Check current configuration
```text
PARAM#
```

- Check tracker status
```text
STATUS#
```

Use the PARAM# and STATUS# commands to verify server, APN, and operational state after applying the configuration.

## Configuration Notes

- The GS22 supports SMS based setup as shown above; some installers may prefer vendor tools or a configuration app depending on firmware.
- Firmware revisions or hardware versions can change SMS command syntax or required parameters; always confirm against the GS22 manual for your specific unit.
- When sending APN commands, keep the optional {{apnu}} and {{apnp}} placeholders only if your carrier requires a username and password.
- Choose UDP or TCP according to installation needs; Plaspy accepts both on port 8888 and will automatically detect the protocol used.
- Allow time after saving settings or restarting for the device to establish GPRS and report to Plaspy.

## Why Use Plaspy with This Configuration

Configuring the WanWay GS22 to report to Plaspy gives organizations consistent visibility into vehicle location, status, and event reporting using a shared platform endpoint. With the Plaspy server settings applied, the GS22 can deliver regular updates that support tracking, trace playback, and operational monitoring in Plaspy.

To learn more about Plaspy and how it handles device connections visit https://www.plaspy.com. For the latest device specific configuration instructions, firmware notices, and manufacturer guidance verify details at the WanWay official site https://www.wanwaytech.net/ since device methods and firmware behavior can change over time.
