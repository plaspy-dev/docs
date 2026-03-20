---
slug: /atrack/as3/configuration
id: as3-configuration
sidebar_label: Configuration
title: ATrack - AS3 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the ATrack AS3 with Plaspy including server settings transport options and example commands
keywords:
  - ATrack AS3 configuration
  - ATrack AS3 setup
  - AS3 GPS tracker
  - Plaspy configuration
  - AS3 server configuration
  - AS3 GPRS setup
  - AS3 tracking platform
  - vehicle tracking AS3
  - AS3 protocol configuration
  - asset tracker AS3
---

# ATrack - AS3 Configuration

This page documents the public configuration context for using the ATrack AS3 tracker with Plaspy. It summarizes the Plaspy server settings you will use, the typical prerequisites for setup, and the practical steps and example commands available in public ATrack AS3 configuration content. Use this guidance to prepare your device for reporting to Plaspy and to validate connectivity before deploying the tracker in production.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The examples on this page include public ATrack AS3 commands when available; always confirm device-specific command syntax and behavior against the official manufacturer documentation.

## Configuration Overview

This configuration process prepares the AS3 to send location and event data to the Plaspy platform using the common Plaspy endpoint and port. The public AS3 configuration script examples show how to enable event reporting, set tracking intervals, set message format, and point the tracker to Plaspy's server for GPRS communications.

- Configure the device to report to the Plaspy server endpoint and port so Plaspy can receive telemetry.
- Enable ACC or input event reporting and any required alarm logic so events appear in Plaspy.
- Set the periodic tracking interval to control how often position updates are sent to Plaspy.
- Configure message format (for example the AS3 binary mode example) to match what Plaspy expects for protocol detection.
- Validate GPRS/APN and network connectivity so the device can establish a data session to the Plaspy server.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP (device may be configured with either)  
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A powered and accessible ATrack AS3 device with a valid SIM and active data plan for GPRS/HSPA/CDMA networks if using mobile data.
- Access to the manufacturer configuration method for the AS3 (serial tool, USB/adapter, SMS commands, or the vendor configuration utility).
- Knowledge of the correct APN, APN username, and APN password for the SIM card; placeholders are used in example commands below.
- Confirmation that firmware supports the AT command syntax shown in the examples and whether domain names or raw IPs are required for server configuration.
- A Plaspy account or platform access to verify the device appears and reports once configuration is applied.

## How This Tracker Connects to Plaspy

The AS3 sends position and event data to the Plaspy server endpoint and port so devices become visible and trackable on the platform. Plaspy receives telemetry and automatically identifies the device protocol to interpret messages correctly.

- Device is configured to send GPRS data to the Plaspy server IP or domain and port 8888.
- Periodic position reports are sent at the configured tracking interval so Plaspy can display movement and history.
- Input and motion events such as ACC on/off can be enabled so these events are forwarded to Plaspy for alerts or automation.
- Binary or protocol-specific message format is set on the device, and Plaspy detects the protocol automatically to parse incoming data.
- Device connectivity and reporting are validated by checking that telemetry arrives at the Plaspy endpoint and appears in the platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the ATrack AS3 (serial console, configuration tool, or SMS command interface) as documented by ATrack.
2. Enter the Plaspy server target (use d.plaspy.com or the IP 54.85.159.138 depending on device support and your preference).
3. Set the server port to 8888 as Plaspy uses the same port for all devices.
4. Choose UDP or TCP in the device settings if the device requires an explicit transport selection.
5. Apply or save the configuration to the device and, if required by the device, restart the tracker to activate new settings.
6. Validate that the device reports to Plaspy by checking device status with the device verification command and by confirming the device appears in Plaspy.

## Example Configuration Commands

The following public AS3 commands are provided in ATrack example content. They are shown in order and preserve placeholders used for APN configuration. Keep the placeholders [apn], [apnu], and [apnp] and replace them with your carrier APN, username, and password as needed.

- Set ACC input event reporting and related actions
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set tracking interval to 60 seconds
```text
AT$TRAC=1,60,,,,,2
```

- Set binary message format
```text
AT$FORM=1,@P,0,""
```

- Configure GPRS server and APN with Plaspy IP and port
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Note: [apn] is the mobile network APN, [apnu] is the APN username, and [apnp] is the APN password. Replace these placeholders with your SIM provider values. Plaspy also publishes the domain d.plaspy.com; if your firmware accepts domain names you may choose to use d.plaspy.com instead of the IP after confirming with ATrack documentation.

- Check device status
```text
AT$INFO=?
```

## Configuration Notes

- Firmware differences across AS3 versions can change AT command syntax and supported parameters; always verify commands against the specific firmware release notes.
- Choose UDP or TCP based on installation and network behavior; both transports are supported for communication to Plaspy but reliability characteristics can vary by network.
- Keep APN placeholders intact in example commands and populate them with operator-specific values before applying configuration.
- If your device supports SMS-based configuration, commands may be sent via SMS instead of a configuration tool; consult ATrack guidance for SMS formatting and length limits.
- Binary or protocol format changes may affect how Plaspy interprets messages; since Plaspy automatically detects protocol, ensure format selected on the device is consistent with commonly supported protocols.

## Why Use Plaspy with This Configuration

Using the ATrack AS3 with Plaspy lets organizations centralize location and event reporting from AS3 devices into a single platform for visibility and operational oversight. With the Plaspy endpoint and port configured, the AS3 can deliver periodic position updates and input events so fleets, trailers, or mobile assets can be monitored and managed consistently across deployments.

To learn more about Plaspy visit https://www.plaspy.com and for the most current ATrack device details check the official manufacturer site https://www.atrack.com.tw/. Manufacturer specifications, firmware behavior, and configuration methods can change over time so verify the latest device-specific instructions on the official ATrack resources.
