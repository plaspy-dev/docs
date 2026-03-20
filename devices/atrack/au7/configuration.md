---
slug: /atrack/au7/configuration
id: au7-configuration
sidebar_label: Configuration
title: ATrack - AU7 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ATrack AU7 tracker showing Plaspy server settings and example commands for integration
keywords:
  - ATrack AU7 configuration
  - ATrack AU7 setup
  - AU7 Plaspy configuration
  - AU7 server settings
  - ATrack AU7 GPS tracker
  - vehicle tracking AU7
  - AU7 TCP UDP configuration
  - ATrack AU7 GPRS setup
  - AU7 protocol configuration
  - Plaspy device configuration
---

# ATrack - AU7 Configuration

This page documents the public configuration context for using the ATrack AU7 tracker with Plaspy. It focuses on the server settings and example commands that are commonly used to point an AU7 to Plaspy so the device can report location and events to the platform. Where applicable, example AT commands from public resources are included to illustrate the practical setup steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools, so use this page as a practical integration guide and verify device-specific procedures with official ATrack documentation and tools.

## Configuration Overview

This configuration prepares the AU7 to send tracked data to the Plaspy platform using Plaspy's shared server endpoint and port. The objective is to set reporting intervals, event triggers, transport mode, and the GPRS server settings so the tracker establishes a persistent data connection to Plaspy and appears in the platform.

- Configure the tracker to report to the Plaspy server endpoint and port
- Set reporting interval and event reporting rules to ensure useful telemetry arrives at Plaspy
- Choose transport UDP or TCP depending on installer preference or firmware support
- Validate GPRS and APN settings so the device obtains mobile data connectivity
- Confirm the device successfully sends messages and is visible in Plaspy

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the AU7. Plaspy uses the same port for all supported devices and detects the tracker protocol automatically.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy performs automatic protocol detection for incoming tracker connections

## Typical Requirements Before Setup

- A powered AU7 unit with access to the manufacturer's configuration interface or provisioning tool
- Active mobile data SIM configured for the device with correct APN settings
- The installer or integrator account credentials or physical access to send AT commands or use ATrack configuration software
- Network coverage for the chosen mobile technology and confirmation that the device can use TCP or UDP for data session
- A plan for test reporting such as a known vehicle or test bench to validate server reporting

## How This Tracker Connects to Plaspy

The AU7 is configured to report telemetry, events, and periodic location samples to the shared Plaspy server endpoint and port. Once GPRS and server settings are applied, the tracker initiates connections and sends binary or text payloads according to its protocol, and Plaspy automatically detects and decodes the protocol for display and monitoring.

- The device opens a data session to d.plaspy.com or 54.85.159.138 on port 8888
- The installer can choose UDP or TCP as the transport for device messages
- The tracker sends periodic position reports and event-driven messages to Plaspy
- Plaspy receives messages on the shared port and automatically detects the tracker protocol
- Successful connection and reporting make the unit visible and usable in the Plaspy platform

## Common Configuration Workflow

1. Access the official ATrack configuration method or software for the AU7 (console, SMS commands, or vendor tool depending on the device and firmware).
2. Enter the Plaspy server by hostname d.plaspy.com or by IP 54.85.159.138 in the GPRS or server settings.
3. Set the server port to 8888 which is used by all Plaspy devices.
4. Choose UDP or TCP transport if the tracker requires a transport selection.
5. Apply or save the configuration to the device using the manufacturer's tool or command set.
6. Restart the tracker if the device or vendor instructions recommend a reboot after configuration.
7. Validate that the device reports to Plaspy and is visible in the platform, using device status commands or Plaspy connection logs.

## Example Configuration Commands

The AU7 supports AT style configuration commands. The following public example commands show a practical sequence used to configure reporting rules, interval, binary format, and the GPRS server pointing to Plaspy. Replace placeholder values such as {{apn}}, {{apnu}}, and {{apnp}} with the values provided by your mobile operator.

1. Set ACC event and reporting actions
```
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Set time interval to 60 seconds for tracking reports
```
AT$TRAC=1,60,,,,,2
```

3. Set binary reporting mode
```
AT$FORM=1,@P,0,""
```

4. Configure GPRS server pointing to Plaspy
```
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```
- {{apn}} is the mobile data access point name
- {{apnu}} is the APN username if required by the operator
- {{apnp}} is the APN password if required by the operator

5. Check device status and configuration
```
AT$INFO=?
```

These commands are public examples and show how to point an AU7 to Plaspy using the Plaspy server IP and port. If you prefer, you can replace the IP with the domain d.plaspy.com when the configuration interface accepts hostnames.

## Configuration Notes

- Firmware differences can change command syntax and supported parameters; always confirm commands against the AU7 firmware release notes.
- Choose TCP or UDP according to installation needs and firmware support; TCP may offer session reliability while UDP is commonly used for lighter messaging.
- Keep APN placeholders {{apn}}, {{apnu}}, and {{apnp}} ready from the mobile operator; leaving them incorrect will prevent GPRS connectivity.
- Some installations use SMS or vendor tools for configuration depending on site practices and the device firmware capabilities.
- Plaspy uses the same port 8888 for all devices it supports and automatically detects the tracker protocol on arrival.

## Why Use Plaspy with This Configuration

Using Plaspy with the ATrack AU7 allows organizations to centralize fleet visibility, monitor event-driven alerts, and receive regular position updates from the tracker through a single, shared Plaspy endpoint. The AU7's configurable reporting and event engine combined with Plaspy's automatic protocol detection simplify integration and reduce initial configuration complexity.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer guidance verify details on the ATrack official website https://www.atrack.com.tw/ because device setup and firmware features can change over time.
