---
slug: /concox/tr02/configuration
id: tr02-configuration
sidebar_label: Configuration
title: Concox - TR02 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Concox TR02 to report to Plaspy using public SMS and GPRS server settings for platform visibility
keywords:
  - Concox TR02 configuration
  - Concox TR02 setup
  - Concox TR02 Plaspy
  - TR02 server configuration
  - TR02 SMS commands
  - GPS tracker configuration
  - vehicle tracking setup
  - TR02 APN settings
  - GPRS tracker setup
  - Concox tracker guide
---

# Concox - TR02 Configuration

This page documents the public configuration context for using the Concox TR02 tracker with Plaspy. It explains the shared Plaspy server settings and the practical steps needed to point a TR02 device at the platform so it can report location and status. The guidance here is oriented toward common SMS and GPRS setup methods that are publicly available.

Plaspy uses a shared server endpoint and the same port for all supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor tools, so use this page as a practical reference while confirming device-specific details with the official Concox documentation.

## Configuration Overview

The goal of this configuration process is to prepare the TR02 to communicate with Plaspy so the device appears and reports reliably in the platform. For TR02 devices the public setup commonly uses SMS commands to set APN and GPRS server information, then enables GPRS reporting to the Plaspy endpoint.

- Configure the TR02 APN and GPRS parameters so it can connect to mobile data.
- Point the tracker to the Plaspy server endpoint (domain or IP) and the shared port used by Plaspy.
- Enable periodic reporting or update interval so the device sends location updates to Plaspy.
- Validate connectivity and check that the device reports properly in the platform.
- Use available SMS commands or manufacturer tools to apply changes and confirm settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device sends data

These values are the public Plaspy settings to use when configuring the TR02 to report to the platform.

## Typical Requirements Before Setup

- A powered TR02 device properly installed and accessible for configuration.
- An active SIM card installed with a data plan and correct APN information for the mobile operator.
- Ability to send and receive SMS to the device if using SMS commands for setup.
- Access to Concox manufacturer documentation or installer instructions to confirm command formats and firmware specifics.
- A note of the device IMEI or identifier so you can match the device in Plaspy once it reports.
- A basic test plan to validate reporting after configuration is applied.

## How This Tracker Connects to Plaspy

The TR02 is configured to send GPRS data to the Plaspy endpoint so Plaspy can ingest location and device messages and show the unit in the platform. The device uses the configured APN and server settings to open a connection and transmit updates over the selected transport.

- The tracker is pointed at the shared Plaspy server endpoint and port for all devices.
- The device sends periodic position updates according to its TIMER or reporting interval.
- Plaspy automatically detects the incoming tracker protocol and interprets messages.
- Event and status messages sent by the device are received by Plaspy for visibility and alerts.
- Successful connection and reporting make the TR02 visible in the platform for tracking and group management.

## Common Configuration Workflow

1. Access the official Concox configuration method for your TR02 unit, typically SMS commands or the manufacturer's configuration tool.
2. Enter the Plaspy server by using either the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 as Plaspy uses the same port across devices.
4. Choose UDP or TCP if the TR02 requires selecting a transport when setting the server.
5. Configure the device APN and any required APN username or password placeholders.
6. Apply or save the configuration on the device and restart the tracker if required by the firmware.
7. Validate that the TR02 reports to Plaspy and appears in the platform with expected updates.

## Example Configuration Commands

The TR02 supports SMS-based configuration. The commands below are public SMS commands commonly used to prepare a TR02 for reporting to Plaspy. Preserve placeholders and send each command as a separate SMS to the device phone number. Commands are shown in the typical order for initial setup.

1. Optional factory reset (use only if you need to restore defaults):
```
FACTORY#
```

2. Set the time zone to UTC 0:
```
GMT,E,0#
```

3. Set the operator APN. Replace {{apn}} with your operator APN. If your operator requires an APN username or password, include {{apnu}} and {{apnp}}:
```
APN,{{apn}}#
```
Or with username and password:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Placeholders: {{apn}} = APN string, {{apnu}} = APN username, {{apnp}} = APN password.)

4. Set the GPRS server to the Plaspy domain or IP (either option works). These commands set server and port for reporting:
```
SERVER,1,d.plaspy.com,8888,0#
```
Or using the Plaspy server IP:
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update/reporting interval to every 60 seconds. Two common TIMER formats are shown:
```
TIMER,60#
```
Or:
```
TIMER,60,60#
```

6. Enable GPRS mode:
```
GPRSON,1#
```

7. Check current GPRS parameters to verify settings:
```
GPRSSET#
```

Send these SMS commands in the order shown for a typical initial setup. If you use the factory reset command, label it as optional and only use it when necessary.

## Configuration Notes

- Concox firmware versions and vendor tools can change command availability or syntax; always confirm the exact SMS command format with the device firmware documentation.
- The TR02 supports SMS-based configuration as shown above; alternative manufacturer tools may also be available for mass configuration.
- You can point the device to d.plaspy.com or to the numeric server IP; both are accepted in the public commands above.
- For transport selection, pick UDP or TCP if the device firmware asks; Plaspy accepts both and will detect the protocol automatically.
- Keep APN placeholders ({{apn}}, {{apnu}}, {{apnp}}) intact when preparing messages; replace them with your operator credentials.

## Why Use Plaspy with This Configuration

Using Plaspy with a Concox TR02 provides a straightforward path to fleet visibility and simple vehicle tracking. With the public SMS commands above you can configure APN, reporting interval, and the shared Plaspy server settings so the device reports reliably into a single platform that automatically detects the tracker protocol.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the most current device-specific setup details, firmware notes, and official command references, verify the latest information on the Concox website https://www.iconcox.com/.
