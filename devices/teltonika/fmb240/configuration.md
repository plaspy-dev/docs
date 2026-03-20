---
slug: /teltonika/fmb240/configuration
id: fmb240-configuration
sidebar_label: Configuration
title: Teltonika - FMB240 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Teltonika FMB240 with Plaspy including server settings and example commands
keywords:
  - Teltonika FMB240 configuration
  - FMB240 setup Plaspy
  - Teltonika GPS tracker configuration
  - FMB240 server configuration
  - FMB240 tracking software setup
  - Teltonika fleet tracker configuration
  - FMB240 CAN telemetry integration
  - Plaspy compatible tracker setup
  - FMB240 Bluetooth sensor setup
  - Teltonika device configuration guide
---

# Teltonika - FMB240 Configuration

This page covers the public configuration context for using the Teltonika FMB240 tracker with Plaspy. It summarizes the practical server settings, typical preparation steps, and an example command that is commonly used to point an FMB240 to Plaspy. The FMB240 is a compact IP67 rated device with CAN bus reading and Bluetooth LE support, and this guide explains how to prepare it for Plaspy integration using public configuration details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where available we include the common SMS style device command used to set server parameters and preserve placeholders such as {{apn}} so you can substitute carrier values as needed.

## Configuration Overview

Applying the configuration prepares the FMB240 to send location and CAN derived telemetry to Plaspy for real time tracking and reporting. The goal is to configure the device to use Plaspy's shared server endpoint and port, validate connectivity on the cellular network present in the installation, and confirm the device appears in the Plaspy platform.

- Configure the device to report to the shared Plaspy server endpoint and port so Plaspy can receive telemetry
- Ensure the device has cellular connectivity and correct APN values for data or SMS based configuration
- Validate that the tracker reports GPS position and CAN sensor data to Plaspy for visibility and history playback
- Use the provided public command example to set server domain and port while preserving APN placeholders
- Remember that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A powered and operational FMB240 installed or accessible for configuration
- A working SIM card with a data plan and correct APN details for the mobile operator
- Access to the official Teltonika configuration method such as SMS commands or the manufacturer configuration tool
- Knowledge of required APN values for your cellular provider to populate placeholders such as {{apn}} {{apnu}} and {{apnp}}
- A test area with cellular coverage for the device bands supported by the tracker
- Administrative access to Plaspy to confirm the device appears after configuration

## How This Tracker Connects to Plaspy

The FMB240 is configured to report the device GPS location and available CAN and sensor telemetry to the shared Plaspy server endpoint and port so the Plaspy platform can ingest and normalize the data. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol to route messages into the correct protocol handler.

- The tracker sends periodic position and telemetry packets to d.plaspy.com on port 8888
- CAN bus derived signals and Bluetooth sensor readings are transmitted along with location data when available
- Plaspy receives the incoming stream and normalizes protocol messages for dashboard display and reporting
- Event or alarm messages are forwarded to Plaspy where rules and alerts can be applied
- The tracker may use either UDP or TCP transport depending on configuration and network conditions

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software as provided by the manufacturer or installer
2. Enter the Plaspy server address using either d.plaspy.com or the server IP 54.85.159.138
3. Set the device port to 8888 which is the single port Plaspy uses for all devices
4. Choose the transport mode UDP or TCP if the device requires a transport selection
5. Apply or save the configuration on the device using the manufacturer tool or an SMS command
6. Restart the device if required by the configuration method or the device firmware
7. Validate that the device reports to Plaspy and appears in the platform with expected telemetry

## Example Configuration Commands

The following public example command is commonly used to set basic parameters on Teltonika devices. It preserves placeholders for APN settings which you must replace with your carrier values. This command configures server domain and port to point to Plaspy and includes the transport flag parameter used by Teltonika setparam syntax.

- Example SMS style parameter command

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and parameters
- {{apn}} is the mobile data Access Point Name for your cellular operator
- {{apnu}} is the APN username if required by the operator
- {{apnp}} is the APN password if required by the operator
- 2004 sets the server domain to d.plaspy.com which is Plaspy's public server domain
- 2005 sets the server port to 8888 which Plaspy uses for all supported devices
- 2006 is a transport selection parameter in the Teltonika setparam schema; consult Teltonika documentation to confirm the numeric values for UDP or TCP if needed

If you prefer the server IP instead of domain, you may enter 54.85.159.138 for the server address in the device configuration tool or SMS command following the manufacturer syntax.

## Configuration Notes

- Firmware and hardware revisions may use different parameter IDs or tools; always confirm parameter names and IDs with the Teltonika documentation for your firmware version
- The FMB240 supports configuration via SMS styled commands as shown above and also via manufacturer software where available
- Choose UDP or TCP according to network reliability and your installer preference; Plaspy supports either and will detect the protocol automatically
- Because Plaspy uses a single port for all devices, always verify the device port is set to 8888 during configuration
- Confirm device availability and long term support with the manufacturer as the product page may indicate End of Life status

## Why Use Plaspy with This Configuration

Using the Teltonika FMB240 with Plaspy provides a straightforward path to ingest GPS location and CAN derived telemetry into a single fleet management and monitoring platform. The shared Plaspy server endpoint and consistent port simplify device provisioning for large deployments, and Plaspy's automatic protocol detection reduces per device protocol configuration tasks.

Learn more about how Plaspy can work with your Teltonika hardware by visiting the Plaspy website at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details always verify current information on the Teltonika official website https://www.teltonika-gps.com/
