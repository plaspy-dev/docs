---
slug: /castel/sat_802/configuration
id: sat_802-configuration
sidebar_label: Configuration
title: Castel - SAT-802 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure Castel SAT-802 to work with Plaspy using shared server settings and SMS commands for GPRS and Iridium
keywords:
  - Castel SAT-802 configuration
  - SAT-802 setup Plaspy
  - Castel GPS tracker configuration
  - SAT-802 server configuration
  - SAT-802 tracking software configuration
  - Castel SAT-802 GPRS setup
  - Castel SAT-802 SMS commands
  - GPS platform setup Plaspy
  - SAT-802 fleet tracking configuration
  - SAT-802 connectivity guide
---

# Castel - SAT-802 Configuration

This page documents the public configuration context for using the Castel SAT-802 tracker with Plaspy. It focuses on the practical server values, workflow, and published SMS commands needed to point the device to Plaspy so the tracker can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The SAT-802 supports SMS-based configuration for network parameters and can be set to report to Plaspy using the public settings listed below.

## Configuration Overview

The goal of this configuration process is to prepare the SAT-802 so it reliably communicates with Plaspy and appears in the platform as an active device. Where available, use the manufacturer's recommended configuration method (SMS, configuration tool, or provisioning interface) and apply the Plaspy server settings exactly.

- Configure the device APN and server values so the SAT-802 can use GPRS to reach Plaspy.
- Send the published SMS commands or use the vendor tool to write the server endpoint and transport.
- Validate connectivity to the Plaspy server and confirm the tracker is reporting location data.
- Use the device ID derived secret key when sending SMS configuration commands if required.
- Verify operation both over GPRS and the device's secondary channel as appropriate for your deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible SAT-802 device with a working SIM and GPRS capability if using cellular data.
- The device ID (IMEI or manufacturer ID) to derive the default SMS secret key when required.
- Ability to send SMS messages to the device for SMS-based configuration, or access to the manufacturer configuration tool.
- Knowledge of the mobile network APN, and optional APN username and password for the SIM used in the device.
- A safe test environment where device restarts and configuration changes will not disrupt operations.

## How This Tracker Connects to Plaspy

The SAT-802 can use its cellular GPRS channel to send location and device data to Plaspy. When GPRS is unavailable, the device may use its alternative communication path where supported. Configuration ensures that the tracker reports to the shared Plaspy server endpoint and port.

- The tracker is configured to report to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Choose UDP or TCP as the transport if the device requires a selection; Plaspy accepts both on port 8888.
- Plaspy automatically detects the tracker protocol so the device will be processed by the platform once messages arrive.
- After configuration, the device transmits location and status updates to Plaspy where they become visible in the platform.
- Validation of reporting confirms the tracker is reachable and data is being received by Plaspy.

## Common Configuration Workflow

1. Access the official Castel configuration method for the SAT-802 (manufacturer SMS commands, configuration software, or vendor provisioning tool).
2. Enter the Plaspy server address by using d.plaspy.com or the IP 54.85.159.138 depending on the device method.
3. Set the server port to 8888 as all devices in Plaspy use the same port.
4. Choose UDP or TCP if the SAT-802 requires a transport selection.
5. Apply or save the configuration on the device and send any required confirmation commands.
6. Restart the device if the manufacturer instructions recommend a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking platform visibility and incoming messages.

## Example Configuration Commands

The SAT-802 supports SMS-based configuration. The manufacturer documentation indicates that SMS commands use a device-specific secret key and that the APN and server can be set via SMS. The default SMS secret key is the last 6 ASCII characters of the device ID.

To set the APN and server IP via SMS use the following command structure (preserve placeholders):

- Set GPRS APN and Plaspy server
```
*{{SecretKey}}#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- Verify current GPRS settings
```
*{{SecretKey}}#get gprs#*
```

Notes on placeholders:
- {{SecretKey}} — the device SMS password, by default the last 6 ASCII characters of the device ID unless the vendor has changed it.
- [apn] — the mobile operator APN for the SIM card installed in the device.
- [apnu] — optional APN username if required by the operator.
- [apnp] — optional APN password if required by the operator.

Send these SMS messages to the device phone number from an authorized phone number and wait for the device acknowledgment as described in the Castel documentation.

## Configuration Notes

- Firmware and hardware revisions may change the precise SMS syntax or available command set; always confirm with the device's current manual.
- If the device asks for transport selection, choose UDP or TCP according to your network preferences; Plaspy accepts both on the common port 8888.
- SMS-based setup is practical for field devices without a direct configuration interface but requires knowledge of the device secret key.
- Use the provided Plaspy server settings exactly: d.plaspy.com or 54.85.159.138 and port 8888 to ensure correct routing into the Plaspy platform.
- Keep a record of any changes and test the device reporting after saving settings and restarting.

## Why Use Plaspy with This Configuration

Configuring the Castel SAT-802 to report to Plaspy gives fleet operators a unified endpoint for receiving tracking data from devices that support both GPRS and satellite as appropriate. Using Plaspy's shared server settings simplifies device onboarding because the platform automatically detects the tracker protocol and uses a consistent port scheme across devices.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer details verify current information on the Castel site http://www.castelecom.com/
