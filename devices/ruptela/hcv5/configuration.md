---
slug: /ruptela/hcv5/configuration
id: hcv5-configuration
sidebar_label: Configuration
title: Ruptela - HCV5 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Ruptela HCV5 for Plaspy with server settings workflow and practical setup guidance
keywords:
  - Ruptela HCV5 configuration
  - Ruptela HCV5 setup
  - Ruptela HCV5 server configuration
  - Ruptela HCV5 Plaspy
  - Ruptela HCV5 GPS tracker
  - Ruptela HCV5 telematics setup
  - Ruptela HCV5 fleet tracking
  - Ruptela HCV5 device configuration
  - Ruptela HCV5 integration guide
  - Plaspy tracker configuration
---

# Ruptela - HCV5 Configuration

This page documents the public configuration context for using the Ruptela HCV5 with Plaspy. It outlines the shared Plaspy server settings you will apply on the device or in the manufacturer configuration tool, together with practical steps to validate connectivity and visibility in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps for the HCV5 can vary by firmware, hardware revision, installation type, and vendor configuration tools, so this guide focuses on the public, platform level settings and workflow while encouraging verification against Ruptela documentation.

## Configuration Overview

The goal of the configuration process is to prepare the HCV5 to send location and vehicle telemetry to Plaspy so the device becomes visible and manageable in the Plaspy platform. Configuration typically means pointing the tracker at the Plaspy endpoint, selecting the transport mode if required, and confirming that the device transmits GNSS and CAN/OBD data as expected.

- Point the HCV5 to the Plaspy server endpoint so telemetry is routed to your Plaspy account.
- Configure the device transport settings and port so the HCV5 can establish a connection using cellular networks.
- Validate that GNSS position and vehicle telemetry from CAN or OBD channels are transmitted and appear in Plaspy dashboards.
- Save and apply the configuration and, if required, restart the device to begin reporting.
- Confirm device visibility and basic reporting in Plaspy before completing installation.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the HCV5. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Power the HCV5 with a suitable vehicle power source and confirm the device is powered on.
- Ensure the device has an active cellular connection and a data plan compatible with LTE Cat M1 NB IoT or 2G fallback as applicable.
- Physical access to the device or access to the Ruptela configuration method or software used by your installer.
- Access to your Plaspy account or platform administrator to verify device arrival and visibility after configuration.
- Confirmation of the device firmware version and any vendor specific configuration files or profiles required for your deployment.
- Basic tools to view device logs or status from the manufacturer tool when diagnosing connectivity issues.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the HCV5 sends GNSS coordinates and vehicle telemetry over the cellular network to the Plaspy shared server endpoint and port. Plaspy ingests these data streams, maps them to the correct account, and makes them available in dashboards, alerts, and reporting tools.

- GNSS position and timestamped location updates delivered to Plaspy for live map views.
- CAN and OBD telemetry forwarded to Plaspy for fuel, engine, and vehicle diagnostics reporting where enabled.
- Event and digital input reporting for ignition, door, tamper, and other sensor events.
- Device management signals and telemetry visible in Plaspy for operational monitoring.
- The tracker is configured to report to the shared Plaspy server endpoint using port 8888 and either UDP or TCP as selected.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software used by your installer or fleet operations team.
2. In the server or APN configuration section, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 as the target Plaspy port.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Apply or save the configuration profile in the Ruptela tool or device management interface.
6. Restart the HCV5 if required by the tool or firmware to begin reporting to Plaspy.
7. Validate that the device is reporting to Plaspy by checking device arrival and data in your Plaspy account dashboards.

## Example Configuration Commands

The HCV5 may be configured with Ruptela device management tools, manufacturer software, or installer utilities. Exact commands or configuration sequences can vary by Ruptela firmware and the provisioning method used by your installer. No public device command set is included here because manufacturer tools and firmware revisions determine the exact commands.

If you use Ruptela Device Center or another official Ruptela tool, follow its guided interface to set the server host to d.plaspy.com or 54.85.159.138 and the port to 8888. If you require specific command examples, consult Ruptela documentation or your device installer for the correct commands for your firmware version.

## Configuration Notes

- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol so you only need to point the device to the Plaspy endpoint.
- Transport selection between UDP and TCP is device side; choose the mode supported by your installation and network, and be ready to test both if you see connectivity issues.
- Firmware differences and hardware revisions can change configuration menus and available provisioning methods; confirm the exact steps with Ruptela documentation for your firmware version.
- Remote device management or FOTA workflows may be available through Ruptela Device Center or a device management platform; use those tools for large scale deployments.
- Keep physical and electrical installation best practices in mind to avoid power related reporting faults during initial setup.

## Why Use Plaspy with This Configuration

Using the Ruptela HCV5 with Plaspy provides fleet operators with a reliable path to ingest GNSS location and deep vehicle telemetry into a single platform for monitoring, alerts, and reporting. The HCV5 hardware delivers the telemetry streams Plaspy uses to offer live tracking, event monitoring, and visibility into vehicle systems that improve operational decision making and security.

To learn more about integrating devices with Plaspy visit https://www.plaspy.com and to verify the latest device specific configuration details consult the manufacturer at https://ruptela.com/ for the most current documentation and firmware notes.
