---
slug: /xexun/x04/configuration
id: x04-configuration
sidebar_label: Configuration
title: Xexun - X04 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Xexun X04 showing how to point the device to Plaspy for real time tracking and reporting
keywords:
  - Xexun X04 configuration
  - Xexun X04 setup
  - Plaspy tracker configuration
  - Xexun GPS configuration
  - X04 server settings
  - Plaspy device setup
  - GPS tracker SMS commands
  - Xexun X04 APN settings
  - vehicle tracking configuration
  - asset tracking setup
---

# Xexun - X04 Configuration

This page documents the public configuration context for using the Xexun X04 tracker with Plaspy. It explains the shared Plaspy server settings you will need to apply on the device and summarizes practical setup steps to get the tracker reporting to Plaspy for real time visibility and historical playback. Use this guidance together with the device manual and any vendor tools you have for final device-level configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by each device. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The X04 model supports SMS based configuration commands in its public documentation and the commands below reflect that public, SMS based setup approach.

## Configuration Overview

This configuration process prepares the X04 to send its periodic reports and event messages to Plaspy so the device appears in the Plaspy platform for tracking and alerts. The main goals are to point the device at the Plaspy server, ensure cellular data connectivity is configured, set the reporting interval, and confirm the device successfully reports into the Plaspy service.

- Configure APN and GPRS parameters so the device can access the cellular data network.
- Point the device to the Plaspy server endpoint and port used by all Plaspy devices.
- Choose UDP or TCP transport on the device if required and set the reporting interval.
- Send a test or wait for the first scheduled report and validate the device in Plaspy.
- Preserve the default device password or update it as required by your security policy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming device connections
- Note that all devices in Plaspy use the same port for server connections

## Typical Requirements Before Setup

- A working SIM card with an active data plan and SMS capability where required by the device.
- Access to the device power and the ability to receive or send SMS commands to the tracker.
- The official Xexun configuration method or documentation for your device firmware and region.
- Knowledge of the operator APN and optional APN username and password for the SIM.
- A record of the device default password if you need to authenticate SMS configuration commands.
- Access to Plaspy account credentials to verify the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

The X04 is configured to transmit its scheduled reports and event-driven messages over the cellular network to the Plaspy cloud endpoint and port so that Plaspy can present live positions, alerts, and history. Plaspy receives the device traffic on the shared server endpoint and uses automatic protocol detection to interpret the tracker protocol.

- The device sends periodic location reports to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Events such as SOS alarms, geofence triggers, or low battery are forwarded to Plaspy as immediate messages.
- Plaspy automatically detects the device protocol for incoming connections and decodes messages for platform display.
- Transport may be UDP or TCP depending on device settings; the device must be set to the chosen transport while targeting port 8888.
- Once reporting is established, the device becomes visible in Plaspy for live tracking and historical playback.

## Common Configuration Workflow

1. Access the official Xexun configuration method for your unit, typically SMS commands or vendor configuration tools, and confirm the device password.
2. Enter the Plaspy server endpoint into the device configuration by using d.plaspy.com or 54.85.159.138 as the server address.
3. Set the server port to 8888 in the device settings.
4. Choose the transport protocol UDP or TCP if the device requires an explicit transport selection.
5. Configure APN and any APN credentials needed for cellular data connectivity.
6. Apply or save the configuration and restart the device if the device or instructions require a reboot.
7. Validate that the device reports to Plaspy by checking the device status in the Plaspy platform or waiting for the scheduled report.

## Example Configuration Commands

The Xexun X04 public configuration allows SMS commands for setup. The following commands are the documented public SMS commands and keep the command order where it is meaningful. These commands use the device default password 123456 in the examples. If you change the device password, replace 123456 with your active device password.

- Optional initial factory reset (use only when you intentionally need to restore defaults):
```text
begin123456
```

- Set the mobile operator APN. Replace {{apn}} with your SIM operator APN string:
```text
apn123456 {{apn}}
```

- Set the APN username if your operator requires one. Replace {{apnu}} with the APN username:
```text
apnuser123456 {{apnu}}
```

- Set the APN password if needed. Replace {{apnp}} with the APN password:
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server endpoint to Plaspy using the public server IP and port shown in Plaspy documentation:
```text
adminip123456 54.85.159.138 8888
```
Note: The Xexun command above uses the server IP. If your device firmware supports specifying a domain name, you can enter d.plaspy.com in place of the IP where permitted by the device.

- Set the GPRS mode (device specific behavior may alter available modes):
```text
gprsmode123456
```

- Set the periodic reporting interval to 60 seconds:
```text
t060s***n123456
```

Placeholders explanation:
- {{apn}} is the mobile operator APN string required for the device to use cellular data.
- {{apnu}} is an optional APN username when the operator requires authentication.
- {{apnp}} is an optional APN password when the operator requires authentication.

Follow manufacturer guidance for sending SMS commands, and ensure you use the correct device password when issuing commands.

## Configuration Notes

- SMS based configuration is publicly documented for this model and is commonly used for initial setup and remote changes.
- Firmware versions and regional hardware variants can change available command syntax or supported options; verify the syntax for your device firmware.
- When a device requires selecting transport, choose UDP or TCP on the device and be sure port 8888 is set in either case.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection, so the server and port are consistent across devices.
- Keep your device password secure and update it if required by your security policies after initial provisioning.

## Why Use Plaspy with This Configuration

Using the Xexun X04 with Plaspy provides centralized visibility of location and event data for fleets, portable assets, and personal safety use cases. The combination of hybrid positioning and reliable cellular reporting makes the X04 a compact option to feed Plaspy with scheduled reports, SOS events, and geofence alerts for monitoring, notifications, and historical route playback.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and command syntax always verify information with the manufacturer at https://www.xexun.com/ as device behavior and setup methods can change over time.
