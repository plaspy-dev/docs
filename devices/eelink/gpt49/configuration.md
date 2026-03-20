---
slug: /eelink/gpt49/configuration
id: gpt49-configuration
sidebar_label: Configuration
title: EElink - GPT49 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT49 GPS tracker setup and Plaspy server settings including SMS commands and verification steps
keywords:
  - EElink GPT49 configuration
  - EElink GPT49 setup
  - GPT49 Plaspy configuration
  - Plaspy GPS tracker configuration
  - GPT49 SMS setup
  - GPT49 APN setup
  - GPS asset tracker configuration
  - fleet tracking GPT49
  - EElink asset tracker
  - GPS tracker server settings
---

# EElink - GPT49 Configuration

This page documents the public configuration context for using the EElink GPT49 with Plaspy. It explains the practical server settings, the common SMS commands published for the GPT49, and the steps typically required to prepare the device so Plaspy can receive position and event data. Use this as a deployment reference alongside the official EElink documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The examples below reflect public GPT49 SMS commands and Plaspy server values so you can configure and verify connectivity before adding the device to Plaspy.

## Configuration Overview

This section outlines the practical goal of configuring a GPT49 for use with Plaspy: ensure the tracker can connect to Plaspy's server endpoint, authenticate on the mobile network, and report location and event packets at the expected interval.

- Configure the device APN so it can open a GPRS/LTE data session to the carrier network.
- Point the device to Plaspy using the provided server domain or IP and the shared port.
- Select TCP or UDP transport as required by the device or network and save the setting.
- Set the reporting interval (for example a TIMER interval) and verify with the device PARAM command.
- Validate the device reaches the Plaspy endpoint and appears in the Plaspy platform.
- Keep manufacturer documentation handy for firmware specific command variants.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note: All devices in Plaspy use the same port. Use either the domain or the IP form when configuring the GPT49 as preferred.

## Typical Requirements Before Setup

- A powered GPT49 with a charged battery or connected power source.
- A valid cellular SIM with data enabled and APN details for the mobile operator.
- Access to the device configuration method supported by the unit, such as SMS commands or the official EElink tool.
- Basic knowledge of the operator APN and optional APN username and password if required by the carrier.
- SMS sending capability from a phone or a management system if applying settings via SMS.
- Access to EElink published documentation for firmware specific command syntax.

## How This Tracker Connects to Plaspy

When configured, the GPT49 opens a data session over cellular and sends GNSS positions, device status, and event flags to the Plaspy server endpoint and port. Plaspy ingests these packets to provide real-time maps, history, and alerts.

- The tracker reports GNSS positions and device telemetry to the shared Plaspy server endpoint.
- Event flags such as movement, tamper, or alarms are transmitted and visible in Plaspy.
- The device is configured to use d.plaspy.com or 54.85.159.138 on port 8888 for all reporting.
- Transport can be UDP or TCP depending on your configuration choice and network behavior.
- Plaspy automatically detects the protocol used by the tracker and processes incoming data.

## Common Configuration Workflow

1. Access the official EElink configuration method for the GPT49 (SMS commands or EElink configuration tools) as described in the manufacturer documentation.
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the server port to 8888; remember Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure the operator APN (and optional APN username and password) so the device can establish cellular data.
6. Apply or save the configuration and restart the device if required by the device firmware.
7. Validate that the tracker reports successfully to Plaspy using the device PARAM or by confirming visibility on the Plaspy platform.

## Example Configuration Commands

The GPT49 can be configured by SMS using public commands. Preserve the order shown when following a new setup. Replace placeholders with your operator values where required.

- Optional initial or factory reset command (use only if you need to clear device settings):
```
FACTORY#
```

- Set the time zone to UTC 0 (example):
```
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your carrier APN. If an APN username and password are required, include [apnu] and [apnp] respectively:
```
APN,[apn]#
```
Or including optional username and password:
```
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy using domain form:
```
SERVER,1,d.plaspy.com,8888#
```
Or set the GPRS server using IP form:
```
SERVER,0,54.85.159.138,8888#
```

- Set the location update interval to every 60 seconds:
```
TIMER,60#
```

- Verify current parameters on the device:
```
PARAM#
```

Notes on placeholders:
- [apn] is the carrier APN string required for data.
- [apnu] is the optional APN username.
- [apnp] is the optional APN password.
Replace these placeholders with the values provided by your mobile operator.

## Configuration Notes

- Firmware and regional variants can change SMS command syntax or available parameters; always check EElink documentation for your device firmware version.
- The GPT49 supports SMS-based configuration according to public command examples; alternate configuration may be available via manufacturer tools or over-the-air methods.
- TCP versus UDP selection can affect reliability and battery usage depending on network conditions; choose the transport that best fits your deployment and test behavior with Plaspy.
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol once packets arrive at the server.
- If you use the domain form d.plaspy.com, the device will rely on its DNS resolution; the IP form is provided as an alternative for networks where DNS is restricted.

## Why Use Plaspy with This Configuration

Using the GPT49 with Plaspy gives organizations long‑term asset visibility and reliable remote telemetry. The GPT49's multi‑constellation GNSS and long battery life are practical for deployments where infrequent maintenance is required, while Plaspy provides centralized maps, history, and alerting for operational monitoring and theft prevention.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific commands, firmware notes, and configuration guidance, verify details on the EElink website at https://www.eelink.com.cn/ as manufacturer specifications and setup methods can change over time.
