---
slug: /xexun/ddx14/configuration
id: ddx14-configuration
sidebar_label: Configuration
title: Xexun - DDX14 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Xexun DDX14 ankle tracker to Plaspy using standard server settings and SMS commands
keywords:
  - Xexun DDX14 configuration
  - DDX14 setup Plaspy
  - Xexun DDX14 server configuration
  - DDX14 GPS tracker setup
  - Plaspy device configuration
  - ankle bracelet GPS configuration
  - tamper proof GPS tracker configuration
  - DDX14 SMS commands
  - GPS tracker APN setup
  - DDX14 integration Plaspy
---

# Xexun - DDX14 Configuration

This page describes the public configuration context for using the Xexun DDX14 ankle tracker with Plaspy. It focuses on the server and network settings Plaspy requires, the practical SMS-based commands published for the DDX14, and the general workflow you can follow to bring the device online in the Plaspy platform.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so this guide combines the published DDX14 SMS commands with Plaspy server settings to show a practical setup path.

## Configuration Overview

The configuration process prepares the DDX14 to communicate reliably with Plaspy and to report location, tamper alerts, and telemetry. Using the published SMS commands, you set network APN details, point the device at the Plaspy server, and adjust reporting intervals so the tracker appears and updates on the Plaspy platform.

- Configure the device APN and GPRS mode so the tracker can use cellular data to reach Plaspy.
- Point the tracker to the Plaspy server endpoint and set the required port.
- Set reporting interval and other telemetry parameters to match your monitoring needs.
- Validate connectivity so the device reports successfully into Plaspy and generates alerts.
- Optionally restore factory settings as an initial step when required by the installer.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol so no manual protocol mapping is required

## Typical Requirements Before Setup

- An active SIM card with a data plan and the correct APN for the mobile operator.  
- Device is powered and within cellular coverage for initial configuration and testing.  
- Access to a phone or SMS tool capable of sending configuration SMS commands to the DDX14.  
- The DDX14 device password (the published default in these commands is 123456).  
- Manufacturer documentation or installer instructions for model-specific details and firmware notes.  

## How This Tracker Connects to Plaspy

The DDX14 sends location and alarm packets over cellular networks to the Plaspy shared server endpoint and port. When configured with Plaspy server settings, the device's GPRS connection is used to transmit real-time location, tamper alarms, and stored offline data after network recovery.

- The tracker points to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) and port 8888.  
- Data is sent over cellular networks using GPRS/packet data to the configured server and port.  
- Plaspy automatically identifies the DDX14 protocol from incoming packets, so the platform interprets telemetry and alarms without per-device protocol registration.  
- Tamper and alarm events reported by the DDX14 are ingested into Plaspy for alerting, history, and case workflows.  
- Offline stored tracks are retransmitted to Plaspy when network connectivity is restored.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or installer documentation for the DDX14 (SMS commands are the published method for this model).  
2. Configure the device APN using the operator APN string so it can use cellular data.  
3. Enter the Plaspy server as either d.plaspy.com (if the device accepts domain names) or 54.85.159.138 and set port 8888.  
4. Choose UDP or TCP if the device requires you to select a transport protocol. Plaspy supports both on port 8888.  
5. Apply or save the configuration on the device using the published SMS commands or manufacturer tool.  
6. Restart or power-cycle the device if the manufacturer workflow requires it to apply changes.  
7. Validate that the device reports to Plaspy by checking the device list and telemetry in the Plaspy platform and confirming location updates and alarms.

## Example Configuration Commands

The DDX14 supports SMS-based configuration. The following commands are the published public SMS commands in the order presented by the device documentation. The default device password shown in these examples is 123456. Send each line as an SMS to the device number. Preserve the placeholders when you replace them with your operator APN details.

- Optional initial factory reset (use only if you need to restore defaults; this may erase custom settings):
```text
begin123456
```

- Set the operator APN (replace {{apn}} with your SIM operator APN):
```text
apn123456 {{apn}}
```

- Set the APN username if required by your operator (replace {{apnu}} with APN username). Use only if your operator requires a username:
```text
apnuser123456 {{apnu}}
```

- Set the APN password if required by your operator (replace {{apnp}} with APN password). Use only if your operator requires a password:
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server IP and port to Plaspy. This example uses the Plaspy server IP and port published by Plaspy:
```text
adminip123456 54.85.159.138 8888
```

- Set the GPRS mode (use the device's published command to enable data reporting):
```text
gprsmode123456
```

- Set the reporting interval to 60 seconds (example command as published):
```text
t060s***n123456
```

Notes on placeholders and defaults
- {{apn}}, {{apnu}}, and {{apnp}} are placeholders for your mobile operator APN, APN username, and APN password. Replace them with the values provided by your cellular operator.  
- The numeric password 123456 in these examples is the published default device password. If your deployment uses a different password, substitute it accordingly.  
- If the device accepts a domain name instead of an IP for the server, you can point it to d.plaspy.com where supported. If not, use the IP address 54.85.159.138 as shown above.

## Configuration Notes

- Manufacturer firmware versions or regional hardware variants can change available commands or command syntax; always verify commands against the device manual or release notes.  
- SMS-based configuration is the published method for the DDX14; installer workflows that use USB tools or proprietary software may provide alternative options.  
- When the device requires a transport selection, choose UDP or TCP based on your network and policy; Plaspy accepts both on port 8888 and will detect the protocol automatically.  
- Use the published default password only for initial setup and change it if your operational policy requires different credentials.  
- Confirm APN credentials with the SIM provider before configuring the device to ensure GPRS connectivity.

## Why Use Plaspy with This Configuration

Using the DDX14 with Plaspy provides centralized visibility of location, tamper, and proximity telemetry from a purpose-built ankle tracker. For supervision, healthcare, or special-industry monitoring, Plaspy ingests the DDX14's telemetry to present real-time tracking, alarm routing, historical playback, and configurable geo-fence or policy rules in a single operational view.

To learn more about Plaspy and supported device integration options visit https://www.plaspy.com. Device specific configuration commands, firmware behavior, and manufacturer procedures can change over time so verify the latest setup documentation and firmware details with the manufacturer at https://www.xexun.com/
