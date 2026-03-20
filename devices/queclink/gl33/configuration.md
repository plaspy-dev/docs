---
slug: /queclink/gl33/configuration
id: gl33-configuration
sidebar_label: Configuration
title: QuecLink - GL33 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for QuecLink GL33 setup with Plaspy server settings and SMS commands for GPRS reporting
keywords:
  - QuecLink GL33 configuration
  - QuecLink GL33 setup
  - QuecLink GL33 server configuration
  - QuecLink GL33 SMS configuration
  - GL33 GPRS setup
  - GL33 GPS tracker configuration
  - Plaspy tracker setup
  - Plaspy server configuration
  - GL33 asset tracking setup
  - QuecLink GPS platform setup
---

# QuecLink - GL33 Configuration

This page documents the public configuration context for using the QuecLink GL33 with Plaspy. It focuses on the practical server settings and the common setup steps you can apply so the GL33 reports to Plaspy backends. Where manufacturer SMS commands are publicly available they are shown so device installers can configure the device to communicate with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The GL33 supports SMS and GPRS configuration methods in public documentation, so this guide shows the Plaspy endpoint details and example SMS commands that are commonly used for initial setup.

## Configuration Overview

This configuration prepares a QuecLink GL33 to send position and event reports to Plaspy so the device appears in the platform and feeds live maps, history, and alerts. The steps are focused on setting the network APN and Plaspy server details, choosing transport, and validating that reports arrive in Plaspy.

- Set the GL33 network APN and credentials so it can access GPRS data.
- Configure the reporting server to the Plaspy endpoint so data is routed to the platform.
- Choose the transport mode UDP or TCP as required by the device firmware.
- Set reporting intervals and event inputs so Plaspy receives location and SOS notifications.
- Validate connectivity by confirming the device sends data to Plaspy and appears in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the same port is used for all devices

## Typical Requirements Before Setup

- A charged GL33 unit with access to its SMS or GPRS configuration interface
- A working SIM card with data enabled and any required APN credentials
- Access to the official QuecLink configuration method or tool for your device firmware
- Knowledge of the device password if SMS commands require authentication; the public example uses the default password queclink
- A test phone capable of sending SMS commands or a GPRS configuration tool to send AT style commands
- Confirmation of firmware version and hardware revision to ensure command compatibility

## How This Tracker Connects to Plaspy

The GL33 is configured to report location and event messages to the shared Plaspy server endpoint and port so Plaspy can ingest and present the device data. Reports sent by the device are normalized by Plaspy and become visible in maps, timelines, and alert workflows.

- The device sends periodic position reports over GPRS to d.plaspy.com on port 8888
- Transport can be configured as UDP or TCP depending on device requirement and installer choice
- Plaspy receives and automatically detects the device protocol and processes incoming messages
- Events such as SOS, motion, and low battery are forwarded to Plaspy as configured so operations teams get timely alerts
- Successful configuration ensures the GL33 appears in Plaspy dashboards and history within minutes of reporting

## Common Configuration Workflow

1. Access the official QuecLink configuration method for your GL33 such as SMS command interface or manufacturer tool.
2. Enter the Plaspy server address either as domain d.plaspy.com or IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which Plaspy uses for all supported trackers.
4. Choose UDP or TCP if the device requires a transport selection for GPRS reporting.
5. Set the APN and credentials so the device can establish a GPRS connection to the internet.
6. Apply or save the configuration and restart the device if required by the device or firmware.
7. Validate that the GL33 reports to Plaspy by checking the device in the Plaspy platform and confirming recent position updates.

## Example Configuration Commands

The GL33 supports SMS based configuration with AT style commands. The commands below are public examples formatted for SMS. The sample commands use the device password queclink as shown in public documentation. Preserve the order where indicated and replace APN placeholders with your operator values.

1. Optional initial factory restore when required for a clean configuration
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the mobile operator APN and credentials
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} is the operator APN
- {{apnu}} is the APN username if required; leave blank if not used
- {{apnp}} is the APN password if required; leave blank if not used

4. Configure the GPRS reporting server to Plaspy using both domain and IP for redundancy
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command sets the reporting server to d.plaspy.com and 54.85.159.138 on port 8888

5. Set the location update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note on usage
- Send each command as an SMS from an authorized phone number if your device firmware requires SMS configuration
- Keep the device password queclink as shown in the example unless it has been changed during provisioning
- Replace APN placeholders with values from your SIM operator before sending commands

## Configuration Notes

- Firmware and hardware revisions can change command syntax and SMS parameter requirements; verify commands against the device manual for your firmware version
- The GL33 supports SMS based configuration as shown in the public example; some installers may prefer manufacturer software tools where available
- Choose UDP or TCP based on installer preference and device behavior; Plaspy accepts both transports on port 8888 and will auto detect the protocol
- Plaspy uses the same port for all supported devices which simplifies configuration and backend routing
- If you perform a factory restore as part of setup, reapply APN, server, and reporting interval settings afterward

## Why Use Plaspy with This Configuration

Configuring a QuecLink GL33 to report to Plaspy gives operations and security teams a straightforward way to combine covert asset tracking data with platform tools for visibility and incident response. With GPRS reporting to d.plaspy.com on port 8888 and Plaspy handling protocol detection, the GL33 can deliver location and event information into a consistent backend for mapping, history, and alerts.

To learn more about Plaspy and supported trackers visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and hardware details verify current information on the manufacturer website https://www.queclink.com/
