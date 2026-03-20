---
slug: /coban/tk103b/configuration
id: tk103b-configuration
sidebar_label: Configuration
title: Coban - TK103B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban TK103B to connect with Plaspy using GPRS and SMS commands
keywords:
  - Coban TK103B configuration
  - Coban TK103B setup
  - TK103B Plaspy setup
  - TK103B server configuration
  - Coban GPS tracker configuration
  - fleet tracking setup
  - vehicle tracker Plaspy
  - GPRS tracker configuration
  - SMS tracker commands
  - GPS tracker server settings
---

# Coban - TK103B Configuration

This page documents the public configuration context for using the Coban TK103B tracker with Plaspy. It collects the practical, public-facing steps and server settings needed to point a TK103B device to the Plaspy backend so that location and status reports arrive at the platform. It uses the device description and the publicly available SMS configuration commands that many TK103B units accept.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat these instructions as the general public setup pattern for integration with Plaspy and confirm device-specific details with the manufacturer when needed.

## Configuration Overview

The goal of this configuration is to prepare the TK103B so it reliably communicates with Plaspy over GPRS or SMS. Using the public SMS commands shown below, you can set the device APN, assign the Plaspy server endpoint, select the transport mode, and verify the tracker reports correctly.

- Configure the TK103B to use the correct mobile data APN and credentials for the installed SIM.
- Point the device to the Plaspy server endpoint so reports are delivered to the platform.
- Choose UDP or TCP transport and set the device to use the shared Plaspy port.
- Validate connectivity and confirm the device appears in Plaspy after saving settings.
- Optionally tune reporting interval and enable additional reporting features such as digital sensor or fuel reporting.

## Plaspy Server Settings

Use the following Plaspy settings when configuring the TK103B:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will detect the incoming tracker protocol automatically.

## Typical Requirements Before Setup

- A powered TK103B device with an active SIM card capable of GPRS data and SMS.
- Access to the SIM operator APN, username, and password (if required).
- Knowledge of the device SMS command method or access to the manufacturer configuration tool.
- The tracker default password when using SMS commands (the common public default is 123456 as shown below).
- A safe test environment where you can reboot the tracker and verify it reports to Plaspy.

## How This Tracker Connects to Plaspy

When configured for GPRS, the TK103B will send UDP or TCP packets to the Plaspy server endpoint and port. Plaspy receives these packets, automatically identifies the tracker protocol, and associates the device with the customer account for visibility and monitoring.

- The tracker sends periodic location and status reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured to UDP or TCP depending on the device setting and operator network.
- Plaspy detects the tracker protocol automatically so the device can use its native message format.
- After reporting, the device becomes visible in Plaspy and generates position and event records for monitoring.
- Additional status messages such as digital inputs or fuel sensor events can be enabled via protocol or sensor commands.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the vendor tool for the TK103B.
2. Enter d.plaspy.com or 54.85.159.138 as the GPRS server destination in the device settings.
3. Set port 8888 for server communication.
4. Choose UDP or TCP transport if the device requires you to select a transport mode.
5. Apply or save the configuration on the device using the manufacturer method (for SMS this means sending the commands).
6. Restart or power-cycle the device if required by the manufacturer to apply GPRS changes.
7. Validate that the device reports to Plaspy and appears in the platform; check connectivity and reporting interval.

## Example Configuration Commands

The TK103B accepts public SMS commands for many configuration items. The commands below are from the public model configuration and show the standard order used for initial setup. The device password used in these examples is the public default 123456. Preserve placeholders when you replace them with your operator values.

1. Factory reset (optional initial step)
```sms
begin123456
```

2. Set the time zone to UTC 0
```sms
time zone123456 0
```

3. Set the operator APN
```sms
apn123456 [apn]
```
- [apn] is a placeholder for your mobile operator APN string.

4. Set the APN username and password
```sms
up123456 [apnu] [apnp]
```
- [apnu] is the APN username placeholder and [apnp] is the APN password placeholder. If your operator does not require credentials, these can often be left empty.

5. Set the GPRS server to the Plaspy IP and port
```sms
adminip123456 54.85.159.138 8888
```
- You can also use d.plaspy.com in place of the IP if the device accepts a domain.

6. Set the update interval (example format from public commands)
```sms
fix060s060s***n123456
```
- This command format sets periodic fix/report timing; retain the original syntax when sending.

7. Switch GPRS mode to select UDP or TCP
```sms
gprs123456,1,1
```
or
```sms
gprs123456
```
- The first form is a common way to select transport; consult your device firmware notes for the exact parameter meaning.

Verification and optional sensor commands:

- Check current settings
```sms
check123456
```

- Enable fuel sensor status or improve digital sensor reporting (public example)
```sms
protocol123456 18
```

Note: Keep the default device password 123456 unless you have changed it. If your device uses a different password, replace 123456 with the correct password in every command.

## Configuration Notes

- Firmware and hardware revisions may change exact SMS command syntax and available parameters; confirm against the device manual or vendor documentation.
- The TK103B supports configuration by SMS as shown in the public commands; installer tools or PC software may provide alternate configuration methods.
- TCP versus UDP behavior can affect packet delivery and firewall traversal; choose the transport that works best with your network and operator.
- Plaspy accepts connections by domain or IP on port 8888 and automatically detects the tracker protocol, so point the device to d.plaspy.com or 54.85.159.138 and use port 8888.
- If you change the device password from the default, update your saved command templates and verification steps accordingly.

## Why Use Plaspy with This Configuration

Using the TK103B with Plaspy provides a practical way to collect vehicle location, status, and event data in a single platform for monitoring, routing, and operational oversight. The public SMS commands let you prepare the tracker to report securely to the Plaspy server so telemetry appears in the platform for tracking and analysis.

To learn more about Plaspy and how this integration works, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes, and manufacturer details for the Coban TK103B, verify current information at the official manufacturer site https://www.coban.net/.
