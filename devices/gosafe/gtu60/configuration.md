---
slug: /gosafe/gtu60/configuration
id: gtu60-configuration
sidebar_label: Configuration
title: Gosafe - GTU60 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe GTU60 showing Plaspy server settings, setup workflow and integration considerations
keywords:
  - Gosafe GTU60 configuration
  - Gosafe GTU60 setup
  - Gosafe GTU60 Plaspy
  - Gosafe tracker configuration
  - GTU60 server configuration
  - GTU60 setup guide
  - Plaspy tracker setup
  - vehicle tracker configuration
  - fleet GPS tracker setup
  - Gosafe GTU60 installation
---

# Gosafe - GTU60 Configuration

This page covers the public configuration context for using the Gosafe GTU60 with the Plaspy platform. It summarizes the Plaspy server settings you will apply on the device or in the installer tool, explains the typical workflow for making the GTU60 report to Plaspy, and highlights practical considerations based on the GTU60 device description.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Manufacturer side steps for the GTU60 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so this guide focuses on the public Plaspy values and practical setup guidance while encouraging verification with the device maker.

## Configuration Overview

This configuration process prepares the GTU60 to send location and telemetry to Plaspy so the device becomes visible and manageable within the platform. The focus is on entering Plaspy server details, choosing the transport, and validating connectivity so the tracker can report GNSS position, accelerometer events, and I O status to Plaspy.

- Configure the GTU60 to report to the Plaspy server endpoint using the public server settings.
- Choose UDP or TCP transport if required by the device and save the setting.
- Validate mobile connectivity and that the device can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Confirm the device appears in Plaspy and is sending expected position and telemetry updates.
- Use manufacturer tools or SMS configuration where supported to apply settings and reboot the tracker.

## Plaspy Server Settings

- Server domain d.plaspy.com for device reporting and ingestion
- Server IP 54.85.159.138 as an alternate server endpoint
- Port 8888 used by Plaspy for all supported devices
- Transport support for UDP or TCP when the device requires a transport selection
- Plaspy automatically detects the tracker protocol so devices using standard telematics feeds are recognized without per device protocol mapping

## Typical Requirements Before Setup

- A powered GTU60 installed or connected to a bench power source with stable voltage
- An active SIM card with mobile data enabled if using LTE or 2G for data reporting
- Access to the official Gosafe configuration method or installer software for the GTU60
- The device serial number or unique identifier available for inventory and verification
- A Plaspy account or organizational setup ready to accept the device reports for validation
- Basic tools to save, apply settings, and restart the device after configuration

## How This Tracker Connects to Plaspy

When configured, the GTU60 transmits GNSS positions, accelerometer events, and I O status to the shared Plaspy endpoint and port so fleet managers can view live location, alarms, and telemetry. The tracker can use TCP for reliable delivery or UDP for lightweight reporting, and Plaspy will classify and parse incoming protocol messages automatically.

- The GTU60 reports to the shared server endpoint d.plaspy.com or to the server IP 54.85.159.138
- All device traffic is sent to port 8888 which Plaspy uses for all supported trackers
- Plaspy automatically detects the device protocol and ingests GNSS, accelerometer, and I O telemetry
- Devices may use TCP or UDP transport depending on configuration and network conditions
- SMS reporting can be used as a fallback when supported by device firmware and operator plans

## Common Configuration Workflow

1. Power the GTU60 and ensure the SIM card is active and has data enabled.
2. Open the official Gosafe configuration method or installer software for the GTU60.
3. Enter the Plaspy server information using d.plaspy.com or the alternate server IP 54.85.159.138.
4. Set the server port to 8888 as this port is used by Plaspy for all devices.
5. Choose UDP or TCP transport if the GTU60 requires a transport selection.
6. Apply or save the configuration and follow any manufacturer prompts to commit the change.
7. Restart the GTU60 if required by the tool or device firmware to activate the new settings.
8. Validate that the device reports to Plaspy and appears in your Plaspy interface with expected position and telemetry updates.

## Example Configuration Commands

The exact commands and syntax used to configure the GTU60 depend on the Gosafe configuration tool, firmware, or SMS command set provided by the manufacturer. Manufacturers commonly provide either a PC utility, web tool, or SMS command set to enter server domain or IP, port, and transport. For device specific command examples and exact command syntax consult the official Gosafe configuration documentation or the installer tool provided by your vendor.

## Configuration Notes

- Firmware variations can change SMS command syntax and the available fields in the configuration tool; always reference the version specific release notes.
- Choosing TCP provides a reliable session oriented transport while UDP offers lower overhead; select the transport that matches your network policy and device firmware support.
- SMS based configuration may be available as an alternative method to set d.plaspy.com and port 8888 when remote or on vehicle access is required.
- Plaspy uses the same port 8888 for all compatible devices and automatically detects the incoming protocol so you generally only need to supply the correct server and port.
- Keep a copy of the device unique ID and configuration record for inventory and troubleshooting after setup.

## Why Use Plaspy with This Configuration

Using the GTU60 with Plaspy provides a practical path to real time location, telemetry, and event reporting for light commercial fleets, rental operations, and recovery workflows. The GTU60’s GNSS performance, accelerometer based crash reports, and ignition I O make it suitable for common fleet monitoring and anti theft uses when the device is configured to report to Plaspy.

To learn more about Plaspy and how it ingests and displays device telemetry visit https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and manufacturer commands consult the official Gosafe documentation at https://gosafesystem.com/ as methods and firmware features can change over time.
