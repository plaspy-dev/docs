---
slug: /atrack/ak1/configuration
id: ak1-configuration
sidebar_label: Configuration
title: ATrack - AK1 Configuration
sidebar_class_name: menu_item_tracker
description: Public ATrack AK1 GPS tracker configuration guide for Plaspy compatibility with server details and example commands
keywords:
  - ATrack AK1 configuration
  - ATrack AK1 setup
  - ATrack AK1 Plaspy
  - AK1 server configuration
  - AK1 GPS setup
  - AK1 tracking platform setup
  - Plaspy tracker configuration
  - vehicle tracker AK1 setup
  - AK1 GPRS configuration
  - ATrack AK1 integration
---

# ATrack - AK1 Configuration

This page documents the public configuration context for using the ATrack AK1 tracker with Plaspy. It summarizes the shared Plaspy server settings you must apply to the device, and it includes example AT commands provided in the public model configuration. Use this guide to prepare the AK1 so it can communicate and report to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps can vary by AK1 firmware, hardware revision, installation type, and vendor configuration tools. The example AT commands shown below are the publicly available script for the AK1 and should be applied carefully according to your installer procedures.

## Configuration Overview

This configuration prepares the AK1 to send tracking data and event reports to Plaspy so the device becomes visible and manageable in the platform. The public example script focuses on enabling event reporting, setting a tracking interval, switching the device into binary form, and pointing the device to the Plaspy GPRS endpoint.

- Configure ACC and event reporting rules so the tracker reports ignition and related input events to Plaspy.
- Set a periodic tracking interval so location updates are sent to the platform (example uses 60 seconds).
- Switch the AK1 to the device data format expected by the server (example sets binary mode).
- Provision GPRS settings including APN placeholders and the Plaspy server endpoint so the AK1 can establish a data session.
- Validate connectivity and device status with the device information query shown in the example commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the device for the transport it requires
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered AK1 with access to its configuration interface or the manufacturer configuration method
- An active SIM card with GPRS data and the correct APN settings for your mobile operator
- APN credentials or placeholders such as [apn], [apnu], and [apnp] ready to insert into the device configuration
- Access to ATrack configuration tools or a serial/SMS interface as provided by the device documentation
- Knowledge of the device firmware version and hardware revision to follow the correct configuration workflow
- Ability to restart or power cycle the device after applying settings

## How This Tracker Connects to Plaspy

The AK1 sends location and event data to the shared Plaspy server endpoint and port so the vehicle becomes visible in the platform. Plaspy receives the device connection and automatically detects the tracker protocol, allowing the platform to parse incoming packets from the AK1 without per-device port changes.

- The device is configured to report to the Plaspy server endpoint at d.plaspy.com (or 54.85.159.138)
- All reporting is directed to port 8888 which Plaspy uses for supported devices
- The tracker transmits periodic trace updates (example configuration uses a 60 second interval)
- Event reporting such as ACC on/off is enabled so the platform can show ignition and input state changes
- Plaspy detects the incoming protocol automatically so no special protocol selection on the platform side is required

## Common Configuration Workflow

1. Access the official ATrack configuration method or software that applies AT commands or device settings for the AK1.
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP address 54.85.159.138 depending on the configuration interface.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP if the device requires a transport selection for the GPRS server setting.
5. Apply the specific AK1 settings such as ACC events, tracking interval, data format, and GPRS server with APN placeholders as needed.
6. Save or upload the configuration and restart the AK1 if required by the device or firmware.
7. Validate that the device reports to Plaspy by checking connectivity and using the verification command shown in the example section.

## Example Configuration Commands

The model public configuration provides a sequence of AT style commands for the AK1. Apply these in the order shown by your supported configuration method. Placeholders such as [apn], [apnu], and [apnp] must be replaced with the carrier APN and credentials when required.

1) Set ACC event triggers and related reporting behavior
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```
- These commands configure the input behavior and reporting actions for ACC or digital input events. Apply as a group so event rules are consistent.

2) Set time interval to 60 seconds for periodic tracking
```text
AT$TRAC=1,60,,,,,2
```
- This sets the tracker to send trace updates at a 60 second interval. Adjust the interval as needed for your monitoring requirements.

3) Set binary mode for device message format
```text
AT$FORM=1,@P,0,""
```
- Puts the AK1 into the binary format expected by some server parsers. Keep this if your server and platform expect binary packets.

4) Configure the GPRS server and APN parameters to point to Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
- Replace [apn], [apnu], and [apnp] with your mobile operator APN, username, and password if required. This command sets the GPRS profile and directs the device to the Plaspy server IP and port 8888. You may instead use d.plaspy.com where domain entry is supported by the device.

5) Check device status
```text
AT$INFO=?
```
- Use this verification command to query device status after configuration to confirm settings and connectivity.

## Configuration Notes

- Firmware variations can change available AT commands and parameter order; always confirm commands with the AK1 firmware documentation before applying.
- Keep APN placeholders [apn], [apnu], and [apnp] intact in examples and replace them with operator values during setup.
- Choose UDP or TCP based on the device's configuration interface and your network requirements; Plaspy accepts either transport on port 8888.
- If the device supports domain names, you can use d.plaspy.com instead of the server IP 54.85.159.138; both map to the same Plaspy endpoint.
- After applying settings, perform a full restart or power cycle of the AK1 if the device firmware requires it to activate new profiles.

## Why Use Plaspy with This Configuration

Using the ATrack AK1 with Plaspy provides a practical way to centralize vehicle visibility, event reporting, and operational monitoring. With the AK1 configured to report to Plaspy's shared server endpoint and port, organizations can receive consistent location updates and input events to support fleet management, recovery, and telematics workflows.

To learn more about Plaspy and how it can work with devices such as the ATrack AK1 visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time and should be verified on the manufacturer's site https://www.atrack.com.tw/ before deploying at scale.
