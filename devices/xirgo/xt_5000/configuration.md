---
slug: /xirgo/xt_5000/configuration
id: xt_5000-configuration
sidebar_label: Configuration
title: Xirgo - XT-5000 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide to configure the Xirgo XT-5000 for use with Plaspy including server settings SMS commands and workflow
keywords:
  - Xirgo XT-5000 configuration
  - XT-5000 Plaspy setup
  - Xirgo tracker setup
  - XT-5000 server configuration
  - XT-5000 GPS platform setup
  - Xirgo device configuration guide
  - GPS tracker configuration Plaspy
  - XT-5000 SMS configuration
  - asset tracking XT-5000
  - vehicle tracking Xirgo
---

# Xirgo - XT-5000 Configuration

This page documents the public configuration context for using the Xirgo XT-5000 tracker with Plaspy. It focuses on the practical settings and workflow needed to make the XT-5000 communicate with the Plaspy platform. The XT-5000 description in this guide is based on the device's public specification: a rugged low power tracker with integrated cellular capability, motion sensing options, and extended battery life suitable for long deployments.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol to simplify integration. Exact manufacturer side steps can vary by firmware, hardware revision, installer tools, and deployment type. The XT-5000 supports configuration by SMS as shown in the public manufacturer commands below, and you should verify any device specific instructions with Xirgo documentation when needed.

## Configuration Overview

Configuring the XT-5000 for Plaspy prepares the device to connect to Plaspy's central endpoint and report location and status so assets become visible in the platform. The public configuration commonly involves setting the device APN for cellular data, pointing the device to Plaspy's server, and confirming transport settings.

- Set the operator APN so the device can establish a GPRS data session.
- Configure the GPRS server address and port to point the tracker at Plaspy.
- Choose the transport protocol if the device requires a UDP or TCP selection.
- Validate connectivity so the tracker can report periodic location and health information.
- Confirm the device appears in Plaspy and that automatic protocol detection has paired the tracker correctly.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the XT-5000. These are the public values required for the device to communicate with Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol so the platform will accept the device protocol once the tracker points to the shared server and port

## Typical Requirements Before Setup

- Ensure the XT-5000 has power and battery level suitable for configuration and testing.
- A valid cellular SIM provisioned for data with the correct APN details for the operator.
- Access to the official Xirgo configuration method such as SMS commands or manufacturer tool as required.
- Device IMEI or serial number available for registration and troubleshooting.
- A basic test environment where the tracker can get GPS fixes and cellular registration during verification.
- Knowledge of whether the device firmware accepts domain names or requires an IP address for the server field.

## How This Tracker Connects to Plaspy

The XT-5000 is configured to send its location and status data to Plaspy's shared server endpoint and port. Once the APN and server settings are applied, the device will attempt to open a GPRS session and transmit reports that Plaspy ingests and associates with the device through automatic protocol detection.

- The tracker initiates a data session using the configured APN and cellular network.
- It sends GPRS packets to d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Plaspy detects the device protocol automatically and parses incoming messages.
- Periodic reporting provides location, status, and health updates to the Plaspy platform.
- Successful configuration allows operational monitoring and visibility in Plaspy.

## Common Configuration Workflow

1. Access the official Xirgo configuration method or software for the XT-5000 (for example SMS commands or vendor tool).
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the device port to 8888 to match Plaspy's shared port.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Configure the operator APN so the tracker can use cellular data.
6. Apply or save the configuration and restart the device if the device requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking device activity and that Plaspy has detected the tracker protocol automatically.

## Example Configuration Commands

The XT-5000 can be configured using SMS commands. The following public commands are provided in manufacturer documentation and should be sent as SMS messages to the device. Preserve the order shown by the manufacturer when required.

- Set the operator APN (replace placeholders with your operator values)
```text
+XT:1002,[apnu],[apnp],[apn]
```
Explanation of placeholders:
- [apnu] — APN username if required by the operator (leave empty if not used)
- [apnp] — APN password if required by the operator (leave empty if not used)
- [apn]  — APN name for the mobile operator

- Set the GPRS server to point to Plaspy (public command includes port and IP)
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notes:
- The command above sets the server to Plaspy using port 8888 and the IP 54.85.159.138. If the device accepts a domain name, you can alternatively enter d.plaspy.com in the manufacturer tool or server field where supported.
- The trailing numeric parameters are part of the device command format maintained by the manufacturer. Keep them as shown unless the Xirgo documentation indicates otherwise.

## Configuration Notes

- Firmware and hardware revisions can affect available commands and the exact SMS or tool syntax. Always check the Xirgo release notes for your firmware version.
- Some installations prefer entering d.plaspy.com; others require the numeric server IP. Use whichever the device accepts.
- Choose UDP or TCP according to installer guidance; Plaspy supports both transports but the device may perform differently on each based on firmware.
- SMS based configuration is supported as shown, but vendor configuration tools or serial connections may also be available depending on the XT-5000 model and installer workflow.
- Confirm APN credentials with the cellular operator before sending configuration commands.

## Why Use Plaspy with This Configuration

Using the XT-5000 with Plaspy provides a straightforward path to long term visibility and operational monitoring for remote assets. The XT-5000's low power design and rugged construction make it a good fit for deployments where battery life and durability matter, while Plaspy's server endpoint and automatic protocol detection simplify backend integration.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods and manufacturer instructions can change over time, so verify the latest setup details and firmware behavior at the Xirgo website https://xirgo.com/.
