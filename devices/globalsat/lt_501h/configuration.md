---
slug: /globalsat/lt_501h/configuration
id: lt_501h-configuration
sidebar_label: Configuration
title: GlobalSat - LT-501H Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the GlobalSat LT 501H showing Plaspy server settings, SMS commands and practical setup steps
keywords:
  - GlobalSat LT-501H configuration
  - GlobalSat LT-501H setup
  - LT-501H Plaspy configuration
  - LT-501H LoRaWAN setup
  - GlobalSat tracker server configuration
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - LT-501H SMS commands
  - Plaspy server settings
  - LoRaWAN tracker configuration
---

# GlobalSat - LT-501H Configuration

This page documents the public configuration context for connecting the GlobalSat LT-501H family to Plaspy. It summarizes the practical server settings Plaspy expects, the typical prerequisites you should verify before setup, and the public commands and workflow examples that are commonly used to point a tracker to Plaspy. The LT-501 series is LoRaWAN capable and is commonly integrated into Plaspy via LoRaWAN uplinks, but the following guidance also includes publicly available SMS command examples where provided by the manufacturer or vendor tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so most devices require the same endpoint and port. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, or vendor configuration tool. Use this guide to apply the public Plaspy values and practical steps, and refer to the manufacturer documentation for device specific details.

## Configuration Overview

Configuring the LT-501H for Plaspy is about ensuring the tracker reports location and telemetry to Plaspy's shared endpoint so the platform can ingest, decode, and display the data. The public settings below are the values Plaspy publishes for device routing and are intentionally consistent across supported devices to simplify provisioning.

- Point the tracker or vendor configuration tool to Plaspy using the published endpoint or IP so uplinks reach Plaspy.
- Set the port to Plaspy's shared port so the device traffic is accepted by the Plaspy backend.
- Choose transport UDP or TCP on the device if the firmware requires a transport selection.
- Validate connectivity and that the device appears in your Plaspy workspace after configuration.
- Use the device IMEI or hardware identifier during setup so Plaspy can associate the device uplinks to your account.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Access to the device IMEI or hardware identifier required for registration and command templates.
- Charged battery or stable power so the device remains reachable during configuration.
- Access to the official manufacturer configuration method or vendor tool for the LT-501H.
- LoRaWAN network and application server configured to forward uplinks to Plaspy if using LoRaWAN integration.
- If using SMS based configuration, a working SIM card and the ability to send SMS messages to the device.
- A terminal or SMS client to send any public configuration commands and to capture device confirmations.

## How This Tracker Connects to Plaspy

The primary method for LT-501H integration with Plaspy is LoRaWAN uplinks that deliver location and telemetry to the Plaspy backend. Plaspy ingests and decodes those uplinks so devices become visible in the platform. Where vendor tools or firmware support direct server configuration by command or SMS, the device can be configured to target Plaspy's endpoint and port directly.

- The LT-501H sends uplinks to Plaspy via the configured transport and endpoint so Plaspy can process location and events.
- Plaspy receives the data at d.plaspy.com or 54.85.159.138 on port 8888 and automatically detects the protocol used by the tracker.
- Once the tracker reports, Plaspy links the IMEI or device identifier to the workspace for map visibility and history.
- Events such as motion, battery status, and help alerts are forwarded to Plaspy for operational monitoring.
- If the manufacturer provides SMS or IP based configuration commands, those commands can set E0 and E1 fields to Plaspy values so direct reporting reaches Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the LT-501H and confirm the supported configuration channels.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server or endpoint field.
3. Set the destination port to 8888 which is used by Plaspy for all devices.
4. Choose UDP or TCP transport on port 8888 if the device or firmware requires a transport selection.
5. Apply or save the configuration in the manufacturer tool or send the required SMS command if SMS configuration is supported.
6. Restart or reboot the device if the tool or workflow requires a restart to apply changes.
7. Validate the device reports to Plaspy by confirming it appears in your Plaspy workspace and that recent uplinks are received.

## Example Configuration Commands

The manufacturer provided public SMS command format for this tracker family can be used where SMS configuration is supported by the device. The following examples are extracted from the public model configuration content. Preserve and replace placeholders when you send the command.

General command format noted in vendor content
TSPRXAB27GHKLMnaicz*U!

Primary setup command
Replace [imei] with the device IMEI and [apn], [apnu], [apnp] with SIM APN values where required. The checksum placeholder [checksum] must be calculated and appended as shown.

```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

Optional reboot command labeled in vendor content as a device reboot step
Replace [imei] with the device IMEI and compute the checksum for this string as well.

```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Notes on placeholders and checksum
- [imei] is the device IMEI number; include the exact IMEI string in the command.
- [apn], [apnu], [apnp] are placeholders for the SIM APN, APN username, and APN password when SMS or cellular configuration requires GPRS parameters.
- [checksum] and [checksumreeboot] are two digit uppercase hexadecimal checksums computed over the command text before the asterisk. The public vendor script shows an XOR based checksum where each character code is XORed and the result is converted to a two character uppercase hex string.
- The commands above set E0 to Plaspy server IP 54.85.159.138 and E1 to port 8888 as published by Plaspy. You may also use d.plaspy.com in vendor tools that accept a domain name instead of an IP.

## Configuration Notes

- Firmware and hardware revisions may change command formats or checksum logic. Always confirm syntax with the current manufacturer guide.
- Some LT-501H deployments use LoRaWAN only and do not require IP or SMS server configuration; use LoRaWAN application routing to forward uplinks to Plaspy when applicable.
- Choose UDP or TCP according to the device firmware option. Plaspy listens for either transport on the same shared port 8888.
- SMS based configuration is supported by the public vendor commands shown above when the device or variant accepts SMS commands.
- When using SMS commands include the IMEI exactly and verify the computed checksum is correct before sending.

## Why Use Plaspy with This Configuration

Using the LT-501H with Plaspy provides centralized visibility for long life LoRaWAN trackers and lets organizations collect GPS, BLE beacon and motion telemetry in one platform. Whether you use LoRaWAN application routing or vendor provided commands to point the device to Plaspy, the shared server settings simplify provisioning and make it easier to get devices reporting quickly.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and manufacturer guidance verify details on the official GlobalSat site https://www.globalsat.com.tw/ as vendor instructions and firmware behavior may change over time.
