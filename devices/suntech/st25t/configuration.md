---
slug: /suntech/st25t/configuration
id: st25t-configuration
sidebar_label: Configuration
title: Suntech - ST25T Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for using the Suntech ST25T with Plaspy server settings and SMS command examples
keywords:
  - Suntech ST25T configuration
  - Suntech ST25T setup
  - Suntech ST25T Plaspy
  - ST25T server configuration
  - ST25T GPS platform setup
  - Suntech telemetry configuration
  - Plaspy device setup
  - vehicle telemetry interface setup
  - ST25T APN configuration
  - ST25T SMS configuration
---

# Suntech - ST25T Configuration

This page documents the public configuration context for using the Suntech ST25T interface module with Plaspy. It focuses on the practical, public steps needed to direct the device or its paired gateway to report telemetry to Plaspy, including the shared server settings Plaspy requires and example SMS commands that are commonly used to program network and reporting parameters.

Plaspy uses the same shared server endpoint and port for supported devices and it automatically detects the tracker protocol used by connected devices. Manufacturer-side setup steps for the ST25T or its gateway can vary by firmware, hardware revision, installation type, and vendor tools; the commands below reflect publicly available SMS configuration examples and placeholders that you should adapt to your installation and SIM operator settings.

## Configuration Overview

Configuring the ST25T for Plaspy integration prepares the interface and its gateway to forward vehicle bus and sensor data to a Plaspy endpoint. The process aligns APN and GPRS settings, sets the reporting interval, and verifies that the device is visible on the Plaspy platform. When the ST25T is used as a telemetry interface it is typically paired with a Plaspy-enabled gateway that supplies cellular and GNSS connectivity while the ST25T provides ECU, sensor, and serial data streams.

- Configure the device or paired gateway to point at Plaspy server d.plaspy.com or the Plaspy server IP.
- Set the APN, optional APN username and password, and the transport settings so GPRS can deliver messages to Plaspy.
- Use a 60 second reporting interval example where appropriate to enable near real time telemetry on Plaspy.
- Validate connectivity by using the provided verification SMS command or checking the device in the Plaspy platform.
- Ensure the device ID is computed correctly from the IMEI when sending SMS configuration commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Active SIM card installed in the gateway or device that will provide cellular data and SMS reception for configuration.
- Working APN information from the mobile operator including APN, APN username, and APN password where required.
- Access to the official manufacturer configuration method or SMS command list for the ST25T or its gateway.
- The device IMEI available for computing the device ID used in configuration commands.
- A mobile phone able to send SMS to the device number for SMS based configuration if the device supports SMS programming.

## How This Tracker Connects to Plaspy

The ST25T is a telemetry interface that forwards vehicle bus and sensor data to a Plaspy-enabled gateway which in turn sends data to Plaspy. In some deployments the interface or gateway accepts SMS or GPRS configuration and is pointed directly at the Plaspy endpoint so telemetry and event messages are delivered to Plaspy on port 8888.

- The device or paired gateway is configured to report to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Data travels over TCP or UDP depending on which transport is selected during configuration.
- Plaspy automatically detects the tracker protocol used by the device and processes incoming telemetry.
- Regular position and telemetry reports are forwarded to Plaspy for live monitoring, alerts, and historical reports.
- Verification commands or status queries can be used to confirm the device is reporting to the Plaspy server.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the ST25T or the paired gateway (SMS, local Bluetooth tool, or vendor utility).
2. Enter the Plaspy server address using d.plaspy.com or the server IP 54.85.159.138 in the network/GPRS server field.
3. Set the server port to 8888 (Plaspy uses this same port across supported devices).
4. Choose UDP or TCP if the device requires explicit transport selection and ensure the same selection is acceptable on the gateway side.
5. Enter the operator APN and optional APN username and password fields (use placeholders {{apn}}, {{apnu}}, {{apnp}} as needed).
6. Apply or save the configuration and restart the device or gateway if required by the manufacturer instructions.
7. Validate that the device is reporting to Plaspy by using the verification SMS command or checking device connectivity in Plaspy.

## Example Configuration Commands

The ST25T public configuration examples below show the SMS command templates used to set the operator APN, the Plaspy GPRS server IP and port, and the reporting interval. These templates preserve placeholders for APN settings and a computed device id. The device id is derived from the IMEI: take the six digits immediately before the final IMEI digit (that is, remove the last IMEI digit, then use the preceding six digits). For example IMEI 123456789012345 produces device id 901234 in the example flow.

Note: send these commands as SMS messages to the device or gateway phone number according to the manufacturer's SMS programming procedure.

- Network and GPRS server command (set APN and point to Plaspy)
```text
SA200NTW;{{device_id}};02;<auth_flag>;<apn>;{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- Explanation:
  - {{device_id}} = six digits extracted from the IMEI as described above.
  - <auth_flag> = 1 if you provide APN username or password ({{apnu}} or {{apnp}}), otherwise 0.
  - {{apn}} = operator APN placeholder.
  - {{apnu}} and {{apnp}} = optional APN username and APN password placeholders.
  - The command uses the Plaspy server IP 54.85.159.138 and port 8888.

- Set the update/report interval to 60 seconds
```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```
- Verify or check current preset settings
```text
SA200CMD;{{device_id}};02;PresetA
```

These commands are public examples extracted from the device configuration content. Adapt the placeholders to your operator APN and IMEI derived device id. If your SMS command set or firmware differs, use the manufacturer tool or documentation to translate these templates into the correct format.

## Configuration Notes

- Firmware and gateway firmware versions can change command formats and supported parameters; always verify the exact SMS syntax for your firmware revision.
- The ST25T typically forwards telemetry to a Plaspy-enabled gateway; confirm whether you should program the ST25T itself or the gateway when applying server and APN settings.
- Choose UDP or TCP based on network reliability and gateway behavior; both transports are supported by Plaspy on port 8888.
- When using APN authentication include the appropriate username and password and set the <auth_flag> field to 1 in the SA200NTW template.
- SMS-based configuration is commonly supported in public examples shown here; consult the official Suntech instructions for alternative configuration methods such as a local Bluetooth tool or vendor software.

## Why Use Plaspy with This Configuration

Using the ST25T together with a Plaspy-enabled gateway provides an efficient way to add vehicle bus, sensor, and legacy serial data into the Plaspy platform. This configuration enables fleets to combine GNSS position data from the gateway with the ST25T’s telemetry streams for unified monitoring, fuel analytics, and event-based alerts in Plaspy.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and official commands consult the manufacturer at http://www.suntechint.com/ as specification and configuration methods can change over time.
