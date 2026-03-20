---
slug: /gotop/g25c_4g/configuration
id: g25c_4g-configuration
sidebar_label: Configuration
title: GOTOP - G25C-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP G25C-4G showing Plaspy server settings and practical setup steps for integration
keywords:
  - GOTOP G25C-4G configuration
  - GOTOP G25C-4G setup
  - G25C-4G Plaspy
  - GOTOP tracker configuration
  - GPS tracker configuration Plaspy
  - vehicle tracking G25C-4G
  - G25C-4G server settings
  - GOTOP GPS platform setup
  - G25C-4G installation guide
  - GOTOP asset tracking
---

# GOTOP - G25C-4G Configuration

This page provides the public configuration context for using the GOTOP G25C-4G tracker with Plaspy. It summarizes the practical server settings, essential pre-setup checks, and a workflow that installers and integrators commonly follow to register and verify a G25C-4G device on the Plaspy platform. Use this document as a technical reference alongside the device manufacturer documentation and the Plaspy server values shown below.

The G25C-4G is an industrial grade LTE GPS tracker with multi mode positioning and remote SMS parameter controls. Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Confirm device-specific controls, SMS commands, or vendor utilities with the official GOTOP documentation when necessary.

## Configuration Overview

Configuring the G25C-4G for Plaspy prepares the device to transmit location, alarm, and telemetry data to a central endpoint so the tracker becomes visible in Plaspy dashboards and reporting. The goal is to apply the Plaspy server settings on the device (via the manufacturer tool or SMS), confirm network connectivity, and validate that the tracker is reporting correctly to the platform.

- Set the tracker to report to the Plaspy server endpoint and port so the platform can ingest location and event data.
- Ensure the device has a working LTE SIM and network access for live reporting and SMS control.
- Validate that alarms and data buffering behavior are functioning so offline storage resends data after connectivity returns.
- Verify device visibility in Plaspy and confirm event reporting (movement, geo-fence, low battery, overspeed) as required by your workflow.
- Keep manufacturer tools and firmware notes at hand because specific menus and SMS commands vary by software version.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the G25C-4G for integration with Plaspy:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP — the device may be configured using UDP or TCP on port 8888
- automatic protocol detection in Plaspy — Plaspy automatically detects the tracker protocol
- note that all devices in Plaspy use the same port to simplify device configuration

## Typical Requirements Before Setup

- Device powered and charged or connected to installation power so configuration changes and reboots are safe to perform.
- Active SIM with data and SMS enabled if you will use SMS configuration or cellular data reporting.
- Access to the official manufacturer configuration method or software such as GOTOP configuration tool, SMS commands, or vendor-provided app.
- Plaspy account or access to the platform to confirm device registration and telemetry after configuration.
- Basic device information available such as IMEI, device ID, and the preferred transport (UDP or TCP) used during configuration.
- A plan for validating alarms and data resend behavior in a controlled environment before field deployment.

## How This Tracker Connects to Plaspy

The G25C-4G sends position fixes, alarms, and telemetry to Plaspy via its cellular link so events and historical tracks can be displayed in the platform. Configure the tracker to point at the Plaspy server endpoint and verify it establishes sessions using the selected transport mode.

- The tracker reports location and event data to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Data can be sent over UDP or TCP depending on device configuration and network conditions.
- Plaspy automatically detects the device protocol so once the server and port are set the platform will usually accept the incoming data stream.
- Alarms (movement, drop-off, low battery, geo-fence breach, overspeed, shake) are forwarded to Plaspy for real-time alerts and historical recording.
- If connectivity is interrupted, built-in memory stores points and events and the device resends them once network access is restored.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the G25C-4G (manufacturer app, web tool, or SMS command set).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 as provided above.
3. Set the port to 8888 in the device server settings.
4. Choose UDP or TCP if the device requires transport selection; both are supported for Plaspy.
5. Apply or save the configuration in the manufacturer tool or send the SMS command that commits the settings.
6. Restart the device if the device firmware requires a reboot for network changes to take effect.
7. Validate that the device reports to Plaspy by checking device status and recent location updates in the Plaspy platform.

## Example Configuration Commands

The exact commands and syntax for configuring the G25C-4G vary by firmware and vendor tools. GOTOP devices commonly support both SMS and software configuration methods; if you use SMS commands or the official GOTOP configuration tool, follow the manufacturer guide for the correct command formats. Because manufacturer command sets differ between firmware revisions, consult the official GOTOP documentation for precise SMS strings or configuration file formats before applying settings.

When vendor-provided SMS commands are used, they typically include a command to set server domain or IP, a command to set the port, and an optional command to select TCP or UDP. Keep placeholders such as [apn] or similar if using templates provided by the manufacturer and replace them with your actual values during configuration.

## Configuration Notes

- Firmware differences can change menu layout and SMS command syntax; confirm the correct commands for your device firmware version.
- Choose UDP or TCP based on network reliability and your organization preferences; Plaspy accepts both and will auto detect the protocol.
- All devices in Plaspy use the same port (8888) which simplifies mass configuration and provisioning.
- If you plan to use SMS configuration, ensure SMS commands and remote control are allowed by the SIM and carrier plan.
- Always record the IMEI and configuration steps performed for each device to simplify troubleshooting and audit trails.

## Why Use Plaspy with This Configuration

Using the G25C-4G with Plaspy brings a practical, scalable solution for fleet and asset monitoring. The tracker’s long battery life, multi mode positioning, and resilient offline storage combined with Plaspy’s centralized ingestion make it straightforward to maintain visibility, receive timely alarms, and preserve historical data even when connectivity is intermittent. This configuration approach supports common anti-theft and operational monitoring workflows across fleets, containers, and remote equipment.

To learn more about Plaspy and how it works with trackers like the GOTOP G25C-4G visit https://www.plaspy.com. For the most current device specific configuration methods, firmware details, and SMS or software command formats verify information on the manufacturer site https://www.gotop.cc/.
