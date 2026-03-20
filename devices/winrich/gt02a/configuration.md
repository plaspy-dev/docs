---
slug: /winrich/gt02a/configuration
id: gt02a-configuration
sidebar_label: Configuration
title: Winrich - GT02A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Winrich GT02A tracker with Plaspy server settings and example SMS commands
keywords:
  - Winrich GT02A configuration
  - GT02A setup
  - Winrich GPS tracker configuration
  - GT02A Plaspy setup
  - Plaspy tracker configuration
  - Winrich tracker SMS commands
  - GT02A server configuration
  - vehicle tracking GT02A
  - GT02A GPRS configuration
  - Winrich GPS platform setup
---

# Winrich - GT02A Configuration

This page covers the public configuration context for using the Winrich GT02A tracker with the Plaspy platform. It explains the shared Plaspy server settings that GT02A devices can be pointed to, and includes practical, publicly available SMS commands used by installers and technicians to prepare a GT02A for operation with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands and workflow here as practical public guidance derived from the GT02A documentation and manufacturer SMS configuration examples.

## Configuration Overview

The configuration process prepares the GT02A to communicate reliably with Plaspy, verifies connectivity, and enables live tracking and alerts in the platform. Typical configuration sets the APN, points the device at Plaspy server settings, defines reporting intervals, and confirms device status.

- Set operator APN and optional credentials so the device can open a GPRS connection.
- Point the GT02A to Plaspy using the published server domain or IP and the shared port used by Plaspy.
- Choose transport (UDP or TCP) if required by the device and apply the settings.
- Validate the device is reporting to Plaspy and adjust reporting interval for your monitoring needs.
- Use the SMS verification commands to check settings and device status after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered GT02A unit with access to the device SMS configuration method used by the installer.  
- An active SIM card with a data plan and the correct APN for the mobile operator.  
- Access to the installer or technician documentation for GT02A SMS commands or the manufacturer configuration tool.  
- A stable power source during configuration to avoid interruptions while writing settings.  
- Basic knowledge of the preferred transport type UDP or TCP if the device requires you to choose one.  
- Access to a phone capable of sending the SMS commands to the device or the vendor tool that wraps those commands.

## How This Tracker Connects to Plaspy

When configured, the GT02A opens a GPRS connection to the Plaspy endpoint and sends location and status updates so Plaspy can display live positions, historical routes, and event alerts. SMS remains available as a fallback channel for key events and remote configuration in environments where GPRS is unavailable or intermittent.

- The device is configured to report to the shared Plaspy server endpoint and port.  
- Position and status uploads use GPRS (TCP) as the primary data channel to Plaspy.  
- SMS can be used to send configuration commands and critical alerts to a monitoring number.  
- Plaspy detects the incoming protocol automatically and associates the device feed with the platform account.  
- Reports from the device enable map visibility, event notifications, and operational monitoring in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or documentation for the GT02A, typically via SMS commands or the vendor configuration tool.  
2. Configure the operator APN using the GT02A SMS command with your operator APN values.  
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server setting.  
4. Set the port to 8888 for server communications.  
5. Choose UDP or TCP if the device requires a transport selection for GPRS connections.  
6. Apply or save the configuration and restart the device if required by the device firmware.  
7. Validate that the device reports to Plaspy by checking device status with the verification SMS commands and confirming visibility in the platform.

## Example Configuration Commands

The GT02A can be configured by sending SMS commands to the device. The following commands are public examples derived from the GT02A setup documentation. Preserve placeholders and replace them with your operator details when sending.

- Factory reset (optional initial step)
```text
940#
```
- Set the time zone to UTC 0
```text
801#W0#
```
- Set the operator APN (APN only)
```text
802#{{apn}}#
```
- Set the operator APN with username and password if required
```text
802#{{apn}}#{{apnu}}#{{apnp}}#
```
  - {{apn}} is the operator APN string required for mobile data.  
  - {{apnu}} is the APN username if your operator requires one.  
  - {{apnp}} is the APN password if your operator requires one.

- Set the GPRS server to Plaspy using the public IP and port
```text
803#54.85.159.138#8888#
```
  - The device may also accept the domain d.plaspy.com in place of the IP depending on firmware and manufacturer guidance.

- Set the location update interval to 60 seconds
```text
730#60#
```

- Verify current device settings
```text
886#
```

- Check device status
```text
902#
```

Send each SMS to the device phone number from your configuration phone. Keep commands in the same order when following a recommended setup flow and allow a short interval after applying server and APN settings for the device to establish a GPRS session.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; always consult the GT02A documentation for your specific unit.  
- The GT02A supports SMS based configuration as shown above; SMS is useful for remote installs or when data is not yet available.  
- Choose TCP or UDP according to installer preference and network conditions; Plaspy accepts devices using either transport on the shared port.  
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when the device connects.  
- Confirm APN credentials with the mobile operator before sending APN commands to avoid connection failures.

## Why Use Plaspy with This Configuration

Using the Winrich GT02A with Plaspy enables straightforward real time tracking and event monitoring for small fleets and vehicle deployments. The GT02A's ability to report via GPRS (TCP) and to accept SMS commands makes it a flexible option for installations that need reliable positioning, simple remote configuration, and an SMS fallback path.

Learn more about Plaspy and how it ingests device feeds at https://www.plaspy.com. Manufacturer specifications, firmware behavior, and device configuration methods can change over time so verify the latest GT02A setup details on the Winrich website http://www.winrichgroup.com/en/ before large scale deployments.
