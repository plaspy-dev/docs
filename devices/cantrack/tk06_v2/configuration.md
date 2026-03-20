---
slug: /cantrack/tk06_v2/configuration
id: tk06_v2-configuration
sidebar_label: Configuration
title: CanTrack - TK06 v2 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for using the CanTrack TK06 v2 with Plaspy and the shared server settings for real time tracking
keywords:
  - CanTrack TK06 v2 configuration
  - CanTrack TK06 v2 setup
  - CanTrack tracker configuration
  - Plaspy integration
  - TK06 v2 server configuration
  - GPS tracker APN setup
  - GPRS tracker configuration
  - vehicle tracking setup
  - SMS configuration commands
  - fleet tracking Plaspy
---

# CanTrack - TK06 v2 Configuration

This page covers the public configuration context for using the CanTrack TK06 v2 with Plaspy. It explains the practical, publicly available steps and sample SMS commands used to point the device at Plaspy so the tracker can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the device. Exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The instructions below use public configuration samples and show how to apply Plaspy server details so the TK06 v2 can communicate with the platform.

## Configuration Overview

The goal of configuring a TK06 v2 for Plaspy is to prepare the device to send location and status data via the GSM/GPRS network to Plaspy, validate connectivity, and ensure the device appears in the Plaspy platform for monitoring.

- Set the device APN and network parameters so it can use GPRS to reach Plaspy
- Configure the device to report to the Plaspy server address and port
- Adjust reporting interval and timezone for accurate data and expected update cadence
- Verify the device is reachable and that Plaspy receives the initial reports
- Use the manufacturer supported configuration method such as SMS commands when available

## Plaspy Server Settings

- Server domain d.plaspy.com is the canonical server name for device reporting to Plaspy
- Server IP 54.85.159.138 may be used where the device requires an IP address
- Port 8888 is the shared port used by all devices connecting to Plaspy
- Transport support for UDP or TCP; the device may be configured to use either UDP or TCP
- Plaspy automatically detects the tracker protocol so devices reporting to the shared endpoint are handled by the platform

## Typical Requirements Before Setup

- A powered TK06 v2 device with GSM signal and a working SIM that supports data and SMS
- Access to the device for SMS based configuration or the manufacturer configuration tool
- APN credentials from the mobile operator (APN, APN username, APN password) if required
- Knowledge of the device password used for configuration; the public example below uses the default password 123456
- Ability to receive confirmation messages from the tracker and to observe incoming connections in Plaspy after setup

## How This Tracker Connects to Plaspy

The TK06 v2 can be configured to transmit GPS and status information over the cellular network using GPRS to a server endpoint controlled by Plaspy. Once configured, the device sends periodic updates that Plaspy processes and displays in the platform.

- Device is configured to use the operator APN so GPRS traffic is allowed
- Tracker is pointed at the Plaspy server domain or IP and the shared port
- Data is sent over UDP or TCP depending on device selection and network conditions
- Plaspy receives and automatically identifies the device protocol for parsing
- Once reporting, the device becomes visible in Plaspy for location, events, and monitoring

## Common Configuration Workflow

1. Access the official CanTrack configuration method such as SMS commands or the manufacturer tool per the TK06 v2 documentation.
2. Enter the Plaspy server information either as the domain d.plaspy.com or the IP address 54.85.159.138 when the device requires an IP.
3. Set the device port to 8888, which is the port Plaspy uses for all supported devices.
4. Choose UDP or TCP in the device transport settings if the tracker requires a transport selection.
5. Apply or save the configuration to the device using the manufacturer's command or tool.
6. Restart the device if required by the device or if recommended by the manufacturer.
7. Validate that the device reports to Plaspy by checking the tracker status in the Plaspy platform and confirming incoming data.

## Example Configuration Commands

The CanTrack TK06 v2 supports SMS-based configuration. The following public example commands are provided in the manufacturer sample and show a typical order for setup. The sample uses the device default password 123456. Replace placeholders and values as needed for your operator and deployment.

- Optional initial factory reset (use only if you need to reset the device to factory defaults)
```text
begin123456
```

- Set the operator APN. Replace the placeholders with your operator APN, APN username, and APN password as required by your SIM.
```text
apn123456 [apn] [apnu] [apnp]
```
Explanation of placeholders:
- [apn] is the mobile operator APN string
- [apnu] is the APN username if required (leave blank or omit if not used)
- [apnp] is the APN password if required (leave blank or omit if not used)

- Set the timezone to UTC0 (example uses value 0 for UTC)
```text
timezone123456 0
```

- Set the positional update interval to 60 seconds
```text
ITV123456 60
```

- Configure the GPRS server to point to Plaspy using the public IP and port
```text
adminip123456 54.85.159.138 8888
```
This command sets the device to report to Plaspy at IP 54.85.159.138 on port 8888. Some devices accept domain names in different command variants; use the device's documented commands when available.

- Verify current settings on the tracker
```text
check123456
```

Keep the command order as above when following a recommended setup sequence. Modify values for reporting interval, timezone, and APN to match your operational needs.

## Configuration Notes

- SMS based configuration is supported and commonly used for initial setup with the TK06 v2; follow the exact command syntax required by your device firmware.
- The example uses the default device password 123456 as shown in the public sample; if your device password differs change it in each command.
- Some firmware revisions accept domain names instead of IP in server configuration. If your firmware supports it, d.plaspy.com can be used where domain commands are available.
- Choose UDP or TCP according to installation preference; both are supported and Plaspy will detect the incoming protocol automatically.
- Firmware behavior and available commands can vary by hardware revision and vendor firmware; always confirm with the latest manufacturer documentation.

## Why Use Plaspy with This Configuration

Configuring a CanTrack TK06 v2 to report to Plaspy provides a practical way to centralize vehicle location, event reporting, and basic telemetry in a single platform. For organizations that need fleet visibility or asset tracking, using the shared Plaspy endpoint simplifies device onboarding and ensures consistent handling of incoming tracker data.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and official documentation for the CanTrack TK06 v2 consult the manufacturer at https://www.cantrackgps.com/ to verify the most current setup details and command syntax.
