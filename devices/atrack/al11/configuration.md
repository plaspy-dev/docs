---
slug: /atrack/al11/configuration
id: al11-configuration
sidebar_label: Configuration
title: ATrack - AL11 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the ATrack AL11 for use with Plaspy including required server settings commands and a practical setup workflow
keywords:
  - ATrack AL11 configuration
  - ATrack AL11 setup
  - AL11 Plaspy configuration
  - AL11 GPS tracker setup
  - ATrack AL11 server settings
  - ATrack AL11 commands
  - Plaspy device configuration
  - GPS tracker platform setup
  - vehicle tracking AL11
  - AL11 GPRS configuration
---

# ATrack - AL11 Configuration

This page documents the public configuration context for using the ATrack AL11 tracker with Plaspy. It focuses on the practical server settings and example commands that are commonly used to point the AL11 to Plaspy so the device can report location and event data into the platform. Use this guide to understand what to prepare before integration and where to look for manufacturer-specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, which simplifies pointing devices to the platform. Manufacturer-side setup steps for the AL11 can vary by firmware, hardware revision, installation type, and vendor tools; the example commands shown here are public example AT-style commands and should be compared to the AL11 user manual or ATrack configuration utility for your exact firmware and installation method.

## Configuration Overview

These steps prepare the AL11 to communicate with Plaspy and validate connectivity so the device becomes visible in the platform. The example commands included are public sample commands commonly used to configure ACC event reporting, a tracking interval, message format, and the GPRS server target for Plaspy.

- Configure input/event reporting so the AL11 sends ACC or ignition events to the server.
- Set a periodic tracking interval to control how often location updates are sent.
- Select message format (binary or text) that your integration requires.
- Point the device GPRS settings to the Plaspy server endpoint and port.
- Verify device status using the provided query command to confirm connectivity.

## Plaspy Server Settings

Set the device to report to Plaspy using these public server settings. Plaspy requires the same port for all devices and will detect the tracker protocol automatically.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Reliable power supply to the AL11 and any required wiring completed for the chosen installation.
- Active SIM card with data (GPRS/4G) and known APN values for the mobile operator.
- Access to the official ATrack configuration method or software for the AL11 (serial, USB, SMS, or vendor tool as applicable).
- Knowledge of device firmware version and hardware revision to match correct command syntax.
- A terminal or configuration tool capable of sending the device AT-style configuration commands used by the AL11.
- Network reachability so the device can access d.plaspy.com or 54.85.159.138 on port 8888 from its cellular connection.

## How This Tracker Connects to Plaspy

The AL11 can be configured to send periodic location updates and event notifications to the central Plaspy server endpoint and port. Plaspy receives those messages and maps them automatically because the platform detects the tracker protocol for you.

- The device reports to the shared Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- Messages can be sent over UDP or TCP depending on device transport setting.
- Configure ACC or input events so state changes are reported to Plaspy.
- Set a tracking interval to control regular position uploads to the server.
- Use the device format command to switch to binary or the preferred payload format before pointing to Plaspy.

## Common Configuration Workflow

1. Access the official ATrack AL11 configuration method or vendor software appropriate for your device and firmware.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose the transport protocol (UDP or TCP) if the AL11 requires explicit transport selection.
5. Configure event reporting, tracking interval, and message format as required by your deployment.
6. Apply or save the configuration on the device and restart it if the procedure requires a reboot.
7. Validate that the device reports to Plaspy by checking device status in the platform and using device-side status queries.

## Example Configuration Commands

The following public example commands are frequently used with the AL11 to configure inputs, reporting, tracking interval, message format, and the GPRS server target for Plaspy. Preserve the order when the sequence matters.

- Set ACC input reporting and related event reports and reactions
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set time interval to 60 seconds for periodic tracking
```text
AT$TRAC=1,60,,,,,2
```

- Set the device to binary message format
```text
AT$FORM=1,@P,0,""
```

- Configure GPRS server to Plaspy
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```
Explanation of placeholders:
- {{apn}} = carrier APN string
- {{apnu}} = APN username if required (leave empty if not required)
- {{apnp}} = APN password if required (leave empty if not required)

- Check device status (query)
```text
AT$INFO=?
```

Note: These commands are public examples. Use the appropriate ATrack configuration interface for your device and firmware. If your installer uses SMS or the ATrack configuration tool, the syntax will be equivalent to these AT-style settings; confirm exact command formatting against current ATrack documentation.

## Configuration Notes

- Firmware versions and hardware revisions may change command syntax or available features; confirm exact commands for your AL11 firmware.
- Choose UDP or TCP according to your network needs; Plaspy accepts both and automatically detects the protocol used.
- Ensure APN placeholders {{apn}}, {{apnu}}, and {{apnp}} are replaced with operator-specific values before applying the GPRS command.
- If you encounter connectivity issues, verify that the device can resolve d.plaspy.com or reach 54.85.159.138 on port 8888 from the SIM network.
- Always consult the ATrack manual or vendor tool for the AL11 when uncertain about sequence, required parameters, or device-specific reset actions.

## Why Use Plaspy with This Configuration

Configuring the ATrack AL11 to report to Plaspy provides a straightforward path to centralized visibility for mobile assets and vehicles. With the shared Plaspy server settings and automatic protocol detection, organizations can reduce per-device configuration variability and bring devices online faster for operational monitoring and event reporting.

To learn more about Plaspy and how it integrates with devices like the AL11 visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official commands from the manufacturer, verify current documentation at https://www.atrack.com.tw/ as manufacturer specifications and setup procedures can change over time.
