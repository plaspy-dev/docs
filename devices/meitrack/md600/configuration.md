---
slug: /meitrack/md600/configuration
id: md600-configuration
sidebar_label: Configuration
title: Meitrack - MD600 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Meitrack MD600 configuration to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Meitrack MD600 configuration
  - Meitrack MD600 setup
  - MD600 Plaspy configuration
  - MD600 server configuration
  - MD600 GPS tracker setup
  - Meitrack tracker Plaspy
  - vehicle DVR configuration
  - MD600 GPRS setup
  - fleet tracking MD600
  - MD600 SMS commands
---

# Meitrack - MD600 Configuration

This page covers the public configuration context for using the Meitrack MD600 with Plaspy. It provides the practical server settings and sample manufacturer-side commands that are commonly used to prepare an MD600 device to report location and events into the Plaspy platform. Use this guide to understand what Plaspy expects and how the MD600 can be prepared to communicate with Plaspy's shared endpoint.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The MD600 supports SMS and GPRS configuration pathways; the sample SMS commands included below use the device default password 0000 and demonstrate how to point the device at Plaspy's server endpoint.

## Configuration Overview

Configuring the MD600 for Plaspy ensures the device reports telemetry, events, and (where applicable) associated video metadata to a single Plaspy server endpoint. The process prepares the MD600's GPRS parameters, reporting cadence, and event reporting so the device becomes visible and manageable inside Plaspy.

- Set the device server and GPRS parameters so the MD600 sends data to Plaspy
- Configure reporting interval and event flags to match monitoring needs
- Validate connectivity and that the device appears inside Plaspy after saving changes
- Optionally perform a factory reset or initial configuration over SMS when required
- Ensure the device uses the shared Plaspy endpoint and port for consistent behavior across fleets

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and installed MD600 with access to its SMS or manufacturer configuration tool
- An active cellular SIM with data enabled and the correct APN settings for the network
- Knowledge of the device password (sample default shown below is 0000)
- Manufacturer documentation or access to the Meitrack configuration method for your firmware
- Stable cellular coverage to validate GPRS connectivity and data reporting
- A Plaspy account and fleet provisioning to confirm the device appears after configuration

## How This Tracker Connects to Plaspy

When configured, the MD600 reports GNSS location, digital events, and telemetry to the shared Plaspy endpoint and port so Plaspy can display live tracking, alerts, and historical data. The MD600 can also stream video and attach telemetry to video sessions when that functionality is part of your deployment, while Plaspy focuses on ingesting the telematics and event streams.

- The tracker is pointed at the Plaspy server IP or domain and sends GPRS data to port 8888
- Data transport may use UDP or TCP depending on device settings and network considerations
- Plaspy detects the device protocol automatically and parses incoming telemetry for mapping and alerts
- Configured event reporting (ignition, inputs, alerts) is forwarded to Plaspy for immediate notification
- After successful configuration the device should appear in Plaspy and show periodic position updates

## Common Configuration Workflow

1. Access the official Meitrack configuration method for the MD600 (SMS commands, manufacturer software, or installer tool) appropriate for your firmware and hardware revision.
2. Enter the Plaspy server address by using either the domain d.plaspy.com or the IP 54.85.159.138 as required by the device UI or command syntax.
3. Set the communication port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires selecting a transport protocol.
5. Set the device APN and any APN username or password placeholders as needed for your SIM.
6. Apply or save the configuration and restart the device if the device or workflow requires a restart.
7. Validate that the MD600 reports to Plaspy by checking device registration and live updates in the Plaspy platform.

## Example Configuration Commands

The MD600 can be configured via SMS commands. The sample commands below use the device default password 0000. Preserve the placeholders when you enter your own APN settings.

- Optional initial factory reset (use only when required or as part of initial provisioning)
```text
0000,F11
```

- Set the GPRS server to Plaspy using the Plaspy server IP and port. Placeholders:
  - [apn] = your SIM carrier APN
  - [apnu] = APN username (optional)
  - [apnp] = APN password (optional)
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Note: This command shows the IP address form used in the sample manufacturer guidance. You may enter d.plaspy.com in device tools or UIs that accept domain names instead of an IP.

- Set the time zone to UTC+0
```text
0000,B36,0
```

- Set the position update interval to every 1 minute
```text
0000,A12,6,0
```

- Set event reporting flags (manufacturer default example)
```text
0000,C03,0
```

Use these SMS commands exactly as shown for devices that accept SMS configuration. If you use a manufacturer configuration tool or over-the-air provisioning, apply the same server, port, transport, APN and reporting interval values via that tool.

## Configuration Notes

- Firmware and tool differences can change command syntax or available parameters; always confirm with the MD600 firmware version documentation.
- SMS setup is widely supported by Meitrack devices, but many installers prefer the manufacturer PC or mobile configuration tools for bulk or secure provisioning.
- Choose UDP or TCP according to network reliability and your operator behavior; Plaspy accepts either transport on port 8888.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so consistent server and port settings simplify fleet provisioning.
- Preserve the default device password knowledge and change it according to your security policy after initial setup if the device and workflow permit.

## Why Use Plaspy with This Configuration

Using the MD600 with Plaspy gives fleets a unified telematics and video-capable solution where GNSS positions, digital events, and device telemetry are consolidated into a single platform for monitoring and incident review. Pointing the MD600 at Plaspy's shared server and port, and validating the device reports correctly, lets operators take advantage of Plaspy's mapping, alerting, and historical data tools while maintaining consistent provisioning across devices.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official command references confirm current documentation at the manufacturer site https://www.meitrack.com/ since device behavior and setup methods can change over time.
