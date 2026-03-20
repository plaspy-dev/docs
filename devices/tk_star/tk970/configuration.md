---
slug: /tk_star/tk970/configuration
id: tk970-configuration
sidebar_label: Configuration
title: TK-Star - TK970 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK-Star TK970 GPS tracker and Plaspy server settings for reliable fleet tracking and integration
keywords:
  - TK-Star TK970 configuration
  - TK970 GPS tracker setup
  - TK970 server configuration
  - TK970 Plaspy setup
  - TK-Star tracker Plaspy
  - GPS tracker configuration guide
  - vehicle GPS tracker setup
  - TK970 SMS configuration
  - fleet tracking configuration
  - GPS telematics setup
---

# TK-Star - TK970 Configuration

This page describes the public configuration context for using the TK-Star TK970 with the Plaspy platform. It focuses on the practical server settings, the typical setup workflow and the public SMS commands provided by the manufacturer that are commonly used to point the device to Plaspy for real time tracking, alerts and history reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type and vendor tools. The TK970 supports SMS based configuration and GPRS reporting; the example commands below show a common SMS workflow including APN setup, setting the GPRS server to Plaspy and enabling upload interval and GPRS mode.

## Configuration Overview

This configuration process prepares the TK970 to communicate location and event data to the Plaspy platform so the device becomes visible and reportable in your fleet dashboard.

- Configure the device APN and cellular parameters so it can attach to the mobile data network.
- Point the tracker to the Plaspy server endpoint and port so telemetry is delivered to the platform.
- Set an upload interval to control how often position and event updates are sent to Plaspy.
- Switch the tracker to GPRS data mode and verify it is online and reporting to Plaspy.
- Validate connectivity from the Plaspy interface and check that the device appears in your account.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP depending on device requirements
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Ensure the TK970 has a working SIM card with an active data plan and SMS capability if using SMS commands.
- Power the device correctly and confirm it has sufficient battery or external supply for configuration and testing.
- Obtain the mobile operator APN, and optional APN username and password if required by the SIM.
- Have access to the manufacturer configuration method for the TK970 such as SMS commands or an official configuration tool.
- A Plaspy account or access to your Plaspy server environment to verify the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

The TK970 sends positioning and event data over the cellular network to the Plaspy server endpoint and port. Plaspy receives the inbound connections, automatically recognizes the tracker protocol and ingests location and event telemetry for live tracking, alerts and historical reporting.

- The tracker is configured to report to the shared Plaspy server endpoint and port 54.85.159.138 8888 (or d.plaspy.com on devices that accept domain names).
- Transport can be configured as UDP or TCP on port 8888 depending on device options and network requirements.
- Plaspy automatically detects the tracker protocol so the device will be parsed correctly once it reaches the server.
- Once connected, the device provides visibility in Plaspy for live mapping, event alerts and route history.
- Regular upload intervals determine how frequently position and telemetry packets are sent to Plaspy.

## Common Configuration Workflow

1. Access the official TK-Star configuration method such as SMS commands or the manufacturer software and confirm the device password if required.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 and choose UDP or TCP if the tracker requires an explicit transport selection.
4. Configure the device APN settings including APN name and optional username and password so the tracker can open a GPRS session.
5. Apply or save the configuration and switch the device to GPRS/data reporting mode if required by the hardware.
6. Restart the device if the manufacturer recommends a reboot to apply new server and network settings.
7. Validate that the device reports to Plaspy by checking your Plaspy account for an online status, incoming position updates, or test events.

## Example Configuration Commands

The TK970 supports SMS based configuration. The following public SMS commands are a commonly used sequence. The device default password in these examples is 123456. Replace placeholders where needed.

1. Optional initial factory reset or to restore defaults
```text
begin123456
```
Label: optional initial setup or recovery reset. Use only when you intend to restore factory defaults.

2. Set the operator APN
```text
apn123456 [apn]
```
- [apn] placeholder should be replaced with your mobile operator APN string.

3. (Optional) Set the APN username
```text
apnuser123456 [apnu]
```
- [apnu] is the APN username placeholder used when the mobile operator requires authentication.

4. (Optional) Set the APN password
```text
apnpasswd123456 [apnp]
```
- [apnp] is the APN password placeholder used when the mobile operator requires authentication.

5. Set the GPRS server to Plaspy using the public server IP and port
```text
adminip123456 54.85.159.138 8888
```
- This command points the device to Plaspy. If your device firmware accepts a domain name for the server instead of an IP you may enter d.plaspy.com where supported; consult the TK-Star documentation for exact syntax.

6. Set the upload interval to 60 seconds
```text
upload123456 60
```
- Adjust the numeric interval if you require a different reporting frequency. The example sets 60 second updates.

7. Switch the device to GPRS mode to enable data reporting
```text
gprs123456
```

Notes on placeholders and password
- The default device password shown in these commands is 123456; use the device password configured for your unit.
- Keep placeholders such as [apn], [apnu] and [apnp] as-is and replace them with your operator credentials during actual configuration.

## Configuration Notes

- SMS configuration is supported and is commonly used in field installations for the TK970; manufacturer tools may also provide USB or over the air options.
- Firmware versions and hardware revisions can change command syntax or available features; verify the exact command set for your firmware before mass deployment.
- Choose UDP or TCP based on your network and operator behavior; Plaspy listens on port 8888 and will accept either transport while automatically detecting the protocol.
- All devices in Plaspy use the same port 8888 which simplifies server settings across different models.
- If you prefer using a domain name rather than the IP address, confirm the TK970 firmware accepts domain names in server settings before substituting d.plaspy.com for the IP.

## Why Use Plaspy with This Configuration

Using the TK-Star TK970 with Plaspy provides a practical path to real time visibility, event alerting and historical route reporting for fleets, rental vehicles and individual assets. The public configuration flow shown here focuses on APN setup, pointing the tracker to Plaspy and enabling data reporting so organizations can receive position and event telemetry reliably in the Plaspy dashboards and mobile interfaces.

To learn more about Plaspy and how it can centralize monitoring for devices like the TK970 visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes and manufacturer instructions verify details on the official TK-Star site https://www.tk-star.com/ as product behavior and setup methods can change with firmware and hardware revisions.
