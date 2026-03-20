---
slug: /atrack/as11/configuration
id: as11-configuration
sidebar_label: Configuration
title: ATrack - AS11 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ATrack AS11 integration with Plaspy including server settings example AT commands and practical setup steps
keywords:
  - ATrack AS11 configuration
  - ATrack AS11 setup
  - AS11 Plaspy configuration
  - ATrack GPS tracker setup
  - AS11 server configuration
  - asset tracker setup guide
  - fleet tracking configuration AS11
  - AS11 AT commands
  - Plaspy tracker integration
  - AS11 connectivity setup
---

# ATrack - AS11 Configuration

This page documents the public configuration context for using the ATrack AS11 tracker with Plaspy. It focuses on the practical settings and workflow required so the AS11 can report GNSS fixes, I/O events, and telemetry into Plaspy using the platform's shared server endpoint. Example AT commands from the device model configuration are included as a reference for installers and integrators.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the server endpoint and port follow the same pattern for all device types. Manufacturer-side steps and tools can vary by firmware revision, hardware variant, installation type, or vendor configuration utilities; consult the official ATrack documentation for device specific controls and the manufacturer configuration toolset.

## Configuration Overview

The objective of configuration is to prepare the AS11 to reliably send location and telemetry to Plaspy, validate connectivity, and confirm the device appears in the platform. For the AS11 this commonly involves setting the reporting mode, applying the GPRS server or IP and port, choosing transport (UDP or TCP), and enabling event reporting for inputs and alarms.

- Configure the device to use the Plaspy endpoint so telemetry is routed to the platform.
- Set reporting intervals and event reporting rules to match your monitoring needs.
- Verify APN and GPRS parameters so cellular data sessions can be established.
- Choose transport mode UDP or TCP and confirm the device communicates on Plaspy port 8888.
- Validate the tracker is visible in Plaspy and that events such as ACC or input changes are reported.

## Plaspy Server Settings

Set the device to report to the following Plaspy values. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used depending on device preference
- Plaspy automatically detects the tracker protocol to interpret incoming messages

## Typical Requirements Before Setup

- A charged AS11 unit with battery or external power applied and accessible for configuration.
- Active SIM card with a data plan and the correct APN credentials for the cellular operator.
- Access to the ATrack configuration method for your device variant such as ADM, RS232 serial, or SMS/AT command channel as supported by the device firmware.
- The device identifier or serial number available to match the physical unit with your Plaspy account entries if you manage devices in the platform.
- A terminal or configuration tool capable of sending AT commands or importing device configuration scripts.
- Network visibility to allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AS11 sends GNSS fixes, input events, and telemetry to the shared Plaspy server endpoint on port 8888. Plaspy reads the incoming data stream and maps protocol fields automatically so the device becomes visible in the platform without per-device server changes.

- The tracker is pointed at d.plaspy.com or the Plaspy server IP and uses port 8888 for uploads.
- Transport can be UDP or TCP depending on installer preference and device firmware options.
- Event reporting such as ACC or digital input changes is enabled via device configuration to generate immediate reports to Plaspy.
- Queued messages and logged data are uploaded to Plaspy when connectivity is available.
- Plaspy automatically detects the protocol used by the AS11 and parses incoming telemetry for display and alerts.

## Common Configuration Workflow

1. Access the official ATrack configuration method for your AS11 unit (ADM tool, RS232 serial console, SMS AT channel, or manufacturer configuration software).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server settings.
3. Set the device port to 8888 which is the shared port Plaspy uses for all devices.
4. Choose UDP or TCP if the AS11 requires a transport selection for GPRS reporting.
5. Configure APN and other GPRS parameters so the device can establish a cellular data session.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to activate settings.
7. Validate connectivity and confirm the device is reporting to Plaspy by checking the platform for incoming telemetry and by using device verification commands if available.

## Example Configuration Commands

The model configuration includes public AT command examples used to set event reporting, interval, message format, and the GPRS server. Preserve placeholders where indicated:

- ACC event and input reporting setup
- Tracking interval set to 60 seconds
- Binary reporting format
- GPRS server configuration including APN placeholders and Plaspy server IP and port
- Status check command

Commands in order as provided by the device model configuration:

1. Configure ACC event reporting and input actions
``` 
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Set time interval to 60 seconds
``` 
AT$TRAC=1,60,,,,,2
```

3. Set binary message format
``` 
AT$FORM=1,@P,0,""
```

4. Set the GPRS server and APN parameters for Plaspy
``` 
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
- [apn] is the carrier APN string required to establish GPRS data.
- [apnu] is the APN username placeholder when the carrier requires authentication.
- [apnp] is the APN password placeholder when the carrier requires authentication.

5. Check device status
``` 
AT$INFO=?
```

Note: Keep the commands in the same order if applying as a single configuration script. If your deployment uses d.plaspy.com instead of the numeric IP, you may replace the IP with d.plaspy.com in the GPRS command if the device resolves DNS for the server name.

## Configuration Notes

- Different firmware revisions or hardware variants of the AS11 may use slightly different AT syntax or additional parameters; consult the device release notes before applying commands.
- If the device supports both UDP and TCP, choose the transport that aligns with your network environment and carrier behavior; UDP is commonly used for low overhead while TCP provides session reliability.
- Preserve APN placeholders [apn], [apnu], and [apnp] when documenting scripts; replace them with the carrier values during configuration.
- Some installers prefer the server domain d.plaspy.com for maintainability while others use the numeric IP 54.85.159.138 to avoid DNS dependency; both are valid for Plaspy.
- If configuration can be performed by SMS or remote management, verify that commands are accepted by the current firmware before wide deployment.

## Why Use Plaspy with This Configuration

Using the AS11 with Plaspy provides a straightforward path to deliver rugged asset tracking and telemetry into a single platform. The AS11's queued logging, configurable inputs, and cellular connectivity make it well suited to remote assets and long-duration installations where Plaspy can aggregate location, event, and sensor data for monitoring, alerts, and operational reporting.

Learn more about Plaspy and how it supports multi device deployments at https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer details always verify current information on the ATrack website https://www.atrack.com.tw/.
