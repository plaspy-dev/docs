---
slug: /globalsat/nw_360hr/configuration
id: nw_360hr-configuration
sidebar_label: Configuration
title: GlobalSat - NW-360HR Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for GlobalSat NW-360HR showing server settings and SMS commands to configure the device for use with Plaspy
keywords:
  - GlobalSat NW-360HR configuration
  - GlobalSat NW-360HR setup
  - GlobalSat NW-360HR Plaspy
  - NW-360HR GPS tracker configuration
  - NW-360HR server configuration
  - NW-360HR SMS setup
  - wearable GPS tracker configuration
  - Plaspy tracker setup
  - Plaspy device configuration
  - wearable tracker Plaspy integration
---

# GlobalSat - NW-360HR Configuration

This page covers the public configuration context for using the GlobalSat NW-360HR wearable tracker with Plaspy. It presents the shared server settings Plaspy requires, explains the common SMS configuration commands that are publicly available for this model, and outlines the practical steps to prepare the device so it can report location and telemetry into Plaspy for monitoring and alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary with firmware, hardware revision, installation type, and vendor tools. The NW-360HR supports SMS based configuration in public documentation and transmits location, BLE and sensor telemetry via cellular IoT networks; combine that manufacturer guidance with the Plaspy server values below to complete setup.

## Configuration Overview

The goal of configuration is to prepare the NW-360HR to communicate with the Plaspy backend so location, SOS, fall advisories, and physiological telemetry appear in your Plaspy account. Configuration typically means setting the device to report to the Plaspy server endpoint on the correct transport and port, confirming network access, and validating reporting once the settings are applied.

- Set the device reporting endpoint to the Plaspy server and port so the tracker can upload data.
- Provide or confirm APN and network parameters if required by the cellular network.
- Use SMS or the manufacturer tool to send the configuration commands available for this model.
- Reboot or restart the device if required so settings take effect and the device begins reporting.
- Validate the device appears in Plaspy and that periodic and event reports are received.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept data from supported models without separate protocol selection

All devices in Plaspy use the same port and the platform will detect the correct protocol automatically once the tracker is pointed to the Plaspy endpoint.

## Typical Requirements Before Setup

- A charged and functioning NW-360HR device with a known IMEI number.
- An active cellular connection for the device via the operator that supports LTE M or NB IoT and any required APN values.
- Access to an SMS capable phone or manufacturer configuration tool since this model supports SMS configuration commands.
- The correct APN parameters for the cellular provider; modelConfiguration uses placeholders [apn], [apnu], and [apnp] for that purpose.
- A Plaspy account and access to the Plaspy platform to validate that the device is reporting after configuration.
- Manufacturer documentation or vendor tool access to confirm checksum calculation or to compute command checksums if required.

## How This Tracker Connects to Plaspy

When configured to report to the Plaspy endpoint, the NW-360HR sends location, sensor telemetry, and event notifications to the shared Plaspy backend so devices become visible and actionable in the platform. The device can use either UDP or TCP transport to reach Plaspy on the same port used by all devices.

- The tracker is configured to report to d.plaspy.com (54.85.159.138) and port 8888.
- Data flows from the device to Plaspy over UDP or TCP depending on the selected transport.
- Periodic reports, motion triggered messages, SOS events, and fall advisories are forwarded to Plaspy for dashboarding and alerting.
- BLE beacon data and physiological telemetry included in reports are ingested by Plaspy alongside GPS positions for contextual monitoring.
- Plaspy automatically detects the correct tracker protocol once messages arrive at the shared server endpoint.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method or software for the NW-360HR; consult the device manual for SMS formats and checksum rules.
2. Prepare the device IMEI and the network APN values; keep placeholders [apn], [apnu], and [apnp] available for the SMS command if required.
3. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration by sending the SMS command or using the manufacturer tool to upload the setting.
6. Restart or reboot the device if required to activate the new settings.
7. Validate that the device reports to Plaspy and appears in your Plaspy account, confirming periodic and event-driven messages are received.

## Example Configuration Commands

The GlobalSat model documentation includes public SMS command templates for configuration and reboot. These commands include placeholders that must be replaced with the device IMEI and network APN values. A checksum value is appended to each command; the manufacturer provided a simple XOR based checksum algorithm in the public example.

Format example used in manufacturer UI or batch tools
TSPRXAB27GHKLMnaicz*U!

Setup command example
Replace {{imei}}, [apn], [apnu], [apnp] and compute the checksum value to replace {{checksum}} before sending. E0 is set to the Plaspy server IP and E1 is the Plaspy port.

GSS setup command template
```
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Reboot command example
Label this reboot command optional as required to apply settings or as part of initial setup. Replace {{imei}} and compute {{checksumreeboot}}.

GSC reboot command template
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum note
- The public example computes the checksum as an XOR of all bytes in the command text before the asterisk, then converts the result to a two digit uppercase hexadecimal string. Manufacturer tools or the device manual may provide a checksum generator; if not, use the documented XOR method to produce {{checksum}} and {{checksumreeboot}}.

Placeholders explanation
- {{imei}} — your device IMEI number.
- [apn] — APN name required by the cellular operator.
- [apnu] — APN username if required by the network.
- [apnp] — APN password if required by the network.
- {{checksum}} and {{checksumreeboot}} — computed checksum values as required by the device command format.

## Configuration Notes

- The NW-360HR supports SMS based configuration as shown in the public command templates; ensure SMS commands are sent from an authorized phone number if the device restricts sources.
- Different firmware or hardware revisions may require slightly different command parameters or checksum behavior; always confirm with the device manual or vendor tool.
- Choose UDP or TCP according to network reliability and operator guidance; both transports are accepted by Plaspy on port 8888.
- Use the Plaspy server settings exactly as listed above when configuring the device: d.plaspy.com or 54.85.159.138 and port 8888.
- Preserve APN placeholders and replace them with your network operator values before sending any SMS configuration command.

## Why Use Plaspy with This Configuration

Using the NW-360HR with Plaspy brings wearable location, SOS, fall advisory, and physiological telemetry into a unified platform for monitoring and response. For care providers, safety teams, and operations managers, this integration simplifies visibility into both position and health context so you can act on alerts and historical data from a single backend.

To learn more about Plaspy and how the platform can ingest device reports for real time tracking and alerting visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions with GlobalSat at https://www.globalsat.com.tw/ before deployment.
