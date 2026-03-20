---
slug: /arusnavi/integral_4/configuration
id: integral_4-configuration
sidebar_label: Configuration
title: Arusnavi - Integral 4 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect Arusnavi Integral 4 with Plaspy using shared server settings and automatic protocol detection
keywords:
  - Arusnavi Integral 4
  - Integral 4 configuration
  - Arusnavi tracker setup
  - Plaspy configuration
  - GPS tracker server configuration
  - vehicle tracking setup
  - fleet management tracker
  - Integral 4 Plaspy setup
  - Arusnavi GPS configuration
  - tracker protocol integration
---

# Arusnavi - Integral 4 Configuration

This page covers the public configuration context for using the Arusnavi Integral 4 with Plaspy. It describes the practical server settings and the typical setup workflow so technicians and integrators can prepare the device to communicate with Plaspy for centralized monitoring and reporting. The information below focuses on the shared Plaspy connection details and general steps based on manufacturer public documentation and common installation practices.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. Use this guide to apply the required Plaspy endpoint and port, then confirm device-specific options using Arusnavi configuration tools or documentation.

## Configuration Overview

Preparing the Integral 4 for Plaspy integration ensures the tracker sends position, telemetry and event data reliably to the centralized platform. The process centers on configuring the device to report to Plaspy, validating connectivity, and confirming that data appears in the Plaspy monitoring interface.

- Configure the device server settings to point to the Plaspy endpoint and port so data is routed to Plaspy.
- Select the transport method (UDP or TCP) if the device requires transport selection and confirm communication.
- Use the official Arusnavi configuration tool or approved method to apply settings and save changes.
- Validate that GNSS, CAN/RS-485 telemetry and discrete input events are visible in Plaspy after the device establishes a connection.
- Confirm dual SIM and cellular connectivity are active so the device can maintain continuous reporting to Plaspy.

## Plaspy Server Settings

When configuring Integral 4 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Device powered with the recommended operating voltage and, if applicable, connected to a vehicle power source or bench power supply.
- Active cellular connectivity for the installed SIM(s) and confirmation that the 2G modem is enabled for the region.
- Access to the official Arusnavi configuration method such as PC configuration tool over USB, the mobile setup app via Bluetooth or USB, or the manufacturer web management interface.
- Device IMEI or unique identifier recorded for registration or mapping inside Plaspy.
- Firmware reasonably current for the device variant to ensure known protocol behavior and compatibility.
- Access to physical connectors for on-site verification of GNSS, CAN, RS-485, and I/O wiring if telemetry or sensors will be used.

## How This Tracker Connects to Plaspy

Integral 4 transmits GNSS positions, collected telemetry, and event messages to Plaspy over its cellular link. The device is configured to report to the shared Plaspy server endpoint and port and Plaspy handles protocol detection so incoming data is parsed and assigned to the correct device profile in the platform.

- Sends GNSS position and movement updates to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Reports telemetry from CAN, RS-485 and optional UART interfaces to Plaspy for diagnostics and sensor monitoring.
- For devices with black box logging, cached records are forwarded to Plaspy when connectivity is restored.
- Discrete input events, ignition state and BLE sensor readings appear as events in Plaspy once the tracker is connected.
- Plaspy automatically detects the tracker protocol so no separate protocol selection is required inside the platform.

## Common Configuration Workflow

1. Access the official Arusnavi configuration method such as the PC USB tool, the mobile app via Bluetooth/USB, or the web management interface provided by Arusnavi.
2. Locate the monitoring or server settings section in the manufacturer tool where server host and port are entered.
3. Enter the Plaspy server as d.plaspy.com or optionally 54.85.159.138 in the server host field.
4. Set the port to 8888 as the monitoring port that Plaspy uses for all devices.
5. Choose UDP or TCP if the device requires selecting a transport type for server communication.
6. Apply or save the configuration changes in the Arusnavi tool and confirm the settings were written to the device.
7. Restart the device if required by the manufacturer tool or after applying network/server changes.
8. Validate that the device reports to Plaspy by checking device connection status and incoming telemetry in the Plaspy platform.

## Example Configuration Commands

The exact commands and configuration format can vary by Arusnavi firmware and the configuration method you use (USB tool, mobile app, or web interface). Because manufacturer tools differ across firmware versions and device variants, follow Arusnavi documentation or the configuration tool UI to set the Plaspy server host d.plaspy.com or 54.85.159.138 and port 8888, and select UDP or TCP where required.

If you have a specific set of public commands from Arusnavi or a command map for your device firmware, apply them in the order recommended by Arusnavi and preserve any placeholders the manufacturer provides.

## Configuration Notes

- Arusnavi firmware variations can change the configuration screens, field names, or command syntax; always confirm the exact labels in the tool you are using.
- TCP and UDP transports behave differently under cellular networks; choose the transport recommended by your integrator or test both to confirm reliable delivery. Plaspy will automatically detect and handle the protocol.
- Because Plaspy uses the same port across supported devices, the core server port remains 8888 regardless of model.
- Dual SIM settings should be reviewed to ensure the preferred SIM provides data connectivity for the device in its operating region.
- When using black box logging, test a connectivity loss and restoration scenario to confirm that historical records are forwarded to Plaspy as expected.

## Why Use Plaspy with This Configuration

Using Integral 4 with Plaspy provides a straightforward way to centralize vehicle location, telemetry and event data for fleet and asset monitoring. The device's multi GNSS support, dual SIM cellular modem and wide set of interfaces make it well suited to telemetry workflows where Plaspy consolidates position, CAN/RS-485 sensor data and discrete event reporting into dashboards, alerts and historical reports.

Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. For the most current device specific configuration details, firmware behavior and manufacturer instructions, verify information on the Arusnavi website at https://www.arusnavi.ru.
