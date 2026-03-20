---
slug: /megastek/mt65/configuration
id: mt65-configuration
sidebar_label: Configuration
title: Megastek - MT65 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Megastek MT65 showing Plaspy server settings and SMS commands for GPRS and TCP UDP integration
keywords:
  - Megastek MT65 configuration
  - Megastek MT65 setup
  - MT65 server configuration
  - MT65 Plaspy setup
  - Plaspy GPS tracker configuration
  - ankle tracker configuration
  - MT65 SMS commands
  - GPRS tracker setup
  - GPS platform integration
  - wearable tracker configuration
---

# Megastek - MT65 Configuration

This page covers the public configuration context for using the Megastek MT65 ankle tracker with the Plaspy platform. It focuses on the practical server values, SMS command examples provided by the manufacturer, and the general workflow required to point an MT65 device at Plaspy for live monitoring and historical playback.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. The MT65 supports SMS and GPRS reporting and the manufacturer provides SMS templates that are commonly used to set device ID, APN, server address, reporting interval, and GPRS mode.

## Configuration Overview

Configuring the MT65 for Plaspy prepares the ankle tracker to report location, alarms, and telemetry to the Plaspy endpoint so supervisors and case managers can view live position, receive alerts, and review historical tracks. The configuration process typically uses either SMS commands or the official Megastek configuration tool depending on installer preference and device firmware.

- Point the device to the Plaspy server domain or IP and use the shared port used by Plaspy.
- Configure the cellular APN so the tracker can establish a GPRS data session.
- Set a reporting interval appropriate for the supervision policy, for example 60 seconds for frequent updates.
- Enable GPRS reporting mode so telemetry is sent to Plaspy over TCP or UDP.
- Validate connectivity by confirming the device appears in Plaspy and is sending regular position updates.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so you only need to point the tracker at the server endpoint and use port 8888.

## Typical Requirements Before Setup

- A charged MT65 device with a working SIM card that has data and SMS enabled.
- Access to the device IMEI so you can set the device ID or register it in Plaspy.
- Knowledge of the mobile network APN values for the SIM operator.
- Ability to send SMS commands to the tracker or access to the official Megastek configuration tool.
- Access to Plaspy account or onboarding instructions to confirm the device is visible after configuration.

## How This Tracker Connects to Plaspy

When configured, the MT65 sends location fixes, alarm states and device telemetry to the Plaspy shared server endpoint and port. Plaspy receives the data and automatically detects the tracker protocol, allowing real time monitoring and event driven notifications.

- The tracker initiates a GPRS data session and posts telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- The device can use either TCP or UDP transport depending on configuration; Plaspy accepts both.
- Alarms such as SOS, tamper, and low battery are transmitted to Plaspy for immediate alerting.
- Plaspy logs historical tracks and supports live playback and case management workflows.
- SMS remains an alternative channel for certain commands and alarms depending on MT65 firmware and setup.

## Common Configuration Workflow

1. Access the official Megastek configuration method or software, or prepare to send SMS configuration commands as supported by the MT65.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the port to 8888 which is the shared port Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires a transport selection during configuration.
5. Configure APN and other carrier parameters so the device can obtain GPRS connectivity.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy and appears with live position updates and telemetry.

## Example Configuration Commands

The manufacturer provides SMS templates for basic configuration. The example below uses the sample device password 000000 which is the default in the manufacturer documentation. Replace placeholders with real values before sending any SMS.

1. Set the device ID using the device IMEI. Use the last 15 digits of the IMEI when required by the firmware. Example SMS body:

```text
M000000,22,{{imei}}
```

2. Set the operator APN. Keep {{apnu}} and {{apnp}} only if your APN requires a username or password. Example:

```text
M000000,23,{{apn}}
```

With optional username and password included:

```text
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

3. Set the update interval to 60 seconds:

```text
M000000,25,60
```

4. Set the GPRS server to Plaspy using the server IP and port provided by Plaspy. The example SMS uses the manufacturer command format that includes an internal code before the server values:

```text
M000000,24,56 54.85.159.138,8888
```

If your installer tool accepts a domain instead of IP you can use the Plaspy domain when supported:

```text
M000000,24,56 d.plaspy.com,8888
```

5. Enable GPRS reporting mode (example sets mode 2 for GPRS):

```text
M000000,21,2
```

Notes on placeholders
- {{imei}} Replace with the device IMEI or the last 15 digits depending on the device requirement.
- {{apn}} Replace with the carrier APN string.
- {{apnu}} Optional APN username when required by the carrier.
- {{apnp}} Optional APN password when required by the carrier.

Always confirm the correct SMS formatting for your firmware version before sending commands. Some firmware variants require slight formatting differences or additional parameters.

## Configuration Notes

- Firmware differences can change the exact SMS syntax or the available command set. Verify command syntax against the device firmware revision.
- The MT65 supports both SMS based configuration and software based provisioning. Choose the method that matches your deployment and access level.
- Use TCP or UDP depending on your network and latency requirements. Plaspy accepts both and will auto detect the protocol used by the tracker.
- Plaspy uses the same port 8888 for all supported devices which simplifies server configuration when deploying multiple tracker models.
- If the device supports both domain and IP server entries, either d.plaspy.com or 54.85.159.138 can be used; confirm with your installer which approach is preferred.

## Why Use Plaspy with This Configuration

Using the MT65 with Plaspy provides a straightforward path to centralized supervision for organizations that need persistent wearable monitoring. By pointing the device at Plaspy and using the shared port and automatic protocol detection, teams gain live visibility, alarm handling, and historical tracking without complex per-device server changes.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup information on the manufacturer site https://www.megastek.com/ before deployment.
