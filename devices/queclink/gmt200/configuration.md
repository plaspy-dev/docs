---
slug: /queclink/gmt200/configuration
id: gmt200-configuration
sidebar_label: Configuration
title: QuecLink - GMT200 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GMT200 integration with Plaspy server settings and SMS commands
keywords:
  - QuecLink GMT200 configuration
  - QuecLink GMT200 setup
  - GMT200 server configuration
  - GMT200 Plaspy setup
  - Plaspy GPS tracker configuration
  - motorcycle GPS tracker setup
  - GPS tracker server settings
  - QuecLink GPS platform setup
  - vehicle tracking configuration
  - GMT200 SMS commands
---

# QuecLink - GMT200 Configuration

This page documents the public configuration context for using the QuecLink GMT200 tracker with Plaspy. It focuses on the practical server settings and example setup commands that are commonly used to point a GMT200 to Plaspy for live tracking and event reporting. Use this guide to understand what to prepare before integrating the device and how Plaspy receives the device data.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary depending on device firmware, hardware revision, installation type, and the vendor tools you use. The GMT200 supports SMS based configuration examples in the public command set below and the steps shown here reflect typical, publicly available setup patterns.

## Configuration Overview

This configuration process prepares the GMT200 to communicate with Plaspy, validates connectivity, and enables visibility of the tracker inside the Plaspy platform. The example commands shown are SMS style AT commands commonly used for QuecLink device configuration and include APN and server settings that point the tracker to Plaspy.

- Configure the device network APN and credentials so GPRS data can be sent from the tracker.
- Set the Plaspy server endpoint and port so the GMT200 reports to Plaspy for live tracking.
- Choose and verify transport settings UDP or TCP if the tracker requires an explicit selection.
- Validate connectivity and reporting frequency to ensure timely position updates inside Plaspy.
- Enable relevant inputs or alarms (for example SOS or ignition) so events reach Plaspy as alerts.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible GMT200 tracker installed or on a bench for initial configuration.
- An active cellular SIM card provisioned with a data plan and the correct APN values.
- Access to the QuecLink configuration method used by your installation such as SMS commands or a manufacturer configuration tool.
- The device password when required for configuration SMS commands; the public sample password used in example commands is queclink
- Knowledge of whether your installation prefers UDP or TCP transport for the tracker connection.
- A Plaspy account and the expectation that the device will report to the shared Plaspy endpoint and port

## How This Tracker Connects to Plaspy

The GMT200 is configured to send its location and event telemetry to the shared Plaspy endpoint and port so Plaspy can ingest, display, and alert on the data. Once the device has a valid network connection and the server and port are set, Plaspy will receive device updates and automatically parse the tracker protocol.

- The tracker sends position and event packets to d.plaspy.com on port 8888
- The tracker can be configured to use UDP or TCP transport to reach Plaspy
- Plaspy uses automatic protocol detection so no manual protocol selection in the platform is required
- Telemetry and alarm events forwarded to Plaspy become visible in live maps and alert feeds
- Successful configuration enables ongoing monitoring, historical playback, and event-driven workflows inside Plaspy

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GMT200 such as SMS commands or the vendor tool recommended for your firmware.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138 as required by your device configuration interface.
3. Set the port to 8888 in the device server or GPRS settings.
4. Choose UDP or TCP if the device requires an explicit transport selection for port 8888.
5. Apply or save the configuration to the device and allow the device to commit the settings.
6. Restart the device if the tracker firmware requires a reboot to apply network settings.
7. Validate that the device reports to Plaspy by checking the device status in your Plaspy account and by confirming live position updates.

## Example Configuration Commands

The GMT200 can be configured using SMS AT style commands. The following example commands are public examples and use the sample device password queclink. Keep the command order when performing initial setup where order matters. Placeholders are preserved where present.

Notes
- The first command is a factory settings restore and is optional or used when starting from an unknown state.
- [apn], [apnu], and [apnp] are placeholders for your SIM APN name, APN username, and APN password respectively.

1. Optional initial factory reset command
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN with placeholders for APN values
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- Replace [apn] with your cellular provider APN name
- Replace [apnu] and [apnp] with APN username and password if required by the operator

4. Configure the GPRS server to point to Plaspy
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command includes both the Plaspy domain and IP and sets port 8888; the device may use domain or IP depending on firmware behavior

5. Set reporting interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

## Configuration Notes

- Manufacturer firmware and configuration syntax can vary by hardware revision. Always confirm the syntax for your GMT200 firmware version before sending commands.
- The GMT200 supports SMS based configuration as shown in the examples. Some deployments may prefer a wired configuration tool or an OTA update method provided by the vendor.
- Choose UDP or TCP based on network reliability and carrier behavior for your region. Testing both transports may be necessary to determine the most reliable option.
- The sample default password used in the public commands is queclink. Change device passwords after initial setup when appropriate for security and operational policies.
- Because Plaspy uses the same port for all devices and automatic protocol detection, your primary focus on the device should be correct server, APN, transport selection, and reporting interval.

## Why Use Plaspy with This Configuration

Using the QuecLink GMT200 with Plaspy gives organizations continuous visibility into motorcycle fleets and individual assets while centralizing alarms and event workflows. The GMT200's discreet form factor and continuous reporting combined with Plaspy's ingestion and mapping provide practical tools for anti-theft response, route playback, and operational monitoring.

Learn more about Plaspy and how devices are integrated on the main website https://www.plaspy.com. For device specific details, firmware behavior, and the latest configuration methods consult Queclink's official documentation at https://www.queclink.com/ to verify current information.
