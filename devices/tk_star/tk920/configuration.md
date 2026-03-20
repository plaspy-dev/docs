---
slug: /tk_star/tk920/configuration
id: tk920-configuration
sidebar_label: Configuration
title: TK-Star - TK920 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the TK-Star TK920 for Plaspy with server settings, SMS commands, and workflow for reliable device integration
keywords:
  - TK-Star TK920 configuration
  - TK920 setup
  - TK-Star TK920 server configuration
  - TK920 Plaspy setup
  - GPS tracker configuration
  - vehicle tracking configuration
  - fleet tracker setup
  - TK920 SMS commands
  - Plaspy server settings
  - asset tracker configuration
---

# TK-Star - TK920 Configuration

This page documents the public configuration context for using the TK-Star TK920 with Plaspy. It covers the Plaspy server settings you must apply, the typical setup workflow, and the publicly available SMS commands supplied by the manufacturer to prepare the device to report to Plaspy. Use this page to understand how to point a TK920 at Plaspy and what to validate before monitoring devices in the platform.

Plaspy uses a shared server endpoint and the same port for all supported trackers and automatically detects the tracker protocol so devices can work with minimal protocol selection. Manufacturer-side steps to configure the TK920 can vary by firmware, hardware revision, installation type, and the vendor tools used, so treat the commands here as the publicly documented baseline and confirm device behavior with the official TK-Star documentation when necessary.

## Configuration Overview

This configuration process prepares the TK920 to communicate with Plaspy's ingestion endpoint and ensures the device can send regular position and status updates. The typical flow is to set the device APN, point the device to the Plaspy server, set an upload interval, switch the device into GPRS mode if required, and then confirm the device is visible in your Plaspy account.

- Configure the device network APN so it can open a data connection.
- Set the TK920 GPRS server to the Plaspy endpoint so telemetry is routed to Plaspy.
- Define a reporting interval to control how often the device uploads location updates.
- Switch the device to data (GPRS) mode and save the settings so the tracker uses cellular data.
- Validate communication in Plaspy to confirm location, movement, and alarm events are received.
- Use the manufacturer's SMS or configuration tool where provided to send these settings to the device.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported on port 8888
- Plaspy notes: All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint information to use when configuring the TK920 to report to the Plaspy platform.

## Typical Requirements Before Setup

- A charged TK920 with access to its SMS configuration interface or the official TK-Star configuration tool.
- An active cellular SIM with data enabled and the correct APN information from the mobile operator.
- The device default password (used in SMS commands) or access to the device password if it was changed.
- Access to a Plaspy account capable of adding and viewing devices to validate reporting.
- Basic ability to send SMS commands from a management phone or use the manufacturer tool described in the device manual.

## How This Tracker Connects to Plaspy

When configured, the TK920 sends location and device status to the Plaspy server endpoint and port so Plaspy can ingest telemetry for real time monitoring, alerts, and historical route storage. Plaspy receives position updates and event reports, presents them in dashboards, and triggers notifications based on the device events.

- The tracker reports GNSS and status data to the Plaspy server endpoint at d.plaspy.com (54.85.159.138) on port 8888.
- Device telemetry and alarms are delivered to Plaspy where they appear in the platform for monitoring and reporting.
- Regular upload intervals control how frequently the TK920 sends position updates to Plaspy.
- Alarm events such as movement, vibration, or geofence triggers are forwarded to Plaspy for instant notification.
- Plaspy automatically detects the tracker protocol so the device can communicate over UDP or TCP without manual protocol selection in the platform.

## Common Configuration Workflow

1. Access the official TK-Star configuration method or software per the TK920 manual (SMS commands or vendor tool).
2. Set the device APN to match your mobile operator using the device SMS command or configuration tool.
3. Enter the Plaspy server information by specifying d.plaspy.com or the Plaspy IP 54.85.159.138 and set port 8888.
4. Choose UDP or TCP on the device if the device requires explicit transport selection.
5. Set the desired upload interval and apply or save the configuration.
6. Restart the device if the device or tool requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy and that location updates and events appear in your Plaspy account.

## Example Configuration Commands

The TK920 publicly supports SMS-based configuration. Below are the manufacturer's SMS commands in the order presented for basic setup. The device password used in each command is the default password 123456. If you changed the device password, replace 123456 with the current password.

- Optional initial factory reset (optional initial setup)
```text
begin123456
```

- Set operator APN (replace {{apn}} with your operator APN)
```text
apn123456 {{apn}}
```

- Set APN username if required by the operator (replace {{apnu}} with APN username)
```text
apnuser123456 {{apnu}}
```

- Set APN password if required by the operator (replace {{apnp}} with APN password)
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to Plaspy by IP and port (this example uses the public Plaspy IP and port)
```text
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds
```text
upload123456 60
```

- Switch the device to GPRS (data) mode
```text
gprs123456
```

Notes on placeholders:
- {{apn}} — your mobile operator APN string (required for data).
- {{apnu}} — optional APN username if your operator requires it.
- {{apnp}} — optional APN password if your operator requires it.
- Replace 123456 with your device password if it was changed from the factory default.

If your installation or a later firmware supports domain-based server settings, you can point the device at d.plaspy.com in place of the IP when the device accepts a domain name. The example commands above are the manufacturer-published SMS commands and should be sent in the given order when following the vendor guidelines.

## Configuration Notes

- Firmware differences can change the exact SMS syntax or available commands; always verify with your device firmware release notes.
- Some operators require APN username and password; include apnuser and apnpasswd commands only when necessary.
- Choose UDP or TCP based on installer preference or device behavior; Plaspy supports both and will detect the protocol automatically on its side.
- SMS-based setup is commonly supported; confirm you are sending commands to the correct device number and that SMS control is enabled.
- After applying settings, give the device a short time to register on the network and begin reporting; check Plaspy for initial position and status messages.

## Why Use Plaspy with This Configuration

Using the TK-Star TK920 with Plaspy provides a straightforward path to reliable remote tracking, durable battery life management, and consolidated event reporting. Configuring the device to point at Plaspy ensures location updates, movement alarms, and other status signals are visible in a centralized platform for operations, security, or fleet monitoring teams.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware behavior, and manufacturer details, verify current information on the TK-Star website https://www.tk-star.com/ as manufacturer specifications and setup methods can change over time.
