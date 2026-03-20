---
slug: /meitrack/mt_80/configuration
id: mt_80-configuration
sidebar_label: Configuration
title: Meitrack - MT-80 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack MT 80 to connect to Plaspy with practical server settings and SMS commands
keywords:
  - Meitrack MT 80
  - MT 80 configuration
  - Meitrack configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - MT 80 setup for Plaspy
  - MT 80 server configuration
  - GPS platform setup
  - asset tracking setup
  - personal tracker configuration
---

# Meitrack - MT-80 Configuration

This page documents the public configuration context for using the Meitrack MT-80 with Plaspy. It explains the shared Plaspy server settings, gives practical setup guidance, and includes the common SMS configuration commands published for the MT-80 so you can prepare the device for use with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to apply the required Plaspy server values to the MT-80 and verify that the tracker reports to Plaspy successfully.

## Configuration Overview

The goal of MT-80 configuration for Plaspy is to ensure the tracker can establish a reliable connection to the Plaspy server endpoint and report location and event data on the agreed port and transport. This page focuses on the practical steps needed to prepare the MT-80 for communication with Plaspy and to validate connectivity in the platform.

- Enter Plaspy server settings into the device using the manufacturer supported method such as SMS or configuration software.
- Configure the MT-80 to use the shared Plaspy endpoint and the required port so Plaspy can receive telemetry.
- Verify transport selection and connectivity so the tracker appears online in Plaspy.
- Validate reporting by checking location updates and selected event alarms in Plaspy.
- Keep manufacturer documentation and firmware notes on hand in case of differences in commands or behavior.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration.
- Server IP 54.85.159.138 for direct IP configuration.
- Port 8888 which Plaspy uses for all supported devices.
- Transport support for UDP or TCP depending on the device option.
- Plaspy automatically detects the tracker protocol so you only need to point the device to the Plaspy endpoint and port.

## Typical Requirements Before Setup

- A charged and functioning MT-80 device with access to its SMS or configuration interface.
- An active SIM card with data enabled if using GPRS reporting and the correct APN details available.
- The default device password if required for configuration commands (MT-80 examples below use the default password 0000).
- Access to official Meitrack configuration instructions or tools to confirm command syntax for your device firmware version.
- A way to receive device responses such as the SIM owner's phone or a console to confirm success messages.

## How This Tracker Connects to Plaspy

The MT-80 is configured to report to the shared Plaspy server endpoint and port so Plaspy can ingest location and event messages. When configured correctly the tracker will send periodic position updates and alarms to the Plaspy endpoint on port 8888 using either UDP or TCP based on the device setting.

- Device sends position and event reports to d.plaspy.com or 54.85.159.138.
- Reports are addressed to port 8888 which Plaspy uses for all devices.
- Transport can be UDP or TCP as selected during configuration.
- Plaspy automatically detects the tracker protocol and maps incoming messages for that device.
- Successful setup enables visibility and event monitoring inside Plaspy.

## Common Configuration Workflow

1. Access the official Meitrack configuration method such as SMS commands or Meitrack software that matches your MT-80 firmware.
2. Enter the Plaspy endpoint by using d.plaspy.com or the direct server IP 54.85.159.138 per your preference.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the MT-80 requires selecting a transport type.
5. Apply or save the configuration and ensure the device accepts the settings.
6. Restart the device if the tracker requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by confirming online status and recent location updates in the platform.

## Example Configuration Commands

The MT-80 supports SMS based configuration. The following public SMS commands are examples drawn from Meitrack published configuration content. The sample commands use the default device password 0000. Preserve placeholders when sending commands and replace them with your actual values.

- Default device password used in examples is 0000
- {{apn}} is a placeholder for your SIM card APN string
- {{apnu}} is a placeholder for APN username when required
- {{apnp}} is a placeholder for APN password when required

1. Optional initial factory settings reset
```sms
0000,F11
```
Label: Optional initial setup or factory restore. Use only when you need to reset the device to factory settings.

2. Set the GPRS server to Plaspy using direct IP and port, include APN and optional APN credentials
```sms
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Note: This command configures GPRS reporting to the Plaspy server IP and port. You may substitute d.plaspy.com in DNS capable configurations if preferred.

3. Set the time zone to UTC 0
```sms
0000,B36,0
```

4. Set the update interval to every 1 minute
```sms
0000,A12,6,0
```

5. Configure events reporting
```sms
0000,C03,0
```

Send these SMS commands from the SIM owner number or the number allowed by the device configuration. Wait for device confirmation replies before proceeding to the next step.

## Configuration Notes

- SMS based configuration is supported and illustrated above. Use the method appropriate for your firmware and management workflow.
- Plaspy supports both UDP and TCP on the same port 8888; choose the transport that matches your project requirements and device options.
- Firmware and command syntax can differ by production batch or firmware revision. Confirm exact syntax with Meitrack documentation for your MT-80 firmware.
- When using APN placeholders such as {{apn}}, {{apnu}}, and {{apnp}} replace them with the values provided by your mobile operator.
- If you prefer DNS over direct IP, use d.plaspy.com as the server name instead of the IP address.

## Why Use Plaspy with This Configuration

Using the Meitrack MT-80 with Plaspy gives a straightforward path to centralize location reporting, events, and basic telematics. The MT-80's support for SMS and GPRS reporting and the public SMS commands allow installers to configure devices quickly to point at the shared Plaspy endpoint and port for monitoring in the platform.

To learn more about Plaspy and how it handles tracker data visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and manufacturer instructions always verify details on the official Meitrack site https://www.meitrack.com/ as device behavior and configuration methods can change over time.
