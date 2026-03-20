---
slug: /globalsat/gtr_388c1/configuration
id: gtr_388c1-configuration
sidebar_label: Configuration
title: GlobalSat - GTR-388C1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for GlobalSat GTR 388C1 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - GlobalSat GTR-388C1 configuration
  - GlobalSat GTR-388C1 setup
  - GTR-388C1 Plaspy configuration
  - GPS tracker setup Plaspy
  - tracker SMS configuration
  - Plaspy server settings
  - vehicle tracker configuration
  - eBike GPS setup
  - motorcycle tracker configuration
  - compact GPS tracker setup
---

# GlobalSat - GTR-388C1 Configuration

This page documents the public configuration context for using the GlobalSat GTR-388C1 tracker with the Plaspy platform. It explains the shared Plaspy server settings and the practical, publicly available commands and workflow used to point the device to Plaspy for real time tracking and telemetry ingestion.

Plaspy uses a common server endpoint and port for supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The example commands below come from public device configuration content and illustrate typical SMS command usage and checksum handling when preparing the GTR-388C1 for Plaspy.

## Configuration Overview

The goal of this configuration process is to prepare the GTR-388C1 to report GNSS position and device telemetry to the Plaspy platform using Plaspy's shared server endpoint and port. The public commands below show the SMS-based configuration method available for this tracker family; alternative setup tools or software may also be provided by GlobalSat.

- Configure the tracker to send data to Plaspy server d.plaspy.com or the Plaspy server IP
- Insert APN and credential placeholders so the device can use mobile data to reach the server
- Set the destination port used by Plaspy which is the same for all supported devices
- Choose UDP or TCP transport on the device if required by the firmware
- Validate connectivity and confirm the device appears in Plaspy after configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support TCP or UDP on port 8888 depending on device selection
- Plaspy automatically detects the tracker protocol when the device communicates with the server

## Typical Requirements Before Setup

- A powered and accessible GTR-388C1 device with the ability to receive SMS configuration commands
- A working SIM card with an active data plan and the correct APN values for your mobile operator
- The device IMEI available for use in SMS commands and device identification
- Access to the official manufacturer configuration method such as SMS command format or vendor tools
- A phone or SMS gateway capable of sending the SMS command string to the tracker
- Optionally, a method to reboot the tracker remotely or locally after applying settings

## How This Tracker Connects to Plaspy

When configured, the GTR-388C1 sends GNSS positions and event telemetry to the shared Plaspy endpoint and port. Plaspy ingests those messages and exposes them in dashboards, alerts, and reporting so fleets and operators can monitor location and device events in real time.

- The tracker reports to the Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888
- Transport may be configured as UDP or TCP depending on device firmware and installer choice
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device record
- Position updates and I/O events become visible in Plaspy for live tracking and historical replay
- Device-side configuration commands can be delivered by SMS according to GlobalSat public command formats

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for the GTR-388C1 such as SMS commands or the vendor tool described in manufacturer documentation.
2. Prepare the command string replacing placeholders such as the device IMEI and APN values {{apn}}, {{apnu}}, and {{apnp}}.
3. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the server destination in the command.
4. Set the port to 8888 and choose UDP or TCP if the device requires explicit transport selection.
5. Send the configuration SMS to the device and apply or save the settings per the device procedure.
6. Restart or reboot the device if required to load the new configuration.
7. Validate that the device reports to Plaspy and appears in the platform’s device list or by monitoring inbound connections to the shared Plaspy endpoint.

## Example Configuration Commands

The following commands are derived from publicly available configuration content for the GTR-388C1. These are SMS commands. Preserve the placeholders and compute the checksum as required by the device.

Format note shown in the public content
TSPRXAB27GHKLMnaicz*U!

Primary setup command
Replace {{imei}} with the device IMEI and {{apn}}, {{apnu}}, {{apnp}} with your operator APN settings. Compute the checksum for the characters before the asterisk and place the two-character uppercase hex checksum in the {{checksum}} placeholder.

```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Optional reboot command
This command reboots the device to apply changes. Compute and insert the checksum for the command portion before the asterisk.

```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum explanation
- The public UI script shows the checksum is computed by XORing the character codes of the command string up to but not including the asterisk, then converting the result to a two digit uppercase hexadecimal value. Insert that hex value into the placeholder such as {{checksum}}.

Placeholder brief descriptions
- {{imei}} — the device IMEI number used to target the tracker for SMS setup
- {{apn}} — Access Point Name for the SIM operator
- {{apnu}} — APN username if required by the operator
- {{apnp}} — APN password if required by the operator
- {{checksum}} and {{checksumreeboot}} — two character uppercase hexadecimal XOR checksum values computed from the command text before the asterisk

## Configuration Notes

- Firmware and regional SKUs can alter available commands and parameters; verify the exact command set with GlobalSat documentation for your firmware.
- The GTR-388C1 public content demonstrates SMS based configuration but vendor tools or over-the-air methods may also be available depending on the deployment.
- When a device requires transport selection, TCP and UDP are both supported to reach Plaspy on port 8888; choose the transport that matches your network and firmware behavior.
- Always confirm the IMEI and APN values before sending SMS commands to avoid misconfiguration.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when the device connects.

## Why Use Plaspy with This Configuration

Configuring the GlobalSat GTR-388C1 to report to Plaspy gives operators compact, reliable real time visibility for small vehicles and two wheel fleets. The device’s backup battery, robust enclosure, and GNSS performance combine with Plaspy’s ingestion and mapping to provide continuous location, event reporting, and operational insight.

Learn more about how Plaspy supports device integrations and fleet workflows at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and configuration methods verify details on the GlobalSat official site https://www.globalsat.com.tw/ as manufacturer specifications and setup methods may change over time.
