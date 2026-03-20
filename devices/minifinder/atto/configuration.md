---
slug: /minifinder/atto/configuration
id: atto-configuration
sidebar_label: Configuration
title: MiniFinder - ATTO Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring MiniFinder ATTO for use with Plaspy with server settings and practical setup steps
keywords:
  - MiniFinder ATTO configuration
  - MiniFinder ATTO setup
  - ATTO server configuration
  - ATTO tracking setup for Plaspy
  - MiniFinder GPS tracker configuration
  - pet tracker Plaspy compatibility
  - ATTO SMS configuration commands
  - ATTO GPRS server settings
  - GPS platform integration Plaspy
  - MiniFinder ATTO troubleshooting
---

# MiniFinder - ATTO Configuration

This page documents the public configuration context for using the MiniFinder ATTO tracker with the Plaspy platform. It explains the practical, manufacturer side steps you will commonly use to point the ATTO at Plaspy for live tracking and monitoring. Where available, example SMS commands and the required server settings are included to help prepare the device for registration and visibility in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while specific manufacturer configuration steps can vary by firmware, hardware revision, installation type, or vendor tool. The instructions below center on the public Plaspy settings and the typical workflow to apply them to an ATTO device; always verify device specific details with the official MiniFinder documentation when needed.

## Configuration Overview

The goal of configuration is to prepare the ATTO so it can send position and event data to Plaspy reliably. That typically means supplying correct network settings on the device, verifying mobile connectivity, and confirming the device appears in the platform.

- Point the ATTO to the shared Plaspy server endpoint so data is delivered to the correct platform.
- Configure the device APN and any SMS or GPRS parameters required by your mobile provider.
- Apply the server address and port so the tracker reports to Plaspy on the same port used by all devices.
- Validate connectivity and confirm the device is visible in Plaspy after configuration.
- Use available SMS commands or manufacturer tools to set parameters when supported by the device firmware.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and operational MiniFinder ATTO device with SIM card installed if using cellular connectivity.
- An active mobile subscription that supports data or GPRS and SMS for configuration if required.
- Access to the official MiniFinder configuration method for the ATTO such as SMS commands or vendor tools.
- The APN information for the SIM operator to configure data access on the tracker.
- The Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) ready to enter into the device.
- A means to receive or view the device after configuration to confirm reporting in Plaspy.

## How This Tracker Connects to Plaspy

When configured, the ATTO is set to send location and device events to the shared Plaspy server endpoint and port so the data becomes available in the platform for monitoring and alerts.

- The tracker is configured with the Plaspy server address d.plaspy.com or the server IP 54.85.159.138.
- Data is sent to port 8888, and the device may be configured to use UDP or TCP transport on that port.
- Plaspy automatically detects the incoming tracker protocol so the server can accept connections from multiple tracker models on the same port.
- Once online, the device transmits position updates and status events to Plaspy so vehicles or animals appear on the map and in reports.
- Validation of successful connection is done by confirming the tracker reports to Plaspy and appears in the platform interface.

## Common Configuration Workflow

1. Access the official MiniFinder ATTO configuration method or software provided by the manufacturer, typically SMS commands or vendor configuration tools.
2. Enter the Plaspy server endpoint by using either the domain name d.plaspy.com or the server IP 54.85.159.138 in the device settings.
3. Set the server port to 8888 on the ATTO.
4. If the device requires choosing a transport, select UDP or TCP as appropriate for your setup.
5. Configure the device APN and any required SMS parameters so the tracker has mobile connectivity.
6. Apply or save the configuration and send any required SMS commands to commit the settings.
7. Restart the device if required by the firmware or manufacturer instructions.
8. Validate that the device reports to Plaspy by checking device activity in the platform and confirming position updates.

## Example Configuration Commands

To set the ATTO using SMS commands, send messages to the device number. The commands below are provided in the order shown by public MiniFinder ATTO guidance.

- Set the time zone to UTC 0
```
tz+00
```

- Set the operator APN. Replace the placeholders with your operator values. [apn] is the access point name. If required, include [apnu] for APN username and [apnp] for APN password.
```
S1,[apn],[apnu],[apnp]
```
Note: If your APN does not require username or password, send only S1,[apn].

- Set the GPRS server to the Plaspy server IP and port
```
IP1,54.85.159.138,8888
```

These commands are public examples for SMS based setup. Send each command as a separate SMS to the tracker unless the manufacturer documentation specifies batch commands. The IP1 command points the device to the Plaspy server IP and port 8888. You may alternatively use d.plaspy.com in the device UI if the ATTO supports a hostname field rather than direct IP.

## Configuration Notes

- The exact command syntax and available parameters can vary by firmware version and hardware revision; always confirm with MiniFinder documentation for your device firmware.
- The ATTO supports SMS based configuration as shown above; some vendors also provide desktop or mobile tools that can perform the same configuration steps.
- Choose UDP or TCP according to your local network conditions and the instructions from the device firmware; Plaspy accepts either on port 8888 and will auto detect the protocol.
- Preserve APN placeholders [apn], [apnu], and [apnp] when preparing SMS commands and replace them with operator specific values.
- After applying settings, a device restart may be required for changes to take effect.

## Why Use Plaspy with This Configuration

Configuring the MiniFinder ATTO to report to Plaspy gives organizations and pet owners a single, consistent endpoint for live visibility, event monitoring, and operational oversight. Using the shared Plaspy server settings simplifies bulk provisioning because all supported devices use the same port and the platform automatically detects tracker protocols, reducing per-device configuration complexity.

To learn more about Plaspy and how the platform supports devices like the MiniFinder ATTO, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer guidance refer to the official MiniFinder site https://minifinder.se/ as device behavior and configuration methods can change over time.
