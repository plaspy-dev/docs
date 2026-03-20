---
slug: /bce/fm_500_blue/configuration
id: fm_500_blue-configuration
sidebar_label: Configuration
title: BCE - FM-500 Blue+ Configuration
sidebar_class_name: menu_item_tracker
description: Configure the BCE FM-500 Blue+ for use with Plaspy using public server settings and practical setup guidance
keywords:
  - BCE FM-500 Blue+ configuration
  - FM-500 Blue+ setup
  - FM-500 Blue+ Plaspy
  - BCE tracker configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - Plaspy server configuration
  - GPS platform setup
  - tracking software configuration
---

# BCE - FM-500 Blue+ Configuration

This page covers the public configuration context for using the BCE FM-500 Blue+ tracker with Plaspy. It describes the shared server settings Plaspy uses and explains the practical steps typically required to prepare the FM-500 Blue+ for reliable communication and visibility in the Plaspy platform. The information here is intended to help technical users, integrators, and installers understand how to point the device to Plaspy and validate connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device sends data. Exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and the vendor tools you use. The FM-500 Blue+ itself supports GPS GLONASS location, GSM GPRS transfer, multiple inputs and outputs, and vehicle CAN interfaces such as J1939 which can be included in the data sent to the tracking server when configured.

## Configuration Overview

Configuring the FM-500 Blue+ for Plaspy prepares the device to report location and telemetry to a single Plaspy endpoint so the device appears in the platform and begins sending events. The process focuses on network parameters, transport selection, and verification steps that confirm the tracker is visible in Plaspy.

- Set the device network endpoint to the Plaspy server and confirm transport settings to allow data flow.
- Ensure the device has operational power and cellular connectivity so it can send GPRS data to Plaspy.
- Validate that the device firmware and configuration method are compatible with your chosen configuration tool.
- Save and apply settings on the device, then confirm the tracker successfully registers and reports to Plaspy.
- Use Plaspy detection and logs to verify that the tracker protocol has been recognized and that location and telemetry arrive as expected.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the FM-500 Blue+ to report to Plaspy. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

## Typical Requirements Before Setup

- Reliable power supply to the FM-500 Blue+ and any required wiring completed according to the installer guide.
- Active cellular SIM with data service compatible with GSM GPRS so the tracker can transmit to the cloud.
- Access to the official BCE configuration method or software provided by the vendor or reseller for your firmware revision.
- The device must have a suitable antenna installation for GPS GLONASS reception and GSM signal.
- A test plan to validate reporting to Plaspy after configuration, including the ability to view incoming data in the platform.

## How This Tracker Connects to Plaspy

The FM-500 Blue+ sends its location, movement, and optional vehicle telemetry over the cellular network to the Plaspy server endpoint. Once configured to target the Plaspy server, the platform will detect the tracker protocol automatically and begin processing incoming messages.

- Device transmits GPS GLONASS position and telemetry via GSM GPRS to d.plaspy.com or 54.85.159.138
- Data is sent to port 8888 using either UDP or TCP depending on device transport selection
- Plaspy uses automatic protocol detection to identify the FM-500 Blue+ message format
- When configured to report vehicle CAN or sensor data those records are forwarded to Plaspy with position events
- Successful connection makes the device visible in Plaspy and enables event reporting and monitoring

## Common Configuration Workflow

1. Access the official BCE configuration method or software for the FM-500 Blue+ provided by your vendor or installer documentation.
2. In the device server settings enter the Plaspy endpoint using either the domain name d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 which is the port Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection for sending data to the server.
5. Configure any required cellular parameters such as SIM and APN so the tracker can establish a GPRS connection.
6. Apply or save the configuration on the device and perform any required restart or reboot step if the manufacturer instructions indicate this.
7. Validate that the device reports to Plaspy by checking device activity in the platform and confirming that the tracker protocol is detected automatically.

## Example Configuration Commands

No public device specific command set was provided for this model in the supplied configuration content. Exact command syntax and configuration messages vary by BCE firmware, vendor tools, and installer interfaces. For the FM-500 Blue+ you should use the official BCE configuration utility, SMS command set, or serial configuration tool provided by the manufacturer or your reseller to set the server parameters d.plaspy.com or 54.85.159.138 and port 8888 and to select UDP or TCP if required.

If you obtain an official BCE command list or SMS templates from the manufacturer, include those commands in the same order they are recommended by BCE and apply them following the manufacturer notes.

## Configuration Notes

- Firmware differences can change available configuration options and command syntax. Verify the device firmware revision before applying settings.
- Choose UDP or TCP according to installer preference and the device firmware capabilities. Plaspy accepts both transports on port 8888.
- All devices in Plaspy use the same port 8888 so configuration is consistent across supported models.
- When configuring CAN or external sensor reporting, ensure those interfaces are enabled and mapped correctly in the BCE configuration tool before sending data to Plaspy.
- Consult the BCE documentation for SMS based setup options or serial configuration procedures if you do not use the vendor software.

## Why Use Plaspy with This Configuration

Using the BCE FM-500 Blue+ with Plaspy gives organizations centralized visibility into asset and vehicle location, movement, and optional vehicle telemetry collected via CAN interfaces. Configuring the device to report to d.plaspy.com or 54.85.159.138 on port 8888 lets Plaspy automatically detect the tracker protocol and begin ingesting position and event data for monitoring, reporting, and operational oversight.

To learn more about Plaspy visit https://www.plaspy.com and review the latest manufacturer setup details at http://www.bce.en/ to confirm device specific configuration steps and firmware behavior. Manufacturer specifications and configuration methods can change over time so it is a good practice to verify the current instructions on the official BCE website.
