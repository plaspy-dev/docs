---
slug: /queclink/gl53mg/configuration
id: gl53mg-configuration
sidebar_label: Configuration
title: QuecLink - GL53MG Configuration
sidebar_class_name: menu_item_tracker
description: Configure QuecLink GL53MG for Plaspy with public server settings and example SMS commands for reliable asset tracking
keywords:
  - QuecLink GL53MG configuration
  - QuecLink GL53MG setup
  - GL53MG Plaspy configuration
  - GL53MG server setup
  - QuecLink asset tracker setup
  - QuecLink GL53MG SMS commands
  - GL53MG GPS tracker configuration
  - QuecLink tracking software setup
  - GL53MG LTE tracker configuration
  - Plaspy tracker configuration
---

# QuecLink - GL53MG Configuration

This page documents the public configuration context for using the QuecLink GL53MG tracker with Plaspy. It collects the practical server settings and example SMS commands that are commonly used to point a GL53MG to Plaspy for reporting. The guidance here is intended for technical users preparing the device for integration with the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps may vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and sequences here as practical public examples rather than an exhaustive manufacturer manual.

## Configuration Overview

Configuring the GL53MG for Plaspy prepares the device to send location and event data to Plaspy using the platform's shared server endpoint and port. The public setup commonly uses SMS commands to set APN and GPRS server information, and to adjust reporting intervals and input behavior.

- Point the device to the Plaspy server endpoint so the tracker can establish a persistent reporting session.
- Configure the SIM operator APN and credentials so the tracker can use cellular data for GPRS connections.
- Select the transport mode UDP or TCP as required and set the platform port to 8888.
- Enable required inputs and reporting intervals so events and location updates appear in Plaspy.
- Validate connectivity by confirming the device registers and reports to Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device preference
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- A charged and functional QuecLink GL53MG with access to the device SMS configuration method or the official QuecLink configuration tool.
- A working SIM card provisioned for data with the operator APN, username, and password as required.
- Knowledge of the device default password if SMS configuration requires authentication. The example commands below use the default password queclink.
- Cellular coverage in the device deployment area compatible with the tracker LTE Cat M1 NB2 and fallback networks.
- Ability to send and receive SMS to the device for SMS based setup, or access to the official QuecLink configuration interface if preferred.

## How This Tracker Connects to Plaspy

The GL53MG is configured to report position and event messages to the shared Plaspy server endpoint and port so the platform can display location, status, and alerts. Once the server and APN are set, the device will use the configured transport to deliver telemetry to Plaspy where the platform automatically handles protocol detection.

- The tracker initiates a GPRS session using the configured APN and credentials.
- Device reporting is directed to d.plaspy.com or the Plaspy server IP on port 8888.
- The transport can be UDP or TCP depending on selection during setup.
- Plaspy receives the device connection and auto detects the protocol to parse incoming messages.
- After successful configuration, position updates and configured inputs are visible in the Plaspy platform.

## Common Configuration Workflow

1. Access the official QuecLink configuration method or software, or prepare to send SMS commands if SMS setup is preferred.
2. Configure the operator APN and any APN credentials such as username and password using the device configuration method.
3. Enter the Plaspy server endpoint as d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and, if appropriate, restart the device to ensure settings are active.
6. Validate that the GL53MG reports to Plaspy and that the device appears in the platform with expected position updates.
7. If necessary, refine reporting intervals or input behavior to match operational needs.

## Example Configuration Commands

The QuecLink GL53MG can be configured by sending SMS commands to the device. The following public SMS commands are an example sequence used to prepare the device for Plaspy. These commands assume the device password is the default value queclink. Preserve placeholders like [apn], [apnu], and [apnp] and replace them with your operator APN, APN username, and APN password when sending.

1. Optional initial factory restore command to reset device settings to factory defaults
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN and credentials
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] is the mobile data APN for your SIM operator
- [apnu] is the APN username if required
- [apnp] is the APN password if required

4. Set the GPRS server to Plaspy using domain and IP and specify port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command includes both the Plaspy domain and the Plaspy server IP and sets port 8888
- The device may be configured to use UDP or TCP on port 8888 depending on transport settings

5. Set periodic reporting interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Follow QuecLink guidance for the exact SMS sending format supported by your firmware and confirm each SMS is accepted by the device.

## Configuration Notes

- SMS based configuration is supported in the public examples above; alternative configuration methods include the official QuecLink tools and firmware utilities.
- Firmware version and hardware revision may change supported command formats or parameter order. Verify the command syntax against the device firmware you have deployed.
- Choose UDP or TCP according to your deployment needs; both transports are supported for Plaspy on port 8888.
- Preserve placeholders such as [apn], [apnu], and [apnp] when preparing commands and replace them with operator specific values.
- The sample commands use the device password queclink as provided in the public configuration example. Confirm the correct password for your device before sending configuration SMS.

## Why Use Plaspy with This Configuration

Using Plaspy with a properly configured QuecLink GL53MG delivers a straightforward way to consolidate asset tracking data into a single platform. Pointing the GL53MG to Plaspy with the shared server settings allows organizations to monitor device location, receive configured input alerts, and maintain operational awareness across deployments.

To learn more about Plaspy visit https://www.plaspy.com and review the latest QuecLink device documentation at https://www.queclink.com/ to confirm current firmware behavior and manufacturer setup procedures. Manufacturer specifications and configuration methods can change over time so verify the latest device specific details on the official QuecLink site.
