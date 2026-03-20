---
slug: /xexun/tk_102/configuration
id: tk_102-configuration
sidebar_label: Configuration
title: Xexun - TK-102 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure a Xexun TK-102 tracker for use with Plaspy including required server settings and example SMS commands
keywords:
  - Xexun TK-102 configuration
  - Xexun TK-102 setup
  - TK-102 Plaspy configuration
  - TK-102 GPS tracker setup
  - Xexun tracker server settings
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - vehicle tracking setup TK-102
  - TK-102 SMS commands
  - Xexun configuration guide
---

# Xexun - TK-102 Configuration

This page covers the public configuration context for using the Xexun TK-102 tracker with Plaspy. It collects the practical, publicly available setup information you need to point a TK-102 at Plaspy for live tracking and data reporting. Where applicable this guide includes example SMS commands used by the tracker to set APN and server values.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this guide as a practical reference and verify device specific details against the official Xexun documentation when needed.

## Configuration Overview

This configuration process prepares the TK-102 to communicate with Plaspy by setting the network access parameters and the GPRS reporting destination. The focus is on ensuring the device can reach Plaspy's server and that reporting intervals and modes are appropriate for your monitoring needs.

- Configure the device APN and GPRS mode so it has data connectivity for reporting to Plaspy.
- Set the device to report to the Plaspy server hostname or IP and the shared port used by all Plaspy devices.
- Choose the transport mode if required by the device firmware, UDP or TCP.
- Optionally restore factory defaults or set a defined device password before applying server settings.
- Validate connectivity and confirm the tracker appears in Plaspy after saving changes.

## Plaspy Server Settings

When configuring the TK-102 for use with Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device selection  
- Plaspy automatically detects the tracker protocol  
- Note that all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged TK-102 device with working power and a valid SIM with data enabled for GPRS reporting.
- APN, APN username, and APN password from the mobile operator when required.
- Access to the device configuration method supported by the unit such as SMS commands or a manufacturer configuration tool.
- The device IMEI or identifying number so you can associate the tracker with your Plaspy account.
- A Plaspy account and the ability to add or provision devices in the Plaspy platform.
- If using SMS for configuration, a phone able to send SMS to the device and the device password if it is required by commands.

## How This Tracker Connects to Plaspy

The TK-102 is configured to send location and reporting data to the shared Plaspy endpoint and port so Plaspy can ingest telemetry and present it in the platform. Plaspy receives the incoming connections and uses automatic protocol detection to interpret the tracker messages.

- The tracker uses GPRS to send data to the Plaspy server domain or IP on port 8888.
- You may point the device to d.plaspy.com or directly to 54.85.159.138 as the server address.
- Transport can be UDP or TCP depending on the tracker configuration and firmware options.
- Plaspy auto detects the tracker protocol so the server side will interpret tracker messages without manual protocol selection.
- Reported device data becomes visible in Plaspy for tracking, event reporting, and operational monitoring.
- The TK-102 can keep local backups on its SD card while still reporting to Plaspy over GPRS.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software as documented by Xexun, or prepare to send SMS configuration commands if the device supports SMS setup.  
2. Set the tracker APN using the operator APN string so GPRS connectivity is available.  
3. Enter the Plaspy server using either d.plaspy.com or 54.85.159.138 as the server address.  
4. Set the port to 8888 which is used by all devices in Plaspy.  
5. Choose UDP or TCP if the device firmware requires a transport selection.  
6. Apply or save the configuration to the tracker and restart the device if required by the firmware.  
7. Validate that the device reports to Plaspy and appears in your Plaspy account or device list.

## Example Configuration Commands

The TK-102 commonly accepts SMS commands for configuration. Below are the public example commands in the order presented by the device documentation. The sample commands use the default device password 123456 where required. Replace placeholders and parameters as appropriate for your operator and environment.

- Optional initial reset to factory settings
```text
begin123456
```
- Set the operator APN
```text
apn123456 {{apn}}
```
- Set the APN username if required
```text
apnuser123456 {{apnu}}
```
- Set the APN password if required
```text
apnpasswd123456 {{apnp}}
```
- Set the GPRS server to Plaspy using the public IP and port
```text
adminip123456 54.85.159.138 8888
```
- Set the GPRS mode (enable GPRS reporting)
```text
gprsmode123456
```
- Set the update interval to 60 seconds
```text
t060s***n123456
```

Notes on placeholders and password
- {{apn}} is the mobile operator access point name string you must supply.
- {{apnu}} and {{apnp}} are the APN username and APN password when your operator requires them.
- 123456 in the examples is the default device password used in the public command examples. If your device has a different password use that value in place of 123456.

## Configuration Notes

- SMS based setup is shown here because the TK-102 supports SMS configuration in public documentation. Some installers prefer manufacturer PC tools or configuration interfaces when available.
- Firmware versions and hardware revisions can change command formats or required steps. If a command fails, check the device firmware documentation first.
- When offered, choose UDP or TCP based on network reliability and any guidance from your operator. Plaspy accepts both and will auto detect the protocol.
- Always confirm APN values with the mobile operator and verify the device has GPRS data connectivity before relying on platform reporting.
- After applying settings, allow time for the device to register on the mobile network and then verify reporting in Plaspy.

## Why Use Plaspy with This Configuration

Using the TK-102 with Plaspy provides a straightforward way to centralize location reporting and event visibility for fleets, assets, or personal trackers. With the Plaspy shared server settings, you can standardize device configuration across deployments and rely on Plaspy to interpret and display incoming tracker data.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer documentation verify details at the official Xexun site https://www.xexun.com/ as setup methods and firmware behavior may change over time.
