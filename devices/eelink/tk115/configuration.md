---
slug: /eelink/tk115/configuration
id: tk115-configuration
sidebar_label: Configuration
title: EElink - TK115 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK115 tracker setup and server settings for Plaspy compatibility and basic SMS commands
keywords:
  - EElink TK115 configuration
  - TK115 setup Plaspy
  - EElink tracker configuration
  - TK115 server configuration
  - EElink GPS tracker setup
  - Plaspy tracker integration
  - vehicle tracking TK115
  - GPS platform setup TK115
  - TK115 SMS configuration
  - fleet management Plaspy
---

# EElink - TK115 Configuration

This page covers the public configuration context for using the EElink TK115 tracker with Plaspy. It provides the shared server settings Plaspy expects and explains the practical steps needed to point an EElink TK115 at Plaspy so the device can deliver location, status, and alarm events into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by device firmware, hardware revision, installation type, and vendor tools, so use the manufacturer documentation alongside these public instructions where needed.

## Configuration Overview

This configuration process prepares the TK115 to communicate reliably with Plaspy by setting server endpoints, transport, reporting interval, and APN where required. The goal is to ensure the device can establish GPRS connectivity and send telemetry to Plaspy so the tracker appears in the platform and reports events.

- Point the device to the Plaspy server endpoint so telemetry and alarms are delivered.
- Configure APN and GPRS parameters so the TK115 can use mobile data.
- Set reporting interval and timers to control update frequency and battery use.
- Verify configuration using a manufacturer verification command or device response.
- Validate the device appears and reports correctly within Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and assigns protocol handling accordingly
- Note that all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A working SIM card with an active data plan and the correct APN for the mobile operator
- Access to the TK115 physical device and any manufacturer configuration method supported for your device (SMS commands, dealer tool, or remote parameter management)
- A stable power source during configuration and knowledge of the device power wiring and backup battery status
- Basic information such as the APN, APN username, and APN password for the SIM; placeholders may be used in commands
- A way to receive or send SMS to the device if using SMS based configuration
- Access to Plaspy platform credentials and device registration procedure if required by your Plaspy account

## How This Tracker Connects to Plaspy

When configured, the TK115 sends periodic telemetry and event messages to the shared Plaspy server endpoint and port so the platform can present live location, status, and alarms to operators. Plaspy ingests the incoming messages and associates them with the correct account and device.

- The tracker reports location fixes and assisted positioning information to the Plaspy server endpoint
- Status signals such as ACC or power events and alarm notifications are delivered to Plaspy
- The device uses GPRS to establish a connection to the Plaspy server domain or IP on port 8888
- Transport may be UDP or TCP depending on device settings; Plaspy accepts both and automatically detects the tracker protocol
- Once reporting is active, device visibility, alerts, and telemetry are available through Plaspy

## Common Configuration Workflow

1. Access the official EElink configuration method for the TK115 such as SMS commands or the manufacturer tool documented by EElink.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the server setting.
3. Set the server port to 8888; Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport on the device if your TK115 configuration requires a transport selection.
5. Configure APN, APN username, and APN password as required for your SIM card using the manufacturer method.
6. Apply or save the device configuration and restart the tracker if required by the device or firmware.
7. Validate that the device reports to Plaspy by checking device status in the platform and using any verification command provided by EElink.

## Example Configuration Commands

The TK115 can be configured using SMS commands. The following public commands are provided as an ordered example and should be sent by SMS to the device. Preserve placeholders where shown.

- Optional initial factory reset (use only when needed)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,{{apn}}# 
```
If your APN requires a username and password, include these placeholders:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Note: {{apn}} is the APN string for your mobile operator. {{apnu}} and {{apnp}} are optional APN username and password placeholders.

- Set the GPRS server using the Plaspy domain (example using domain)
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server using the Plaspy IP (example using IP)
```text
SERVER,0,54.85.159.138,8888#
```

- Set the location update interval to 60 seconds
```text
TIMER,60#
```

- Check current device parameters
```text
PARAM#
```

Follow the commands in the order required by your deployment. The factory reset command is optional and should be used only when you need to restore defaults before reconfiguration.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; always confirm command compatibility with your TK115 firmware.
- SMS based configuration is commonly supported for TK115 devices; if a software tool or remote management service is available from EElink, prefer the method recommended by your supplier for bulk deployments.
- Choose UDP or TCP according to installer preference or network considerations; Plaspy accepts both on port 8888 and will auto detect the protocol.
- Use either the domain d.plaspy.com or the IP 54.85.159.138 when setting the server. Both forms are accepted by Plaspy; the port must be 8888.
- Keep APN credentials accurate; placeholders such as {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your operator values when sending commands.

## Why Use Plaspy with This Configuration

Configuring the EElink TK115 to report to Plaspy gives fleet operators and security teams consistent, centralized visibility into vehicle location, alarm events, and status signals like ACC. Using the shared Plaspy server settings simplifies device provisioning across fleets because all devices use the same Plaspy port and the platform automatically detects the tracker protocol.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific instructions, firmware notices, and manufacturer details verify current information at the EElink website https://www.eelink.com.cn/. Manufacturer specifications and setup methods can change over time so confirm the exact steps for your device and firmware revision before wide deployment.
