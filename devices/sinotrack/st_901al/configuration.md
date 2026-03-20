---
slug: /sinotrack/st_901al/configuration
id: st_901al-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901AL Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration instructions for SinoTrack ST 901AL to connect to Plaspy using SMS and GPRS server settings
keywords:
  - SinoTrack ST 901AL configuration
  - SinoTrack ST 901AL setup
  - ST 901AL Plaspy configuration
  - ST 901AL server configuration
  - ST 901AL SMS commands
  - ST 901AL APN setup
  - GPS tracker Plaspy integration
  - vehicle tracker configuration guide
  - GPRS server configuration
  - fleet tracker setup
---

# SinoTrack - ST-901AL Configuration

This page documents the public configuration context for using the SinoTrack ST-901AL with Plaspy. It shows the shared server values Plaspy requires and provides practical setup guidance based on the publicly available SMS command flow for SinoTrack devices. Use this page as a reference for pointing the tracker to Plaspy and validating basic connectivity in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so always cross check manufacturer instructions. The example SMS commands below are the documented public commands for SinoTrack devices and are presented in the order shown in the device documentation where applicable.

## Configuration Overview

Configuring the ST-901AL for Plaspy ensures the tracker sends its GPRS location and event data to the Plaspy ingestion endpoint so assets become visible in the Plaspy platform. The process typically prepares network access, points the device to the correct server and port, and verifies reporting using the device verification command.

- Prepare the device with a powered installation and an active SIM configured for data.
- Set APN credentials so the tracker can use GPRS to reach Plaspy.
- Point the tracker to Plaspy using the platform server domain or IP and the shared port used by Plaspy.
- Use the device verification command to confirm the tracker ID and server entries are correct.
- Validate the device appears and reports location in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com for platform endpoint configuration
- Server IP 54.85.159.138 as an alternate or direct server address
- Port 8888 which Plaspy uses for all supported devices
- Transport support: configure UDP or TCP on port 8888 depending on device requirements
- Plaspy automatically detects the tracker protocol so devices using standard reporting can be ingested without manual protocol selection in Plaspy

## Typical Requirements Before Setup

- A powered and installed ST-901AL with access to wiring and an installer for secure mounting
- A working SIM with an active data plan and the correct APN credentials for the mobile operator
- Ability to send SMS commands to the device from an authorized phone number or installer tool
- The device IMEI or reported device ID to match the unit in Plaspy
- Manufacturer documentation or access to installer support in case firmware-specific differences appear
- Optional: a short test route or stationary test window to observe GPRS reports arriving in Plaspy

## How This Tracker Connects to Plaspy

The ST-901AL is configured to send GPRS location and event data to the Plaspy server. By setting the device APN and GPRS server values to Plaspy, the tracker will establish a data session and push periodic updates to the shared Plaspy endpoint and port.

- The tracker uses configured APN credentials to establish a GPRS data connection
- GPRS reporting is directed to Plaspy at d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy receives the incoming connection (UDP or TCP) and automatically detects the tracker protocol
- Location updates and events become visible in Plaspy for monitoring and alerting
- SMS remains available for fallback configuration and some event reporting depending on installer preference

## Common Configuration Workflow

1. Access the official manufacturer configuration method documented by SinoTrack, typically SMS commands or an approved installer tool.
2. Ensure the device has a working SIM and enter the operator APN credentials using the APN command.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device settings.
4. Set the device port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP transport if the device requires a transport selection; either is supported on Plaspy where the tracker accepts it.
6. Apply or save the configuration and switch the device to GPRS reporting mode if required by the device.
7. Restart or power cycle the tracker when prompted by the manufacturer instructions.
8. Validate the device reports to Plaspy by using the device verification command and checking that the unit appears in the Plaspy dashboard.

## Example Configuration Commands

The following SMS commands are the documented public commands for SinoTrack devices and are presented in the order shown in the manufacturer documentation. Preserve the placeholders when entering APN credentials.

- Optional initial step to restore defaults (use only when needed):
```text
RESET
```

- Set time zone to UTC 0:
```text
8960000E00
```

- Set the APN of the mobile operator. Replace the placeholders with your operator values:
```text
8030000 [apn] [apnu] [apnp]
```
Explanation of placeholders:
- [apn] is the APN name provided by your SIM operator
- [apnu] is the APN username if required by your operator (empty if not needed)
- [apnp] is the APN password if required by your operator (empty if not needed)

- Set the GPRS server to the Plaspy server IP and port. This example uses the Plaspy server IP and shared port:
```text
8040000 54.85.159.138 8888
```
Note: If your device firmware accepts a domain instead of an IP, d.plaspy.com is the Plaspy domain endpoint to use where supported.

- Set upload interval when ignition or movement is detected (example interval in seconds):
```text
8050000 60
```

- Set upload interval when the device is off or stationary (example interval in seconds):
```text
8090000 60
```

- Switch the tracker to GPRS reporting mode:
```text
7100000
```

- Verify current device settings and retrieve the device ID used by Plaspy ingestion:
```text
RCONF
```

Follow the commands in the listed order for initial setup when appropriate. Only issue RESET where a factory restore is required.

## Configuration Notes

- SinoTrack SMS configuration is a common field method for installers; some installers may use a software tool instead depending on vendor tooling and firmware.
- Firmware revisions and hardware variants can change exact command behavior or accepted parameters; verify against the device manual when possible.
- The device configuration example uses the Plaspy server IP 54.85.159.138 and port 8888; where the device allows a domain, d.plaspy.com can be used as the domain endpoint.
- Choose UDP or TCP based on installer preference and device support; Plaspy accepts both transports and automatically detects the protocol used by incoming devices.
- Always confirm the device reports to Plaspy after configuration using RCONF and by checking visibility in the Plaspy platform.

## Why Use Plaspy with This Configuration

Using the SinoTrack ST-901AL with Plaspy provides a straightforward route to reliable vehicle monitoring and operational oversight. The ST-901AL supports SMS and GPRS reporting and exposes APN and server configuration by SMS, which makes it practical for rapid field deployments and integration into an existing Plaspy tracking environment.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer documentation verify information at the official SinoTrack website https://www.sinotrackgps.com/ as setup methods and firmware behavior can change over time.
