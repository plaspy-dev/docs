---
slug: /teltonika/tat240/configuration
id: tat240-configuration
sidebar_label: Configuration
title: Teltonika - TAT240 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Teltonika TAT240 showing Plaspy server settings and practical setup steps for reliable tracking
keywords:
  - Teltonika TAT240 configuration
  - Teltonika TAT240 setup
  - TAT240 Plaspy configuration
  - Teltonika GPS tracker configuration
  - Plaspy server settings
  - TAT240 server configuration
  - asset tracker TAT240
  - vehicle tracker TAT240
  - TAT240 SMS configuration
  - GPS tracker platform setup
---

# Teltonika - TAT240 Configuration

This page provides public configuration context for using the Teltonika TAT240 with Plaspy. It summarizes the shared Plaspy server settings you must apply to the device and shows a practical SMS example that is commonly used to push basic parameters to Teltonika devices. Use this guide to prepare the tracker for communications with Plaspy and to validate basic connectivity before deploying at scale.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the Teltonika configuration tool or SMS commands you choose. The example command below shows one public method to set APN and server parameters; always verify commands against the device firmware and official Teltonika documentation.

## Configuration Overview

This configuration process prepares the TAT240 to send location and event data to Plaspy reliably. The goal is to apply Plaspy server settings, confirm cellular connectivity and APN parameters, and ensure the device is visible in the Plaspy platform.

- Configure the device to report to Plaspy using the shared Plaspy server endpoint and port.
- Set the device APN, optional APN credentials, and server address so data can flow over cellular.
- Choose the transport method (UDP or TCP) if required by the device and firmware.
- Apply the settings using Teltonika configuration tools or SMS commands and reboot the device if needed.
- Verify the device appears and reports correctly in Plaspy once configured.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either protocol on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices for consistent setup

## Typical Requirements Before Setup

- A charged and accessible TAT240 device with power applied so it can receive configuration commands
- An active cellular SIM card with data and the correct APN information for your mobile operator
- Access to Teltonika configuration tools or permission to send SMS configuration commands to the device
- Knowledge of the APN values for your SIM including placeholders such as [apn], [apnu], and [apnp]
- Ability to reboot or power-cycle the device if a restart is required after applying settings
- Access to Plaspy account or administrator to verify device connectivity in the platform

## How This Tracker Connects to Plaspy

When configured, the TAT240 sends position and event data from its cellular radio to the Plaspy server endpoint on the shared port. Plaspy receives incoming device connections, detects the protocol automatically, and maps incoming telemetry and events to the device record in the platform.

- The tracker is set to report to d.plaspy.com (or 54.85.159.138) on port 8888
- The device can use UDP or TCP transport to send packets to Plaspy on port 8888
- Plaspy automatically detects the device protocol and processes incoming messages for display and alerts
- Position updates, movement and tamper events become visible in Plaspy dashboards after successful connection
- Operational monitoring and event reporting occur once the device consistently uplinks to the Plaspy endpoint

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the TAT240 such as Teltonika Configurator, RMS, or SMS configuration depending on your environment.
2. Enter the Plaspy server address either as d.plaspy.com or the IP 54.85.159.138 in the server field of the configuration tool.
3. Set the port to 8888 which is the shared port Plaspy uses for all devices.
4. Choose UDP or TCP transport if the device requires an explicit transport selection during setup.
5. Configure APN settings and any carrier credentials using placeholders such as [apn], [apnu], and [apnp] if required.
6. Apply or save the configuration and restart or power-cycle the device if the device or firmware requires a reboot to activate new parameters.
7. Validate connectivity by confirming the device reports to Plaspy and appears in the platform with recent position and event data.

## Example Configuration Commands

The following example is a public Teltonika SMS style command that sets basic parameters including APN placeholders, the Plaspy server address, and the shared port. Preserve the placeholders and replace them with your carrier APN values before sending.

- Example SMS batch command to set APN and Plaspy server parameters

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command
- [apn] is the mobile operator APN string required for data connectivity.
- [apnu] is the APN username if your operator requires it; leave empty if not required.
- [apnp] is the APN password if your operator requires it; leave empty if not required.
- 2004 is set to d.plaspy.com which is the Plaspy server domain used for reporting.
- 2005 is set to 8888 which is the shared Plaspy port for all devices.
- 2006 commonly corresponds to a transport or connection mode parameter on Teltonika devices; confirm the exact mapping for your firmware in Teltonika documentation before changing this value.

If you use a configuration tool rather than SMS, apply the same server domain or IP and port values in the appropriate fields and save the configuration.

## Configuration Notes

- Teltonika firmware versions and parameter mappings can vary. Confirm parameter IDs and behavior for your specific TAT240 firmware before applying SMS commands.
- You may configure the device using SMS or Teltonika configuration tools. Choose the method that matches your deployment and verify successful application of settings.
- TCP versus UDP selection can affect packet handling and firewall rules. If the device requires a transport selection, choose the transport supported by your network and set it to match Plaspy on port 8888.
- Plaspy uses a single port for all supported devices and automatically detects the tracker protocol when devices connect, simplifying device provisioning.
- Always test one device first to validate APN, server, transport, and reporting behavior before large scale rollout.

## Why Use Plaspy with This Configuration

Using the Teltonika TAT240 with the shared Plaspy server settings provides a straightforward path to reliable asset tracking and event visibility. Configuring the device to report to d.plaspy.com or 54.85.159.138 on port 8888 enables position and tamper events to appear in Plaspy dashboards where you can set alerts, geofences, and reporting intervals to meet operational needs.

Learn more about Plaspy and how the platform supports tracker integrations at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and parameter definitions verify details on the official Teltonika website https://www.teltonika-gps.com/ before applying commands in production.
