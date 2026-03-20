---
slug: /teltonika/fmb002/configuration
id: fmb002-configuration
sidebar_label: Configuration
title: Teltonika - FMB002 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMB002 to connect with Plaspy using shared server settings and common setup steps
keywords:
  - Teltonika FMB002 configuration
  - Teltonika FMB002 setup
  - FMB002 server configuration
  - FMB002 Plaspy setup
  - Teltonika OBDII tracker
  - vehicle tracking FMB002
  - fleet management tracker
  - FMB002 GPS platform setup
  - Teltonika FMB002 commands
  - Plaspy tracker configuration
---

# Teltonika - FMB002 Configuration

This page documents the public configuration context for using the Teltonika FMB002 with Plaspy. It covers the practical server and command-level information that you will typically apply on the device or via maker tools so the FMB002 can report to Plaspy. Use this guide as a platform-focused reference while following Teltonika's official resources for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary with firmware, hardware revision, installation type, and the configuration tool you use (SMS, Teltonika Configurator, Bluetooth, or GPRS). This page explains the common public settings, a sample command used with Teltonika devices, and the typical workflow to get visibility in Plaspy.

## Configuration Overview

This configuration prepares the FMB002 to send vehicle and OBDII data to Plaspy using Plaspy's public server endpoint and port. The goal is to set network parameters, point the device to the Plaspy endpoint, select transport if required, and verify the device is reporting successfully.

- Set the device APN and server connection details so the tracker can establish GPRS connectivity to Plaspy.
- Point the device to the Plaspy server domain or IP and set the platform port so data reaches the platform.
- Choose the transport method (UDP or TCP) if the device requires a selection, and save the configuration.
- Validate connectivity and confirm the device appears in Plaspy and transmits expected OBDII and GNSS data.
- Use Teltonika configuration tools or SMS commands as supported by the device and your installation workflow.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported; configure the device with the transport it requires  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

You can enter either the domain d.plaspy.com or the IP 54.85.159.138 in the device configuration depending on the Teltonika tool or firmware behavior.

## Typical Requirements Before Setup

- A powered and accessible FMB002 installed or connected for configuration.
- A working SIM card and mobile data access configured for GPRS where required by the device.
- Access to the Teltonika configuration method you prefer (SMS commands, Teltonika Configurator via USB or Bluetooth, or the FMBT mobile app).
- Knowledge of the carrier APN and any APN credentials required for the SIM (placeholders are shown in example commands).
- Basic familiarity with saving and restarting device settings after changes.
- Confirmation that the device firmware supports the configuration method you intend to use.

## How This Tracker Connects to Plaspy

When the FMB002 is configured with Plaspy settings it will establish a GPRS connection and send location, OBDII, and event data to Plaspy's shared server endpoint and port. Plaspy receives the connection on the common port and automatically detects the tracker protocol so devices appear and report without per-device port changes.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com (or 54.85.159.138).
- Data is sent over the configured transport (UDP or TCP) to port 8888 used by Plaspy for all devices.
- Plaspy detects the protocol automatically and decodes incoming tracker messages.
- Sent data typically includes GNSS positions and OBDII parameters available from the FMB002.
- Events and telemetry become visible in Plaspy for vehicle monitoring and fleet workflows.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software you prefer (SMS, Teltonika Configurator over USB or Bluetooth, FMBT app, or GPRS commands).
2. Enter the Plaspy server endpoint using d.plaspy.com or the IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if your device requires a transport selection during setup.
5. Apply or save the configuration in the Teltonika tool or send the equivalent SMS/GPRS command.
6. Restart or power cycle the device if the tool or firmware requires a restart to apply changes.
7. Validate that the device reports to Plaspy and appears in the platform, confirming GNSS and basic OBDII messages are received.

If you use the Teltonika SMS or GPRS command flow, include APN values and the Plaspy server and port exactly as shown in the example commands below.

## Example Configuration Commands

The FMB002 supports SMS or GPRS command configuration. The public example below sets APN values and points the device to Plaspy. Preserve the placeholders and replace them with your carrier values:

- {{apn}} is the carrier APN
- {{apnu}} is the APN username if required
- {{apnp}} is the APN password if required

Sample Teltonika setparam command (public example):

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command above:
- The command sets APN parameters and assigns the server domain d.plaspy.com and port 8888 for Plaspy.
- Replace {{apn}}, {{apnu}}, and {{apnp}} with your carrier APN settings.
- Use the Teltonika configuration channel you prefer (SMS, GPRS, or Teltonika Configurator) to send this command.
- Parameter numbering and exact syntax may vary between firmware versions, so verify command IDs in Teltonika documentation for your firmware.

## Configuration Notes

- Transport choice (UDP versus TCP) can affect delivery characteristics; choose the one supported and recommended for your deployment and verify with Teltonika documentation.
- Firmware versions and hardware revisions can change parameter IDs and supported command syntax; always confirm with the official Teltonika configuration reference for your firmware.
- The device supports multiple configuration channels (SMS, GPRS, Bluetooth, Configurator); use the method that fits your operational constraints.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so you do not need to allocate unique ports per device.
- If configuration does not apply immediately, try saving and restarting the tracker or power cycling it, then recheck connectivity to Plaspy.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB002 with Plaspy provides a straightforward path to get compact OBDII and GNSS tracking data into a centralized platform. The FMB002's OBDII and GNSS capabilities make it suitable for light commercial fleets, driver logbook workflows, and telematics use cases where vehicle and engine data are valuable. Pointing the device to Plaspy's shared server and using the consistent port simplifies large-scale deployments and onboarding.

Learn more about Plaspy and how devices connect at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and parameter references, verify details on the manufacturer site https://www.teltonika-gps.com/ since setup steps and command IDs can change over time.
