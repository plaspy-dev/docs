---
slug: /v_sun/tlt_1f/configuration
id: tlt_1f-configuration
sidebar_label: Configuration
title: V-SUN - TLT-1F Configuration
sidebar_class_name: menu_item_tracker
description: Configure V-SUN TLT-1F for use with Plaspy using shared server settings and SMS or GPRS setup
keywords:
  - V-SUN TLT-1F configuration
  - V-SUN TLT-1F setup
  - V-SUN GPS tracker Plaspy
  - TLT-1F server configuration
  - TLT-1F SMS setup
  - Plaspy tracker configuration
  - vehicle tracking setup
  - GPRS tracker configuration
  - vehicle GPS configuration
  - fleet management tracker setup
---

# V-SUN - TLT-1F Configuration

This page documents the public configuration context for using the V-SUN TLT-1F vehicle tracking device with Plaspy. It collects the practical, publicly available steps and commands used to point the tracker at Plaspy servers, and explains what you should prepare before integrating the TLT-1F into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware revision, hardware variation, installation type, and vendor tools. The TLT-1F supports SMS and GPRS TCP connection methods, so this guide includes the SMS command examples provided in the public device documentation and explains how they apply when directing the device to Plaspy.

## Configuration Overview

The goal of configuration is to prepare the TLT-1F to communicate reliably with the Plaspy server endpoint so that the device reports location and operational events to the Plaspy platform.

- Configure the device APN so GPRS data can be used for internet reporting.
- Point the device GPRS server settings to Plaspy server domain or IP and set the shared Plaspy port.
- Choose transport (UDP or TCP) if the device requires a transport selection for GPRS reporting.
- Enable GPRS reporting and GPS mode so the device starts sending location data to Plaspy.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- A powered and accessible TLT-1F device with an active SIM card that supports GPRS data and SMS (as required by your vendor documentation).
- Knowledge of the device default password where required for configuration (public example uses 0000).
- Access to the official V-SUN configuration method supported for your unit, commonly SMS commands or vendor configuration tools.
- The correct APN, APN username, and APN password for the cellular operator serving the device.
- Ability to restart or power cycle the device after applying configuration.
- A Plaspy account or platform access for validating that the device appears and reports correctly after setup.

## How This Tracker Connects to Plaspy

The TLT-1F can be configured to send GPRS TCP or UDP reports to the Plaspy server endpoint. Once the device is pointed at Plaspy and GPRS is enabled, the tracker transmits periodic location updates that Plaspy ingests and displays.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Data transport may be TCP or UDP depending on configuration; choose the transport supported by your installation.
- Plaspy automatically detects the tracker protocol so multiple vendor protocols can be accepted on the same port.
- After configuration, the device sends location and event reports to the Plaspy platform for visibility and monitoring.
- Validation in Plaspy confirms successful connectivity and reporting.

## Common Configuration Workflow

1. Access the official V-SUN configuration method for your unit (SMS commands or vendor software).
2. Set the device APN using the operator APN parameters so GPRS data can connect.
3. Enter the Plaspy server endpoint by using either the domain d.plaspy.com or the IP address 54.85.159.138.
4. Set port 8888 for GPRS reporting and choose UDP or TCP if your device requires a transport selection.
5. Apply or save the configuration settings on the device and enable GPRS reporting mode.
6. Restart or power cycle the device if required by the device or firmware.
7. Validate that the device reports to Plaspy and that location updates appear in the platform.

## Example Configuration Commands

The following SMS commands are taken from public V-SUN TLT-1F configuration examples. The sample setup uses the device default password 0000. Send these commands as SMS messages to the tracker number in the order shown when performing initial configuration.

1. Optional initial factory reset (use only if you need to restore defaults)
```text
*RESET#0000##
```

2. Set the operator APN (replace [apn], [apnu], and [apnp] with your carrier values)
- If your APN has no username or password, omit [apnu] and [apnp] fields where your vendor supports that syntax.
```text
#803#0000#[apn]#[apnu]#[apnp]##
```
- Explanation of placeholders:
  - [apn] = carrier APN name
  - [apnu] = APN username (leave blank or omit if not required)
  - [apnp] = APN password (leave blank or omit if not required)

3. Set the GPRS server to Plaspy using the Plaspy server IP and port 8888
```text
#804#0000#54.85.159.138#8888##
```
- You may alternatively use the domain d.plaspy.com in vendor tools that accept hostnames.

4. Set the moving update interval (example sets 120 seconds in the provided public example)
```text
#805#0000#120#1##
```

5. Set the static update interval (example sets 120 seconds in the provided public example)
```text
#809#0000#120#1##
```

6. Enable GPRS reporting mode
```text
7100000
```

7. Enable GPS mode
```text
2220000
```

Notes about these commands:
- The order matters for initial setup: APN first, then server, then reporting intervals, then enabling GPRS and GPS.
- Keep the device default password 0000 unless you have changed it; include the correct device password in commands where required.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; always verify commands against the device firmware version you have.
- The TLT-1F public examples use SMS-based configuration; some deployments use vendor configuration tools or USB/serial methods instead.
- Where the device accepts a hostname, you can use d.plaspy.com; otherwise use the Plaspy server IP 54.85.159.138 with port 8888.
- Choose UDP or TCP based on network considerations and device support; Plaspy accepts either and automatically detects the protocol used.
- Preserve and protect the device password when sending configuration commands; change it if required by your security policy.

## Why Use Plaspy with This Configuration

Using the TLT-1F with Plaspy gives a straightforward path to collecting location and event data from vehicles using common GPRS reporting methods. Pointing the tracker at the shared Plaspy endpoint simplifies integration because the platform accepts multiple device protocols on a single port and automatically detects the protocol in use.

Learn more about Plaspy and how to get started at https://www.plaspy.com. Manufacturer specifications, command syntax, and firmware behavior can change over time, so confirm the latest device specific setup details and command references on the V-SUN website http://www.v-sun.cc/ before final deployment.
