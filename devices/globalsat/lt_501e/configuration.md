---
slug: /globalsat/lt_501e/configuration
id: lt_501e-configuration
sidebar_label: Configuration
title: GlobalSat - LT-501E Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GlobalSat LT-501E showing Plaspy server settings and practical setup steps for integration
keywords:
  - GlobalSat LT-501E configuration
  - GlobalSat LT-501E setup
  - LT-501E Plaspy configuration
  - Plaspy tracker configuration
  - GPS tracker setup guide
  - LT-501E server settings
  - LT-501E SMS configuration
  - LoRaWAN tracker setup
  - asset tracker configuration
  - vehicle tracking configuration
---

# GlobalSat - LT-501E Configuration

This page documents the public configuration context for using the GlobalSat LT-501E with Plaspy. It focuses on the practical server settings and the configuration workflow required to point an LT-501E to Plaspy so the device can report location and telemetry to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. Where available this page includes example SMS commands extracted from public device configuration content and explains the placeholders and checksum behavior required by those commands.

## Configuration Overview

Configuring the LT-501E for use with Plaspy means preparing the device to send its location and telemetry to the Plaspy server endpoint. Depending on how the device is deployed and what configuration interface you use, the goal is to set the server address and port, select transport if required, save the settings, and confirm the tracker is visible in Plaspy.

- Set the tracker to report to the Plaspy server endpoint so uplinks reach Plaspy.
- Configure the shared Plaspy port so the device is reachable by the platform.
- Choose transport (UDP or TCP) if the device requires an explicit selection.
- Use the manufacturer configuration method that applies to your device, for example SMS commands or vendor tools.
- Reboot or restart the tracker when required to apply changes and validate connectivity.

## Plaspy Server Settings

- Server domain d.plaspy.com for domain based configuration
- Server IP 54.85.159.138 for direct IP configuration
- Port 8888 which is the shared port used by Plaspy for all devices
- Transport support for UDP or TCP depending on the device configuration options
- Plaspy automatically detects the tracker protocol so the platform can decode messages once the tracker reports to the shared endpoint

## Typical Requirements Before Setup

- Access to the official manufacturer configuration method or software for the LT-501E
- The device powered and reachable by the chosen configuration channel
- If using SMS configuration, a phone or SMS gateway able to send SMS to the tracker
- The LT-501E IMEI available for use in configuration strings
- Knowledge of your cellular APN settings if cellular IP configuration is required
- A method to restart or reboot the device after applying settings

## How This Tracker Connects to Plaspy

The LT-501E is configured to send its reporting packets to the shared Plaspy server endpoint and port. Once the device is pointed at the Plaspy address, Plaspy will detect the tracker protocol and begin decoding and mapping incoming location and telemetry.

- Device sends uplinks to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device configuration options
- Plaspy automatically detects and decodes the tracker protocol for visibility in the platform
- After configuration the device appears in Plaspy for real time monitoring, geofencing, and alerts
- Validation of connectivity confirms that uplinks reach Plaspy and that the tracker is reporting correctly

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for the LT-501E such as the documented SMS command format or vendor tool.
2. Enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138 depending on the tracker interface.
3. Set the server port to 8888 which is used by Plaspy for all devices.
4. Choose UDP or TCP if the tracker requires an explicit transport selection.
5. Apply or save the configuration on the device using the manufacturer method.
6. Restart or reboot the tracker if the device requires it to apply configuration changes.
7. Validate that the device reports to Plaspy by confirming it appears in your Plaspy account and that recent uplinks are received.

## Example Configuration Commands

The following example commands are extracted from public device configuration content for the LT-501E. These commands are intended to be sent by SMS to the tracker. Preserve placeholders and compute the checksum exactly as required by the device before sending.

Notes about placeholders
- {{imei}} is the device IMEI and must be replaced with the tracker IMEI
- {{apn}} is the cellular APN name if applicable
- {{apnu}} is the APN username if required by your carrier
- {{apnp}} is the APN password if required by your carrier
- E0 and E1 in the command are used to set the Plaspy server IP and port respectively
- The trailing *{{checksum}} or *{{checksumreeboot}} must be replaced with the device checksum calculated over the part of the command before the asterisk using the tracker checksum algorithm

1. Setup command to point the tracker to Plaspy and set network parameters

```text
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- This command sets the APN placeholders and the Plaspy server IP and port.
- Keep the placeholders {{apn}}, {{apnu}}, {{apnp}} if your carrier requires APN credentials; otherwise they can be left empty or removed per manufacturer guidance.
- E0 is set to Plaspy server IP 54.85.159.138 and E1 is set to port 8888 as required by Plaspy.

2. Optional reboot command to apply settings immediately

```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

- This reboot command is shown in public configuration examples and can be used after applying settings to ensure the device restarts with the new configuration.
- Label this step optional and use it when the manufacturer instructions require a reboot to apply changes.

Checksum calculation
- The device checksum is computed as an XOR of the ASCII codes of the characters in the command segment before the asterisk. The result is represented as a two character uppercase hexadecimal string. Replace {{checksum}} or {{checksumreeboot}} with that hexadecimal value.

## Configuration Notes

- The LT-501E public configuration examples show SMS based commands as a valid manufacturer method. Use the method appropriate to your device and deployment.
- Plaspy uses the same port 8888 for all devices and will automatically detect the tracker protocol once the device reports to the server.
- Some deployments use LoRaWAN uplinks to forward data to Plaspy via a network server. If your deployment uses LoRaWAN, follow LoRa network server configuration and Plaspy integration guidance in addition to device configuration.
- Behavior and command formats can vary by firmware revision and hardware variant. Confirm exact syntax and required fields with the latest GlobalSat documentation.
- When choosing transport, select UDP or TCP according to the device configuration options and network environment.

## Why Use Plaspy with This Configuration

Using Plaspy with the LT-501E provides a consistent server endpoint and port for device reporting so operations teams can centralize visibility, alerts, and geofence monitoring. Pointing the tracker to d.plaspy.com or 54.85.159.138 on port 8888 allows Plaspy to automatically detect and decode the tracker protocol and surface location and telemetry in the Plaspy dashboard.

Learn more about Plaspy and how it integrates with devices like the GlobalSat LT-501E at https://www.plaspy.com. For device specific configuration methods, firmware behavior, and the latest manufacturer details verify information on the official GlobalSat website https://www.globalsat.com.tw/ which may be updated over time.
