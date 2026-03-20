---
slug: /lk_gps/lk720/configuration
id: lk720-configuration
sidebar_label: Configuration
title: LK-GPS - LK720 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for LK720 trackers to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - LK-GPS LK720 configuration
  - LK720 setup Plaspy
  - LK-GPS tracker configuration
  - LK720 server configuration
  - Plaspy tracker setup
  - Plaspy GPS integration
  - vehicle tracking LK720
  - CatM GPS tracker setup
  - LK720 SMS configuration
  - fleet tracking LK720
---

# LK-GPS - LK720 Configuration

This page summarizes the public configuration context for using the LK-GPS LK720 tracker with the Plaspy platform. It focuses on the shared server settings Plaspy expects and practical steps you can take on the manufacturer side to prepare the LK720 for reliable reporting to Plaspy dashboards and services.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary with firmware, hardware revision, installation type, and vendor configuration tools. Use this guidance together with LK-GPS documentation and your installer tools to complete the device setup.

## Configuration Overview

This section explains what you will accomplish when configuring an LK720 for Plaspy integration and why each step matters.

- Point the LK720 to Plaspy's server endpoint so the device sends GNSS and status data to the correct destination.
- Choose the appropriate transport (UDP or TCP) and confirm the device is using Plaspy's port to ensure consistent ingestion.
- Validate cellular connectivity and SMS or app access so you can apply settings and verify reporting.
- Confirm the device appears in Plaspy after configuration so location, telemetry, and events are visible to fleet managers.
- Test key events such as geofence triggers, shock/vibration alerts, and relay actions to make sure Plaspy receives and displays them.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the LK720. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (this is the standard port Plaspy uses for all devices)  
- Transport: UDP or TCP are both supported; select based on your device or network preference  
- Note: Plaspy automatically detects the tracker protocol so you only need to point the tracker to the correct server and port

## Typical Requirements Before Setup

Before you start, make sure you have the following in place:

- A powered LK720 unit with GNSS antenna connectivity and a stable mount location for reliable reception.
- A Cat‑M compatible SIM card with an active data plan appropriate for telemetry and server reporting.
- Access to the official LK-GPS configuration method you plan to use such as SMS commands, the LK-GPS mobile app, or the manufacturer configuration tool.
- Network coverage for Cat‑M LTE in the deployment area to allow the device to reach the Plaspy server.
- Credentials or account access to your Plaspy instance so you can confirm the device appears and reports after setup.
- Device documentation or firmware notes from LK-GPS to confirm any model- or firmware-specific configuration steps.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the LK720 uses its Cat‑M cellular link to send GNSS coordinates, status, and event data to Plaspy's shared server endpoint and port. Plaspy receives and processes these messages to provide real-time location and alerts.

- The LK720 transmits GNSS location updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Messages may be sent over UDP or TCP depending on the transport selected during configuration.
- Plaspy ingests telemetry such as input voltage and device status to display battery and power conditions.
- Event triggers including shock/vibration alarms and geofence entry/exit are forwarded to Plaspy for alerting and workflows.
- The integration enables relay control for remote immobilizer commands when issued from Plaspy dashboards.

## Common Configuration Workflow

Follow these practical steps to configure an LK720 for Plaspy:

1. Access the official LK-GPS configuration method or software provided by the manufacturer (SMS commands, mobile app, or vendor tool).
2. In the device server settings, enter d.plaspy.com or 54.85.159.138 as the reporting server destination.
3. Set the reporting port to 8888 so the device sends messages to the Plaspy ingestion port.
4. Choose UDP or TCP if the device requires a transport selection; both are supported by Plaspy.
5. Apply or save the configuration on the LK720 using the manufacturer interface.
6. Restart the device if the vendor documentation requires a reboot for new settings to take effect.
7. Validate that the LK720 reports to Plaspy by confirming device visibility and live location updates in your Plaspy account.

## Example Configuration Commands

The LK-GPS LK720 supports multiple configuration methods and the exact commands or steps depend on firmware and vendor tools. Because manufacturer commands and SMS syntax can change across firmware versions and regional SKUs, refer to LK-GPS documentation for the definitive command set.

If you use SMS-based configuration or the vendor tool you should follow the exact syntax provided by LK-GPS. Typical actions you will perform are pointing the server to d.plaspy.com or 54.85.159.138, setting port 8888, and selecting UDP or TCP transport. Contact LK-GPS support or consult the product manual for the precise command strings for your firmware.

## Configuration Notes

- Firmware differences can change SMS command syntax and available options; verify the correct commands for your unit and firmware revision.
- Choose TCP when you need connection-oriented delivery or UDP for lower overhead; both are accepted by Plaspy but network conditions may influence reliability.
- If you configure by SMS, ensure the configuring phone has SMS privileges and the device is in a network area that accepts SMS commands.
- Confirm the SIM uses the correct APN and has data enabled for Cat‑M; lack of data connectivity will prevent reporting to Plaspy.
- Keep manufacturer documentation on hand for troubleshooting relay behavior, event thresholds, and firmware update instructions.

## Why Use Plaspy with This Configuration

Using the LK720 with Plaspy gives organizations and vehicle owners continuous visibility into location, status, and event activity through a single, shared server configuration. The Cat‑M connectivity and LK720's event reporting (shock, geofence, voltage, and relay control) make it suitable for fleet oversight, theft response, and rental vehicle monitoring while keeping configuration steps consistent across devices.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific setup steps, firmware notes, and command syntax refer to the manufacturer's resources at https://www.lk-gps.com. Manufacturer specifications and configuration methods can change over time so verify details with LK-GPS documentation before large scale deployment.
