---
slug: /xexun/x01/configuration
id: x01-configuration
sidebar_label: Configuration
title: Xexun - X01 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Xexun X01 for Plaspy with server settings commands and practical setup guidance for reliable vehicle tracking
keywords:
  - Xexun X01 configuration
  - Xexun X01 setup
  - Xexun X01 Plaspy
  - Xexun tracker configuration
  - GPS tracker setup Plaspy
  - vehicle tracker configuration
  - fleet management tracker setup
  - Xexun X01 server configuration
  - tracking platform setup
  - Xexun X01 SMS commands
---

# Xexun - X01 Configuration

This page documents the public configuration context for using the Xexun X01 tracker with Plaspy. It summarizes the Plaspy server settings you must point the tracker to, explains the typical setup workflow, and includes the publicly available SMS configuration commands supplied with the X01 for basic integration. Use this guidance to prepare the device for Plaspy visibility while following your installation and safety procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The X01 is Plaspy compatible out of the box and supports SMS based configuration commands shown below; verify any device specific differences with Xexun documentation when needed.

## Configuration Overview

The goal of configuring the X01 for Plaspy is to prepare the device to communicate reliably with Plaspy servers, validate connectivity, and enable live tracking and historical playback in the Plaspy platform. The public configuration flow typically sets operator APN, configures the GPRS server endpoint and port, sets reporting intervals, and confirms the device is reporting to Plaspy.

- Set the cellular data APN and optional APN user credentials needed by your operator.
- Configure the tracker to report to Plaspy server d.plaspy.com or its IP address on the shared Plaspy port.
- Choose the transport mode (UDP or TCP) when the device requires a transport selection.
- Set reporting intervals so the device sends location updates at the desired frequency.
- Validate that the tracker appears in Plaspy and is sending live data.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port

These exact values are used by Plaspy for receiving telemetry from supported trackers including the X01.

## Typical Requirements Before Setup

- A powered and accessible Xexun X01 device installed or connected to a bench power supply.
- A SIM card with active data and SMS capability inserted and registered on a cellular network supported by the device.
- Access to the manufacturer's configuration method such as SMS commands or official configuration tool.
- Knowledge of the device password; the public example uses the default password 123456.
- A mobile phone capable of sending SMS messages to the tracker for SMS based configuration if you choose that method.

## How This Tracker Connects to Plaspy

The X01 is configured to send location and status packets to Plaspy's shared server endpoint and port so Plaspy can display live location, routes, and alerts. Configuration ensures the device uses the correct APN for cellular data and the correct server address and port for Plaspy ingestion.

- The tracker sends GNSS position and status packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device selection; Plaspy accepts both.
- Plaspy automatically detects the tracker protocol and processes incoming packets for mapping, alerts, and history.
- Reporting intervals and event triggers control how often the device transmits data to Plaspy.
- After configuration, verify the device is visible in the Plaspy dashboard and sending telemetry.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare a phone for SMS based setup as documented by Xexun.
2. Configure the device APN settings for the operator using the APN commands or the manufacturer tool.
3. Enter the Plaspy server address either as the domain d.plaspy.com or as the IP 54.85.159.138 and set the port to 8888.
4. Choose the transport type UDP or TCP if the device requires a transport selection.
5. Set reporting intervals and any event thresholds required for your use case and apply or save the configuration.
6. Restart or power cycle the device if required by the manufacturer to apply network settings.
7. Validate that the device reports to Plaspy by checking live location and telemetry in the Plaspy platform.

## Example Configuration Commands

The Xexun X01 supports SMS based configuration. The following public commands are provided in the manufacturer material. Send these commands as SMS messages to the device in the presented order when applicable.

Notes:
- The example uses the device password 123456 which is the factory default in the public commands below.
- Keep placeholders as shown. Replace [apn] with your operator APN, [apnu] with APN username if required, and [apnp] with APN password if required.
- The adminip command below shows the public Plaspy IP and port which may also be entered as the domain d.plaspy.com if the device accepts domain names.

1. Optional factory restore at initial setup
```text
begin123456
```
(Labels: optional or initial setup. Use only when you need to restore factory defaults.)

2. Set the operator APN
```text
apn123456 [apn]
```

3. Set the APN username (if required by operator)
```text
apnuser123456 [apnu]
```

4. Set the APN password (if required by operator)
```text
apnpasswd123456 [apnp]
```

5. Set the GPRS server to Plaspy using the public IP and shared port
```text
adminip123456 54.85.159.138 8888
```
(You may be able to use d.plaspy.com instead of the IP if the device accepts domains.)

6. Set the GPRS mode
```text
gprsmode123456
```

7. Set the timed update interval to 60 seconds
```text
t060s***n123456
```
(Adjust the interval command as required by the device command syntax for other intervals.)

## Configuration Notes

- SMS based setup is documented in the public commands above; some installers use the manufacturer's configuration tool instead. Use the method recommended for your device firmware.
- Firmware versions and hardware revisions can change command syntax or available options. Confirm commands against the device manual if you see unexpected behavior.
- If your operator requires APN username/password omit those steps when not needed; the APN user and password commands are optional for many operators.
- When choosing between UDP and TCP consider network reliability and operator behavior; Plaspy accepts both transports and will auto detect protocol.
- All Plaspy supported devices use the same port 8888 so you do not need device specific ports when integrating multiple tracker models.

## Why Use Plaspy with This Configuration

Using the Xexun X01 with Plaspy provides straightforward integration for teams that need continuous vehicle visibility and operational oversight. Pointing the X01 to Plaspy's shared server and port lets fleet managers view live positions, run history playback, and receive alerts for geofences, tamper events, and low battery conditions through Plaspy's interface.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For device specific command syntax, firmware notes, and the latest X01 technical documentation verify the manufacturer's guidance at https://www.xexun.com/ before deploying at scale.
