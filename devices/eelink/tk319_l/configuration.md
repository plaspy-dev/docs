---
slug: /eelink/tk319_l/configuration
id: tk319_l-configuration
sidebar_label: Configuration
title: EElink - TK319‑L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the EElink TK319‑L to Plaspy with shared server settings and example SMS commands
keywords:
  - EElink TK319 L configuration
  - EElink TK319 L setup
  - TK319 L Plaspy configuration
  - TK319 L server settings
  - EElink GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracker setup guide
  - GPS tracker SMS commands
  - fleet tracking configuration
  - TK319 L telemetry integration
---

# EElink - TK319‑L Configuration

This page documents the public configuration context for using the EElink TK319‑L with Plaspy. It gathers the Plaspy server settings and practical setup guidance that enable the TK319‑L to report location and telemetry to the Plaspy platform using the shared Plaspy endpoints and common device commands where publicly available.

Plaspy uses the same shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use. Where available this guide includes the TK319‑L SMS commands published by the manufacturer for basic configuration and verification.

## Configuration Overview

This configuration prepares the tracker to communicate reliably with Plaspy by pointing the device to Plaspy’s shared server endpoint, defining reporting intervals, and verifying connection status. The TK319‑L supports SMS-based configuration commands which are commonly used to set APN, server, and timing parameters before validating connectivity on the platform.

- Configure the device APN and cellular parameters so it has data connectivity to reach Plaspy.
- Point the tracker to the Plaspy server domain or IP and ensure the correct port is set.
- Set reporting intervals (for example a periodic timer) so the tracker sends regular updates to Plaspy.
- Verify parameters and connectivity using the tracker’s check command or manufacturer tools.
- Confirm the device appears in Plaspy and that position and event reports are received.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured to use either transport on port 8888)
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Access to the device and a charged backup battery or power source so configuration persists.
- An active cellular data SIM provisioned for NB‑IoT, LTE Cat M1, or GSM data as required by the tracker and the network in your region.
- The carrier APN for the SIM (to be entered as the APN parameter in configuration).
- Ability to send SMS commands from a mobile phone or the manufacturer configuration tool if SMS-based setup is used.
- Basic familiarity with the TK319‑L manufacturer manual or configuration tool for model-specific behaviors.

## How This Tracker Connects to Plaspy

The TK319‑L sends location and event data to Plaspy by reporting to the shared Plaspy server endpoint and port. Once APN and server parameters are set, the tracker establishes a data session and transmits periodic location updates and alarm/events to Plaspy where they appear in dashboards and reports.

- The tracker is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Device transport can be UDP or TCP depending on your device configuration and network requirements.
- Plaspy automatically detects the tracker protocol and processes inbound messages from the TK319‑L.
- Regular timer-based updates and event-triggered messages provide live tracking and operational visibility in Plaspy.
- Use the platform to verify that location, ACC/ignition events, and alarm signals are being ingested.

## Common Configuration Workflow

1. Obtain the TK319‑L manufacturer manual or access the official EElink configuration method (SMS commands or the vendor tool).
2. Ensure the tracker has power and an active SIM with the correct APN for your cellular provider.
3. Enter the Plaspy server endpoint by configuring either d.plaspy.com or 54.85.159.138 as the server.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Configure reporting intervals (for example a 60 second timer) and any required time zone or regional settings.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate the device reports to Plaspy and confirm location and event data appear in the platform.

## Example Configuration Commands

The TK319‑L supports SMS-based configuration. Below are the commonly used public SMS commands in the order recommended by the manufacturer. Send each line as an SMS message to the device administrator number.

- Optional initial factory reset (use only if you need to return the device to factory defaults):
```
FACTORY#
```

- Set the time zone to UTC+0 (example):
```
GMT,E,0#
```

- Set the operator APN. Replace the placeholders with your carrier values:
```
APN,[apn]# 
```
If your carrier requires username and password include them as:
```
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the network APN string, [apnu] is the APN username if required, and [apnp] is the APN password if required.

- Set the GPRS server by domain (recommended for clarity):
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP address:
```
SERVER,0,54.85.159.138,8888#
```

- Set the periodic update interval to 60 seconds:
```
TIMER,60#
```

- Check current parameter settings:
```
PARAM#
```

Follow the command order above when the sequence matters. Use factory reset only when necessary. After sending server and APN settings, allow the device to register on the network and verify connectivity in Plaspy.

## Configuration Notes

- Firmware and regional variations may change available command syntax or required parameters; always verify syntax against the device manual for your firmware revision.
- Choose UDP or TCP transport based on network reliability and your operational needs; some networks may favor one transport over the other.
- SMS-based configuration is a common public method for the TK319‑L; manufacturer tools or provisioning software may offer bulk or remote configuration alternatives.
- Use domain-based server configuration (d.plaspy.com) when possible so DNS can accommodate backend changes; the IP option is provided when DNS is unavailable.
- After configuration, allow a few minutes for the device to register on the cellular network and begin reporting to Plaspy.

## Why Use Plaspy with This Configuration

Using the TK319‑L with Plaspy lets organizations collect continuous location and event telemetry into a single fleet management platform. The shared Plaspy server settings and automatic protocol detection simplify onboarding so the device can start delivering GPS/LBS positions, ACC/ignition events, and alarm signals into dashboards and reports for operational monitoring, route playback, and alerting.

Learn more about Plaspy at https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information on the manufacturer site https://www.eelink.com.cn/ before deployment.
