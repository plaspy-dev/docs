---
slug: /bofan/pt_30/configuration
id: pt_30-configuration
sidebar_label: Configuration
title: Bofan - PT-30 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Bofan PT 30 tracker and Plaspy server settings for quick integration and reliable reporting
keywords:
  - Bofan PT 30 configuration
  - Bofan PT 30 setup
  - PT 30 server configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - PT 30 GPRS setup
  - Bofan GPS platform setup
  - personal tracker configuration
  - SMS command setup
  - vehicle and asset tracking
---

# Bofan - PT-30 Configuration

This page documents the public configuration context for using the Bofan PT-30 personal GPS tracker with Plaspy. It summarizes the shared Plaspy server settings you will apply to the device and collects the publicly available SMS commands and workflow used to prepare the PT-30 for reporting to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The PT-30 supports SMS and GPRS configuration; this guide includes SMS command examples from the device documentation and explains how to point the tracker to Plaspy for live tracking.

## Configuration Overview

The goal of the configuration process is to prepare the PT-30 so it can communicate reliably with Plaspy and appear as an active device in the platform. Typical configuration involves verifying device readiness, setting operator APN details, and directing the tracker to the Plaspy server endpoint and port.

- Configure the device APN and GPRS parameters so the tracker can use mobile data for reporting.
- Set the device identifier used by Plaspy, typically a 14 digit ID derived from the IMEI.
- Point the PT-30 to the Plaspy server endpoint and port so updates arrive in the platform.
- Adjust reporting interval and operational settings to suit monitoring needs and battery considerations.
- Validate connectivity by confirming the tracker is sending packets to Plaspy and appears online in the platform.

## Plaspy Server Settings

Use the following public server settings when configuring the PT-30 for Plaspy. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888 for all devices in Plaspy
- Transport support either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

## Typical Requirements Before Setup

- A charged and working PT-30 tracker with access to its SMS or manufacturer configuration method.
- A SIM card installed with data enabled and the operator APN, username, and password if required.
- The device IMEI available for generating or verifying the tracker identifier used by Plaspy.
- Access to the manufacturer SMS command list or configuration tool to send setup commands.
- A brief test plan to confirm the device reports to Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the PT-30 sends location and status data to the shared Plaspy server endpoint and port. Plaspy receives those packets, automatically detects the device protocol, and associates updates with the tracker identifier so the device becomes visible in the platform.

- The tracker is configured to send GPRS packets to the Plaspy server endpoint and port.
- Plaspy associates incoming data with the configured 14 digit identifier derived from the IMEI.
- The platform provides visibility for location updates and operational status once packets are received.
- Reporting intervals and event settings determine how frequently data arrives at Plaspy.
- Plaspy’s automatic protocol detection reduces the need to select a protocol manually on the server side.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the PT-30, or prepare to send SMS configuration commands per the device instructions.
2. Enter the Plaspy server endpoint by using d.plaspy.com or the server IP 54.85.159.138 as required by the device.
3. Set port 8888 which Plaspy uses for all devices.
4. If the device requires a transport selection, choose UDP or TCP on port 8888.
5. Configure the APN and any required APN username and password for the installed SIM.
6. Apply or save the configuration and restart the device if the tracker firmware requires it.
7. Validate that the device reports to Plaspy by checking for device activity in the platform and confirming receipt of the first GPS update.

## Example Configuration Commands

The PT-30 supports SMS based configuration. The manufacturer provides the following public SMS commands. Commands are prefixed by the device password which is shown here as the default 000000. Replace placeholders as appropriate.

- Optional initial factory reset (use only when necessary)
```text
000000DFT
```

- Set a 14 digit identifier used with Plaspy. The identifier is typically the last 14 digits of the IMEI. Replace \<14-digit-id> with the actual 14 digit value.
```text
000000GID<14-digit-id>
```
Example using a 14 digit id
```text
000000GID12345678901234
```

- Set the APN for your mobile operator. Keep placeholders [apn], [apnu], and [apnp] as needed. Replace or remove username and password segments if your operator does not require them.
```text
000000APN[apn],[apnu],[apnp]
```
Explanation of placeholders:
- [apn] empty placeholder for operator APN name
- [apnu] empty placeholder for APN username if required
- [apnp] empty placeholder for APN password if required

- Set the GPRS server to Plaspy using the public server IP and port from this guide
```text
000000SVR54.85.159.138,8888
```

- Set the update interval to 1 minute (60 seconds)
```text
000000GTI60
```

Notes on SMS commands:
- The default device password in these examples is 000000. If your device password was changed, use the current password as the prefix.
- Preserve the order of commands when the device documentation recommends a sequence, for example APN before server settings.
- Use the factory reset command only when preparing a fresh device or if troubleshooting requires it.

## Configuration Notes

- The PT-30 supports SMS based configuration in addition to any manufacturer software tools; use the method appropriate for your deployment.
- Firmware and regional variants may change command syntax or behavior. Confirm commands against the latest Bofan documentation.
- When the device requires a choice between UDP and TCP, select the transport supported by your network and monitoring needs; Plaspy accepts either transport on port 8888.
- Ensure that the APN string and optional APN credentials are correct for the SIM operator before setting the server address.
- Plaspy will automatically detect the tracker protocol when traffic reaches the server address, reducing the need for advanced protocol settings on the device.

## Why Use Plaspy with This Configuration

Configuring the Bofan PT-30 to report to Plaspy provides a straightforward path to real time visibility for people and asset tracking. Using the shared Plaspy server endpoint and port simplifies setup across multiple devices while Plaspy’s automatic protocol detection helps streamline integration without requiring complex server side changes.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer instructions verify current details on the official Bofan website https://www.bofancloud.com/ as manufacturer specifications and setup methods can change over time.
