---
slug: /teltonika/fmb125/configuration
id: fmb125-configuration
sidebar_label: Configuration
title: Teltonika - FMB125 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Teltonika FMB125 setup with Plaspy including server settings commands and setup steps
keywords:
  - Teltonika FMB125 configuration
  - FMB125 setup Plaspy
  - Teltonika tracker configuration
  - FMB125 server configuration
  - Teltonika GPS tracker setup
  - FMB125 tracking software configuration
  - FMB125 GPS platform setup
  - Teltonika FMB125 instructions
  - FMB125 SMS configuration
  - Teltonika FMB125 integration
---

# Teltonika - FMB125 Configuration

This page provides public configuration guidance for using the Teltonika FMB125 tracker with Plaspy. It focuses on the practical server settings and common setup workflow required to route device telemetry and GNSS positions into Plaspy, and explains the public SMS command example provided for basic parameter configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform side. Exact manufacturer-side steps to apply these settings can vary by firmware version, hardware revision, installation type, and the Teltonika configuration tools you use such as SMS commands, Teltonika Configurator, or FOTA WEB.

## Configuration Overview

Preparing an FMB125 for Plaspy involves setting the device to report to Plaspy’s shared endpoint and validating connectivity so the device appears in the platform. The process is typically quick when you have the correct server address, port, and transport selected, and when APN and access details for the installed SIM are available.

- Configure the device to send data to Plaspy using the shared server endpoint and port.
- Provide or verify cellular connectivity parameters such as APN so the tracker can access the network.
- Choose UDP or TCP transport on the tracker when required by the configuration tool.
- Apply and save the settings on the device and reboot if the device or firmware requires it.
- Verify the tracker is reporting to Plaspy and visible in the platform using Plaspy’s automatic protocol detection.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy settings to use when configuring the FMB125 so that telemetry and GNSS updates are delivered to the platform.

## Typical Requirements Before Setup

- A powered and installed Teltonika FMB125 unit with the appropriate cabling and antenna.
- A working SIM card and cellular connectivity details including APN, username, and password where required.
- Access to a Teltonika configuration method such as SMS commands, Teltonika Configurator, or FOTA WEB.
- Basic knowledge of whether your environment prefers UDP or TCP transport.
- Access to Plaspy account or platform to confirm the device appears after configuration.
- Awareness of the device firmware version so you can follow the matching configuration procedure in Teltonika documentation.

## How This Tracker Connects to Plaspy

When configured, the FMB125 sends location and telemetry packets to Plaspy’s shared server endpoint and port. Plaspy inspects the incoming data, automatically determines the protocol, and ingests the device stream for mapping, alerts, and historical reporting.

- Device reports are directed to d.plaspy.com (or the IP 54.85.159.138) on port 8888.
- The tracker can use either UDP or TCP as the transport depending on the configured option.
- Plaspy automatically detects the tracker protocol so no protocol selection is required on the platform side.
- Once reporting, GNSS and telemetry become visible in Plaspy for live tracking, events, and diagnostics.
- The shared port approach means all Plaspy supported devices use port 8888 and are managed using the same ingestion endpoint.

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer, such as sending SMS commands, using Teltonika Configurator, or FOTA WEB.
2. Enter the server address d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 as Plaspy uses the same port for all devices.
4. Choose UDP or TCP transport on the device if the configuration interface requires a transport selection.
5. Provide APN and related cellular parameters so the device can connect to the mobile network.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy and appears in the platform; check for incoming telemetry and GNSS updates.

## Example Configuration Commands

Teltonika devices commonly support SMS configuration for basic parameters. The public example for setting APN values and Plaspy server parameters is shown below. Preserve the placeholders and replace them with your carrier APN credentials.

- Example SMS configuration command for basic parameters:
```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and fields:
  - [apn] — replace with the SIM card APN (access point name) required by your mobile operator.
  - [apnu] — replace with APN username if your operator requires one; leave blank if not used.
  - [apnp] — replace with APN password if required; leave blank if not used.
  - 2004:d.plaspy.com — sets the server domain to the Plaspy endpoint.
  - 2005:8888 — sets the server port to Plaspy’s port.
  - 2006:1 — example parameter commonly used to enable the server entry or assign priority depending on firmware; consult Teltonika documentation for exact meaning on your firmware.

Note: You can also perform equivalent configuration using Teltonika Configurator or FOTA WEB where fields will be presented in a GUI instead of a single SMS string.

## Configuration Notes

- Firmware and Configurator versions vary; parameter IDs and behaviors can differ between firmware releases. Confirm the parameter meaning in Teltonika documentation for your device firmware.
- Choose UDP or TCP according to your network needs; both are accepted by Plaspy but may differ in delivery behavior over cellular networks.
- The example SMS command uses placeholders for APN credentials; fill these with your carrier values before sending.
- Plaspy requires d.plaspy.com or 54.85.159.138 and port 8888 for ingestion. All devices in Plaspy use the same port and the platform will automatically detect protocol.
- If using SMS for configuration, ensure the device is reachable and that SMS configuration is enabled on your firmware and SIM.

## Why Use Plaspy with This Configuration

Configuring the FMB125 to report to Plaspy provides a straightforward path to real‑time vehicle location, telemetry, and event reporting in a single platform. For fleets that already use Teltonika hardware, this configuration lets operators combine GNSS tracking, impulse inputs, and serial sensor data into Plaspy for monitoring, geofencing, and historical analysis.

To learn more about Plaspy and how it works with Teltonika devices visit https://www.plaspy.com. For the latest device specific configuration steps, firmware notes, and parameter definitions consult Teltonika’s official documentation at https://www.teltonika-gps.com/ since manufacturer setup details and firmware behavior can change over time.
