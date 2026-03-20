---
slug: /istartek/vt005/configuration
id: vt005-configuration
sidebar_label: Configuration
title: iStartek - VT005 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for iStartek VT005 with Plaspy including server settings, SMS commands, and practical deployment steps
keywords:
  - iStartek VT005 configuration
  - iStartek VT005 setup
  - VT005 server configuration
  - VT005 Plaspy setup
  - iStartek GPS tracker configuration
  - Plaspy tracker setup
  - vehicle tracking VT005
  - VT005 OBD II tracker setup
  - Plaspy device configuration
  - GPS tracker VT005 configuration
---

# iStartek - VT005 Configuration

This page documents the public configuration context for using the iStartek VT005 with the Plaspy platform. It explains the shared Plaspy server settings you must point the device to, describes typical prerequisites, and presents the VT005 SMS configuration commands that are commonly used to prepare the tracker for reporting to Plaspy. Use this guide to understand how to route VT005 telemetry into Plaspy and to validate basic connectivity before completing device provisioning in your fleet.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor tools. The VT005 supports SMS-based configuration as well as TCP reporting over cellular data; this page keeps the focus on the public settings that matter for Plaspy compatibility and on the practical steps to configure and verify the device.

## Configuration Overview

Configuring the VT005 for Plaspy prepares the device to send location, diagnostics, and event data to a centralized server endpoint so Plaspy can ingest and display that data in real time. The process typically sets APN and server parameters, selects transport (if required), and confirms the device is successfully reporting to the platform. If you plan to use SMS for configuration, the VT005 accepts SMS commands for these settings; the commands are provided below.

- Point the VT005 to Plaspy server settings so telemetry and events reach the platform.
- Configure the cellular APN and any required APN credentials to allow GPRS/4G data.
- Choose transport (UDP or TCP) if the device requires a transport selection and set the shared Plaspy port.
- Validate connectivity with a parameter check command and confirm data appears in Plaspy.
- Optionally reset to factory defaults before bulk deployment to ensure consistent behavior.

## Plaspy Server Settings

- Server domain d.plaspy.com for domain based server configuration.
- Server IP 54.85.159.138 for direct IP based configuration.
- Port 8888 which Plaspy uses for device connections.
- Transport support: configure the tracker to use UDP or TCP on port 8888 if the device requires a transport selection.
- All devices in Plaspy use the same port so you will always configure port 8888 for supported trackers.
- Plaspy automatically detects the tracker protocol so the platform can accept different device protocols on the same server endpoint.

## Typical Requirements Before Setup

- A VT005 unit installed in the vehicle OBD II port or placed per the device installation guide and powered.
- An active cellular SIM card with a data plan enabled for GPRS/4G and SMS capability if you will use SMS configuration.
- APN information from the mobile operator and any APN username or password if required.
- Access to the VT005 manufacturer configuration method, such as SMS commands or vendor configuration software.
- A process to verify reporting in Plaspy (access to Plaspy account or your fleet admin view) to confirm the device appears as online.
- Knowledge of the device firmware version or hardware variant when possible, since command sets and behavior can vary.

## How This Tracker Connects to Plaspy

The VT005 is configured to send location updates, OBD II diagnostics, and event alerts to the shared Plaspy server endpoint and port so Plaspy can ingest, process, and display the data for fleet operations. Reporting is typically done over TCP (or UDP if selected) using the cellular data connection; SMS can be used as a fallback or for remote configuration when needed. The device can also buffer GPS records when network connectivity is unavailable and upload stored records once the connection is restored.

- The tracker reports GPS and LBS position fixes to d.plaspy.com (or 54.85.159.138) on port 8888.
- Telemetry and event flags (ignition, collision, tamper, OBD II diagnostics) are forwarded to Plaspy for alerts and reporting.
- Stored location records are uploaded after network restoration to preserve route history.
- Plaspy automatically detects the tracker protocol when the device connects to the shared server and port.
- Choose UDP or TCP on the device if transport selection is required; both are supported by Plaspy on port 8888.

## Common Configuration Workflow

1. Access the official iStartek VT005 configuration method — commonly SMS commands or vendor tools — and confirm the device is reachable for configuration.
2. Enter the APN provided by your mobile operator using the APN command so the VT005 can establish cellular data.
3. Configure the server address as d.plaspy.com or as the direct IP 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP if the device requires selecting a transport protocol for reporting.
5. Apply or save the configuration on the device and, if applicable, perform a device restart or cycle power to ensure settings take effect.
6. Validate device reporting by checking parameters and confirming the VT005 appears online in Plaspy and is sending location updates.
7. If you maintain fleets, repeat or automate these steps for bulk deployment and keep a record of firmware versions and APN profiles used.

## Example Configuration Commands

The VT005 supports SMS-based configuration. Below are the commonly used SMS commands presented in the order recommended for initial setup. Send each command as an SMS to the device number. Labels and notes follow each command to explain purpose and placeholders.

1. Optional factory reset (use only when needed to clear prior settings)
```
FACTORY#
```

2. Set the time zone to UTC-0 (example)
```
GMT,E,0#
```

3. Set the operator APN
- Replace [apn] with your mobile operator APN.
- If your operator requires APN username or password, supply [apnu] and [apnp] respectively. Keep the placeholders if you will substitute real values.
```
APN,[apn]# 
```
Or, if username and password are needed:
```
APN,[apn],[apnu],[apnp]#
```

4. Set the GPRS server to use Plaspy domain on port 8888 (TCP or UDP choice is device-dependent)
- Use the domain option:
```
SERVER,1,d.plaspy.com,8888#
```
- Or use the direct IP option:
```
SERVER,0,54.85.159.138,8888#
```

5. Set the periodic update interval to 60 seconds
```
TIMER,60#
```

6. Verify current parameter settings
```
PARAM#
```

Notes on these commands:
- Keep the order when deploying initial settings: APN first, then SERVER, then TIMER and verification.
- The APN command shows placeholders [apn], [apnu], and [apnp] that must be replaced with your operator values if required.
- The SERVER command is shown both as a domain-based form and as an IP-based form; use the one appropriate for your environment.

## Configuration Notes

- SMS-based setup is publicly documented for the VT005 and is useful when a device has no immediate data connection; ensure SMS credits or plan allows for outbound/ inbound SMS during configuration.
- Firmware and hardware revisions can change available commands or command syntax; always verify the command set against the device firmware release notes when possible.
- Choose TCP or UDP according to installation needs; Plaspy accepts both on port 8888 and will auto-detect the device protocol when the tracker connects.
- APN username and password are optional in many regions but required by some operators; include [apnu] and [apnp] when prompted by your carrier.
- Because Plaspy uses the same port for all supported devices, confirming the correct port (8888) and server address is critical for immediate visibility in the platform.

## Why Use Plaspy with This Configuration

Using the VT005 with Plaspy gives organizations a straightforward path to centralized vehicle visibility, event-driven alerts, and basic vehicle diagnostics without complex wiring. The VT005’s plug-and-play OBD II form factor, combined with Plaspy’s automatic protocol detection and shared server settings, simplifies deployment across fleets and ensures device telemetry reaches the platform for monitoring, reporting, and alerting.

Learn more about Plaspy at https://www.plaspy.com and review the latest device-specific setup details and firmware notes at the manufacturer site https://istartek.com/ to confirm commands, firmware behavior, and any updates to configuration methods.
