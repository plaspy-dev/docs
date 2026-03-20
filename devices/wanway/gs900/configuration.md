---
slug: /wanway/gs900/configuration
id: gs900-configuration
sidebar_label: Configuration
title: WanWay - GS900 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for WanWay GS900 showing Plaspy server settings and SMS commands for integration
keywords:
  - WanWay GS900 configuration
  - WanWay GS900 setup
  - GS900 Plaspy configuration
  - WanWay tracker setup
  - vehicle GPS configuration
  - GS900 server configuration
  - GS900 GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking configuration
  - fleet GPS setup
---

# WanWay - GS900 Configuration

This page documents the public configuration context for using the WanWay GS900 with Plaspy. It collects the practical, platform-focused settings and SMS command examples published for the GS900 so you can prepare the device to report location and events to Plaspy's shared server endpoint.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GS900 supports SMS-based configuration and GPRS server parameters; this guide shows how those public commands map to Plaspy's server values and the typical workflow to validate connectivity.

## Configuration Overview

Configuring the GS900 for Plaspy means preparing the device to reach Plaspy's shared server endpoint, enabling GPRS reporting, and verifying that position and event messages arrive at the platform. When manufacturer commands are available, SMS is a commonly used method to set server, APN, and reporting interval values.

- Set the device APN so the GS900 can establish GPRS data connectivity to Plaspy.
- Configure the GPRS server address and port to point the tracker at Plaspy.
- Enable GPRS reporting mode so the tracker sends telemetry over the cellular link.
- Set an appropriate reporting interval for live tracking and power management.
- Validate connectivity using the device status and parameter query commands.
- Confirm the device appears and reports correctly in Plaspy after setup.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for supported devices

## Typical Requirements Before Setup

- A powered and accessible GS900 unit installed or accessible for SMS configuration.
- A working SIM card with active data and the correct APN for the carrier.
- Ability to send SMS commands to the device or use the official WanWay configuration tool if available.
- Knowledge of APN credentials if the carrier requires username or password for GPRS.
- Basic account and device registration access to Plaspy so you can verify the device appears in the platform.
- A plan to test connectivity and telemetry once server settings are applied.

## How This Tracker Connects to Plaspy

The GS900 is configured to report its position and event messages to Plaspy's shared server endpoint and port. Once GPRS is active and the server parameters point to Plaspy, the tracker sends periodic telemetry and event notifications that Plaspy receives and converts into live map updates, alerts, and reports.

- The device uses the configured APN to establish a GPRS data session toward Plaspy.
- Server configuration points the tracker at d.plaspy.com (or the Plaspy server IP) on port 8888.
- Telemetry and event messages are sent over UDP or TCP depending on device transport selection.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device record.
- Plaspy displays live location, alarm notifications, and interval-based reports after successful data delivery.

## Common Configuration Workflow

1. Access the official WanWay configuration method for your GS900 unit, such as SMS commands or manufacturer software.
2. Enter the Plaspy server destination using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 so messages reach the shared Plaspy endpoint.
4. Choose UDP or TCP if the device requires explicit transport selection; both are supported by Plaspy on port 8888.
5. Apply or save the configuration on the tracker (for SMS this means sending the command and waiting for confirmation).
6. Restart or power-cycle the device if the manufacturer instructions require it to apply settings.
7. Validate that the device reports to Plaspy by checking for online status, recent position updates, or the tracker status query.

## Example Configuration Commands

The GS900 supports SMS-based configuration. Below are the public SMS commands extracted from the manufacturer-provided configuration content, preserved in order. Send each command as an SMS to the device phone number using the approved installer or admin number.

1. Configure the carrier APN. Replace [apn] with your carrier APN. If your carrier requires APN username and password, supply [apnu] and [apnp] as needed.
```
APN,[apn]#
```
or, if username and password are required:
```
APN,[apn],[apnu],[apnp]#
```

2. Set the GPRS server to point the tracker at Plaspy. This uses the Plaspy server domain and port 8888.
```
SERVER,1,d.plaspy.com,8888,0#
```
(Alternatively you can use the server IP 54.85.159.138 if required by the device.)

3. Set the reporting/update interval. The example below sets periodic reporting; adjust values as needed per your policy.
```
TIMER,60,60#
```

4. Enable GPRS reporting mode so the tracker sends data via GPRS.
```
GPRSON,1#
```

5. Verify current configuration parameters on the tracker.
```
PARAM#
```

6. Check current tracker status.
```
STATUS#
```

Note: Preserve the placeholders [apn], [apnu], and [apnp] and replace them with the carrier-specific APN, username, and password during setup.

## Configuration Notes

- The SMS-based commands above are public examples; some GS900 firmware revisions or regional variants may require slightly different command syntax. Always verify command syntax with the official WanWay documentation before mass deployment.
- Choosing UDP or TCP affects transport behavior; test both modes if you observe intermittent connectivity. Plaspy supports both transports on the shared port 8888.
- If you prefer software or cable-based configuration tools from WanWay, use the official tool for bulk provisioning and for managing firmware-dependent options.
- APN, username, and password values are carrier specific; entering incorrect APN settings will prevent GPRS connections to Plaspy.
- Confirm the device is properly registered in your Plaspy account and that device identifiers sent by the tracker match the device record in the platform.

## Why Use Plaspy with This Configuration

Configuring the WanWay GS900 to report to Plaspy gives organizations a simple path to centralized vehicle visibility. With the GS900 supplying location, ignition state, mileage, and tamper events, Plaspy can show live positions, trigger alerts, generate reports, and support remote operational workflows for fleets or individual vehicles.

To learn more about Plaspy and how it receives data from compatible trackers, visit https://www.plaspy.com. For the latest device-specific command syntax, firmware notes, and regional variants for the WanWay GS900, please verify details on the manufacturer site https://www.wanwaytech.net/ as specifications and setup methods can change over time.
