---
slug: /concox/jm_vg01/configuration
id: jm_vg01-configuration
sidebar_label: Configuration
title: Concox - JM-VG01 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox JM VG01 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Concox JM VG01 configuration
  - Concox JM VG01 setup
  - JM VG01 Plaspy
  - JM VG01 SMS configuration
  - Concox GPS tracker configuration
  - vehicle tracker setup
  - GPS platform setup
  - server configuration guide
  - GPRS tracker setup
  - tracker protocol settings
---

# Concox - JM-VG01 Configuration

This page covers the public configuration context for using the Concox JM-VG01 tracker with Plaspy. It explains the shared server settings Plaspy requires, the typical preconditions for setup, and the publicly available SMS commands from the manufacturer that are commonly used to point the device to the Plaspy service. Use this guide as a practical starting point for integrating the device into Plaspy while reviewing manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The JM-VG01U model includes advanced tracking features such as INS aided GPS and motion sensors, and the commands shown here reflect common public configuration options provided by Concox for GPRS and SMS based setup.

## Configuration Overview

This configuration process prepares the JM-VG01 to communicate reliably with the Plaspy platform and to report position and event data to Plaspy servers. The focus is on setting the network parameters, selecting transport, activating GPRS, and validating that the tracker appears in Plaspy using the platform shared endpoint and port.

- Set the device APN and enable GPRS so the tracker can exchange data with the Plaspy server.
- Configure the tracker to report to Plaspy using the server domain or IP and the shared port 8888.
- Choose UDP or TCP transport on the device when required by the firmware and save the configuration.
- Validate connectivity and confirm the device is visible in Plaspy after configuration.
- Use SMS commands or the manufacturer tool as appropriate to apply the settings and verify parameters.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 for all devices supported by Plaspy  
- Transport support for UDP or TCP on the device side  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and accessible JM-VG01 device with SMS and/or GPRS capable SIM installed and active for data.  
- Knowledge of the mobile operator APN and any required APN username or password for the SIM.  
- Ability to send SMS commands to the device or access to the manufacturer configuration tool if available.  
- Basic administrative access to Plaspy to confirm device connectivity and visibility after setup.  
- A note of the device IMEI or identifier so you can map the physical device to a record in Plaspy.

## How This Tracker Connects to Plaspy

The JM-VG01 is configured to report location and status data to the Plaspy server endpoint and port using the device GPRS connection and the configured transport protocol. Plaspy receives the device connection on the shared endpoint and automatically detects the tracker protocol so no per device port differentiation is required.

- Device sends periodic position updates to d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be either UDP or TCP depending on tracker firmware and selection.  
- Plaspy automatically detects the device protocol when the tracker connects.  
- Event reporting and periodic timers are used to send updates at the configured interval.  
- Once configured and connected, the device becomes visible for tracking and monitoring in Plaspy.

## Common Configuration Workflow

1. Access the official Concox configuration method or software, or prepare to send SMS commands as documented by the manufacturer.  
2. Enter the Plaspy server host either as the domain d.plaspy.com or the IP address 54.85.159.138.  
3. Set the server port to 8888 which is the shared port used by Plaspy for all supported devices.  
4. Choose the transport method UDP or TCP if the device requires selecting a transport.  
5. Configure the device APN settings and enable GPRS mode so the device can connect over mobile data.  
6. Apply or save the configuration and restart the device if the firmware requires a restart to apply changes.  
7. Validate that the device reports to Plaspy by checking the device list or incoming telemetry on the Plaspy platform.

## Example Configuration Commands

The JM-VG01 supports SMS based configuration. Below are the public SMS commands provided by Concox presented in order. Send each command as an SMS to the device number. Commands preserve placeholders where applicable.

- Optional initial reset to factory settings
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn][,[apnu],[apnp]]#
```
Explanation: replace [apn] with your mobile operator APN. If your operator requires an APN username and password, include [apnu] and [apnp] in the optional positions. Keep the placeholders if not required.

- Set the GPRS server using domain
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using IP address
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the upload interval to every 60 seconds
```text
TIMER,60#
```
Alternative timer format
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS and server settings
```text
GPRSSET#
```

Note: The order of these commands matters for initial setup. The FACTORY# reset is optional and only use it when you need to return the device to factory defaults before configuration.

## Configuration Notes

- Manufacturer firmware versions and hardware revisions can change command syntax or behavior; verify syntax against the official Concox documentation for your device revision.  
- The JM-VG01 public commands above use SMS for configuration which is supported by Concox and shown in official public material. Use the manufacturer tool if provided for bulk or remote provisioning.  
- Choose UDP or TCP based on installer preference and device firmware support; Plaspy accepts both transports at the shared port.  
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol on connection.  
- When using domain based SERVER commands, DNS resolution on the device depends on the operator network so the IP alternative can be useful in constrained networks.

## Why Use Plaspy with This Configuration

Using the JM-VG01 with Plaspy provides a practical way to aggregate vehicle location, event reporting, and operational visibility into a single platform. The device's advanced INS aided GPS and motion sensing capabilities can enhance tracking continuity and behavior awareness while Plaspy receives and normalizes incoming data using the shared server endpoint.

To learn more about Plaspy and supported device integration visit https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and manufacturer details on the Concox site https://www.iconcox.com/ as manufacturer specifications and setup procedures can change over time.
