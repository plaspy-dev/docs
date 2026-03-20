---
slug: /istartek/pt66/configuration
id: pt66-configuration
sidebar_label: Configuration
title: iStartek - PT66 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for iStartek PT66 with Plaspy server settings and SMS commands for quick configuration
keywords:
  - iStartek PT66 configuration
  - iStartek PT66 setup
  - PT66 server configuration
  - PT66 Plaspy setup
  - PT66 GPS tracker configuration
  - iStartek wearable tracker setup
  - PT66 SMS configuration
  - Plaspy tracker integration
  - personal safety tracker configuration
  - elder care GPS tracker setup
---

# iStartek - PT66 Configuration

This page documents the public configuration context for using the iStartek PT66 wearable tracker with Plaspy. It focuses on the practical server settings and the example SMS commands publicly provided by the manufacturer to register the device with Plaspy and enable reliable reporting to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The PT66 supports SMS and cellular configuration methods; this guide includes the public SMS commands available from the device documentation and shows how to point the device to Plaspy for tracking and alerts.

## Configuration Overview

This configuration process prepares the PT66 to communicate reliably with the Plaspy tracking platform and validates connectivity so the device appears in Plaspy dashboards and alerting workflows.

- Configure the PT66 to send location and telemetry to the Plaspy server endpoint.
- Provide the device with the correct mobile operator APN so GPRS data can be used for reporting.
- Select the transport (UDP or TCP) and set the Plaspy port so the server receives messages.
- Verify reporting using the PT66 verification command and confirm visibility in Plaspy.
- Optional: reset to factory defaults before initial configuration when preparing multiple devices.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the PT66. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged PT66 device with an active SIM card enabled for data or GPRS reporting where required.
- Access to the manufacturer configuration method such as SMS commands, companion app, or vendor tool.
- Operator APN and, if required, APN username and password for the SIM card.
- A mobile phone capable of sending SMS commands to the device or access to the vendor configuration portal.
- Basic account access to Plaspy to confirm the device appears after configuration.

## How This Tracker Connects to Plaspy

The PT66 transmits location and telemetry over cellular networks to the shared Plaspy server endpoint and port so location, safety alerts, and health data can be aggregated into Plaspy dashboards.

- The device is configured to report to the Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 at port 8888).
- Plaspy receives periodic position updates and event messages and automatically detects the tracker protocol.
- Safety events such as SOS or fall-down alarms are forwarded to Plaspy for alerting and notification rules.
- Health and telemetry data from the PT66 can be aggregated alongside other devices in the Plaspy platform.
- Choosing UDP or TCP affects transport behavior; Plaspy accepts both on the shared port.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands to the PT66.
2. Enter the Plaspy server endpoint by setting either the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the destination port to 8888 (all Plaspy devices use the same port).
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Set the operator APN and any APN credentials required for GPRS/data connectivity.
6. Apply or save the configuration and restart the device if required by the manufacturer procedure.
7. Validate that the device reports to Plaspy and that the device is visible in your Plaspy account or dashboard.

## Example Configuration Commands

The PT66 public documentation provides SMS-based commands for configuration. Use a phone authorized to send SMS to the device and adjust placeholders as required.

Note: The reset command is optional and typically used when preparing a device for first use or troubleshooting.

1. Optional factory reset (use only when needed)
```text
FACTORY#
```

2. Set the time zone to UTC+0
```text
GMT,E,0#
```

3. Set the operator APN
```text
APN,[apn]#
```
If your APN requires a username and password include the placeholders:
```text
APN,[apn],[apnu],[apnp]#
```
- [apn] = your operator APN name
- [apnu] = APN username if required (leave blank if not used)
- [apnp] = APN password if required (leave blank if not used)

4. Point the device to the Plaspy GPRS server
```text
SERVER,1,d.plaspy.com,8888#
```
Or alternatively set the server by IP:
```text
SERVER,0,54.85.159.138,8888#
```
- Use the domain form to allow DNS resolution; use the IP form when a direct IP is preferred.

5. Set the location update interval to 60 seconds
```text
TIMER,60#
```

6. Verify current parameters on the device
```text
PARAM#
```

Send each command as a separate SMS according to the device SMS format. Preserve the order when the manufacturer notes ordering matters, and wait for the device confirmation SMS when available.

## Configuration Notes

- SMS-based configuration is supported by the PT66 per the public commands; vendor tools or a companion app may provide alternate methods.
- Plaspy accepts both UDP and TCP on the shared port 8888; choose the transport the device or network handles best.
- Different firmware versions or hardware revisions may change the exact SMS syntax or available commands; always verify with the latest manufacturer notes.
- Use the domain d.plaspy.com when possible so DNS can handle any future server IP changes; the IP form is available as a direct alternative.
- After applying changes, restart the device if required and confirm reporting with the PARAM# verification command and in your Plaspy dashboard.

## Why Use Plaspy with This Configuration

Configuring the PT66 to report to Plaspy gives caregivers and organizations a consolidated view of location, safety events, and health telemetry from wearables alongside other tracked assets. Plaspy’s automatic protocol detection and shared port approach simplify onboarding multiple compatible devices, reducing per-device configuration complexity and centralizing alerting and reporting.

To learn more about Plaspy and how it can work with the PT66, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and official commands, verify details on the manufacturer site https://istartek.com/. Manufacturer specifications and setup procedures can change over time, so checking the official documentation is recommended before large deployments.
