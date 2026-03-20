---
slug: /noran/nr100/configuration
id: nr100-configuration
sidebar_label: Configuration
title: Noran - NR100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the Noran NR100 OBD tracker to Plaspy with server settings and SMS commands
keywords:
  - Noran NR100 configuration
  - Noran NR100 setup
  - NR100 server configuration
  - NR100 Plaspy setup
  - Plaspy GPS tracker configuration
  - OBD II tracker setup
  - vehicle tracking configuration
  - GPS tracker SMS commands
  - fleet management tracker setup
  - NR100 connectivity guide
---

# Noran - NR100 Configuration

This page covers the public configuration context for using the Noran NR100 OBD GPS tracker with the Plaspy platform. It explains the shared Plaspy server settings you will apply to the device, the SMS based commands commonly used to provision NR100 units, and the practical steps required to bring an NR100 online for real time tracking and event reporting in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The NR100 supports SMS and Internet reporting, and the example SMS commands shown here reflect public configuration options that are commonly used to set APN, server, and GPRS mode on the NR100.

## Configuration Overview

This configuration process prepares the NR100 to communicate with Plaspy by setting the device APN, pointing the tracker to the Plaspy server endpoint and enabling GPRS reporting. The goal is to ensure the unit can establish a data connection and begin sending telemetry and alert messages that Plaspy can ingest and display.

- Set the mobile operator APN so the NR100 can use cellular data.
- Configure the GPRS server to point the tracker to Plaspy using the shared server settings.
- Switch the device to GPRS or Internet reporting mode so it will use data rather than SMS for regular telemetry.
- Verify the device identity and current settings with the NR100 status command so you can confirm connection details.
- Validate the device appears in Plaspy and is reporting location and event data.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP; choose the transport the device requires when prompted  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered NR100 device installed in the vehicle OBD II port or otherwise powered and ready for configuration.  
- An active SIM card with data enabled and the correct APN for the mobile operator.  
- Access to a phone capable of sending SMS to the device for SMS based provisioning, or the official Noran configuration tool if available.  
- Knowledge of the device password if it has been changed from the factory default. The public sample uses 000000 as the default password.  
- The NR100 should have adequate GSM signal in the installation location to establish a GPRS connection.  
- Access to manufacturer documentation or vendor support for device specific details and firmware notes.

## How This Tracker Connects to Plaspy

The NR100 is configured to report location and event data to the shared Plaspy server endpoint and port so that Plaspy can ingest telemetry, visualize trips, and trigger alerts. Plaspy’s automatic protocol detection removes the need to choose a protocol string when the device is supported, but you must point the device to the Plaspy server address and port.

- The tracker sends periodic location updates and device events over cellular data (GPRS) to the Plaspy server.  
- Event alerts such as overspeed, power cut, and geo fence breaches are transmitted to Plaspy for immediate handling.  
- The device is configured to use the shared Plaspy server endpoint and port so that all supported devices report consistently.  
- Plaspy automatically detects the tracker protocol so the platform can decode the incoming messages without per device protocol selection.  
- Regular connectivity checks allow fleet managers to confirm telemetry and status in Plaspy.

## Common Configuration Workflow

1. Access the official Noran configuration method or SMS based setup procedure as documented by the manufacturer or vendor.  
2. Configure the device APN for the installed SIM by sending the APN command or entering it in the vendor tool.  
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the server field.  
4. Set the server port to 8888.  
5. If the NR100 requires a transport selection, choose UDP or TCP according to device options.  
6. Apply or save the configuration and, if required by the device, restart the tracker to activate new network settings.  
7. Validate that the device reports to Plaspy and appears in the platform, confirming location updates and event messages.

## Example Configuration Commands

The NR100 supports SMS based provisioning with commands sent from a mobile phone. The public sample commands below use the factory default password 000000. Replace 000000 with your current device password if it has been changed. Preserve placeholders and optional parameters where shown.

1. Set the operator APN  
   - Use this command to set the APN for your SIM. {{apn}} is required. {{apnu}} and {{apnp}} are optional username and password placeholders for APNs that require authentication.
```text
A000000,012,{{apn}},{{apnu}},{{apnp}}
```
   - If no APN username or password is needed, send:
```text
A000000,012,{{apn}}
```

2. Set the GPRS server to Plaspy by IP and port  
```text
A000000,010,54.85.159.138,8888
```
   - You may alternatively enter the Plaspy domain in vendor tools where domain names are accepted as server values.

3. Switch the device to GPRS mode  
```text
A000000,011,1
```

4. Check current device settings and status  
```text
A000000,004
```
   - The status response typically includes the device Id (first word beginning with NR), APN, server, port, GPRS status, GPRS connection status, and GSM signal level.

Notes on the commands above:
- The sample commands use the default device password 000000 embedded as shown. If your device password is different, replace 000000 with the actual password.
- Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} as placeholders when preparing commands; replace them with your operator APN and optional credentials.
- The order of commands matters for initial setup: set APN, set server, then enable GPRS.

## Configuration Notes

- SMS based configuration is supported and commonly used for NR100 provisioning, but vendor tools or configuration software may also be available. Use the method recommended for your deployment.  
- Firmware versions and hardware revisions can change command formats and behavior. Verify commands with the official Noran documentation for your specific firmware.  
- Choose UDP or TCP according to device firmware options; Plaspy accepts either transport and uses automatic protocol detection on intake.  
- All devices in Plaspy use the same port for server communication so you only need to configure port 8888 for supported devices.  
- Keep a record of the device password used for configuration and replace the default password from factory settings when operational security requires it.

## Why Use Plaspy with This Configuration

Using the NR100 with Plaspy provides centralized visibility and management for fleets that require fast deployment and discreet OBD II installation. Pointing the NR100 to the Plaspy server and enabling GPRS reporting lets Plaspy ingest location and event data for real time tracking, historical playback, and alerting workflows that help manage theft risk, route efficiency, and driver behavior.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and manufacturer details on the official Noran website http://www.norantracker.com/ since vendor instructions and firmware capabilities can change over time.
