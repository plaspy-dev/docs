---
slug: /queclink/gl52lp/configuration
id: gl52lp-configuration
sidebar_label: Configuration
title: QuecLink - GL52LP Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GL52LP asset tracker with Plaspy including server settings SMS commands and setup workflow
keywords:
  - QuecLink GL52LP configuration
  - QuecLink GL52LP setup
  - GL52LP Plaspy configuration
  - QuecLink asset tracker configuration
  - GL52LP LoRa configuration
  - QuecLink GPS tracker setup
  - GL52LP server configuration
  - QuecLink tracking software configuration
  - QuecLink GL52LP integration
  - GL52LP platform setup
---

# QuecLink - GL52LP Configuration

This page describes the public configuration context for using the QuecLink GL52LP with Plaspy. It focuses on the server settings and practical setup steps that make the tracker report to Plaspy, and it includes sample SMS commands provided in public QuecLink configuration examples where applicable.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor tool, so treat the commands below as public examples to adapt to your specific firmware and deployment.

## Configuration Overview

The goal of this configuration is to prepare the GL52LP so it can send tracking reports to Plaspy and be visible in the platform. Where public commands are available, they are supplied as examples for a typical SMS based configuration flow. Use manufacturer tools and documentation to confirm commands for your firmware.

- Configure the device to report to Plaspy server endpoint and port so reports are routed into the platform.
- Verify connectivity and APN settings if GPRS configuration or SMS provisioning is used.
- Set reporting intervals appropriate for the asset tracking use case to balance battery life and visibility.
- Validate that the device appears in Plaspy and that events and location updates are received.
- Keep a record of device password and applied settings for future maintenance or troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so a single port configuration is used across devices

## Typical Requirements Before Setup

- Ensure the tracker has adequate power or battery charge for configuration and initial reporting.
- Have access to the manufacturer configuration method accepted by the device, for example SMS provisioning or the QuecLink configuration tool.
- A working SIM card and APN credentials if you will configure GPRS or server settings via mobile network commands.
- The device password or provisioning password required to accept remote configuration commands (sample commands below use the public default shown in the example).
- Basic knowledge of the device firmware version and region settings so commands match your hardware revision.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the device is set to send its location and event data to the shared Plaspy endpoint and port. Plaspy then receives and processes the messages, mapping the device to the customer account in the platform.

- The tracker is configured to report to the Plaspy server d.plaspy.com or directly to IP 54.85.159.138.
- Messages are sent to port 8888 which Plaspy uses for all supported devices.
- Transport can be UDP or TCP depending on the device requirement and selected option during configuration.
- Plaspy automatically detects the incoming tracker protocol so explicit protocol selection on the platform side is not required.
- Once reporting is active, Plaspy receives periodic location updates and event notifications for monitoring and analysis.

## Common Configuration Workflow

1. Access the official QuecLink configuration method supported by your device, for example SMS provisioning or the manufacturer configuration tool.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 in the server field.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. Choose transport type UDP or TCP if the device requires you to select the transport protocol.
5. Apply or save the configuration on the device using the manufacturer procedure or by sending the provisioning commands.
6. Restart the device if the firmware requires a reboot to apply network or server changes.
7. Validate that the device reports to Plaspy by checking that updates arrive in the platform and that the device is visible and reporting events.

## Example Configuration Commands

The following public SMS commands are provided in QuecLink example configuration content. They use the device password queclink in the examples and include placeholders for APN values where needed. Preserve placeholders and replace them with your network values.

1. Optional initial factory restore command labeled as initial setup when appropriate
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] placeholder is the APN name provided by your mobile operator.
- [apnu] is the APN username placeholder when required.
- [apnp] is the APN password placeholder when required.

4. Set the GPRS server to report to Plaspy using domain and IP with port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note: These commands are public examples and are often sent as SMS messages to the device. Replace placeholders like [apn] / [apnu] / [apnp] with your operator values. The sample password queclink is shown in the public example; confirm the correct password for your device and change default passwords as appropriate.

## Configuration Notes

- The provided SMS commands are public examples; actual command syntax can vary by firmware version and regional firmware builds.
- SMS based provisioning is one supported method shown in the example. Use the manufacturer configuration tool if SMS is not available for your hardware revision.
- When a device requires a transport choice, test both UDP and TCP to confirm which provides stable delivery for your deployment.
- Keep a record of applied settings and change default passwords where supported to maintain operational security.
- Verify APN and mobile operator settings before sending GPRS server commands; incorrect APN values will prevent server connection.

## Why Use Plaspy with This Configuration

Using the QuecLink GL52LP with Plaspy provides a straightforward path to centralized visibility for asset monitoring. Configuring the device to report to Plaspy lets organizations receive periodic location updates and event notifications into a single platform, simplifying tracking, alerts, and operational reporting for assets across deployments.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration methods, firmware details, and official command reference consult the manufacturer at https://www.queclink.com/ to confirm current instructions and compatibility.
