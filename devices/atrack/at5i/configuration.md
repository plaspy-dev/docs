---
slug: /atrack/at5i/configuration
id: at5i-configuration
sidebar_label: Configuration
title: ATrack - AT5i Configuration
sidebar_class_name: menu_item_tracker
description: Configure the ATrack AT5i for use with Plaspy with server settings commands and a practical setup workflow
keywords:
  - ATrack AT5i configuration
  - AT5i setup for Plaspy
  - ATrack server configuration
  - AT5i GPS tracker setup
  - AT5i GPRS configuration
  - Plaspy tracker configuration
  - vehicle tracking AT5i
  - AT5i ACC event setup
  - AT5i binary mode
  - AT5i APN settings
---

# ATrack - AT5i Configuration

This page documents the public configuration context for using the ATrack AT5i with Plaspy. It collects the practical server settings, workflow steps, and example commands that are publicly available for preparing an AT5i to report to the Plaspy platform. Use this guide together with the manufacturer documentation to complete a reliable installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The example commands shown here are those published for the AT5i and are included to illustrate a typical configuration flow for GPRS reporting to Plaspy.

## Configuration Overview

The goal of configuring an AT5i for Plaspy is to prepare the device to establish a GPRS connection and report location and event data to the Plaspy server endpoint so the device becomes visible and manageable from the Plaspy platform.

- Set the device GPRS server and APN to allow mobile data connectivity to Plaspy.
- Configure reporting mode and interval so the device transmits location updates as required.
- Enable event reporting such as ACC or input events to surface alerts in Plaspy.
- Select the transport protocol (UDP or TCP) and ensure the device points to the Plaspy server and port.
- Validate connectivity and confirm the device is reporting correctly to the Plaspy platform.

## Plaspy Server Settings

- Server domain d.plaspy.com for use where a DNS name is accepted
- Server IP 54.85.159.138 when using a direct IP address
- Port 8888 as the Plaspy listening port
- Transport support for UDP or TCP depending on device and network preferences
- Plaspy automatically detects the tracker protocol so the correct protocol handler is selected
- All devices in Plaspy use the same port so use port 8888 for any supported tracker

## Typical Requirements Before Setup

- A charged and powered AT5i unit with physical access for configuration
- An active SIM card with mobile data enabled and the correct APN credentials
- Access to the official ATrack configuration method or software for your AT5i firmware
- Knowledge of APN settings including APN name and optional username and password
- A way to apply and save settings to the device and to reboot it if required

## How This Tracker Connects to Plaspy

The AT5i is configured to open a GPRS connection and send its data to the Plaspy server endpoint and port so that Plaspy can ingest location updates and events for monitoring and reporting.

- The device is pointed at the Plaspy server domain or IP and port 8888 for reporting
- Reporting can use UDP or TCP depending on the transport selected during configuration
- Plaspy automatically detects the tracker protocol when the device connects
- Device events such as ACC changes and periodic tracking intervals are sent to Plaspy
- Successful configuration makes the device visible and actionable within the Plaspy platform

## Common Configuration Workflow

1. Access the official ATrack configuration method or software for your AT5i model and firmware.
2. Enter the Plaspy server by specifying either d.plaspy.com or 54.85.159.138 as the server address.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Configure reporting settings such as tracking interval, event triggers, and data format per device capability.
6. Apply or save the configuration and reboot the device if required by the manufacturer tool.
7. Validate that the device successfully connects and reports to Plaspy and monitor initial messages in the platform.

## Example Configuration Commands

The following commands are the public AT style configuration steps provided for the AT5i. They are shown in the order the manufacturer example uses.

- Set ACC event triggers and related reports:
```
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set tracking interval to 60 seconds:
```
AT$TRAC=1,60,,,,,2
```

- Set device to binary mode (format specification):
```
AT$FORM=1,@P,0,""
```

- Configure the GPRS server including APN placeholders and Plaspy server IP and port
Note that placeholders [apn], [apnu], and [apnp] must be replaced with your SIM APN, APN username, and APN password respectively:
```
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```

- Check device status and configuration:
```
AT$INFO=?
```

Explanation of placeholders:
- [apn] is the mobile network APN name required for GPRS data access
- [apnu] is the APN username when required by the mobile operator
- [apnp] is the APN password when required by the mobile operator

These commands are the published example sequence for setting the reporting behavior and the GPRS endpoint to Plaspy. The device may alternatively accept configuration through the official ATrack tool or SMS commands depending on firmware and tooling.

## Configuration Notes

- Firmware and hardware revisions may change exact command parameters or available options; verify commands against your AT5i firmware release.
- Choose UDP or TCP based on network reliability and operator NAT behavior; both transports are supported and Plaspy will detect the protocol automatically.
- Ensure APN credentials are correct and the SIM has active data to establish a GPRS session to Plaspy.
- If using domain names instead of IP, use d.plaspy.com where supported by the device; otherwise use the Plaspy IP 54.85.159.138.
- After applying configuration, always validate via AT$INFO=? or with the official ATrack tool and confirm the device appears in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the AT5i to report to Plaspy provides a straightforward path to centralized visibility and operational monitoring for vehicles and assets. With Plaspy receiving location and event data from the AT5i, organizations can monitor movement, respond to incidents, and aggregate device telemetry for reporting and fleet management.

To learn more about Plaspy visit https://www.plaspy.com and review the latest ATrack device details at https://www.atrack.com.tw/ to confirm firmware specific commands and setup steps before deployment.
