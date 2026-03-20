---
slug: /cantrack/gt02/configuration
id: gt02-configuration
sidebar_label: Configuration
title: CanTrack - GT02 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure CanTrack GT02 to report to Plaspy with example SMS commands and required server settings
keywords:
  - CanTrack GT02 configuration
  - CanTrack GT02 setup
  - GT02 server configuration
  - GT02 Plaspy setup
  - Plaspy GPS tracker configuration
  - vehicle tracking configuration
  - fleet tracking GT02
  - GT02 SMS configuration
  - GPRS tracker setup
  - CanTrack GT02 manual
---

# CanTrack - GT02 Configuration

This page documents the public configuration context for using the CanTrack GT02 with the Plaspy tracking platform. It summarizes the practical, public settings and commands commonly used to point a GT02 tracker at Plaspy and to validate connectivity. The GT02 is a vehicle tracker that uses GSM GPRS and GPS and supports sending location data via SMS or real time GPRS to an internet server, and this guide shows how those capabilities are typically directed toward Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The example commands on this page come from public GT02 SMS configuration patterns and include an example default password shown in the device material. Always verify device specific steps with the official manufacturer documentation when needed.

## Configuration Overview

The goal of configuring a CanTrack GT02 for Plaspy is to prepare the device to send its location and status to Plaspy's shared server endpoint and port so the device becomes visible and manageable in the Plaspy platform. Configuration typically includes setting the device password if required, applying the correct APN for mobile data, and pointing the device to the Plaspy server using the provided transport method.

- Configure the device to report location and events to Plaspy server settings
- Set APN and any required GPRS credentials so the tracker can use mobile data
- Choose the transport protocol and set the common Plaspy port used by all devices
- Validate connectivity and confirm the tracker appears in Plaspy after configuration
- Use SMS or the manufacturer tool to perform these public setup steps depending on availability

## Plaspy Server Settings

- Server domain d.plaspy.com should be entered where the tracker asks for a server host name
- Server IP 54.85.159.138 is the Plaspy endpoint that can also be used if an IP is required
- Port 8888 is the Plaspy port used by all devices on the platform
- Transport options support UDP or TCP on port 8888 depending on your tracker preference
- Plaspy automatically detects the tracker protocol after the device begins reporting to the shared endpoint

## Typical Requirements Before Setup

- A powered GT02 tracker with a charged internal battery or connected vehicle power
- A working SIM card with an active mobile data plan and correct APN for the mobile operator
- GSM signal and GPRS availability at the installation location
- Access to the manufacturer's SMS commands or configuration tool for the GT02
- Knowledge of the device password; the public sample uses the default password 123456
- A way to receive confirmation responses via SMS or check device reporting in Plaspy

## How This Tracker Connects to Plaspy

When configured, the GT02 sends location and event telemetry over GPRS to the configured server endpoint and port so Plaspy can ingest and parse the data. Plaspy receives these reports on a shared server endpoint and port and automatically detects the protocol used by the tracker.

- The tracker is configured to report to the shared Plaspy server endpoint and port
- Data is transmitted from the GT02 to Plaspy over GPRS using the selected transport type UDP or TCP
- Plaspy receives telemetry and automatically detects the device protocol for parsing
- Successful reports enable live location, event alerts, and history inside Plaspy
- Verification is performed by reviewing SMS confirmations or by checking the device status in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands if supported by the device
2. Set the device APN and any required GPRS credentials so mobile data can be used
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 depending on the tracker configuration interface
4. Set port 8888 for the server connection
5. Choose UDP or TCP if the device requires selecting a transport protocol
6. Apply or save the configuration on the device and restart the tracker if required
7. Validate that the device reports to Plaspy by checking platform device status or confirming SMS replies from the tracker

## Example Configuration Commands

The GT02 can be configured by sending SMS messages with commands. Below are public example commands provided in manufacturer style. The sample uses the default device password 123456 as shown in public material. Use these commands in the order shown when applying an initial configuration.

- Optional initial factory restore command
```text
#begin#123456#
```
This command restores factory settings and is typically used only when needed during initial provisioning.

- Set the time zone to UTC 0
```text
#timezone#123456#W#0#00#
```

- Set the operator APN
```text
#apn#123456#{{apn}}#{{apnu}}#{{apnp}}#
```
Placeholders:
- {{apn}} is the mobile operator APN name
- {{apnu}} is the APN username if required by the operator
- {{apnp}} is the APN password if required by the operator
If username or password are not required, some firmware accepts empty values or the placeholders may be omitted depending on device syntax.

- Set the GPRS server to Plaspy
```text
#IP#123456#54.85.159.138#8888#
```
This sets the device to report to the Plaspy server IP on port 8888. You can substitute d.plaspy.com where the tracker accepts a host name instead of an IP.

- Check or verify settings using the device verification command shown in public material
```text
TCP
```
Some GT02 variants respond with current network or connection settings when queried by a short verification SMS such as the sample above. The exact verification keyword and response format can vary by firmware.

## Configuration Notes

- Firmware and hardware revisions can change SMS syntax and available commands; always confirm exact command formats with the manufacturer documentation
- The GT02 supports SMS based configuration in public examples but some installations use manufacturer software or configuration tools instead
- When given the choice, UDP or TCP may be selected based on network behavior and preference; Plaspy accepts both transports on the same port
- Plaspy uses the same port 8888 for all devices and automatically detects the device protocol when data arrives
- Keep the device password secure and change it from the default if required by your security policy

## Why Use Plaspy with This Configuration

Configuring a CanTrack GT02 to report to Plaspy provides straightforward visibility into vehicle location and status using a widely supported server endpoint and a single common port. For fleet managers and administrators, using Plaspy with a consistent server setting simplifies rollout and monitoring across many GT02 devices and device types.

Learn more about Plaspy and how it handles device connections and fleet visibility at https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation instructions for the CanTrack GT02 verify details on the manufacturer website https://www.cantrackgps.com/ as methods and firmware behavior can change over time.
