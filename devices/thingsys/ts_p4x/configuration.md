---
slug: /thingsys/ts_p4x/configuration
id: ts_p4x-configuration
sidebar_label: Configuration
title: ThingSys - TS-P4X Configuration
sidebar_class_name: menu_item_tracker
description: Public setup and server configuration guidance for ThingSys TS P4X to connect with Plaspy tracking platform
keywords:
  - ThingSys TS-P4X configuration
  - ThingSys TS-P4X setup
  - TS-P4X Plaspy configuration
  - TS-P4X server setup
  - TS-P4X GPS tracker configuration
  - container tracker configuration
  - Plaspy device setup
  - GPRS tracker configuration
  - fleet tracking TS-P4X
  - TS-P4X SMS configuration
---

# ThingSys - TS-P4X Configuration

This page covers the public configuration context for using the ThingSys TS-P4X tracker with the Plaspy platform. It summarizes the shared Plaspy server settings, typical prerequisites, and the practical SMS commands provided by ThingSys so the device can report location and telemetry to Plaspy. Use this guide together with the TS-P4X user manual and ThingSys tools for full device management.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools. The TS-P4X supports SMS based configuration for core parameters such as APN and server endpoint and the examples below reflect the publicly available commands.

## Configuration Overview

This configuration prepares the TS-P4X to send GPRS location and telemetry records to Plaspy so the device becomes visible in the platform for real time tracking and historical playback. The process typically involves applying carrier APN details, pointing the device at the Plaspy server endpoint and port, and validating that data reaches the platform.

- Apply the mobile operator APN, username, and password so the tracker can establish GPRS connectivity.
- Configure the device to report to the Plaspy server using the provided server address and port.
- Choose the transport protocol if the device requires a selection between UDP and TCP.
- Save and apply the configuration, and if needed perform a restart so settings take effect.
- Verify connectivity and that location and alarm events appear in Plaspy.

## Plaspy Server Settings

- Use the Plaspy server domain d.plaspy.com for DNS based configuration where a domain is accepted by the device.
- The known Plaspy server IP is 54.85.159.138 for direct IP based configuration.
- Port 8888 is the Plaspy ingest port and is used by all supported devices in Plaspy.
- The TS-P4X may be configured to send data using either UDP or TCP depending on firmware and settings.
- Plaspy automatically detects the tracker protocol when a device connects to the server and uses the same port for all devices.

## Typical Requirements Before Setup

- A charged TS-P4X with sufficient backup battery or external power to complete configuration steps.
- A valid cellular SIM with data enabled and GPRS available in the deployment area.
- The mobile operator APN, and if required the APN username and APN password for the SIM.
- Access to the ThingSys SMS configuration method or the manufacturer configuration tool for the TS-P4X.
- Knowledge of the device password for protected SMS commands; the public default password in the sample commands is 123456.
- Physical access to the device for initial activation and to confirm LED status and placement.

## How This Tracker Connects to Plaspy

The TS-P4X transmits positional fixes and device telemetry over GPRS to the Plaspy server endpoint and port. Plaspy ingests location streams, alarm events, and any blind-area buffered records after connectivity is restored so you can monitor assets in real time and review history.

- The tracker is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Data transport can be sent over UDP or TCP depending on device settings and network behavior.
- Plaspy automatically detects the tracker protocol when the device establishes a session on the shared port.
- Alarm events, lock state changes, and stored blind-area records are forwarded to Plaspy for eventing and history.
- Once reporting is validated, the device will be visible in Plaspy for live tracking and analytics.

## Common Configuration Workflow

1. Access the official ThingSys configuration method for the TS-P4X, for example the SMS command set or the ThingSys configuration utility documented by the manufacturer.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the direct IP 54.85.159.138 as supported by the device.
3. Set the server port to 8888, which is the standard Plaspy ingest port used across devices.
4. Choose UDP or TCP if the device requires an explicit transport selection for data reporting.
5. Apply or save the configuration and send any required confirmation commands via SMS or the configuration tool.
6. Restart the device if the manufacturer instructions indicate a reboot is required to apply network settings.
7. Validate that the TS-P4X is reporting to Plaspy by checking device presence and recent location updates on the platform.

## Example Configuration Commands

The TS-P4X supports SMS based commands for many basic configuration tasks. Below are the public SMS commands provided in ThingSys documentation. The device default password used in these sample commands is 123456. Preserve and replace placeholders when applying commands.

1. Optional initial factory reset (use only when required):
```
FORMAT
```
This command resets device settings to factory defaults. Label this step optional and only use it when a fresh configuration state is necessary.

2. Set the operator APN (replace {{apn}} with your carrier APN):
```
apn123456 {{apn}}
```

3. Set the APN username (replace {{apnu}} with your APN user if required):
```
apnuser123456 {{apnu}}
```

4. Set the APN password (replace {{apnp}} with your APN password if required):
```
apnpasswd123456 {{apnp}}
```

5. Set the GPRS server to Plaspy using the public IP and port:
```
ip54.85.159.138 8888
```
This SMS configures the device to report directly to Plaspy at 54.85.159.138 on port 8888. You can use the domain d.plaspy.com instead if the device supports DNS entry via SMS or configuration utility.

6. Check current settings and status:
```
CXZT
```
This verification command retrieves current configuration values from the device so you can confirm APN and server entries.

Notes on placeholders
- {{apn}} is the mobile operator APN string.
- {{apnu}} is the APN username when required by the carrier.
- {{apnp}} is the APN password when required by the carrier.
Keep these placeholders and replace them with your operator values when sending SMS commands.

## Configuration Notes

- SMS based configuration is commonly supported for the TS-P4X; confirm the exact command prefixes and password requirement with the manufacturer documentation for your firmware version.
- Transport selection between UDP and TCP can affect delivery behavior in some networks; test both if connectivity or delivery patterns differ.
- Firmware and hardware revisions may change command syntax or available parameters. Always verify commands against the TS-P4X user manual or ThingSys support notes.
- Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol, so focus on ensuring the server address and port are set correctly.
- When using direct IP configuration with ip54.85.159.138 8888, ensure the device supports direct IP SMS entry; otherwise use the domain d.plaspy.com if supported.

## Why Use Plaspy with This Configuration

Configuring the TS-P4X to report to Plaspy delivers consistent visibility for container and trailer assets that require rugged mounting and long battery life. Using the shared Plaspy server settings simplifies large scale rollouts because the platform accepts connections on a single port and automatically detects the tracker protocol, reducing per-device configuration complexity.

To learn more about Plaspy and how it supports fleet and asset tracking workflows visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and full TS-P4X documentation verify current information on the ThingSys website https://www.thingsys.com/ since manufacturer setup methods and firmware behavior can change over time.
