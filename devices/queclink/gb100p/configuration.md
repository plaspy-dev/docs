---
slug: /queclink/gb100p/configuration
id: gb100p-configuration
sidebar_label: Configuration
title: QuecLink - GB100P Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GB100P integration with Plaspy including server settings and example SMS commands
keywords:
  - QuecLink GB100P
  - GB100P configuration
  - GB100P Plaspy setup
  - QuecLink tracker configuration
  - GPS tracker configuration guide
  - vehicle tracking setup
  - QuecLink GB100P server settings
  - Plaspy server configuration
  - GB100P SMS configuration
  - UBI telematics setup
---

# QuecLink - GB100P Configuration

This page covers the public configuration context for using the QuecLink GB100P with the Plaspy platform. It describes the shared Plaspy server settings you must point the device to, summarizes the typical setup workflow, and provides example SMS commands that are publicly available for configuring a GB100P for Plaspy ingestion. Use this guide as practical reference material while following official QuecLink documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools; the GB100P can be configured by SMS commands (examples included below) or other QuecLink configuration methods depending on how the device is provisioned.

## Configuration Overview

Configuring a GB100P for Plaspy prepares the device to send location and telemetry to the Plaspy cloud endpoint, confirms connectivity over cellular, and enables the platform to display the device and its events. The example commands below show common public SMS commands used to set APN, server destination, reporting interval, and event inputs.

- Point the device to Plaspy server settings so messages are routed to Plaspy for processing.
- Configure mobile data APN so GPRS reporting works reliably in the device location.
- Set reporting intervals and event inputs so the GB100P reports the required telemetry to Plaspy.
- Validate connectivity and server reachability so the device appears in Plaspy and sends real time updates.
- Optionally restore factory defaults if starting from an unknown configuration before applying Plaspy settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 (device may be configured using UDP or TCP)
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port for server connections

## Typical Requirements Before Setup

- A suitable SIM card with data enabled and correct APN information for the mobile operator
- Access to the GB100P (power, placement, and any installer access required to send SMS commands)
- Knowledge of the device default password queclink if SMS configuration commands require authentication
- Access to QuecLink official configuration tools, SMS syntax, or installer software as recommended by the vendor
- A test plan to verify the device reports to the Plaspy server domain or IP and appears in the Plaspy platform

## How This Tracker Connects to Plaspy

The GB100P is configured to report its GPS and telemetry data to the shared Plaspy server endpoint and port so Plaspy can ingest location, crash and event packets for real time visibility and historical reporting. Depending on the setup the device will use TCP or UDP on the configured port and Plaspy will auto-detect the protocol and parse the incoming messages.

- Device sends compressed GPS and telemetry packets to the Plaspy endpoint d.plaspy.com on port 8888
- Device may use either UDP or TCP transport depending on the device configuration
- Plaspy automatically detects the tracker protocol and processes messages without per-device port changes
- Event reporting such as crash packets or SOS inputs are forwarded to Plaspy for alerting and analysis
- Successful connectivity results in the device appearing and reporting in the Plaspy platform

## Common Configuration Workflow

1. Access the official QuecLink configuration method recommended for your deployment (SMS commands, QuecLink management software, or an installer tool).
2. Ensure the device has a working SIM and set the mobile operator APN using the device configuration method.
3. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the GB100P and restart the device if the method requires a reboot.
6. Validate that the device successfully reports to Plaspy by confirming connectivity in the platform and checking for incoming messages.
7. If connectivity fails, review APN, signal, and SMS command syntax then reapply configuration as needed.

## Example Configuration Commands

The QuecLink GB100P can be configured via SMS using AT style commands. The following public SMS commands are typical examples extracted from QuecLink public content. The default device password used in these examples is queclink. Send each command as a separate SMS to the device phone number. If you are starting from unknown settings, the factory restore step can be performed first and is optional for new devices.

1. Optional initial factory restore (optional initial setup)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the mobile operator APN
Note: replace the placeholders with your operator values. {{apn}} is the APN name, {{apnu}} is the APN username if required, and {{apnp}} is the APN password if required.
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

4. Configure the GPRS server to both domain and IP for Plaspy and set port 8888
This command includes the Plaspy domain and IP as public examples and specifies port 8888 for both domain and IP entries.
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the reporting interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification for input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

If you use a manufacturer software tool instead of SMS, perform the equivalent settings in the tool following QuecLink guidelines. Preserve the command order when applying initial provisioning steps where order is significant.

## Configuration Notes

- Firmware and hardware revisions can change available commands and SMS syntax; verify command compatibility with your device firmware before applying.
- The GB100P supports SMS based configuration in public examples, so ensure SMS service and command formatting are correct for your operator.
- Choose UDP or TCP for transport according to network behavior and installer preference; Plaspy will detect the protocol automatically when the device connects.
- Since Plaspy uses the same port 8888 for all supported devices, use that port when registering device server settings.
- Keep the default password queclink in mind; change it if required by your security policy and then use the updated password for subsequent SMS configuration commands.

## Why Use Plaspy with This Configuration

Using the GB100P with Plaspy gives organizations a straightforward path to collect high-resolution GPS and inertial telemetry, and to process that data for real time tracking, event alerts, and historical analysis. For programs that require crash-event capture, UBI scoring, or reliable buffering in intermittent cellular coverage, pairing the GB100P with Plaspy makes telematics ingestion and monitoring practical and centralized.

Learn more about Plaspy at https://www.plaspy.com and confirm device specific configuration steps, firmware behavior, and the latest manufacturer guidance at the official QuecLink site https://www.queclink.com/ as these details can change over time.
