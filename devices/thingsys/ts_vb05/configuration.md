---
slug: /thingsys/ts_vb05/configuration
id: ts_vb05-configuration
sidebar_label: Configuration
title: ThingSys - TS-VB05 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ThingSys TS-VB05 GPS tracker integration with Plaspy servers and common setup steps
keywords:
  - ThingSys TS-VB05 configuration
  - TS-VB05 setup
  - ThingSys GPS tracker configuration
  - TS-VB05 Plaspy setup
  - GPS tracker server configuration
  - OBDII tracker setup
  - vehicle tracking setup
  - fleet tracking configuration
  - TS-VB05 SMS configuration
  - Plaspy tracker integration
---

# ThingSys - TS-VB05 Configuration

This page documents the public configuration context for using the ThingSys TS-VB05 OBDII GPS tracker with the Plaspy platform. It focuses on the practical server settings and configuration workflow required to connect the device to Plaspy so location and OBD telemetry appear in your Plaspy account. The guidance below draws on the device description and the publicly available SMS commands that some TS-VB05 units accept.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where TS-VB05 public commands are available they are presented here; always confirm details against the latest ThingSys documentation and firmware notes.

## Configuration Overview

Configuring a TS-VB05 for Plaspy prepares the device to send position and OBD telemetry to the Plaspy ingestion endpoint so the unit becomes visible and reportable in the platform. Typical configuration ensures the device has proper cellular connectivity, the correct APN, and the Plaspy server endpoint and port configured.

- Prepare the device network settings so it can reach the Plaspy server endpoint
- Set the operator APN, APN credentials if required, and verify cellular connectivity
- Configure the tracker to report to Plaspy using the shared server endpoint and port
- Validate connectivity and telemetry reporting so the device appears in Plaspy dashboards
- Optionally perform a factory reset as an initial setup step when required by installation workflows

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888 depending on device capability  
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

## Typical Requirements Before Setup

- A powered TS-VB05 installed in the vehicle OBDII port or powered per manufacturer guidance
- An active cellular SIM with a data plan and SMS capability if using SMS configuration
- APN name and credentials from the mobile network operator for GPRS/3G/4G connectivity
- Access to the manufacturer configuration method for the installed unit such as SMS commands or vendor software
- The device default password when required for commands (public default shown in commands section)
- A Plaspy account and device provisioning process as required by your fleet or service manager

## How This Tracker Connects to Plaspy

When configured to the Plaspy endpoint the TS-VB05 sends position updates and OBD telemetry over the cellular link to the shared Plaspy server and port so Plaspy can render location, trips, and telemetry. The Plaspy platform ingests messages and automatically recognizes the protocol used by the device.

- The tracker reports GPS and hybrid positioning data to the Plaspy server endpoint and port
- OBD telemetry and vehicle diagnostics are transmitted alongside positional messages for Plaspy analytics
- Alerts and event messages (for example tamper or low battery) are sent to the same Plaspy endpoint
- Plaspy uses the shared server address and port so multiple device models use the same ingestion endpoint
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device in the platform

## Common Configuration Workflow

1. Access the official ThingSys configuration method for your TS-VB05 unit, either via SMS commands or the vendor configuration tool supplied by the manufacturer.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 depending on what the device accepts.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport if the device requires a transport selection; use the transport that matches your network and firmware capability.
5. Enter the operator APN and APN credentials if required (use the placeholders or values from your SIM operator).
6. Apply or save the configuration on the device and restart the unit if required by the device or after a factory reset.
7. Validate that the device reports to Plaspy by checking device activity in the Plaspy platform and using any device verification commands the TS-VB05 provides.

## Example Configuration Commands

The TS-VB05 can be configured using SMS commands. The sample public commands below reflect the device SMS syntax that has been published for some units. The device sample default password is 123456 and that password is used in the example SMS prefixes shown. Treat the factory reset command as optional or only when required for a clean initial setup.

1. Factory reset (optional initial step)
```text
FORMAT
```
Note: This resets device settings to factory defaults. Use only if required.

2. Set the operator APN
```text
apn123456 {{apn}}
```
- {{apn}} is a placeholder for the mobile operator APN name. Replace with your operator APN string.

3. Set the APN username
```text
apnuser123456 {{apnu}}
```
- {{apnu}} is a placeholder for the APN username if the carrier requires one. Leave blank or omit if not required.

4. Set the APN password
```text
apnpasswd123456 {{apnp}}
```
- {{apnp}} is a placeholder for the APN password if required by the carrier.

5. Set the GPRS server and port (server example uses the Plaspy IP and port)
```text
ip54.85.159.138 8888
```
- This command sets the device to report to the Plaspy server IP at port 8888. Alternatively, enter d.plaspy.com if the device accepts a domain name instead of an IP address.

Verification command to check current settings
```text
CXZT
```
- Use CXZT to query and verify the current device configuration where supported by firmware.

Important: The sample SMS commands above include the default device password 123456 in the command prefixes. Do not remove required password prefixes if the device enforces them. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with the values provided by your mobile operator.

## Configuration Notes

- Firmware and regional variants may accept slightly different SMS command formats or different command prefixes; always verify the syntax on your device.
- Some units accept server configuration by IP only while others accept a domain name; use the method your firmware supports and prefer d.plaspy.com where possible.
- Use UDP or TCP according to the device option and network reliability considerations; Plaspy supports both transports and detects the protocol automatically.
- SMS based configuration is commonly used for initial setup, but manufacturer tools or USB configuration may be available for bulk provisioning.
- The sample default password 123456 appears in public command samples; change device passwords if your installation workflow requires stronger credentials.

## Why Use Plaspy with This Configuration

Connecting the TS-VB05 to Plaspy allows fleets and private owners to centralize real-time location, OBD telemetry, and event alerts in a single platform. With Plaspy ingesting device messages at the shared server and port, managers gain visibility into vehicle health, driver behavior, and trip history without per-device server changes.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific instructions, firmware details, and manufacturer guidance verify current setup information on the ThingSys website at https://www.thingsys.com/ since manufacturer specifications and setup methods can change over time.
