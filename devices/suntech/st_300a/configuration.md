---
slug: /suntech/st_300a/configuration
id: st_300a-configuration
sidebar_label: Configuration
title: Suntech - ST 300A Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Suntech ST 300A for Plaspy with server settings SMS commands and practical setup steps
keywords:
  - Suntech ST 300A configuration
  - Suntech ST300A setup
  - ST 300A Plaspy configuration
  - Suntech GPS tracker setup
  - ST300A server configuration
  - Suntech GPS platform setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - ST 300A SMS commands
  - GPS tracker APN configuration
---

# Suntech - ST 300A Configuration

This page documents the public configuration context for using the Suntech ST 300A tracker with Plaspy. It describes the practical server settings, SMS command examples provided by the manufacturer, and the typical steps needed to register the device with Plaspy so the tracker can report location and events to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup actions can vary by firmware version, hardware revision, installation type, and vendor tools. The ST 300A supports SMS configuration as shown in the public commands below and includes features such as internal antennas, temperature sensor and i-Button support, RS232, and multiple analog inputs that installers commonly use when integrating with a telemetry platform.

## Configuration Overview

The configuration process prepares the ST 300A to communicate reliably with Plaspy, ensuring the device reports position and status to the Plaspy server endpoint on the shared port. The public manufacturer commands show how to compute the device identifier from the IMEI and how to set APN and server values using SMS.

- Configure the device to report to the Plaspy server endpoint so positions and events arrive on the platform.
- Set the operator APN and optional credentials so the tracker can use mobile data for GPRS reporting.
- Apply the correct server IP or domain and port so Plaspy accepts incoming connections from the tracker.
- Validate that the device is visible in Plaspy after configuration and that telemetry updates at the expected interval.
- Use the device IMEI derived device ID when sending SMS commands so the tracker accepts configuration changes.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port to simplify tracker setup

## Typical Requirements Before Setup

- An active SIM card with mobile data enabled and correct APN information for the operator
- The device IMEI number available to compute the device ID used in SMS commands
- Access to the manufacturer's configuration method such as SMS commands or the vendor setup tool
- A power source and a properly installed harness so the tracker boots and registers on the mobile network
- Basic knowledge of the APN values and any APN username or password required by the mobile operator
- Patience to test connectivity and verify device reports after applying settings

## How This Tracker Connects to Plaspy

The ST 300A is configured to send its location and status messages to the shared Plaspy server endpoint and port. Once the tracker has valid mobile connectivity and the server/APN settings are applied, Plaspy will detect the tracker protocol automatically and begin ingesting data.

- The tracker reports to the Plaspy server domain or IP using port 8888.
- Transport can be set to UDP or TCP on the device; Plaspy accepts either and detects protocol automatically.
- Reporting frequency is configured on the tracker so updates arrive at the desired interval.
- Plaspy shows device visibility and incoming telemetry once the tracker successfully connects to d.plaspy.com or 54.85.159.138 on port 8888.
- Use the device ID derived from the IMEI when issuing SMS configuration commands so the tracker recognizes the instructions.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST 300A, such as the SMS command interface or vendor software recommended by the installer.
2. Compute the device ID from the IMEI (see example below) and prepare SMS commands or vendor tool fields.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the server/host field.
4. Set the port to 8888 (Plaspy uses the same port for all devices) and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and send any required SMS commands from the authorized phone number.
6. Restart the device if required by the manufacturer or if the device does not immediately connect.
7. Validate that the tracker is reporting to Plaspy and visible in the platform, confirming expected update intervals and events.

## Example Configuration Commands

The Suntech ST 300A supports SMS-based configuration. The public example commands below are adapted from the manufacturer content and use a computed deviceId placeholder. Compute deviceId as the nine digits taken from the IMEI after removing the first five digits and excluding the final digit. For example, if IMEI is 123456789012345, the deviceId would be 678901234.

Important placeholders
- {{deviceId}} — the 9 digit device identifier extracted from the IMEI as described above
- [apn] — the operator APN name
- [apnu] — the APN username if required by the operator
- [apnp] — the APN password if required by the operator

1. (Optional initial step) Reset factory settings
```text
ST300CMD;{{deviceId}};02;Reset
```
Label this reset step optional and use only if you need to return the device to factory defaults before reconfiguration.

2. Set the operator APN and GPRS server including Plaspy server IP and port
```text
ST300NTW;{{deviceId}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- The fourth field (here shown as 1) may indicate use of APN credentials when required; include 0 or 1 according to the device command syntax.
- Replace [apn], [apnu], and [apnp] with the mobile operator values. If your operator does not require a username or password, leave [apnu] and [apnp] empty as supported by the command format.
- You can substitute d.plaspy.com for the IP if preferred and supported by the device, but the manufacturer example uses the server IP 54.85.159.138 and port 8888.

3. Set update/reporting interval to 60 seconds
```text
ST300RPT;{{deviceId}};02;60;60;60;3;0;0;0;0;0
```
- These parameters configure periodic reporting intervals and related behavior. Keep the order and values as required by the device command reference.

4. Verify current settings
```text
ST300CMD;{{deviceId}};02;PresetA
```
- Use this command to request a configuration check from the device.

Preserve the command order when following manufacturer guidance. Send SMS commands from the authorized phone number specified by the device configuration policy and wait for confirmation messages from the tracker.

## Configuration Notes

- SMS based setup is supported for this model; use the precise command syntax and field ordering shown by the manufacturer.
- Firmware and hardware revisions can change command support and parameter meanings; consult the official Suntech documentation for your device revision.
- Choose UDP or TCP according to the installation needs; Plaspy accepts both transports on port 8888 and will detect the protocol automatically.
- Confirm the deviceId calculation from the IMEI before sending commands to avoid misaddressing the tracker.
- When possible, test configuration in a controlled environment to validate APN access and server connectivity before full deployment.

## Why Use Plaspy with This Configuration

Using Plaspy with the Suntech ST 300A provides a straightforward way to centralize vehicle and asset visibility, correlate events, and manage reporting frequency across a fleet. The ST 300A's flexible inputs and sensor support make it practical for many fleet monitoring scenarios, and applying the shared Plaspy server settings ensures the device will deliver telemetry to the platform.

To learn more about Plaspy and supported device configuration guidance visit https://www.plaspy.com. Please verify the latest device specific setup methods and firmware behavior on the official Suntech website at http://www.suntechint.com/ since manufacturer specifications and setup flows can change over time.
