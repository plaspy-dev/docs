---
slug: /cantrack/gf20_mini/configuration
id: gf20_mini-configuration
sidebar_label: Configuration
title: CanTrack - GF20-Mini Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack GF20 Mini showing Plaspy compatibility server settings and setup workflow for reliable tracking
keywords:
  - CanTrack GF20 Mini
  - GF20 Mini configuration
  - GF20 Mini setup for Plaspy
  - CanTrack configuration
  - GF20 Mini server settings
  - Plaspy tracker setup
  - GPS tracker configuration
  - Asset tracker configuration
  - Vehicle tracking setup
  - GF20 Mini integration
---

# CanTrack - GF20-Mini Configuration

This page documents the public configuration context for using the CanTrack GF20-Mini with Plaspy. It summarizes the shared Plaspy server settings you will use when integrating the GF20-Mini, highlights practical setup steps, and explains what to verify before activating the device in your Plaspy account. Use this guide as a technical reference for basic configuration and verification; it is not a replacement for the device user manual.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the tracker reports. Manufacturer side steps for configuring the GF20-Mini can vary by firmware version, hardware revision, geographic market, and the configuration tool or SMS commands used by the vendor. Follow the manufacturer documentation in parallel with these Plaspy focused steps to ensure a correct and secure integration.

## Configuration Overview

Configuring the GF20-Mini for Plaspy prepares the device to send location and event data to a single Plaspy endpoint so the platform can display live position, history, and alerts. The process typically involves telling the tracker where to report, selecting the transport method if required, and validating that messages arrive on the Plaspy server.

- Point the tracker to the Plaspy server endpoint so position and event messages route into your Plaspy account.
- Choose the transport method supported by the device, UDP or TCP, and set the correct port.
- Save and apply the tracker configuration and restart the device if needed to begin reporting.
- Validate connectivity by confirming the device appears in Plaspy and sends location updates and event notifications.
- Keep device firmware and vendor configuration tools in mind because specific SMS or software commands can vary.

## Plaspy Server Settings

Use the following Plaspy server values when configuring the GF20-Mini. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device sends data.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Confirm the GF20-Mini has a charged internal battery or is powered according to the device instructions.
- Ensure the device has cellular service and a valid SIM where required for SMS or GPRS reporting as supported by the unit.
- Obtain access to the official CanTrack configuration method for this model such as vendor SMS commands, manufacturer software, or a configuration tool provided by your reseller.
- Know the device IMEI and any access credentials that the vendor uses for device management.
- Choose the installation location so the device can get a GNSS fix and maintain cellular connectivity for reporting to Plaspy.
- Have access to Plaspy account details to verify the device appears and reports properly after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GF20-Mini sends location fixes and event messages to a single Plaspy server endpoint and port so Plaspy can process and display telemetry, alerts, and history. The platform receives data and correlates it with configured geofences, alerts, and fleet dashboards.

- The tracker is set to report to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138.
- Reporting uses port 8888 which is the common Plaspy port across supported devices.
- Transport can be UDP or TCP depending on device configuration options and network conditions.
- Plaspy automatically detects the tracker protocol when data arrives so you do not need to select a protocol in the Plaspy platform.
- Event notifications like geo-fence triggers, vibration alarms, and low battery messages are forwarded to Plaspy as part of the device data stream.

## Common Configuration Workflow

1. Access the official CanTrack GF20-Mini configuration method provided by the manufacturer or reseller. This may be SMS commands, a Windows or web tool, or another vendor tool.
2. Enter the Plaspy server address by specifying either d.plaspy.com or the server IP 54.85.159.138 in the tracker server fields.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP as the transport type if the device requires a transport selection.
5. Apply or save the configuration using the manufacturer tool or command sequence.
6. Restart the device if the configuration method or device manual instructs to do so.
7. Validate that the device reports by checking for the device and recent positions in Plaspy and verifying that event notifications appear as expected.

## Example Configuration Commands

The GF20-Mini can be configured using manufacturer provided methods which vary by firmware and vendor. The exact command syntax may differ and is usually provided in the device manual or by your supplier. Because configuration commands and SMS formats are vendor and firmware dependent we do not list a universal command set here. Use the CanTrack documentation or vendor-provided SMS templates to:

- Set the server address to d.plaspy.com or 54.85.159.138
- Set the reporting port to 8888
- Choose UDP or TCP transport if required
- Save and restart the device

If your vendor provides SMS commands or a configuration file, apply those commands in the order recommended by CanTrack and then verify reporting to the Plaspy server.

## Configuration Notes

- Firmware differences can change SMS command formats and available options. Always check the GF20-Mini documentation for your firmware revision.
- Choose UDP for simpler packet delivery on lossy networks, or TCP where session reliability is required, guided by your vendor recommendations and network conditions.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the incoming tracker protocol, simplifying server-side setup.
- If you configure the tracker by SMS, keep a record of any placeholder values such as APN settings provided by the vendor and replace placeholders accordingly.
- Verify stored position sync after connectivity is restored so onboard memory recorded during outages is uploaded to Plaspy.

## Why Use Plaspy with This Configuration

Using the CanTrack GF20-Mini with Plaspy gives organizations a compact, discreet asset tracking solution that feeds position, event, and alert data into a consolidated platform. This enables real-time visibility, historical reporting, and alerting for anti-theft workflows, short-term vehicle monitoring, and asset security without complex per-device server configuration.

To learn more about Plaspy and how it can centralize your device telemetry visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and support information verify details on the manufacturer website https://www.cantrackgps.com/. Manufacturer specifications and setup procedures can change over time so always confirm current instructions with the official CanTrack documentation.
