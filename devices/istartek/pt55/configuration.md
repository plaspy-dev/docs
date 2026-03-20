---
slug: /istartek/pt55/configuration
id: pt55-configuration
sidebar_label: Configuration
title: iStartek - PT55 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the iStartek PT55 showing Plaspy server settings, SMS commands, and setup workflow for easy integration
keywords:
  - iStartek PT55 configuration
  - iStartek PT55 setup
  - PT55 Plaspy configuration
  - PT55 server configuration
  - PT55 GPS tracker setup
  - Plaspy device configuration
  - GPS tracker SMS commands
  - PT55 APN settings
  - asset tracking PT55
  - PT55 GPRS setup
---

# iStartek - PT55 Configuration

This page covers the public configuration context for using the iStartek PT55 with Plaspy. It focuses on the practical settings and SMS commands that prepare the PT55 to report location and events to Plaspy, and it shows the shared server details Plaspy expects for ingestion. Use this guide together with the official device documentation for complete device management and safety practices.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The PT55 supports message based configuration (SMS) and GPRS reporting, and this guide explains how to point those reports at Plaspy using the public settings and example SMS commands.

## Configuration Overview

Configuring the PT55 for Plaspy ensures the device can reach the platform reliably and be visible inside Plaspy dashboards. The public setup process centers on setting APN and server details, choosing the transport, and validating that the device reports correctly.

- Set the network APN so the PT55 can establish a GPRS data session for UDP reporting.
- Configure the PT55 server entry to point to the Plaspy server domain or IP and the shared port.
- Choose the transport method (UDP or TCP) if the device requires an explicit selection.
- Apply reporting intervals and timer settings to balance battery life and update frequency.
- Verify parameters using the device parameter query and confirm the tracker is visible within Plaspy.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the PT55. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

## Typical Requirements Before Setup

- A charged PT55 device with SIM installed and active mobile data plan if using GPRS reporting.
- SMS capability to send configuration SMS messages to the device phone number for remote setup.
- APN credentials for the mobile operator (keep [apn], [apnu], and [apnp] placeholders handy if required).
- Access to the official iStartek configuration instructions or installer tool for firmware-specific guidance.
- A procedure for validating device visibility in Plaspy once configuration is applied.

## How This Tracker Connects to Plaspy

The PT55 sends location updates and event reports to the Plaspy shared server endpoint and port so Plaspy can process telemetry and present it in dashboards and alerting workflows. Both domain and IP server targets are supported in device configuration.

- The PT55 can be configured to send GPRS UDP reports to d.plaspy.com on port 8888.
- Alternatively the device can be pointed to 54.85.159.138 on port 8888 depending on installer preference.
- Device transport can be configured for UDP or TCP; Plaspy accepts both and detects the protocol automatically.
- Alarms and telemetry sent to the Plaspy server are decoded and surfaced as location events, history points, and alerts.
- Successful visibility in Plaspy confirms both network connectivity and correct server/port setup on the tracker.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands as documented by iStartek.
2. Enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device requires transport selection; UDP is commonly used but either transport is supported.
5. Configure APN and any optional APN username/password using the APN command or the manufacturer tool.
6. Apply or save the configuration and restart the device if required by the device procedure.
7. Validate that the device reports to Plaspy and appears in the platform; use parameter queries or Plaspy visibility to confirm.

## Example Configuration Commands

The PT55 supports SMS-based configuration. Below are the commonly used public SMS commands in the order recommended for initial setup. Send each command as an SMS message to the device phone number.

1. Optional initial factory reset (use only if you need to restore defaults)
```
FACTORY#
```

2. Set the time zone to UTC-0
```
GMT,E,0#
```

3. Set the operator APN
- Minimal APN only:
```
APN,[apn]#
```
- APN with optional username and password (include [apnu] and [apnp] if required by your operator):
```
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the mobile operator APN. [apnu] and [apnp] are optional APN username and password placeholders. Keep those placeholders if your carrier requires authentication.

4. Set the GPRS server to use Plaspy by domain (UDP/TCP on port 8888)
```
SERVER,1,d.plaspy.com,8888#
```

Or set the GPRS server to use Plaspy by IP
```
SERVER,0,54.85.159.138,8888#
```

5. Set the reporting/update interval to 60 seconds
```
TIMER,60#
```

6. Verify current parameters
```
PARAM#
```

## Configuration Notes

- SMS-based setup is supported and commonly used for the PT55, but some deployments may prefer vendor tools or wired configuration if available.
- Firmware versions and hardware revisions can affect exact command syntax and available parameters; consult the official iStartek documentation for firmware-specific notes.
- Choose UDP or TCP based on network reliability and operator behavior; Plaspy accepts both and will auto-detect the protocol.
- Preserve APN placeholders [apn], [apnu], and [apnp] when preparing commands; replace them with your carrier values.
- Plaspy uses the same port 8888 for all supported devices and will detect the protocol automatically when the device sends data.

## Why Use Plaspy with This Configuration

Using the PT55 with Plaspy gives organizations reliable remote visibility with low maintenance overhead. The PT55's message-based configuration and support for UDP/SMS reporting make it straightforward to deploy across fleets and remote assets, while Plaspy provides the centralized dashboards, history playback, and alerting needed for operational monitoring.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. Please verify the latest device-specific configuration methods, firmware behavior, and manufacturer details on the iStartek website https://istartek.com/ so your deployment uses current official guidance.
