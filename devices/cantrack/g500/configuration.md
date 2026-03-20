---
slug: /cantrack/g500/configuration
id: g500-configuration
sidebar_label: Configuration
title: CanTrack - G500 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack G500 showing Plaspy server settings and practical setup steps for reliable tracking
keywords:
  - CanTrack G500 configuration
  - CanTrack G500 setup
  - CanTrack G500 server settings
  - CanTrack G500 Plaspy
  - CanTrack G500 GPS tracker
  - G500 configuration guide
  - G500 setup for Plaspy
  - vehicle tracking configuration
  - fleet tracking setup
  - GPS tracker server configuration
---

# CanTrack - G500 Configuration

This page covers the public configuration context for using the CanTrack G500 with Plaspy. It explains the shared server settings you will point the device to, and it summarizes practical setup steps you can take to prepare the tracker for reporting to Plaspy. The guidance here is based on the device description that the G500 uses GSM GPRS for communications and GPS for satellite positioning, and that it supports remote monitoring and short message alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this page as a practical public reference and verify any device-specific steps against CanTrack documentation or vendor instructions.

## Configuration Overview

This configuration process prepares the G500 to send location and event data to Plaspy so the device becomes visible and manageable in the platform. The focus is on setting the server endpoint and transport, validating network connectivity, and confirming the device is reporting successfully to Plaspy.

- Point the tracker to the Plaspy server using the shared server domain or IP and the platform port.
- Choose the transport method the device supports so data is sent reliably to Plaspy.
- Confirm that the device has an active cellular data connection and correct APN if required.
- Apply and save configuration changes using the manufacturer tool or SMS commands as provided by the vendor.
- Validate that the device appears in Plaspy and is sending position updates and alarm events.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the CanTrack G500:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices, and the platform will detect the appropriate protocol when the tracker connects.

## Typical Requirements Before Setup

- A powered and installed CanTrack G500 with a working SIM card and active data plan for GSM GPRS connectivity.
- Access to the official CanTrack configuration method or software provided by the manufacturer or your vendor.
- Knowledge of the correct APN and any SIM authentication details required by your mobile operator.
- A means to apply settings to the device, such as the manufacturer web tool, desktop software, or supported SMS commands.
- Basic tools to restart or power cycle the device after applying configuration changes.
- Access to Plaspy account or project details so you can confirm the device appears in the platform after setup.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the CanTrack G500 sends its position and event data to the shared Plaspy server endpoint and port. Plaspy receives the device connection on the common port and uses automatic protocol detection to interpret the tracker data.

- The tracker reports location fixes to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138.
- Data is sent over port 8888 using either UDP or TCP depending on the device configuration.
- Plaspy automatically detects the protocol used by the G500 and processes incoming messages accordingly.
- Alarm events and status updates from the tracker are forwarded to Plaspy for visibility and monitoring.
- After successful connection the device will be visible in Plaspy and can be monitored for position and event reporting.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software recommended by your vendor or the manufacturer. This may be a configuration tool, web interface, or SMS command set.
2. In the server settings enter the Plaspy server endpoint. Use either the domain d.plaspy.com or the server IP 54.85.159.138 as supported by the device tool.
3. Set the destination port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Apply or save the configuration changes in the device interface.
6. Restart or power cycle the tracker if required by the device firmware to apply new network settings.
7. Validate that the device reports to Plaspy by checking for incoming position updates and status messages in the Plaspy platform.

## Example Configuration Commands

The CanTrack G500 supports multiple manufacturer configuration methods and exact commands vary by firmware and vendor tools. Because the device may be configured via the official software or by SMS command set provided by CanTrack, the precise syntax differs across versions. In practice you will:

- Use the CanTrack configuration utility or SMS command set to set the server to d.plaspy.com or 54.85.159.138 and set port 8888.
- Select UDP or TCP if the tool requires a transport choice.

Refer to the official CanTrack command documentation or vendor-supplied configuration utility for the exact command strings to apply these settings.

## Configuration Notes

- Plaspy uses the same port 8888 for all supported devices; this simplifies multi device deployments and server configuration.
- Firmware versions and hardware revisions may change the exact configuration menus or SMS command syntax; always check manufacturer release notes.
- If your deployment tool asks for transport, choose UDP or TCP based on the tool options; Plaspy supports both and will detect the protocol automatically.
- Confirm APN and SIM connectivity before changing server settings to avoid connectivity issues.
- When possible use the manufacturer configuration utility for the G500 to avoid syntax errors in SMS commands.

## Why Use Plaspy with This Configuration

Configuring the CanTrack G500 to report to Plaspy gives organizations a straightforward path to real time visibility and event monitoring without per device server complexity. Plaspy’s shared endpoint approach and automatic protocol detection mean you can standardize deployments across fleets and reduce configuration overhead.

Learn more about how Plaspy works and view platform details at https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and hardware details check the official CanTrack website at https://www.cantrackgps.com/. Manufacturer setup methods and firmware behavior can change over time, so verify current instructions on the manufacturer site before large scale deployments.
