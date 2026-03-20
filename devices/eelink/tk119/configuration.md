---
slug: /eelink/tk119/configuration
id: tk119-configuration
sidebar_label: Configuration
title: EElink - TK119 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for EElink TK119 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - EElink TK119 configuration
  - EElink TK119 setup
  - EElink TK119 server configuration
  - EElink TK119 Plaspy
  - TK119 GPS tracker setup
  - TK119 server settings
  - EElink tracker configuration
  - Plaspy device configuration
  - MoveLink EELINK configuration
  - vehicle tracker configuration
---

# EElink - TK119 Configuration

This page describes the public configuration context for using the EElink TK119 tracker with Plaspy. It focuses on the practical server settings and manufacturer-visible setup steps that allow the TK119 to report location and events to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The TK119 supports SMS based configuration commands as a common method to set APN and server values needed to connect to Plaspy.

## Configuration Overview

The goal of configuration is to prepare the TK119 so it can communicate reliably with Plaspy, report position and alarms, and be visible in the platform. For TK119 units that support SMS configuration, a short set of SMS commands can set timezone, APN, the Plaspy server endpoint, and the reporting interval.

- Set APN so the device can establish GPRS data for reporting to Plaspy.
- Configure the device to report to the Plaspy server using the shared endpoint and port.
- Choose transport (UDP or TCP) if the device requires explicit selection.
- Define the reporting interval so location updates appear at the desired cadence in Plaspy.
- Verify configuration with the device parameter check command to confirm connectivity and settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport can be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept MoveLink EELINK connections and other supported protocols

## Typical Requirements Before Setup

- Device powered and installed or temporarily powered for configuration
- Active SIM card with data and SMS capability and knowledge of the carrier APN
- Access to a phone or SMS gateway to send configuration SMS commands if using SMS setup
- Access to the manufacturer's configuration instructions or software for model TK119
- A Plaspy account or platform access to confirm the device reports after configuration
- Basic device identification information such as IMEI to match the tracker in Plaspy

## How This Tracker Connects to Plaspy

When configured with the Plaspy server settings, the TK119 establishes a GPRS data connection and sends its location, alarms, and status messages to the shared Plaspy endpoint. Plaspy receives those messages on the shared port and automatically determines the correct protocol handler to process device messages.

- The device is configured to report to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- The tracker sends periodic position updates and event alarms to Plaspy for real time display.
- Plaspy automatically detects the tracker protocol so no platform-side port variation is required.
- Alarms and input states reported by the TK119 appear in Plaspy dashboards and logs for monitoring and notifications.
- Transport can use UDP or TCP depending on device preference and network conditions.

## Common Configuration Workflow

1. Access the official EElink TK119 configuration method or software. For many TK119 deployments, SMS configuration is supported and is listed in the device documentation.
2. Prepare the SIM and confirm carrier APN settings that the device will use for GPRS.
3. Enter the Plaspy server address by setting either d.plaspy.com or 54.85.159.138 as the server host.
4. Set the port to 8888 and choose UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration on the device (for SMS this means sending the SMS commands and waiting for confirmation).
6. Restart or power cycle the device if required by the device or firmware to apply new server settings.
7. Validate that the device is reporting to Plaspy by checking device activity in Plaspy and using device parameter query commands if available.

## Example Configuration Commands

The TK119 can be configured by sending SMS messages with specific commands. The following public commands are presented in the order shown in the manufacturer guidance. Label the factory reset command as optional and use it only when needed.

- Optional initial factory reset (only if you need to return device to factory defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0 (example command)
```text
GMT,E,0#
```

- Set the operator APN
Note: Replace the placeholder [apn] with your carrier APN. If your carrier requires APN username and password, include [apnu] and [apnp] as shown.
```text
APN,[apn]#
```
Or with optional username and password:
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy using the domain and the Plaspy shared port
Use the domain form to set the Plaspy server host (Plaspy automatic protocol detection and shared port 8888 apply):
```text
SERVER,1,d.plaspy.com,8888#
```
Or set the server using the Plaspy server IP address if preferred:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to every 60 seconds (adjust as needed)
```text
TIMER,60#
```

- Verify current parameters on the device
```text
PARAM#
```

Send each command as an SMS to the device IMEI number. The exact syntax and responses can vary by firmware; consult the device documentation if commands do not behave as expected. Remember that Plaspy uses the same port 8888 for all devices and will auto detect the tracker protocol after the server is set.

## Configuration Notes

- Manufacturer firmware versions and hardware revisions can change command syntax or supported features; always confirm with the latest EElink documentation.
- Choose UDP or TCP according to device behavior and network reliability; some deployments prefer UDP for lower overhead while others use TCP for more reliable delivery.
- SMS based setup is a common public method for TK119 models and is suitable when local access to the device is limited.
- Keep APN placeholders [apn], [apnu], and [apnp] intact when preparing commands and replace them with carrier values where required.
- The TIMER command sets how often the device sends position updates; adjust it to balance reporting granularity and data usage.

## Why Use Plaspy with This Configuration

Using the TK119 with Plaspy provides organizations with centralized visibility into vehicle location, alarms, and operational status. Configuring the tracker to report to Plaspy's shared server endpoint and port allows rapid integration so position updates and incident alerts appear in dashboards and reporting tools without custom backend changes.

To learn more about Plaspy and supported device integration options visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer documentation can change over time; verify the latest instructions and command syntax on the official EElink site https://www.eelink.com.cn/ before deploying.
