---
slug: /carscop/cc_368/configuration
id: cc_368-configuration
sidebar_label: Configuration
title: Carscop - CC-368 Configuration
sidebar_class_name: menu_item_tracker
description: Setup and server configuration guidance for Carscop CC-368 with Plaspy compatible public commands and settings
keywords:
  - Carscop CC-368 configuration
  - Carscop CC-368 setup
  - CC-368 server configuration
  - Plaspy tracker configuration
  - GPS tracker setup Plaspy
  - CC-368 SMS commands
  - vehicle telematics setup
  - CC-368 APN configuration
  - Plaspy server settings
  - CC-368 OBD II integration
---

# Carscop - CC-368 Configuration

This page documents the public configuration context for using the Carscop CC-368 with Plaspy. It focuses on the practical settings and SMS commands that are commonly used to point CC-368 units at the Plaspy server endpoint and prepare the device for real time tracking, telemetry forwarding, and remote commands in the Plaspy platform. Where manufacturer-specific methods are required, this guide explains the public steps and the expected values to use with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup methods for the CC-368 can vary by firmware, hardware revision, installation type, and vendor tools. The example SMS commands below reflect the public commands exposed for the CC-368 and include the device default password shown in the public configuration content.

## Configuration Overview

The configuration process prepares the CC-368 to report location, OBD telemetry, and event data to Plaspy reliably. Public setup steps typically include ensuring the device has a working SIM and network connection, setting the APN, and pointing the device at the Plaspy server endpoint so incoming data appears in Plaspy with consistent port and protocol handling.

- Configure device APN and credentials so the CC-368 can establish GPRS data connectivity.
- Point the device to the Plaspy server endpoint so location and telemetry flow to Plaspy dashboards.
- Set time zone and device behavior such as keep online to ensure timely reports.
- Validate connectivity and visibility in Plaspy after applying settings to confirm successful reporting.
- Use SMS or the manufacturer tool to apply settings when on-vehicle or remote access is required.

## Plaspy Server Settings

- Server domain d.plaspy.com for hostname based configuration
- Server IP 54.85.159.138 for numeric IP based configuration
- Port 8888 used by all devices in Plaspy
- Transport support: configure UDP or TCP on port 8888 depending on device options
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A valid mobile SIM installed in the CC-368 with data enabled and SMS capability for initial SMS configuration
- Access to the device SMS configuration method or the official Carscop configuration tool provided by the vendor
- Knowledge of the operator APN and optional APN username and password for your cellular carrier
- The device default SMS password if using SMS commands; publicly shown default is 123456 for CC-368 samples
- Stable power to the tracker or vehicle battery during configuration and reboot cycles
- Ability to confirm device reporting in Plaspy after configuration

## How This Tracker Connects to Plaspy

The CC-368 is configured to send its GNSS location and telemetry to the Plaspy server endpoint so operators can view live location, historical routes, events, and remote command results. Plaspy receives these reports on the shared port and uses automatic protocol detection to interpret incoming packets from the tracker.

- The device opens a GPRS data connection and sends reports to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy listens on port 8888 for both UDP and TCP and automatically detects the tracker protocol
- Event notifications such as alarm states, ignition, or door status are forwarded to Plaspy for alerts and automations
- OBD II and CANBUS telemetry can be forwarded to Plaspy for diagnostics and fleet monitoring where supported by the device
- If configured, SMS can be used as a fallback or for remote command delivery during setup or when data is unavailable

## Common Configuration Workflow

1. Access the official Carscop configuration method or the vendor tool or use SMS commands as supported by the CC-368.
2. Enter the Plaspy server endpoint by hostname d.plaspy.com or by numeric address 54.85.159.138 in the server setting field.
3. Set the server port to 8888 which is the shared Plaspy port for all supported devices.
4. Choose transport UDP or TCP if your device configuration requires selecting a transport protocol.
5. Configure APN and optional APN username and password for the installed SIM so the device can open a GPRS session.
6. Apply or save the configuration and restart the device if the manufacturer tool or SMS workflow requires a reboot.
7. Validate the device reports to Plaspy by checking device online status and recent position updates in Plaspy.

## Example Configuration Commands

The CC-368 supports SMS-based configuration using the device password. The commands below are the public SMS commands extracted from the device configuration content. Preserve the placeholders when substituting your carrier APN and credentials.

- Note: The sample configuration uses the default device password 123456 in each command.
- Reset command is shown as an initial or optional step when factory restore is required.

1) Restore factory settings (optional initial step)
```text
RESET*123456
```

2) Set the time zone to UTC 0
```text
TIMEZONE*123456*+00
```

3) Set the operator APN
```text
APN*123456*{{apn}}
```
- {{apn}} is a placeholder for your carrier APN name for data access.

4) Set APN username and password (optional)
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```
- {{apnu}} is the APN username placeholder and {{apnp}} is the APN password placeholder. Only use if your carrier requires authentication.

5) Set the GPRS server to Plaspy using numeric IP and port
```text
IP*123456*54.85.159.138,8888
```
- This command points the device to Plaspy using the public server IP and the shared port 8888.

6) Keep the tracker online
```text
KEEPONLINE*123456
```

Apply these commands in order when order matters. After you send the IP command and confirm APN settings, verify the device establishes a GPRS session and starts reporting to Plaspy.

## Configuration Notes

- The CC-368 supports SMS based configuration as shown; vendor tools or FOTA may provide alternate configuration methods that accept d.plaspy.com or 54.85.159.138.
- Default SMS password in the public sample is 123456; change device passwords according to your security policy after initial setup when possible.
- Choose UDP or TCP according to your deployment needs; Plaspy accepts both on port 8888 and automatically detects the tracker protocol.
- Firmware and hardware revisions can change command syntax or available commands; always verify with current manufacturer documentation.
- After applying settings, confirm the device appears online in Plaspy and that positions and events arrive as expected.

## Why Use Plaspy with This Configuration

Using the CC-368 configured to report to Plaspy provides a straightforward path for organizations needing live tracking, remote vehicle access control, and integrated telemetry. Pointing the device at Plaspy with the shared server settings and ensuring APN and connectivity are correct lets operations teams consolidate GNSS, OBD II data, and event alerts into a single platform for monitoring and automation.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration notes, firmware behavior, and command syntax on the manufacturer website http://www.carscop.com/. Manufacturer specifications, setup methods, and device behavior can change over time so checking the official Carscop documentation is recommended.
