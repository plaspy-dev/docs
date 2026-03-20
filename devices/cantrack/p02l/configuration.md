---
slug: /cantrack/p02l/configuration
id: p02l-configuration
sidebar_label: Configuration
title: CanTrack - P02L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the CanTrack P02L showing how to point the device to Plaspy and validate connectivity
keywords:
  - CanTrack P02L configuration
  - P02L GPS setup
  - CanTrack P02L Plaspy
  - P02L tracker setup
  - CanTrack configuration guide
  - P02L server configuration
  - GPS tracker Plaspy compatibility
  - P02L setup guide
  - personal tracker configuration
  - walkie talkie tracker setup
---

# CanTrack - P02L Configuration

This page covers the public configuration context for using the CanTrack P02L Smart Walkie-Talkie Tracker with the Plaspy platform. It focuses on the practical server settings and the typical steps you will use to configure the P02L so that it reports location, telemetry and alarms into Plaspy for real-time monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type and vendor tools. The P02L uses LTE and GPRS data channels, supports SMS and OTA commands for remote management, and can stream position, status and alarm data into Plaspy once the device is pointed at the Plaspy endpoint.

## Configuration Overview

The goal of configuration is to prepare the P02L to reliably communicate with Plaspy so position fixes, alarms and intercom events appear in the platform. Configuration centers on a single Plaspy endpoint and port that is shared by all supported devices, and Plaspy will detect the device protocol automatically once the device sends data.

- Point the P02L to the Plaspy server endpoint d.plaspy.com or the equivalent server IP and the shared Plaspy port 8888.
- Choose the transport mode the device requires, UDP or TCP, and save the setting on the device.
- Verify mobile data connectivity and APN settings if required so the P02L can reach the Plaspy endpoint.
- Apply configuration and restart or wake the device if the manufacturer procedure requires it.
- Validate that position, status and alarm messages arrive in Plaspy so the device becomes visible in the platform.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the P02L to send data to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport can be UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged P02L with active power and any required accessories connected
- An active 4G data SIM with data service and SMS capability if you intend to use SMS commands
- Access to the official CanTrack configuration method such as the manufacturer app, web tool, or SMS command list
- APN settings configured on the device if the mobile operator requires them for data connections
- A Plaspy account or access credentials so you can confirm the device appears in the platform after setup
- Device identifiers and any registration information required by Plaspy or your account administrator

## How This Tracker Connects to Plaspy

When correctly configured, the P02L uses its LTE/GPRS data channel to send position reports, telemetry and alarm events to the shared Plaspy endpoint and port. Plaspy receives and parses the device data and makes it available for mapping, alerts and historic tracks.

- The P02L sends location and telemetry packets to d.plaspy.com or the server IP 54.85.159.138 on port 8888
- The transport can be UDP or TCP according to device settings and network conditions
- Plaspy automatically detects the device protocol so the platform will accept standard reports without per model port changes
- Position fixes, SOS/panic and fall detection events are forwarded into Plaspy for immediate visibility
- Remote configuration changes and OTA management are handled separately by manufacturer tools while operational telemetry flows to Plaspy

## Common Configuration Workflow

1. Access the official CanTrack configuration method for the P02L, such as the manufacturer configuration app, web portal, or SMS command interface.
2. Enter the Plaspy endpoint by specifying d.plaspy.com or by entering the server IP 54.85.159.138 where the tool asks for a server address.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP as the transport if the device requires an explicit transport selection.
5. Apply or save the configuration within the manufacturer tool or send the SMS commands as documented by CanTrack.
6. Restart or power-cycle the device if the manufacturer instructions indicate a reboot is required for settings to take effect.
7. Validate that the device is reporting to Plaspy by confirming visibility in your Plaspy account and checking for initial location or status messages.

## Example Configuration Commands

The exact commands and syntax for setting server address, APN and transport vary by CanTrack firmware and the configuration method you use. Because manufacturer tools and SMS command sets change over time, consult the official CanTrack documentation for the P02L command list.

For many CanTrack devices the same public steps apply conceptually: set the server to d.plaspy.com or 54.85.159.138, set port 8888, select UDP or TCP if prompted, and then save and restart the device. If you plan to configure the device by SMS, use the CanTrack SMS command reference to construct the correct messages and include any required placeholders such as APN values.

## Configuration Notes

- Firmware differences can change the exact menu labels or SMS syntax for server, port and APN settings; always check the P02L firmware release notes.
- The P02L supports OTA and SMS based remote management for many parameters including IP and APN settings according to the manufacturer documentation.
- Choosing TCP versus UDP may affect message delivery guarantees and network behavior; select the transport that matches your network and manufacturer guidance.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so you do not need to request per device ports.
- If you use SMS configuration, ensure the device has network coverage and SMS credit where required by your operator.

## Why Use Plaspy with This Configuration

Using the CanTrack P02L with Plaspy centralizes location, alarm and telemetry data from personal trackers into a single platform for monitoring and incident response. The combination of accurate multi constellation positioning, SOS and fall detection, and global intercom voice support makes the P02L a practical choice for organizations and families that need both location visibility and voice communication.

Learn more about Plaspy and how it collects device telemetry at https://www.plaspy.com. For the latest device specific commands, firmware changes and detailed configuration procedures for the P02L consult the official CanTrack documentation at https://www.cantrackgps.com/ to verify current manufacturer guidance.
