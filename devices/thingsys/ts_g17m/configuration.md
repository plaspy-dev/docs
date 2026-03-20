---
slug: /thingsys/ts_g17m/configuration
id: ts_g17m-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17M Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ThingSys TS-G17M working with Plaspy including server settings SMS commands and setup workflow
keywords:
  - ThingSys TS-G17M configuration
  - ThingSys TS-G17M setup
  - TS-G17M Plaspy configuration
  - TS-G17M server configuration
  - ThingSys GPS tracker setup
  - TS-G17M GPS tracker configuration
  - motorcycle GPS tracker ThingSys
  - Plaspy device configuration
  - Plaspy GPS tracker integration
  - vehicle tracking TS-G17M
---

# ThingSys - TS-G17M Configuration

This page describes the public configuration context for using the ThingSys TS-G17M with the Plaspy platform. It focuses on the practical server settings, an example SMS-based setup that is publicly available, and the typical workflow required to make the device report into Plaspy for live tracking, alarms, and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol while the exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TS-G17M supports GPRS and SMS configuration methods in public documentation, and the example commands below reflect the publicly available SMS command sequence for initial setup.

## Configuration Overview

Configuring the TS-G17M for Plaspy means preparing the device so it connects reliably to Plaspy server endpoints and reports location and alarm telemetry to the platform. The public device configuration flow commonly uses SMS commands or the vendor configuration tool to set APN credentials and the GPRS server.

- Point the tracker to the Plaspy server endpoint so GPRS telemetry is delivered to Plaspy.
- Configure APN, APN username, and APN password so the device can establish a mobile data session.
- Verify device password and optional factory reset when starting fresh or troubleshooting.
- Save or apply settings and confirm the tracker is sending data to Plaspy.
- Validate visibility in Plaspy and test alarms or remote controls to confirm end to end operation.

## Configuration Overview

Configuring the TS-G17M for Plaspy means preparing the device so it connects reliably to Plaspy server endpoints and reports location and alarm telemetry to the platform. The public device configuration flow commonly uses SMS commands or the vendor configuration tool to set APN credentials and the GPRS server.

- Point the tracker to the Plaspy server endpoint so GPRS telemetry is delivered to Plaspy
- Configure APN, APN username, and APN password so the device can establish a mobile data session
- Verify device password and perform an optional factory reset when starting fresh or troubleshooting
- Save or apply settings then validate the device appears in Plaspy
- Test reporting by forcing a GPS update or triggering a known alarm to confirm end to end delivery

## Plaspy Server Settings

- Server domain d.plaspy.com for devices and vendor tools that accept a DNS name
- Server IP 54.85.159.138 for devices that require an IP address
- Port 8888 used by Plaspy for all supported devices
- Transport support for UDP or TCP depending on the tracker firmware and configuration option
- Plaspy automatically detects the tracker protocol so the same port and endpoint can serve multiple device types

## Typical Requirements Before Setup

- A powered and installed TS-G17M with access to the device SMS interface or the official ThingSys configuration tool
- An active SIM with mobile data enabled and the correct APN credentials for the mobile operator
- Knowledge of the device password; the public example uses the factory default password 123456
- Access to manufacturer documentation or release notes for your firmware revision when available
- Coverage for GPRS/TCP or SMS delivery so the tracker can send data to Plaspy
- Administrative access to Plaspy to register or verify the device after it begins reporting

## How This Tracker Connects to Plaspy

The TS-G17M is configured to send its telemetry and alarms to Plaspy over the configured GPRS server endpoint and port. Plaspy receives location, status, and alarm messages and maps them into the platform for real time tracking, event alerts, and historical playback.

- The tracker reports to the shared Plaspy server endpoint and port configured on the device
- Telemetry and alarms are delivered via GPRS/TCP or GPRS/UDP, depending on the device setting
- Plaspy automatically detects the protocol and processes incoming messages for the correct device type
- Alarms and events such as SOS, vibration, low battery, and ACC state are forwarded to Plaspy for notification and logging
- Successful setup results in visible device position updates and event logs inside Plaspy

## Common Configuration Workflow

1. Access the official ThingSys configuration method for your device such as SMS commands or vendor software. This is the manufacturer supported interface for changing server and APN settings.
2. Ensure the device has an active SIM and correct APN information ready for entry.
3. Enter the Plaspy server endpoint by specifying d.plaspy.com or the IP 54.85.159.138 according to your device command method.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and, if recommended by the manufacturer, restart or power cycle the device.
6. Validate that the device reports to Plaspy by checking device activity and location updates within the Plaspy platform.

## Example Configuration Commands

The following SMS commands are the public example steps provided for the TS-G17M. These commands are sent as SMS messages to the device. The default device password used in the example is 123456. Preserve the placeholders when entering operator specific values.

- Optional initial factory reset (use only when needed as part of a fresh setup)
```text
FORMAT
```

- Set the operator APN
```text
apn123456 [apn]
```

- Set the APN username
```text
apnuser123456 [apnu]
```

- Set the APN password
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server using the public Plaspy IP and port
```text
ip54.85.159.138 8888
```

- Check current settings
```text
CXZT
```

Notes on the commands above
- The examples show the public SMS syntax as documented. Keep the command order when applying the initial network configuration.
- Placeholders explained: [apn] is the mobile operator APN string, [apnu] is the APN username when required, and [apnp] is the APN password when required.
- If your firmware supports specifying a DNS name instead of an IP, point the server to d.plaspy.com on port 8888 using the manufacturer recommended syntax or tool. Do not change the port; Plaspy uses port 8888 for all supported devices.

## Configuration Notes

- Firmware variations may change exact SMS syntax or command prefixes; always verify the command format for your firmware revision.
- Manufacturer tools or vendor configuration software may offer the same settings via a GUI; use the official ThingSys method where available.
- Choose UDP or TCP based on device capability and network reliability; Plaspy will accept either and auto detect the protocol.
- Default password 123456 is shown in the public example; change device passwords where possible for security.
- Use the factory reset command only when required during initial commissioning or troubleshooting.

## Why Use Plaspy with This Configuration

Using the TS-G17M with Plaspy centralizes location, alarm, and operational telemetry into a single platform so teams can monitor assets, receive events, and perform remote interventions such as relay-based immobilization. The shared Plaspy server settings and automatic protocol detection simplify integration across device fleets by reducing the need for device-specific server ports.

To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the most current device specific configuration instructions, firmware behavior, and manufacturer details verify the latest information on the official ThingSys website https://www.thingsys.com/
