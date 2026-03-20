---
slug: /thingsys/ts_v1/configuration
id: ts_v1-configuration
sidebar_label: Configuration
title: ThingSys - TS-V1 Configuration
sidebar_class_name: menu_item_tracker
description: Configure ThingSys TS-V1 for Plaspy with public server settings and sample SMS commands for APN and server setup
keywords:
  - ThingSys TS-V1 configuration
  - ThingSys TS-V1 setup
  - TS-V1 Plaspy configuration
  - TS-V1 server settings
  - ThingSys GPS tracker setup
  - TS-V1 SMS configuration
  - ThingSys fleet tracking setup
  - GPS tracker Plaspy integration
  - Vehicle tracking configuration
  - TS-V1 installation guide
---

# ThingSys - TS-V1 Configuration

This page documents the public configuration context for using the ThingSys TS-V1 tracker with Plaspy. It focuses on the practical details you need to point the device to Plaspy and confirms which public server settings Plaspy expects. Where manufacturer-side commands are publicly available, sample commands are shown to illustrate the typical setup flow.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide as a practical reference and verify device-specific items against the manufacturer documentation when needed.

## Configuration Overview

This configuration prepares the TS-V1 to report location and event data to the Plaspy platform using Plaspy's public server endpoint and port. The process typically includes setting APN credentials if required by the SIM, directing the tracker to the Plaspy server, and verifying that the device is visible in Plaspy.

- Configure APN, APN username and password if the tracker uses a cellular data connection.
- Point the device to the Plaspy server domain or IP and set the shared port used by Plaspy.
- Choose the transport protocol (UDP or TCP) on the device if required and supported.
- Validate connectivity and confirm position and event reports appear in Plaspy.
- Optionally perform a factory reset or configuration check via SMS if provided by the device firmware.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: UDP or TCP are both supported by the tracker for port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and installed TS-V1 device with required antennas and wiring completed.
- A working cellular SIM with an active data plan and correct APN details for the operator.
- Access to the ThingSys manufacturer configuration method such as SMS commands or vendor software.
- Knowledge of the device password if required for configuration (the publicly provided default password is 123456).
- Ability to receive and send SMS commands from a controlling phone number if using SMS setup.
- Access to Plaspy account or admin user to confirm the device appears after configuration.

## How This Tracker Connects to Plaspy

The TS-V1 can be configured to send its position and event messages directly to Plaspy by setting the device to the Plaspy server endpoint and port. Once the device is pointed to the Plaspy server, Plaspy handles protocol detection and integrates incoming data into the platform for tracking and reporting.

- The tracker uploads location and event data to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the device protocol when the connection is established.
- Position updates, alarms, and status messages become visible in the Plaspy interface for live tracking and history.
- Event and telemetry reporting enables operational monitoring, alerts, and geo-fence notifications in Plaspy.
- If transport selection is required, choose UDP or TCP and ensure the device is saved with port 8888.

## Common Configuration Workflow

1. Access the official ThingSys configuration method for the TS-V1 such as SMS commands or the vendor's configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888, since Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP on the device if transport selection is required by the firmware.
5. Configure APN, APN username, and APN password using the manufacturer method if the SIM requires it.
6. Apply or save the configuration and restart the device if the tracker requires a reboot to apply changes.
7. Validate that the tracker reports to Plaspy by checking for incoming messages and location updates in Plaspy.

## Example Configuration Commands

The TS-V1 supports SMS-based configuration. The following public SMS commands are presented in the order they appear in manufacturer-provided content. Preserve placeholders as shown when sending real values.

- Note: The sample default device password in public content is 123456. Use it when the command syntax requires a password prefix.

1. Optional factory reset (use only when required during initial setup)
```text
FORMAT
```

2. Set the operator APN (replace {{apn}} with your cellular operator APN)
```text
apn123456 {{apn}}
```

3. Set the APN username (replace {{apnu}} with your APN username)
```text
apnuser123456 {{apnu}}
```

4. Set the APN password (replace {{apnp}} with your APN password)
```text
apnpasswd123456 {{apnp}}
```

5. Set the GPRS server IP and port to point the device to Plaspy (public example uses the Plaspy IP and port)
```text
ip54.85.159.138 8888
```

6. Check current settings (verification command)
```text
CXZT
```

Explanation of placeholders:
- {{apn}} is the operator APN string required for data connectivity.
- {{apnu}} is the APN username if your operator requires one.
- {{apnp}} is the APN password if your operator requires one.

Send each command as an SMS from an authorized phone number if the device requires SMS configuration. The order is important for initial setup when APN and server must be present before data reporting.

## Configuration Notes

- Firmware and regional variants can change command syntax or supported features; verify commands against your device firmware version.
- Some installers prefer using the manufacturer configuration tool over SMS for bulk or secure provisioning; follow the official ThingSys workflow when available.
- Choose TCP or UDP according to installer preference; Plaspy supports both on port 8888 and will detect the protocol automatically.
- Keep a record of the device password and authorized management numbers to maintain secure remote configuration.
- Use the verification command (CXZT) after configuration to confirm settings were applied correctly.

## Why Use Plaspy with This Configuration

Using the TS-V1 with Plaspy centralizes vehicle location, event reporting, and telemetry into a single platform, making it easier to manage fleets, respond to alarms, and analyze vehicle usage. The TS-V1's ability to accept server and APN configuration via SMS or vendor tools means it can be quickly provisioned to report to Plaspy for real-time tracking and operational oversight.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and command syntax, verify information on the manufacturer website https://www.thingsys.com/ since setup methods and firmware behavior can change over time.
