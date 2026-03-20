---
slug: /ulbotech/t362/configuration
id: t362-configuration
sidebar_label: Configuration
title: Ulbotech - T362 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the Ulbotech T362 with Plaspy including server settings transport and workflow
keywords:
  - Ulbotech T362 configuration
  - Ulbotech T362 setup
  - T362 Plaspy configuration
  - Plaspy server settings
  - OBD II GPS tracker setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - T362 firmware update
  - dual SIM tracker setup
  - real time tracking configuration
---

# Ulbotech - T362 Configuration

This page covers the public configuration context for using the Ulbotech T362 GPS tracker with Plaspy. It describes the shared Plaspy server settings, transport options, and the practical steps you will use to point a T362 to Plaspy for real time tracking and telemetry ingestion. Use this guidance together with the official Ulbotech documentation and your installation procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Exact manufacturer-side setup steps for the T362 can vary depending on firmware revision, hardware revision, installation type, and the vendor configuration tools used to provision the device.

## Configuration Overview

The goal of configuring a T362 for Plaspy is to prepare the device to send GNSS positions, OBD telemetry, and event records to Plaspy so the vehicle becomes visible and manageable within the platform. The public configuration focuses on the network endpoint, transport selection, and validating that the device is correctly reporting.

- Configure the device to use the Plaspy server endpoint so data is routed to Plaspy dashboards and alerts.
- Select the transport protocol the device supports (UDP or TCP) and set the required port.
- Verify SIM, APN, and GPRS connectivity so the T362 can maintain an uplink to Plaspy.
- Apply and save the manufacturer configuration and restart the device if required.
- Validate in Plaspy that the device is reporting positions, OBD telemetry, and event messages.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the T362. Plaspy uses the same port for all supported devices and the platform automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol at the backend

## Typical Requirements Before Setup

- Physical access to the vehicle OBD-II port to plug in the T362 and confirm power.
- Active SIM card(s) installed and internet enabled for GPRS data; the T362 supports dual SIM failover.
- Correct APN information for the SIM(s) so the device can establish a GPRS connection.
- Access to the official Ulbotech configuration method or software for the T362 (micro USB tool, vendor portal, or authorised configuration utility).
- A Plaspy account and permissions to add or validate devices in your Plaspy workspace.
- Device documentation or identification data supplied by Ulbotech for registration and troubleshooting.

## How This Tracker Connects to Plaspy

When configured to point at Plaspy, the T362 transmits GNSS position fixes, OBD-derived telemetry, and detected events over GPRS to the shared Plaspy server endpoint and port. Plaspy receives the traffic and maps the device protocol automatically so minimal per-device protocol selection is required on the server side.

- The T362 sends periodic position and telemetry packets to d.plaspy.com (or 54.85.159.138) on port 8888.
- You can configure the device to use UDP or TCP transport depending on preference or firmware options.
- Plaspy ingests the incoming stream and associates messages with the device for real time visibility and reporting.
- Event and telemetry messages from the T362 (for example driver behaviour or OBD data) arrive to the same shared Plaspy server endpoint.
- Dual SIM and auto APN behavior on the T362 help keep the device online so Plaspy receives continuous updates.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software for the T362 (for example the manufacturer USB utility, a vendor configuration tool, or authorised installer interface).
2. In the device server settings enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the device port to 8888. Note that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the device requires you to select a transport protocol.
5. Provide APN and SIM related settings appropriate for the installed SIM(s) and save the configuration.
6. Apply or save the configuration and restart the device if required by the manufacturer tool or firmware.
7. Validate that the T362 is reporting to Plaspy by checking device activity and incoming messages in your Plaspy account.

## Example Configuration Commands

The exact command set and syntax used to configure a T362 depends on the Ulbotech configuration tool or the device firmware version. Ulbotech provides configuration utilities and documented command strings in its official documentation; follow those manufacturer commands when available. If you use a serial, USB, or SMS based method from Ulbotech, consult the vendor guide for exact commands and placeholders for APN and server entries.

If you obtain specific public commands from Ulbotech or vendor documentation, present them to your installer or use them exactly as documented. This page does not include raw commands because manufacturer tools and firmware differ by version.

## Configuration Notes

- Firmware differences can affect available configuration options such as transport selection, APN auto detection, and FOTA behavior; confirm the device firmware version before applying settings.
- The T362 supports dual SIM failover and automatic APN handling; ensure both SIM slots are provisioned if continuous connectivity is required.
- Choosing TCP versus UDP may have implications for delivery guarantees and volume; pick the transport supported by your operational policies and supported by the specific firmware.
- Use the official Ulbotech configuration utility or authorised vendor tools to avoid configuration errors and to preserve warranty and remote management features.
- After applying configuration changes, verify connectivity by observing device messages in Plaspy and confirming telemetry and position updates.

## Why Use Plaspy with This Configuration

Using the Ulbotech T362 with Plaspy provides a straightforward way to convert OBD-sourced telemetry and GNSS fixes into actionable fleet insights. The shared Plaspy server settings and automatic protocol detection reduce per-device configuration overhead, while dual SIM and APN handling on the T362 help keep vehicles connected across coverage gaps. Together they support common fleet use cases such as live tracking, event alarms, and telemetry driven maintenance workflows.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup guidance and technical specifications on the Ulbotech website http://www.ulbotech.com/ before a production deployment.
