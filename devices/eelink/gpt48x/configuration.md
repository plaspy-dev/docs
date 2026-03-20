---
slug: /eelink/gpt48x/configuration
id: gpt48x-configuration
sidebar_label: Configuration
title: EElink - GPT48‑X Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT48‑X with Plaspy server settings and SMS commands for integration
keywords:
  - EElink GPT48‑X configuration
  - GPT48‑X setup
  - EElink tracker Plaspy
  - GPT48‑X server configuration
  - GPS tracker configuration guide
  - Plaspy device setup
  - EELINK protocol configuration
  - asset tracker integration
  - GPS platform setup
  - tracker SMS configuration
---

# EElink - GPT48‑X Configuration

This page covers the public configuration context for using the EElink GPT48‑X tracker with the Plaspy platform. It consolidates the practical server settings, SMS command examples, and workflow guidance needed to prepare the device for Plaspy ingestion while preserving manufacturer configuration details that are publicly available.

Plaspy uses shared server settings across supported devices and automatically detects the device protocol, but the exact manufacturer side setup can vary depending on firmware, hardware revision, installation type, or vendor tools. The GPT48‑X supports remote configuration via platform, mobile app, or SMS and the examples below include the common SMS commands published by the manufacturer for initial setup.

## Configuration Overview

Configuring the GPT48‑X for Plaspy ensures the tracker can authenticate to the network, establish a data session to the Plaspy endpoint, and begin reporting GNSS positions and device events. The most important public items are the server endpoint, transport selection, and verifying that the tracker reports successfully to Plaspy.

- Configure the device server to point to Plaspy so reported location and telemetry are delivered to the platform.
- Set the device APN and ensure the SIM has data and SMS support for remote configuration and connectivity.
- Choose UDP or TCP transport and set the standard Plaspy port to allow inbound packets to the platform.
- Use the provided SMS commands or manufacturer tools to apply and save settings when required.
- Verify the device reports to Plaspy and check device status and events in the platform to confirm connectivity.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — Plaspy uses the same port for all supported devices  
- Transport support: UDP or TCP may be used depending on device requirement  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered GPT48‑X with sufficient battery or an external power source for initial configuration.  
- A SIM card provisioned for cellular data and SMS on the regional LTE Cat‑M or NB‑IoT network used by the device.  
- Access to the manufacturer's configuration method such as the official app, web portal, or an SMS capable phone for sending SMS commands.  
- The correct APN settings for the mobile operator to allow GPRS or IP data sessions.  
- A Plaspy account and instructions to confirm the device appears in the platform after setup.  
- Manufacturer documentation or release notes for the device firmware version in use.

## How This Tracker Connects to Plaspy

The GPT48‑X is configured to report GNSS positions and device telemetry to the shared Plaspy server endpoint and port. Plaspy ingests the EELINK protocol payloads and decodes events such as battery status, tamper alerts, and emergency reporting so devices appear in dashboards and trigger alerts.

- Device sends GNSS and telemetry data to d.plaspy.com or directly to 54.85.159.138 on port 8888.  
- Tracker transport can be configured for UDP or TCP depending on the firmware and network environment.  
- Plaspy automatically detects the EELINK tracker protocol and decodes incoming messages for visibility.  
- Reported events such as tamper, movement, and emergency mode are made available as alerts in Plaspy.  
- Regular and emergency reporting intervals are used to balance battery life and update frequency.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as the EElink app, web portal, or SMS command interface.  
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the IP 54.85.159.138.  
3. Set the server port to 8888 — Plaspy uses this same port across supported devices.  
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.  
5. Configure operator APN and any optional APN credentials required by the SIM.  
6. Apply or save the configuration and restart the device if the procedure requires a reboot.  
7. Validate that the device reports to Plaspy and appears in your Plaspy dashboard or device list.

## Example Configuration Commands

The GPT48‑X supports SMS based configuration. The following public commands are provided by the manufacturer and should be sent as SMS messages to the device. Preserve placeholders such as [apn], [apnu], and [apnp] when you supply operator specific values.

- Reset device to factory defaults (optional initial step):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN (replace [apn] with your carrier APN; if your APN requires username or password include [apnu] and [apnp]):
```text
APN,[apn]# 
```
If your APN requires username and password use:
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy by domain (recommended):
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy by IP address:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the location update interval to 60 seconds:
```text
TIMER,60#
```

- Verify current parameter settings:
```text
PARAM#
```

Notes on placeholders:
- [apn] is the mobile operator APN string required for data connectivity.  
- [apnu] and [apnp] are optional APN username and password fields when the operator requires them.

If you use the domain SERVER,1,d.plaspy.com,8888# the tracker will resolve the domain to Plaspy's IP and connect to port 8888. Both the domain and the IP examples above are public configuration options.

## Configuration Notes

- Firmware and hardware revisions may change the exact SMS command syntax or available features; always verify commands against your device firmware release notes.  
- The GPT48‑X supports SMS based configuration in public documentation, which is useful for field installations without direct cable access.  
- When a device requires selecting TCP or UDP, choose the transport that best matches your network reliability and the manufacturer's recommendation.  
- Plaspy automatically detects the device protocol on connection and uses port 8888 consistently for all devices.  
- Keep a record of applied settings and test reporting to Plaspy after changes to confirm connectivity and event decoding.

## Why Use Plaspy with This Configuration

Using the GPT48‑X with Plaspy provides persistent location awareness and event reporting while minimizing on site maintenance. The shared Plaspy server settings and automatic protocol detection simplify onboarding and reduce configuration complexity for large deployments, enabling consistent reporting of positions, tamper alerts, and emergency events into a single operational platform.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions and firmware information on the manufacturer site https://www.eelink.com.cn/.
