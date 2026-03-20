---
slug: /supermate/d26_t/configuration
id: d26_t-configuration
sidebar_label: Configuration
title: Supermate - D26-T Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Supermate D26 T trackers to work with Plaspy server settings
keywords:
  - Supermate D26 T configuration
  - Supermate D26 T setup
  - Supermate D26 T Plaspy
  - Supermate D26 T server configuration
  - Supermate D26 T GPS tracker setup
  - Supermate D26 T tracking software configuration
  - Supermate D26 T platform setup
  - Supermate GPS tracker configuration
  - Supermate D26 T integration
  - D26 T Plaspy compatibility
---

# Supermate - D26-T Configuration

This page documents the public configuration context for using the Supermate D26-T tracker with the Plaspy platform. It focuses on the practical server settings and workflow you will use to point a D26-T to Plaspy so the device can report position and status to your Plaspy account. The guidance here is intended for technical users preparing the device for integration and for installers validating connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device is reporting. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use the manufacturer documentation for device-specific controls while applying the shared Plaspy server values below.

## Configuration Overview

Configuring a Supermate D26-T for Plaspy means preparing the tracker to send its reporting messages to Plaspy's shared server endpoint and verifying that reports arrive in your Plaspy account. The process typically takes a few configuration steps on the device or in the manufacturer tool and a validation step inside Plaspy.

- Enter the Plaspy server endpoint on the D26-T using the official Supermate configuration method.
- Set the network transport and port so the tracker can reach Plaspy.
- Verify the device is powered and able to access the mobile network where applicable.
- Confirm the device appears and reports in Plaspy after configuration.
- Troubleshoot basic connectivity and firmware differences if the device does not report.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy endpoint settings you will use when configuring the Supermate D26-T to report to the platform.

## Typical Requirements Before Setup

- Device is powered and installed according to Supermate installation guidance.
- If required by the device, an active SIM card with data or SMS capability and mobile network coverage.
- Access to the Supermate D26-T official configuration tool or manufacturer method for updating server settings.
- Network connectivity from the device to reach d.plaspy.com or 54.85.159.138 on port 8888.
- A Plaspy account prepared to receive and validate the device reporting.
- Basic knowledge of choosing UDP or TCP if the device configuration asks for transport selection.

## How This Tracker Connects to Plaspy

The Supermate D26-T is configured to send its location and event reports to the shared Plaspy server endpoint and port so Plaspy can display and manage device data. Once the server address, port, and transport are set, Plaspy will detect the protocol automatically and begin processing incoming messages.

- The device is pointed to d.plaspy.com or 54.85.159.138 as the reporting endpoint.
- Reports are sent to port 8888 which is the same port used for all devices in Plaspy.
- The tracker can use UDP or TCP depending on the device configuration and network conditions.
- Plaspy performs automatic protocol detection to decode incoming tracker messages.
- After successful reporting the device becomes visible for monitoring, geofencing, and alerts within Plaspy.

## Common Configuration Workflow

1. Access the official Supermate D26-T configuration method or software provided by the manufacturer.
2. Locate the server or reporting settings section in the tool.
3. Enter d.plaspy.com or use 54.85.159.138 as the server address in the device settings.
4. Set the port to 8888.
5. Choose UDP or TCP for transport if the device requires selecting one.
6. Apply or save the configuration within the manufacturer tool.
7. Restart the device if the configuration method or firmware requires a reboot.
8. Validate in Plaspy that the device is reporting and visible in the platform.

## Example Configuration Commands

The Supermate D26-T configuration method varies by firmware and the manufacturer tool in use. Because no public command strings were provided here, exact command examples are not included. Typically you will use the Supermate configuration utility, SMS commands, or a web tool supplied by the vendor to set the server to d.plaspy.com or 54.85.159.138 and port 8888 and to choose UDP or TCP. Refer to the official Supermate documentation for command syntax and example commands applicable to your firmware revision.

## Configuration Notes

- Firmware differences can change menu names, available transports, and exact command syntax. Verify your device firmware before applying steps.
- Choose UDP or TCP based on the Supermate tool guidance and network reliability; Plaspy will detect and handle the incoming protocol automatically.
- All devices in Plaspy use port 8888. Use that port in the device configuration regardless of tracker model when integrating with Plaspy.
- Keep a record of any placeholders used by manufacturer tools such as APN values; replace placeholders with your network operator values as required.
- When in doubt, consult the official Supermate configuration guide for your model and firmware revision.

## Why Use Plaspy with This Configuration

Configuring the Supermate D26-T to report to Plaspy gives organizations and installers a consistent server target and a predictable validation workflow. Using the shared Plaspy endpoint simplifies deployment across multiple devices and makes it easier to provision trackers at scale while maintaining visibility, geofencing, and alerting in a central platform.

To learn more about Plaspy and how it manages device data, visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and manufacturer documentation for Supermate devices visit http://www.gps-summit.com/ to verify current details and instructions.
