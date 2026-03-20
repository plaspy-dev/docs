---
slug: /pst/pst_avl01/configuration
id: pst_avl01-configuration
sidebar_label: Configuration
title: PST - PST-AVL01 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring PST PST-AVL01 tracker to communicate with Plaspy using shared server settings
keywords:
  - PST tracker configuration
  - PST PST-AVL01 setup
  - PST-AVL01 Plaspy configuration
  - PST GPS tracker setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - PST server configuration
  - GPS tracker Plaspy integration
  - PST AVL01 setup guide
  - PST tracker server settings
---

# PST - PST-AVL01 Configuration

This page documents the public configuration context for using the PST PST-AVL01 tracker with Plaspy. It focuses on the practical server settings and common setup actions needed to point a PST-AVL01 device at Plaspy so the device can communicate its location and status to the platform. Where available, example SMS configuration commands provided by the device manufacturer are included as a reference.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The PST-AVL01 supports GSM and GPRS communication and can be configured via SMS as shown in the examples below, so follow manufacturer documentation and these public settings when integrating with Plaspy.

## Configuration Overview

The goal of configuring a PST-AVL01 for Plaspy is to prepare the device to send location and event data to the Plaspy endpoint reliably. This involves setting the device time zone and APN, configuring the GPRS server endpoint and port, and switching the device into GPRS mode so it reports to Plaspy.

- Set device network parameters such as APN and GPRS server so the tracker can open a data session.
- Configure the device to report to the Plaspy server endpoint and port to ensure messages arrive in the platform.
- Validate connectivity using manufacturer verification methods such as SMS replies or platform reporting.
- Ensure the device time zone and basic parameters are correct for consistent timestamps.
- Switch the device to GPRS or data reporting mode so location updates are delivered to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when devices connect

These values are the public Plaspy endpoint settings to use when configuring the PST-AVL01. Plaspy uses the same port for all supported devices and will automatically detect the correct protocol.

## Typical Requirements Before Setup

- A powered PST-AVL01 device with available SIM and an active data or GPRS plan as required by the tracker.  
- Knowledge of the device default password if required for SMS commands or remote configuration. The PST example below uses the default password 000000.  
- Access to the manufacturer configuration method supported by the device such as SMS commands or vendor software.  
- The correct APN settings from the mobile operator to enable GPRS connectivity. Use the APN placeholders as needed.  
- Ability to send SMS commands from a phone or management system if the device is configured via SMS.  
- A plan to validate reporting in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The PST-AVL01 is configured to open a GPRS session and send data to the Plaspy server endpoint. Once the device is pointed at the shared Plaspy address and port, Plaspy receives location updates and automatically determines the tracker protocol so the device appears in the platform.

- The device is set to report to the Plaspy server domain or IP and port.  
- Data is sent using either UDP or TCP according to device settings and network conditions.  
- Plaspy receives incoming device connections on port 8888 and recognizes the tracker protocol automatically.  
- Location and event messages are delivered to Plaspy where they become visible in the fleet view.  
- Platform visibility is confirmed by observing device checkins and telemetry in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the PST-AVL01, such as the SMS command interface documented by PST.  
2. Enter the Plaspy server endpoint using the domain d.plaspy.com or the IP 54.85.159.138 as required by the device setup method.  
3. Set the server port to 8888. Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP if the device requires a transport selection. Confirm which transport is preferred for your network.  
5. Apply or save the configuration on the tracker using the manufacturer method, for example by sending the appropriate SMS commands.  
6. Restart or power cycle the device if required by the device instructions to apply network settings.  
7. Validate that the device reports to Plaspy by checking for a device connection or initial location update in the Plaspy platform.

If you are using the PST SMS method, execute the configuration commands in the order required by PST and replace placeholders like {{apn}} with your mobile operator values.

## Example Configuration Commands

The PST-AVL01 manufacturer documents an SMS based configuration flow. The sample commands below are public examples showing the order and structure used to configure the device. These commands are sent as SMS messages to the tracker and the example uses the device default password 000000. Preserve placeholders as shown and replace them with real values when applying to your device.

1. Set the time zone to UTC 0
```text
W000000,032,0
```

2. Set the operator APN
```text
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} is the mobile operator APN string.
- {{apnu}} is the APN username if required by the operator. Leave blank if not used.
- {{apnp}} is the APN password if required by the operator. Leave blank if not used.
- If your operator does not require username or password, send only W000000,011,{{apn}}.

3. Set the GPRS server to the Plaspy IP and port
```text
W000000,012,54.85.159.138,8888
```
- This command uses the Plaspy server IP and port 8888 as published.

4. Switch the device to GPRS mode
```text
W000000,013,1
```

Notes on these commands:
- Each command above is an SMS message formatted for the PST-AVL01 and uses the example device password 000000.
- If your device requires the server domain rather than IP, use d.plaspy.com in the server command where supported by the tracker firmware.
- Send commands in the order shown to ensure APN and server settings are applied before enabling GPRS mode.

## Configuration Notes

- The PST-AVL01 example above uses SMS based configuration which is common for many PST devices. Verify your specific device supports SMS configuration.  
- Firmware and hardware revisions can change command formats, required parameters, or default passwords. Confirm commands against the manufacturer documentation for your device revision.  
- Choose UDP or TCP based on network reliability and operator support. Some networks are more reliable with UDP and others with TCP. Plaspy accepts both on port 8888.  
- Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with values provided by the mobile operator. If the operator does not require a username or password, omit those values or leave them empty per device instructions.  
- Plaspy uses a shared server port and automatic protocol detection, so once the device is pointed to the Plaspy endpoint the platform will attempt to recognize the tracker protocol.

## Why Use Plaspy with This Configuration

Using the PST-AVL01 with Plaspy provides a straightforward way to add vehicle visibility and operational monitoring to your fleet. By configuring the tracker to report to Plaspy's shared server endpoint and port, organizations can consolidate location data, monitor events, and manage devices across a single platform that automatically detects tracker protocol.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and setup methods can change over time. Verify the latest device specific setup details with the manufacturer and consult the official PST documentation for your exact model and firmware version.
