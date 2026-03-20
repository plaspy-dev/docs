---
slug: /navtelekom/signal_s_2117/configuration
id: signal_s_2117-configuration
sidebar_label: Configuration
title: Navtelekom - Signal S-2117 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Navtelekom Signal S-2117 showing Plaspy server settings and practical steps to configure the tracker for platform visibility
keywords:
  - Navtelekom Signal S-2117 configuration
  - Navtelekom Signal S-2117 setup
  - Signal S-2117 Plaspy
  - Signal S-2117 server configuration
  - Signal S-2117 GPS tracker setup
  - Plaspy tracker integration
  - GPS platform configuration guide
  - vehicle tracking Signal S-2117
  - fleet tracking Navtelekom
  - tracker protocol detection
---

# Navtelekom - Signal S-2117 Configuration

This page documents the public configuration context for using the Navtelekom Signal S-2117 with Plaspy. It focuses on the shared server settings and the practical steps you can follow to point the device to Plaspy so the tracker becomes visible in the platform for location, alarm, and remote control reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The Signal S-2117 supports GSM and GLONASS/GPS location reporting and offers interfaces such as RS-485 and 1-Wire that are useful for auxiliary sensors; confirm device-specific configuration procedures with Navtelekom documentation before making changes.

## Configuration Overview

Setting up the Signal S-2117 for Plaspy prepares the device to send position and event data to the platform and ensures the tracker is discoverable and manageable within Plaspy. The following items summarize the practical goals of the configuration process.

- Configure the device to report to the Plaspy server endpoint so location and alarm events arrive at the platform.
- Ensure the device has correct cellular connectivity and any required APN or network settings for data transfer.
- Select the transport protocol (UDP or TCP) required by the device firmware and point it to Plaspy’s port so Plaspy can receive messages.
- Validate connectivity and confirm the device appears in Plaspy, verifying position updates and basic events.
- Save and apply configuration on the tracker and restart if the device firmware requires a reboot to apply network changes.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the Signal S-2117. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so these values are consistent across device types.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- Device must have power and be accessible for configuration by the installer or technician.
- Active SIM card with a data plan and GSM coverage where the vehicle will operate because the Signal S-2117 uses cellular connectivity.
- Antenna connections and any external sensors (RS-485 devices, 1-Wire sensors) installed and secured if telemetry from those sensors is needed.
- Access to the official Navtelekom configuration method such as manufacturer PC software, web interface, or SMS/AT command process.
- A record of device identifiers such as IMEI so you can verify the correct unit in Plaspy after registration.
- Knowledge of carrier APN settings if the SIM requires custom APN, username, or password to establish a data session.

## How This Tracker Connects to Plaspy

The Signal S-2117 sends positional fixes and event notifications to the Plaspy server endpoint so fleet managers can monitor vehicles, respond to alarms, and use remote control features. Configure the device to target the shared Plaspy endpoint and port, and Plaspy will identify the correct protocol automatically.

- The tracker transmits GNSS position data to the Plaspy server domain or IP on the specified port.
- Alarm and panic events are forwarded to Plaspy so alerts can be presented to operators.
- Telemetry from interfaces such as RS-485 and 1-Wire can be sent to Plaspy when configured and supported by the device firmware.
- The device is pointed at the shared Plaspy server endpoint and port so all messages arrive at the same platform endpoint.
- Plaspy’s automatic protocol detection identifies the tracker protocol and decodes messages for display in the platform.

## Common Configuration Workflow

Follow these practical steps as a typical workflow for configuring the Signal S-2117 to work with Plaspy. Exact menus and commands depend on Navtelekom firmware and the manufacturer tool used.

1. Access the official Navtelekom configuration method or software for the Signal S-2117 (manufacturer PC tool, web UI, or SMS command interface).
2. Ensure the device has power, SIM card inserted, and GSM signal before attempting network configuration.
3. Enter the Plaspy server address using either the server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the destination port to 8888; note that Plaspy uses this same port for all devices.
5. Choose UDP or TCP as the transport if the device requires a transport selection; pick the transport supported by your firmware and network.
6. Apply or save the configuration in the device management tool and restart the device if required by the firmware.
7. Validate that the tracker reports to Plaspy by checking for initial position updates and event messages in the platform.

## Example Configuration Commands

The Signal S-2117 configuration method varies by the Navtelekom tool and firmware revision. There are no universal public commands included on this page. Use Navtelekom official configuration software or the device manual for exact command syntax and order. Typical manufacturer tools will allow you to set the server domain or IP, port, transport, and APN within a guided interface.

If you have manufacturer-provided SMS or AT-style commands from Navtelekom, apply them in the order specified in the official documentation. Keep placeholders such as APN credentials available if required by the device setup.

## Configuration Notes

- Firmware differences and hardware revisions can change menu locations and supported command syntax; record the device firmware version before making changes.
- When choosing UDP versus TCP, consider network reliability. Plaspy accepts either transport, and you must select the option compatible with your device firmware.
- Confirm APN, APN username, and APN password with the mobile operator when configuring cellular data access; incorrect APN will prevent the device from establishing a data session.
- If using external sensors over RS-485 or 1-Wire, verify that the device firmware supports forwarding those sensor values to the tracking server.
- Always consult Navtelekom documentation for device-specific configuration steps and any SMS command reference.

## Why Use Plaspy with This Configuration

Configuring the Navtelekom Signal S-2117 to report to Plaspy gives operations teams consistent visibility into vehicle location, alarms, and connected sensor data through a single platform. Using the shared Plaspy endpoint and port simplifies deployment across mixed fleets because all devices use the same destination and the platform automatically detects the device protocol.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device-specific setup instructions, firmware notes, and manufacturer tools, verify details with the official Navtelekom website https://www.navtelecom.ru/ since manufacturer specifications and setup methods can change over time.
