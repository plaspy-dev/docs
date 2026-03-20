---
slug: /bofan/pt_502/configuration
id: pt_502-configuration
sidebar_label: Configuration
title: Bofan - PT-502 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Bofan PT-502 to connect with Plaspy servers for GPRS and SMS tracking
keywords:
  - Bofan PT-502 configuration
  - PT-502 setup Plaspy
  - Bofan PT-502 server configuration
  - PT-502 GPRS configuration
  - PT-502 SMS setup
  - Bofan GPS tracker configuration
  - PT-502 tracking software configuration
  - vehicle tracker Plaspy setup
  - PT-502 platform integration
  - Bofan PT-502 tracking setup
---

# Bofan - PT-502 Configuration

This page covers the public configuration context for using the Bofan PT-502 tracker with Plaspy. It focuses on the practical, publicly available steps and commands that allow the PT-502 to communicate with Plaspy servers by GPRS or SMS control where applicable.

Plaspy uses shared server settings across supported devices and automatically detects each tracker protocol, while exact manufacturer-side steps can vary by firmware revision, hardware variant, installation type, and vendor tools. Use the guidance here together with your PT-502 documentation and vendor instructions.

## Configuration Overview

The goal of this configuration is to prepare the PT-502 to report location and events to Plaspy reliably using the shared Plaspy server endpoint and port. Where the tracker supports SMS-based configuration, that method is commonly used to set identifiers, APN, server address, and reporting intervals.

- Configure the device identifier so Plaspy can associate messages with the correct unit.
- Set the APN and any optional APN username or password to enable GPRS data.
- Point the tracker to Plaspy server d.plaspy.com or the Plaspy server IP and set port 8888.
- Choose UDP or TCP transport if the device requires a transport selection.
- Set a suitable reporting interval to match your tracking and data usage needs.
- Validate connectivity so the device becomes visible in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP (the PT-502 may be configured using UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A SIM card with data enabled and any required APN information from your mobile operator.  
- A charged device or vehicle power connection so the tracker is powered during configuration.  
- Access to the PT-502 SMS configuration method or the official manufacturer configuration tool.  
- The device IMEI and the device SMS password (the public default password in manufacturer samples is 000000).  
- A phone capable of sending SMS to the device if using SMS-based configuration.  
- Confirmation of network coverage and GPRS availability for the installed SIM.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the PT-502 is set to send its location and status data to the shared Plaspy server endpoint and port. Plaspy receives the messages and matches them to the device identifier so the unit becomes visible and reportable in the platform.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.  
- The device identifier (GID or similar) is used to map data to the correct unit in Plaspy.  
- Reporting intervals determine how often the device sends location updates to Plaspy.  
- Transport can be UDP or TCP depending on device configuration; Plaspy accepts both and auto detects the protocol.  
- After successful configuration the device should appear and send telemetry to Plaspy for operational monitoring.

## Common Configuration Workflow

1. Access the official Bofan PT-502 configuration method such as SMS commands or the vendor tool documented by the manufacturer.  
2. Enter the Plaspy server as either d.plaspy.com or as the server IP 54.85.159.138 in the device server setting.  
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP if the device requires you to select a transport protocol.  
5. Configure the device identifier (14 digit GID or the identifier method specified by Bofan), APN, and reporting interval.  
6. Apply or save the configuration on the device and restart the tracker if the manufacturer recommends a reboot.  
7. Validate that the device reports to Plaspy and appears in the platform as an active unit.

## Example Configuration Commands

The PT-502 supports SMS-based configuration. Below are public example SMS commands extracted from the device configuration samples. Replace placeholders as noted before sending SMS. The sample default SMS password shown in public samples is 000000.

- Factory reset (optional or initial setup)
```text
000000DFT
```

- Set 14 digit identifier for Plaspy (use the last 14 digits of the IMEI)
```text
000000GID<14-digit-identifier>
```
Explanation: replace \\<14-digit-identifier> with the last 14 digits of the device IMEI. This identifier is used by Plaspy to associate the device.

- Set the APN for your mobile operator
```text
000000APN[apn],[apnu],[apnp]
```
Explanation: [apn] is the APN name required by your operator. [apnu] and [apnp] are optional APN username and APN password placeholders and should be included only if your carrier requires them.

- Set the GPRS server to Plaspy (server IP and port)
```text
000000SVR54.85.159.138,8888
```
Note: You can use d.plaspy.com instead of the numeric IP where the device supports domain names, but the public sample sets the server by IP and port.

- Set the update interval to 1 minute
```text
000000GTI60
```
Explanation: GTI60 configures a 60 second reporting interval. Adjust as needed for your tracking requirements and data plan.

## Configuration Notes

- Firmware and hardware revisions can change available commands and behavior; check the official Bofan documentation for firmware specific guidance.  
- The PT-502 supports SMS-based setup in public samples; you may also use manufacturer tools if provided.  
- Choose between UDP and TCP depending on network conditions and the device option; Plaspy will accept either and auto detect the protocol.  
- Ensure APN credentials are entered correctly; incorrect APN settings are the most common reason for failed GPRS connectivity.  
- All devices in Plaspy use port 8888 and Plaspy will map incoming messages to devices by identifier once configured.

## Why Use Plaspy with This Configuration

Using the PT-502 with Plaspy gives organizations straightforward visibility into vehicle locations and events using the shared Plaspy server settings. The combination of the PT-502's SMS and GPRS configuration options with Plaspy's automatic protocol detection and single shared port simplifies large scale deployment and device onboarding.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific instructions, firmware notes, and official command references confirm details with the manufacturer at https://www.bofancloud.com/ since device configuration methods and firmware behavior can change over time.
