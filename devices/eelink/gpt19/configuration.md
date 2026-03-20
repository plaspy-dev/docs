---
slug: /eelink/gpt19/configuration
id: gpt19-configuration
sidebar_label: Configuration
title: EElink - GPT19 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the EElink GPT19 tracker to Plaspy with practical server and SMS setup details
keywords:
  - EElink GPT19 configuration
  - EElink GPT19 setup
  - GPT19 GPS tracker configuration
  - GPT19 Plaspy setup
  - EElink tracker Plaspy
  - GPS tracker server configuration
  - vehicle tracking GPT19
  - GPT19 SMS configuration
  - fleet tracking GPT19
  - EElink GPT19 instructions
---

# EElink - GPT19 Configuration

This page documents the public configuration context for using the EElink GPT19 tracker with the Plaspy platform. It collects the practical server settings and SMS configuration commands that are commonly used to point the device to Plaspy so the tracker can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at connection time. Manufacturer side setup steps for the GPT19 can vary by firmware version, hardware revision, installation type, and the vendor tools you use; this guide focuses on the public settings and SMS commands that are commonly used for GPT19 models when integrating with Plaspy.

## Configuration Overview

This configuration process prepares the GPT19 to communicate reliably with Plaspy and lets you verify that the device appears in the platform. The steps below summarize the practical goals when configuring a GPT19 for Plaspy compatibility.

- Configure the device to report to the Plaspy server endpoint and port so telemetry is received.
- Set the operator APN so the device can establish GPRS data when required.
- Select transport (UDP or TCP) and confirm the device sends to Plaspy port 8888.
- Adjust reporting interval and basic parameters to match your monitoring needs.
- Verify settings and confirm the device appears and reports correctly in Plaspy.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the GPT19. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol at connection time.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- A powered and accessible GPT19 tracker with SIM and battery installed according to manufacturer instructions.
- Access to the device configuration method supported for your unit such as SMS commands or the official Eelink configuration tool.
- The operator APN and optional APN credentials for the SIM card that will provide GPRS data.
- A method to send SMS commands to the tracker if using SMS based configuration.
- Basic knowledge of whether the device should use UDP or TCP on the network you will deploy.

## How This Tracker Connects to Plaspy

When configured, the GPT19 reports position and status to the Plaspy platform by sending data packets to the shared endpoint and port. Plaspy automatically identifies the tracker protocol so you do not need to choose a special server port per device.

- The tracker is pointed to the Plaspy server endpoint at d.plaspy.com or the equivalent server IP.
- Data is sent to port 8888 which is the common port used by Plaspy for all supported devices.
- You can choose UDP or TCP as the transport when the device requires a transport selection.
- Plaspy automatically detects the device protocol on connection and interprets incoming messages.
- Once reporting is active, the device becomes visible in Plaspy for location, event, and status monitoring.

## Common Configuration Workflow

1. Access the official EElink configuration method for your GPT19 model, typically SMS commands or the manufacturer configuration tool.
2. Enter the Plaspy server as either d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP on the tracker if the device requires a transport selection.
5. Configure the APN and any APN credentials required by your SIM.
6. Apply or save the configuration and restart the device if required by the firmware or after major changes.
7. Validate that the tracker is reporting to Plaspy and visible on the platform.

## Example Configuration Commands

The GPT19 supports SMS based configuration. Below are the public SMS commands that are commonly used to configure the device for Plaspy. Preserve placeholders and replace them with your actual values where indicated.

- Reset device to factory settings (optional initial step)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
Note: {{apn}} is the APN name. {{apnu}} and {{apnp}} are optional APN username and password placeholders and may be omitted if your operator does not require them.
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to use the Plaspy domain (UDP or TCP on port 8888)
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server by IP address
```text
SERVER,0,54.85.159.138,8888#
```

- Set the position update interval to 60 seconds
```text
TIMER,60#
```

- Query current parameters to verify settings
```text
PARAM#
```

Use the SERVER command format that matches your preference for domain or IP. The SERVER command examples above explicitly point the device to Plaspy using the required shared port 8888.

## Configuration Notes

- The GPT19 supports SMS based configuration as shown in the example commands; use the official SMS syntax from Eelink for your firmware version.
- Some firmware revisions may vary in command syntax or available parameters. Verify commands against the device manual before sending.
- Choose UDP or TCP based on network conditions and any guidance from your connectivity provider; Plaspy accepts both transports on port 8888.
- When using placeholders such as {{apn}}, replace them with the actual APN string provided by the mobile operator. If APN username or password are not required, omit those fields according to the device command rules.
- Always confirm settings by using the PARAM# query and by checking device visibility in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Configuring the EElink GPT19 to report to Plaspy gives organizations a consistent server endpoint and predictable setup for fleet and asset monitoring. Using the shared Plaspy server settings simplifies provisioning because all supported devices use the same port and Plaspy automatically detects the protocol, allowing faster integration and operational visibility.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration details and firmware documentation at the manufacturer site https://www.eelink.com.cn/. Manufacturer specifications, available commands, and firmware behavior can change over time so always confirm the current instructions on the official EElink documentation.
