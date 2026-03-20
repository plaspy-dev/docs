---
slug: /thingsys/ts_g17w/configuration
id: ts_g17w-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17W Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ThingSys TS-G17W tracker and Plaspy integration
keywords:
  - ThingSys TS-G17W configuration
  - TS-G17W Plaspy setup
  - TS-G17W server configuration
  - TS-G17W GPS tracker setup
  - Plaspy tracker integration
  - vehicle tracking setup
  - GPS tracker configuration guide
  - fleet management tracker setup
  - TS-G17W installation guide
  - Plaspy server settings
---

# ThingSys - TS-G17W Configuration

This page describes the publicly available configuration context for using the ThingSys TS-G17W tracker with Plaspy. It summarizes the server settings Plaspy requires, the typical preparation steps, and the publicly shared SMS commands and flows that are commonly used to provision this model for use with the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol to ingest device reports. Manufacturer-side setup steps for the TS-G17W can vary by firmware, hardware revision, installation type, and vendor tools. The example commands below reflect the modelConfiguration sample SMS commands provided by ThingSys and preserve placeholders for APN credentials where applicable.

## Configuration Overview

The goal of configuration is to prepare the TS-G17W to reliably send location and event data to Plaspy so devices appear in the platform for monitoring, alerts, and historical playback.

- Configure the tracker to use the Plaspy server endpoint and port so GPRS reports reach the platform.
- Provide correct APN credentials and ensure the device SIM has data and SMS service as required.
- Select the transport (UDP or TCP) if the device requires a transport choice and save the settings.
- Validate connectivity and confirm the device reports to Plaspy so it becomes visible in the dashboard.
- Optionally use SMS verification commands to check the device configuration when remote or during installation.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming device connections

## Typical Requirements Before Setup

- A valid SIM card with data enabled and SMS capability where SMS setup or verification is required.
- Power the TS-G17W and ensure the device is installed or accessible for initial configuration.
- Access to the ThingSys configuration method supported by the unit (SMS commands or the official vendor tool).
- APN details for the mobile operator including APN name, username, and password if required.
- Knowledge of the device default password where applicable (the sample public configuration uses 123456 as the default password).
- Network coverage for GPRS (or SMS service for verification) in the installation area.

## How This Tracker Connects to Plaspy

The TS-G17W is configured to report its location and events to the shared Plaspy server endpoint and port so Plaspy can process and display device telemetry.

- The device sends GPRS reports to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Transport may be UDP or TCP depending on the device setting; Plaspy supports both and uses automatic protocol detection.
- Location updates, ignition and alarm events are delivered to Plaspy and translated into live points and alerts.
- Plaspy presents the tracker data for real-time monitoring, geofence rules, and historical track playback.
- Where coverage is limited, SMS polling or trace modes can be used to retrieve device state for Plaspy ingestion.

## Common Configuration Workflow

1. Access the official ThingSys configuration method supported for the TS-G17W (SMS commands or the manufacturer tool).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 as the device accepts.
3. Set the server port to 8888 for GPRS reporting.
4. Choose UDP or TCP as the transport if the device requires transport selection.
5. Configure APN credentials (APN name, APN username, APN password) and save or apply the configuration.
6. Apply or save changes and restart the device if the device or firmware requires a reboot for settings to take effect.
7. Validate the device is reporting to Plaspy by checking device presence in Plaspy or using verification SMS commands where supported.

## Example Configuration Commands

The public modelConfiguration for the TS-G17W describes SMS-based setup. The sample commands below are presented in the original order and preserve placeholders and the default password where provided. Send these SMS messages to the device's SIM phone number as required by the tracker.

- Optional initial factory reset (use only if required for a clean state):
```text
FORMAT
```
Note: FORMAT is provided in the sample as a factory reset command. Run this only if a full reset is necessary during initial setup.

- Set the operator APN (replace [apn] with the carrier APN name):
```text
apn123456 [apn]
```

- Set the APN username (replace [apnu] with the APN username if required):
```text
apnuser123456 [apnu]
```

- Set the APN password (replace [apnp] with the APN password if required):
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server to the Plaspy server IP and port:
```text
ip54.85.159.138 8888
```
Note: This command sets the tracker to report to the Plaspy server IP and port. Some installations may allow the domain d.plaspy.com instead of the IP; follow the manufacturer tool or firmware guidance for domain support.

- Verify current settings using the device check command:
```text
CXZT
```
Explanation of placeholders: [apn] is the mobile operator APN name; [apnu] is the APN username; [apnp] is the APN password. The sample commands reference the device password 123456 as the default where the vendor provided it; include the password prefix in SMS formats if the device requires authentication before accepting commands.

## Configuration Notes

- Firmware variations and hardware revisions may change the exact SMS syntax or available commands. Always cross-check with the ThingSys documentation for your firmware build.
- Decide between UDP and TCP based on installation needs; Plaspy accepts both and will detect the device protocol automatically.
- SMS-based configuration is useful for remote or headless installations but requires that the device SIM can receive SMS messages.
- Preserve the order of APN and server commands when using SMS if the vendor guidance specifies a sequence.
- Keep the default password information on hand while provisioning and consider changing device passwords according to your security policy if supported.

## Why Use Plaspy with This Configuration

Using the TS-G17W with Plaspy provides a straightforward path to fleet visibility and event-driven monitoring. The device's rugged design and mobile connectivity options make it suitable for vehicle fleets and exposed assets, while Plaspy ingests its reports to provide live location, alerts, and historical tracking for operational oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device-specific configuration details, firmware changes, and manufacturer commands consult the official ThingSys documentation at https://www.thingsys.com/ as device behavior and setup methods can change over time.
