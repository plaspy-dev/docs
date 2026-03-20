---
slug: /thinkrace/traxbean_bracelet/configuration
id: traxbean_bracelet-configuration
sidebar_label: Configuration
title: ThinkRace - Traxbean Bracelet Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the ThinkRace Traxbean Bracelet and practical steps to connect this device to Plaspy using shared server settings
keywords:
  - ThinkRace Traxbean Bracelet configuration
  - Traxbean Bracelet setup Plaspy
  - ThinkRace bracelet GPS configuration
  - Traxbean Bracelet server configuration
  - Traxbean Bracelet setup guide
  - ThinkRace Plaspy compatibility
  - Traxbean Bracelet tracking configuration
  - ThinkRace GPS tracker setup
  - Traxbean Bracelet integration
  - Traxbean GPS platform setup
---

# ThinkRace - Traxbean Bracelet Configuration

This page covers the public configuration context for using the ThinkRace Traxbean Bracelet with the Plaspy platform. It focuses on the practical server settings and workflow required to point a Traxbean Bracelet at Plaspy so the device can stream location and event data for monitoring and case workflows. Use this guide together with the device documentation from ThinkRace and the device management tools or SMS commands supplied by your vendor.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so a single endpoint can accept reports from many models. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so always confirm the ThinkRace configuration method you will use before applying settings.

## Configuration Overview

Configuring the Traxbean Bracelet for Plaspy means preparing the device to send location, tamper and event data to Plaspy's shared server endpoint and validating the connection. The goal is to ensure the tracker reports reliably and appears in the Plaspy dashboard and alerts workflow.

- Point the device to the Plaspy server endpoint so telemetry is routed to the platform.
- Choose the transport option the device supports, typically UDP or TCP, and set the required port.
- Apply and save settings using the ThinkRace configuration tool, portal, or SMS commands as provided by the manufacturer.
- Restart or reinitialize the device if required to begin reporting.
- Verify the tracker is visible in Plaspy and sending regular location and event updates.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Protocol detection: Plaspy automatically detects the tracker protocol when the device reports

## Typical Requirements Before Setup

- A charged and operational Traxbean Bracelet with its device identifier (IMEI or serial) available.  
- Access to the official ThinkRace configuration method such as the manufacturer app, web portal, or vendor SMS/command set.  
- A mobile data plan or cellular connectivity enabled on the device compatible with the Traxbean Bracelet.  
- Administrative access to the Plaspy platform or your Plaspy account to confirm device registration and visibility.  
- Basic network information to enter d.plaspy.com or 54.85.159.138 and the port number 8888 when configuring the device.

## How This Tracker Connects to Plaspy

When configured, the Traxbean Bracelet will send periodic position fixes and event notifications to the shared Plaspy endpoint. Plaspy receives those packets on the same port used for all supported devices, then maps the data to the device record and surfaces events in the dashboard and mobile apps.

- The tracker reports location and telemetry to d.plaspy.com or directly to 54.85.159.138 on port 8888.  
- Transport may use UDP or TCP depending on the configuration you set on the device.  
- Plaspy automatically detects the device protocol and parses incoming messages for location and event data.  
- Events such as tamper alerts, SOS activations, and geofence transitions are forwarded into Plaspy workflows for monitoring and notifications.  
- Successful connectivity results in live location updates and event visibility in Plaspy.

## Common Configuration Workflow

1. Access the official ThinkRace configuration method or software provided by the manufacturer or vendor.  
2. In the device settings, enter the Plaspy server endpoint by using either d.plaspy.com or the server IP 54.85.159.138.  
3. Set the destination port to 8888.  
4. Choose the transport mode UDP or TCP if the device requires an explicit transport selection.  
5. Apply or save the configuration to the device using the manufacturer tool or SMS command.  
6. Restart or power cycle the device if recommended by the manufacturer to activate the new settings.  
7. Validate that the device reports to Plaspy and appears in the platform with regular location and event updates.

## Example Configuration Commands

The specific commands or configuration UI fields used to set server address, port, and transport depend on the ThinkRace toolset and firmware version. This page does not provide manufacturer SMS commands or proprietary configuration syntax. In general, you will enter:

- the server domain d.plaspy.com or the server IP 54.85.159.138  
- the port number 8888  
- the transport mode UDP or TCP if required

If your ThinkRace documentation provides SMS or CLI commands, use those manufacturer commands to set the server and port. Always follow the command format from the official ThinkRace materials for correct syntax and order.

## Configuration Notes

- Plaspy uses the same port 8888 for all devices and performs automatic protocol detection; do not expect multiple ports for different models.  
- Choose UDP for lower overhead where supported, or TCP when reliable delivery is required and the device supports that mode. Confirm with ThinkRace firmware behavior.  
- Firmware and hardware revisions can change configuration steps or supported commands; consult the ThinkRace release notes when available.  
- If the ThinkRace method supports SMS configuration, ensure the device has active cellular service and sufficient credits or data to accept commands.  
- Maintain the device IMEI or serial number handy to match the reporting device with the Plaspy device record.

## Why Use Plaspy with This Configuration

Using the Traxbean Bracelet with Plaspy gives agencies and integrators a consistent endpoint for receiving location and event telemetry from a wearable device built for supervision and safety. Pointing the device to Plaspy's shared server simplifies onboarding because Plaspy automatically detects the tracker protocol and uses a single port for all supported devices, reducing per-device configuration complexity.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For device specific commands, firmware details, and the latest manufacturer procedures verify current information at the ThinkRace website https://www.thinkrace.com/ as device behavior and setup methods can change over time.
