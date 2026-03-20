---
slug: /queclink/gv300can/configuration
id: gv300can-configuration
sidebar_label: Configuration
title: QuecLink - GV300CAN Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV300CAN tracker setup and Plaspy compatibility including server settings SMS commands and workflow
keywords:
  - QuecLink GV300CAN configuration
  - QuecLink GV300CAN setup
  - GV300CAN Plaspy
  - GV300CAN server configuration
  - QuecLink tracking configuration
  - GV300CAN SMS setup
  - vehicle GPS tracker configuration
  - Plaspy device setup
  - QuecLink GPS platform setup
  - fleet tracker configuration
---

# QuecLink - GV300CAN Configuration

This page provides the public configuration context for using the QuecLink GV300CAN with Plaspy. It describes the practical server settings, common setup workflow, and example SMS commands that are publicly available for configuring the tracker to report into the Plaspy platform. Use this guide to prepare the device for communication with Plaspy and to understand what information you will need from the manufacturer and carrier.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the core server values below apply to the GV300CAN. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The example SMS commands shown here are representative public commands and should be validated against current QuecLink documentation and your device firmware.

## Configuration Overview

Preparing a GV300CAN for Plaspy means assigning the device to the Plaspy server endpoint, confirming transport settings, and validating that scheduled or event-driven reports reach your Plaspy account. The GV300CAN supports TCP UDP and SMS transport and can be configured by SMS commands or manufacturer tools depending on installation preferences.

- Configure the device to report to the Plaspy server endpoint so location and vehicle data arrive in Plaspy.
- Set the transport type to either UDP or TCP if required by your firmware and carrier.
- Provide correct APN settings so the device can use GPRS data for TCP UDP reporting.
- Validate connectivity and reporting frequency so live position and CANBus telemetry appear in Plaspy.
- Use the manufacturer SMS commands or configuration software to apply settings and, if needed, restore factory defaults first.

## Plaspy Server Settings

- Server domain d.plaspy.com for device reporting and ingestion
- Server IP 54.85.159.138 as an alternate server endpoint
- Port 8888 which Plaspy uses for device connections
- Transport support for UDP or TCP depending on device and carrier
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

Note that Plaspy uses the same port for all devices and automatically determines the correct tracker protocol at the platform level.

## Typical Requirements Before Setup

- Physical access to the tracker or a remote SMS provisioning method for applying commands
- A working SIM card with data enabled and the correct APN for the mobile operator
- A tool or method to send SMS provisioning commands or access to the QuecLink configuration software
- Power to the device and a stable installation so the tracker can acquire GNSS signals and connect to the network
- Knowledge of the device password if the unit is protected by one; the public SMS examples below use the default password queclink
- Confirmation of firmware version and any vendor specific instructions that affect command syntax

## How This Tracker Connects to Plaspy

When configured to use Plaspy settings, the GV300CAN sends GNSS positions and vehicle telemetry to the shared Plaspy server endpoint and port. Plaspy ingests those messages and maps incoming data to the appropriate device record using the detected protocol.

- The device reports location updates and event notifications to d.plaspy.com or 54.85.159.138 on port 8888
- Transport is selected as UDP or TCP on the device as supported by the carrier and firmware
- Plaspy automatically detects the tracker protocol so incoming messages are parsed correctly without device specific port mappings
- Telemetry such as CANBus frames and device inputs are delivered alongside position data into Plaspy
- Regular scheduled reporting intervals or event driven reports ensure visibility and alerts in the platform

## Common Configuration Workflow

1. Access the official QuecLink configuration method for your GV300CAN such as SMS provisioning or the manufacturer PC tool. Consult QuecLink documentation for firmware specific command syntax.
2. Enter the Plaspy server address as either the domain d.plaspy.com or the IP 54.85.159.138 in the server configuration field.
3. Set the server port to 8888 which is the shared port Plaspy uses for all devices.
4. Choose UDP or TCP on the device if a transport selection is required by your firmware or carrier.
5. Configure the device APN and credentials if the device will use GPRS data for reporting.
6. Apply or save the configuration and restart the device if the firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking device arrival and telemetry in your Plaspy account or through logging during initial tests.

If you are using SMS commands as shown in the examples below, send them in the order indicated and verify responses from the tracker after each step.

## Example Configuration Commands

The GV300CAN can be configured using SMS provisioning commands. The following public commands are provided in the manufacturer documentation. The default device password used in these examples is queclink. Send each command as an SMS to the device number. Keep the order when performing an initial setup.

1. Optional factory restore step labeled as initial setup when required
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
3. Set the operator APN
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] is the mobile operator APN
- [apnu] is the APN username if required by the operator
- [apnp] is the APN password if required by the operator

4. Set the GPRS server to Plaspy (domain and IP provided, port included)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
5. Set the update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
6. Enable SOS button notification input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send these SMS commands from a management phone number or provisioning tool as required. Verify the tracker replies with confirmation messages and then confirm reporting in Plaspy.

## Configuration Notes

- Commands and syntax may vary by GV300CAN firmware version and hardware revision; always confirm against your device firmware notes.
- SMS provisioning is shown above because it is part of the public manufacturer guidance; you can also use QuecLink configuration tools where available.
- Choose UDP or TCP based on carrier reliability and the transport options supported by your firmware; Plaspy accepts either on the shared port.
- The example commands use the default password queclink as provided in the public setup examples; change device passwords after provisioning where appropriate for security.
- If you use the factory restore command include it only when needed, for example during initial provisioning or troubleshooting.

## Why Use Plaspy with This Configuration

Using the GV300CAN with Plaspy gives fleets and logistics operators a practical path to collect GNSS positions, CANBus telemetry, and event driven alerts in a single platform. With shared Plaspy server settings and automatic protocol detection, device onboarding is streamlined so teams can focus on validating APN and transport settings, tuning reporting intervals, and enabling the alarms and inputs that matter for their workflows.

To learn more about Plaspy and how it handles device ingestion and fleet telematics visit https://www.plaspy.com. For the most current device specific commands firmware notes and official guidance always verify setup details on the manufacturer website https://www.queclink.com/ as firmware behavior and configuration methods may change over time.
