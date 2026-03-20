---
slug: /jointech/jt709a/configuration
id: jt709a-configuration
sidebar_label: Configuration
title: Jointech - JT709A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech JT709A setup and Plaspy compatibility using shared Plaspy server settings
keywords:
  - Jointech JT709A configuration
  - JT709A setup
  - JT709A Plaspy configuration
  - JT709A server configuration
  - Jointech GPS tracker setup
  - asset security tracker configuration
  - Plaspy tracker integration
  - container seal tracker setup
  - JT709A SMS configuration
  - GPRS APN configuration
---

# Jointech - JT709A Configuration

This page documents the public configuration context for using the Jointech JT709A with Plaspy. It explains the practical steps and public settings you will need to point the device at Plaspy so the tracker reports location and event telemetry into the platform. Where manufacturer setup details are provided publicly, they are included here as examples.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The JT709A supports SMS based configuration for GPRS and APN settings which is included below as a common public method to prepare the device for Plaspy reporting.

## Configuration Overview

The goal of this configuration is to prepare the JT709A to communicate with Plaspy and to validate that the device is visible and reporting correctly in the platform. Typical actions include setting the GPRS server endpoint, APN credentials if required, choosing the transport type when needed, and confirming device reporting.

- Set the device GPRS server address and APN so the tracker can open a data session to Plaspy
- Provide APN username and password when the SIM operator requires login credentials
- Select UDP or TCP transport on the device if the tracker requires an explicit transport choice
- Save and apply settings then verify the device connects and reports to Plaspy
- Use SMS based commands or the official manufacturer tool depending on installation and firmware

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

These values are the public Plaspy settings to enter on the JT709A or when configuring via manufacturer tools. Plaspy uses the same port for all supported devices and automatically determines the tracker protocol once the device connects.

## Typical Requirements Before Setup

- A charged JT709A installed or accessible for configuration
- A working SIM card with data or GPRS enabled and SMS capability if using SMS configuration
- The device ID of the JT709A ready to use in SMS commands or manufacturer software
- Access to the official manufacturer configuration method or tool for your firmware revision
- Knowledge of the APN string and optional APN username and password required by the mobile operator
- Administrative access to Plaspy so you can verify the device appears and sends telemetry

## How This Tracker Connects to Plaspy

The JT709A is configured to report position and event telemetry to the Plaspy server endpoint and port, enabling visibility and event-driven alerts within the platform. Once the device is pointed to the Plaspy endpoint and establishes transport, Plaspy will ingest the device protocol automatically.

- The tracker opens a GPRS data session directed to d.plaspy.com or 54.85.159.138 on port 8888
- The tracker uses UDP or TCP for transport depending on device configuration and network environment
- Location and event messages are delivered to Plaspy, which automatically detects the protocol
- Plaspy provides real time location, event reporting, and device state visibility for the JT709A
- Successful reporting enables geofencing, alerting, and audit logs for lock and tamper events

## Common Configuration Workflow

1. Access the official Jointech configuration method for the JT709A such as the manufacturer SMS protocol or a vendor configuration tool
2. Enter d.plaspy.com or 54.85.159.138 as the server address in the device settings
3. Set the port to 8888 which is the shared Plaspy port for all devices
4. Choose UDP or TCP if the tracker requires an explicit transport selection
5. Provide the APN value and APN credentials if required by the SIM provider
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot
7. Validate that the device reports to Plaspy and appears in your Plaspy account with expected location and event data

## Example Configuration Commands

The JT709A can be configured by sending SMS commands to the device. Replace the placeholder values before sending. The command order matters when applying GPRS and APN credentials.

- Enter the device ID into the command where indicated by {{trackerID}}. This is the device unique identifier the tracker uses to accept configuration messages.

1) Set the GPRS server and APN
Send this SMS to the device number, replacing the placeholders as needed:

```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```

- Replace {{trackerID}} with the tracker device ID.
- Replace {{apn}} with your mobile operator APN string.

2) Set the APN user and password if required by the operator
This command is optional and only needed when the APN requires authentication:

```
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```

- Replace {{apnu}} with the APN username if required.
- Replace {{apnp}} with the APN password if required.

Notes on commands
- These SMS commands configure the tracker to use the Plaspy server IP 54.85.159.138 and port 8888. You may alternatively use the domain d.plaspy.com in manufacturer tools if the tracker supports domain names.
- The device may be configured using UDP or TCP on port 8888 depending on the firmware and configuration path.
- Keep a copy of the original manufacturer command reference handy and verify exact syntax for your firmware revision.

## Configuration Notes

- Firmware differences can change exact SMS command syntax or available parameters. Always confirm command formats with the manufacturer documentation.
- SMS based configuration is supported by the public commands above but vendor software or a configuration tool may provide a safer, bulk configuration workflow.
- Choose UDP or TCP based on network reliability and operator recommendations. Plaspy accepts both transports on the shared port.
- Avoid exposing sensitive credentials in unsecured channels. APN username and password may be sent via SMS for some setups; follow your organisation security policies.
- Plaspy automatically detects the tracker protocol once the device reaches the server endpoint, so use the shared port and server settings above.

## Why Use Plaspy with This Configuration

Using the JT709A with Plaspy gives operations teams a straightforward way to gather precise location, tamper, and unlock event telemetry from sealed assets into a single platform. This integration supports chain of custody, improves incident response, and reduces unnecessary site visits by surfacing actionable events and device state in real time.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and command references verify details on the manufacturer site https://www.jointcontrols.com/ since setup methods and firmware behavior can change over time.
