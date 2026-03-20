---
slug: /calmamp/lmu_400/configuration
id: lmu_400-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-400 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CalmAmp LMU-400 GPS tracker integration with Plaspy including server and SMS setup steps
keywords:
  - CalmAmp LMU-400 configuration
  - LMU-400 Plaspy setup
  - CalmAmp tracker configuration
  - LMU-400 SMS configuration
  - vehicle tracking setup
  - GPS tracker configuration
  - Plaspy server settings
  - LMU-400 APN setup
  - fleet tracking configuration
  - LMU-400 installation guide
---

# CalmAmp - LMU-400 Configuration

This page documents the public configuration context for using the CalmAmp LMU-400 tracker with Plaspy. It focuses on the practical, publicly available steps and settings required to point the device at Plaspy so the unit can report location and status to the platform. Where applicable, SMS-based commands from the manufacturer are shown as examples to help set APN, server address, and port.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer-side steps can vary by firmware, hardware revision, installation type, or vendor tools. The LMU-400 supports SMS configuration as well as CalmAmp over-the-air provisioning workflows, so follow the method that matches your device provisioning and firmware capabilities.

## Configuration Overview

The goal of configuration is to prepare the LMU-400 to communicate reliably with Plaspy and to validate that the device is visible in the platform. Using the public commands or manufacturer tools you will set network access (APN), point the device to the Plaspy server, and verify reporting.

- Configure the cellular data settings and APN so the device can reach Plaspy
- Set the Plaspy server endpoint and port used by all Plaspy devices
- Choose transport (UDP or TCP) if required by the device firmware
- Reboot or apply settings so changes take effect
- Verify settings and confirm the device appears and reports to Plaspy

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring an LMU-400 for the Plaspy platform:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured to use either)
- Plaspy automatically detects the tracker protocol when the device connects

Note: Plaspy uses the same port for all supported devices so you only need to set port 8888.

## Typical Requirements Before Setup

- An active SIM with a data plan and correct APN details from the cellular operator
- Power to the LMU-400 and any preferred installation wiring completed
- Access to the CalmAmp configuration method for the device (SMS commands, PULS OTA, or manufacturer tool)
- The device MID or ID (obtainable through the LMU-400 verification command) to confirm the unit you are configuring
- Knowledge of whether your firmware requires selecting UDP or TCP transport
- A Plaspy account or onboarding information so you can confirm the device appears on the platform after configuration

## How This Tracker Connects to Plaspy

The LMU-400 is configured to send its location and status messages to the shared Plaspy server endpoint on port 8888. Plaspy receives incoming connections on the same port for all devices and determines the appropriate protocol automatically, allowing different tracker protocols to coexist.

- The tracker uses cellular data to reach the configured Plaspy server
- Device events and position data are sent to d.plaspy.com or the provided IP address
- Plaspy identifies and decodes the tracker protocol automatically on connection
- The platform provides visibility and event monitoring once the device is reporting
- Confirmation of successful reporting is performed by checking device presence in Plaspy

## Common Configuration Workflow

1. Access the official CalmAmp configuration method for your LMU-400 (SMS commands, PULS OTA, or CalmAmp tools).
2. Enter the Plaspy server as d.plaspy.com or as the IP address 54.85.159.138 in the device server settings.
3. Set the server port to 8888 (all Plaspy devices use this same port).
4. Choose UDP or TCP as the transport if the LMU-400 requires an explicit selection.
5. Apply or save the configuration changes through the manufacturer tool or send the SMS commands.
6. Restart or reboot the device if required to apply settings.
7. Validate that the LMU-400 reports to Plaspy and appears in the platform.

## Example Configuration Commands

CalmAmp LMU-400 public SMS commands can be used to set APN, server, port, and to reboot the unit. The unit ID referenced in SMS commands is the MID, a 10 digit identifier returned by the !R0 command. Preserve the placeholders when entering commands.

- Get the unit MID (used as the ID in follow-up commands)
```
!R0
```

- Set the operator APN (replace [apn] with your operator APN)
```
!RP,2306,0,[apn]
```

- Set the APN username if required (replace [apnu] with the APN username)
```
!RP,2314,0,[apnu]
```

- Set the APN password if required (replace [apnp] with the APN password)
```
!RP,2315,0,[apnp]
```

- Set the GPRS server to the Plaspy IP address
```
!RP,2319,0,54.85.159.138
```

- Set the server port to Plaspy port 8888
```
!RP,769,0,8888
```

- Reboot the tracker to apply settings (recommended after configuration)
```
!R3,70,0
```
Label: Rebooting is typically required to apply changes; treat this as a final step after saving settings.

- Check the current settings on the device
```
!RO
```

Notes on placeholders:
- [apn] — the cellular operator APN string
- [apnu] — APN username if the carrier requires authentication
- [apnp] — APN password if the carrier requires authentication

## Configuration Notes

- Firmware versions and hardware revisions can change command availability and behavior; confirm commands against the device firmware you have installed.
- The LMU-400 supports SMS-based configuration as shown and also supports CalmAmp PULS OTA provisioning; use the method appropriate for your deployment.
- If the device interface requires choosing transport, try UDP or TCP based on installer preference; Plaspy detects the tracker protocol automatically once the device connects.
- All Plaspy devices use port 8888, so setting the correct port is a key step for platform connectivity.
- Keep APN credentials secure and verify carrier requirements before deploying devices to the field.

## Why Use Plaspy with This Configuration

Configuring the CalmAmp LMU-400 to report to Plaspy provides a straightforward way to gain vehicle visibility and operational monitoring. Using the shared Plaspy endpoint and port simplifies fleet onboarding and allows the platform to automatically identify the tracker protocol, reducing configuration complexity for mixed-device deployments.

To learn more about Plaspy and how it supports trackers like the LMU-400, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details, verify documentation at the official CalmAmp site http://www.calamp.com/ as specifications and setup steps can change over time.
