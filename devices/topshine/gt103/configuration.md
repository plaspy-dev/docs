---
slug: /topshine/gt103/configuration
id: gt103-configuration
sidebar_label: Configuration
title: TopShine - GT103 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for TopShine GT103 with Plaspy server settings and SMS setup examples
keywords:
  - TopShine GT103 configuration
  - GT103 setup for Plaspy
  - TopShine tracker configuration
  - GT103 server configuration
  - GT103 GPS tracker setup
  - Plaspy device configuration
  - GT103 vehicle tracking setup
  - TopShine GT103 SMS commands
  - GT103 fleet management configuration
  - GT103 tracking platform setup
---

# TopShine - GT103 Configuration

This page provides public configuration context for using the TopShine GT103 tracker with the Plaspy platform. It collects the practical server settings and example setup commands that are commonly used to point a GT103 device to Plaspy, and explains what to check before you integrate devices into your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GT103 supports 2G GPRS with SMS fallback and can be configured by SMS or by manufacturer tools; the examples below show SMS commands that are commonly used in public documentation for initial setup.

## Configuration Overview

Preparing a GT103 for use with Plaspy means making sure the device can reach Plaspy's server endpoint over GPRS and that basic device identity and APN settings are configured correctly. The objective is reliable data delivery, correct device identification on Plaspy, and visible telemetry in the Plaspy dashboard.

- Configure the GT103 to send GPRS data to the Plaspy server endpoint so location and alarms arrive in real time.
- Set the device identifier and confirm IMEI mapping so Plaspy recognizes the tracker.
- Enter the mobile operator APN details to enable GPRS connectivity for reporting.
- Validate transport settings (UDP or TCP) and the shared port used by Plaspy so data reaches the platform.
- Verify reporting by checking device telemetry in Plaspy and confirming expected events such as ACC, SOS, and geofence alerts.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These exact values are required when configuring the GT103 to report to Plaspy. Use either the domain d.plaspy.com or the IP 54.85.159.138 and set the device port to 8888. If your GT103 firmware asks for transport, choose UDP or TCP per the device options.

## Typical Requirements Before Setup

- Stable power to the GT103 and proper wiring as required by your installation.
- A working 2G GPRS capable SIM card with data enabled and SMS support if using SMS configuration.
- The correct APN settings from the mobile operator for GPRS connectivity.
- Access to the device IMEI and the ability to send SMS commands or use the manufacturer configuration tool.
- Knowledge of the device password when required for SMS commands; the public default password used in examples below is 000000.
- Access to the official TopShine documentation or installer tools for device specific guidance and firmware updates.

## How This Tracker Connects to Plaspy

The GT103 sends position and status messages over 2G GPRS to Plaspy's shared server endpoint and port so Plaspy can ingest telemetry, display location on maps, and generate alerts. Plaspy uses the same port for all devices and automatically selects the right protocol when data arrives.

- Device GPRS packets are addressed to d.plaspy.com (or 54.85.159.138) on port 8888.
- Plaspy detects the tracker protocol automatically so the platform can interpret the GT103 messages.
- Location, ACC/ignition status, SOS alarms, geo fence and over speed events are visible in Plaspy when the device reports successfully.
- Device identity is established by IMEI or configured device ID so telemetry is associated with the correct asset.
- If GPRS fails, the GT103 can use SMS as a fallback for some messages and remote commands.

## Common Configuration Workflow

1. Access the official TopShine configuration method for GT103, typically SMS commands or the vendor configuration tool, and confirm the device password if required.
2. Enter the Plaspy server domain d.plaspy.com or the alternative server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888, which Plaspy uses for all devices.
4. Choose the transport option UDP or TCP if the device firmware requires a transport selection.
5. Configure the operator APN and any optional APN username and password required by your SIM.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking the device status and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The GT103 supports SMS based configuration. The public SMS commands below are presented in the order they are commonly used. The device SMS password in these examples is the factory default 000000. Replace placeholders such as {{apn}}, {{apnu}}, {{apnp}} and IMEI fragments as needed for your installation.

- Reset device to factory defaults (optional initial step):
```text
W000000,990,099###
```

- Set device ID using the first 14 IMEI digits (TopShine example). Note Plaspy uses the IMEI for device identification; follow the manufacturer instruction to map ID to the IMEI as required:
```text
W000000,010,{{IMIE_FIRST_14_DIGITS}}
```
Explanation: replace {{IMIE_FIRST_14_DIGITS}} with the first 14 digits from the device IMEI. The exact ID mapping can vary by deployment.

- Set the operator APN. Keep placeholders if your APN requires a username or password:
```text
W000000,011,{{apn}}{{,{{apnu}},{{apnp}}}}
```
Explanation: {{apn}} is the APN provided by your mobile operator. If the operator requires an APN username and password, include {{apnu}} and {{apnp}} respectively. If not needed, send only the APN.

- Set the GPRS server to Plaspy using the Plaspy server IP and port 8888:
```text
W000000,012,54.85.159.138,8888
```
Alternative: use d.plaspy.com in place of the IP if the device supports a domain name for server settings.

- Switch the device to GPRS data mode (example value 2 for GPRS mode):
```text
W000000,013,2
```

- Set the reporting update interval (example uses a value of 6 in public documentation):
```text
W000000,014,6
```

- Retrieve the device IMEI for verification:
```text
W000000,601
```

Notes on placeholders and defaults:
- Default SMS password shown in public examples is 000000. If your device password has been changed, use the active password in place of 000000.
- Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when preparing SMS messages to remind you which operator values are required.
- If your device supports using the domain name, you can set d.plaspy.com instead of the IP address.

## Configuration Notes

- Firmware differences and hardware revisions can change command formats and available options; always verify against the specific firmware release for your GT103.
- The GT103 supports both SMS based and GPRS based configuration in public documentation; use the method that fits your deployment and installer workflow.
- Choose TCP or UDP according to device firmware options; Plaspy will detect the tracker protocol automatically once data reaches the platform.
- Use the shared Plaspy port 8888 for all device entries — Plaspy expects devices on that port and will accept connections from any supported tracker using that port.
- APN credentials are operator specific. If an APN username or password is required, include {{apnu}} and {{apnp}} when setting the APN.

## Why Use Plaspy with This Configuration

Using the GT103 with Plaspy provides a practical way to centralize fleet tracking and anti theft workflows. When the GT103 is configured to report to Plaspy, fleet managers gain visibility into location, ignition status, SOS events, and other alarms from a single platform, enabling faster incident response and straightforward monitoring.

To learn more about Plaspy visit https://www.plaspy.com. Note that device specific configuration methods, firmware behavior, and manufacturer details can change over time; always verify the latest setup instructions and firmware information with the manufacturer at https://www.gztopshine.com/ before deploying devices.
