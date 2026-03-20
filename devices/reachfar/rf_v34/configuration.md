---
slug: /reachfar/rf_v34/configuration
id: rf_v34-configuration
sidebar_label: Configuration
title: Reachfar - RF-V34 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Reachfar RF V34 tracker integration with Plaspy server settings and setup workflow
keywords:
  - Reachfar RF V34 configuration
  - Reachfar RF V34 setup
  - RF V34 Plaspy configuration
  - RF V34 server settings
  - Reachfar GPS tracker configuration
  - livestock tracker setup
  - Plaspy tracker integration
  - 2G GPRS tracker configuration
  - RF V34 tracking platform setup
  - Reachfar device configuration
---

# Reachfar - RF-V34 Configuration

This page documents the public configuration context for using the Reachfar RF-V34 tracker with the Plaspy platform. It summarizes the shared Plaspy server settings and outlines the practical steps you will use on the manufacturer side to point your RF-V34 units at Plaspy for live location and telemetry reporting.

Plaspy uses a common server endpoint and port for all supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side steps to apply these server values can vary by RF-V34 firmware version, hardware revision, installation type, or vendor configuration tools, so use this guide alongside the Reachfar user manual for device specific commands and UI elements.

## Configuration Overview

This configuration process prepares the RF-V34 to transmit GPS, WiFi, and LBS based locations and device telemetry to Plaspy over 2G GPRS using TCP/IP. The goal is to configure the device so it reliably reaches the Plaspy ingest endpoint, then validate that positions and telemetry appear in your Plaspy account.

- Set the device network destination so the RF-V34 reports to the Plaspy server endpoint.
- Ensure the RF-V34 has valid cellular connectivity and required APN settings set by the installer.
- Choose transport type if required by the device interface and save the configuration.
- Verify the device appears online in Plaspy and confirm location and battery telemetry are reporting.
- Monitor solar charge and battery reports in Plaspy to plan maintenance and collar checks.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the RF-V34 on the manufacturer interface or SMS configuration tool:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport option the device requires
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for data ingestion

## Typical Requirements Before Setup

- RF-V34 powered and charged, with magnetic USB cable available for charging or initial setup
- Valid 2G SIM card installed and active with data enabled where required by your region
- Mobile network coverage for 2G GPRS at the deployment location
- Access to the official Reachfar configuration method such as the vendor web UI, app, or SMS command list
- Record of the device IMEI or unique identifier to confirm the device in Plaspy after configuration
- A Plaspy account or deployment credentials ready so you can confirm device visibility after setup

## How This Tracker Connects to Plaspy

When configured, the RF-V34 transmits position and telemetry packets over 2G GPRS using TCP/IP to the Plaspy server endpoint and port. Plaspy ingests those packets, automatically detecting the device protocol and making location, battery, and event data available in the platform.

- The device is set to report to d.plaspy.com or 54.85.159.138 and use port 8888 for data upload
- Transport may be selected as UDP or TCP on the RF-V34 when required by the configuration tool
- Plaspy automatically detects the tracker protocol so the same port and endpoint work for supported devices
- Positions, battery and solar charge status, and movement events are visible in Plaspy after successful reporting
- Regular reporting intervals and movement triggered reports are processed by Plaspy for real time and historical analysis

## Common Configuration Workflow

1. Access the official Reachfar configuration method or software provided by the vendor, such as the device web interface, vendor app, or documented SMS commands.
2. Locate the server or data center settings and enter the Plaspy endpoint using either d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888 as the destination port for data uploads.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure any required APN or SIM related parameters per your mobile operator and save the changes.
6. Apply or save the configuration and restart the device if the tool or device manual instructs to do so.
7. Validate that the RF-V34 reports to Plaspy by checking device status and incoming positions in your Plaspy account or deployment console.

## Example Configuration Commands

The RF-V34 manufacturer may provide SMS commands or a configuration app to set server, port and transport. Exact commands vary by firmware and vendor tool, so consult the Reachfar user manual or vendor command list for the precise syntax. In general you will supply the Plaspy server values shown above when the device asks for server domain or IP, port, and transport type.

Because RF-V34 configuration methods differ across firmware versions and regional builds, this page does not list a single universal command set. Refer to the Reachfar command guide for device specific SMS or tool commands.

## Configuration Notes

- Firmware matters: command names and menus can vary by RF-V34 firmware level or production batch, so confirm the device firmware before applying steps.
- TCP versus UDP: choose the transport type required by your provisioning tool; Plaspy accepts either on port 8888 and will detect protocol automatically.
- APN and SIM details are typically required for 2G GPRS data; set APN values according to the mobile operator used in your region.
- Power saving modes and reporting intervals affect how often the device uploads data to d.plaspy.com on port 8888; adjust according to tracking needs and battery life considerations.
- Confirm device IMEI and registration details so you can match the RF-V34 to the correct asset record in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Using the Reachfar RF-V34 with Plaspy provides a straightforward route to bring long duration livestock tracking and telemetry into a single platform. Plaspy ingests the RF-V34 data stream and presents location, battery and event information for monitoring herds, responding to geofence events, and analyzing historical movement patterns.

To learn more about Plaspy and how it processes device data visit https://www.plaspy.com. For the most current Reachfar RF-V34 setup commands, firmware details, and device specific instructions, verify information on the manufacturer website https://www.reachfargps.com/ as methods and firmware behavior can change over time.
