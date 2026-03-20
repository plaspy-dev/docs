---
slug: /teltonika/fmm800/configuration
id: fmm800-configuration
sidebar_label: Configuration
title: Teltonika - FMM800 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect a Teltonika FMM800 to Plaspy with server values and example commands
keywords:
  - Teltonika FMM800 configuration
  - Teltonika FMM800 setup
  - FMM800 Plaspy configuration
  - FMM800 GPS tracker setup
  - Teltonika server configuration
  - fleet tracker configuration
  - OBD II tracker configuration
  - vehicle tracking setup
  - Plaspy tracker configuration
  - Teltonika Configurator guide
---

# Teltonika - FMM800 Configuration

This page documents the public configuration context for using the Teltonika FMM800 with Plaspy. It focuses on the shared server settings and practical configuration steps you can use to point the tracker at Plaspy for real time location and telemetry reporting. The guidance here reflects public Plaspy server values and an example SMS style command commonly used with Teltonika devices.

Plaspy uses the same server endpoint and port across supported devices and automatically detects the tracker protocol, however exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or the Teltonika provisioning tool you use. The FMM800 is an OBD II plug and play unit that supports remote provisioning via Teltonika tools and can also accept SMS style commands for basic parameter updates.

## Configuration Overview

This configuration process prepares an FMM800 to communicate with Plaspy by setting the device APN and the Plaspy server endpoint so the tracker can send location and telemetry to the platform. The example command below shows how APN credentials and server details are commonly set on Teltonika devices.

- Set the device cellular APN credentials so the tracker can access the mobile data network.
- Configure the server endpoint to point to the Plaspy server domain d.plaspy.com and the correct port.
- Choose the transport mode (UDP or TCP) if the device requires an explicit selection.
- Save and apply settings so the device starts reporting to Plaspy and becomes visible in the platform.
- Validate connectivity and reporting to confirm the tracker is sending location and telemetry to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Supported transport UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically when the device connects.

## Typical Requirements Before Setup

- Physical access to the vehicle OBD II port to power and install the FMM800.
- An active SIM card and mobile data plan compatible with the device and regional networks.
- Access to Teltonika configuration tools such as Teltonika Configurator or Teltonika FOTA WEB, or an SMS provisioning path if available.
- The correct APN, APN username, and APN password for the mobile operator serving the SIM.
- Basic knowledge of whether your installation prefers UDP or TCP transport for telemetry.
- Ability to restart or power cycle the device after applying configuration if the device firmware requires it.

## How This Tracker Connects to Plaspy

When configured, the FMM800 sends GNSS and OBD derived telemetry to the Plaspy endpoint so the platform can process live location, alerts, and historical data. The device is set to report to the shared Plaspy server endpoint and port so Plaspy can ingest and display vehicle data in dashboards and reports.

- The tracker uses cellular connectivity and the configured APN to open a data session.
- Device telemetry and location packets are directed to d.plaspy.com (or the server IP 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on your configuration; Plaspy supports both and auto detects protocol.
- Plaspy receives telemetry and makes the device visible in the platform for live tracking and alerts.
- Status and event reporting from the device are available in Plaspy for operational monitoring.

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer such as Teltonika Configurator, FOTA WEB, or the device SMS provisioning interface.
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the server or host field.
3. Set the server port to 8888 to match Plaspy’s shared port for all devices.
4. Choose UDP or TCP transport if the device requires transport selection in its settings.
5. Enter APN credentials for the SIM using the device provisioning tool or SMS command.
6. Apply or save the configuration and perform a restart or power cycle if the device firmware requires it.
7. Validate that the device reports to Plaspy by checking device status in the platform and confirming incoming telemetry.

Follow these steps in the order that matches your chosen provisioning tool. The example SMS style command below illustrates a common batch parameter set used on Teltonika devices.

## Example Configuration Commands

The following public example shows a Teltonika batch parameter command used to set APN credentials and server endpoint on compatible devices. Preserve the placeholders and replace them with your network values.

- Example SMS or batch setparam command

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explanation of placeholders and fields
- {{apn}} Replace with the mobile network APN name for the SIM.
- {{apnu}} Replace with the APN username if required by the operator. Leave blank if not required.
- {{apnp}} Replace with the APN password if required by the operator. Leave blank if not required.
- 2004 in the command is set to d.plaspy.com the Plaspy server domain used for reporting.
- 2005 in the command is set to 8888 the Plaspy port used across devices.
- 2006 in the command in this example selects a transport mode. Verify the numeric values for UDP or TCP in the Teltonika documentation or device parameter reference for your firmware.

If your provisioning workflow requires the server IP instead of the domain, you can substitute d.plaspy.com with 54.85.159.138 in the same command format. Always verify the correct numeric values for transport selection with Teltonika documentation.

## Configuration Notes

- Teltonika firmware versions and parameter codes can vary; confirm parameter numbers and accepted values in the official Teltonika Configurator or parameter reference for your firmware revision.
- The example command shows SMS or batch style provisioning which is commonly supported by Teltonika tools; use Teltonika Configurator or FOTA WEB for centralized provisioning at scale.
- Choose UDP or TCP according to your network and operational needs; Plaspy supports both and detects the protocol automatically when the tracker connects.
- Preserve placeholders such as {{apn}} {{apnu}} and {{apnp}} when preparing commands and replace them with your operator credentials before sending.
- After applying settings, validate connectivity and telemetry in Plaspy to ensure the device is visible and reporting as expected.

## Why Use Plaspy with This Configuration

Using the FMM800 with Plaspy gives organizations a low friction way to collect vehicle location and OBD based telemetry through a plug and play OBD II device. Pointing the tracker at Plaspy with the shared server settings lets your fleet management workflows, alerts, and reporting use the device data without per device custom server configuration.

Learn more about Plaspy and how it can centralize tracking and telemetry for your deployment at https://www.plaspy.com. For the most current device specific parameter names firmware details and configuration instructions verify the manufacturer documentation at https://www.teltonika-gps.com/ before making broad deployment changes.
