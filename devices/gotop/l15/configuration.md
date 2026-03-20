---
slug: /gotop/l15/configuration
id: l15-configuration
sidebar_label: Configuration
title: GOTOP - L15 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP L15 wearable GPS tracker with Plaspy server settings and practical setup steps
keywords:
  - GOTOP L15 configuration
  - GOTOP L15 setup
  - GOTOP L15 server configuration
  - GOTOP L15 Plaspy
  - GOTOP L15 GPS tracker
  - Plaspy tracker setup
  - Plaspy server configuration
  - wearable GPS tracker setup
  - eldercare GPS tracker configuration
  - L15 tracking software setup
---

# GOTOP - L15 Configuration

This page provides the public configuration context for using the GOTOP L15 pendant GPS tracker with the Plaspy platform. It explains the shared Plaspy server settings you will use when provisioning the device, practical setup considerations, and how the L15 integrates its location and emergency events into Plaspy for caregiver monitoring and alerting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device sends data to the server. Exact manufacturer setup steps for the L15 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so this guide focuses on the common public values and the practical workflow to get the L15 reporting into Plaspy.

## Configuration Overview

This section describes the practical goal of configuring an L15 for Plaspy. The overall objective is to prepare the pendant so it reliably communicates location, SOS alerts, and basic telemetry to the Plaspy ingestion endpoint and appears in the Plaspy dashboard.

- Configure the device to send its data to the Plaspy server endpoint and port so Plaspy can ingest GPS and telemetry.
- Verify cellular and SIM provisioning so the L15 can establish a 4G data link before testing server connectivity.
- Choose the device transport option where required and point it at the Plaspy destination to enable live tracking and alerts.
- Validate that SOS events and periodic telemetry appear in Plaspy so caregivers can receive alerts and location updates.
- Confirm device power and battery reporting so device availability is visible in the Plaspy interface.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the GOTOP L15 for Plaspy integration.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used on port 8888 depending on tracker options
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and the platform will detect the correct protocol automatically after the first data packets arrive.

## Typical Requirements Before Setup

- A charged and operational L15 device with a functioning nano SIM installed and active data service
- Access to the official GOTOP configuration method or software for the L15 (SMS commands, web tool, or vendor app as provided by the manufacturer)
- Knowledge of the device IMEI or identifier so you can match the device in Plaspy once it connects
- A stable network connection or local access to the unit for the initial configuration step
- Basic familiarity with selecting transport type UDP or TCP if the configuration tool requires that choice

## How This Tracker Connects to Plaspy

When configured, the L15 sends location and event data to the shared Plaspy endpoint so caregivers and monitoring systems can receive live updates and alerts. The device uses its cellular link and optional hybrid positioning to supply Plaspy with coordinates, SOS notifications, and telemetry.

- The L15 is pointed to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138
- All traffic is sent to port 8888 on the Plaspy endpoint
- Transport may be configured as UDP or TCP on the device; Plaspy accepts both and detects the protocol automatically
- SOS events, periodic location reports, and basic telemetry are delivered to Plaspy for event handling and alerting
- Once data reaches Plaspy, the device should appear in the Plaspy dashboard and start reporting status and location history

## Common Configuration Workflow

Follow this practical workflow to configure an L15 to work with Plaspy.

1. Access the official GOTOP L15 configuration method or software provided by the manufacturer, such as the vendor app, web interface, or SMS command set.
2. Enter the Plaspy destination by specifying either the server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 as the destination port for data reporting.
4. Choose UDP or TCP as the transport if the L15 configuration interface requires a transport selection.
5. Apply or save the configuration changes in the manufacturer tool or device menu.
6. Restart the device if the manufacturer instructions require a reboot to apply network settings.
7. Validate that the device reports to Plaspy by checking for the device in the Plaspy dashboard and confirming receipt of a location or status update.

## Example Configuration Commands

No public model configuration commands were provided for the L15 in the source data for this page. The exact configuration commands and the toolset you use will depend on GOTOP firmware and the vendor tooling they supply. Common manufacturer methods include SMS command strings, a desktop configuration utility, or a mobile provisioning app.

If your vendor provides SMS commands or a command list, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 and port 8888 according to the manufacturer syntax, and specify UDP or TCP if required. Always follow the order the vendor documentation specifies when applying server and transport settings.

## Configuration Notes

- Firmware and hardware revisions can change configuration menus and supported commands; always check the GOTOP documentation for your specific L15 firmware.
- If the L15 supports both UDP and TCP, choose based on your operational needs; Plaspy accepts both and will detect protocol automatically.
- Because Plaspy uses the same port for all devices, you only need to set port 8888 on your device regardless of model.
- When using SMS provisioning, ensure the device has sufficient signal and the SIM is provisioned for outbound messages and data as required by the vendor method.
- Keep a record of device identifiers such as IMEI to match the physical unit to the device listing in Plaspy after initial connection.

## Why Use Plaspy with This Configuration

Using the GOTOP L15 with Plaspy provides a simple integration path for eldercare and personal emergency response programs that need real time location, SOS alerts, and basic telemetry in a centralized platform. By configuring the L15 to point at the shared Plaspy endpoint and port, care teams can consolidate alerts and tracking data for monitoring, follow up, and reporting.

Learn more about Plaspy and its device integration capabilities at https://www.plaspy.com. For the latest device specific instructions, firmware details, and configuration tools for the GOTOP L15, verify current information on the manufacturer site https://www.gotop.cc/. Manufacturer specifications and setup methods can change over time so checking the official GOTOP documentation ensures you follow the most current configuration steps.
