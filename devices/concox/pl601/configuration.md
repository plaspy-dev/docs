---
slug: /concox/pl601/configuration
id: pl601-configuration
sidebar_label: Configuration
title: Concox - PL601 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Concox PL601 for use with Plaspy using public server settings and example SMS commands
keywords:
  - Concox PL601 configuration
  - PL601 Plaspy setup
  - Concox PL601 server configuration
  - PL601 GPS tracker setup
  - PL601 SMS configuration commands
  - Plaspy device configuration
  - PL601 tracking software configuration
  - Concox PL601 GPS platform setup
  - PL601 APN and GPRS settings
  - PL601 connectivity for Plaspy
---

# Concox - PL601 Configuration

This page covers the public configuration context for using the Concox PL601 tracker with Plaspy. It gathers the Plaspy server settings you need and shows practical, public setup commands derived from the PL601 manufacturer commands when available. Use this documentation to prepare the device so it can report location and events into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side, while the exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The PL601 can be configured using SMS commands or local configuration tools such as a BLE configuration app; this page includes the publicly available SMS examples and workflow guidance to connect the device to Plaspy.

## Configuration Overview

The purpose of this configuration process is to prepare the PL601 to communicate reliably with Plaspy, validate connectivity, and enable tracking and event reporting inside the Plaspy platform. The public commands and server values below are the primary items operators set when provisioning a PL601 for Plaspy integration.

- Configure the PL601 to report to the Plaspy server endpoint so location and events arrive in the platform.
- Set the device APN so the tracker can use cellular data for GPRS reporting.
- Choose transport (UDP or TCP) and set the shared Plaspy port so the tracker reaches the correct endpoint.
- Verify update interval and GPRS mode so the device sends periodic location reports to Plaspy.
- Validate settings with a parameter check command and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public, shared settings used by Plaspy for supported devices. The PL601 can be pointed to either the server domain or the server IP on the same port.

## Typical Requirements Before Setup

- A charged PL601 device accessible for configuration and powered on.
- A valid cellular SIM card with data enabled and the correct APN for the mobile operator.
- Access to the manufacturer configuration method you prefer such as SMS setup or BLE configuration tools.
- Basic knowledge of the device IMEI or identifier so you can confirm the device in Plaspy after setup.
- A phone able to send SMS commands to the tracker if using the SMS command workflow.

## How This Tracker Connects to Plaspy

When configured, the PL601 sends location, event, and status messages to the Plaspy server endpoint and port so Plaspy can ingest telemetry, display live location, and generate alerts. The tracker is set up to report to the shared Plaspy server endpoint and port and Plaspy handles protocol detection automatically.

- The PL601 uses its cellular connection to open a GPRS session and send position updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP depending on device options; Plaspy accepts both and detects the protocol.
- Device events such as SOS/panic and periodic timer reports are forwarded to Plaspy for alerting and history.
- After provisioning, Plaspy visibility is validated by confirming the device reports and appears in the platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, such as the PL601 BLE configuration app or SMS command interface.
2. If using SMS or the device UI, enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the port to 8888 in the device server settings.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure the device APN using the operator APN placeholders if required and enable GPRS mode.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate that the device reports to Plaspy by checking device parameter output and confirming the device appears in the platform.

## Example Configuration Commands

The PL601 supports SMS-based setup using these public commands. Preserve placeholders and send commands in the order shown for initial provisioning. The reset command is optional and typically used only for initial setup or troubleshooting.

- Reset to factory settings (optional initial step)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn][ ,[apnu],[apnp] ]#
```
Explanation: [apn] is the mobile operator APN. [apnu] and [apnp] are optional APN username and password placeholders when required by the operator. Keep placeholders if your operator uses credentials.

- Set the GPRS server to Plaspy using the domain (preferred for flexibility)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to Plaspy using the server IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds
```text
TIMER,60#
```
Alternative interval command (some firmware variants)
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Check current GPRS and server parameter settings
```text
GPRSSET#
```

Note: Send these commands as SMS messages to the device phone number if using SMS configuration. Order matters for initial provisioning: set APN, then server, then timer and GPRS mode, then verify with GPRSSET#.

## Configuration Notes

- Firmware and regional variants can change command syntax or supported parameters; always confirm with manufacturer documentation for your PL601 variant.
- The PL601 supports SMS-based configuration as shown above; BLE or vendor software may provide an alternate provisioning experience.
- Plaspy uses the same port 8888 for all devices and automatically detects the protocol, but device-side transport selection (UDP vs TCP) may still be required.
- When possible, prefer the server domain d.plaspy.com to allow backend IP changes without re-provisioning devices; server IP can be used when DNS is not available.
- Verify the APN, SIM data plan, and signal quality before relying on live reporting to Plaspy.

## Why Use Plaspy with This Configuration

Using the PL601 with Plaspy provides a compact, battery friendly tracking solution that brings location, SOS alerts, and device events into a single platform for monitoring and response. For operators needing personal safety, small-asset visibility, or lightweight telemetry, configuring the PL601 to report to Plaspy delivers real-time location, event notifications, and historical playback within your Plaspy deployment.

To learn more about Plaspy and supported device configuration approaches visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware notes, and detailed PL601 instructions, verify information with the manufacturer at https://www.iconcox.com/ as hardware and firmware behavior can change over time.
