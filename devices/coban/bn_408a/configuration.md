---
slug: /coban/bn_408a/configuration
id: bn_408a-configuration
sidebar_label: Configuration
title: Coban - BN-408A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN-408A showing practical steps to connect the tracker to Plaspy servers
keywords:
  - Coban BN-408A configuration
  - BN-408A setup
  - Coban GPS tracker Plaspy
  - Plaspy tracker configuration
  - BN-408A SMS setup
  - BN-408A APN settings
  - Coban tracker server settings
  - BN-408A TCP UDP setup
  - Coban tracker integration
  - BN-408A GPRS setup
---

# Coban - BN-408A Configuration

This page documents the public configuration context for using the Coban BN-408A tracker with Plaspy. It collects the practical, publicly available setup information you need to point the device at Plaspy servers, verify connectivity, and enable basic reporting. Use this guide together with the device manuals and vendor documentation for the exact manufacturer-side steps.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and the vendor tools you use; however the public SMS and GPRS commands below show the common fields you will configure to integrate a BN-408A with Plaspy.

## Configuration Overview

The goal of configuration is to prepare the BN-408A to reliably communicate with Plaspy so the device appears in your Plaspy account and sends location, alarm, and telemetry updates. Common actions are setting the device APN and GPRS server target, choosing the transport, and confirming the device reports successfully.

- Prepare APN and GPRS server settings so the tracker can establish a data session with Plaspy.
- Configure transport mode (TCP or UDP) and ensure the server endpoint and port match Plaspy values.
- Use SMS or manufacturer configuration methods to set the device password and server parameters in the field.
- Verify connectivity and reporting so the BN-408A is visible in Plaspy dashboards and alerting workflows.
- Apply any device-specific telemetry or protocol options (for example protocol mode) to improve alarm or sensor reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port, and the platform will attempt to identify the appropriate protocol for the tracker automatically.

## Typical Requirements Before Setup

- A charged BN-408A with power enabled and accessible for SMS or physical setup.
- A working SIM card with a data plan and the correct APN credentials for the mobile operator.
- Access to the vendor provided configuration method such as SMS setup commands or vendor software.
- Knowledge of the device default password for configuration (the public default password shown below is 123456).
- Ability to receive and send SMS messages from the handset or service used for configuration.
- Basic familiarity with choosing TCP or UDP transport depending on your connectivity and firewall rules.

## How This Tracker Connects to Plaspy

The BN-408A is configured to report GPS and device status to the shared Plaspy server endpoint. Plaspy ingests the incoming TCP or UDP packets (or SMS reports) and maps them to the appropriate device record in the platform.

- The tracker opens a GPRS data session using the configured APN and then connects to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to TCP or UDP; the device may also send fallback reports via SMS if configured.
- Plaspy automatically detects the tracker protocol so the platform can decode messages without per-device port changes.
- Device events such as tamper alarm, movement, and battery status are sent to Plaspy for real-time monitoring.
- Successful configuration and reporting allow the BN-408A to appear in Plaspy dashboards for live tracking and playback.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS setup commands according to the BN-408A instructions.
2. Enter the Plaspy server domain or IP in the device settings as d.plaspy.com or 54.85.159.138.
3. Set the port to 8888 in the device server or GPRS settings.
4. Choose UDP or TCP as the transport if the device requires explicit transport selection.
5. Apply or save the configuration and, if necessary, send any SMS-based commands to commit the settings.
6. Restart the device if required by the manufacturer procedure.
7. Validate that the device reports to Plaspy by checking device visibility and recent telemetry in the platform.

If you use SMS-based configuration, send the commands in the order recommended by the manufacturer to ensure APN and server values are accepted before enabling data reporting.

## Example Configuration Commands

The BN-408A supports SMS-based setup commands. The device default password shown in public documentation is 123456. Send the following commands by SMS to the device number using that password. Preserve and replace placeholders like {{apn}}, {{apnu}}, and {{apnp}} with your operator credentials.

- Optional initial factory reset (only if you require a full reset):
```sms
begin123456
```

- Set the time zone to UTC+0:
```sms
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your mobile APN):
```sms
apn123456 {{apn}}
```

- Set the APN username and password (replace {{apnu}} and {{apnp}} with operator values; these may be empty for some carriers):
```sms
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to Plaspy using the public Plaspy server IP and port:
```sms
adminip123456 54.85.159.138 8888
```

- Set an example update interval (sample pattern from public commands; modify as required by device manual):
```sms
fix060s060s***n123456
```

- Switch GPRS mode to use UDP or to enable GPRS mode (two public variants shown):
```sms
gprs123456,1,1
```
or
```sms
gprs123456
```

- Check current settings:
```sms
check123456
```

- Enable protocol mode for enhanced sensor reporting (public example uses protocol id 18):
```sms
protocol123456 18
```

Notes about placeholders:
- {{apn}} is your mobile operator APN string.
- {{apnu}} is the APN username if required by the operator.
- {{apnp}} is the APN password if required by the operator.

Keep the SMS command order consistent with manufacturer guidance. The reset command is optional and should only be used when you intend to restore factory defaults.

## Configuration Notes

- Firmware and hardware revisions can change exact command syntax or available features; always cross-check commands with the device manual.
- The BN-408A supports SMS-based configuration in the field, which is useful when remote data configuration is not available.
- Choose UDP or TCP based on your network environment and any firewall or NAT behavior; both transports are supported and Plaspy accepts either on port 8888.
- Always confirm APN values with the mobile operator before setting them in the device.
- Change the device password from the default after setup if the manufacturer workflow supports it to improve security.

## Why Use Plaspy with This Configuration

Using the BN-408A with Plaspy provides straightforward asset visibility for organizations that need long-term, low-maintenance tracking and anti-theft monitoring. Configuring the tracker to point at the shared Plaspy server endpoint lets you ingest location, alarm, and telemetry data into Plaspy dashboards for live tracking, alerts, and historical playback.

Learn more about Plaspy on the main website https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer details on the official Coban website https://www.coban.net/ as vendor documentation and command syntax can change over time.
