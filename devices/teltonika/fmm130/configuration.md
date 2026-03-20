---
slug: /teltonika/fmm130/configuration
id: fmm130-configuration
sidebar_label: Configuration
title: Teltonika - FMM130 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Teltonika FMM130 for use with Plaspy using shared server settings and example commands
keywords:
  - Teltonika FMM130 configuration
  - Teltonika FMM130 Plaspy setup
  - FMM130 GPS tracker configuration
  - Plaspy server configuration
  - FMM130 setup guide
  - Teltonika device configuration
  - GPS tracker server settings
  - vehicle tracking setup
  - fleet management tracker setup
  - tracking platform integration
---

# Teltonika - FMM130 Configuration

This page documents the public configuration context for using the Teltonika FMM130 with Plaspy. It focuses on the practical server settings and example commands needed to point the device to Plaspy so the tracker can report location and telemetry to the Plaspy platform.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol. Manufacturer-side steps to apply these values can vary by firmware version, hardware revision, installation type, and the Teltonika configuration tools you use. Use this guide together with the official Teltonika documentation for the most current device procedures.

## Configuration Overview

Configuring the FMM130 for Plaspy prepares the device to send position and telemetry to Plaspy’s centralized endpoint. The process is centered on setting the network APN (if required by your SIM), the Plaspy server address, and the port so the device can establish a data session and forward its messages.

- Set the device APN and credentials so it has mobile connectivity on your chosen network
- Configure the destination server to point to Plaspy using the shared server values
- Select the transport protocol if the device requires an explicit choice of UDP or TCP
- Apply and save the configuration, then restart or reinitialize the device if required
- Validate that the device appears and reports in Plaspy after configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- Power the FMM130 with a stable vehicle or external power source and confirm the device is operational
- A compatible SIM card with an active data plan and the correct APN details
- Access to the official Teltonika configuration method or software for your device and firmware
- Basic knowledge of the device interface used for configuration such as SMS commands or Teltonika tools
- Access to Plaspy account details to confirm device visibility after configuration

## How This Tracker Connects to Plaspy

The FMM130 is configured to send its location and telemetry to Plaspy by targeting the shared Plaspy server endpoint and port. Plaspy ingests the incoming device messages and maps them to your account so you can view live location, event notifications, and historical data.

- Device sends GNSS fixes and telemetry to d.plaspy.com or 54.85.159.138 on port 8888
- Tracker messages are transmitted over UDP or TCP depending on the transport selected
- Plaspy automatically detects the tracker protocol and processes messages without a device specific port change
- After successful configuration the device becomes visible in Plaspy for live tracking and reporting
- Status and event messages from the device are routed into Plaspy for alerts and diagnostics

## Common Configuration Workflow

1. Access the official Teltonika configuration method such as SMS commands or Teltonika configuration software appropriate for your FMM130 firmware
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138
3. Set the destination port to 8888
4. Choose UDP or TCP if the device requires an explicit transport selection
5. Provide APN details and any required SIM credentials so the device can establish a data connection
6. Apply or save the configuration and restart the device if required by the device or firmware
7. Validate that the FMM130 reports to Plaspy by confirming the device appears and sends updates in the Plaspy platform

## Example Configuration Commands

The FMM130 can be configured using a batch parameter command format. The following example is a public Teltonika style command that sets APN parameters and the Plaspy server and port. Replace the placeholders with your carrier APN values as required.

- Example batch setparam command

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command and placeholders:
- [apn] is the mobile network APN name required by your SIM
- [apnu] is the APN username if your carrier requires one
- [apnp] is the APN password if your carrier requires one
- 2004 in this command points the device to d.plaspy.com and 2005 sets port 8888
- 2006 is included in the example command as a device parameter flag; verify the exact meaning for your firmware in Teltonika documentation
- This command may be applied via SMS or Teltonika configuration utilities depending on your setup and firmware

## Configuration Notes

- Firmware variations and device revisions can change parameter codes and supported command formats; always verify parameter indices for your firmware
- Teltonika devices often support both SMS batch commands and configuration via vendor tools; choose the method that matches your installation workflow
- When a transport choice is required, select UDP or TCP according to your network environment and confirm the setting in Plaspy
- The Plaspy server values shown are public shared settings used across devices; Plaspy will detect the tracker protocol automatically on port 8888
- If a setting does not appear to take effect, reboot the device or consult Teltonika tools to push configuration and check status logs

## Why Use Plaspy with This Configuration

Using the Teltonika FMM130 with Plaspy gives organizations centralized visibility of location and telemetry across fleets and assets. Pointing the device to Plaspy using the shared server settings described here allows consistent ingestion of GNSS fixes, CAN and sensor data so teams can monitor operations, enforce geofences, and review historical reports from a single platform.

Learn more about Plaspy and how it works with devices like the FMM130 at https://www.plaspy.com. For device specific configuration steps, firmware behavior, and the latest parameter definitions consult the official Teltonika documentation at https://www.teltonika-gps.com/ to verify current manufacturer guidance.
