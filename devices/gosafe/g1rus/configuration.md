---
slug: /gosafe/g1rus/configuration
id: g1rus-configuration
sidebar_label: Configuration
title: Gosafe - G1RUS Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the Gosafe G1RUS tracker and how to connect it to Plaspy using shared server settings and practical setup steps
keywords:
  - Gosafe G1RUS configuration
  - Gosafe G1RUS setup
  - G1RUS Plaspy setup
  - Gosafe tracker Plaspy
  - G1RUS server configuration
  - G1RUS GPS tracker configuration
  - asset tracker configuration
  - vehicle tracking configuration
  - Gosafe installation guide
  - tracker server settings
---

# Gosafe - G1RUS Configuration

This page covers the public configuration context for using the Gosafe G1RUS tracker with Plaspy. It describes the shared server settings Plaspy requires, explains the practical steps you will typically perform on the manufacturer side, and highlights what to verify before the device is considered fully connected and visible in the Plaspy platform. The guidance below uses only public configuration details and focuses on preparing the G1RUS for reliable long term deployments.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this page as a practical checklist for integration and confirm any device-specific commands or menu flows against Gosafe documentation or your installer tools.

## Configuration Overview

The goal of G1RUS configuration for Plaspy is to point the tracker at the Plaspy server, select the appropriate transport, and validate that location and telemetry messages arrive at the platform. Configuration ties the device into Plaspy’s single endpoint model so the platform can automatically interpret the tracker protocol and begin showing live updates and alerts.

- Set the tracker to report to Plaspy using the shared Plaspy endpoint and port.
- Choose the transport mode supported by the device and network, UDP or TCP.
- Provide any required cellular connectivity details such as a working SIM and correct APN on devices that require it.
- Save and apply the configuration, then power cycle or restart the device if the manufacturer recommends it.
- Validate connectivity by confirming the device appears in Plaspy and is sending position and status updates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device preference
- Plaspy automatically detects the tracker protocol so the same port is used for all devices

## Typical Requirements Before Setup

- A powered G1RUS unit with adequate battery or external power connected for configuration and testing.
- Active cellular service or embedded SIM enabled for data on devices that rely on GSM/GPRS communications.
- Access to the official Gosafe configuration method such as the manufacturer app, web portal, serial tool, or SMS command set.
- Device identifier information such as IMEI so you can match the tracker to the Plaspy account view or inventory.
- Knowledge of the device firmware version and hardware revision because configuration menus and commands may differ by version.
- Optional accessories connected and tested if you plan to enable external sensors, accelerometer events, or Bluetooth integrations.

## How This Tracker Connects to Plaspy

When configured, the G1RUS sends GNSS fixes and telemetry to the Plaspy server endpoint and port. Plaspy ingests location, movement events, and device status messages and displays them in the platform for real time monitoring and historical reporting.

- The tracker is set to transmit data to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on your device settings and network considerations.
- Plaspy automatically detects the tracker protocol and decodes incoming messages for map display, alerts, and reports.
- Telemetry such as accelerometer events, digital I/O status, and battery information is forwarded to Plaspy when the device is configured to include those fields.
- After configuration Plaspy will show the device online when messages are successfully received on the shared port.

## Common Configuration Workflow

1. Access the official Gosafe configuration method or software provided for the G1RUS (manufacturer app, serial tool, or SMS command interface).
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP address 54.85.159.138 in the device server or host field.
3. Set the device port to 8888. Note that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP for the transport if the device requires an explicit selection; pick the transport best supported by your network.
5. Apply or save the configuration in the device tool or send the appropriate save/commit command.
6. Restart or power cycle the G1RUS if the manufacturer instructions require a reboot to apply server changes.
7. Validate that the device reports to Plaspy by checking for incoming positions and status on the platform and confirming the device shows online.

## Example Configuration Commands

The G1RUS supports multiple configuration interfaces and the exact command syntax or menu flow depends on manufacturer firmware and the tool you use. Gosafe provides device configuration over manufacturer tools, serial connections, or SMS command sets in many deployments. Because specific commands and placeholders vary by firmware and vendor tool, consult the official Gosafe configuration guide or the device interface for exact command syntax.

If you use SMS-based configuration on devices that support it, typical public steps are:
- Use the manufacturer SMS format to set server host to d.plaspy.com or 54.85.159.138.
- Use the manufacturer SMS format to set the port to 8888.
- Use the SMS save or reboot command as specified by Gosafe.

Refer to Gosafe documentation for exact SMS strings or CLI commands for your firmware version.

## Configuration Notes

- Firmware differences can change the exact configuration menu labels, SMS strings, or serial command syntax. Verify commands against the device firmware version.
- Choose UDP or TCP based on network reliability and how your carrier treats short packets; both are supported by Plaspy on port 8888.
- Ensure the device APN and SIM data plan are correct if the unit uses cellular data for TCP/UDP uploads.
- For long unattended deployments, confirm power strategy and reporting profile to balance battery life and update frequency.
- Test a single device end to end in Plaspy before deploying a fleet to confirm message parsing and expected telemetry fields are visible.

## Why Use Plaspy with This Configuration

Configuring the G1RUS to report to Plaspy provides reliable visibility for trailers, containers, and other high value assets. Plaspy’s automatic protocol detection and shared server endpoint simplify integration so devices that support TCP or UDP can be brought online with a consistent configuration approach. Using Plaspy lets fleet managers and asset owners receive live locations, conditional alerts, and telemetry-based reports that improve operational oversight and response times.

Learn more about Plaspy and how it supports asset tracking and fleet management at https://www.plaspy.com. For device specific commands, firmware details, and the most current setup methods for the G1RUS, verify the manufacturer documentation at https://gosafesystem.com/.
