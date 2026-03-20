---
slug: /concox/ll701/configuration
id: ll701-configuration
sidebar_label: Configuration
title: Concox - LL701 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox LL701 showing how to point the tracker to Plaspy for reporting and visibility
keywords:
  - Concox LL701 configuration
  - Concox LL701 setup
  - Concox LL701 Plaspy
  - LL701 server configuration
  - LL701 GPS setup
  - asset tracker configuration
  - GPS tracker Plaspy setup
  - vehicle tracking Concox LL701
  - LL701 SMS configuration
  - LL701 APN server settings
---

# Concox - LL701 Configuration

This page covers the public configuration context for using the Concox LL701 tracker with Plaspy. It explains the practical server settings and the commonly used manufacturer commands so you can point the LL701 to Plaspy for reporting and monitoring. The content below is based on publicly available setup commands and general device characteristics and is intended to help prepare the device for integration with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same port and endpoint are used for LL701 devices in the platform. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use the commands here as a practical reference and confirm details against the official Concox documentation when necessary.

## Configuration Overview

Preparing an LL701 for Plaspy focuses on configuring the device to use GPRS, setting the correct APN, and pointing the tracker to the Plaspy server so it can report location and event alerts. The LL701 supports SMS configuration commands and Bluetooth configuration via a mobile app, and the server connection is established using the shared Plaspy endpoint and port.

- Configure the device APN and GPRS profile so the tracker can establish a data connection.
- Point the LL701 to the Plaspy server endpoint and port so location and alert messages reach the platform.
- Set reporting intervals and enable GPRS so the device sends regular updates to Plaspy.
- Validate communication and confirm the device appears in Plaspy after configuration.
- Preserve device power and battery considerations while testing to avoid unexpected downtime.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the LL701. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A powered LL701 device with enough battery or external power for configuration and testing.
- An active SIM card with a data plan and the correct APN for the mobile operator.
- Ability to send SMS commands to the tracker or access to the Concox mobile app for Bluetooth configuration.
- Knowledge of the operator APN and any APN username or password if required by the mobile network.
- A Plaspy account or access to your Plaspy deployment to confirm the device appears after setup.
- A method to restart or power cycle the device if required to apply new network settings.

## How This Tracker Connects to Plaspy

The LL701 is configured to use GPRS and report to Plaspy using the shared server endpoint and port. Once the correct APN and server settings are applied, the tracker opens a data connection and sends location and event reports to Plaspy where they become visible in the platform.

- The tracker sends periodic position reports to d.plaspy.com on port 8888.
- Event-triggered alerts such as tamper or unpacking alerts are sent to the same Plaspy endpoint.
- Communication may use UDP or TCP depending on your selection; Plaspy will detect the tracker protocol automatically.
- Plaspy receives the device streams on its shared port and maps the incoming data to the device record in the platform.
- Validation in Plaspy confirms successful reporting and visibility for monitoring and operations.

## Common Configuration Workflow

1. Access the official Concox configuration method you prefer, either SMS commands or the Concox Bluetooth mobile app.
2. Enter the Plaspy server endpoint using the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888.
4. Choose UDP or TCP for transport if the device requires an explicit selection.
5. Configure the operator APN (and APN username or password if required) so GPRS can connect.
6. Apply or save the configuration on the LL701 and restart the device if required by the manufacturer.
7. Validate that the device successfully reports to Plaspy and appears in your Plaspy account.

## Example Configuration Commands

The LL701 supports SMS configuration. Below are public SMS commands used to configure the device. Preserve the placeholders when you prepare the actual messages.

- Optional initial factory reset (use only when you need to restore defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]#
```
If your operator requires an APN username and password, include them as placeholders:
```text
APN,[apn],[apnu],[apnp]#
```
(Replace [apn] with the mobile operator APN. Replace [apnu] and [apnp] with APN username and APN password if required.)

- Set the GPRS server to use the Plaspy domain (UDP or TCP choice is made by transport setting)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set reporting interval to every 60 seconds
```text
TIMER,60#
```
Or alternate timer syntax:
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS parameter settings
```text
GPRSSET#
```

Send these SMS commands to the device number associated with the LL701 in the order shown when performing an initial setup. The factory reset command should be used only when you intentionally want to restore defaults.

## Configuration Notes

- Firmware and hardware revisions can change command behavior or available options; always verify with the latest Concox documentation.
- The LL701 supports SMS-based configuration as shown and Bluetooth configuration via the Concox mobile app for faster local setup.
- Use the APN placeholders [apn], [apnu], and [apnp] exactly as needed for your mobile operator; leave username and password blank if not required.
- Choose UDP or TCP according to installer preference; Plaspy will auto-detect the device protocol once the tracker connects to d.plaspy.com on port 8888.
- Plaspy uses the same port for all supported devices which simplifies device onboarding across a mixed fleet.

## Why Use Plaspy with This Configuration

Pointing the Concox LL701 to Plaspy provides a straightforward way to get long-standby asset trackers into an operational monitoring environment. With Plaspy receiving the LL701 reports on the shared server endpoint, fleet managers can consolidate location and alert data for heavy equipment and valuable assets into a single platform for operational oversight and incident response.

To learn more about Plaspy and how it can manage devices like the Concox LL701 visit https://www.plaspy.com. For the most current device-specific setup instructions, firmware notes, and manufacturer details verify information with Concox at https://www.iconcox.com/.
