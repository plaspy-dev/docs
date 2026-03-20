---
slug: /thingsys/ts_v6ws/configuration
id: ts_v6ws-configuration
sidebar_label: Configuration
title: ThingSys - TS-V6Ws Configuration
sidebar_class_name: menu_item_tracker
description: Configure ThingSys TS-V6Ws for use with Plaspy cloud tracking using public server settings and SMS or GPRS setup guidance
keywords:
  - ThingSys TS-V6Ws configuration
  - TS-V6Ws setup
  - ThingSys GPS tracker configuration
  - TS-V6Ws Plaspy setup
  - Plaspy tracker configuration
  - TS-V6Ws server configuration
  - GPS tracker setup
  - vehicle tracking configuration
  - fleet management tracker
  - TS V6Ws setup guide
---

# ThingSys - TS-V6Ws Configuration

This page covers the public configuration context for using the ThingSys TS-V6Ws with Plaspy. It summarizes the practical server settings and setup steps that let the TS-V6Ws report location and telemetry into the Plaspy cloud, and includes publicly available SMS command examples extracted from manufacturer-supplied configuration notes.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TS-V6Ws supports SMS-based configuration and GPRS reporting methods; use the sections below to prepare the device for Plaspy and then verify details against ThingSys documentation and firmware notes.

## Configuration Overview

The goal of configuration is to point the TS-V6Ws at Plaspy, make sure the device has a working data path, and validate that the tracker appears in the Plaspy platform. The public setup examples included here show how to set APN and server values using SMS commands and how to check configuration on the device.

- Set the device APN, APN credentials (if required), and the GPRS server address so the tracker can open a data session to Plaspy.
- Choose the transport (UDP or TCP) if the device prompts for a transport selection and set port 8888 as used by Plaspy.
- Verify device-side defaults such as the sample password and perform a factory reset only when required.
- Test connectivity by confirming the device reports to the shared Plaspy endpoint and appears in the Plaspy dashboard.
- Use manufacturer configuration tools or SMS as supported by the TS-V6Ws to apply and validate these values.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration.
- Server IP 54.85.159.138 as the published Plaspy endpoint.
- Port 8888 which Plaspy uses for all supported devices.
- Transport support for UDP or TCP — the device may be configured to use either transport on port 8888.
- Plaspy automatically detects the tracker protocol so the platform will interpret incoming device messages without manual protocol selection.

## Typical Requirements Before Setup

- A powered TS-V6Ws unit installed or accessible for initial configuration and testing.
- An active cellular SIM that supports data and SMS for sending initial configuration commands if using SMS methods.
- Knowledge of the device default password (the sample public configuration uses 123456) and the manufacturer configuration method.
- Access to ThingSys configuration tools or the ability to send SMS messages to the device's SIM number.
- A record of the device IMEI or identifier to confirm the correct tracker in the Plaspy account after reporting.
- A Plaspy account ready to receive the device once it begins reporting.

## How This Tracker Connects to Plaspy

The TS-V6Ws is configured to send location, status, and alarm information to Plaspy’s shared server endpoint and port; Plaspy then parses the tracker protocol and surfaces the data in maps, alerts, and reports. Reporting can be real-time via continuous GPRS/4G sessions or periodic via trace uploads depending on configuration.

- Device opens a data session to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- Device messages use either UDP or TCP transport as configured on the tracker; Plaspy accepts both on port 8888.
- The tracker sends location, ignition/ACC status, and alarm events so Plaspy can provide operational visibility.
- Plaspy automatically detects the tracker protocol and interprets incoming messages for mapping and alerting.
- Visibility in Plaspy is validated when the device begins regular reporting and appears in the fleet map and telemetry lists.

## Common Configuration Workflow

1. Access the official ThingSys configuration method or software, or prepare to use SMS-based configuration if supported by your firmware.
2. Enter the Plaspy server address as either the domain d.plaspy.com or the IP address 54.85.159.138 in the device server/GPRS settings.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP for the transport if the device requires a transport selection; save the selection.
5. Configure the APN and any APN credentials required by the SIM operator, using the manufacturer method or SMS commands.
6. Apply or save the configuration, then restart the device if required by the device firmware to activate network settings.
7. Validate that the device reports to Plaspy by checking for incoming messages and confirming the tracker appears in your Plaspy fleet view.

## Example Configuration Commands

The TS-V6Ws public configuration examples include SMS commands used to set APN, APN credentials, the GPRS server, and to perform optional factory reset and verification queries. The sample configuration uses the device default password 123456 in the command syntax shown.

1. Optional initial factory reset (optional; use only if you need to return to factory defaults)
```
FORMAT
```
2. Set operator APN (replace [apn] with the mobile operator APN string)
```
apn123456 [apn]
```
3. Set APN username (replace [apnu] with the APN username if required)
```
apnuser123456 [apnu]
```
4. Set APN password (replace [apnp] with the APN password if required)
```
apnpasswd123456 [apnp]
```
5. Set the GPRS server to Plaspy using the server IP and port (this sets 54.85.159.138 and port 8888 as the device server)
```
ip54.85.159.138 8888
```
6. Check current settings (query command)
```
CXZT
```

Notes on the commands above:
- These examples are sent as SMS messages to the tracker’s SIM number using the device’s configured password format shown (sample default password 123456).
- Keep the placeholders [apn], [apnu], and [apnp] and replace them with your operator APN values when sending the SMS.
- Only perform a factory reset (FORMAT) if needed; it will remove customized settings and return the device to factory defaults.
- After setting the server to 54.85.159.138 8888 you may alternatively set the DNS name d.plaspy.com via manufacturer tools if DNS-based server entry is supported.

## Configuration Notes

- Firmware and hardware revisions may change exact command syntax and supported SMS formats; always verify against the ThingSys release notes for your device revision.
- Devices that support both UDP and TCP should be configured to match your network topology and carrier behavior; UDP is common for trackers but TCP may be preferred if carriers have UDP restrictions.
- When SMS configuration is available, it is a convenient fallback in the field; however, the manufacturer configuration tool or web interface may provide a more complete configuration experience.
- Change the device default password after initial setup if the device supports it to improve operational security.
- Confirm APN values and operator credential requirements with the SIM provider before applying APN commands.

## Why Use Plaspy with This Configuration

Using the ThingSys TS-V6Ws with Plaspy provides a straightforward path to fleet and asset visibility. The device’s GNSS performance, 4G LTE primary connectivity with 2G fallback, and the ability to report via GPRS make it suitable for both real-time tracking and economical periodic trace reporting. Pointing the tracker at Plaspy’s shared server and port ensures rapid onboarding and consistent protocol handling by the platform.

To learn more about Plaspy and how it supports trackers like the TS-V6Ws visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details, verify the latest information on the official ThingSys site at https://www.thingsys.com/.
