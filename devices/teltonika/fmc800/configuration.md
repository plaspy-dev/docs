---
slug: /teltonika/fmc800/configuration
id: fmc800-configuration
sidebar_label: Configuration
title: Teltonika - FMC800 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Teltonika FMC800 to connect with Plaspy using shared server settings and an example command
keywords:
  - Teltonika FMC800 configuration
  - Teltonika FMC800 setup
  - FMC800 Plaspy configuration
  - FMC800 server settings
  - FMC800 GPS tracker setup
  - Teltonika tracker configuration
  - vehicle tracking FMC800
  - fleet tracking Teltonika FMC800
  - Plaspy tracker configuration
  - Teltonika OBD tracker setup
---

# Teltonika - FMC800 Configuration

This page describes the public configuration context for using the Teltonika FMC800 tracker with Plaspy. It focuses on the shared Plaspy server settings, practical setup steps, and the example commands that are commonly used to point the device to Plaspy. The FMC800 is a compact OBD plug and play tracker with LTE Cat 1 connectivity, crash trace and accelerometer features, and Bluetooth LE support for external sensors. This page uses those public device characteristics to explain how to prepare the tracker for Plaspy integration.

Plaspy uses a single set of server settings across supported devices and automatically detects the tracker protocol when devices connect. Exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools. Use this guide for practical public setup guidance and refer to the official Teltonika documentation or device tools for device-specific procedures.

## Configuration Overview

The goal of configuration is to prepare the FMC800 so it reliably communicates with Plaspy, enabling real time visibility and reporting into your fleet platform. This typically means configuring the device APN and network transport, pointing the device to the Plaspy server endpoint, and validating that the tracker appears in the Plaspy system.

- Configure APN and network parameters so the FMC800 can reach the internet
- Set the device server host to Plaspy and configure the shared port used by Plaspy
- Choose the transport method required by your installation if the device requires it
- Save and apply settings, then verify the device is reporting to Plaspy
- Use the example setparam command shown below as a public starting point for many FMC800 setups

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the FMC800. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when devices connect

## Typical Requirements Before Setup

- A powered FMC800 installed according to the device installation guidance, for example plugged into the vehicle OBD II port if used that way
- A SIM card with an active data plan and properly configured APN settings for your mobile operator
- Access to the official Teltonika configuration method or software for the FMC800 (SMS, Teltonika Configurator, or vendor provisioning tool)
- The APN, APN username, and APN password values for your mobile operator, preserved as placeholders until you insert real values
- Confirmation of device firmware version and any vendor provisioning requirements that affect configuration
- Basic ability to send SMS or use the manufacturer software if remote configuration is required

## How This Tracker Connects to Plaspy

When configured for Plaspy, the FMC800 is set to report its location and event data to Plaspy's shared server endpoint and port. Plaspy receives the incoming connection on the configured port and detects the device protocol automatically to parse and display data in the platform.

- The tracker initiates a connection to d.plaspy.com or 54.85.159.138 on port 8888
- Choose UDP or TCP transport on the device if the device requires a transport selection
- The device sends periodic location updates and event reports to the Plaspy server
- Plaspy automatically detects and interprets the tracker protocol when data arrives
- Successful configuration results in the device appearing and reporting in Plaspy for monitoring and alerts

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FMC800 (for example SMS commands, Teltonika tools, or vendor provisioning).
2. Enter d.plaspy.com or 54.85.159.138 as the server host in the device settings.
3. Set the device port to 8888. Plaspy uses the same port across supported devices.
4. Choose UDP or TCP transport if the FMC800 requires a transport selection.
5. Provide APN, APN username, and APN password placeholders where required and save the values.
6. Apply or save the configuration and restart the device if the method requires a reboot.
7. Validate that the device reports to Plaspy and appears online in the platform.

## Example Configuration Commands

The FMC800 public configuration can be applied using a parameter batch command. The following example is a common public command format that sets APN values and points the device to Plaspy. Preserve the placeholders and replace them with your operator values.

- Example batch parameter command (SMS or provisioning tool):

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and fields:
  - [apn] : Replace with your mobile operator APN
  - [apnu] : Replace with APN username if required by the operator, otherwise leave empty
  - [apnp] : Replace with APN password if required by the operator, otherwise leave empty
  - 2004 is set to d.plaspy.com which configures the server domain for Plaspy
  - 2005 is set to 8888 which is the shared Plaspy port
  - 2006:1 is commonly used to indicate the transport or activation flag depending on firmware; confirm with manufacturer docs

If your provisioning method uses the server IP instead of domain, enter 54.85.159.138 in place of d.plaspy.com. If your device or tool requires explicit transport selection, choose UDP or TCP to match your environment.

## Configuration Notes

- Firmware differences may change parameter IDs, command syntax, or required flags. Confirm parameter IDs with the FMC800 firmware documentation before mass deployment.
- The device can be configured by SMS or by Teltonika configuration tools; use the method supported by your vendor or installer.
- Choose UDP or TCP based on your installation requirements; Plaspy supports both transports on port 8888 and will detect the protocol automatically.
- Preserve the APN placeholders and replace them with operator values when provisioning.
- Always validate the device reports to the Plaspy server after applying settings and restarting if necessary.

## Why Use Plaspy with This Configuration

Using the Teltonika FMC800 with Plaspy provides a straightforward way to bring vehicle location, crash trace indicators, and event reporting into a single fleet management platform. The FMC800's OBD form factor, cellular connectivity, and sensor features combine with Plaspy's shared server configuration and automatic protocol detection to simplify deployment and monitoring across a fleet.

To learn more about Plaspy and how to manage device integrations visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify information on the official Teltonika website https://www.teltonika-gps.com/
