---
slug: /ulbotech/t363a/configuration
id: t363a-configuration
sidebar_label: Configuration
title: Ulbotech - T363A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ulbotech T363A GPS tracker and practical setup steps to connect with Plaspy tracking platform
keywords:
  - Ulbotech T363A configuration
  - T363A setup guide
  - Ulbotech GPS tracker Plaspy
  - OBD II tracker configuration
  - fleet tracker Plaspy integration
  - T363A server configuration
  - Plaspy device setup
  - vehicle telematics configuration
  - T363A tracking software setup
  - GPS tracker platform setup
---

# Ulbotech - T363A Configuration

This page documents the public configuration context for using the Ulbotech T363A OBD GPS tracker with Plaspy. It focuses on the practical, public-facing settings and steps that prepare the device to report location and OBD telemetry into the Plaspy platform. The content is aimed at installers, fleet administrators, and technical users who need clear, platform-oriented setup guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for incoming connections. Exact manufacturer-side setup steps can vary with firmware version, hardware revision, installer tools, and regional vendor packaging. Use the guidance here together with the official Ulbotech documentation and your device tools to complete the integration.

## Configuration Overview

This configuration prepares the T363A to send position and vehicle telemetry to the Plaspy backend so that vehicles become visible and report events in your Plaspy account. The process aligns the device network endpoint, transport, and basic reporting behavior with Plaspy's shared server settings and then verifies that the device appears in the platform.

- Point the tracker to the Plaspy server endpoint and confirm transport settings
- Ensure the tracker has cellular connectivity and required power to send GPRS data
- Enable periodic GNSS and OBD reporting so Plaspy receives location and vehicle telemetry
- Validate device visibility and event reporting in the Plaspy platform
- Optionally configure immobilizer output and Bluetooth pairing according to your workflows

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the T363A or verifying device network parameters:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Note that all devices in Plaspy use the same port and that Plaspy performs automatic protocol detection to simplify device onboarding.

## Typical Requirements Before Setup

- Confirm a working SIM card and GPRS connectivity compatible with the device radio
- Access to the vehicle OBD-II port for plug and play installation and power
- Access to Ulbotech configuration tools or the vendor supplied setup method such as micro USB configuration or SMS commands when supported
- A Plaspy account and access to your organization or fleet instance to verify device registration
- Device power and backup battery charged so the tracker can report after configuration
- Knowledge of any regional operator requirements such as APN settings if required by the device firmware

## How This Tracker Connects to Plaspy

The T363A reports GNSS positions and OBD-derived telemetry to the Plaspy backend over GPRS using either TCP or UDP transport. Once configured to target Plaspy's shared endpoint and port, the tracker delivers location, event, and telemetry records for live monitoring and historical reporting.

- The device is configured to report to the shared Plaspy server endpoint and port
- GNSS positions and OBD PIDs are packaged and sent over GPRS to Plaspy
- Events such as ignition changes, harsh driving, or immobilizer actions are reported to the platform
- Plaspy receives the stream and automatically detects the tracker protocol to parse messages
- Visibility in Plaspy enables live maps, geofence notifications, and telematics reports

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software provided with the T363A such as local USB tools, vendor web tools, or supported SMS commands.
2. In the device server or network settings enter the Plaspy endpoint using either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888 as the device port for Plaspy communication.
4. If required by the device, choose the transport type UDP or TCP on port 8888.
5. Apply or save the configuration to the device via the vendor tool or command interface.
6. Restart the device if the configuration method or firmware requires a reboot to activate network changes.
7. Validate that the device reports successfully to Plaspy and appears in your account with expected telemetry and location updates.

## Example Configuration Commands

The exact command set for the T363A depends on the manufacturer firmware and the configuration tool you use. Ulbotech devices commonly support configuration via micro USB, vendor software, or SMS based on firmware. Because model specific commands may vary, consult the Ulbotech documentation or vendor tool for the exact syntax.

If you are working with SMS based configuration or a vendor command interface, typical public steps would include sending the server, port, and transport values to the device. For example the logical steps you will perform with your vendor tool are:

- Set server domain or IP to d.plaspy.com or 54.85.159.138
- Set port to 8888
- Select UDP or TCP as the transport if required
- Save and reboot the device

Refer to Ulbotech documentation for exact commands and supported placeholders if your firmware exposes SMS or CLI configuration.

## Configuration Notes

- Firmware differences can change command syntax and available configuration options; check the device firmware revision before applying commands.
- In regions where APN or operator settings are required, ensure the correct APN values are configured in the device according to your SIM provider and the Ulbotech manual.
- Selecting UDP or TCP may affect packet delivery characteristics; use the transport best suited for your network reliability and vendor recommendations.
- The device supports local configuration via micro USB and remote updates via FOTA where available; use local tools for initial provisioning if preferred.
- Market or hardware revisions can change physical connectors or indicators so verify your unit matches the documentation you are following.

## Why Use Plaspy with This Configuration

Using the T363A with Plaspy gives fleet operators and asset owners consistent visibility into vehicle location and OBD-derived telemetry without complex per device server setup. Pointing the tracker to Plaspy's shared endpoint enables automatic protocol detection and simplifies onboarding so devices appear quickly in the platform for live tracking, geofence alerts, and telematics reports.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and manufacturer details verify information on the Ulbotech site at http://www.ulbotech.com/ as configuration methods and firmware behavior may change over time.
