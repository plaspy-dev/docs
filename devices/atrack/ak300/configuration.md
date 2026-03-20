---
slug: /atrack/ak300/configuration
id: ak300-configuration
sidebar_label: Configuration
title: ATrack - AK300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ATrack AK300 showing Plaspy server settings and example device commands
keywords:
  - ATrack AK300 configuration
  - AK300 setup Plaspy
  - ATrack AK300 server configuration
  - AK300 GPS tracker setup
  - Plaspy device configuration
  - fleet tracking AK300
  - AK300 GPRS settings
  - ATrack AK300 commands
  - vehicle tracker AK300
  - AK300 telemetry configuration
---

# ATrack - AK300 Configuration

This page covers the public configuration context for using the ATrack AK300 with Plaspy. It brings together the essential Plaspy server settings, typical prerequisites, a practical configuration workflow, and example AT style commands that are commonly used with AK300 firmware to point the device at Plaspy. Use this guide as a practical reference when preparing the tracker for Plaspy integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The AK300 often accepts AT style configuration commands or vendor configuration tools; where public commands are available they are shown below for convenience and verification.

## Configuration Overview

This configuration process prepares the AK300 to communicate reliably with Plaspy so that location, telemetry, and event data appear in the Plaspy platform. The public commands supplied by the manufacturer configure input reporting, reporting interval, data format, and the GPRS server settings required to route data to Plaspy.

- Set device input and event reporting so the tracker sends ACC and digital input events to Plaspy.
- Configure the periodic tracking interval to control how often the AK300 reports position to the platform.
- Set the device data format (binary mode example) to match Plaspy expectations if required by firmware.
- Configure GPRS/APN and server host so the AK300 opens a connection to Plaspy at the shared server endpoint and port.
- Verify device status using a built-in info query to confirm connectivity and applied settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for device connections

## Typical Requirements Before Setup

- A powered and accessible AK300 unit with appropriate installer access to the configuration interface.
- A valid SIM card and data plan with correct APN settings for the device region and carrier.
- Access to the official ATrack configuration method or software, or a method to send AT style commands (serial, USB, SMS or vendor tool) as supported by the unit.
- Knowledge of vehicle wiring and ignition input if ACC or other inputs are to be used for event reporting.
- Plaspy account access or credentials to validate that the device appears and reports correctly after configuration.
- Confirmation of current firmware version and release notes from the manufacturer if available.

## How This Tracker Connects to Plaspy

The AK300 is configured to report GPS fixes, telemetry, and event-driven messages to Plaspy using the shared server endpoint and port. Data is sent over standard IP transport (UDP or TCP) to the Plaspy server and is then processed and displayed in the Plaspy platform.

- The device opens a GPRS data session using the device APN and connects to the Plaspy server host and port.
- Position and telemetry packets are transmitted to 54.85.159.138 on port 8888 (or to d.plaspy.com when supported).
- Plaspy automatically detects the tracker protocol so no device-specific protocol selection is required on the platform side.
- Event reporting such as ACC on/off or digital input changes is sent as configured so Plaspy can generate alerts and trip records.
- Using the same port across devices simplifies firewall and network configuration for fleets.

## Common Configuration Workflow

1. Access the official ATrack configuration method or vendor tool for the AK300 (serial console, USB, SMS, or ATrack configuration software).
2. Enter the Plaspy server host as either d.plaspy.com or 54.85.159.138 in the device server setting.
3. Set the server port to 8888 (Plaspy uses port 8888 for all devices).
4. Choose the transport protocol UDP or TCP on the device if required by the firmware.
5. Apply or save the configuration and, if needed, send the required AT commands to enable reporting and set intervals.
6. Restart the device if recommended by the manufacturer or the configuration tool to apply changes.
7. Validate that the AK300 reports to Plaspy by checking device status in the platform and using the device info query command shown below.

## Example Configuration Commands

The following AT style commands are the public commands provided for AK300 configuration. Commands are shown in the order they are commonly applied. Send these via the official configuration tool, a serial console, or another manufacturer supported method. Placeholders must be replaced with your carrier APN values where noted.

- Enable ACC event reporting and related input reports

```
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set the periodic tracking interval to 60 seconds

```
AT$TRAC=1,60,,,,,2
```

- Set device to binary data format example

```
AT$FORM=1,@P,0,""
```

- Configure GPRS and Plaspy server settings
  - Replace {{apn}} with your carrier APN
  - Replace {{apnu}} with APN username if required by your carrier
  - Replace {{apnp}} with APN password if required by your carrier

```
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```

- Check device status and verify applied settings

```
AT$INFO=?
```

Notes about these commands
- The GPRS command above uses the Plaspy server IP as provided in the public configuration instructions. If your configuration tool accepts a host name, you may also use d.plaspy.com where supported by the device firmware.
- Placeholders {{apn}}, {{apnu}}, and {{apnp}} represent your mobile carrier APN, APN username, and APN password respectively. Fill them with values from your SIM provider.

## Configuration Notes

- Firmware differences between AK300 hardware revisions may change available commands, parameter ordering, or supported options; always confirm with the device firmware release notes.
- When choosing transport, UDP is common for lower overhead while TCP provides connection reliability; Plaspy accepts either and performs automatic protocol detection.
- The example commands show binary format; other formats or protocol modes may be available depending on firmware and should match Plaspy expectations.
- If the device supports SMS configuration as an alternate channel, follow the manufacturer SMS syntax or use the vendor tool for bulk deployments.
- Always document applied changes and test a single unit before rolling out settings fleet wide.

## Why Use Plaspy with This Configuration

Using the AK300 with Plaspy gives fleet operators consolidated visibility into vehicles, events, and telemetry data through a single platform. The AK300’s vehicle I/O and telemetry capabilities combined with Plaspy’s protocol detection and unified server endpoint let teams monitor trips, detect events such as ignition on/off, and act on alerts for safety and operational efficiency.

To learn more about Plaspy and how it supports device integrations like the AK300 visit https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and command syntax always verify the manufacturer documentation at https://www.atrack.com.tw/ as methods and firmware may change over time.
