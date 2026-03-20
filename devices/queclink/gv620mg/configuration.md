---
slug: /queclink/gv620mg/configuration
id: gv620mg-configuration
sidebar_label: Configuration
title: QuecLink - GV620MG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV620MG and Plaspy with server settings and SMS commands
keywords:
  - QuecLink GV620MG configuration
  - QuecLink GV620MG setup
  - GV620MG Plaspy
  - GV620MG server configuration
  - QuecLink tracker configuration
  - GV620MG GPS tracker setup
  - Plaspy device configuration
  - trailer GPS tracker setup
  - QuecLink GV620MG APN setup
  - GV620MG SMS commands
---

# QuecLink - GV620MG Configuration

This page documents the public configuration context for using the QuecLink GV620MG tracker with Plaspy. It collects the Plaspy server settings and practical setup steps that are commonly applied when putting the GV620MG into service for fleet tracking, trailer monitoring, and remote telemetry. Where manufacturer commands are available publicly they are shown here in example form for reference.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol to ingest data. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and the vendor tools you use. The GV620MG supports SMS based commands as shown below and also standard configuration tools provided by QuecLink or installers.

## Configuration Overview

The goal of configuration is to prepare the GV620MG so it reliably reports GNSS position, inputs and sensor telemetry to Plaspy using the shared server endpoint and port. For many installations configuration is a one time process that sets APN, server endpoint, reporting intervals, and input behavior so the device appears in the Plaspy platform and begins normal reporting.

- Configure the device to use the Plaspy server endpoint and port so data is delivered to Plaspy in real time.
- Provide correct APN and cellular credentials so the GV620MG can establish mobile data connectivity.
- Set reporting intervals and input rules so the Plaspy platform receives the expected telemetry and events.
- Validate communications from the device to Plaspy and confirm it shows as an active device in the platform.
- Use the documented SMS commands or official QuecLink tools to apply settings depending on your installer workflow.

## Plaspy Server Settings

- Server domain d.plaspy.com expressed as the network host to send telemetry to
- Server IP 54.85.159.138 as an alternative endpoint for server routing
- Port 8888 which Plaspy uses for device connections
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered GV620MG unit that is accessible for configuration and testing
- A valid cellular SIM card with data and SMS enabled and correct APN credentials
- Access to the official QuecLink configuration method preferred by your installer such as SMS commands or QuecLink software
- Knowledge of the device password if SMS configuration is used; the default shown in public commands is queclink
- A Plaspy account or account administration ready to accept and identify the device once it reports
- Basic tools to observe device replies such as a phone for SMS feedback or a serial/logging tool if using wired configuration

## How This Tracker Connects to Plaspy

When configured for Plaspy the GV620MG opens a data session to the Plaspy server endpoint and sends periodic position and status updates. Plaspy ingests telemetry and makes the information available for live maps, alerts and historical reporting.

- The tracker is configured to report to the shared Plaspy server endpoint and port d.plaspy.com on port 8888
- Telemetry and event messages are sent over either UDP or TCP depending on the chosen transport
- Plaspy automatically detects the tracker protocol and parses incoming messages for location and I O status
- Regular reporting intervals and alarm events provide visibility and allow Plaspy to trigger alerts and store history
- Device status such as battery and cellular connectivity are reported to Plaspy for monitoring

## Common Configuration Workflow

1. Access the official QuecLink configuration method or software recommended for the GV620MG such as SMS commands or the vendor configuration tool.
2. Enter the Plaspy server host d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 in the device server configuration.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Configure APN and any required APN username and password so the device can connect to the mobile network.
6. Apply or save the configuration and restart the device if required by the device or tool.
7. Validate that the device reports to Plaspy and appears as active in the platform by checking recent telemetry or device last seen time.
8. Adjust reporting intervals and input rules as needed based on operational testing.

## Example Configuration Commands

The GV620MG can be configured by sending SMS commands. The public example commands below use the device password queclink which is the default shown in the public guidance. Preserve placeholders such as {{apn}}, {{apnu}} and {{apnp}} and replace them with your operator APN, APN username, and APN password as required.

- Optional initial factory restore command
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN and optional APN credentials
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explanation: replace {{apn}} with your SIM APN. If your APN requires a username or password, replace {{apnu}} and {{apnp}} accordingly. Leave username or password empty if not required.

- Set the GPRS server to Plaspy using the domain and port and include the server IP as provided in public guidance
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
This command configures the device to report to d.plaspy.com on port 8888 and includes the server IP 54.85.159.138 as an alternate route.

- Set the reporting interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes on commands
- Send each command as an SMS message from an authorised phone number or using the official QuecLink method for SMS configuration.
- Keep the command order when performing initial setup if you are restoring factory settings first.
- The default device password in these examples is queclink. If your device has a different password, substitute it in each command.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or available options; always confirm with the device firmware notes.
- Choose UDP or TCP depending on your network and reliability requirements; both are supported for Plaspy on port 8888.
- SMS based configuration is publicly documented for many QuecLink units and is useful when remote or out of network site access is required.
- Ensure APN values are correct and that the SIM supports the required LTE bands and fallback where applicable.
- After configuration, validate reporting by confirming the unit appears in Plaspy and is sending regular updates.

## Why Use Plaspy with This Configuration

Using the GV620MG with Plaspy provides a practical way to maintain visibility of trailers and heavy equipment with a rugged tracker that continues reporting even when external power is unavailable. With the shared Plaspy server settings and automatic protocol detection, installers can apply a consistent server configuration that allows Plaspy to receive GNSS positions, input states, and sensor telemetry for alerts, geofences, and historical reporting.

Learn more about Plaspy and how it ingests device telemetry at https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and official command documentation verify details with the manufacturer at https://www.queclink.com/
