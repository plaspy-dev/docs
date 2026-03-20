---
slug: /gotop/l16_pro/configuration
id: l16_pro-configuration
sidebar_label: Configuration
title: GOTOP - L16 PRO Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP L16 PRO and Plaspy including server settings prerequisites workflow and integration tips
keywords:
  - GOTOP L16 PRO configuration
  - GOTOP L16 PRO setup
  - GOTOP L16 PRO Plaspy
  - GOTOP tracker configuration
  - L16 PRO server configuration
  - Plaspy GPS tracker setup
  - smartwatch GPS tracker setup
  - wearable tracker Plaspy
  - GPS tracker configuration guide
  - GOTOP firmware setup
---

# GOTOP - L16 PRO Configuration

This page documents the public configuration context for using the GOTOP L16 PRO with the Plaspy platform. It focuses on the practical server settings, prerequisites, and workflow you need to point the device at Plaspy so location, SOS, and health telemetry appear in your Plaspy account. The guidance here is based on the device description and standard Plaspy integration practices.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact steps you perform on the manufacturer side can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this page to understand what to enter in your GOTOP configuration tool or provisioning workflow and then confirm device specific instructions with GOTOP documentation.

## Configuration Overview

Preparing an L16 PRO for Plaspy is primarily about directing its reporting endpoint to the Plaspy ingestion server, choosing the transport method the device supports, and validating that the watch is able to register and send data over the mobile network or eSIM. Once configured, Plaspy will detect the device protocol automatically and ingest location and sensor data for display, alerts, and historical reporting.

- Configure the device server settings to point to Plaspy so location and telemetry are delivered reliably.
- Select UDP or TCP transport if the device requires a transport choice and set the shared Plaspy port.
- Verify cellular connectivity and SIM or eSIM provisioning so the device can reach Plaspy.
- Save and apply the configuration, then confirm the device is visible in Plaspy.
- Validate SOS, geofence, and telemetry events to ensure alerts are routed correctly.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

All devices in Plaspy use the same port. Use either the domain d.plaspy.com or the IP 54.85.159.138 as permitted by your configuration tool, and set transport to UDP or TCP if the tracker configuration requires a selection. Plaspy will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- Device is charged and powered on with the L16 PRO ready for configuration.
- A valid nano SIM or eSIM provisioned with mobile data and voice as required by your deployment.
- Access to the official GOTOP configuration method such as their provisioning app, web tool, or SMS/OTA procedures described by the manufacturer.
- Network connectivity to reach d.plaspy.com or 54.85.159.138 from the device network.
- Administrative access to your Plaspy account to confirm device registration and visibility after configuration.
- Knowledge of any fields or placeholders your provisioning tool requires for APN or authentication.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the L16 PRO sends location fixes, SOS alerts, and health telemetry over its cellular link to the shared Plaspy ingestion endpoint. Plaspy then processes the incoming packets, detects the protocol, and maps the device data into the platform for live monitoring and alerting.

- The tracker reports to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 using port 8888.
- You may select UDP or TCP transport on the device if required by the configuration interface.
- Plaspy automatically detects the tracker protocol so no separate protocol selection is necessary in the platform.
- Location, SOS, fall alerts, and health telemetry are ingested and shown in the Plaspy dashboard.
- Once communication is established, Plaspy stores and processes historical data for reporting and rules.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software as provided by the manufacturer or vendor.
2. In the server or APN settings, enter the Plaspy server by domain d.plaspy.com or by IP 54.85.159.138.
3. Set the device port to 8888 which is the common Plaspy port for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Save or apply the configuration using the manufacturer tool or provisioning workflow.
6. Restart the L16 PRO if the device or tool indicates a reboot is required to apply changes.
7. Validate that the device reports to Plaspy and appears in your Plaspy account, and test SOS and telemetry reporting.

Follow any additional manufacturer prompts or steps in GOTOP tools where fields such as APN or authentication are required.

## Example Configuration Commands

The exact configuration commands or SMS strings can vary by firmware and the provisioning method provided by GOTOP. Some dealers and installers use GOTOP software, SMS commands, or an OTA provisioning service to apply settings. Because commands differ by firmware and region, refer to GOTOP documentation for device specific command formats.

When using a configuration tool, the key values you must set are the Plaspy endpoint and port:
- Server domain d.plaspy.com or server IP 54.85.159.138
- Port 8888
- Transport UDP or TCP if required

Plaspy will automatically detect the device protocol once the device sends data to the configured endpoint and port.

## Configuration Notes

- Firmware differences may change the exact menu names, command strings, or the order of fields in GOTOP configuration tools.
- If your provisioning tool accepts either domain or IP, using d.plaspy.com is preferred for future server changes; the IP 54.85.159.138 is provided as an alternative.
- The device may require APN fields to be entered separately in the manufacturer tool; confirm APN values with your mobile operator.
- Choose UDP for lower overhead where supported, or TCP if the device or mobile environment recommends a connection oriented transport.
- Always consult the official GOTOP documentation for any SMS syntax or OTA commands before applying changes.

## Why Use Plaspy with This Configuration

Using the GOTOP L16 PRO with Plaspy brings wearable GPS and health telemetry into a single monitoring platform so caregivers and administrators can receive live location, SOS alerts, and sensor-driven health data in one place. Plaspy’s automatic protocol detection and shared ingestion port reduce the need for per-device protocol choices in the platform and simplify large scale deployments.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup guidance on the manufacturer site https://www.gotop.cc/.
