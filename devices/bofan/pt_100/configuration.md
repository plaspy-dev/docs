---
slug: /bofan/pt_100/configuration
id: pt_100-configuration
sidebar_label: Configuration
title: Bofan - PT-100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Bofan PT-100 showing Plaspy server settings, SMS commands, and practical setup steps for integration
keywords:
  - Bofan PT-100 configuration
  - Bofan PT-100 setup
  - PT-100 Plaspy setup
  - PT-100 server configuration
  - Bofan GPS tracker configuration
  - PT-100 GPRS setup
  - PT-100 SMS commands
  - PT-100 tracking platform
  - Bofan vehicle tracking
  - PT-100 APN settings
---

# Bofan - PT-100 Configuration

This page documents the public configuration context for using the Bofan PT-100 tracker with Plaspy. It focuses on the practical, publicly available steps and SMS commands commonly used to prepare the unit for live reporting to Plaspy. Where manufacturer-provided SMS commands are available they are shown below; follow official vendor guidance for any device or firmware-specific differences.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so many steps are identical for different models. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools; the PT-100 supports both SMS configuration and live GPRS reporting, and the commands below reflect common public setup flows.

## Configuration Overview

Preparing the PT-100 for Plaspy primarily ensures the tracker can register and send location updates to the Plaspy endpoint and that the device identifier and network settings are correct. The configuration process configures network access, registers the device identity used by Plaspy, and sets reporting cadence so the device appears in the Plaspy platform.

- Set the device identifier used by Plaspy (commonly the last 14 digits of the IMEI).
- Configure operator APN so the tracker can use GPRS for live reporting.
- Point the device to the Plaspy server endpoint and port so reports are delivered.
- Set update interval to a suitable frequency for your use case and compliance.
- Optionally perform a factory reset if preparing a unit for fresh configuration.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the PT-100:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts reports from supported devices

Note that Plaspy uses the same port for all supported devices and will detect the device protocol automatically once the tracker sends data to the listed endpoint and port.

## Typical Requirements Before Setup

- A powered PT-100 with known IMEI and access to the device (or installer who can send SMS commands).
- An active SIM card with data (GPRS) and SMS capability and the correct APN information for the mobile operator.
- The device password (default shown below is 000000) required for SMS configuration on many units.
- Access to the PT-100 SMS command method or the vendor software used for configuration.
- A plan for reporting interval and event configuration appropriate for your monitoring needs.

## How This Tracker Connects to Plaspy

The PT-100 connects to Plaspy by sending location and status data over the mobile network to the shared Plaspy endpoint and port. Plaspy then receives those packets, detects the protocol automatically, and presents the device on the platform.

- The tracker reports via GPRS to the configured Plaspy server address and port.
- SMS is used to send configuration commands such as APN, server, identifier, and intervals.
- The device identifier registered on the tracker must match the identifier used by Plaspy to link data to the device record.
- Once data is received by Plaspy on port 8888, the platform decodes the protocol automatically.
- Successful reports make the device visible in the Plaspy platform for monitoring and alerts.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands as documented by the vendor.
2. Enter the Plaspy server using either d.plaspy.com or 54.85.159.138 as the server address where the device requires an endpoint.
3. Set the port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP on the device if the device requires transport selection.
5. Apply or save the configuration on the tracker, using SMS or the vendor tool.
6. Restart the device if required by the tracker firmware to apply new settings.
7. Validate that the device reports to Plaspy by checking for incoming data and visibility on the Plaspy platform.

If you are using SMS-based configuration, follow the vendor-provided SMS command format and send each command from an authorized phone number if the device enforces number restrictions.

## Example Configuration Commands

The PT-100 commonly accepts SMS commands for basic configuration. The examples below are public sample commands. The device password used in these samples is the factory default 000000. Replace placeholders as noted.

- Factory reset (optional initial step)
```text
000000DFT
```
- Set the 14-digit device identifier used with Plaspy (commonly the last 14 digits of the IMEI). Replace {{imei_last14}} with those digits.
```text
000000GID{{imei_last14}}
```
- Set the APN for your mobile operator. Replace {{apn}} with your operator APN. If your operator requires username and password include {{apnu}} and {{apnp}} separated by commas:
```text
000000APN{{apn}}
```
or with optional username and password
```text
000000APN{{apn}},{{apnu}},{{apnp}}
```
- Set the GPRS server to point the tracker to Plaspy (this example uses the Plaspy IP and port included in the public configuration):
```text
000000SVR54.85.159.138,8888
```
- Set the update interval to 60 seconds (one minute):
```text
000000GTI60
```

Notes on placeholders:
- {{imei_last14}} means the 14-digit identifier you choose, typically the last 14 digits of the device IMEI.
- {{apn}} is the operator APN string. {{apnu}} and {{apnp}} are optional APN username and password fields when required by the operator.

If the PT-100 accepts a hostname instead of IP for the SVR command, you may use d.plaspy.com in place of 54.85.159.138 where supported by firmware. Use the IP form above if the device requires numeric addresses.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and supported options; always confirm the exact command format with the manufacturer documentation.
- The PT-100 supports SMS configuration as shown above and GPRS reporting to the configured server and port.
- Choose UDP or TCP based on your device options; Plaspy accepts reports over either transport and auto-detects the protocol.
- When using the APN command, verify operator credentials and include username and password only if required.
- If you perform a factory reset, reapply the server, identifier, APN, and reporting interval settings.

## Why Use Plaspy with This Configuration

Using Plaspy with the Bofan PT-100 lets organizations consolidate live vehicle location and event reporting on a single platform while relying on shared, well-known server settings. The PT-100’s SMS and GPRS configuration options make it straightforward to point the tracker to Plaspy and begin receiving updates once the identifier and network settings are in place.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Please verify the latest device-specific configuration steps, firmware changes, and official command syntax on the manufacturer site https://www.bofancloud.com/ as vendor documentation may be updated over time.
