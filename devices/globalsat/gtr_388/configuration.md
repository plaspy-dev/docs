---
slug: /globalsat/gtr_388/configuration
id: gtr_388-configuration
sidebar_label: Configuration
title: GlobalSat - GTR-388 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the GlobalSat GTR-388 for use with Plaspy including SMS setup commands and required server settings
keywords:
  - GlobalSat GTR-388 configuration
  - GTR-388 setup
  - GTR-388 Plaspy
  - GPS tracker configuration
  - vehicle tracker setup
  - GTR-388 server configuration
  - Plaspy server settings
  - GTR-388 SMS configuration
  - GlobalSat tracker setup
  - eBike GPS tracker configuration
---

# GlobalSat - GTR-388 Configuration

This page covers the public configuration context for using the GlobalSat GTR-388 tracker with the Plaspy fleet platform. It explains the practical, manufacturer-visible steps and commands commonly used to point a GTR-388 device at Plaspy so the device can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps and menu names can vary depending on firmware revision, hardware revision, installation type, and vendor tools. Where available this page includes the public SMS commands and checksum guidance extracted from manufacturer style configuration examples to help with setup.

## Configuration Overview

The goal of configuration is to prepare the GTR-388 to communicate reliably with Plaspy and to confirm that the tracker appears in the platform. Configuration typically involves setting the Plaspy server endpoint and port, choosing a transport, and validating the device reports after a restart.

- Set the device server target to the Plaspy server so telemetry is sent to the correct endpoint.
- Configure the device to use port 8888 which is the shared port Plaspy uses for all devices.
- Choose UDP or TCP transport on the device if required by the device interface.
- Apply or send configuration via the manufacturer supported method, commonly SMS or vendor software.
- Restart or reboot the tracker when required to apply settings and then validate in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy settings you must point the GTR-388 at so the device can deliver data to the Plaspy platform.

## Typical Requirements Before Setup

- A powered GTR-388 with a working SIM that supports the chosen configuration method such as SMS or data, depending on your deployment.
- Access to the device IMEI which is required by many SMS or remote commands.
- A method to send SMS commands to the device or access to the official GlobalSat configuration tool where available.
- Knowledge of your APN settings if the device needs cellular data parameters for GPRS or LTE connectivity.
- Access to the Plaspy platform to validate the device once configuration is applied.

## How This Tracker Connects to Plaspy

The GTR-388 can be configured to send position and event data to Plaspy by targeting the shared Plaspy server endpoint and port. Once the server address and port are set and the tracker is online, Plaspy will detect the protocol and begin processing incoming data.

- The tracker sends periodic position reports and event messages to the configured Plaspy endpoint.
- Data is delivered to Plaspy on port 8888 using either UDP or TCP as configured on the device.
- Plaspy performs automatic protocol detection so the server can accept supported tracker formats.
- Successful configuration results in the device becoming visible in the Plaspy fleet view and reporting telemetry.
- Rebooting or saving device settings typically triggers the device to open the configured connection to Plaspy.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method or vendor software or prepare to send SMS commands per GlobalSat instructions.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server field where the device accepts server endpoints.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Apply or save the configuration according to the device method, or send the provided SMS configuration command if using SMS.
6. Restart or reboot the device if required to apply new settings.
7. Validate that the device reports to Plaspy by checking the device list and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The following commands are public-style SMS commands extracted from a common GTR-388 setup example. These commands are sent as SMS messages to the tracker. Preserve placeholders and compute the checksum exactly as required by the device.

Note: The example uses the Plaspy server IP 54.85.159.138 and port 8888. If your device or firmware supports hostnames you can use d.plaspy.com in the device UI where appropriate. The SMS commands below show the manufacturer style that includes placeholders and a checksum.

- Setup command to configure APN values and the Plaspy server

```text
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

- Reboot command to restart the device and apply settings (optional but commonly used)

```text
GSC,[imei],3,0,LH*[checksum]!
```

- Example format string referenced by the manufacturer example

```text
TSPRXAB27GHKLMnaicz*U!
```

Placeholders explanation:
- [imei] — Replace with the device IMEI number.
- [apn] — Replace with your cellular data APN name if the device requires data connectivity.
- [apnu] — Replace with APN username where applicable, or leave empty if not used.
- [apnp] — Replace with APN password where applicable, or leave empty if not used.
- [checksum] — Replace with the checksum computed for the command portion before the asterisk. The manufacturer example computes an XOR checksum over the characters of the command before the '*' then converts that value to two uppercase hexadecimal digits.

Checksum generation note:
- The example JavaScript in the manufacturer content computes checksum by XORing the character codes of the command up to but not including the '*' then converting to a two character uppercase hex value. Use the vendor tool or a small script to obtain the correct checksum before sending the SMS.

## Configuration Notes

- Firmware and regional hardware revisions may change command syntax or supported features; always verify against the latest GlobalSat documentation.
- The GTR-388 supports SMS configuration as shown in the public example. If you have access to vendor software, that may automate checksum calculation and server entry.
- When choosing TCP versus UDP consider your network environment and mobile operator behavior; both transports are supported and Plaspy will accept either on port 8888.
- Plaspy uses the same port 8888 for all supported devices and will automatically detect the tracker protocol when the device begins reporting.
- If the tracker supports specifying a hostname in the device UI you can use d.plaspy.com where applicable; the public SMS example uses the explicit Plaspy server IP 54.85.159.138.

## Why Use Plaspy with This Configuration

Configuring the GlobalSat GTR-388 to report to Plaspy gives organizations consistent visibility into vehicle and eBike fleets using a shared server endpoint. Using the public settings above simplifies deployment because Plaspy uses a single port and automatic protocol detection, reducing per-device configuration complexity and making it easier to scale monitoring across many trackers.

To learn more about Plaspy visit https://www.plaspy.com. For device specific firmware behavior, command syntax, and the latest setup instructions verify details on the GlobalSat website https://www.globalsat.com.tw/ because manufacturer specifications and setup methods can change over time.
