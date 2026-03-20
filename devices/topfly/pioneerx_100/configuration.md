---
slug: /topfly/pioneerx_100/configuration
id: pioneerx_100-configuration
sidebar_label: Configuration
title: TopFly - PioneerX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly PioneerX 100 and how to point the device to Plaspy server settings
keywords:
  - TopFly PioneerX 100 configuration
  - TopFly PioneerX 100 setup
  - PioneerX 100 Plaspy setup
  - PioneerX 100 server configuration
  - TopFly GPS tracker configuration
  - Plaspy device configuration
  - vehicle tracking setup
  - fleet management tracker
  - PioneerX 100 SMS commands
  - GPS tracker server settings
---

# TopFly - PioneerX 100 Configuration

This page documents the public configuration context for using the TopFly PioneerX 100 tracker with Plaspy. It describes the shared Plaspy server settings you will point the device to and the common practical steps used to prepare the tracker for reporting into Plaspy dashboards. Use this guide alongside official TopFly documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when messages arrive. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The PioneerX 100 offers multiple configuration channels including SMS commands and vendor software; the example commands below show a common SMS based setup that many installers use.

## Configuration Overview

Configuring the PioneerX 100 for Plaspy prepares the tracker to send position and event data to a central Plaspy endpoint where it becomes visible on maps, in alerts, and in reporting tools. The practical goal is to set network parameters, server destination, reporting interval, and any required APN credentials so the tracker reliably uploads telemetry.

- Set the device time zone and network APN so cellular data works with the installed SIM.
- Point the tracker to the Plaspy server endpoint so telemetry is routed to the platform.
- Configure the reporting interval to control update frequency and battery or data usage.
- Validate connectivity and confirm the device registers with Plaspy and uploads cached points.
- Preserve default password details and apply secure credentials where applicable to avoid accidental lockout.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device preference  
- Plaspy automatically detects the tracker protocol when messages arrive

Note that Plaspy uses the same port 8888 for all supported devices, and the platform will auto detect the device protocol so individual trackers do not require unique port assignments.

## Typical Requirements Before Setup

- A powered and installed PioneerX 100 unit with a charged backup battery if available.  
- An active SIM card with data enabled and correct APN settings for the cellular operator.  
- Ability to send SMS commands from an authorized phone if using SMS based configuration.  
- Access to the manufacturer configuration method or official vendor software for the PioneerX 100.  
- Knowledge of the device configuration password if different from the factory default.  
- A Plaspy account and device registration information to confirm the tracker appears in your Plaspy workspace.

## How This Tracker Connects to Plaspy

The PioneerX 100 is configured to report GNSS positions and event data to Plaspy by sending telemetry to the shared Plaspy server endpoint and port. Once the device is pointed to the server and has network connectivity, messages are ingested by Plaspy and rendered in the platform for live monitoring and historical playback.

- Tracker sends location and event messages to d.plaspy.com or the Plaspy server IP at 54.85.159.138 on port 8888.  
- Messages can be transported over UDP or TCP based on the tracker configuration.  
- Plaspy automatically detects the protocol and parses incoming telemetry for device visibility.  
- Cached offline positions are uploaded to Plaspy when cellular connectivity is restored.  
- Event reporting such as ignition, SOS, and digital I O states are transmitted to Plaspy for alerts and workflows.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the PioneerX 100 such as the vendor app, USB Type C configuration tool, or SMS command interface.  
2. Enter the Plaspy server destination as either d.plaspy.com or 54.85.159.138 depending on the configuration interface you use.  
3. Set the server port to 8888 (Plaspy uses the same port for all devices).  
4. Choose the transport protocol UDP or TCP if your device requires an explicit selection.  
5. Apply or save the configuration on the device or send the required SMS commands to update settings.  
6. Restart or power cycle the device if the manufacturer recommends a reboot to apply changes.  
7. Validate that the tracker reports to Plaspy by checking device status in your Plaspy account and confirming live updates or recent position uploads.

If you prefer SMS based setup, follow the manufacturer SMS syntax and the example commands below in the same order when order matters.

## Example Configuration Commands

The PioneerX 100 can be configured by SMS using the default device password 0000 in these example commands. Send each line as an individual SMS from an authorized phone number. Preserve placeholders where provided.

- Set the time zone to UTC 0
```text
GMT,0000,0#
```

- Set the operator APN
```text
APN,0000,[apn],[apnu],[apnp]#
```
Explanation: replace [apn] with your operator APN name, [apnu] with APN username if required, and [apnp] with APN password if required. Leave username or password empty if not used.

- Set the GPRS server using the Plaspy server IP and port
```text
IP,0000,54.85.159.138 8888#
```
Note: If the device supports domain names you may alternatively point the server to d.plaspy.com via the manufacturer tool. Use the method supported by your firmware.

- Set the reporting interval to 60 seconds
```text
TIMER,0000,60:60:0:0#
```

Send these commands in the order shown for a typical initial configuration. Adjust values such as time zone and timer to match your operational requirements.

## Configuration Notes

- Firmware and regional firmware variants can change available commands or syntax; always confirm syntax with the latest TopFly documentation.  
- SMS based configuration is common for remote installs; where possible use the vendor configuration tool or USB port for batch configuration and FOTA updates.  
- Choose UDP or TCP based on network reliability and your platform preferences; Plaspy accepts both and auto detects protocol.  
- Ensure APN placeholders [apn], [apnu], and [apnp] are filled with correct operator credentials or left empty where not required.  
- Keep the factory default password noted in manufacturer guidance and change it if the device supports a secure alternative.

## Why Use Plaspy with This Configuration

Using the PioneerX 100 with Plaspy gives organizations practical, real time visibility into vehicle and asset movements while preserving rich historical trails for analysis. The device’s configurable reporting intervals, offline caching, and I O event reporting map naturally to Plaspy features like live mapping, alerts, and telemetry dashboards to support fleet operations, anti theft workflows, and condition based monitoring.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration, firmware behavior, and manufacturer instructions at https://www.topflytech.com/ to ensure your deployment uses the most current methods and supported commands.
