---
slug: /queclink/gv350mg/configuration
id: gv350mg-configuration
sidebar_label: Configuration
title: QuecLink - GV350MG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV350MG with Plaspy including server settings SMS commands and integration checklist
keywords:
  - QuecLink GV350MG configuration
  - QuecLink GV350MG setup
  - GV350MG Plaspy setup
  - QuecLink GPS tracker configuration
  - Plaspy tracker setup
  - vehicle tracker configuration
  - fleet tracking setup
  - GV350MG server configuration
  - QuecLink telematics setup
  - GV350MG SMS commands
---

# QuecLink - GV350MG Configuration

This page covers the public configuration context for using the QuecLink GV350MG with Plaspy. It collects the practical, public setup details you need to point a GV350MG tracker at the Plaspy ingestion endpoint, plus the example SMS commands that are commonly used to arrange server settings and basic reporting. Use this information as a deployment checklist and a starting point for configuration with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GV350MG supports SMS based configuration commands as shown below and also connects over cellular data using TCP or UDP transport depending on your configuration choice.

## Configuration Overview

This section explains the purpose of configuring a GV350MG for use with Plaspy and what to validate during setup.

- Prepare the GV350MG so it reports location and vehicle telemetry to the Plaspy ingestion endpoint.
- Configure the device GPRS or SMS parameters and point the server settings to the Plaspy endpoint.
- Validate transport selection and connectivity so the tracker reaches Plaspy reliably over TCP or UDP.
- Enable scheduled reporting and input events so Plaspy receives regular location updates and alarms.
- Confirm the device appears in Plaspy and that telemetry, events, and alerts are visible in the platform.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GV350MG:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP
- Plaspy automatically detects the tracker protocol and the same port is used for all supported devices

## Typical Requirements Before Setup

- A powered and reachable GV350MG with a valid SIM and active data plan for GPRS or LTE reporting
- Ability to send SMS commands to the tracker if using SMS based configuration
- Access to the official QuecLink configuration tools or SMS command set for your firmware revision
- The device default password queclink for the example SMS commands shown below unless you have changed it
- An installation point with good GNSS visibility for initial location validation
- A technician or installer account on your Plaspy instance to verify device arrival and telemetry after setup

## How This Tracker Connects to Plaspy

When configured, the GV350MG sends location and telemetry to Plaspy so fleet managers can monitor vehicles and events.

The connection behavior typically includes:

- Device is configured to report to the shared Plaspy server endpoint and port
- Tracker sends regular position and telemetry packets to d.plaspy.com or 54.85.159.138 at port 8888
- Data can be sent over TCP or UDP depending on your selection at configuration time
- Plaspy automatically detects the tracker protocol so you do not need to identify a protocol variant manually
- Event driven reports such as SOS, ignition, or input changes are forwarded to Plaspy for alerts and rules processing

## Common Configuration Workflow

Follow these practical steps to configure a GV350MG for Plaspy:

1. Access the official QuecLink configuration method for your device such as the SMS command interface or QuecLink configuration software
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the device server settings
3. Set the server port to 8888 as the device reporting port
4. Choose the transport UDP or TCP if your device requires a transport selection
5. Apply or save the configuration to the tracker using the manufacturer tool or SMS commands
6. Restart the device if required to apply network and server changes
7. Validate that the device reports to Plaspy by confirming the unit appears in your Plaspy account and that location and telemetry arrive as expected

## Example Configuration Commands

The GV350MG supports SMS based configuration. The following public commands are presented in the original model configuration and are intended to be sent to the device as SMS messages. The sample uses the device password queclink which is the factory default in these examples. Preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} when you replace them with your operator APN, APN user, and APN password respectively.

1. Optional initial factory restore command
Send this only when you intend to restore factory defaults as part of initial setup.

```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set time zone to UTC 0

```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN
Replace the placeholders with your mobile operator values.

```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

- {{apn}} is the access point name provided by your mobile operator
- {{apnu}} is the APN username if required by the operator
- {{apnp}} is the APN password if required by the operator

4. Set the GPRS server to Plaspy
This command sets both domain and IP for redundancy and points to the Plaspy ingestion endpoint. The port 8888 is included as the service port.

```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the update interval to 60 seconds

```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2

```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes on SMS commands
- Send each command as a separate SMS message to the device phone number.
- Keep the order when performing initial configuration so the APN and server are set before starting scheduled reporting.
- The example commands use the default password queclink in the command string. Change or secure the password after initial configuration if needed.

## Configuration Notes

- Firmware differences across GV350MG revisions may change exact command syntax or available parameters; always check the device firmware notes if a command fails.
- SMS based setup is convenient for field installs, but consider using the official QuecLink configuration tool when available for batch or advanced settings.
- Choose UDP or TCP transport deliberately depending on network reliability and your operational preferences; Plaspy accepts both and will auto detect protocol specifics.
- Plaspy uses the same port 8888 for all supported devices which simplifies server configuration in mixed fleets.
- Test connectivity after configuration by confirming device messages arrive in Plaspy and by checking device timestamps and event reporting.

## Why Use Plaspy with This Configuration

Using the GV350MG with Plaspy brings vehicle location, CAN bus telemetry, and input events into a single operational platform for monitoring, alerts, and historical analysis. The shared Plaspy server settings and automatic protocol detection reduce per device configuration complexity and help you standardize deployments across a fleet.

To learn more about Plaspy and how it can ingest GV350MG telemetry, visit https://www.plaspy.com. For the most current device specific command reference, firmware notes, and installation guides verify details on the manufacturer website https://www.queclink.com/ as setup methods and firmware behavior can change over time.
