---
slug: /jointech/jt705c/configuration
id: jt705c-configuration
sidebar_label: Configuration
title: Jointech - JT705C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech JT705C to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Jointech JT705C configuration
  - Jointech JT705C setup
  - JT705C Plaspy configuration
  - JT705C server configuration
  - Plaspy GPS tracker configuration
  - GPS video lock configuration
  - vehicle tracking server setup
  - tracker SMS configuration
  - logistics tracker integration
  - fleet tracking platform setup
---

# Jointech - JT705C Configuration

This page documents the public configuration context for using the Jointech JT705C with Plaspy. It focuses on the shared Plaspy server settings and the practical steps you can take to point a JT705C device at Plaspy so the device can report location, alarms, and related telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps for the JT705C can vary by firmware, hardware revision, installation type, and vendor configuration tools, so use this guidance together with Jointech documentation and your installer processes.

## Configuration Overview

The purpose of configuring a JT705C for Plaspy is to prepare the device to communicate reliably with the Plaspy backend, validate connectivity, and enable the unit to appear and report events in your Plaspy account. The JT705C modelConfiguration indicates SMS-based server and APN setup is a supported public method for this device.

- Configure the device GPRS server and APN so the JT705C can establish a data connection to Plaspy.
- Optionally set APN username and password if your mobile operator requires them.
- Ensure the device is pointed at Plaspy’s shared server endpoint so telemetry and alarms are routed to Plaspy.
- Validate transport selection (UDP or TCP) and save the configuration so the device can begin reporting.
- Confirm the device appears and sends updates in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port and the platform detects the device protocol automatically, so the JT705C only needs to be pointed at the Plaspy endpoint and the correct port.

## Typical Requirements Before Setup

- A powered and installed JT705C unit with its device ID available
- An active SIM with data connectivity and SMS capability as required by your chosen configuration method
- Access to a phone or tool able to send SMS configuration commands to the device if using SMS setup
- The correct APN for the mobile operator (and optional APN username and password if required)
- Access to Jointech configuration documentation or installer software for reference
- Administrative access to Plaspy to verify device registration and telemetry after configuration

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the JT705C sends its telemetry and event messages to the shared Plaspy server endpoint and port so data can be ingested into your Plaspy account. Plaspy then associates incoming messages with the registered device and presents location, alarm events, and related evidence (such as video links where available) in the platform.

- The device reports location and status to d.plaspy.com (or the IP 54.85.159.138) on port 8888.
- Transport can be UDP or TCP; choose per device capability or network requirements.
- Plaspy automatically detects the protocol used by the JT705C and processes messages accordingly.
- Once reporting, location, alarms, and event data become visible in Plaspy for mapping, alerts, and reporting.
- Validation in Plaspy confirms successful connectivity and helps troubleshoot any APN or transport issues.

## Common Configuration Workflow

1. Access the official Jointech configuration method for your JT705C, typically SMS commands or the vendor tool recommended by your supplier.
2. Enter the Plaspy server address by using either d.plaspy.com or the IP address 54.85.159.138 in the server setting.
3. Set the port to 8888 for the device to send telemetry to Plaspy.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Provide the APN value required by your mobile operator and, if necessary, set APN user and password values.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate that the JT705C reports to Plaspy and appears in your Plaspy account with expected location and event updates.

## Example Configuration Commands

The JT705C supports SMS-based configuration. The public handset commands below are provided in the order indicated by Jointech model configuration examples. Replace placeholders with your device-specific values.

- Replace [trackerID] with the device's ID (IMEI or configured tracker identifier).
- Replace [apn] with your mobile operator APN.
- If your APN requires authentication, replace [apnu] and [apnp] with the APN username and password. The APN username and password command is optional when not required by the operator.

1) Set the GPRS server and APN (send this SMS to the device):

```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```

You can also use the domain form where supported by the device (replace IP with domain if the unit resolves domains):

```
([trackerID],2,S02,129,1,d.plaspy.com,8888,[apn])
```

2) Optional: Set APN user and password (send only if your APN requires credentials):

```
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Notes on placeholders:
- [trackerID] — the device's ID or IMEI used by Jointech commands.
- [apn] — the operator APN string required for GPRS/data.
- [apnu] — APN username if required by the operator.
- [apnp] — APN password if required by the operator.

If your installation uses a Jointech configuration tool instead of SMS, apply the equivalent server, port, and APN values in that tool following the same order.

## Configuration Notes

- Firmware and hardware revisions can change exact command syntax and available features; always verify with current Jointech documentation.
- SMS-based setup is a common public method for JT705C configuration; use the device's SMS command set carefully and confirm message formats.
- Choose UDP or TCP based on network behavior and reliability in your environment; Plaspy accepts both on port 8888.
- Plaspy uses the same port for all supported devices and will auto-detect the tracker protocol when the device connects.
- If domain name resolution is used, ensure the device firmware supports domain names; otherwise use the IP address 54.85.159.138.

## Why Use Plaspy with This Configuration

Using a JT705C configured to report to Plaspy consolidates location, alarm, and video evidence into a single platform for operational monitoring, compliance, and incident response. For organizations that need continuous visibility on high-value shipments, integrating JT705C telemetry with Plaspy supports rapid alerting, investigation workflows, and centralized fleet oversight.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the most current device-specific configuration methods, firmware details, and manufacturer instructions for the JT705C, verify setup steps with Jointech at https://www.jointcontrols.com/ before deployment.
