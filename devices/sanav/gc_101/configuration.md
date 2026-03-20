---
slug: /sanav/gc_101/configuration
id: gc_101-configuration
sidebar_label: Configuration
title: Sanav - GC-101 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for Sanav GC-101 configuration with Plaspy server settings for reliable GPRS tracking and fleet visibility
keywords:
  - Sanav GC-101 configuration
  - Sanav GC-101 setup
  - Sanav GC-101 Plaspy
  - Sanav tracker configuration
  - GC-101 server configuration
  - GC-101 GPS setup
  - Plaspy tracker setup
  - fleet tracking configuration
  - GPRS tracker setup
  - vehicle tracking configuration
---

# Sanav - GC-101 Configuration

This page provides the public configuration context for using the SANAV GC-101 GPS tracker with Plaspy. It summarizes the practical, manufacturer-provided setup steps and the Plaspy server information required to connect the device so it can upload location data and be visible in Plaspy fleet views.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GC-101 supports GPRS uploads and both TCP and UDP transports; this page also includes the SMS-based commands published by the manufacturer that are commonly used to prepare the device for Plaspy.

## Configuration Overview

The configuration process prepares the GC-101 to send its location and status to the Plaspy platform using GPRS. Typical tasks involve setting the mobile operator APN, pointing the device to the Plaspy server endpoint, selecting the transport method, and choosing an update interval appropriate for your tracking needs.

- Prepare the device to connect to the mobile network by configuring the APN parameters provided by your SIM operator.
- Configure the GPRS server endpoint so the tracker uploads position data to Plaspy.
- Select the transport method (UDP or TCP) and confirm the device uses the same port Plaspy expects.
- Set periodic reporting intervals so the tracker sends position updates at the desired cadence.
- Validate connectivity and that the device is visible in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These exact values are used by Plaspy for device connectivity. Plaspy uses the same port for all supported devices and will detect the correct protocol automatically.

## Typical Requirements Before Setup

- A powered GC-101 device with access to its SMS or configuration interface.
- A working SIM card with active GPRS data service and the operator APN information.
- Ability to send SMS commands to the device or access the manufacturer configuration tool.
- Knowledge of the device password; the manufacturer example uses the default password 0000.
- Confirmation of the GC-101 firmware behavior for SMS commands and server parameter formatting.

## How This Tracker Connects to Plaspy

The SANAV GC-101 uses GPRS to upload standard position information to an assigned web server. For Plaspy integration, the tracker is configured to send its data to the shared Plaspy server endpoint and port so Plaspy can ingest and display the device feed.

- The device uploads RMC sentences containing latitude, longitude, speed, and time over GPRS to the configured server.
- The tracker can use either TCP or UDP to deliver packets to the Plaspy endpoint.
- Plaspy receives the incoming data on port 8888 and automatically detects the tracker protocol.
- Once reporting is active, Plaspy displays device location, movement, and status for fleet monitoring.
- Regular reporting intervals ensure operational visibility and allow event based monitoring from Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands as provided by the manufacturer.
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the IP 54.85.159.138 depending on the device tool or firmware support.
3. Set the port to 8888 in the device server settings.
4. Choose UDP or TCP if the tracker requires a transport selection.
5. Configure the operator APN and any credentials required by your mobile operator.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy and appears in the platform.

If you are using SMS-based setup, use the manufacturer commands below in the order shown and replace placeholders with your operator APN details where required.

## Example Configuration Commands

The following SMS commands are the public, manufacturer-provided examples for configuring the GC-101. The sample setup uses the device password 0000 as the default. Send each command by SMS to the device number. Commands are shown in order; the factory reset is optional and should be used only when needed during initial setup.

- Factory reset (optional initial reset)
```text
#username,0000,9*
```
This command performs a factory reset. Use only when needed to clear prior settings.

- Set the operator APN
```text
#username,0000,3,{{apn}},{{apnu}},{{apnp}}*
```
Replace the placeholders:
- {{apn}} = operator APN name
- {{apnu}} = APN username if required by the operator (leave blank if not used)
- {{apnp}} = APN password if required by the operator (leave blank if not used)

- Set the GPRS Server to Plaspy
```text
#username,0000,18,54.85.159.138:8888*
```
This sets the tracker to send data to the Plaspy server IP and port. If your tracker supports a domain name entry you may alternatively set d.plaspy.com.

- Set the route for data transmission
```text
#username,0000,14,9*
```
This command sets the data route as required by the device for GPRS reporting. Keep the manufacturer documentation handy for route options.

- Set update interval to 60 seconds
```text
#username,0000,6,60,9999*
```
This sets the reporting interval to 60 seconds (first value) and a second parameter often used for extended behavior; consult SANAV documentation for exact parameter meanings. Adjust the interval to suit battery and data usage needs.

## Configuration Notes

- The GC-101 supports SMS-based configuration as shown in the example commands; some installers prefer the manufacturer's software when available.
- Firmware versions or hardware revisions may change the exact SMS command syntax or supported parameters; verify against your device firmware documentation.
- When possible, use the domain d.plaspy.com; if the device or operator requires an IP, use 54.85.159.138 as shown in the example.
- Plaspy uses port 8888 for all devices and automatically detects the protocol, so the same port setting is applied across supported trackers.
- Choose UDP or TCP based on installation requirements and network behavior; Plaspy will accept either and detect the protocol automatically.

## Why Use Plaspy with This Configuration

Using the SANAV GC-101 with Plaspy gives organizations a straightforward path to bring device telemetry into a centralized platform for fleet visibility and operational monitoring. Properly setting the APN and pointing the tracker at the Plaspy server ensures reliable GPRS uploads so position updates and basic status reports appear in your Plaspy dashboards.

Learn more about Plaspy and how it ingests device data at https://www.plaspy.com. Manufacturer specifications, setup methods, and device behavior can change over time; verify the latest device-specific configuration guidance and firmware details on the official manufacturer website http://es.sanav.com/ before deploying at scale.
