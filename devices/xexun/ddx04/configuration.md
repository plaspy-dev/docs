---
slug: /xexun/ddx04/configuration
id: ddx04-configuration
sidebar_label: Configuration
title: Xexun - DDX04 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xexun DDX04 tracker showing Plaspy server settings and SMS command examples
keywords:
  - Xexun DDX04 configuration
  - DDX04 Plaspy setup
  - Xexun tracker configuration
  - DDX04 server configuration
  - Plaspy device setup
  - GPS tracker configuration
  - wearable GPS setup
  - DDX04 SMS commands
  - tracker GPRS configuration
  - GPS platform setup
---

# Xexun - DDX04 Configuration

This page documents the publicly available configuration context for using the Xexun DDX04 tracker with Plaspy. It summarizes the shared Plaspy server settings you will point the device to, explains the practical steps commonly used to configure the tracker, and preserves the SMS-based commands that are publicly published for this model.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocols, but exact manufacturer-side steps can vary by firmware level, hardware revision, installation type, and vendor tools. The DDX04 supports SMS configuration in public materials, and this guide includes those SMS commands with placeholders where applicable. Always verify details against the latest manufacturer documentation when in doubt.

## Configuration Overview

This configuration process prepares the DDX04 to send its location, alerts, and telemetry to the Plaspy backend using the shared server endpoint and port. The goal is to ensure the tracker has valid mobile data settings, points to the Plaspy server, and reports at the desired reporting interval so it appears correctly in the Plaspy platform.

- Configure the device APN and GPRS settings so it can establish a cellular data connection.
- Set the device to report to the Plaspy server endpoint and port so location and telemetry reach Plaspy.
- Choose the transport (UDP or TCP) if the device requires it and save the setting.
- Confirm device reporting frequency and basic telemetry so Plaspy receives live updates and history.
- Validate the device is visible in Plaspy and that tamper and other alerts are being received.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured for either)
- Plaspy automatically detects the tracker protocol and all devices use the same port in Plaspy

## Typical Requirements Before Setup

- A charged and functioning DDX04 device with access to its SMS or manufacturer configuration method.
- An active SIM card with a mobile data plan and the correct APN details for the mobile operator.
- Knowledge of the device password; publicly documented default password for these SMS commands is 123456.
- A handset or SMS gateway capable of sending text commands to the device if using SMS configuration.
- Access to the official Xexun documentation or vendor tools for firmware specific instructions and updates.
- Basic visibility into Plaspy to verify the tracker appears after configuration.

## How This Tracker Connects to Plaspy

The DDX04 is configured to send position fixes, alerts, and telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest and display device data in real time. Plaspy’s automatic protocol detection removes the need to select a protocol-specific handler after the device is pointed at the platform.

- The tracker is directed to the Plaspy backend server endpoint at d.plaspy.com (or 54.85.159.138) on port 8888.
- Device telemetry and event messages are transmitted over cellular data using the configured transport (UDP or TCP).
- Status updates, tamper alarms, and health telemetry are reported to Plaspy for monitoring and alerting.
- Plaspy shows live location, history playback, and event notifications once the device successfully reports.
- Plaspy uses one shared port for all devices and performs automatic protocol detection for incoming connections.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or authorized vendor software, or prepare to send SMS configuration commands as published for the DDX04.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device GPRS/server settings.
3. Set the device port to 8888 in the server or adminip configuration.
4. If the device requires selecting a transport, choose UDP or TCP according to your deployment or network needs.
5. Apply or save the configuration on the device and, if applicable, send any final save or mode commands required by the manufacturer.
6. Restart the device if required by the firmware or after applying network settings.
7. Validate that the device reports to Plaspy by checking the device presence and recent updates in your Plaspy dashboard.

## Example Configuration Commands

The DDX04 public configuration commands are commonly sent by SMS. The commands below are provided in the order shown in the manufacturer’s public materials. The sample commands use the default device password 123456 where required. Preserve the placeholders when replacing with your operator values.

1. Optional initial factory restore (label this as initial or only when needed)
```
begin123456
```

2. Set the operator APN (replace {{apn}} with your operator APN)
```
apn123456 {{apn}}
```

3. Set the APN username if required (replace {{apnu}} with the APN username)
```
apnuser123456 {{apnu}}
```

4. Set the APN password if required (replace {{apnp}} with the APN password)
```
apnpasswd123456 {{apnp}}
```

5. Set the GPRS server to the Plaspy endpoint using the Plaspy public server IP and port
```
adminip123456 54.85.159.138 8888
```

6. Set the GPRS mode (follow manufacturer documentation for mode options if required)
```
gprsmode123456
```

7. Set the update/reporting interval to 60 seconds (example interval command)
```
t060s***n123456
```

Notes on placeholders
- {{apn}} is the mobile operator APN string.
- {{apnu}} is the APN username if your operator requires it.
- {{apnp}} is the APN password if your operator requires it.
- Replace the placeholders with the exact string provided by your mobile operator.

These SMS commands are the publicly published sequence for the DDX04. Use them from an authorized phone number and confirm the device password before sending.

## Configuration Notes

- SMS-based configuration is a common public method for Xexun devices but firmware and vendor tools may also provide alternative configuration methods.
- TCP versus UDP selection can affect delivery characteristics; choose the transport that fits your network and monitoring requirements. Plaspy will detect the device protocol automatically after the device connects.
- Firmware version and hardware revision can change command behavior or available options. Confirm the command set for your device firmware level.
- APN credentials must match the SIM operator settings exactly; incorrect APN will prevent GPRS connection to d.plaspy.com or 54.85.159.138.
- All Plaspy devices use the same port 8888 so consistent port configuration simplifies multi-device deployments.

## Why Use Plaspy with This Configuration

Using the DDX04 with Plaspy enables organizations to combine the device’s tamper detection, multi-source positioning, and health telemetry with a single backend that ingests and displays live locations, history playback, and event alerts. This configuration supports operational visibility and helps streamline monitoring workflows for programs that require reliable tracking and timely alerts.

To learn more about Plaspy and how devices are integrated, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer details, verify information on the official Xexun website https://www.xexun.com/ as specifications and setup procedures can change over time.
