---
slug: /calmamp/lmu_900/configuration
id: lmu_900-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-900 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for CalmAmp LMU-900 showing server settings and SMS commands to connect the tracker with Plaspy
keywords:
  - CalmAmp LMU-900 configuration
  - LMU-900 setup
  - CalmAmp GPS tracker
  - Plaspy integration
  - vehicle tracking configuration
  - GPS tracker SMS commands
  - GPRS server settings
  - LMU-900 APN settings
  - fleet tracking setup
  - tracking platform configuration
---

# CalmAmp - LMU-900 Configuration

This page documents the public configuration context for connecting a CalmAmp LMU-900 tracker to the Plaspy platform. It brings together the Plaspy server endpoint and the publicly available LMU-900 configuration commands so integrators and installers can prepare the device for reliable communication with Plaspy. Where manufacturer-side commands are public we include them here in practical form.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol. Exact manufacturer setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The LMU-900 supports SMS and GPRS based configuration methods, and this page includes the common SMS commands published for the model alongside guidance for applying the shared Plaspy server values.

## Configuration Overview

The goal of the configuration process is to prepare the LMU-900 so it reports to Plaspy reliably over the cellular network. This includes configuring the operator APN and credentials when required, setting the GPRS server and port to Plaspy values, selecting transport (UDP or TCP) when applicable, and validating the unit is visible in the Plaspy platform.

- Configure the operator APN and optional APN credentials so the unit can attach to cellular data.
- Set the GPRS server address and port to point the device at Plaspy.
- Choose UDP or TCP transport on the device if required by firmware.
- Reboot or apply the configuration so the LMU-900 begins reporting to Plaspy.
- Verify settings and connectivity using the device verification command and by checking device visibility in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either transport on port 8888
- Plaspy automatically detects the tracker protocol so a single port is used across supported devices

These exact values are the public Plaspy endpoint that the LMU-900 should be configured to report to.

## Typical Requirements Before Setup

- A powered LMU-900 installed or connected to vehicle power for configuration and testing.
- An active cellular SIM provisioned for data and with SMS ability if using SMS based commands.
- Operator APN details and optional APN username and password when required by the mobile operator.
- Access to the device SMS interface or manufacturer configuration tool to send commands to the LMU-900.
- The unit MID or device ID available from the device response to the device info command.
- Knowledge of the Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888.

## How This Tracker Connects to Plaspy

The LMU-900 is configured to report location and device messages to the shared Plaspy server endpoint and port. Once APN and server settings are applied and the device has an active data connection, the tracker sends its telemetry to Plaspy where it becomes visible for monitoring and event reporting.

- Device data is sent to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The tracker can use UDP or TCP transport on port 8888 depending on the configuration chosen.
- Plaspy automatically detects the tracker protocol so devices reporting to the shared port are processed without separate per-device port configuration.
- SMS is used for initial configuration commands on many LMU-900 installations when GPRS provisioning is not yet active.
- Once reporting is working, Plaspy receives device messages for visibility, alarms, and operational monitoring.

## Common Configuration Workflow

1. Access the official CalmAmp configuration method for the LMU-900, typically SMS commands or a manufacturer tool depending on your installation and firmware.
2. Obtain the device MID or ID using the device info command so configuration commands include the correct device context if required.
3. Enter the Plaspy server endpoint using either d.plaspy.com or the IP 54.85.159.138 in the device server setting.
4. Set the server port to 8888 on the device.
5. Choose UDP or TCP transport on the device if a transport option is required by the firmware.
6. Apply or save the configuration and reboot the device if the device requires a restart to apply changes.
7. Validate the device reports to Plaspy and appears in the platform, and confirm message flow and expected events.

## Example Configuration Commands

The following LMU-900 commands are the public SMS commands commonly used to set APN, server, and port. The device expects the MID or device ID context when required; obtain the MID by querying the device info response with the info command. Preserve the placeholders when you send these commands and replace them with your operator values.

- Set the operator APN
```text
!RP,2306,0,[apn]
```

- Set the APN username (optional, only if your operator requires it)
```text
!RP,2314,0,[apnu]
```

- Set the APN password (optional, only if your operator requires it)
```text
!RP,2315,0,[apnp]
```

- Set the GPRS server to Plaspy by IP
```text
!RP,2319,0,54.85.159.138
```

- Set the server port to Plaspy port
```text
!RP,769,0,8888
```

- Reboot the tracker to apply configuration (labelled here as a restart step)
```text
!R3,70,0
```

- Check the current device settings
```text
!RO
```

Notes on placeholders
- [apn] is the operator APN string supplied by the mobile network provider.
- [apnu] is the APN username where required by your operator.
- [apnp] is the APN password where required by your operator.

Send these commands by SMS to the device phone number. The device returns confirmation messages; use the !RO command to review applied settings. The reboot command is commonly required to activate new GPRS parameters.

## Configuration Notes

- Firmware and hardware revisions can change command support and parameter IDs; verify commands on the device before mass deployment.
- APN username and password fields are optional and only needed when the mobile operator requires them.
- Choose TCP or UDP based on installer preference and any firmware guidance; Plaspy accepts either on the shared port 8888 and will auto detect the protocol.
- SMS based configuration is a common method for LMU-900 provisioning when remote GPRS configuration is not available or when performing an initial setup.
- Always confirm the device MID or device ID using the device info response before sending configuration commands that require a device context.

## Why Use Plaspy with This Configuration

Using the LMU-900 configured to report to Plaspy provides a straightforward path to vehicle visibility and operational monitoring. The shared server approach and automatic protocol detection simplify integration because all supported devices report to the same port and Plaspy identifies the tracker protocol without per-device port changes. This reduces configuration overhead and helps teams deploy trackers at scale.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation instructions consult the manufacturer documentation at http://www.calamp.com/ since manufacturer specifications and setup methods can change over time.
