---
slug: /astra_telematics/at110/configuration
id: at110-configuration
sidebar_label: Configuration
title: Astra Telematics - AT110 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Astra Telematics AT110 server and SMS configuration for use with Plaspy tracking platform
keywords:
  - Astra Telematics AT110 configuration
  - AT110 setup
  - AT110 Plaspy
  - AT110 server configuration
  - Astra Telematics GPS tracker setup
  - AT110 SMS configuration
  - AT110 GPRS setup
  - GPS tracker Plaspy configuration
  - vehicle tracking AT110
  - fleet management AT110
---

# Astra Telematics - AT110 Configuration

This page covers the public configuration context for using the Astra Telematics AT110 tracker with the Plaspy tracking platform. It summarizes the practical, publicly available settings and commands needed to point an AT110 to Plaspy servers and explains what to check before attempting integration. The guidance below is intended for technical users preparing a tracker for platform visibility and is based on the publicly supplied configuration commands and Plaspy server details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and the vendor tools used to configure the AT110. Where the AT110 provides SMS or GPRS configuration, those methods are noted below; always confirm device-specific instructions with the manufacturer documentation.

## Configuration Overview

The AT110 must be configured so it can send its location and device messages to Plaspy’s shared server endpoint and port. The public configuration process generally involves providing network access (APN), pointing the tracker to Plaspy’s endpoint, and verifying that reports reach the platform. The example commands below show a common SMS-based method that some installers use to set GPRS parameters and the server address.

- Configure the device APN and any required APN credentials so the tracker has GPRS data connectivity.
- Set the Plaspy server address and port so the AT110 sends telemetry to the correct endpoint.
- Choose the transport mode (UDP or TCP) on the device or in the vendor tool if required.
- Apply and save configuration, then restart the device when prompted to activate settings.
- Validate connectivity by confirming the device appears and reports in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to identify the tracker protocol.

## Typical Requirements Before Setup

- A powered AT110 device with the appropriate installation and wiring completed.
- A working cellular SIM with an active data plan and correct APN settings for the operator.
- Access to the official Astra Telematics configuration method for the AT110 (SMS commands, vendor software, or a configuration tool).
- Knowledge of Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888.
- If using SMS configuration, the ability to send SMS commands from an authorized phone number accepted by the device.
- A plan for validating connectivity in Plaspy after configuration, such as checking device status or recent positions.

## How This Tracker Connects to Plaspy

When configured for use with Plaspy, the AT110 sends position and device messages to the shared Plaspy server endpoint and port. Plaspy then ingests and decodes the tracker messages using its automatic protocol detection to display the unit in the platform.

- The tracker uses GPRS data to open a connection to d.plaspy.com or 54.85.159.138 on port 8888.
- The device can be configured to use either UDP or TCP transport for that connection.
- Once connected, location updates and events are forwarded to Plaspy and become visible in the platform.
- Plaspy detects the tracker protocol automatically so the server can accept connections from different tracker models.
- Successful configuration enables operational monitoring and reporting from the AT110 in Plaspy.

## Common Configuration Workflow

1. Access the official Astra Telematics configuration method or software for the AT110 (SMS commands, vendor tool, or configuration utility).
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP address 54.85.159.138 in the device server settings.
3. Set the server port to 8888, which Plaspy uses for all devices.
4. Choose UDP or TCP if the tracker requires selecting a transport protocol.
5. Configure and save APN settings and any APN username or password required for GPRS data connectivity.
6. Apply or save the configuration and restart the device if the procedure requires a reboot to activate new settings.
7. Validate that the AT110 reports to Plaspy by checking the device status and recent location data in the Plaspy platform.

## Example Configuration Commands

The AT110 can be configured by sending SMS commands to the device. The following commonly used public commands are shown in order. Preserve the placeholders and replace them with your network values where applicable.

- Set the operator APN
```
$APAD,[apn]
```
- Set the APN username (optional)
```
$APUN,[apnu]
```
- Set the APN password (optional)
```
$APPW,[apnp]
```
- Set the GPRS server IP for Plaspy
```
$IPAD,54.85.159.138
```
- Set the server port for Plaspy
```
$PORT,8888
```

Notes on placeholders:
- [apn] is the cellular operator APN string required for data connectivity.
- [apnu] is the APN username if your operator requires one.
- [apnp] is the APN password if your operator requires one.

The AT110 may also accept the server as a domain name (d.plaspy.com) in vendor tools or menus instead of the numeric IP. Transport selection (UDP or TCP) is typically set in the manufacturer tool or device menu when required; specific transport commands were not provided in the public command set above.

## Configuration Notes

- Firmware and hardware revisions can alter the exact SMS syntax, available commands, and configuration workflow. Confirm commands against the AT110 manual for your firmware version.
- The AT110 supports GPRS based communication and the device may be configured via SMS or a vendor configuration tool depending on your purchase and installation method.
- Choose TCP or UDP based on your network and installer preference; Plaspy accepts either on the shared port 8888 and performs automatic protocol detection.
- Using the domain d.plaspy.com or the IP 54.85.159.138 is acceptable; some installers prefer the numeric IP in SMS commands to avoid DNS resolution issues.
- Always save or apply settings and perform a device restart if required to ensure new parameters are loaded.

## Why Use Plaspy with This Configuration

Configuring the Astra Telematics AT110 to report to Plaspy provides a straightforward way to gain visibility and operational monitoring from a mature fleet or asset tracking platform. With Plaspy handling protocol detection and a shared server endpoint, teams can focus on reliable data collection and fleet workflows while reducing per-device configuration complexity.

To learn more about Plaspy and how it supports device integration, please visit https://www.plaspy.com. For the most current device specific configuration steps, firmware details, and manufacturer guidance, verify instructions on the Astra Telematics website https://astratelematics.com/ as vendor specifications and setup methods may change over time.
