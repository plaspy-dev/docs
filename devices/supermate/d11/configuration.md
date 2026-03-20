---
slug: /supermate/d11/configuration
id: d11-configuration
sidebar_label: Configuration
title: Supermate - D11 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Supermate D11 tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - Supermate D11 configuration
  - Supermate D11 setup
  - Supermate D11 Plaspy
  - Supermate GPS tracker configuration
  - Supermate D11 server settings
  - D11 tracker setup
  - Supermate D11 integration
  - Plaspy tracker configuration
  - vehicle tracking Supermate D11
  - asset tracker D11
---

# Supermate - D11 Configuration

This page provides public configuration context for using the Supermate D11 GPS tracker with the Plaspy fleet and asset tracking platform. It summarizes the practical server settings Plaspy requires and explains the typical steps you will perform on the device or in the vendor configuration tools so the D11 can report positions to Plaspy reliably.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary depending on firmware revision, hardware version, installation type, and the vendor configuration tool you use; consult the device documentation from the manufacturer for device-specific controls.

## Configuration Overview

This configuration process prepares the D11 to send its location and status updates to Plaspy so the device appears in your Plaspy account and the platform can process telemetry automatically.

- Point the D11 to the Plaspy server endpoint so it can establish a session with the platform.
- Configure the device transport and port so packets reach Plaspy reliably.
- Verify connectivity and telemetry reporting so the tracker is visible in Plaspy.
- Save and apply settings on the device and confirm the device restarts or reconnects if required.
- Validate event reporting and basic movement updates inside Plaspy once the device is online.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Supermate D11:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices so you will always use port 8888 when pointing a tracker to the platform.

## Typical Requirements Before Setup

- Ensure the D11 has a reliable power source and is powered on for configuration.
- Have a working SIM card with an active data plan and correct APN if the device uses cellular data for reporting.
- Obtain access to the official manufacturer configuration method such as the vendor web tool, mobile app, or SMS command list.
- Confirm the D11 firmware version and any vendor notes that affect server or transport settings.
- Prepare basic identifiers you will need in Plaspy such as the device IMEI or serial so you can register or locate the device in the platform.

## How This Tracker Connects to Plaspy

The Supermate D11 reports its location and device events to Plaspy by opening a connection to the shared Plaspy server endpoint and sending telemetry to the platform port. Once the device is pointed to Plaspy and has network access, Plaspy determines the tracker protocol automatically and ingests the data into the platform.

- The D11 is configured to report to the Plaspy server endpoint at d.plaspy.com or the equivalent server IP 54.85.159.138.
- All device traffic for Plaspy is sent to the same platform port, 8888.
- The device may be set to use UDP or TCP transport depending on its configuration options and network reliability.
- Plaspy auto-detects the tracker protocol so no special protocol selection is required on the platform side.
- Once connected, position updates and event messages are visible in Plaspy for monitoring and alerts.

## Common Configuration Workflow

1. Access the official Supermate configuration method such as the vendor web interface, configuration app, or manufacturer utility.
2. Enter the Plaspy server endpoint by specifying either d.plaspy.com or the IP address 54.85.159.138 in the server field.
3. Set the device port to 8888; remember Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection and network conditions dictate one option.
5. Apply or save the configuration changes in the device tool or send the configuration commands to the tracker.
6. Restart the device if the manufacturer instructions recommend a reboot for settings to take effect.
7. Validate that the D11 is reporting to Plaspy by checking for the device in your Plaspy account and confirming live location updates.

## Example Configuration Commands

The exact configuration commands and the method for sending them vary by Supermate firmware version and the vendor configuration tool you use. Manufacturers often provide several options such as a desktop configuration utility, a mobile app, or SMS command syntax. Because commands can differ between firmware releases and regions, refer to your Supermate D11 manual or vendor documentation for the precise command set and format.

If your device uses SMS for configuration, the vendor manual will list the required SMS commands and placeholders such as APN values. If you need to set APN values via a configuration tool, keep placeholders like {{apn}}, {{apnu}}, or {{apnp}} available and replace them with your SIM provider values when prompted.

## Configuration Notes

- Firmware and hardware revisions can change available configuration options; always check the D11 release notes before making changes.
- TCP may be preferred on unreliable networks where packet order and delivery matter, while UDP is common for low-latency location reporting; choose transport based on your network and device guidance.
- Installer practices may vary by region and vendor; some providers supply preconfigured devices ready for immediate Plaspy connection.
- Keep the device IMEI or identifier handy for quick mapping in Plaspy after the tracker first connects.
- Always consult the official Supermate documentation for SMS and command syntax if you plan to use text-based configuration methods.

## Why Use Plaspy with This Configuration

Using the Supermate D11 with Plaspy gives organizations and individuals a straightforward path to real time visibility, event monitoring, and operational oversight. Pointing the D11 to the shared Plaspy endpoint allows the platform to automatically detect the tracker protocol and ingest device telemetry so asset locations and status become available for tracking, geofencing alerts, and reporting.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest manufacturer setup details and firmware notes at the Supermate website http://www.gps-summit.com/. Device specific configuration methods and firmware behavior can change over time so check the manufacturer's documentation to confirm current instructions.
