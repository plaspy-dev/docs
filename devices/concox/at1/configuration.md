---
slug: /concox/at1/configuration
id: at1-configuration
sidebar_label: Configuration
title: Concox - AT1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox AT1 GPS tracker and Plaspy server settings for easy integration and reliable reporting
keywords:
  - Concox AT1 configuration
  - Concox AT1 setup
  - Concox AT1 server configuration
  - Plaspy tracker configuration
  - AT1 GPS tracker setup
  - asset tracker configuration
  - fleet tracking setup
  - Concox AT1 Plaspy
  - GPS tracker integration
  - tracker SMS commands
---

# Concox - AT1 Configuration

This page documents the public configuration context for using the Concox AT1 tracker with Plaspy. It focuses on the practical, public settings and workflow that prepare the device to deliver location and event data to the Plaspy cloud telematics platform. Where applicable, example SMS configuration commands from the manufacturer are reproduced for clarity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The AT1 supports SMS-based configuration and standard GPRS reporting, so this guide combines platform requirements with the device's publicly shared command sequence to help you integrate the AT1 into Plaspy workflows.

## Configuration Overview

The goal of AT1 configuration for Plaspy is to prepare the tracker to connect to Plaspy's shared server endpoint, verify connectivity, and ensure the device reports regularly so it appears in your Plaspy dashboards. The AT1's SMS commands can set timezone, APN, GPRS server, reporting interval, and enable GPRS mode. Use these public settings and commands as the basis for integration, and confirm operation on Plaspy after applying configuration.

- Configure the device to use the Plaspy server endpoint so telemetry and location reach the platform.
- Set the correct APN and enable GPRS so the AT1 can transmit over cellular data.
- Choose reporting intervals that balance timely tracking and battery life.
- Validate commands and parameters via the AT1 verification command to confirm settings.
- Ensure the device is powered, has an active SIM card, and is reachable by SMS during configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either transport
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A charged and powered AT1 device with a functioning SIM card installed
- Access to an SMS capable phone or manufacturer configuration tool for sending commands
- The correct mobile operator APN, username, and password if required by the SIM data plan
- A safe test location with cellular coverage so the device can register to the network
- Access to the manufacturer's documentation or vendor support for device-specific behavior
- Ability to monitor the Plaspy platform to confirm the device appears and reports correctly

## How This Tracker Connects to Plaspy

The AT1 reports location, events, and telemetry to the Plaspy shared server endpoint and port configured on the device. When configured with Plaspy server settings and a valid APN, the tracker uses cellular data to forward periodic updates and event-driven messages so the device becomes visible in Plaspy for real-time monitoring and historical analysis.

- The tracker sends periodic GPS and LBS position updates to d.plaspy.com or 54.85.159.138 on port 8888
- Event notifications such as tamper, movement, and alarms are forwarded to Plaspy for immediate processing
- When coverage is limited the AT1 buffers local data and forwards stored telemetry to Plaspy when connectivity returns
- Transport can be configured as UDP or TCP on port 8888 depending on device option; Plaspy will detect the protocol automatically
- Successful configuration results in the device appearing in Plaspy dashboards and producing live telemetry streams

## Common Configuration Workflow

1. Access the official Concox configuration method for the AT1, typically SMS commands or vendor tools, following manufacturer documentation.
2. Ensure the device has a charged battery and an active SIM with the correct APN for data.
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the device server settings.
4. Set the port to 8888 and choose the transport mode UDP or TCP if the device requires a transport selection.
5. Configure timezone, reporting intervals, and enable GPRS mode as required by your deployment profile.
6. Apply or save the configuration and restart the device if the device or vendor guide requires a reboot.
7. Validate that the tracker reports to Plaspy by checking the platform for device activity and by using the device verification command.

## Example Configuration Commands

The AT1 supports SMS-based configuration. The following commands are presented in the order suggested by the manufacturer and are intended to be sent as SMS messages to the device. Preserve placeholders such as [apn], [apnu], and [apnp] when your APN requires username or password values. Label the factory reset as optional and use it only when preparing a device for initial setup or when troubleshooting.

- Optional initial factory reset
```text
FACTORY#
```

- Set the time zone to UTC+0 (example)
```text
GMT,E,0#
```

- Set the mobile operator APN (replace placeholders with your operator values)
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Explanation: [apn] is the operator APN. If your APN requires a username and password, include [apnu] and [apnp] in the command in the shown order.

- Set the GPRS server to Plaspy by domain (UDP or TCP on port 8888)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to Plaspy by IP address
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to 60 seconds (two valid forms)
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Check the current GPRS parameter settings
```text
GPRSSET#
```

Note: Send commands as plain SMS messages to the device phone number. The exact syntax and supported variants may vary by firmware version; confirm the command responses from the device and consult Concox documentation if a command is rejected.

## Configuration Notes

- The device accepts SMS-based configuration but vendor tools or PC software may also be available; use the official method recommended by Concox for your firmware.
- Firmware revisions can change supported command syntax and behavior; if a command fails, check for firmware-specific instructions from Concox.
- Choose UDP or TCP based on your deployment preference and device capabilities; Plaspy supports both transports and automatically detects the protocol.
- Plaspy uses the same port 8888 for all supported devices; configure this port precisely when setting the server endpoint.
- Keep APN placeholders intact during planning and replace them with operator-specific values when sending the APN command.

## Why Use Plaspy with This Configuration

Using the Concox AT1 with Plaspy provides a straightforward way to add rugged asset tracking and event monitoring into a cloud telematics workflow. The AT1's long autonomy and buffering capabilities combined with Plaspy's unified server endpoint make it practical to deploy redeployable assets and monitor them centrally without complex per-device server configuration.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and manufacturer details please verify current information on the Concox website https://www.iconcox.com/ as manufacturer specifications and setup methods may change over time.
