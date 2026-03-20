---
slug: /tzone/tz_rd05/configuration
id: tz_rd05-configuration
sidebar_label: Configuration
title: TZone - TZ-RD05 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TZone TZ-RD05 and Plaspy server setup including SMS APN and GPRS settings
keywords:
  - TZone TZ-RD05 configuration
  - TZone TZ-RD05 setup
  - TZ-RD05 Plaspy
  - Plaspy configuration
  - TZone configuration guide
  - TZ-RD05 SMS commands
  - APN configuration
  - GPRS server setup
  - tracker server settings
  - device configuration TZone
---

# TZone - TZ-RD05 Configuration

This page documents the public configuration context for using the TZone TZ-RD05 with the Plaspy platform. It summarizes the practical steps and public commands that are commonly used to point an eligible device to Plaspy so the device can report into the platform. Use this guide together with the device manufacturer documentation for complete device details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. Where public SMS or GPRS commands are available they are shown below; always verify details against the TZone documentation for the most current behavior.

## Configuration Overview

The goal of this configuration process is to prepare the TZ-RD05 to communicate reliably with Plaspy and to validate connectivity so the device becomes visible in the platform. The TZ-RD05 manufacturer-supplied commands can be used to set APN, update interval, and the GPRS server so the reader reports to Plaspy.

- Configure the device network settings so it can establish GPRS data connections or send required reports.
- Set the operator APN used by the device for mobile data access.
- Point the device to the Plaspy server endpoint and port so Plaspy receives telemetry.
- Define the reporting interval so location or event data reaches Plaspy at the expected cadence.
- Validate the device is online and reporting to Plaspy after applying settings.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the device or issuing GPRS server commands:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may require selecting UDP or TCP)
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy uses the same port for all supported devices. Configure the TZ-RD05 to report to the Plaspy endpoint using either the domain or the IP address and port 8888.

## Typical Requirements Before Setup

- Access to the TZ-RD05 physical device and any required installer credentials.
- An active SIM card with a mobile data plan and correct APN parameters for the mobile operator.
- Ability to send SMS commands to the device if using SMS-based configuration as provided by the manufacturer.
- Knowledge of the desired reporting interval and any vendor configuration passwords required for commands.
- A Plaspy account or project prepared to receive and display device data (verify device ID or IMEI registration requirements with Plaspy).
- The device should be powered and have network coverage during configuration.

## How This Tracker Connects to Plaspy

When configured, the device is set to report to the shared Plaspy endpoint so the platform can ingest the device messages and map them to an account.

- The tracker is configured with Plaspy server settings (domain or IP) and port 8888 so data is delivered to Plaspy.
- The device uses its mobile data connectivity to open a TCP or UDP session to the Plaspy server.
- Plaspy automatically detects the tracker protocol and processes incoming device messages accordingly.
- Reports sent by the device become visible in Plaspy for monitoring and event handling.
- Validating connectivity ensures the device appears online and sending updates at the configured interval.

## Common Configuration Workflow

1. Access the official TZone configuration method for the TZ-RD05 (manufacturer SMS commands, web/serial tool, or vendor software) as documented by TZone.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP address 54.85.159.138 into the GPRS server configuration.
3. Set the port to 8888 in the device configuration.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Set the operator APN and any required APN username or password for the SIM used by the device.
6. Apply or save the configuration and enable GPRS mode if required by the device.
7. Restart or power cycle the device if recommended by the manufacturer.
8. Validate that the device reports to Plaspy by checking device status in Plaspy and confirming data is received at the expected update interval.

## Example Configuration Commands

The TZ-RD05 can be configured by sending SMS commands to the device. The following public SMS commands are provided in manufacturer documentation. Preserve placeholders when sending commands and replace them with your operator values.

1. Set the operator APN
```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```
- Replace {{apn}} with your mobile operator APN.
- {{apnu}} is the APN username when required by the operator; omit or leave blank if not used.
- {{apnp}} is the APN password when required by the operator; omit or leave blank if not used.
- Some firmware variants accept the shorter form without username or password:
```text
*000000,011,{{apn}}#
```

2. Set the update interval to 60 seconds
```text
*000000,018,60,999#
```
- This example sets a reporting interval value of 60 seconds; adjust the first numeric parameter to change the interval per vendor documentation.

3. Set the GPRS server to the Plaspy IP and port
```text
*000000,015,0,54.85.159.138,8888#
```
- The command above points the device to Plaspy using the public IP and port 8888.
- If the device supports a domain instead of an IP, substitute d.plaspy.com where allowed by the vendor syntax.

4. Activate the GPRS mode
```text
*000000,016,1#
```
- This command enables GPRS data mode so the device will attempt to connect to the configured server.

Notes about these commands:
- Send each command as a separate SMS to the device phone number.
- Maintain the order above where the APN and server are configured first, then enable GPRS and reporting.
- Commands and parameter formats may vary by firmware. Confirm exact command syntax in the TZone documentation.

## Configuration Notes

- Firmware differences may alter exact SMS command syntax and available parameters; always verify with the TZone firmware release notes.
- The device supports SMS-based configuration as shown in the public commands; alternative configuration via serial, RS485, or LAN may be available per TZone documentation.
- Choose UDP or TCP transport according to network requirements and device support; Plaspy will auto-detect the protocol once the device connects.
- Plaspy uses the same port 8888 for all devices; ensure firewall rules allow outbound device connections to port 8888 on d.plaspy.com or the IP 54.85.159.138.
- Keep a record of any vendor passwords used in SMS commands and consider securing the device after configuration.

## Why Use Plaspy with This Configuration

Configuring the TZ-RD05 to report to Plaspy provides a consistent server endpoint and centralized platform for receiving device data. For organizations that require visibility and operational oversight, directing device reports to Plaspy simplifies monitoring, event processing, and integration with fleet or asset workflows.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest TZ-RD05 setup information and command syntax at the TZone official site http://www.tzonedigital.com/ before deployment.
