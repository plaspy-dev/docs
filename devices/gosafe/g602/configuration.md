---
slug: /gosafe/g602/configuration
id: g602-configuration
sidebar_label: Configuration
title: Gosafe - G602 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring the Gosafe G602 tracker for use with Plaspy using shared server settings and practical setup steps
keywords:
  - Gosafe G602 configuration
  - Gosafe G602 setup
  - Gosafe G602 Plaspy
  - G602 server configuration
  - G602 GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracker configuration guide
  - fleet telematics setup
  - GPS device integration
  - tracking platform configuration
---

# Gosafe - G602 Configuration

This page describes the public configuration context for using the Gosafe G602 tracker with Plaspy. It focuses on the shared server settings and practical setup steps that make the G602 compatible with Plaspy out of the box, and what to check during installation and first connection. Use this guidance together with the manufacturer documentation for device specific commands and tools.

Plaspy uses a shared server endpoint and the same port across supported devices and automatically detects the tracker protocol. Manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools, so confirm exact commands and menus in the G602 manuals or tools when following this guide.

## Configuration Overview

The goal of configuring a G602 for Plaspy is to point the device at Plaspy's ingest endpoint, verify the transport and connectivity, and confirm the device reports location and event data to your Plaspy account. The G602 supports TCP UDP and SMS reporting, which gives installers flexibility depending on network and site requirements.

- Configure the G602 to send telemetry to the Plaspy server endpoint so position and events reach the platform.
- Choose the appropriate transport mode on the device or via SMS based on connectivity and installer preference.
- Verify cellular and SIM readiness so the device can reach the Plaspy endpoint.
- Test reporting so the device is visible in Plaspy and sends expected events such as ignition, movement, and crash telemetry.
- Save and apply firmware or configuration changes and, if required, restart the device to activate settings.

## Plaspy Server Settings

- Server domain d.plaspy.com for device reporting and ingestion
- Server IP 54.85.159.138 as an alternative endpoint if a numerical address is required
- Port 8888 which is the single port used by Plaspy for all devices
- Transport support using UDP or TCP depending on device configuration
- Plaspy automatically detects the tracker protocol so devices configured to report to the shared endpoint will be ingested correctly

## Typical Requirements Before Setup

- A powered G602 with the two wire installation completed and stable vehicle voltage present
- An active SIM with data enabled where required for cellular connectivity and reporting
- Access to the Gosafe G602 configuration method such as the official configuration tool, SMS commands, or the device web interface if provided
- Knowledge of the target Plaspy server d.plaspy.com or 54.85.159.138 and port 8888 to enter into the device
- A safe test area with GPS visibility to validate position reporting to Plaspy after configuration
- The latest device firmware where possible and the manufacturer configuration guide from Gosafe

## How This Tracker Connects to Plaspy

When configured, the G602 sends its position, event and sensor data to the Plaspy shared server endpoint and port. Plaspy ingests this stream and maps it to the vehicle record and available analytics so fleets can monitor location and events in near real time.

- The device reports telemetry to d.plaspy.com or 54.85.159.138 using the configured transport
- Data is sent to port 8888 which Plaspy uses for all supported devices
- Plaspy automatically detects the tracker protocol and processes incoming data for location and events
- Reports include standard position updates and event driven messages such as crash telemetry and driver behavior where enabled
- Once reporting is active the device becomes visible in the Plaspy platform for monitoring and rule based alerts

## Common Configuration Workflow

1. Access the official Gosafe G602 configuration method or software as documented by the manufacturer.
2. In the device configuration enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the destination port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP as the transport if the device requires an explicit selection; pick the transport appropriate to your network and policy.
5. Apply or save the configuration in the device tool or send the configuration via SMS if the device supports SMS configuration.
6. Restart the device if the configuration method or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking visibility and incoming telemetry in the Plaspy platform.

## Example Configuration Commands

The exact commands and syntax for configuring the G602 are provided by Gosafe and can vary by firmware and regional device variant. Configuration is commonly done with the official Gosafe configuration tool, by USB or micro USB connection, or by SMS commands when supported. Consult the Gosafe configuration guide for exact command formats and example strings before issuing commands.

If you are using SMS based configuration the manufacturer may provide templates such as placeholders for APN or credentials in the format {{apn}} {{apnu}} {{apnp}}. Keep placeholders intact and replace them with your network operator values when required.

## Configuration Notes

- Firmware differences and regional variants can change exact menu names and SMS command syntax; always confirm with the current Gosafe documentation.
- TCP versus UDP selection can affect delivery characteristics depending on cellular networks and operator behavior; choose based on reliability and latency needs.
- SMS based configuration is often available as a fallback on devices that support SMS reporting, but SMS syntax and available options depend on the firmware build.
- Because Plaspy uses the same port for all devices and automatic protocol detection, the critical steps are pointing the device to d.plaspy.com or 54.85.159.138 and ensuring port 8888 is configured and reachable.
- Installer best practices include testing device reporting in a controlled environment and recording firmware version and configuration parameters for fleet records.

## Why Use Plaspy with This Configuration

Using the G602 with Plaspy gives organizations a fast install telematics option that combines compact hardware with Plaspy server compatibility. Pointing the device to Plaspy's shared endpoint and port enables the platform to ingest location and event data for monitoring, alerts, analytics and operational workflows such as dispatch and incident handling.

Learn more about Plaspy and how it integrates with fleet devices at https://www.plaspy.com. For the most current device specific commands, firmware notes, and configuration tools refer to the official Gosafe documentation at https://gosafesystem.com/ as manufacturer setup methods and firmware behavior may change over time.
