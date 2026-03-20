---
slug: /xexun/tk_102_2/configuration
id: tk_102_2-configuration
sidebar_label: Configuration
title: Xexun - TK-102-2 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide to connect the Xexun TK-102-2 GPS tracker to Plaspy using shared server settings and SMS commands
keywords:
  - Xexun TK-102-2 configuration
  - Xexun TK-102-2 setup
  - TK102-2 Plaspy integration
  - GPS tracker server configuration
  - vehicle tracking setup
  - SMS configuration commands
  - GPRS APN setup
  - Plaspy server settings
  - tracker protocol detection
  - GPS tracking platform configuration
---

# Xexun - TK-102-2 Configuration

This page documents the public configuration context for using the Xexun TK-102-2 with Plaspy. It focuses on the practical server settings and setup workflow that place the device onto the shared Plaspy endpoint so the tracker can report location and alerts to the platform. Where available, common SMS commands from the manufacturer are included as a reference.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact steps on the manufacturer side can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands below as public examples and verify device behavior with current manufacturer materials.

## Configuration Overview

The goal of the configuration process is to prepare the TK-102-2 so it can communicate reliably with Plaspy and become visible in your tracking account. For this model the public configuration commonly uses SMS commands to set APN parameters and the GPRS server entry, then enables periodic reporting to the Plaspy endpoint.

- Set the mobile data APN and optional APN username and password for the device SIM so GPRS data is available.
- Point the device to the Plaspy server using the provided server address or IP and the shared port.
- Select the transport method if the device requires a choice between UDP or TCP.
- Configure reporting intervals so the device transmits position updates to Plaspy.
- Validate connectivity and visibility in Plaspy after applying settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP for device connections  
- Plaspy automatically detects the tracker protocol when the device connects

All devices on Plaspy use the same port, and Plaspy will attempt to identify the tracker protocol automatically when the tracker reports to the server.

## Typical Requirements Before Setup

- A charged and powered TK-102-2 with access to SMS configuration or the official configuration tool from the manufacturer.  
- A SIM card capable of data and SMS with APN details from the mobile operator.  
- APN name plus optional APN username and APN password if your operator requires them.  
- Access to the tracker IMEI for device registration and verification.  
- A phone able to send SMS commands to the tracker or access to the official manufacturer configuration software.  
- Basic knowledge of whether your installation prefers UDP or TCP for transport.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TK-102-2 uses its mobile data connection to open a session to the Plaspy server endpoint and transmit position and event data. Configuration points instruct the tracker where to send data, what port to use, and how frequently to report.

- The device is configured to report to the shared Plaspy endpoint using either the domain d.plaspy.com or the IP 54.85.159.138.  
- Reports are sent to port 8888 which is the standard port used by Plaspy for supported devices.  
- The tracker can use either UDP or TCP depending on configuration choices and firmware support.  
- Plaspy performs automatic protocol detection so the platform can interpret the incoming data from supported trackers.  
- Once connected, typical event reports like movement, geo fence, overspeed, or low battery alerts become visible in the Plaspy interface.

## Common Configuration Workflow

1. Review the official Xexun TK-102-2 manual or SMS command list so you have the exact manufacturer commands.  
2. Ensure the device SIM has a working data plan and obtain the operator APN plus any APN username and password.  
3. Enter d.plaspy.com or the server IP 54.85.159.138 into the tracker server setting as supported by the device.  
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.  
5. Apply or save the configuration on the tracker using SMS commands or the manufacturer tool.  
6. Restart or power cycle the tracker if the device requires a reboot to apply new GPRS settings.  
7. Validate the device reports to Plaspy and appears in your Plaspy account, confirming protocol and report interval behavior.

## Example Configuration Commands

The TK-102-2 can be configured by SMS commands. The manufacturer example commands below use the device default password 123456. If you have customized the password, replace the numeric password in each command accordingly. Placeholders such as {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your operator APN, APN username, and APN password.

- Optional initial factory reset command when starting from unknown settings
```text
begin123456
```

- Set the operator APN
```text
apn123456 {{apn}}
```

- Set the APN username if required by the operator
```text
apnuser123456 {{apnu}}
```

- Set the APN password if required by the operator
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```

- Set the GPRS mode to enable reporting over mobile data
```text
gprsmode123456
```

- Set the update interval to 60 seconds
```text
t060s***n123456
```

Notes on placeholders and password
- {{apn}} is your mobile operator APN string.  
- {{apnu}} is the APN username when required by the operator.  
- {{apnp}} is the APN password when required by the operator.  
- 123456 is shown here as the factory default device password in the public example. Change this if your device uses a different password.

## Configuration Notes

- Firmware and command syntax can vary by hardware revision and firmware version. Always confirm the exact SMS command syntax with the current Xexun documentation.  
- The device supports SMS based configuration as shown, which is useful for headless or remote installations.  
- Choose UDP or TCP according to installer preference and firmware capability. Plaspy supports both and performs automatic protocol detection.  
- Plaspy uses the same port 8888 for all supported devices so the port entry is uniform across device types.  
- If you prefer to use the server domain rather than the IP, enter d.plaspy.com where the tracker accepts a domain name.

## Why Use Plaspy with This Configuration

Using the Xexun TK-102-2 with Plaspy provides a straightforward path to centralized visibility and event monitoring for vehicles or assets. By configuring the tracker to report to Plaspy you enable platform-level tracking, alerting, and historical visibility while leveraging the device features such as periodic reporting and alert types that the TK-102-2 supports.

To learn more about Plaspy and how it handles device connections visit https://www.plaspy.com. For the latest device specific setup details firmware notes and official command lists check the manufacturer website at https://www.xexun.com/.
