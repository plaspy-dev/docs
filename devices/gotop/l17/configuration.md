---
slug: /gotop/l17/configuration
id: l17-configuration
sidebar_label: Configuration
title: GOTOP - L17 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for GOTOP L17 wearable tracker and Plaspy compatibility with shared server settings
keywords:
  - GOTOP L17 configuration
  - GOTOP L17 setup
  - L17 server configuration
  - Plaspy tracker configuration
  - Plaspy wearable integration
  - L17 GPS tracker setup
  - personal safety wearable configuration
  - GPS platform setup Plaspy
  - health telemetry tracker setup
  - L17 Plaspy compatibility
---

# GOTOP - L17 Configuration

This page documents the public configuration context for using the GOTOP L17 GPS smart bracelet with Plaspy. It focuses on the practical settings and steps required to point the device at Plaspy so the L17 can deliver GNSS location and telemetry to the Plaspy platform for alerts, history, and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps for the L17 can vary depending on firmware revision, hardware variant, installation method, and the GOTOP configuration tools you use, so this page concentrates on the Plaspy-specific values and the general workflow you should follow before verifying device-specific commands and menus in GOTOP documentation.

## Configuration Overview

The goal of configuration is to prepare the L17 to communicate reliably with Plaspy so location, SOS alerts, and sensor telemetry appear in the Plaspy dashboard. This involves entering the Plaspy server endpoint and port, selecting the transport if required, and verifying that the device reports correctly.

- Configure the device to send GNSS fixes and telemetry to the Plaspy server endpoint.
- Verify cellular connectivity and that the device can reach Plaspy from the field.
- Select the appropriate transport (UDP or TCP) when the device requires a transport choice.
- Save and apply settings, then validate that position and event reports arrive at Plaspy.
- Confirm SOS and telemetry events are delivered so Plaspy can generate alerts and histories.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the GOTOP L17 to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

These values are the shared endpoint settings Plaspy provides for supported trackers including the L17.

## Typical Requirements Before Setup

- Ensure the L17 has battery and is powered on or connected to charging during configuration.
- Insert and activate a compatible nano SIM or configure eSIM according to GOTOP instructions if cellular data is required.
- Have access to the official GOTOP configuration method such as the device management app or web tool referenced in the product manual.
- Confirm you have the Plaspy account or project details to validate device reporting in the Plaspy platform.
- Verify the device firmware is at a supported level per GOTOP documentation before applying server settings.
- Keep manufacturer documentation or vendor tools available for device-specific menus, SMS command formats, or app workflows.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the L17 sends GNSS location fixes and sensor telemetry over its cellular link to the shared Plaspy server endpoint and port. Plaspy receives location, SOS events, and telemetry for processing into live maps, alerts, and history.

- The device reports GNSS fixes and telemetry to d.plaspy.com or 54.85.159.138 using port 8888.
- Transport can be either UDP or TCP depending on the device firmware or configuration option.
- Plaspy automatically detects and interprets the tracker protocol after the device reaches the server.
- SOS button events and status updates are forwarded to Plaspy so alerts can be generated.
- Telemetry such as heart rate, SpO2, temperature, and activity data is delivered alongside location when enabled.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the L17 (manufacturer app, web portal, or vendor tool).
2. Locate the server or APN/server configuration screen where remote server settings are entered.
3. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138.
4. Set the server port to 8888 exactly as provided by Plaspy.
5. Choose UDP or TCP if the device requires a transport selection; both are supported by Plaspy on the same port.
6. Apply or save the configuration and send any required confirmation command from the manufacturer tool.
7. Restart the device if required by the GOTOP configuration tool or firmware.
8. Validate that the L17 reports successfully to Plaspy by checking device position, telemetry, or event logs in your Plaspy project.

## Example Configuration Commands

The exact commands and interface depend on GOTOP firmware and the configuration tool you use. Because manufacturer provisioning methods vary, consult the GOTOP L17 manual or vendor setup app for the precise command syntax or menu paths. In general, you will enter the Plaspy server values shown above (d.plaspy.com or 54.85.159.138 and port 8888) in the device server settings and select UDP or TCP if prompted.

If your GOTOP provisioning tool supports direct text or SMS commands, use the manufacturer documentation to format commands and include the Plaspy server domain or IP and port 8888 as required. Always preserve placeholders from the GOTOP guide such as APN or login values when present.

## Configuration Notes

- Firmware differences can change menu locations, command syntax, and available transport options; verify your device firmware version first.
- TCP versus UDP choice may be offered by the device; Plaspy supports both transports on port 8888 and will auto-detect the protocol.
- APN and cellular credentials remain manufacturer and carrier specific; populate APN fields from your SIM provider when required.
- Use the official GOTOP app or configuration portal for device-side provisioning when available to avoid command errors.
- Confirm SOS and telemetry reporting after configuration so Plaspy can register alarms and historical data correctly.

## Why Use Plaspy with This Configuration

Configuring the GOTOP L17 to report to Plaspy provides a unified way to monitor wearable location, SOS alerts, and health telemetry from a single platform. For organizations and families that require continuous visibility and prompt response, using Plaspy with the L17 enables timely alerts, historical reports, and integrated monitoring for personal safety devices.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Manufacturer setup details, firmware behavior, and device menus can change over time, so verify the latest device-specific configuration and provisioning instructions at the GOTOP website https://www.gotop.cc/.
