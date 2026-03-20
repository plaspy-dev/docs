---
slug: /gosafe/g1c/configuration
id: g1c-configuration
sidebar_label: Configuration
title: Gosafe - G1C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe G1C with Plaspy server settings and practical setup steps
keywords:
  - Gosafe G1C configuration
  - Gosafe G1C setup Plaspy
  - Gosafe G1C GPS tracker
  - Plaspy device configuration
  - Gosafe G1C server configuration
  - G1C GPS platform setup
  - Gosafe G1C installation guide
  - fleet management G1C
  - vehicle tracking G1C
  - Gosafe G1C LTE tracker
---

# Gosafe - G1C Configuration

This page covers the public configuration context for using the Gosafe G1C tracker with Plaspy. It summarizes the practical server settings and the typical steps required to point a compatible G1C device at the Plaspy platform so the device can report location and event data. The information here is intended for technical installers and integrators preparing G1C units for use with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide as the Plaspy-oriented portion of the configuration workflow and consult Gosafe documentation when device-specific details are required.

## Configuration Overview

This configuration process prepares the G1C to communicate with Plaspy by setting the tracker to report to the Plaspy server endpoint and port. The goal is to ensure reliable, authenticated connectivity and visibility in the Plaspy platform so location, events, and device status are visible to your fleet or monitoring application.

- Point the G1C to the Plaspy server endpoint so it sends telemetry to Plaspy.
- Choose the transport protocol supported by the device and Plaspy and set the port accordingly.
- Ensure device power, cellular connectivity, and APN settings are valid so the unit can establish data sessions.
- Apply and save the configuration on the device then verify the unit starts reporting to Plaspy.
- Validate that events such as ignition, crash recording, or panic input from the G1C appear in the Plaspy platform.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the G1C:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so all devices may use the same port and the platform will identify the protocol

## Typical Requirements Before Setup

- Device powered and accessible for configuration either by the manufacturer software tool or approved installer method.
- Active cellular SIM with data enabled and appropriate APN values for the operator being used.
- Knowledge of the device IMEI or serial number for registration and troubleshooting.
- Access to the official Gosafe configuration tool or documentation appropriate for the G1C firmware revision.
- A Plaspy account with permission to add or monitor devices on the target account or customer instance.
- Basic network connectivity checks to confirm the device can reach external servers from the installation location.

## How This Tracker Connects to Plaspy

The G1C sends location, status, and event data to the Plaspy server endpoint and port so the platform can process and display telemetry. Once the tracker is configured with Plaspy settings, it establishes a session over the chosen transport and begins reporting according to its firmware event and position reporting rules.

- The tracker is configured to report to the shared Plaspy endpoint d.plaspy.com or the corresponding IP address 54.85.159.138.
- Data is sent over port 8888 using either UDP or TCP according to the device configuration.
- Plaspy automatically detects the tracker protocol so the platform can accept the incoming data without device-specific server endpoints.
- Location updates, event notifications (such as ignition or crash events described by the device), and status messages are delivered to the Plaspy platform for visibility and monitoring.
- Visibility in Plaspy allows operational monitoring, alerting, and position history for the G1C unit.

## Common Configuration Workflow

1. Access the official Gosafe configuration method or software for the G1C (manufacturer tool, web portal, or installer interface).
2. Enter the Plaspy server address by inputting d.plaspy.com or, if required, the server IP 54.85.159.138.
3. Set the device port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection and save that option.
5. Configure any required APN or cellular settings for the installed SIM so the device can establish data sessions.
6. Apply or save the configuration on the tracker and restart the device if the manufacturer procedure requires a reboot.
7. Validate that the device is reporting to Plaspy by checking device status and initial position in the Plaspy platform or monitoring interface.

## Example Configuration Commands

There are no universal example commands for the G1C included in public modelConfiguration content here. Exact configuration commands and the method to send them vary by Gosafe firmware and the manufacturer tool in use. Use the Gosafe configuration utility or installer manual to apply the Plaspy server settings:

- Enter server domain d.plaspy.com or server IP 54.85.159.138 in the field labeled server or host.
- Set the destination port to 8888.
- Select UDP or TCP for transport if prompted.
- Save and apply the configuration, then follow the device-specific step to reboot or restart communication services if required.

If you have a Gosafe-provided SMS or serial command set for your firmware, apply the equivalent server, port, and transport commands from the Gosafe manual. Always preserve any placeholders the manufacturer requires when substituting APN or credentials.

## Configuration Notes

- Firmware and hardware revisions can change the exact configuration UI and command syntax; always confirm with the Gosafe G1C firmware documentation.
- Selecting TCP versus UDP depends on installer preference and the device's networking behavior; Plaspy supports either and will detect the protocol automatically.
- Ensure APN credentials and SIM service are active before attempting to validate connectivity to d.plaspy.com or 54.85.159.138 on port 8888.
- In multi-unit deployments, confirm each device IMEI is recorded so you can quickly identify units in the Plaspy platform.
- If the device offers both LTE Cat 1 and GPRS modes, verify the operator network coverage and data plan to match the intended regional deployment.

## Why Use Plaspy with This Configuration

Using the Gosafe G1C with Plaspy provides a straightforward way to bring small-form-factor, feature-rich tracking units onto a single monitoring platform. Pointing the G1C to the shared Plaspy endpoint simplifies large deployments because the platform uses a single port for all devices and automatically detects the incoming protocol, reducing per-device server configuration complexity.

To learn more about Plaspy and how it supports GPS tracking devices, visit https://www.plaspy.com. For the latest device configuration methods, firmware behavior, and manufacturer details for the Gosafe G1C, verify current information on the official Gosafe site https://gosafesystem.com/ as manufacturer specifications and setup steps can change over time.
