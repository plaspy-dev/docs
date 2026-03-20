---
slug: /queclink/gv501lg/configuration
id: gv501lg-configuration
sidebar_label: Configuration
title: QuecLink - GV501LG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV501LG showing Plaspy server settings, SMS commands, and practical setup steps for rapid integration
keywords:
  - QuecLink GV501LG configuration
  - QuecLink GV501LG setup
  - GV501LG server configuration
  - GV501LG Plaspy setup
  - QuecLink GPS tracker Plaspy
  - OBDII GPS tracker configuration
  - vehicle tracking setup Plaspy
  - fleet tracker GV501LG configuration
  - GV501LG tracking software configuration
  - QuecLink GV501LG integration
---

# QuecLink - GV501LG Configuration

This page documents the public configuration context for using the QuecLink GV501LG with Plaspy. It focuses on the practical server settings, typical prerequisites, and the sample SMS commands shown in the public device configuration content so you can prepare the tracker to report to Plaspy for live location and telematics ingestion.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol. Exact manufacturer-side steps for configuring the GV501LG can vary by firmware, hardware revision, installation type, and vendor tools; the guidance below reflects public commands and recommended workflow for integration with Plaspy while encouraging verification against the device manufacturer documentation.

## Configuration Overview

The goal of configuration is to make the GV501LG reliably report GNSS and vehicle telemetry to Plaspy so the unit appears in the platform and sends regular updates. Public configuration content for this model shows SMS command based setup as one practical method, including APN and server settings.

- Configure the device to use the shared Plaspy server endpoint and port so reports reach the platform.
- Ensure the SIM and APN are correct so the tracker can establish cellular data and GPRS connections.
- Apply the reporting interval and input/event rules so Plaspy receives timely location and alert data.
- Validate connectivity and confirm the device registers with Plaspy using either the domain or IP server settings.
- Use manufacturer configuration methods such as SMS commands or vendor software to apply settings and reboot the unit.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol once the device is pointed at the shared server endpoint.

## Typical Requirements Before Setup

- A valid cellular SIM with data enabled and SMS if you will use SMS-based configuration.
- APN, APN username, and APN password information from the mobile operator for the installed SIM.
- Physical access to the vehicle OBD-II port for installation and initial power up.
- Access to the official QuecLink configuration method or vendor tool for this model; public commands may be sent by SMS or applied via maker software.
- Knowledge of the device password for command authorization; public sample commands use the default password queclink.
- A test plan to validate connectivity to the Plaspy server after configuration.

## How This Tracker Connects to Plaspy

The GV501LG is configured to report GNSS position and vehicle telemetry to the Plaspy server endpoint and port. Once the server and transport are set, the tracker will push location updates, event notifications, and CAN-derived data to Plaspy for visibility and alerting.

- The device is pointed to the Plaspy server domain d.plaspy.com or the IP 54.85.159.138 and port 8888 for uplink.
- Transport can be configured as UDP or TCP on port 8888 depending on device firmware and installer preference.
- Plaspy automatically detects the device protocol so the server side can correctly interpret incoming messages.
- Regular position and event reports appear in Plaspy according to the configured reporting interval.
- Alerts such as SOS, crash events, and geofence breaches are sent to Plaspy for platform processing and notifications.

## Common Configuration Workflow

1. Access the official QuecLink configuration method or software, or prepare to send SMS configuration commands if supported.
2. Ensure the SIM is installed and the APN, APN username, and APN password are known.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration using the manufacturer tool or by sending the SMS commands.
6. Restart or power cycle the device if the firmware requires a reboot to apply new server settings.
7. Validate that the device reports to Plaspy by checking for incoming data on the platform and verifying the device appears as active.

## Example Configuration Commands

The public model configuration includes SMS commands used to set up the GV501LG. The sample commands below use the device password queclink as shown in the public content. The first command restores factory settings and is optional or recommended only for initial setup when explicitly required.

1. Optional initial restore to factory defaults
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
3. Set the operator APN
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} is the mobile operator APN
- {{apnu}} is the APN username when required
- {{apnp}} is the APN password when required

4. Set the GPRS server to point at Plaspy (domain and IP shown)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command configures the device to use the Plaspy server endpoint d.plaspy.com and the IP 54.85.159.138 with port 8888. Plaspy uses the same port for all devices and detects the protocol automatically.

5. Set the update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Follow the manufacturer guidance for sending SMS commands, including correct message formatting and any delays between messages. Keep placeholders intact and replace them with your operator values.

## Configuration Notes

- SMS based configuration is shown in the public commands above; some installers prefer the official QuecLink tool or provisioning server where available.
- Firmware and hardware revisions can change command syntax and available parameters; always verify commands against the device firmware revision and manufacturer documentation.
- Choose UDP or TCP based on deployment needs and network behavior; both transports are supported for the Plaspy server on port 8888.
- Confirm the APN, APN username, and APN password with the cellular operator before sending configuration commands.
- The public sample uses the default device password queclink for commands; update device authentication settings if a different security posture is required.

## Why Use Plaspy with This Configuration

Using the GV501LG with Plaspy provides a straightforward path to real-time vehicle visibility, CAN bus diagnostics, and event-driven alerts without complex wiring or long installation windows. By pointing the tracker to Plaspy at d.plaspy.com or 54.85.159.138 on port 8888 and selecting the preferred transport, fleets gain timely location, telemetry, and operational insights for routing, maintenance, and safety workflows.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration methods, firmware behavior, and manufacturer recommendations at the official QuecLink site https://www.queclink.com/ as specifications and setup steps can change over time.
