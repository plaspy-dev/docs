---
slug: /concox/eg02/configuration
id: eg02-configuration
sidebar_label: Configuration
title: Concox - EG02 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring Concox EG02 to work with Plaspy including server settings SMS commands and setup workflow
keywords:
  - Concox EG02 configuration
  - Concox EG02 setup
  - Concox EG02 server configuration
  - Concox EG02 Plaspy setup
  - EG02 GPS tracker configuration
  - EG02 server settings
  - Concox GPS tracker setup
  - Plaspy device configuration
  - GPS tracker SMS configuration
  - Electric scooter tracker setup
---

# Concox - EG02 Configuration

This page covers the public configuration context for using the Concox EG02 tracker with Plaspy. It explains the shared Plaspy server settings you will point the EG02 to, provides an example SMS configuration flow (where supported), and describes the common steps required to verify the device reports correctly to the platform. The guidance here is intended for technical users preparing the EG02 for integration with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary depending on firmware revision, hardware revision, installation type, and the vendor's configuration tools. The EG02 supports SMS and GPRS configuration methods shown below; use the manufacturer documentation and the device's firmware notes to confirm behavior for your specific unit.

## Configuration Overview

Configuring the EG02 for Plaspy prepares the tracker to establish a GPRS session to Plaspy and report position and status updates to a shared server endpoint. The main goal is to ensure the device has correct APN and server values, a working data connection, and an update interval appropriate for your monitoring needs.

- Configure APN and GPRS parameters so the EG02 can use mobile data to reach Plaspy.
- Set the Plaspy server endpoint and port so the device reports to the centralized Plaspy infrastructure.
- Choose transport (UDP or TCP) on the device if required by the device firmware.
- Set reporting intervals and enable GPRS to control how often location updates are sent.
- Verify connectivity and use the vendor verification command to confirm parameters are active.

## Plaspy Server Settings

Use the following Plaspy server values when configuring the EG02 device settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

All devices used with Plaspy use the same port and Plaspy will detect the protocol automatically so you only need to point the tracker at the correct server address and port.

## Typical Requirements Before Setup

- A charged and installed EG02 unit with access to the SMS interface or manufacturer configuration tool.
- A SIM card with data enabled and the correct APN for the mobile operator.
- Ability to send SMS commands from a phone number the device will accept, or access to the manufacturer's configuration software if preferred.
- Note of the APN, APN username, and APN password for your SIM operator if required.
- Basic familiarity with sending SMS configuration commands or using the vendor's setup application.
- Optional: a test area with good cellular reception to validate GPRS connectivity.

## How This Tracker Connects to Plaspy

When configured, the EG02 uses the device's GPRS connection to send location and event data to Plaspy. The tracker is pointed at the shared Plaspy server endpoint and port so incoming reports are routed into the platform for processing and display.

- The device opens a GPRS connection using the configured APN to obtain mobile data access.
- The EG02 sends location and event reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device setting and preference; Plaspy supports both.
- Plaspy automatically detects the tracker protocol when the device connects so protocol selection is often a device-side option only.
- Once connected, the device's position updates and alerts become visible in Plaspy for monitoring and historical playback.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the vendor's configuration software provided by Concox.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888.
4. Choose UDP or TCP as the transport option if the EG02 requires transport selection.
5. Configure the APN and any required APN credentials for your SIM card.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy by checking the device status in the platform or using the EG02 verification command.

## Example Configuration Commands

The EG02 can be configured by sending the following SMS messages to the device. Preserve the order where applicable. Commands and placeholders are shown exactly as used in SMS configuration.

1. Optional initial factory reset (use only if you need to return the device to factory defaults)
```text
FACTORY#
```

2. Set the time zone to UTC+0
```text
GMT,E,0#
```

3. Set the operator APN
- Basic APN only:
```text
APN,[apn]#
```
- APN with username and password (if required by the operator):
```text
APN,[apn],[apnu],[apnp]#
```
Note: Keep the placeholders [apn], [apnu], and [apnp] and replace them with your operator APN, APN username, and APN password respectively.

4. Set the GPRS server to the Plaspy domain (recommended)
```text
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy server IP
```text
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update interval to every 60 seconds (two common variants)
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

6. Enable GPRS mode
```text
GPRSON,1#
```

7. Check current GPRS parameters and settings
```text
GPRSSET#
```

How to use these commands
- Send each SMS from an authorized phone number to the EG02 in the order you want the settings applied.
- Replace placeholders such as [apn], [apnu], and [apnp] with real operator values.
- Use the verification command GPRSSET# to confirm server, APN, and timer settings after applying changes.

## Configuration Notes

- The exact SMS syntax and available parameters can vary by firmware version or hardware revision; always test on a single unit first.
- If the device offers both UDP and TCP, try UDP first for lower overhead but select TCP if your environment requires a persistent connection.
- Use the domain form d.plaspy.com where possible to allow DNS based routing; the IP form 54.85.159.138 is available as an alternative.
- The EG02 supports SMS-based setup as shown above; some installers prefer the Concox configuration tool or vendor support channels for bulk or remote deployments.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol so you do not need multiple port values for different devices.

## Why Use Plaspy with This Configuration

Using the EG02 with Plaspy provides a straightforward way to consolidate tracking data from scooter fleets into a single platform for operational visibility, alerts, and location history. Pointing the EG02 at Plaspy's shared server endpoint lets the device report telemetry and event data into the platform where it can be monitored, analyzed, and used for fleet management or theft protection workflows.

To learn more about Plaspy and supported device configurations visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance refer to the official Concox website https://www.iconcox.com/ to verify current setup methods and any firmware behavior changes.
