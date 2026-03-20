---
slug: /lk_gps/tk905/configuration
id: tk905-configuration
sidebar_label: Configuration
title: LK-GPS - TK905 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK GPS TK905 showing Plaspy server settings and practical setup steps for platform integration
keywords:
  - LK GPS TK905 configuration
  - TK905 setup Plaspy
  - LK GPS tracker configuration
  - TK905 server settings
  - TK905 GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking TK905
  - fleet tracking TK905
  - TK905 integration guide
  - GPS tracker Plaspy setup
---

# LK-GPS - TK905 Configuration

This page provides the public configuration context for using the LK-GPS TK905 tracker with Plaspy. It collects the practical, platform-side settings and high level workflow you need to configure the device to report location and events to the Plaspy server. Use this guide to prepare the tracker for visibility in Plaspy and to understand what to check on the device side before integration.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps can vary by firmware, hardware revision, install type, and vendor tooling, so treat these instructions as the Plaspy-side configuration context rather than an exhaustive device manual.

## Configuration Overview

Preparing a TK905 for use with Plaspy focuses on configuring the tracker to send its data to the Plaspy endpoint, validating connectivity, and confirming the device is visible in Plaspy maps and reports. The steps below summarize the practical purposes of the configuration process.

- Configure the device to report to the Plaspy server endpoint so position and alarm events reach the platform.
- Select the transport protocol supported by the device (UDP or TCP) and set the designated port used by Plaspy.
- Validate cellular connectivity and any SIM related settings required for data reporting.
- Save and apply configuration on the TK905, then verify the tracker appears and reports updates in Plaspy.
- Adjust reporting interval and alarm settings on the device as needed to balance battery life and tracking granularity.

## Plaspy Server Settings

When configuring the TK905 to report to Plaspy, use the following public platform settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port, so set port 8888 on the tracker when required by the manufacturer configuration interface.

## Typical Requirements Before Setup

- Confirm the TK905 has an active, correctly provisioned SIM card and cellular connectivity if data reporting requires mobile network access.
- Ensure the device has sufficient battery charge or is connected to a stable power source before changing settings.
- Obtain access to the official manufacturer configuration method or software for the TK905 (SMS commands, web tool, or vendor app depending on the device).
- Know the required server endpoint and port values to enter: d.plaspy.com or 54.85.159.138 and port 8888.
- Have a plan for validating device reports after configuration, such as access to Plaspy account dashboards or map views.
- If the tracker supports transport selection, be prepared to choose between UDP or TCP according to installation needs.

## How This Tracker Connects to Plaspy

The TK905 is configured to report location updates and alarm events to the shared Plaspy server endpoint and port. Plaspy ingests those messages and maps them to the associated device record, enabling real-time position display, event alerts, and history playback.

- The tracker sends GPS position data and alarm events to d.plaspy.com or 54.85.159.138 using port 8888.
- Plaspy accepts either UDP or TCP transport and will automatically detect the protocol used by the TK905.
- Position updates and alarm notifications received by Plaspy become visible in maps, reports, and alert streams.
- Platform-side automatic protocol detection removes the need to know the device protocol in advance; just configure the endpoint and port.
- Using the shared Plaspy port simplifies multi-device deployments because the same port is applied across supported trackers.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the TK905 (SMS command set, vendor app, or configuration tool provided by LK GPS or your vendor).
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138 as supported by the device.
3. Set port 8888 on the device; Plaspy uses the same port for all supported devices.
4. Choose the transport protocol UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration using the device method (send the SMS command, save in the app, or upload settings).
6. Restart or power cycle the device if the tracker firmware requires it to apply network changes.
7. Validate that the device reports to Plaspy by checking for incoming position updates and events in your Plaspy account or dashboard.

## Example Configuration Commands

The TK905 supports configuration via manufacturer-provided methods such as SMS commands or vendor software, and exact commands vary by firmware and regional variant. Because model specific command strings can differ, consult LK GPS documentation or your vendor for the precise SMS format or configuration tool workflow required by your unit.

If your TK905 supports SMS-based server configuration, the general flow is to send the appropriate SMS command to set the server domain or IP and port, then confirm with a verification command. Use the official LK GPS command reference to obtain the correct strings for your firmware version.

## Configuration Notes

- Firmware and hardware revisions can change required command syntax and available features; always check the tracker firmware version before applying commands.
- TCP versus UDP selection can affect delivery behavior and battery consumption; choose the transport that matches your reliability and power expectations.
- Because Plaspy automatically detects the tracker protocol, you only need to provide the correct endpoint and port rather than a specific protocol identifier in many cases.
- If SMS setup is available for your unit, keep in mind SMS command prefixes, admin numbers, and password requirements defined by the manufacturer.
- For deployments focused on battery life, tune reporting intervals and alarm thresholds on the TK905 to reduce unnecessary wakeups while preserving required visibility.

## Why Use Plaspy with This Configuration

Using the TK905 with Plaspy provides straightforward real-time position reporting and alarm forwarding to a centralized platform, which is useful for fleet visibility, basic telemetry, and anti-theft monitoring. The shared Plaspy server settings and automatic protocol detection simplify the integration process so you can bring devices online quickly and monitor location and events in one place.

To learn more about Plaspy and how the platform handles device connectivity and reporting, visit https://www.plaspy.com. For the latest device specific commands, firmware details, and manufacturer guidance for the TK905, verify current setup information at the LK GPS official site https://www.lk-gps.com.
