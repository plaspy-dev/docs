---
slug: /atrack/ax11/configuration
id: ax11-configuration
sidebar_label: Configuration
title: ATrack - AX11 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure ATrack AX11 for use with Plaspy using shared server settings and example device commands
keywords:
  - ATrack AX11 configuration
  - AX11 Plaspy setup
  - ATrack AX11 server settings
  - AX11 GPS tracker configuration
  - ATrack AX11 integration
  - AX11 telematics setup
  - AX11 OBDII tracker configuration
  - Plaspy tracker configuration
  - vehicle tracker AX11 setup
  - AX11 GPRS configuration
---

# ATrack - AX11 Configuration

This page documents the public configuration context for using the ATrack AX11 tracker with the Plaspy platform. It explains the shared Plaspy server settings you will point the device to, shows example AT style commands provided by the manufacturer, and describes the practical steps to validate connectivity and visibility on Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The command examples below are extracted from public AX11 configuration guidance and should be used alongside the official ATrack documentation.

## Configuration Overview

The goal of configuration is to prepare the AX11 to communicate reliably with Plaspy so the device reports location and vehicle telemetry to the platform. This typically involves setting the device reporting mode, time interval, ACC or ignition events, and the GPRS server endpoint and APN credentials.

- Configure the device data mode and reporting format so Plaspy can parse incoming packets.
- Set the tracking interval and event triggers so the device sends updates at the desired cadence.
- Point the device GPRS settings to the Plaspy server endpoint and use the correct APN placeholders.
- Enable ACC or ignition reporting so vehicle on off events are visible in Plaspy.
- Validate device status and connectivity using the device status command before verifying platform visibility.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration and hostname entry.
- Server IP 54.85.159.138 as the direct numeric endpoint if required by the device.
- Port 8888 which is the single port Plaspy uses for all devices.
- Transport support for UDP or TCP depending on device firmware and installer preference.
- Plaspy automatically detects the tracker protocol when the device connects to the server.

## Typical Requirements Before Setup

- Physical access to the vehicle OBDII port for device installation and verification.
- A powered AX11 device with an active SIM and cellular data enabled for GPRS or LTE connectivity.
- Access to the ATrack configuration interface or command channel used for your device variant such as ADM, SMS, or USB.
- The carrier APN, username, and password for the SIM card to populate [apn], [apnu], and [apnp] placeholders.
- A terminal or configuration tool capable of sending AT style commands or using the manufacturer software to apply settings.
- The ability to restart the device after applying configuration if required by firmware.

## How This Tracker Connects to Plaspy

The AX11 sends GNSS fixes, vehicle-bus telemetry and event messages over its cellular link to the shared Plaspy endpoint and port. Plaspy receives those packets, identifies the device protocol automatically, and ingests the data for mapping, alerts and reports.

- The device is configured to report to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138.
- Communications use port 8888 and may be sent over either UDP or TCP based on device settings.
- Event reporting, such as ACC on off, can trigger immediate messages to Plaspy when configured.
- Plaspy detects the tracker protocol automatically so the same port works across supported devices.
- After successful connection, GNSS and telemetry appear in the Plaspy platform for monitoring and historical analysis.

## Common Configuration Workflow

1. Access the official ATrack configuration method or tool for the AX11 (ADM, SMS, USB, or vendor software).
2. Enter the Plaspy server address using d.plaspy.com or the numeric endpoint 54.85.159.138 as required.
3. Set the server port to 8888.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure APN settings and any required credentials using your carrier values for [apn], [apnu], and [apnp].
6. Apply or save the configuration on the device and restart the device if the procedure requires a reboot.
7. Validate that the device reports to Plaspy by checking device status locally and confirming data arrival on Plaspy.

## Example Configuration Commands

The following public AX11 commands are presented in the same order as provided in the manufacturer's sample configuration. Use your official ATrack command channel or configuration tool to send these commands. Preserve and replace placeholders for APN, APN username, and APN password as needed.

- Set ACC event handling and reporting rules
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

- Set the device to binary format mode for reporting
```text
AT$FORM=1,@P,0,""
```

- Configure the GPRS server including APN placeholders and the Plaspy server IP and port
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```

Notes on placeholders
- [apn] is the carrier Access Point Name required by the SIM.
- [apnu] is the APN username when the carrier requires authentication.
- [apnp] is the APN password when required.

- Check device status and configuration
```text
AT$INFO=?
```

## Configuration Notes

- Firmware differences and regional device variants can change the exact command syntax or available parameters. Always confirm with ATrack documentation for your device firmware revision.
- Choose TCP or UDP according to installer preference and network reliability. Plaspy accepts both and will detect the tracker protocol automatically once packets arrive on port 8888.
- When using numeric IP instead of d.plaspy.com, be sure to use the Plaspy server IP 54.85.159.138 only as provided.
- Use the official ATrack configuration channels such as ADM, SMS, or USB for persistent changes and for FOTA when available.
- If your device supports SMS or ADM for configuration, those methods may provide a simpler way to send the AT style commands remotely.

## Why Use Plaspy with This Configuration

Configuring the AX11 to report to Plaspy gives fleets and operators consistent real time visibility into vehicle location and telemetry using the shared Plaspy endpoint. The combination of OBDII installation, internal GNSS, and telematics forwarding provides a compact solution for live tracking, event alerts, and historical reporting on a single platform.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and hardware revisions verify details with ATrack on their official site https://www.atrack.com.tw/.
