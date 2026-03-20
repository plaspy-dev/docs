---
slug: /atrack/al100/configuration
id: al100-configuration
sidebar_label: Configuration
title: ATrack - AL100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the ATrack AL100 tracker to Plaspy with example AT commands and required server settings
keywords:
  - ATrack AL100 configuration
  - ATrack AL100 setup
  - AL100 Plaspy configuration
  - AL100 tracker setup
  - Plaspy server settings
  - GPS tracker configuration
  - e bike tracker setup
  - AL100 AT commands
  - fleet tracking configuration
  - vehicle telemetry integration
---

# ATrack - AL100 Configuration

This page covers the public configuration context for using the ATrack AL100 tracker with Plaspy. It explains the shared server settings Plaspy requires, shows the publicly available AT command examples published for the AL100, and outlines the practical steps to prepare the device for reporting to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use the information below alongside the AL100 manufacturer documentation and your installer tools to complete a safe, verified configuration.

## Configuration Overview

This configuration prepares the AL100 to establish a persistent reporting channel to Plaspy so location and telemetry appear in the Plaspy dashboard. The steps focus on setting the device reporting mode, the reporting interval, and the GPRS server target so the tracker sends its binary data stream to Plaspy.

- Configure the device reporting server and transport so the AL100 points to Plaspy.
- Set the reporting interval and event rules so relevant telemetry and alarms are delivered.
- Enable the binary reporting format used by Plaspy for efficient telemetry.
- Validate connectivity and device status with the manufacturer verification command.
- Confirm the device appears and streams data in Plaspy after configuration.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol once the device sends data to the listed server endpoint.

## Typical Requirements Before Setup

- A powered AL100 device with appropriate external antenna and installed SIM card provisioned for mobile data access.
- Access to the official ATrack configuration method for the AL100 (AT commands, manufacturer tool, or vendor configuration utility).
- The APN, APN username, and APN password for the SIM carrier to populate the GPRS command placeholders.
- A Plaspy account or platform access to confirm the device is visible after configuration.
- Basic serial, USB, or SMS access to send AT commands or use the manufacturer configuration app as documented by ATrack.
- Knowledge of the device firmware version and any vendor specific notes before changing configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AL100 opens a cell data session and sends location and telemetry to the Plaspy server endpoint. Plaspy receives the binary packets on the shared port and maps the incoming device data to the correct protocol automatically so the trackers are usable in the platform without per device protocol selection.

- The device is configured to report to the shared Plaspy server endpoint and port.
- Telemetry and event reports are sent over the selected transport, UDP or TCP, to port 8888.
- Plaspy automatically detects the tracker protocol and decodes the incoming binary stream.
- Event rules such as ACC on/off and periodic position updates are used to trigger reports in the platform.
- Once the device is streaming, data becomes visible in Plaspy for live maps, alerts, and reporting.

## Common Configuration Workflow

1. Access the official ATrack configuration method or software for the AL100 (AT command interface, USB/serial tool, or vendor utility).
2. Enter the Plaspy server endpoint either as d.plaspy.com or as the IP 54.85.159.138 depending on the manufacturer tool.
3. Set the server port to 8888.
4. Choose the transport protocol if required by the device — select UDP or TCP based on your network and installer preference.
5. Apply the reporting format and interval settings so the device sends regular updates to Plaspy.
6. Save or apply the configuration and restart the device if the manufacturer workflow requires a reboot.
7. Validate the device reports to Plaspy by checking device visibility in the Plaspy platform and using the device verification command where available.

## Example Configuration Commands

The following AT command examples are the public commands provided for AL100 configuration. Preserve and replace the APN placeholders before applying them.

1. Set ACC event reporting and associated actions
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Set time interval to 60 seconds for tracking reports
```text
AT$TRAC=1,60,,,,,2
```

3. Set the device to binary reporting mode
```text
AT$FORM=1,@P,0,""
```

4. Configure the GPRS server and APN settings for Plaspy
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```

- {{apn}} is the carrier Access Point Name string required for mobile data.
- {{apnu}} is the APN username if the carrier requires one; leave blank if not required.
- {{apnp}} is the APN password if the carrier requires one; leave blank if not required.

5. Check device status and configuration
```text
AT$INFO=?
```

Follow the exact sequence where order matters: set event and report rules, set tracking interval, set format, then set the GPRS server. After applying these commands, verify connectivity and that the device streams data to Plaspy.

## Configuration Notes

- Firmware differences and regional hardware variants can change available AT commands or parameter meanings; always confirm against the installed firmware release notes.
- The AL100 example uses the GPRS command structure to register mobile data settings and target the Plaspy server IP 54.85.159.138 and port 8888; replace APN placeholders with your carrier values.
- Choose UDP or TCP based on your local network policy and installer preference; Plaspy accepts both transports on the shared port and will auto detect the protocol.
- Use the manufacturer tool or AT command channel recommended by ATrack for safe configuration and to avoid unintended setting changes.
- After applying settings, restart the device if required and confirm the device appears as online in Plaspy.

## Why Use Plaspy with This Configuration

Using the AL100 with Plaspy centralizes e‑bike telemetry and event reporting so fleet operators get unified visibility for location, battery health, motor parameters, and rider behavior. The shared Plaspy server configuration keeps device onboarding consistent across deployments, and automatic protocol detection reduces the need for manual protocol selection when devices first connect.

To learn more about Plaspy and how it can integrate AL100 telemetry into dashboards, alerts, and historical reports visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and technical documentation always verify details with the manufacturer at https://www.atrack.com.tw/ .
