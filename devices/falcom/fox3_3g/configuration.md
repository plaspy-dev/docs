---
slug: /falcom/fox3_3g/configuration
id: fox3_3g-configuration
sidebar_label: Configuration
title: Falcom - FOX3-3G Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Falcom FOX3-3G for use with Plaspy with shared server settings and practical setup guidance
keywords:
  - Falcom FOX3-3G configuration
  - Falcom FOX3-3G setup
  - FOX3-3G Plaspy configuration
  - FOX3-3G GPS tracker setup
  - Falcom tracker server settings
  - vehicle telematics configuration
  - GPS platform integration
  - fleet management tracker setup
  - FOX3-3G GNSS configuration
  - Falcom FOX3-3G guide
---

# Falcom - FOX3-3G Configuration

This page summarizes the public configuration context for using the Falcom FOX3-3G series with Plaspy. It focuses on the shared server settings and practical steps required to point a FOX3-3G device to Plaspy for tracking and telematics visibility. Use this document to understand what Plaspy requires and how to prepare the device before registering it in the platform.

Plaspy uses a common server endpoint and shared settings across supported trackers and automatically detects the tracker protocol once the device is pointed to the Plaspy endpoint. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the Falcom configuration tools you use, so follow this guide alongside Falcom documentation and your installer procedures.

## Configuration Overview

The goal of configuration is to prepare a FOX3-3G device so it can communicate reliably with Plaspy and appear in the fleet management platform. This involves updating the device server target, verifying transport settings, and confirming that the device successfully reports to Plaspy.

- Set the device to send data to the Plaspy server endpoint and port
- Choose the appropriate transport protocol (UDP or TCP) if required by the device
- Confirm cellular data connectivity and GNSS reception before testing
- Apply and save configuration, then restart the device where required to activate settings
- Validate that the tracker appears and reports in Plaspy after configuration

## Plaspy Server Settings

Use the following public settings when configuring FOX3-3G devices for Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These values are the shared settings Plaspy uses for all supported devices and should be entered into the Falcom configuration tool or device setup interface when requested.

## Typical Requirements Before Setup

- Ensure the FOX3-3G has a stable power source and is powered on
- Confirm the device has an active cellular data connection and a valid SIM if using mobile data
- Access to the Falcom configuration method or official setup software required for the FOX3-3G
- Verify GNSS antenna installation and signal reception for location reporting
- Know the device firmware version and keep manufacturer documentation available
- Have the Plaspy server settings ready to enter during configuration

## How This Tracker Connects to Plaspy

When configured, the FOX3-3G sends location and device telemetry to the Plaspy endpoint so vehicles can be monitored and events can be recorded. The tracker is pointed to the shared Plaspy server and port and will use the selected transport method to transmit data.

- Device transmits position and status messages to d.plaspy.com or 54.85.159.138
- Communication is sent to port 8888 using either UDP or TCP depending on the device selection
- Plaspy automatically detects the incoming tracker protocol and parses messages
- Reports and events become visible in Plaspy for operational monitoring
- Successful configuration enables ongoing telemetry and alert delivery to the platform

## Common Configuration Workflow

1. Access the official Falcom configuration method or software for the FOX3-3G (USB tool, web interface, or vendor tool).
2. In the server settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 as the destination for tracker data.
4. If the device requires a transport selection, choose UDP or TCP based on network and installer preference.
5. Apply or save the configuration in the Falcom tool or device interface.
6. Restart the device if required by the device workflow to activate the new settings.
7. Validate that the FOX3-3G reports to Plaspy by checking the device's status in the Plaspy platform and confirming incoming messages.

## Example Configuration Commands

The FOX3-3G series is typically configured through Falcom tools or vendor software and exact commands can vary by firmware and configuration method. Because Falcom provides multiple configuration interfaces and options, the precise command syntax is dependent on the tool you use.

Refer to the Falcom configuration manual or your installer tool for exact command formats. If you have specific Falcom command line or SMS configuration commands from official Falcom materials, include them here in order and use the configuration tool to send them. Placeholders that may appear in manufacturer commands such as [apn], [apnu], and [apnp] represent APN and authentication values for the cellular data connection and should be replaced with values from your mobile operator.

## Configuration Notes

- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol on connect.
- Firmware and configuration tool differences between device revisions can change available menu items and command syntax; always verify against current Falcom documentation.
- Choose TCP or UDP based on your network reliability and installer guidance; both transports are accepted by Plaspy on port 8888.
- If your setup uses additional Falcom expansion boxes or audio models, confirm model specific wiring and features with Falcom materials.
- After saving settings, a device restart or power cycle is commonly required to apply network changes.

## Why Use Plaspy with This Configuration

Using the Falcom FOX3-3G with Plaspy provides a practical way to centralize vehicle location data and event reporting for fleet operations. Pointing the FOX3-3G to Plaspy's shared endpoint enables consistent ingestion of telemetry into a single platform, simplifying monitoring, alerting, and historical analysis when managing multiple vehicles or device types.

Learn more about Plaspy and how it integrates with tracker hardware on the Plaspy website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details refer to Falcom documentation at https://www.falcom.de.
