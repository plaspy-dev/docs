---
slug: /fortuna_impex/disha_9320/configuration
id: disha_9320-configuration
sidebar_label: Configuration
title: Fortuna Impex - Disha 9320 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Fortuna Impex Disha 9320 tracker and Plaspy compatibility with server settings and setup workflow
keywords:
  - Fortuna Impex Disha 9320 configuration
  - Disha 9320 setup
  - Fortuna Impex GPS tracker configuration
  - Disha 9320 server configuration
  - Disha 9320 Plaspy setup
  - GPS tracker Plaspy configuration
  - vehicle tracking Disha 9320
  - Disha 9320 installation guide
  - fleet tracking Disha 9320
  - Plaspy tracker compatibility
---

# Fortuna Impex - Disha 9320 Configuration

This page covers the public configuration context for using the Fortuna Impex Disha 9320 tracker with Plaspy. It summarizes the shared Plaspy server settings you will need to enter on the device or in the vendor configuration tool, explains how the tracker typically communicates with the platform, and outlines a practical workflow to validate connectivity and visibility in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The Disha 9320 provides real-time and historical tracking plus SMS and email event reporting, and its enclosed GPS and GPRS antennas and simple two-wire power connection make physical installation straightforward; apply the Plaspy settings through the official Fortuna Impex configuration method you use for the unit.

## Configuration Overview

Configuring the Disha 9320 for Plaspy prepares the device to send location, event, and status data to the Plaspy platform so vehicles become visible for monitoring, alerts, and reporting. The focus of this process is to point the device at the Plaspy endpoint, ensure network connectivity, and confirm the tracker appears in your Plaspy account.

- Enter the Plaspy server endpoint and port on the Disha 9320 using Fortuna Impex tools or supported SMS commands.
- Configure transport (UDP or TCP) if the device requires explicit selection.
- Ensure the device has a working GPRS data connection and correct APN settings for your SIM.
- Validate the device reports location and events to Plaspy so it is visible in the platform.
- Save or apply changes and restart the device if required to activate the new server settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

Note: Plaspy uses the same port 8888 across all supported devices and automatically detects the tracker protocol so the device can communicate without manual protocol mapping on the server side.

## Typical Requirements Before Setup

- A mounted and powered Disha 9320 with proper connections to the vehicle battery as part of installation.
- Good GPS visibility to the sky for reliable location fixes.
- An active SIM card with data (GPRS) and SMS as required by the device and your configuration method.
- Correct APN and SIM settings as provided by your mobile operator.
- Access to Fortuna Impex configuration tools, SMS configuration commands, or the installer interface for the Disha 9320.
- Credentials and a Plaspy account or device assignment information so the unit can be associated with your organization on Plaspy.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Disha 9320 sends periodic position updates, event reports, and status messages to the shared Plaspy server endpoint and port. Plaspy receives these messages, detects the protocol automatically, and surfaces the device data in the platform for monitoring and alerts.

- The tracker is pointed to d.plaspy.com (or the IP 54.85.159.138) on port 8888.
- The device transmits using either UDP or TCP depending on the chosen transport.
- Plaspy automatically detects the tracker protocol and parses messages without separate protocol registration.
- Location updates and events become visible in Plaspy once the device successfully connects and authenticates.
- Administrators can confirm device activity in Plaspy after configuration and initial reporting.

## Common Configuration Workflow

1. Access the official Fortuna Impex configuration method or software for the Disha 9320 (vendor tool, web interface, or SMS command set).
2. Enter the Plaspy server address as d.plaspy.com or, if your tool requires it, the server IP 54.85.159.138.
3. Set the device port to 8888, as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the Disha 9320 requires an explicit transport selection.
5. Configure any required SIM APN and network settings so the device has GPRS connectivity.
6. Apply or save the configuration on the device and restart the unit if the tool or firmware requires a reboot.
7. Validate that the device is reporting to Plaspy by checking device activity and recent location updates in the Plaspy platform.

## Example Configuration Commands

The Disha 9320 can be configured via the official Fortuna Impex configuration software or via SMS commands depending on firmware and installer practice. Exact command syntax and available SMS commands vary by firmware, region, and the vendor tool you use. Because the command set can change with firmware, refer to Fortuna Impex documentation for precise SMS formats or console commands.

If your firmware or vendor guide includes SMS configuration, you will typically set the server and port and then restart the device. Keep the following in mind when using commands or SMS methods:
- Use the official Fortuna Impex command reference for exact syntax.
- When placeholders such as {{apn}} appear in commands, replace them with your mobile operator APN value.
- Verify a successful response or status message from the device after applying commands.

## Configuration Notes

- Firmware differences can change exact menus, command names, or SMS syntax; always check the device firmware version before following a command list.
- Choosing UDP or TCP affects delivery semantics; UDP is common for low-overhead position reports while TCP can add delivery assurance depending on device capability.
- Ensure APN and SIM settings are correct for your cellular provider so the Disha 9320 can establish a GPRS session.
- Antenna placement and GPS visibility affect fix quality; the Disha 9320 contains enclosed GPS and GPRS antennas but still requires a clear view of the sky.
- If configuration is performed by an installer, confirm they use the official Fortuna Impex configuration method to avoid vendor-specific deviations.

## Why Use Plaspy with This Configuration

Using the Disha 9320 with Plaspy provides organizations with a practical way to centralize real-time and historical location data, receive event notifications, and produce scheduled reports for fleet oversight. The shared Plaspy server settings simplify deployment because all supported devices use the same port and Plaspy auto-detects the protocol, reducing server-side configuration work.

To learn more about Plaspy and supported integrations, visit https://www.plaspy.com. For the latest device-specific instructions, firmware notes, and detailed command references for the Disha 9320, verify current information with the manufacturer at http://fortunaindia.com/ as setup methods and firmware behavior can change over time.
