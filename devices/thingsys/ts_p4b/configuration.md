---
slug: /thingsys/ts_p4b/configuration
id: ts_p4b-configuration
sidebar_label: Configuration
title: ThingSys - TS-P4B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ThingSys TS-P4B tracker setup with Plaspy server settings and example SMS commands
keywords:
  - ThingSys TS-P4B configuration
  - ThingSys TS-P4B setup
  - TS-P4B Plaspy configuration
  - ThingSys tracker configuration
  - Plaspy GPS tracker setup
  - TS-P4B server setup
  - TS-P4B SMS configuration
  - vehicle tracking setup
  - asset tracker configuration
  - GPS tracker Plaspy compatibility
---

# ThingSys - TS-P4B Configuration

This page documents the public configuration context for using the ThingSys TS-P4B magnetic GPS tracker with Plaspy. It focuses on the practical server settings, common preparation steps, and the example SMS commands published for the TS-P4B so you can configure the device to report into Plaspy.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; this guide uses the public TS-P4B commands available from ThingSys as the basis for configuring the device to reach Plaspy.

## Configuration Overview

The configuration process prepares the TS-P4B to establish a data connection to the Plaspy endpoint, validates connectivity, and enables the device to report location and telemetry into the Plaspy platform.

- Configure the device GPRS/SMS settings so it can reach Plaspy server d.plaspy.com or the equivalent IP address.
- Provide the correct APN credentials for the SIM card used in the tracker.
- Set the Plaspy server endpoint and port so the tracker sends its telemetry to Plaspy.
- Validate connectivity and confirm the device appears in Plaspy reporting after configuration.
- Optionally use a factory reset or verification commands if available to ensure a clean configuration state.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy settings used to configure the TS-P4B so it can deliver telemetry and location data to the platform.

## Typical Requirements Before Setup

- A charged TS-P4B device with the battery installed and ready for configuration.
- An active SIM card with a data plan and the correct APN information for the mobile operator.
- Access to the ThingSys SMS configuration method or the manufacturer configuration tool described in your device documentation.
- Knowledge of the device default password where required for SMS commands (the public default shown in manufacturer instructions is 123456).
- A way to receive verification such as checking Plaspy after configuration or using the device verification SMS command if available.

## How This Tracker Connects to Plaspy

The TS-P4B is configured to send GNSS position and telemetry over the mobile network to the Plaspy server endpoint and port. Once configured, Plaspy ingests the device data and makes it available for live tracking, historical playback, and event notifications.

- The tracker sends position and status updates to d.plaspy.com or to 54.85.159.138 on port 8888.
- Device telemetry such as battery level and motion status is reported to Plaspy alongside location fixes.
- Plaspy uses automatic protocol detection so the platform can accept data whether the tracker connects over UDP or TCP on the shared port.
- After successful configuration the tracker becomes visible in Plaspy for monitoring and alerting.
- Verification commands or platform-side device listing should be used to confirm the tracker is reporting correctly.

## Common Configuration Workflow

1. Access the official ThingSys configuration method for the TS-P4B, typically the SMS command interface described by the manufacturer.
2. Ensure the SIM is installed, has mobile data enabled, and the APN credentials are on hand.
3. Send commands or enter settings to point the device to d.plaspy.com or to the Plaspy server IP 54.85.159.138.
4. Set the server port to 8888 in the device configuration.
5. If the device requires selecting a transport, choose UDP or TCP according to your installation preference.
6. Apply or save the configuration and restart the device if the manufacturer instructions recommend a reboot.
7. Validate the device reports to Plaspy by checking device presence and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The ThingSys public configuration examples for the TS-P4B use SMS commands. The manufacturer lists the default device password as 123456 and many SMS commands use the password as part of the command string. Below are the published commands in the order they appear in the public guidance.

- Optional initial factory reset (use only when you intend to reset the device to factory state)
```text
FORMAT
```
Note: FORMAT is a factory reset command in the public instructions and should be used only when required.

- Set the operator APN (replace [apn] with your mobile operator APN)
```text
apn123456 [apn]
```
This command demonstrates the pattern where 123456 is the device password prefix. Keep the placeholder [apn] and replace it with the operator APN string.

- Set the APN username (replace [apnu] with your APN username if required)
```text
apnuser123456 [apnu]
```

- Set the APN password (replace [apnp] with your APN password if required)
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server to the Plaspy server IP and port
```text
ip54.85.159.138 8888
```
This public command sets the device to report to the Plaspy server IP on port 8888. If your ThingSys firmware supports using a domain name, you can alternatively enter d.plaspy.com where the firmware accepts a domain.

- Check current settings (verification command)
```text
CXZT
```
Send CXZT to request a settings report from the device where supported by the firmware.

Placeholders explanation:
- [apn] is the APN provided by your mobile network operator.
- [apnu] is the APN username if the operator requires one.
- [apnp] is the APN password if the operator requires one.
- 123456 is shown in the public instructions as the device default password used in SMS command prefixes.

## Configuration Notes

- SMS based configuration is supported by the public TS-P4B instructions; follow ThingSys SMS command syntax exactly and observe the device password prefix pattern.
- Firmware revisions and hardware variants can change command syntax or available commands; check manufacturer documentation if a command does not behave as expected.
- When the device supports both domain and IP server settings, prefer d.plaspy.com for clarity; the published public command example sets the IP 54.85.159.138 directly.
- Plaspy accepts UDP or TCP on port 8888 and automatically detects the tracker protocol; selecting UDP or TCP may depend on installer preference or network conditions.
- Preserve APN placeholders and verify SIM network connectivity before final validation in Plaspy.

## Why Use Plaspy with This Configuration

Using the TS-P4B with Plaspy gives organizations discreet, long-duration tracking plus centralized visibility for fleets and assets. The TS-P4B’s long battery life and motion-sensing capabilities make it practical for deployments where infrequent maintenance is required, while Plaspy collects and normalizes location and telemetry for monitoring, alerts, and historical reporting.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details, firmware behavior, and manufacturer guidance at https://www.thingsys.com/ to ensure your TS-P4B configuration is current and optimized for your deployment.
