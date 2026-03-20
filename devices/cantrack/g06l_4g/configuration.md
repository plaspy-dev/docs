---
slug: /cantrack/g06l_4g/configuration
id: g06l_4g-configuration
sidebar_label: Configuration
title: CanTrack - G06L-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack G06L 4G tracker with Plaspy server settings and practical setup steps
keywords:
  - CanTrack G06L 4G configuration
  - CanTrack G06L setup
  - G06L Plaspy configuration
  - G06L GPS tracker setup
  - CanTrack server configuration
  - Plaspy tracker integration
  - vehicle GPS tracker configuration
  - fleet tracking setup guide
  - G06L telemetry configuration
  - Plaspy server settings
---

# CanTrack - G06L-4G Configuration

This page documents the public configuration context for using the CanTrack G06L 4G LTE vehicle tracker with Plaspy. It collects the practical, nonproprietary settings that Plaspy requires so integrators and installers can prepare the device for reliable reporting into Plaspy platforms and dashboards.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware revision, hardware variant, installation type, and vendor configuration tools, so use this guide as the Plaspy-focused reference and consult CanTrack documentation for any device specific instructions.

## Configuration Overview

The goal of this configuration is to point the G06L to Plaspy servers, verify connectivity over the network, and ensure the device reports position and alarm events so it appears correctly in Plaspy dashboards. The public server values below are what Plaspy requires; exact manufacturer commands or tools to enter those values depend on the device firmware and the configuration interface you use.

- Configure the tracker to report to Plaspy using the shared server endpoint and port so Plaspy can receive telemetry.
- Ensure the device has an active mobile data connection and that APN settings are correct for the installed SIM.
- Select transport protocol UDP or TCP on the device if required then save the configuration.
- Validate the device is uploading GNSS positions and alarms to Plaspy and that records appear in the platform.
- Keep firmware and configuration tools current to avoid differences in command syntax or menu placement.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration and hostname use
- Server IP 54.85.159.138 for direct IP configuration where required
- Port 8888 which Plaspy uses for all supported devices
- Transport support using UDP or TCP depending on device requirements
- Plaspy automatically detects the tracker protocol so devices using the same shared port are recognized by the platform

## Typical Requirements Before Setup

- Confirm the G06L has power and is wired or connected according to the manufacturer installation guide
- Active SIM card with mobile data enabled and correct APN configured for the installed operator
- Access to the official CanTrack configuration method for your device variant such as USB tool, SMS commands, or OTA management where supported
- Knowledge of whether the device firmware expects a domain or an IP address when configuring the server endpoint
- A test plan to validate that the device reports GNSS positions and alarm events into Plaspy after configuration

## How This Tracker Connects to Plaspy

When configured, the G06L sends GNSS position updates, event notifications, and device telemetry to the Plaspy server endpoint using the shared port. Plaspy receives those messages and maps them to the appropriate device record so positions, alarms, and historical routes are viewable in the platform.

- The device is configured to report to d.plaspy.com or 54.85.159.138 using port 8888
- Choose UDP or TCP transport if the tracker firmware requires a transport selection
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol
- Position and event messages are received by Plaspy and rendered in dashboards for monitoring and alerts
- Local storage on the device buffers records during network interruptions and uploads them to Plaspy once connectivity is restored

## Common Configuration Workflow

1. Access the official CanTrack configuration method for your G06L 4G device via the provided USB tool, SMS commands, or web interface as documented by the manufacturer.
2. In the server settings enter either the domain d.plaspy.com or the server IP 54.85.159.138 depending on which option your device supports.
3. Set the server port to 8888 which is used by Plaspy for all devices.
4. If the device requires a transport selection choose either UDP or TCP based on installer preference or firmware guidance.
5. Save or apply the configuration within the manufacturer tool or command set.
6. Restart the device if the firmware requires a reboot for network settings to take effect.
7. Validate that the tracker reports to Plaspy by checking for incoming data within your Plaspy account and confirming position and event records arrive.

## Example Configuration Commands

The G06L supports multiple configuration interfaces and CanTrack supplies tools and command sets that vary by firmware. Exact commands differ by firmware and tool so consult the official CanTrack configuration guide for device specific syntax. For Plaspy you will typically enter the same server values shown above either as a hostname or as an IP plus the shared port 8888. If your firmware uses SMS commands or a serial console the command format will come from CanTrack documentation.

## Configuration Notes

- Firmware differences can change command syntax and menu placement so match instructions to the device firmware version before applying settings.
- Choosing UDP or TCP depends on installer preference and network conditions; Plaspy supports both and will detect the protocol automatically.
- Use the domain d.plaspy.com when possible so DNS changes can be managed without reconfiguring devices; use 54.85.159.138 only when a direct IP is required.
- Because Plaspy uses the same port for all devices you do not need device specific port values when integrating multiple tracker models.
- Keep manufacturer USB tools and OTA tooling up to date to ensure compatibility with the latest configuration flows.

## Why Use Plaspy with This Configuration

Configuring the CanTrack G06L to report to Plaspy provides reliable real time visibility for vehicles and fleets by delivering GNSS positions, ignition and movement events, and alarm notifications into a single platform. The G06L’s resilient LTE with GSM fallback and local buffering combine well with Plaspy’s centralized ingestion so operations teams can monitor assets, receive event alerts, and analyze historical routes.

To learn more about Plaspy visit https://www.plaspy.com and for the latest device specific instructions, firmware notes, and configuration tools please verify details with the manufacturer at https://www.cantrackgps.com/. Device firmware behavior and manufacturer configuration methods can change over time so always confirm the current setup steps on the official CanTrack documentation before deployment.
