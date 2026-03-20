---
slug: /teltonika/fmc125/configuration
id: fmc125-configuration
sidebar_label: Configuration
title: Teltonika - FMC125 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMC125 setup with Plaspy server settings and example commands
keywords:
  - Teltonika FMC125
  - FMC125 configuration
  - FMC125 Plaspy setup
  - Teltonika configuration
  - GPS tracker setup
  - vehicle tracking setup
  - fleet management tracker
  - FMC125 server configuration
  - Plaspy tracker setup
  - GPS platform configuration
---

# Teltonika - FMC125 Configuration

This page describes the public configuration context for using the Teltonika FMC125 with Plaspy. It covers the shared Plaspy server settings you will apply on the tracker, practical setup guidance, and an example SMS command provided in the public device information to point the FMC125 at Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the Teltonika configuration tools or SMS commands available to you. Use this page to prepare the device for communication with Plaspy and refer to Teltonika documentation for device specific details.

## Configuration Overview

The primary goal of this configuration is to prepare the FMC125 to send GNSS position and telemetry data to Plaspy using Plaspy's shared server endpoint and port. This involves setting the device APN and pointing the tracker to the Plaspy server, choosing the transport if required, and validating that the unit communicates correctly.

- Set the device APN and network credentials so the tracker has cellular connectivity.
- Configure the tracker server endpoint to d.plaspy.com or the Plaspy server IP and set the Plaspy port.
- Choose UDP or TCP transport on the device if the device requires a transport selection.
- Apply and save the settings then restart the tracker when required so settings take effect.
- Validate the device is visible in Plaspy and reporting telemetry such as position, impulse inputs, and serial data.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on tracker settings
- Plaspy automatically detects the tracker protocol so a single port is used for all devices

All devices in Plaspy use the same port and Plaspy will automatically detect the tracker protocol when the device connects.

## Typical Requirements Before Setup

- Ensure the FMC125 is powered and properly installed with GNSS and cellular antennas connected.
- Ensure the device has a working cellular connection and an active SIM configured for data; FMC125 supports Dual SIM resilience.
- Obtain the correct APN and, if required, username and password from your mobile network operator.
- Have access to the Teltonika configuration method you will use such as SMS commands or Teltonika configuration tools.
- Confirm device firmware is up to date or note the firmware version so you can follow the correct manufacturer instructions.
- Prepare to restart the device after applying configuration to ensure settings are applied.

## How This Tracker Connects to Plaspy

When configured, the FMC125 uses its cellular uplink to report GNSS position and telemetry to the shared Plaspy server endpoint and port. Plaspy ingests location, impulse pulses, RFID and 1 wire events, and serial telemetry to make the device visible in platform dashboards and alerts.

- The tracker is pointed at d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.
- Transport may be set to UDP or TCP on the device if required; Plaspy accepts either.
- Plaspy automatically detects the tracker protocol so the same port works for all supported devices.
- Once connected the device sends position updates and configured telemetry for live tracking and historical traces.
- Plaspy receives events for operational monitoring such as fuel pulses, RFID reads, and serial data when those inputs are enabled.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FMC125 such as SMS commands or a Teltonika configuration tool.
2. Enter the APN and any APN credentials required by your mobile operator.
3. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device server address.
4. Set the port to 8888 on the tracker.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration and restart the device if required by the Teltonika procedure.
7. Validate that the device reports to Plaspy and appears as an active tracker in your Plaspy account.

If you use the Teltonika SMS or batch configuration method, include the Plaspy settings exactly as shown in the example command below.

## Example Configuration Commands

The public Teltonika example for batch SMS configuration can set APN parameters and point the device to Plaspy. The following command is provided in public device configuration content and preserves placeholders for operator values.

- Explanation of placeholders
  - [apn] is the mobile network APN
  - [apnu] is the APN username if required by the operator
  - [apnp] is the APN password if required by the operator

Example SMS batch command to set APN and point the device to Plaspy:

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Send this SMS to the device using the Teltonika recommended SMS workflow or input it via the vendor configuration tool where supported. The command sets network parameters and the server address to d.plaspy.com with the Plaspy port 8888. Plaspy will automatically detect the tracker protocol when the device connects.

## Configuration Notes

- Firmware differences can change parameter codes or supported commands; confirm the correct parameter IDs for your FMC125 firmware version.
- Choose UDP or TCP based on your installer preference and any network requirements; Plaspy accepts both and will detect the protocol automatically.
- Preserve APN placeholders when preparing commands and replace them with the operator provided values before sending.
- SMS based configuration is commonly supported by Teltonika devices but using the official Teltonika tool may be preferred for bulk or staged deployments.
- After applying settings, a device restart is often necessary for changes to take effect; follow Teltonika guidance for safe restart procedures.

## Why Use Plaspy with This Configuration

Configuring the FMC125 to report to Plaspy provides centralized visibility for fleet operators who need reliable real time tracking and richer telemetry. With the appliance ready to send GNSS, impulse input, and serial data, Plaspy can surface actionable dashboards, fuel analytics, and alerts that support operational decision making.

To learn more about Plaspy and how it works with devices like the FMC125 visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify information on the Teltonika website https://www.teltonika-gps.com/ .
