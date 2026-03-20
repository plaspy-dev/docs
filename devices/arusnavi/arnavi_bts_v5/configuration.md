---
slug: /arusnavi/arnavi_bts_v5/configuration
id: arnavi_bts_v5-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi BTS v.5 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure Arusnavi Arnavi BTS v.5 for Plaspy and required server settings
keywords:
  - Arusnavi Arnavi BTS v.5 configuration
  - Arnavi BTS v.5 setup
  - Arusnavi BTS v.5 Plaspy
  - Arusnavi BLE sensor configuration
  - BTS v.5 beacon setup
  - cold chain BLE sensor configuration
  - Arnavi beacon UUID MAJOR MINOR setup
  - BTS v.5 temperature sensor Plaspy
  - fleet BLE sensor configuration
  - vehicle BLE gateway setup
---

# Arusnavi - Arnavi BTS v.5 Configuration

This page documents the public configuration context for using the Arusnavi Arnavi BTS v.5 BLE sensor with Plaspy. It explains how the BTS v.5 integrates with Plaspy when the device is in range of a Plaspy compatible BLE gateway or paired with a vehicle gateway that forwards BLE advertising and telemetry into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for incoming telemetry. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this guide as a practical starting point and verify device-specific procedures with Arusnavi documentation.

## Configuration Overview

This configuration process prepares the Arnavi BTS v.5 to be discovered by a Plaspy compatible gateway and mapped into the Plaspy platform so that temperature, beacon identity and state events appear alongside GPS data and fleet telemetry.

- Configure the BTS v.5 advertising and identity parameters so a gateway can recognize each tag.
- Ensure a Plaspy compatible BLE gateway or vehicle gateway is present and correctly provisioned to forward BLE telemetry.
- Point the gateway forwarding settings to the Plaspy server endpoint so data is delivered to the platform.
- Validate that temperature, contact state and iBeacon fields are mapped to the correct asset or vehicle record in Plaspy.
- Verify reporting intervals and radio power balance battery life with responsiveness.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring your Plaspy compatible BLE gateway or gateway-capable tracker. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on incoming connections.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- A charged or fresh CR2477 battery installed in the Arnavi BTS v.5 and the device powered on.
- A Plaspy compatible BLE gateway or a vehicle gateway that collects BLE beacons and can forward telemetry to Plaspy.
- Access to the Arusnavi mobile configurator app for iOS or Android to adjust beacon UUID, MAJOR, MINOR, interval, and radio power.
- Network access from the gateway to the internet so it can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Access to your Plaspy account where assets or vehicles will be associated with the BTS v.5 beacons.
- Basic knowledge of the required server settings so the gateway can be pointed to Plaspy.

## How This Tracker Connects to Plaspy

The Arnavi BTS v.5 broadcasts BLE advertising packets and sensor telemetry (temperature, contact state, beacon identity). A Plaspy compatible gateway scans and collects those BLE packets, then forwards the parsed telemetry to the Plaspy server endpoint using the shared port. Once delivered, Plaspy associates the telemetry with the appropriate vehicle or asset.

- The BTS v.5 emits BLE advertisements containing UUID, MAJOR, MINOR and sensor data that a gateway receives.
- A Plaspy compatible gateway forwards the collected data to d.plaspy.com (or 54.85.159.138) on port 8888.
- Plaspy automatically detects the incoming protocol and ingests the telemetry into the platform.
- Beacon identity and sensor events are mapped to an asset or vehicle record for real time monitoring and alerts.
- Reporting interval and radio power control how frequently the gateway receives updates and influence battery life.

## Common Configuration Workflow

1. Access the official Arusnavi mobile configurator app or the gateway vendor configuration tool to prepare the BTS v.5 and gateway.
2. On the gateway forwarding settings, enter d.plaspy.com or 54.85.159.138 as the server endpoint.
3. Set the destination port to 8888 to match Plaspy’s shared port for all devices.
4. Choose UDP or TCP for transport if the gateway requires a transport selection.
5. Apply or save the configuration on the gateway and on the BTS v.5 when adjusting beacon parameters.
6. Restart the gateway or the BTS v.5 if the vendor instructions require a restart to apply settings.
7. Validate that the gateway forwards received BLE telemetry and that the BTS v.5 reports appear in Plaspy.

## Example Configuration Commands

The Arnavi BTS v.5 is configured primarily through the Arusnavi mobile configurator app and BLE gateway configuration tools. Exact commands and menu paths vary by the gateway firmware and the Arusnavi app version. For this reason, there are no universal public command strings for every environment. When working with a gateway or vendor tool, use the following actions rather than terminal commands:

- Open the Arusnavi mobile app to set UUID, MAJOR, MINOR, reporting interval and radio power for the BTS v.5.
- In the gateway configuration UI, set the server to d.plaspy.com or 54.85.159.138 and the port to 8888.
- Choose UDP or TCP transport according to your gateway options and network guidance.
- Save or apply settings and follow any vendor instructions to restart the gateway or service.

If your gateway vendor publishes specific command line or SMS commands to set forwarding endpoints, follow their documentation and use d.plaspy.com or 54.85.159.138 with port 8888. Always preserve any placeholders the vendor provides and consult vendor guides for exact syntax.

## Configuration Notes

- Firmware and vendor gateway behavior can vary by hardware revision and software version; confirm exact steps with Arusnavi and your gateway vendor.
- Choose UDP or TCP based on gateway recommendations and network reliability; Plaspy accepts both transports on port 8888.
- Place BLE gateways to provide reliable radio coverage for expected device locations; BLE range and placement affect detection frequency.
- Adjust reporting interval and radio power on the BTS v.5 to balance battery life with telemetry needs for cold chain or real time alerts.
- Map beacon UUID MAJOR MINOR values in Plaspy consistently so assets and compartments are correctly identified.

## Why Use Plaspy with This Configuration

Using the Arnavi BTS v.5 with Plaspy extends fleet and asset monitoring by adding temperature, contact state and beacon identity to location and vehicle telemetry. This combination is useful for cold chain logistics, anti-tamper monitoring and asset identification where small sensors provide critical environmental and state data that should be visible with vehicle tracking in one platform.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes and manufacturer instructions, verify details on the Arusnavi website at https://www.arusnavi.ru. Device specific setup steps and firmware behavior can change over time so confirm the current guidance with the manufacturer.
