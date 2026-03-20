---
slug: /tzone/tz_avl05/configuration
id: tz_avl05-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL05 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the TZone TZ-AVL05 tracker to Plaspy using shared server settings and SMS or GPRS commands
keywords:
  - TZone TZ-AVL05 configuration
  - TZone TZ-AVL05 setup
  - TZ-AVL05 Plaspy configuration
  - Plaspy GPS setup
  - TZone tracker configuration
  - vehicle tracking configuration
  - GPS tracker setup guide
  - fleet tracking Plaspy
  - GPRS tracker setup
  - SMS tracker configuration
---

# TZone - TZ-AVL05 Configuration

This page covers the public configuration context for using the TZone TZ-AVL05 GPS tracker with Plaspy. It explains the practical server settings and the common steps required to prepare the device to report location and status to the Plaspy platform. The content here is based on publicly available setup commands and the device description that identifies GPRS TCP UDP and SMS as supported communication methods.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps may vary by firmware version, hardware revision, installation type, and vendor configuration tools. Where available this page includes the device SMS commands published in the public configuration content and explains how those commands map to Plaspy server settings.

## Configuration Overview

This guide shows the practical steps to prepare a TZ-AVL05 to communicate with Plaspy using the platform shared server endpoint and port. The overall goal is to ensure the tracker can establish a GPRS connection (or use SMS where applicable), register with the carrier, and send position updates to Plaspy so the device appears and reports correctly in the platform.

- Configure the device network parameters such as operator APN so GPRS can connect.
- Set the tracker reporting interval so Plaspy receives timely position updates.
- Point the tracker to Plaspy server settings so data arrives at the correct endpoint.
- Enable GPRS mode on the device so it can transmit over mobile data.
- Verify the device reports to Plaspy and that positions are visible in the platform.

## Plaspy Server Settings

Use these Plaspy server values when configuring the TZ-AVL05 for Plaspy:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol to simplify device onboarding.

## Typical Requirements Before Setup

- A working SIM card installed in the tracker with data enabled and SMS capability if you plan to send SMS commands.
- Sufficient battery or external power applied so the device remains powered during configuration.
- Access to the manufacturer provided configuration method for the TZ-AVL05 (SMS commands or vendor tool).
- Knowledge of the mobile operator APN and optional APN username and password for the SIM.
- Ability to send SMS messages to the tracker if using SMS-based configuration commands.
- A Plaspy account and device registration on the platform to validate reporting once the tracker is configured.

## How This Tracker Connects to Plaspy

When configured for Plaspy the TZ-AVL05 sends its location and status to the shared Plaspy server endpoint and port. Plaspy receives the incoming tracker traffic on port 8888 and detects the protocol automatically so device messages are decoded and shown in the platform.

- The tracker establishes a GPRS data session using the operator APN and then opens a TCP or UDP connection to the Plaspy endpoint.
- Device telemetry and position updates are sent to the Plaspy server domain or IP at port 8888.
- Plaspy automatically detects the specific tracker protocol and processes incoming messages.
- Events and periodic location data become visible in Plaspy for monitoring and reporting.
- If SMS is used for initial configuration, the tracker is later switched to GPRS for ongoing reporting to Plaspy.

## Common Configuration Workflow

1. Obtain the official manufacturer configuration method or documentation for the TZ-AVL05 and confirm the default device password if required.
2. Set the device operator APN and optional APN username and password using the manufacturer recommended method.
3. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device server address.
4. Set the server port to 8888 on the device.
5. Choose UDP or TCP on the device if the hardware requires an explicit transport selection.
6. Apply or save the configuration and enable GPRS mode on the tracker.
7. Restart or power cycle the tracker if required by the manufacturer to activate the new settings.
8. Validate that the device reports to Plaspy and that positions and events appear in the platform.

## Example Configuration Commands

The TZ-AVL05 can be configured by sending SMS commands. The following public SMS commands are provided in the device configuration content and should be sent in the order shown when performing an initial setup. Replace placeholders where noted.

- Set the operator APN. Replace [apn] with your mobile operator APN. If your operator requires APN username or password, include [apnu] and [apnp] as shown. The apnu and apnp fields are optional and only needed if your APN requires authentication.

```
*000000,011,[apn],[apnu],[apnp]#
```

- Set the location update interval to 60 seconds (example). Adjust the interval value as needed.

```
*000000,018,60,999#
```

- Set the GPRS server to Plaspy using the public Plaspy server IP and port. This example uses the IP 54.85.159.138 and port 8888 as published for Plaspy.

```
*000000,015,0,54.85.159.138,8888#
```

- Activate GPRS mode on the tracker so it uses mobile data for reporting.

```
*000000,016,1#
```

Notes on placeholders
- [apn] is the operator APN string required for data.
- [apnu] is the APN username and is optional.
- [apnp] is the APN password and is optional.
- The leading numeric password 000000 in these commands is the device command password used in the public examples. Confirm the device default password with the manufacturer and change it if appropriate.

## Configuration Notes

- Firmware variations and hardware revisions can change the exact SMS syntax and available fields; always confirm with the manufacturer documentation for your device version.
- The TZ-AVL05 supports both SMS based configuration and GPRS reporting according to public device descriptions; use SMS for initial parameter setup where needed.
- Choose UDP or TCP on the device according to network and carrier behavior. Plaspy accepts either transport and will handle protocol detection automatically.
- Plaspy uses port 8888 for all supported devices, so setting the port correctly on the tracker is essential.
- If you encounter connectivity issues, verify APN, SIM data allowance, and whether the device requires a restart after configuration.

## Why Use Plaspy with This Configuration

Using the TZ-AVL05 with Plaspy provides a straightforward path to collect vehicle location and event data in a central platform. With the publicly documented SMS commands you can prepare the device to use GPRS and point it at the Plaspy endpoint so tracking data appears in your Plaspy account for monitoring, alerts, and operational workflows.

To learn more about Plaspy visit https://www.plaspy.com. Please verify device specific setup steps, firmware behavior, and the latest manufacturer details at the official TZone website http://www.tzonedigital.com/ because manufacturer specifications and setup procedures can change over time.
