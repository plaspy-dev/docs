---
slug: /sinotrack/al_900e/configuration
id: al_900e-configuration
sidebar_label: Configuration
title: SinoTrack - AL-900E Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the SinoTrack AL-900E showing how to prepare the device for Plaspy using shared server settings and SMS commands
keywords:
  - SinoTrack AL-900E configuration
  - SinoTrack AL-900E setup
  - AL-900E Plaspy configuration
  - SinoTrack tracker setup
  - AL-900E server configuration
  - GPS tracker configuration guide
  - vehicle tracking platform setup
  - GPRS tracker SMS commands
  - tracker to Plaspy integration
  - fleet tracking AL-900E
---

# SinoTrack - AL-900E Configuration

This page covers the public configuration context for using the SinoTrack AL-900E with Plaspy. It collects the practical server settings and SMS based commands that are commonly used to point an AL-900E tracker at Plaspy so the device can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The commands shown here are public SMS commands provided for the AL-900E and should be confirmed against the device documentation for your firmware version.

## Configuration Overview

The AL-900E configuration process prepares the tracker to communicate with Plaspy, ensures the device has valid GPRS connectivity, and enables the platform to receive position updates. When configured correctly, the tracker will send location and event reports to the Plaspy server endpoint so the unit becomes visible and manageable in the platform.

- Configure the device to use Plaspy server settings so reports are sent to the correct endpoint.
- Set the carrier APN and GPRS mode so the tracker can establish a mobile data session.
- Choose the transport protocol and port that the device will use to deliver data.
- Validate settings and confirm the device is reporting to Plaspy with a verification command.
- Use SMS or the manufacturer tool to apply settings and, if needed, restart the device for changes to take effect.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP
- Plaspy automatically detects the tracker protocol

All Plaspy devices use the same port and Plaspy will detect the appropriate protocol for supported trackers automatically. Use either the domain or the IP depending on the device configuration method.

## Typical Requirements Before Setup

- A powered AL-900E tracker with a working SIM card that has data and SMS enabled.
- Knowledge of the mobile operator APN values for the SIM being used.
- Ability to send SMS commands to the device or access to the official manufacturer configuration tool.
- The tracker should have adequate battery or vehicle power during setup.
- A means to verify the tracker reports live to Plaspy after configuration, for example via the Plaspy platform or server logs.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AL-900E sends location and event data to the shared Plaspy server endpoint and port. The tracker can be set up over SMS commands to use GPRS for real time reporting or to accept remote parameter changes.

- The tracker is configured to send GPRS reports to d.plaspy.com or 54.85.159.138 using port 8888.
- Transport can be selected as UDP or TCP depending on device options and network conditions.
- Plaspy receives incoming connections and automatically detects the device protocol for processing.
- SMS is used for initial configuration and parameter changes when a configuration tool is not available.
- After configuration the device reports position updates and status to Plaspy for visibility and monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands as documented by SinoTrack.
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888, which is the shared port Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires selecting a transport protocol.
5. Set the carrier APN and any required APN username and password for GPRS connectivity.
6. Apply or save the configuration and restart the device if required by the tracker or firmware.
7. Validate that the device reports to Plaspy by using the device verification command or checking the Plaspy platform for the unit.

## Example Configuration Commands

The AL-900E supports SMS based configuration. The following public commands are provided as examples and are sent as plain SMS messages to the tracker in the order shown when required. Keep placeholders as shown and replace them with your carrier values.

- Optional initial factory reset (use only when needed)
```text
RESET
```

- Set the time zone to UTC 0
```text
8960000E00
```

- Set the APN of the mobile operator
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explanation: replace {{apn}} with the operator APN, {{apnu}} with the APN username if required, and {{apnp}} with the APN password if required. Leave username or password blank if the operator does not require them.

- Set the GPRS server to Plaspy using the Plaspy server IP and port
```text
8040000 54.85.159.138 8888
```
Note: You may also use d.plaspy.com in some configuration tools that accept domain names instead of the numeric IP.

- Set reporting interval when the device is active
```text
8050000 60
```

- Set reporting interval when the device is in low power or sleep
```text
8090000 60
```

- Switch the tracker to GPRS mode
```text
7100000
```

- Verify current settings
```text
RCONF
```
Send RCONF to request the current configuration from the tracker so you can confirm server, APN, and interval values.

## Configuration Notes

- The exact SMS command syntax and behavior can vary by firmware version and hardware revision. Check the device manual if a command is not accepted.
- If the device or firmware supports domain names, you can use d.plaspy.com instead of the IP 54.85.159.138. If not, use the IP as shown.
- Choose UDP or TCP based on network reliability and your installation. Plaspy will detect the incoming protocol automatically.
- SMS based setup is useful for field configuration, while manufacturer tools may provide batch or USB configuration options.
- Preserve placeholders such as {{apn}} {{apnu}} and {{apnp}} and supply real values from your mobile operator during setup.

## Why Use Plaspy with This Configuration

Using the AL-900E configured to report to Plaspy gives organizations a straightforward way to collect location and event data from a widely used SinoTrack device. With the shared Plaspy server settings and automatic protocol detection, teams can standardize device onboarding and get trackers reporting to the platform consistently.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup methods and firmware details on the manufacturer site https://www.sinotrackgps.com/ as specifications and commands can change over time.
