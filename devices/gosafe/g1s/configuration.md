---
slug: /gosafe/g1s/configuration
id: g1s-configuration
sidebar_label: Configuration
title: Gosafe - G1S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe G1S to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - Gosafe G1S configuration
  - Gosafe G1S setup
  - Gosafe G1S Plaspy
  - Gosafe GPS tracker configuration
  - G1S server configuration
  - Gosafe tracking setup
  - GPS tracker Plaspy configuration
  - vehicle tracking G1S setup
  - G1S compatibility Plaspy
  - Gosafe G1S installation
---

# Gosafe - G1S Configuration

This page documents the public configuration context for using the Gosafe G1S portable GPS tracker with the Plaspy platform. It explains the shared server settings Plaspy uses and outlines practical setup guidance so you can prepare the G1S to report location data and be visible in Plaspy. The device description notes the G1S supports replaceable CR123 batteries or rechargeable batteries and external charging, which affects power planning during installation and long term use.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when a device connects to the platform. Exact manufacturer side steps for configuring the G1S can vary by firmware revision, hardware version, installation type, and vendor configuration tools, so use this guide together with the official Gosafe configuration resources.

## Configuration Overview

This configuration process prepares the G1S to communicate reliably with Plaspy, verifies connectivity, and confirms that the device is visible and reporting as expected in the platform.

- Configure the tracker to report to the Plaspy server endpoint and port used for all supported devices.
- Select the transport protocol on the tracker (UDP or TCP) if the device requires a choice.
- Validate network connectivity and power availability to ensure consistent reporting.
- Save and apply manufacturer settings, then confirm the device appears in Plaspy.
- Monitor initial reports to verify the tracker protocol is correctly detected and parsed by Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device configuration  
- Plaspy automatically detects the tracker protocol when the device connects

These exact values are the shared endpoint settings Plaspy provides for all compatible trackers. Use either the domain d.plaspy.com or the IP 54.85.159.138 when entering server details during device setup and set the port to 8888.

## Typical Requirements Before Setup

- Ensure the G1S has an appropriate power source installed or is charged according to the manufacturer recommendations.
- Have access to the official Gosafe configuration method or software used for this model.
- Prepare any device identifiers or serial numbers required by your fleet workflow or Plaspy account.
- Confirm the tracker has a working connectivity method as required by Gosafe for data reporting.
- Be ready to choose UDP or TCP transport if the device firmware asks for a transport type.

## How This Tracker Connects to Plaspy

The G1S is configured to send its reports to the shared Plaspy server endpoint and port so Plaspy can automatically detect and parse the tracker protocol. Once correctly configured, the device reports become visible in the platform for operational monitoring and event handling.

- The tracker sends data to d.plaspy.com or 54.85.159.138 on port 8888.
- The device can be set to use UDP or TCP transport as required by the firmware or installer.
- Plaspy inspects incoming connections and automatically detects the tracker protocol.
- After successful connection, location and status reports appear in Plaspy for monitoring and reporting.
- Initial test reports confirm correct parsing and visibility in the platform.

## Common Configuration Workflow

1. Access the official Gosafe G1S configuration method or vendor tool for this model.
2. In the device server settings enter d.plaspy.com or alternatively 54.85.159.138 as the destination.
3. Set the destination port to 8888 which Plaspy uses for all supported devices.
4. If the device requires a transport selection choose UDP or TCP according to installer preference or firmware guidance.
5. Apply or save the configuration in the Gosafe tool or via the device interface.
6. Restart the device if the manufacturer instructions require a reboot to apply changes.
7. Validate that the device is reporting to Plaspy and that the platform has automatically detected the tracker protocol.

## Example Configuration Commands

The exact commands and syntax used to configure the Gosafe G1S depend on the manufacturer configuration tool, firmware, or service interface. Because configuration methods vary, consult the official Gosafe configuration manual or vendor tool for precise commands and examples. If you are using a command or SMS style interface provided by the manufacturer, reference the Gosafe documentation for the correct command format and placeholders.

## Configuration Notes

- Firmware variations and regional hardware revisions can change how settings are applied; always check the device firmware version before following steps.
- Choosing TCP versus UDP may affect delivery characteristics; if in doubt, follow the manufacturer or installer recommendation and remember Plaspy will detect the protocol automatically.
- The G1S power options allow flexible installation planning; ensure replaceable or rechargeable battery choices meet your reporting interval requirements.
- Use the official Gosafe setup tools when possible to avoid syntax errors and to ensure the configuration is applied correctly.
- Keep a record of the configured device identifiers to match devices to entries in Plaspy for easier onboarding.

## Why Use Plaspy with This Configuration

Using the Gosafe G1S with Plaspy provides a straightforward approach to bringing portable trackers into a unified monitoring platform. Plaspy's shared server and automatic protocol detection simplify device onboarding and reduce the need to manage device specific endpoints, letting you focus on visibility, event monitoring, and operations.

Learn more about how Plaspy supports tracker integration at https://www.plaspy.com and verify the latest device specific setup details, firmware behavior, and manufacturer guidance at the official Gosafe site https://gosafesystem.com/.
