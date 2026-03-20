---
slug: /atrack/ak7/configuration
id: ak7-configuration
sidebar_label: Configuration
title: ATrack - AK7 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ATrack AK7 showing Plaspy server settings and example AT command setup for tracker connectivity
keywords:
  - ATrack AK7 configuration
  - ATrack AK7 setup
  - AK7 Plaspy integration
  - ATrack GPS tracker configuration
  - AK7 server configuration
  - AK7 tracking platform setup
  - vehicle tracker AK7 guide
  - AK7 telemetry configuration
  - GPS tracker configuration Plaspy
  - AK7 setup commands
---

# ATrack - AK7 Configuration

This page documents the public configuration context for using the ATrack AK7 tracker with Plaspy. It focuses on the Plaspy server settings and the practical steps needed to configure the AK7 so it can report location and events to Plaspy. Where available, example AT command lines from the device configuration flow are included to illustrate a common setup pattern.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by AK7 firmware, hardware revision, installation type, and vendor configuration tools. Use this guide as a practical starting point and verify device specific details with the manufacturer documentation when needed.

## Configuration Overview

Configuring an AK7 for Plaspy prepares the device to establish a stable data session and report events and location to the Plaspy platform. The public configuration steps typically set event triggers, a reporting interval, the message format, and the GPRS server details that point to Plaspy.

- Point the AK7 GPRS server settings to the Plaspy server so the device sends data to the correct endpoint.
- Configure event reporting such as ACC status so the device reports key vehicle events to Plaspy.
- Set a suitable tracking interval to balance report frequency and data usage.
- Use the device message format option recommended for binary or platform compatible payloads.
- Verify connectivity and device status after saving configuration so the tracker appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

These values are the public server settings to use when configuring the AK7 to report to Plaspy. Plaspy uses the same port for all supported devices and handles protocol detection automatically.

## Typical Requirements Before Setup

- Confirm device power and that the AK7 is installed or connected to a test bench with stable power.
- Have a working SIM card with data service inserted and know the APN credentials for the SIM operator.
- Access to the AK7 manufacturer configuration method such as the official configuration tool, serial console, or SMS command interface as provided by ATrack.
- Basic familiarity with AT style commands or the vendor software used to send configuration commands to the AK7.
- Ensure you have the necessary credentials and access to Plaspy to validate device reporting after configuration.

## How This Tracker Connects to Plaspy

The AK7 is configured to open a packet data session and send its tracking and event reports to the shared Plaspy server endpoint and port. Plaspy receives those messages and automatically identifies the tracker protocol so the device becomes visible and usable in the platform.

- The device sends periodic tracking messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be selected as UDP or TCP depending on installer preference or firmware support.
- Event triggers such as ACC change are reported to Plaspy as configured on the device.
- Plaspy processes the incoming messages and maps them to the appropriate device record using automatic protocol detection.
- After successful configuration, device location and events become available for monitoring and reporting in Plaspy.

## Common Configuration Workflow

1. Access the official ATrack configuration method or software for the AK7 (serial console, vendor tool, or SMS based commands).
2. Enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138 in the device GPRS/server settings.
3. Set the server port to 8888.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Apply or save the configuration on the AK7 and confirm the device accepts the changes.
6. Restart or power cycle the device if the firmware requires a reboot to apply network settings.
7. Validate that the AK7 reports to Plaspy by checking device status in the Plaspy platform and using the device status command if available.

## Example Configuration Commands

Below are the public AT style commands extracted from the AK7 model configuration guidance. Preserve the placeholder values and replace them with your SIM operator APN settings where required.

- Configure ACC event reporting and associated actions
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```
Explanation: These commands set an input event (ACC) and create two reports for input on and off states with an action mapping. Use the manufacturer tool or SMS method appropriate for your device to send these commands.

- Set tracking interval to 60 seconds
```text
AT$TRAC=1,60,,,,,2
```
Explanation: This sets the time based tracking interval to 60 seconds. Adjust as needed for reporting frequency and data usage.

- Set message format to binary mode
```text
AT$FORM=1,@P,0,""
```
Explanation: This command switches the output format. Use the format recommended by your integration flow; Plaspy can accept data in the device supported format and will detect protocol automatically.

- Configure the GPRS server to Plaspy
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```
Explanation: Set the GPRS profile with your APN values. Replace placeholders as follows:
- {{apn}} is the mobile data APN for your SIM operator.
- {{apnu}} is the APN username if required by the operator.
- {{apnp}} is the APN password if required by the operator.
This command points the AK7 to the Plaspy server IP 54.85.159.138 on port 8888. Plaspy also accepts d.plaspy.com and supports UDP or TCP transport; the platform will auto detect the protocol used.

- Check device status
```text
AT$INFO=?
```
Explanation: Query the device status to verify current configuration and connectivity state.

## Configuration Notes

- Firmware differences can change available commands and parameter ordering. Always confirm command syntax against the AK7 firmware release notes or ATrack documentation.
- Choose UDP or TCP based on installation needs; both transports are supported by Plaspy on port 8888 and protocol detection is automatic.
- Preserve and correctly set APN placeholders {{apn}}, {{apnu}}, and {{apnp}} when configuring GPRS for mobile networks.
- If you use SMS or the vendor configuration tool instead of direct AT commands, map the same GPRS and reporting parameters into the tool fields.
- After applying settings, allow time for the device to attach to the cellular network and establish a data session before validating connectivity in Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the AK7 provides a straightforward path to capture vehicle location and event data in a centralized fleet management platform. Configuring the AK7 to report to Plaspy’s shared server ensures consistent ingestion of tracking messages and simplifies device onboarding because Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and installation guidance always verify details on the official ATrack website https://www.atrack.com.tw/ since manufacturer specifications and setup methods can change over time.
