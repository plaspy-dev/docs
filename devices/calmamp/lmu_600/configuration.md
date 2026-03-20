---
slug: /calmamp/lmu_600/configuration
id: lmu_600-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-600 Configuration
sidebar_class_name: menu_item_tracker
description: Public technical guide for configuring CalmAmp LMU 600 with Plaspy server settings and example SMS commands
keywords:
  - CalmAmp LMU 600 configuration
  - CalmAmp LMU 600 setup
  - LMU 600 server configuration
  - LMU 600 Plaspy setup
  - GPS tracker configuration Plaspy
  - vehicle tracking LMU 600
  - GPRS SMS configuration LMU 600
  - PEG configuration LMU 600
  - PULS over the air updates
  - Plaspy server settings
---

# CalmAmp - LMU-600 Configuration

This page describes the public configuration context for using the CalmAmp LMU-600 series tracker with the Plaspy platform. It focuses on the server and workflow details you need to point the device to Plaspy, plus example SMS commands that are commonly used with the LMU-600 family.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The LMU-600 supports GSM GPRS networks and can be configured using SMS or network server settings, so you should verify firmware-specific behavior with CalAmp documentation when needed.

## Configuration Overview

The goal of this configuration is to prepare the LMU-600 so it can reliably communicate location and status to Plaspy. This includes providing correct APN settings, pointing the device to the Plaspy server endpoint, selecting the transport if required, and verifying the device reports successfully.

- Configure the network APN and optional APN credentials so GPRS data is available.
- Set the LMU-600 to report to Plaspy by entering the server domain or IP and the Plaspy port.
- Choose UDP or TCP transport on the device when the firmware requires an explicit selection.
- Reboot or apply the device configuration so changes take effect.
- Verify device settings and confirm the unit reports to Plaspy so the tracker becomes visible in the platform.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP may be used on port 8888 depending on device configuration  
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A powered and installed CalmAmp LMU-600 with functional cellular connectivity.  
- A valid SIM with an active data plan and the correct APN for the mobile operator.  
- Access to the device configuration method provided by CalAmp for your unit, either SMS command access or the vendor configuration tool.  
- Ability to send SMS commands to the device if using SMS-based configuration and the device supports SMS control.  
- Knowledge of the device MID or identification method when required by the device command flow.  
- Connectivity to Plaspy server d.plaspy.com or 54.85.159.138 on port 8888 from the device GPRS network.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the LMU-600 reports location and events to Plaspy using GPRS or SMS where supported, targeting the shared Plaspy server endpoint and port. Plaspy receives these messages and maps them to the appropriate account and device using the tracker protocol that Plaspy detects automatically.

- The device is set to send messages to d.plaspy.com or 54.85.159.138 on port 8888.  
- Messages can be delivered over UDP or TCP depending on the device configuration and network conditions.  
- Plaspy automatically detects the device protocol so a specific protocol selection on the server side is not required.  
- After configuration, device visibility and reporting can be validated from Plaspy once the tracker registers and sends data.  
- Event-based messages configured in the LMU-600 (PEG rules) will also be forwarded to the Plaspy endpoint once network and server settings are correct.

## Common Configuration Workflow

1. Access the official CalAmp configuration method for your LMU-600 unit, either the vendor's SMS command process or bundled configuration tool.  
2. Obtain the device ID (MID) if required by your workflow by issuing the manufacturer verification command.  
3. Enter the Plaspy endpoint either as the domain d.plaspy.com or as the server IP 54.85.159.138 in the server/GPRS settings.  
4. Set the server port to 8888 in the device network configuration.  
5. Choose UDP or TCP transport on the device if the firmware asks for a transport selection.  
6. Save or apply the configuration and reboot the device if required to apply changes.  
7. Validate the device reports to Plaspy by checking for incoming messages in Plaspy and using device verification commands as available.

## Example Configuration Commands

The LMU-600 supports SMS-based configuration. The following public SMS commands are commonly used to prepare the device for GPRS reporting to Plaspy. Send commands to the device according to CalAmp SMS procedures. The device will usually reply with a MID or acknowledge the command.

Note: Replace placeholders with your network values. The ID referenced in some vendor workflows is the MID 10 digits returned by the device verification command.

- Get the device MID (verify device identity)
```text
!R0
```

- Set the operator APN (replace [apn] with your operator APN)
```text
!RP,2306,0,[apn]
```

- Set the APN username when required (replace [apnu] with your APN username)
```text
!RP,2314,0,[apnu]
```

- Set the APN password when required (replace [apnp] with your APN password)
```text
!RP,2315,0,[apnp]
```

- Set the GPRS server to Plaspy by IP
```text
!RP,2319,0,54.85.159.138
```

- Set the server port to Plaspy port
```text
!RP,769,0,8888
```

- Reboot the tracker to apply settings (optional but commonly required to activate new network parameters)
```text
!R3,70,0
```

- Check current settings on the device
```text
!RO
```

Explanation of placeholders:
- [apn] — operator APN string required for GPRS data.  
- [apnu] — optional APN username when the operator requires credentials.  
- [apnp] — optional APN password when the operator requires credentials.

When using SMS commands, the exact message format and whether an ID prefix is required depends on firmware and CalAmp provisioning options. Use the MID value from the !R0 reply when your installation workflow requires an ID.

## Configuration Notes

- Firmware differences across LMU-600 hardware revisions may change exact SMS command formats and available parameters; verify with CalAmp documentation.  
- The LMU-600 supports SMS based configuration and GPRS reporting; choose UDP or TCP on port 8888 depending on device firmware and network results.  
- Plaspy uses the same port for all devices and automatically detects the tracker protocol, so server-side protocol selection is typically unnecessary.  
- APN credentials are operator specific; if your operator requires a username or password, include [apnu] and [apnp] values when sending configuration commands.  
- If you use CalAmp PULS or over the air provisioning, verify whether those systems will overwrite manual SMS settings before applying changes.

## Why Use Plaspy with This Configuration

Pointing an LMU-600 to Plaspy gives organizations a straightforward path to receive location and event data from deployed vehicles using shared Plaspy server settings. This configuration helps fleets, rental companies, and insurers get consistent visibility and allows Plaspy to interpret messages from the device protocol automatically.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration details, firmware behavior, and official command references verify the manufacturer documentation at http://www.calamp.com/
