---
slug: /istartek/vt202/configuration
id: vt202-configuration
sidebar_label: Configuration
title: iStartek - VT202 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the iStartek VT202 GPS tracker to communicate with Plaspy using shared server settings and SMS or GPRS setup
keywords:
  - iStartek VT202 configuration
  - VT202 setup Plaspy
  - iStartek tracker configuration
  - VT202 server configuration
  - VT202 SMS setup
  - VT202 GPRS settings
  - Plaspy GPS integration
  - VT202 tracking platform setup
  - iStartek GPS tracker setup
  - VT202 fleet tracking configuration
---

# iStartek - VT202 Configuration

This page covers the public configuration context for using the iStartek VT202 tracker with Plaspy. It explains the shared server settings Plaspy requires, and shows the practical SMS and GPRS commands publicly published for the VT202 so you can prepare the device to report to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The VT202 supports SMS configuration and GPRS server settings, so this guide focuses on applying the public Plaspy values and validating connectivity.

## Configuration Overview

This configuration process prepares the VT202 to transmit location and alarm data to Plaspy, either by pointing its GPRS server settings to Plaspy or by using the device's SMS setup commands. The goal is to ensure the tracker can communicate reliably with the Plaspy backend so the device appears and updates correctly in the platform.

- Configure the tracker server entry to point to the Plaspy server endpoint for real time reporting.
- Set the device APN and GPRS parameters so the tracker can establish a data session.
- Choose the transport mode (UDP or TCP) if the tracker requires an explicit selection.
- Validate the device reports to Plaspy and confirm visibility in the platform.
- Use manufacturer-supplied SMS commands or configuration tools to apply settings.

## Plaspy Server Settings

When configuring the VT202 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be set to either transport)
- Plaspy automatically detects the tracker protocol

Note that all devices in Plaspy use the same port and Plaspy will detect the protocol used by the tracker automatically.

## Typical Requirements Before Setup

- A powered VT202 device with the ability to receive SMS commands or a GPRS capable SIM installed as required by the device.
- Access to the device installer or the official iStartek configuration method, such as SMS command interface or vendor software.
- A valid APN for the SIM card to enable GPRS data if using server reporting.
- Ability to send SMS messages to the device number for SMS based configuration.
- A process to validate that the device is visible and reporting in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The VT202 sends position and event data to the Plaspy platform by reporting to the shared Plaspy server endpoint and port. Once the device GPRS server or SMS configuration points to Plaspy, the platform will receive telemetry and make the device visible in the account.

- The tracker is configured to report to the Plaspy server domain or IP using port 8888.
- Data is transmitted over either UDP or TCP based on the tracker's transport selection.
- Plaspy automatically detects the protocol used by the tracker when data arrives.
- Position updates and alarms sent by the VT202 are received and processed by Plaspy for monitoring.
- Validation consists of confirming telemetry arrives at Plaspy and the device shows online status.

## Common Configuration Workflow

1. Access the official iStartek configuration method for the VT202, typically SMS commands or the vendor tool recommended by your supplier.
2. Set the device APN using the APN command so the tracker can start a GPRS session.
3. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138.
4. Set the port to 8888 and choose UDP or TCP if the device requires explicit transport selection.
5. Apply or save the configuration on the device and restart the tracker if required by the device or firmware.
6. Validate that the VT202 reports to Plaspy and appears online in the platform.

## Example Configuration Commands

The VT202 supports SMS based configuration. Below are the public SMS commands in the order commonly used. Preserve placeholders such as [apn], [apnu], and [apnp] when applying commands; these should be replaced with the correct APN values provided by the mobile operator.

- Optional factory reset (use when preparing a device for first time setup or troubleshooting):
```text
FACTORY#
```

- Set the time zone to UTC 0 (example):
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your operator APN. If your operator requires username or password, supply [apnu] and [apnp] as the second and third parameters:
```text
APN,[apn]# 
```
or, when username and password are required:
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server using the Plaspy domain (UDP or TCP determined by transport selection):
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server using the Plaspy IP address:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the position update interval to 60 seconds:
```text
TIMER,60#
```

- Verify current parameters:
```text
PARAM#
```

Notes on placeholders: [apn] is the mobile network APN. [apnu] and [apnp] are optional APN username and password fields if your operator requires them.

## Configuration Notes

- Firmware and hardware revisions may change command behavior or available parameters. Confirm exact command syntax with iStartek documentation for your device firmware.
- The VT202 supports SMS based configuration as shown above. Use SMS when software tools are not available.
- If the device requires transport selection, choose UDP or TCP accordingly; Plaspy will auto detect the incoming protocol but the device must be able to send using the configured transport.
- All devices in Plaspy use the same port for server communication, so set port 8888 as shown.
- Keep APN credentials and SIM provisioning accurate to ensure a stable GPRS connection.

## Why Use Plaspy with This Configuration

Using the VT202 with Plaspy provides a straightforward path to fleet visibility and event monitoring by pointing the tracker to Plaspy's shared server endpoint. The VT202's compact form factor and alarm capabilities combined with Plaspy's automatic protocol detection and unified port configuration simplify setup and reduce per device differences when integrating multiple trackers.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer details verify information with the official iStartek documentation at https://istartek.com/.
