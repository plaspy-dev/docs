---
slug: /astra_telematics/at111/configuration
id: at111-configuration
sidebar_label: Configuration
title: Astra Telematics - AT111 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Astra Telematics AT111 tracker with Plaspy server settings and setup steps
keywords:
  - Astra Telematics AT111 configuration
  - AT111 Plaspy setup
  - AT111 server configuration
  - Astra AT111 GPS tracker setup
  - AT111 tracking software configuration
  - AT111 GPS platform setup
  - Plaspy device configuration
  - Plaspy tracker integration
  - vehicle tracking AT111
  - fleet tracking AT111
---

# Astra Telematics - AT111 Configuration

This page covers the public configuration context for using the Astra Telematics AT111 with Plaspy. It collects the practical, public setup information needed to point an AT111 tracker at the Plaspy ingestion endpoint so the device can report location and telemetry to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The AT111 supports typical professional telematics interfaces and can be configured using the vendor methods described below to communicate with Plaspy.

## Configuration Overview

This guide explains the purpose and practical steps for configuring an AT111 so it can communicate with the Plaspy server endpoint for real time tracking and telemetry. Where available, the manufacturer provides SMS based configuration commands that can be used to set APN and server parameters.

- Prepare the AT111 to report GNSS fixes and telemetry to Plaspy by configuring its network APN and server settings.
- Set the device to send GPRS data to Plaspy using the shared server endpoint and the Plaspy port.
- Validate connectivity and that the tracker appears in Plaspy dashboards and live maps.
- Save and apply settings and reboot the tracker as required to start active reporting.
- Use the AT111 external antenna and Micro SIM access to ensure reliable cellular and GNSS reception during testing.

## Plaspy Server Settings

- Server domain d.plaspy.com is the canonical Plaspy server name to use when the device accepts a hostname.
- Server IP 54.85.159.138 can be used when a numeric address is required by the device.
- Port 8888 is the Plaspy ingestion port and is used by all devices supported by Plaspy.
- Transport support for UDP or TCP is available; the AT111 may be configured to use either UDP or TCP on port 8888 depending on the device requirement.
- Plaspy automatically detects the tracker protocol so devices pointed at the shared endpoint will be recognized by the platform.

## Typical Requirements Before Setup

- A functional Micro SIM with a data plan and correct APN information for the mobile operator.
- Power to the tracker and basic installation access to any external antenna connectors specified by the installer.
- Access to Astra Telematics configuration method such as SMS commands or the official configuration software and documentation.
- Ability to send SMS to the device if SMS based configuration is the supported method for your unit.
- The APN, APN username, and APN password values provided by your mobile operator when required.
- Confirmation of firmware version and any vendor specific instructions from Astra Telematics to ensure commands match the installed firmware.

## How This Tracker Connects to Plaspy

When configured, the AT111 sends location and telemetry over the cellular network to the Plaspy shared server endpoint and port. Plaspy ingests GNSS fixes and device telemetry and makes that data available in the Plaspy platform for live tracking, alerting, and reporting.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the numeric address 54.85.159.138 and to port 8888.
- Use either UDP or TCP on port 8888 depending on device configuration options; Plaspy will automatically detect the tracker protocol.
- GNSS position fixes, CANBus frames, digital inputs and analog inputs from the AT111 are forwarded to Plaspy for mapping and analysis.
- Once reporting starts the device becomes visible in Plaspy dashboards for live location, route history and event alerts.
- Regular testing and validation confirms the device is successfully communicating with the Plaspy endpoint.

## Common Configuration Workflow

1. Access the official Astra Telematics configuration method or software or confirm that SMS commands are supported for your AT111 unit.
2. Set the device APN values provided by your mobile operator (APN, optional APN username and password).
3. Configure the GPRS server to point to d.plaspy.com or enter the numeric server address 54.85.159.138.
4. Set the server port to 8888 for Plaspy and select UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device using the manufacturer method you accessed in step one.
6. Restart or power cycle the tracker if required by the device or firmware to activate the new settings.
7. Validate that the device reports to Plaspy by checking for incoming messages in your Plaspy account and confirming visibility in live maps or device lists.

## Example Configuration Commands

The AT111 can be configured using SMS commands. The following public commands are provided by Astra Telematics and preserve placeholders for operator specific values. Send these commands as text messages to the device number in the order shown to set APN and Plaspy server details.

- Set the operator APN
```text
$APAD,{{apn}}
```
(Replace {{apn}} with your mobile operator APN string.)

- Set the username of APN operator (optional)
```text
$APUN,{{apnu}}
```
(Replace {{apnu}} with the APN username if your operator requires one.)

- Set the password of APN operator (optional)
```text
$APPW,{{apnp}}
```
(Replace {{apnp}} with the APN password if your operator requires one.)

- Set the GPRS server to the Plaspy numeric endpoint
```text
$IPAD,54.85.159.138
```

- Set the server port to Plaspy port
```text
$PORT,8888
```

Notes on commands
- The APUN and APPW commands are optional and only needed if your operator requires APN credentials.
- Commands must be sent as SMS to the device using the phone number associated with the device SIM.
- After sending commands, save and reboot the device if the device requires it to apply the new network and server settings.

## Configuration Notes

- Firmware differences and hardware revisions can change the exact SMS command set or the required syntax; always confirm with the device manual for your firmware version.
- This device supports SMS based configuration as shown in the example commands, but installers may also use vendor tools or configuration software if available.
- Choose UDP or TCP according to your installation needs; Plaspy supports both and automatically detects the protocol used.
- All devices in Plaspy use the same port 8888 so the port setting is consistent across device types.
- Verify APN, username and password values with the mobile operator to ensure the device can establish a GPRS session before validating Plaspy connectivity.

## Why Use Plaspy with This Configuration

Using the Astra Telematics AT111 with Plaspy provides reliable real time location and telemetry integration for fleet management, anti theft workflows and equipment monitoring. The AT111's external antenna options, comprehensive I O and connectivity options make it practical for professional installations where robust GNSS reception and vehicle telemetry capture are required.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration methods, firmware details and official commands refer to the manufacturer documentation at https://astratelematics.com/ to confirm current setup instructions and firmware behavior.
