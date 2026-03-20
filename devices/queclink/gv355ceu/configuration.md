---
slug: /queclink/gv355ceu/configuration
id: gv355ceu-configuration
sidebar_label: Configuration
title: QuecLink - GV355CEU Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV355CEU showing Plaspy compatibility and server setup for reliable fleet tracking
keywords:
  - QuecLink GV355CEU
  - GV355CEU configuration
  - QuecLink tracker setup
  - GV355CEU Plaspy
  - QuecLink GPS tracker configuration
  - fleet tracker configuration
  - tachograph DDD download
  - GV355CEU server settings
  - Plaspy server configuration
  - vehicle telemetry configuration
---

# QuecLink - GV355CEU Configuration

This page provides the public configuration context for using the QuecLink GV355CEU with Plaspy. It summarizes the practical server values, recommended workflow, and example SMS commands that are publicly available for preparing the device to communicate with Plaspy for real time tracking, telemetry and tachograph workflows.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The sample SMS commands below show one common manufacturer method for configuring the GV355CEU; always verify exact commands and behaviors against the device firmware and official QuecLink documentation.

## Configuration Overview

Configuring the GV355CEU for Plaspy means preparing the tracker to send its position, telemetry and event data to the Plaspy server endpoint and port, then validating that reports appear in the Plaspy platform. The process typically includes setting the device APN, server address, transport, reporting interval and any input or alarm behavior required for fleet workflows.

- Set the device network APN so the GV355CEU can use cellular data to reach Plaspy.
- Configure the GPRS server entry to point to Plaspy using the domain or IP and the shared port.
- Choose UDP or TCP transport on the device if required and ensure the device uses port 8888.
- Define reporting intervals and enable inputs such as SOS to ensure events are forwarded to Plaspy.
- Validate connectivity and that telemetry and position reports are visible in Plaspy after applying settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Plaspy uses the same port for all supported devices which is port 8888

## Typical Requirements Before Setup

- A powered GV355CEU installed or connected to a bench power supply so it can accept configuration SMS or software commands.
- An active SIM with data enabled and the correct operator APN for GPRS/LTE connectivity.
- Access to the QuecLink manufacturer configuration method such as SMS commands, mini USB configuration or official QuecLink tools for your firmware revision.
- Knowledge of the device password used in SMS configuration commands; the sample commands below use the default password queclink.
- A method to receive device status and confirm reports in Plaspy after configuration, such as access to the Plaspy account with device registration or a monitoring workflow.

## How This Tracker Connects to Plaspy

When configured, the GV355CEU is pointed at the Plaspy endpoint and uses cellular data to transmit position and telemetry to the shared Plaspy server and port. Plaspy ingests device messages, maps the device protocol automatically, and makes device data available for live tracking, historical playback, and report generation.

- The tracker reports GNSS positions and vehicle telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the device protocol so the same server and port configuration works across supported devices.
- Events and alarms (for example SOS, ignition, or input triggers) are forwarded to Plaspy as configured on the device.
- Regular position and status reports allow visibility in Plaspy dashboards and support downstream reports and alerts.
- Setting the correct APN and transport ensures reliable connectivity to the Plaspy server endpoint.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GV355CEU, such as SMS commands, mini USB or the manufacturer configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888. Note that Plaspy uses the same port for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure the APN and any operator credentials required for the SIM to use cellular data.
6. Apply or save the configuration and restart the device if the device or tool requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking for incoming position and telemetry messages in the Plaspy platform.

## Example Configuration Commands

The GV355CEU can be configured by sending SMS commands to the device. The following example commands were provided as a public sample. These commands use the device password queclink which is the default in this sample. Send each line as a separate SMS to the device SIM number, and preserve the placeholders where shown.

1. Optional initial factory restore
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restores factory settings. Use only when required or during initial provisioning as appropriate.

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Configures the device time zone entry shown in this example as UTC 0.

3. Set the operator APN
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- Replace the placeholders {{apn}}, {{apnu}}, and {{apnp}} with your operator APN, APN username, and APN password as required by the SIM operator. If no username or password is needed, leave the placeholders empty according to the manufacturer syntax.

4. Set the GPRS server to Plaspy
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Configures the device GPRS server entries to the Plaspy domain d.plaspy.com and IP 54.85.159.138 using port 8888. This sample includes both domain and IP as provided in the public example.

5. Set the update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Adjusts the reporting interval configuration so the device sends regular position updates. The example sets reporting to 60 seconds.

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Enables SOS button notifications associated with input 2 in this sample.

Notes on placeholders and password
- The example commands use the password queclink as the command prefix. Confirm and use the device password configured on your hardware.
- {{apn}}, {{apnu}}, {{apnp}} are placeholders for the cellular operator APN, APN username and APN password respectively. Replace them with the correct values for your SIM.

## Configuration Notes

- SMS based configuration is supported in this public example; manufacturer tools such as mini USB configuration or configuration software may also be available for different firmware.
- Firmware revisions and local market SKUs can change the exact SMS command syntax or available parameters; confirm the command set with QuecLink documentation for your firmware.
- Choosing UDP or TCP can depend on network conditions and installer preference; Plaspy accepts either transport on port 8888 and will detect protocol automatically.
- Use the device password consistently when sending SMS commands and change default credentials according to your security policy where supported.
- If you perform a factory restore as part of provisioning, remember to reapply APN and server settings afterward.

## Why Use Plaspy with This Configuration

Integrating the QuecLink GV355CEU with Plaspy gives fleets consolidated location, telemetry and tachograph workflows in a single platform. With the shared Plaspy server settings and automatic protocol detection, the GV355CEU can be pointed to the Plaspy endpoint to deliver continuous position updates, event notifications and remote tachograph DDD retrieval into Plaspy reports and alerting.

Learn more about Plaspy and how it supports fleet tracking and telematics at https://www.plaspy.com. For the most current device specific configuration methods, firmware behaviors and command syntax consult the official QuecLink documentation at https://www.queclink.com/ to verify the latest instructions.
