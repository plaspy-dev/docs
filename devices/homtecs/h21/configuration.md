---
slug: /homtecs/h21/configuration
id: h21-configuration
sidebar_label: Configuration
title: Homtecs - H21 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Homtecs H21 3G router to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - Homtecs H21 configuration
  - Homtecs H21 setup
  - Homtecs H21 server configuration
  - Homtecs H21 Plaspy
  - Homtecs H21 GPS router configuration
  - Homtecs H21 3G router setup
  - Homtecs H21 APN setup
  - Homtecs H21 network configuration
  - Homtecs H21 firmware configuration
  - Homtecs H21 industrial router setup
---

# Homtecs - H21 Configuration

This page covers the public configuration context for using the Homtecs H21 3G Router with the Plaspy platform. It focuses on the shared server settings and practical setup guidance required to point an H21 device at Plaspy so the device can appear and report in the platform. The content is based on public device capabilities and the Plaspy server settings required for connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for incoming connections. Manufacturer side configuration steps for the H21 can vary by firmware version, hardware revision, installation type, and vendor management tools, so use this guide for practical direction and confirm device behavior against official Homtecs documentation.

## Configuration Overview

Configuring the H21 for Plaspy prepares the router to establish persistent IP connections to Plaspy and report telemetry or routed device traffic as required by your deployment. The configuration process is primarily about making sure the device has network access, the correct server endpoint, and transport settings so Plaspy can receive and interpret the device connection.

- Point the H21 to the Plaspy server endpoint so data is routed to the platform.
- Configure transport settings (UDP or TCP) and the shared port used by Plaspy.
- Provide or verify APN and SIM settings so the H21 can reach the public internet.
- Save and apply the changes, then validate that the H21 appears in Plaspy.
- Use manufacturer management tools or the H21 web/CLI interface to make and confirm changes.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Homtecs H21:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Note that Plaspy uses the same port 8888 for all supported devices and will detect the device protocol automatically once the device connects to d.plaspy.com or 54.85.159.138.

## Typical Requirements Before Setup

- Ensure the H21 is powered and physically installed with cellular antennas and any required I/O connections.
- Confirm the router has a valid data SIM or fixed IP SIM and that APN settings are available.
- Access to the H21 management interface via web UI, CLI, SSH, or manufacturer configuration tool.
- Knowledge of the operator APN and credentials if required for data connectivity.
- A Plaspy account or organizational access so you can confirm the device appears in the platform after configuration.
- Access to Homtecs documentation for firmware specific instructions and optional features such as dual SIM or GPS.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the H21 establishes outbound network connections to the shared Plaspy server endpoint and port so the platform can receive telemetry and connection state. Plaspy receives the device traffic and automatically identifies the protocol to parse the incoming data for that device.

- The H21 is pointed to d.plaspy.com or 54.85.159.138 as the destination server.
- The device uses port 8888 for outbound telemetry and connection sessions.
- Transport can be UDP or TCP depending on the H21 configuration; choose the transport supported by the deployment.
- Plaspy automatically detects the tracker protocol and processes the incoming messages.
- If the H21 has optional GPS telemetry or attached tracking devices, those data streams are relayed to Plaspy when properly routed.

## Common Configuration Workflow

1. Access the official Homtecs configuration method such as the H21 web interface, CLI, SSH, or Homtecs management tool.
2. Configure the cellular connection including SIM selection and APN values so the H21 has internet access.
3. Enter the Plaspy server by hostname d.plaspy.com or by IP 54.85.159.138 in the device server/destination field.
4. Set the destination port to 8888 in the server settings.
5. Choose UDP or TCP transport if the device requires a manual transport selection.
6. Apply or save the configuration and, if required, restart the H21 to activate the new server settings.
7. Validate that the device reports to Plaspy by checking device status in the Plaspy platform or by confirming successful connection logs on the router.

## Example Configuration Commands

This model configuration area does not include specific public command strings for the H21. Exact configuration commands and syntax depend on the Homtecs web UI, CLI, or the manufacturer configuration tools and vary by firmware version. When using command line or SMS style configuration, the same public Plaspy values apply:

- Destination server domain d.plaspy.com or server IP 54.85.159.138
- Destination port 8888
- Transport UDP or TCP as required by the device

Refer to the Homtecs H21 administrative guide for the exact CLI or web UI commands to set server, port, and transport on your firmware.

## Configuration Notes

- Firmware and hardware revisions may change the menu names and exact CLI syntax used to set server and port values.
- If the H21 supports dual SIM, verify which SIM is active when you point the device to Plaspy to avoid routing confusion.
- Choose UDP or TCP based on your network and reliability needs; Plaspy supports both and detects the protocol automatically.
- When using dynamic IP SIMs, ensure APN and any NAT traversal settings are configured so outbound connections to d.plaspy.com succeed.
- Keep manufacturer documentation handy for features such as watchdog, automatic reboot, and remote firmware upgrades that can affect connectivity.

## Why Use Plaspy with This Configuration

Using Plaspy with the Homtecs H21 lets organizations centralize visibility and monitoring for remote sites that rely on industrial 3G connectivity. The H21's industrial design and remote management features pair well with Plaspy's server endpoint and automatic protocol detection to provide a straightforward way to surface device connectivity and telemetry into a single platform.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. Manufacturer specifications and setup methods can change over time, so verify the latest H21 configuration details and firmware behaviour at the Homtecs website http://www.homtecsm2m.com/ before deploying.
