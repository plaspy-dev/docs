---
slug: /sentar/d51/configuration
id: d51-configuration
sidebar_label: Configuration
title: Sentar - D51 Configuration
sidebar_class_name: menu_item_tracker
description: Clear configuration guide for Sentar D51 tracker setup with Plaspy servers and SMS commands
keywords:
  - Sentar D51 configuration
  - Sentar D51 setup
  - Sentar D51 server configuration
  - D51 Plaspy setup
  - Sentar D51 SMS commands
  - Sentar GPS tracker configuration
  - kids smartwatch tracking setup
  - Plaspy tracker integration
  - wearable GPS tracker configuration
  - D51 tracking software setup
---

# Sentar - D51 Configuration

This page covers the public configuration context for using the Sentar D51 4G Kids Smart Watch with Plaspy. It focuses on the practical server settings and publicly available configuration commands that prepare the device to communicate with Plaspy and be visible in the Plaspy dashboard.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor tools. The D51 may be configured using SMS commands as shown below; those SMS commands are supplied by the manufacturer and represent a common public setup flow.

## Configuration Overview

The goal of this configuration process is to prepare the D51 to reliably send location and device data to Plaspy so the watch appears as an active object in the platform. Configuration typically covers server and APN information, verification of network identity, update intervals, and optional reset or timezone setup.

- Point the D51 to Plaspy’s server endpoint so location and telemetry stream to the platform.
- Configure operator APN and verify MCC/MNC so the watch has mobile data and GPRS connectivity.
- Set periodic upload interval so Plaspy receives timely location updates and device status.
- Use manufacturer SMS commands or official configuration tools to apply settings and verify them.
- Optionally perform a factory reset or timezone adjustment as part of initial device provisioning.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for server connections

## Typical Requirements Before Setup

- A charged D51 device with an active Nano SIM that has data and SMS enabled.
- Access to the manufacturer configuration method or SMS command list for the D51.
- APN, APN username, and APN password details for the cellular operator you will use.
- Basic knowledge of the device default password (public commands below use 123456).
- A phone capable of sending SMS to the D51 or the official manufacturer configuration tool.
- Network coverage where the device will operate so it can register to the LTE network.

## How This Tracker Connects to Plaspy

The D51 sends location and device telemetry over its mobile data connection to Plaspy’s shared server endpoint and port. Once configured to point at Plaspy, the device’s messages are routed into Plaspy where automatic protocol detection matches the tracker protocol and displays updates in the platform.

- The watch reports position updates and telemetry to d.plaspy.com / 54.85.159.138 on port 8888.
- Plaspy accepts connections using either UDP or TCP as chosen on the device side and detects protocol automatically.
- SOS and event notifications from the D51 are forwarded to Plaspy for alerting and escalation.
- Periodic uploads ensure historical tracks and device health are available in Plaspy dashboards.
- Successful configuration makes the device visible in Plaspy and available for geofences, alerts, and monitoring.

## Common Configuration Workflow

1. Access the official Sentar configuration method for the D51 (SMS commands or manufacturer tool).
2. Optionally perform a factory reset if you need a clean starting state.
3. Enter the Plaspy server hostname d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
5. Choose UDP or TCP if the device requires a transport selection; Plaspy will automatically detect the protocol.
6. Configure APN and operator details so the D51 has mobile data connectivity.
7. Apply or save the configuration and restart the device if required.
8. Validate that the device reports successfully to Plaspy and appears in the platform.

## Example Configuration Commands

The following public SMS commands are provided in manufacturer documentation as a common sequence for the D51. The sample device password shown in these commands is 123456 and is the factory default in the manufacturer examples. Preserve placeholders as shown when replacing with your operator values.

- Factory reset (optional initial step)
```text
pw,123456,factory#
```

- Set the time zone to UTC+0
```text
pw,123456,lz,0,0#
```

- Check the SIM MCC and MNC (returns the operator identifiers)
```text
pw,123456,imsi#
```

- Set the operator APN where {{apn}} is the APN, {{apnu}} is the APN username, {{apnp}} is the APN password, and xxxyy is the concatenated MCC and MNC
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
Explanation: Replace {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator values. Replace xxxyy with the operator MCC and MNC combined as indicated by the device documentation.

- Set the GPRS server using Plaspy IP and port
```text
pw,123456.ip,54.85.159.138,8888#
```
Note: This command uses the Plaspy server IP 54.85.159.138 and port 8888. Alternatively, the device may allow using d.plaspy.com as the hostname.

- Set the periodic upload interval to 300 seconds
```text
pw123456,upload,300#
```
Note: Some manufacturer command formats vary slightly in punctuation. The default password in examples is 123456; ensure the exact syntax matches your device firmware.

- Verify current settings (status)
```text
pw,123456,ts#
```

## Configuration Notes

- Manufacturer command syntax and punctuation may vary between firmware versions; use the exact SMS format required by your device firmware.
- The D51 supports SMS-based configuration in public documentation; if you prefer, use the official manufacturer tool or provisioning software when available.
- Choose UDP or TCP according to the device options. Plaspy supports both, and the platform will auto detect the protocol once messages arrive on port 8888.
- Ensure the SIM has data enabled and the correct APN credentials; incorrect APN or operator identifiers will prevent uploads to Plaspy.
- Because all Plaspy devices use the same port, use port 8888 when configuring server settings to align with Plaspy expectations.

## Why Use Plaspy with This Configuration

Configuring the Sentar D51 to send updates to Plaspy provides a single, consistent endpoint for collecting location, SOS, and telemetry data from wearable trackers. For families and organizations that need reliable visibility and alerting, pointing the D51 at Plaspy makes device data available as real-time points, alerts, and historical reports in a single monitoring platform.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup information and command syntax on the manufacturer site http://www.sentarsmart.com/ before deployment.
