---
slug: /coban/bn_103b/configuration
id: bn_103b-configuration
sidebar_label: Configuration
title: Coban - BN-103B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN 103B to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Coban BN 103B configuration
  - Coban BN 103B setup
  - BN 103B Plaspy configuration
  - Plaspy tracker setup
  - Coban GPS tracker configuration
  - BN 103B server configuration
  - vehicle tracker configuration
  - GPS tracker SMS commands
  - fleet tracking setup
  - BN 103B installation guide
---

# Coban - BN-103B Configuration

This page documents the public configuration context for using the Coban BN-103B vehicle GPS tracker with Plaspy. It focuses on the practical server settings and SMS-based commands that are commonly used to prepare the device to report location and status into the Plaspy platform, using the publicly available configuration commands and Plaspy ingestion endpoints.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary depending on device firmware, hardware revision, installation type, and vendor tools; the BN-103B provides SMS configuration commands (default password 123456) that are commonly used to set APN, server address, transport, and reporting intervals before activating reporting to Plaspy.

## Configuration Overview

The objective of this configuration is to prepare the BN-103B to communicate reliably with Plaspy using standard server settings and the device's public configuration commands. The process typically includes setting APN and credentials, pointing the device to Plaspy's ingestion endpoint, selecting the transport mode, and verifying the device reports successfully.

- Configure the device APN and GPRS credentials so it can use mobile data to send telemetry.
- Set the Plaspy server address and port so the tracker sends location and event data to the correct endpoint.
- Choose the transport mode (UDP or TCP) according to installation needs; Plaspy accepts both.
- Set reporting intervals and behavior so location updates arrive at the expected rate.
- Validate configuration with a check command or by confirming the device appears online in Plaspy.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the BN-103B. These values are required to point the tracker to Plaspy ingestion.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

## Typical Requirements Before Setup

- A powered BN-103B installed or connected to vehicle power with any backup battery charged.
- An active SIM card with data (GPRS) and SMS capability configured for the local carrier and matching APN settings.
- Access to the installer or manufacturer configuration method (SMS commands in this case) and the device default password (public default shown below as 123456).
- A Plaspy account and the intended device registration details so you can confirm the tracker appears in the platform.
- Ability to send and receive SMS to the device from the mobile number used for configuration.

## How This Tracker Connects to Plaspy

The BN-103B can transmit GPS coordinates and device status to Plaspy over TCP, UDP, or via SMS-based reporting depending on configuration. For Plaspy integration, the tracker is configured to send data to the shared Plaspy endpoint and port so the platform can parse messages and display vehicle telemetry.

- The device is pointed to Plaspy's server endpoint (d.plaspy.com or 54.85.159.138) and port 8888 for GPRS reporting.
- Transport is selected as UDP or TCP on the device; either is accepted by Plaspy on port 8888.
- Plaspy parses the device protocol automatically and maps position updates and alarm events into the platform.
- Regular position updates, alarm events, and digital input changes are forwarded to Plaspy for visibility and alerting.
- After configuration, validate that the device shows as online in Plaspy and that telemetry and events are arriving as expected.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the BN-103B (SMS commands as documented in the device manual or vendor guide).
2. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server configuration fields or SMS command.
3. Set the server port to 8888, which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires selecting a transport mode and save that selection.
5. Apply or save the configuration on the device, using SMS commands or the vendor tool as appropriate.
6. Restart the device if recommended by the manufacturer or when prompted to apply network settings.
7. Validate that the device reports to Plaspy by checking device connectivity and incoming telemetry in the Plaspy platform or by using device verification commands.

## Example Configuration Commands

The BN-103B supports SMS-based configuration. The commands below are the public SMS commands provided for initial setup. The device default password used in these commands is 123456. Preserve the placeholders [apn], [apnu], and [apnp] when replacing with your operator values.

1. Optional initial factory reset (use only when needed)
```text
begin123456
```

2. Set the time zone to UTC 0 (example)
```text
time zone123456 0
```

3. Set the APN for the mobile operator (replace [apn] with your operator APN)
```text
apn123456 [apn]
```

4. Set the APN username and password (replace placeholders with your operator credentials)
```text
up123456 [apnu] [apnp]
```

5. Set the GPRS server to Plaspy using the public server IP and port
```text
adminip123456 54.85.159.138 8888
```

6. Configure a typical update interval (example command from manufacturer)
```text
fix060s060s***n123456
```

7. Switch the device to GPRS mode and select transport (two variants shown)
```text
gprs123456,1,1
```
or
```text
gprs123456
```

8. Check current device settings (verification)
```text
check123456
```

9. Enable improved reporting for fuel sensor or digital inputs (protocol mode example)
```text
protocol123456 18
```

Notes on placeholders:
- [apn] is your mobile operator APN string.
- [apnu] is the APN username if required by the operator.
- [apnp] is the APN password if required by the operator.
Always replace placeholders with the correct operator values before sending commands.

## Configuration Notes

- SMS-based configuration is a common and supported method for BN-103B setup; ensure the phone sending SMS messages is permitted by the device configuration (some devices only accept SMS from preset admin numbers).
- Manufacturer firmware and command syntax can vary by production batch and region; confirm exact commands with the device manual before applying changes.
- Choose TCP or UDP according to network reliability and firewall constraints. Plaspy accepts either on port 8888 and auto-detects the device protocol.
- The BN-103B default SMS password shown in the public commands is 123456; if your device has a different password, use that one.
- When using the adminip command, you may use the Plaspy server domain d.plaspy.com in place of the IP if your firmware supports DNS resolution; otherwise use the provided IP.

## Why Use Plaspy with This Configuration

Using the BN-103B with Plaspy provides a straightforward path to fleet visibility and event-driven monitoring. The tracker’s support for TCP, UDP and SMS reporting combined with Plaspy’s automatic protocol detection makes it practical to onboard devices quickly and consolidate position, alarm, and telemetry data into a single platform for operational oversight.

To learn more about Plaspy and its fleet management features visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the Coban website at https://www.coban.net/.
