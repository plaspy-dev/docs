---
slug: /autofon/e_ip/configuration
id: e_ip-configuration
sidebar_label: Configuration
title: AutoFon - E-Маяк IP Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon E-Маяк IP showing Plaspy server settings and practical setup steps for tracking and alerts
keywords:
  - AutoFon E-Маяк IP configuration
  - AutoFon E-Маяк IP setup
  - AutoFon server configuration
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - vehicle tracking integration
  - SMS tracker setup
  - protocol integration for trackers
  - fleet monitoring configuration
  - asset tracking setup
---

# AutoFon - E-Маяк IP Configuration

This page provides the public configuration context for using the AutoFon E‑Маяк IP tracker with Plaspy. It focuses on the practical, publicly available settings and steps required to point the device at Plaspy for real time tracking, alarms, and telemetry ingestion. Use this guide together with the device manual and Plaspy account details to complete setup.

The E‑Маяк IP supports SMS position updates and protocol messaging, and Plaspy is able to ingest both SMS forwarded coordinates and protocol messages. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can differ by firmware version, hardware revision, installation type, and vendor configuration tools. Always verify manufacturer instructions for commands and firmware specific behaviors.

## Configuration Overview

This configuration process prepares the E‑Маяк IP to communicate with Plaspy, validate connectivity, and surface the device on Plaspy dashboards. The goal is to point the tracker at Plaspy, confirm transport settings, and verify reporting and alarm behavior.

- Configure the device to send protocol messages or SMS to the Plaspy endpoint so locations and events arrive in the platform.
- Select the transport mode required by the unit and set the Plaspy port so the server accepts messages.
- Validate connectivity and liveness messages so Plaspy shows the device as active and reporting.
- Verify that alarm inputs, SOS button events, and accelerometer alerts are forwarded to Plaspy for notification.
- Confirm battery and telemetry reporting intervals match operational needs so autonomy and alerts are balanced.

## Plaspy Server Settings

When configuring the E‑Маяк IP for protocol reporting to Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport can be UDP or TCP depending on device configuration
- Plaspy automatically detects the tracker protocol once messages arrive

All devices in Plaspy use the same port and Plaspy will attempt to detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A charged or installed battery and functional device power so the unit can be configured and tested.
- Access to the official manufacturer configuration method whether SMS commands, serial or vendor software.
- A working SIM with SMS and data capability if you plan to use protocol messaging over GPRS in addition to SMS.
- The list of authorized phone numbers and any device PIN required for remote commands or SMS configuration.
- Internet access to your Plaspy account to verify device appearance and telemetry after configuration.
- The device firmware version and vendor documentation on supported commands for your hardware revision.

## How This Tracker Connects to Plaspy

The E‑Маяк IP sends location, alarm, and telemetry messages to the Plaspy server endpoint so the platform can map positions and trigger alerts. When configured, the device reports to the shared Plaspy server endpoint and port so messages are ingested and the protocol is detected automatically.

- The tracker can forward SMS coordinate messages or send protocol packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry such as SOS presses, accelerometer alerts, external input states, and heartbeat messages are delivered to Plaspy for alarm routing.
- Plaspy receives data over UDP or TCP depending on the transport you set on the device.
- Once data arrives, Plaspy auto detects the protocol and begins populating the device on account dashboards.
- Regular heartbeat or liveness messages ensure the device remains visible and monitorable in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the E‑Маяк IP. This may be SMS commands, a vendor tool, or serial configuration depending on your unit and firmware.
2. Enter the Plaspy server address either as d.plaspy.com or the IP 54.85.159.138 in the device server or APN settings where required.
3. Set the device port to 8888 as the target port for protocol messages.
4. Choose the transport mode UDP or TCP if the device requires explicit selection for protocol messaging.
5. Apply or save the configuration in the device tool or send the saving SMS command according to the manufacturer procedure.
6. Restart the device if required by the firmware or after applying network settings so changes take effect.
7. Validate that the device reports to Plaspy by checking your Plaspy account for the new device and observing a position or heartbeat message.

## Example Configuration Commands

The exact configuration commands for the E‑Маяк IP can vary by firmware and the vendor tool you are using. Manufacturer methods may include SMS configuration commands, a USB or serial interface, or dedicated configuration software. For this reason, there are no universal commands included here. Consult the AutoFon manual or installation instructions for the specific SMS strings or configuration file format required to set:

- server domain or IP to d.plaspy.com or 54.85.159.138
- port to 8888
- transport to UDP or TCP

If you have the device command list from AutoFon, follow the order recommended there and preserve any placeholders for APN or credentials exactly as provided.

## Configuration Notes

- Firmware and hardware revisions can change supported commands and configuration flows; confirm the exact command syntax with AutoFon documentation for your unit.
- The E‑Маяк IP supports both SMS forwarding and protocol messages over GPRS where configured; choose the method that fits your deployment and SIM plan.
- Selecting TCP or UDP may affect delivery behavior under poor mobile networks; test both transports if you experience missed messages.
- Plaspy uses the same port 8888 for all supported devices and performs automatic protocol detection when messages arrive.
- Keep a record of any SMS configuration commands and authorized numbers used to configure the device for easier troubleshooting and recovery.

## Why Use Plaspy with This Configuration

Using the AutoFon E‑Маяк IP with Plaspy gives teams a practical way to combine long battery life and hermetic protection with centralized tracking, alarm routing, and device monitoring. Plaspy ingests SMS and protocol messages so location updates, SOS events, and accelerometer alarms become visible in a single platform for operational response and historical reporting.

Learn more about Plaspy on the main site https://www.plaspy.com and verify the latest device specific configuration methods and firmware details with the manufacturer at https://www.autofon.ru/ . Manufacturer specifications and setup commands can change over time so always confirm current documentation before deploying devices at scale.
