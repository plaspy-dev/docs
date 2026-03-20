---
slug: /ruptela/fm_pro4/configuration
id: fm_pro4-configuration
sidebar_label: Configuration
title: Ruptela - FM-Pro4 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the Ruptela FM Pro4 tracker with Plaspy server settings and practical setup steps
keywords:
  - Ruptela FM Pro4 configuration
  - Ruptela FM Pro4 setup
  - Ruptela GPS tracker configuration
  - Plaspy tracker setup
  - Plaspy server configuration
  - GPS tracker server settings
  - vehicle tracking FM Pro4
  - fleet management Ruptela
  - FM Pro4 CANbus configuration
  - FM Pro4 telemetry setup
---

# Ruptela - FM-Pro4 Configuration

This page covers the public configuration context for using the Ruptela FM-Pro4 tracker with Plaspy. It focuses on the practical, public-facing settings required to point the FM-Pro4 at the Plaspy collection endpoint so the device can send position and vehicle data for visibility in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use, so follow Ruptela guidance where device specific details are required.

## Configuration Overview

This configuration prepares the FM-Pro4 to send its telemetry and on board data to Plaspy so your fleet and asset monitoring workflows can receive and process the device messages. The following tasks are the practical goals when configuring the tracker for Plaspy.

- Configure the tracker to report to the Plaspy server endpoint and confirm the transport method.
- Ensure port and transport settings match Plaspy requirements so messages arrive at the platform.
- Validate connectivity and message delivery so the FM-Pro4 appears in Plaspy monitoring.
- Enable sending of vehicle data such as GPS position and available CANbus telemetry to Plaspy.
- Save and apply settings, then verify the tracker is actively reporting to the Plaspy endpoint.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the FM-Pro4. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration
- Plaspy automatically detects the tracker protocol so no manual protocol selection on the server side is required

## Typical Requirements Before Setup

- Ensure the FM-Pro4 is powered and installed according to Ruptela installation guidance.
- Have access to the official Ruptela configuration method or software for your device and firmware.
- If using cellular reporting, confirm the device has a working SIM and network connectivity and that SMS is available for alternative configuration if needed.
- Know the preferred transport mode for your deployment and ensure the device supports selecting UDP or TCP.
- Keep the device firmware and configuration utility versions noted so you can reference manufacturer instructions if behavior differs.
- Prepare any vehicle sensors or CANbus interfaces you intend to report so they are connected and enabled before testing.

## How This Tracker Connects to Plaspy

The FM-Pro4 is configured to send its telemetry and on board data to the Plaspy server endpoint and port. Once the device is pointed at the Plaspy endpoint and saved, messages from the tracker are routed to Plaspy where they are processed and made visible in the platform.

- The tracker sends GPS position messages to the Plaspy server endpoint.
- Vehicle data obtained from CANbus such as FMS or J1708 fields can be included in reports sent to Plaspy.
- The FM-Pro4 can report sensor and temperature data where configured and connected.
- Events and status updates are transmitted to Plaspy for operational monitoring.
- Connect the device to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP so Plaspy receives data and automatically detects the protocol.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software for the FM-Pro4 such as their desktop tool, web interface, or SMS command set as applicable to your device and firmware.
2. In the device server settings, enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 if your tool requires an IP.
3. Set the server port to 8888 as this is the Plaspy collection port used for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection and save that option in the configuration.
5. Apply or save the configuration changes in the Ruptela tool or send the appropriate SMS command if configuring by SMS.
6. Restart the FM-Pro4 if required by the device or recommended by the manufacturer to apply network settings.
7. Validate that the device reports to Plaspy by checking connectivity indicators in your tool or by confirming data reception in Plaspy after the device is active.

## Example Configuration Commands

The exact commands and SMS templates for the FM-Pro4 depend on Ruptela firmware and the configuration tool you are using. Manufacturers often provide both desktop configuration utilities and SMS command families. Because commands vary by firmware and distribution, use Ruptela documentation or the provided configuration tool for device specific command syntax.

If you plan to configure by SMS with a supported FM-Pro4 firmware, refer to the Ruptela SMS command reference for the correct templates and placeholders. Typical placeholders you may see in commands include APN related tokens such as [apn], [apnu], and [apnp] which should be replaced with your SIM provider credentials when required.

## Configuration Notes

- Firmware and configuration tool versions can change command syntax and available features; always check Ruptela documentation for your firmware release.
- Choose UDP or TCP based on your network and reliability needs; UDP is common for lightweight telemetry while TCP provides connection oriented delivery where supported.
- Plaspy uses the same port for all trackers and automatically detects the tracker protocol, so focus on pointing the device to d.plaspy.com or 54.85.159.138 on port 8888.
- If using SMS based configuration, ensure the device phone number and SMS command formats are correct for your firmware.
- Document your configuration steps and saved profiles to simplify future updates or fleet scale deployment.

## Why Use Plaspy with This Configuration

Using the Ruptela FM-Pro4 with Plaspy provides a straightforward way to bring vehicle GPS and on board telemetry into a single platform for fleet monitoring and operational oversight. The FM-Pro4's ability to read CANbus data and multiple sensor inputs complements Plaspy's platform capabilities to show position and available vehicle telemetry together, improving visibility for routing, fuel monitoring, and safety workflows.

To learn more about Plaspy and how it receives device data visit https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and manufacturer guidance verify the latest Ruptela documentation at https://ruptela.com/ before performing configuration or deployment.
