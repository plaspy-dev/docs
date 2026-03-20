---
slug: /teltonika/ftc961/configuration
id: ftc961-configuration
sidebar_label: Configuration
title: Teltonika - FTC961 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Teltonika FTC961 to Plaspy with server settings and an example SMS command
keywords:
  - Teltonika FTC961 configuration
  - Teltonika FTC961 setup
  - Teltonika FTC961 server configuration
  - FTC961 Plaspy setup
  - FTC961 GPS tracker configuration
  - FTC961 tracking software configuration
  - Teltonika GPS tracker Plaspy
  - FTC961 fleet management setup
  - FTC961 telemetry configuration
  - Plaspy tracker configuration
---

# Teltonika - FTC961 Configuration

This page documents the public configuration context for using the Teltonika FTC961 with Plaspy. It explains the shared server settings Plaspy requires, shows an example configuration command that can be used to point an FTC961 to Plaspy, and provides a practical workflow to validate connectivity so devices become visible in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and the Teltonika configuration tools you use. The example command below demonstrates a common SMS-style parameter batch used to set APN and Plaspy server values; apply it according to your chosen Teltonika configuration method.

## Configuration Overview

This configuration prepares the FTC961 to report location and telematics data to Plaspy using the platform's shared server endpoint and port. The goal is to ensure the tracker can establish a stable connection to Plaspy and that the device appears correctly in the Plaspy interface.

- Point the device to the Plaspy server (domain or IP) and use the shared port that Plaspy expects.
- Configure mobile data APN credentials so the FTC961 has cellular connectivity.
- Choose the transport mode (UDP or TCP) if the device requires selection.
- Save and apply the configuration, then restart the device if required by firmware.
- Validate that the tracker reports to Plaspy and that positions and events appear in the platform.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: supports UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Device powered and accessible on the vehicle or asset with necessary wiring completed.
- Active SIM card with a data plan and correct APN credentials for the cellular network.
- Access to Teltonika configuration methods you intend to use such as SMS commands, Teltonika configuration software, or FOTA/FT platform tools.
- A way to receive device feedback after configuration (device logs, SMS replies, or platform reporting).
- Knowledge of the device firmware version and any vendor-specific parameter indexes used for server and APN settings.
- Network coverage where the device will be installed so the tracker can connect to Plaspy.

## How This Tracker Connects to Plaspy

The FTC961 is configured to report position and telematics to the shared Plaspy server endpoint and port so that Plaspy can ingest device telemetry and provide real-time monitoring and historical playback.

- The tracker sends GNSS position and event data to d.plaspy.com or 54.85.159.138 on port 8888.
- Use UDP or TCP as the transport depending on device firmware and network needs; Plaspy accepts either.
- Plaspy automatically detects the protocol and processes incoming messages from the device.
- Once reporting is active, Plaspy shows live location updates, event notifications, and device status in the platform.
- Validating connectivity confirms the device is visible and telemetry is accepted by Plaspy.

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer such as SMS configuration, Teltonika configuration software, or the FT platform.
2. Enter the server as d.plaspy.com or, if required, the server IP 54.85.159.138 in the device server field.
3. Set the destination port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Configure APN settings for the device SIM by providing APN, username, and password as needed.
6. Apply or save the configuration and restart the device if recommended by the firmware or tool.
7. Validate that the device reports to Plaspy by checking incoming data in the platform and confirming position updates.

## Example Configuration Commands

Below is the public batch parameter command commonly used on Teltonika devices to set APN and server parameters. This example preserves placeholders for your APN values and points the device to Plaspy.

- SMS or batch parameter command example

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and fields
- [apn] — APN string for your carrier (required for mobile data).
- [apnu] — APN username if your carrier requires authentication (leave empty if not needed).
- [apnp] — APN password if required by your carrier.
- 2004 sets the server address to d.plaspy.com for Plaspy.
- 2005 sets the port to 8888 used by Plaspy for all devices.
- 2006 is a transport control parameter in this example; consult Teltonika documentation for exact value mappings for TCP versus UDP on your firmware.

Send this command using the Teltonika SMS configuration method to the device number or apply the equivalent settings via Teltonika configuration tools or the FT platform. Always confirm the command syntax and parameter indexes for your firmware version.

## Configuration Notes

- Teltonika firmware versions and parameter indexes can change; confirm parameter numbers and acceptable values for your exact firmware before applying commands.
- Choose UDP or TCP based on network reliability and your infrastructure needs; Plaspy accepts both on port 8888 and will detect the protocol automatically.
- SMS-based configuration is a common option and is shown above, but you can also use Teltonika configuration software or FOTA WEB where available.
- If you use the server IP instead of the domain, use 54.85.159.138 as the destination address for Plaspy.
- Keep a record of the configuration you applied and verify connectivity in Plaspy to ensure device visibility and correct telemetry flow.

## Why Use Plaspy with This Configuration

Using the FTC961 with Plaspy lets fleet and asset managers centralize real-time location, event notifications, and device status reporting on a single platform. The shared Plaspy server settings and automatic protocol detection simplify device onboarding because the platform uses the same port and routing approach for all supported trackers.

To learn more about Plaspy and how it handles tracker integrations visit https://www.plaspy.com. For the latest Teltonika device parameter references, firmware notes, and configuration tools confirm details on the Teltonika official website https://www.teltonika-gps.com/ since manufacturer specifications and configuration methods may change over time.
