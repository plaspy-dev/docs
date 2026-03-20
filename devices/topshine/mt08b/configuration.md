---
slug: /topshine/mt08b/configuration
id: mt08b-configuration
sidebar_label: Configuration
title: TopShine - MT08B Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for TopShine MT08B showing Plaspy server settings and SMS GPRS commands for integration
keywords:
  - TopShine MT08B configuration
  - TopShine MT08B setup
  - MT08B Plaspy configuration
  - MT08B server configuration
  - TopShine GPS tracker setup
  - MT08B SMS configuration
  - MT08B GPRS setup
  - Plaspy tracker configuration
  - TopShine device integration
  - MT08B GPS platform setup
---

# TopShine - MT08B Configuration

This page documents the public configuration context for using the TopShine MT08B with Plaspy. It gathers the practical, platform-facing settings and the vendor provided SMS/GPRS command examples that are commonly used to prepare the MT08B for live tracking, alerts, and historical reporting on Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this page focuses on the public settings and commands you can use to point an MT08B at Plaspy while encouraging verification against the official TopShine documentation.

## Configuration Overview

The configuration process prepares the MT08B to communicate reliably with Plaspy over the GSM network using SMS or GPRS. The goal is to set the device identifier, APN, and the Plaspy server endpoint and ensure the device reports at the desired update interval.

- Point the tracker to the Plaspy server endpoint and port so the device transmits location data to Plaspy.
- Configure the device APN and optional authentication so GPRS connections can be established.
- Set the device identifier (derived from the IMEI) so Plaspy can associate incoming messages with the correct asset.
- Choose transport (UDP or TCP) and confirm device mode is set to GPRS for data reporting.
- Validate connectivity using the IMEI query and by checking the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Plaspy behavior: Plaspy automatically detects the tracker protocol when the device connects and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered MT08B unit with accessible SMS or GPRS configuration method per the vendor instructions
- A valid GSM SIM card with data enabled and correct APN credentials for the mobile operator
- The device IMEI available for identification and verification
- Access to TopShine documentation or installer tools that describe the SMS/GPRS command syntax
- Basic familiarity with sending SMS commands to the device or using vendor configuration software
- Confirmation that the device firmware supports the listed command set shown below

## How This Tracker Connects to Plaspy

The MT08B can send location and telemetry to Plaspy using SMS or GPRS. When using GPRS, the tracker opens a socket to the Plaspy server endpoint and port and transmits standard location/status messages that Plaspy processes for display and alerts.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888
- Transport may be set to UDP or TCP depending on the device option; Plaspy accepts both and detects protocol automatically
- The device identifier is derived from the IMEI so Plaspy can map incoming messages to the correct asset
- Once online, the tracker sends periodic updates based on the configured update interval and generates event messages for motion, geo-fence, SOS, and power alerts
- Plaspy receives these messages for live map display, alerting, and history retention

## Common Configuration Workflow

1. Access the official TopShine configuration method, typically SMS commands as documented by the vendor or the vendor configuration tool.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 depending on the device command syntax.
3. Set the port to 8888 in the device server configuration.
4. Choose UDP or TCP if the device requires a transport selection; configure the same transport when required.
5. Configure APN and any APN username and password required by the mobile operator so the device can use GPRS.
6. Apply or save the configuration and restart the tracker if required by the device.
7. Validate that the device reports to Plaspy by querying the IMEI and checking for the device online state in Plaspy.

## Example Configuration Commands

The MT08B supports SMS-based configuration. The vendor example commands below use the device password 000000 as the default password. Replace placeholders and device-specific fields as needed. Keep the order shown for initial setup where indicated.

- Note: default device password in these examples is 000000. Adjust if the device password was changed.

1. Optional initial factory reset (use only when you need a reset)
```text
W000000,990,099###
```
2. Set the device ID (the vendor command uses 14 digits derived from IMEI)
```text
W000000,010,<14-digit-device-id>
```
- Explanation: replace <14-digit-device-id> with the first 14 digits from the device IMEI if required by the device. Plaspy will use the device IMEI (15 digits) to identify the device in the platform.

3. Set the operator APN (placeholders preserved)
```text
W000000,011,{{apn}}[,{{apnu}},{{apnp}}]
```
- Explanation: replace {{apn}} with your mobile operator APN. If your operator requires a username and password, provide {{apnu}} and {{apnp}} respectively (the comma and placeholders are used only when needed).

4. Set the GPRS server to Plaspy by IP and port
```text
W000000,012,54.85.159.138,8888
```
- This command points the device at Plaspy using the public server IP and port 8888. You may also enter d.plaspy.com if the device accepts a domain.

5. Switch the device to GPRS data mode
```text
W000000,013,2
```

6. Set the update interval (example value)
```text
W000000,014,6
```
- Explanation: this sample sets a device reporting interval. Replace 6 with the desired interval per vendor documentation.

7. Query the device IMEI for verification
```text
W000000,601
```
- Send this SMS to receive the IMEI from the device so you can confirm identifiers and device status.

## Configuration Notes

- SMS-based setup is publicly documented by the vendor and is commonly used for field configuration of the MT08B; follow vendor command syntax exactly and preserve the device password.
- APN credentials are operator specific; if your APN requires a username and password, include {{apnu}} and {{apnp}} in the APN command.
- Choose TCP or UDP based on installation needs; Plaspy supports both and will automatically detect the tracker protocol when the device connects to the shared port.
- Firmware and command syntax can differ between production runs or firmware versions; always verify the exact command format for your device revision with TopShine documentation.
- After applying settings, confirm the device reports to Plaspy by checking the device appears online in the platform and by reviewing recent position messages.

## Why Use Plaspy with This Configuration

Using the MT08B with Plaspy gives operators compact, discreet tracking hardware combined with a platform that centralizes location, event alerts, and history. For small fleets, motorcycles, and security-focused installations, the MT08B plus Plaspy allows visibility into motion, power events, SOS alerts, and I/O signals in a single platform.

Learn more about Plaspy and how to manage device integration at https://www.plaspy.com. Verify device specific configuration steps and firmware details with TopShine at https://www.gztopshine.com/ since manufacturer specifications and setup methods can change over time.
