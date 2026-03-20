---
slug: /xirgo/xt_4800/configuration
id: xt_4800-configuration
sidebar_label: Configuration
title: Xirgo - XT-4800 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT-4800 to connect to Plaspy with server settings SMS commands and setup steps
keywords:
  - Xirgo XT 4800 configuration
  - XT 4800 Plaspy setup
  - Xirgo tracker server configuration
  - XT 4800 GPS tracker setup
  - Plaspy server configuration guide
  - asset tracker XT 4800 setup
  - XT 4800 SMS configuration
  - vehicle tracker platform setup
  - energy harvesting tracker configuration
  - XT 4800 connectivity guide
---

# Xirgo - XT-4800 Configuration

This page covers the public configuration context for using the Xirgo XT-4800 tracker with the Plaspy platform. It consolidates the Plaspy server settings you must apply on the device, practical setup steps you may use during installation, and example SMS commands that are publicly available for this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The XT-4800 supports SMS and GPRS configuration methods and the example SMS commands below show a commonly used manufacturer command sequence for registering the device to Plaspy.

## Configuration Overview

The goal of this configuration is to prepare the XT-4800 so it reliably sends location and status data to the Plaspy platform. This includes setting the carrier APN (when required), pointing the device to the Plaspy server endpoint, selecting the transport type if needed, and validating connectivity in the Plaspy system.

- Configure the device APN and GPRS parameters so the tracker can access mobile data networks.
- Set the device GPRS server to Plaspy so telemetry is sent to the correct endpoint and port.
- Choose the appropriate transport (UDP or TCP) if the device configuration requires a manual selection.
- Save and apply settings then restart or reinitialize the device if required by the firmware.
- Verify the device appears and reports correctly in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint and the shared port used for all devices on the platform. Use either the domain or the IP as allowed by your device configuration method.

## Typical Requirements Before Setup

- A powered and accessible XT-4800 device with ability to receive SMS or be configured via the official manufacturer tool.
- An active SIM card with a data plan and a correct APN configured for GPRS data connectivity.
- SMS access to the device phone number when using SMS commands for configuration.
- Access to the manufacturer's configuration instructions or software for your device firmware version.
- A way to observe device status (LEDs, logs, or manufacturer reply SMS) to confirm configuration application.

## How This Tracker Connects to Plaspy

The XT-4800 is configured to report location and device state to the shared Plaspy server endpoint and port. Once the device is pointed to the Plaspy server and has working mobile data, Plaspy will automatically determine and handle the device protocol, so you do not need to pre-select a protocol-specific handler in the platform.

- The tracker initiates a GPRS connection using the configured APN and then connects to d.plaspy.com or 54.85.159.138.
- Data is transmitted to port 8888 on the Plaspy server using either UDP or TCP as configured on the device.
- After connecting, the device sends periodic location and status reports that Plaspy ingests and parses.
- Plaspy detects the tracker protocol automatically so device messages are interpreted without additional platform configuration.
- Platform visibility and event reporting depend on correct server, port, and network settings on the device.

## Common Configuration Workflow

1. Access the official Xirgo configuration method for your XT-4800 model and firmware version (manufacturer app, SMS interface, or configuration tool).
2. Enter the Plaspy server using either d.plaspy.com or the IP 54.85.159.138 as supported by the device interface.
3. Set the server port to 8888 as required by Plaspy.
4. Choose the transport type UDP or TCP if the device requires a manual transport selection.
5. Configure the device APN and credentials if needed so the tracker can establish a GPRS data session.
6. Apply or save the configuration and restart the device if the manufacturer instructions specify a reboot or reinitialization.
7. Validate that the XT-4800 is reporting to Plaspy by confirming the device appears and reports in the platform.

## Example Configuration Commands

The XT-4800 can be configured using SMS messages. The public SMS commands below are provided in the manufacturer example format. Send these SMS texts to the device phone number in the order shown.

- Set the operator APN (replace placeholders as needed):
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explanation of placeholders:
- {{apn}} is the APN name provided by your mobile operator.
- {{apnu}} is the APN username when required by the carrier; use an empty value if not required.
- {{apnp}} is the APN password when required by the carrier; use an empty value if not required.

- Set the GPRS server to Plaspy (this configures port and server IP for the device):
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notes:
- This command sets the GPRS server parameters so the device points to Plaspy on port 8888 and IP 54.85.159.138. Remaining parameters are device specific and part of the public manufacturer command string.
- Maintain the command order when sending via SMS. If your firmware requires the domain instead of the IP, use the manufacturer tool to enter d.plaspy.com where supported.

If your device or firmware uses a different configuration interface (for example a web tool or USB utility), follow the equivalent steps above using the same server domain or IP and port 8888, and choose UDP or TCP transport as appropriate.

## Configuration Notes

- The XT-4800 supports SMS-based configuration as shown above; check the device reply SMS or logs to confirm commands were accepted.
- Firmware versions and regional device variants may accept slightly different SMS command formats or require different parameter orders. Always confirm the exact syntax for your firmware.
- When given a choice between UDP and TCP, choose the transport required by your deployment; Plaspy listens on both and will auto-detect the tracker protocol.
- Preserve APN placeholders when drafting SMS messages and replace them with operator-specific values before sending.
- If the manufacturer provides a configuration tool, that tool may present the same settings (server domain or IP and port 8888) in a GUI form rather than via SMS.

## Why Use Plaspy with This Configuration

Configuring the XT-4800 to report to Plaspy gives organizations a straightforward way to monitor remote assets where long battery life and environmental durability matter. Using the shared Plaspy server settings and the example SMS commands above helps establish reliable data flow from the tracker into the platform for location, health, and operational monitoring.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify current information on the Xirgo website https://xirgo.com/ which may provide updates or additional commands for your XT-4800.
