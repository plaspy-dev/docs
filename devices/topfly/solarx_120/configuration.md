---
slug: /topfly/solarx_120/configuration
id: solarx_120-configuration
sidebar_label: Configuration
title: TopFly - SolarX 120 Configuration
sidebar_class_name: menu_item_tracker
description: Configure TopFly SolarX 120 for Plaspy with public server settings SMS commands and practical setup steps
keywords:
  - TopFly SolarX 120 configuration
  - TopFly SolarX 120 setup
  - SolarX 120 Plaspy configuration
  - SolarX 120 server settings
  - SolarX 120 GPS tracker setup
  - TopFly GPS tracker configuration
  - Plaspy device configuration
  - asset tracker SolarX 120
  - SolarX 120 SMS setup
  - SolarX 120 deployment guide
---

# TopFly - SolarX 120 Configuration

This page describes the public configuration context for using the TopFly SolarX 120 with Plaspy. It focuses on the practical steps and public settings you will use to point the device at Plaspy for telemetry and location reporting. Where available, example SMS commands from the manufacturer are included to illustrate how to apply the settings described here.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools, so follow these public settings together with the official TopFly documentation and any vendor-supplied configuration utilities.

## Configuration Overview

The goal of this configuration process is to prepare the SolarX 120 to send GNSS location fixes and BLE sensor telemetry to Plaspy so the device becomes visible and manageable in the platform. For SolarX 120, common public setup actions include SMS-based commands or the vendor software to set APN, server address and reporting cadence.

- Point the device to the Plaspy server domain or IP and use the shared Plaspy port so the platform receives telemetry.
- Configure the device APN credentials so the tracker can establish a cellular data session for GPRS/LTE uploads.
- Select UDP or TCP transport if the device requires a transport choice and set the port to the Plaspy port.
- Set a reporting interval appropriate for your deployment and confirm buffered reporting behavior in the field.
- Validate connectivity and telemetry in Plaspy after the device is online.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for telemetry and reporting

## Typical Requirements Before Setup

- A charged SolarX 120 with an active cellular SIM capable of data and SMS as needed.
- APN credentials from the mobile operator to allow the tracker to establish a data session.
- Access to the device SMS interface or the official TopFly configuration tool provided by the vendor.
- Knowledge of the device password if SMS commands require it (the sample default password in public setup examples is 0000).
- A Plaspy account or platform access to verify the device appears and is reporting as expected.
- Basic field tools to restart or power cycle the device if required during configuration.

## How This Tracker Connects to Plaspy

SolarX 120 is configured to report GNSS fixes and BLE sensor telemetry to the shared Plaspy server endpoint and port. In normal coverage the device uploads live location and sensor data; when coverage is unavailable it buffers data locally and uploads the stored points when connectivity is restored.

- The tracker sends GNSS location fixes to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP.
- BLE sensor telemetry and internal sensor events (for example temperature, humidity, or door status) are relayed to Plaspy through the same server endpoint.
- Buffered data uploads occur when the device regains network connectivity to ensure historical tracks are preserved.
- Movement, removal, and other event alerts are forwarded to Plaspy for rule based handling and operational monitoring.
- Plaspy automatically detects the tracker protocol so a correct server and port configuration normally allows the platform to interpret incoming messages.

## Common Configuration Workflow

1. Access the official TopFly configuration method or vendor software, or prepare to send SMS commands as documented by TopFly.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the server/host field.
3. Set the device port to 8888; remember Plaspy uses the same port across devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Set APN and APN credentials for the device so it can establish cellular data connectivity.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate the device reports to Plaspy by checking the device status and recent telemetry in the platform.

## Example Configuration Commands

The manufacturer provides a set of SMS commands for basic public configuration. The example commands below use the device sample password 0000. Preserve and replace placeholders as noted.

- Set the time zone to UTC+0
```text
GMT,0000,0#
```

- Set the operator APN (placeholders shown)
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} = APN name provided by your mobile operator
- {{apnu}} = APN username if required by the operator; leave blank if not used
- {{apnp}} = APN password if required by the operator; leave blank if not used

- Set the GPRS server to the Plaspy server IP and port
```text
IP,0000,54.85.159.138 8888#
```

- Set the reporting interval (example sets 60 second interval)
```text
TIMER,0000,60:60:0:0#
```

Notes on commands:
- These commands are sent by SMS to the device using the device password (the public sample password is 0000). Change the default password after setup if supported by your device.
- Preserve the order of commands where the manufacturer indicates an order is required (for example APN before server and timer settings).
- If your deployment or firmware requires different syntax, use the official TopFly documentation or vendor tools.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available features; always confirm with manufacturer release notes.
- The SolarX 120 supports SMS based configuration as shown, but many installations will use vendor software or an over the air provisioning tool when available.
- Choose UDP or TCP based on network reliability and firmware recommendations; behavior can differ between transports.
- Because Plaspy uses a single shared port and automatic protocol detection, the critical items are correct server address and port plus valid APN settings.
- Change default device passwords where supported and store credentials securely.

## Why Use Plaspy with This Configuration

Using the SolarX 120 with Plaspy delivers continuous visibility for heavy assets, combining rugged solar assisted hardware with a platform that accepts standardized telemetry on a shared endpoint. This configuration enables real time tracking, buffered uploads during connectivity gaps, and sensor telemetry integration for environmental monitoring and anti-theft workflows.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information on the manufacturer site https://www.topflytech.com/ before finalizing a deployment.
