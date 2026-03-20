---
slug: /meitrack/mvt_100/configuration
id: mvt_100-configuration
sidebar_label: Configuration
title: Meitrack - MVT-100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack MVT-100 with Plaspy server d.plaspy.com port 8888 UDP or TCP and automatic protocol detection
keywords:
  - Meitrack MVT-100 configuration
  - Meitrack MVT-100 setup
  - MVT-100 Plaspy configuration
  - MVT-100 GPS tracker configuration
  - Meitrack server configuration
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - fleet tracking setup
  - MVT-100 SMS configuration
  - Meitrack GPRS setup
---

# Meitrack - MVT-100 Configuration

This page covers the public configuration context for using the Meitrack MVT-100 tracker with the Plaspy platform. It collects the practical, publicly available setup information needed to point an MVT-100 at Plaspy and to validate that the device can communicate with the Plaspy server endpoint. When manufacturer-side configuration is needed, this page shows the common SMS commands and the required server settings as published.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps and menus can vary by firmware version, hardware revision, installation type, and vendor tools. The MVT-100 supports SMS and GPRS configuration methods and the sample SMS commands below use the device default password 0000 as shown in the public configuration content.

## Configuration Overview

The goal of this configuration process is to prepare the MVT-100 to communicate reliably with Plaspy so the device becomes visible and reportable on the platform. The example commands provided are SMS-based public commands and focus on telling the tracker where to send data, how often to send it, and which events to report.

- Point the device at the Plaspy server endpoint so it sends location and event data to Plaspy.
- Configure the device APN and credentials so GPRS data works for reporting.
- Set an appropriate reporting interval and time zone to ensure accurate telemetry.
- Validate connectivity so the device appears in Plaspy and events are logged.
- Use SMS configuration or the manufacturer software according to the device and installer preferences.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A charged MVT-100 with access to its SMS configuration interface or the official Meitrack configuration tool.
- An active SIM card with data and SMS enabled and the correct APN information for the mobile network.
- Knowledge of the device password (the public example uses the default password 0000).
- Access to the device installer documentation or Meitrack configuration guides for your firmware revision.
- Reliable cellular coverage at the device location for GPRS connections to Plaspy.
- A phone capable of sending SMS commands or a supplier tool that can deliver the equivalent configuration.

## How This Tracker Connects to Plaspy

The MVT-100 is configured to send its telemetry and event messages over GPRS to the Plaspy server endpoint and port. Plaspy receives the packets on the shared port and automatically determines the device protocol so no per-device protocol selection is required on the server side.

- The tracker is set to a Plaspy server endpoint (either the server domain or the public IP).
- Device sends GPS location and configured event messages via GPRS to Plaspy.
- Transport can be configured as UDP or TCP depending on device support and installer preference.
- Plaspy listens on port 8888 for all supported devices and detects the protocol automatically.
- Regular position updates (configured by interval settings) and event reports allow operational monitoring in Plaspy.

## Common Configuration Workflow

1. Access the official Meitrack configuration method for your MVT-100, either SMS commands or the manufacturer software, following your firmware instructions.
2. Enter the Plaspy server address by specifying either d.plaspy.com or the IP address 54.85.159.138 in the server field or SMS command.
3. Set the server port to 8888 as all Plaspy devices use this same port.
4. Choose UDP or TCP for transport if the device requires a transport selection during setup.
5. Configure the APN and any APN username or password required by the SIM provider using the manufacturer method.
6. Apply or save the configuration and restart the device if the device or tool requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking the device status and incoming data in Plaspy.

## Example Configuration Commands

The example below is derived from available public SMS commands for the MVT-100. The sample commands use the device default password 0000. Send each line as a separate SMS to the device phone number. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your SIM provider APN settings when executing commands.

- Optional initial or factory reset (use only if you need to restore factory settings):
```text
0000,F11
```

- Set the GPRS server to the Plaspy IP, port, and APN placeholder (this command uses the public IP form):
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Note: {{apn}} is the network access point name supplied by your mobile operator. {{apnu}} and {{apnp}} are optional APN username and password placeholders.

- Set the time zone to UTC-0:
```text
0000,B36,0
```

- Set the update interval to every 1 minute:
```text
0000,A12,6,0
```

- Set event reporting configuration (example to set events to a common setting):
```text
0000,C03,0
```

If your installation uses manufacturer software instead of SMS, apply the same server address and port values in the software interface. The SMS examples above preserve the exact public command formats provided by Meitrack.

## Configuration Notes

- Firmware and menu layouts can vary between MVT-100 units. Always confirm commands and menu names against the firmware version on your device.
- The MVT-100 supports SMS-based configuration as shown; if you prefer, use official Meitrack tools for bulk provisioning or remote management.
- Choose UDP or TCP based on network characteristics and your operational policies; Plaspy accepts both and detects the protocol automatically.
- Ensure the APN, APN username, and APN password match what your SIM provider requires; incorrect APN is the most common cause of GPRS failure.
- Keep the device time zone and reporting interval aligned with your monitoring needs so telemetry aligns with Plaspy reports.

## Why Use Plaspy with This Configuration

Configuring the Meitrack MVT-100 to report to Plaspy gives fleet managers a consistent, platform-level view of vehicle locations and event activity. With the MVT-100 reporting to the shared Plaspy endpoint, organizations gain real-time visibility, scheduled reporting, and event-driven alerts that support operations, safety, and asset management.

To learn more about Plaspy and how it integrates with devices like the MVT-100, visit https://www.plaspy.com. For the most current device-specific setup details, firmware notes, and official command reference, verify the latest documentation on the manufacturer site https://www.meitrack.com/
