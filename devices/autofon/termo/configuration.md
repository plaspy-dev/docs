---
slug: /autofon/termo/configuration
id: termo-configuration
sidebar_label: Configuration
title: AutoFon - Термо Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for AutoFon Термо heater controller and how to integrate it with Plaspy using shared server settings and automatic protocol detection
keywords:
  - AutoFon Термо configuration
  - AutoFon Термо setup
  - AutoFon Термо Plaspy
  - AutoFon Термо server configuration
  - AutoFon heater controller setup
  - Plaspy heater integration
  - Plaspy tracker configuration
  - vehicle preheating module configuration
  - fleet heater management setup
  - tracking platform integration
---

# AutoFon - Термо Configuration

This page covers the public configuration context for using the AutoFon Термо heater controller with the Plaspy platform. It explains the shared Plaspy server settings that apply to Plaspy integrations, and outlines practical setup considerations for installers and fleet technicians who want to include AutoFon Термо functionality within Plaspy-enabled telematics workflows.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tools provided by the vendor. Use this guide to understand the Plaspy endpoint and the typical workflow for integrating AutoFon Термо events into a Plaspy-managed fleet, and always verify device specific instructions with the manufacturer.

## Configuration Overview

AutoFon Термо is a GSM based heater controller intended to operate aftermarket auxiliary parking heaters via SMS and voice menu control. When included in a Plaspy-managed environment, the unit augments fleet telematics by providing heater control and event logs, typically via a Plaspy compatible gateway or GPS tracker that forwards heater events to Plaspy.

- Prepare the AutoFon Термо so that heater start stop events and timer actions can be recorded in Plaspy.
- Configure the device or a forwarding gateway to send telemetry or event notifications to Plaspy using the shared server settings.
- Validate connectivity and event reporting so Plaspy can surface heater activity alongside vehicle GPS and telemetry.
- Ensure installer access and the correct manufacturer configuration method are available before testing with Plaspy.
- Verify that the heater controller and any forwarding device use the Plaspy endpoint and port so events appear in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com for Plaspy platform ingestion
- Server IP 54.85.159.138 as an alternate reachable endpoint
- Port 8888 used by Plaspy for device communication
- Transport support for UDP or TCP depending on device or gateway capabilities
- Plaspy automatically detects the tracker protocol when devices connect
- All devices in Plaspy use the same port 8888 so a single port value applies across supported hardware

## Typical Requirements Before Setup

- Confirm you have access to the official AutoFon Термо configuration method or installer tool from the manufacturer
- Ensure the device is powered and wired correctly to the vehicle and the auxiliary heater control circuit
- A working GSM SIM with appropriate service for SMS or data as required by the installation
- If a forwarding gateway or Plaspy compatible GPS tracker is used, have that device configured and reachable
- Access to the vehicle for testing local push button and remote control operations
- Knowledge of any firmware revision or hardware variant differences noted by the installer

## How This Tracker Connects to Plaspy

AutoFon Термо is primarily a GSM SMS and voice menu controller rather than a standalone GNSS tracker. Integration with Plaspy is typically achieved by forwarding heater events and status from a Plaspy compatible telematics gateway or GPS tracker to the Plaspy server endpoint. Once forwarded, Plaspy receives those events at its shared endpoint and links them to vehicle telemetry and fleet workflows.

- Heater start, stop, and timer events are forwarded to Plaspy so they can be displayed alongside GPS location and other telemetry
- Local push button state and remote SMS commands can be captured by a forwarding device and sent to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy groups device events by vehicle and can include heater events in reports and histories
- When a gateway or tracker forwards data, Plaspy automatically detects the incoming tracker protocol and processes the events
- Using the shared Plaspy endpoint and port ensures consistent ingestion of heater events across a fleet

## Common Configuration Workflow

1. Access the official AutoFon Термо configuration method or installer software documented by the manufacturer
2. If the device itself supports server configuration, or when configuring a forwarding gateway, enter d.plaspy.com or 54.85.159.138 as the server address
3. Set the server port to 8888 which Plaspy uses for all supported devices
4. Choose UDP or TCP as the transport if the device or gateway requires a transport selection
5. Apply or save the configuration in the manufacturer tool or in the forwarding gateway interface
6. Restart the device or gateway if required by the manufacturer to apply network settings
7. Validate that the device or gateway reports events to Plaspy and that events appear in the platform

## Example Configuration Commands

The manufacturer information for AutoFon Термо provided here does not include specific public command strings for direct server configuration. Exact commands and configuration formats vary by firmware and by the configuration tool used by installers. For many GSM only heater controllers the common integration approach is to use a Plaspy compatible GPS tracker or telematics gateway to capture heater events and forward them to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.

If you have device specific SMS or configuration commands from the vendor, preserve the command order and use the vendor documentation to apply server address and port values. Always test commands in a controlled environment before deploying across a fleet.

## Configuration Notes

- AutoFon Термо is a GSM controller with SMS and voice control; it may not natively support TCP or UDP reporting. Use a forwarding gateway or a Plaspy compatible GPS tracker when direct IP reporting is not available.
- Differences in firmware versions and hardware revisions can change available configuration options and command formats. Confirm firmware details before applying settings.
- Choose UDP or TCP according to the capabilities of the forwarding device. Plaspy accepts both transports at the shared port 8888.
- Because the device is discontinued and out of stock, installers should document the exact configuration used and consider alternatives for future deployments.
- Always refer to official manufacturer documentation for any reset or low level commands and label any reset steps as optional unless required for initial configuration

## Why Use Plaspy with This Configuration

Integrating AutoFon Термо events into Plaspy helps fleets and operators unify heater control activity with location and operational telemetry. When heater start stop events and timer histories are forwarded to Plaspy, fleet managers gain visibility into vehicle readiness, scheduled warm ups, and ad hoc remote commands alongside GPS tracked routes and other vehicle data. This combination supports efficient scheduling, reduced cold engine wear, and improved operator comfort for cold climate operations.

To learn more about Plaspy and how it can manage heater events alongside vehicle telemetry visit https://www.plaspy.com. For the most current device specific instructions, firmware notes, and manufacturer guidance verify details with the official AutoFon documentation at https://www.autofon.ru/ since manufacturer specifications and setup methods can change over time.
