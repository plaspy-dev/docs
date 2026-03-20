---
slug: /thingsys/ts_p4d/configuration
id: ts_p4d-configuration
sidebar_label: Configuration
title: ThingSys - TS-P4D Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for ThingSys TS-P4D use with Plaspy including server settings and SMS commands
keywords:
  - ThingSys TS-P4D configuration
  - ThingSys TS-P4D setup
  - TS-P4D server configuration
  - TS-P4D Plaspy setup
  - Plaspy tracker configuration
  - TS-P4D GPS tracker setup
  - ThingSys GPS tracker configuration
  - TS-P4D APN settings
  - vehicle tracking TS-P4D
  - asset tracking TS-P4D
---

# ThingSys - TS-P4D Configuration

This page documents the public configuration context for using the ThingSys TS-P4D tracker with the Plaspy platform. It summarizes the practical server settings and the common steps needed to point a TS-P4D at Plaspy so the device can report location and status. The information here combines the TS-P4D product description and the publicly available configuration commands provided by the manufacturer.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and the configuration method you choose. The TS-P4D can be configured via SMS commands as shown below or using manufacturer tools; confirm the exact commands and workflow for your unit and firmware before applying changes.

## Configuration Overview

The purpose of configuring a ThingSys TS-P4D for Plaspy is to prepare the tracker to deliver reliable position and event data to the Plaspy platform so devices appear in your fleet view and send alerts when required. Configuration focuses on network settings, APN for data, and the server endpoint and port that Plaspy uses.

- Set the operator APN, username, and password so the tracker can use mobile data.
- Point the tracker to Plaspy server settings so data is sent to the correct platform endpoint.
- Validate transport and connectivity so the device is visible in Plaspy.
- Optionally perform a factory reset when preparing a new or repurposed unit.
- Verify the device reports successfully and fine tune upload intervals or power settings as needed.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the tracker:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All Plaspy devices use the same port and Plaspy will detect the tracker protocol automatically, so ensure the server endpoint and port are entered correctly on the device.

## Typical Requirements Before Setup

- A charged TS-P4D unit with sufficient battery for setup and testing.
- A working mobile SIM with an active data plan and the correct APN for the carrier.
- Ability to send SMS to the tracker or access to the manufacturer's configuration software or tool.
- Knowledge of the tracker's configuration password if one is required (the sample default shown below is 123456).
- Access to the Plaspy account or fleet setup where the device will be registered or monitored.
- A stable test area with mobile coverage to validate device reporting to Plaspy.

## How This Tracker Connects to Plaspy

The TS-P4D is configured to send its location and event data to the shared Plaspy server endpoint and port so the device becomes visible in the Plaspy platform. Once configured, the tracker will transmit telemetry over the chosen transport and Plaspy will accept and interpret the protocol automatically.

- The device uses the configured APN to establish GPRS/packet data connectivity.
- Telemetry is sent to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- You can choose UDP or TCP on the tracker if the device requires a transport selection.
- Plaspy automatically detects the tracker protocol so the server side is uniform across devices.
- Successful reporting makes the device visible in Plaspy for monitoring and event alerting.

## Common Configuration Workflow

1. Access the official ThingSys configuration method for your TS-P4D, for example the SMS command interface or manufacturer software.
2. If using SMS or a device interface, set the carrier APN so the tracker can use mobile data.
3. Enter the Plaspy server endpoint as either d.plaspy.com or the IP address 54.85.159.138.
4. Set the port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP if the TS-P4D requires a transport selection.
6. Apply or save the configuration on the device and restart the tracker if required.
7. Validate the device reports to Plaspy and appears in your Plaspy fleet view.

If you are using the SMS method shown in the example commands below, follow the commands in the order given and verify connectivity after setting APN and server parameters.

## Example Configuration Commands

The manufacturer provides the following SMS command sequence as a public example. The sample setup uses the device password 123456 which is shown as the default in the sample commands. Keep the command order when performing an initial setup.

- Optional initial factory reset (use only if you need to clear previous settings):

```text
FORMAT
```

- Set the operator APN (replace {{apn}} with your carrier APN):

```text
apn123456 {{apn}}
```

- Set the APN username (replace {{apnu}} with your carrier APN username if required):

```text
apnuser123456 {{apnu}}
```

- Set the APN password (replace {{apnp}} with your carrier APN password if required):

```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to the Plaspy IP and port (this is the manufacturer example command; the server details for Plaspy are IP 54.85.159.138 and port 8888):

```text
ip54.85.159.138 8888
```

- Verify current settings with the provided status command:

```text
CXZT
```

Notes on placeholders and password:
- {{apn}} is a placeholder for your carrier APN name.
- {{apnu}} is a placeholder for the APN username if the carrier requires it.
- {{apnp}} is a placeholder for the APN password if the carrier requires it.
- The sample SMS commands above use the device password 123456 as shown in the manufacturer's public guidance. Confirm the correct password for your device before sending commands.

## Configuration Notes

- Manufacturer SMS commands, command syntax, and required passwords may change between firmware versions; verify the exact syntax for your firmware.
- Some installers prefer the manufacturer configuration tool or USB/serial interface rather than SMS; use the official tool if available for bulk or secure provisioning.
- Choose UDP or TCP according to your reliability and network behavior; some networks or carriers may favor one transport over the other.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection, so the critical settings are the server endpoint and port.
- When using SMS for configuration, allow a short delay for settings to apply and confirm with the verification command.

## Why Use Plaspy with This Configuration

Configuring the ThingSys TS-P4D to report to Plaspy gives organizations a straightforward way to collect location, movement, and event data in a single platform for operational visibility. The shared Plaspy server endpoint and automatic protocol detection reduce per-device complexity and help accelerate deployment across fleets or asset groups.

To learn more about Plaspy and how it can integrate with trackers like the TS-P4D, visit https://www.plaspy.com. For the most current device-specific commands, firmware notes, and detailed setup instructions, verify details on the manufacturer site https://www.thingsys.com/ as device behavior and configuration methods can change over time.
