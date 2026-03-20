---
slug: /astra_telematics/at502/configuration
id: at502-configuration
sidebar_label: Configuration
title: Astra Telematics - AT502 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Astra Telematics AT502 tracker setup and Plaspy server configuration
keywords:
  - Astra Telematics AT502 configuration
  - AT502 setup
  - AT502 Plaspy integration
  - Astra Telematics configuration
  - GPS tracker configuration
  - asset tracker setup
  - tracking server configuration
  - Plaspy tracker setup
  - GPRS tracker commands
  - BLE tracker configuration
---

# Astra Telematics - AT502 Configuration

This page documents the public configuration context for using the Astra Telematics AT502 with Plaspy. It focuses on the practical, manufacturer-public settings and commands needed to point the device at the Plaspy server so location and telemetry can be received in your Plaspy account. Where available, the page includes the AT502 SMS commands published by the manufacturer for setting APN and server values.

Plaspy uses shared server settings for supported trackers and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The AT502 supports SMS and BLE configuration methods in addition to cellular data reporting, so follow the manufacturer guidance for your hardware revision while applying the Plaspy server settings described below.

## Configuration Overview

This configuration prepares the AT502 to send GNSS positions and device telemetry to Plaspy. The goal is to configure the device network settings, point it at the Plaspy server endpoint and port, and verify the device is visible in the Plaspy platform.

- Set the device APN credentials so it can use mobile data to reach Plaspy.
- Configure the GPRS server address and port to direct reports to Plaspy infrastructure.
- Choose the transport protocol if the device requires a UDP or TCP selection.
- Validate connectivity and confirm the device appears and reports in Plaspy.
- Use BLE or SMS as provided by the manufacturer for on-site configuration and diagnostics.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the AT502:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port, and the platform will attempt to identify the device protocol automatically when the tracker reports.

## Typical Requirements Before Setup

- A charged and operational AT502 device with accessible configuration method (SMS or BLE).
- An active SIM or eSIM profile with a data plan and the operator APN information for your region.
- Access to the manufacturer's SMS command list or BLE configuration tool for the AT502.
- Knowledge of whether the device requires explicit UDP or TCP selection during setup.
- A Plaspy account and ability to verify device reporting in the Plaspy console.
- Basic tools for device power cycling or restarting after configuration if required.

## How This Tracker Connects to Plaspy

When configured, the AT502 sends GNSS fixes and device telemetry over cellular networks to the Plaspy server endpoint and port. Plaspy ingests these reports, applies automatic protocol detection, and makes location and health data available in the platform for monitoring and reporting.

- The device uses configured APN settings to establish a GPRS or LTE data session.
- GNSS positions and telemetry are sent to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device settings and network conditions.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the device record.
- Motion, battery, and connectivity health data reported by the AT502 are visible in Plaspy for monitoring and alerts.

## Common Configuration Workflow

1. Access the official Astra Telematics AT502 configuration method, either by SMS commands, the vendor BLE tool, or vendor software as documented by Astra Telematics.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 as allowed by the device.
3. Set the server port to 8888 in the device configuration.
4. If the device requires a transport selection, choose UDP or TCP on port 8888 according to site or network preference.
5. Provide APN settings for the local mobile operator and any APN username or password if required.
6. Apply or save the configuration and restart the device if the manufacturer recommends doing so.
7. Validate that the AT502 reports to Plaspy by checking device connectivity and recent position or telemetry updates in your Plaspy account.

## Example Configuration Commands

To set the tracker by SMS, Astra Telematics publishes the following commands. Send each command as a separate text message to the device phone number. Preserve the placeholders where applicable.

- Set the operator APN
```text
$APAD,{{apn}}
```
- Set the username of APN operator (optional, use if your APN requires a username)
```text
$APUN,{{apnu}}
```
- Set the password of APN operator (optional, use if your APN requires a password)
```text
$APPW,{{apnp}}
```
- Set the GPRS server (Plaspy server IP)
```text
$IPAD,54.85.159.138
```
- Set the server port
```text
$PORT,8888
```

Notes on placeholders:
- {{apn}} is the mobile operator APN string required for data connectivity.
- {{apnu}} is the optional APN username when provided by the operator.
- {{apnp}} is the optional APN password when provided by the operator.

If your device or firmware supports pointing to a domain instead of the IP, you may enter d.plaspy.com using the manufacturer configuration method. Some firmware may require a separate command or BLE/firmware interface to select UDP versus TCP transport; consult Astra Telematics documentation for the exact syntax if needed.

## Configuration Notes

- SMS based configuration is supported by the commands above; BLE and vendor tools may provide a GUI alternative for the same values.
- Firmware revisions and hardware variants can change command syntax or available options; verify commands against the AT502 documentation for your unit.
- Choose UDP or TCP according to your network and reliability needs; Plaspy will accept either on port 8888 and auto detect the protocol.
- All Plaspy devices use the same port for server communication, which simplifies fleet configuration.
- Manufacturer tooling may offer verification commands or status queries; use those to confirm APN and server settings when available.

## Why Use Plaspy with This Configuration

Configuring the AT502 to report to Plaspy gives organizations reliable asset visibility with long battery endurance and low maintenance overhead. The AT502's BLE configuration and SMS command support make it practical to prepare devices on site or remotely, while Plaspy provides centralized ingestion, automatic protocol detection, and operational monitoring for positions, motion events, and device health.

To learn more about Plaspy and how it integrates with the AT502, visit https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and manufacturer commands, verify information on the Astra Telematics website https://astratelematics.com/ as vendor procedures and firmware may change over time.
