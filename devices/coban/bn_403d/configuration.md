---
slug: /coban/bn_403d/configuration
id: bn_403d-configuration
sidebar_label: Configuration
title: Coban - BN-403D Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for the Coban BN-403D GPS tracker showing public SMS configuration and Plaspy server settings for easy integration
keywords:
  - Coban BN-403D configuration
  - BN-403D setup Plaspy
  - Coban GPS tracker configuration
  - BN-403D server configuration
  - Coban tracker SMS commands
  - vehicle tracker Plaspy setup
  - BN-403D APN settings
  - fleet tracking Plaspy
  - GPS tracker configuration guide
  - BN-403D telemetry setup
---

# Coban - BN-403D Configuration

This page documents the public configuration context for using the Coban BN-403D GPS tracker with the Plaspy platform. It collects the practical server settings, common prerequisites, and the publicly available SMS commands used to point the device at Plaspy so the tracker can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The BN-403D supports SMS configuration and Bluetooth setup; the example SMS commands below are taken from the device public configuration information and show how to configure APN, server endpoint, reporting interval, and transport selection.

## Configuration Overview

The goal of configuration is to prepare the BN-403D so it reliably communicates with Plaspy and appears as an active device in your Plaspy account. For BN-403D devices this commonly means setting the mobile operator APN, supplying APN credentials if required, and pointing the device to the Plaspy server endpoint and port.

- Configure the APN and optional APN credentials so the tracker has GPRS/4G data access.
- Set the device server to the Plaspy endpoint so location and events report to the platform.
- Select the transport mode UDP or TCP if the device requires an explicit transport selection.
- Define reporting interval and behaviour so positions and alarms are transmitted at the expected frequency.
- Verify settings and confirm the device appears online in Plaspy.

## Plaspy Server Settings

- Server domain for Plaspy is d.plaspy.com
- Server IP for Plaspy is 54.85.159.138
- Port for all Plaspy devices is 8888
- Transport can be configured as UDP or TCP depending on device options
- Plaspy automatically detects the tracker protocol so devices can be pointed to the shared server and port above

## Typical Requirements Before Setup

- A working SIM card with a data plan and correct APN settings for the operator.
- Power to the BN-403D and access to its communication interfaces for configuration (SMS or Bluetooth as available).
- The device password if SMS configuration commands are required (the public examples below use the default password).
- Access to the official Coban configuration method or software for your device firmware and hardware revision.
- A Plaspy account where the device will be visible after successful reporting.

## How This Tracker Connects to Plaspy

The BN-403D reports location, status and alarm events to the Plaspy server endpoint and port so Plaspy dashboards and alerting mechanisms can process and present device telemetry. Configuration sets the device APN and the server address so GPRS or LTE connectivity is used for continuous reporting.

- The tracker forwards position fixes and status messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives GPS and alarm messages and maps them to the device record in the platform.
- Transport can use UDP or TCP depending on the tracker configuration and network behavior.
- Plaspy automatically detects the tracker protocol so the same port can be used for all supported devices.
- Validation is completed when the device shows as online and transmits expected position updates to Plaspy.

## Common Configuration Workflow

1. Access the manufacturer configuration method for the BN-403D, such as SMS commands, Bluetooth tools, or the vendor software recommended for your firmware.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138 according to the device command format.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Apply or save the configuration on the device and confirm SMS or software reports indicate success.
6. Restart the device if required by the manufacturer or after applying server changes.
7. Validate that the BN-403D reports to Plaspy by checking the device status and recent positions in your Plaspy account.

## Example Configuration Commands

The following SMS commands are the public examples provided for BN-403D configuration. These use the device SMS interface and the default device password 123456 in the examples. If you have changed the device password, replace 123456 with your current password.

- Factory reset (optional initial step)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 [apn]
```
Explanation: replace [apn] with your mobile operator APN string.

- Set APN username and password (if required by the operator)
```text
up123456 [apnu] [apnp]
```
Explanation: replace [apnu] with the APN username and [apnp] with the APN password. If no username or password is required, many operators accept empty fields or this step can be skipped.

- Set the GPRS server to Plaspy by IP and port
```text
adminip123456 54.85.159.138 8888
```
This command points the device to the Plaspy server IP and port. You may also use the domain d.plaspy.com if the device supports domain names in server commands.

- Set the location update interval
```text
fix060s060s***n123456
```
This example is the public interval command shown for the BN-403D. Adjust according to your reporting requirements and firmware specifics.

- Switch to GPRS mode and select transport (example for UDP or TCP depending on firmware)
```text
gprs123456,1,1
```
Or simply:
```text
gprs123456
```
Explanation: Some firmware versions support a transport parameter; consult manufacturer docs for the exact meaning of each parameter. Choosing UDP or TCP may require different parameter values.

- Check current device settings (verification)
```text
check123456
```

- Enable extended protocol features such as fuel sensor reporting
```text
protocol123456 18
```
Explanation: This command was shown in the public configuration notes to enable fuel sensor status or improved digital sensor transmissions. Only use if you have the compatible sensor and understand the effect on reporting.

Note: Keep the device password value correct for your unit. The examples above use the publicly provided default password 123456; if the password has been changed, use the active password.

## Configuration Notes

- SMS based configuration is commonly supported for the BN-403D but Bluetooth configuration tools may also be available; choose the method that matches your installation and firmware version.
- Firmware and hardware revisions can change command formats, parameter order, and available features; confirm the syntax with Coban documentation when in doubt.
- TCP and UDP transport both work with Plaspy when the device is pointed at the Plaspy server and port; consult Cobb's guidance for parameter values that select UDP versus TCP on your firmware.
- Plaspy uses the same port 8888 for all supported devices and will attempt automatic protocol detection once the device connects to d.plaspy.com or 54.85.159.138.
- Use the check command or manufacturer tools to verify configuration after applying changes and before full deployment.

## Why Use Plaspy with This Configuration

Using the BN-403D with Plaspy gives organizations a straightforward path to bring vehicle telemetry, alarms and location into a single fleet management platform. By pointing the device to the shared Plaspy server and port and configuring the APN and reporting interval, devices report consistently so teams can monitor movement, receive actionable alerts, and review historical tracks for operations and incident analysis.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific commands, firmware behavior and installation instructions verify details with the manufacturer at https://www.coban.net/ .
