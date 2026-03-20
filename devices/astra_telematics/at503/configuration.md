---
slug: /astra_telematics/at503/configuration
id: at503-configuration
sidebar_label: Configuration
title: Astra Telematics - AT503 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Astra Telematics AT503 showing Plaspy server settings SMS commands and practical configuration steps
keywords:
  - Astra Telematics AT503
  - AT503 configuration
  - AT503 setup Plaspy
  - Astra Telematics configuration
  - AT503 server settings
  - GPS tracker configuration
  - Plaspy device setup
  - AT503 SMS commands
  - AT503 BLE provisioning
  - asset tracker configuration
---

# Astra Telematics - AT503 Configuration

This page covers the public configuration context for using the Astra Telematics AT503 with Plaspy. It focuses on the practical server settings and setup workflow needed to point an AT503 device at the Plaspy platform and validate connectivity. The content is based on publicly available guidance and the manufacturer command examples provided for device provisioning.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The AT503 supports both SMS based configuration commands and smartphone provisioning via Bluetooth Low Energy for on site setup, so choose the method that matches your device firmware and deployment workflow.

## Configuration Overview

The configuration process prepares the AT503 to send location and telemetry to the Plaspy platform by configuring the device APN and the Plaspy server endpoint. The public steps shown here are intended to make the tracker visible in Plaspy and ensure reports arrive reliably.

- Configure the cellular APN and optional APN credentials so the device can use mobile data.
- Point the device to the Plaspy server using the shared endpoint or IP and set the Plaspy port.
- Choose transport (UDP or TCP) on devices that require a transport selection and verify the selection with the device.
- Save and apply settings, then restart or wake the device if required to begin reporting.
- Validate connectivity in Plaspy to confirm the device is sending position and telemetry.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the AT503 may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Device powered and reachable for configuration using the supported method on your unit (SMS or BLE provisioning).
- A working cellular connection for the device with an active SIM or eSIM profile and correct APN settings.
- Access to the manufacturer configuration method or software documentation for the AT503.
- Knowledge of any APN username or password if your carrier requires credentials.
- A smartphone with BLE capability if you plan to provision using Bluetooth Low Energy provisioning.
- A Plaspy account or platform access to validate the device reports after configuration.

## How This Tracker Connects to Plaspy

When configured, the AT503 reports GNSS position and movement telemetry to Plaspy using cellular connectivity. The tracker is set to report to the shared Plaspy server endpoint and port so Plaspy can ingest, decode, and display device data without requiring per device custom ports.

- The AT503 sends location and movement reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Reports can be transmitted over UDP or TCP depending on device selection and network reliability.
- Plaspy automatically detects the tracker protocol so standard server-side decoding is applied when data arrives.
- Movement driven reporting and health telemetry enable visibility and asset monitoring within Plaspy.
- After configuration, validate device visibility and recent position updates in the Plaspy dashboard.

## Common Configuration Workflow

1. Access the official Astra Telematics configuration method for the AT503 (SMS commands, BLE provisioning app, or vendor tool) as described in the manufacturer documentation.
2. Set or confirm the device APN and optional APN credentials for the cellular network so data connectivity is available.
3. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server address field or via SMS command.
4. Set the server port to 8888.
5. If the device requires a transport selection, choose UDP or TCP according to your deployment preference and network conditions.
6. Apply or save the configuration and restart the device if required by the AT503 firmware.
7. Validate that the device reports to Plaspy by checking for recent telemetry and position updates in the Plaspy platform.

## Example Configuration Commands

To set the tracker send the following commands through text messages in the order shown. Each command should be sent as an SMS to the device phone number. Placeholders are preserved for carrier specific values.

- Set the operator APN
```text
$APAD,[apn]
```

- Set the APN username (if required)
```text
$APUN,[apnu]
```

- Set the APN password (if required)
```text
$APPW,[apnp]
```

- Set the GPRS server to the Plaspy server IP
```text
$IPAD,54.85.159.138
```

- Set the server port to Plaspy port
```text
$PORT,8888
```

Notes on placeholders:
- [apn] — replace with your carrier APN string.
- [apnu] — replace with the APN username if your carrier requires one; omit or leave blank if not required.
- [apnp] — replace with the APN password if your carrier requires one; omit or leave blank if not required.

These SMS commands reflect the manufacturer provided public examples. If your deployment uses BLE provisioning, apply the same server domain or IP and port settings through the provisioning app or tool.

## Configuration Notes

- Firmware and hardware revisions can change available configuration fields and command formats; verify against the device firmware version before mass provisioning.
- Some deployments prefer the domain d.plaspy.com, others prefer the numeric IP 54.85.159.138; both point to Plaspy and either may be used based on your provisioning method.
- Choose UDP or TCP according to network reliability and carrier behavior; TCP can provide delivery confirmation in unreliable networks but may increase session overhead.
- SMS based configuration is shown here because it is a common public provisioning method for the AT503; BLE provisioning is also supported for field commissioning in many firmware builds.
- Always confirm APN, username, and password with the mobile operator or eSIM provider before sending configuration commands.

## Why Use Plaspy with This Configuration

Using the AT503 with Plaspy gives organizations reliable long term visibility of unpowered assets with minimal field maintenance. The Plaspy server settings shown here allow the AT503 to forward GNSS position and movement telemetry into Plaspy dashboards and alerting so teams can monitor asset health, movement, and location over time.

Learn more about Plaspy on the main website https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so please verify the latest AT503 setup instructions and firmware notes on the manufacturer site https://astratelematics.com/.
