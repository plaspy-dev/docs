---
slug: /teltonika/fmt100/configuration
id: fmt100-configuration
sidebar_label: Configuration
title: Teltonika - FMT100 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Teltonika FMT100 showing Plaspy server settings and example commands for platform integration
keywords:
  - Teltonika FMT100 configuration
  - Teltonika FMT100 setup
  - FMT100 server configuration
  - FMT100 Plaspy setup
  - Plaspy GPS tracker setup
  - Teltonika GPS configuration
  - FMT100 tracking software configuration
  - FMT100 GPS platform setup
  - Teltonika FMT100 APN settings
  - Plaspy tracker integration
---

# Teltonika - FMT100 Configuration

This page covers the public configuration context for using the Teltonika FMT100 with Plaspy. It collects the practical server settings and an example command used in public Teltonika configuration flows so you can prepare the device to send location and event data to Plaspy for real time tracking and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The FMT100 model configuration shown below illustrates a common Teltonika parameter command pattern and preserves APN placeholders where applicable.

## Configuration Overview

The goal of configuration is to prepare the FMT100 to communicate reliably with Plaspy and to verify that the device appears in the platform. The public command example in this page demonstrates how to set APN and server parameters in a single parameter batch and shows the server endpoint Plaspy expects.

- Configure APN and any SIM credentials so the device has mobile connectivity
- Enter the Plaspy server host and port so the tracker reports to the correct endpoint
- Select the transport type UDP or TCP if required by the device
- Save and apply settings so the tracker can initiate sessions to Plaspy
- Validate connectivity by confirming the device appears and reports on Plaspy

## Plaspy Server Settings

Use these public Plaspy settings when configuring the FMT100 or when entering the server values in Teltonika tools:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Device power and battery mounting completed or device connected to a suitable power source
- Active SIM card with a data plan and correct APN credentials for the mobile network
- Access to the official Teltonika configuration method supported for your unit such as SMS parameter commands or Teltonika configuration tools
- Basic knowledge of APN values including APN name and optional APN username and password
- A Plaspy account and the ability to verify that the device appears in the Plaspy platform after configuration

## How This Tracker Connects to Plaspy

When configured to point at Plaspy, the FMT100 sends its location, event messages, and sensor data to the shared Plaspy endpoint and port so the platform can display and process the incoming telemetry. Plaspy then ingests these messages, applies protocol detection, and maps the data to the configured device record.

- The tracker is set to report to the Plaspy server host d.plaspy.com on port 8888
- The device uses GSM mobile connectivity managed by the configured APN to reach Plaspy
- Plaspy accepts either UDP or TCP transport and automatically detects the device protocol
- Event driven messages like accelerometer alerts and BLE sensor values are forwarded into Plaspy for alerts and reporting
- Once the device reports successfully, location and event data become visible in Plaspy dashboards

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FMT100, such as SMS parameter commands or the vendor configuration tool.
2. Enter the Plaspy server host either as d.plaspy.com or as the server IP 54.85.159.138.
3. Set the server port to 8888 as the destination port for device communications.
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Apply or save the configuration so parameters are written to the device.
6. Restart the device if the manufacturer documentation recommends a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking for the device in the Plaspy platform and confirming incoming telemetry.

## Example Configuration Commands

The FMT100 public configuration example uses a Teltonika batch parameter command pattern to set APN and server parameters in one step. Preserve the placeholders when substituting your network values.

- Example Teltonika parameter batch command

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and fields
- {{apn}} is the APN name provided by your mobile operator
- {{apnu}} is the APN username if required by the operator, leave empty if not used
- {{apnp}} is the APN password if required, leave empty if not used
- 2004 sets the server host to d.plaspy.com as required by Plaspy
- 2005 sets the server port to 8888 which is the shared Plaspy port for all devices
- 2006 sets the transport selection where 1 in this example typically indicates a transport mode supported by the device; consult Teltonika parameter documentation for numeric mapping

You may replace the d.plaspy.com value with the Plaspy server IP 54.85.159.138 if your configuration tool prefers numeric IP addresses. Always confirm parameter IDs and transport value mappings against official Teltonika guidance for your firmware version.

## Configuration Notes

- Firmware and tool differences can change parameter IDs, available commands, or transport value mappings; always check Teltonika documentation for your specific firmware.
- If your device supports SMS based parameter setting, maintain careful formatting and test with a single parameter change before batching multiple values.
- Choose UDP or TCP based on your network and reliability needs; Plaspy accepts both and auto detects protocol at the platform level.
- Use the domain d.plaspy.com by default but the provided public IP 54.85.159.138 is available when an IP is required by your configuration flow.
- All devices in Plaspy use the same port 8888 which simplifies server entry across mixed fleets

## Why Use Plaspy with This Configuration

Configuring the FMT100 to report to Plaspy gives organizations centralized visibility into location, accelerometer driven events, and BLE sensor readings from a compact battery mounted tracker. That visibility supports operational monitoring, incident detection, and asset condition workflows without complex per device server management because Plaspy uses a shared endpoint and automatic protocol detection.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify current information on the Teltonika website https://www.teltonika-gps.com/ .
