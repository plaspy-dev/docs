---
slug: /mtx/mtx_tunnel/configuration
id: mtx_tunnel-configuration
sidebar_label: Configuration
title: Mtx - MTX Tunnel Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Mtx MTX Tunnel to connect with Plaspy server d.plaspy.com with practical setup steps
keywords:
  - Mtx MTX Tunnel configuration
  - Mtx MTX Tunnel setup
  - MTX Tunnel Plaspy
  - MTX Tunnel server configuration
  - MTX Tunnel GPS setup
  - Plaspy device integration
  - GPS tracker configuration guide
  - fleet tracking MTX Tunnel
  - MTX Tunnel GPRS configuration
  - MTX Tunnel Telnet SMS configuration
---

# Mtx - MTX Tunnel Configuration

This page covers the public configuration context for using the Mtx MTX Tunnel GPS tracker with the Plaspy platform. It summarizes the practical server settings and the typical steps you will use to point the device at Plaspy for location and telemetry reporting while referencing the device's public features such as GPRS reporting, Telnet and RS232 configuration channels, and SMS command support.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tool offered by the vendor, so use this guide as the Plaspy-focused reference and consult manufacturer documentation for device-specific commands and firmware details.

## Configuration Overview

The goal of this configuration is to prepare the MTX Tunnel to send location and status data to Plaspy reliably over GPRS and to validate visibility in the Plaspy platform. The MTX Tunnel supports multiple configuration interfaces which can be used to set the server endpoint and transport parameters required by Plaspy.

- Point the device to the Plaspy server endpoint so telemetry and positions are sent to the platform.
- Choose the transport (UDP or TCP) that matches your installation or device requirements.
- Set the device to use port 8888 which Plaspy uses for all incoming tracker connections.
- Verify GPRS connectivity, correct APN, and any SIM data settings required for the device to reach the internet.
- Confirm the device reports successfully to Plaspy and appears in the platform after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices which simplifies device-side configuration

## Typical Requirements Before Setup

- Device powered and accessible via the manufacturer configuration channel you plan to use (Telnet, RS232, SMS, or web tool)
- Active SIM card with data enabled and correct APN configured for GPRS connectivity
- Access to the MTX Tunnel firmware or vendor configuration tool and any credentials required for remote configuration
- The Plaspy server settings shown above (d.plaspy.com or 54.85.159.138 and port 8888) available to enter into the device
- A way to monitor device logs or status (Telnet session, serial console, or SMS replies) to validate successful connection
- Knowledge of whether your installation prefers UDP or TCP transport so you can select the correct option during setup

## How This Tracker Connects to Plaspy

When configured for Plaspy, the MTX Tunnel uses its GPRS data connection to open a TCP or UDP session toward Plaspy and then periodically sends GPS positions, telemetry, and status messages. Plaspy listens on the shared port and determines the device protocol automatically, allowing the platform to ingest messages without extra per-device server assignments.

- The tracker is configured to report to the shared Plaspy endpoint at d.plaspy.com or 54.85.159.138
- Communications occur on port 8888 using UDP or TCP depending on the device selection
- Plaspy automatically detects the protocol and parses messages for display in the platform
- Device telemetry such as inputs, movement events, or fallback cell based locations are sent to the same server endpoint
- After successful registration the device becomes visible in Plaspy for tracking and monitoring

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the MTX Tunnel (Telnet, RS232 console, vendor web tool, or SMS command interface).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 as supported by the device settings.
3. Set the port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection during setup.
5. Configure any required GPRS settings including the SIM APN and credentials needed to establish a data session.
6. Apply or save the configuration on the device and perform a restart if the device firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by monitoring device logs, Telnet output, SMS confirmation, or by checking visibility in the Plaspy platform after a short reporting interval.

## Example Configuration Commands

The MTX Tunnel supports several configuration channels (Telnet, RS232, and SMS). Exact command syntax and the available commands can vary by firmware or vendor utility. Because manufacturer commands and utilities change, the exact configuration commands are not listed here. Use the device vendor documentation or the official MTX Tunnel configuration tool to apply the following public values:

- Set server to d.plaspy.com or 54.85.159.138
- Set port to 8888
- Select UDP or TCP transport
- Configure APN and GPRS credentials for your SIM

If you need specific command examples for your firmware version, consult the MTX Tunnel manual or the vendor configuration guide for the exact SMS or Telnet command syntax.

## Configuration Notes

- Firmware differences may change command syntax, menu names, or available features; confirm your firmware revision before applying commands.
- Choose TCP or UDP based on your network and device behavior; some features (such as connection persistence) can differ between transports.
- For remote setup use Telnet or the vendor web utility when available; SMS configuration is useful when remote IP connectivity is not yet established.
- The device can act as an RS232 GPRS gateway or provide Telnet access; use the interface that best fits your installation and security model.
- Always verify successful reporting to Plaspy after configuration by checking Plaspy visibility and any device-side status output.

## Why Use Plaspy with This Configuration

Using the MTX Tunnel with Plaspy gives fleet and asset managers a straightforward way to aggregate GPS positions and telemetry over GPRS into a centralized platform. Because Plaspy uses a shared server endpoint and automatic protocol detection, integrating the tracker typically requires only setting the server address, port 8888, and choosing the preferred transport, simplifying deployment across many devices.

To learn more about Plaspy and how it integrates with devices like the MTX Tunnel visit https://www.plaspy.com. Please verify the latest device specific configuration methods and firmware behavior with the manufacturer at http://www.mtxtunnel.com/ as manufacturer specifications and setup steps can change over time.
