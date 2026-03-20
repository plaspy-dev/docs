---
slug: /coban/bn_501/configuration
id: bn_501-configuration
sidebar_label: Configuration
title: Coban - BN-501 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the Coban BN-501 for use with Plaspy using public SMS and server settings
keywords:
  - Coban BN-501 configuration
  - Coban BN-501 setup
  - BN-501 Plaspy setup
  - Coban tracker configuration
  - wearable GPS configuration
  - BN-501 SMS commands
  - Plaspy tracker configuration
  - BN-501 server configuration
  - Coban GPS tracker setup
  - BN-501 integration
---

# Coban - BN-501 Configuration

This page documents the public configuration context for using the Coban BN-501 tracker with the Plaspy platform. It pulls together the practical server settings and the publicly available SMS-based commands used to prepare the device so it can report location and alerts into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use the commands and workflow here as a practical starting point and verify device behavior against the official Coban documentation when needed.

## Configuration Overview

The BN-501 can be configured so that it reports position, telemetry, and alarm events to Plaspy using shared server settings and standard transport options. The public configuration steps prepare the device for cellular data reporting, validate connectivity, and enable visibility in the Plaspy platform.

- Configure the device to use the Plaspy server endpoint so telemetry is sent to the platform.
- Set APN and GPRS parameters so the tracker can use the cellular data connection.
- Choose transport (UDP or TCP) and ensure the device reports on the platform port used by Plaspy.
- Validate the device reports by using the device verification command and checking the Plaspy dashboard for the first uplink.
- Optionally use SMS or Bluetooth provisioning to apply settings depending on field tools and firmware support.

## Plaspy Server Settings

Use the following public server settings when configuring the BN-501 to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy endpoint for device reporting and should be entered on the tracker during setup.

## Typical Requirements Before Setup

- A charged BN-501 with battery and power available for initial configuration and testing.
- An active SIM card that supports the device's chosen cellular network and a correct APN for data (NB‑IoT or LTE Cat M where applicable).
- Access to the official Coban configuration method you prefer for the device such as SMS provisioning or the manufacturer Bluetooth/app tool.
- Knowledge of the SIM APN, APN username, and APN password for your mobile operator.
- A basic understanding that settings may vary by firmware; have the device manual or vendor notes available.

## How This Tracker Connects to Plaspy

The BN-501 is configured to send location fixes, alarms, and telemetry to the shared Plaspy server endpoint and port. Once the tracker is pointed at the Plaspy endpoint and given correct APN credentials, it will begin reporting according to its configured working mode.

- Position and telemetry data are sent from the device to d.plaspy.com or 54.85.159.138 on port 8888.
- The device can use either UDP or TCP transport; choose the transport required by your firmware and environment.
- Alarms such as SOS, movement, or low battery are transmitted as events to Plaspy for alerting and monitoring.
- Plaspy detects the tracker protocol automatically so the same server and port work for supported devices.
- Use the device verification command to confirm the tracker is connected and visible in Plaspy.

## Common Configuration Workflow

1. Access the official Coban configuration method you prefer (SMS provisioning or Bluetooth/app) as provided by the manufacturer.
2. Configure the server address by entering d.plaspy.com or the Plaspy server IP 54.85.159.138.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Set the APN and optional APN username and password so the device can use cellular data.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply GPRS settings.
7. Validate that the device reports to Plaspy by using the device check command and verifying the initial uplink in the platform.

## Example Configuration Commands

The BN-501 supports SMS-based provisioning. Below are the publicly available sample SMS commands provided by the manufacturer. The default device password shown here is 123456; if you have changed the password use your device password instead. Placeholders such as [apn], [apnu], and [apnp] should be replaced with your operator APN values.

1. Optional initial factory reset (use only if you need to restore defaults)
```
begin123456
```

2. Set the time zone to UTC+0
```
time zone123456 0
```

3. Set the operator APN
```
apn123456 [apn]
```
- [apn] = your mobile operator APN string

4. Set the APN username and password
```
up123456 [apnu] [apnp]
```
- [apnu] = APN username (leave blank if none)
- [apnp] = APN password (leave blank if none)

5. Set the GPRS server to the Plaspy IP and port
```
adminip123456 54.85.159.138 8888
```
- This directs the device to report to Plaspy. You may instead use d.plaspy.com where the device supports domain names.

6. Set the location update interval example (device specific format)
```
fix060s060s***n123456
```
- Example provided by the manufacturer to set periodic fixes; keep the device manual for exact timing syntax.

7. Switch to GPRS mode and select UDP or TCP (two formats shown)
```
gprs123456,1,1
```
or
```
gprs123456
```
- Use the format accepted by your firmware to enable GPRS and select transport. If your firmware requires explicit transport selection, choose UDP or TCP accordingly.

8. Check current device settings
```
check123456
```

9. Enable enhanced digital sensor or fuel sensor reporting (example protocol number)
```
protocol123456 18
```
- This command enables additional reporting modes as supported by the device firmware.

## Configuration Notes

- Firmware and hardware revisions may change exact SMS command formats and available parameters; always verify with the device manual for your firmware version.
- The device supports SMS provisioning and Bluetooth configuration; use the method that best fits field access and security considerations.
- TCP versus UDP selection can affect delivery behavior and retransmission; choose based on network conditions and the device firmware capabilities.
- Replace placeholder tokens such as [apn], [apnu], and [apnp] with your operator credentials. If fields are not required, leave them blank according to the manufacturer syntax.
- Consider changing the default password 123456 after initial setup for improved security if the device supports it.

## Why Use Plaspy with This Configuration

Configuring the BN-501 to report to Plaspy provides a straightforward way to collect wearable location, alarm, and telemetry data in a centralized platform. For personal safety, asset concealment, or lightweight monitoring use cases, the BN-501's discreet form factor and multi-network connectivity pair with Plaspy's automatic protocol detection and unified server settings to simplify deployment and visibility.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest BN-501 device-specific setup methods, firmware behavior, and manufacturer details at the official Coban website https://www.coban.net/ since manufacturer specifications and setup procedures can change over time.
