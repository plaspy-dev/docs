---
slug: /gotop/g02_4g/configuration
id: g02_4g-configuration
sidebar_label: Configuration
title: GOTOP - G02-4G Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide for GOTOP G02-4G to connect to Plaspy with required server settings and setup workflow
keywords:
  - GOTOP G02-4G configuration
  - GOTOP G02-4G setup
  - GOTOP G02-4G Plaspy
  - GOTOP tracker configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - GPS server configuration
  - tracker integration guide
---

# GOTOP - G02-4G Configuration

This page documents the public configuration context for using the GOTOP G02-4G tracker with Plaspy. It summarizes the practical server settings and the typical steps required to prepare the device so it reports location and event telemetry to the Plaspy platform. The G02-4G is compatible with Plaspy out of the box and supports 4G LTE connectivity with fallback options and SMS reporting as part of its delivery of position and alarm data.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device sends data to the ingestion endpoint. Manufacturer-side configuration steps, however, can vary by firmware version, hardware revision, installation method, and the vendor configuration tools used by installers. Always consider the device firmware and the manufacturer toolset when applying settings described here.

## Configuration Overview

Below is a concise explanation of the goal of configuring a G02-4G for use with Plaspy, followed by practical tasks you will perform during setup.

Configuring the G02-4G for Plaspy prepares the tracker to report position updates and event notifications to the Plaspy ingestion endpoint so the device becomes visible and manageable within Plaspy dashboards and reporting.

- Point the device to the Plaspy ingestion endpoint so telemetry reaches the platform.
- Select the transport type (UDP or TCP) if required by the device configuration tool.
- Set the shared Plaspy server port so the tracker and platform align.
- Validate connectivity and correct reporting using network and platform verification steps.
- Confirm event and alarm reporting for ACC, geo-fence, vibration, movement, and power alarms to ensure alerts appear in Plaspy.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the G02-4G. These settings are shared across supported devices and are required for the tracker to deliver telemetry to Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Note that Plaspy uses the same port for all devices and will identify the tracker protocol automatically based on incoming data.

## Typical Requirements Before Setup

Prepare the following items and checks before you start configuring the device for Plaspy.

- A powered and functional G02-4G device with access to the manufacturer configuration method or software.
- A working SIM card and mobile network coverage for 4G LTE with fallback to 3G/2G where required.
- Access to the device IMEI or identifier that may be needed to register or recognize the device in your fleet.
- Basic installation tools and safe vehicle power connection to ensure the tracker is powered in its intended operating environment.
- Access to firmware and vendor documentation for the G02-4G to confirm supported configuration interfaces and commands.
- A Plaspy account or administrative access to the Plaspy platform to validate that the device is reporting correctly.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the G02-4G sends its location and event data to the shared Plaspy ingestion endpoint and port so operators can view live positions and alarms in the platform.

- The G02-4G reports position updates and telemetry over its cellular connection to d.plaspy.com (or 54.85.159.138) using port 8888.
- The device can use UDP or TCP transport on port 8888 depending on the configuration you apply.
- SMS reporting is available as a fallback or redundancy mechanism where supported and configured.
- Event data such as ACC ignition state, geo-fencing triggers, vibration and movement alarms, low battery, and main power cut are forwarded to Plaspy for alerting and history.
- Plaspy receives and interprets the protocol automatically so the platform can begin processing data once the device is pointed to the server and port.

## Common Configuration Workflow

Follow these practical public steps to configure the G02-4G to report to Plaspy.

1. Access the official manufacturer configuration method or software supported by GOTOP for the G02-4G.
2. Enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138 in the server/host field.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose the transport protocol UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration in the device management tool or via the device command interface.
6. Restart or power cycle the device if the manufacturer tool or firmware requires a reboot to activate the new settings.
7. Validate that the device reports to Plaspy by confirming device visibility and incoming telemetry in your Plaspy account or with platform verification tools.

## Example Configuration Commands

The G02-4G may be configured with vendor tools, SMS commands, or a device configuration application provided by GOTOP. Exact commands and syntax vary by firmware and tool. Because manufacturer command sets differ across firmware revisions and vendor utilities, refer to the official GOTOP configuration guide for precise command examples.

If you have specific SMS or console commands published by the manufacturer, apply them using the order and syntax given by GOTOP and replace any placeholders such as [apn] with your mobile operator APN values. Keep manufacturer documentation handy to confirm exact command phrasing for your device firmware.

## Configuration Notes

- Firmware differences can change available configuration options and command syntax. Verify the device firmware version before making changes.
- Choose UDP or TCP based on installer preference and network conditions; Plaspy accepts either transport on port 8888 and detects the protocol automatically.
- Use SMS-based configuration only if supported and needed for remote or offline setup; SMS can provide a fallback when data networks are not available.
- Keep a record of device identifiers and the configuration applied so you can audit and troubleshoot reporting issues in Plaspy.
- Confirm antenna placement and vehicle wiring follow the manufacturer installation guide to ensure reliable cellular and GNSS reception.

## Why Use Plaspy with This Configuration

Integrating the GOTOP G02-4G with Plaspy delivers straightforward, real-time visibility for fleets and individual vehicle assets. The device’s rugged form factor, wide input voltage range, and support for 4G with fallback to 3G/2G make it a practical option for mixed vehicle deployments where reliable telemetry and event reporting (ACC, geo-fence, vibration, power loss) are important.

To learn more about Plaspy and how it handles device data, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware details, and manufacturer commands, verify the latest documentation on the GOTOP website https://www.gotop.cc/. Manufacturer specifications, setup steps, and firmware behavior can change over time, so confirm current instructions with the device vendor before finalizing deployments.
