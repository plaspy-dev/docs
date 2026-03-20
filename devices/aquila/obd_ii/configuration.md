---
slug: /aquila/obd_ii/configuration
id: obd_ii-configuration
sidebar_label: Configuration
title: Aquila - OBD II Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Aquila OBD II tracking with Plaspy including required server settings and practical setup steps
keywords:
  - Aquila OBD II configuration
  - Aquila OBD II setup
  - Aquila OBD II Plaspy
  - Plaspy GPS tracker configuration
  - OBD II GPS tracker configuration
  - vehicle diagnostics tracker setup
  - fleet management tracker setup
  - OBD II Plaspy configuration
  - Aquila tracker server settings
  - Aquila OBD II guide
---

# Aquila - OBD II Configuration

This page documents the public configuration context for using the Aquila OBD II tracker with the Plaspy platform. It collects the practical, platform side settings you need to apply so the device can deliver location and OBD data to Plaspy for visibility and analysis. Use this guide alongside the device manufacturer documentation for a complete setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. This page focuses on the Plaspy endpoint information and the common workflow you will follow when integrating the Aquila OBD II tracker.

## Configuration Overview

The goal of configuration is to prepare the Aquila OBD II to communicate reliably with the Plaspy platform so vehicle location and onboard diagnostics are visible to your account. Configuration typically involves setting the device reporting server, confirming transport options, and validating that the tracker sends data to Plaspy.

- Point the tracker to the Plaspy server endpoint so GPRS data is forwarded to Plaspy for processing
- Choose the transport method supported by the device and Plaspy, UDP or TCP, on the shared Plaspy port
- Verify cellular connectivity and APN settings so the tracker can open a GPRS session to the server
- Apply and save configuration on the device and confirm it reports location and OBD parameters to Plaspy
- Validate that Plaspy receives and recognizes the device protocol so telemetry and events appear in the platform

## Plaspy Server Settings

Set the Aquila OBD II to report to the Plaspy server using these public settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol when the device connects

Note that all devices in Plaspy use the same port, so you should always use port 8888 for device reporting to Plaspy.

## Typical Requirements Before Setup

- Physical access to the vehicle OBD II port to connect and power the tracker
- A compatible active SIM with data and correct APN configured for GPRS connectivity
- Access to the official Aquila configuration tool or SMS/OTA configuration method provided by the manufacturer
- Knowledge of the device firmware version and any vendor specific configuration menus or SMS command format
- A test account or device visibility in Plaspy so you can confirm reporting after configuration

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Aquila OBD II uses the vehicle cellular link to send GPS and OBD telemetry to the shared Plaspy server endpoint and port. Plaspy receives the data and maps it to the appropriate device protocol using automatic detection so data becomes available in the platform.

- The tracker opens a GPRS session and sends packets to d.plaspy.com or 54.85.159.138 on port 8888
- Data transport can use either UDP or TCP depending on the device configuration and network conditions
- Plaspy automatically inspects incoming traffic and detects the tracker protocol for parsing
- Location, motion events, and OBD II diagnostics are forwarded to the platform for monitoring and reporting
- The shared port design means the same port 8888 is used for all devices reporting to Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for Aquila OBD II, such as the vendor configuration tool, SMS commands, or OTA configuration channel.
2. In the device server settings enter the server domain d.plaspy.com or the server IP 54.85.159.138 as the reporting endpoint.
3. Set the reporting port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP as the transport if the device requires you to pick a transport protocol.
5. Configure any required APN and SIM parameters so the tracker can establish a GPRS data session.
6. Apply or save the configuration and send any vendor specific commit command if required by the Aquila tool.
7. Restart the device if recommended by the manufacturer to apply changes.
8. Validate that the device reports to Plaspy and that the platform shows the device as active and parsing data correctly.

## Example Configuration Commands

The Aquila OBD II can be configured in different ways depending on the manufacturer tool, SMS command set, or firmware. Exact commands and syntax vary by firmware and production revision, so consult the official Aquila documentation for the precise commands. When entering settings, ensure the device is pointed at d.plaspy.com or 54.85.159.138 and port 8888 and that you choose UDP or TCP if required.

If your vendor provides SMS configuration, the SMS or tool will typically include fields for server, port, transport, and APN. Always preserve the server domain or IP, port 8888, and transport choice when preparing configuration commands.

## Configuration Notes

- Firmware differences can change available menus and SMS command syntax; confirm exact steps with the Aquila documentation for your firmware version
- TCP versus UDP selection can matter for delivery behavior and network reliability; choose the transport that matches your operational needs and the device recommendation
- APN and SIM settings must be correct for the device to open a GPRS session; carriers require matching APN credentials
- Over the air configuration may be available for some Aquila firmware revisions; use OTA only when supported and documented by the vendor
- Plaspy detects the device protocol automatically so the primary focus is accurate server address and port configuration

## Why Use Plaspy with This Configuration

Using the Aquila OBD II with Plaspy gives organizations a way to combine vehicle location with onboard diagnostics in a single platform. That combined visibility helps with operational monitoring, preventive maintenance programs, and fleet analytics by delivering GPS position, motion events, and OBD parameters to Plaspy for analysis.

To learn more about how Plaspy can manage GPS and OBD II data for your fleet, visit https://www.plaspy.com. For the most current device specific setup methods and firmware details for the Aquila OBD II, verify information on the manufacturer site https://www.itriangle.in/ since vendor documentation and firmware behavior can change over time.
