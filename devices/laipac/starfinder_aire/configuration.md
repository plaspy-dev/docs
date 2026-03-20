---
slug: /laipac/starfinder_aire/configuration
id: starfinder_aire-configuration
sidebar_label: Configuration
title: Laipac - StarFinder AIRE Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting Laipac StarFinder AIRE to Plaspy using shared server settings and practical setup steps
keywords:
  - Laipac StarFinder AIRE configuration
  - Laipac tracker setup
  - StarFinder AIRE Plaspy configuration
  - GPS tracker server settings
  - Plaspy device integration
  - vehicle tracking setup
  - GPS platform configuration
  - tracker monitoring setup
  - Laipac device configuration
  - fleet tracking Plaspy
---

# Laipac - StarFinder AIRE Configuration

This page documents the public configuration context for using the Laipac StarFinder AIRE with the Plaspy platform. It focuses on the practical server settings and the general steps you will apply to prepare the device to report to Plaspy for visibility, alerts, and tracking. Use this guide together with the official Laipac documentation and any vendor tools you have for the device.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools. The StarFinder AIRE supports features such as GSM GPRS connectivity, geo fencing, motion detection, relay outputs, and over the air parameter updates, which are commonly used when integrating with platforms like Plaspy.

## Configuration Overview

Configuring the StarFinder AIRE for Plaspy ensures the device can reach the Plaspy endpoint, authenticate or register with the platform where required by your workflow, and report telemetry and alert events for live monitoring. This process typically prepares the tracker for reliable communication and verifies the device appears in the Plaspy system.

- Enter the shared Plaspy server endpoint and network port so the tracker can establish uplink connectivity
- Select the transport protocol the device supports, UDP or TCP, and confirm the device setting
- Verify the tracker sends position and event messages so the device becomes visible in Plaspy
- Save and apply configuration changes and restart the tracker when required to activate the new settings
- Validate alerts such as geo fence events, motion alerts, and power disconnects arrive in Plaspy

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the StarFinder AIRE. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy performs automatic protocol detection for incoming tracker connections

## Typical Requirements Before Setup

- A charged StarFinder AIRE with power applied and any required external antenna connected
- A valid SIM card provisioned for GPRS data if you plan to use cellular data for reporting
- Access to the official Laipac configuration method or software such as the programming cable or OTA configuration tool
- A Plaspy account or access to your Plaspy deployment so you can confirm the device appears after configuration
- The micro USB programming cable or other accessory if required for local configuration
- Knowledge of the device IMEI or identifier used by your Plaspy account for device registration

## How This Tracker Connects to Plaspy

The StarFinder AIRE typically reports position and event data to the Plaspy endpoint over GPRS using the configured transport. Once configured to point to Plaspy, the device will establish sessions and transmit messages that Plaspy ingests and maps to your fleet views and alerts.

- Device uplinks are directed to the shared Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888
- The tracker can use UDP or TCP transport when sending data to Plaspy depending on the device setting
- Plaspy automatically detects the protocol used by the tracker so the same port can be used across devices
- Typical reported events include real time position updates, geo fence in out alerts, motion or impact alerts from the G sensor, and power disconnect notifications
- Once messages reach Plaspy the device becomes visible in the platform for tracking and analysis

## Common Configuration Workflow

1. Access the official Laipac configuration method or software provided by the vendor, for example using the micro USB programming cable, the manufacturer configuration utility, or over the air parameter updates
2. Locate the TCP UDP server or remote server settings in the device configuration interface
3. Enter the server as d.plaspy.com or alternatively use the server IP 54.85.159.138
4. Set the port to 8888 which Plaspy uses for all supported devices
5. Choose UDP or TCP transport if the device requires an explicit transport selection
6. Apply or save the configuration to the device and restart the tracker if the device requires a reboot to apply settings
7. Validate that the device reports to Plaspy by checking your Plaspy account for the device’s incoming messages and status

## Example Configuration Commands

The exact commands and command format used to configure the StarFinder AIRE will depend on the Laipac firmware and the vendor tool you use. Laipac devices are commonly configured via the manufacturer utility, programming cable, or over the air parameter updates. Because command sets vary by firmware and tool version, consult the official Laipac programming guide or your vendor support for the precise SMS or serial commands for pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP.

## Configuration Notes

- Firmware and model revisions can change parameter names and command syntax so always check the Laipac documentation for your specific hardware revision
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol so you only need to enter the server and port once per device
- When the device offers both UDP and TCP, choose the transport that matches your operational needs; Plaspy supports both and will detect the protocol automatically
- If you use over the air configuration, allow time for the device to receive and apply parameters and for the first message to arrive at Plaspy
- Keep a record of device identifiers such as IMEI so you can match incoming device data to entries in Plaspy

## Why Use Plaspy with This Configuration

Using the StarFinder AIRE with Plaspy gives organizations a practical way to centralize tracking data from compact vehicles and assets into a single monitoring platform. With the device reporting position and event data to Plaspy, operators can gain real time visibility, receive alerts for motion and geofence events, and monitor operational status for better asset management.

To learn more about Plaspy and how it works with devices like the Laipac StarFinder AIRE visit https://www.plaspy.com. For the latest device specific configuration commands, firmware details, and installation guidance verify the official Laipac documentation at https://laipac.com/ as manufacturer specifications and setup methods can change over time.
