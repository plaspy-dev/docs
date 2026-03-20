---
slug: /teltonika/fmb230/configuration
id: fmb230-configuration
sidebar_label: Configuration
title: Teltonika - FMB230 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMB230 showing Plaspy server settings and practical setup steps for visibility on the platform
keywords:
  - Teltonika FMB230 configuration
  - Teltonika FMB230 setup
  - FMB230 server configuration
  - FMB230 Plaspy setup
  - Teltonika GPS tracker configuration
  - GPS tracker Plaspy
  - vehicle tracking FMB230
  - FMB230 APN setup
  - Teltonika device configuration
  - Plaspy server settings
---

# Teltonika - FMB230 Configuration

This page covers the public configuration context for using the Teltonika FMB230 tracker with the Plaspy platform. It focuses on the practical server and transport values required to connect the device to Plaspy and explains the typical steps and checks that installers and administrators should perform before and after provisioning.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once data arrives. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this guide alongside the official Teltonika configuration methods and documentation.

## Configuration Overview

The goal of this configuration is to prepare the FMB230 to send position and device data to Plaspy using the shared Plaspy endpoint and port. Setup typically includes entering APN information if the device uses cellular data, pointing the tracker to Plaspy, selecting the transport, and validating that the device appears in the platform.

- Configure APN and network settings so the tracker has internet connectivity
- Set the Plaspy server endpoint and port so the FMB230 reports to Plaspy
- Choose UDP or TCP transport if the device requires explicit transport selection
- Apply or send the configuration using the manufacturer tool or SMS batch command
- Verify the tracker is visible and reporting correctly within Plaspy

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Note: Plaspy uses the same port for all supported devices and automatically selects the correct protocol handler based on incoming data.

## Typical Requirements Before Setup

- A powered FMB230 with necessary cabling or antenna connections in place
- A valid cellular SIM and active data plan with the correct APN settings for your mobile operator
- Access to the official Teltonika configuration method for the device (SMS commands, Teltonika Configurator, or other supported tools)
- The Plaspy server settings listed above (d.plaspy.com or 54.85.159.138 and port 8888)
- The ability to restart or reboot the device after applying configuration if required
- Access to Plaspy for validation so you can confirm the tracker is reporting

## How This Tracker Connects to Plaspy

The FMB230 is configured to send its telemetry to the shared Plaspy server endpoint and port. Once network connectivity and server parameters are set, Plaspy will receive the device's messages and automatically detect the protocol to process data and display the device in the platform.

- The tracker sends GPRS or SMS based parameter updates and telemetry depending on how it is configured
- Network APN and credentials allow the device to establish an internet connection to d.plaspy.com
- The device uses port 8888 as the destination for data sent to Plaspy
- You may select UDP or TCP as the transport on the device when required
- Plaspy accepts the connection and automatically detects the tracker protocol for proper parsing

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FMB230 (SMS, Teltonika Configurator, or other supported tools).
2. Enter the Plaspy server as d.plaspy.com or, where a direct IP is required, 54.85.159.138.
3. Set the destination port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport if the device requires explicit transport selection.
5. Provide APN and any required APN username and password values for the installed SIM.
6. Apply or save the configuration and restart the device if required by the device or firmware.
7. Validate that the device is reporting to Plaspy and that the platform is receiving and parsing messages correctly.

## Example Configuration Commands

The FMB230 can be configured with a batch parameter command. The public example below shows the common parameter string format used to set APN values, the Plaspy server, port, and a transport selection flag. Preserve the placeholders when you replace them with your operator APN settings.

- Batch parameter command (example):

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and fields above:
- [apn] = your mobile operator APN name
- [apnu] = APN username if required by your operator
- [apnp] = APN password if required by your operator
- 2004 sets the server address to d.plaspy.com
- 2005 sets the destination port to 8888
- 2006 is a transport or mode selector used by the device parameter set; refer to Teltonika parameter documentation for exact meanings of values such as 1

This command is commonly issued as an SMS batch command or entered via a Teltonika configuration tool that accepts raw parameter strings. If using SMS, send the line above to the device phone number after replacing placeholders. If using a manufacturer tool, paste the string in the appropriate parameter input and apply.

## Configuration Notes

- This page shows public configuration values; firmware versions and parameter numbering can vary. Always confirm parameter mappings with the Teltonika parameter list for your firmware.
- Choosing TCP versus UDP can affect delivery guarantees and network behavior. If unsure, test both transports with your network and Plaspy to determine which performs best in your environment.
- The provided setparam string contains placeholders for APN credentials. Replace these placeholders with the values from your mobile operator.
- Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol, so the server and port values should be consistent across supported devices.
- Manufacturer tools and SMS commands are commonly used for provisioning. Use the official Teltonika tools for bulk or GUI-driven configuration when available.

## Why Use Plaspy with This Configuration

Configuring the Teltonika FMB230 to report to Plaspy provides a straightforward way to centralize location, event, and device status data in a single fleet management platform. For teams that require visibility and operational monitoring, using the shared Plaspy endpoint simplifies onboarding because the same port and server values apply across supported trackers and Plaspy handles protocol detection automatically.

To learn more about Plaspy, visit https://www.plaspy.com. For the latest device specific parameter lists, firmware notes, and configuration tools, always verify details on the manufacturer website https://www.teltonika-gps.com/ as device behavior and setup methods can change with firmware and hardware revisions.
