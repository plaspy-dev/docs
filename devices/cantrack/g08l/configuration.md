---
slug: /cantrack/g08l/configuration
id: g08l-configuration
sidebar_label: Configuration
title: CanTrack - G08L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for integrating the CanTrack G08L tail light tracker with Plaspy using shared server settings
keywords:
  - CanTrack G08L configuration
  - CanTrack G08L setup
  - G08L server configuration
  - G08L Plaspy integration
  - CanTrack GPS tracker configuration
  - tail light GPS tracker setup
  - fleet tracking G08L
  - G08L OTA setup
  - vehicle tracker G08L
  - Plaspy tracker configuration
---

# CanTrack - G08L Configuration

This page provides the public configuration context for using the CanTrack G08L tracker with Plaspy. It describes the shared server settings Plaspy requires, practical preparatory steps, and the common workflow installers and technicians use to point the device to Plaspy so telemetry appears in the platform. The guidance here is intended for technical users preparing the G08L for integration with a fleet platform such as Plaspy.

Plaspy uses the same server endpoint and port across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps for the G08L can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this page as a practical integration reference and confirm device-specific procedures with CanTrack or the device provisioning tool you are using.

## Configuration Overview

Preparing the G08L to work with Plaspy is primarily about configuring its backend reporting parameters and verifying connectivity so that GNSS, motion, and status telemetry arrive at Plaspy in real time. Once the device reports successfully, Plaspy will ingest the data and expose it on live maps, alerting, and reporting dashboards.

- Point the device reporting endpoint to the Plaspy server (d.plaspy.com or 54.85.159.138) on the shared port 8888.
- Choose UDP or TCP transport on the device if the configuration requires a selection; Plaspy supports both.
- Save and apply the configuration, and restart the G08L if the manufacturer workflow requires a reboot to activate changes.
- Validate that GNSS and event telemetry are visible in Plaspy; Plaspy automatically detects the tracker protocol and uses the same port for all supported devices.
- Use OTA and manufacturer tools to keep firmware current and confirm any vendor-specific provisioning steps.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the G08L reporting parameters. These are the public values Plaspy uses for device ingestion:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Confirm the G08L has adequate power and is in normal operating state (charged internal battery or vehicle power present).
- Have access to the official CanTrack configuration method or vendor provisioning tool required to change server and transport settings.
- Ensure cellular connectivity is available for the device at the installation location so it can reach d.plaspy.com or 54.85.159.138.
- Obtain any credentials or provisioning details required by your vendor tool or installation script.
- Verify GNSS reception in a test location to confirm the device can obtain a fix before final installation.
- Prepare to restart the device if the configuration method requires a reboot to apply new server settings.

## How This Tracker Connects to Plaspy

The G08L uses its cellular uplink to send GNSS position, motion events, and device status to Plaspy. Devices configured to report to Plaspy target the shared server endpoint and port so that incoming telemetry is routed into the Plaspy ingestion system where the platform recognizes the tracker protocol automatically.

- The device forwards GNSS position reports and timestamps to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Motion and event data such as G-sensor alarms for harsh driving or crash detection are sent alongside position telemetry.
- Battery and device state information (charging status, battery level) is reported to Plaspy for remote monitoring.
- Plaspy ingests the stream and applies protocol detection so no per-device protocol selection in the platform is required.
- Using the shared port 8888 simplifies multi-device deployments because Plaspy receives all device traffic on the same port.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or manufacturer software for the G08L (web UI, local tool, SMS or vendor provisioning tool as provided).
2. In the server settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the reporting port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the device configuration requires a transport selection.
5. Apply or save the configuration in the device provisioning tool or device UI.
6. Restart the G08L if required by the vendor instructions to activate the new reporting settings.
7. Validate that the device reports to Plaspy by checking the Plaspy platform for incoming telemetry and confirming the device appears online.

## Example Configuration Commands

The exact commands and the method used to set the server domain, server IP, port, and transport on the G08L depend on the CanTrack provisioning method and firmware. Manufacturers may provide a configuration application, SMS command set, or a USB/serial provisioning tool. For Plaspy integration, you will set the server to d.plaspy.com or 54.85.159.138 and the port to 8888, selecting UDP or TCP if the device requires a transport choice. Consult your CanTrack documentation or provisioning tool for the precise command syntax and order.

## Configuration Notes

- Firmware differences and hardware revisions may change the provisioning steps or available configuration commands; always check the device firmware version before applying instructions.
- TCP and UDP are both supported by Plaspy; choose the transport required by your provisioning tool or network environment. Plaspy will automatically detect the protocol used by the tracker.
- Because Plaspy uses the same port across devices (8888), pointing multiple devices to d.plaspy.com or 54.85.159.138 simplifies large deployments.
- Use OTA firmware updates (when available) to keep the G08L current; some configuration methods are added or changed across firmware releases.
- Rely on official CanTrack documentation and vendor tools for the exact configuration commands and any device-specific safeguards.

## Why Use Plaspy with This Configuration

Configuring the CanTrack G08L to report to Plaspy provides discreet, continuous tracking and event reporting that feeds directly into Plaspy dashboards, alerts, and fleet analytics. For operations that need covert installation, reliable GNSS plus motion-based event detection, and centralized visibility, the G08L paired with Plaspy delivers actionable telemetry for route monitoring, incident analysis, and maintenance planning.

To learn more about Plaspy and how it ingests device telemetry, visit https://www.plaspy.com. For the latest device-specific configuration instructions, firmware notes, and vendor support resources for the CanTrack G08L, verify details at the manufacturer website https://www.cantrackgps.com/ as setup methods and firmware behavior may change over time.
