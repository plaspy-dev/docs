---
slug: /queclink/wts100/configuration
id: wts100-configuration
sidebar_label: Configuration
title: QuecLink - WTS100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink WTS100 temperature sensor integration with Plaspy including server settings and example SMS commands
keywords:
  - QuecLink WTS100 configuration
  - QuecLink WTS100 setup
  - WTS100 Plaspy integration
  - temperature sensor configuration
  - QuecLink receiver gateway setup
  - Plaspy server configuration
  - fleet telemetry integration
  - cold chain monitoring setup
  - QuecLink SMS commands
  - device configuration guide
---

# QuecLink - WTS100 Configuration

This page documents the public configuration context for using the QuecLink WTS100 temperature sensor with Plaspy. It explains the practical server settings and example commands that are commonly used when integrating QuecLink devices and receivers with the Plaspy platform. Use this guide to understand the shared Plaspy endpoint and how QuecLink configuration examples map to those settings.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor tools. The example commands below are taken from public QuecLink configuration samples and should be validated against the specific device, gateway, or receiver you are configuring.

## Configuration Overview

This configuration process prepares a QuecLink device or compatible gateway to forward telemetry into Plaspy so temperature readings, device health, and alerts appear in your Plaspy account. For the WTS100, integration normally occurs via compatible QuecLink receivers or gateways that collect RF telemetry and forward it to backend servers.

- Point the QuecLink gateway or device to the shared Plaspy server endpoint so telemetry is delivered to Plaspy.
- Validate network and APN settings if configuring a cellular gateway or device that uses GPRS.
- Ensure reporting intervals and event inputs are set so temperature telemetry and alarms are reported to Plaspy in the expected cadence.
- Confirm the device or gateway is paired and identified in Plaspy so telemetry maps to the correct asset record.
- Use the example SMS commands below as public references when working with QuecLink SMS or GPRS configuration flows.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data arrives

Note that Plaspy uses the same port for all supported devices and handles protocol detection automatically.

## Typical Requirements Before Setup

- Power and access to the QuecLink receiver, gateway, or the device you will configure.
- Access to the manufacturer configuration method or software that applies to your device or gateway (SMS, web UI, or vendor tool).
- If configuring a cellular gateway or GPRS enabled device, an active SIM and correct APN settings (see placeholders below).
- Knowledge of the device default password if the configuration commands or tool require authentication (example default password in public samples is queclink).
- Network or RF placement verification so receiver to sensor communication is reliable before forwarding telemetry to Plaspy.

## How This Tracker Connects to Plaspy

The WTS100 transmits temperature telemetry to compatible QuecLink receivers or gateways which then forward telemetry to backend servers. When the gateway is configured to use Plaspy server settings the sensor data becomes available in the Plaspy platform for monitoring and alerts.

- The gateway forwards received sensor telemetry to the shared Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- Plaspy receives telemetry over UDP or TCP and automatically detects the device protocol for parsing.
- Temperature readings, battery status, and alarm events become visible in Plaspy once mapped to the correct device record.
- Alerts and thresholds configured in Plaspy can trigger notifications based on telemetry forwarded from the receiver or gateway.
- Device health and RF link information reported by the gateway help schedule maintenance and replacements.

## Common Configuration Workflow

1. Access the official QuecLink configuration method or software for the device or gateway you are using (SMS, web UI, or vendor configuration tool).
2. Enter the Plaspy server endpoint using d.plaspy.com or the server IP 54.85.159.138 as provided in this guide.
3. Set the destination port to 8888 in the device or gateway configuration.
4. Choose UDP or TCP if the device requires transport selection; Plaspy accepts either and auto detects the protocol.
5. Apply or save the configuration changes in the manufacturer tool or by sending the appropriate SMS commands.
6. Restart the device or gateway if required by the manufacturer to make new settings active.
7. Validate that the device or gateway reports to Plaspy and that telemetry appears in your Plaspy account.

If the device or gateway supports SMS configuration, use the SMS command examples below in the order presented to apply common settings.

## Example Configuration Commands

The following commands are public QuecLink SMS configuration examples. They are shown in the original sequence as commonly applied. The sample uses the default device password queclink. Placeholders remain where public samples require operator input.

- Notes on placeholders
  - [apn] is the APN name used by the cellular operator.
  - [apnu] is the APN username when required by the carrier.
  - [apnp] is the APN password when required by the carrier.

- Command examples (send by SMS where applicable)

1. Optional initial factory restore (labeled here as initial setup or when a fresh start is required)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone (example sets UTC 0)
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN with placeholders for APN, username, and password
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4. Configure the GPRS server to point to Plaspy by domain and IP with port 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set reporting intervals for periodic updates (example sets 60 second interval)
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS input notification example (this is an example event input configuration)
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

These commands are public examples and may apply when configuring devices or gateways that accept SMS or GPRS style commands. Always confirm that SMS configuration is supported for your hardware and verify command syntax against the device firmware documentation.

## Configuration Notes

- Firmware and hardware revisions may change the exact command syntax or available options. Always confirm with the device firmware notes for your serial number and revision.
- The example commands above use SMS style configuration; some deployments use a web UI or vendor configuration tool instead. Use the method matching your hardware.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol so focus on correct server host and transport selection.
- When configuring APN values keep placeholders [apn], [apnu], and [apnp] ready and confirm carrier requirements for username or password.
- Because the WTS100 is a radio temperature sensor integrated via receivers or gateways, ensure the receiver or gateway is configured to forward sensor telemetry into Plaspy using the server settings above.

## Why Use Plaspy with This Configuration

Integrating QuecLink WTS100 telemetry into Plaspy gives teams centralized visibility of temperature and device health across fleet and asset operations. Combined with Plaspy alerts and reporting, temperature excursions, battery health, and RF link issues can be monitored alongside location and vehicle data when gateways forward telemetry to Plaspy.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information with the official QuecLink documentation at https://www.queclink.com/ before applying changes.
