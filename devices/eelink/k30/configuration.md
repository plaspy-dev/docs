---
slug: /eelink/k30/configuration
id: k30-configuration
sidebar_label: Configuration
title: EElink - K30 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink K30 wearable GPS tracker with Plaspy server settings and SMS commands for integration
keywords:
  - EElink K30 configuration
  - EElink K30 setup
  - EElink K30 Plaspy
  - K30 GPS tracker configuration
  - K30 server configuration
  - K30 SMS commands
  - wearable GPS tracker setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - GPS tracker platform integration
---

# EElink - K30 Configuration

This page documents the public configuration context for using the EElink K30 wearable GPS tracker with Plaspy. It focuses on the practical server settings, SMS-based configuration commands provided by the manufacturer, and the required steps to prepare the device so it can report location and event data to Plaspy for maps, alerts, and historical reporting.

Plaspy uses a shared server endpoint and the same port for all supported devices and it automatically detects the tracker protocol. Exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools, so follow the guidance here together with the official EElink documentation and any device-specific instructions.

## Configuration Overview

Configuring the K30 for Plaspy prepares the tracker to deliver its location and telemetry to the platform in a reliable, repeatable way. The typical process sets network parameters, chooses the Plaspy server endpoint, and verifies the device is successfully reporting.

- Set APN and network parameters so the device can send data over the cellular network and accept SMS commands for configuration.
- Point the device to the Plaspy server endpoint and port so the platform can receive location fixes and events.
- Select the transport method if required and ensure the tracker is using the supported connection type.
- Tune reporting intervals and timers to balance update frequency and battery life for the use case.
- Verify device parameters and confirm the K30 appears in the Plaspy platform and is sending expected telemetry.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged K30 device with access to its SMS configuration phone number or the manufacturer configuration tool.
- An active SIM card installed in the K30 with data enabled and permission to send and receive SMS for remote setup.
- APN credentials for the mobile operator to configure GPRS data access for the tracker.
- Access to EElink configuration instructions or software to perform initial setup, or an SMS capable phone to send SMS commands.
- A Plaspy account and the ability to register or identify the device in the platform after it begins reporting.

## How This Tracker Connects to Plaspy

The K30 is configured to report location and event data to the shared Plaspy server endpoint and port. Once network settings and the server configuration are applied, the tracker sends periodic location updates and event notifications so Plaspy can display them and trigger alerts.

- The tracker sends position and telemetry to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device selection; Plaspy accepts either and detects the protocol automatically.
- Regular interval updates and motion or SOS events allow Plaspy to show live location and status on maps and dashboards.
- Battery state, SOS activations, and other device events reported by the K30 become visible in Plaspy for monitoring and alerting.
- Successful configuration ensures the K30 appears in Plaspy and contributes to historical and real time reports.

## Common Configuration Workflow

1. Access the official EElink configuration method or software, or prepare an SMS capable phone to send configuration commands.  
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138 as provided by Plaspy.  
3. Set the port to 8888, noting Plaspy uses the same port for all devices.  
4. Choose UDP or TCP if the device requires a transport selection. Plaspy supports both and will auto detect the active protocol.  
5. Enter APN and any operator credentials required for GPRS or data connectivity.  
6. Apply or save the configuration and restart the device if the device requires a reboot for settings to take effect.  
7. Validate that the device reports to Plaspy and appears on the platform with expected telemetry and location updates.

## Example Configuration Commands

The EElink K30 supports SMS-based configuration. The following commands are public manufacturer commands that you can send as SMS messages to the device number. Preserve placeholders and replace them with operator specific values where indicated.

- Optional initial factory reset (use only if needed):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn], [apnu], and [apnp] with your operator APN, username, and password as required. The username and password fields are optional and may be omitted if not used by your operator:
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to use the Plaspy domain on port 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to use the Plaspy server IP on port 8888:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the periodic location update interval to 60 seconds:
```text
TIMER,60#
```

- Verify current parameters on the device:
```text
PARAM#
```

Notes on placeholders and usage:
- [apn] is the mobile network APN string required for data. Replace it with your carrier APN.
- [apnu] and [apnp] are APN username and password if required by the carrier. Leave them out if not applicable.
- The SERVER commands demonstrate both the domain option and the direct IP option. Either is acceptable; both point the device to Plaspy on port 8888.
- Send commands as SMS to the device phone number following EElink instructions. Use the factory reset only when required.

## Configuration Notes

- Firmware and hardware revisions can change command formats or available settings. Confirm commands match the device firmware before applying them in production.
- Choose UDP or TCP based on site policy or network conditions; Plaspy accepts both and will auto detect the protocol the device uses.
- SMS based configuration is a standard manufacturer method for the K30 but you may also use official EElink tools or platform interfaces when available.
- Always verify APN and account details with the SIM provider to ensure the device can create a GPRS data session.
- After applying server and network settings, use the PARAM# command or the Plaspy platform to validate the device is reporting correctly.

## Why Use Plaspy with This Configuration

Configuring the EElink K30 to report to Plaspy provides a simple path to centralized visibility for personnel and asset safety. Organizations can receive real time locations, SOS events, and basic activity telemetry on Plaspy maps and dashboards, which helps with rapid response, compliance, and operational oversight.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer details verify information on the EElink website https://www.eelink.com.cn/. Manufacturer specifications and configuration methods can change over time so confirm current details before large scale deployment.
