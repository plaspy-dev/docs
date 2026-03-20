---
slug: /v_sun/v_3338/configuration
id: v_3338-configuration
sidebar_label: Configuration
title: V-SUN - V-3338 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for V SUN V 3338 showing Plaspy server settings and SMS commands for GPRS reporting
keywords:
  - V-SUN V-3338 configuration
  - V-SUN V-3338 setup
  - V-SUN V-3338 Plaspy
  - Plaspy device configuration
  - V-3338 server configuration
  - V-SUN GPS tracker setup
  - vehicle tracking configuration
  - GPRS tracker setup
  - SMS configuration commands
  - GPS tracker server settings
---

# V-SUN - V-3338 Configuration

This page covers the public configuration context for using the V-SUN V-3338 GPS tracker with the Plaspy platform. It summarizes the practical, publicly available setup steps and commands that prepare the V-3338 to upload location data to Plaspy using the device's GSM GPRS capability and SMS command interface when applicable.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The V-3338 supports SMS and GPRS configuration paths and the example commands below are the publicly provided SMS commands commonly used to set APN and server parameters.

## Configuration Overview

Configuring the V-SUN V-3338 for Plaspy means preparing the device to communicate reliably with a single Plaspy server endpoint, setting the device APN and transport, and validating that the tracker reports to the platform. The process frequently uses SMS commands sent to the device or the vendor configuration tool depending on what is available.

- Set the device APN and optional APN credentials so the device can register on the carrier GPRS network.
- Configure the device to upload location data to the Plaspy server endpoint and port.
- Choose UDP or TCP transport if required by device firmware.
- Apply configuration and enable GPRS mode so the tracker begins uploading.
- Validate connectivity and confirm the tracker is visible in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note that all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A working SIM card with active data and SMS capability inserted in the V-3338.
- Power the device and confirm it has GPS fix or adequate sky view for testing when possible.
- Access to the device SMS command interface or the official V-SUN configuration tool or method.
- The carrier APN, and optionally APN username and password for your SIM.
- Awareness of the device default password if SMS commands use a security code (the public example uses 0000).

## How This Tracker Connects to Plaspy

The V-3338 is configured to send positioning data to the shared Plaspy server endpoint and port so Plaspy can ingest telemetry and present location on the platform. Plaspy's automatic protocol detection means you only need to point the device to the server endpoint and port without selecting a Plaspy-specific protocol version.

- The tracker uploads GPRS messages to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The device may use either UDP or TCP transport depending on firmware options and configuration.
- Plaspy receives the device messages and maps them to a device record using automatic protocol detection.
- Once reporting, the device shows real time location and historical trajectory inside Plaspy.
- SMS can be used to set APN and server parameters when no configuration tool is available.

## Common Configuration Workflow

1. Access the official V-SUN configuration method such as the SMS command interface or manufacturer software.
2. Enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138 in the server field.
3. Set the port to 8888 as Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires a transport selection.
5. Set the carrier APN and optionally APN username and password if required by your SIM.
6. Apply or save the configuration and enable GPRS mode on the device.
7. Restart the device if required by the firmware and then validate that the device reports to Plaspy.

## Example Configuration Commands

The V-3338 supports SMS configuration. The commands below are the publicly available SMS commands provided in the device documentation. Preserve the default device password or replace it where appropriate. The example uses the default password 0000.

1. Optional initial factory reset (use only when needed):
```
*RESET#0000##
```
2. Set the operator APN. Replace placeholders with your carrier values:
```
#803#0000#{{apn}}#{{apnu}}#{{apnp}}##
```
- {{apn}} is the carrier access point name.
- {{apnu}} is the APN username if required by the carrier.
- {{apnp}} is the APN password if required by the carrier.

3. Set the GPRS server to Plaspy by IP and port:
```
#804#0000#54.85.159.138#8888##
```
4. Set the update interval when moving (example command from public docs):
```
#805#0000#120#1##
```
5. Set the update interval when static (example command from public docs):
```
#809#0000#120#1##
```
6. Enable GPRS mode:
```
7100000
```
7. Enable GPS mode:
```
2220000
```

Follow the commands in the order above when the sequence matters, and adjust the password field if you changed the device password from the default 0000. If your carrier requires APN credentials, supply {{apnu}} and {{apnp}} as shown. The numeric values for intervals are vendor provided and may represent seconds or internal units depending on firmware.

## Configuration Notes

- Firmware and firmware revisions can change command syntax or parameter meanings. Always confirm with current V-SUN manufacturer documentation.
- The V-3338 supports SMS based configuration in public documentation, which is useful for field setups without a configuration tool.
- Choose UDP or TCP according to device firmware support and network requirements. Plaspy accepts either transport on port 8888.
- Verify the device APN settings and test data connectivity before expecting live reporting.
- The example commands use the default password 0000 in the public examples; change the device password to secure deployments after successful testing.

## Why Use Plaspy with This Configuration

Using Plaspy with the V-SUN V-3338 provides a straightforward way to centralize vehicle or asset location reporting, access historical trajectories, and monitor devices remotely. Pointing the V-3338 at the Plaspy server endpoint simplifies integration because Plaspy uses a single port and automatic protocol detection for supported trackers.

To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official command references verify information on the V-SUN manufacturer site at http://www.v-sun.cc/. Manufacturer specifications and setup methods can change over time so always confirm the current procedures before wide deployment.
