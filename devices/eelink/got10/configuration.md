---
slug: /eelink/got10/configuration
id: got10-configuration
sidebar_label: Configuration
title: EElink - GOT10 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GOT10 to connect to Plaspy with practical server settings and SMS commands
keywords:
  - EElink GOT10 configuration
  - EElink GOT10 setup
  - EElink GOT10 Plaspy
  - GOT10 configuration
  - GOT10 server settings
  - GOT10 SMS configuration
  - GOT10 APN setup
  - Plaspy tracker configuration
  - Plaspy GPS tracker
  - OBD tracker configuration
---

# EElink - GOT10 Configuration

This page covers the public configuration context for using the EElink GOT10 with Plaspy. It focuses on the practical server settings and manufacturer supplied commands commonly used to point the device to Plaspy, and explains what you should prepare before integrating the GOT10 into your Plaspy fleet.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GOT10 combines OBD II plug and CAN BUS telemetry, and the manufacturer provides an SMS based command set that can be used to configure reporting to Plaspy.

## Configuration Overview

The configuration process prepares the GOT10 to communicate reliably with Plaspy and ensures the device reports location and diagnostic telemetry to the platform. For GOT10 this typically uses SMS commands to set APN and the GPRS server address and port so the device can stream data to Plaspy.

- Configure the device network APN so GPRS connectivity is available for reporting.
- Point the device to Plaspy server domain or IP and the required port so telemetry is routed correctly.
- Choose the transport method if the device requires selection between UDP and TCP.
- Set reporting intervals and any timezone or operational timers relevant to your fleet.
- Validate the configuration with a parameter query and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will automatically detect the protocol used by the tracker.

## Typical Requirements Before Setup

- A valid SIM installed in the GOT10 with data enabled and the correct operator APN.
- Access to the GOT10 configuration method supported by the device for your unit, commonly SMS based commands as provided by the manufacturer.
- Power or vehicle connection through the OBD II port and a stable vehicle battery state during configuration.
- The APN values for your mobile operator ready to insert into the APN command placeholder.
- A way to receive and confirm device responses such as SMS reply messages or Plaspy console visibility to verify reporting.

## How This Tracker Connects to Plaspy

The GOT10 is configured to report its telemetry and diagnostics to the shared Plaspy server endpoint and port so fleet managers can view location and CAN BUS data in the Plaspy platform. Configuration usually instructs the device to open a GPRS data session and stream telemetry to Plaspy over the selected transport.

- The device uses the operator APN to establish GPRS connectivity and then opens a data connection to d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry and diagnostic frames are sent over UDP or TCP depending on the selected transport.
- Plaspy receives the incoming data on the shared port 8888 and automatically detects the device protocol.
- Once reporting is active, position, OBD diagnostics, and configured telemetry are visible within Plaspy for live and historical review.
- Periodic timers control how frequently the GOT10 sends updates to Plaspy, configurable via commands.

## Common Configuration Workflow

1. Obtain the official manufacturer configuration method or software for the GOT10 and confirm the SMS command syntax supported by your firmware.
2. Insert a data enabled SIM card and ensure the operator APN details are available.
3. Send or enter the server address either as d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Select UDP or TCP transport if the device requires a transport selection for reporting.
5. Configure reporting timers and timezone settings as needed for your fleet.
6. Apply or save the configuration on the device and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking for data arriving on the shared Plaspy server and confirming the device appears in your Plaspy dashboard.

## Example Configuration Commands

The GOT10 supports configuration by SMS. The manufacturer provides the following public commands. Send each command as an SMS to the device number. Preserve placeholders when applying the APN command.

- Optional initial reset to factory defaults (use only when needed or on initial provisioning)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your operator APN. If your provider uses APN username or password include [apnu] and [apnp] when required
```text
APN,[apn][apnu][apnp]#
```
Note: The manufacturer syntax may append username and password fields as comma separated values. Keep the placeholders [apnu] and [apnp] if required by the operator.

- Set the GPRS server to Plaspy by domain using UDP or TCP on port 8888
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy by IP using UDP or TCP on port 8888
```text
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to every 60 seconds
```text
TIMER,60#
```

- Verify current parameter settings
```text
PARAM#
```

Send these commands in the shown order when order matters, for example APN before SERVER if the device needs network connectivity established first. The factory reset command is optional and should be used only when preparing a device for fresh provisioning or troubleshooting.

## Configuration Notes

- The GOT10 configuration examples above use SMS commands as published by the manufacturer; some installers may prefer configuration tools or USB methods if provided by the vendor.
- Device behavior and exact SMS syntax can differ between firmware versions and hardware revisions; confirm the syntax with the device documentation before sending commands.
- Choose UDP or TCP transport on the device according to your network preferences; Plaspy accepts either but the device must be pointed at port 8888.
- Plaspy uses a single shared port for all devices and performs automatic protocol detection so you only need to set the correct server and port on the device.
- When using SMS for configuration, retain a way to receive the device replies to confirm successful application of each command.

## Why Use Plaspy with This Configuration

Using the GOT10 with Plaspy combines vehicle diagnostics and location into a single view, helping fleets monitor vehicle health and position without additional wiring. Pointing the device to the Plaspy server and port enables continuous streaming of CAN BUS and OBD telemetry alongside GPS data so operations teams can make faster, data driven decisions.

Learn more about Plaspy on the main website https://www.plaspy.com. Manufacturer specifications and configuration methods can change over time so verify the latest GOT10 setup details and command syntax on the manufacturer website https://www.eelink.com.cn/.
