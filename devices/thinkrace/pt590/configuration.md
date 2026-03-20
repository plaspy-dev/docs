---
slug: /thinkrace/pt590/configuration
id: pt590-configuration
sidebar_label: Configuration
title: ThinkRace - PT590 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the ThinkRace PT590 pet tracker for use with Plaspy using shared server settings and practical steps
keywords:
  - ThinkRace PT590 configuration
  - ThinkRace PT590 setup
  - PT590 Plaspy configuration
  - PT590 GPS tracker setup
  - ThinkRace tracker configuration
  - PT590 pet tracker setup
  - pet GPS tracker configuration
  - Plaspy server configuration
  - tracker protocol detection
  - GPS platform integration
---

# ThinkRace - PT590 Configuration

This page documents the public configuration context for using the ThinkRace PT590 pet tracker with Plaspy. It focuses on the practical server settings and workflow you will need to point the device at Plaspy so that location and status reporting are visible in the platform. The PT590 is described by the manufacturer as a compact pet tracker with two mode positioning, IP67 water resistance, real time tracking, and remote monitoring capabilities; this guide uses that public description to show how to connect the device to Plaspy.

Plaspy uses shared server settings for supported trackers and automatically detects the tracker protocol when a device sends data. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use the guidance below to apply the required Plaspy endpoint and transport settings, then verify behavior with the manufacturer documentation as needed.

## Configuration Overview

This configuration process prepares the PT590 to send its position and status reports to Plaspy so the device becomes visible for monitoring and event handling in the platform. The goal is to configure the tracker to communicate with Plaspy's shared server endpoint, confirm the device is online, and validate reporting to the platform.

- Configure the tracker to point to Plaspy's server endpoint so location packets arrive at the platform
- Select the transport mode (UDP or TCP) if the device requires a transport choice
- Set the common Plaspy port so the platform can receive reports from this and other supported devices
- Validate connectivity and make a test report to confirm Plaspy receives the data
- Save and apply changes so the tracker continues reporting into Plaspy for real time visibility

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the tracker:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the one required by the device configuration tool
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and protocol detection is automatic on the platform side.

## Typical Requirements Before Setup

- The PT590 must be powered and operational with sufficient battery charge for configuration and testing
- Access to the official ThinkRace configuration method or software used for the PT590
- A Plaspy account or access to the Plaspy platform to verify that the device is visible after configuration
- Reasonable network coverage or connectivity required by the tracker according to the manufacturer instructions
- Basic knowledge of the device configuration flow provided by ThinkRace or your vendor

## How This Tracker Connects to Plaspy

When configured, the PT590 sends its reports to Plaspy's shared server endpoint so Plaspy can show location and device status in the platform. Plaspy listens on a single shared port for all supported devices and uses protocol detection to decode incoming tracker data.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be either UDP or TCP depending on the device configuration choice
- Plaspy automatically detects the tracker protocol and processes incoming messages
- Reports from the tracker allow Plaspy to provide location visibility and event reporting
- After successful setup, the device will appear in Plaspy and deliver periodic position updates and alerts as configured

## Common Configuration Workflow

1. Access the official ThinkRace configuration method or software for the PT590 (manufacturer app, SMS tool, or configuration portal as provided by ThinkRace).
2. Locate the server or socket settings in the configuration tool.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888.
5. Choose UDP or TCP if the PT590 configuration requires selecting a transport.
6. Apply or save the configuration and follow any manufacturer prompts to commit changes.
7. Restart the device if the configuration tool or firmware requires a restart to activate new settings.
8. Validate that the device reports to Plaspy by checking the device status in your Plaspy account and confirming recent position updates.

## Example Configuration Commands

The exact commands and configuration syntax for the PT590 depend on the ThinkRace configuration method (for example an app, SMS commands, or a vendor tool). Because model specific commands are provided by the manufacturer or distributor, the precise command strings may vary with firmware and tool versions. Use the official ThinkRace instructions for the exact command format required by your device.

If you have manufacturer-provided command examples from ThinkRace or your vendor, apply the server value d.plaspy.com or the IP 54.85.159.138 and port 8888 in those commands exactly. For example, where a configuration command requires a host and port you would replace the host and port placeholders with the Plaspy values shown above.

## Configuration Notes

- Firmware differences and tool versions can change command syntax and available options; always verify the version you are using with ThinkRace documentation
- Choosing UDP versus TCP is determined by the device configuration tool; Plaspy accepts either and will auto detect protocol on receive
- All devices in Plaspy use the same port so use port 8888 when configuring the PT590 to ensure correct routing on the platform
- Installer practices and regional variants can affect how you access the device for configuration; follow vendor guidance for your market
- When manufacturer tools provide placeholders such as APN values, preserve those placeholders and fill them with network credentials appropriate for your service provider

## Why Use Plaspy with This Configuration

Connecting the ThinkRace PT590 to Plaspy gives you a consistent platform for monitoring pet location, receiving alerts, and maintaining operational visibility across devices. Using Plaspy's shared server settings simplifies setup because the same port and endpoint are used for supported trackers, and protocol detection on the platform reduces the need for complicated protocol selection during onboarding.

To learn more about Plaspy and how it supports trackers like the PT590, visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and setup methods can change over time, so please verify current device-specific configuration details on the official ThinkRace website https://www.thinkrace.com/ before deployment.
