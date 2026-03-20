---
slug: /riti/690_idu_400/configuration
id: 690_idu_400-configuration
sidebar_label: Configuration
title: Riti - 690 (IDU-400) Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Riti 690 IDU 400 showing Plaspy server values and practical steps for real time fleet tracking
keywords:
  - Riti 690 configuration
  - Riti 690 setup
  - Riti IDU 400 Plaspy
  - Riti GPS tracker configuration
  - Plaspy tracker setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - Riti 690 server configuration
  - GPS platform integration
  - real time tracking setup
---

# Riti - 690 (IDU-400) Configuration

This page covers the public configuration context for using the Riti Locator 690 (IDU-400) with Plaspy. It summarizes the Plaspy server settings that you will point the device to, explains the typical setup workflow, and highlights practical checks to validate connectivity and telemetry flow into Plaspy. The content is intended for technical installers and integrators preparing the device for integration with the Plaspy platform.

The Locator 690 is a GNSS enabled intelligent data unit with robust cellular telemetry and vehicle I O support, and it is Plaspy compatible out of the box. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side configuration methods can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this page as a practical public reference and confirm details with Riti documentation when needed.

## Configuration Overview

This configuration process prepares the Locator 690 to send telemetry to Plaspy so position and event data appear in the platform. The practical goal is to ensure the device is powered, has network access, and is configured to report to Plaspy using the shared server endpoint and port so Plaspy can ingest and display the device data.

- Point the device to the shared Plaspy server endpoint to allow telemetry uploads.
- Confirm transport mode and port are set to match Plaspy expectations so the device will connect reliably.
- Validate that the device has working cellular connectivity and any required SIM or network credentials.
- Verify the device appears in Plaspy and is reporting GNSS fixes and configured I O events.
- Test event reporting such as ignition, geofence, or tamper alerts to confirm end to end visibility in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Use these values when configuring the device server or APN settings that require a remote host, and remember that Plaspy accepts connections over either UDP or TCP on the same port while the platform determines the protocol automatically.

## Typical Requirements Before Setup

- Confirm the Locator 690 is powered and accessible with required installation wiring complete.
- Ensure a valid cellular SIM and active data plan compatible with the device regions and bands.
- Have access to the official Riti configuration method or software used for the device firmware revision.
- Gather Plaspy account access or fleet identifiers required by your operator to confirm the device in the platform.
- Prepare any peripheral wiring or sensors you plan to enable so event testing can be completed after configuration.

## How This Tracker Connects to Plaspy

The Locator 690 is configured to report its GNSS fixes and vehicle telemetry to the shared Plaspy server endpoint and port so the platform can process live location, alerts, and historical data. Once the device is pointed at Plaspy and network connectivity is available, the platform will ingest the device data and present it in dashboards, alerts, and reports.

- Device telemetry is directed to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be set to UDP or TCP depending on installer preference and firmware options.
- Plaspy automatically detects the tracker protocol so the same port 8888 is used for all supported devices.
- Position fixes, input events, and stored backfill records are sent to Plaspy for live tracking and historical replay.
- Event reporting such as tamper, ignition, or SOS triggers will be forwarded to Plaspy once the device is connected.

## Common Configuration Workflow

1. Access the official Riti configuration method or software appropriate to the device firmware and region.
2. Ensure the device has power and a working cellular SIM with data enabled.
3. Enter the Plaspy server host either as d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the remote port to 8888 which is the standard port used by Plaspy for all devices.
5. Choose UDP or TCP if the device requires a transport selection and save the setting.
6. Apply or save the configuration on the device and restart the tracker if the procedure requires a reboot.
7. Validate that the device reports to Plaspy by checking for incoming telemetry and GNSS fixes in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and syntax depend on the Riti configuration utility, firmware version, or SMS command set that your vendor provides. Because Riti supplies multiple configuration interfaces and firmware revisions, the public commands vary and are not listed here. Use the official Riti configuration tool or the device SMS command set provided by Riti to enter the Plaspy server values:

- Set server host to d.plaspy.com or 54.85.159.138
- Set server port to 8888
- Select transport UDP or TCP if required

If you have the specific Riti command list for your device firmware, apply the server host and port in the order required by those commands and verify with a status or position report.

## Configuration Notes

- Firmware and tool differences can change the exact steps or command syntax; always match the commands to your device firmware.
- Choosing UDP or TCP can depend on network reliability and transport requirements; Plaspy accepts both on port 8888 and detects the protocol automatically.
- All devices in Plaspy use the same port 8888 which simplifies large scale provisioning across mixed device fleets.
- If the device supports onboard storage and automatic backfill, confirm that it will retransmit stored records to Plaspy after connectivity is restored.
- Keep a copy of any device configuration backups and document firmware versions to simplify troubleshooting and future updates.

## Why Use Plaspy with This Configuration

Using the Riti Locator 690 with Plaspy delivers a practical path to real time fleet visibility and consolidated telemetry for operations teams. The tracker provides the GNSS fixes, sensor inputs, and event reports that Plaspy ingests to produce live maps, geofence alerts, historical playback, and operational analytics that help organizations monitor vehicles and respond to incidents quickly.

Learn more about Plaspy at https://www.plaspy.com and confirm device specific setup guidance and firmware behavior at the Riti website https://www.riti.com.tw/ since manufacturer configuration methods and device behavior can change over time.
