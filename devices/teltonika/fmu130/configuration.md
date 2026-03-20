---
slug: /teltonika/fmu130/configuration
id: fmu130-configuration
sidebar_label: Configuration
title: Teltonika - FMU130 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Teltonika FMU130 for Plaspy with server settings, example SMS command, and step by step setup guidance
keywords:
  - Teltonika FMU130 configuration
  - Teltonika FMU130 setup
  - FMU130 Plaspy
  - FMU130 server configuration
  - FMU130 GPS tracker setup
  - Teltonika tracker configuration
  - fleet tracking FMU130
  - vehicle tracking FMU130
  - Teltonika SMS commands
  - Plaspy tracker configuration
---

# Teltonika - FMU130 Configuration

This page covers the public configuration context for using the Teltonika FMU130 tracker with Plaspy. It focuses on the shared Plaspy server settings, the basic steps to point the device at Plaspy, and the public commands that installers commonly use to register the device on the platform. Use this page as practical setup guidance; for device specific details refer to the manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by FMU130 firmware, hardware revision, installation type, and the configuration tool you use (for example Teltonika Configurator, SMS, or FOTA). The instructions below show the public Plaspy values and a common SMS command example provided in the device configuration content.

## Configuration Overview

The goal of configuration is to prepare the FMU130 to communicate reliably with Plaspy and to validate that location and event data reaches the platform. This involves supplying mobile data settings if required, directing the tracker to Plaspy's server endpoint, and confirming successful reporting.

- Configure the device APN and connectivity parameters so it can use the cellular network.
- Point the device to Plaspy server d.plaspy.com or the equivalent server IP to establish a connection.
- Set the device to use the shared Plaspy port so data is sent to the platform.
- Choose the transport (UDP or TCP) if the device requires a specific selection.
- Validate the tracker reports to Plaspy and appears in the platform once configured.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP supported on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects, and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and reachable FMU130 with battery or vehicle power connected and ready for configuration.
- Valid mobile data connectivity and correct APN settings for the SIM installed in the device.
- Access to the manufacturer configuration method you prefer (Teltonika Configurator via USB/Bluetooth, SMS commands, or FOTA tools).
- Basic device information such as IMEI so you can identify the tracker in Plaspy after it reports.
- A terminal for sending SMS or a PC running Teltonika configuration software, depending on the configuration method you choose.

## How This Tracker Connects to Plaspy

When configured, the FMU130 sends its GNSS and event data to the Plaspy server endpoint and port. Plaspy receives the incoming connection using the declared transport and automatically detects the tracker protocol so the device appears in the platform.

- The tracker is set to report to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138.
- Data is transmitted on port 8888 which is the same port used for all devices in Plaspy.
- The device can use UDP or TCP as the transport; Plaspy supports both transports.
- Once packets arrive, Plaspy detects the tracker protocol automatically and processes position and event messages.
- After configuration, verify that the device is visible and reporting in Plaspy to confirm end to end connectivity.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software (for example Teltonika Configurator, SMS command interface, or FOTA tools) to edit device parameters.  
2. In the server or destination settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.  
3. Set the destination port to 8888 (Plaspy uses the same port for all devices).  
4. Choose UDP or TCP if the device requires you to select a transport.  
5. Apply or save the configuration in the Teltonika tool or send the configuration SMS if using SMS based setup.  
6. Restart the device if required by the configuration method or firmware to apply changes.  
7. Validate that the device is reporting to Plaspy and appears in the platform; confirm location and event data are updating.

## Example Configuration Commands

The provided public configuration example for Teltonika devices uses a single SMS-style command that sets APN fields and the Plaspy server information. Preserve the placeholders when you replace them with your network details.

- Example SMS/GPRS batch command to set basic parameters:

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the placeholders in the command above:
- [apn] — your cellular network APN name (required for data connection).
- [apnu] — APN username if your operator requires one; otherwise leave empty.
- [apnp] — APN password if your operator requires one; otherwise leave empty.

Explanation and guidance:
- This command sets APN parameters followed by the Plaspy server domain (d.plaspy.com) and the Plaspy port (8888).
- The final parameter (2006) configures a transport or related flag in the device parameters; consult Teltonika documentation for numeric values and their meanings for your firmware version.
- Use Teltonika Configurator or SMS as permitted by your device firmware and provisioning process to send this command. If you use Teltonika tools, equivalent GUI fields are available instead of entering a raw SMS string.

## Configuration Notes

- Teltonika firmware versions and configuration interfaces can differ; always confirm parameter IDs and command syntax against the FMU130 manual for your firmware.
- The FMU130 supports SMS and GPRS configuration methods; choose the method appropriate for your installation and available tools.
- When selecting UDP versus TCP, consider network conditions and the behavior described in Teltonika documentation; Plaspy accepts both and will detect the protocol automatically.
- Keep APN credentials and network settings accurate to ensure the device can create a data connection before sending data to Plaspy.
- After applying configuration changes, a device restart may be required for some firmware versions to begin reporting.

## Why Use Plaspy with This Configuration

Using Plaspy with the Teltonika FMU130 gives organizations a straightforward path to centralize device reporting and gain operational visibility. The shared Plaspy server settings and automatic protocol detection simplify onboarding: once the FMU130 is pointed at d.plaspy.com or 54.85.159.138 on port 8888, Plaspy handles protocol identification and processing so you can focus on device deployment and monitoring.

Learn more about Plaspy and how it integrates with trackers like the FMU130 at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and parameter definitions always verify details on the manufacturer site https://www.teltonika-gps.com/
