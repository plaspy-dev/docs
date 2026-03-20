---
slug: /autofon/gl/configuration
id: gl-configuration
sidebar_label: Configuration
title: AutoFon - GL-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for AutoFon GL-Маяк with Plaspy server settings and practical configuration steps for GPRS and SMS reporting
keywords:
  - AutoFon GL-Маяк configuration
  - AutoFon GL-Маяк setup
  - AutoFon GL-Маяк server configuration
  - Plaspy tracker configuration
  - Plaspy server setup
  - GL-Маяк GPRS setup
  - GL-Маяк SMS reporting
  - GPS GLONASS tracker configuration
  - asset tracking setup guide
  - covert tracker configuration
---

# AutoFon - GL-Маяк Configuration

This page covers the public configuration context for using the AutoFon GL-Маяк (GL-Beacon) with Plaspy. It summarizes the shared Plaspy server settings and explains the practical steps you will typically follow to point the device at Plaspy for real time tracking, alarm reporting, and telemetry delivery over GPRS and SMS where supported.

Plaspy uses a single shared server endpoint and port for all supported trackers and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tool you use. Always reference the device documentation from AutoFon for model specific details and safety notes.

## Configuration Overview

This section explains the practical goals for configuring an AutoFon GL-Маяк to work with Plaspy. The goal is to prepare the tracker to communicate reliably with Plaspy servers, validate connectivity, and enable location and alarm visibility within the Plaspy platform.

- Point the GL-Маяк to Plaspy server by entering the Plaspy domain or IP and the shared port.
- Choose the transport option the device requires and save the network settings.
- Ensure the device has a valid SIM and active mobile data if using GPRS, and confirm SMS is available for alert fallback.
- Validate the device reports telemetry, alarm events, and life signals to Plaspy after configuration.
- Use manufacturer tools or SMS commands to change parameters as needed and preserve battery life settings for long deployments.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888 depending on device requirement
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Access to the official AutoFon configuration method such as the manufacturer software, SMS commands, or configuration utility.
- A valid SIM card with data enabled for GPRS reporting and SMS capability if SMS is used as a fallback channel.
- Knowledge of the device identifier such as IMEI for registering and validating the tracker in Plaspy.
- Sufficient battery or external power to complete configuration and to permit a restart if required.
- Stable mobile network coverage at the installation site to validate GPRS uploads to Plaspy.

## How This Tracker Connects to Plaspy

The GL-Маяк sends location and event data to Plaspy over GPRS and can use SMS for critical alerts when configured. The device buffers packets during connectivity loss and forwards them when the network returns, providing continuity for Plaspy telemetry and event processing.

- The device is configured to report to the shared Plaspy server endpoint and port at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP as required by the device; Plaspy accepts both on the same port.
- Position updates, alarm events (SOS, impact, motion), and life signals are forwarded to Plaspy for real time monitoring.
- Buffered packet upload preserves historical telemetry until Plaspy receives the data.
- SMS alerts can be used as a fallback channel for urgent notifications when GPRS is unavailable.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software recommended for the GL-Маяк.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device network settings.
3. Set the device port to 8888 as Plaspy uses the same port for all devices.
4. If the device requires a transport selection, choose UDP or TCP based on your installer preference or firmware guidance.
5. Apply or save the configuration on the device using the manufacturer tool or via SMS command if supported.
6. Restart the device if the configuration method or firmware requires a reboot to apply new settings.
7. Validate that the device reports to Plaspy by confirming the tracker appears in Plaspy and sends position updates and life signals.

## Example Configuration Commands

The AutoFon GL-Маяк can be configured through the manufacturer software, web tools, or SMS commands depending on device firmware and installer preference. Exact command syntax and available parameters vary by AutoFon firmware version and the official configuration utility. Consult AutoFon documentation for the precise SMS command formats or configuration file templates required for your firmware.

## Configuration Notes

- Firmware differences and hardware revisions can change available settings and the exact configuration workflow; confirm the firmware level before making production changes.
- Choose UDP for lower overhead and TCP for guaranteed delivery depending on your network environment and the device firmware behavior.
- The GL-Маяк supports both GPRS uploads and SMS alerts; use SMS only for critical alerts if conserving data or battery.
- Buffered packet storage improves resilience for remote deployments but verify buffer size and retransmit behavior with AutoFon documentation.
- Always save and, if required, restart the device so new server settings take effect and are used for the next data session.

## Why Use Plaspy with This Configuration

Using the AutoFon GL-Маяк with Plaspy provides an effective combination for long autonomous deployments where reliable telemetry, alarm reporting, and battery life are priorities. Plaspy’s shared server setup simplifies device onboarding because the same port and server endpoint are used for all supported trackers and Plaspy automatically detects the device protocol for you.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the official AutoFon site https://www.autofon.ru/ as specifications and setup procedures can change over time.
