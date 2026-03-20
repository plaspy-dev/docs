---
slug: /tzone/tz_tt01/configuration
id: tz_tt01-configuration
sidebar_label: Configuration
title: TZone - TZ-TT01 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TZone TZ-TT01 with Plaspy server settings and SMS commands
keywords:
  - TZone TZ-TT01
  - TZ TT01 configuration
  - TZone temperature transmitter setup
  - Plaspy configuration
  - Plaspy server settings
  - device setup guide
  - SMS configuration commands
  - GPRS server configuration
  - temperature monitoring transmitter
  - tracker compatibility Plaspy
---

# TZone - TZ-TT01 Configuration

This page documents the public configuration context for using the TZone TZ-TT01 with Plaspy. It focuses on the practical, supported settings and commands that prepare the device to report temperature data to the Plaspy platform. Use this guide together with the device manufacturer documentation for device-specific details and the latest firmware behavior.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact steps required on the manufacturer side can vary by firmware version, hardware revision, installation type, and vendor tools. The TZ-TT01 can be configured using the commands below where supported; follow manufacturer tools or SMS command flows as appropriate.

## Configuration Overview

The goal of configuration is to make the TZ-TT01 able to send its temperature readings to Plaspy reliably. For devices that support GPRS/SMS configuration, this typically means setting network parameters, the reporting interval, and the Plaspy server endpoint so the device can initiate data sessions to the platform.

- Set the operator APN and, if required, APN username and password so the device can establish a GPRS connection.
- Configure the reporting or update interval so the device sends data at the desired cadence.
- Point the device to the Plaspy server endpoint (domain or IP) and use the shared Plaspy port to deliver telemetry.
- Activate GPRS or the device reporting mode so the transmitter starts sending temperature data to Plaspy.
- Verify the device is visible and reporting in Plaspy after configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888 depending on device transport selection  
- Plaspy automatically detects the tracker protocol when the device connects

These settings are the public Plaspy endpoint values you should use when configuring TZ-TT01 reporting to Plaspy. Plaspy uses the same port for all supported devices and detects the correct protocol automatically.

## Typical Requirements Before Setup

- Confirm the TZ-TT01 has a charged internal battery or required external DC 5V supply connected.
- If using SMS or GPRS configuration, ensure the tracker has a valid SIM card and active data service for the operator APN you intend to use.
- Obtain access to the official manufacturer configuration method such as SMS commands, vendor app, or configuration tool.
- Make sure you have the correct APN, optional APN username and password, and understanding of the required update interval for your use case.
- Have the Plaspy server values ready: d.plaspy.com (or 54.85.159.138) and port 8888, and decide whether to use UDP or TCP if the device requires a choice.

## How This Tracker Connects to Plaspy

When configured, the TZ-TT01 is set up to transmit temperature measurements to the Plaspy endpoint so the platform can record, visualize, and alert on sensor data. The connection is established to the shared Plaspy server endpoint and port, and Plaspy manages protocol interpretation.

- The tracker uses configured GPRS connection settings to reach the Plaspy endpoint.
- Device reports are sent to d.plaspy.com (or 54.85.159.138) on port 8888.
- Choose UDP or TCP on the device if prompted; Plaspy accepts either and will auto detect protocol behavior.
- Reporting frequency is controlled by the device update interval so Plaspy receives periodic temperature updates.
- Once connected and authenticated by the platform, device telemetry becomes visible in Plaspy for monitoring and event handling.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software as provided by TZone (SMS commands, vendor app, or configuration tool).
2. Enter the Plaspy server endpoint using either d.plaspy.com or the IP address 54.85.159.138.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires transport selection and save that choice.
5. Configure the operator APN and optional APN credentials so the device can use mobile data.
6. Apply or save the configuration on the device and restart or power-cycle the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking device visibility and recent telemetry in the Plaspy platform.

If your device supports SMS-based commands, include that step in step 1 and follow the command order recommended by the manufacturer.

## Example Configuration Commands

The TZ-TT01 can be configured by SMS using the following public commands. Send these SMS messages from an authorized phone number according to the manufacturer instructions and preserve placeholders where present.

1. Set the operator APN. If only APN is required:
```
*000000,011,[apn]#
```
If APN requires username and password, include the optional placeholders:
```
*000000,011,[apn],[apnu],[apnp]#
```
- [apn] = your mobile operator APN
- [apnu] = APN username (optional)
- [apnp] = APN password (optional)

2. Set the update interval to 60 seconds:
```
*000000,018,60,999#
```
- This sets the reporting interval; adjust the numeric value as needed per manufacturer guidance.

3. Set the GPRS server to the Plaspy IP and port:
```
*000000,015,0,54.85.159.138,8888#
```
- You can replace the IP with d.plaspy.com if the device accepts a domain name in this command string.

4. Activate GPRS / reporting mode:
```
*000000,016,1#
```
- This command enables GPRS mode so the device begins sending data to the configured server.

Preserve command order when the manufacturer indicates order matters. If your hardware accepts domain names instead of IPs, using d.plaspy.com can be more robust to future IP changes.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax or available configuration fields; always confirm syntax with the latest manufacturer documentation.
- Some devices accept a domain (d.plaspy.com) while others require an IP; if the device accepts either, using d.plaspy.com is recommended.
- Choose UDP or TCP based on device prompts; Plaspy accepts both and will auto detect the device protocol on connect.
- SMS-based setup is supported by the public commands above; if you have vendor software or a configuration tool, that tool may provide the same settings via a GUI.
- Keep a record of any configuration changes and test connectivity after applying settings to confirm visibility in Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the TZ-TT01 lets organizations centralize temperature telemetry from distributed transmitters into a single platform for monitoring, alerts, and historical analysis. Pointing the device to Plaspy's shared server endpoint and port ensures data is delivered consistently and that Plaspy can automatically interpret the device protocol when it connects.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For device specific configuration methods, firmware behavior, and the latest manufacturer details, verify current information at the official TZone site http://www.tzonedigital.com/ as device workflows and firmware can change over time.
