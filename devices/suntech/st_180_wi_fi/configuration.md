---
slug: /suntech/st_180_wi_fi/configuration
id: st_180_wi_fi-configuration
sidebar_label: Configuration
title: Suntech - ST 180 Wi-FI Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST 180 Wi-FI to connect with Plaspy using shared server settings and example SMS commands
keywords:
  - Suntech ST 180 Wi-FI configuration
  - Suntech ST 180 setup Plaspy
  - ST 180 Wi FI server configuration
  - ST 180 GPS tracker setup
  - Suntech tracker SMS commands
  - Suntech Wi Fi tracker configuration
  - Plaspy tracker integration
  - vehicle tracker Plaspy setup
  - ST180 GPS platform setup
  - fleet tracker Suntech configuration
---

# Suntech - ST 180 Wi-FI Configuration

This page documents the public configuration context for using the Suntech ST 180 Wi-FI tracker with Plaspy. It focuses on the practical server settings, required preparatory steps, and the public SMS commands shown by the manufacturer for sending the tracker to Plaspy servers. Use this guide to understand how to point an ST 180 Wi-FI device to Plaspy and validate connectivity in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps can vary by device firmware, hardware revision, installation type, and vendor tools. Where Suntech provides SMS command syntax it is included below, but always verify firmware specifics before applying configuration in production.

## Configuration Overview

This configuration process prepares the ST 180 Wi-FI to report location and device data to Plaspy and to appear in the Plaspy platform. The public steps shown here use the manufacturer provided SMS syntax example and the Plaspy server endpoint details that apply to all devices supported by Plaspy.

- Configure the tracker so it can reach the Plaspy server endpoint and port used by all Plaspy devices.
- Provide the device ID derived from the IMEI and set operator APN credentials when required.
- Choose the transport protocol if the tracker requires a UDP or TCP selection and set the port to the Plaspy port.
- Validate the configuration by using the verification command or by checking device reports within Plaspy after the device restarts.
- Use Wi‑Fi or GSM provisioning methods that the ST 180 supports to download or apply settings as allowed by the unit and firmware.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when devices send data to the shared server and port

Note that Plaspy uses the same port for all supported devices and will detect the protocol automatically based on incoming data.

## Typical Requirements Before Setup

- A powered and accessible Suntech ST 180 Wi-FI unit with a known IMEI number.
- Access to the manufacturer configuration method supported by the device such as SMS commands, local configuration tool, or Wi‑Fi provisioning where available.
- A valid SIM with data enabled and correct APN details if configuring over GSM/GPRS, or access to Wi‑Fi provisioning if using local network download.
- The device IMEI to derive the device ID used in SMS commands as described in the example steps below.
- A way to send SMS commands to the device if choosing the SMS configuration method shown in the public example.

## How This Tracker Connects to Plaspy

The ST 180 Wi-FI is configured to report position and device events to the Plaspy shared server endpoint and port. Once the server domain or IP and port are set on the device and connectivity is available, Plaspy will automatically detect the protocol and accept the device data.

- The tracker is pointed at d.plaspy.com or directly to IP 54.85.159.138 using port 8888.
- Transport can be chosen as UDP or TCP depending on device firmware and installer preference.
- After configuration and a restart, the device sends periodic reports to the Plaspy server where they appear in the platform.
- Plaspy’s automatic protocol detection handles the incoming connection type so you do not need to preselect a platform-side protocol.
- Validation is done by checking that the tracker appears and sends telemetry to Plaspy after configuration and restart.

## Common Configuration Workflow

1. Obtain the device IMEI and review the Suntech ST 180 Wi-FI manufacturer configuration methods and SMS syntax.
2. Access the official manufacturer configuration method or software that your unit supports (SMS, Wi‑Fi provisioning, or Suntech tools).
3. Enter the Plaspy server endpoint by specifying either d.plaspy.com or the IP address 54.85.159.138 on the device.
4. Set the device port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP on the tracker if the unit requires selecting a transport type.
6. Apply or save the configuration on the device and restart the tracker if the device requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking the device status in the platform or by using the verification command provided by the manufacturer.

## Example Configuration Commands

The Suntech public example uses SMS commands to configure network and reporting parameters. The device ID in the commands is derived from the IMEI as described below. These commands are shown in the public manufacturer syntax and converted here for clarity.

Device ID derivation
- The device ID is the six digits immediately before the last IMEI digit. In other words, remove the final IMEI digit and take the resulting last six digits.
- Example: if IMEI is 123456789012345 the device ID is 901234 (the six digits before the final digit 5).

Configuration commands (send by SMS to the device)

1) Set operator APN and the GPRS server pointing to Plaspy
- The fourth field is a flag set to 1 if APN username or password are provided, otherwise 0.
- Replace \<device_id> with the six digit ID derived from the IMEI.
- Keep the placeholders [apn], [apnu], and [apnp] and substitute actual APN values when needed.

```
SA200NTW;<device_id>;02;<apn_flag>;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Example with flag explanation
- If you provide APN username or password set \<apn_flag> to 1
- If no username or password set \<apn_flag> to 0

2) Set the update/reporting interval to 60 seconds
- Replace \<device_id> with your device ID.

```
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```

3) Check settings (verification command)
- Replace \<device_id> with your device ID.

```
SA200CMD;<device_id>;02;PresetA
```

Notes on placeholders
- [apn] is the mobile operator APN
- [apnu] is the APN username if required
- [apnp] is the APN password if required
- \<apn_flag> should be 1 when APN username or password fields are used and 0 when they are empty

Send these SMS commands in the order shown to apply network settings and reporting intervals, then restart or wait for the device to apply settings per the device behavior.

## Configuration Notes

- The manufacturer example uses SMS-based configuration; if your unit supports Wi‑Fi provisioning or a configuration tool, use the official method recommended by Suntech for your firmware version.
- Firmware revisions and hardware variants can change command syntax or required parameters. Confirm the exact command format for your device before sending SMS.
- Choose TCP or UDP transport according to installer preference and device firmware support; Plaspy will detect the protocol automatically once the device connects to the shared server and port.
- Always verify the device ID derivation from the IMEI for your unit as shown above before sending commands.
- If APN username or password are required by your operator, set the APN flag to 1 in the SA200NTW command; otherwise set it to 0.

## Why Use Plaspy with This Configuration

Using the Suntech ST 180 Wi-FI with Plaspy provides a straightforward way to collect vehicle location and event data on a single hosted platform. Pointing the tracker to the Plaspy shared server endpoint and port simplifies device onboarding because Plaspy uses the same port for all supported devices and performs automatic protocol detection.

To learn more about Plaspy and the services it provides visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and full manufacturer documentation verify details at the official Suntech site http://www.suntechint.com/ as configuration methods and firmware behavior can change over time.
