---
slug: /sentar/q60/configuration
id: q60-configuration
sidebar_label: Configuration
title: Sentar - Q60 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Sentar Q60 tracker for use with Plaspy including server settings and SMS commands
keywords:
  - Sentar Q60 configuration
  - Sentar Q60 setup
  - Sentar Q60 Plaspy
  - Q60 server configuration
  - Q60 GPS tracker setup
  - Sentar GPS tracker configuration
  - Q60 tracking software configuration
  - vehicle tracking Q60 setup
  - Plaspy tracker configuration
  - Plaspy server setup
---

# Sentar - Q60 Configuration

This page documents the public configuration context for using the Sentar Q60 GPS tracker with Plaspy. It compiles the known, publicly available setup steps and SMS commands and explains how to point a Q60 device at Plaspy so the tracker can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The Q60 supports SMS-based configuration as shown in the public commands below; follow these steps alongside the official Sentar documentation for the most accurate and current device procedures.

## Configuration Overview

This section explains the purpose of the configuration process and what you will accomplish when preparing a Sentar Q60 for Plaspy.

- Configure the Q60 to send GPRS location data to Plaspy by entering the platform server information and port.
- Set APN and operator parameters so the device can register on the mobile network and establish data connections.
- Optionally perform an initial factory reset or time zone setup and set a reporting/upload interval for regular position updates.
- Validate connectivity and confirm the device is visible in Plaspy after applying settings.
- Use SMS commands for devices that support SMS configuration to perform each step without proprietary PC tools.

## Plaspy Server Settings

Use these exact public Plaspy settings when configuring the Q60. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- A powered and accessible Sentar Q60 tracker with sufficient battery or external power.
- A SIM card with an active data plan and SMS capability inserted in the device and able to register on the local mobile network.
- The device default password (the public commands below use 123456) or the password configured for the device.
- Knowledge of the mobile operator APN and optionally the APN username and password for data registration.
- Access to the Sentar SMS command method or the official Sentar configuration tool or manual.
- Network coverage at the device installation location to allow GPRS connections to the Plaspy server.

## How This Tracker Connects to Plaspy

The Sentar Q60 is configured to report position and device events to Plaspy by sending data to the shared Plaspy server endpoint and port. Once the device has network access and the correct server settings, Plaspy will accept incoming connections and automatically handle the tracker protocol.

- The Q60 uses the configured APN to establish GPRS data connectivity.
- The device sends tracking packets to d.plaspy.com or directly to 54.85.159.138 using port 8888.
- You can select UDP or TCP transport on the device if required; Plaspy accepts both and auto-detects the protocol.
- Reporting frequency is controlled by the upload interval setting on the Q60 and determines how often the device posts data to Plaspy.
- Plaspy receives device data and makes the tracker visible in the platform for monitoring and operational use.

## Common Configuration Workflow

Follow these practical steps to configure a Sentar Q60 to communicate with Plaspy.

1. Access the official Sentar configuration method for the Q60, typically SMS commands or a manufacturer-provided tool or manual.
2. Enter the Plaspy server using the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888; Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP on the device if it requires transport selection.
5. Configure the device APN details (APN, APN user, APN password) and any operator identifiers such as MCC/MNC if required.
6. Apply or save the configuration and restart the device if the device requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking device visibility in the platform or using the device verification SMS commands.

## Example Configuration Commands

The Sentar Q60 can be configured using SMS commands. The following public commands are provided in the manufacturer's sample configuration. Commands assume the device password is 123456 (the factory default in the public sample). Use the exact command format required by your device firmware and preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} when replacing APN values.

- Factory reset (optional initial step; only use if you need to restore factory defaults)
```text
pw,123456,factory#
```

- Set the time zone to UTC-0
```text
pw,123456,lz,0,0#
```

- Check the MCC and MNC (operator identifiers)
```text
pw,123456,imsi#
```

- Set the operator APN where xxx is MCC and yy is MNC
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
Explanation: {{apn}} is the operator APN, {{apnu}} is the APN username if required, and {{apnp}} is the APN password if required. Replace xxxyy with the concatenated MCC and MNC if your device requires it.

- Set GPRS server to Plaspy by IP and port
```text
pw,123456.ip,54.85.159.138,8888#
```
Note: The public sample command above is shown as provided by the manufacturer. If your device expects a different separator or command syntax (for example a comma between the password and ip token), follow the exact syntax required by your device firmware or vendor documentation.

- Set upload interval to 300 seconds (example)
```text
pw123456,upload,300#
```

- Verify current settings
```text
pw,123456,ts#
```

Use the verification command to confirm that the device has applied settings and to inspect current configuration after sending commands.

## Configuration Notes

- The SMS command syntax and separators can vary by firmware version; always cross-check with the Sentar Q60 manual for exact command formats.
- The sample commands above use the factory default password 123456; change the password after initial setup if required by your security policy.
- Plaspy accepts both UDP and TCP on port 8888; choose the transport mode supported by your device and network. Plaspy will automatically detect the protocol used.
- SMS-based configuration is supported by the public commands above; some installers prefer vendor tools or PC software—use whatever method matches your device firmware.
- Replace APN placeholders ({{apn}}, {{apnu}}, {{apnp}}) with the values provided by your mobile operator. The MCC/MNC check and entry may be required in certain regions.

## Why Use Plaspy with This Configuration

Configuring a Sentar Q60 to report to Plaspy gives organizations a straightforward way to bring a reliable tracker into a modern fleet and asset monitoring platform. Using Plaspy's shared server endpoint and automatic protocol detection simplifies integration because all supported devices use the same port and Plaspy handles protocol differences on the platform side.

To learn more about Plaspy and supported device configurations visit https://www.plaspy.com. For the latest Sentar Q60 device-specific configuration methods, firmware behavior, and manufacturer instructions verify details on the official Sentar website http://www.sentarsmart.com/ as device firmware and exact command syntax can change over time.
