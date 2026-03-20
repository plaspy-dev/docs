---
slug: /topten/mt35/configuration
id: mt35-configuration
sidebar_label: Configuration
title: TopTen - MT35 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopTen MT35 and how to connect the tracker to Plaspy using shared server settings and SMS commands
keywords:
  - TopTen MT35 configuration
  - TopTen MT35 setup
  - MT35 Plaspy
  - TopTen GPS tracker configuration
  - vehicle tracking setup
  - GPS tracker server configuration
  - fleet tracking Plaspy
  - MT35 SMS configuration
  - TopTen tracker guide
  - tracker APN settings
---

# TopTen - MT35 Configuration

This page describes the public configuration context for using the TopTen MT35 tracker with Plaspy. It collects the known, publicly available setup steps and commands that are commonly used to prepare an MT35 for reporting to Plaspy. Use this guide as a practical reference to get the device talking to Plaspy and to validate key settings before adding the device to your account.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol, so many devices only need the same endpoint and port to be reachable. Manufacturer-side setup steps for the MT35 can vary by firmware version, hardware revision, install type, and vendor tools. The MT35 supports SMS configuration in its public documentation and the commands below reflect that public SMS flow.

## Configuration Overview

Configuring the MT35 for Plaspy prepares the tracker to send location and event data to the Plaspy platform and ensures the device ID used by Plaspy matches the tracker IMEI. The core goal is to set the device APN and server endpoint, verify connectivity, and confirm reporting appears in Plaspy.

- Configure the tracker APN and the GPRS server pointing to Plaspy so the device can open a data connection.
- Ensure the device identifier used by Plaspy matches the MT35 IMEI format used by the manufacturer.
- Validate transport and port settings so data reaches the Plaspy server on the shared port.
- Test reporting and confirm the tracker is visible and sending regular position updates to Plaspy.

## Plaspy Server Settings

When configuring any device for use with Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 as supported by the device
- Plaspy automatically detects the tracker protocol so the platform accepts common protocols on the shared port

Note that all devices reporting to Plaspy use the same port, so use port 8888 in device configuration.

## Typical Requirements Before Setup

- A powered MT35 tracker installed or temporarily powered for configuration.
- An active SIM card with data or SMS service and the correct APN credentials for the mobile provider.
- Access to the device IMEI to derive the tracker identifier used by Plaspy (the MT35 uses the IMEI based identifier shown in the PAR command; the public guidance maps the tracker ID to the last 14 digits of the 15 digit IMEI).
- Ability to send SMS commands to the device or use the official manufacturer configuration method or tool.
- Basic knowledge of the APN, APN username, and APN password required by your SIM provider.
- A way to observe the device reporting (either via Plaspy visibility once added or by checking device reply SMS messages).

## How This Tracker Connects to Plaspy

The MT35 is configured to report to the shared Plaspy endpoint and port. Once the device has a valid cellular connection and the APN/server settings are in place, it will open a data session to send location and event reports to Plaspy so the device becomes visible and manageable on the platform.

- The tracker is pointed at the Plaspy server domain or IP and port so data packets reach the platform.
- Data transport can be configured as UDP or TCP depending on device firmware options and network conditions.
- Plaspy automatically detects the tracker protocol when data arrives on the shared port so explicit protocol selection is often not required on the server side.
- Regular reporting intervals and sleep/run parameters control how frequently the MT35 sends position updates to Plaspy.
- Event and alarm messages are forwarded to Plaspy where they are available for monitoring and alerting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands as documented by TopTen.
2. Enter the Plaspy server domain or IP address in the device configuration: use d.plaspy.com or 54.85.159.138 as the server endpoint.
3. Set the server port to 8888. Remember that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport on the device if the MT35 firmware requires a transport selection.
5. Configure the APN and APN credentials for your SIM provider in the same configuration command or tool.
6. Apply or save the configuration and restart the MT35 if the device requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking for device connectivity in the platform or by using the tracker verification SMS command.

## Example Configuration Commands

The MT35 supports SMS-based configuration in public documentation. The following commands are the publicly documented SMS commands to restore factory settings, set the APN and GPRS server, and to check settings. Preserve the placeholders when you replace them with your carrier values.

- Optional initial factory reset (use only when needed or during initial setup):
```text
111111CLR
```

- Set APN and GPRS server configuration to point to Plaspy
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:[apn],[apnu],[apnp];RPT:60;SLP:60;RUN:2;
```
Explanation of placeholders:
- [apn] = APN name supplied by your SIM provider
- [apnu] = APN username if required by the SIM provider (leave empty if not required)
- [apnp] = APN password if required by the SIM provider (leave empty if not required)

This command configures the device to use the Plaspy server IP 54.85.159.138 on port 8888 and includes reporting and sleep parameters (as shown in the public command). It is also acceptable to use the server domain d.plaspy.com in place of the IP address when the device supports domain names.

- Verify current WWW settings on the tracker:
```text
111111WWW:
```

Tracker identifier note
- TopTen trackers work in Plaspy with the tracker ID that corresponds to the last 14 digits of the IMEI as reported in the PAR command. For a 15 digit IMEI, remove the first digit to derive the tracker identifier the device reports to Plaspy.

## Configuration Notes

- Firmware differences can change the exact SMS command syntax and available parameters. Confirm commands against the MT35 firmware documentation.
- The device supports SMS configuration as shown above; software tools or a PC utility provided by the manufacturer may also be available and can simplify batch setup.
- Choose UDP or TCP according to your network environment; Plaspy accepts either transport on the common port and will detect the protocol automatically.
- Keep APN credentials accurate and test data connectivity independently before relying on server reporting.
- All devices configured for Plaspy should use port 8888 so that the platform can receive telemetry on the shared endpoint.

## Why Use Plaspy with This Configuration

Using the MT35 with Plaspy gives a straightforward path to vehicle visibility and event monitoring. By configuring the APN and pointing the device at the Plaspy server endpoint on the shared port, organizations can centralize location reports, alarms, and operational data from an MT35 fleet into one platform for tracking and analysis.

To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific configuration methods and firmware behavior with the official manufacturer documentation at http://www.t10.cn since manufacturer specifications and setup steps can change over time.
