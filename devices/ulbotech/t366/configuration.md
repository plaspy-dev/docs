---
slug: /ulbotech/t366/configuration
id: t366-configuration
sidebar_label: Configuration
title: Ulbotech - T366 Configuration
sidebar_class_name: menu_item_tracker
description: Practical setup guide for configuring Ulbotech T366 with Plaspy for real time vehicle tracking and telemetry
keywords:
  - Ulbotech T366 configuration
  - Ulbotech T366 setup
  - Ulbotech T366 Plaspy
  - T366 server configuration
  - T366 GPS tracker setup
  - Plaspy tracker configuration
  - OBD GPS tracker configuration
  - vehicle tracking T366
  - T366 telemetry configuration
  - Plaspy fleet tracking
---

# Ulbotech - T366 Configuration

This page documents the public configuration context for using the Ulbotech T366 OBD GPS tracker with the Plaspy platform. It explains the shared Plaspy server settings you will use when directing the T366 to report location and telemetry, and summarizes practical setup steps you can follow using Ulbotech configuration tools or vendor software. The content here is focused on the information needed to connect the device to Plaspy and validate reporting in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tools your vendor provides. Use this guide to apply the public Plaspy endpoint and port to the T366, then confirm device behavior against your installer instructions and Ulbotech documentation.

## Configuration Overview

The goal of configuring the T366 for Plaspy is to point the device at Plaspy's ingestion endpoint, choose the appropriate transport, and verify that GNSS positions and OBD/CAN telemetry arrive in the platform. With the T366's automatic Wi‑Fi and GPRS switching and OBD plug‑in design, configuration focuses on network endpoint settings, transport selection, and a final validation pass in Plaspy.

- Set the device's server endpoint to Plaspy so the tracker can deliver GNSS and OBD telemetry.
- Choose the transport mode (UDP or TCP) if the device requires an explicit selection.
- Ensure network connectivity (SIM and mobile data or Wi‑Fi) and that APN settings are correct for GPRS reporting.
- Apply and save configuration in the Ulbotech tool or SMS/software workflow and restart the tracker if required.
- Validate live updates and event reporting in Plaspy to confirm the device is visible and reporting correctly.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the T366. These are the values Plaspy requires to ingest telemetry from compatible trackers.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Always enter either the server domain or IP as provided above and set the device to use port 8888. If your configuration tool asks for transport, select UDP or TCP per device capability; Plaspy will identify the device protocol automatically when the first packets arrive.

## Typical Requirements Before Setup

- Access to the Ulbotech configuration method provided by the vendor such as the manufacturer software, web tool, or configuration SMS instructions.
- A powered T366 connected to a vehicle OBD‑II port or to a bench power supply that meets the device input range.
- An active SIM card with data enabled if you plan to use GPRS reporting, or a known Wi‑Fi network for Wi‑Fi reporting.
- Knowledge of APN settings for the SIM carrier if automatic APN does not apply or needs manual entry.
- Physical access to the device for a micro USB connection or to observe status LEDs during configuration and restart.
- Confirmation of the device firmware version and any vendor firmware notes that affect network behavior or available configuration options.

## How This Tracker Connects to Plaspy

The T366 sends GNSS positions, OBD and CAN telemetry, and event alerts to Plaspy using the configured network transport. When directed to Plaspy's shared endpoint and port, the device's data streams are ingested and displayed as real‑time updates and historical records in the platform.

- The tracker reports location and telemetry to the Plaspy endpoint at d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on device capability and configuration choice.
- Plaspy automatically detects the tracker protocol and associates incoming data to the configured device profile.
- Events from the T366 such as immobilizer activity, driver behavior alerts, and power loss are forwarded to Plaspy for alerting and reporting.
- The T366 may use Wi‑Fi or GPRS as the network path; device logic can switch between these to maintain continuous reporting.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or vendor software for the T366 (manufacturer tool, configuration SMS procedure, or USB configuration utility).
2. In the server or center settings, enter d.plaspy.com or 54.85.159.138 as the reporting endpoint.
3. Set the reporting port to 8888.
4. If the device requires a transport selection, choose UDP or TCP according to your networking plan.
5. Configure APN and network credentials if using GPRS, or verify Wi‑Fi credentials if using Wi‑Fi reporting.
6. Apply or save the configuration and, if required by the tool, restart the device to activate settings.
7. Validate that the device reports to Plaspy by checking for live position updates and telemetry in the platform.

## Example Configuration Commands

The T366 manufacturer configuration commands and methods vary by firmware and vendor tools. Because this page contains only public configuration context and the modelConfiguration input is empty, exact commands are not provided here. Typical ways to configure the device include:

- Using the Ulbotech or vendor desktop configuration utility over micro USB.
- Sending the official SMS configuration strings when the device firmware supports SMS setup.
- Configuring settings through a web or cloud portal supplied by your vendor.

Refer to the Ulbotech configuration guide supplied with your device or ask your vendor for the exact SMS strings or USB configuration steps to set the server to d.plaspy.com (or 54.85.159.138) and port 8888. Preserve any placeholders your vendor provides, for example [apn] for carrier APN values, and replace them with your network details.

## Configuration Notes

- Firmware differences can change available configuration commands and menu layouts; always check the device firmware version before applying steps.
- Many installers prefer USB or a vendor tool for bulk configuration; SMS setup is common for field changes but may be restricted by firmware.
- Choose UDP when you need lighter transport overhead and lower latency, or TCP when you prefer session reliability; Plaspy accepts both and detects protocol automatically.
- Confirm APN, username, and password with your SIM carrier if automatic APN detection does not work.
- Keep a record of device IMEI and unique identifiers to match the reporting device in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Configuring the Ulbotech T366 to report to Plaspy gives fleet operators and managers a straightforward path to ingest accurate GNSS positions and rich OBD/CAN telemetry into a single platform. The T366's OBD plug‑in convenience, combined with automatic Wi‑Fi and GPRS switching and support for immobilizer controls, makes it a practical choice for deployments that require continuous tracking and vehicle intelligence.

To learn more about Plaspy and how it can receive data from devices like the T366, visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details consult the official Ulbotech website at http://www.ulbotech.com/ to verify the latest instructions and tools.
