---
slug: /homtecs/h20/configuration
id: h20-configuration
sidebar_label: Configuration
title: Homtecs - H20 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the Homtecs H20 router with Plaspy platform server settings
keywords:
  - Homtecs H20 configuration
  - Homtecs H20 setup
  - Homtecs H20 server configuration
  - H20 Plaspy configuration
  - Homtecs telemetry setup
  - Homtecs router configuration
  - Plaspy device setup
  - H20 network settings
  - Homtecs APN and server
  - H20 M2M configuration
---

# Homtecs - H20 Configuration

This page provides public configuration guidance for integrating the Homtecs H20 3G router with the Plaspy tracking platform. It focuses on the shared Plaspy server settings and the practical steps you can follow using the H20 manufacturer tools. The content here uses only public information and is intended to help technicians and integrators prepare the H20 for reliable communication with Plaspy.

Plaspy uses a single, shared server endpoint and port for supported devices and automatically detects the device protocol when a connection is received. Manufacturer side configuration methods for the H20 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so always cross check steps against Homtecs documentation before applying them.

## Configuration Overview

This configuration process prepares the Homtecs H20 to send telemetry and connectivity status to Plaspy and ensures the device appears correctly in the Plaspy platform. The goal is to point the H20 at the Plaspy server endpoint, confirm transport and port settings, and validate that the device is reporting after a restart or configuration push.

- Configure the H20 network settings so it can reach the Plaspy server endpoint
- Enter the Plaspy server domain or IP and set the common Plaspy port
- Select the transport protocol if required by the H20 and save the configuration
- Restart or reinitialize the router if the manufacturer workflow requires it
- Validate connectivity and device visibility in Plaspy once the H20 is online

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the device on the manufacturer side or via the H20 management interface:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy uses the same port for all supported devices and will detect the correct protocol automatically when a connection from the device reaches the Plaspy endpoint.

## Typical Requirements Before Setup

- Access to the H20 management method provided by Homtecs such as the web UI, CLI, SSH, or a vendor management platform
- A powered and network connected H20 with a working SIM or WAN connection if cellular is required
- Knowledge of the device APN or fixed IP SIM settings if using mobile broadband
- Administrative credentials to modify network and server parameters on the H20
- A plan to test connectivity and validate that the device reaches d.plaspy.com or 54.85.159.138 on port 8888
- Backup of existing configuration and a recovery method in case a rollback is needed

## How This Tracker Connects to Plaspy

When configured for Plaspy, the H20 is set to send device connectivity and telemetry data to the shared Plaspy server endpoint and port. Plaspy receives the incoming connection and determines the appropriate protocol handler automatically so that the device is visible in the platform.

- The H20 sends outbound packets to d.plaspy.com or 54.85.159.138
- All devices connect to the shared Plaspy port 8888
- Choose UDP or TCP on the H20 if the device requires explicit transport selection
- Plaspy performs automatic protocol detection when a device connects
- After successful connection the device should appear in the Plaspy platform and report status and telemetry

## Common Configuration Workflow

1. Access the official Homtecs configuration method for the H20 such as the web UI, CLI, SSH, or Homtecs management platform.
2. In the server or remote host settings enter either d.plaspy.com or 54.85.159.138 as the destination.
3. Set the destination port to 8888 which is the shared Plaspy port used for all supported devices.
4. If the H20 requires transport selection choose either UDP or TCP according to your network preferences or Homtecs guidance.
5. Apply or save the configuration in the H20 management interface.
6. Restart the device if the configuration workflow or firmware requires a reboot to activate the new server settings.
7. Validate that the H20 is reporting to Plaspy by checking device presence and telemetry in the Plaspy platform or by confirming outbound connections reach d.plaspy.com or 54.85.159.138 on port 8888.

## Example Configuration Commands

The Homtecs H20 supports configuration via web UI, CLI, SSH and vendor platform methods. Exact command syntax and menu locations vary by firmware and management tool. Because manufacturer commands and web form layouts differ by release, the precise commands are not included here. Use the H20 management method to:

- Point the device to d.plaspy.com or 54.85.159.138
- Set the destination port to 8888
- Choose UDP or TCP if required
- Save and apply the settings then reboot if required

Refer to the Homtecs H20 user manual or CLI reference for explicit command examples and the exact parameter names used in your firmware version.

## Configuration Notes

- Firmware differences can change parameter names and menu locations in the H20 web UI or CLI; verify the exact fields in the device manual before applying settings.
- Select UDP or TCP based on network conditions and Homtecs recommendations. Plaspy supports both transports and will accept either on port 8888.
- If using mobile broadband with an APN, ensure the APN settings are configured correctly in the H20 so it can reach d.plaspy.com or 54.85.159.138.
- Fixed IP SIMs and Dynamic DNS are supported by the H20 hardware family; confirm which SIM type you are using and configure the H20 accordingly.
- Always keep a backup of the existing device configuration and a known recovery method in case you need to revert changes.

## Why Use Plaspy with This Configuration

Using the Homtecs H20 with Plaspy provides a straightforward way to bring an industrial 3G router online with a fleet and telemetry platform. Pointing the H20 to the shared Plaspy endpoint and port enables consistent device onboarding, centralized visibility, and consolidated event reporting for operations and remote monitoring teams.

To learn more about Plaspy and how it manages device connectivity and telemetry visit https://www.plaspy.com. For the most current Homtecs H20 device specific setup steps, firmware notes, and configuration references verify details on the Homtecs official site http://www.homtecsm2m.com/ since manufacturer configuration methods and firmware behavior can change over time.
