---
slug: /eelink/tk419/configuration
id: tk419-configuration
sidebar_label: Configuration
title: EElink - TK419 Configuration
sidebar_class_name: menu_item_tracker
description: Practical guide to configure EElink TK419 tracker for use with Plaspy servers and shared settings
keywords:
  - EElink TK419 configuration
  - EElink TK419 setup
  - TK419 server configuration
  - TK419 Plaspy setup
  - EElink tracker configuration
  - vehicle tracking setup Plaspy
  - GPS tracker server configuration
  - fleet tracking TK419
  - Plaspy device integration
  - TK419 SMS commands
---

# EElink - TK419 Configuration

This page documents the public configuration context for using the EElink TK419 GPS tracker with Plaspy. It summarizes the shared server settings Plaspy requires, explains the typical device setup workflow, and provides the publicly available SMS commands for TK419 that are used to point the device at Plaspy. The TK419 is a compact 4G tracker designed for vehicle fleets and asset security and is compatible with Plaspy for real time location, alarms, and telemetry.

Plaspy uses a shared ingestion endpoint and automatically detects tracker protocols across supported devices, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The TK419 supports remote configuration by SMS and platform tools; this page includes the SMS commands published in the device documentation and describes how to apply them to register the tracker with Plaspy.

## Configuration Overview

The goal of configuring a TK419 for Plaspy is to enable continuous, reliable delivery of GNSS positions and telemetry to the Plaspy ingestion endpoint so the device appears and updates correctly in the platform. Configuration typically involves setting the mobile data APN, specifying the Plaspy server, choosing the transport mode if required, and validating that the tracker reports to the platform.

- Configure device APN so the tracker can use cellular data to reach Plaspy.
- Point the device to the Plaspy server endpoint and the common Plaspy port so messages route correctly.
- Select UDP or TCP transport when the device requires a transport choice.
- Set reporting frequency and alarms so the device sends updates at the desired interval.
- Validate configuration using the device verification command and confirm visibility in Plaspy.

## Plaspy Server Settings

When configuring TK419 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport if the device requires an explicit selection
- Plaspy automatically detects the tracker protocol so all devices can use the same port

Plaspy uses the same port across supported devices and will detect the tracker protocol automatically when the device is correctly pointed to the server endpoint.

## Typical Requirements Before Setup

- A powered and installed TK419 with access to its SMS or configuration interface
- An active cellular SIM with data and the correct APN credentials for your operator
- Basic device information such as IMEI so you can identify the tracker in Plaspy after it reports
- Access to the official manufacturer configuration method or software and any vendor tools you use
- Physical access to the device for initial setup or an ability to send SMS commands to its SIM
- Patience to verify firmware differences if you encounter unexpected behavior

## How This Tracker Connects to Plaspy

The TK419 transmits GNSS positions and device telemetry over cellular networks to the Plaspy ingestion endpoint. By configuring the tracker to use the Plaspy server domain or IP and the shared port, the device will deliver its messages to Plaspy where the platform maps those messages into live location, alerts, and reports.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the equivalent IP 54.85.159.138 on port 8888
- Plaspy receives device messages over UDP or TCP depending on the transport chosen on the device
- Plaspy automatically detects the protocol used by the tracker so the same port is used for ingestion
- Location, alarm, and IO telemetry sent by the tracker become visible and actionable in Plaspy
- Regular reporting intervals and alarm conditions drive visibility, alerts, and historical logs in the platform

## Common Configuration Workflow

1. Access the official EElink configuration method for the TK419, typically SMS commands or EElink configuration tools provided by the manufacturer or vendor.
2. Set the device APN using the manufacturer recommended command format so the tracker can use mobile data.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. If the tracker requires selection of transport, choose UDP or TCP according to your installation needs.
5. Configure reporting interval and alarms such as the TIMER value that controls periodic updates.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by using the device verification command and confirming the device appears and updates in Plaspy.

## Example Configuration Commands

The TK419 supports SMS based configuration. Below are the public SMS commands as published in the device documentation. Preserve the order when applying commands during initial setup. Labeling indicates common intent; do not modify the commands unless you understand the device behavior.

1. Optional initial factory reset (use only when you need to restore defaults)
```text
FACTORY#
```

2. Set the time zone to UTC 0
```text
GMT,E,0#
```

3. Set the operator APN
- Replace {{apn}} with your carrier APN.
- If your operator requires username or password, include {{apnu}} and {{apnp}} respectively as shown in the placeholder.
```text
APN,{{apn}}# 
```
or with optional username and password
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

4. Set the GPRS server to Plaspy using the domain (preferred for DNS resolution)
```text
SERVER,1,d.plaspy.com,8888#
```
or set the GPRS server to Plaspy using the IP
```text
SERVER,0,54.85.159.138,8888#
```

5. Set the periodic update interval to every 60 seconds
```text
TIMER,60#
```

6. Check current parameter settings
```text
PARAM#
```

Note about placeholders
- {{apn}} is the mobile operator APN required for data access.
- {{apnu}} is an optional APN username.
- {{apnp}} is an optional APN password.
Keep these placeholders and substitute your operator values when sending SMS commands.

## Configuration Notes

- Firmware and hardware revisions can change available commands or command syntax; verify the command set against your device firmware.
- The TK419 supports SMS based configuration as shown; you may also use manufacturer tools or vendor provisioning services when available.
- Plaspy accepts connections to the same port for all devices and will automatically detect the device protocol once the server and port are set.
- Choose UDP or TCP according to your environment and device support; some installations prefer UDP for lower overhead while others require TCP for reliable delivery.
- Use PARAM# to verify settings after applying commands and before concluding the installation.

## Why Use Plaspy with This Configuration

Pointing a TK419 to Plaspy with the shared server settings gives fleet managers a straightforward path to real time location, alarms, and telemetry in a single platform. Plaspy converts incoming tracker messages into map updates, event alerts, and history that support operational monitoring, theft response, and compliance reporting.

To learn more about Plaspy and platform features please visit https://www.plaspy.com. For the latest device specific instructions, firmware behavior, and manufacturer guidance verify details on the EElink website https://www.eelink.com.cn/ as manufacturer specifications and setup methods can change over time.
