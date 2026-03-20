---
slug: /concox/gt06n_4g/configuration
id: gt06n_4g-configuration
sidebar_label: Configuration
title: Concox - GT06N 4G Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Concox GT06N 4G for use with Plaspy including server settings SMS commands and setup workflow
keywords:
  - Concox GT06N 4G configuration
  - Concox GT06N setup
  - Concox GT06N Plaspy
  - GT06N 4G server configuration
  - GT06N 4G SMS commands
  - GT06N 4G APN settings
  - GT06N 4G tracker setup
  - Concox GPS tracker configuration
  - vehicle tracking GT06N
  - Plaspy tracker configuration
---

# Concox - GT06N 4G Configuration

This page covers the public configuration context for using the Concox GT06N 4G tracker with Plaspy. It explains the shared Plaspy server values you will enter on the device, outlines the typical setup workflow, and provides the vendor supplied SMS commands that are commonly used to prepare the device for reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat the commands and sequence below as practical public guidance and verify device specific details with Concox documentation when needed.

## Configuration Overview

The goal of configuration is to prepare the GT06N 4G to communicate reliably with Plaspy, enable continuous reporting, and verify visibility in the Plaspy platform. For this device, common configuration is performed via SMS commands or the manufacturer PC tool and focuses on GPRS server settings, APN setup, and reporting intervals.

- Configure the device to report to Plaspy using the shared Plaspy server settings.
- Set the correct APN so the device can establish a cellular data session.
- Choose transport (UDP or TCP) and set the common port used by Plaspy.
- Set reporting interval and enable GPRS data reporting to allow live updates.
- Verify settings and connectivity so the device appears in Plaspy dashboards.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- Note that all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and functional GT06N 4G unit with access to its SMS or PC configuration method
- An active cellular SIM card with data and SMS enabled and APN information available
- The device must be able to reach the public internet via cellular data for GPRS reporting
- Access to the Concox SMS commands or the official Concox configuration tool
- Basic knowledge of whether to use UDP or TCP for your site network and firewall rules

## How This Tracker Connects to Plaspy

The GT06N 4G is configured to report location and device events to the shared Plaspy server endpoint and port. Once the device has a working data session and the server settings are applied, Plaspy receives telemetry and shows it in the platform using automatic protocol detection.

- The device sends location and telemetry to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy receives the connection and identifies the tracker protocol automatically
- Status updates, periodic location reports, and event messages are forwarded to your Plaspy account
- Using the chosen transport (UDP or TCP), the device transmits data according to configured intervals
- Operators can monitor device events, such as SOS or tamper notices, in Plaspy once reporting is established

## Common Configuration Workflow

1. Access the official Concox configuration method such as SMS commands or the Concox PC tool.
2. Enter the Plaspy server domain d.plaspy.com or alternatively the server IP 54.85.159.138.
3. Set the port to 8888 for the device server setting.
4. Choose UDP or TCP if the device requires a transport selection during server configuration.
5. Set the device APN using your carrier APN values and enable GPRS mode.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy and appears in your Plaspy account or dashboard.

## Example Configuration Commands

The GT06N 4G supports SMS based configuration. The following public SMS commands are provided in vendor documentation. Preserve placeholders when you replace them with your values.

- Reset factory settings (optional initial setup)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,{{apn}}#
```
If your carrier requires APN username and password, include these placeholders:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: replace {{apn}} with your carrier APN. If needed, replace {{apnu}} and {{apnp}} with the APN username and APN password.

- Set the GPRS server to use the Plaspy domain (UDP or TCP transport selection is handled by device settings)
```text
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy IP
```text
SERVER,0,54.85.159.138,8888,0#
```
Notes: These two forms show domain and IP options. Use the form appropriate for your device and network. The final parameter may control protocol flag depending on firmware.

- Set the update interval to every 60 seconds
```text
TIMER,60#
```
Or an alternative interval form
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Check current GPRS and server parameters
```text
GPRSSET#
```
Use GPRSSET# to verify the server, APN, and timer values after configuration.

## Configuration Notes

- SMS based configuration is widely used for initial setup but you can also use manufacturer PC tools where available.
- Firmware versions and regional variants may expect slightly different SMS command parameter orders or flags. Confirm with Concox documentation.
- Choose UDP or TCP based on your network and firewall rules. Plaspy accepts both transports on port 8888 and will auto detect the device protocol.
- Use the domain d.plaspy.com when possible; if DNS is unavailable, the Plaspy IP 54.85.159.138 may be used as an alternative.
- Always verify settings with the GPRSSET# command and confirm the device appears in Plaspy after a restart or after enabling GPRS.

## Why Use Plaspy with This Configuration

Using the GT06N 4G with Plaspy gives fleets a reliable path to centralized visibility, event monitoring, and operational reporting. The combination of the device's vehicle focused inputs and Plaspy's server acceptance of both domain and IP endpoints on a shared port makes initial deployment and scale out straightforward for fleet operators.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods and firmware notes on the manufacturer site https://www.iconcox.com/. Manufacturer specifications, setup workflows, and firmware behavior can change over time so confirm the latest details before large scale rollouts.
