---
slug: /topfly/cyberlabelx_100/configuration
id: cyberlabelx_100-configuration
sidebar_label: Configuration
title: TopFly - CyberLabelX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure TopFly CyberLabelX 100 for Plaspy with server settings and example SMS commands
keywords:
  - TopFly CyberLabelX 100 configuration
  - CyberLabelX 100 setup
  - CyberLabelX 100 Plaspy
  - CyberLabelX 100 server configuration
  - CyberLabelX 100 GPS tracker
  - parcel tracker configuration
  - asset tracker setup
  - Plaspy server settings
  - SMS configuration commands
  - GPS tracker integration
---

# TopFly - CyberLabelX 100 Configuration

This page documents the public configuration context for using the TopFly CyberLabelX 100 with the Plaspy platform. It collects the practical server settings and example commands that are commonly used to prepare the device to report to Plaspy, making it easier to get visibility into parcel and high value shipment tracking using this compact asset tracker.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools; the CyberLabelX 100 supports SMS and standard network configuration methods and the example SMS commands below reflect common public configuration patterns.

## Configuration Overview

The configuration process prepares the CyberLabelX 100 to transmit GNSS location fixes, sensor telemetry, and alarm events to Plaspy. It ensures the device has the correct network credentials, points to the Plaspy server, and uses an appropriate reporting interval so the platform receives timely data.

- Set device network parameters such as APN and GPRS server so the tracker can access mobile data and report to Plaspy.
- Configure the device reporting interval and timezone so location points are sent at the intended frequency.
- Point the tracker to the Plaspy server endpoint so data arrives in your Plaspy account.
- Validate connectivity and confirm buffered logs upload correctly when coverage resumes.
- Use the manufacturer supported configuration channel such as SMS or the official configuration tool to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP (device may be configured to use either)  
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged CyberLabelX 100 with an active Nano SIM installed and a mobile data plan enabled for GPRS data.  
- Ability to send SMS to the device for SMS based configuration, or access to TopFly configuration software via USB if preferred.  
- The device default password 0000 for SMS configuration as shown in public examples (confirm on your device documentation).  
- Correct APN settings and any APN username or password required by your mobile operator.  
- Basic GNSS fix verification location or time to allow the device to acquire satellite signals before testing.  
- Access to the Plaspy account or platform to confirm the device is reporting after configuration.

## How This Tracker Connects to Plaspy

When configured, the CyberLabelX 100 sends location and telemetry packets to the shared Plaspy server endpoint and port so the device becomes visible within the Plaspy platform for real time monitoring and historical playback.

- The device reports GNSS fixes and environmental telemetry to d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be configured as UDP or TCP; Plaspy supports both and automatically detects the protocol used.  
- Buffered logging allows stored points to be uploaded when coverage returns, preserving continuity for shipments.  
- Alarm and sensor events such as tamper, motion, and temperature alerts are delivered to Plaspy for immediate notification.  
- Regular update intervals ensure consistent visibility according to the configured TIMER value.

## Common Configuration Workflow

1. Access the official TopFly configuration method for your CyberLabelX 100, for example SMS commands or the manufacturer configuration tool.  
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138 in the server field.  
3. Set the server port to 8888 which is the Plaspy port used for all devices.  
4. Choose the transport protocol UDP or TCP if the device requires an explicit selection.  
5. Configure APN and network credentials required by your mobile operator.  
6. Apply or save the configuration and restart the device if the procedure requires a reboot.  
7. Validate that the device reports to Plaspy and that location and sensor telemetry appear in your Plaspy account.

## Example Configuration Commands

The CyberLabelX 100 can be configured by sending SMS messages. The public example commands below use the device default password 0000. Preserve placeholders like {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator values when sending commands.

- Set the time zone to UTC 0
```text
GMT,0000,0#
```

- Set the operator APN (replace placeholders with your APN, APN username, and APN password)
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: {{apn}} is the APN name provided by your mobile operator. {{apnu}} is the APN username if required. {{apnp}} is the APN password if required.

- Set the GPRS server to Plaspy using the public server IP and port
```text
IP,0000,54.85.159.138 8888#
```
Note: You may alternatively use the domain d.plaspy.com if the device accepts domain names instead of an IP address.

- Set the reporting interval to 60 seconds (example)
```text
TIMER,0000,60:60:0:0#
```
Explanation: This sample sets the device upload and movement timers to a 60 second reporting interval. Adjust according to your operational needs.

These commands are public examples. Order typically matters: set APN, then server, then timers, then restart if required.

## Configuration Notes

- Firmware and tool differences can change exact SMS command syntax or required parameters; always check the device firmware notes.  
- If the device supports both domain names and IP addresses, using d.plaspy.com can be easier to manage long term, while the IP 54.85.159.138 is provided as a direct endpoint.  
- Choose TCP or UDP based on network reliability and your operational preferences; Plaspy supports both and will detect the protocol automatically.  
- SMS based configuration is useful when the device has no data connection, while GPRS based configuration requires a working APN and data connectivity.  
- The device default SMS password shown in public examples is 0000; confirm and change default credentials where supported for operational security.

## Why Use Plaspy with This Configuration

Configuring the CyberLabelX 100 to report to Plaspy gives logistics and asset managers real time location visibility, event alerts, and historical playback inside a single platform. The device's buffered logging and configurable reporting intervals make it suitable for parcel level tracking where continuity and discrete mounting are important.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration details, firmware behavior, and manufacturer instructions verify the official TopFly documentation at https://www.topflytech.com/ as manufacturer specifications and setup methods can change over time.
