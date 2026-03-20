---
slug: /arusnavi/arnavi_l3/configuration
id: arnavi_l3-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi L3 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Arusnavi Arnavi L3 tracker and how to configure it for use with Plaspy
keywords:
  - Arusnavi Arnavi L3 configuration
  - Arnavi L3 setup
  - Arusnavi configuration
  - Arnavi L3 Plaspy setup
  - Plaspy tracker configuration
  - Arusnavi GPS tracker configuration
  - fleet tracking setup
  - GPS platform setup
  - Arnavi L3 server configuration
  - Arnavi L3 telemetry setup
---

# Arusnavi - Arnavi L3 Configuration

This page documents the public configuration context for using the Arusnavi Arnavi L3 GPS tracker with Plaspy. It focuses on the shared server settings and practical steps you will use to point the device at Plaspy for live tracking and telemetry. The guidance here is intended to help installers and integrators prepare the tracker to communicate with Plaspy using the public integration settings.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this guide to apply Plaspy server settings, then confirm device-specific steps using Arusnavi configuration tools or the official manufacturer documentation.

## Configuration Overview

This configuration process prepares the Arnavi L3 to send GNSS positions, sensor telemetry, and event-driven alerts to Plaspy while preserving the device's dual-server reporting capability for redundancy. The objective is to point the device at the Plaspy endpoint, ensure reliable cellular connectivity, and validate that Plaspy is receiving telemetry and events.

- Configure the device to report to the Plaspy server endpoint and port so location and telemetry stream to the platform.
- Verify cellular data and SIM settings so the Arnavi L3 can reach Plaspy over 2G GPRS.
- Choose the appropriate transport (UDP or TCP) if your configuration tool requires a transport selection.
- Save and apply settings, then confirm the device appears in Plaspy and sends regular position updates.
- Use dual-server reporting if you wish to keep a secondary server for redundancy while streaming to Plaspy.

## Plaspy Server Settings

When configuring the Arnavi L3 to connect to Plaspy, use the public Plaspy server settings listed below. These settings are shared across Plaspy supported devices and are required for correct connectivity.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured to use either UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when the device connects and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Ensure the Arnavi L3 has a working power connection and is installed according to the device wiring guidance.
- Install an active SIM card with a data plan that supports 2G GPRS if required by your region and network availability.
- Have access to the official Arusnavi configuration method for your unit such as the PC configurator via USB Type-C or the vendor web configuration tool.
- Confirm the device firmware is up to date or note the firmware revision so you can follow the correct manufacturer procedure.
- Keep the wiring harness and any BLE sensors or external inputs available for commissioning and validation.
- Verify adequate cellular signal at the installation location to ensure the device can reach the Plaspy server.

## How This Tracker Connects to Plaspy

The Arnavi L3 sends GNSS position fixes and telemetry over its cellular 2G/GPRS link to monitoring platforms. When configured to report to Plaspy, it will push location updates, sensor values, and event notifications to the Plaspy server endpoint and port so vehicles and assets become visible in the Plaspy platform.

- The device reports location fixes and telemetry to the shared Plaspy server endpoint d.plaspy.com (or the IP 54.85.159.138) on port 8888.
- Telemetry such as ignition state, analog sensor readings, and BLE sensor data are forwarded to Plaspy for dashboards and alerts.
- Event-driven reporting (for example ignition on/off or sensor thresholds) is transmitted and can trigger Plaspy alerts and workflows.
- Dual-server reporting can be used so the Arnavi L3 sends identical streams to Plaspy and a secondary server for redundancy.
- Plaspy detects the tracker protocol automatically when the device connects to the shared port, so no separate protocol selection is required within Plaspy.

## Common Configuration Workflow

1. Access the official Arusnavi configuration method or software for the Arnavi L3 (PC configurator via USB Type-C, manufacturer web tool, or supported vendor utility).
2. In the device server settings enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 as the reporting port used by Plaspy.
4. Choose UDP or TCP as the transport if the device requires a transport selection; the device may be configured to use either protocol on port 8888.
5. If required by your SIM, configure APN and other carrier parameters using the manufacturer tool before saving settings.
6. Apply or save the configuration in the device tool and follow any prompts to commit settings.
7. Restart the device if recommended by the manufacturer or the configuration tool to begin reporting to Plaspy.
8. Validate that the device is appearing in Plaspy and that it is sending periodic position updates and expected telemetry.

## Example Configuration Commands

The Arnavi L3 supports remote configuration via the official Arusnavi tools and a PC configurator. Exact commands or SMS strings vary by firmware and manufacturer utility and are not included here. Use the Arusnavi configuration utility or the device's documented configuration interface to set the Plaspy server values:

- Enter server domain d.plaspy.com or server IP 54.85.159.138
- Set reporting port to 8888
- Select UDP or TCP if prompted by the configuration tool

For precise command syntax, SMS strings, or console commands consult the Arusnavi configuration manual or the PC configurator supplied by the manufacturer.

## Configuration Notes

- Firmware differences and hardware revisions can change configuration screens and supported command formats; always check the device firmware level before applying instructions.
- When choosing transport, UDP typically provides lower overhead while TCP offers a reliable connection; select the transport required by your installation or vendor recommendation.
- Dual-server reporting is supported by the Arnavi L3 and can be used to send identical data streams to Plaspy and a secondary monitoring endpoint for redundancy.
- BLE sensors and analog inputs reported by the device can be included in Plaspy telemetry once the device is sending data to the Plaspy endpoint.
- Use the PC configurator or official Arusnavi tools to avoid format errors and to ensure changes are persisted correctly in device memory.

## Why Use Plaspy with This Configuration

Using the Arnavi L3 with Plaspy provides a practical integration path for compact fleet and asset tracking hardware that supports multi-constellation GNSS, BLE sensor telemetry, and dual-server reporting. Pointing the device at Plaspy with the shared server settings allows organizations to consolidate live location, sensor data, and event alerts into a single operational view for monitoring, routing, and incident response.

To learn more about Plaspy and how to onboard devices like the Arnavi L3, visit https://www.plaspy.com. For the most current, device-specific configuration steps, firmware notes, and manufacturer guidance verify details on the Arusnavi official website https://www.arusnavi.ru.
