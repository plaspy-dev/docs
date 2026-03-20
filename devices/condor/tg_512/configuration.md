---
slug: /condor/tg_512/configuration
id: tg_512-configuration
sidebar_label: Configuration
title: Condor - TG-512 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Condor TG-512 with Plaspy including server values SMS commands and setup checklist
keywords:
  - Condor TG-512 configuration
  - Condor TG-512 setup
  - TG-512 Plaspy integration
  - TG-512 server configuration
  - TG-512 SMS commands
  - TG-512 GPRS setup
  - Plaspy tracker configuration
  - GPS tracker platform setup
  - vehicle tracking configuration
  - fleet tracking TG-512
---

# Condor - TG-512 Configuration

This page documents the public configuration context for using the Condor TG-512 GPS tracker with Plaspy. It focuses on the practical, manufacturer-public steps and server values required to point the device at Plaspy so the tracker can communicate location and telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools. This page includes the publicly available SMS command examples supplied for the TG-512 and explains how those commands map to Plaspy server settings.

## Configuration Overview

The configuration process prepares the TG-512 to send GNSS fixes and telemetry to Plaspy using cellular data and the device's GPRS stack. For TG-512 units, manufacturer-provided SMS commands are commonly used to set APN, server, reporting interval, and GPRS mode before the device will report to Plaspy.

- Point the device to the Plaspy server endpoint so the tracker knows where to send data.
- Configure the cellular APN and any required APN username or password for GPRS connectivity.
- Set a reporting interval and GPRS mode so the tracker transmits position updates at the desired cadence.
- Verify connectivity and server reachability using the provided verification command.
- Validate the device appears in Plaspy dashboards once reporting begins.

## Plaspy Server Settings

Set the device to report to the following Plaspy endpoint information:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP when required by the device
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

Use these exact values when configuring the TG-512 server entry so Plaspy can ingest data from the tracker.

## Typical Requirements Before Setup

- A powered and functional TG-512 unit with a valid SIM card and an active data plan for GPRS communication.
- The SIM must allow outgoing SMS if you will use SMS commands, and allow GPRS data for sending telemetry.
- The device IMEI number available for identification and aliasing during setup.
- APN settings from the mobile operator including {{apn}} and optionally {{apnu}} and {{apnp}} when required by the carrier.
- Access to the official Condor configuration method such as SMS commands or the vendor tool recommended for your firmware version.
- Manufacturer documentation and firmware notes to confirm command syntax and any device-specific nuances.

## How This Tracker Connects to Plaspy

Once configured, the TG-512 sends GNSS fixes and telemetry over the cellular network to the shared Plaspy server endpoint and port. Plaspy ingests these messages and maps them to the associated device record so location, events, and telemetry are visible in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- The device transmits data over GPRS using the selected transport (UDP or TCP).
- Plaspy automatically detects the tracker protocol when the device connects to the platform.
- Successful reporting enables live position updates, event reporting, and telemetry visibility inside Plaspy.
- Verification commands can be used to confirm the device has accepted server and GPRS settings before full validation in Plaspy.

## Common Configuration Workflow

1. Access the official Condor configuration method for your TG-512 unit, such as SMS commands or manufacturer software. This is the authoritative way to change device settings.
2. Enter the Plaspy server using either the domain d.plaspy.com or the IP 54.85.159.138 in the device server configuration field.
3. Set the port to 8888. All devices in Plaspy use the same port so use 8888 for TG-512 reporting.
4. Choose UDP or TCP as the transport if the TG-512 requires a transport selection when setting the server.
5. Configure APN and any APN credentials for your SIM using the operator APN values (placeholders such as {{apn}} may be used in commands).
6. Apply or save the configuration and restart the device if the device requires a reboot for settings to take effect.
7. Validate the device by using the verification command and confirm the tracker appears and reports in Plaspy.

## Example Configuration Commands

The TG-512 can be configured using SMS commands. The following examples are taken from the public configuration format supplied for the device. The sample device password shown here is 0000 which is the default in the public examples. Replace placeholders and the password as appropriate for your device and security policy.

- Set the operator APN. Replace {{apn}}, {{apnu}}, and {{apnp}} with your carrier values as needed. The APN username and password fields are optional depending on your operator.

```
APN,0000,{{apn}}{{,{{apnu}},{{apnp}}}}
```

- Set a 5 digit identifier (alias) using the last 5 digits of the IMEI. Replace IMEI_LAST5 with the device specific last five IMEI digits.

```
ALIAS,0000,IMEI_LAST5#
```

- Set the timezone to UTC 0 (example shown). Adjust timezone string as required for your region.

```
GMT,0000,-0#
```

- Set the GPRS server using the public Plaspy IP and port. This command includes transport and mode flags. The example shows the Plaspy IP 54.85.159.138 and port 8888 and uses a transport flag included in the device command.

```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```

- Set the update interval to one minute in the provided command format. Confirm the correct interval code with manufacturer documentation if you need a different cadence.

```
INTERVALO,0000,M,6#
```

- Set GPRS mode to activate GPRS data for reporting.

```
GPRS,0000,A#
```

- Verify the current connection and server settings with the following verification command.

```
CONEXION,0000#
```

Notes on placeholders and values:
- {{apn}} is the mobile operator APN string required for data on the SIM.
- {{apnu}} and {{apnp}} are optional APN username and password placeholders used by some carriers.
- The sample password 0000 is shown in the public examples. If your device uses a different password, replace 0000 with the device password.
- The SERVIDOR command example uses 54.85.159.138 and port 8888 which are Plaspy public settings. The character U in the example indicates the transport flag used in the command syntax; confirm transport letter mapping with the device manual if needed.

## Configuration Notes

- SMS based configuration is commonly used for TG-512 devices, but manufacturer tools or configuration software may also be available; follow the method recommended for your firmware.
- Firmware revisions and regional hardware variants may change exact command syntax and available flags. Verify commands against the Condor TG-512 documentation for your device.
- Choose UDP or TCP based on the transport your installation requires. The TG-512 supports selection of transport in the server command and Plaspy accepts either transport on port 8888.
- The public command examples show the default password 0000. Change default passwords according to your security policy and record the new password securely.
- Verify APN credentials with your mobile operator before sending commands to avoid connectivity delays.

## Why Use Plaspy with This Configuration

Using the Condor TG-512 with Plaspy gives organizations a straightforward path to turn tracker telemetry into operational visibility. By configuring the TG-512 to report to Plaspy's shared server endpoint and port, fleets and asset operators can receive live position updates, event notifications, and consolidated telemetry in Plaspy for dispatching, monitoring, and reporting.

To learn more about how Plaspy handles device integrations and platform features visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest instructions and command syntax on the official Condor site https://condorskyseeker.com/ before applying changes.
