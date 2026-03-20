---
slug: /suntech/st_240/configuration
id: st_240-configuration
sidebar_label: Configuration
title: Suntech - ST 240 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST 240 GPS tracker showing how to point the device to Plaspy server settings and SMS commands
keywords:
  - Suntech ST 240
  - Suntech ST240 configuration
  - Suntech ST 240 setup
  - ST 240 Plaspy
  - ST240 server configuration
  - Suntech GPS tracker setup
  - vehicle tracker configuration
  - ST 240 GPRS setup
  - Suntech tracking platform
  - GPS tracker Plaspy compatibility
---

# Suntech - ST 240 Configuration

This page covers the public configuration context for using the Suntech ST 240 tracker with Plaspy. It explains the server settings, required preparation steps, and the publicly available SMS configuration commands used to point the device at Plaspy so the unit can report telemetry and location data to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps for the ST 240 can vary depending on firmware, hardware revision, installation type, and the vendor tools you use. The guidance below uses only public configuration information and the SMS command examples provided with the device.

## Configuration Overview

The goal of this configuration process is to prepare the ST 240 to communicate reliably with Plaspy so tracked vehicles appear in the platform. When completed, the tracker should use the operator APN and GPRS settings, report to the Plaspy server endpoint on the shared port, and use either UDP or TCP as selected.

- Configure the device APN and GPRS server parameters so it can send data over the cellular network.
- Point the tracker to the Plaspy server endpoint so reports arrive in the platform.
- Set reporting intervals so location updates match your monitoring needs.
- Validate connectivity and confirm the tracker appears in Plaspy after configuration.
- Use the provided SMS commands or manufacturer tools to apply the settings as required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A functioning SIM card with data access and the correct APN for your mobile operator
- The device IMEI so you can compute the device ID used in SMS commands
- A phone or SMS gateway capable of sending configuration SMS messages to the tracker if using SMS setup
- Access to any manufacturer configuration software or tools if you prefer not to use SMS
- Power to the ST 240 and a stable installation location for initial testing
- Knowledge of which transport your installation requires (UDP or TCP) if the tracker prompts for selection

## How This Tracker Connects to Plaspy

The ST 240 is configured to send location and device data to the shared Plaspy server endpoint and port. Once the tracker has proper APN settings and the server parameters are applied, the device will deliver its periodic reports and events to Plaspy where they are processed and presented to users.

- The tracker uses GPRS to transmit messages to the configured server address
- Reports are sent to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on the device setting and network conditions
- Plaspy automatically detects the incoming tracker protocol and associates the device with your account
- After reporting begins, location updates and events become visible in the Plaspy platform

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration messages if using the SMS method.
2. Determine the device ID from the IMEI (see Example Configuration Commands) and prepare your operator APN, username, and password values.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server fields.
4. Set the server port to 8888.
5. Choose UDP or TCP if the device requires a transport selection.
6. Apply or save the configuration settings on the tracker.
7. Restart the device if required by the device or after SMS configuration.
8. Validate the device is reporting to Plaspy and visible in the platform.

## Example Configuration Commands

The ST 240 accepts SMS-based configuration commands. The following examples are the public commands extracted from the device configuration content. Replace <device_id> with the device ID derived from the IMEI (see note below) and replace the APN placeholders with your operator values.

- How to calculate the device ID
  - The device ID used in commands is the six digits from the IMEI excluding the final IMEI digit. For example, if the IMEI is 123456789012345, the device ID is digits 9–14: 901234.

1) Set the operator APN and the GPRS server (server IP and port point to Plaspy)
```
SA200NTW;<device_id>;02;<gprs_flag>;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- <device_id> = last 6 digits of the IMEI excluding the final IMEI digit (see calculation above)
- <gprs_flag> = 1 if APN username or password are provided, otherwise 0
- {{apn}} = your operator APN
- {{apnu}} = APN username placeholder if required by operator
- {{apnp}} = APN password placeholder if required by operator

2) Set the reporting/update interval to 60 seconds
```
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```
- This example sets periodic reporting values; keep the command order exactly as shown.

3) Verify current settings (query)
```
SA200CMD;<device_id>;02;PresetA
```
- Use this command to check or request the current preset configuration.

Notes on sending commands
- Send each command as an SMS message to the device phone number.
- Preserve the parameter order and placeholders when replacing with real values.
- The server address in these commands points directly to the Plaspy server IP and port as required by the platform.

## Configuration Notes

- Firmware versions and hardware revisions can change the exact SMS syntax or available parameters. Verify the correct command format for your unit.
- The ST 240 supports both SMS-based setup and manufacturer configuration tools; choose the method that matches your installation practices.
- When the device asks for transport selection, choose UDP or TCP consistently with your network and firewall rules.
- Keep APN username and password placeholders {{apnu}} and {{apnp}} only if your operator requires them; otherwise set the gprs_flag to 0 and leave those fields empty.
- After applying settings, allow a few minutes for the device to register on the network and begin reporting to Plaspy.

## Why Use Plaspy with This Configuration

Using the Suntech ST 240 with Plaspy gives organizations straightforward visibility into vehicle movement and telematics through a unified server endpoint. The shared Plaspy server settings and automatic protocol detection reduce per-device configuration overhead and make it faster to integrate multiple units into a single fleet view.

To learn more about Plaspy and how it manages device connections, visit https://www.plaspy.com. For device specific firmware details, SMS syntax variations, and the latest setup procedures, verify the current documentation and support resources at the manufacturer website http://www.suntechint.com/ since manufacturer specifications and configuration methods can change over time.
