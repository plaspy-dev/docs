---
slug: /castel/mpip_618w_yb/configuration
id: mpip_618w_yb-configuration
sidebar_label: Configuration
title: Castel - MPIP-618W-YB Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure Castel MPIP-618W-YB for use with Plaspy including server settings and example SMS commands
keywords:
  - Castel MPIP-618W-YB configuration
  - Castel MPIP-618W-YB setup
  - MPIP-618W-YB Plaspy configuration
  - GPS tracker configuration Plaspy
  - Castel vehicle tracker setup
  - MPIP configuration guide
  - tracking software configuration
  - Castel GPS platform setup
  - Plaspy tracker integration
  - vehicle tracking server setup
---

# Castel - MPIP-618W-YB Configuration

This page documents the public configuration context for using the Castel MPIP-618W-YB tracker with Plaspy. It focuses on the shared Plaspy server settings you must apply to the device so the tracker can send real time position, speed, and alert data to Plaspy for monitoring and reporting. Where the device supports SMS setup in the field, example commands are included as provided by the manufacturer.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects the tracker protocol so you do not need to preselect a protocol inside Plaspy. Exact manufacturer steps to configure the device can vary by firmware, hardware revision, installation type, or vendor tool; the examples below reflect the public SMS commands and general workflow commonly used to point this tracker at Plaspy.

## Configuration Overview

The goal of the configuration process is to prepare the MPIP-618W-YB so it reliably communicates with Plaspy and appears in the platform for live tracking and alerting. For devices that support SMS setup, device parameters such as APN and server endpoint are often set by sending structured SMS instructions to the unit.

- Set the device APN and server endpoint so the tracker can use GPRS to reach Plaspy.
- Configure transport and port so device traffic is accepted by Plaspy on the shared endpoint.
- Verify connectivity and that the tracker successfully reports position and alerts to Plaspy.
- Use the device ID and default SMS secret key to send configuration commands if required.
- Validate settings using the device verification command before final deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and installed MPIP-618W-YB with access to the device ID or serial for default key derivation.
- A working SIM with data and SMS capability configured inside the tracker where GPRS is used.
- The correct APN values for the SIM operator to allow GPRS connectivity.
- Access to the manufacturer configuration method such as SMS commands or a vendor tool.
- Basic knowledge of the device secret key; by default the SMS secret key is the last six ASCII characters of the device ID as provided in public device instructions.
- A plan to validate reporting in Plaspy once the device is configured.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the MPIP-618W-YB reports location, movement, and alert events to Plaspy's shared server endpoint and port so fleet operators can view and respond to events in the platform. The device uses GPRS for transport and can also accept configuration via SMS where supported.

- The tracker is set to send GPRS traffic to d.plaspy.com or 54.85.159.138 on port 8888.
- The device can use UDP or TCP transport on port 8888 depending on device configuration.
- Plaspy receives and automatically detects the tracker protocol so no protocol selection is required in Plaspy.
- Position, speed, and alert messages are forwarded to the Plaspy monitoring center for real time display.
- Verification commands or query messages can be used to confirm the APN and server settings on the device.

## Common Configuration Workflow

1. Access the official Castel manufacturer configuration method for the MPIP-618W-YB, such as the SMS command format described by the vendor or an approved configuration tool.
2. Prepare APN values for your SIM and know the device secret key (the default secret key is the last 6 ASCII characters of the device ID).
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device configuration screen or command.
4. Set the device port to 8888 and choose UDP or TCP if the device requires transport selection.
5. Apply or save the configuration on the device and send any required confirmation command.
6. Restart the device if the manufacturer or firmware requires a reboot for changes to take effect.
7. Validate the device reports to Plaspy by checking the device status in Plaspy or by using the device verification SMS command.

## Example Configuration Commands

The MPIP-618W-YB supports SMS based configuration in the public manufacturer instructions. Use the device secret key and replace the APN placeholders with your operator values. The default SMS secret key is the last six ASCII characters of the device ID.

- Set GPRS APN and point the tracker to the Plaspy server IP and port

```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

Explanation:
- [SecretKey] — SMS secret key for commands. Default is the last 6 ASCII characters of the device ID unless changed.
- [apn] — APN name for the SIM operator.
- [apnu] — APN username if required by the operator; leave empty if not required.
- [apnp] — APN password if required by the operator; leave empty if not required.
- The command sets the APN and configures the device to send data to Plaspy at 54.85.159.138 on port 8888.

- Query current GPRS settings to verify configuration

```
*[SecretKey]#get gprs#*
```

Send the above SMS from an authorized phone number to the device to receive the configured GPRS parameters. If the device returns the configured server and port, confirm the values match 54.85.159.138 and 8888 (or that d.plaspy.com is resolved to the same endpoint in your environment).

## Configuration Notes

- Firmware variations and hardware revisions can change the exact SMS syntax or available commands; consult the manufacturer guide for the unit in use.
- You can configure the server using either the domain d.plaspy.com or the IP 54.85.159.138; both are publicly supported for Plaspy compatibility.
- Choose UDP or TCP according to your installation needs; the device supports both transports and Plaspy will detect the protocol automatically.
- If you use SMS setup, ensure you send commands from an authorized phone number and use the correct secret key for the device.
- Always verify settings using the provided verification command before deploying multiple units.

## Why Use Plaspy with This Configuration

Using Plaspy with the Castel MPIP-618W-YB enables centralized visibility into vehicle location, speed, and alert events across a fleet. Configuring the tracker to report to Plaspy's shared server endpoint and port simplifies deployment because Plaspy automatically detects the tracker protocol and uses the same port for all supported devices.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration commands, firmware details, and installation guidance verify information on the manufacturer website http://www.castelecom.com/ since vendor setup methods and firmware behavior can change over time.
