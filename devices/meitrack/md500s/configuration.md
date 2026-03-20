---
slug: /meitrack/md500s/configuration
id: md500s-configuration
sidebar_label: Configuration
title: Meitrack - MD500S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack MD500S with Plaspy covering server settings SMS commands and setup steps for tracking integration
keywords:
  - Meitrack MD500S configuration
  - Meitrack MD500S setup
  - MD500S Plaspy configuration
  - MD500S GPS tracker setup
  - Meitrack tracker configuration
  - Plaspy device configuration
  - vehicle tracker MD500S setup
  - MD500S server configuration
  - Meitrack GPS platform setup
  - MD500S SMS configuration
---

# Meitrack - MD500S Configuration

This page documents the public configuration context for using the Meitrack MD500S with the Plaspy platform. It focuses on the practical server settings, a sample SMS-based configuration flow provided in the public model configuration, and what you need to check before integrating the MD500S with Plaspy for real-time tracking and telemetry.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools used. The MD500S supports SMS and GPRS style configuration as shown in the public commands below; apply those commands as appropriate for your hardware and firmware and verify behavior against Meitrack documentation.

## Configuration Overview

The goal of configuring an MD500S for Plaspy is to point the device at the Plaspy server endpoint, ensure the device can send data over the chosen cellular or network channel, and verify visibility in your Plaspy account. For devices where SMS-based configuration is available, the SMS commands set network and reporting parameters so the unit streams telemetry to Plaspy.

- Configure the MD500S to report to the Plaspy server endpoint and port so location and telemetry arrive at Plaspy.
- Set APN and, when needed, APN credentials so the device has GPRS/4G data connectivity.
- Validate transport and connectivity so the device can establish a TCP or UDP session with Plaspy.
- Confirm the device reports location and events into the Plaspy platform for monitoring and alerts.
- Optionally apply time zone and reporting interval settings to align telemetry timing and update frequency.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Access to the MD500S unit and any vendor tools or SMS-capable phone used for configuration.
- A valid SIM card with data service and SMS capability if using GPRS and SMS commands.
- Power and vehicle wiring connected per the installer guide so the device boots and registers on the cellular network.
- The correct APN for your SIM operator and any APN username or password if required.
- The device firmware and configuration tool documentation from Meitrack so commands match your firmware behavior.
- Access to the Plaspy account and device provisioning guidance so you can confirm a reporting device in the platform.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the MD500S sends positional fixes, device status, and event reports to the shared Plaspy server endpoint and port. Plaspy ingests those messages and makes location, telemetry, and alarm data available in the platform.

- The MD500S is configured to report to d.plaspy.com (54.85.159.138) on port 8888.
- The device can use UDP or TCP transport to send telemetry to Plaspy depending on your configuration choice.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device record.
- Telemetry and event messages enable visibility, alerts, and historical route data in Plaspy.
- When available, video event references and synchronized telemetry can be correlated in Plaspy or linked video management systems.

## Common Configuration Workflow

1. Access the official Meitrack configuration method for your MD500S (SMS commands, Meitrack Manager, or the vendor's configuration utility).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 as required by your configuration interface.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the device requires a transport selection; Plaspy supports both and detects the protocol automatically.
5. Apply or save the configuration and wait for the device to register on the network and open a session to Plaspy.
6. Restart the device if required by the configuration method or firmware to ensure the new settings take effect.
7. Validate in Plaspy that the device begins reporting location and status messages to the platform.

## Example Configuration Commands

The public MD500S configuration examples below are SMS commands that can be sent to the device. The sample commands use the default device password 0000 as provided in the public configuration content. The first command below is a factory settings reset and should be used only when required or during initial setup.

- Optional initial factory settings (use only when you intend to restore factory defaults):
```text
0000,F11
```

- Set the GPRS server to Plaspy using the server IP and Plaspy port 8888.
  - Basic command with APN only:
```text
0000,A21,2,54.85.159.138,8888,{{apn}}
```
  - If your APN requires username and password include these placeholders:
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
  - Alternatively, if you prefer to use the Plaspy domain instead of IP, point the server field in your Meitrack tool to d.plaspy.com and use port 8888.

- Set the time zone to UTC+0:
```text
0000,B36,0
```

- Set the update interval to every 1 minute:
```text
0000,A12,6,0
```

- Set event reporting configuration (example sets events as in the public model content):
```text
0000,C03,0
```

Notes on placeholders:
- {{apn}} is the APN string provided by your mobile operator.
- {{apnu}} is the APN username when required by the operator; leave empty if not needed.
- {{apnp}} is the APN password when required by the operator; leave empty if not needed.

Send these SMS commands from an authorized phone number if your device is configured to accept commands only from specific numbers. After sending server and APN commands, verify the device registers on the cellular network and establishes a session to the Plaspy server at 54.85.159.138 on port 8888.

## Configuration Notes

- Firmware and tool differences can change command syntax and behavior. Always cross-check commands with the Meitrack MD500S firmware documentation.
- The MD500S supports SMS-based setup as shown, but many deployments prefer Meitrack Manager or OTA tools for bulk or remote configuration.
- Choose TCP if your installation requires a connection-oriented transport; choose UDP for lower overhead. Plaspy accepts both and auto-detects the tracker protocol.
- Using the server domain d.plaspy.com can avoid issues if Plaspy updates server IPs, but the provided IP 54.85.159.138 can be used in tools that require an IP.
- If a factory reset command is used, consider it optional and only perform it when necessary during initial provisioning.

## Why Use Plaspy with This Configuration

Configuring the MD500S to report to Plaspy brings together robust vehicle telemetry and synchronized video-ready data into a single fleet management view. Organizations gain real-time location, event monitoring, and the ability to correlate MD500S AI-driven video events with GPS and sensor telemetry for operational oversight and incident review.

Learn more about Plaspy and how it supports devices like the MD500S at https://www.plaspy.com. For the most current device-specific configuration commands, firmware details, and regional variant information verify setup steps and command syntax with the official Meitrack documentation at https://www.meitrack.com/ .
