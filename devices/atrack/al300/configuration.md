---
slug: /atrack/al300/configuration
id: al300-configuration
sidebar_label: Configuration
title: ATrack - AL300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ATrack AL300 GPS tracker with Plaspy server settings and example AT commands
keywords:
  - ATrack AL300 configuration
  - ATrack AL300 setup
  - AL300 Plaspy configuration
  - AL300 server configuration
  - AL300 GPS tracker setup
  - ATrack GPS configuration
  - AL300 telematics setup
  - Plaspy tracker configuration
  - vehicle tracking AL300
  - AL300 firmware configuration
---

# ATrack - AL300 Configuration

This page provides the public configuration context for using the ATrack AL300 GPS tracker with Plaspy. It focuses on the practical server settings, required prerequisites, and example AT-style commands that are commonly used to point the device at Plaspy. The material here is intended for technical integrators, fleet administrators, and installers who need clear, platform-focused setup guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device connects. Exact manufacturer-side setup steps can vary by firmware release, hardware revision, installation type, and vendor tools, so use the examples here as a practical reference and confirm final steps with the device vendor documentation.

## Configuration Overview

The configuration process prepares the AL300 to communicate reliably with Plaspy and to report position and event data at the desired interval and format. The key goal is to configure network access, the reporting format, and server endpoint so Plaspy can ingest telemetry automatically.

- Point the AL300 to the Plaspy server endpoint and port so the device can open a GPRS session and send reports.
- Configure reporting mode and interval so location and event messages are sent at the required frequency.
- Set input and event reporting rules (for example ignition or ACC events) to ensure Plaspy receives relevant alerts.
- Validate connectivity and device status from the tracker using the vendor verification command.
- Confirm the device appears in Plaspy dashboards after configuration and reporting begins.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (the AL300 may be configured to use either)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered AL300 device with access to the manufacturer's configuration interface or tool.  
- A valid cellular SIM card with a data plan and correct APN credentials for the target mobile network.  
- Access to the device configuration method supported by the AL300 (for example AT command console, vendor software, or SMS configuration where supported).  
- Knowledge of APN credentials and any username or password required by the mobile operator (placeholders are used in the example commands).  
- A test vehicle or bench power supply and a safe place to restart the device during configuration and validation.  
- Access to Plaspy account or administrative contact so you can confirm the device appears and reports correctly after setup.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AL300 opens a cellular data session and sends location and event packets to the shared Plaspy endpoint and port. Plaspy receives those packets, detects the protocol automatically, and maps the incoming telemetry into the platform for monitoring and alerts.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or the IP address 54.85.159.138 on port 8888.  
- Transport can be set to UDP or TCP on the device depending on installer preference or network behavior.  
- Device events such as ACC/ignition, time-based tracking, and motion events are transmitted to Plaspy for alerting and historical reporting.  
- Plaspy auto-detects the device protocol so you generally do not need to specify a custom protocol mapping in the platform.  
- After configuration and a restart if required, the device should appear in Plaspy and begin sending regular updates.

## Common Configuration Workflow

1. Access the official ATrack configuration method or software provided by the manufacturer (for example an AT command console, vendor configuration tool, or supported SMS commands).  
2. Enter the Plaspy server endpoint: either domain d.plaspy.com or the IP address 54.85.159.138 depending on your configuration preference.  
3. Set the server port to 8888. Plaspy uses this same port for all supported devices.  
4. If the AL300 requires transport selection, choose UDP or TCP according to network and installation needs.  
5. Apply or save the configuration and, if necessary, restart the device to activate the new settings.  
6. Validate the device reports to Plaspy by checking the device status command on the tracker and confirming the device appears in Plaspy dashboards.  
7. If the device is not visible, review APN settings, network registration, and any firewall or carrier restrictions that could block outbound connections to the Plaspy endpoint.

## Example Configuration Commands

The AL300 supports AT-style configuration commands. The example sequence below follows the public commands provided by the manufacturer to set input events, reporting intervals, message format, and the GPRS server. Preserve the order when applying these commands.

- Set ACC (ignition) event reporting and actions:
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set tracking/report interval to 60 seconds:
```text
AT$TRAC=1,60,,,,,2
```

- Set binary (packed) message format:
```text
AT$FORM=1,@P,0,""
```

- Configure the GPRS server and APN settings (placeholders preserved):
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```

Notes on placeholders:
- {{apn}} is the mobile operator APN name.  
- {{apnu}} is the APN username if required by the carrier.  
- {{apnp}} is the APN password if required by the carrier.

- To check device status:
```text
AT$INFO=?
```

These commands are provided as public examples. The exact command transport and entry method may vary (direct serial, USB, configuration tool, or SMS) depending on the AL300 firmware and vendor tools.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available parameters; confirm exact command support for your device firmware version.  
- Choose UDP or TCP based on network reliability and operator behavior; UDP is commonly used for low-overhead reporting while TCP can provide delivery confirmation.  
- The example GPRS command uses the Plaspy server IP 54.85.159.138 and port 8888; you may also use the domain d.plaspy.com where the device supports domain names.  
- Keep APN credentials secure and verify they are correct for the SIM's mobile operator.  
- Use the device verification command (AT$INFO=? in the example) to confirm registration and GPRS session state before expecting data in Plaspy.

## Why Use Plaspy with This Configuration

Using the ATrack AL300 with Plaspy provides a straightforward path to real-time visibility, event alerts, and historical reporting across fleets and assets. The shared Plaspy server settings and automatic protocol detection simplify integration so devices from different vendors can be onboarded with consistent server parameters and predictable behavior.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device-specific configuration methods, firmware behavior, and manufacturer details at the official ATrack site https://www.atrack.com.tw/. Manufacturer specifications and setup procedures can change over time, so always confirm current documentation with the device vendor.
