---
slug: /meitrack/mvt_380/configuration
id: mvt_380-configuration
sidebar_label: Configuration
title: Meitrack - MVT-380 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Meitrack MVT 380 to report to Plaspy using public server settings and example SMS commands
keywords:
  - Meitrack MVT-380 configuration
  - Meitrack MVT-380 setup
  - MVT-380 Plaspy
  - MVT 380 server configuration
  - Meitrack GPS tracker configuration
  - Meitrack tracking platform setup
  - vehicle tracking MVT-380
  - GPS tracker Plaspy configuration
  - MVT-380 SMS configuration
  - Meitrack MVT-380 GPRS setup
---

# Meitrack - MVT-380 Configuration

This page covers the public configuration context for using the Meitrack MVT-380 with Plaspy. It explains the shared server settings Plaspy requires, outlines the typical prerequisites, and provides practical example SMS commands shown in public Meitrack guidance so you can point the device at Plaspy for tracking and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. Use this page as a practical guide and cross-check with Meitrack documentation for firmware specific commands and behavior.

## Configuration Overview

This configuration process prepares the MVT-380 to send location and event data to Plaspy using the platform's shared server endpoint and port. The publicly available configuration examples for this model use SMS commands to set GPRS server parameters, time zone, reporting interval, and event handling.

- Point the tracker to the Plaspy server endpoint so it can deliver telemetry and event messages.
- Provide APN and optional APN credentials so the tracker can establish GPRS data connectivity.
- Set reporting intervals and time zone so data appears correctly in Plaspy.
- Validate connectivity and confirm the MVT-380 shows up on Plaspy after configuration.
- Use the provided SMS commands as a reference when using Meitrack tools or SMS setup methods.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 for direct IP configuration
- Port 8888 as the destination port for all devices
- Transport support for UDP or TCP when the device requires a transport selection
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- Ensure the MVT-380 has a working SIM card with an active data plan and SMS capability
- Have the device powered and accessible for SMS or manufacturer configuration tools
- Know or confirm the device password used for SMS commands (the sample default is 0000)
- Obtain the correct APN for the SIM card and any APN username or password if required
- Access to the official Meitrack configuration method such as SMS commands or vendor software
- A method to verify connectivity from the device to the server, for example checking Plaspy device list or server logs

## How This Tracker Connects to Plaspy

The MVT-380 is configured to send its location and event data directly to the Plaspy server endpoint and port. Once the tracker has GPRS connectivity and the server parameters are set, Plaspy will detect the incoming protocol and begin processing reported telemetry.

- The device sends data to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be configured as UDP or TCP where the device requires a choice
- Plaspy automatically detects the tracker protocol and maps incoming data to the appropriate handler
- Reporting intervals and event settings determine how often and under what conditions data is sent
- Successful configuration makes the tracker visible in Plaspy for monitoring and historical reporting

## Common Configuration Workflow

1. Access the official Meitrack configuration method or software, or use SMS commands as provided by the manufacturer.
2. Enter the Plaspy server as d.plaspy.com or as the direct IP 54.85.159.138 depending on your preferred method.
3. Set the destination port to 8888. All Plaspy devices use the same port.
4. Choose UDP or TCP on the device if the tracker requires a transport selection.
5. Provide APN settings and any APN username or password placeholders required by the SIM card.
6. Apply or save the configuration and restart the device if required by the device or after SMS commands.
7. Validate that the device reports to Plaspy and appears in the platform’s device list or connection logs.

## Example Configuration Commands

The following SMS commands are taken from public Meitrack configuration guidance for the MVT-380. The sample device password used in these examples is 0000 which is the factory default. Send these SMS messages to the device number in the order shown when performing initial setup.

1. Optional initial factory settings reset (use only when needed)
```
0000,F11
```
- Reset factory settings according to the public example. Label this step optional or for initial setup only.

2. Set the GPRS server to Plaspy and provide APN placeholders
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- This command sets the GPRS server to the Plaspy IP 54.85.159.138 and port 8888. It includes placeholders [apn] for the APN, [apnu] for APN username, and [apnp] for APN password. Preserve these placeholders and replace them with your carrier values as needed.
- You may alternatively set the server using domain d.plaspy.com depending on device support for DNS.

3. Set the time zone to UTC 0
```
0000,B36,0
```
- Configure the device time zone so timestamps align with your reporting expectations in Plaspy.

4. Set the update interval to every 1 minute
```
0000,A12,6,0
```
- Adjust the periodic reporting interval. This example configures a 1 minute reporting interval according to the public command set.

5. Set event reporting options
```
0000,C03,0
```
- Configure event handling according to the public example command for events.

Note: Keep the SMS command order when initial configuration is important. Replace the APN placeholders with your carrier settings. If your SMS commands require using the domain instead of the IP, substitute d.plaspy.com in the server command where supported by your device firmware.

## Configuration Notes

- Firmware versions and hardware revisions can change command parameters and available commands; verify commands against your device firmware.
- The MVT-380 public guidance shows SMS based setup and GPRS server configuration using APN placeholders; use the correct APN credentials for your SIM.
- Choose TCP or UDP according to installation needs and device support; Plaspy accepts either and will auto detect protocol.
- The device password in public examples is 0000 by default; confirm if your device uses a different password and change defaults as appropriate.
- When possible, use official Meitrack tools or documented SMS formats to avoid syntax issues.

## Why Use Plaspy with This Configuration

Using Plaspy with the Meitrack MVT-380 gives organizations consolidated visibility into vehicle and asset movement by routing the tracker’s telemetry to a single, shared endpoint. Plaspy’s automatic protocol detection and uniform port usage reduce per-device configuration differences and make it simpler to onboard large numbers of units.

To learn more about Plaspy and the platform features, visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and setup details always verify information on the official Meitrack website https://www.meitrack.com/ so your configuration matches the latest manufacturer guidance.
