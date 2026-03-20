---
slug: /itriangle/ts101_advance/configuration
id: ts101_advance-configuration
sidebar_label: Configuration
title: iTriangle - TS101 Advance Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for iTriangle TS101 Advance setup with Plaspy
keywords:
  - iTriangle TS101 Advance configuration
  - TS101 Advance Plaspy setup
  - iTriangle GPS tracker configuration
  - TS101 Advance server configuration
  - TS101 Advance setup guide
  - Plaspy tracker configuration
  - vehicle tracking setup TS101
  - fleet management TS101 Advance
  - TS101 Advance TCP UDP configuration
  - GPS tracker Plaspy integration
---

# iTriangle - TS101 Advance Configuration

This page covers the public configuration context for using the iTriangle TS101 Advance tracker with the Plaspy platform. It provides the essential server values, common prerequisites, and the practical workflow used to point the device at Plaspy so the tracker can stream location and telemetry for fleet management and security monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools you choose. Use the information below to prepare the TS101 Advance for integration with Plaspy and consult iTriangle documentation for device specific commands and UI flows.

## Configuration Overview

This configuration process prepares the TS101 Advance to send GNSS positions, sensor events, and I/O status to Plaspy so the device becomes visible and actionable in the platform. It focuses on applying the Plaspy server endpoint and transport settings, validating connectivity, and confirming the device reports correctly.

- Configure the tracker to report to the Plaspy server endpoint and port so position and event data reach the platform.
- Validate network connectivity and APN or SIM provisioning so the device can establish a cellular link.
- Choose the required transport mode (UDP or TCP) on the device if the manufacturer interface requires it.
- Apply and save settings, then restart the tracker when required to start reporting.
- Verify the device appears in Plaspy and that telemetry, ignition, and input status are reported correctly.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and functioning TS101 Advance with available configuration access via SMS, USB, TCP/IP, or Bluetooth as provided by iTriangle.
- An active SIM card with a data plan and correct APN settings for the cellular network in your deployment region.
- Access to the official iTriangle configuration method or software tool for the TS101 Advance (SMS commands, USB tool, Bluetooth app, or TCP/IP configuration).
- Knowledge of the device IMEI or unique identifier for Plaspy registration and device mapping.
- A Plaspy account and the ability to register or link the device within your Plaspy instance if required by your operator.
- Firmware updated to a supported release when recommended by the manufacturer for improved compatibility.

## How This Tracker Connects to Plaspy

The TS101 Advance is configured to report its data stream to the Plaspy shared server endpoint and port. Once configured, the device sends GNSS positions, motion sensor events, and I/O changes over a cellular TCP/IP link or via the selected transport option.

- Device reports are sent to d.plaspy.com or directly to 54.85.159.138 using port 8888.
- Transport selection can be UDP or TCP depending on the configuration interface; the TS101 Advance supports both reporting modes.
- Plaspy automatically detects the tracker protocol and the platform reads incoming messages on the same port used across all devices.
- Position, accelerometer/gyroscope events, ignition status, and digital/analog inputs are transmitted to Plaspy for live mapping and event handling.
- Once the device transmits successfully, the tracker becomes visible in Plaspy and can be used for monitoring, alerts, and reporting.

## Common Configuration Workflow

1. Access the official iTriangle configuration method or software for the TS101 Advance (SMS command set, USB configuration tool, Bluetooth app, or TCP/IP console).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP address 54.85.159.138 in the device server field.
3. Set the server port to 8888 as the destination port for telemetry.
4. Choose UDP or TCP if the device requires transport selection during setup.
5. Configure any required APN or SIM parameters so the tracker can establish a cellular data connection.
6. Apply or save the configuration on the device and perform a restart if the procedure or tool advises it.
7. Validate that the device reports to Plaspy by checking the device presence and initial telemetry in your Plaspy account or platform view.

## Example Configuration Commands

The TS101 Advance supports multiple configuration channels provided by iTriangle, including SMS, USB, TCP/IP, and Bluetooth. Exact commands and the syntax for each channel vary by firmware and the manufacturer tool. For device-specific command strings, SMS templates, or USB tool steps, consult the official iTriangle configuration guide for the TS101 Advance or the configuration utility included with the product. Plaspy requires the server address (d.plaspy.com or 54.85.159.138) and port 8888 to be set on the device, and transport selected if applicable.

## Configuration Notes

- Firmware and tool differences: iTriangle command sets and UI options may vary between firmware releases and hardware revisions. Confirm the exact command syntax for your unit.
- Transport choice matters: TCP and UDP behave differently on lossy networks. Choose the transport recommended by your installer or by iTriangle for your use case.
- Single port use: Plaspy listens on port 8888 for all supported devices and automatically detects the incoming tracker protocol.
- Multiple configuration channels: The TS101 Advance supports SMS, USB, TCP/IP, and Bluetooth for setup. Use the method best suited to your installation environment and security requirements.
- APN and SIM readiness: Ensure the SIM is provisioned and the APN is correctly configured before testing connectivity to d.plaspy.com or 54.85.159.138 on port 8888.

## Why Use Plaspy with This Configuration

Configuring the TS101 Advance to report to Plaspy gives organizations reliable visibility into vehicle location, sensor events, and I/O state for fleet operations, security, and remote diagnostics. The device’s rugged design and built-in sensors paired with Plaspy’s shared server settings make it straightforward to integrate real-time telemetry into dispatch, alerting, and reporting workflows.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and setup tools for the TS101 Advance, verify the latest documentation from the manufacturer at https://www.itriangle.net/
