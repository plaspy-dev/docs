---
slug: /tk_star/xe108/configuration
id: xe108-configuration
sidebar_label: Configuration
title: TK-Star - XE108 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK-Star XE108 tracker and Plaspy compatibility
keywords:
  - TK-Star XE108 configuration
  - TK-Star XE108 setup
  - XE108 server configuration
  - Plaspy tracker configuration
  - XE108 GPS tracker setup
  - vehicle tracking XE108
  - XE108 GPRS setup
  - TK-Star tracker Plaspy
  - XE108 SMS commands
  - XE108 APN configuration
---

# TK-Star - XE108 Configuration

This page documents the public configuration context for using the TK-Star XE108 portable GPS tracker with Plaspy. It focuses on the practical server settings, SMS configuration commands provided by the manufacturer, and the steps you should follow to bring the device online in the Plaspy platform. The goal is to help technical users prepare the tracker to report to Plaspy using the shared platform settings.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you generally only need to provide the common server endpoint and port on the device side. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so always cross-check the commands and workflow below with the device manual and the manufacturer web site.

## Configuration Overview

The configuration process prepares the XE108 so it can send location and event data to the Plaspy platform. This includes setting the mobile data APN if required, pointing the device at the Plaspy server, choosing the transport protocol if prompted, and enabling periodic uploads.

- Set the device APN and credentials so the tracker can use mobile data for GPRS reporting.
- Point the tracker to the Plaspy server endpoint so location packets arrive at the platform.
- Configure the upload interval and reporting mode to control how often the device sends position data.
- Validate connectivity so the tracker appears in Plaspy and sends telemetry.
- Use manufacturer SMS or configuration tools to apply settings and reboot the device as needed.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the XE108:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol specific to Plaspy beyond UDP or TCP if the device requires a choice

## Typical Requirements Before Setup

- A charged XE108 device with the SIM card installed and active data allowance if using GPRS reporting.
- Access to the XE108 configuration method supported by the device such as SMS commands or the vendor configuration tool.
- The correct APN, APN username, and APN password for the SIM provider if mobile data is required.
- Knowledge of the device password used to authorize configuration commands (the sample commands below use the device default password 123456).
- A mobile phone capable of sending SMS commands to the tracker if using SMS configuration.
- Basic access to Plaspy and the ability to confirm that the device is listed and reporting in the platform once configuration is complete.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the XE108 is set to send its location and event packets to the shared Plaspy server endpoint on port 8888. Plaspy receives those packets and automatically determines the tracker protocol to decode messages and show telemetry in the platform.

- The tracker reports position updates to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Plaspy accepts connections over UDP or TCP depending on how the device is configured.
- Plaspy automatically detects the tracker protocol so no protocol selection is required beyond choosing UDP or TCP if the device forces transport selection.
- Once the device starts sending packets to the Plaspy endpoint, it becomes visible in the Plaspy platform for monitoring and history trace.
- Event reporting such as SOS, movement alerts, or low battery will be forwarded to Plaspy when the device sends those messages.

## Common Configuration Workflow

1. Access the official TK-Star configuration method such as the SMS command interface described by the manufacturer or a supported configuration tool.
2. Set the device APN and credentials using the manufacturer recommended commands or tool so the tracker can use mobile data.
3. Enter the Plaspy server by specifying d.plaspy.com or the direct IP 54.85.159.138 on the device.
4. Set the port to 8888 on the device configuration.
5. Choose UDP or TCP if the device requires a transport selection.
6. Apply or save the configuration on the device and restart or reboot the tracker if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking the device list and recent positions in the Plaspy platform.

## Example Configuration Commands

The XE108 supports SMS based configuration. The manufacturer provides the following public SMS commands. The default device password used in these examples is 123456. Send each command as a separate SMS to the device phone number.

1. Optional initial factory restore (use only when needed)
```
begin123456
```

2. Set the operator APN (replace {{apn}} with your mobile operator APN)
```
apn123456 {{apn}}
```

3. Set the APN username if required by your operator (replace {{apnu}} with the username)
```
apnuser123456 {{apnu}}
```

4. Set the APN password if required by your operator (replace {{apnp}} with the APN password)
```
apnpasswd123456 {{apnp}}
```

5. Set the GPRS server to the Plaspy endpoint using the direct IP and port
```
adminip123456 54.85.159.138 8888
```

6. Set the upload interval to 60 seconds (example interval)
```
upload123456 60
```

7. Switch the device to GPRS mode so it uses mobile data reporting
```
gprs123456
```

Notes on placeholders and commands:
- Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} as shown and replace them with your operator values when sending SMS.
- The command that points the server uses the Plaspy IP and the required port 8888. You may also provide d.plaspy.com in place of the IP if the device supports domain names.
- The restore factory command begins with begin followed by the device password. Use that only when a factory reset is needed.

## Configuration Notes

- The XE108 manufacturer provides SMS based commands as a simple public method for configuration; some installers use vendor tools instead depending on firmware and tooling.
- Firmware revisions or hardware variants can change available commands, command formats, or default passwords; confirm commands with the latest manufacturer documentation.
- If the device requires choosing transport, test both UDP and TCP. Plaspy accepts either transport on port 8888 and automatically detects the protocol used by the tracker.
- All devices that connect to Plaspy use the same port so use port 8888 consistently for supported devices.
- When changing APN or server settings, allow a short period after reboot for the device to register on the mobile network and begin GPRS reporting.

## Why Use Plaspy with This Configuration

Using the TK-Star XE108 configured to report to Plaspy gives organizations and individuals a streamlined way to receive location updates, event alerts, and history traces in a centralized platform. Plaspy handles protocol detection and accepts connections over standard transport options so once the device is pointed at the shared server endpoint and port, the platform can decode and present the device data.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the most current XE108 specific command references, firmware notes, and hardware details verify the manufacturer information at https://www.tk-star.com/
