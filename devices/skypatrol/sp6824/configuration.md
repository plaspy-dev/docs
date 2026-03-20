---
slug: /skypatrol/sp6824/configuration
id: sp6824-configuration
sidebar_label: Configuration
title: SkyPatrol - SP6824 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for SkyPatrol SP6824 showing Plaspy compatibility and required server settings for integration
keywords:
  - SkyPatrol SP6824 configuration
  - SkyPatrol SP6824 setup
  - SP6824 server configuration
  - SP6824 Plaspy setup
  - Plaspy GPS tracker configuration
  - vehicle tracking SP6824
  - SP6824 fleet management setup
  - GPS platform setup SP6824
  - SP6824 OBDII integration
  - LTE M tracker configuration
---

# SkyPatrol - SP6824 Configuration

This page covers the public configuration context for using the SkyPatrol SP6824 with Plaspy. It explains the shared server settings Plaspy requires, the general purpose of configuring the device, and the practical steps commonly used to point the tracker at the Plaspy server so it can report location and telemetry.

Plaspy uses a common server endpoint and port across supported devices and automatically detects the tracker protocol when data arrives. Manufacturer side configuration steps for the SP6824 can vary depending on firmware, hardware revision, installation type, and vendor tools, so review the device documentation for exact commands and configuration interfaces before making changes.

## Configuration Overview

Configuring the SP6824 for Plaspy prepares the device to send location and telemetry to the platform reliably. The process focuses on setting the device to report to Plaspy's shared server endpoint, selecting the correct transport, and validating that the device appears in the Plaspy platform.

- Point the tracker to the Plaspy server endpoint so data is routed to the platform.
- Set the device port and transport to match Plaspy requirements used by all devices in the platform.
- Verify cellular connectivity and GNSS fixes so the tracker can send accurate updates.
- Save and apply settings, then confirm the SP6824 is visible and reporting in Plaspy.
- Use manufacturer tools to capture any device-specific options such as OBDII telemetry forwarding if using the OBDII variant.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to interpret incoming device messages.

## Typical Requirements Before Setup

- A powered SP6824 installed or connected so it has device power and GNSS reception
- Active LTE M cellular service on the device or compatible cellular provisioning for LTE Cat M1
- Access to the official SkyPatrol configuration method or vendor software to change server and transport settings
- A valid Plaspy account and ability to confirm device registration or appearance in the platform
- OBDII access if you are using the optional OBDII plug and play variant and want vehicle diagnostics forwarded
- Manufacturer documentation for your hardware revision and firmware version

## How This Tracker Connects to Plaspy

The SP6824 transmits position and telemetry over LTE M to Plaspy. Once configured to report to the shared Plaspy endpoint and port, the device’s messages are routed into the Plaspy platform where they are processed and presented for monitoring and alerting.

- The tracker is configured to report to d.plaspy.com or the equivalent IP 54.85.159.138
- Messages are sent to port 8888 which Plaspy uses for all devices
- Transport may be UDP or TCP depending on device options and installer preference
- Plaspy automatically detects and interprets the device protocol on incoming connections
- Device events, location updates, and available telemetry are made visible within Plaspy for operational monitoring

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method or software for the SP6824 per the manufacturer instructions.
2. Enter the Plaspy server as either d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888, noting that Plaspy uses the same port for all devices.
4. If the device requires selecting a transport, choose UDP or TCP according to your installation needs.
5. Apply or save the configuration changes in the manufacturer tool or device menu.
6. Restart the device if the tool or firmware requires a reboot for network settings to take effect.
7. Validate that the SP6824 is reporting to Plaspy and visible in the platform, and confirm location updates and expected telemetry are received.

## Example Configuration Commands

The exact commands and configuration interface for the SP6824 depend on SkyPatrol manufacturer tools, firmware, and the specific hardware revision. Because methods vary, follow the official SkyPatrol configuration guide or the vendor-provided utility to set the server and port. Typical manufacturer methods include a configuration application, SMS or serial/USB command tool, or an HTTP/USB configuration interface. Consult SkyPatrol documentation for the precise command format for your firmware.

## Configuration Notes

- Firmware differences can change the exact configuration commands and menu locations; verify the SP6824 firmware version before making changes.
- Choose UDP or TCP based on reliability and network conditions; both transports are supported when using port 8888 to reach Plaspy.
- Plaspy uses a single shared port for all devices and performs automatic protocol detection, so the device only needs to target the correct endpoint and port.
- If using the OBDII plug and play variant, confirm OBDII wiring and manufacturer instructions to enable diagnostic telemetry forwarding.
- Always keep a current copy of the SkyPatrol documentation for your model and revision to ensure you apply the correct configuration method.

## Why Use Plaspy with This Configuration

Using the SkyPatrol SP6824 with Plaspy provides a straightforward path to continuous vehicle and asset visibility. The SP6824’s LTE M connectivity and compact form factor make it suitable for discreet installations across fleets and dealer lots, while Plaspy collects and normalizes incoming telemetry for monitoring, geofencing, and alerting.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific setup information, firmware details, and official SkyPatrol instructions, verify current guidance on the manufacturer site https://www.skypatrol.com/ as device behavior and configuration methods can change over time.
