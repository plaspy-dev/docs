---
slug: /wanway/g19h/configuration
id: g19h-configuration
sidebar_label: Configuration
title: WanWay - G19H Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for WanWay G19H GPS tracker setup and Plaspy server integration using SMS commands and shared server settings
keywords:
  - WanWay G19H configuration
  - WanWay G19H setup
  - G19H Plaspy integration
  - G19H server configuration
  - WanWay GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking G19H
  - G19H SMS configuration
  - G19H GPRS server settings
  - Plaspy fleet integration
---

# WanWay - G19H Configuration

This page documents the public configuration context for using the WanWay G19H tracker with Plaspy. It summarizes the practical steps and public commands known for preparing the device to send GPS and telemetry data to Plaspy, and highlights the shared server settings Plaspy expects. Use this guide to understand the required server values, the typical workflow, and the SMS commands commonly used by installers.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps may vary by firmware, hardware revision, installation type, and vendor tools. The G19H supports SMS-based configuration in its public documentation; those commands are included below as an example of how to point the device to Plaspy and verify connectivity.

## Configuration Overview

The goal of this configuration is to enable the G19H to report its GPS position and telemetry back to Plaspy so the device becomes visible in the Plaspy platform. Configuration typically prepares cellular connectivity, sets the server endpoint and port, defines reporting intervals, and switches the device into GPRS reporting mode.

- Configure the device APN so GPRS data can be sent from the installed SIM card.
- Point the device to the Plaspy server endpoint so telemetry is routed to Plaspy.
- Set the reporting interval (timer) to control update frequency to Plaspy.
- Switch the device to GPRS mode so it uses the configured server and port.
- Validate the device is reporting and visible in Plaspy after configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Protocol detection: Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and installed G19H unit with the standard four‑wire connections completed according to installation practice.
- A working SIM card with active data access and the correct APN settings for the carrier.
- Ability to send SMS messages to the device (SMS-based configuration) or access to the manufacturer configuration tool if available.
- Knowledge of the correct APN credentials for the installed SIM (username, password if required).
- Access to manufacturer documentation or vendor tools for firmware-specific instructions and any transport selection UI.
- Cellular coverage for the device location, noting the G19H is specified for 2G GSM networks where available.

## How This Tracker Connects to Plaspy

When configured with the Plaspy endpoint, the G19H establishes GPRS connectivity and sends location and telemetry packets to the shared Plaspy server endpoint and port. Plaspy receives these packets, automatically recognizes the tracker protocol, and displays device data within the platform.

- The tracker reports GPS coordinates to d.plaspy.com on port 8888 so Plaspy can plot the device on maps.
- Telemetry such as ACC/ignition state, tamper or vibration alarms, and immobilizer status is sent alongside location updates.
- Reporting frequency is governed by the device timer settings so operators can balance update granularity and data usage.
- Plaspy automatically detects the incoming protocol, allowing devices using TCP or UDP to be handled without manual protocol selection on the server side.
- Visibility and event notifications in Plaspy depend on successful GPRS registration and correct APN and server configuration.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or vendor tool, or prepare to send SMS commands if operating via SMS.  
2. Configure the carrier APN on the tracker with your SIM credentials.  
3. Enter the Plaspy server address (d.plaspy.com) or the server IP (54.85.159.138) in the device server settings.  
4. Set the server port to 8888 and choose UDP or TCP if the tracker requires a transport selection.  
5. Apply or save the configuration so the device uses the new server and APN settings.  
6. Restart the device if the manufacturer instructions recommend a reboot to apply GPRS settings.  
7. Validate that the device reports to Plaspy and appears in the Plaspy platform; verify location, telemetry, and alarms are received.

## Example Configuration Commands

The G19H public configuration supports SMS-based commands. Send these commands as SMS messages to the device phone number in the order shown where order matters.

- Configure carrier APN (replace placeholders with your carrier values):
```
APN,{{apn}}{{#if apnu}},{{apnu}},{{apnp}}{{/if}}#
```
Explanation: Replace {{apn}} with your APN. If your carrier requires an APN username and password, supply {{apnu}} and {{apnp}} respectively. The device accepts the APN command to enable GPRS data.

- Set the GPRS server to Plaspy (domain version):
```
SERVER,1,d.plaspy.com,8888,0#
```
Explanation: This points the G19H to the Plaspy domain on port 8888. The last parameter is the protocol index as used by the device firmware.

- Set reporting interval (example sets heartbeat or position timer to 60 seconds):
```
TIMER,60,60#
```
Explanation: Adjust the numeric values to control upload intervals according to your reporting needs.

- Enable GPRS reporting mode:
```
GPRSON,1#
```
Explanation: Switches the device from SMS mode to GPRS mode so it will send data to the configured server.

- Check current device parameters:
```
PARAM#
```
Explanation: Request current configuration parameters to verify APN, server, and timers.

- Check tracker status:
```
STATUS#
```
Explanation: Retrieve the device status to confirm network registration, GPS fix, battery/power status, and other runtime indicators.

Note: Preserve the placeholders exactly as provided ({{apn}}, {{apnu}}, {{apnp}}) when preparing SMS commands. Use the domain d.plaspy.com or the server IP 54.85.159.138 with port 8888 as required. The device may accept either the domain or IP form in its SERVER command.

## Configuration Notes

- Firmware differences can change command syntax or available parameters; always confirm the exact SMS command format with the device documentation for your firmware version.
- The G19H public commands show SMS-based configuration; some installers use a USB or software tool where available—follow the manufacturer method you have access to.
- Choose UDP or TCP based on device capability and installer preference; Plaspy will accept either on port 8888 and auto-detect the protocol.
- Keep APN credentials secure and confirm they match the installed SIM provider to avoid GPRS registration failures.
- After changing server or APN settings, check PARAM# and STATUS# to validate that settings were applied and the device can connect to d.plaspy.com.

## Why Use Plaspy with This Configuration

Using the WanWay G19H with Plaspy gives organizations a straightforward path to real-time vehicle visibility, ignition and tamper monitoring, and remote immobilizer control. When the device is configured to report to Plaspy's shared server endpoint and port, operators gain consolidated maps, alerts, and historical route data for fleet and security workflows.

To learn more about Plaspy and its platform capabilities visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and manufacturer instructions verify information on the WanWay website https://www.wanwaytech.net/. Manufacturer specifications and setup methods can change over time, so always confirm device behavior with official WanWay documentation before large scale deployments.
