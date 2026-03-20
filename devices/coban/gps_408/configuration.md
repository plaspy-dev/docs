---
slug: /coban/gps_408/configuration
id: gps_408-configuration
sidebar_label: Configuration
title: Coban - GPS-408 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Coban GPS-408 showing Plaspy server values and SMS commands for setup and verification
keywords:
  - Coban GPS-408 configuration
  - Coban GPS-408 setup
  - GPS-408 Plaspy setup
  - Coban tracker configuration
  - vehicle tracker setup
  - GPS tracker server configuration
  - Plaspy server settings
  - GPS-408 SMS commands
  - vehicle tracking integration
  - fleet management tracker
---

# Coban - GPS-408 Configuration

This page documents the public configuration context for using the Coban GPS-408 tracker with the Plaspy platform. It focuses on the practical, publicly available steps and commands needed to point a GPS-408 at Plaspy so the device can report location and status. When available, SMS commands provided by the manufacturer are included for setup and verification.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor tooling. The GPS-408 supports SMS and GPRS configuration methods and the example commands below reflect public SMS setup sequences that are commonly used for initial provisioning.

## Configuration Overview

The goal of configuring a GPS-408 for Plaspy is to prepare the tracker so it can reliably transmit telemetry to the Plaspy server and appear in the platform for monitoring and reporting. This includes setting APN and GPRS server details, selecting the transport protocol if required, and validating that the tracker is reporting.

- Configure APN and network credentials so the device has cellular data access where required.
- Set the device server address and port to point to Plaspy so location data is routed to the platform.
- Select UDP or TCP transport if the device requires explicit selection.
- Validate device reporting and use verification commands to confirm connectivity.
- Save and apply settings, then restart the device if needed to begin live reporting.

## Plaspy Server Settings

When configuring the GPS-408 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when devices connect
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged GPS-408 with physical access for SMS setup or installer access.
- A valid SIM card installed with data enabled and SMS capability where required.
- The mobile operator APN, APN username, and APN password for the SIM provider (placeholders shown below as [apn], [apnu], [apnp]).
- Access to the manufacturer SMS command method or official configuration tool for the GPS-408.
- Knowledge of the device default password if needed for commands; the public commands below use the default password 123456.
- A Plaspy account or access to the Plaspy platform to confirm the tracker appears after configuration.

## How This Tracker Connects to Plaspy

The GPS-408 is configured to send location and status messages to the Plaspy server endpoint and port. Plaspy receives the incoming telemetry and automatically detects the tracker protocol so devices can be registered and monitored in the platform.

- The tracker establishes a GPRS data session using the configured APN and operator credentials.
- Device sends position and event messages to the configured server address and port.
- Messages can be delivered via UDP or TCP depending on the tracker configuration and network conditions.
- Plaspy detects the tracker protocol on arrival and maps the device data into the platform.
- Once reporting is validated, the device becomes visible within Plaspy for real time tracking and historical playback.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the GPS-408 (SMS commands or a vendor tool) as documented by Coban.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 depending on the device command syntax.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. If the device requires a transport selection, choose UDP or TCP according to your network needs.
5. Configure APN and APN credentials so the device can open a GPRS data session.
6. Apply or save the configuration and restart the device if required by the tracker.
7. Validate that the device reports to Plaspy by using verification commands and checking the device status in the platform.

## Example Configuration Commands

The GPS-408 accepts SMS commands for many configuration tasks. The commands below are the public SMS steps provided for this model. The sample commands use the device default password 123456. Keep the placeholders [apn], [apnu], and [apnp] and replace them with your operator values.

- Optional initial factory reset (use only if you need to clear current settings):
```text
begin123456
```

- Set the time zone to UTC 0:
```text
time zone123456 0
```

- Set the operator APN (replace [apn] with your carrier APN):
```text
apn123456 [apn]
```

- Set the APN username and password (replace placeholders as needed):
```text
up123456 [apnu] [apnp]
```

- Set the GPRS server to Plaspy using the public IP and port:
```text
adminip123456 54.85.159.138 8888
```

- Set an update interval example (device specific format preserved):
```text
fix060s060s***n123456
```

- Switch the device to GPRS mode and select transport (two forms shown; use the one appropriate for your firmware):
```text
gprs123456,1,1
```
or
```text
gprs123456
```

- Check current settings:
```text
check123456
```

- Enable extended protocol or fuel/digital sensor reporting (example protocol value):
```text
protocol123456 18
```

Notes on placeholders and password:
- [apn] is the mobile operator APN string required for data.
- [apnu] is the APN username if provided by the operator.
- [apnp] is the APN password if provided by the operator.
- The commands above use the default device password 123456 in the examples. If your device password differs, substitute your current password.

## Configuration Notes

- Firmware versions and hardware revisions may change command syntax or supported options; consult manufacturer documentation if a command does not behave as expected.
- The GPS-408 supports SMS based configuration as shown, and GPRS server settings point the device to Plaspy using the provided IP and port.
- Choose UDP or TCP based on network reliability and your operational needs; some installations prefer UDP for lower overhead while others prefer TCP for guaranteed delivery.
- After changing server or GPRS settings, a power cycle or restart may be required for the tracker to open a new session to Plaspy.
- Keep device credentials secure and change default passwords in production deployments where supported.

## Why Use Plaspy with This Configuration

Configuring the Coban GPS-408 to report to Plaspy provides a straightforward way to bring vehicle location and status into a single monitoring platform. Organizations gain centralized visibility for tracking, event reporting, and operational alerts once the tracker is pointed at Plaspy and verified to be reporting.

To learn more about Plaspy and how it can be used with compatible trackers, visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer documentation, please verify details on the Coban website https://www.coban.net/ as methods and specifications can change over time.
