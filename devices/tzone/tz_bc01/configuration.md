---
slug: /tzone/tz_bc01/configuration
id: tz_bc01-configuration
sidebar_label: Configuration
title: TZone - TZ-BC01 Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for TZone TZ-BC01 to connect with Plaspy using public GPRS and SMS settings
keywords:
  - TZone TZ-BC01
  - TZ-BC01 configuration
  - TZone tracker setup
  - TZ-BC01 Plaspy setup
  - Plaspy tracker configuration
  - GPS tracker setup
  - iBeacon tracker
  - Bluetooth beacon configuration
  - GPRS tracker configuration
  - SMS configuration commands
---

# TZone - TZ-BC01 Configuration

This page describes the public configuration context for using the TZone TZ-BC01 with Plaspy. It collects the practical, publicly available setup steps and server values you can use to point a TZ-BC01 tracker at Plaspy for reporting and visibility in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where available, this guide includes the device SMS commands published for the TZ-BC01 and explains how they relate to the Plaspy server settings.

## Configuration Overview

The goal of the configuration process is to prepare the TZ-BC01 to communicate with Plaspy so device location and status are visible in the platform. For TZ-BC01 units that support GPRS reporting, configuration typically includes setting the mobile operator APN, the reporting interval, and the GPRS server endpoint.

- Configure the operator APN so the device can use mobile data for reporting
- Set an appropriate update interval so the device reports at the needed frequency
- Point the device to the Plaspy server endpoint so data is routed to the platform
- Activate GPRS or data reporting mode so the tracker will push location packets
- Validate the device is visible in Plaspy after configuration and saves are applied

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- Ensure the TZ-BC01 has power and a charged battery installed
- A working mobile SIM with data and an operator APN if you plan to use GPRS reporting
- Ability to send SMS commands to the device if using SMS configuration
- Access to manufacturer documentation or installer tools for the TZ-BC01
- Confirm the APN, username, and password values from your mobile operator

## How This Tracker Connects to Plaspy

When configured for GPRS reporting, the TZ-BC01 sends location and device data to the Plaspy endpoint at the shared address and port. Plaspy receives those packets and uses its automatic protocol detection to interpret the tracker messages so the device appears and updates inside the platform.

- The tracker reports to the Plaspy server endpoint using the configured server address
- Data is sent on port 8888 which Plaspy uses for all supported devices
- Transport can be UDP or TCP depending on the device firmware and configuration
- Plaspy automatically detects the tracker protocol so no separate protocol selection is required in the platform
- After the device sends data, it becomes visible and updateable in Plaspy for monitoring and reporting

## Common Configuration Workflow

1. Access the official TZone configuration method or software as provided by the manufacturer, typically SMS commands or the vendor configuration tool.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 depending on what the device accepts.
3. Set the reporting port to 8888.
4. Choose UDP or TCP on the device if a transport selection is required by the firmware.
5. Apply or save the configuration on the tracker (for SMS this means sending the appropriate SMS commands).
6. Restart the device if the manufacturer instructions require a reboot to apply changes.
7. Validate that the device reports to Plaspy and appears in the platform with expected update intervals.

## Example Configuration Commands

To set the TZ-BC01 via SMS, send the commands in the order shown. These public commands are the manufacturer-published SMS formats for this model.

- Set the operator APN (replace placeholders with your operator values)
```text
*000000,011,{{apn}}{{# if apnu or apnp then }},{{apnu}},{{apnp}}{{# endif }}#
```
Explanation: {{apn}} is the mobile operator APN. {{apnu}} is the APN username and {{apnp}} is the APN password. The command uses the device password prefix shown as 000000 in this example; replace if your device uses a different password.

- Set the update interval to 60 seconds
```text
*000000,018,60,999#
```
Explanation: This sets the reporting interval and related parameter as documented by the manufacturer.

- Set the GPRS server to Plaspy using the public server IP and port
```text
*000000,015,0,54.85.159.138,8888#
```
Explanation: This command configures the GPRS server IP and port that the tracker will send packets to. The public Plaspy IP is 54.85.159.138 and the platform port is 8888. If your device allows domain names, you may alternatively configure d.plaspy.com where supported by firmware, but the command above shows the IP example published by the manufacturer.

- Activate GPRS mode
```text
*000000,016,1#
```
Explanation: This enables GPRS reporting on the device so it will send data to the configured server.

## Configuration Notes

- SMS based setup is supported for TZ-BC01 in the publicly published commands; ensure SMS deliveries are allowed and the device accepts remote SMS configuration from your number.
- Firmware and hardware revisions may change command syntax or available options. Confirm exact command formats with the official TZone documentation for your device revision.
- Some devices accept domain names while others require a numeric IP. If in doubt, test with the numeric IP 54.85.159.138 and the domain d.plaspy.com where firmware supports it.
- Choose UDP or TCP according to the device firmware prompt; Plaspy will handle protocol detection on receipt, but the device must send using the chosen transport.
- Keep a record of the device password used in SMS commands; the example commands show 000000 as the password prefix and this should be replaced if your device uses a different password.

## Why Use Plaspy with This Configuration

Using Plaspy with the TZ-BC01 configuration centralizes tracker visibility and makes reporting consistent across devices by using a shared server address and a single port. Organizations that need reliable location visibility and operational oversight will benefit from pointing devices to Plaspy so location updates, status information, and reporting appear in one platform.

To learn more about Plaspy and supported device configurations visit https://www.plaspy.com. Manufacturer configuration methods and firmware behavior can change over time, so please verify the latest device-specific setup details on the official TZone website http://www.tzonedigital.com/ before completing any deployment.
