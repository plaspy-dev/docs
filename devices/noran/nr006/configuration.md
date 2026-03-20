---
slug: /noran/nr006/configuration
id: nr006-configuration
sidebar_label: Configuration
title: Noran - NR006 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Noran NR006 tracker and Plaspy compatibility with practical setup steps
keywords:
  - Noran NR006 configuration
  - Noran NR006 setup
  - Noran NR006 Plaspy
  - NR006 GPS tracker configuration
  - NR006 server configuration
  - Noran tracker setup
  - Plaspy tracker configuration
  - NR006 GPS platform setup
  - Noran NR006 SMS setup
  - NR006 GPRS setup
---

# Noran - NR006 Configuration

This page explains the public configuration context for using the Noran NR006 Mini GPS Tracker with Plaspy. It collects the practical server settings, example commands, and the typical workflow you can use to prepare the NR006 for reporting location and event data to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands and steps here as practical, public guidance and cross check with the official Noran documentation when needed.

## Configuration Overview

This configuration process prepares the NR006 to send its position packets and alarms to Plaspy so the device becomes visible in your Plaspy account. The public setup commonly uses SMS commands or the manufacturer configuration tool to set the operator APN, the GPRS server endpoint, and the data transport mode.

- Configure the device APN so it can establish GPRS data connections.
- Point the tracker to the Plaspy server endpoint so position packets arrive in Plaspy.
- Select the correct transport option where the device requires UDP or TCP.
- Enable GPRS reporting mode so the tracker sends packets over the Internet rather than only by SMS.
- Verify device identity and current settings to confirm the tracker is reporting to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com should be used when the device accepts a domain name for the server endpoint.
- Server IP 54.85.159.138 can be used where the device requires a numeric address.
- Port 8888 is the Plaspy ingestion port and is used for all devices in Plaspy.
- Transport support for UDP or TCP depending on what the device requires or supports.
- Plaspy automatically detects the tracker protocol when data arrives so you can use the shared port and server endpoint.

## Typical Requirements Before Setup

- A powered NR006 with an active SIM card that supports GPRS data and SMS as required.
- APN credentials for the mobile operator for data connectivity.
- Access to the manufacturer configuration method for NR006 such as SMS setup commands or vendor tools.
- Knowledge of the device password if it has been changed from the factory default.
- A means to receive or monitor device responses (SMS reply or monitoring within Plaspy) to confirm settings.
- Physical access or installer support if a restart or reinstallation is required after configuration.

## How This Tracker Connects to Plaspy

The NR006 transmits concise position packets and alarm events to Plaspy so the platform can provide live location, historical playback, and alerts. When properly configured, the tracker will report over GPRS to the shared Plaspy server endpoint and port.

- The tracker is configured with the Plaspy server domain or IP so outbound packets target Plaspy.
- Position and event packets are sent over GPRS to the Plaspy IP 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device settings and operator requirements.
- Plaspy automatically detects the protocol and ingests incoming tracker packets for real time display and alerts.
- Device visibility in Plaspy is validated by observing incoming packets or status responses after configuration.

## Common Configuration Workflow

1. Access the official Noran NR006 configuration method such as SMS commands or the vendor software per the manufacturer documentation.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 depending on what the device accepts.
3. Set the server port to 8888, which is the common Plaspy port used by all supported devices.
4. Choose UDP or TCP transport in the device settings if the tracker requires an explicit transport selection.
5. Configure the device APN and any APN credentials required by your mobile operator.
6. Apply or save the configuration and restart the device if required by the firmware or installation practice.
7. Validate that the device reports to Plaspy by checking for incoming packets, using the device status command, or observing the tracker in your Plaspy account.

## Example Configuration Commands

The NR006 can be configured by SMS commands. The following public commands are example SMS messages shown in the manufacturer public content. These examples use the device factory password 000000 in the command string. If your device password has been changed, replace the password portion accordingly.

- Set the operator APN
  - Replace [apn] with your operator APN. If your operator requires APN username or password include [apnu] and [apnp] as shown.
```text
A000000,012,[apn]
```
- Set the operator APN including username and password where applicable
```text
A000000,012,[apn],[apnu],[apnp]
```
- Set the GPRS server to Plaspy using the Plaspy server IP and Plaspy port
```text
A000000,010,54.85.159.138,8888
```
- Switch the device to GPRS reporting mode
```text
A000000,011,1
```
- Check current device settings and status
```text
A000000,004
```

Notes on these commands
- The example command prefix A000000 uses the factory default password 000000. Replace the six zeros with your device password if it differs.
- The verification command A000000,004 returns a status string that includes the device Id as the first word starting with NR and also reports APN, server, port, GPRS mode and signal values.
- Keep the order when applying these commands: set APN first, then set the server, then enable GPRS mode, then verify.

## Configuration Notes

- SMS based configuration is commonly used for NR006 but manufacturer tools or firmware updates may offer alternate methods.
- Firmware versions and hardware revisions can change command syntax or available options; verify commands against current Noran documentation.
- When a device requires TCP or UDP selection, choose the transport supported by your operator and network conditions; Plaspy will accept either transport on port 8888.
- The Plaspy server and port are shared across devices so use port 8888 in every device configuration for Plaspy ingestion.
- Always confirm the device password and device Id after configuration so Plaspy can correctly identify the unit.

## Why Use Plaspy with This Configuration

Using the NR006 with Plaspy provides low bandwidth, discreet tracking for motorcycles and small vehicles while delivering the core telemetry and alerting organizations need for visibility and operational oversight. The NR006’s compact form factor and concise packet design make it well suited to deployments that prioritize minimal data usage and continuous tracking.

Learn more about how this setup works on the Plaspy website https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify instructions on the manufacturer site http://www.norantracker.com/ as specifications and setup steps can change over time.
