---
slug: /sinotrack/st_901a/configuration
id: st_901a-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901A Configuration
sidebar_class_name: menu_item_tracker
description: Configure SinoTrack ST-901A for use with Plaspy using public server settings and SMS or GPRS commands
keywords:
  - SinoTrack ST-901A configuration
  - SinoTrack configuration
  - ST-901A setup
  - Plaspy configuration
  - fleet tracking setup
  - GPS tracker configuration
  - ST-901A server configuration
  - Sinotrack setup guide
  - tracker GPRS configuration
  - vehicle tracking platform
---

# SinoTrack - ST-901A Configuration

This page documents the public configuration context for using the SinoTrack ST-901A tracker with Plaspy. It collects the practical, publicly available setup steps and server settings that help prepare an ST-901A to report position and status to the Plaspy platform. The guidance below is based on manufacturer commands that can be sent by text message as well as Plaspy server details that apply to all supported devices.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The ST-901A supports SMS and GPRS reporting, and the manufacturer commands shown below are examples of common public configuration actions you can use to point the device at Plaspy.

## Configuration Overview

The goal of configuring an ST-901A for Plaspy is to ensure the tracker is able to establish a GPRS connection to the Plaspy server, identify itself using its device ID, and transmit periodic position updates or event reports. The public commands below show the common SMS-based configuration flow used with many SinoTrack devices.

- Set the device APN so the tracker can use a mobile data connection for GPRS reporting.
- Point the tracker at the Plaspy server endpoint so data is sent to Plaspy for processing.
- Configure reporting intervals so the tracker sends updates at the desired cadence.
- Switch the tracker to GPRS mode so it uses TCP or UDP to deliver data.
- Verify configuration and obtain the device ID using the RCONF command for Plaspy identification.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the ST-901A. All devices in Plaspy use the same port and the platform automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A charged tracker installed or powered for configuration and testing.
- A SIM card with an active GPRS data plan if you will use GPRS reporting.
- Access to an SMS capable phone or tool able to send the manufacturer SMS configuration commands.
- Knowledge of your mobile operator APN values for the placeholders {{apn}}, {{apnu}}, and {{apnp}}.
- Access to official manufacturer documentation or vendor tools for device-specific guidance.
- A method to receive and view device responses to verification commands such as RCONF.

## How This Tracker Connects to Plaspy

When configured for GPRS reporting, the ST-901A is instructed to send its location and event data to the shared Plaspy server endpoint and port. Plaspy uses the device ID reported by the tracker to associate incoming data with the correct asset in the platform.

- The tracker is configured with Plaspy server details (d.plaspy.com or 54.85.159.138) and port 8888.
- The device can use UDP or TCP transport to send messages to Plaspy.
- Plaspy automatically detects which tracker protocol is used and processes incoming messages.
- The RCONF command returns the device ID that Plaspy uses to map the tracker to an account.
- Once reporting is enabled, the tracker sends periodic updates which Plaspy displays for monitoring and analysis.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands from an authorized phone.
2. Configure the tracker APN using your operator values and verify the APN settings include the correct username and password if required.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address and set port 8888.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Apply or save the configuration and, if applicable, switch the device to GPRS mode to begin reporting.
6. Restart the device if the manufacturer recommends a reboot after configuration.
7. Validate that the device reports to Plaspy by querying the device with RCONF and confirming updates are visible in the platform.

## Example Configuration Commands

The following public commands are the typical SMS commands used with SinoTrack trackers like the ST-901A. These commands are sent as text messages to the device. Preserve the order where noted.

- Optional initial step to restore factory settings:
```
RESET
```

- Set the time zone to UTC 0:
```
8960000E00
```

- Set the APN of the mobile operator. Replace placeholders with your operator values:
```
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explanation: {{apn}} is the access point name, {{apnu}} is the APN username, and {{apnp}} is the APN password. If your APN has no username or password, keep the placeholders empty as required by the device format.

- Set up the GPRS server to Plaspy by IP and port:
```
8040000 54.85.159.138 8888
```
Note: You can alternatively configure the server with the domain d.plaspy.com where the device supports domain settings.

- Set update interval when the device is on:
```
8050000 60
```
(Example sets a 60 second reporting interval while on)

- Set update interval when the device is off:
```
8090000 60
```
(Example sets a 60 second reporting interval while off; adapt per your needs)

- Switch the tracker to GPRS mode:
```
7100000
```

- Verify current device settings and obtain the device ID used by Plaspy:
```
RCONF
```
Explanation: The device response to RCONF contains the device ID. Plaspy uses this ID to associate incoming data with the correct tracker.

## Configuration Notes

- Manufacturer firmware and hardware revisions can change command formats and behavior; always confirm commands against the most recent manufacturer documentation.
- The ST-901A supports both SMS based configuration and GPRS reporting; use SMS commands when the device has no network connection or as the primary configuration method if supported.
- Choosing TCP or UDP affects session handling on the device and server. Plaspy accepts either and will automatically detect the tracker protocol.
- Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when preparing commands and substitute your operator-specific values before sending.
- Resetting to factory defaults is optional and should be used when you need a clean configuration state; it will remove prior custom settings.

## Why Use Plaspy with This Configuration

Configuring the SinoTrack ST-901A to report to Plaspy enables centralized visibility and real time monitoring across a fleet or set of tracked assets. Using the shared Plaspy server settings simplifies deployment because all supported trackers point to the same endpoint and port, and Plaspy detects the tracker protocol automatically to process incoming messages.

Learn more about Plaspy and how it can be used with supported trackers at https://www.plaspy.com. For device specific command references, firmware updates, and the latest manufacturer setup details for the ST-901A, confirm information on the official SinoTrack website https://www.sinotrackgps.com/ since vendor documentation and firmware behavior can change over time.
