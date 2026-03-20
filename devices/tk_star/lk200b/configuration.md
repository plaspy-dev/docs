---
slug: /tk_star/lk200b/configuration
id: lk200b-configuration
sidebar_label: Configuration
title: TK-Star - LK200B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK-Star LK200B showing Plaspy server settings and sample SMS commands for GPRS connection
keywords:
  - TK-Star LK200B configuration
  - TK-Star LK200B setup
  - LK200B server configuration
  - LK200B GPRS setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - GPS tracker SMS commands
  - vehicle tracking setup
  - LK200B tracking software configuration
  - fleet tracking integration
---

# TK-Star - LK200B Configuration

This page covers the public configuration context for using the TK-Star LK200B tracker with Plaspy. It explains the shared Plaspy server settings you will point the device to, shows practical setup steps used in the field, and extracts the common SMS commands that are publicly documented for this model. Use this guide to prepare the tracker for Plaspy visibility and to help validate connectivity before adding devices in the Plaspy platform.

Plaspy uses a single shared server endpoint and port for supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The commands shown here are the publicly available SMS-based setup sequence for the LK200B and should be used as a practical reference alongside the official manufacturer documentation.

## Configuration Overview

The goal of configuration is to prepare the LK200B so it can reliably communicate location and status information to Plaspy. On the LK200B this commonly means setting the operator APN, pointing the device at the Plaspy server, selecting the transport if required, and enabling periodic upload intervals.

- Configure the device APN and credentials so the tracker has mobile data access.
- Point the device GPRS server to Plaspy using the provided domain or IP and the shared port.
- Set an upload interval so the tracker sends periodic location updates to Plaspy.
- Switch the tracker into GPRS reporting mode and confirm connectivity via SMS or platform logs.
- Validate the tracker appears in Plaspy and is reporting at the expected interval.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on the tracker side  
- automatic protocol detection in Plaspy so you do not need to select a protocol in the platform

## Typical Requirements Before Setup

- A powered LK200B tracker with a working SIM that has data enabled and optionally SMS capability.  
- Access to the vendor configuration method you prefer such as SMS commands or official configuration tool.  
- Knowledge of the device password for SMS administration (default provided in public commands below).  
- APN information from the mobile operator including APN name and optional APN username and password.  
- A plan for periodic upload interval and a test procedure to confirm the device reports to Plaspy.

## How This Tracker Connects to Plaspy

The LK200B is configured to send GPRS data to the Plaspy server endpoint and port so Plaspy can receive position, status, and event reports. Plaspy will use the configured network port and auto-detect the tracker protocol when the device connects.

- The tracker sends GPRS packets to d.plaspy.com or to the IP 54.85.159.138 on port 8888.  
- The device can use either UDP or TCP transport depending on device firmware settings.  
- Plaspy automatically detects the tracker protocol so the platform can parse incoming messages.  
- Regular upload intervals allow continuous visibility and historical trace collection in Plaspy.  
- Platform-side logs and device reply messages (when enabled) help validate a successful connection.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS administration or the TK-Star tool documented by the vendor.  
2. Enter the Plaspy server using the domain d.plaspy.com or the server IP 54.85.159.138 depending on your preferred setup.  
3. Set the destination port to 8888 as Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP on the tracker if the device requires an explicit transport selection.  
5. Apply or save the configuration and switch the device to GPRS reporting mode if required.  
6. Restart or reboot the device when instructed by the manufacturer's guidance.  
7. Validate that the device reports to Plaspy by checking platform device list or recent telemetry entries.

## Example Configuration Commands

The LK200B supports SMS-based configuration. The following public SMS commands are shown in the manufacturer documentation. The device default password in these examples is 123456. Replace placeholders and the password if you have changed the admin password.

- Optional initial factory restore (use only if you need to reset to factory settings):
```text
begin123456
```

- Set the operator APN (replace {{apn}} with your operator APN name):
```text
apn123456 {{apn}}
```

- Set the APN username (optional, replace {{apnu}} with APN username):
```text
apnuser123456 {{apnu}}
```

- Set the APN password (optional, replace {{apnp}} with APN password):
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to Plaspy using the public IP and port:
```text
adminip123456 54.85.159.138 8888
```
You may also point to the domain instead of the IP if the device supports domain names.

- Set the upload interval to 60 seconds (adjust the number to your desired interval in seconds):
```text
upload123456 60
```

- Switch the tracker to GPRS mode (enables data reporting):
```text
gprs123456
```

Notes on placeholders:
- {{apn}} is your mobile operator APN name.  
- {{apnu}} is the APN username if required by the operator.  
- {{apnp}} is the APN password if required by the operator.  
- Keep the numeric admin password (123456) if you have not changed it; it is used as part of each SMS command string. Change the password in official device procedures if required.

## Configuration Notes

- Manufacturer firmware variations can change the exact command syntax or available options; always confirm commands against your device firmware version.  
- If your LK200B supports domain names, you can use d.plaspy.com instead of the IP; both point to the same Plaspy endpoint.  
- Choose UDP or TCP based on your local network conditions and any vendor recommendations; Plaspy will accept either and will detect the protocol automatically.  
- SMS based setup is useful in the field when no configuration tool is available; ensure you use the correct admin password and keep a record of changes.  
- After changing APN or server settings, validate connectivity by observing reporting in Plaspy or by checking for any acknowledgement messages from the device.

## Why Use Plaspy with This Configuration

Using the LK200B with Plaspy gives a straightforward route to bring tracker telemetry into a single platform for monitoring, alerts, and route history. The shared Plaspy server settings mean you can standardize deployment across devices by pointing trackers at the same domain or IP and port, reducing per-device configuration complexity.

To learn more or review Plaspy features and platform capabilities, visit https://www.plaspy.com. For the most current LK200B device-specific setup details, firmware notes, and official commands verify the manufacturer documentation at https://www.tk-star.com/ as vendor instructions and firmware behavior can change over time.
