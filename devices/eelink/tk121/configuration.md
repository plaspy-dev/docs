---
slug: /eelink/tk121/configuration
id: tk121-configuration
sidebar_label: Configuration
title: EElink - TK121 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK121 to connect with Plaspy including server settings SMS commands and setup checks
keywords:
  - EElink TK121 configuration
  - EElink TK121 setup
  - EElink TK121 server configuration
  - EElink TK121 Plaspy
  - Plaspy tracker configuration
  - GPS tracker SMS commands
  - MoveLink tracker setup
  - vehicle tracker configuration
  - TK121 APN settings
  - TK121 timer settings
---

# EElink - TK121 Configuration

This page covers the public configuration context for using the EElink TK121 GPS tracker with the Plaspy platform. It collects the practical setup steps and publicly available SMS configuration commands used to point the TK121 at Plaspy so the device can report location and events into a Plaspy account. Use this document as a practical guide; consult the official manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary with firmware, hardware revision, installation type, or vendor tools, so treat the commands and workflow here as the common, publicly shared approach for integrating TK121 devices with Plaspy.

## Configuration Overview

This configuration process prepares the TK121 to communicate with Plaspy so location and event data appear in the platform reliably. The public configuration flow commonly uses SMS commands or the manufacturer configuration tool to set APN, server endpoint, reporting interval, and optional factory reset or verification commands.

- Configure the device APN so it can use cellular data for GPRS reporting.
- Point the device to the Plaspy server endpoint so telemetry is delivered to Plaspy.
- Set a suitable reporting interval such as 60 seconds to match monitoring needs.
- Optionally restore factory settings before a fresh deployment to avoid conflicting parameters.
- Verify parameters remotely using the device parameter check command to confirm connectivity.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

These values are the shared Plaspy endpoint settings used for TK121 devices. All devices in Plaspy use the same port and Plaspy will detect the correct protocol automatically.

## Typical Requirements Before Setup

- A powered and accessible TK121 unit with a valid SIM card that can use mobile data and receive SMS.
- APN information for the SIM operator to allow GPRS connectivity.
- Access to the EElink manufacturer SMS command method or an official EElink configuration tool.
- A Plaspy account configured to accept device connections and the device identified in the platform.
- Basic familiarity with sending SMS commands from a mobile phone or service and checking device responses.

## How This Tracker Connects to Plaspy

The TK121 is configured to send GPRS uplink data to Plaspy using the shared server endpoint and port. Once the device is pointed at Plaspy and the APN is set, the tracker will report position updates and events so Plaspy can display live location and trigger alerts or workflows.

- The device reports GNSS positions and fallbacks (LBS) to the Plaspy server endpoint.
- Telemetry and event data are delivered to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol when the connection is established.
- Transport can be configured as UDP or TCP depending on device requirement; port remains 8888.
- Reported updates and alarms become visible in Plaspy for monitoring and incident handling.

## Common Configuration Workflow

1. Access the official EElink configuration method for your TK121 such as SMS commands, the EElink configuration tool, or vendor software.
2. Set the device APN using the APN command with your operator credentials.
3. Enter the Plaspy server by configuring either the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the port to 8888 in the server configuration.
5. Choose UDP or TCP if the device requires an explicit transport selection.
6. Apply or save the configuration and restart the tracker if required by the device.
7. Validate that the device reports to Plaspy by checking parameters and observing the device status in Plaspy.

If you use the SMS method shown in the Example Configuration Commands below, follow the commands in the order shown and use PARAM# to verify settings.

## Example Configuration Commands

The TK121 supports configuration by SMS. Below are the publicly available SMS commands presented in order. Send each command as an SMS to the tracker phone number. Keep placeholders as shown.

- Optional initial factory reset (only use if you need to clear existing settings)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
Note: [apn] is the APN name for your SIM operator. If the operator requires an APN username or password use [apnu] and [apnp] as provided by your operator. Keep these placeholders and replace them with the real values when sending.
```text
APN,[apn][ ,[apnu],[apnp]]#
```

- Set the GPRS server using the Plaspy domain (use this form to send by domain)
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server using the Plaspy IP (use this form to send by IP)
```text
SERVER,0,54.85.159.138,8888#
```

- Set the periodic update interval to 60 seconds
```text
TIMER,60#
```

- Check current parameters on the device
```text
PARAM#
```

Use the SERVER command variant that matches your preference for domain or IP. After sending the SERVER and APN commands, give the device a short time to establish GPRS connectivity and then use PARAM# to confirm.

## Configuration Notes

- Firmware and hardware revisions may alter the exact SMS command syntax or available parameters; always verify against the device firmware notes.
- SMS based configuration is commonly supported for TK121 but manufacturer tools or vendor portals may offer a GUI alternative.
- Choose UDP or TCP according to installer preference or network constraints; Plaspy accepts either on port 8888.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so consistent use of port 8888 simplifies multi device fleets.
- Keep APN credentials secure and confirm operator settings before deployment to avoid connectivity delays.

## Why Use Plaspy with This Configuration

Configuring the EElink TK121 to use Plaspy provides centralized visibility of location, ignition state, and alarm events for fleet operations, security monitoring, and incident response. Using the shared Plaspy endpoint and automatic protocol detection reduces per-device configuration complexity and helps standardize deployments across mixed fleets.

Learn more about how Plaspy can manage TK121 devices and other fleet trackers at https://www.plaspy.com. For the most current device specific commands, firmware details, and manufacturer guidance verify information with the official EElink documentation at https://www.eelink.com.cn/ as methods and firmware behavior can change over time.
