---
slug: /skypatrol/sp9824/configuration
id: sp9824-configuration
sidebar_label: Configuration
title: SkyPatrol - SP9824 Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for SkyPatrol SP9824 setup with Plaspy including server settings workflow and validation
keywords:
  - SkyPatrol SP9824 configuration
  - SkyPatrol SP9824 setup
  - SP9824 Plaspy
  - Plaspy tracker configuration
  - SP9824 asset tracker setup
  - SkyPatrol GPS configuration
  - SP9824 server configuration
  - Plaspy device compatibility
  - asset tracking setup
  - cold chain tracker configuration
---

# SkyPatrol - SP9824 Configuration

This page documents the public configuration context for using the SkyPatrol SP9824 with the Plaspy platform. It collects the practical server settings and setup workflow that Plaspy requires, explains what to prepare before connecting the device, and outlines how the SP9824 typically reports location and sensor telemetry into Plaspy dashboards. Use this page as a practical companion to the SP9824 product literature when preparing devices for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools, so always confirm device-specific procedures with the official SkyPatrol documentation.

## Configuration Overview

The goal of the configuration process is to prepare the SP9824 so it can send its location and environmental telemetry to Plaspy reliably. This includes entering Plaspy server details, selecting the correct transport if required, and validating that the tracker appears in the Plaspy platform. Because Plaspy uses the same port for all supported devices and performs automatic protocol detection, configuration focuses on the endpoint and connectivity rather than selecting different ports per device.

- Point the SP9824 to the Plaspy server endpoint to enable data ingestion
- Select UDP or TCP on the device if the device requires a transport choice
- Save and apply settings so the tracker initiates outbound reporting
- Validate connectivity and visibility in the Plaspy platform once the device is online
- Confirm environmental and tamper events are visible in Plaspy dashboards

## Plaspy Server Settings

When configuring the SP9824 for use with Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Supported transport protocols UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port, so set port 8888 for this tracker as well.

## Typical Requirements Before Setup

- Ensure the SP9824 has sufficient battery and is powered on for configuration
- Have physical access to the device or access to the vendor tool used to configure it
- Obtain the official SkyPatrol configuration method or software from the vendor
- Confirm the device has network connectivity appropriate for its communication method
- Have a Plaspy account or tenant ready to validate device reporting and assign the device record in the platform

## How This Tracker Connects to Plaspy

The SP9824 sends periodic location fixes and sensor telemetry to the Plaspy server endpoint so Plaspy can display live positions, alarms, and historical reports. Configuration points the device to the shared Plaspy endpoint and port so incoming messages are routed into the platform for parsing.

- The tracker is configured to report to the shared Plaspy server endpoint and port
- Location updates and environmental telemetry such as temperature and light are forwarded to Plaspy
- Tamper detection and alarm events are sent to Plaspy for immediate alerts and logging
- Plaspy receives the device messages and automatically detects the tracker protocol for correct parsing
- Visibility and historical reporting are available once Plaspy receives the device data

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method or software recommended by the vendor.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888. Remember that Plaspy uses the same port for all devices.
4. If the device requires choosing a transport, select UDP or TCP as appropriate for your deployment.
5. Apply or save the configuration changes in the vendor tool or device interface.
6. Restart the device if the vendor instructions require a reboot to apply network settings.
7. Validate that the device reports to Plaspy and that location and sensor telemetry appear in the platform.

## Example Configuration Commands

The exact configuration commands and method vary by SkyPatrol firmware and vendor tools. Some vendors provide a desktop or web configuration utility, while others may offer an SMS or provisioning interface. Because model specific commands are vendor provided and can change with firmware, consult the SkyPatrol documentation or the vendor configuration utility for exact command syntax and step by step command examples.

## Configuration Notes

- Firmware and hardware revisions can change configuration menus and command syntax; check the SkyPatrol documentation for your device revision.
- Choose UDP or TCP according to the device interface and network environment; Plaspy accepts both on port 8888 and will detect the protocol automatically.
- All devices in Plaspy use the same port 8888 so there is no per device port assignment needed in the platform.
- Confirm that environmental telemetry and tamper events are enabled on the device if you need those values in Plaspy.
- If your vendor tool uses placeholders for APN or connectivity settings, keep placeholders intact and replace them with your operator values as required by the vendor.

## Why Use Plaspy with This Configuration

Using the SP9824 with Plaspy enables low maintenance asset tracking with environmental telemetry and tamper alerts. The SP9824's long battery life and rugged design make it well suited for long-term deployments where frequent servicing is impractical. When configured to report to Plaspy's shared endpoint, organizations gain live visibility, historical location reporting, and event-driven alerts tied to temperature, light, and tamper conditions.

To learn more about Plaspy and its capabilities visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and configuration tools consult the official SkyPatrol documentation at https://www.skypatrol.com/ as manufacturer specifications and setup methods can change over time.
