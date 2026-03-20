---
slug: /ruptela/fm_eco4/configuration
id: fm_eco4-configuration
sidebar_label: Configuration
title: Ruptela - FM-Eco4 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ruptela FM-Eco4 connecting to Plaspy using shared server settings and automatic protocol detection
keywords:
  - Ruptela FM-Eco4 configuration
  - Ruptela FM-Eco4 setup
  - FM-Eco4 server configuration
  - FM-Eco4 Plaspy integration
  - Plaspy server settings
  - GPS tracker configuration guide
  - vehicle tracking setup
  - fleet tracking configuration
  - Ruptela tracker instructions
  - tracker protocol detection
---

# Ruptela - FM-Eco4 Configuration

This page provides the public configuration context and practical guidance for using the Ruptela FM-Eco4 tracker with Plaspy. It focuses on the server settings and workflow needed to point the device to Plaspy, what to check before integration, and how the tracker typically reports to the platform. The guidance here is intended for installers and fleet engineers preparing the FM-Eco4 for connection to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Refer to Ruptela documentation and your local installer tools for device-specific commands, SMS formats, or software details when following these public configuration steps.

## Configuration Overview

The goal of configuring an FM-Eco4 for Plaspy is to prepare the tracker to reliably send location and status data to the Plaspy endpoint so the device appears and updates correctly in the platform. This involves setting the server address and port, selecting the appropriate transport if required, applying any carrier or APN settings the device needs to reach the internet, and validating that the tracker successfully reports to Plaspy.

- Point the tracker to the Plaspy server endpoint so data streams to the correct platform instance.
- Configure the device transport option (UDP or TCP) as required by the device interface.
- Ensure any SIM or SMS-based configuration and APN settings are correct so the tracker can establish connectivity.
- Apply and save the configuration, then restart the tracker if required to activate the changes.
- Verify the tracker appears in Plaspy and is sending location and reporting updates.

## Plaspy Server Settings

Use the following public Plaspy server details when configuring the FM-Eco4:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

These values are the public endpoint information you should enter in the Ruptela configuration tool or SMS/CLI method provided by Ruptela or your installer.

## Typical Requirements Before Setup

- Confirm the FM-Eco4 has power and is accessible for configuration and testing.
- Obtain access to the official Ruptela configuration method or software used by your installer.
- If the device uses cellular connectivity, ensure a working SIM is installed and APN settings are known.
- Check the device firmware version and any vendor notes that affect configuration steps.
- Have Plaspy endpoint information ready: d.plaspy.com or 54.85.159.138 and port 8888.
- Prepare to test reporting and visibility in Plaspy after applying settings.

## How This Tracker Connects to Plaspy

When configured for Plaspy the FM-Eco4 is set to send its position and status messages to the platform's shared server endpoint and port. Plaspy receives the tracker data, automatically identifies the protocol used by the FM-Eco4, and makes the device visible in the fleet management interface for live tracking and reporting.

- The FM-Eco4 sends periodic location and event packets to d.plaspy.com (or 54.85.159.138) on port 8888.
- Choose UDP or TCP transport if the device configuration requires an explicit selection.
- Plaspy listens on port 8888 for all supported devices and performs automatic protocol detection.
- Once packets are received, the device appears in Plaspy and reporting begins according to the tracker reporting intervals.
- Any SMS-based or software-based features used to configure the device should ensure the final server entries match the Plaspy server settings.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software recommended for FM-Eco4 configuration.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server/center address field.
3. Set the destination port to 8888 (Plaspy uses the same port for all supported devices).
4. If the device requires choosing a transport protocol, select UDP or TCP according to your environment or installer guidance.
5. Apply or save the configuration to write the settings to the device.
6. Restart the device if the Ruptela procedure requires a reboot for changes to take effect.
7. Validate that the FM-Eco4 is reporting to Plaspy and that the device appears and updates correctly in the platform.

## Example Configuration Commands

The FM-Eco4 can be configured with vendor tools, SMS commands, or a desktop application depending on the Ruptela configuration method in use. Exact commands and syntax are determined by Ruptela firmware and the tool you use. Because manufacturer commands vary by firmware, the exact SMS or CLI text is not listed here. When using Ruptela tools, enter the Plaspy server domain or IP and port exactly as shown:

- Server domain example to enter in the tool: d.plaspy.com
- Server IP example to enter in the tool: 54.85.159.138
- Port to enter: 8888
- Transport option: choose UDP or TCP if prompted

If you prefer SMS-based configuration and have the Ruptela SMS command set available from official documentation, use the equivalent SMS commands to set server, port, and transport. Refer to Ruptela documentation for the exact SMS syntax for your firmware version.

## Configuration Notes

- Ruptela firmware versions and configuration interfaces differ; follow the vendor tool instructions that match your FM-Eco4 firmware.
- Some installations use SMS commands for remote setup while others use USB or desktop tools; use the method supported by your device and firmware.
- TCP and UDP are both supported by Plaspy on port 8888; choose the protocol per installer guidance or network constraints.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on receipt of data.
- Always confirm APN and SIM connectivity before troubleshooting server-side visibility.

## Why Use Plaspy with This Configuration

Configuring the Ruptela FM-Eco4 to report to Plaspy gives fleet operators a straightforward way to centralize tracking, vehicle status, and event monitoring in one platform. With the FM-Eco4's durability and features such as driver behavior and fuel monitoring, feeding that data into Plaspy helps teams monitor routes, improve fuel efficiency, and maintain operational oversight.

To learn more about Plaspy and how the platform supports fleet tracking, visit https://www.plaspy.com. For the latest device-specific setup instructions, firmware details, and official Ruptela commands, verify the current documentation at https://ruptela.com/ before applying configuration to production devices.
