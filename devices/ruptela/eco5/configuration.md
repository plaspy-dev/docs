---
slug: /ruptela/eco5/configuration
id: eco5-configuration
sidebar_label: Configuration
title: Ruptela - Eco5 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ruptela Eco5 tracker integration with Plaspy and practical setup steps for connectivity
keywords:
  - Ruptela Eco5 configuration
  - Eco5 setup Plaspy
  - Ruptela Eco5 server configuration
  - Eco5 GPS tracker configuration
  - Plaspy tracker setup
  - Eco5 fleet management integration
  - Ruptela Eco5 telemetry setup
  - Eco5 BLE sensor configuration
  - Eco5 device management
  - Plaspy device integration
---

# Ruptela - Eco5 Configuration

This page documents the public configuration context for using the Ruptela Eco5 tracker with Plaspy. It focuses on the practical server settings and steps needed to point an Eco5 device at Plaspy so the device can send location and telemetry to the platform. Use this guide alongside official Ruptela documentation and your installer tools to complete any device-side changes.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same Plaspy endpoint and port are used for Eco5 deployments. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and the vendor tools you use (for example Ruptela Device Center), so verify device-specific details with the manufacturer when needed.

## Configuration Overview

This configuration process prepares the Eco5 to communicate with Plaspy, confirms connectivity, and enables the device to appear in Plaspy dashboards and alerts. The objective is to configure the tracker’s reporting endpoint and transport, validate that the device is sending data, and confirm receipt inside Plaspy.

- Point the Eco5 reporting endpoint to the Plaspy server so location and telemetry are routed to Plaspy.
- Select the transport (UDP or TCP) if the Eco5 configuration requires an explicit choice.
- Use the shared Plaspy port that applies to all devices and confirm the device can reach the server IP or domain.
- Validate that the device sends periodic reports and that those reports are visible in the Plaspy interface.
- Keep manufacturer tools such as Ruptela Device Center available for firmware updates and remote management.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A powered and accessible Eco5 unit with any required installer cabling or mounting in place.
- A valid active cellular connection for the device variant in use (Eco5 supports 4G Cat‑1 and 4G Cat‑M1 with 2G fallback).
- Access to the official Ruptela configuration method or software (for example Ruptela Device Center or an approved third‑party tool).
- The device IMEI or identifier available for registration and verification in Plaspy.
- Basic knowledge of choosing transport (UDP or TCP) and saving/applying settings on the device.
- Network or firewall rules updated if required so the device can reach d.plaspy.com or 54.85.159.138 on port 8888.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Eco5 sends its periodic position and telemetry reports over the cellular link to the shared Plaspy endpoint. Plaspy receives these messages on the common server and port, automatically determines the device protocol, and maps incoming data into the platform for live tracking and alerts.

- The Eco5 reports vehicle location and device status to d.plaspy.com (or directly to 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on how the device configuration is set; Plaspy accepts either.
- Plaspy automatically detects the tracker protocol and processes incoming messages for visibility in maps and dashboards.
- Telemetry such as digital inputs, analog channels, BLE sensor readings, and status notifications are relayed into Plaspy where supported.
- Operational events and alarms reported by the Eco5 become actionable items in Plaspy workflows and alerts.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software (for example Ruptela Device Center or the device’s configuration interface).
2. Locate the server or reporting endpoint settings and enter d.plaspy.com or the Plaspy server IP 54.85.159.138.
3. Set the device reporting port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP for transport if the device requires an explicit transport selection.
5. Apply or save the configuration changes in the device management tool.
6. Restart the Eco5 if the manufacturer instructions indicate a restart is required for changes to take effect.
7. Validate that the device reports to Plaspy by checking the device status and incoming messages inside Plaspy.

## Example Configuration Commands

The exact command syntax and method vary with Ruptela tools, firmware versions, and chosen configuration interface. Ruptela Device Center and Ruptela’s device management platform are the recommended manufacturer tools for performing these steps. Use the official Ruptela configuration interface to set the server hostname or IP and the port to the Plaspy values shown above.

If your installation uses text commands or SMS-based configuration supported by the device and firmware, use the official Ruptela command reference for the precise command strings. Always preserve placeholders such as APN values as required by your mobile operator when setting mobile data parameters.

## Configuration Notes

- Firmware variations and hardware revisions can change the exact configuration menu names and supported features; confirm the procedure in Ruptela documentation for the Eco5 variant you have.
- In some deployments you may enter the Plaspy server as a domain name (d.plaspy.com) or as the server IP (54.85.159.138); both are accepted when reachable.
- Choose UDP or TCP based on device requirements and network reliability considerations; Plaspy accepts both and detects the protocol automatically.
- Use Ruptela Device Center or an approved management platform for bulk or remote configuration where possible to reduce per-device manual steps.
- Keep device firmware up to date when recommended by Ruptela to ensure compatibility with the latest configuration workflows and network conditions.

## Why Use Plaspy with This Configuration

Configuring the Ruptela Eco5 to report to Plaspy provides a straightforward path to real-time tracking, telemetry consolidation, and operational visibility. Plaspy’s automatic protocol detection and shared server settings simplify onboarding so devices quickly appear in fleet dashboards, alerts, and reporting workflows.

Learn more about Plaspy and how it can be used with devices like the Eco5 at https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details, verify the latest information on the Ruptela website https://ruptela.com/.
