---
slug: /autoseeker/at_20/configuration
id: at_20-configuration
sidebar_label: Configuration
title: Autoseeker - AT-20 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Autoseeker AT-20 showing Plaspy server values and practical setup steps for vehicle tracking integration
keywords:
  - Autoseeker AT-20 configuration
  - Autoseeker AT-20 setup
  - AT-20 Plaspy configuration
  - Autoseeker GPS tracker configuration
  - AT-20 server settings
  - Autoseeker vehicle tracker setup
  - Plaspy GPS tracker setup
  - fleet tracking Autoseeker AT-20
  - Autoseeker telemetry integration
  - AT-20 GPS platform setup
---

# Autoseeker - AT-20 Configuration

This page documents the public configuration context for using the Autoseeker AT-20 GPS tracker with the Plaspy platform. It focuses on the practical, public settings you need to point an AT-20 at Plaspy and validate basic connectivity. Use this guide together with the AT-20 manufacturer documentation when making device specific changes.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol after the device connects. Exact manufacturer side setup steps and the user interface for configuring the AT-20 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so always review the device manual as you apply these settings.

## Configuration Overview

The goal of configuring an AT-20 for Plaspy is to prepare the device to send location and telemetry to the Plaspy ingestion endpoint, validate connectivity, and confirm that reported events appear in the Plaspy platform. This involves entering the Plaspy server address on the tracker, selecting a transport method if required, and verifying the device successfully registers and reports data.

- Configure the device to report position and event data to the Plaspy server endpoint.
- Verify cellular connectivity and APN settings on the tracker so it can reach Plaspy over LTE or GPRS.
- Choose and test the transport protocol option on the tracker if required by the firmware.
- Validate event reporting such as ACC, SOS, geofence and motion to ensure alerts show up in Plaspy.
- Confirm historical tracks and live updates appear in the Plaspy dashboard after setup.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the AT-20. All devices in Plaspy use the same port, and Plaspy attempts to detect the device protocol automatically after connection.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP depending on device firmware and preference
- Automatic protocol detection in Plaspy so the platform recognizes the tracker protocol after the device connects
- Note that all devices in Plaspy use the same port to simplify device configuration

## Typical Requirements Before Setup

- Confirm the AT-20 has a working SIM card and active data plan for LTE or GPRS access.
- Ensure the tracker has adequate power and is installed according to the manufacturer guidelines.
- Have access to the official Autoseeker configuration tool, SMS commands, or web interface required to change device server settings.
- Know the correct APN values for the SIM carrier when cellular data is required.
- Identify if your AT-20 firmware requires transport selection between UDP and TCP.
- Prepare to verify that the device appears in Plaspy after configuration using device telemetry or event reports.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AT-20 sends its GNSS positions and vehicle telemetry to the shared Plaspy server endpoint and port. Plaspy ingests those packets, automatically detects the tracker protocol, and maps incoming telemetry to the platform for visualization and alerts.

- The device transmits position reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport is chosen on the device side using UDP or TCP depending on firmware options and installation needs.
- Telemetry such as ACC state, SOS events, and motion detection is forwarded to Plaspy as event messages.
- Plaspy automatically detects the tracker protocol once packets arrive at the shared server port.
- After a successful connection, live location updates and historical tracks become visible in Plaspy.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software for the AT-20 as documented by the manufacturer.
2. Enter the Plaspy server hostname d.plaspy.com or alternatively the server IP 54.85.159.138 in the device endpoint settings.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP on the device if it requires a transport selection; both are supported by Plaspy.
5. Save or apply the configuration change in the device tool or via SMS command method if supported.
6. Restart the device if the firmware requires a reboot for network changes to take effect.
7. Validate that the AT-20 is reporting to Plaspy by checking incoming telemetry and live position updates on the Plaspy platform.

## Example Configuration Commands

The AT-20 manufacturer may supply configuration methods that include SMS commands, web tools, or a dedicated configuration utility. Exact commands and syntax vary by firmware and regional firmware variants. Because the AT-20 supports TCP/GPRS and SMS configuration, consult the Autoseeker user manual for the precise SMS command format or configuration utility steps to set server, port, and transport.

If you have a vendor supplied command set, apply the sequence to:
- set the server host to d.plaspy.com or 54.85.159.138
- set the server port to 8888
- set the transport mode to UDP or TCP if required
- save the configuration and reboot the device if necessary

Refer to the official Autoseeker configuration guide for exact command examples for your firmware version.

## Configuration Notes

- Firmware variations can change available configuration options and command syntax; always check the AT-20 manual for your device firmware revision.
- Some deployments prefer UDP for lower latency and smaller packet overhead while others select TCP for built in delivery confirmation; pick the transport that matches your operational priorities.
- SMS based configuration is commonly supported on devices with cellular radios and can be useful when remote access to a web tool is not available.
- Installer practices and accessory wiring for inputs like ACC and SOS affect what telemetry the tracker reports to Plaspy; verify wiring against Autoseeker installation guidance.
- Plaspy will attempt automatic protocol detection at the shared server port, but correct server and port settings are required on the device for initial connectivity.

## Why Use Plaspy with This Configuration

Using the Autoseeker AT-20 with Plaspy provides a straightforward way to bring 4G and fallback GPRS telemetry into a single tracking and fleet management platform. The AT-20's vehicle focused inputs and event reporting integrate with Plaspy so operators can monitor live locations, receive alerts, and analyze historical routes for operational insight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For device specific command syntax, firmware behavior, and the latest setup instructions verify details with the manufacturer at https://autoseekergps.com/ since device configuration methods and firmware features can change over time.
