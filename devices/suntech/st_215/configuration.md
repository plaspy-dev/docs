---
slug: /suntech/st_215/configuration
id: st_215-configuration
sidebar_label: Configuration
title: Suntech - ST 215 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the Suntech ST 215 tracker to communicate with Plaspy using shared server settings and SMS commands
keywords:
  - Suntech ST 215 configuration
  - Suntech ST 215 setup
  - Suntech ST 215 server configuration
  - ST 215 Plaspy setup
  - ST215 GPS tracker configuration
  - vehicle tracker configuration Plaspy
  - GPS platform setup Suntech
  - tracker APN settings SMS
  - GPRS tracker server settings
  - fleet tracking device setup
---

# Suntech - ST 215 Configuration

This page describes the public configuration context for using the Suntech ST 215 tracker with the Plaspy platform. It gathers the practical Plaspy server settings and the common, manufacturer-side SMS configuration patterns that are publicly available so you can prepare the device for reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware version, hardware revision, installation method, and the vendor configuration tools available. The ST 215 supports GPRS, TCP, UDP, and SMS configuration methods, and the example commands below reflect the publicly available SMS templates for this model.

## Configuration Overview

The goal of the configuration process is to prepare the ST 215 so it reliably sends location and event data to Plaspy using the platform's shared server endpoint and port. For ST 215 devices the manufacturer provides SMS-based configuration templates that set the APN, GPRS server, and reporting intervals; these are commonly used in field installations.

- Configure the device APN and GPRS server so it can open a data connection to Plaspy.
- Ensure the device uses the Plaspy server endpoint so reports arrive in the platform.
- Set a suitable reporting interval so vehicle positions appear at the expected frequency.
- Validate configuration using the verification SMS command and confirm the device appears in Plaspy.
- Use the device IMEI to derive the device ID required by the manufacturer's SMS templates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note: Plaspy uses the same port for all supported devices and relies on automatic protocol detection, so you only need to point the device at d.plaspy.com or 54.85.159.138 using port 8888 and select UDP or TCP if the device requires a transport selection.

## Typical Requirements Before Setup

- A functioning ST 215 device with a valid IMEI and access to the device for configuration.
- A SIM card provisioned with mobile data and the correct APN settings for the operator.
- The APN username and password if your operator requires authentication (placeholders preserved below).
- Ability to send SMS commands to the device for SMS-based configuration, or the manufacturer's configuration tool if available.
- The device must be powered and have GPS/GSM visibility as required for initial testing.
- The IMEI number to compute the device ID used in the manufacturer's SMS templates.

## How This Tracker Connects to Plaspy

The ST 215 is configured to report position and event data to Plaspy by pointing its GPRS (TCP/UDP) endpoint to the Plaspy server and using the shared Plaspy port. Once configured the device will open a connection to Plaspy and begin sending location reports and status messages according to its reporting rules.

- The device reports to the shared Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Choose UDP or TCP transport on the device if the ST 215 requires an explicit selection.
- Plaspy automatically detects the device protocol so no protocol selection is required in the platform.
- The ST 215 can send updates based on time, distance, or angle change depending on its configured reporting rules.
- Validating successful connection involves confirming the device appears and reports in Plaspy after configuration.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST 215 — this is commonly SMS templates or the vendor configuration tool — and confirm your firmware supports the SMS commands shown here.
2. Identify the device IMEI and derive the device ID required by the Suntech SMS templates (see example below).
3. Enter d.plaspy.com or 54.85.159.138 as the server in the device configuration.
4. Set the port to 8888 and choose UDP or TCP if the device requires you to select a transport.
5. Apply or save the configuration on the device and send the required SMS commands if using SMS setup.
6. Restart the device if the manufacturer instructions specify a reboot after configuration.
7. Validate that the device reports to Plaspy and appears in the platform with expected position updates.

## Example Configuration Commands

The ST 215 manufacturer provides SMS commands to set network and reporting parameters. Use these templates with the device ID derived from the IMEI. The device ID is the six digits of the IMEI starting at position 9 and ending at position 14 (often described as the last six digits before the IMEI check digit). Example: IMEI 123456789012345 -> device ID 901234.

1) Set the operator APN and GPRS server
- Purpose: configure network APN and point the device to Plaspy server IP and port.
- Notes: The fourth field in the command is an APN auth flag. Use 1 if you will provide APN username or password; use 0 if not.

Command template:
```
SA200NTW;<device_id>;02;<apn_auth_flag>;<apn>;<apn_user>;<apn_pass>;54.85.159.138;8888;;;;
```
Placeholders:
- <device_id> — six-digit device ID derived from IMEI (digits 9 through 14).
- <apn_auth_flag> — 1 if APN username or password is present, otherwise 0.
- <apn> — replace with your operator APN (preserve the placeholder {{apn}} if you prefer).
- <apn_user> — replace with APN username or use {{apnu}} as a placeholder.
- <apn_pass> — replace with APN password or use {{apnp}} as a placeholder.

2) Set the reporting/update interval to 60 seconds
- Purpose: configure the periodic reporting cadence used by the device.

Command template:
```
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```

3) Verify or query the current preset settings
- Purpose: request the current PresetA configuration to confirm settings.

Command template:
```
SA200CMD;<device_id>;02;PresetA
```

Keep the commands in the order above when performing initial setup: first network and server, then reporting interval, then verification. Send the SMS messages from an authorized phone number according to Suntech's instructions for the ST 215.

## Configuration Notes

- SMS configuration is a common method for ST 215 devices but confirm the method supported by your hardware and firmware before proceeding.
- Some firmware versions may require slightly different command formats or additional parameters; always test on a single device first.
- Choose UDP or TCP on the device as required; Plaspy accepts either transport on port 8888 and performs automatic protocol detection on incoming connections.
- Correct calculation of the <device_id> from the IMEI is essential for the manufacturer SMS commands to take effect.
- Keep APN credentials ready and use the APN authentication flag (1 or 0) appropriately when sending the SA200NTW command.

## Why Use Plaspy with This Configuration

Using Plaspy with the Suntech ST 215 gives organizations a simple path to bring ST 215 devices online with a shared, well-known server endpoint and port. The ST 215's flexible reporting options combined with Plaspy's automatic protocol detection help reduce configuration complexity and get devices reporting faster for fleet tracking and operational visibility.

To learn more about Plaspy and supported configuration practices visit https://www.plaspy.com. Please verify device-specific setup details, firmware behavior, and manufacturer instructions on the Suntech website at http://www.suntechint.com/ since manufacturer configuration methods and command formats can change over time.
