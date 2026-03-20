---
slug: /concox/ll705/configuration
id: ll705-configuration
sidebar_label: Configuration
title: Concox - LL705 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox LL705 showing Plaspy server settings SMS commands and practical setup steps for integration
keywords:
  - Concox LL705 configuration
  - Concox LL705 setup for Plaspy
  - LL705 server configuration
  - LL705 GPS tracker configuration
  - Concox asset tracker setup
  - Plaspy device configuration
  - GPS tracker SMS commands
  - LL705 APN configuration
  - LL705 GPRS settings
  - Concox LL705 integration
---

# Concox - LL705 Configuration

This page covers the public configuration context for using the Concox LL705 tracker with Plaspy. It consolidates the Plaspy server settings and the commonly used SMS commands and steps that are published for configuring the LL705 to report to Plaspy. Use this guide to prepare the device for communication with the Plaspy platform and to understand the practical workflow for bringing an LL705 online.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The LL705 can be configured using manufacturer-provided SMS commands or configuration tools; the examples below reflect publicly available commands and Plaspy-specific values for server, IP, and port.

## Configuration Overview

The configuration process prepares the LL705 to send position and status messages to Plaspy so the device becomes visible and manageable within the platform. Typical configuration focuses on network connectivity, correct server endpoint, update scheduling, and enabling GPRS so the tracker can transmit data.

- Configure the device to use Plaspy as its GPRS server so telemetry is directed to the Plaspy ingestion endpoint.
- Set the device APN and GPRS mode so the LL705 can register on the mobile data network.
- Set reporting intervals (for example a periodic timer) so the device transmits at the desired frequency.
- Validate connectivity and confirm the device is visible in Plaspy after applying settings.
- Use verification commands to check the device GPRS and server parameters if available.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy uses the same port for all supported devices and will accept connections by domain name or IP address. Configure the tracker to use either the domain d.plaspy.com or the IP 54.85.159.138 and port 8888; choose UDP or TCP as required by your device or installer preference.

## Typical Requirements Before Setup

- A powered and reachable LL705 device with access to the SIM slot and any installation interfaces.
- A valid SIM card with a data plan and the correct APN for the mobile operator.
- Ability to send SMS commands to the device or access to the manufacturer configuration tool recommended by Concox.
- Basic device information such as IMEI to identify the tracker in Plaspy after it connects.
- Knowledge of whether your deployment requires UDP or TCP transport selection.
- Access to the official Concox documentation or vendor support for firmware specific specifics.

## How This Tracker Connects to Plaspy

When configured, the LL705 sends location and device messages to the Plaspy ingestion endpoint so the device becomes visible in Plaspy dashboards and workflows. The tracker will be set to report to the shared Plaspy server endpoint and port, and Plaspy will automatically determine the protocol.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Data is transmitted using either UDP or TCP depending on the device transport selection.
- Plaspy automatically detects the tracker protocol so no separate protocol registration is required on the platform side.
- Regular position updates (timer-based) and event reports are routed to the Plaspy endpoint for processing.
- Once connected, the device appears in Plaspy and can participate in geofencing, alerts, and reporting workflows.

## Common Configuration Workflow

1. Access the official Concox configuration method for the LL705 such as SMS commands or Concox-provided software and documentation.
2. Set the device APN for your mobile operator using the APN command so the tracker can use mobile data.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address in the device settings.
4. Set the server port to 8888 and choose UDP or TCP transport if the device requires an explicit choice.
5. Apply or save the configuration on the device and enable GPRS mode if required.
6. Restart the device if the manufacturer instructions recommend it to ensure new settings take effect.
7. Validate that the device reports to Plaspy by checking device visibility in Plaspy and using any available verification commands such as GPRSSET.

## Example Configuration Commands

To set the tracker send the following SMS commands (preserve order where shown). These commands are present in public Concox guidance for the LL705; adapt placeholders to your operator and deployment.

- Optional initial factory reset (use only when required during initial provisioning)
```
FACTORY#
```

- Set the time zone to UTC+0
```
GMT,E,0#
```

- Set the operator APN
```
APN,{{apn}}#
```
If your APN requires a username or password keep the placeholders:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Note: {{apn}} is your operator APN string. {{apnu}} and {{apnp}} are optional APN username and password fields.

- Set the GPRS server by domain (recommended)
```
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server by IP
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds (two common variants)
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode
```
GPRSON,1#
```

- Verify current GPRS and server parameters
```
GPRSSET#
```

These commands are sent to the device via SMS according to Concox public guidance. Keep placeholders such as {{apn}} unchanged in the command until you replace them with the operator APN values appropriate for your SIM.

## Configuration Notes

- Firmware differences and hardware revisions can change command support or exact syntax; always confirm commands against the device firmware level or official Concox documentation.
- The LL705 supports SMS-based configuration as shown in the example commands; some deployments may use vendor tools or device management platforms instead.
- Choose UDP or TCP transport based on installer preference and network conditions; Plaspy accepts both on port 8888 and detects the protocol automatically.
- The SERVER command can use either d.plaspy.com or the direct IP 54.85.159.138; both target the same Plaspy ingestion endpoint on port 8888.
- Verify APN, SIM provisioning, and GPRS mode (GPRSON) before expecting successful data uploads to Plaspy.

## Why Use Plaspy with This Configuration

Using the Concox LL705 with Plaspy gives organizations a long-life, rugged asset tracker combined with a platform that centralizes device telemetry, alerts, and historical reporting. Configuring the LL705 to report to Plaspy provides near real-time visibility of locations and device events, supports alerting workflows such as tamper and low-battery notifications, and simplifies large-scale device management when many assets are deployed.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device-specific commands, firmware notes, and manufacturer details verify configuration methods on the Concox website https://www.iconcox.com/. Manufacturer specifications and setup methods can change over time so confirm current details with Concox before large scale provisioning.
