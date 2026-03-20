---
slug: /homtecs/g50/configuration
id: g50-configuration
sidebar_label: Configuration
title: Homtecs - G50 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Homtecs G50 router showing how to set up connectivity with Plaspy using shared server settings and practical steps
keywords:
  - Homtecs G50 configuration
  - Homtecs G50 setup
  - Homtecs G50 Plaspy
  - G50 server configuration
  - G50 platform setup
  - Homtecs router configuration
  - G50 fleet tracking setup
  - Plaspy device configuration
  - Plaspy server settings
  - 4G IoT router configuration
---

# Homtecs - G50 Configuration

This page covers the public configuration context for using the Homtecs G50 with Plaspy. It describes the shared server settings Plaspy expects, explains the general workflow to point a device to the Plaspy server, and highlights practical considerations based on the G50 router description. The goal is to help technical integrators and installers prepare the device for connectivity and visibility in Plaspy.

The Homtecs G50 is a rugged 4G LTE industrial router with multiple interfaces and remote management features. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps for the G50 can vary by firmware revision, hardware configuration, installation type, and vendor tools, so validate any device-specific steps against Homtecs documentation.

## Configuration Overview

Preparing the G50 to communicate with Plaspy focuses on network endpoint configuration, transport selection, and verifying that the device can reach the platform. The configuration process is primarily about ensuring the G50 reports to Plaspy's shared endpoint and that the router is reachable and stable on a mobile broadband link.

- Configure the device to send telemetry or routed data to the Plaspy endpoint so the platform can ingest device messages.
- Choose the transport method supported by the device firmware and point transport settings to the shared Plaspy server.
- Validate connectivity from the G50 to Plaspy and confirm the device appears in the platform.
- Use manufacturer tools or the built in web/CLI interface on the G50 to apply and save settings.
- Verify any required APN or SIM level settings on the cellular connection to allow outbound connections to Plaspy.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the G50 to report to Plaspy. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device requirements  
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Stable power to the G50 and any attached modules or serial devices.
- Active cellular connectivity and a SIM provisioned for data if using the router's mobile broadband link.
- Access to the Homtecs configuration interface or official manufacturer software for the G50.
- Knowledge of the G50 firmware version and any release notes that affect network or serial behavior.
- Administrative access to save settings and reboot the device after configuration.
- Access to Plaspy account or platform contacts to confirm device visibility after configuration.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the device sends device data to the shared Plaspy server endpoint and port. Plaspy listens on the same port for all devices and will detect the protocol the device uses, simplifying platform-side routing.

- The G50 is configured to send outbound messages to d.plaspy.com or 54.85.159.138.
- Traffic is sent on port 8888 using the transport selected on the device (UDP or TCP).
- Plaspy receives the device data and maps messages according to the detected protocol.
- Once messages arrive, the device becomes visible in Plaspy for monitoring and event reporting.
- Platform operators can then verify telemetry and connectivity status through Plaspy.

## Common Configuration Workflow

1. Access the official Homtecs configuration method such as the G50 web interface, serial console, or Homtecs configuration utility.
2. In the network or server settings, enter the Plaspy server address either as domain d.plaspy.com or IP 54.85.159.138.
3. Set the destination port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection for outbound connections.
5. Apply or save the configuration through the G50 interface and commit any pending changes.
6. Restart the device if the firmware requires a reboot to activate the new server settings.
7. Validate that the device reports to Plaspy by checking for incoming messages or device visibility on the platform.

## Example Configuration Commands

The G50 supports multiple configuration methods and the exact commands or UI fields can vary by firmware and vendor tools. Because configuration methods vary across Homtecs firmware releases, consult the official Homtecs documentation or configuration utility for precise command syntax. If you use a command line or SMS style interface provided by Homtecs, translate the server domain or IP and port values from the Plaspy Server Settings section above into the device's command format.

## Configuration Notes

- Firmware differences can change menu locations, available transports, and exact field names in the G50 configuration interface.
- If the device supports both TCP and UDP transports, test both if you encounter connectivity issues; Plaspy will auto detect the protocol once messages arrive.
- Remote management features on the G50 can simplify bulk deployments but validate saved profiles before wide rollout.
- Use the G50 remote log and monitoring functions to confirm outbound connections to d.plaspy.com or 54.85.159.138 and port 8888.
- Keep manufacturer release notes handy when upgrading firmware as network behavior and configuration options may change.

## Why Use Plaspy with This Configuration

Using the Homtecs G50 with Plaspy provides a way to bring ruggedized cellular connectivity into Plaspy for device visibility and operational monitoring. The shared Plaspy server settings and automatic protocol detection reduce the need for unique platform endpoints per device, simplifying fleet scale deployments and integration workflows.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup information with Homtecs at http://www.homtecsm2m.com/
