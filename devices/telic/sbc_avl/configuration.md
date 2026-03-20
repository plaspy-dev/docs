---
slug: /telic/sbc_avl/configuration
id: sbc_avl-configuration
sidebar_label: Configuration
title: Telic - SBC AVL Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Telic SBC AVL tracker with Plaspy compatibility including server settings and SMS commands
keywords:
  - Telic SBC AVL configuration
  - Telic SBC AVL setup Plaspy
  - Telic GPS tracker configuration
  - SBC AVL server setup
  - Telic tracker setup
  - Plaspy tracker configuration
  - vehicle tracking SBC AVL
  - Telic fleet management configuration
  - SBC AVL SMS setup
  - Telic GPRS configuration
---

# Telic - SBC AVL Configuration

This page describes the public configuration context for using the Telic SBC AVL tracker with Plaspy. It gathers the practical server settings, SMS command examples, and a common workflow that organizations use to bring the device online with Plaspy while relying on public manufacturer commands and platform connection details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this guide focuses on the public, repeatable actions needed to point the SBC AVL at the Plaspy endpoint and confirm connectivity.

## Configuration Overview

The configuration process prepares the SBC AVL to report location and status to Plaspy and verifies that data arrives at the shared Plaspy endpoint. Where available, the device can be configured by SMS commands to set APN, server address, transport mode, and GPRS behavior.

- Configure the tracker APN and credentials so it can connect to a mobile data network.
- Point the device to Plaspy by setting the server address and port used by all Plaspy devices.
- Select transport mode UDP or TCP if the tracker firmware asks for a transport option.
- Enable GPRS data reporting so the device sends telemetry to Plaspy.
- Verify settings and confirm the tracker appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will attempt to identify the tracker protocol automatically once the device connects to the configured endpoint.

## Typical Requirements Before Setup

- A powered and installed Telic SBC AVL with working GSM and GPS antennas.
- An active SIM card with mobile data and the operator APN details.
- Ability to send SMS messages to the device for SMS based configuration, or access to the manufacturer configuration tool if available.
- Knowledge of the device password for SMS configuration; the public default password shown in examples below is 123456.
- Access to manufacturer documentation or support tools for firmware specific instructions and any required software.
- A Plaspy account and basic familiarity with how devices are added and validated in the Plaspy platform.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the SBC AVL reports position and device data over GPRS to the shared Plaspy server endpoint and port. Plaspy receives the device connection, detects the communication protocol automatically, and associates the feed with the platform account that manages the tracker.

- The tracker establishes a GPRS session using the configured APN and credentials.
- It opens a connection to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Data is sent over the chosen transport, UDP or TCP, depending on device selection.
- Plaspy detects the tracker protocol automatically and decodes the incoming telemetry.
- Once reporting, location and status appear in the Plaspy platform for monitoring and operations.

## Common Configuration Workflow

1. Access the official Telic configuration method for the SBC AVL, typically SMS commands or the vendor configuration tool, to make changes.
2. Configure the device APN using the operator APN values so the unit can establish GPRS data.
3. Enter the Plaspy server address, using either d.plaspy.com or the IP 54.85.159.138 depending on the device interface.
4. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP transport if the tracker requires explicit transport selection.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy and that the platform shows the tracker as active.

## Example Configuration Commands

The Telic SBC AVL supports SMS based configuration. The commands below are public examples used to configure the device by SMS. The sample setup uses the default device password 123456. Preserve placeholders when issuing commands.

- Optional initial factory reset (use only if you need to reset the device to factory defaults):
```text
begin123456
```

- Set the time zone to UTC+0:
```text
time zone123456 0
```

- Set the operator APN (replace [apn] with your mobile operator APN):
```text
apn123456 [apn]
```

- Set the APN username and password if required by your operator (replace [apnu] and [apnp] with the operator username and password). Include this only if your APN requires authentication:
```text
up123456 [apnu] [apnp]
```

- Configure the GPRS server to point to Plaspy using the public Plaspy server IP and port:
```text
adminip123456 54.85.159.138 8888
```

- Switch the device to GPRS mode so it will use mobile data to send reports. Some firmware accepts either form:
```text
gprs123456,1,1
```
or
```text
gprs123456
```

- Verify current settings by requesting a configuration check:
```text
check123456
```

Notes on placeholders:
- [apn] — replace with your mobile operator APN string.
- [apnu] — replace with the APN username if the operator requires it.
- [apnp] — replace with the APN password if the operator requires it.

These commands are public examples. Use the device password appropriate for your unit and verify commands with the manufacturer documentation if unsure.

## Configuration Notes

- SMS based setup is widely used for SBC AVL devices; ensure the device can receive SMS from the phone number you are using.
- The example commands use the public default password 123456; change the password after setup if your operational workflow requires it.
- Firmware or hardware revisions can change command formats or available parameters. Always verify with the Telic documentation for your hardware revision.
- Choose UDP or TCP based on your network and device requirements; Plaspy supports both transports and detects the protocol automatically.
- Plaspy uses the same port 8888 for all supported devices which simplifies server configuration across multiple tracker models.

## Why Use Plaspy with This Configuration

Using the Telic SBC AVL with Plaspy provides a straightforward way to add compact, antenna integrated telematics units into an operational fleet monitoring workflow. By pointing the device at Plaspy and verifying connectivity, organizations get centralized visibility and can monitor vehicle location and device status from a single platform.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For up to date device specific details, firmware notes, and additional command references consult the manufacturer documentation at https://www.telic.de.
