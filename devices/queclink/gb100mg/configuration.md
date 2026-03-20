---
slug: /queclink/gb100mg/configuration
id: gb100mg-configuration
sidebar_label: Configuration
title: QuecLink - GB100MG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the QuecLink GB100MG showing Plaspy server settings and sample SMS commands for device setup
keywords:
  - QuecLink GB100MG configuration
  - QuecLink GB100MG setup
  - GB100MG server configuration
  - GB100MG Plaspy integration
  - GB100MG SMS commands
  - GB100MG GPS tracker setup
  - GB100MG telemetry configuration
  - GB100MG TCP UDP settings
  - fleet telematics GB100MG
  - usage based insurance GB100MG
---

# QuecLink - GB100MG Configuration

This page provides public configuration context for using the QuecLink GB100MG tracker with Plaspy. It summarizes the practical server settings, common prerequisites, and SMS configuration commands that are publicly used to point the device to Plaspy for location and telemetry reporting. Use this guidance together with official QuecLink documentation and your vendor tools when performing an installation.

Plaspy receives data from supported trackers using shared server settings and automatic protocol detection across devices. Exact manufacturer-side setup steps for the GB100MG can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The GB100MG supports SMS configuration in the field, and the sample SMS commands below use the device default password queclink as shown in public QuecLink configuration examples.

## Configuration Overview

This configuration process prepares a GB100MG to communicate with the Plaspy cloud so location, crash telemetry, and event data are delivered reliably. The goal is to configure the device network parameters, reporting interval, and server endpoint so the tracker appears and reports correctly in Plaspy.

- Point the tracker to the Plaspy server endpoint and port so data flows to the Plaspy platform.
- Confirm transport selection (UDP or TCP) and ensure the device uses the shared Plaspy port used by all devices.
- Apply basic device settings such as time zone, APN, and reporting interval to match your deployment needs.
- Validate connectivity from the device to Plaspy and confirm messages are visible in the Plaspy platform.
- Use SMS or the manufacturer configuration tool as supported by the device to make changes in the field.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — Plaspy uses the same port for all supported devices  
- Transport support UDP or TCP — the GB100MG may be configured to use either transport on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A valid, active cellular SIM configured for data and SMS as required by your operator and deployment.
- Access to the device so you can send SMS commands or use QuecLink configuration tools used by your installer.
- The device must be powered and in a state ready to accept configuration commands.
- The default device password may be required to send SMS configuration commands; the publicly shown default in sample commands is queclink.
- APN and operator credentials for the SIM if the tracker will use packet data for reporting.
- Confirmation of firmware revision and manufacturer documentation to ensure commands are supported by that firmware.

## How This Tracker Connects to Plaspy

The GB100MG reports position, event, and telemetry data to the Plaspy endpoint using cellular connectivity. When configured with the Plaspy server and port, device messages are routed to Plaspy and parsed with automatic protocol detection so data appears in platform dashboards and rules.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com or the equivalent IP 54.85.159.138 on port 8888.
- Transport is selected as UDP or TCP depending on installer preference and network conditions; Plaspy accepts both on port 8888.
- Plaspy automatically detects the tracker protocol and decodes the incoming messages for display and rules processing.
- The tracker sends scheduled reports and event messages so Plaspy can show real time location and event alerts.
- SMS can be used to configure the device when packet data is not available, using the sample SMS commands below.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GB100MG, such as SMS commands or the vendor configuration tool recommended by the installer.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server settings.  
3. Set the device port to 8888 (all devices in Plaspy use the same port).  
4. Choose UDP or TCP if the device requires transport selection for server communications.  
5. Configure APN and other operator settings so the device can establish packet data, or confirm SMS capability for remote configuration.  
6. Apply or save the configuration and restart the device if required by the manufacturer.  
7. Validate that the device reports to Plaspy and that messages are visible in the platform; confirm correct time zone, reporting interval, and event notifications.

## Example Configuration Commands

The GB100MG can be configured by SMS using public AT style commands. The sample commands below follow the public example format. These commands use the device password queclink as the default password in the examples. Preserve placeholders when sending commands.

- Optional initial step to restore factory defaults (use only when needed at initial setup):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN (replace placeholders with your operator values):
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Note: [apn] is the access point name, [apnu] is the APN username if required, and [apnp] is the APN password if required. Keep placeholders intact and replace them with your operator credentials.

- Configure the GPRS server and Plaspy endpoints. This example points the device to Plaspy by domain and IP on port 8888:
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
This command includes both the domain and IP for redundancy and uses port 8888, the shared port Plaspy uses for all devices.

- Set reporting interval to 60 seconds:
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2:
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send each SMS command to the device from an authorized phone number or via the configured management channel. Confirm successful application by checking device response messages and Plaspy platform visibility.

## Configuration Notes

- SMS based configuration is supported and commonly used for field adjustments; use the device default password queclink unless your device has a different configured password.
- Firmware versions and hardware revisions can change available commands and parameter formats; always verify command syntax against the device firmware documentation.
- Choose UDP or TCP based on network reliability and delivery requirements; both transports are accepted by Plaspy on port 8888.
- Because Plaspy uses the same port for all devices and performs automatic protocol detection, the important items are correct server endpoint, port, and transport selection where required.
- Keep a copy of the original configuration or log successful SMS responses so you can revert or audit changes if needed.

## Why Use Plaspy with This Configuration

Using the QuecLink GB100MG with Plaspy provides a practical path to capture real time location, event alerts, and high-resolution telemetry for fleet operations and insurance telematics. When the device is pointed to Plaspy using the shared server settings, fleets and insurers can leverage live dashboards, alerts, and rules to monitor vehicles, detect incidents, and analyze driver behavior.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. Device specific configuration commands, firmware behavior, and manufacturer recommendations can change over time, so verify the latest setup details and command syntax with QuecLink documentation at https://www.queclink.com/.
