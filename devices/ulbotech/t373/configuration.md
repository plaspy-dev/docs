---
slug: /ulbotech/t373/configuration
id: t373-configuration
sidebar_label: Configuration
title: Ulbotech - T373 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ulbotech T373 to connect with Plaspy using shared server settings and automatic protocol detection
keywords:
  - Ulbotech T373 configuration
  - Ulbotech T373 setup
  - T373 server configuration
  - T373 Plaspy configuration
  - GPS tracker configuration guide
  - Plaspy tracker setup
  - vehicle tracking setup T373
  - T373 platform integration
  - GPS device server settings
  - fleet tracking Ulbotech T373
---

# Ulbotech - T373 Configuration

This page describes the public configuration context for using the Ulbotech T373 with Plaspy. It focuses on the practical, platform-side settings you must apply or verify so the device can report to Plaspy. It does not replace the manufacturer's manual but summarizes the server settings and the common workflow used with Plaspy.

Plaspy uses shared server settings for supported trackers and automatically detects the tracker protocol on its side. Exact manufacturer-side setup steps for the T373 can vary by firmware version, hardware revision, installation type, and vendor tools, so use this page as a practical reference and confirm device-specific details with Ulbotech documentation.

## Configuration Overview

This configuration process prepares the T373 to send location and status data to Plaspy's shared server endpoint so the device appears and remains visible in the Plaspy platform. The process is intentionally simple because Plaspy centralizes protocol handling and uses the same port for all devices.

- Point the device to the Plaspy server domain or IP so telemetry is routed to the platform
- Choose the transport protocol (UDP or TCP) if the device requires it
- Set the device to use port 8888, the shared port for all Plaspy devices
- Save and apply the settings, then restart the device if required by the manufacturer
- Verify the tracker is reporting and visible in Plaspy after configuration

## Plaspy Server Settings

Use these public Plaspy values when configuring the T373 on the device or in vendor tools:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device reports to the server

These values are the central connection points the tracker must contact for Plaspy to receive telemetry.

## Typical Requirements Before Setup

- Access to the T373 configuration interface or the official Ulbotech configuration tool supplied by the vendor
- Device powered and reachable by the configuration method (USB, web tool, SMS, or other manufacturer method)
- Network connectivity appropriate for the device (cellular, WiFi, or manufacturer supported transport)
- Knowledge of any device-specific login or pairing procedure required by Ulbotech
- A Plaspy account or provisioning information if your deployment requires registering devices in the platform

## How This Tracker Connects to Plaspy

When configured for Plaspy the tracker sends its telemetry to the shared Plaspy server endpoint and port, and Plaspy handles the protocol interpretation. This lets the platform collect location, status, and event messages without per-device custom server addresses.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138
- Communications are sent to port 8888 which Plaspy uses for all supported devices
- Either UDP or TCP transport can be selected on devices that require a transport option
- Plaspy performs automatic protocol detection so device-side protocol selection is usually straightforward
- After successful connection the device becomes visible and reportable in Plaspy for monitoring and analysis

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software for the T373 (manufacturer web tool, desktop utility, SMS commands, or installer interface).
2. In the device network/server settings enter the server address as either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888, the shared Plaspy port for all devices.
4. Choose UDP or TCP if the device requires a transport selection; otherwise leave at the device default.
5. Apply or save the configuration in the device tool and confirm there are no error messages.
6. Restart the device if the manufacturer tool or firmware requires a reboot to activate network changes.
7. Validate that the device reports to Plaspy by checking the device list or live telemetry in your Plaspy platform view.

## Example Configuration Commands

The exact configuration commands and format depend on the Ulbotech T373 firmware and the vendor's configuration tool. Manufacturer manuals commonly provide SMS commands, serial commands, or a configuration utility. Because model specific commands can vary, consult the Ulbotech configuration guide for the exact syntax and any required placeholders.

If you have access to Ulbotech commands for your specific T373 firmware, apply them in the sequence the manufacturer recommends, substituting any placeholders with your network values and keeping the Plaspy server settings:

- Server domain or IP: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Always preserve the manufacturer's command order when applying settings and follow any verification steps provided by Ulbotech.

## Configuration Notes

- Different firmware versions or hardware revisions may require different configuration steps or command syntax; always check the T373 documentation for your exact unit.
- If the device supports both UDP and TCP, test the transport that matches your network environment; Plaspy will detect the protocol automatically once the device connects.
- The Plaspy server uses the same port 8888 for all supported devices; this simplifies multi-device deployments.
- Installer tools or SMS-based configuration may include placeholders; replace these with your actual values following the manufacturer's instructions.
- Confirm network connectivity (signal, APN settings, or WiFi access) through the manufacturer tool before assuming a server issue.

## Why Use Plaspy with This Configuration

Using Plaspy with the Ulbotech T373 centralizes device telemetry and event reporting on a single platform endpoint, which simplifies fleet and asset monitoring. Because Plaspy detects device protocols automatically and uses a shared port, integrating multiple devices or mixed fleets is more straightforward than managing many custom server addresses.

To learn more about Plaspy and how it handles device connectivity and protocol detection visit https://www.plaspy.com. For the most current and device specific configuration details, firmware behavior, and manufacturer tools consult Ulbotech documentation at http://www.ulbotech.com/ so you can verify the latest setup steps for your T373 units.
