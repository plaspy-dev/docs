---
slug: /topshine/pt30/configuration
id: pt30-configuration
sidebar_label: Configuration
title: TopShine - PT30 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring TopShine PT30 to work with Plaspy using SMS or GPRS server settings
keywords:
  - TopShine PT30 configuration
  - PT30 setup for Plaspy
  - TopShine tracker configuration
  - PT30 server configuration
  - PT30 GPS platform setup
  - TopShine PT30 SMS commands
  - PT30 GPRS configuration
  - GPS tracker Plaspy setup
  - personal tracker configuration
  - tracker server integration
---

# TopShine - PT30 Configuration

This page documents the public configuration context for using the TopShine PT30 tracker with Plaspy. It consolidates the known, manufacturer visible setup steps and the exact Plaspy server settings you will apply when pointing a PT30 to our platform, with practical SMS command examples from public device configuration content when available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation style, and vendor tools. The PT30 supports SMS and GPRS configuration methods and can operate with TCP or UDP transports, so this guide focuses on the common, public actions needed to register and verify a PT30 with the Plaspy server endpoint.

## Configuration Overview

Preparing a TopShine PT30 for Plaspy means ensuring the device can communicate over GPRS to the Plaspy endpoint or send required SMS configuration commands so the tracker reports to the platform. The following bullets summarize the practical goals of the configuration process.

- Configure the PT30 so it reports to the Plaspy server endpoint and port using the device configuration method.
- Ensure the device has working GPRS connectivity and the operator APN is set correctly for data reporting.
- Validate the device identity and IMEI so Plaspy can match incoming data to the correct tracker record.
- Confirm transport selection (UDP or TCP) if required and save the settings on the tracker.
- Verify that the device appears and sends updates in Plaspy after configuration.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the PT30. Plaspy requires the same port for all devices and will automatically detect the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A powered PT30 with sufficient battery or external power for configuration and testing.
- A working SIM card with data enabled and the correct APN for the mobile operator.
- Access to the PT30 configuration method supported by the device, such as SMS commands described in the manufacturer documentation.
- The device IMEI number available for identity configuration and verification.
- Knowledge of the device default password if required for SMS commands; publicly noted default password is 000000.
- Access to the manufacturer's documentation or vendor tools to confirm firmware specific instructions.

## How This Tracker Connects to Plaspy

The PT30 can be configured to send location and status updates to the shared Plaspy server endpoint and port over GPRS. Once the device is pointed to the Plaspy endpoint and network connectivity is active, the platform will automatically detect the device protocol and begin accepting reports for visibility and monitoring.

- Tracker sends periodic location updates to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device selection; Plaspy handles both.
- Plaspy uses the device identity (IMEI based) to map incoming packets to the correct tracker in the platform.
- After successful configuration, the device will appear in Plaspy and provide operational visibility for monitoring and alerts.
- Use SMS verification commands where applicable to confirm IMEI and immediate responses before relying on GPRS reporting.

## Common Configuration Workflow

1. Access the official TopShine configuration method described by the manufacturer, typically SMS commands or the vendor configuration tool.
2. Set the server address to d.plaspy.com or the Plaspy server IP 54.85.159.138 when the device requires an IP entry.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP on the tracker if transport selection is required by the firmware.
5. Configure the operator APN and any optional APN username or password so the device can establish GPRS.
6. Apply or save the configuration on the device and restart the tracker if the device requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking the device appears in the Plaspy platform and that updates are received.

If you are using SMS based setup commands, follow the manufacturer sequence and verify IMEI and server responses before confirming GPRS connectivity.

## Example Configuration Commands

The PT30 public configuration examples are sent via SMS. The commands below are preserved from public manufacturer examples. The device password shown is the publicly noted default 000000 and should be replaced if you have changed the password. Replace placeholders before sending.

- Factory reset command (optional initial reset)
  
  Description: Reset the tracker to factory settings. Use only when necessary during initial setup.
  
  ```
  W000000,990,099###
  ```

- Set the device ID
  
  Description: Set the device ID field. Use the first 14 digits derived from the IMEI if required by the device command format. Plaspy uses the device IMEI (full 15 digits) as the identifier on the platform.
  
  Example (replace <14_DIGITS> with the first 14 digits of the IMEI):
  
  ```
  W000000,010,<14_DIGITS>
  ```

- Set the operator APN
  
  Description: Configure the mobile operator APN so the device can use GPRS. Replace {{apn}} with your operator APN. If the carrier requires APN username and password, include {{apnu}} and {{apnp}} respectively. The username and password fields are optional and used only if your operator requires them.
  
  Example with only APN:
  
  ```
  W000000,011,{{apn}}
  ```
  
  Example with APN username and password:
  
  ```
  W000000,011,{{apn}},{{apnu}},{{apnp}}
  ```

- Set the GPRS server to Plaspy
  
  Description: Point the tracker to the Plaspy server IP and port. This example uses the public Plaspy server IP and port 8888.
  
  ```
  W000000,012,54.85.159.138,8888
  ```

- Switch to GPRS mode
  
  Description: Configure the device to use GPRS as its reporting mode.
  
  ```
  W000000,013,2
  ```

- Set the update interval
  
  Description: Configure the periodic reporting interval. Example value 6 is a manufacturer command example for an interval; review the device manual for interval units and allowable values.
  
  ```
  W000000,014,6
  ```

- Query device IMEI
  
  Description: Use this command to request the device IMEI via SMS for verification.
  
  ```
  W000000,601
  ```

Note: Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator values. The default SMS command password in these examples is 000000; substitute your device password if it has been changed.

## Configuration Notes

- Firmware behavior differs across PT30 hardware revisions and firmware versions; always confirm the exact command format in the manufacturer manual for your device firmware.
- The PT30 supports both SMS based and GPRS based setup; SMS commands are useful for remote configuration when you cannot access the device GUI.
- Choose TCP or UDP according to installer preference; Plaspy accepts both and performs automatic protocol detection on incoming connections.
- Plaspy requires the same port for all devices and you must use port 8888 when pointing the PT30 to the platform.
- Always verify operator APN and optional APN credentials before attempting to switch the device to GPRS mode.

## Why Use Plaspy with This Configuration

Configuring the TopShine PT30 to report to Plaspy gives organizations a simple way to collect location data and receive alerts from a compact, power saving personal tracker. Using Plaspy with the shared server endpoint simplifies fleet or asset onboarding because Plaspy detects the tracker protocol automatically and uses consistent server settings across supported devices.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer installation recommendations verify details with the official TopShine documentation at https://www.gztopshine.com/ as manufacturer specifications and setup methods can change over time.
