---
slug: /topfly/knightx_300/configuration
id: knightx_300-configuration
sidebar_label: Configuration
title: TopFly - KnightX 300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly KnightX 300 showing how to connect the tracker with Plaspy using shared server settings
keywords:
  - TopFly KnightX 300 configuration
  - TopFly KnightX 300 setup
  - KnightX 300 Plaspy setup
  - KnightX 300 server configuration
  - TopFly tracker configuration
  - Plaspy device setup
  - GPS tracker configuration
  - asset tracker setup
  - cold chain tracker configuration
  - vehicle tracking configuration
---

# TopFly - KnightX 300 Configuration

This page documents the public configuration context for using the TopFly KnightX 300 with Plaspy. It summarizes the practical steps and public settings required to point the device at Plaspy so that location, telemetry and sensor data are delivered into your Plaspy instance. Where possible, this guide references manufacturer-visible commands and shows how to apply Plaspy server information.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once data arrives. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The example SMS commands below are provided from public device configuration guidance and show a common SMS-based setup flow when SMS configuration is supported.

## Configuration Overview

The configuration process prepares the KnightX 300 to send periodic location and sensor data to Plaspy. It focuses on setting network parameters, reporting intervals, and the Plaspy endpoint so the device can establish outbound connections and forward buffered logs when connectivity is available.

- Configure the device network settings and APN so the tracker can access the mobile data network.
- Set the Plaspy server endpoint and the shared Plaspy port so the tracker forwards telemetry to the correct destination.
- Define reporting intervals and buffering behavior to balance update frequency and battery life.
- Validate connectivity and confirm the device is visible in Plaspy after applying settings.
- Use SMS or the official TopFly configuration tool when available to apply the commands shown in this guide.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note: All devices in Plaspy use the same port 8888. The KnightX 300 may be configured to use either UDP or TCP on port 8888 so that Plaspy can ingest data and automatically detect the protocol used.

## Typical Requirements Before Setup

- Tracker powered and charged, or connected to a temporary power source for initial configuration.
- Access to the TopFly configuration method for the KnightX 300 such as SMS commands or the manufacturer tool.
- A working SIM card with data and the operator APN details available (APN, APN username, APN password).
- The sample device password from public configuration guidance when required to send commands (default shown below).
- A Plaspy account or provisioning workflow to register and monitor the device once it begins reporting.
- Basic knowledge of whether the device is expected to use UDP or TCP for outbound transport.

## How This Tracker Connects to Plaspy

The KnightX 300 is configured to report location, telemetry, and sensor events to the shared Plaspy server endpoint and port. Once the device is pointed at Plaspy and reporting is enabled, Plaspy will ingest the device traffic and automatically detect the protocol to present data in dashboards and alerts.

- The tracker sends periodic location updates and buffered logs to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP depending on device configuration; Plaspy will detect and interpret the incoming protocol.
- Telemetry and BLE sensor events are forwarded along with location so Plaspy can surface environmental data and alerts.
- When configured by SMS or the manufacturer tool, the device uses the provided APN and server settings to establish mobile connectivity and begin reporting to Plaspy.
- Plaspy receives the data stream and maps it to your account so you can validate device health and tracking status.

## Common Configuration Workflow

1. Access the official TopFly configuration method or software for the KnightX 300 (for example SMS commands or the vendor tool).
2. Enter the Plaspy server domain d.plaspy.com or the IP 54.85.159.138 in the device server setting as supported.
3. Set the port to 8888 (all devices in Plaspy use the same port).
4. Choose UDP or TCP if the device requires transport selection.
5. Configure the operator APN and any APN credentials so the device can use mobile data.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate that the device reports to Plaspy and appears in your platform dashboard, confirming telemetry and location updates.

## Example Configuration Commands

The KnightX 300 public configuration guidance includes SMS commands. The sample setup below uses the default configuration password 0000 as provided in the public instructions. Preserve placeholders when replacing with your operator values.

- Set the device time zone to UTC 0
```text
GMT,0000,0#
```

- Set the operator APN and optional credentials
```text
APN,0000,[apn],[apnu],[apnp]#
```
Explanation: [apn] is the operator APN string, [apnu] is the APN username (if required), and [apnp] is the APN password (if required). If your APN does not require username or password, leave [apnu] and [apnp] empty according to the device SMS syntax.

- Set the Plaspy GPRS server using the public IP and port shown in this guide
```text
IP,0000,54.85.159.138 8888#
```
Note: This command sets the Plaspy server IP and the port 8888 that Plaspy uses for all supported devices.

- Set a reporting interval example to 60 seconds
```text
TIMER,0000,60:60:0:0#
```

These commands are shown in the public manufacturer guidance and must be sent using the device configuration channel that the manufacturer documents, for example SMS messages from an allowed phone number. The sample password 0000 is the factory sample used in the public example.

## Configuration Notes

- SMS based configuration is shown in the public guide; you can also use TopFly vendor tools if available for bulk or remote provisioning.
- Firmware versions and hardware revisions can change command syntax or available fields; verify the exact command format for your device firmware before mass deployment.
- Choose UDP or TCP according to your connectivity and firewall preferences; Plaspy will detect the protocol used when the device begins reporting.
- If the device accepts a domain instead of an IP in some firmware versions, you can use d.plaspy.com; the example commands use the IP as shown in the public configuration sample.
- Keep track of the device password used for configuration and update it if required by your security policy following the manufacturer procedure.

## Why Use Plaspy with This Configuration

Using the KnightX 300 with Plaspy lets teams ingest frequent location updates, buffered logs, and environmental telemetry into a single fleet management workflow. The public configuration shown here focuses on getting the device networked and pointing to the Plaspy server so that data flows reliably into dashboards, alerts, and historical logs for operational visibility.

Learn more about Plaspy and how it can integrate device streams at https://www.plaspy.com. For device specific command syntax, firmware notes, and the latest manufacturer instructions, verify details at the official TopFly site https://www.topflytech.com/ as product behavior and setup methods can change over time.
