---
slug: /concox/vl103m/configuration
id: vl103m-configuration
sidebar_label: Configuration
title: Concox - VL103M Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Concox VL103M to connect to Plaspy with server settings and example SMS commands
keywords:
  - Concox VL103M configuration
  - Concox VL103M setup
  - Concox VL103M Plaspy
  - VL103M server configuration
  - VL103M SMS commands
  - GPS tracker configuration Plaspy
  - motorcycle GPS tracker setup
  - vehicle tracking configuration
  - Plaspy server settings
  - tracker integration guide
---

# Concox - VL103M Configuration

This page covers the public configuration context for using the Concox VL103M tracker with the Plaspy platform. It summarizes the shared server settings required by Plaspy, practical preparation steps, and example manufacturer commands that are published for configuring the device to report into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The example commands below show a common SMS based workflow published for the VL103M and illustrate how to point the device at Plaspy's endpoint.

## Configuration Overview

The goal of configuration is to prepare the VL103M so it reliably communicates location and event data to Plaspy and appears in your Plaspy account for live tracking and alerts. The steps focus on network readiness, server targeting, and simple verification so the tracker can be managed through Plaspy.

- Provide the tracker with valid cellular connectivity and the correct APN for the SIM in use.
- Set the device to report to Plaspy using the shared server endpoint and port.
- Choose the transport method required by the tracker firmware when prompted, UDP or TCP.
- Configure reporting interval and GPRS mode so periodic updates reach Plaspy for live visibility.
- Verify configuration with the device verification command to confirm settings and connectivity.

## Plaspy Server Settings

- Use server domain d.plaspy.com as the primary server name for Plaspy.
- Plaspy server IP is 54.85.159.138 as an alternative endpoint.
- Port to use is 8888 — Plaspy uses the same port for all supported devices.
- The device may be configured to use UDP or TCP on port 8888 depending on the tracker configuration option.
- Plaspy automatically detects the tracker protocol when the device connects to the Plaspy server.

## Typical Requirements Before Setup

- A powered and accessible VL103M device with a working Micro SIM provisioned for data and SMS.
- Knowledge of the mobile operator APN and optional APN username and password for the SIM (placeholders preserved below).
- Ability to send SMS commands to the tracker from the installer or admin phone, or access to the official manufacturer configuration tool if preferred.
- Adequate cellular signal at the installation site so the device can register on the network and open GPRS.
- A Plaspy account and basic familiarity with adding a device in Plaspy once the tracker is reporting.

## How This Tracker Connects to Plaspy

When configured, the VL103M will send periodic position updates and event reports to Plaspy at the shared server endpoint and port. Plaspy ingests those updates, applies protocol detection automatically, and surfaces location, alerts, and status in the platform.

- The tracker reports position and telemetry to the Plaspy server endpoint d.plaspy.com or the IP address 54.85.159.138.
- Messages are sent to Plaspy on port 8888 using the transport selected on the device, UDP or TCP.
- Event-driven reports such as tamper, vibration, or SOS are forwarded to Plaspy for alerting and history.
- Plaspy automatically detects the tracker protocol so device messages are interpreted and mapped into the platform.
- Once messages arrive at Plaspy, you can view real-time location, historical playback, and received events in the platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the VL103M, typically SMS commands or the Concox configuration utility.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the server port to 8888, since Plaspy uses the same port for all supported devices.
4. Choose the transport option UDP or TCP if the device requires an explicit selection.
5. Configure APN and enable GPRS mode so the device can establish a data session with the network.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate the device reports to Plaspy by checking the platform for the device heartbeat or using the device verification command.

## Example Configuration Commands

The VL103M supports SMS based configuration. The following public SMS commands are provided in manufacturer documentation and are shown here in order. Preserve the placeholders and replace them with your operator APN values as needed. Labelled notes explain purpose and optional choices.

- Reset to factory defaults (optional initial step)
```
FACTORY#
```

- Set the time zone to UTC plus or minus values as supported by the device
```
GMT,E,0#
```

- Set the operator APN. Replace {{apn}} with your APN. If your operator requires a username and password, include {{apnu}} and {{apnp}} respectively
```
APN,{{apn}}#
```
or with username and password
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Placeholders: {{apn}} = APN name, {{apnu}} = APN username, {{apnp}} = APN password)

- Set the GPRS server to use the Plaspy domain on port 8888
```
SERVER,1,d.plaspy.com,8888,0#
```
or set the server using the Plaspy server IP on port 8888
```
SERVER,0,54.85.159.138,8888,0#
```
(Use the domain or the IP as needed; the final parameter flags may be device specific per manufacturer docs)

- Set the periodic update interval to every 60 seconds
```
TIMER,60#
```
or an alternate timer format
```
TIMER,60,60#
```

- Enable GPRS mode so the device uses cellular data reporting
```
GPRSON,1#
```

- Verify current GPRS and server parameters
```
GPRSSET#
```

Note: The SERVER command examples above show both the domain and the IP option. The tracker may allow transport selection elsewhere in its settings; choose UDP or TCP on port 8888 as required.

## Configuration Notes

- The VL103M supports SMS based configuration commands as shown above; follow manufacturer format exactly and preserve placeholders.
- Firmware and regional variants can change parameter names or command syntax. Confirm exact command formats for your firmware version in official Concox documentation.
- Choose UDP or TCP based on your tracker firmware options; either transport can be used to connect to Plaspy on port 8888.
- After applying settings, allow a short time for the device to register on the cellular network and for Plaspy to detect inbound messages.
- Use the GPRSSET verification command to confirm the device has the expected APN, server and GPRS mode values.

## Why Use Plaspy with This Configuration

Configuring the Concox VL103M to report to Plaspy provides a practical path to real-time visibility, event monitoring, and centralized fleet management. The VL103M's compact form factor and telemetry capabilities combined with Plaspy's automatic protocol detection make it straightforward to integrate devices into operational workflows for tracking, anti-theft alerts, and remote monitoring.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and installation guidance verify configuration details with the manufacturer at https://www.iconcox.com/ since device behavior and setup methods can change over time.
