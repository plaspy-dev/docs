---
slug: /flextrack/lommy_personal/configuration
id: lommy_personal-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Personal Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Flextrack Lommy Personal with Plaspy server settings and practical setup steps
keywords:
  - Flextrack Lommy Personal configuration
  - Lommy Personal setup
  - Flextrack configuration guide
  - Lommy Personal server configuration
  - Plaspy tracker setup
  - GPS tracker platform integration
  - Lommy Personal GPS setup
  - Plaspy server settings
  - Personal safety tracker configuration
  - Tracker configuration for Plaspy
---

# Flextrack - Lommy Personal Configuration

This page covers the public configuration context for using the Flextrack Lommy Personal tracker with Plaspy. It summarizes the practical server settings and workflow you will use to point the device to Plaspy so the device can report location and status to the platform. The guidance here is focused on public integration points and does not replace manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so refer to Flextrack materials when you need device-specific instructions.

## Configuration Overview

This configuration process prepares the Lommy Personal to communicate with Plaspy, validates connectivity, and makes the device visible in the platform for monitoring and event reporting.

- Point the tracker to the Plaspy server endpoint so the device can send position updates and events.
- Choose an appropriate transport method if the device requires UDP or TCP selection.
- Save and apply the configuration on the device using the manufacturer’s tool or method.
- Restart or reboot the device if the manufacturer requires it to activate new server settings.
- Confirm the device appears in Plaspy and is sending location updates to d.plaspy.com on port 8888.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring your Lommy Personal device:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects.

## Typical Requirements Before Setup

- A charged and operational Lommy Personal device with access to the manufacturer configuration method.
- Access to Flextrack configuration software, web portal, or official setup instructions.
- Knowledge of the device identifier such as IMEI or serial number if required for registration or verification.
- A stable network environment so the device can reach d.plaspy.com on port 8888 during testing.
- Administrative access to apply configuration changes and restart the device if needed.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Lommy Personal is set to send its position and event data to the shared Plaspy server endpoint and port so the device becomes visible in the Plaspy platform for monitoring and analysis.

- The device is set to report to d.plaspy.com using port 8888.
- Plaspy accepts connections over UDP or TCP depending on the device configuration.
- Plaspy automatically detects the tracker protocol, so the platform interprets incoming data appropriately.
- Location and event updates sent by the Lommy Personal are processed by the Plaspy platform for status, history, and alerting.
- Once the device connects to the Plaspy endpoint, you can validate visibility and telemetry in Plaspy.

## Common Configuration Workflow

1. Access the official Flextrack configuration method or software recommended for the Lommy Personal.
2. In the device server settings enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888.
4. If the device requires a transport selection choose UDP or TCP as appropriate for your installation.
5. Apply or save the configuration changes within the manufacturer tool.
6. Restart or power cycle the Lommy Personal if the manufacturer instructs to activate new network settings.
7. Validate that the device reports to Plaspy by checking device visibility and incoming positions on the Plaspy platform.

## Example Configuration Commands

The Lommy Personal manufacturer or installer tools determine the exact commands or configuration steps available. Public commands and command formats vary by firmware and configuration method. Common ways to configure a tracker include using the vendor configuration application, a web management interface, or an authorized provisioning tool.

If you need command examples specific to the Lommy Personal, consult Flextrack official documentation or the Flextrack configuration tool provided to installers and integrators.

## Configuration Notes

- Firmware revisions and hardware variants can change how settings are entered; always confirm the correct procedure for your device version.
- Choose UDP or TCP according to your network and installation preferences; Plaspy supports both but the method for selecting transport is manufacturer dependent.
- Plaspy uses the same port 8888 for all devices and detects the tracker protocol automatically, so point the Lommy Personal to d.plaspy.com or 54.85.159.138 on port 8888.
- Follow Flextrack's recommended installer practices for battery handling and device provisioning to avoid configuration issues.
- When available, use manufacturer tools for configuration and verification rather than attempting unsupported manual commands.

## Why Use Plaspy with This Configuration

Using Plaspy with the Flextrack Lommy Personal provides a straightforward way to centralize location reporting and operational visibility for personal safety devices. Pointing the tracker to Plaspy's shared endpoint simplifies integration and lets organizations monitor location and device status within a single platform for oversight and rapid response.

To learn more about Plaspy and supported integrations, visit https://www.plaspy.com. For the latest device-specific setup details, firmware notes, and Flextrack tools consult the manufacturer at https://flextrack.dk. Manufacturer specifications and setup methods can change over time so verify the current information on the official Flextrack site.
