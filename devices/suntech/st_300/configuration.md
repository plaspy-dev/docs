---
slug: /suntech/st_300/configuration
id: st_300-configuration
sidebar_label: Configuration
title: Suntech - ST 300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Suntech ST 300 tracker to Plaspy with practical server and SMS command examples
keywords:
  - Suntech ST 300 setup
  - Suntech ST300 configuration
  - ST 300 server configuration
  - ST300 Plaspy setup
  - Suntech GPS tracker configuration
  - ST300 GPRS configuration
  - vehicle tracker ST 300 setup
  - Suntech fleet management configuration
  - ST 300 tracking software configuration
  - Suntech ST300 server settings
---

# Suntech - ST 300 Configuration

This page covers the public configuration context for using the Suntech ST 300 tracker with Plaspy. It organizes the practical server settings and the manufacturer provided SMS command examples so you can prepare the device to report into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use the guidance here together with official Suntech documentation and your device-specific information.

## Configuration Overview

The goal of this configuration flow is to prepare the ST 300 so it can communicate reliably with Plaspy, verify connectivity, and become visible in the Plaspy fleet view. The public SMS commands supplied by Suntech make it possible to set network parameters, server endpoint, and reporting behavior for many ST 300 variants.

- Define the device identifier used by Suntech commands and compute the required device id from the IMEI.
- Configure the mobile operator APN and GPRS server settings to point to the Plaspy endpoint.
- Select transport (UDP or TCP) and set the shared Plaspy port so the device can send position and event messages.
- Adjust reporting interval so location updates meet your operational needs and validate the device is reporting correctly to Plaspy.
- Use the provided verification command to confirm settings have been applied.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible ST 300 device with the IMEI available for device id calculation.
- A working GSM SIM with data (GPRS) and SMS enabled as the ST 300 supports SMS configuration and GPRS reporting.
- Access to the official Suntech configuration method for your unit, which may be SMS commands or a vendor tool depending on model and firmware.
- The correct APN settings from your mobile operator and any authentication credentials if required.
- A way to restart or briefly power cycle the device after applying settings if recommended by the manufacturer.
- Permission to place the tracker in an area with mobile network coverage for testing.

## How This Tracker Connects to Plaspy

The ST 300 is configured to send location and event reports to the Plaspy shared server endpoint and port. Plaspy receives those messages and automatically detects the tracker protocol so the device can be managed and monitored in the Plaspy platform.

- The tracker sends position and device events to d.plaspy.com or 54.85.159.138 on port 8888.
- You can configure reporting using SMS commands or manufacturer tools to set APN and server information.
- Choose UDP or TCP transport on the device where required; Plaspy accepts both.
- Once reporting starts, Plaspy will parse incoming messages and surface device location and basic status in the platform.
- Use a verification command to request current presets and confirm the device reports as expected.

## Common Configuration Workflow

1. Access the official Suntech configuration method or software for your ST 300 unit (SMS setup is commonly supported for ST 300 variants).
2. Compute the device id from the IMEI and prepare the SMS commands that reference that device id.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address in the device configuration.
4. Set port 8888 and choose UDP or TCP if the device requires a transport selection.
5. Set the operator APN and any APN authentication details using the device configuration method.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the tracker reports to Plaspy and use the verification command to check applied settings.

## Example Configuration Commands

The ST 300 can be configured by sending SMS commands to the device. The following commands are extracted from the public Suntech configuration content and preserve placeholders. Replace {{device_id}} with the device id computed from the IMEI (see explanation below). Replace [apn], [apnu], and [apnp] with your operator APN, username, and password where required. For the APN authentication flag use 1 if username or password are provided otherwise use 0.

Note on computing device id
- The device id is the last 9 digits of the IMEI excluding the final IMEI check digit. For example, if the IMEI is 123456789012345 then the device id is 678901234.

1) Optional initial factory reset command (use only when needed as part of initial setup):
```
ST300CMD;{{device_id}};02;Reset
```

2) Set operator APN and the Plaspy GPRS server. Keep the placeholders as shown and ensure the server address and port point to Plaspy:
```
ST300NTW;{{device_id}};02;{{auth_flag}};[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- {{auth_flag}} should be 1 if you provide [apnu] or [apnp] otherwise 0.
- [apn] is the operator APN. [apnu] and [apnp] are optional APN username and password.

3) Set the reporting interval to 60 seconds (example reporting configuration):
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4) Verification command to check current preset settings:
```
ST300CMD;{{device_id}};02;PresetA
```

Preserve the order above when applying commands if you follow the manufacturer recommendations. Send each complete SMS and wait for device acknowledgement where applicable.

## Configuration Notes

- Firmware and regional variants of the ST 300 family can change command syntax or available options; always check your device firmware notes.
- SMS based setup is commonly supported for ST 300 units; manufacturer tools or PC configuration utilities may also be available depending on the model variant.
- Use the authentication flag (1 or 0) in the APN command to indicate whether APN username or password are present.
- When given a choice, pick UDP or TCP as required by your operational policy; Plaspy accepts both transports and will detect the protocol automatically.
- Restart the device if the manufacturer recommends it after applying network or server settings to ensure changes take effect.

## Why Use Plaspy with This Configuration

Using the Suntech ST 300 with Plaspy provides a straightforward path to add reliable vehicle location and basic event monitoring into an operational fleet platform. The public server settings and SMS command examples let installers and administrators point the device to the Plaspy endpoint so devices begin reporting without per device port configuration complexity.

Learn more about how Plaspy receives and processes device data and how it can fit into your fleet workflow at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information on the official Suntech website http://www.suntechint.com/.
