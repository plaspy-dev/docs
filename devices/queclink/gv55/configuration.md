---
slug: /queclink/gv55/configuration
id: gv55-configuration
sidebar_label: Configuration
title: QuecLink - GV55 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV55 showing Plaspy server settings and example SMS commands for GPRS setup
keywords:
  - QuecLink GV55 configuration
  - GV55 setup
  - QuecLink GV55 Plaspy
  - GV55 server configuration
  - GV55 SMS commands
  - GV55 GPRS setup
  - QuecLink GPS tracker configuration
  - GV55 vehicle tracker setup
  - GV55 telematics configuration
  - QuecLink GV55 tracking platform
---

# QuecLink - GV55 Configuration

This page covers the public configuration context for using the QuecLink GV55 with Plaspy. It summarizes the Plaspy server endpoint and practical setup steps that are commonly used to point GV55 devices to Plaspy for real time tracking and telemetry ingestion. Where available, example SMS commands from the device configuration are shown so installers can apply them directly or adapt the values for their environment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at connection time. Exact manufacturer side setup steps for the GV55 can vary by firmware version, hardware revision, installation type and vendor tools, so use these public settings and example commands as a practical guide and verify any device-specific or firmware-specific details with the manufacturer documentation.

## Configuration Overview

This configuration prepares the GV55 to send position and event data into the Plaspy platform so devices appear in live maps, reports and alerting. The example commands below show how an installer can configure the GV55 using SMS with the device password and GPRS server parameters pointing to Plaspy.

- Configure the device network parameters so the GV55 can register on GPRS and reach Plaspy
- Set the Plaspy server endpoint and the port used by all devices in the platform
- Configure reporting intervals so position updates arrive at the expected frequency
- Enable relevant inputs or alarm reporting so event data is available in Plaspy
- Validate connectivity and ensure the tracker is visible and reporting in Plaspy

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GV55:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured to use either)
- Plaspy automatically detects the tracker protocol when a device connects

Note: All devices in Plaspy use the same port, so set port 8888 when configuring any supported tracker.

## Typical Requirements Before Setup

- A powered and accessible GV55 device installed or temporarily accessible for configuration
- A working SIM card with data/GPRS enabled and the correct APN details for the mobile operator
- Ability to send SMS commands from a phone or SMS gateway to the device if using SMS-based setup
- Knowledge of the device password (the example commands below use the default password queclink)
- Access to the official manufacturer documentation or configuration tool for any device firmware variations
- Network access to the Plaspy server endpoint from the device mobile network

## How This Tracker Connects to Plaspy

The GV55 sends GNSS position and configured event telemetry to the Plaspy server endpoint and port. When pointed to d.plaspy.com (or the server IP) on port 8888 the device will deliver location and event messages to Plaspy where they are processed and displayed.

- The tracker uses GPRS to reach the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888
- Plaspy accepts TCP or UDP transport and automatically detects the device protocol
- Device events such as ignition, SOS input, immobilizer or crash alarms are transmitted to Plaspy for alerts
- Scheduled position reporting intervals determine update cadence visible in the Plaspy platform
- Successful configuration results in live tracking, historical replay, and event notifications in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (for GV55 this commonly includes SMS configuration or the manufacturer's tool).  
2. Enter the Plaspy server endpoint either as domain d.plaspy.com or as the IP 54.85.159.138.  
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose the transport protocol (UDP or TCP) if the device requires explicit selection.  
5. Configure the device APN and any authentication values required by the mobile operator.  
6. Apply or save the configuration on the device and restart the tracker if required.  
7. Validate that the device is reporting to Plaspy by checking device connectivity and live updates in the Plaspy platform.

## Example Configuration Commands

The GV55 supports SMS command configuration. The examples below are public SMS commands extracted from the device configuration content. The sample commands use the default device password queclink. Replace placeholders and operator values where required.

- Notes on placeholders:
  - {{apn}} is the mobile network APN string supplied by the SIM operator
  - {{apnu}} is the APN username when required by the operator
  - {{apnp}} is the APN password when required by the operator

1. Optional initial factory restore (use only when needed as part of a fresh setup)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the device time zone to UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configure the operator APN (replace placeholders with your operator values)
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

4. Set the GPRS server to Plaspy. This example includes both domain and IP and uses port 8888.
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the periodic update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification mapped to input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send each command as an SMS to the GV55 from an authorized phone number or via a provisioning tool that supports SMS command dispatch. After applying server and APN settings, confirm the device registers on the mobile network and reports to the Plaspy endpoint on port 8888.

## Configuration Notes

- SMS based configuration is a common method for GV55; follow the device password requirement in SMS commands and change the default password after initial setup for security.
- Firmware and hardware revisions can change command availability and parameter order; verify commands against the current QuecLink GV55 documentation.
- When choosing transport, test both UDP and TCP if connectivity issues arise; Plaspy supports either and detects the protocol automatically.
- Replace APN placeholders {{apn}}, {{apnu}}, and {{apnp}} with the correct operator values; missing or incorrect APN details will prevent GPRS attachment.
- Use the domain d.plaspy.com or the IP 54.85.159.138 with port 8888; Plaspy uses the same port for all devices so the platform simplifies per-device port management.

## Why Use Plaspy with This Configuration

Configuring the QuecLink GV55 to report to Plaspy provides a straightforward path to real time location, event monitoring and historical telemetry for fleet and asset management. The GV55’s event inputs and buffered reporting combine with Plaspy’s ingestion to deliver timely alerts, continuous tracking and operational visibility for fleet operators and service providers.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes and detailed GV55 documentation verify details with the manufacturer at https://www.queclink.com/ as device configuration methods and firmware behavior can change over time.
