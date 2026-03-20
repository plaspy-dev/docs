---
slug: /atrack/as300/configuration
id: as300-configuration
sidebar_label: Configuration
title: ATrack - AS300 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the ATrack AS300 for use with Plaspy including server settings commands and setup workflow
keywords:
  - ATrack AS300 configuration
  - AS300 setup Plaspy
  - AS300 server configuration
  - ATrack AS300 GPS tracker
  - AS300 GPRS setup
  - AS300 TCP UDP configuration
  - Plaspy device configuration
  - asset tracker configuration
  - AS300 APN settings
  - ATrack AS300 commands
---

# ATrack - AS300 Configuration

This page covers the public configuration context for using the ATrack AS300 Compact Asset Tracker with the Plaspy platform. It focuses on the practical, manufacturer-facing steps and public commands needed to point the device at Plaspy servers and verify basic reporting behavior so the device becomes visible and manageable within Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Where available, this page includes public command examples and the common configuration workflow for the AS300 while encouraging review of the official manufacturer documentation.

## Configuration Overview

Configuring the AS300 for Plaspy prepares the device to send position, telemetry, and event data to the Plaspy ingestion endpoint so the device appears in your account and starts reporting useful signals. The AS300 modelConfiguration provides commonly used device commands to set event reporting, reporting intervals, binary output format, and the GPRS server configuration that points the device at Plaspy.

- Configure the device to report motion, tamper, and digital input events so Plaspy can generate alerts and history.
- Set a reporting interval appropriate for your use case to balance latency and battery life.
- Configure network settings including APN and the Plaspy server endpoint so the AS300 can establish a GPRS connection.
- Validate the device is using the Plaspy server and receiving acknowledgements so it becomes visible in the platform.
- Verify binary or protocol format expected by Plaspy and confirm that the tracker sends data over UDP or TCP as required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These shared settings are used by Plaspy for all supported devices and should be entered on the AS300 during configuration where the device requests a server host and port.

## Typical Requirements Before Setup

- Ensure the AS300 device is powered and has sufficient battery or a connected charger for configuration work.
- Have access to the official ATrack configuration method recommended for your firmware, such as serial, USB, SMS, or manufacturer software.
- A valid cellular service profile with APN credentials for the SIM or eSIM installed in the device.
- Knowledge of whether your installation requires UDP or TCP transport selection for data reporting.
- Administrative access to Plaspy account or fleet management to verify the device appears once reporting starts.
- A basic test plan for validating reports and event triggers after applying configuration.

## How This Tracker Connects to Plaspy

The AS300 is configured to send GNSS fixes, sensor telemetry, and event-driven reports to the shared Plaspy server endpoint and port. Once the tracker establishes a GPRS connection using the configured APN and server settings, it will deliver binary or protocol-formatted packets to Plaspy over the selected transport.

- Device GPRS settings point to d.plaspy.com or 54.85.159.138 on port 8888 so data is routed to Plaspy.
- The AS300 can use UDP or TCP to transmit data; Plaspy accepts both and detects the device protocol automatically.
- Event reporting commands enable the AS300 to push ACC, motion, tamper, and input state changes to Plaspy for alerts.
- Reporting intervals control how frequently the AS300 sends position and telemetry updates to the Plaspy server.
- Verification commands can be used to check device status before and after pointing to the Plaspy server.

## Common Configuration Workflow

1. Access the official ATrack configuration method or software recommended for your AS300 firmware.
2. Enter the Plaspy server host as d.plaspy.com or the IP 54.85.159.138 where the device asks for server settings.
3. Set the device port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection; both are supported by Plaspy.
5. Configure APN and any required authentication details for cellular connectivity using your carrier credentials.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply network changes.
7. Validate that the AS300 reports to Plaspy by checking device status and confirming packet reception in the Plaspy platform.

If your AS300 modelConfiguration includes specific commands (below), apply them in sequence as part of this workflow using the official configuration channel.

## Example Configuration Commands

The following public commands are provided in the AS300 modelConfiguration and can be used with the device command interface supported by ATrack. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your carrier APN, username, and password where required.

- Set ACC event behavior and event reporting rules
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set time based tracking interval to 60 seconds
```text
AT$TRAC=1,60,,,,,2
```

- Set the device to binary format mode
```text
AT$FORM=1,@P,0,""
```

- Configure GPRS server and APN settings to point to Plaspy
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```
Note: {{apn}} is the carrier APN, {{apnu}} is the APN username (if required), and {{apnp}} is the APN password (if required). Replace placeholders with your operator credentials.

- Check device status
```text
AT$INFO=?
```

Execute these commands using the manufacturer-recommended interface or tool for your device firmware. The order matters when enabling events, tracking mode, data format, and GPRS server settings.

## Configuration Notes

- Firmware and hardware revisions can change supported command syntax and available parameters; always confirm the exact command format for your device firmware.
- Choose UDP or TCP based on your installation needs; Plaspy accepts both and will detect the protocol automatically, but retransmission and firewall considerations may affect your choice.
- Use the APN placeholders only with valid carrier credentials. If the operator requires no username or password, leave those fields empty or as the vendor specifies.
- Some installers prefer to test connectivity with the server IP 54.85.159.138 first and then switch to the domain d.plaspy.com once DNS is confirmed working in the device environment.
- If you use SMS or manufacturer software to push commands, verify that the transport method is supported by your specific AS300 firmware revision.

## Why Use Plaspy with This Configuration

Using the AS300 with Plaspy provides a straightforward path to asset visibility, motion and tamper alerts, and telemetry aggregation for logistics and rental workflows. By configuring the device to report to the shared Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888 and selecting the appropriate transport and reporting interval, organizations can balance real-time visibility with battery life and data efficiency.

Learn more about Plaspy and how it ingests device telemetry at https://www.plaspy.com. For the most current AS300 device specific setup instructions, firmware notes, and command references please verify details at the ATrack website https://www.atrack.com.tw/ as manufacturer methods and firmware behavior can change over time.
