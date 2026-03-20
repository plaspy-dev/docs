---
slug: /concox/vl111/configuration
id: vl111-configuration
sidebar_label: Configuration
title: Concox - VL111 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Concox VL111 for use with Plaspy with server settings SMS commands and practical setup guidance
keywords:
  - Concox VL111 configuration
  - Concox VL111 setup
  - VL111 Plaspy configuration
  - VL111 server configuration
  - VL111 SMS commands
  - VL111 GPRS settings
  - Concox tracker configuration
  - vehicle GPS tracker setup
  - GPS platform integration
  - fleet tracking configuration
---

# Concox - VL111 Configuration

This page covers the public configuration context for using the Concox VL111 tracker with Plaspy. It consolidates the practical server settings and the common setup commands that the manufacturer publishes for enabling the device to send location and telemetry to Plaspy. Use this guide to prepare the device and apply the shared platform configuration required for visibility on Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The VL111 supports SMS configuration and GPRS server settings as part of typical setup flows; follow the commands below and verify any differences that may apply to your device revision.

## Configuration Overview

The configuration process prepares the VL111 to communicate reliably with the Plaspy backend and ensures the device reports regular location and event data. It usually involves setting the mobile data APN, pointing the device to the Plaspy server endpoint, and enabling the device’s data reporting interval.

- Configure the device APN and network access so it can use mobile data for GPRS or LTE reporting.
- Set the device's GPRS server to the Plaspy server endpoint so telemetry is routed to Plaspy.
- Choose transport (UDP or TCP) if required and set the shared port used by Plaspy.
- Configure periodic reporting (timer) so the device sends updates at the desired interval.
- Verify settings with a manufacturer verification command or by checking device visibility in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A valid nano SIM with mobile data enabled and correct APN credentials for the device to use GPRS/LTE.
- Access to a method to send SMS commands to the tracker or access to the manufacturer's PC/phone configuration tool as supported by the VL111.
- Power and basic installation completed so the device can boot, register on the mobile network, and connect.
- A Plaspy account and device provisioning information so you can confirm the device appears in the platform after configuration.
- Basic knowledge of the device firmware version and the manufacturer's user guide for any revision-specific notes.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the VL111 reports GNSS positions, status, and event packets to the shared Plaspy endpoint and port. Plaspy receives these periodic packets and maps them to the device record in the platform so live tracking, alerts, and historical playback are available.

- The tracker is pointed to the Plaspy server by entering d.plaspy.com or the provided IP and the platform port.
- The device uses the selected transport (UDP or TCP) on port 8888 to send GPRS/LTE packets to Plaspy.
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol in Plaspy itself.
- Once reporting begins, Plaspy displays real-time location, telemetry and event data for operational monitoring.
- Use the platform to validate that the tracker is online and transmitting after configuration.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands, the VL111 PC tool, or the vendor configuration app as supported by your device and firmware.
2. Enter the Plaspy server address by using either the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport if the device requires a transport selection and supports both options.
5. Configure the APN and any APN username or password required by your SIM card carrier.
6. Save or apply the configuration and restart the device if required by the manufacturer.
7. Validate the tracker reports to Plaspy by checking device connectivity in the Plaspy dashboard or by using the device verification command.

## Example Configuration Commands

To set the tracker send the following SMS commands in the order shown. These commands are the public commands provided by the manufacturer for SMS-based configuration. Labeling a reset as optional: the factory reset is typically used for initial setup or to clear prior settings.

1. Optional initial factory reset (use only when needed)
```
FACTORY#
```

2. Set the time zone to UTC+0
```
GMT,E,0#
```

3. Set the operator APN
- Replace {{apn}} with your carrier APN. If your carrier requires an APN username or password, also provide {{apnu}} and {{apnp}} where indicated.
```
APN,{{apn}}
```
or with credentials (if required)
```
APN,{{apn}},{{apnu}},{{apnp}}
```

4. Set the GPRS server to use the Plaspy domain (UDP/TCP transport selection is handled on the device)
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy IP
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update interval to every 60 seconds
- Two common timer formats shown by the manufacturer:
```
TIMER,60#
```
or
```
TIMER,60,60#
```

6. Enable GPRS mode
```
GPRSON,1#
```

7. Verify current GPRS parameter settings
```
GPRSSET#
```

Notes on placeholders:
- {{apn}} is the mobile data APN string required by the cellular provider.
- {{apnu}} is the APN username if your provider requires one.
- {{apnp}} is the APN password if your provider requires one.
Keep placeholders as-is when preparing SMS messages and replace them with your actual carrier credentials.

## Configuration Notes

- SMS-based configuration is supported and shown here because the VL111 vendor documentation lists SMS commands; some installers prefer the PC tool or vendor app depending on firmware.
- Firmware versions and hardware variants (for example regional VL111S variants) can add or change available commands and their behavior; confirm commands against your device firmware.
- Choose TCP or UDP based on installer preference or device options; Plaspy accepts both transports on the shared port and will detect the protocol automatically.
- The Plaspy configuration uses the same port for all supported devices, simplifying server settings across a mixed fleet.
- If you have trouble connecting, verify APN credentials, SIM data capability, and that the device has network registration before assuming server-side problems.

## Why Use Plaspy with This Configuration

Using the VL111 configured to report to Plaspy gives operators consistent real-time visibility and centralized telemetry for vehicles and motorcycles. The combination of reliable GNSS reporting and a consistent server endpoint simplifies fleet onboarding, enabling dispatchers and managers to monitor location, events, and remote control actions from a unified platform.

To learn more about Plaspy and how it supports device integrations like the VL111, visit https://www.plaspy.com. For the latest device-specific command references, firmware notes, and hardware details verify the current documentation at the manufacturer site https://www.iconcox.com/. Manufacturer specifications, setup methods, and device behavior can change over time so always confirm configuration steps against the official Concox documentation.
