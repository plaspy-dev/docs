---
slug: /sinotrack/al_900c/configuration
id: al_900c-configuration
sidebar_label: Configuration
title: SinoTrack - AL-900C Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure SinoTrack AL-900C for use with Plaspy including SMS commands and server settings
keywords:
  - SinoTrack AL-900C configuration
  - SinoTrack AL-900C setup
  - SinoTrack AL-900C Plaspy
  - AL-900C server configuration
  - AL-900C SMS commands
  - AL-900C GPRS setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - GPS tracker configuration
  - vehicle tracking AL-900C
---

# SinoTrack - AL-900C Configuration

This page covers the public configuration context for using the SinoTrack AL-900C tracker with Plaspy. It gathers the shared server settings Plaspy requires and shows the publicly available SMS commands and verification steps known for this tracker family to help you prepare the device for integration into Plaspy.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol on connection. Manufacturer side setup steps can still vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat the commands here as public guidance and verify any device-specific differences with the manufacturer documentation.

## Configuration Overview

The goal of this configuration process is to prepare the AL-900C so it can reliably send position and event data to Plaspy using the platform's shared endpoint and port. The AL-900C supports SMS based parameter configuration and GPRS server settings, which are commonly used to direct the device to Plaspy.

- Send or apply the server and APN settings so the tracker can establish a GPRS connection to Plaspy.
- Configure reporting intervals so locations arrive in a timely and predictable way in Plaspy.
- Use the tracker verification command to confirm device ID and server settings before final deployment.
- Validate connectivity by checking that the tracker appears and reports correctly in Plaspy after configuration.
- Keep a record of the SMS commands used and the tracker ID returned by the verification command for platform onboarding.

## Plaspy Server Settings

- Server domain d.plaspy.com is the public domain to use when configuring server host on the tracker.
- Server IP 54.85.159.138 can be used as an alternative host entry when an IP is required.
- Port 8888 is the single port Plaspy uses for all supported tracker devices.
- Transport support for UDP or TCP is available; choose the transport required by the device or firmware.
- Plaspy automatically detects the tracker protocol when the device connects to the server and uses the same port for all devices.

## Typical Requirements Before Setup

- A powered and reachable AL-900C unit with access to its SMS configuration interface or vendor configuration tool.
- A working SIM card with GPRS data enabled and the correct APN credentials for the mobile operator.
- Permission to send SMS commands to the device if SMS based configuration is used.
- Knowledge of the device verification command and where to find the device ID to match it in Plaspy.
- Access to the manufacturer's documentation or vendor support for firmware specific details or tool recommendations.

## How This Tracker Connects to Plaspy

The AL-900C is configured to report location and event data to the Plaspy shared server endpoint and port. Once the device has the correct APN and server settings, it opens a GPRS session and transmits data to Plaspy where the platform detects the tracker protocol and ingests messages.

- The tracker sends periodic position reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives the incoming connection over UDP or TCP depending on the device transport setting.
- Plaspy automatically determines the tracker protocol and interprets telemetry data for platform display.
- Reports and alarms sent by the device become visible in Plaspy for monitoring and operational use.
- Using the tracker verification command confirms the device ID and current server configuration before platform onboarding.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or vendor software recommended for the AL-900C.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server/host field.
3. Set the port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP if the device firmware requires explicit transport selection.
5. Configure the APN and any APN credentials the SIM operator requires, then apply or save the configuration.
6. Restart or reboot the tracker if the device requires a reboot to apply network changes.
7. Validate that the device reports to Plaspy by checking the device appears and sends updates to the platform and by using the device verification command.

## Example Configuration Commands

The AL-900C can be configured using SMS commands. The commands below come from the publicly available command set for this tracker family. Send these commands as SMS messages to the tracker phone number in the order shown when order matters.

- Optional initial factory reset (use only if you need to restore defaults):

```
RESET
```

- Set the time zone to UTC 0:

```
8960000E00
```

- Set the APN for the mobile operator (replace placeholders with your operator values):
  - {{apn}} = APN name
  - {{apnu}} = APN username (leave blank if none)
  - {{apnp}} = APN password (leave blank if none)

```
8030000 {{apn}} {{apnu}} {{apnp}}
```

- Set the GPRS server to the Plaspy IP and port (Plaspy also supports the domain d.plaspy.com):

```
8040000 54.85.159.138 8888
```

- Set update interval when the device is on to 60 seconds:

```
8050000 60
```

- Set update interval when the device is off to 60 seconds:

```
8090000 60
```

- Switch the device to GPRS mode:

```
7100000
```

- Check the device settings and read the device ID using the verification command:

```
RCONF
```

Note: Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} as shown and replace them with your operator credentials when sending the APN command. The commands above are the public SMS commands documented for this tracker family and are presented in the order they appear in the public guidance.

## Configuration Notes

- SMS based configuration is commonly used for AL-900C devices; confirm that SMS commands are enabled and accepted by your device firmware.
- Firmware revisions or regional variants may use slightly different command formats or require vendor tools; verify commands if an SMS does not produce the expected response.
- Choose UDP or TCP based on installer preference and device behavior; Plaspy accepts both and will handle protocol detection automatically.
- Plaspy uses the same port 8888 for all supported devices, so set port 8888 on the tracker regardless of which transport you select.
- Use the RCONF verification command to obtain the device ID and verify the current server and APN settings before onboarding to Plaspy.

## Why Use Plaspy with This Configuration

Using the SinoTrack AL-900C with Plaspy provides a straightforward path to bring device telemetry into a centralized platform for fleet visibility, event monitoring, and operational oversight. The public SMS commands and the shared Plaspy server settings make it practical to configure devices in the field or before installation and to validate connectivity quickly.

To learn more about Plaspy and how it handles tracker connections, visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so please verify the latest setup instructions and command references on the official manufacturer site https://www.sinotrackgps.com/.
