---
slug: /topten/lt02/configuration
id: lt02-configuration
sidebar_label: Configuration
title: TopTen - LT02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the TopTen LT02 tracker to Plaspy using shared server settings
keywords:
  - TopTen LT02 configuration
  - TopTen LT02 setup
  - TopTen LT02 Plaspy
  - LT02 server configuration
  - LT02 GPS tracker setup
  - tracker SMS configuration
  - GPS platform integration
  - vehicle tracking configuration
  - Plaspy tracker configuration
  - GPS tracker APN setup
---

# TopTen - LT02 Configuration

This page covers the public configuration context for using the TopTen LT02 mini GPS tracker with Plaspy. It collects the practical server values and the commonly used manufacturer SMS commands so you can prepare the device to report location and status to the Plaspy platform.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps for the LT02 can vary with firmware version, hardware revision, installation type, and vendor tools, so use the commands below as published public guidance and confirm device behavior with the manufacturer documentation when needed.

## Configuration Overview

The goal of this configuration process is to ensure your LT02 reports reliably to the Plaspy endpoint and appears correctly in the platform. For the LT02, core setup is commonly performed via SMS commands provided by the manufacturer and by confirming the device identifier that the tracker will use in Plaspy.

- Configure the LT02 to send data to the Plaspy server endpoint so location updates and events reach the platform.
- Set the network APN and GPRS server settings so the device can use mobile data for reporting.
- Verify the tracker identifier derived from the IMEI so the device maps to the correct tracker record in Plaspy.
- Validate connectivity after applying settings and confirm the device is visible in Plaspy.
- Keep manufacturer SMS commands and placeholders handy for remote reconfiguration or troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

These values are the public server settings used when configuring the LT02 to report to Plaspy.

## Typical Requirements Before Setup

- A powered LT02 unit with a working SIM card installed that supports SMS and mobile data
- Knowledge of the device IMEI so you can confirm the tracker identifier used by the LT02
- Access to the manufacturer's SMS command method or an approved configuration tool from TopTen
- The correct APN credentials for the SIM operator to enable GPRS data
- Ability to receive and send SMS to the tracker for remote configuration and verification

## How This Tracker Connects to Plaspy

When configured, the LT02 sends location and event data to the shared Plaspy endpoint and port so the device is tracked in the Plaspy platform. Plaspy uses the device identifier reported by the tracker to match incoming data to the correct account record.

- The LT02 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Choose UDP or TCP transport if the device firmware asks for a transport selection; Plaspy accepts both
- Plaspy automatically detects the tracker protocol when data arrives on port 8888
- The tracker identifier for the LT02 corresponds to the last 14 digits of the IMEI as reported in the PAR command
- Once the device is reporting, Plaspy will display location updates and event messages from the LT02

## Common Configuration Workflow

1. Access the official TopTen configuration method for the LT02, commonly SMS-based commands or the vendor tool specified by the manufacturer.
2. Enter the Plaspy server endpoint either as domain d.plaspy.com or the server IP 54.85.159.138 depending on the device options.
3. Set the server port to 8888, which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the LT02 requires explicit transport selection.
5. Configure the APN and GPRS server details using the manufacturer-provided command format, including your mobile operator APN credentials.
6. Apply or save the configuration and restart the device if required by the firmware or manufacturer instructions.
7. Validate that the LT02 reports to Plaspy and that the device identifier (last 14 digits of IMEI) appears correctly in the platform.

## Example Configuration Commands

The TopTen LT02 supports SMS-based configuration. The manufacturer provides these public commands as a standard way to restore defaults, set APN and server parameters, and verify settings. Preserve placeholders when sending commands.

- Optional initial reset to factory settings (use only when needed or for initial setup):
```
111111CLR
```

- Configure APN and the Plaspy server (replace placeholders with your SIM APN values). This command sets the network APN, the server IP, the port, reporting interval, and other runtime parameters:
```
111111WWW:IPN:54.85.159.138;COM:8888;APN:[apn],[apnu],[apnp];RPT:60;SLP:60;RUN:2;
```
Explanation of placeholders:
- [apn] — primary APN name for the mobile operator
- [apnu] — APN username if required by the operator (leave empty if not required)
- [apnp] — APN password if required by the operator (leave empty if not required)

- Check or query the current WWW settings on the device:
```
111111WWW:
```

Notes on usage:
- The order of commands matters when preparing the device; the reset command is optional and typically used only for a fresh start.
- Use SMS from a phone number authorized by the tracker (manufacturer documentation will specify authorization rules).

## Configuration Notes

- Firmware versions and hardware revisions may change the exact command syntax or available parameters; always cross-check with TopTen documentation.
- The LT02 supports SMS-based configuration as shown; an alternative manufacturer tool may be available for local configuration depending on your vendor.
- Plaspy accepts both UDP and TCP on port 8888; choose the transport option appropriate for your installation and device firmware.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so matching server and port values is critical.
- Confirm the device identifier mapping: the LT02 uses the last 14 digits of the IMEI as the tracker ID when parsed from the PAR response.

## Why Use Plaspy with This Configuration

Configuring the TopTen LT02 to report to Plaspy gives organizations centralized visibility into vehicle location, alerts, and operational status without needing device-specific endpoints per tracker. Using a single, shared Plaspy endpoint simplifies fleet onboarding and reduces per-device server configuration overhead.

To learn more about how Plaspy supports device integration and fleet monitoring, visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and manufacturer instructions for the TopTen LT02, verify details with the official TopTen website http://www.t10.cn as manufacturer configuration methods and firmware behavior can change over time.
