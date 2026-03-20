---
slug: /teltonika/fmb930/configuration
id: fmb930-configuration
sidebar_label: Configuration
title: Teltonika - FMB930 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Teltonika FMB930 for Plaspy with server settings example commands and a practical setup workflow
keywords:
  - Teltonika FMB930 configuration
  - FMB930 setup Plaspy
  - Teltonika tracker configuration
  - Plaspy server settings
  - FMB930 GPS tracker setup
  - BLE telemetry FMB930
  - FMB930 configuration commands
  - fleet tracking Plaspy
  - Teltonika configuration guide
  - tracking software configuration
---

# Teltonika - FMB930 Configuration

This page covers the public configuration context for using the Teltonika FMB930 with Plaspy. It consolidates the Plaspy server settings you must provide to the device, explains the practical setup workflow, and includes an example command used to set basic parameters on the tracker. The content is intended for technical installers and fleet operators preparing FMB930 devices for integration with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the steps here as a practical starting point and verify device behavior against Teltonika documentation where needed.

## Configuration Overview

The goal of configuring the FMB930 for use with Plaspy is to ensure the tracker can reach Plaspy's ingestion endpoint, authenticate to the mobile network if required, and send GNSS and BLE telemetry reliably. The process typically includes setting APN values, pointing the device to Plaspy's server, selecting the transport type, and validating the device is reporting.

- Set the device APN, APN username, and APN password placeholders so the tracker has cellular data access.
- Point the device to Plaspy server values so data is delivered to Plaspy for processing.
- Choose the transport protocol if required by the device (UDP or TCP) and save the configuration.
- Validate connectivity and that the device appears in Plaspy with location and BLE telemetry.
- Use the provided example command as a deployable SMS or configuration tool entry to apply key parameters quickly.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- Note that Plaspy uses the same port 8888 for all supported devices

## Typical Requirements Before Setup

- A charged and powered FMB930 with required installation wiring and access to the device.
- An active 2G GSM SIM and network coverage on bands supported by the FMB930.
- APN details from the mobile operator ready to fill into the device: APN, APN username, and APN password.
- Access to the official Teltonika configuration method or vendor tool for the FMB930 (SMS command, configuration tool, or remote management like FOTA WEB).
- A Plaspy account and knowledge of how to verify device appearance and telemetry within Plaspy after provisioning.
- Basic tools for validating connectivity such as SMS capability, serial console access, or a configuration utility as provided by the manufacturer.

## How This Tracker Connects to Plaspy

When configured, the FMB930 uses its cellular link to send GNSS positions and BLE sensor telemetry to Plaspy's shared server endpoint and port. Plaspy receives the data, auto-detects the tracker protocol, and makes the device visible for real-time tracking, alerts, and reporting.

- The tracker is configured to report to the shared Plaspy server endpoint at d.plaspy.com (or 54.85.159.138) on port 8888.
- Communications use the device cellular link to transmit GNSS location updates and BLE-based sensor telemetry to Plaspy.
- Plaspy automatically detects the tracker protocol so you do not need to preselect a protocol type inside Plaspy.
- Using UDP or TCP on port 8888 depends on device-side transport selection; configure the tracker to use the desired transport.
- Once reporting, the device generates live position updates, event notifications, and telemetry that Plaspy processes for visibility and alerts.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FMB930 (SMS command, Teltonika config tool, or FOTA WEB).
2. Enter the Plaspy server address using d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP on the device if the configuration requires selecting a transport.
5. Enter APN, APN username, and APN password values using the device configuration interface.
6. Apply or save the configuration and, if required by the device, restart the tracker to load the new settings.
7. Validate that the device reports to Plaspy and appears in your Plaspy account with location and telemetry.

## Example Configuration Commands

To configure the basic parameters on your Teltonika device, enter the following command. This example is commonly sent via SMS or entered through the manufacturer configuration interface. Preserve the placeholders and replace them with your operator APN details.

- Example setparam command to set APN and server parameters

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and values
  - [apn] — replace with your mobile operator APN
  - [apnu] — replace with APN username if required by the operator; leave empty if not used
  - [apnp] — replace with APN password if required by the operator; leave empty if not used
  - 2004 sets the server domain to d.plaspy.com
  - 2005 sets the server port to 8888
  - 2006 is a device parameter included in the example; confirm its exact meaning for your firmware via Teltonika documentation before changing it

If you use the device management tool (for example FOTA WEB) you can apply equivalent parameters there instead of sending SMS commands.

## Configuration Notes

- Firmware and hardware revisions can change parameter IDs and command formats; always confirm parameter mappings against the Teltonika FMB930 manual for your firmware version.
- TCP versus UDP selection is done on the device side; Plaspy accepts both transports on port 8888 and will detect the protocol automatically.
- Keep APN placeholders [apn], [apnu], and [apnp] intact in templates and replace them with operator-specific values during deployment.
- The provided command is a common public example; for large fleets use Teltonika remote management tools such as FOTA WEB for bulk provisioning and updates.
- After applying configuration, validate device visibility and telemetry in Plaspy to confirm successful connection.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB930 with Plaspy gives fleet operators low-power, BLE-capable tracking designed for light electric vehicles along with a consistent server endpoint and port for simplified provisioning. The combination helps deliver real-time location, BLE sensor telemetry, and remote device management opportunities while minimizing per-device configuration differences thanks to Plaspy's automatic protocol detection.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and parameter definitions verify details on the official Teltonika site https://www.teltonika-gps.com/
