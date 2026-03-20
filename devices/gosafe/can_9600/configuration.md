---
slug: /gosafe/can_9600/configuration
id: can_9600-configuration
sidebar_label: Configuration
title: Gosafe - CAN-9600 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the Gosafe CAN-9600 FMS interface to Plaspy using shared server settings and practical setup steps
keywords:
  - Gosafe CAN-9600 configuration
  - Gosafe CAN-9600 setup
  - CAN-9600 server configuration
  - Gosafe FMS interface
  - RS232 tracking integration
  - Plaspy device configuration
  - vehicle FMS tracking
  - truck FMS data integration
  - Gosafe tracker compatibility
  - GPS tracker platform setup
---

# Gosafe - CAN-9600 Configuration

This page documents the public configuration context for using the Gosafe CAN-9600 with the Plaspy platform. The CAN-9600 is an FMS interface designed to read vehicle CAN data using standard SEA J1939 and SEA J1708 protocols and forward that data to an RS232 serial output so it can be consumed by a compatible GPS tracker or computer. This guide explains the practical server and workflow information needed to integrate the device with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device reports in. All devices in Plaspy use the same port and Plaspy will attempt protocol detection once the tracker starts reporting. Exact manufacturer-side configuration steps can vary by firmware, hardware revision, installation type, and vendor tools, so always confirm device-specific details with the manufacturer documentation.

## Configuration Overview

The objective of the configuration process is to prepare the CAN-9600 and the connected tracker to send FMS and telemetry data to Plaspy for monitoring and reporting. In practical terms, configuration focuses on pointing the tracker or aggregator to the Plaspy endpoint, validating connectivity, and ensuring the FMS feed from the CAN-9600 is available to the tracking device.

- Configure the connected GPS tracker or aggregator to use the Plaspy server endpoint so FMS data forwarded from the CAN-9600 is delivered to the platform.
- Select the correct transport (UDP or TCP) on the tracker if required by the device interface.
- Set the shared Plaspy port so the platform receives incoming packets from the device.
- Validate that the RS232 output from the CAN-9600 is connected and supplying FMS frames to the tracking device.
- Verify the device appears in Plaspy and that FMS fields used in your workflow are reported.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy  

All devices in Plaspy use the same port, and the platform will automatically detect the tracker protocol after the device begins reporting to the endpoint above.

## Typical Requirements Before Setup

- Physical access to the CAN-9600 and the GPS tracker or computer that will consume the RS232 output.
- A compatible GPS tracker or aggregator that accepts RS232 FMS input and supports remote server configuration.
- Access to the official Gosafe configuration method or vendor software for initial device setup and troubleshooting.
- Network or SMS capability if a manufacturer or tracker tool requires SMS commands for configuration, including a working SIM and coverage when SMS setup is used.
- Power to the CAN-9600 and the connected tracker during configuration and validation steps.
- A way to restart or cycle power on the tracker and the CAN-9600 if required to apply settings.

## How This Tracker Connects to Plaspy

The CAN-9600 reads vehicle FMS data from the CAN bus and presents that information on an RS232 serial interface. A compatible GPS tracker or gateway ingests the RS232 stream and forwards the relevant telemetry and FMS payloads to the Plaspy server endpoint and port for processing and display.

- The CAN-9600 provides FMS frames to a connected tracker via RS232.
- The GPS tracker forwards data to d.plaspy.com (or 54.85.159.138) using port 8888.
- Transport can be UDP or TCP depending on the tracker; choose the transport your tracker supports.
- Plaspy automatically detects the tracker protocol once data arrives at the shared port.
- After reporting begins, device visibility and event reporting become available in Plaspy.

## Common Configuration Workflow

1. Access the official Gosafe documentation or the configuration software/method provided by your GPS tracker vendor to learn supported input mappings and setup commands.
2. Configure the connected tracker to report to d.plaspy.com or, if using an IP target, 54.85.159.138.
3. Set the reporting port to 8888 on the tracker (all devices in Plaspy use the same port).
4. If the tracker requires a transport selection, choose UDP or TCP according to device capability.
5. Save or apply the configuration in the tracker or gateway interface.
6. Restart the tracker and, if needed, the CAN-9600 or any intermediary gateway to ensure settings take effect.
7. Validate in Plaspy that the device is reporting and that expected FMS fields are visible in the platform.

## Example Configuration Commands

The CAN-9600 description provided does not include device-specific command strings for server setup. Exact configuration commands vary by the tracker or gateway you connect to the CAN-9600 and by the manufacturer's firmware. Use the official Gosafe documentation and your tracker vendor tools to enter the server domain or IP and port 8888, and to select UDP or TCP if required.

If your tracker supports SMS-based configuration you may use vendor SMS commands to set the server and port. Consult the tracker vendor manual for exact SMS command syntax and placeholders.

## Configuration Notes

- Firmware and hardware revisions can change available configuration options and command syntax; always confirm the exact steps for your production hardware version.
- Choose UDP or TCP based on the tracker’s capabilities and operational requirements; UDP is common for low-latency telemetry while TCP may be used for guaranteed delivery in some setups.
- The CAN-9600 provides FMS data over RS232; ensure proper serial wiring, baud rate, and input mapping on the consuming tracker are configured according to vendor instructions.
- SMS-based setup may be available but depends on the device or gateway being used; validate whether a working SIM card and SMS service are required for your configuration flow.
- When troubleshooting connectivity, verify both the server settings on the tracker and that Plaspy is receiving packets at d.plaspy.com port 8888.

## Why Use Plaspy with This Configuration

Using the CAN-9600 together with a compatible tracker and Plaspy enables fleet operators to combine vehicle FMS data with location telemetry for richer operational insights. This configuration helps teams monitor vehicle health indicators, fuel and engine metrics where supported by the FMS feed, and to centralize data in Plaspy for reporting and operational decision making.

To learn more about how Plaspy can receive and present FMS data from devices like the Gosafe CAN-9600, visit https://www.plaspy.com. For the most current device specific setup details, firmware instructions, and manufacturer guidance please verify the official Gosafe documentation at https://gosafesystem.com/ as manufacturer specifications and setup methods can change over time.
