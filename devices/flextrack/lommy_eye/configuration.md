---
slug: /flextrack/lommy_eye/configuration
id: lommy_eye-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Eye Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Flextrack Lommy Eye showing Plaspy server settings and practical setup steps for reliable tracking
keywords:
  - Flextrack Lommy Eye configuration
  - Lommy Eye setup
  - Flextrack Lommy Eye Plaspy
  - Lommy Eye server configuration
  - Lommy Eye GPS tracker setup
  - Plaspy tracker configuration
  - Flextrack Lommy Eye setup guide
  - Lommy Eye UDP configuration
  - Lommy Eye TCP configuration
  - Lommy Eye asset tracking
---

# Flextrack - Lommy Eye Configuration

This page provides the public configuration context required to connect the Flextrack Lommy Eye tracker to the Plaspy platform. It explains the shared server settings Plaspy expects, how Lommy Eye typically reports location and events, and practical setup guidance you can use when preparing devices for Plaspy integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reports to the server. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this guide together with Flextrack documentation and your device specific provisioning method.

## Configuration Overview

This section summarizes why you must configure Lommy Eye for Plaspy and what the configuration achieves. The focus is to prepare the device to reach the Plaspy endpoint reliably and to validate that reports appear in the Plaspy platform.

- Configure the device to send scheduled and event driven reports to the Plaspy server endpoint.
- Ensure the device uses the shared Plaspy server host and port so Plaspy can ingest and automatically detect the tracker protocol.
- Select the transport method supported by the device firmware for best reliability for your installation scenario.
- Validate connectivity and visibility in Plaspy after saving settings to confirm location reporting and event notifications.
- Optionally enable motion triggered reporting or increase reporting frequency remotely for near real time tracking when movement is detected.

## Plaspy Server Settings

Use the public Plaspy server settings below when configuring Lommy Eye. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when the tracker connects.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device reports to the server

## Typical Requirements Before Setup

Before starting configuration, confirm these prerequisites to reduce troubleshooting and speed verification.

- Device battery charged or device powered and ready for configuration and first registration.
- Valid cellular connectivity and active SIM for the device if using cellular transmission, since Lommy Eye uses LTE Cat M1 with 2G fallback for network access.
- Access to the official Flextrack configuration method or tool required to change server, port and transport settings.
- Device identifier such as IMEI available so you can identify the device in Plaspy after it registers.
- A Plaspy account or access to the Plaspy project where the tracker will appear so you can validate incoming reports.
- If using SMS based configuration, ensure you have the correct SMS command format from Flextrack documentation.

## How This Tracker Connects to Plaspy

Lommy Eye reports location and event data to Plaspy using either UDP transmission or an available SMS based configuration path. Once configured, the device uses the shared Plaspy endpoint and port to deliver scheduled positions and event driven updates.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Transport can be selected as UDP or TCP depending on device firmware and installer preference.
- Plaspy receives scheduled reports and motion triggered reports and automatically determines the device protocol for parsing.
- Plaspy displays the incoming GNSS and event data in the dashboard for position history, alerts and recovery workflows.
- If connectivity is interrupted, Lommy Eye local logging keeps position history which will sync to Plaspy when service is restored.

## Common Configuration Workflow

Follow these practical steps when preparing a Lommy Eye unit for Plaspy. Exact commands and menu names depend on the Flextrack configuration tool or SMS syntax.

1. Access the official Flextrack configuration method or software as provided by the vendor or installer documentation.
2. In the server or endpoint settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Save or apply the configuration in the device tool and wait for confirmation of the change.
6. Restart the device if required by the firmware or advised in the Flextrack documentation.
7. Validate that the device reports to Plaspy by checking for the device IMEI or identifier in your Plaspy project and confirming incoming position reports.

## Example Configuration Commands

The exact configuration commands and SMS syntax vary by firmware and manufacturer tool. Flextrack devices typically support remote configuration via UDP and SMS, and the configuration method you use should follow Flextrack guidance. Because commands differ across firmware versions and provisioning tools, consult the Flextrack user manual for exact command strings or configuration file formats required to enter d.plaspy.com or 54.85.159.138 with port 8888.

If your vendor provides SMS configuration strings or a CLI, apply the equivalent of these public actions in the vendor format

- point the tracker to d.plaspy.com or 54.85.159.138
- set the port to 8888
- select UDP or TCP if required
- save and restart the device

Refer to Flextrack configuration instructions for exact SMS or command syntax.

## Configuration Notes

- Firmware differences can change menu names and exact command formats. Always confirm the correct syntax for your device firmware revision.
- Choosing UDP or TCP depends on network reliability and installer preference. UDP is common for low overhead reporting while TCP may be used for guaranteed delivery on some firmwares.
- Lommy Eye supports SMS based remote configuration as an alternative to UDP configuration tools. Use SMS only when authorised and when you have the correct command set from Flextrack.
- The Plaspy server uses the same port for all supported trackers which simplifies provisioning for fleets with mixed device models.
- Always confirm the device IMEI or identifier in Plaspy after configuration to avoid duplicate or missing entries.

## Why Use Plaspy with This Configuration

Using Lommy Eye with Plaspy gives organizations reliable remote visibility for battery driven assets by combining the tracker device capabilities with a platform that accepts shared server settings and auto detects tracker protocols. The shared Plaspy endpoint and port simplify provisioning across fleets while Plaspy processes scheduled and event driven reports for mapping, history, and alerting.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes and manufacturer instructions verify details on the Flextrack website https://flextrack.dk. Manufacturer specifications and setup methods can change over time so always confirm current information with Flextrack when applying configuration to devices.
