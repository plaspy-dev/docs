---
slug: /sanav/gx_101/configuration
id: gx_101-configuration
sidebar_label: Configuration
title: Sanav - GX-101 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Sanav GX-101 tracker showing how to connect and configure the device for use with Plaspy
keywords:
  - Sanav GX-101 configuration
  - Sanav GX-101 setup
  - Plaspy configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - Sanav GX-101 server configuration
  - tracking platform configuration
  - GPRS tracker setup
  - SMS configuration commands
  - fleet tracking integration
---

# Sanav - GX-101 Configuration

This page covers the public configuration context for using the Sanav GX-101 GPS tracker with Plaspy. It describes the practical, publicly available settings and commands used to point a GX-101 to the Plaspy server endpoint so the device can report location and basic telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and the vendor configuration tools you use. The GX-101 supports SMS and GPRS configuration flows; the manufacturer-provided SMS commands shown here are public examples commonly used to configure GPRS server settings and reporting behavior.

## Configuration Overview

This configuration process prepares the GX-101 to communicate with Plaspy by setting operator APN, GPRS server endpoint, transport mode, and reporting intervals. The commands below are shown in the order typically used for initial setup and assume the device default SMS password is 0000 unless you or your vendor changed it.

- Set the operator APN so the tracker can open a GPRS data connection.
- Point the device GPRS server to the Plaspy endpoint so data is sent to the platform.
- Choose transport (UDP or TCP) and the Plaspy port so the device uses the same port as other supported devices.
- Configure reporting interval to control update frequency for location data.
- Optionally perform a factory reset first if you need to restore device defaults before applying new settings.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

These values are the shared Plaspy endpoint and port used for all supported devices. Plaspy automatically detects the tracker protocol once the device sends data to the configured endpoint.

## Typical Requirements Before Setup

- A SIM card with an active data plan and SMS capability inserted into the GX-101.
- The device powered and accessible for sending SMS commands or using the official configuration tool.
- Operator APN, APN username, and APN password information for your cellular provider.
- Knowledge of the device default SMS password (the example commands use 0000).
- Ability to receive device responses via SMS to confirm command acceptance.
- Access to the official Sanav configuration method or documentation for your firmware version.

## How This Tracker Connects to Plaspy

The GX-101 is configured to send location and device data over the cellular network to the shared Plaspy server endpoint and port. Once the device opens a GPRS session and transmits data to the configured server, Plaspy will detect the protocol and begin processing the device messages for visibility on the platform.

- The tracker uses GPRS to transmit position data to the configured server endpoint.
- Configure the GPRS server to 54.85.159.138:8888 so data reaches Plaspy.
- Alternatively, administrators can reference the server domain d.plaspy.com and the same port when entering server settings.
- Choose UDP or TCP transport on the device if a transport selection is required by the device.
- Plaspy automatically detects the device protocol when data arrives on port 8888.

## Common Configuration Workflow

1. Access the official Sanav configuration method or software, or prepare to send SMS configuration commands according to the device documentation.
2. Enter d.plaspy.com or 54.85.159.138 as the GPRS server endpoint in the device configuration.
3. Set the port to 8888 for all devices, as Plaspy uses the same port across supported trackers.
4. Choose UDP or TCP on the device if prompted by the configuration interface.
5. Configure the operator APN and any APN credentials ({{apn}}, {{apnu}}, {{apnp}} placeholders are commonly used in SMS commands).
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by confirming the device appears in the platform after it sends its first data packets.

## Example Configuration Commands

To configure the GX-101 using SMS commands, send the following messages to the device phone number. The commands shown below are the public examples provided by the manufacturer. The device default password used in these examples is 0000.

- Factory reset (optional initial step)
```text
#username,0000,9*
```

- Set the operator APN (replace placeholders with your operator values)
```text
#username,0000,3,{{apn}},{{apnu}},{{apnp}}*
```
Explanation: {{apn}} is the operator APN, {{apnu}} is the APN username if required, and {{apnp}} is the APN password if required. Keep the placeholders if your provider requires them; omit empty fields per manufacturer guidance.

- Set the GPRS server to Plaspy (public Plaspy server IP and port)
```text
#username,0000,18,54.85.159.138:8888*
```

- Set the route for data transmission (select route mode as required by device)
```text
#username,0000,14,9*
```

- Set update interval to 60 seconds for reporting
```text
#username,0000,6,60,9999*
```

Follow the command order as shown for initial setup when you need a reset and then apply APN and server settings. If your installation requires different timing or reporting rules, adjust the interval command accordingly.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or behavior; always confirm commands against your device firmware version.
- The GX-101 supports SMS-based configuration in the examples above; some vendors or installers may prefer a vendor configuration tool or cable-based setup.
- Choose UDP or TCP according to your installation needs; Plaspy supports both and will auto detect the tracker protocol.
- The example commands use the device default password 0000; if this has been changed, use the active device password when sending SMS commands.
- Use the Plaspy server domain d.plaspy.com or the IP 54.85.159.138 with port 8888 when configuring the device server settings.

## Why Use Plaspy with This Configuration

Pointing the Sanav GX-101 to Plaspy with the shared server settings gives fleet operators a straightforward way to centralize device data. By configuring APN and the GPRS server to the Plaspy endpoint and port, the GX-101 can reliably transmit its position and reporting events so Plaspy can display and process that data for operational oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer guidance verify details at the official Sanav site http://es.sanav.com/ since configuration procedures and firmware behavior can change over time.
