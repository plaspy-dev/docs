---
slug: /ruptela/lcv5/configuration
id: lcv5-configuration
sidebar_label: Configuration
title: Ruptela - LCV5 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring the Ruptela LCV5 for use with Plaspy including required server settings transport options and setup workflow
keywords:
  - Ruptela LCV5 configuration
  - LCV5 setup Plaspy
  - Ruptela LCV5 server configuration
  - LCV5 GPS tracker setup
  - Ruptela tracking software configuration
  - LCV5 fleet tracking setup
  - Ruptela device configuration guide
  - Plaspy tracker configuration
  - LCV5 telematics integration
  - Ruptela LCV5 installation notes
---

# Ruptela - LCV5 Configuration

This page documents the public configuration context for using the Ruptela LCV5 GPS tracker with Plaspy. It focuses on the practical server settings and workflow needed to point the device at Plaspy so the tracker streams location and telematics data to the platform. Where manufacturer-side steps are required, those are described at a high level so you can complete integration with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer-side setup steps for the LCV5 can vary by firmware, hardware revision, installation type, and the vendor tools you use, so use this guidance together with the LCV5 documentation and Ruptela Device Center tools when available.

## Configuration Overview

The objective of this configuration is to prepare the LCV5 to communicate reliably with Plaspy, confirm that connectivity is working, and enable the device to appear and report data in the Plaspy platform. The LCV5 supports both GSM 2G and LTE Cat M1 connectivity and is designed to deliver location plus vehicle telemetry to Plaspy once pointed to the correct server and port.

- Configure the device network settings to report to Plaspy server d.plaspy.com or the equivalent IP address.
- Set the device port to 8888 which Plaspy uses for all devices.
- Choose the transport mode the device requires, UDP or TCP, and save the setting.
- Verify cellular connectivity and that the LCV5 can establish a session to the Plaspy endpoint.
- Confirm the tracker appears in Plaspy and is sending GPS positions and telemetry such as CAN or I/O events.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the LCV5:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be selected on the device
- Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port configuration and Plaspy will detect the protocol used by the tracker automatically once a connection is established.

## Typical Requirements Before Setup

- A powered and functional LCV5 unit installed or connected to a bench power source.
- An active cellular SIM with data enabled for GSM 2G or LTE Cat M1 depending on your device variant.
- Access to Ruptela Device Center or the official Ruptela configuration tool provided by your vendor.
- A way to view device logs or connectivity status to validate outbound connections.
- Access to the LCV5 technical documentation and any vendor-specific instructions for your hardware revision.
- Optional: knowledge of the device IMEI or unique identifier used to register or match the device in Plaspy.

## How This Tracker Connects to Plaspy

When configured to use the Plaspy endpoint, the LCV5 opens an outbound session to the shared Plaspy server and transmits GPS and vehicle telemetry to the platform. Plaspy receives the data on the standard port and protocol, automatically detects the tracker protocol, and ingests telemetry for display and alerting.

- The tracker reports GPS positions to d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry such as CAN or OBD parameters, digital inputs, analog sensors, and I/O events are sent alongside location updates.
- The device can use either UDP or TCP as chosen during configuration; Plaspy accepts both transports.
- Plaspy performs automatic protocol detection to interpret the incoming device messages.
- Once connected, the device becomes visible in Plaspy for live tracking, route playback, and alert generation.

## Common Configuration Workflow

1. Access the official Ruptela configuration method such as Ruptela Device Center or vendor software for the LCV5.
2. Locate the TCP UDP or server settings section in the configuration tool.
3. Enter the destination as d.plaspy.com or use the server IP 54.85.159.138 when required by the tool.
4. Set the destination port to 8888 which is used by Plaspy for all supported devices.
5. Choose UDP or TCP if the LCV5 requires a transport selection and save or apply the change.
6. Restart the device if the configuration tool or firmware requires a reboot to apply changes.
7. Validate that the LCV5 reports to Plaspy by checking device activity in Plaspy and verifying incoming positions and telemetry.

## Example Configuration Commands

The exact configuration commands and syntax depend on the Ruptela provisioning method and firmware version. Ruptela Device Center and the device management platform are the primary supported ways to configure the LCV5, and they provide GUI or SMS based options depending on your setup. Because manufacturer tools vary by firmware, consult the Ruptela documentation or your vendor for exact command formats and examples.

## Configuration Notes

- Firmware and hardware revisions can change available settings and configuration steps; always check your device firmware version in Ruptela documentation.
- If you must choose between TCP and UDP, consider network reliability and carrier behavior; Plaspy accepts both transports but device behavior differs by transport.
- Use the device logs or Ruptela Device Center diagnostics to troubleshoot connection attempts to d.plaspy.com or 54.85.159.138 on port 8888.
- When configuring remotely, ensure the SIM has data and any required APN values are set according to your mobile operator.
- Keep manufacturer tools and device firmware updated to access the latest configuration features and bug fixes.

## Why Use Plaspy with This Configuration

Configuring the Ruptela LCV5 to report to Plaspy provides centralized visibility of vehicle location and telematics, combining GPS positions with CAN and sensor data to support fleet monitoring, fuel management, and driver behaviour insights. Using Plaspy with a well configured LCV5 helps operations teams reduce response times, improve route visibility, and generate telemetry driven alerts for safer and more efficient fleet operations.

To learn more about Plaspy and how it supports device integrations like the LCV5 visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer guidance verify information at the Ruptela website https://ruptela.com/ as manufacturer specifications and configuration methods can change over time.
