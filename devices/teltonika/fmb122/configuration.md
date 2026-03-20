---
slug: /teltonika/fmb122/configuration
id: fmb122-configuration
sidebar_label: Configuration
title: Teltonika - FMB122 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMB122 use with Plaspy including server settings and example commands
keywords:
  - Teltonika FMB122 configuration
  - Teltonika FMB122 setup
  - FMB122 Plaspy configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker setup
  - Teltonika tracker setup
  - FMB122 server configuration
  - Plaspy tracker configuration
  - GPS telematics configuration
---

# Teltonika - FMB122 Configuration

This page documents the public configuration context for using the Teltonika FMB122 GPS tracker with Plaspy. It explains the shared Plaspy server settings you should apply to an FMB122 and shows an example public command used to set basic parameters. Use this guide alongside the official Teltonika manuals and your organization’s installation practices.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and the vendor tools you use (SMS commands, Teltonika Configurator, or Teltonika management utilities). The FMB122’s public configuration command shown below is a practical example to prepare the device for reporting to Plaspy.

## Configuration Overview

The goal of this configuration process is to point the FMB122 at the Plaspy server, ensure the device has working cellular and GNSS access, and validate data is received by Plaspy. The example command provided uses placeholders for APN credentials so you can apply network settings appropriate for your SIM.

- Configure the device network parameters including APN, APN user, and APN password.
- Set the server hostname or IP and the common Plaspy port so the device can send telemetry to Plaspy.
- Choose the transport (UDP or TCP) if the device tool requires explicit selection.
- Save and apply the configuration, then confirm the device reports to the Plaspy server.
- Validate telemetry and sensor inputs in Plaspy once the device is visible.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured using either)
- Plaspy automatically detects the tracker protocol so the platform can parse incoming messages

These server settings are used by Plaspy for all supported devices and are the values you should point the FMB122 at when configuring reporting.

## Typical Requirements Before Setup

- A powered and accessible FMB122 device connected per installation instructions.
- A valid SIM card(s) provisioned for data on a supported 2G GSM network and any required APN details.
- Access to Teltonika configuration methods such as SMS commands, Teltonika Configurator, or other vendor provisioning tools.
- GNSS reception (internal or external antenna) sufficient for initial position fixes.
- Knowledge of any installation-specific requirements such as accessory wiring, CAN adapters, or BLE sensor pairing.
- Access to Plaspy account or device registration steps so you can validate the device once it reports.

## How This Tracker Connects to Plaspy

The FMB122 sends GNSS position, sensor inputs, and event messages over its cellular link to the Plaspy server endpoint and port. Plaspy ingests these messages and automatically detects the device protocol so incoming telemetry becomes visible in the platform without per-device protocol mapping.

- The tracker is pointed at d.plaspy.com (or the IP 54.85.159.138) on port 8888 to deliver data to Plaspy.
- The device uses its cellular connection (dual SIM where configured) to maintain telemetry streams.
- Transport can be configured as UDP or TCP on the device; Plaspy accepts both.
- Plaspy performs automatic protocol detection and parsing so reported data is translated into position and event records.
- Once reporting is validated, visibility and alerts for the device appear within Plaspy.

## Common Configuration Workflow

1. Access the official Teltonika configuration method for your device (SMS commands, Teltonika Configurator, or Teltonika management tools).
2. Enter the Plaspy server hostname d.plaspy.com or the server IP 54.85.159.138 in the server/host parameter.
3. Set the port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Provide APN settings and any required credentials for your SIM using the manufacturer tool or SMS command.
6. Apply or save the configuration and restart the device if required by the tool or firmware.
7. Validate that the device reports to Plaspy and that positions and events are visible on the platform.

## Example Configuration Commands

The following public command is a common Teltonika style batch command to set basic parameters on the FMB122. It includes placeholders for APN credentials which you must replace with your network values.

- Example Teltonika setparam command (preserves placeholders):

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the placeholders:
- {{apn}} — your SIM card APN name (replace with your operator APN).
- {{apnu}} — APN username if required by your operator (leave blank if not used).
- {{apnp}} — APN password if required by your operator (leave blank if not used).

This public command sets the host to d.plaspy.com and the port to 8888 as required for Plaspy. The numeric parameter IDs correspond to Teltonika device parameters; consult Teltonika documentation for exact parameter mappings if you need to modify other settings or understand the meaning of a specific numeric ID such as 2006.

## Configuration Notes

- Teltonika devices are often configurable via SMS commands and via Teltonika Configurator tools; use the method appropriate to your installation and firmware.
- Firmware versions and device revisions can change parameter IDs or behavior; always confirm parameter mappings against the official Teltonika documentation.
- Choose UDP or TCP according to network and installation needs; Plaspy accepts both on port 8888.
- The example setparam command contains placeholders for APN credentials; replace them with your network values before sending.
- After applying configuration, allow time for the device to acquire GNSS position and for data to appear in Plaspy.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB122 with Plaspy provides straightforward device-to-platform connectivity for fleets and asset tracking where reliable 2G coverage and sensor integration are sufficient. With dual SIM support, BLE and 1-Wire sensor inputs, and a compact installation footprint, the FMB122 can report position and sensor telemetry to Plaspy for monitoring, alerts, and operational workflows.

To learn more about Plaspy and how it handles device data, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and parameter mappings, verify details on the manufacturer site https://www.teltonika-gps.com/ as device features and configuration steps may change over time.
