---
slug: /zilogic/fleet_pro/configuration
id: fleet_pro-configuration
sidebar_label: Configuration
title: Zilogic - Fleet Pro Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Zilogic Fleet Pro tracking device and Plaspy connectivity with practical commands and server settings
keywords:
  - Zilogic Fleet Pro configuration
  - Zilogic Fleet Pro setup
  - Fleet Pro server configuration
  - Zilogic GPS tracker Plaspy
  - Fleet Pro GPRS SMS setup
  - GPS tracker configuration guide
  - vehicle tracking platform setup
  - Fleet Pro telemetry configuration
  - Plaspy server settings
  - tracker protocol detection
---

# Zilogic - Fleet Pro Configuration

This page documents the public configuration context for using the Zilogic Fleet Pro tracker with Plaspy. It summarizes the shared Plaspy server settings, provides the practical setup workflow, and extracts the publicly available SMS configuration commands that are commonly used to point a Fleet Pro device at Plaspy.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary with firmware revision, hardware variant, installation type, and vendor tools, so treat the commands and workflow here as practical public guidance and verify device-specific details with the manufacturer when needed.

## Configuration Overview

The objective of this configuration is to prepare a Fleet Pro device so it reliably reports location and status to Plaspy. The steps below cover common actions such as applying the Plaspy server settings, enabling GPRS data reporting, and validating connectivity from the device into the Plaspy platform.

- Set the device to report to the Plaspy server endpoint so data flows into the platform.
- Configure GPRS and operator APN settings so the device can reach Plaspy over mobile data.
- Select the transport and port used by Plaspy and save the configuration to the tracker.
- Verify device reporting with status or query commands so the device appears in Plaspy.
- Adjust reporting interval to balance real time visibility and data usage.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint details to use when pointing a Fleet Pro device to the platform. Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A powered and installed Fleet Pro device accessible for configuration.
- A valid mobile SIM with data enabled and the correct operator APN details.
- A method to send SMS commands or access the manufacturer configuration tool, depending on the device firmware and provisioning flow.
- Basic knowledge of the tracker reporting interval requirements for your fleet.
- Access to the device serial number or unique identifier used by Plaspy to register the device if required by your administrator.

## How This Tracker Connects to Plaspy

Fleet Pro is configured to send its location and status data to the shared Plaspy server endpoint and port. Once the device has correct APN and server entries, it will open a GPRS session and transmit tracking packets to Plaspy for visibility and monitoring.

- The tracker is pointed to d.plaspy.com or directly to 54.85.159.138 using port 8888.
- The device may use either UDP or TCP transport to send data to Plaspy.
- Plaspy automatically detects the device protocol, simplifying multi-vendor deployments.
- Regular interval updates and event reports allow Plaspy to display location and operational status.
- Verifying GPRS connectivity and saved server settings ensures the device appears and reports in Plaspy.

## Common Configuration Workflow

1. Access the official Zilogic Fleet Pro configuration method for your unit, for example the SMS command interface or vendor configuration tool, depending on the device.
2. Enter the Plaspy server endpoint by setting either d.plaspy.com or the IP address 54.85.159.138 in the device server settings.
3. Set the port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure the operator APN and enable GPRS data so the device can reach the Plaspy server.
6. Apply or save the configuration and, if required, restart the device to apply network settings.
7. Validate that the device reports to Plaspy by using the device status queries or checking device activity in the platform.

## Example Configuration Commands

The Fleet Pro supports SMS-based configuration. Below are the public SMS commands in the order commonly used to configure a device for Plaspy. Send each line as an individual SMS from an authorized phone number unless your provisioning process differs.

- Set the device time zone (example sets UTC):
```
SET TZ +00:00
```

- Set the operator APN using placeholders. Replace the placeholders with your operator values:
```
SET APN [apn],[apnu],[apnp]
```
Explanation of placeholders:
- [apn] = APN name provided by your mobile operator
- [apnu] = APN username if required by the operator (leave blank if not used)
- [apnp] = APN password if required by the operator (leave blank if not used)

- Set the GPRS server to the Plaspy endpoint using the public IP and port:
```
SET SERVER 54.85.159.138,8888
```
You can use d.plaspy.com instead of the IP if the device accepts domain names.

- Enable GPRS mode:
```
SET GPRS 1
```

- Set the reporting interval. Example sets periodic updates; adjust values as needed:
```
SET PERIOD 60,60
```
(Values indicate interval configuration as supported by device firmware; confirm exact semantics in manufacturer documentation.)

- Save the configuration so settings persist:
```
SAVE
```

Verification commands to check current configuration:
```
GET APN
```
```
GET GPRS
```
```
GET SERVER
```
```
STATUS
```

These commands are the public, manufacturer-provided SMS commands commonly used to prepare Fleet Pro devices for Plaspy. Preserve the order above for a typical setup sequence.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; confirm commands against your device firmware documentation.
- The Fleet Pro supports both SMS and GPRS configuration methods in public documentation; use SMS when remote or when a configuration tool is not available.
- Choose TCP or UDP transport based on network reliability and your operational needs; Plaspy supports both and detects protocol automatically.
- Use the domain d.plaspy.com or the IP 54.85.159.138 with port 8888; Plaspy uses the same port for all supported devices to simplify configuration.
- Keep APN placeholders [apn], [apnu], and [apnp] ready before sending commands so you can set operator credentials accurately.

## Why Use Plaspy with This Configuration

Configuring a Zilogic Fleet Pro to report to Plaspy gives fleet managers centralized visibility into vehicle location and operational status. With the Fleet Pro's configurable reporting interval, accelerometer and optional OBD II telemetry, pairing the tracker with Plaspy helps organizations monitor driving behavior, respond to events, and maintain oversight of their vehicle assets.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and technical details verify the official Zilogic documentation at https://zilogic.com/ as manufacturer specifications and recommended procedures can change over time.
