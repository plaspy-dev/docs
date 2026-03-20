---
slug: /globalsat/lt_20/configuration
id: lt_20-configuration
sidebar_label: Configuration
title: GlobalSat - LT-20 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect GlobalSat LT-20 to Plaspy with SMS command examples and server settings
keywords:
  - GlobalSat LT-20 configuration
  - GlobalSat LT-20 setup
  - GlobalSat tracker Plaspy
  - LT-20 Plaspy setup
  - GPS tracker configuration
  - asset tracking setup
  - LoRa GPS tracker configuration
  - tracker SMS configuration
  - tracker server configuration
  - asset monitoring platform
---

# GlobalSat - LT-20 Configuration

This page documents the public configuration context for using the GlobalSat LT-20 with the Plaspy tracking platform. It consolidates the Plaspy server settings, practical setup workflow, and the publicly available SMS configuration commands that are commonly used to point a compatible LT-20 device to Plaspy for visibility and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reports to the platform. Manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and the vendor configuration tool. The LT-20 model configuration shown here includes SMS command examples extracted from public device configuration content and explains placeholders such as IMEI and APN variables.

## Configuration Overview

The goal of the configuration process is to prepare the LT-20 so it can communicate with Plaspy, report location and event data, and appear in the Plaspy platform with minimal manual intervention. When configured correctly, the device will send its telemetry to the shared Plaspy endpoint and use Plaspy protocol detection to be recognized automatically.

- Populate device identifiers and network parameters so the tracker can reach the Plaspy endpoint
- Send or apply the server domain or IP and the Plaspy port to the device configuration
- Verify connectivity and that the tracker reports to Plaspy for immediate visibility
- Use the SMS command templates provided to remotely configure devices when SMS setup is supported
- Restart the tracker after applying changes and validate reporting in Plaspy

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming device connections
- Note that Plaspy uses the same port for all supported devices which simplifies device configuration

## Typical Requirements Before Setup

- Access to the device IMEI number so the IMEI placeholder in setup commands can be filled
- A method to send configuration commands to the tracker such as SMS or the manufacturer tool if supported
- Valid APN details for the SIM used in the device when cellular configuration is required; placeholders are provided in examples
- A charged device or sufficient power source for setup and verification procedures
- Access to the Plaspy server settings shown above so they can be entered into the tracker configuration
- Permission to restart the device after configuration if a reboot is required to apply settings

## How This Tracker Connects to Plaspy

The LT-20 is configured to report to the shared Plaspy server endpoint and port so Plaspy can receive telemetry and automatically identify the tracker protocol. Once communication is established the device location and event messages become visible in the Plaspy platform.

- Configure the device to use d.plaspy.com or the IP 54.85.159.138 as the upstream server
- Use port 8888 as the destination port for tracker data
- Select UDP or TCP transport if the device requires a transport mode selection
- The device sends periodic and event-based reports to the Plaspy endpoint
- Plaspy detects the incoming protocol automatically and begins processing the device messages

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for the LT-20 such as the manufacturer SMS command scheme or vendor setup software
2. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138 in the device server field
3. Set the destination port to 8888 which is used across Plaspy supported devices
4. Choose the transport mode UDP or TCP if the device requires an explicit selection
5. Send or apply the configuration and save changes on the device
6. Restart or reboot the tracker if required to apply settings
7. Validate that the device reports to Plaspy and that the device appears in the platform

## Example Configuration Commands

The LT-20 public configuration content includes SMS command templates. Preserve placeholders and replace them with device specific values when sending commands. The command sequence below shows the setup message and an optional reboot command. Keep the order: configure first, then reboot if you want the device to immediately reload settings.

- Example format note present in public content
  - TSPRXAB27GHKLMnaicz*U!

- Setup command template
  - Purpose: configure APN, Plaspy server IP and port, and basic reporting flags
  - Replace {{imei}} with the device IMEI
  - Replace [apn], [apnu], and [apnp] with your operator APN name, username, and password as required
  - Compute {{checksum}} as described below and insert it in uppercase hex form

```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Reboot command template
  - Purpose: reboot the device to apply configuration. Use only if a reboot is required or recommended.

```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum calculation
- The public configuration content includes a checksum calculation that XORs all characters in the command string up to but not including the asterisk character
- Convert the XOR result to a two digit uppercase hexadecimal string and use that value as {{checksum}} or {{checksumreeboot}}
- Steps to compute the checksum in brief
  1. Take the command text portion before the asterisk for example GSS,{{imei}},3,0,...,A1=1
  2. Compute the bitwise XOR of the character codes for every character in that string
  3. Convert the final XOR value to a two character uppercase hex value, pad with leading zero if necessary
  4. Place that hex value after the asterisk and before the final exclamation mark

Placeholders explained
- {{imei}} device IMEI number to identify the specific tracker
- [apn] operator APN name required for cellular data
- [apnu] APN username if applicable
- [apnp] APN password if applicable
- {{checksum}} and {{checksumreeboot}} computed as described above

## Configuration Notes

- The public commands shown use SMS based configuration which is appropriate when the manufacturer exposes SMS control for the LT-20 model
- Firmware and hardware revisions may change command formats or checksum rules so verify against the current GlobalSat documentation
- Choose UDP or TCP depending on device requirement and network conditions; Plaspy will accept either on port 8888
- Plaspy uses the same port for all devices and automatically detects the tracker protocol after the first messages arrive
- If you are using cellular APN parameters, keep APN placeholders and credentials secure and verify operator settings before sending commands

## Why Use Plaspy with This Configuration

Using Plaspy with the GlobalSat LT-20 lets organizations consolidate device reporting to a single known endpoint and port which simplifies large scale deployments and remote configuration. Plaspy's automatic protocol detection removes a layer of protocol selection when devices begin reporting, helping get devices online faster for operational monitoring.

To learn more about Plaspy and how this configuration fits into the broader platform, visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation guidelines always verify the latest information with the manufacturer at https://www.globalsat.com.tw/.
