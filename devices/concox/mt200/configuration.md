---
slug: /concox/mt200/configuration
id: mt200-configuration
sidebar_label: Configuration
title: Concox - MT200 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring Concox MT200 tracker to work with Plaspy using server settings and SMS commands
keywords:
  - Concox MT200 configuration
  - Concox MT200 setup
  - MT200 GPS tracker configuration
  - Plaspy tracker configuration
  - motorcycle GPS tracker setup
  - Concox MT200 server configuration
  - GPS tracker SMS commands
  - fleet management tracker setup
  - GPRS server setup
  - device configuration guide
---

# Concox - MT200 Configuration

This page documents the public configuration context for using the Concox MT200 motorcycle GPS tracker with Plaspy. It summarizes the practical steps and server settings commonly used to connect the MT200 to Plaspy and includes sample SMS commands extracted from the device public configuration content. Use this guide to prepare the device for platform visibility and to understand what Plaspy requires for reliable reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor tools, so review the device commands below and compare them with the latest documentation from Concox when needed.

## Configuration Overview

Configuring the MT200 for Plaspy focuses on setting the device GPRS parameters, server endpoint, reporting interval, and confirming communication so the tracker appears in Plaspy. The MT200 supports SMS based configuration commands, which are useful for field installs and quick provisioning.

- Prepare the MT200 to send data to Plaspy by setting the server address and transport.
- Configure the device APN and GPRS mode so the tracker can use mobile data.
- Set a reporting interval to control how often the MT200 sends position updates.
- Validate connectivity and confirm the device reports to Plaspy for monitoring and alerts.
- Use SMS commands or the Concox configuration tool depending on the installer workflow.

## Plaspy Server Settings

- Server domain d.plaspy.com for GPRS server configuration.
- Server IP 54.85.159.138 as an alternative server endpoint.
- Port 8888 is the port used by Plaspy for tracker connections.
- The device may be configured using UDP or TCP on port 8888 depending on tracker firmware and installer choice.
- Plaspy automatically detects the tracker protocol when the device connects.
- All devices in Plaspy use the same port 8888 which simplifies device provisioning.

## Typical Requirements Before Setup

- Power the MT200 and ensure the unit is operational and accessible for configuration.
- A valid SIM card with active data and correct APN settings for the mobile operator.
- Ability to send SMS messages to the tracker for SMS based configuration or access to Concox configuration tools if preferred.
- The APN, and where applicable APN username and password, for the SIM operator.
- Knowledge of whether the device firmware expects UDP or TCP transport when configuring the server.
- Confirmation of the device IMEI or identifier so you can validate signals in Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured, the MT200 sends location and device data to the shared Plaspy server endpoint and port so the device can be monitored within the Plaspy platform. Plaspy uses the same port for all supported devices and will try to detect the correct protocol automatically when the tracker initiates communication.

- The tracker reports position and status packets to d.plaspy.com or the provided IP address on port 8888.
- Plaspy automatically detects whether the tracker is using UDP or TCP and decodes the incoming protocol.
- Periodic timer reports are used to provide regular location updates based on the configured TIMER interval.
- GPRS mode must be enabled and APN configured for the device to use mobile data to reach Plaspy.
- After successful configuration the device becomes visible and reportable inside Plaspy for tracking and fleet management.

## Common Configuration Workflow

1. Access the official Concox configuration method or software, or prepare SMS commands if using SMS based setup.
2. Set the device APN using the APN command and any required APN username or password.
3. Enter the Plaspy server address by configuring either d.plaspy.com or 54.85.159.138.
4. Set port 8888 for the GPRS server entry.
5. Choose UDP or TCP if the device requires a transport selection when setting the server.
6. Apply or save the configuration on the device and enable GPRS mode if needed.
7. Restart the device when required by the firmware or after applying settings.
8. Validate that the device reports to Plaspy by checking connectivity and incoming messages in the platform.

## Example Configuration Commands

The MT200 supports SMS based configuration. Below are the public SMS commands provided in the device configuration content. Send these commands as SMS messages to the device phone number in the order shown when appropriate.

1. Optional factory reset at initial setup
```
FACTORY#
```
2. Set the time zone to UTC 0
```
GMT,E,0#
```
3. Set the operator APN
```
APN,[apn],[apnu],[apnp]#
```
- [apn] is the mobile operator APN.
- [apnu] is the APN username if required by the operator.
- [apnp] is the APN password if required by the operator.
- If username and password are not required, you can typically send only APN,[apn]#.

4. Set the GPRS server using the Plaspy domain
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy IP
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update interval to every 60 seconds
```
TIMER,60#
```
Or alternative timer format
```
TIMER,60,60#
```

6. Enable GPRS mode
```
GPRSON,1#
```

7. Check current GPRS parameter settings
```
GPRSSET#
```

Note: Preserve the exact formatting when sending SMS commands. The order matters for initial provisioning in many installations, and enabling GPRS after the server and APN settings are configured reduces failed session attempts.

## Configuration Notes

- SMS based configuration is supported and is shown above, but some installers prefer using Concox tools or configuration software for batch provisioning.
- Different firmware versions or hardware revisions of the MT200 can change the available commands or expected formats; verify commands against the unit firmware where possible.
- Choose UDP or TCP transport according to the device firmware options. Plaspy will detect the protocol automatically when the device connects.
- Plaspy uses the same port 8888 for all devices which simplifies server configuration across a mixed device fleet.
- Always confirm APN, username, and password values with the mobile operator before provisioning.

## Why Use Plaspy with This Configuration

Using the MT200 with Plaspy provides organizations and motorcycle fleet operators with a straightforward path to device visibility, location reporting, and operational monitoring. The shared Plaspy server settings reduce per device complexity and the platform detection of protocol helps accommodate common tracker variants.

To learn more about Plaspy and how it manages device connectivity and fleet visibility visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer details verify the Concox resources at https://www.iconcox.com/.
