---
slug: /topshine/ogt01/configuration
id: ogt01-configuration
sidebar_label: Configuration
title: TopShine - OGT01 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the TopShine OGT01 OBD II tracker for Plaspy with server settings SMS commands and setup workflow
keywords:
  - TopShine OGT01 configuration
  - TopShine OGT01 setup
  - OGT01 Plaspy configuration
  - TopShine GPS tracker setup
  - OBD II tracker configuration
  - Plaspy server setup
  - vehicle tracking configuration
  - GPS tracker SMS commands
  - fleet tracking setup
  - tracking platform configuration
---

# TopShine - OGT01 Configuration

This page documents the public configuration context for using the TopShine OGT01 OBD II tracker with Plaspy. It collects the practical server settings, recommended workflow, and the manufacturer provided SMS configuration examples that are commonly used to point the device to the Plaspy platform. Use this as a technical reference to prepare the device for integration with Plaspy; consult the manufacturer for device specific details or firmware differences.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; for this model the manufacturer provides SMS command templates and basic GPRS configuration guidance that can be applied to target the Plaspy endpoint.

## Configuration Overview

Preparing the OGT01 for Plaspy involves configuring the tracker so it can reliably send location and OBD telemetry to the Plaspy server endpoint, validating connectivity, and enabling the reporting cadence appropriate for your fleet or use case. The following tasks summarize the practical purpose of the configuration process.

- Configure the device APN and network settings so the tracker can use GPRS data to reach Plaspy.
- Set the device server to the Plaspy endpoint and ensure the correct port is used for reporting.
- Choose the transport mode (UDP or TCP) if required and confirm Plaspy receives messages; Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically.
- Verify the device identity and IMEI-based device id so the platform recognizes reports from the unit.
- Set reporting intervals and GPRS mode so real-time and periodic updates meet operational needs.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration and verification.
- Server IP 54.85.159.138 as a direct endpoint option.
- Port 8888 which Plaspy uses uniformly for all supported devices.
- Transport support for UDP or TCP; configure either transport on the device if required.
- Automatic protocol detection in Plaspy so the platform can detect the tracker protocol when the device connects.

## Typical Requirements Before Setup

- Physical access to the vehicle OBD II port to install and power the OGT01.
- An active SIM card in the tracker with a working mobile data APN and GPRS service enabled.
- Ability to send SMS commands from a mobile phone or use the manufacturer configuration tool when supported.
- The device IMEI number available for device id and platform registration.
- Manufacturer documentation or support access for firmware specific information and updates.
- Basic knowledge of the operator APN settings for the SIM card to be entered into the device.

## How This Tracker Connects to Plaspy

The OGT01 connects to Plaspy by sending location, OBD telemetry, and event reports over GPRS (TCP or UDP) to the shared Plaspy endpoint and port. Plaspy ingests those messages, matches them to the device identity and exposes location and diagnostic data on dashboards and reporting tools.

- The tracker is configured to report to the shared Plaspy server endpoint using either d.plaspy.com or the IP 54.85.159.138.
- All device traffic to the platform is sent to port 8888 which Plaspy uses for all supported devices.
- Plaspy automatically detects the tracker protocol (TCP or UDP) when the unit connects, simplifying transport setup.
- The device can fall back to SMS for certain operations if configured or if GPRS is unavailable, and cached data is uploaded when connectivity is restored.
- Regular telemetry and event-driven alerts become visible in Plaspy once the device is correctly pointed to the platform and identified by IMEI or device id.

## Common Configuration Workflow

1. Access the official TopShine configuration method such as SMS commands or the vendor configuration tool per the manufacturer instructions.
2. Enter the Plaspy server as either d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 (Plaspy uses this same port for all devices).
4. Choose UDP or TCP if the device requires explicit transport selection; Plaspy will auto detect the protocol when the device connects.
5. Configure the APN for the installed SIM card and save or apply the changes.
6. Restart or power cycle the device if required by the device to apply the new GPRS settings.
7. Validate that the device reports to Plaspy by confirming the IMEI or device id appears in the Plaspy platform and telemetry is received.

## Example Configuration Commands

The manufacturer provides SMS command templates for configuring the OGT01. The default device password shown in the example commands is 000000. If you or your provider changed the device password, substitute it for 000000 in each command message.

- Optional initial factory reset (use only if you need to reset device settings):
```text
W000000,990,099###
```

- Set the device id (use the first 14 digits from the device IMEI). Plaspy identifies devices by IMEI so ensure the IMEI is correct when registering on the platform. Replace \<first14ofIMEI> with the first 14 digits of the IMEI.
```text
W000000,010,<first14ofIMEI>
```

- Set the operator APN. Use the APN values provided by the SIM operator. Optional username and password fields can be appended if required.
```text
W000000,011,[apn]
```
Optional form with APN username and APN password:
```text
W000000,011,[apn],[apnu],[apnp]
```
Note: [apn] is the operator Access Point Name. [apnu] and [apnp] are optional APN username and APN password placeholders.

- Set the GPRS server to the Plaspy endpoint and port 8888. This command uses the Plaspy server IP; you can configure the domain d.plaspy.com instead if the device supports DNS.
```text
W000000,012,54.85.159.138,8888
```

- Switch the device to GPRS mode (manufacturer command to enable data reporting).
```text
W000000,013,2
```

- Set the reporting/update interval. Adjust the numeric value to the desired reporting frequency per manufacturer guidance.
```text
W000000,014,6
```

- Query the device IMEI (verification command):
```text
W000000,601
```

These commands should be sent as individual SMS messages from a phone number authorized by the device (per the manufacturer instructions). After applying the server and APN settings, validate that the device begins sending data to Plaspy on port 8888 and appears in your Plaspy account.

## Configuration Notes

- Manufacturer firmware and regional variants can change command syntax or behavior; always verify the exact command syntax for your firmware version.
- SMS based configuration is supported by the OGT01 as shown in the example commands; this is useful when initial APN and server setup is needed without a configuration tool.
- When both domain and IP are accepted by the device, using d.plaspy.com allows for DNS based resolution while 54.85.159.138 is a direct endpoint option.
- Choose TCP or UDP based on your device tool requirements; Plaspy will auto detect the protocol but the device must be set to send on the chosen transport.
- Confirm the correct IMEI is used when setting the device id since Plaspy matches incoming reports to devices by IMEI/device id.

## Why Use Plaspy with This Configuration

Using the TopShine OGT01 with Plaspy provides straightforward fleet visibility by combining plug-and-play OBD II telemetry with a shared Plaspy server endpoint. With the device pointed to d.plaspy.com or the provided IP and port 8888, vehicle location, engine diagnostics, and event alerts are consolidated into a single platform for monitoring, reporting, and operational analysis.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details consult the TopShine website https://www.gztopshine.com/ where official documentation and updates are published.
