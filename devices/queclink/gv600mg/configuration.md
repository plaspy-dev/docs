---
slug: /queclink/gv600mg/configuration
id: gv600mg-configuration
sidebar_label: Configuration
title: QuecLink - GV600MG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the QuecLink GV600MG tracker to Plaspy with practical SMS commands and server settings
keywords:
  - QuecLink GV600MG configuration
  - QuecLink GV600MG setup
  - GV600MG Plaspy
  - GV600MG server configuration
  - QuecLink tracker configuration
  - fleet tracking setup
  - GPS tracker configuration
  - trailer tracking setup
  - vehicle tracking Plaspy
  - GV600MG SMS commands
---

# QuecLink - GV600MG Configuration

This page covers the public configuration context for using the QuecLink GV600MG tracker with Plaspy. It consolidates the shared server settings that Plaspy requires and shows a practical SMS-based example configuration that can be used as a starting point for integration. The GV600MG is a rugged LTE tracker commonly used on trailers, tankers, and flatbed trucks and the guidance here is focused on preparing it to communicate with Plaspy's endpoint.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for incoming connections, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The sample SMS commands below reflect public configuration examples; use them as a reference and always verify firmware-specific behavior with QuecLink documentation and your installer tools.

## Configuration Overview

This configuration process prepares the GV600MG to send telemetry and event reports to Plaspy so assets become visible and manageable within the platform. The public example uses SMS commands to apply network and server parameters, but manufacturer tools and web interfaces may also be available depending on your deployment and firmware.

- Configure the tracker to point to Plaspy's shared server endpoint so it can report location and events.
- Set the device APN and GPRS parameters so cellular data can be used for reporting.
- Establish periodic reporting intervals so Plaspy receives position updates at the desired cadence.
- Enable input or event reporting (for example SOS) so alerts are transmitted to Plaspy.
- Validate connectivity from the device to Plaspy to confirm the tracker appears in the platform.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Ensure the GV600MG has power: internal battery charged or external power connected for initial configuration.
- A valid cellular SIM with a carrier data plan and the correct APN values available (APN placeholders are used in examples).
- Access to the device phone number for SMS configuration or access to the manufacturer configuration tool recommended by QuecLink.
- Knowledge of the device password (the sample commands use the default password queclink).
- Physical access to the device if inputs, wiring, or sensors need to be tested after configuration.
- Confirmation of the device firmware version and any vendor-specific configuration steps from QuecLink documentation.

## How This Tracker Connects to Plaspy

When configured, the GV600MG reports position and event data to Plaspy using cellular data; the public example shows GPRS server settings being written to point to Plaspy. Plaspy receives these messages on its shared endpoint and automatically determines the incoming protocol so telemetry is decoded and displayed.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com on port 8888.
- An alternative server IP (54.85.159.138) may be set if required by the configuration method.
- The device can be set to use UDP or TCP transport to send reports to Plaspy on port 8888.
- Plaspy automatically detects the tracker protocol and processes incoming reports without per-device port changes.
- Events such as SOS or input changes can be enabled to send immediate notifications to Plaspy.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GV600MG (SMS commands, manufacturer tool, or vendor software) as provided by your installer or QuecLink.
2. Enter the Plaspy server by hostname d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the reporting port to 8888 (Plaspy uses the same port across devices).
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure APN and other network parameters so the tracker can use cellular data for reporting.
6. Apply or save the configuration and restart the device if the method requires it.
7. Validate that the device reports to Plaspy by checking device visibility in the platform and confirming incoming messages.

## Example Configuration Commands

The following public SMS commands are provided as a sample setup sequence for the GV600MG. These commands use the sample device password queclink (this is the default password in the example). Send each line as an SMS to the device phone number in the order shown when using SMS-based configuration. Keep placeholders intact and replace them with your operator values where needed.

- Optional initial step — restore factory settings (use only if you intend to reset the device):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC-0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN (replace placeholders with your carrier values):
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explanation: {{apn}} is the carrier access point name, {{apnu}} is the APN username, and {{apnp}} is the APN password. Leave username or password empty if not required by the operator.

- Set the GPRS server to point to Plaspy (this includes both the hostname and the IP address; port 8888 is used by Plaspy):
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Explanation: This command writes the Plaspy hostname d.plaspy.com and the server IP 54.85.159.138 with port 8888 into the device server list so reports are sent to Plaspy.

- Set update interval to 60 seconds (position reporting cadence):
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification for input 2:
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note: These commands are public examples. If you use SMS-based configuration, ensure the device accepts SMS commands and that the default password is unchanged or replace it with your own device password before sending sensitive configuration.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or supported parameters; verify commands against the GV600MG firmware release notes.
- The sample commands use SMS-based configuration; QuecLink also provides manufacturer tools and vendor software that may offer a GUI or batch configuration workflow.
- Choose TCP or UDP based on any vendor recommendations or network considerations; Plaspy supports both transports and will auto-detect the protocol.
- Plaspy uses the same port for all supported devices (port 8888) to simplify device-side configuration and server routing.
- Always confirm APN, username, and password values with your cellular operator and test data connectivity before relying on production reporting.

## Why Use Plaspy with This Configuration

Using the QuecLink GV600MG with Plaspy gives organizations a practical way to monitor rugged trailers and heavy equipment with long standby battery life and cellular connectivity. Configuring the tracker to report to Plaspy's shared server endpoint provides centralized visibility into location, movement, and critical events so operations teams can manage assets more effectively.

To learn more about Plaspy and how it integrates with telematics devices, visit https://www.plaspy.com. For the latest device-specific setup details, firmware updates, and command references from the manufacturer, verify information at the QuecLink website https://www.queclink.com/ because manufacturer specifications and configuration methods can change over time.
