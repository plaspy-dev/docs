---
slug: /itriangle/ts101_basic_ev_can/configuration
id: ts101_basic_ev_can-configuration
sidebar_label: Configuration
title: iTriangle - TS101 Basic EV CAN Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect the iTriangle TS101 Basic EV CAN tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - iTriangle TS101 Basic EV CAN configuration
  - iTriangle TS101 configuration
  - TS101 Basic EV CAN Plaspy setup
  - Plaspy tracker configuration
  - iTriangle GPS tracker setup
  - TS101 server configuration
  - vehicle tracking setup
  - fleet tracking Plaspy
  - EV telemetry CAN integration
  - GPS tracker Plaspy compatibility
---

# iTriangle - TS101 Basic EV CAN Configuration

This page provides the public configuration context required to connect the iTriangle TS101 Basic EV CAN tracker to Plaspy. It focuses on the practical server values and workflow you will use to point the device at Plaspy so the tracker can send location and telemetry data into your Plaspy fleet instance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact manufacturer-side steps such as the configuration tool, SMS commands, or USB/ Bluetooth workflows can vary by firmware, hardware revision, installation type, and vendor tools; verify device-specific instructions with the manufacturer when necessary.

## Configuration Overview

The purpose of the configuration process is to prepare the TS101 Basic EV CAN to communicate reliably with Plaspy, validate connectivity, and ensure the device appears in the platform for live tracking and telemetry. The TS101 Basic EV CAN supports multi constellation GNSS and CAN telemetry which, once directed to Plaspy, enables tracking and EV-specific data collection.

- Point the tracker to the Plaspy server endpoint so data uploads reach Plaspy in real time.
- Configure the transport protocol (UDP or TCP) and the shared Plaspy port to enable network connectivity.
- Validate cellular connectivity and APN settings so the device can establish a data session.
- Save and apply settings in the manufacturer configuration tool, then confirm the device reports to Plaspy.
- Verify visibility in Plaspy and check for telemetry such as location and CAN-derived events.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TS101 Basic EV CAN. These are the values Plaspy expects for incoming tracker connections.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices so the port value is consistent across models.

## Typical Requirements Before Setup

- Confirm the TS101 Basic EV CAN is powered and accessible for configuration (USB, Bluetooth, or the vendor web tool as applicable).
- Ensure the device has a valid cellular SIM and an active data plan if using the cellular data link.
- Know your mobile network APN and authentication details if required by your carrier.
- Access to the official iTriangle configuration method or vendor-provided tool for the TS101 Basic EV CAN.
- A Plaspy account and permissions to add or view devices on the Plaspy platform for validation.
- Familiarity with whether your installation requires UDP or TCP transport for tracker reporting.

## How This Tracker Connects to Plaspy

When configured, the TS101 Basic EV CAN sends GNSS location and CAN telemetry to Plaspy over the cellular data link. The device buffers records when coverage is poor and uploads stored records once connectivity is restored, allowing continuous visibility in Plaspy for fleet monitoring and event review.

- The tracker reports to the shared Plaspy server endpoint at d.plaspy.com (or 54.85.159.138) and port 8888.
- Choose UDP or TCP according to the device configuration options; Plaspy accepts either on port 8888.
- Plaspy automatically detects the tracker protocol and processes incoming telemetry and event messages.
- Telemetry such as location, CAN bus data, and I/O events are forwarded to Plaspy for live tracking, replay, and alerting.
- Offline buffered records are uploaded to the same server endpoint once a data session is available.

## Common Configuration Workflow

Follow these practical steps to configure the TS101 Basic EV CAN to report to Plaspy. Exact menus and command syntax depend on the iTriangle configuration tool or firmware.

1. Access the official iTriangle configuration method or software for the TS101 Basic EV CAN (USB, Bluetooth, SMS tool, or vendor web interface).
2. In the server or tracking settings, enter the Plaspy server address using d.plaspy.com or the server IP 54.85.159.138.
3. Set the destination port to 8888 which is the shared Plaspy port for all devices.
4. If the device requires a transport selection, choose UDP or TCP according to your preference or installation requirements.
5. Enter any required APN or cellular authentication details so the device can establish a data connection.
6. Apply or save the configuration changes in the manufacturer tool.
7. Restart the device if the tool or firmware requires a reboot for changes to take effect.
8. Validate that the device is reporting to Plaspy by checking device visibility and last reported time in your Plaspy account.

## Example Configuration Commands

The TS101 Basic EV CAN can be configured using different manufacturer methods such as USB configuration tools, Bluetooth utilities, or SMS commands. Exact commands and menus vary by firmware and tool, so the specific syntax is not provided here.

When using the iTriangle configuration tool, follow its interface to set the server to d.plaspy.com or 54.85.159.138 and the port to 8888, and select UDP or TCP if transport is required. If your deployment uses SMS-based configuration, consult the iTriangle SMS command reference for the exact strings to set the server address, port, and APN parameters.

Note: If you need command examples, refer to the official iTriangle configuration documentation or contact your vendor for the current firmware command set.

## Configuration Notes

- Firmware and configuration menu layouts can differ between hardware revisions and firmware versions; always confirm the exact procedure for your device revision.
- Choosing UDP or TCP affects delivery behavior; UDP is lightweight while TCP provides a connection-oriented session. Plaspy accepts both on port 8888.
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects to d.plaspy.com or 54.85.159.138.
- If you configure APN placeholders or carrier details, keep them secure and verify connectivity before installing the device permanently.
- When using SMS or Bluetooth configuration, ensure you are following the most recent iTriangle instructions to avoid deprecated commands.

## Why Use Plaspy with This Configuration

Using the TS101 Basic EV CAN with Plaspy provides a practical path to consolidate GNSS location, CAN-sourced EV telemetry, and I/O events into a single fleet management platform. This configuration enables live visibility, historical replay, and event-driven alerts which support fleet operations, EV monitoring, and anti-theft workflows.

Learn more about Plaspy and how it integrates with devices like the TS101 Basic EV CAN at https://www.plaspy.com. For the most current device-specific configuration details, firmware behavior, and command references, verify information with the manufacturer at https://www.itriangle.net/.
