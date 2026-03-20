---
slug: /thingsys/j16w/configuration
id: j16w-configuration
sidebar_label: Configuration
title: ThingSys - J16W Configuration
sidebar_class_name: menu_item_tracker
description: Configure the ThingSys J16W GPS tracker to report to Plaspy using the shared server settings and SMS or manufacturer tools
keywords:
  - ThingSys J16W configuration
  - J16W Plaspy setup
  - J16W server configuration
  - ThingSys GPS tracker setup
  - J16W tracking software configuration
  - ThingSys J16W APN settings
  - J16W SMS configuration
  - Plaspy tracker integration
  - Vehicle tracker configuration guide
  - Fleet tracking J16W
---

# ThingSys - J16W Configuration

This page documents the public configuration context for using the ThingSys J16W tracker with Plaspy. It consolidates the Plaspy server settings you must configure on the device and extracts the vendor-provided SMS commands that are commonly used to provision the J16W for network and platform connectivity. Where manufacturer commands are included, they are shown as published and preserved with placeholders for APN values.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The J16W can be configured via SMS or manufacturer software; the example SMS commands below reflect the public commands included in ThingSys documentation and use the device default password 123456 where shown.

## Configuration Overview

This configuration process prepares a ThingSys J16W to communicate reliably with Plaspy so location and vehicle telemetry appear in your Plaspy dashboards. The aim is to set network credentials, point the device at the Plaspy endpoint, select transport if required, and verify that telemetry reaches the platform.

- Configure the mobile operator APN, username, and password so the J16W can access cellular data.
- Set the tracker to report to the Plaspy server endpoint (domain or IP) and the shared port.
- Choose UDP or TCP on the device if transport selection is required and save the configuration.
- Apply or reboot the device so new settings take effect and the unit begins reporting.
- Validate the device reports to Plaspy and check basic telemetry such as position and ignition state.
- Keep default credentials and reset commands in mind during initial provisioning and testing.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept multiple device protocols on the same port

Note: All devices in Plaspy use the same port; configure the J16W to use port 8888 and either UDP or TCP per device requirements.

## Typical Requirements Before Setup

- A powered J16W unit with access to its SMS interface or the ThingSys configuration software
- A valid SIM card with data enabled and SMS capability plus the operator APN, username, and password
- The device default password (commonly 123456 in published examples) or the configured admin password
- Physical access to the device for a restart or to confirm wiring and power stability
- Access to Plaspy provisioning or account details so you can confirm the device appears in the platform once configured

## How This Tracker Connects to Plaspy

When configured, the J16W sends GNSS position and vehicle telemetry over the cellular network to Plaspy’s shared server endpoint and port. Plaspy ingests those messages and maps them into dashboards, alerts, and historical playback without requiring a device-specific port per tracker.

- The tracker reports location updates and telemetry to d.plaspy.com or to 54.85.159.138 on port 8888
- Transport can be either UDP or TCP depending on device settings and network constraints
- Plaspy automatically detects the incoming tracker protocol so messages are parsed and displayed
- I/O and event reports such as ignition state are forwarded into Plaspy for alerts and reporting
- Offline data stored by the J16W is retransmitted when connectivity returns so Plaspy receives missed points

## Common Configuration Workflow

1. Access the official ThingSys configuration method for the J16W (SMS commands, PC software, or production-line tool).
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 (Plaspy uses the same port for all devices).
4. If the device requires a transport selection, choose UDP or TCP according to your network and firewall rules.
5. Configure the operator APN, APN username, and APN password on the tracker so it can use cellular data.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking your Plaspy dashboard for the unit and verifying position and telemetry.

If you use SMS-based provisioning, send the manufacturer SMS commands as part of step 1 and 5; example SMS commands are shown below.

## Example Configuration Commands

The following example commands are taken from published ThingSys J16W configuration guidance. These commands are normally sent as individual SMS messages to the device phone number. The sample commands use the published default device password 123456 where visible. Preserve and replace placeholders as noted.

- Optional initial factory reset (use only if you need to reset the device):
```
FORMAT
```

- Set the operator APN (replace {{apn}} with your carrier APN):
```
apn123456 {{apn}}
```

- Set the APN username (replace {{apnu}} with your carrier APN username if required):
```
apnuser123456 {{apnu}}
```

- Set the APN password (replace {{apnp}} with your carrier APN password if required):
```
apnpasswd123456 {{apnp}}
```

- Set the GPRS/remote server to Plaspy using the server IP and port (this points the device to Plaspy on port 8888):
```
ip54.85.159.138 8888
```

- Check current device settings (verification command):
```
CXZT
```

Notes on the commands above:
- FORMAT is a factory reset command and should be used only during initial provisioning or when a reset is intentionally required.
- The strings apn123456, apnuser123456, and apnpasswd123456 include the device password pattern used by the J16W SMS command set in published examples; keep the password component intact or replace 123456 if your device uses a different admin password.
- Placeholders {{apn}}, {{apnu}}, and {{apnp}} must be replaced with your mobile operator's APN, APN username, and APN password respectively.
- The server command uses the Plaspy server IP 54.85.159.138 and port 8888; alternatively you may configure d.plaspy.com if the device accepts a domain name.

## Configuration Notes

- SMS-based setup is commonly supported by ThingSys devices; confirm the exact SMS syntax for your firmware before mass provisioning.
- Default passwords such as 123456 may appear in examples; change administrative passwords after provisioning to secure the device.
- Firmware versions and hardware revisions can alter command syntax or available options; verify commands against your unit firmware.
- Choose UDP or TCP based on your network topology and firewall settings; both transports are supported by Plaspy on port 8888.
- Always verify connectivity in Plaspy after configuration so you can confirm position and telemetry appear as expected.

## Why Use Plaspy with This Configuration

Using the ThingSys J16W with Plaspy provides a practical path to reliable vehicle visibility, event monitoring, and fleet operational oversight. The J16W’s cellular connectivity and offline buffering combined with Plaspy’s centralized ingestion let teams receive location updates, ignition and relay events, and alerting in a single platform for day to day fleet management and incident response.

To learn more about Plaspy visit https://www.plaspy.com. For the latest ThingSys device-specific commands, firmware notes, and hardware documentation verify details on the manufacturer site https://www.thingsys.com/ since setup methods and command syntax can change with firmware and device revisions.
