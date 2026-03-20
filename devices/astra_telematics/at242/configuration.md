---
slug: /astra_telematics/at242/configuration
id: at242-configuration
sidebar_label: Configuration
title: Astra Telematics - AT242 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Astra Telematics AT242 showing how to point the device to Plaspy servers with example SMS commands
keywords:
  - Astra Telematics AT242 configuration
  - AT242 setup for Plaspy
  - AT242 server configuration
  - Astra Telematics configuration guide
  - AT242 GPS tracker setup
  - Plaspy device configuration
  - AT242 tracking software configuration
  - GPS platform setup AT242
  - fleet tracking AT242
  - telematics device configuration
---

# Astra Telematics - AT242 Configuration

This page covers the public configuration context for using the Astra Telematics AT242 with Plaspy. It focuses on the practical steps and public settings needed to point the tracker at Plaspy servers and validate that the device is reporting successfully. Use this guide alongside the AT242 user and installation documentation for device-specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The AT242 supports OTA and local configuration methods and can be configured using SMS commands, carrier APN settings, or the vendor configuration tool depending on the installation and firmware.

## Configuration Overview

The goal of configuration is to prepare the AT242 to communicate reliably with Plaspy, validate connectivity, and ensure the device appears in the Plaspy platform for live tracking and telemetry. This typically involves setting APN credentials, pointing the tracker at Plaspy's server endpoint and port, and confirming transport/protocol settings if required by the device.

- Configure the device APN and optional APN credentials so the tracker has cellular data access.
- Point the tracker to Plaspy server domain or IP so position and telemetry are sent to Plaspy.
- Set the device to use port 8888 which Plaspy uses for all devices and services.
- Choose UDP or TCP transport on the device if prompted; Plaspy supports either and automatically detects protocol.
- Validate connectivity and confirm the AT242 reports position and events to the Plaspy server.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the AT242. These values are the shared endpoint and port that Plaspy uses for supported devices:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are supported; select the transport required by your device or network
- Plaspy automatically detects the tracker protocol so devices can use either standard protocols supported by the AT242

## Typical Requirements Before Setup

- A powered AT242 installed or accessible for configuration and testing
- A valid cellular SIM with data enabled and correct APN credentials for the mobile operator
- Access to the manufacturer configuration method supported by the device (SMS commands, vendor tool, or configuration portal)
- Basic information about the network environment, such as whether UDP or TCP is preferred by your carrier or firewall
- A Plaspy account or provisioning instructions so you can confirm the device is visible in the Plaspy platform

## How This Tracker Connects to Plaspy

When configured, the AT242 sends GNSS positions and telemetry over its cellular link to the shared Plaspy server endpoint and port. Plaspy ingests the device data and makes it available for real-time tracking, alerts, and reporting.

- The AT242 reports position and event data to d.plaspy.com or 54.85.159.138 on port 8888
- Device telemetry such as I/O events, accelerometer and tamper signals are transmitted to Plaspy
- Transport may be UDP or TCP depending on device configuration and network constraints
- Plaspy automatically detects the device protocol and processes incoming messages for display and alerts
- Successful configuration results in the device appearing in Plaspy and sending regular updates

## Common Configuration Workflow

1. Access the official Astra Telematics configuration method for the AT242 (SMS, vendor tool, or web/USB configurator) as documented by the manufacturer.
2. Enter the Plaspy server endpoint by using either d.plaspy.com or the IP address 54.85.159.138 in the device settings.
3. Set the server port to 8888. All Plaspy devices use the same port.
4. If the device requires a transport selection, choose UDP or TCP according to your network policy or preference.
5. Configure APN and any required APN username/password so the device can establish a cellular data session.
6. Apply or save the configuration and restart the device if the method or firmware requires a reboot for changes to take effect.
7. Validate that the AT242 reports to Plaspy by checking device connectivity and live positions in your Plaspy account or by monitoring incoming messages on the server side.

## Example Configuration Commands

The AT242 can be configured by sending SMS commands. The following public commands are provided in manufacturer guidance. Preserve the placeholders when you insert your operator values.

- Set the operator APN
```text
$APAD,[apn]
```
Replace [apn] with your carrier APN name.

- (Optional) Set the APN username
```text
$APUN,[apnu]
```
Replace [apnu] with the APN username if your carrier requires one.

- (Optional) Set the APN password
```text
$APPW,[apnp]
```
Replace [apnp] with the APN password if your carrier requires one.

- Set the GPRS server (Plaspy server IP)
```text
$IPAD,54.85.159.138
```

- Set the server port (Plaspy uses this same port for all devices)
```text
$PORT,8888
```

Notes on these commands:
- These SMS commands are executed in the order shown when using SMS for setup. APN username and password commands are optional and only required if your operator requires authentication.
- If your deployment or firmware supports entering d.plaspy.com instead of the IP address, you can use the server domain d.plaspy.com in the vendor tool or configuration portal where domain names are accepted.
- The AT242 may offer additional settings for transport selection. Use your vendor configuration tool or documentation to select UDP or TCP when required.

## Configuration Notes

- Firmware differences may change exact command formats or available settings; verify commands against the AT242 user guide for your firmware version.
- SMS-based configuration is commonly supported for initial setup, but vendor tools or a local USB/web interface may offer a more complete configuration experience.
- Confirm APN credentials with the mobile operator if the device fails to obtain a data connection.
- Choose UDP or TCP based on network requirements; Plaspy supports both and detects the protocol automatically on arrival.
- Always save and apply settings in the official configuration tool and follow any device restart procedure recommended by Astra Telematics.

## Why Use Plaspy with This Configuration

Using the AT242 with Plaspy provides a streamlined way to collect reliable location and telemetry from a rugged GPS tracker designed for harsh environments. Pointing the device at Plaspy's shared server endpoint and port enables real-time visibility, event-driven alerts, and historical reporting that help fleet and asset operators manage operations, security, and maintenance workflows.

To learn more about Plaspy and how it integrates with devices such as the AT242 visit https://www.plaspy.com. For the latest device-specific configuration commands, firmware notes, and installation guidance always verify current details on the manufacturer site https://astratelematics.com/.
