---
slug: /coban/bn_108a/configuration
id: bn_108a-configuration
sidebar_label: Configuration
title: Coban - BN-108A Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Coban BN-108A for use with Plaspy including server settings and example SMS commands
keywords:
  - Coban BN-108A configuration
  - Coban BN-108A setup
  - BN-108A Plaspy
  - BN-108A server configuration
  - Coban GPS tracker configuration
  - Plaspy GPS tracker setup
  - vehicle tracking Coban
  - BN-108A SMS commands
  - fleet management configuration
  - GPS tracker Plaspy integration
---

# Coban - BN-108A Configuration

This page covers the public configuration context for using the Coban BN-108A with Plaspy. It collects Plaspy server settings, a practical workflow, and the publicly available SMS commands used by many BN-108A units to point the device to Plaspy for real time tracking and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on the server side. Manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor tools, so use this guide as a practical starting point and verify device specific behavior with Coban documentation when needed.

## Configuration Overview

This configuration process prepares a BN-108A to communicate with Plaspy so the device appears in the platform and reports location and event data reliably. Where supported, the BN-108A accepts SMS configuration commands to set APN, server, transport, and reporting cadence. The commands below reflect commonly published, public SMS command formats.

- Configure the device APN and GPRS settings so it can use mobile data to reach Plaspy
- Point the device to the Plaspy server endpoint and port for TCP or UDP reporting
- Set reporting intervals and modes to control real time updates and power consumption
- Validate connectivity from the device to Plaspy and confirm the device is visible in the platform
- Optionally enable manufacturer protocol options to improve sensor or alarm reporting

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- An active SIM card with mobile data and correct APN parameters for the mobile operator
- Sufficient battery charge or external power to perform configuration and initial reporting
- Access to the official manufacturer configuration method such as SMS commands or a vendor tool
- Knowledge of the device password for SMS configuration the default password in published commands is 123456
- A way to send and receive SMS messages from the device during setup if using SMS based configuration
- Access to the Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888 to enter into the device

## How This Tracker Connects to Plaspy

When configured, the BN-108A sends GNSS positions, alarms, and telemetry to the shared Plaspy server endpoint and port using the device transport selected during setup. Plaspy ingests these messages, automatically detects the tracker protocol, and makes the device visible in dashboards and reporting tools.

- The tracker is set to the Plaspy server domain or IP and port so outgoing TCP or UDP packets reach Plaspy
- Device telemetry and alarms are sent over GSM GPRS to the configured Plaspy endpoint
- Plaspy automatically detects the connected protocol and parses incoming messages
- Status and alarm events reported by the BN-108A appear in Plaspy for alerting and playback
- SMS configuration can be used to set APN, server, transport, and reporting interval before validating data reporting

## Common Configuration Workflow

1. Access the official Coban configuration method for your BN-108A such as SMS commands or Coban vendor tools
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 when the device requires a server address
3. Set port 8888 in the device server settings
4. Choose UDP or TCP as the transport if the device requires a transport selection
5. Configure the operator APN and optionally APN username and password so the device can use mobile data
6. Apply or save the configuration and restart the device if required by the manufacturer instructions
7. Validate the device reports to Plaspy and appears in the platform, and confirm GPS positions and alarms are populating as expected

## Example Configuration Commands

Below are the commonly published SMS commands for the BN-108A in the order they are often applied. The sample commands use the device default password 123456 where required. Keep placeholders such as [apn], [apnu], and [apnp] and replace them with your SIM operator values.

1. Optional initial factory reset command to restore defaults
```text
begin123456
```
2. Set the time zone to UTC 0
```text
time zone123456 0
```
3. Set the operator APN
```text
apn123456 [apn]
```
- [apn] is the mobile data APN string provided by your SIM operator

4. Set the APN username and password if required by the operator
```text
up123456 [apnu] [apnp]
```
- [apnu] and [apnp] are placeholders for APN username and APN password respectively; many operators do not require these values

5. Set the GPRS server to Plaspy by IP and port
```text
adminip123456 54.85.159.138 8888
```
- This example uses the Plaspy server IP and port. You can alternatively use the server domain d.plaspy.com if the device supports hostnames.

6. Set a position update interval example
```text
fix060s060s***n123456
```
- This command is a published BN-108A format for reporting cadence. Keep the exact format required by your device firmware.

7. Switch to GPRS mode and select UDP or TCP
```text
gprs123456,1,1
```
or, depending on firmware
```text
gprs123456
```
- Use the variant your device firmware expects. The first form explicitly selects GPRS and transport parameters.

8. Check current settings
```text
check123456
```

9. Enable enhanced protocol reporting for digital sensors or fuel status where supported
```text
protocol123456 18
```
- This command is used in published BN-108A command sets to change protocol reporting format for additional sensor information

Note on passwords
- The example commands use the default password 123456 as shown in public documentation. Replace or change the device password following manufacturer instructions where appropriate.

## Configuration Notes

- SMS based configuration is commonly supported by the BN-108A and is reflected in the example commands above; some installers use vendor software instead depending on available tools
- Firmware revisions can change command formats or supported parameters; always verify the command syntax against the device manual for your firmware version
- Choose UDP or TCP based on your operational needs and any vendor guidance; Plaspy supports both and will detect the protocol automatically
- Plaspy uses the same port 8888 for all devices so point BN-108A to port 8888 when configuring the server address
- Be careful with placeholders such as [apn], [apnu], and [apnp] and replace them exactly as provided by your mobile operator

## Why Use Plaspy with This Configuration

Using the BN-108A with Plaspy provides a practical path to continuous position updates, alarm routing, and historical tracking for fleet and asset management. The BN-108A's long battery life, magnetic mounting, Bluetooth induction features, and support for TCP UDP and SMS make it a versatile option for deployments that need reliable telemetry and anti-theft alerts integrated into a single platform.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the most current device specific setup methods, firmware details, and manufacturer guidance verify the latest information at the Coban website https://www.coban.net/ since manufacturer specifications and command formats can change over time.
