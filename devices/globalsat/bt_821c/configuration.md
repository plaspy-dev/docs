---
slug: /globalsat/bt_821c/configuration
id: bt_821c-configuration
sidebar_label: Configuration
title: GlobalSat - BT-821C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GlobalSat BT-821C and how to point compatible devices to Plaspy servers for tracking
keywords:
  - GlobalSat BT-821C configuration
  - BT-821C Plaspy setup
  - GlobalSat GPS receiver setup
  - BT-821C configuration guide
  - Bluetooth GNSS receiver configuration
  - Plaspy server configuration
  - GNSS device setup for Plaspy
  - NMEA GPS source setup
  - Fleet tracking GNSS configuration
  - RTCM correction setup
---

# GlobalSat - BT-821C Configuration

This page covers the public configuration context for using the GlobalSat BT-821C with Plaspy. It focuses on the practical server and workflow details needed to make the BT-821C act as a positioning source for Plaspy-enabled hosts or to configure a compatible tracker or gateway to forward GNSS data to Plaspy. Where public device commands are available they are included for clarity.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocols for incoming connections. Exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools. If your installation uses SMS or a gateway to forward GNSS, follow the manufacturer guidance alongside the server settings documented here.

## Configuration Overview

The goal of configuring the BT-821C for Plaspy is to ensure the receiver provides a reliable GNSS stream to a Plaspy-capable host or that a connected tracker or gateway is pointed to Plaspy for reporting. Depending on your system, configuration may be performed via Bluetooth pairing, manufacturer software, or SMS-based tracker commands where supported.

- Prepare the receiver to stream NMEA or RTCM to a Plaspy-capable host or gateway.
- Point any connected tracker or gateway to the Plaspy server endpoint so location and telemetry arrive in Plaspy.
- Validate connectivity and protocol recognition on the Plaspy side to confirm incoming data.
- Save and apply settings, then restart the device or gateway if required to start live reporting.
- Use provided public SMS commands if the device or connected tracker supports SMS configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections
- Note that all devices in Plaspy use the same port so port 8888 is shared across supported devices

## Typical Requirements Before Setup

- A powered and charged BT-821C receiver with Bluetooth operational and visible for pairing.
- A Plaspy-capable host, gateway, or tracker that accepts an external GNSS NMEA stream or can be configured to forward GNSS data to an IP server.
- Access to the official GlobalSat configuration method or vendor tool for the BT-821C or the connected gateway software.
- If SMS configuration is used (public commands provided below), an active SIM and SMS capability in the device accepting SMS commands and the ability to send SMS to the device.
- The device IMEI or identifier required by manufacturer commands if you use SMS configuration.
- Administrative access to Plaspy to verify the device appears and reports data after configuration.

## How This Tracker Connects to Plaspy

When used with Plaspy, the BT-821C normally provides a GNSS data stream to a Plaspy-capable host, gateway, or tracker. In setups where a tracker or gateway accepts device configuration, that unit is configured to report to the shared Plaspy server endpoint and port so Plaspy receives live location and telemetry.

- The BT-821C streams standard NMEA sentences to a paired Plaspy host or gateway for real time location updates.
- If a connected tracker supports direct server reporting, configure it to point to d.plaspy.com (or 54.85.159.138) on port 8888 using UDP or TCP.
- Once the tracker or gateway forwards GNSS data, Plaspy detects the protocol automatically and begins ingesting location updates.
- The Plaspy dashboard and monitoring tools then display location, movement, and status information from the device feed.
- Use validation steps in Plaspy to confirm the device is visible and reporting after configuration and restart.

## Common Configuration Workflow

1. Access the official manufacturer configuration method, software, or the tracker/gateway tool that manages the BT-821C or connected device.
2. Enter the Plaspy server address by domain d.plaspy.com or by IP 54.85.159.138 where the configuration requires an endpoint.
3. Set the port to 8888 as required by Plaspy and remember Plaspy uses the same port for all supported devices.
4. Choose transport UDP or TCP if your device requires selecting a transport protocol.
5. Apply or save the configuration in the manufacturer tool or via SMS command as applicable.
6. Restart or reboot the device or gateway if required to activate the new settings.
7. Validate that the device reports to Plaspy by checking device status and incoming messages in the Plaspy platform.

## Example Configuration Commands

The following public SMS-based commands are provided in the model configuration content. They are intended for devices or tracker firmware that support SMS configuration. Replace placeholders as described after each command. Maintain the exact IMEI and compute the checksum value correctly before sending.

Format note used by Plaspy for SMS packaging in the original content:
TSPRXAB27GHKLMnaicz*U!

1) Setup command
- Purpose: configure APN placeholders and point the device to Plaspy by IP and port
- Replace [imei] with the device IMEI, [apn] with the APN, [apnu] with the APN username, and [apnp] with the APN password. The final checksum must be calculated and substituted for [checksum].

```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

2) Reboot command (optional or used when required)
- Purpose: reboot the device to apply settings
- Replace [imei] and compute [checksumreeboot] for the reboot command.

```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Checksum generation
- The checksum in the published content is calculated as a simple bytewise XOR of all characters before the asterisk, then converted to a two digit uppercase hexadecimal string. Ensure you compute and insert the checksum value exactly as required by your device firmware.

Placeholders explained
- [imei] — the device IMEI or identifier required by the SMS command format.
- [apn] — Access Point Name for cellular data if the tracker or gateway uses cellular connectivity.
- [apnu] — APN username placeholder when needed.
- [apnp] — APN password placeholder when needed.
- [checksum] and [checksumreeboot] — computed checksum values inserted into the command.

If your specific BT-821C unit or connected tracker does not support SMS configuration, use the manufacturer software or gateway configuration interface instead. Always verify command syntax with the device vendor documentation.

## Configuration Notes

- Firmware and hardware revisions may change available commands, required syntax, and checksum algorithms; confirm current details with the manufacturer before sending commands.
- The BT-821C itself is a Bluetooth GNSS receiver that provides NMEA and RTCM streams to a host; direct server configuration is performed on the forwarding tracker or gateway when applicable.
- Choose UDP or TCP based on your gateway or tracker requirements; Plaspy accepts either and will autodetect protocol.
- When using SMS commands, confirm SMS delivery, character limits, and correct IMEI addressing to avoid misconfiguration.
- Use the server domain d.plaspy.com or the IP 54.85.159.138 when the configuration interface supports a domain name or requires an IP address respectively.

## Why Use Plaspy with This Configuration

Using the GlobalSat BT-821C with Plaspy provides a practical way to improve position quality for mobile hosts and gateways that feed location into Plaspy. The BT-821C's standard NMEA and RTCM outputs make it a straightforward external GNSS source for mapping, fleet monitoring, and field telemetry, while Plaspy handles protocol detection and centralized ingestion of location data.

Learn more about Plaspy and how it accepts GNSS and tracker data at https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and any manufacturer changes on the official GlobalSat site https://www.globalsat.com.tw/ before performing production deployments.
