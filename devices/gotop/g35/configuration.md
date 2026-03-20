---
slug: /gotop/g35/configuration
id: g35-configuration
sidebar_label: Configuration
title: GOTOP - G35 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP G35 integration with Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP G35 configuration
  - GOTOP G35 setup Plaspy
  - G35 tracker configuration
  - Plaspy tracker setup
  - animal GPS tracker configuration
  - collar GPS tracker setup
  - G35 server configuration
  - G35 Plaspy integration
  - GPS platform setup
  - GOTOP tracker configuration
---

# GOTOP - G35 Configuration

This page covers the public configuration context for using the GOTOP G35 animal GPS tracker with Plaspy. It explains the shared server settings you will point the device to, describes the practical steps commonly used to integrate the tracker into Plaspy, and highlights what to verify before and after configuration. The guidance is based on the tracker description and Plaspy server settings that are publicly available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The G35 supports SMS and LTE data feeds and typically uses the manufacturer app or backend for configuration, so always confirm the precise configuration workflow for your unit and firmware revision.

## Configuration Overview

Configuring the G35 for Plaspy prepares the device to send location and status data to the central Plaspy endpoint and ensures the unit appears in your Plaspy dashboard and alerting workflows. The core of the setup is pointing the device to Plaspy’s server using the correct address, transport and port, then validating connectivity and event reporting.

- Point the device to the Plaspy endpoint so realtime telemetry is delivered to Plaspy.
- Configure transport and port settings on the device or in the manufacturer tool to use the shared Plaspy port.
- Verify APN and mobile connectivity when using LTE data so messages successfully reach Plaspy.
- Confirm alarms and geofence events are forwarded to Plaspy and visible in the platform.
- Validate historical waypoint upload or sync if you require route playback in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will detect the device protocol automatically when the device sends telemetry to the configured server endpoint.

## Typical Requirements Before Setup

- Fully charged device battery or power connected for initial configuration and tests.
- Active micro SIM card with a valid data plan if using LTE data for telemetry, or SMS capability when using SMS-based messaging.
- Access to the official GOTOP manufacturer configuration method such as the vendor app, web backend, or SMS command list.
- Device identifier details available (IMEI or device ID) for any registration tasks in Plaspy.
- A Plaspy account and knowledge of how to add or verify a device in your Plaspy workspace.
- A simple test area with reliable mobile coverage to validate live reporting.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the G35 sends periodic location and status messages to the shared Plaspy server endpoint and port where Plaspy ingests telemetry and generates alerts. Plaspy then exposes location updates, alarms, and device status in your centralized dashboard and notification rules.

- The G35 reports position and telemetry via LTE data to d.plaspy.com or 54.85.159.138 on port 8888.
- If the device supports transport selection, it can use UDP or TCP to communicate with Plaspy.
- Plaspy automatically detects the protocol used by the tracker when it receives messages on the shared port.
- Alarms such as geofence, movement, and low battery are forwarded to Plaspy for alerting.
- Device waypoint memory and historical logs can be synchronized through the manufacturer tools and made visible in Plaspy for route playback.

## Common Configuration Workflow

1. Access the official GOTOP configuration method for your G35 unit, either the manufacturer app, web backend, or SMS command interface.
2. Enter the Plaspy server address by specifying d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the destination port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires selecting a transport protocol.
5. Configure APN and mobile network parameters in the manufacturer tool if the tracker uses LTE data.
6. Apply or save the configuration and, if required by the manufacturer, restart the device to apply changes.
7. Validate that the device reports to Plaspy by confirming position updates and alarm events appear in your Plaspy dashboard or device list.

## Example Configuration Commands

The exact configuration commands and SMS syntax for the GOTOP G35 vary by firmware and manufacturer tools. Because manufacturer command sets differ and the G35 is commonly configured via the provided app or backend, the precise command strings are not included here. Consult the GOTOP user manual or vendor SMS command reference for device-specific command examples and syntax.

If you prefer SMS-based configuration for initial testing, refer to the GOTOP documentation for the correct SMS templates and parameters required to set server address, port, APN, and transport protocol.

## Configuration Notes

- Firmware and hardware revisions can change the available configuration options and command syntax; confirm the correct method for your unit and firmware build.
- When choosing between UDP and TCP, consider network behavior and packet delivery preferences; Plaspy will auto detect the protocol used when messages arrive on port 8888.
- APN and mobile network parameters are often required for LTE data operation; these are set via the manufacturer tool or SMS commands depending on the device.
- SMS-based setup is commonly supported by GOTOP devices for basic server and alarm configuration, but LTE data is required for realtime telemetry and richer integration with Plaspy.
- Keep a test plan to verify both position updates and alarm notifications in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Using the GOTOP G35 with Plaspy provides a centralized way to monitor animal deployments with long-duration hardware built for harsh outdoor use. Pointing the G35 to Plaspy’s shared server endpoint ensures location updates, alarms, and status are consolidated into a single platform where you can manage notifications, historical playback, and operational oversight.

To learn more about Plaspy and how it supports compatible trackers like the G35, visit https://www.plaspy.com. For the latest device-specific setup steps, firmware notes, and official command references for the GOTOP G35, verify details with the manufacturer at https://www.gotop.cc/ as manufacturer specifications and configuration methods can change over time.
