---
slug: /teltonika/tmt250/configuration
id: tmt250-configuration
sidebar_label: Configuration
title: Teltonika - TMT250 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Teltonika TMT250 to Plaspy with practical server settings and example commands
keywords:
  - Teltonika TMT250 configuration
  - Teltonika TMT250 setup
  - Teltonika TMT250 Plaspy
  - TMT250 server configuration
  - TMT250 GPS setup
  - Teltonika tracker configuration
  - Plaspy tracker setup
  - GPS tracker Teltonika TMT250
  - personal tracker configuration
  - TMT250 SMS configuration
---

# Teltonika - TMT250 Configuration

This page describes the public configuration context for using the Teltonika TMT250 with Plaspy. It collects the practical server settings and example commands used to point a TMT250 tracker to Plaspy for location and event reporting, and explains what you need to check before integration. The content here is based on the device description and publicly available configuration examples.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and the Teltonika tools you use for configuration. This guide focuses on the public settings and a sample parameter command commonly used to configure Teltonika devices for third party servers.

## Configuration Overview

The configuration process prepares the TMT250 so it can communicate reliably with Plaspy and report location and event data. For the TMT250 this typically means supplying network APN details, the Plaspy server endpoint, and saving a transport choice if required by the device. Teltonika devices can often be configured via SMS commands or the Teltonika Configurator tools; the modelConfiguration example below shows a compact parameter batch command that sets APN and server parameters.

- Point the tracker to the Plaspy server domain or IP so it can send telemetry
- Provide correct APN and SIM connectivity parameters for GPRS and SMS
- Confirm transport selection (UDP or TCP) when the device requests it
- Save and apply settings then validate the device appears in Plaspy
- Test event reporting such as alarm or man down to verify end to end visibility

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

## Typical Requirements Before Setup

- A charged and functioning TMT250 with access to its configuration interface
- A valid GSM SIM provisioned with mobile data and SMS if using SMS or GPRS
- Access to Teltonika configuration methods such as SMS commands or the Teltonika Configurator via USB or Bluetooth
- Know the correct APN values for your mobile provider to populate {{apn}}, {{apnu}}, and {{apnp}}
- A Plaspy account or contact to register the device on the platform if required by your organisation
- Confirm device firmware is recent enough to accept the shown parameter format

## How This Tracker Connects to Plaspy

When configured to communicate with Plaspy, the TMT250 reports location, movement and alarm events to the shared Plaspy server endpoint and port. Plaspy listens on the same port for all devices and determines the device protocol automatically, so basic connectivity and correct server settings are the essential steps.

- The tracker uses GPRS to send telemetry to d.plaspy.com or the provided server IP
- The device transmits to port 8888 as the configured remote port
- You may choose UDP or TCP transport on the device if required by firmware
- Emergency button, man down, and movement events are sent to Plaspy for visibility
- Plaspy receives the incoming connection and auto detects the tracker protocol

## Common Configuration Workflow

1. Access the official Teltonika configuration method for your TMT250, such as SMS commands or the Teltonika Configurator software via USB or Bluetooth.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the remote port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection at configuration time.
5. Provide APN and SIM authentication parameters where required and ensure the device has network connectivity.
6. Apply or save the configuration and restart the device if the device or tool requires a reboot to apply settings.
7. Validate that the TMT250 reports to Plaspy and that the device becomes visible in the platform and that events such as an alarm button press are received.

## Example Configuration Commands

The modelConfiguration provides a standard batch parameter command used with Teltonika devices to set APN and server parameters. This command can be sent by SMS or applied using Teltonika configuration tools where supported. Preserve the placeholders and replace them with your operator values.

- Example batch setparam command for TMT250

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command and placeholders:
- {{apn}} is the mobile operator APN name required for data connectivity
- {{apnu}} is the APN username when required by the operator
- {{apnp}} is the APN password when required by the operator
- 2004 sets the server domain to d.plaspy.com so the tracker sends data to Plaspy
- 2005 sets the remote port to 8888 which Plaspy uses for all devices
- 2006 is a device parameter present in the example batch command; consult Teltonika documentation for an exact description of this parameter for your firmware version
- Send this command via SMS to the device number or apply it through Teltonika Configurator depending on your preferred configuration method

## Configuration Notes

- Teltonika firmware versions and configuration parameter IDs may vary; always confirm the correct parameter numbers for your device firmware version.
- Choose UDP or TCP based on your deployment preference and the device firmware options; Plaspy accepts both transports on port 8888.
- Because Plaspy uses the same port for all supported devices and detects protocols automatically, the most common misconfigurations are incorrect APN values or typos in the server domain.
- SMS-based parameter setting is shown in the example and is often useful for remote changes without physical access to the device.
- Keep a copy of the applied configuration and test key events such as the emergency button to confirm end to end reporting.

## Why Use Plaspy with This Configuration

Using the Teltonika TMT250 with Plaspy gives organisations straightforward visibility into personal safety devices and single person trackers. The compact TMT250 combined with Plaspy’s unified server endpoint simplifies deployment because all supported trackers use the same port and Plaspy automatically detects the protocol, reducing configuration overhead.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific configuration details, firmware behaviors, and exact parameter definitions consult the official Teltonika documentation at https://www.teltonika-gps.com/ as manufacturer specifications and setup methods can change over time.
