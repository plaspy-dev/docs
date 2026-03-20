---
slug: /tzone/tz_bc05/configuration
id: tz_bc05-configuration
sidebar_label: Configuration
title: TZone - TZ-BC05 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure TZone TZ-BC05 for Plaspy with practical server and SMS setup steps
keywords:
  - TZone TZ-BC05 configuration
  - TZ-BC05 setup Plaspy
  - TZone GPS tracker configuration
  - TZ-BC05 server configuration
  - Plaspy tracker integration
  - TZ-BC05 SMS configuration
  - GPRS tracker setup TZone
  - iBeacon Bluetooth tracker setup
  - GPS tracker platform setup
  - vehicle tracking configuration
---

# TZone - TZ-BC05 Configuration

This page documents the public configuration context for using the TZone TZ-BC05 with the Plaspy platform. It focuses on the practical server settings and configuration steps that are publicly available for integrating this model into Plaspy, including SMS-based commands when provided by the manufacturer. Use this guide together with the device documentation when performing setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device transmits to the Plaspy endpoint. Exact manufacturer-side steps and menu labels can vary by firmware version, hardware revision, installation type, and vendor tools, so always confirm device-specific details with the manufacturer documentation. The commands below show a common SMS-based configuration flow where available.

## Configuration Overview

The configuration process prepares the TZ-BC05 to communicate with Plaspy and ensures the device is visible in the platform. When the model supports SMS and GPRS settings, those are commonly used to point the device to Plaspy and to set reporting intervals.

- Configure the device APN so it can use mobile data for reporting.
- Set the GPRS server to Plaspy using the provided domain or IP and the shared port.
- Choose the transport protocol if the device requires UDP or TCP selection.
- Set the desired position update interval to control reporting frequency.
- Activate GPRS or data mode so the tracker begins sending to Plaspy.
- Validate connectivity and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888 — Plaspy uses the same port for all supported devices
- Transport: UDP or TCP are supported, configure the device for the transport it requires
- Protocol detection: Plaspy automatically detects the tracker protocol when data arrives at the server

## Typical Requirements Before Setup

- Device powered and accessible, with a charged battery or connected power source.
- If using cellular reporting, an active SIM card with data and SMS capability installed in the device.
- Operator APN, and optional APN username and password if required by the carrier.
- Access to the manufacturer configuration method such as SMS commands, configuration tool, or vendor software.
- A mobile phone or tool capable of sending SMS to the device for SMS-based configuration.
- Awareness of any device-specific SMS password or changed admin password that may be required to accept commands.

## How This Tracker Connects to Plaspy

When configured for network reporting, the TZ-BC05 is set to send its data to the shared Plaspy server endpoint and port so Plaspy can ingest and interpret the device messages. Plaspy receives the incoming connection on the configured endpoint and automatically maps the protocol.

- The device is configured to report to the Plaspy server endpoint (d.plaspy.com) or its IP 54.85.159.138.
- All devices report to the same Plaspy port 8888 so no per-device port mapping is required.
- The device may use UDP or TCP transport depending on its firmware and your selection.
- Reporting frequency is controlled by the update interval configured on the device.
- Once data arrives, Plaspy detects the device protocol automatically and makes the device visible in the platform for monitoring and event reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software. For many TZ-BC05 installations this is SMS-based commands sent from a mobile phone.
2. Enter the Plaspy server as d.plaspy.com or, if required by the device, the server IP 54.85.159.138.
3. Set the server port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport on the device if transport selection is required by the firmware.
5. Configure the operator APN, and APN username and password if applicable.
6. Apply or save the configuration and activate GPRS or data reporting mode.
7. Restart the device if the manufacturer recommends it, then validate that the tracker reports to Plaspy and appears in the platform.

## Example Configuration Commands

The TZ-BC05 manufacturer provides an SMS command workflow for public configuration. The following commands are shown in the same order as commonly applied. Replace the SMS password and placeholders as needed.

- Set the operator APN. Replace 000000 with the device SMS password if it has been changed, and replace [apn], [apnu], [apnp] with your operator values. The username and password fields are optional and only required if your carrier requires them.

```
*000000,011,[apn],[apnu],[apnp]#
```

- Set the update interval to 60 seconds (example). This controls how often the device sends position updates.

```
*000000,018,60,999#
```

- Set the GPRS server to the Plaspy server IP and port. If your device accepts a domain name instead of an IP, you can use d.plaspy.com in place of 54.85.159.138.

```
*000000,015,0,54.85.159.138,8888#
```

- Activate GPRS or data mode on the device so it begins reporting.

```
*000000,016,1#
```

Notes on placeholders:
- 000000 is the SMS admin password placeholder. Replace this with your SMS password if it has been changed from the factory value.
- [apn] is the carrier APN name.
- [apnu] is the APN username when required by the carrier.
- [apnp] is the APN password when required by the carrier.

## Configuration Notes

- SMS-based configuration is supported and is a common public method for setting APN and server details on this model.
- Firmware versions and hardware revisions may alter the exact SMS syntax, available parameters, or menu locations. Verify the exact command syntax with your device.
- Choose UDP or TCP according to the device firmware capability; Plaspy will accept either on port 8888 and perform automatic protocol detection.
- If the device supports domain names for server configuration, using d.plaspy.com can be more resilient than a raw IP; use the IP 54.85.159.138 when the device does not support DNS.
- Keep a record of any changed SMS admin password; commands generally require the correct password prefix to be accepted.

## Why Use Plaspy with This Configuration

Configuring the TZ-BC05 to send data to Plaspy centralizes location and device reporting so fleets, asset managers, and operations teams can monitor activity and events from a single platform. The shared Plaspy endpoint and automatic protocol detection simplify integration and reduce the need for device-specific server configuration beyond APN, server, port, and transport selection.

To learn more about Plaspy and how it supports a range of GPS trackers, visit https://www.plaspy.com. For the most current device-specific configuration details, firmware notes, and manufacturer guidance for the TZone TZ-BC05 please verify information with the manufacturer at http://www.tzonedigital.com/
