---
slug: /concox/vl802/configuration
id: vl802-configuration
sidebar_label: Configuration
title: Concox - VL802 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Concox VL802 for Plaspy using shared server settings and SMS configuration commands
keywords:
  - Concox VL802 configuration
  - Concox VL802 setup
  - VL802 Plaspy
  - Concox tracker configuration
  - VL802 GPS tracker setup
  - fleet tracking VL802
  - VL802 server configuration
  - Concox VL802 SMS commands
  - VL802 GPRS setup
  - VL802 telemetry
---

# Concox - VL802 Configuration

This page documents the public configuration context for using the Concox VL802 with Plaspy. It focuses on the practical server settings and common setup commands used to point a device to Plaspy so the tracker can report location and telemetry to the Plaspy platform.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so this guide centers on the public settings and SMS commands commonly used with the VL802 while encouraging verification with official Concox documentation.

## Configuration Overview

The configuration process prepares the VL802 to communicate reliably with the Plaspy telematics backend. Publicly available commands and parameters typically set the device time zone, APN, GPRS server endpoint, reporting interval, and GPRS mode so the tracker can deliver real-time data to Plaspy.

- Configure the device to use Plaspy as its GPRS/TCP or UDP server endpoint to ensure data arrives at the platform.
- Set a correct APN and enable GPRS so the tracker can use the cellular data connection for reporting.
- Define reporting intervals (for example every 60 seconds) and enable GPRS mode to control data cadence.
- Validate the configuration with a verification command and confirm the device is visible in Plaspy.
- When available, use SMS or the manufacturer's local configuration tools such as Bluetooth to apply settings in the field.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device side
- Plaspy automatically detects the tracker protocol and the platform uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and installed VL802 unit with access to its configuration interface (SMS, Bluetooth or manufacturer tool).
- An active cellular SIM provisioned for data with the correct APN for the operator.
- Ability to send and receive SMS commands from the install site if using SMS-based configuration.
- Knowledge of the device APN values and any APN username or password required by the network operator.
- Access to the device documentation or installer interface to apply settings and reboot the device if needed.
- An account or support channel with Plaspy to confirm device visibility after configuration.

## How This Tracker Connects to Plaspy

The VL802 is configured to report its position and telemetry to Plaspy by sending GPRS data to the shared Plaspy server endpoint and port. Once the device is pointed to Plaspy using the server settings below, Plaspy ingests the incoming telemetry and makes vehicle state visible in the platform.

- The tracker sends location and telemetry to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The device can be configured to use either UDP or TCP transport depending on installer preference; Plaspy will accept and detect the protocol automatically.
- Regular position updates and event notifications are sent to Plaspy at the configured reporting interval so fleet managers see live data.
- Device-level events such as ignition state, SOS, and analog telemetry are forwarded to Plaspy for alerting and reporting.
- After configuration, Plaspy provides visibility and monitoring of the unit without per-device custom port changes because Plaspy uses the same port for all supported devices.

## Common Configuration Workflow

1. Access the official Concox configuration method for the VL802 (SMS commands, Bluetooth tool, or Concox-supported software).
2. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 depending on installer preference.
3. Set the reporting port to 8888 as required by Plaspy.
4. Choose UDP or TCP on the device if the device firmware requires explicit transport selection.
5. Configure the APN and any APN credentials required by the mobile operator using the manufacturer method.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy and that telemetry appears in the Plaspy platform.

## Example Configuration Commands

The VL802 accepts SMS commands for configuration. Below are the commonly used public SMS commands in their typical order. Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator values when sending SMS.

1. Optional initial reset to factory settings (use only when you need to clear existing configuration):
```text
FACTORY#
```

2. Set the device time zone to UTC+0 (modify as needed for your local zone):
```text
GMT,E,0#
```

3. Set the operator APN. Replace {{apn}} with your network APN and optionally include {{apnu}} and {{apnp}} if your operator requires username and password:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
If only APN is required, use:
```text
APN,{{apn}}#
```
(Placeholders explained: {{apn}} is the APN string from your mobile operator; {{apnu}} is the APN username when required; {{apnp}} is the APN password when required.)

4. Set the GPRS server to Plaspy. You may point to the domain or the IP. These commands set server 1 to use the Plaspy domain or set the server to the Plaspy IP. Both use port 8888.
```text
SERVER,1,d.plaspy.com,8888,0#
```
or
```text
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update/reporting interval to every 60 seconds. The device accepts either single or dual timer formats:
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

6. Enable GPRS mode to allow data reporting:
```text
GPRSON,1#
```

7. Verify current GPRS and server settings:
```text
GPRSSET#
```

Follow the order above when initialising a device for Plaspy to ensure the APN and server are set before enabling GPRS mode. If you used FACTORY# to reset the device, reapply APN and server settings before enabling GPRS.

## Configuration Notes

- SMS-based configuration is commonly supported for the VL802; alternatively use Concox local configuration tools such as Bluetooth where available.
- Firmware revisions can change exact command syntax or supported parameters; always verify commands against the device firmware notes when possible.
- Choose UDP or TCP according to installation needs; Plaspy accepts both and will automatically detect the tracker protocol on port 8888.
- Plaspy uses the same port for all supported devices, simplifying multi-device deployments.
- When using domain-based server configuration (d.plaspy.com), ensure the device has working DNS resolution via the operator APN.

## Why Use Plaspy with This Configuration

Configuring the Concox VL802 to report to Plaspy provides a reliable way to centralize vehicle location, events, and sensor telemetry in a single platform. For fleet operators this setup supports continuous monitoring, anti-theft workflows using the relay output, and telemetry-driven alerts for driver safety and operational efficiency.

To learn more about Plaspy and how Plaspy ingests and displays device telemetry, visit https://www.plaspy.com. For the most current device-specific configuration details, firmware notes, and command references, verify information on the manufacturer site https://www.iconcox.com/.
