---
slug: /haicom/hi_603/configuration
id: hi_603-configuration
sidebar_label: Configuration
title: Haicom - HI-603 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Haicom HI-603 and practical instructions for integrating the device with Plaspy
keywords:
  - Haicom HI-603 configuration
  - HI-603 setup Plaspy
  - Haicom tracker configuration
  - HI-603 GPRS setup
  - Haicom GPS tracker setup
  - Plaspy server configuration
  - vehicle tracking setup
  - fleet tracking HI-603
  - HI-603 SMS configuration
  - HI-603 installation guide
---

# Haicom - HI-603 Configuration

This page describes the public configuration context for using the Haicom HI-603 tracker with Plaspy. It consolidates the practical server settings and the common setup workflow needed to point the HI-603 to the Plaspy platform for real time reporting. Where manufacturer commands are publicly available they are included below to help you apply the configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware revision, hardware version, installation type, and vendor tools, so review your device documentation and the manufacturer guidance when performing configuration changes.

## Configuration Overview

The configuration prepares the HI-603 to send location and event data over GPRS to the Plaspy platform. For HI-603 models, this typically involves setting the cellular APN, programming the device to use the Plaspy server endpoint, choosing the transport type if required, and configuring reporting intervals. The sample public commands below are sent via SMS and use the default device password shown in the public command examples.

- Program the device APN so it can connect to mobile data for GPRS reporting.
- Set the GPRS server address to Plaspy so the tracker sends telemetry to the correct endpoint.
- Choose the transport protocol (UDP or TCP) and confirm the device uses Plaspy port settings.
- Configure reporting or heartbeat intervals so Plaspy receives consistent updates.
- Validate connectivity by confirming the device appears in the Plaspy platform and sends data as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device preference or firmware support  
- Plaspy automatically detects the tracker protocol so the same port is used for all devices in the platform

## Typical Requirements Before Setup

- A powered HI-603 unit with an active SIM card that supports GPRS data and SMS.  
- Access to the manufacturer's configuration method for the HI-603 such as SMS commands or vendor software.  
- The device default password if required by the command sequence; the public sample uses password 0000.  
- APN credentials for the SIM operator to enable GPRS data. Use {{apn}}, {{apnu}}, {{apnp}} placeholders where appropriate.  
- A Plaspy account and access to the platform to verify device reporting after configuration.  
- Basic tools for testing SMS command delivery and device reboot if needed.

## How This Tracker Connects to Plaspy

When configured for GPRS reporting, the HI-603 initiates a data connection to the shared Plaspy server endpoint and port so the device can deliver location and event data to the platform. Plaspy then decodes the incoming protocol automatically and presents the device on the platform.

- The tracker uses GPRS to open a data session and connect to d.plaspy.com or 54.85.159.138 on port 8888.  
- The device sends periodic position updates according to the configured reporting interval.  
- Events such as SOS, geofence triggers, or speed alerts are forwarded to Plaspy for alarm handling and visibility.  
- Plaspy automatically detects and interprets the tracker protocol so no per-device port mapping is required.  
- The platform provides operational monitoring and visibility once the device successfully reports to the shared Plaspy endpoint.

## Common Configuration Workflow

1. Access the official Haicom configuration method for the HI-603, typically the SMS command interface or the vendor configuration tool.  
2. Enter the operator APN settings using the APN placeholders for your SIM operator.  
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address in the device settings.  
4. Set port 8888 for the device and ensure the device is configured to use the same port used by Plaspy.  
5. Choose UDP or TCP transport if the device requires explicit transport selection.  
6. Apply or save the configuration and restart the tracker if the device requires a reboot.  
7. Validate that the device reports to Plaspy by checking device presence and telemetry in the Plaspy platform.

## Example Configuration Commands

The HI-603 can be configured by sending SMS commands. The public sample commands below use the default device password 0000. Preserve the order when it matters for your setup and replace placeholders with your operator values.

- Note on placeholders  
  - {{apn}} is the mobile operator APN name.  
  - {{apnu}} is the APN username if required by the operator.  
  - {{apnp}} is the APN password if required by the operator.

1) Set the operator APN
```
#0000,200,{{apn}},{{apnu}},{{apnp}}
```

2) Set the GPRS server to Plaspy by IP and port
```
#0000,210,54.85.159.138,8888,8888,8888,0
```

3) Set the interval update to 60 seconds
```
#0000,250,0,60,0,0,0,0,0,0
```

Send each SMS command from an authorised phone number as described in the Haicom documentation. The password 0000 in these examples is the factory default shown in the public command set. Replace it if your device uses a different password.

## Configuration Notes

- The HI-603 supports both SMS based configuration and vendor software for programming; follow Haicom instructions for the method you use.  
- Keep APN credentials handy and replace the placeholders with the operator values before sending commands.  
- When choosing UDP versus TCP, consider network reliability and whether your carrier blocks certain transport types. Plaspy accepts both and auto detects the protocol.  
- All devices in Plaspy use the same port so use port 8888 when configuring the tracker.  
- Firmware revisions and hardware variants can change command formats or defaults; verify commands against the current Haicom documentation.

## Why Use Plaspy with This Configuration

Using the Haicom HI-603 with Plaspy provides a straightforward path to real time location visibility and event monitoring for vehicles and assets. By pointing the device to Plaspy's shared server endpoint and using the standard port and transport options, organisations can centralise tracking data, monitor alerts, and integrate operational workflows with a platform that detects device protocols automatically.

To learn more about Plaspy visit https://www.plaspy.com. For the latest model specific instructions, firmware notes, and manufacturer support details confirm the current documentation at http://www.haicom.com.tw/ as device configuration methods and firmware behavior can change over time.
