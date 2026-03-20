---
slug: /xirgo/xt_6300/configuration
id: xt_6300-configuration
sidebar_label: Configuration
title: Xirgo - XT-6300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT 6300 showing Plaspy server settings and example SMS commands for integration
keywords:
  - Xirgo XT-6300 configuration
  - Xirgo XT-6300 setup
  - XT-6300 Plaspy configuration
  - XT-6300 server configuration
  - Xirgo GPS tracker setup
  - vehicle tracking configuration
  - GPS tracker Plaspy setup
  - XT-6300 SMS configuration
  - XT-6300 GPRS setup
  - tracker server settings
---

# Xirgo - XT-6300 Configuration

This page covers the public configuration context for using the Xirgo XT-6300 tracker with Plaspy. It explains the shared server settings Plaspy requires, shows the common SMS commands published for this model, and provides practical steps to prepare the device so it can report location and telemetry to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps for the XT-6300 can vary by firmware revision, hardware option set, installation type, and vendor tools, so use this guide for practical, public-facing configuration context and confirm device specific details with official Xirgo documentation.

## Configuration Overview

The goal of configuring the XT-6300 for Plaspy is to point the device at Plaspy's shared server endpoint, ensure the device has valid cellular connectivity and APN settings, and verify that it reports correctly to the platform. For the XT-6300 this commonly involves sending or applying a small number of settings using the manufacturer configuration method, such as SMS or vendor software.

- Point the XT-6300 to the Plaspy endpoint so location and events are delivered to Plaspy.
- Configure APN and GPRS parameters so the device can open a data session.
- Select the transport type if required and set the shared Plaspy port.
- Save and apply settings, then restart the device if required.
- Validate the device appears and reports in the Plaspy platform.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the XT-6300:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data arrives

Plaspy uses the same port for all supported devices and will determine the correct protocol automatically when the tracker connects.

## Typical Requirements Before Setup

- Device powered and installed according to installer instructions so it can send SMS or open a GPRS session.
- Active cellular SIM with data enabled and the correct APN entry for the mobile operator.
- Access to the official Xirgo configuration method for your device build such as SMS commands or vendor configuration tool.
- Knowledge of APN settings for your mobile operator including APN, username, and password as required.
- A way to monitor device reporting in Plaspy after configuration to confirm successful integration.

## How This Tracker Connects to Plaspy

The XT-6300 is configured to send its GPRS data to Plaspy's shared server endpoint and port. Once the device's GPRS server and APN settings are set, the tracker will establish a connection to Plaspy and begin reporting location and device events so the unit becomes visible in the platform.

- The tracker is pointed to the Plaspy server domain or IP address and the shared port.
- The device uses the configured APN to establish a GPRS data session.
- Data is transmitted over the selected transport protocol, UDP or TCP.
- Plaspy receives incoming connections on port 8888 and automatically detects protocol and device protocol format.
- After configuration the tracker reports location and event messages to Plaspy for monitoring and reporting.

## Common Configuration Workflow

1. Access the official Xirgo configuration method or vendor software for the XT-6300 (SMS setup or the manufacturer tool).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the device GPRS server target.
3. Set the device port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Enter APN settings and any APN username or password placeholders required by your operator.
6. Apply or save the configuration and restart the device if the device documentation requires a restart.
7. Validate that the XT-6300 reports to Plaspy by checking device connectivity and incoming messages in the Plaspy platform.

## Example Configuration Commands

The XT-6300 can be configured by SMS using the public commands shown below. These commands are provided in the device model configuration content and are commonly sent as SMS messages to the tracker.

1. Set the operator APN. Replace the placeholders with your operator APN values:
```text
+XT:1002,[apnu],[apnp],[apn]
```
- [apn] is the APN string for your mobile operator.
- [apnu] is the APN username placeholder if required by the operator.
- [apnp] is the APN password placeholder if required by the operator.

2. Set the GPRS server to point the tracker at Plaspy. This command includes the port and the Plaspy server IP:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- This SMS configures the device GPRS server settings to use port 8888 and server IP 54.85.159.138 as provided in the public configuration. Preserve the order when sending commands if your installer instructions require it.

Send these SMS messages using the device installer workflow described by Xirgo. Maintain the order shown here if your device requires APN to be set before the GPRS server.

## Configuration Notes

- The XT-6300 supports SMS based configuration as shown in the example commands, but vendor tools or firmware updates may offer alternate methods.
- Transport selection of UDP or TCP can affect behavior in network environments; choose the transport your installation requires and ensure it matches any firewall rules.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol on incoming connections.
- Firmware versions and hardware options such as OBDII, JBUS, or optional Bluetooth may change available configuration commands or interfaces. Verify commands against the device firmware release.
- When using placeholders like [apn] keep operator credentials accurate and test connectivity before large scale deployment.

## Why Use Plaspy with This Configuration

Configuring the XT-6300 to report to Plaspy gives organizations a consistent server endpoint and a platform that will automatically detect the device protocol. For fleets or mixed hardware deployments this shared approach reduces per-device server configuration overhead and helps teams centralize visibility, event monitoring, and operational oversight.

To learn more about Plaspy visit https://www.plaspy.com and for the most current device specific setup details refer to the official Xirgo documentation at https://xirgo.com/. Manufacturer specifications, firmware behavior, and setup methods can change over time so verify the latest information on the Xirgo site when applying configuration in production.
