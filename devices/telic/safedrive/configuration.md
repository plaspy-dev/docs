---
slug: /telic/safedrive/configuration
id: safedrive-configuration
sidebar_label: Configuration
title: Telic - SafeDrive Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Telic SafeDrive showing how to configure the tracker to communicate with Plaspy using shared server settings
keywords:
  - Telic SafeDrive configuration
  - SafeDrive setup Plaspy
  - Telic SafeDrive server configuration
  - SafeDrive GPS tracker setup
  - Telic tracker configuration
  - SafeDrive APN settings
  - Telic SafeDrive SMS commands
  - Vehicle tracking SafeDrive
  - Telic telematics setup
  - SafeDrive GPRS configuration
---

# Telic - SafeDrive Configuration

This page documents the public configuration context for using the Telic SafeDrive tracker with Plaspy. It summarizes the shared server settings used by Plaspy, explains the typical steps required on the device side, and presents the publicly available example SMS commands for the SafeDrive where applicable. Use this guide to prepare the device so it can report to Plaspy for location and operational visibility.

Plaspy uses the same server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation method, and the tools provided by the vendor. The SafeDrive supports SMS based setup commands in public documentation and this page shows those commands as a practical reference for integrating the device with Plaspy.

## Configuration Overview

The configuration process prepares the SafeDrive to establish a reliable IP connection to Plaspy and to report location and status. The goal is to ensure the device has correct APN and server settings, is in GPRS mode, and can be confirmed to appear in the Plaspy platform.

- Configure APN and optional APN credentials so the device can use mobile data.
- Point the device to Plaspy server settings so telemetry is delivered to the platform.
- Enable GPRS or data reporting mode so the tracker sends packets to Plaspy.
- Verify connectivity and use the device check command to confirm settings.
- Optionally perform a factory reset or timezone adjustment during initial setup.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- All devices in Plaspy use the same port 8888  
- Plaspy automatically detects the tracker protocol when the tracker connects

## Typical Requirements Before Setup

- A powered SafeDrive and physical access to the device for SMS based setup if required.
- An active SIM card in the device with a working mobile data plan and correct APN information.
- Knowledge of the device SMS command password if one is set. The public sample uses 123456 as the default.
- Access to the official Telic configuration instructions or support tools for your firmware and model.
- A way to send and receive SMS messages from the device or access to Telic configuration software if provided.

## How This Tracker Connects to Plaspy

The SafeDrive is configured to send its data sessions to the shared Plaspy server address and port so that Plaspy can ingest telemetry and display it in the platform. Once APN and server settings are applied and GPRS mode is enabled, the device should establish a TCP or UDP session with the Plaspy endpoint.

- Device is pointed to d.plaspy.com or directly to 54.85.159.138 so data is routed to Plaspy.
- Port 8888 is used for all devices and must be set on the tracker.
- The device sends packets using either UDP or TCP depending on configuration; Plaspy detects protocol automatically.
- Successful connection allows Plaspy to show location, status, and events for the tracker.
- Use the device check command to request current configuration and confirm connectivity.

## Common Configuration Workflow

1. Access the official Telic configuration method or software and confirm the device accepts SMS or remote configuration commands.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the tracker server settings.  
3. Set the port to 8888 on the tracker configuration.  
4. Choose UDP or TCP transport if the device requires explicit selection.  
5. Configure APN and optional APN username and password according to your SIM provider.  
6. Apply or save the configuration and switch the device to GPRS or data mode.  
7. Restart the device if required by the device or firmware.  
8. Validate that the device reports to Plaspy and appears in the platform using the device check command or by confirming incoming sessions on Plaspy.

## Example Configuration Commands

The SafeDrive supports SMS based configuration. The commands below are the public examples used to prepare the device for Plaspy. The sample default device password used in these examples is 123456. Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your operator specific values.

- Factory reset command (optional initial reset)
```text
begin123456
```

- Set the timezone to UTC 0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 {{apn}}
```

- Set the APN username and password if required by the operator
```text
up123456 {{apnu}} {{apnp}}
```
Note: {{apnu}} is the APN username placeholder and {{apnp}} is the APN password placeholder. If your SIM operator does not require credentials, this command can be skipped.

- Set the GPRS server to Plaspy using the server IP and port
```text
adminip123456 54.85.159.138 8888
```
You may alternatively point to the domain d.plaspy.com if the device supports domain based server entries.

- Switch the device to GPRS mode
```text
gprs123456,1,1
```
or simply
```text
gprs123456
```

- Check current settings on the device
```text
check123456
```

Follow the commands in the order shown where order is significant for initial setup, for example setting APN before switching to GPRS.

## Configuration Notes

- The default SMS command password in public examples is 123456. Confirm the current default for your device and change the password for production devices.
- Manufacturer firmware and command syntax can vary by hardware revision and firmware version. Always verify commands against official Telic documentation.
- Use domain d.plaspy.com or the IP 54.85.159.138 when configuring server settings. Plaspy uses the same port 8888 for all devices and auto detects protocol.
- If the tracker supports both UDP and TCP, choose the transport required by your integration or network conditions. Plaspy accepts both and will detect the protocol automatically.
- SMS based setup is convenient for field deployment but confirm SMS delivery and device response before assuming successful configuration.

## Why Use Plaspy with This Configuration

Configuring the Telic SafeDrive to report to Plaspy provides a straightforward path to fleet visibility, real time location reporting, and operational monitoring without needing device specific servers. By using the shared Plaspy server endpoint and port, devices from different manufacturers can be brought online quickly while Plaspy handles protocol detection and data ingestion.

Learn more about how Plaspy supports device integrations and fleet monitoring on the Plaspy website at https://www.plaspy.com. For the most current device specific commands, firmware notes, and technical details please verify the manufacturer documentation at https://www.telic.de as setup methods and command syntax can change over time.
