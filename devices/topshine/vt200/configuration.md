---
slug: /topshine/vt200/configuration
id: vt200-configuration
sidebar_label: Configuration
title: TopShine - VT200 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine VT200 showing Plaspy server settings SMS commands and practical steps to connect the tracker to Plaspy
keywords:
- TopShine VT200 configuration
- TopShine VT200 setup
- VT200 server configuration
- VT200 Plaspy setup
- TopShine GPS tracker configuration
- VT200 SMS configuration
- VT200 GPRS settings
- Plaspy tracker setup
- GPS tracker integration Plaspy
- VT200 fleet tracking setup
---

# TopShine - VT200 Configuration

This page documents the public configuration context for using the TopShine VT200 with Plaspy. It focuses on practical, publicly available setup information including server settings, common workflow steps, and SMS configuration commands when applicable. The content is intended to help technical users prepare the VT200 for reliable communication with Plaspy while preserving manufacturer commands and placeholders from public sources.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The VT200 supports 2G GSM GPRS or SMS reporting and has a built-in data logger and backup battery, so this page highlights how to point the VT200 at Plaspy using the platform server values and sample SMS commands that are publicly available.

## Configuration Overview

Configuring a VT200 for Plaspy means preparing the device to deliver position and telemetry to the Plaspy ingestion endpoint over GPRS or SMS, validating connectivity, and ensuring the unit appears in the Plaspy platform. Use the server settings below and the manufacturer-provided configuration method for your specific unit and firmware revision.

- Configure the device network and GPRS parameters so it can reach Plaspy over the mobile data network.
- Ensure the device ID/IMEI is set or recognized so Plaspy can match reports to the correct asset.
- Validate connectivity and reporting to Plaspy after saving settings to confirm real-time visibility.
- Use the VT200 data logger and backup battery behavior to avoid gaps during intermittent GSM coverage.
- Where available, use SMS commands or the vendor tool to apply APN, server address, transport, and reporting interval settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and accepts reports on the shared port used by all supported devices

## Typical Requirements Before Setup

- A working SIM card provisioned for mobile data and SMS with a compatible APN.
- Power and wiring consistent with a professional vehicle installation so the VT200 can boot and register on the network.
- Access to the manufacturer configuration method for the VT200 such as SMS command access or the vendor setup tool.
- The device IMEI and any installer password needed to send configuration commands; the public default password shown in manufacturer examples is 000000.
- A testing plan to verify connectivity and reporting to the Plaspy server after configuration.

## How This Tracker Connects to Plaspy

The VT200 sends GPRS packets or SMS messages containing position and telemetry to the Plaspy endpoint. When pointed at the Plaspy server (by domain or IP) on the platform port, reports are ingested and matched to the device identifier so live position, alerts, and history become available in Plaspy.

- The tracker is configured to report to the shared Plaspy server endpoint and port.
- Reports arrive over GPRS using either UDP or TCP depending on transport selection.
- Plaspy automatically detects the tracker protocol and processes incoming packets.
- Device identifiers (IMEI or configured device ID) allow Plaspy to map incoming reports to the correct asset.
- Successful configuration enables real-time visibility, alerts, and historical reporting in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the VT200 (SMS configuration or the vendor tool). This is the required step for applying device-level settings.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP address 54.85.159.138 in the device server setting.
3. Set the port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection; Plaspy accepts both and will auto detect the protocol.
5. Configure the device APN, credentials if required, and any required device identifier so the server can associate reports with the unit.
6. Apply or save the configuration on the device and restart the unit if the manufacturer instructions recommend a reboot.
7. Validate that the VT200 reports to Plaspy by checking for incoming positions and telemetry on the Plaspy platform.

## Example Configuration Commands

The VT200 supports SMS-based configuration in manufacturer-provided formats. The following public commands are sample SMS syntax extracted from TopShine documentation. The sample commands use the device default password 000000 where required. Preserve placeholders exactly as shown and replace them with your values when you send commands.

- Note about placeholders
  - [apn] is the mobile network APN for the SIM card.
  - [apnu] is the APN username when required.
  - [apnp] is the APN password when required.
  - Replace [device_id] with the required device identifier derived from the IMEI as specified below.

1. Optional initial factory reset (use only when required for initial setup)
```text
W000000,990,099###
```

2. Set the device ID (manufacturer example uses the first 14 digits of the IMEI)
```text
W000000,010,[device_id]
```
- Guidance: set the device ID using the first 14 digits from the IMEI as shown in public examples. Ensure the device identifier aligns with how you register the unit in Plaspy; Plaspy matches reports using the IMEI or configured ID.

3. Set the operator APN (username and password optional)
```text
W000000,011,[apn]
```
Or, when APN username and password are required:
```text
W000000,011,[apn],[apnu],[apnp]
```

4. Set the GPRS server to Plaspy using the public IP and port
```text
W000000,012,54.85.159.138,8888
```
- You may alternatively point the device at d.plaspy.com if the device accepts domain names instead of an IP address. Use the method supported by your VT200 firmware.

5. Switch to GPRS reporting mode
```text
W000000,013,2
```

6. Set the update interval (manufacturer example uses 6 as the sample interval)
```text
W000000,014,6
```
- Interpret the interval according to the device manual; this sample command sets the reporting frequency as shown in public examples.

7. Query device IMEI (verification command)
```text
W000000,601
```

## Configuration Notes

- SMS-based configuration is supported in public VT200 documentation; use SMS commands only when you understand the commands and have the correct installer password.
- Firmware revisions and hardware versions can change command support and parameter formats; confirm exact syntax with the unit you are configuring.
- Choose TCP or UDP based on your installation needs; Plaspy accepts both and will auto detect protocol, but device-side behavior can differ by firmware.
- When a domain name is used, some firmware requires an IP address instead; the manufacturer example uses the IP 54.85.159.138 and port 8888 for reliable connectivity.
- Always verify the APN, SIM data plan capability, and network coverage before assuming successful GPRS connection to Plaspy.

## Why Use Plaspy with This Configuration

Using the TopShine VT200 with Plaspy provides a practical route to real-time tracking, event visibility, and historical reporting for fleets and assets. The VT200’s support for GPRS TCP/UDP and SMS, together with its data logger and backup battery, aligns well with Plaspy’s ingestion model so organizations can maintain continuous telemetry even through intermittent coverage.

Learn more about Plaspy and platform features at https://www.plaspy.com. For device specific commands, firmware behavior, and the latest manufacturer guidance, verify setup information on the official TopShine site https://www.gztopshine.com/ as manufacturer specifications and configuration methods can change over time.
