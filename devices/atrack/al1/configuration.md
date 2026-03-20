---
slug: /atrack/al1/configuration
id: al1-configuration
sidebar_label: Configuration
title: ATrack - AL1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the ATrack AL1 showing Plaspy server settings and practical setup steps for integration
keywords:
  - ATrack AL1 configuration
  - ATrack AL1 setup
  - AL1 Plaspy configuration
  - AL1 server configuration
  - ATrack GPS tracker setup
  - AL1 tracking software configuration
  - Plaspy tracker integration
  - vehicle tracker configuration
  - AL1 GPRS configuration
  - real time tracking setup
---

# ATrack - AL1 Configuration

This page covers the public configuration context for using the ATrack AL1 tracker with Plaspy. It focuses on the practical server settings and commands required to point the AL1 at Plaspy and validate the connection using public information. Use this guide to prepare the device for integration and to understand how Plaspy receives data from the tracker.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocols, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation method, and vendor tools. Review the commands and workflow below, then confirm device-specific details with ATrack documentation or the installer tool you use.

## Configuration Overview

This configuration prepares the AL1 to report location and event data to Plaspy over GPRS. The main goal is to configure the AL1 to use the Plaspy endpoint, enable the desired reporting behavior, and confirm the device is visible in the Plaspy platform.

- Configure the AL1 to use the Plaspy server endpoint and port for data transmission.
- Enable event reporting such as ACC events and periodic tracking intervals to ensure timely updates.
- Set the AL1 to the appropriate data format (binary mode as shown) so Plaspy can parse the incoming packets.
- Validate connectivity by checking device status and confirming the device appears in Plaspy.
- Apply and save changes with the device manufacturer tool or SMS commands, then restart the tracker if required.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP may be used on port 8888 depending on device preference  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and installed ATrack AL1 with a working SIM card and GPRS connectivity enabled.
- Access to the manufacturer configuration method or software that supports sending AT$ commands or equivalent configuration actions.
- Valid APN credentials for the mobile operator to allow GPRS data (APN username and password if required).
- Basic familiarity with sending configuration commands by SMS, serial tool, or the ATrack web/desktop utility depending on the device toolchain.
- A way to view device responses or status queries to confirm settings were applied.

## How This Tracker Connects to Plaspy

The AL1 is configured to send GPS and event data over GPRS to the shared Plaspy server endpoint and port so Plaspy can ingest and display the information. Plaspy receives the packets and automatically detects the tracker protocol to interpret messages from the AL1.

- The tracker sends periodic location reports based on the configured tracking interval to the Plaspy endpoint.
- Event-based messages such as ACC on/off are sent to Plaspy when triggered.
- The device uses the configured GPRS APN and credentials to establish a data session before sending packets.
- Plaspy listens on port 8888 and will accept connections or datagrams via UDP or TCP from the device.
- Once data arrives at Plaspy, the platform parses the protocol automatically and makes the tracker visible in the platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the AL1 (SMS commands, serial/USB tool, or ATrack configuration utility).
2. Enter the Plaspy server endpoint by using either the domain d.plaspy.com or the IP 54.85.159.138 in the device GPRS or server settings.
3. Set the device port to 8888, which is the shared port Plaspy uses for all devices.
4. Choose transport UDP or TCP if the device requires a transport selection for GPRS reporting.
5. Configure reporting behavior such as ACC event reporting and tracking intervals per your monitoring needs.
6. Apply or save the configuration and restart the device if the device or tool requires a reboot to apply settings.
7. Validate that the device reports to Plaspy and appears in the platform, and use a device status command to confirm configuration if available.

## Example Configuration Commands

The following public commands are taken from available AL1 configuration examples. Preserve the order as shown when applying these commands. Placeholders such as [apn], [apnu], and [apnp] should be replaced with your mobile operator APN, APN username, and APN password.

- Set ACC (input) event reporting and actions
```bash
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set time based tracking interval to 60 seconds
```bash
AT$TRAC=1,60,,,,,2
```

- Set the device to binary data format required by the platform
```bash
AT$FORM=1,@P,0,""
```

- Configure GPRS server pointing to Plaspy
```bash
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Explanation: the AT$GPRS command includes APN, APN user, APN password, Plaspy server IP 54.85.159.138, port 8888, and additional device parameters. Replace [apn], [apnu], and [apnp] with your operator credentials.

- Check device status and configuration
```bash
AT$INFO=?
```

Note on placeholders: [apn] = mobile data APN, [apnu] = APN username, [apnp] = APN password. Keep these placeholders intact until replaced with your actual credentials.

## Configuration Notes

- Firmware differences and hardware revisions may change exact command syntax or available parameters; always confirm with current ATrack documentation.
- You can choose UDP or TCP for transport on port 8888; some network environments or firmware versions may prefer one over the other.
- The AL1 supports configuration by SMS, GPRS commands, or manufacturer tools depending on the firmware and installer workflow; use the method recommended by ATrack for your device.
- Plaspy uses the same port 8888 for all devices and automatically detects the incoming tracker protocol, so server-side configuration is consistent across models.
- After applying changes, a device restart or power cycle is often required for new GPRS and reporting settings to take effect.

## Why Use Plaspy with This Configuration

Using the ATrack AL1 with Plaspy provides a straightforward path to real-time vehicle visibility, event monitoring, and centralized fleet oversight. By pointing the AL1 to Plaspy's shared server and port and enabling reporting events and intervals, organizations can consolidate location and status data into one platform for tracking, alerts, and operations management.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer setup details verify the latest information on the ATrack website https://www.atrack.com.tw/ which may be updated over time.
