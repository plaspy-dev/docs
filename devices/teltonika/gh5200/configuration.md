---
slug: /teltonika/gh5200/configuration
id: gh5200-configuration
sidebar_label: Configuration
title: Teltonika - GH5200 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for Teltonika GH5200 setup with Plaspy server settings and step by step configuration instructions
keywords:
  - Teltonika GH5200 configuration
  - Teltonika GH5200 setup
  - GH5200 Plaspy configuration
  - GH5200 server configuration
  - GH5200 GPS tracker setup
  - Plaspy tracker configuration
  - personal GPS tracker configuration
  - lone worker tracker setup
  - wearable GPS tracker configuration
  - Teltonika tracker Plaspy
---

# Teltonika - GH5200 Configuration

This page documents the public configuration context for using the Teltonika GH5200 with Plaspy. It explains the shared Plaspy server settings and the practical, manufacturer-facing steps needed to point a GH5200 tracker at Plaspy so that position, event, and safety telemetry become visible in the platform. The GH5200 is a compact wearable 2G personal GPS tracker designed for workforce safety and personal security and is compatible with Plaspy out of the box.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where the GH5200 provides a public command to set parameters, this page preserves that command and explains its placeholders; for any parameter meanings not present here, refer to the official Teltonika documentation.

## Configuration Overview

The primary goal of configuration is to prepare the GH5200 to communicate reliably with Plaspy so live location and safety events appear in your monitoring dashboard. Configuration typically sets the device APN and server endpoint, selects transport if required, and verifies reporting and event forwarding.

- Set APN and network credentials so the tracker has cellular data access.
- Point the tracker to the Plaspy server domain or IP and the shared port used by all Plaspy devices.
- Choose transport mode if the device requires a UDP or TCP selection.
- Save and apply settings, then confirm that the device is reporting to Plaspy.
- Validate that key safety events like button presses and incident detections appear in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (all devices in Plaspy use the same port)  
- Transport support for UDP or TCP on port 8888 depending on device requirements  
- Plaspy automatically detects the tracker protocol for supported devices

These settings are the public Plaspy endpoint values to use when configuring the GH5200 so the device can send position and event data to Plaspy.

## Typical Requirements Before Setup

- A charged GH5200 tracker with power applied and basic device readiness confirmed.  
- An active cellular SIM with a valid data plan and the correct APN credentials for your operator.  
- Access to the manufacturer configuration method for the GH5200 such as SMS based commands or the official Teltonika configuration tools and documentation.  
- A record of identifiers required by Plaspy for onboarding so the device can be associated with the correct account once reporting begins.  
- A test plan to validate reporting including a quiet environment to check initial connectivity and a method to observe incoming messages in Plaspy.

## How This Tracker Connects to Plaspy

The GH5200 is configured to report its location and event telemetry to the shared Plaspy server endpoint and port so Plaspy ingests and displays positions, timestamps, and safety events. Once the device is pointed at Plaspy, position updates and incident messages flow into the platform where they appear on maps and in alerting workflows.

- The tracker sends periodic location messages to d.plaspy.com or to 54.85.159.138 on port 8888.  
- Transport is set to UDP or TCP depending on the device configuration and network conditions.  
- Plaspy automatically detects the tracker protocol and parses incoming messages for display.  
- Event messages such as button presses, man down, and no movement are forwarded to Plaspy and logged as incidents.  
- Successful configuration enables real time visibility and historical reporting within the Plaspy dashboard.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the GH5200 as provided in the device documentation.  
2. Configure the device APN and any operator credentials you need to enable cellular data access.  
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.  
4. Set port 8888 which is the shared Plaspy port used for all supported devices.  
5. Choose UDP or TCP if the device requires selecting a transport mode.  
6. Apply or save the configuration in the device tool or by sending the device the appropriate command.  
7. Restart the device if the manufacturer documentation recommends it or if required to apply settings.  
8. Validate that the device reports to Plaspy and that position and event messages appear in your Plaspy account.

## Example Configuration Commands

The GH5200 supports a public parameter command that sets APN values and server parameters. The example below preserves placeholders for your network credentials. Send this command using the GH5200 configuration channel supported by your device such as SMS or the Teltonika configuration tool according to the manufacturer instructions.

- Example parameter command with APN placeholders

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Notes on placeholders and fields
  - {{apn}} is the cellular operator APN name.  
  - {{apnu}} is the APN username if your operator requires one.  
  - {{apnp}} is the APN password if your operator requires one.  
  - The command sets parameter 2004 to the Plaspy server domain d.plaspy.com and 2005 to port 8888.  
  - Parameter 2006 is a numeric option present in the example command; consult Teltonika documentation for what values correspond to UDP or TCP or other transport options on your firmware.

If your environment or firmware uses a different configuration method, follow the official Teltonika documentation for the exact command transport or GUI steps.

## Configuration Notes

- Firmware and hardware revisions can change parameter numbers, supported command formats, or transport option encodings. Confirm parameter mappings with current Teltonika documentation.  
- The GH5200 example command is commonly used via SMS or the manufacturer tool depending on the device setup method; use the supported channel for your installation.  
- Choose UDP or TCP based on your network and device tool requirements. Plaspy accepts both on port 8888 and will auto detect the protocol.  
- Verify APN credentials with your mobile operator before applying settings to avoid extended troubleshooting.  
- Because Plaspy uses the same port for all supported devices, use port 8888 when configuring the GH5200 to avoid routing issues.

## Why Use Plaspy with This Configuration

Using the GH5200 with Plaspy gives organizations a straightforward path to integrate wearable personal safety devices into a centralized monitoring workflow. The GH5200 supplies continuous position updates and safety events that Plaspy presents on maps, in incident logs, and in alerting channels so teams can respond faster and maintain oversight of lone workers and vulnerable personnel.

To learn more about Plaspy visit https://www.plaspy.com and for the latest device specific configuration details, firmware notes, and parameter definitions, verify information on the manufacturer site https://www.teltonika-gps.com/. Manufacturer configuration methods and firmware behavior can change over time so always cross reference the current Teltonika documentation when applying device parameters.
