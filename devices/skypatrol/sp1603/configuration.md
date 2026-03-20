---
slug: /skypatrol/sp1603/configuration
id: sp1603-configuration
sidebar_label: Configuration
title: SkyPatrol - SP1603 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for SkyPatrol SP1603 compatibility with Plaspy using shared server settings and practical setup steps
keywords:
  - SkyPatrol SP1603 configuration
  - SkyPatrol SP1603 setup
  - SP1603 Plaspy configuration
  - SP1603 server configuration
  - SP1603 GPS tracker setup
  - SkyPatrol ankle tracker configuration
  - offender monitoring tracker setup
  - home detention GPS setup
  - Plaspy device configuration
  - GPS tracker Plaspy integration
---

# SkyPatrol - SP1603 Configuration

This page covers the public configuration context for using the SkyPatrol SP1603 tracker with Plaspy. It explains the shared server settings Plaspy requires and the practical steps an installer or administrator typically follows to point the device at Plaspy for telemetry and event reporting. The guidance below is focused on the publicly available integration facts needed to connect the SP1603 to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this page as a practical reference for the Plaspy-side settings and workflow; confirm device-specific controls with SkyPatrol documentation and configuration utilities.

## Configuration Overview

This configuration process prepares the SP1603 to transmit location and status data into Plaspy so that supervisors and case managers can view real time telemetry and receive alerts. The public Plaspy endpoint and port are the only required platform values you need to supply on the device or during manufacturer tool configuration.

- Point the device to the Plaspy server endpoint to enable telemetry upload and event notifications.
- Configure the device transport to use either UDP or TCP depending on the device tool options.
- Ensure the device is reachable on the mobile network and that SIM configuration is correct for dual SIM setups.
- Validate device connectivity and live reporting in Plaspy after applying settings.
- Confirm tamper, battery, and presence reporting appear as expected in the Plaspy platform.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888 depending on device capability  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Charged device battery or powered installation and visible device status LEDs if present.  
- Active cellular service and properly provisioned SIM cards for dual SIM operation if used.  
- Access to the official SkyPatrol configuration method such as vendor software, web portal, or service tool.  
- Administrative access to the device configuration utility or the installer tool supplied by SkyPatrol.  
- A Plaspy account or contact with your Plaspy administrator so the device can be associated with the correct account and permissions.  
- Basic documentation for the device firmware version you are configuring to confirm available options and transport choices.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the SP1603 is set to report its telemetry and event messages to the shared Plaspy server endpoint and port so the platform can ingest, normalize, and present the data. Plaspy then applies detection logic and rules for alerts and historical logging.

- The tracker establishes outbound connections to d.plaspy.com or 54.85.159.138 using port 8888.  
- Messages are sent over the selected transport, UDP or TCP, based on device configuration.  
- Plaspy automatically determines the device protocol when the first connection is made.  
- Location updates, tamper alerts, battery status, and presence-related events are forwarded to Plaspy for visualization and logging.  
- Connectivity and dual SIM status are reported so administrators can monitor on air time and carrier failover.

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method or software provided by the manufacturer for the SP1603.  
2. In the device or vendor tool, enter the Plaspy server as d.plaspy.com or use the IP 54.85.159.138 if required by the tool.  
3. Set the device server port to 8888 which Plaspy uses for all supported devices.  
4. Choose UDP or TCP in the transport option if the device requires an explicit selection.  
5. Save or apply the configuration within the manufacturer tool so settings are written to the device.  
6. Restart or power cycle the device if the vendor instructions indicate a restart is required for changes to take effect.  
7. Validate the device appears and reports in Plaspy and confirm telemetry, tamper, and battery events are visible to supervisors.

## Example Configuration Commands

There are no public, vendor-specific command strings provided on this page. Exact configuration commands and the method to send them depend on the SkyPatrol configuration tool, firmware build, and installation workflow. When using a manufacturer utility or SMS based setup provided by SkyPatrol, you will typically supply the server domain d.plaspy.com or the alternative server IP 54.85.159.138 and set the port to 8888, then choose UDP or TCP if prompted. Always follow the vendor tool prompts and preserve any required placeholders or APN values that the device firmware requires.

## Configuration Notes

- Firmware variations and hardware revisions can change available configuration options, so always check the SkyPatrol documentation for your device firmware.  
- Installers should decide between UDP and TCP based on device tool guidance and network characteristics; Plaspy supports both on port 8888.  
- Dual SIM devices like the SP1603 require correct SIM provisioning and may include carrier failover behavior that is controlled from the device firmware.  
- Apply and save settings using the official SkyPatrol tool to ensure configurations persist across power cycles.  
- Verify tamper and beacon settings as part of functional testing after the device reports to Plaspy.

## Why Use Plaspy with This Configuration

Using the SP1603 with Plaspy gives supervisory teams a central place to receive location, tamper, and presence telemetry from ankle-worn devices built for offender monitoring. Pointing the tracker to the shared Plaspy endpoint simplifies integration because the platform uses a single port and automatic protocol detection so administrative overhead is reduced during device onboarding.

To learn more about Plaspy, visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer guidance for the SP1603, verify information on the SkyPatrol website https://www.skypatrol.com/ as device methods and firmware behavior can change over time.
