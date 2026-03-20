---
slug: /globalsat/lt_10/configuration
id: lt_10-configuration
sidebar_label: Configuration
title: GlobalSat - LT-10 Configuration
sidebar_class_name: menu_item_tracker
description: Configure GlobalSat LT-10 for use with Plaspy including server settings SMS commands checksum details and setup workflow
keywords:
  - GlobalSat LT-10 configuration
  - LT-10 setup for Plaspy
  - GlobalSat tracker configuration
  - LT-10 server configuration
  - Plaspy tracker setup
  - GPS livestock tracking configuration
  - LoRaWAN ear tag configuration
  - LT-10 SMS configuration commands
  - GNSS tracker setup guide
  - solar powered tracker configuration
---

# GlobalSat - LT-10 Configuration

This page documents the public configuration context for using the GlobalSat LT-10 with Plaspy. It explains the practical steps and publicly available commands used to point an LT-10 toward the Plaspy server endpoint and port so the device can report location and status into the Plaspy platform. Information here is grounded in the LT-10 description and the publicly available device configuration commands.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol used by each device. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The LT-10 may be configured using the manufacturer mobile app or via SMS-style configuration commands that are documented publicly; follow the method that matches your device firmware and available tools.

## Configuration Overview

The goal of the configuration process is to prepare the LT-10 so it reliably communicates with Plaspy and appears in the platform for monitoring and reporting. For the LT-10 this often means using the manufacturer app or sending publicly documented SMS configuration strings that assign server destination, transport, and required service parameters.

- Set the LT-10 to send its data to the Plaspy server endpoint so Plaspy can ingest and display locations.
- Provide any required network parameters and placeholders such as APN values or IMEI where the command requires them.
- Choose UDP or TCP transport and set the common Plaspy port so the device traffic reaches Plaspy.
- Apply the configuration and, if required, reboot the device to activate settings.
- Validate connectivity by confirming the device registers and reports to Plaspy.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the LT-10:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888 and note that all devices in Plaspy use the same port 8888
- transport support for UDP or TCP depending on device requirements
- automatic protocol detection in Plaspy so the platform recognizes the tracker protocol after the device connects

## Typical Requirements Before Setup

- A powered LT-10 device with access to the manufacturer configuration method such as the iOS or Android app or the SMS configuration channel used by the device.
- The LT-10 IMEI or device identifier available to include in commands or app registration.
- If using SMS configuration, a SIM card and SMS capability on the device or an SMS gateway as required by the manufacturer command flow.
- APN placeholders or network credentials ready when the configuration command requires them (kept as [apn], [apnu], and [apnp] in example commands).
- Understanding that the LT-10 uses LoRaWAN for standard tracking and that configuration methods and available transport options can depend on firmware and regional hardware.
- A Plaspy account or access credentials so you can confirm the device appears and reports in the platform following configuration.

## How This Tracker Connects to Plaspy

When the LT-10 is configured to point at Plaspy it sends its reporting traffic to the shared Plaspy endpoint and port. Plaspy receives the device messages, automatically identifies the device protocol, and makes the device visible in the platform for monitoring and alerts.

- The tracker is set to communicate with the Plaspy server domain d.plaspy.com or the IP 54.85.159.138.
- Messages are sent to port 8888 which is the common port used across Plaspy supported devices.
- The device may use UDP or TCP transport to deliver messages to Plaspy depending on device settings.
- After the device connects, Plaspy automatically detects the tracker protocol so no manual protocol selection is required on the platform side.
- Successful configuration enables position reporting and status updates to appear in Plaspy for operational monitoring.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method that your LT-10 supports, either the iOS or Android app or the SMS configuration channel documented by GlobalSat.
2. In the manufacturer tool enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the destination.
3. Set the device port to 8888 which is the shared Plaspy port.
4. Choose UDP or TCP on the device if it requires you to select a transport mode.
5. Provide any required APN or credential placeholders if the command or app requests them and include the device IMEI where required.
6. Apply or save the configuration in the device tool and, if instructed by the device documentation, restart or reboot the device.
7. Validate the device is reporting to Plaspy by checking for the device in Plaspy after it reconnects and confirming periodic location or status messages arrive.

## Example Configuration Commands

The LT-10 public configuration flow includes SMS-style commands. The following examples are derived from the publicly available manufacturer command strings and preserve placeholders for values you must replace.

Format example used by Plaspy:
TSPRXAB27GHKLMnaicz*U!

Setup command example
- Replace [imei] with the device IMEI
- Replace [apn], [apnu], [apnp] with your APN, APN username, and APN password when required by the device network configuration
- [checksum] is the two character hexadecimal checksum calculated over the command characters before the asterisk as described below

Setup command (send by SMS)
```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

Reboot command (optional, use if device requires a restart to apply settings)
```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Checksum calculation
- The checksum is computed as an XOR of the ASCII codes for every character in the command string before the '*' character. The result is converted to a two digit uppercase hexadecimal value and placed where [checksum] is shown.
- Many manufacturer configuration tools compute this checksum automatically. If you compute it manually, ensure it is two characters long in uppercase hex.

Notes on placeholders
- [imei]: Device IMEI number required by the command format.
- [apn]: APN string for GPRS data if the device uses cellular data.
- [apnu] and [apnp]: APN username and APN password when required.
- Keep the command order and punctuation exactly as shown when sending the SMS commands.

## Configuration Notes

- Firmware differences can change the exact command syntax and available parameters; always check the LT-10 firmware version and the manufacturer documentation for nuances.
- The LT-10 description indicates LoRaWAN support and app configuration; the SMS commands shown here are a public method for devices that accept SMS configuration strings and may not be applicable to every firmware or regional hardware revision.
- If you must choose between UDP and TCP, select the transport supported by your installation and the manufacturer recommendation; Plaspy accepts either and will detect the protocol automatically.
- Confirm that the IMEI and any APN values are correct before sending configuration SMS commands to avoid misconfiguration.
- Use the official GlobalSat app or configuration guide for interactive setup where possible, and treat SMS commands as an alternative when documented by the manufacturer.

## Why Use Plaspy with This Configuration

Configuring the GlobalSat LT-10 to report to Plaspy provides a centralized way to monitor location, battery alerts, and motion events so you can manage livestock more effectively. Using Plaspy's shared server endpoint and automatic protocol detection simplifies integration because the platform accepts connections on a single, consistent port and adapts to the tracker protocol when the device connects.

To learn more about Plaspy visit the main website https://www.plaspy.com and for the most current device specific details and firmware guides verify the official GlobalSat documentation at https://www.globalsat.com.tw/. Manufacturer specifications, setup methods, and device behavior can change over time so always confirm the latest information on the official GlobalSat site.
