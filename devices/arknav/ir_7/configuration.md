---
slug: /arknav/ir_7/configuration
id: ir_7-configuration
sidebar_label: Configuration
title: ArkNav - IR-7 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the ArkNav IR-7 hybrid satellite GSM tracker and how to point it to Plaspy for platform visibility
keywords:
  - ArkNav IR-7 configuration
  - IR-7 setup for Plaspy
  - ArkNav tracker configuration
  - IR-7 server configuration
  - hybrid satellite GSM tracker setup
  - GPS tracker configuration guide
  - fleet tracking platform setup
  - vehicle tracking software configuration
  - ARKNAV IR7 configuration
  - Plaspy tracker setup
---

# ArkNav - IR-7 Configuration

This page documents the public configuration context for using the ArkNav IR-7 Satellite GSM Hybrid GPS Tracker with Plaspy. It collects practical settings and workflow guidance you can use to point the device to the Plaspy endpoint so your tracker becomes visible and reportable in the platform. The content focuses on shared server values and common setup steps relevant to integrating the IR-7 with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the tools provided by the vendor. Use this guide together with ArkNav documentation and the device configuration interface or software to complete the integration.

## Configuration Overview

This configuration prepares the IR-7 to send its position and event data to Plaspy using the platform's shared endpoint and port. The goal is to set the tracker so that Plaspy receives regular updates, can identify the tracker protocol automatically, and presents the device in the Plaspy interface for monitoring.

- Point the tracker to the Plaspy server endpoint (domain or IP) so data is routed to Plaspy.
- Configure the communication port used by Plaspy and confirm transport selection if required.
- Ensure the device has the required network access via GSM or Iridium satellite service depending on deployment.
- Save and apply configuration on the IR-7 and verify that Plaspy detects the protocol and begins receiving messages.
- Validate location updates and device events appear in Plaspy to confirm end-to-end connectivity.

## Plaspy Server Settings

When configuring the IR-7 for use with Plaspy, use the following public server settings exactly as shown:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- Plaspy behavior: Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port and the platform will detect the tracker protocol automatically once the connection is established.

## Typical Requirements Before Setup

- Confirm the IR-7 is powered and accessible (installed or on-bench) with its antennas correctly connected.
- Ensure the device has an active connectivity method appropriate for the deployment: a valid GSM/GPRS SIM with service or an active Iridium satellite subscription.
- Have access to ArkNav's official configuration method such as the manufacturer software, web interface, or documented SMS/command protocol.
- Obtain any necessary APN, Iridium provisioning details, and account information for the connectivity method you will use.
- Prepare a laptop or device to run configuration tools or to send configuration SMS/commands if the IR-7 supports SMS configuration.
- Keep the device firmware and configuration guides from ArkNav available for reference.

## How This Tracker Connects to Plaspy

The IR-7 is configured to send location and telemetry data to the shared Plaspy server endpoint and port. Once the device is pointed to Plaspy, the platform will detect the protocol and begin ingesting messages for processing and display.

- The tracker sends periodic position and status packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device configuration; select the transport your deployment requires.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the appropriate parser.
- Once messages arrive at the Plaspy endpoint, the device becomes visible in the platform and location updates are available for monitoring.
- Event reporting from the tracker (alerts, inputs, power loss) is forwarded to Plaspy for operational visibility when properly configured.

## Common Configuration Workflow

1. Access the official ArkNav configuration method or software for the IR-7 (web tool, configuration app, or documented SMS/command interface).
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the server IP 54.85.159.138 according to the configuration interface options.
3. Set the communication port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device requires a transport selection and your deployment has a preference.
5. Apply or save the configuration on the IR-7 using the manufacturer tool or command sequence.
6. Restart or power-cycle the device if the configuration method or firmware requires a reboot to apply new network settings.
7. Validate that the device reports to Plaspy by confirming incoming messages and device visibility in the platform; allow a few minutes for the first reports to appear.

## Example Configuration Commands

The IR-7 can be configured with ArkNav’s official tools or command methods, which may be SMS based or provided in a desktop/mobile configuration utility. Exact commands and syntax vary by firmware and the vendor toolset, so follow ArkNav documentation for the precise method for your device.

When using a configuration interface, enter the Plaspy server as d.plaspy.com or 54.85.159.138 and set the port to 8888. Select UDP or TCP if required by the device. If your deployment uses SMS or a plain-text command interface, use the ArkNav reference for the correct syntax and preserve any placeholders such as APN or credentials as instructed by the manufacturer.

## Configuration Notes

- Firmware differences can change command syntax and available options; always verify the commands against the current ArkNav IR-7 manual.
- Choose UDP or TCP based on network conditions and reliability needs; UDP is lightweight while TCP provides connection-oriented delivery where available.
- For hybrid operation, ensure the IR-7 has correct provisioning for both GSM/GPRS (APN settings) and Iridium satellite service as required for your coverage area.
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol once the device sends data to the Plaspy endpoint.
- FOTA and COTA capabilities on the IR-7 can simplify updates and remote configuration when supported by your integration workflow.

## Why Use Plaspy with This Configuration

Configuring the ArkNav IR-7 to report to Plaspy gives organizations continuous visibility into assets that operate in remote or challenging coverage areas. The IR-7’s hybrid satellite and GSM capabilities paired with Plaspy’s automatic protocol detection and unified endpoint model allow deployments to scale without needing custom server endpoints for each device type.

To learn more about Plaspy and how it supports hybrid trackers like the IR-7, visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and manufacturer support information, verify details with ArkNav at https://www.arknavgps.com.tw/ as device behavior and setup procedures can change over time.
