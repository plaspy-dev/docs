---
slug: /concox/wetrack_lite/configuration
id: wetrack_lite-configuration
sidebar_label: Configuration
title: Concox - Wetrack Lite Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox Wetrack Lite showing Plaspy server settings SMS commands and validation steps
keywords:
  - Concox Wetrack Lite configuration
  - Concox Wetrack Lite setup
  - Wetrack Lite Plaspy
  - Wetrack Lite GPS tracker configuration
  - Concox tracker server settings
  - Wetrack Lite APN configuration
  - fleet tracking setup Wetrack Lite
  - Wetrack Lite SMS commands
  - vehicle tracker configuration Plaspy
  - Wetrack Lite GPRS server settings
---

# Concox - Wetrack Lite Configuration

This page provides the public configuration context for using the Concox Wetrack Lite tracker with Plaspy. It focuses on the practical server and device settings required to route the tracker to Plaspy, along with the example SMS commands published by the manufacturer for GPRS and server setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools, so use the commands and workflow below as a practical baseline and consult the official Concox documentation for device specific differences.

## Configuration Overview

Preparing a Wetrack Lite for Plaspy integration means configuring the device to send its GNSS and event packets to Plaspy over the cellular network, verifying connectivity, and confirming the tracker appears in the Plaspy platform. The model's public SMS command set provides a straightforward way to apply these settings on devices that accept SMS configuration.

- Configure GPRS APN so the device has cellular data access for reporting to Plaspy.
- Set the Plaspy server address or IP and the shared port used by all devices in Plaspy.
- Choose UDP or TCP transport on the tracker where required and enable GPRS reporting.
- Set a periodic reporting interval to control update frequency and buffer behavior.
- Verify the tracker parameters and confirm the device is visible in Plaspy after setup.

## Plaspy Server Settings

- Server domain d.plaspy.com for the Plaspy endpoint
- Server IP 54.85.159.138 as an alternative endpoint option
- Port 8888 which Plaspy uses for all supported devices
- Transport support for UDP or TCP depending on device selection
- Plaspy automatically detects the tracker protocol so the platform can accept different tracker packet formats

## Typical Requirements Before Setup

- A powered Wetrack Lite with an active micro SIM card and a data plan that allows GPRS connections
- Access to the device SMS command interface or the official Concox configuration tool provided by the vendor
- The correct APN information from your mobile operator to populate the APN placeholders
- A working method to send and receive SMS to the tracker from an administrator phone number
- A Plaspy account or a prepared Plaspy tenant to confirm the device reports after configuration

## How This Tracker Connects to Plaspy

Wetrack Lite sends GNSS derived locations and event packets over the cellular network to Plaspy using the configured GPRS server settings. Once the device is directed to the Plaspy endpoint and has network access, Plaspy ingests the data, normalizes telemetry, and provides mapping and alerting visibility.

- The tracker reports to the shared Plaspy server endpoint either by domain d.plaspy.com or by IP 54.85.159.138
- All devices use the same port 8888 so the tracker must be set to use port 8888
- Transport can be configured as UDP or TCP on the device depending on the tracker option
- Plaspy automatically detects the incoming tracker protocol so no manual protocol selection is required in the platform
- Plaspy will display location updates and event alerts once the tracker successfully connects

## Common Configuration Workflow

1. Access the official Concox configuration method for Wetrack Lite such as SMS commands or a vendor provisioning tool.
2. Enter d.plaspy.com or alternatively 54.85.159.138 as the GPRS server destination on the tracker.
3. Set port 8888 on the device; note that Plaspy uses this same port for all supported devices.
4. Choose UDP or TCP transport on the tracker if the device requires a transport selection.
5. Set the APN for your mobile operator and enable GPRS mode so the device can send data.
6. Apply or save the configuration and restart the device if required by the tracker firmware.
7. Validate that the device reports to Plaspy by checking the Plaspy platform for live updates and by using the tracker verification command if available.

## Example Configuration Commands

The Wetrack Lite supports SMS based configuration. Below are the public SMS commands published for the device. Send each command as a single SMS from an authorized phone number. Keep the order when performing an initial setup.

- Optional factory reset (use only when needed at initial provisioning)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
Note: Replace [apn] with your operator APN. If required, include [apnu] and [apnp] for APN username and APN password.
```text
APN,[apn]# 
```
or, where username and password are needed:
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy by domain (recommended)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to Plaspy by IP address (alternative)
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the periodic update interval to every 60 seconds
```text
TIMER,60#
```
or an alternate timer form
```text
TIMER,60,60#
```

- Enable GPRS reporting mode
```text
GPRSON,1#
```

- Check current GPRS and server parameters
```text
GPRSSET#
```

These commands are the public, manufacturer supplied SMS commands for Wetrack Lite. Maintain the placeholders for APN fields and confirm the exact SMS syntax with the device firmware version if commands fail.

## Configuration Notes

- SMS based configuration is shown here because it is the public method published for Wetrack Lite; other firmware or provisioning tools may offer USB or web based setup.
- Firmware revisions and hardware variants can change command syntax or parameter behavior; if a command does not respond, verify the device firmware and consult Concox documentation.
- Choose UDP or TCP on the tracker per your network requirements; Plaspy will accept either and will detect the tracker protocol automatically.
- Always confirm the operator APN, username, and password with your mobile network operator before setting APN placeholders.
- Plaspy uses the same port 8888 for all supported devices, simplifying server configuration for mixed fleets.

## Why Use Plaspy with This Configuration

Using Wetrack Lite with Plaspy provides a compact, discreet tracking solution that feeds real time location and event data into a single platform. This configuration enables fleet operators and rental managers to receive movement alerts, ignition status, and buffered trip history in Plaspy for operational monitoring and recovery workflows.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current manufacturer specific commands, firmware notes, and device documentation verify details at https://www.iconcox.com/.
