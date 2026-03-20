---
slug: /wanway/gs300/configuration
id: gs300-configuration
sidebar_label: Configuration
title: WanWay - GS300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for WanWay GS300 setup with Plaspy servers and SMS commands
keywords:
  - WanWay GS300 configuration
  - WanWay GS300 setup Plaspy
  - GS300 server configuration
  - GS300 SMS commands
  - WanWay GPS tracker configuration
  - GS300 GPRS setup
  - Plaspy tracker setup
  - GS300 tracking configuration
  - WanWay asset tracker
  - GPS platform setup
---

# WanWay - GS300 Configuration

This page covers the public configuration context for using the WanWay GS300 tracker with Plaspy. It collects the essential, publicly available setup information you need to point the device at Plaspy servers and validate basic connectivity. Where the GS300 supports SMS based configuration, the examples below show the common SMS commands the manufacturer publishes for GPRS setup and verification.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Use the server values listed here to configure the device for Plaspy and always confirm device specific details with WanWay documentation when available.

## Configuration Overview

Configuring the GS300 for Plaspy prepares the tracker to send its location and event stream to the Plaspy platform so you can monitor assets, receive alerts, and review historical traces. The typical process sets the carrier APN, configures the GPRS server address and port, enables GPRS reporting, and verifies the device is reporting.

- Set the carrier APN so the device can open a data session for GPRS reporting.
- Configure the device server entry to point to Plaspy using the published domain or IP and the common Plaspy port.
- Enable or switch the device to GPRS data mode so it sends telemetry to the configured server.
- Adjust reporting interval or heartbeat to match your monitoring needs and power profile.
- Verify configuration with the device's parameter or status query commands to confirm communication.
- Validate that the device appears and updates on Plaspy after configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged GS300 with an active SIM card and a data plan or SMS capability as required by the chosen configuration method.  
- Carrier APN details for the SIM card to enable GPRS data. Use placeholders such as {{apn}} where appropriate.  
- Access to the WanWay GS300 configuration method documented by the manufacturer (SMS or vendor tool).  
- A Plaspy account and the ability to confirm device visibility in your Plaspy instance.  
- Basic SMS capability from your phone or access to the vendor desktop tool if the device is configured by software.  
- The device must be powered and within network coverage during initial setup and verification.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GS300 opens a GPRS data session to the shared Plaspy server endpoint and sends location and event packets to the platform on port 8888. Plaspy receives the stream, detects the tracker protocol automatically, and makes the data available in the Plaspy dashboard for live monitoring and alerts.

- The device reports its position and event data to d.plaspy.com or to 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on device configuration settings; choose one during setup if required.  
- Plaspy automatically detects and interprets the tracker protocol when the device connects.  
- Regular heartbeat or timer messages maintain presence in Plaspy and allow platform reporting to stay current.  
- Verification commands or status queries can confirm the device has the correct server and is online.

## Common Configuration Workflow

1. Access the official WanWay GS300 configuration method or software as documented by WanWay. This may be SMS based commands or a vendor configuration tool.  
2. Enter the Plaspy server address by setting either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP if the device requires selecting a transport protocol. Plaspy accepts either on port 8888 and detects the protocol automatically.  
5. Configure the carrier APN using the provided APN command or tool settings so GPRS can start.  
6. Apply or save the configuration on the device and restart or toggle GPRS mode if the device requires a reboot to apply settings.  
7. Validate that the device reports to Plaspy by using the device verification commands (for example PARAM or STATUS) and confirm the device becomes visible and updates in Plaspy.

## Example Configuration Commands

The WanWay GS300 public configuration supports SMS commands. Send these commands via text message to the device number in the order indicated when using SMS based setup.

- Configure the carrier APN (replace {{apn}} and optional {{apnu}} and {{apnp}} with your carrier values):
```
APN,{{apn}}
```
or, if username and password are required:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- Set the GPRS server to Plaspy using the domain and port shown here:
```
SERVER,1,d.plaspy.com,8888,0#
```
- Set the periodic upload interval (example sets two timers to 60 seconds each):
```
TIMER,60,60#
```
- Switch the device to GPRS reporting mode:
```
GPRSON,1#
```
- Query device parameters to check the current configuration:
```
PARAM#
```
- Query device status for runtime and connectivity information:
```
STATUS#
```

Notes on placeholders and commands:
- {{apn}} is the carrier APN string required to open a data session.  
- {{apnu}} and {{apnp}} are optional APN username and password placeholders when your carrier requires authentication.  
- The SERVER command shown points to d.plaspy.com and port 8888, which are the public Plaspy server settings. Preserve the command order when you apply the sequence for initial setup.

## Configuration Notes

- Firmware and regional hardware revisions can change command syntax or supported parameters; always check the WanWay GS300 documentation for your device firmware version.  
- The device configuration examples here use SMS commands as published; if your installation uses the vendor tool or over the air provisioning, follow the vendor tool workflow instead.  
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so use port 8888 when pointing the GS300 to Plaspy.  
- Where the device allows TCP or UDP selection, choose the transport required by your deployment; Plaspy accepts both on port 8888.  
- Verify APN and data connectivity before expecting live updates in Plaspy; an incorrect APN will prevent GPRS sessions from forming.

## Why Use Plaspy with This Configuration

Using the WanWay GS300 with Plaspy provides a practical path to real time visibility, event reporting, and historical trace playback for assets and fleets. Configuring the device to send data to d.plaspy.com or 54.85.159.138 on port 8888 allows Plaspy to ingest telemetry, detect the device protocol automatically, and make location and alert data available for monitoring and operational workflows.

Learn more about Plaspy and how it works with compatible trackers at https://www.plaspy.com. For the most current manufacturer specific configuration methods, command syntax, and firmware behavior for the GS300, verify details on the WanWay official website https://www.wanwaytech.net/ as device specific steps and parameters may change over time.
