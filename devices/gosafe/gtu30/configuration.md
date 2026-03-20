---
slug: /gosafe/gtu30/configuration
id: gtu30-configuration
sidebar_label: Configuration
title: Gosafe - GTU30 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe GTU30 with Plaspy including server settings, setup checklist, and practical integration steps
keywords:
  - Gosafe GTU30 configuration
  - Gosafe GTU30 setup
  - GTU30 Plaspy integration
  - GTU30 server configuration
  - GTU30 tracking software setup
  - GTU30 GPS tracker configuration
  - fleet tracking GTU30
  - GTU30 telemetry setup
  - Plaspy device configuration
  - vehicle tracker GTU30
---

# Gosafe - GTU30 Configuration

This page covers the public configuration context for using the Gosafe GTU30 tracker with Plaspy. It explains the shared server settings Plaspy requires, what to check on the device before integration, and the high-level steps most installers will follow to bring the GTU30 online in Plaspy. Content here is practical and focused on the public values you need to point the device at Plaspy and validate connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tools your vendor provides. The GTU30 is Plaspy compatible out of the box and supports LTE CAT1 and 2G with TCP and SMS modes, so the common integration path is to set the device to report to the Plaspy endpoint and confirm it appears in the platform.

## Configuration Overview

Preparing the GTU30 for Plaspy focuses on directing its telemetry to Plaspy’s shared server, validating network and GNSS performance, and confirming that the device is visible and reporting correctly in the Plaspy platform.

- Configure the device server address and port so the tracker sends GNSS fixes and events to Plaspy.
- Select the appropriate transport (UDP or TCP) on the device if required by the configuration tool.
- Verify cellular connectivity, SIM data access, and GNSS fix quality before commissioning.
- Confirm the GTU30 reports accelerometer events, trip detections, and status messages to Plaspy for operational monitoring.
- Validate the device appears in Plaspy and that live updates and historical traces are available.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the GTU30. These are the concrete values you will enter into the device via the manufacturer tool, SMS command set, or configuration portal:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged and correctly installed GTU30 with battery or vehicle power connected.
- An active cellular SIM with data enabled and any required APN provisioning applied.
- Access to the official Gosafe configuration method or vendor tool for the GTU30 (software, SMS commands, or configuration interface).
- The device IMEI or serial number available for registration and verification in Plaspy.
- A clear view for GNSS fixes during initial testing to confirm satellite lock and accurate positioning.
- Knowledge of whether you will use TCP or UDP for reporting if the device requires an explicit transport selection.

## How This Tracker Connects to Plaspy

The GTU30 transmits GNSS fixes, accelerometer events, and status messages over cellular connectivity to Plaspy. Once configured to point to the Plaspy server and port, the device’s telemetry will be ingested and displayed for real-time tracking and event analysis.

- The tracker sends periodic GNSS position updates to the Plaspy endpoint on d.plaspy.com or 54.85.159.138 using port 8888.
- Accelerometer-based events such as crash or harsh driving notifications are reported to Plaspy for immediate alerts.
- Trip detection and ignition-like signals are transmitted to support mileage and driver behavior features in the platform.
- Plaspy receives device data over TCP or UDP and uses automatic protocol detection to interpret the incoming tracker protocol.
- Once reporting is active, the device becomes visible in Plaspy for live map location, history playback, and event reporting.

## Common Configuration Workflow

1. Access the official Gosafe GTU30 configuration method (manufacturer software, SMS command set, or vendor portal) as provided by your supplier.
2. Enter the Plaspy server address by using either d.plaspy.com or the IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 (Plaspy uses this same port for all devices).
4. Choose UDP or TCP as the transport if the GTU30 configuration requires an explicit selection.
5. Apply or save the configuration and confirm the settings were accepted by the device.
6. Restart the GTU30 if the manufacturer instructions require a reboot for settings to take effect.
7. Validate the device reports to Plaspy by checking visibility in the platform and confirming live position updates and event messages.

## Example Configuration Commands

The exact commands and configuration syntax for the GTU30 are provided by Gosafe and may vary by firmware and the configuration method you use (SMS versus a PC tool). Because manufacturer command sets differ, use the official Gosafe instructions or vendor-supplied configuration tool to enter the Plaspy server settings (d.plaspy.com or 54.85.159.138) and port 8888, and to choose UDP or TCP where applicable.

If your installer tool or vendor provides SMS commands, follow those exact SMS formats from Gosafe rather than generic examples. For PC or mobile configuration tools, enter the server domain or IP and the port 8888 into the server configuration fields and save per the vendor interface.

## Configuration Notes

- Firmware and vendor tools can change command syntax and available options; always prefer the latest Gosafe documentation for exact commands.
- If the GTU30 supports both SMS and data modes, be aware that SMS may be used for fallback or initial configuration but data reporting over LTE/2G and TCP/UDP is required for full Plaspy telemetry.
- Choosing TCP versus UDP may affect reliability and retransmission behavior; test both transport modes in your installation environment if the device allows selection.
- Confirm APN and SIM data connectivity before claiming a device is online; cellular data issues are the most common cause of failed reporting.
- Keep a record of IMEI and configuration details for each unit to aid troubleshooting and platform registration.

## Why Use Plaspy with This Configuration

Using the GTU30 with Plaspy gives operators a quick path to real-time location, event-driven alerts, and driving behavior telemetry with minimal installation effort. The GTU30’s compact, battery-backed design and multi-constellation GNSS combine with Plaspy’s server-side ingestion and automatic protocol detection to provide actionable visibility across fleets, rental vehicles, and telematics programs.

Learn more about how Plaspy supports device integrations and fleet workflows at https://www.plaspy.com. Manufacturer specifications, firmware behavior, and configuration methods can change over time, so verify the latest device-specific setup details and command sets on the Gosafe website https://gosafesystem.com/ before final deployment.
