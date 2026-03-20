---
slug: /concox/jm_vl02/configuration
id: jm_vl02-configuration
sidebar_label: Configuration
title: Concox - JM-VL02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox JM-VL02 showing Plaspy server settings, SMS commands, and setup steps for fleet tracking integration
keywords:
  - Concox JM-VL02 configuration
  - JM-VL02 setup
  - Concox tracker Plaspy
  - JM-VL02 server configuration
  - GPS tracker configuration
  - vehicle tracker setup
  - fleet tracking configuration
  - Concox GPS setup
  - JM-VL02 SMS configuration
  - Plaspy tracker setup
---

# Concox - JM-VL02 Configuration

This page documents the public configuration context for using the Concox JM-VL02 with the Plaspy platform. It gathers the Plaspy server settings you must apply to the device and presents the commonly used SMS commands and steps that are publicly available for configuring the tracker to report to Plaspy. Use this as a practical reference for integration and verification before registering devices in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary with firmware, hardware revision, installation type, or vendor tools, so combine the guidance here with the official Concox documentation and any installer-specific procedures for your deployment.

## Configuration Overview

The configuration process prepares the JM-VL02 to communicate with Plaspy, validates connectivity, and enables the device to appear and report in the Plaspy platform. The publicly available configuration flow for this model often uses SMS commands to set network parameters, server endpoints, and reporting intervals.

- Set the device APN so it can open a data connection for GPRS/packet reporting.
- Configure the GPRS server to point to Plaspy using either the domain or the provided IP.
- Choose UDP or TCP transport on the device and set the shared Plaspy port.
- Define reporting intervals (timer) so the device sends location updates at the desired cadence.
- Enable GPRS data mode and verify parameters with the device verification command.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note: Plaspy uses the same port for all supported devices and protocol detection is handled automatically on the platform side.

## Typical Requirements Before Setup

- A working SIM card with an active data plan and the correct APN for the mobile operator.
- Ability to send SMS messages to the device for SMS based configuration as shown in the public commands.
- Access to the device (power applied and installed) or to an installer who can operate the unit during setup.
- Manufacturer account information and documentation for the JM-VL02 to confirm firmware specific steps.
- A list of APN details including optional username and password if required by the operator.

## How This Tracker Connects to Plaspy

The JM-VL02 is configured to report GNSS position, cellular-derived location assistance, and vehicle-state telemetry to the shared Plaspy server endpoint and port. Once configured with the correct APN and server settings, the tracker sends periodic packets to Plaspy where protocol detection maps the device to the correct handler and makes its data visible in the platform.

- Device sends GNSS and LBS based positions to the Plaspy server endpoint.
- Vehicle state and event data such as ACC/ignition changes, SOS button presses, and relay events are included in reports to Plaspy.
- Tracker uses GPRS data to post updates to d.plaspy.com or 54.85.159.138 on port 8888 over UDP or TCP.
- Plaspy automatically detects the device protocol so you can use the same port across devices.
- Reports enable live map visibility, event alerts, and historical reporting in Plaspy.

## Common Configuration Workflow

1. Access the official Concox configuration method for the JM-VL02 (SMS commands or OEM configuration tool) as documented by the manufacturer.
2. Ensure the SIM is installed, powered, and has the correct APN details available.
3. Set the APN on the device with the operator APN and optional credentials.
4. Enter the Plaspy server as d.plaspy.com or use the IP 54.85.159.138 and set port 8888.
5. Choose UDP or TCP transport if the device requires transport selection.
6. Set an appropriate reporting interval (timer), enable GPRS mode, and save/apply the configuration.
7. Restart or power cycle the device if required by the device or firmware.
8. Validate that the device reports to Plaspy and appears in the platform using Plaspy visibility and the device verification command.

## Example Configuration Commands

The JM-VL02 public configuration uses SMS commands. Send each command as an SMS to the device SIM number. Preserve placeholders when entering APN credentials.

- Optional initial factory reset (only when needed during setup):
```
FACTORY#
```

- Set the time zone to UTC 0:
```
GMT,E,0#
```

- Set the operator APN. Replace the placeholders with your operator APN and optional username and password:
```
APN,{{apn}}#
```
Or, if your APN requires username and password:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Where {{apn}} is the operator APN, {{apnu}} is the APN username, and {{apnp}} is the APN password.)

- Configure the GPRS server to use the Plaspy domain and port:
```
SERVER,1,d.plaspy.com,8888,0#
```
Or configure the GPRS server to use the Plaspy IP and port:
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds (two formats shown in public documentation):
```
TIMER,60#
```
Or:
```
TIMER,60,60#
```

- Enable GPRS mode:
```
GPRSON,1#
```

- Verify current GPRS parameters on the device:
```
GPRSSET#
```

Send these SMS commands in the order shown when order matters (for example, APN before enabling GPRS). If you issue the FACTORY# command, treat it as an optional initial reset and reapply APN and server settings afterward.

## Configuration Notes

- Commands shown are the publicly documented SMS syntax for the JM-VL02. Exact command support and syntax can vary by firmware revision.
- Both domain and IP server entries are provided; using d.plaspy.com is preferable for maintainability while the IP 54.85.159.138 is an alternative.
- Choose UDP or TCP according to installer preference or device requirements; Plaspy supports both and auto-detects the device protocol on the platform side.
- SMS based setup requires the device to be powered and to have SMS reception enabled for configuration messages.
- After applying settings, a device restart or a short power cycle may be required for changes to take effect.

## Why Use Plaspy with This Configuration

Using the Concox JM-VL02 with Plaspy enables centralized, near real-time visibility into vehicle location and operational state, combining GNSS position and vehicle I/O telemetry for fleet control, safety monitoring, and anti-theft workflows. The publicly available SMS commands and the shared Plaspy server settings make it straightforward to provision devices at scale while keeping configuration consistent across fleets.

Learn more about Plaspy and its features at https://www.plaspy.com. For precise, device specific configuration steps, firmware behavior, and the latest manufacturer details verify information on the Concox website at https://www.iconcox.com/ as manufacturer documentation and firmware changes may affect exact setup procedures.
