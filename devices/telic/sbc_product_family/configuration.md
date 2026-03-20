---
slug: /telic/sbc_product_family/configuration
id: sbc_product_family-configuration
sidebar_label: Configuration
title: Telic - SBC product family Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Telic SBC product family showing Plaspy server settings SMS commands and verification steps
keywords:
  - Telic SBC product family configuration
  - Telic SBC setup
  - Plaspy tracker configuration
  - Telic GPS tracker setup
  - fleet telematics configuration
  - SBC product family Plaspy
  - GPS platform setup
  - vehicle tracking configuration
  - SBC SMS setup
  - telematics server configuration
---

# Telic - SBC product family Configuration

This page documents the public configuration context for using the Telic SBC product family with Plaspy. It summarizes the shared Plaspy server settings you must apply to SBC devices and provides the publicly available SMS-based commands supplied with the device configuration guidance. Use this information to prepare the tracker for connection to Plaspy and to validate basic connectivity before completing device onboarding in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary with firmware version, hardware revision, installation type, and vendor configuration tools. The SBC product family ships with LTE Cat M1 connectivity and multiple wired interfaces, and the commands below show a common SMS-based setup flow that many installers use to point devices to Plaspy for real-time tracking and telemetry ingestion.

## Configuration Overview

This configuration process prepares an SBC device to send location and telemetry to Plaspy by setting the device APN, server endpoint, transport, and GPRS mode as needed. The goal is to establish a reliable cellular data link and ensure the device reports correctly to the shared Plaspy endpoint so it becomes visible in your Plaspy account and dashboards.

- Configure the device APN and optional APN credentials so the unit can use cellular data
- Point the device to the Plaspy server endpoint using the provided IP or domain and the shared port
- Select the transport protocol (UDP or TCP) if the device requires a transport choice
- Switch the device to GPRS or data mode so it actively sends telemetry to Plaspy
- Verify the device reports successfully using the device verification command or platform logs

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint information to use when configuring SBC devices. Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically on incoming connections.

## Typical Requirements Before Setup

- A powered and physically installed SBC unit with cellular connectivity available
- An activated SIM card with a data plan and APN information for the operator
- Access to the manufacturer configuration method the device supports (SMS or vendor tool)
- A phone or SMS gateway capable of sending configuration SMS messages if using SMS setup
- Basic knowledge of the device password used in SMS commands (the example commands below use the default password shown in the public configuration)
- Ability to monitor device reporting in Plaspy once configuration is applied

## How This Tracker Connects to Plaspy

SBC devices are configured to send location and telemetry over the cellular data network to the shared Plaspy server endpoint and port. Once the device is pointed to the Plaspy server and placed in data mode, Plaspy ingests the incoming stream and maps telemetry to dashboards, alerts, and rules for fleet visibility and monitoring.

- The device uses the configured APN to obtain a data connection and then opens a session to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on your selection during configuration
- Plaspy automatically detects the tracker protocol on the connection to parse incoming messages
- Telemetry from CAN, 1-Wire, or RS232 interfaces is relayed through the device and mapped in Plaspy for analytics and alerts
- Once reporting, the device provides live position updates and event notifications to your Plaspy account

## Common Configuration Workflow

1. Access the official Telic configuration method for your SBC device, for example the SMS command interface or the vendor's configuration software.
2. Set the operator APN and optional APN username and password so the device can use cellular data.
3. Enter the Plaspy server endpoint using d.plaspy.com or the server IP 54.85.159.138.
4. Set the port to 8888.
5. Choose UDP or TCP if your device requires an explicit transport selection.
6. Apply or save the configuration and switch the device to GPRS or data mode.
7. Restart the device if required by the manufacturer or to ensure settings take effect.
8. Validate reporting by using the device verification command or by confirming the device appears and reports in Plaspy.

## Example Configuration Commands

The SBC product family supports SMS-based configuration. The following public commands are the documented sample SMS messages. The example uses the device default password 123456. If your device has a different password change the password in each command accordingly.

- Optional initial factory reset (use only if you require a reset)
```sms
begin123456
```

- Set the time zone to UTC 0
```sms
time zone123456 0
```

- Set the operator APN
```sms
apn123456 {{apn}}
```
Explanation: replace {{apn}} with the cellular operator APN string.

- Set APN username and password (only if your operator requires them)
```sms
up123456 {{apnu}} {{apnp}}
```
Explanation: replace {{apnu}} with the APN username and {{apnp}} with the APN password. If your operator does not require credentials, skip this command.

- Set the GPRS server to Plaspy using the public IP and the shared port
```sms
adminip123456 54.85.159.138 8888
```
Alternative: you may also use the domain d.plaspy.com with your device method if it accepts domain names.

- Switch the device to GPRS mode
```sms
gprs123456,1,1
```
Alternative shorter command if supported:
```sms
gprs123456
```

- Check current settings (verification)
```sms
check123456
```

Preserve the order of operations when required by your installation. The reset command is optional and should only be used when a factory reset is needed. Keep the default password note in mind and change it if your security policy requires it.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; always confirm commands against the specific device documentation for your model and firmware.
- The SBC family supports SMS-based configuration as shown here; some vendors also provide desktop or cloud-based tools for bulk provisioning.
- Choose UDP or TCP based on your network and installer preference. Plaspy accepts both transports and will detect the protocol automatically.
- Plaspy uses the same port for all devices so the port setting is consistent across deployments.
- Use the verification command and Plaspy platform logs to confirm successful device registration and ongoing reporting.

## Why Use Plaspy with This Configuration

Using the Telic SBC product family with Plaspy gives organizations a dependable path to centralized fleet visibility and telemetry-driven workflows. The SBC units provide the hardware interfaces and cellular uplink needed to capture vehicle signals and sensor data, while Plaspy ingests that stream for live tracking, alerts, and historical reporting.

To learn more about Plaspy and how it handles device ingestion, dashboards, and alerts visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and detailed SBC model datasheets check the manufacturer documentation at https://www.telic.de. These sources will help you verify current setup methods and any updates to device behavior.
