---
slug: /sinotrack/st_908/configuration
id: st_908-configuration
sidebar_label: Configuration
title: SinoTrack - ST-908 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for SinoTrack ST-908 showing Plaspy server settings and example SMS configuration commands
keywords:
  - SinoTrack ST-908 configuration
  - SinoTrack ST-908 setup
  - ST 908 Plaspy configuration
  - GPS tracker server settings
  - Plaspy tracker setup
  - GPRS SMS configuration
  - APN setup SMS commands
  - vehicle tracking platform configuration
  - tracker protocol detection
  - tracker verification commands
---

# SinoTrack - ST-908 Configuration

This page documents the public configuration context for using the SinoTrack ST-908 with the Plaspy tracking platform. It focuses on the practical server settings and SMS commands that are commonly used to configure the device to report location and status to Plaspy. Use this guide to prepare a tracker for connection to Plaspy and to verify basic communication.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary depending on firmware version, hardware revision, installation method, and vendor tools. The examples below are drawn from the publicly available Sinotrack SMS command sequence and show how to point an ST-908 at the Plaspy endpoint.

## Configuration Overview

The goal of configuration is to prepare the ST-908 so it can establish a data session and report to Plaspy reliably. Typical setup configures device time zone and APN details, points the device to the Plaspy server endpoint, and confirms reporting intervals and operating mode.

- Configure the device APN and GPRS parameters so the tracker can use mobile data to connect to Plaspy.
- Set the Plaspy server endpoint and the shared port so the tracker can open a connection to the platform.
- Enable and tune reporting intervals so position updates meet operational needs.
- Verify settings via manufacturer verification command and confirm the device appears in Plaspy.
- Use SMS or the manufacturer tool as available to send commands and validate the device configuration.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects.

## Typical Requirements Before Setup

- A powered ST-908 with working SIM card and an active data plan that supports GPRS as required by the tracker.
- The operator APN, and if applicable APN username and password; these are needed to configure GPRS.
- A phone or tool capable of sending SMS configuration commands to the tracker, if using SMS configuration.
- Access to the official Sinotrack documentation or installer tool to confirm command syntax and firmware-specific behavior.
- A Plaspy account and access to the platform to confirm the device appears and sends telemetry after configuration.

## How This Tracker Connects to Plaspy

The ST-908 is configured to push location and device data to the Plaspy server endpoint and port. When the device successfully opens a GPRS session and connects to the Plaspy endpoint, Plaspy automatically detects the device protocol and begins parsing the incoming telemetry so the unit becomes visible in the platform.

- The tracker is pointed at Plaspy using the configured server address and port.
- Device reports are sent over GPRS once APN and credentials are set.
- Plaspy receives the connection on the shared port and auto detects the protocol used by the tracker.
- Successful connection and reporting make the device visible in the Plaspy interface for location and event monitoring.
- Regular reporting intervals and event triggers provide continuous operational visibility.

## Common Configuration Workflow

1. Access the official Sinotrack configuration method supported by your device and firmware (SMS commands or manufacturer tool).
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device server configuration.
3. Set the device port to 8888, since Plaspy uses the same port for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection before saving.
5. Apply or save the configuration on the device, including APN and mode changes.
6. Restart or power cycle the device if required by the device firmware to activate new settings.
7. Validate that the device reports to Plaspy and appears in the platform using the provider verification command or Plaspy device list.

## Example Configuration Commands

The public Sinotrack ST-908 configuration sequence below is commonly sent via SMS to the device. Preserve placeholders when replacing with your operator information. These commands are presented in the same order as recommended by the public Sinotrack guidance.

- Optional initial reset to restore factory settings. Use this only if you intend to start from factory defaults.
```text
RESET
```

- Set the time zone to UTC 0
```text
8960000E00
```

- Set the APN for your mobile operator. Replace the placeholders with your operator APN, APN username, and APN password. If no username or password are required, leave [apnu] and [apnp] empty or omit as per your operator rules.
```text
8030000 [apn] [apnu] [apnp]
```

- Configure the GPRS server to point to Plaspy using the Plaspy IP and port
```text
8040000 54.85.159.138 8888
```

- Set periodic report interval when the device is on
```text
8050000 60
```

- Set periodic report interval when the device is off
```text
8090000 60
```

- Switch the tracker to GPRS communication mode
```text
7100000
```

- Verify current configuration and reported ID using the device verification command
```text
RCONF
```

Notes on placeholders:
- [apn] is the mobile operator access point name.
- [apnu] is the APN username if required.
- [apnp] is the APN password if required.

Send these SMS commands from an authorized phone number according to your device's SMS configuration policy. Adjust reporting intervals to match your operational needs.

## Configuration Notes

- Firmware and command syntax can vary between hardware revisions and regional firmware builds. Always confirm exact command syntax for your unit.
- This tracker supports SMS based configuration as shown above; some installers prefer a manufacturer tool or configuration software for bulk provisioning.
- When selecting transport choose UDP or TCP according to your network conditions. Plaspy accepts either on port 8888 and auto detects protocol.
- Use RCONF to verify settings after sending commands to ensure the device saved the server and APN values.
- Keep a record of the device ID used by Plaspy to match the device entry in the platform.

## Why Use Plaspy with This Configuration

Pointing the SinoTrack ST-908 to the Plaspy server provides a straightforward way to bring device telemetry into a centralized fleet tracking platform. With the Plaspy endpoint configured, devices report position and status to a managed server endpoint where automatic protocol detection helps reduce manual protocol selection during onboarding.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration commands, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and firmware information at the manufacturer website https://www.sinotrackgps.com/ before deploying devices at scale.
