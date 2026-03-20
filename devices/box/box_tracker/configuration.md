---
slug: /box/box_tracker/configuration
id: box_tracker-configuration
sidebar_label: Configuration
title: Box - Box Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the Box Tracker to report to Plaspy with shared server settings and practical workflow
keywords:
  - Box Tracker configuration
  - Box Box Tracker configuration
  - Box Tracker setup Plaspy
  - Box Tracker server configuration
  - Box Tracker GPS tracker configuration
  - Box Tracker integration
  - Plaspy device configuration
  - Box Tracker fleet tracking setup
  - vehicle tracking Box Tracker
  - Box Tracker installation guide
---

# Box - Box Tracker Configuration

This page documents the public configuration context for using the Box Tracker with the Plaspy platform. It collects the practical, platform-side settings you will need to point the device at Plaspy and explains the typical steps integrators follow to enable real-time visibility. Use this guide together with the manufacturer's technical manual when performing device configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the Box Tracker. Exact manufacturer-side setup steps and menus can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so confirm specific commands and procedures with the Box documentation when needed.

## Configuration Overview

Preparing the Box Tracker for Plaspy means configuring the device to send its location and telemetry to Plaspy's server endpoint and verifying that messages arrive and are parsed by the platform. The process is focused on supplying the correct server address and transport, validating connectivity over the mobile network, and confirming the device appears in Plaspy.

- Configure the tracker to report to the Plaspy server endpoint so location and status messages are routed to the platform.
- Choose the appropriate transport (UDP or TCP) and set the shared platform port used by Plaspy.
- Ensure the device has proper power, SIM/network readiness, and any required APN set so GPRS connections succeed.
- Validate inbound packets on Plaspy and confirm the device is visible and reporting expected events.
- Keep manufacturer documentation handy for any device-specific menus, commands, or configuration utilities.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public, shared settings used by Plaspy for supported trackers and are the primary server settings you will enter on the Box Tracker.

## Typical Requirements Before Setup

- A Box Tracker unit that is powered and accessible for configuration or installation.
- Active SIM card and mobile data plan so the tracker can open a GPRS/TCP or GPRS/UDP session.
- Access to the manufacturer configuration method or software used for the Box Tracker (USB tool, web portal, or configuration utility).
- Knowledge of the correct APN and any APN username or password required by the mobile operator.
- Sufficient network coverage at the installation site to allow the tracker to obtain a GPS fix and establish GPRS connectivity.
- Administrative access to Plaspy to confirm device registration and verify inbound data.

## How This Tracker Connects to Plaspy

The Box Tracker sends location updates and device telemetry over the mobile network to the shared Plaspy server endpoint and port. Plaspy receives inbound messages on the same port for all devices and uses automatic protocol detection to identify and parse the tracker protocol.

- The tracker opens a TCP or UDP session to d.plaspy.com (or 54.85.159.138) on port 8888.
- Location and event messages are transmitted to Plaspy where the protocol is automatically detected.
- Plaspy parses incoming packets and surfaces the device as an asset in the platform for monitoring.
- After configuration, validate that heartbeat and position reports appear in Plaspy to confirm end-to-end connectivity.
- If connectivity issues occur, verify APN settings, signal strength, and that the device firmware supports TCP/UDP reporting.

## Common Configuration Workflow

1. Access the official Box Tracker configuration method or software provided by the manufacturer.
2. Locate the network or server settings section used for reporting destination configuration.
3. Enter d.plaspy.com or 54.85.159.138 as the server address for the device.
4. Set the destination port to 8888.
5. Choose UDP or TCP as the transport if the device requires an explicit selection.
6. Apply or save the configuration and, if required, restart the device to activate the new settings.
7. Confirm the Box Tracker reports to Plaspy by checking device activity and incoming messages in the platform.

## Example Configuration Commands

The exact configuration commands and syntax depend on the Box Tracker firmware and the manufacturer configuration tool you use. Some installers use a web interface or PC utility, while others use SMS or serial commands; the commands and the way to apply them vary.

When configuring the device, the essential settings you must provide to the tracker are the Plaspy server domain or IP and the port 8888, plus the chosen transport (UDP or TCP). For example, a typical manufacturer instruction set would require you to set server to d.plaspy.com or 54.85.159.138 and set the reporting port to 8888. Plaspy will automatically detect the tracker protocol once messages arrive.

## Configuration Notes

- Firmware differences may change the exact menu names or command syntax used to set server and port values; always check the device firmware version before following commands.
- Choosing TCP or UDP can affect delivery characteristics; select the transport your installation requires and verify it in Plaspy.
- Ensure APN and mobile operator credentials are correct so GPRS sessions can be established reliably.
- If you use a configuration utility or SMS commands, preserve any placeholders the manufacturer provides and replace them with your operator APN or credentials where required.
- Keep a copy of any original device settings so you can restore them if needed during testing.

## Why Use Plaspy with This Configuration

Using the Box Tracker with Plaspy gives integrators a straightforward way to centralize vehicle location and status data using a single, shared server endpoint. Because Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, integrating the Box Tracker is focused on supplying the correct server address, transport, and network prerequisites rather than managing many per-device endpoints.

To learn more about Plaspy and how the platform manages device connectivity and fleet visibility, visit https://www.plaspy.com. Please verify device-specific configuration methods, firmware behavior, and manufacturer details at the official Box documentation site http://www.boxtelematics.com/ to ensure you have the most current instructions.
