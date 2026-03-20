---
slug: /coban/bn_303g/configuration
id: bn_303g-configuration
sidebar_label: Configuration
title: Coban - BN-303G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN-303G with Plaspy including server settings and SMS commands for quick setup
keywords:
  - Coban BN-303G
  - BN-303G configuration
  - Coban tracker setup
  - Plaspy configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - BN-303G server configuration
  - BN-303G SMS commands
  - fleet tracking integration
  - GPS telematics setup
---

# Coban - BN-303G Configuration

This page documents the public configuration context for using the Coban BN-303G tracker with Plaspy. It summarizes the server settings that Plaspy requires, explains the typical setup workflow, and presents the publicly available SMS configuration commands included by the manufacturer for device-side setup. Use this page to prepare the device and to apply the common, public steps required to make the BN-303G report to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for incoming connections, but exact manufacturer-side steps can vary by BN-303G firmware, hardware revision, installation type, and vendor tools. The BN-303G supports TCP, UDP and SMS configuration paths; this guide highlights SMS commands supplied in the public device documentation and explains where to place Plaspy server values.

## Configuration Overview

The configuration process makes the BN-303G able to communicate reliably with Plaspy and ensures the device reports location and alarm events to the platform. On the device side this typically means applying APN and GPRS settings, pointing the device to Plaspy’s server endpoint, selecting the transport mode, and verifying reports arrive in the Plaspy platform.

- Configure APN credentials so the tracker can use mobile data for GPRS reporting.
- Point the device to Plaspy using the shared server endpoint and the platform port.
- Select UDP or TCP transport on the BN-303G if required by the device firmware.
- Validate the device is visible in Plaspy and that location and event messages are received.
- Optionally enable additional reporting features such as fuel sensor status or protocol enhancements via SMS commands.

## Plaspy Server Settings

- Use server domain d.plaspy.com as the primary server endpoint for device configuration.
- Server IP address (alternative to domain) 54.85.159.138 may be used where required by device tools.
- Port 8888 is the platform port used for all devices in Plaspy.
- The BN-303G may be configured to use UDP or TCP transport on port 8888.
- Plaspy automatically detects the tracker protocol for incoming device connections so devices can report using standard protocols without per-device protocol selection in the platform.

## Typical Requirements Before Setup

- An active SIM card with mobile data enabled and correct APN information from the mobile operator.
- Access to the BN-303G configuration method the installer prefers (SMS commands as shown below or manufacturer software).
- The device connected to vehicle power or charged so settings are preserved during configuration.
- Knowledge of the device password; BN-303G public documentation shows a factory/default password of 123456 in example SMS commands.
- Access to Plaspy account details and the ability to verify device messages are appearing on the platform after configuration.
- A phone capable of sending SMS to the tracker if using SMS-based setup.

## How This Tracker Connects to Plaspy

When configured, the BN-303G sends location and event messages to the shared Plaspy server endpoint and port so fleet managers can view live position, alarms, and basic telemetry in a unified platform. Plaspy ingests the device telemetry and automatically detects the tracker protocol to interpret messages and display them in the platform.

- The tracker reports to d.plaspy.com or the IP address 54.85.159.138 using port 8888.
- The device can use GPRS over TCP or UDP to push periodic location updates to Plaspy.
- SMS remains an available method for remote commands and verification where supported by the device.
- Events such as SOS, door alarms, movement, and ignition state are sent to the platform for alerting and history.
- Plaspy processes incoming messages and maps them to the correct device record using the device protocol that is detected automatically.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software; for the BN-303G the manufacturer provides SMS command configuration and vendor tools.
2. Ensure the device has a working SIM with the operator APN and that you have the APN values (APN, username, password) ready.
3. Enter the Plaspy server domain d.plaspy.com or, where a numeric address is required, 54.85.159.138 into the device server settings.
4. Set the port to 8888 (Plaspy uses the same port for all supported devices).
5. Choose UDP or TCP transport on the device if the tracker requires explicit transport selection.
6. Apply or save the configuration and restart the device if the firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by confirming the device appears and sends position updates and events in the Plaspy dashboard.

## Example Configuration Commands

The BN-303G public documentation provides SMS commands for basic setup. The example commands below use the device password 123456 as shown in the public guidance. Replace {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator APN, APN username, and APN password respectively.

- Optional initial factory reset (use only if you need to return the device to factory defaults):
```
begin123456
```

- Set the time zone to UTC+0:
```
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your operator APN):
```
apn123456 {{apn}}
```

- Set the APN username and password (replace {{apnu}} and {{apnp}} with APN credentials or leave blank if not required):
```
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to Plaspy using the numeric IP and port (this command points the device to Plaspy):
```
adminip123456 54.85.159.138 8888
```

- Set an update interval (example command from public docs; keep the exact format as required by your firmware):
```
fix060s060s***n123456
```

- Switch the tracker to GPRS mode and set transport if required (examples shown in public commands; choose the correct variant for your firmware):
```
gprs123456,1,1
```
or
```
gprs123456
```

- Check current settings on the device (verification command):
```
check123456
```

- Enable extended protocol reporting (example for enabling fuel sensor or improved digital sensor reporting):
```
protocol123456 18
```

Notes on placeholders and password:
- {{apn}} is the mobile operator APN string required for GPRS data.
- {{apnu}} is the APN username if your operator requires one; use an empty value if not required.
- {{apnp}} is the APN password if required by your operator.
- The example SMS commands use the password 123456 as shown in the public manufacturer examples. If your device has a different password or it has been changed, use that password instead.

## Configuration Notes

- SMS-based configuration is documented in the public BN-303G materials; verify SMS command syntax against your device firmware version before sending commands.
- Some firmware revisions may require slightly different command formats or argument ordering; consult the manufacturer documentation if a command is not accepted.
- When choosing between TCP and UDP, consider network behavior and carrier NAT; both transports are supported by the BN-303G and Plaspy supports either on the shared port.
- Always verify APN credentials with the mobile operator; incorrect APN settings are a common reason a device cannot report to the server.
- Change the default device password if you use SMS configuration in the field and your deployment requires greater security, and record the new password in your installation notes.

## Why Use Plaspy with This Configuration

Using the BN-303G with Plaspy provides a straightforward path to real-time vehicle visibility, alarm reporting, and basic telemetry without complex per-device server configuration. Because Plaspy uses a shared server endpoint and port and automatically detects the tracker protocol, installers can focus on applying the device APN and server settings and validating connectivity rather than managing unique backend endpoints for each device.

Learn more about Plaspy and available platform features on the main website https://www.plaspy.com. For device specific command syntax, firmware details, and the latest installation guidance verify current information on the manufacturer site https://www.coban.net/ because manufacturer specifications and setup methods can change over time.
