---
slug: /thingsys/ts_vb20/configuration
id: ts_vb20-configuration
sidebar_label: Configuration
title: ThingSys - TS-VB20 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ThingSys TS-VB20 showing Plaspy server settings SMS commands and setup steps for easy integration
keywords:
  - ThingSys TS-VB20 configuration
  - ThingSys TS-VB20 setup
  - TS-VB20 Plaspy integration
  - TS-VB20 server configuration
  - TS-VB20 GPS tracker setup
  - OBDII tracker configuration
  - Plaspy tracker configuration
  - vehicle telemetry setup
  - fleet tracking configuration
  - TS-VB20 SMS configuration
---

# ThingSys - TS-VB20 Configuration

This page describes the public configuration context for using the ThingSys TS-VB20 with Plaspy. It focuses on the shared server settings Plaspy requires, the practical workflow to prepare the device, and the public SMS configuration commands published for this model. Use this guide to align an OBDII TS-VB20 for connection to the Plaspy platform while keeping manufacturer documentation at hand for device specific details.

Plaspy uses a single shared server endpoint and port across supported devices and it automatically detects the tracker protocol. Exact manufacturer side steps can vary with firmware version, hardware revision, installation type, and vendor configuration tools, so treat the SMS commands and workflow here as a practical public reference rather than an exhaustive manufacturer manual.

## Configuration Overview

The goal of configuring the TS-VB20 for Plaspy is to establish reliable GPRS connectivity to Plaspy servers, confirm the device can send position and OBD telemetry, and make the device visible in the Plaspy platform. For this model, public configuration commonly uses SMS commands and standard OBDII plug installation to enable reporting.

- Configure the device APN and credentials so it can attach to a GPRS network.
- Point the device to the Plaspy server endpoint and port so telemetry is forwarded to Plaspy.
- Choose the transport mode (UDP or TCP) if required, and save the settings.
- Verify the device is reporting to Plaspy and that location plus OBD telemetry appear in the platform.
- Optionally perform a factory reset when preparing a device for new deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration and lookups
- Server IP 54.85.159.138 for direct IP based configuration if required
- Port 8888 as the destination port for all Plaspy devices
- Transport support for UDP or TCP depending on device firmware and preference
- Plaspy automatically detects the tracker protocol so devices can use the same port and be processed on the platform

Note that Plaspy uses the same port for all supported devices and performs automatic protocol detection, which simplifies server configuration on the tracker side.

## Typical Requirements Before Setup

- A powered vehicle OBDII socket or an equivalent power source for initial configuration and testing
- A valid cellular SIM with active data or GPRS service compatible with the device
- Access to the ThingSys SMS configuration method or the official ThingSys configuration tool
- Knowledge of the device default password where applicable (the public sample default is 123456)
- Physical access to the vehicle to plug the TS-VB20 into the OBDII port and to monitor status LEDs
- A phone capable of sending SMS commands to the device if using SMS based configuration

## How This Tracker Connects to Plaspy

The TS-VB20 sends location and OBDII telemetry to the Plaspy platform over GPRS. Configuration sets the tracker to forward its data to the shared Plaspy server endpoint and port so Plaspy can ingest location updates and ECU derived telemetry for monitoring and reporting.

- The device is configured to target d.plaspy.com or 54.85.159.138 as the server endpoint
- All data is sent to port 8888 which Plaspy uses for device ingestion
- The tracker will use UDP or TCP as chosen during setup and Plaspy will auto detect the protocol used
- Telemetry includes GPS/AGPS/LBS location updates and OBDII derived signals for vehicle visibility
- Plaspy receives the telemetry and presents events, geofence alerts, trip playback, and basic diagnostic data

## Common Configuration Workflow

1. Access the official ThingSys configuration method or software, or prepare to send SMS commands as documented by ThingSys.
2. Ensure the device has power and an active SIM, and the default password (example public default 123456) is known before sending commands.
3. Enter the Plaspy server information using either the domain d.plaspy.com or the IP address 54.85.159.138, and set port 8888.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Save or apply the configuration on the device and, if applicable, restart the tracker to apply network settings.
6. Validate that the device reports to Plaspy by checking device status and incoming telemetry on the Plaspy platform.
7. If there are connectivity issues, consider an optional factory reset and repeat configuration, or consult ThingSys documentation.

## Example Configuration Commands

The TS-VB20 public configuration examples for this model use SMS commands. The sample public default device password shown in manufacturer examples is 123456. Commands are presented in the published order. Replace placeholders with your operator values when required.

1. Optional initial factory reset (use only when required)
```text
FORMAT
```

2. Set the operator APN
```text
apn123456 [apn]
```
- [apn] placeholder means replace with your mobile operator APN value.

3. Set the APN username
```text
apnuser123456 [apnu]
```
- [apnu] placeholder means replace with your APN username if required by the operator.

4. Set the APN password
```text
apnpasswd123456 [apnp]
```
- [apnp] placeholder means replace with your APN password if required by the operator.

5. Set the GPRS server to the Plaspy server IP and port (public example)
```text
ip54.85.159.138 8888
```
- This command configures the device to use the Plaspy server IP and port as provided in public configuration samples. If your device supports name based server configuration, you may use the domain d.plaspy.com as the server host where appropriate according to manufacturer syntax.

Verification command to request current settings
```text
CXZT
```
- Send CXZT to have the device return configuration status where supported by firmware.

Important notes on SMS commands
- The commands above include the public sample password sequence as shown in ThingSys public examples. Some command syntaxes require the device password inserted into the command text. Keep the default password 123456 as shown in public examples unless changed.
- Send SMS commands from an authorized phone and wait for confirmation SMS replies from the device if the firmware supports acknowledgement.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available features; always cross check with the ThingSys documentation for the specific TS-VB20 firmware version.
- The model supports SMS based configuration in public examples. If you have access to an official ThingSys configuration tool, prefer that for bulk provisioning.
- When offered by the device, UDP often provides lower overhead while TCP can provide more reliable delivery; choose based on network conditions and fleet needs.
- Plaspy receives device telemetry on a single shared port and automatically detects protocol, so server port configuration is consistent across devices.
- If you use the IP based server command shown above, you may alternatively configure the device to use d.plaspy.com when the device syntax supports hostnames.

## Why Use Plaspy with This Configuration

Using the ThingSys TS-VB20 configured to send telemetry to Plaspy gives fleets and vehicle owners centralized visibility into location, driving events, and basic vehicle health. The TS-VB20's plug and play OBDII form factor combined with Plaspy's ingestion and protocol detection makes it straightforward to deploy trackers across many vehicles while maintaining consistent server settings.

To learn more about Plaspy and how it processes tracker telemetry visit https://www.plaspy.com. For the latest device specific command syntax firmware notes and installation guidance always verify the manufacturer documentation at https://www.thingsys.com/ as device behavior and setup methods can change over time.
