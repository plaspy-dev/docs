---
slug: /istartek/pt28s/configuration
id: pt28s-configuration
sidebar_label: Configuration
title: iStartek - PT28S Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide to configure the iStartek PT28S wearable GPS tracker for Plaspy real time tracking and server integration
keywords:
  - iStartek PT28S configuration
  - iStartek PT28S setup
  - PT28S Plaspy
  - PT28S GPS tracker configuration
  - iStartek PT28S server configuration
  - PT28S tracking software configuration
  - PT28S GPS platform setup
  - iStartek wearable tracker setup
  - PT28S SMS configuration
  - Plaspy device configuration
---

# iStartek - PT28S Configuration

This page documents the public configuration context for using the iStartek PT28S 4G GPS Tracker Watch with Plaspy. It covers the practical server settings and common setup workflow used to point the device at Plaspy for real time tracking and telemetry ingestion. Use this guide as a starting point to prepare the PT28S for platform integration; follow manufacturer materials for device specific tools and firmware guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary with firmware, hardware revision, installer preferences, and vendor configuration tools. The PT28S supports remote parameter setting and SMS based commands; below we include the public SMS commands provided by the manufacturer and show how to direct the device to Plaspy using the shared Plaspy endpoint and port.

## Configuration Overview

Preparing the PT28S for Plaspy integration focuses on enabling data connectivity, pointing the tracker to the Plaspy server endpoint and port, and verifying that the device reports correctly to the platform. The public manufacturer commands include SMS based parameter setting that can set APN, server, reporting interval, and a parameter query for verification.

- Configure the device to use the Plaspy server endpoint and shared port so location and telemetry reach Plaspy.
- Provide a valid mobile data APN and ensure the device can establish GPRS data or equivalent connectivity.
- Set the reporting interval and transport type (UDP or TCP) as required for your monitoring needs.
- Validate configuration with the device parameter query and confirm visibility inside Plaspy.
- Use the manufacturer's SMS or software tools to apply parameters and, if needed, restart the device to activate settings.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the PT28S:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and automatically performs protocol detection to simplify tracker onboarding.

## Typical Requirements Before Setup

- A charged and powered PT28S device with an active SIM card that supports data and SMS as needed.
- APN details from your mobile operator (APN, APN username, APN password) to enable packet data.
- A method to send SMS configuration commands to the device or access to the manufacturer configuration software.
- Basic knowledge of whether to use UDP or TCP for transport based on your deployment needs.
- Access to the PT28S user manual or vendor support for firmware specific instructions and any device-specific steps.
- Ability to monitor the device from Plaspy after configuration to confirm successful connectivity.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the PT28S sends periodic location updates and telemetry to the shared Plaspy server endpoint and port. The device can use UDP or TCP transport to transmit GPS, positioning, and event data; Plaspy receives the data on port 8888 and automatically determines the correct protocol.

- The tracker is pointed to the Plaspy server domain or IP and port so packets reach the Plaspy ingest endpoint.
- Position fixes and telemetry (GNSS, Wi‑Fi and LBS assisted positioning where available) are transmitted to Plaspy.
- SOS events and other priority alerts are reported to Plaspy for immediate handling and notification.
- Regular reporting intervals send location updates to enable live tracking and historical playback in Plaspy.
- Plaspy uses the shared port 8888 for all devices and automatically detects the device protocol for proper decoding.

## Common Configuration Workflow

1. Access the official iStartek configuration method for the PT28S (SMS commands, vendor app, or remote parameter tool) as provided by the manufacturer.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 depending on your preference or device support.
3. Set the server port to 8888, since Plaspy uses the same port for all supported devices.
4. Choose transport UDP or TCP on the device if a transport selection is required.
5. Provide the operator APN and optional APN username and password so the device can establish data connectivity.
6. Apply or save the configuration and restart the device if the device requires a reboot to activate settings.
7. Validate the device by querying its parameters and confirming that the tracker reports to Plaspy and appears in the platform.

## Example Configuration Commands

The PT28S supports SMS based configuration commands. The following public commands are provided by the manufacturer and can be sent in order by SMS to the device SIM number. Preserve the placeholders and replace them with your operator APN values where required.

- Optional factory reset (use only if you intend to clear existing settings):
```text
FACTORY#
```

- Set the time zone to UTC+0 (example command from manufacturer):
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your operator APN. If your APN requires username or password, include [apnu] and [apnp] where supported:
```text
APN,[apn],[apnu],[apnp]#
```
(If no username or password are required, the APN command can be sent with just APN,[apn]#)

- Set the GPRS server to use the Plaspy domain with TCP/UDP port 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server using the Plaspy server IP:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to 60 seconds:
```text
TIMER,60#
```

- Verify current parameters (query):
```text
PARAM#
```

Notes about the commands
- The SERVER command examples show both domain and IP options; either can be used to direct the PT28S to Plaspy.
- The APN command contains placeholders [apn], [apnu], and [apnp]. Replace these placeholders with the operator APN, APN username, and APN password respectively when required.
- Use FACTORY# only when an initial reset is required and you understand it will clear existing parameters.
- After applying these commands, confirm the device appears and reports in Plaspy.

## Configuration Notes

- Manufacturer firmware revisions and hardware variants may change supported command syntax or parameter names; always confirm command formats with the PT28S manual or vendor updates.
- The PT28S supports SMS based parameter setting as shown above; some deployments may prefer manufacturer software or provisioning tools if available.
- Choose UDP or TCP according to network reliability and your monitoring requirements; Plaspy accepts either transport and will detect the protocol automatically.
- Ensure the APN you configure permits outbound connections to the Plaspy server endpoint and that the SIM plan supports data as required.
- Plaspy uses the same port 8888 for all supported devices. This simplifies configuration and onboarding across different tracker models.

## Why Use Plaspy with This Configuration

Using the PT28S with Plaspy gives organizations real time visibility into location, SOS events, and wearable telemetry so they can monitor safety, respond to emergencies, and review historical routes. Pointing the PT28S at the Plaspy endpoint and port enables continuous reporting to a centralized platform where alerts, playback, and dashboards consolidate location and health signals.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup information on the official manufacturer website https://istartek.com/.
