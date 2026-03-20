---
slug: /thinkrace/vt400/configuration
id: vt400-configuration
sidebar_label: Configuration
title: ThinkRace - VT400 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for ThinkRace VT400 to connect with Plaspy using shared server settings and sample SMS commands
keywords:
  - ThinkRace VT400 configuration
  - ThinkRace VT400 setup
  - VT400 server configuration
  - VT400 Plaspy integration
  - VT400 GPS tracker
  - ThinkRace OBD tracker setup
  - vehicle tracking configuration
  - GPS tracker server settings
  - Plaspy tracker configuration
  - fleet tracking VT400
---

# ThinkRace - VT400 Configuration

This page covers the public configuration context for using the ThinkRace VT400 tracker with Plaspy. It explains the shared Plaspy server settings and practical setup guidance based on publicly available commands and manufacturer style configuration examples. Use this page to understand the connection and the common steps needed to make your VT400 report into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you do not typically need to select a protocol inside the platform. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The example SMS commands shown on this page reflect publicly available configuration examples and should be verified against the device firmware version and ThinkRace documentation.

## Configuration Overview

The goal of configuring a VT400 for Plaspy is to point the tracker at the Plaspy server, ensure the device can reach the network, and confirm the device appears in the Plaspy platform. The following bullets summarize practical aims for the configuration process.

- Configure the device to use Plaspy server settings so location and events are sent to Plaspy.
- Set the correct APN and cellular parameters so the tracker has usable data connectivity.
- Validate transport and port settings so the tracker can open sessions to Plaspy.
- Confirm the device is visible in Plaspy and reporting expected GPS and status updates.
- Use manufacturer recommended tools or SMS commands to apply and verify settings.

## Plaspy Server Settings

When configuring the VT400 to report to Plaspy, use the public Plaspy server settings below. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (used by Plaspy for all devices)  
- Transport support: UDP or TCP (the device may be configured to use either transport)  
- Plaspy automatically detects the tracker protocol so manual protocol selection inside Plaspy is not required

## Typical Requirements Before Setup

- Confirm the VT400 is properly installed in the vehicle OBD II port and powered on.  
- An active cellular SIM with data enabled and the correct APN for your mobile operator.  
- Access to the ThinkRace configuration method you plan to use (SMS commands or manufacturer tool).  
- The device password if required by the device for SMS configuration (the manufacturer sample default is shown in public commands).  
- A way to receive or view device responses (device SMS reply or configuration tool feedback) for verification.  
- Administrative access to your Plaspy account or the person who will add and validate the device in Plaspy.

## How This Tracker Connects to Plaspy

The VT400 sends location and device status to the Plaspy server endpoint and port so the platform can display real time positions, history, and alerts. The general connection flow and reporting behavior are summarized below.

- The tracker establishes a GPRS or cellular data connection using the configured APN and operator settings.  
- It opens a connection to d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP as configured on the device.  
- The VT400 transmits position and event packets to the Plaspy server; Plaspy automatically detects the protocol used by the device.  
- Plaspy ingests the incoming data so the device becomes visible in the platform for live tracking, history playback, and alerting.  
- Regular heartbeats and event messages enable operational monitoring and troubleshooting from the Plaspy interface.

## Common Configuration Workflow

Follow these practical steps to configure a VT400 to report to Plaspy. Adapt steps to your installation method and firmware.

1. Access the official ThinkRace configuration method for your VT400, for example SMS commands or the maker supplied configuration tool.  
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP address 54.85.159.138 as allowed by the device.  
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP transport on the device if the tracker requires a transport selection.  
5. Configure APN and any required SIM credentials so the device can open a data session.  
6. Apply or save the configuration and restart the device if the device requires a reboot to apply changes.  
7. Validate that the VT400 reports to Plaspy by checking that the device appears in the platform and sends position updates.

## Example Configuration Commands

The ThinkRace VT400 can be configured using SMS commands in many installations. The following public sample commands are provided as a clean reference from manufacturer style examples. They preserve the default sample device password and placeholders.

- Note: The sample setup uses the device password 888888 in the example commands below. Keep this in mind and replace with your device password if it differs.

1) Set the operator APN (APN username and password are optional). Replace the placeholders with your operator values.

```
(Set,888888,apn,[apn])
```

Or if your operator requires APN username and password:

```
(Set,888888,apn,[apn],[apnu],[apnp])
```

- [apn] = your mobile operator APN  
- [apnu] = optional APN username if required by the operator  
- [apnp] = optional APN password if required by the operator

2) Set the GPRS server to point at Plaspy (use the domain or IP as preferred by the device).

```
(Set,888888,server,54.85.159.138,8888)
```

Alternatively, many devices accept the domain name form. If the tracker accepts domain names, you can set:

```
(Set,888888,server,d.plaspy.com,8888)
```

- Replace 888888 with the device password if your unit uses a different password.  
- Send these commands as SMS to the device phone number or through the manufacturer configuration channel as appropriate.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS command syntax or available options; always check the device firmware notes.  
- The example above shows SMS based configuration which is commonly supported by ThinkRace devices; some vendors also provide PC tools or web portals that accomplish the same settings.  
- Choose UDP or TCP according to installer preference and device capabilities; Plaspy accepts either transport on port 8888.  
- All devices in Plaspy use the same port so you do not need to use a device-specific Plaspy port.  
- If the device requires a restart to apply server or APN settings, perform the restart and then validate reports in Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the ThinkRace VT400 provides a straightforward way to centralize vehicle location, trip history, and event notifications. Pointing the VT400 at the shared Plaspy server and confirming the APN and server settings enables the device to transmit data into the platform where operators can monitor activity and review historical routes.

To learn more about Plaspy and the platform capabilities visit https://www.plaspy.com. For the latest device specific setup instructions, firmware changes, and detailed ThinkRace documentation verify the manufacturer details at https://www.thinkrace.com/ as vendor specifications and setup methods can change over time.
