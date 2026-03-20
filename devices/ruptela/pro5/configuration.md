---
slug: /ruptela/pro5/configuration
id: pro5-configuration
sidebar_label: Configuration
title: Ruptela - Pro5 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for integrating the Ruptela Pro5 GPS tracker with Plaspy including server settings and setup workflow
keywords:
  - Ruptela Pro5 configuration
  - Ruptela Pro5 setup
  - Pro5 server configuration
  - Pro5 Plaspy integration
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet telematics configuration
  - Plaspy server settings
  - Ruptela device provisioning
  - Pro5 firmware setup
---

# Ruptela - Pro5 Configuration

This page documents the public configuration context for using the Ruptela Pro5 with Plaspy. It collects the shared Plaspy server settings and practical setup guidance you can use when preparing Pro5 units for fleet telemetry and live tracking in Plaspy. The content here focuses on public, vendor-independent configuration steps and the Plaspy endpoint details required for device reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the Ruptela configuration tools you use. Use this page as a practical reference and verify device-specific details with Ruptela documentation when needed.

## Configuration Overview

This configuration process prepares the Pro5 to report GNSS position and vehicle telemetry to Plaspy using Plaspy's shared server endpoint and port. The goal is to configure the device transport and server address, confirm cellular connectivity, and validate that Plaspy receives position and event messages.

- Enter the Plaspy server endpoint and transport so the Pro5 can send telemetry to Plaspy
- Configure the device port and transport mode to match Plaspy requirements
- Validate cellular connectivity and device power so messages can reach Plaspy
- Confirm reporting and visibility in the Plaspy platform after device registration
- Use Ruptela provisioning tools or SMS/USB methods per your installation workflow

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the Pro5 device:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy so the platform detects the tracker protocol when data arrives

Note that all devices in Plaspy use the same port and Plaspy will automatically detect the tracker protocol from incoming connections.

## Typical Requirements Before Setup

- A powered and installed Ruptela Pro5 unit with necessary vehicle connections completed
- Active cellular connectivity compatible with the Pro5 LTE-M and 2G fallback capabilities and a working SIM where required
- Access to the official Ruptela configuration method or software for your device variant, for example Ruptela Device Center or the manufacturer's provisioning tools
- Knowledge of the device firmware version and the ability to perform firmware updates if required
- A Plaspy account or provisioning workflow to register and verify the device after it reports to the platform
- Protective installation and wiring checks to ensure power, CAN and I/O connections are stable before testing

## How This Tracker Connects to Plaspy

When configured, the Pro5 sends GNSS positions and vehicle telemetry to the Plaspy shared server endpoint and port. Plaspy ingests the telemetry and presents location, CAN data, BLE sensor associations, and event alerts for fleet operations.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or directly to IP 54.85.159.138
- Data is sent to Plaspy on port 8888 using either UDP or TCP depending on the device setup
- Plaspy automatically detects the tracker protocol from incoming messages so separate protocol selection in Plaspy is not required
- Telemetry types commonly forwarded include GNSS position, CAN-sourced vehicle parameters, BLE sensor associations, and accelerometer events
- Successful configuration makes the device visible in Plaspy dashboards and enables event reporting and historical route logging

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software for your Pro5 unit, such as Ruptela Device Center, SMS commands, USB tool, or the supported provisioning utility.
2. In the server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 according to your tool preference or installation policy.
3. Set the device port to 8888. All devices in Plaspy use the same port, so use 8888 for Pro5 reporting.
4. Choose the transport protocol UDP or TCP if the device or configuration tool requires a transport selection.
5. Apply or save the configuration in the manufacturer tool and confirm the changes were accepted.
6. Restart the device if the Ruptela tool or firmware requires a reboot to apply network settings.
7. Validate that the Pro5 reports to Plaspy by confirming the device appears in your Plaspy account and by checking for initial position and telemetry messages.

## Example Configuration Commands

The exact commands and syntax used to configure a Pro5 depend on Ruptela firmware and the configuration method you choose (Device Center, SMS, USB, or provisioning tool). Because commands vary by firmware and tool, this page does not invent device commands. Consult Ruptela Device Center documentation or your provisioning guide for the exact command strings or GUI steps required to point the device to:

- Server domain d.plaspy.com or server IP 54.85.159.138
- Port 8888
- Transport UDP or TCP

If you are using SMS or a command-line style tool provided by Ruptela, follow the manufacturer examples exactly and preserve any placeholders supplied by those commands.

## Configuration Notes

- Firmware differences can change the exact field names and commands for server address, port, and transport selection; always confirm the syntax for your firmware build.
- TCP and UDP are both supported by Plaspy on port 8888; choose the transport that matches your network and reliability requirements and the device firmware capabilities.
- All devices in Plaspy use the same port and Plaspy will automatically detect the tracker protocol from incoming traffic.
- For large rollouts, consider using Ruptela Device Center or the Ruptela Device Management Platform for centralized provisioning and FOTA to standardize settings across units.
- Verify any SMS based configuration strings or USB tool steps against Ruptela documentation before applying them in the field.

## Why Use Plaspy with This Configuration

Using the Ruptela Pro5 with Plaspy gives operators reliable vehicle location and rich telemetry in a single platform. The Pro5 hardware is purpose built for heavy vehicles and, when pointed to the Plaspy server endpoint and port, streams GNSS, CAN, BLE and event data that Plaspy makes available for live monitoring, alerts, and reporting workflows.

To learn more about Plaspy and how it supports fleet telematics, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance, please verify details on the official Ruptela website https://ruptela.com/ before large deployments.
