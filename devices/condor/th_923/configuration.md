---
slug: /condor/th_923/configuration
id: th_923-configuration
sidebar_label: Configuration
title: Condor - TH-923 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Condor TH 923 showing Plaspy server settings SMS commands and setup workflow
keywords:
  - Condor TH-923
  - TH-923 configuration
  - Condor tracker setup
  - TH-923 Plaspy
  - Plaspy tracker configuration
  - GPS tracker configuration
  - fleet tracking setup
  - vehicle tracking configuration
  - asset tracker setup
  - maritime tracker configuration
---

# Condor - TH-923 Configuration

This page documents the public configuration context for using the Condor TH-923 with the Plaspy tracking platform. It focuses on the practical server settings and the publicly available SMS setup commands used to point a compatible TH-923 device at Plaspy so the device can deliver location and telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools; this guide presents the public, practical values and the sample SMS commands included in the device configuration material to help you integrate the TH-923 with Plaspy.

## Configuration Overview

The goal of this configuration process is to prepare the TH-923 to communicate reliably with Plaspy, validate that the device can reach the platform, and enable visibility of the asset in Plaspy dashboards and reports.

- Configure the TH-923 network settings so it reports to Plaspy’s shared server endpoint and port.
- Set APN and GPRS parameters so the device can establish a data session for telemetry delivery.
- Use the provided SMS commands to apply server, interval, timezone, and identifier settings where supported.
- Validate connectivity and confirm the device appears in Plaspy after configuration.
- Ensure device identifiers and credentials are set to match your inventory and security practices.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy endpoint and port to enter when configuring the TH-923 so the device reports position and telemetry to the Plaspy platform.

## Typical Requirements Before Setup

- A powered TH-923 device with an active SIM card and data permissions for GPRS where cellular is used.
- Access to an SMS-capable phone or manufacturer configuration tool to send setup commands if using SMS-based configuration.
- The device IMEI and a way to derive or confirm the five digit identifier (the device often uses the last five digits of the IMEI).
- Knowledge of the operator APN and optional APN username and password for the installed SIM.
- The device default password for SMS configuration as supplied in the public configuration content (example default password 0000).
- A plan to test and validate that the TH-923 reports into Plaspy after applying settings.

## How This Tracker Connects to Plaspy

The TH-923 is configured to report location and event data to Plaspy by pointing its GPRS server settings at the Plaspy server endpoint and port. Plaspy then ingests incoming connections and automatically identifies the tracker protocol so the device can deliver telemetry without per-device protocol selection on the platform side.

- The device sends position and status updates to the Plaspy server endpoint and port listed above.
- Telemetry is delivered over the chosen transport (UDP or TCP) depending on the device configuration.
- Plaspy detects the incoming protocol automatically so the same server and port work for supported device types.
- Events such as geofence triggers, motion, or other sensor signals flow into Plaspy as the device reports them.
- Successful configuration enables map visibility, history, and alerts inside the Plaspy platform.

## Common Configuration Workflow

1. Access the official Condor configuration method for the TH-923 such as the manufacturer SMS commands or authorized setup tool.
2. Enter the Plaspy server domain or IP address (d.plaspy.com or 54.85.159.138) into the device server field.
3. Set the port to 8888 in the device server settings.
4. Choose UDP or TCP transport if the device requires you to select a transport type.
5. Configure APN, device identifier (alias), timezone, update interval, and enable GPRS mode as needed.
6. Apply or save the configuration and restart the device if the device or manufacturer instructions require a reboot.
7. Validate the device reports to Plaspy by checking the platform for incoming updates or by using the device verification SMS command.

## Example Configuration Commands

The TH-923 public configuration material includes SMS commands that can be sent to the device to set APN, server, interval, timezone, alias and to verify connection. The commands below preserve the placeholders as provided in the public content. Send each command via SMS to the device phone number. The example uses the default SMS configuration password 0000 as shown in the public material.

- Set the operator APN. Replace {{apn}} with the carrier APN. If the APN requires username and password include {{apnu}} and {{apnp}}.

```
APN,0000,{{apn}}
```

Optional form with APN username and password:

```
APN,0000,{{apn}},{{apnu}},{{apnp}}
```

- Set a 5 digit identifier (alias). Use the last five digits of the device IMEI in place of {{imei_last5}}:

```
ALIAS,0000,{{imei_last5}}#
```

- Set the timezone to UTC 0 (example):

```
GMT,0000,-0#
```

- Set the GPRS server to point the device at Plaspy. This example uses the public Plaspy IP and port and the transport flag as shown in the public commands:

```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```

- Set the update interval (public example sets an interval corresponding to a one minute update in the provided material):

```
INTERVALO,0000,M,6#
```

- Enable GPRS mode:

```
GPRS,0000,A#
```

- Verify the device connection and settings:

```
CONEXION,0000#
```

Notes on placeholders and values:
- {{apn}} is the mobile operator APN for the installed SIM.
- {{apnu}} and {{apnp}} are optional APN username and password placeholders; include them only if required by the operator.
- {{imei_last5}} represents the last five digits of the device IMEI; the public material recommends using those digits as the device identifier.
- The default SMS configuration password in the provided public content is 0000; verify if your device has a different password before sending commands.

## Configuration Notes

- The TH-923 supports SMS-based configuration as shown in the public commands; you can use SMS or an authorized manufacturer tool as available.
- Firmware revisions and regional firmware variants can change command formats or behavior; confirm the exact command syntax with the device documentation if in doubt.
- When choosing transport, UDP and TCP are available depending on the device command set; Plaspy accepts either and will detect the protocol automatically on port 8888.
- Ensure the installed SIM has data and GPRS enabled where cellular is used; APN settings must match the mobile operator.
- Test connectivity after configuration using the CONEXION command and by verifying the device appears in Plaspy.

## Why Use Plaspy with This Configuration

Using the Condor TH-923 with Plaspy lets organizations maintain continuous visibility over assets that operate in mixed coverage environments. By configuring the TH-923 to report to Plaspy’s shared server and port, operators can receive location history, alerts, and telemetry in a single platform that recognizes the device protocol automatically. This is particularly valuable for assets that require resilient connectivity such as maritime vessels, long-haul cargo, and remote worksite equipment.

Learn more about Plaspy and how the platform can integrate with devices like the TH-923 at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup instructions and command syntax on the manufacturer website https://condorskyseeker.com/ before deployment.
