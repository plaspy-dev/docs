---
slug: /concox/vl103d/configuration
id: vl103d-configuration
sidebar_label: Configuration
title: Concox - VL103D Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Concox VL103D GPS tracker for use with Plaspy including server settings and example SMS commands
keywords:
  - Concox VL103D configuration
  - Concox VL103D setup
  - VL103D Plaspy configuration
  - VL103D GPS tracker configuration
  - Concox GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracker VL103D setup
  - VL103D server configuration
  - VL103D SMS configuration
  - Concox VL103D integration
---

# Concox - VL103D Configuration

This page covers the public configuration context for using the Concox VL103D tracker with Plaspy. It explains the shared Plaspy server settings that the VL103D can be pointed to, the typical prerequisites before setup, and the practical SMS commands published for device configuration. Use this guidance to prepare the unit for connectivity and visibility in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, or the vendor configuration tool you use. The VL103D supports common SMS based configuration commands that make it straightforward to set the APN, server endpoint, port, and reporting timers as shown below.

## Configuration Overview

The goal of configuration is to prepare the VL103D to communicate reliably with Plaspy and to validate that the device appears in the platform. For VL103D devices this typically means setting APN and pointing the tracker to the Plaspy server using the shared port, then validating reporting and telemetry on the platform.

- Set operator APN and optional APN username and password so the device can open GPRS over the cellular network.
- Configure the GPRS server entry to point to Plaspy using either the domain or the IP and the shared port.
- Choose UDP or TCP transport if prompted by the device and save the setting so reports are delivered to Plaspy.
- Set an appropriate reporting timer so position updates meet your operational needs and battery expectations.
- Enable GPRS mode and confirm settings using the device verification command to ensure the tracker registers and sends data to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and that the VL103D may be configured using UDP or TCP on port 8888.

## Typical Requirements Before Setup

- A powered and accessible VL103D unit installed or connected to a test bench power source.
- An active SIM card with a data plan and correct APN settings for the local mobile operator.
- Access to the official Concox configuration method such as SMS commands or the vendor configuration tool.
- A mobile phone capable of sending plain SMS to the device for SMS based configuration when required.
- Basic information to hand such as the APN, optional APN username and password, and knowledge of whether you will use the Plaspy domain or IP.
- The device should have adequate cellular signal where you are configuring and testing connectivity.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the VL103D opens a GPRS data session and sends GNSS position and telemetry to Plaspy using the shared Plaspy server endpoint and port. Plaspy ingests those messages and maps them to the device record using its automatic protocol detection.

- The tracker reports GNSS fixes and telemetry to the Plaspy server at d.plaspy.com or 54.85.159.138 using port 8888.
- Reports may be sent over UDP or TCP depending on the transport selected during configuration.
- Plaspy automatically detects the tracker protocol so standard server and port settings are sufficient for most setups.
- Once reporting is active, Plaspy provides live maps, alerting, and historical routes based on the incoming data.
- Verifying that the tracker appears in Plaspy confirms correct APN, server, port, and transport configuration.

## Common Configuration Workflow

1. Access the official Concox configuration method or software for the VL103D, for example SMS commands or a vendor tool.
2. Set the device APN using the operator values for your SIM so the tracker can establish a GPRS data session.
3. Enter the Plaspy server domain d.plaspy.com or the IP 54.85.159.138 and set port 8888.
4. If the device requires a transport selection choose UDP or TCP according to your preference or installer guidance.
5. Set a reporting timer appropriate for your use case and enable GPRS mode.
6. Apply or save the configuration and restart the device if the manufacturer instructions recommend a reboot.
7. Validate that the device reports to Plaspy and appears in the platform using the device verification command or Plaspy console.

## Example Configuration Commands

The VL103D supports SMS based configuration. The following public commands are provided in manufacturer documentation and can be sent as plain SMS messages to the device. Maintain the order where indicated and note that the factory reset command is optional for initial setup only when you want to clear existing settings.

1. Optional factory reset to clear prior settings
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
- Replace [apn] with your network APN
- If needed include [apnu] and [apnp] for APN username and password
```
APN,[apn],[apnu],[apnp]#
```
Note: If your APN requires no username or password you can send just `APN,[apn]#`.

4. Set the GPRS server using the Plaspy domain and port
```
SERVER,1,d.plaspy.com,8888,0#
```

5. Alternatively set the GPRS server using the Plaspy IP and port
```
SERVER,0,54.85.159.138,8888,0#
```

6. Set the update interval every 60 seconds
```
TIMER,60#
```
Or the alternate timer format
```
TIMER,60,60#
```

7. Enable GPRS mode
```
GPRSON,1#
```

8. Check configured GPRS parameters
```
GPRSSET#
```

Preserve placeholders exactly as shown. [apn] is the operator access point name. [apnu] and [apnp] are optional APN username and password values some networks require.

## Configuration Notes

- Firmware and hardware revisions can change available command syntax and behavior. Always confirm commands against the device manual for your unit.
- SMS based configuration is supported by the VL103D as shown above but vendor tools or OTA methods may also be available for larger deployments.
- Choose UDP or TCP transport according to your installation needs and network behavior. Plaspy accepts both and will detect the protocol automatically.
- Use the domain d.plaspy.com when possible to allow DNS resolution and easier server migration; the IP 54.85.159.138 is provided as an alternative.
- Plaspy uses port 8888 for all devices so ensure that is entered exactly and allowed by any intermediate firewalls.

## Why Use Plaspy with This Configuration

Using the Concox VL103D with Plaspy gives organizations continuous location visibility, event alerting, and basic vehicle telemetry in a single platform. The VL103D’s LTE connectivity with GSM fallback, GNSS performance, and vehicle I O make it a practical device for recovery, driver behaviour monitoring, and light fleet tracking when pointed at the Plaspy server.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official Concox documentation refer to the manufacturer site https://www.iconcox.com/. Manufacturer setup steps and firmware behavior can change over time so verify current instructions on the vendor website before large scale deployments.
