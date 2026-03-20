---
slug: /istartek/vt120_l/configuration
id: vt120_l-configuration
sidebar_label: Configuration
title: iStartek - VT120-L Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for iStartek VT120-L showing Plaspy server configuration SMS commands and practical setup steps for reliable fleet tracking
keywords:
  - iStartek VT120-L configuration
  - iStartek VT120-L setup
  - VT120-L server configuration
  - Plaspy device configuration
  - VT120-L SMS commands
  - VT120-L GPS tracker setup
  - Plaspy tracking server settings
  - vehicle tracker configuration
  - VT120-L APN configuration
  - fleet tracking integration
---

# iStartek - VT120-L Configuration

This page covers the public configuration context for using the iStartek VT120-L tracker with Plaspy. It explains the practical server settings and the common manufacturer-side steps you can use to point the device to Plaspy for real time reporting. The guidance below is based on publicly available configuration commands and the shared Plaspy server settings required for connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The VT120-L supports SMS based configuration as a public method and the examples below preserve the device SMS commands and placeholders where applicable.

## Configuration Overview

The goal of this configuration process is to prepare the VT120-L to communicate reliably with the Plaspy platform using the shared Plaspy server endpoint and port. For VT120-L this commonly means applying APN settings, selecting the Plaspy server (by domain or IP), setting an update timer, and verifying parameters.

- Configure the device APN so the VT120-L can use mobile data for GPRS uploads or accept server pushes.
- Set the Plaspy server endpoint using d.plaspy.com or the Plaspy server IP and assign port 8888.
- Choose transport type UDP or TCP on the device if prompted and ensure the device can reach the Plaspy server.
- Apply an appropriate reporting interval such as 60 seconds for regular position updates.
- Verify settings and confirm the device reports into Plaspy so it appears on your tracking dashboard.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts data from compatible VT120-L devices without requiring manual protocol selection in Plaspy

## Typical Requirements Before Setup

- A powered VT120-L device installed or accessible for configuration.
- A valid SIM card with an active mobile data plan and the correct APN credentials for the carrier.
- Access to the device configuration method used by the installer such as SMS commands or manufacturer software.
- The APN values for your cellular operator to populate the device APN field (placeholders shown in example commands).
- Ability to receive SMS responses from the tracker for verification when using SMS based configuration.
- Access to Plaspy credentials or provisioning details to confirm the device is visible in the Plaspy platform after setup.

## How This Tracker Connects to Plaspy

The VT120-L is configured to send its location and status messages to the Plaspy server endpoint at d.plaspy.com or the equivalent server IP. The tracker uses the selected transport (UDP or TCP) on the shared Plaspy port so Plaspy can ingest tracking messages and present them on the platform.

- The device reports periodic position updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP on the VT120-L; Plaspy accepts either and auto detects the protocol.
- Plaspy consumes the tracker messages to provide live location, alarms, and historical playback.
- Device buffering and dual server upload practices help protect route continuity if temporary network issues occur.
- After configuration the device should be validated to confirm it is visible and reporting in Plaspy.

## Common Configuration Workflow

1. Access the official iStartek configuration method for your VT120-L, typically SMS commands or the vendor tool provided by the installer.
2. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device server endpoint.
3. Set the server port to 8888 to match Plaspy server requirements.
4. Choose UDP or TCP on the device if the configuration requires a transport selection.
5. Apply or save the configuration on the device and send any required finalization commands.
6. Restart the device if the manufacturer instructions or firmware require a reboot to apply changes.
7. Validate that the VT120-L reports to Plaspy by checking the device status on the platform and confirming incoming messages.

## Example Configuration Commands

The VT120-L can be configured by sending SMS commands. The commands below are presented in the typical order used in public device guides. Preserve placeholders such as [apn], [apnu], and [apnp] when you insert your operator values.

- Optional initial factory reset (use only if you need to revert to factory defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your carrier APN. If your carrier requires username and password include [apnu] and [apnp] respectively; omit them if not required.
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server by domain pointing to Plaspy (uses the device server index 1)
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP address pointing to Plaspy (uses the device server index 0)
```text
SERVER,0,54.85.159.138,8888#
```

- Set the location update interval to every 60 seconds
```text
TIMER,60#
```

- Check current parameters on the device
```text
PARAM#
```

Notes on the commands above
- Send each command as a separate SMS to the VT120-L according to the device instructions.
- The SERVER command can use either the domain d.plaspy.com or the Plaspy server IP 54.85.159.138; both target Plaspy on port 8888.
- The APN command includes placeholders [apn], [apnu], and [apnp]. Replace these with your operator APN, username, and password where applicable.
- The FACTORY# command is optional and should be used only when a reset is required.

## Configuration Notes

- Firmware differences may change exact command syntax or supported parameters; always verify the syntax for your VT120-L firmware revision.
- The VT120-L supports SMS based configuration in public guidance, but many installers prefer using the manufacturer configuration tool where available.
- Choose TCP or UDP according to installer preference; Plaspy accepts either and will automatically detect the incoming protocol on port 8888.
- All Plaspy devices use the same port 8888 so you do not need device specific port values when configuring multiple units.
- If you use the server IP option and later change to the domain option, both values point to Plaspy endpoints but using the domain can simplify future server IP changes.

## Why Use Plaspy with This Configuration

Using the VT120-L with Plaspy gives organizations clear operational visibility through consistent location updates, alerting, and historical route playback. The VT120-L’s buffering and dual server upload capability combined with Plaspy’s automatic protocol detection reduce the risk of data gaps and simplify large scale deployments where many devices share the same server settings.

Learn more about Plaspy and how it can support fleet management and real time tracking at https://www.plaspy.com. Please verify model specific configuration steps, firmware behavior, and any additional manufacturer instructions on the official iStartek website https://istartek.com/ as device behavior and command syntax can change over time.
