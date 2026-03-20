---
slug: /teltonika/tft100/configuration
id: tft100-configuration
sidebar_label: Configuration
title: Teltonika - TFT100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Teltonika TFT100 to connect with Plaspy using shared server settings and example commands
keywords:
  - Teltonika TFT100 configuration
  - Teltonika TFT100 setup
  - TFT100 server configuration
  - TFT100 Plaspy setup
  - Plaspy tracker configuration
  - GPS tracker server settings
  - TFT100 telemetry integration
  - Teltonika Configurator guide
  - fleet tracking setup
  - industrial vehicle tracker
---

# Teltonika - TFT100 Configuration

This page covers the public configuration context for using the Teltonika TFT100 with Plaspy. It summarizes the practical server settings and an example command you can use to point the tracker at Plaspy, and it explains what to check before you integrate the device into your Plaspy account. Use this page as a deployment reference alongside the manufacturer documentation and your internal installation procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TFT100 can be configured using Teltonika tools or by sending configuration commands, and the examples below show how to apply Plaspy server values in a way that works with those methods.

## Configuration Overview

The goal of this configuration is to prepare the TFT100 so it reliably communicates location and telemetry to Plaspy. With the correct APN and server details in place, the device will deliver GPS and vehicle data to the shared Plaspy endpoint so your fleet is visible in the platform.

- Set the device cellular parameters and APN so the tracker can reach external servers.
- Point the tracker to the Plaspy server domain or IP and use the shared port so Plaspy can receive data.
- Choose a transport method if the device requires UDP or TCP and save the configuration.
- Validate connectivity and confirm the tracker is reporting to Plaspy so it appears in live maps and telemetry viewers.
- Use Teltonika Configurator or SMS commands as supported by the TFT100 to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that all devices in Plaspy use the same port 8888 and Plaspy will attempt to detect the correct protocol for the incoming tracker stream.

## Typical Requirements Before Setup

- A powered and installed TFT100 unit with access to its configuration method.
- Active cellular connectivity and a SIM with a data plan configured with the correct APN values.
- Access to Teltonika configuration tools such as Teltonika Configurator or a means to send SMS configuration commands.
- The Plaspy server settings listed above so you can enter d.plaspy.com or the server IP and port.
- Knowledge of device identifiers such as IMEI or serial so you can confirm which device is reporting.
- A test procedure or controlled environment to validate the device is visible in Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured correctly, the TFT100 sends location and telemetry streams to the shared Plaspy endpoint and port so data appears in the platform for live monitoring and historical analysis. Plaspy receives the uplink and maps it to your account based on how your instance is set up.

- The tracker reports GPS position updates to the Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry and vehicle-bus data parsed on the device are forwarded to Plaspy for visualization and alerts.
- The device can use UDP or TCP as the transport; Plaspy will automatically detect the tracker protocol.
- Successful configuration enables live tracking, event reporting, and telemetry dashboards in Plaspy.
- All Plaspy supported devices share the same port 8888 which simplifies server settings across a fleet.

## Common Configuration Workflow

1. Access the official Teltonika configuration method, for example Teltonika Configurator, FOTA WEB, or an SMS command interface.
2. Enter the Plaspy server address as either d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888. Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the tracker requires a transport selection.
5. Configure APN and any required SIM parameters so the tracker can reach the Internet.
6. Apply or save the configuration and restart the device if the tool or device firmware requires a reboot.
7. Validate that the TFT100 reports successfully to Plaspy and that the device appears in the Plaspy interface.

## Example Configuration Commands

To configure the basic parameters on your Teltonika device via the device command interface, use the example command below. This command sets APN parameters and directs the tracker to the Plaspy server and port. Replace the placeholders with your carrier credentials.

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- [apn] = your mobile network APN name
- [apnu] = APN username if required by your carrier
- [apnp] = APN password if required by your carrier

This single command example configures APN fields and points the tracker to d.plaspy.com on port 8888. You can also enter the server as the IP 54.85.159.138 if required by your configuration process. If you use Teltonika Configurator or FOTA WEB, enter the same values in the corresponding server and APN fields. If a restart is required after applying settings, perform it to ensure the new configuration is active.

## Configuration Notes

- Teltonika provides multiple configuration mechanisms; use Configurator or FOTA WEB when available for a GUI workflow, or SMS commands for remote quick changes.
- Firmware and hardware revisions can change parameter IDs and available options. Confirm parameter numbering and semantics with the Teltonika product wiki for your firmware version.
- Choose TCP or UDP based on installation needs; Plaspy will automatically detect the protocol, but the device must be configured to use the selected transport.
- All devices pointing to Plaspy should use port 8888 to simplify server routing and automatic protocol detection.
- Keep APN credentials and device identifiers secure. Preserve placeholders in any templates and replace them with real values before sending commands.

## Why Use Plaspy with This Configuration

Using the Teltonika TFT100 with Plaspy gives operations teams centralized visibility into e-mobility and heavy equipment fleets. When the tracker is configured to send telemetry to Plaspy, fleet managers gain real-time location, vehicle-bus data, and sensor events that support monitoring, maintenance planning, and security workflows.

Learn more about Plaspy and how it handles fleet telemetry at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance, verify details with Teltonika at https://www.teltonika-gps.com/ as product parameters and recommended procedures can change over time.
