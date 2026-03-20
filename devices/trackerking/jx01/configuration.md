---
slug: /trackerking/jx01/configuration
id: jx01-configuration
sidebar_label: Configuration
title: TrackerKing - JX01 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TrackerKing JX01 showing Plaspy server settings setup steps and practical configuration notes
keywords:
  - TrackerKing JX01
  - TrackerKing JX01 configuration
  - TrackerKing JX01 setup
  - JX01 tracker configuration
  - JX01 Plaspy setup
  - personal GPS tracker setup
  - Plaspy device configuration
  - GPS tracker server configuration
  - anti loss tracker configuration
  - portable asset tracking setup
---

# TrackerKing - JX01 Configuration

This page explains the public configuration context for using the TrackerKing JX01 with the Plaspy platform. It focuses on the server settings and practical steps you will typically apply when preparing the device for integration with Plaspy so the tracker reports location and event data into your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The JX01 is a compact rechargeable personal tracker with an 850 mAh battery, quad band cellular connectivity, and multiple alarm types; this guide shows how to point the device to Plaspy and validate visibility in the platform using public connection details.

## Configuration Overview

Configuring the JX01 for Plaspy is primarily about pointing the device to the Plaspy server endpoint, selecting the appropriate transport, and verifying the device successfully sends location and alarm events. The process prepares the tracker to join centralized monitoring, alerts, and mapping inside Plaspy.

- Enter the Plaspy server endpoint and port in the TrackerKing configuration method or companion app so the device can send reports to Plaspy.
- Choose the transport type supported by the device (UDP or TCP) and confirm the selection if required.
- Save the configuration and, if required, restart the JX01 to apply network changes.
- Validate connectivity by observing the first location or alarm event arrive in Plaspy dashboards.
- Confirm that movement, vibration, geofence, low battery, and voice monitoring events are visible in Plaspy after successful setup.

## Plaspy Server Settings

Use the following public Plaspy connection settings when configuring the TrackerKing JX01. These are the values Plaspy uses to receive device reports.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged JX01 battery and the device powered on and ready for configuration.
- Access to the TrackerKing official configuration method such as the companion app, web portal, or vendor tool.
- A working cellular connection for the device since the JX01 uses quad band GSM cellular for reporting.
- Network access from your configuration workstation or phone to confirm and validate reports in Plaspy.
- The device identifier (IMEI or similar) available to register or find the device in Plaspy after it begins reporting.
- Awareness of the device firmware version so you can follow the correct manufacturer guidance where steps differ by firmware.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the JX01 sends periodic location updates and event reports to the shared Plaspy server endpoint and port. Plaspy ingests those reports and makes location, alarm, and telemetry data available in dashboards and reporting tools.

- The JX01 is configured to report to the Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- The device can use either UDP or TCP for transport depending on configuration options; Plaspy will accept either.
- Location pings, low battery telemetry, movement and vibration alarms, and geofence events are forwarded into Plaspy for visibility.
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol-specific handler inside Plaspy.
- Once reporting, the device appears in Plaspy device lists and generates alerts and map updates as configured.

## Common Configuration Workflow

1. Access the official TrackerKing configuration method or companion app provided by the manufacturer.
2. Locate the server or remote reporting settings in the manufacturer tool.
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
4. Set the port to 8888 as the destination port for device reports.
5. Choose UDP or TCP if the device requires a transport selection.
6. Apply or save the configuration within the TrackerKing tool or app.
7. Restart the device if the manufacturer recommends a reboot to apply network settings.
8. Validate that the JX01 reports to Plaspy by confirming the device appears and sends initial telemetry to Plaspy dashboards.

## Example Configuration Commands

The JX01 can be configured using the manufacturer provided tools or companion app, and exact commands or SMS strings vary by firmware and regional model. Because manufacturer configuration methods differ, there are no universal public command lines to show here. In practice you will enter the Plaspy server values d.plaspy.com (or 54.85.159.138) and port 8888 in the TrackerKing configuration UI or vendor tool and choose UDP or TCP if prompted.

If your device or vendor provides SMS or CLI commands for remote setup, look for commands that set the server domain or IP and port. Preserve any placeholders the manufacturer uses such as {{apn}} or {{apnu}} when present and replace them with your carrier APN details following the vendor documentation.

## Configuration Notes

- Firmware differences can change the exact menu names and required steps in the TrackerKing configuration app; always verify steps against the device firmware guide.
- Choose UDP or TCP based on device support; Plaspy accepts both and automatically detects the protocol, but some installations prefer one transport for reliability in their network environment.
- All devices in Plaspy use the same port value 8888 so you only need to set port 8888 for the JX01 when pointing it to Plaspy.
- If the manufacturer offers SMS based setup or a companion app, use the official method provided by TrackerKing to avoid configuration mistakes.
- After applying settings, allow a few minutes for the first report to arrive in Plaspy and check for expected event types such as movement, geofence, low battery, and voice monitoring indications.

## Why Use Plaspy with This Configuration

Using the TrackerKing JX01 with Plaspy brings personal and portable asset tracking into a centralized monitoring environment. The JX01's rechargeable design and alarm capabilities make it a practical choice for anti-loss, personal safety, and temporary asset protection deployments, and Plaspy provides the mapping, alerts, and historical telemetry needed for timely response and operational oversight.

To learn more about Plaspy and how to manage device configurations at scale, visit https://www.plaspy.com. For the most current device specific setup steps, firmware notes, and configuration methods consult the TrackerKing manufacturer site at https://trackerking.cn/ since vendor instructions and firmware behavior can change over time.
