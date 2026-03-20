---
slug: /gosafe/gtu50/configuration
id: gtu50-configuration
sidebar_label: Configuration
title: Gosafe - GTU50 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe GTU50 showing Plaspy server settings and practical setup steps for real time tracking
keywords:
  - Gosafe GTU50 configuration
  - Gosafe GTU50 setup
  - Gosafe GTU50 Plaspy
  - GTU50 server configuration
  - GTU50 tracking configuration
  - Gosafe GPS tracker setup
  - Plaspy tracker integration
  - vehicle tracker configuration
  - fleet management tracker setup
  - GPS tracker configuration guide
---

# Gosafe - GTU50 Configuration

This page provides the public configuration context for using the Gosafe GTU50 tracker with Plaspy. It explains the server settings and practical setup steps commonly required to point a GTU50 at Plaspy so the device can report location and event telemetry into the platform. The guidance here centers on the Plaspy server values that every supported tracker uses and the typical manufacturer-side actions needed for a successful integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device communicates with the platform. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools, so follow this page for the public Plaspy settings and practical workflow while also confirming any device-specific steps in the GTU50 documentation.

## Configuration Overview

Configuring a GTU50 for Plaspy is primarily about directing the tracker to the Plaspy server endpoint and validating connectivity so the device appears in the Plaspy platform and streams telemetry reliably. The process typically involves using the manufacturer’s configuration interface or SMS commands to set the server address, transport, and port, then testing that the device sends location and event messages to Plaspy.

- Point the device to the Plaspy server endpoint and port used by all Plaspy devices.
- Choose the transport mode the device supports, either UDP or TCP, and save the setting.
- Verify the device has an active cellular connection and can reach the Plaspy endpoint.
- Confirm the GTU50 reports GNSS fixes and events like ignition or SOS into Plaspy.
- Validate in-platform that the tracker is visible and telemetry is parsed correctly.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when devices connect

Note that Plaspy uses the same port for all supported devices and will attempt to detect the protocol used by a tracker automatically.

## Typical Requirements Before Setup

- A powered and correctly wired GTU50 device installed per the manufacturer instructions.
- Active cellular service with a data enabled SIM compatible with the GTU50 network bands and provisioned for internet connectivity and SMS if required.
- Access to the official Gosafe configuration method such as the vendor configuration tool, mobile app, or SMS command set.
- The GTU50 IMEI or other device identifier for registration and verification in your fleet records.
- GNSS visibility for initial position lock during configuration testing.
- Access to Plaspy account credentials or administrator access as needed to verify device presence and telemetry after setup.

## How This Tracker Connects to Plaspy

When configured, the GTU50 sends its telemetry to the shared Plaspy endpoint so operators can monitor vehicle location, events, and status in near real time. The device is set to report to the Plaspy server address and port and uses the chosen transport to carry tracking and event messages into the platform.

- The tracker is configured to report to d.plaspy.com or directly to the IP 54.85.159.138 on port 8888.
- The GTU50 can use either UDP or TCP as its transport when you set the device transport option.
- Plaspy automatically detects the tracker protocol when data arrives so manual protocol selection is optional on the server side.
- Location updates, ignition and SOS events, and stored logs will be forwarded to Plaspy for processing and display.
- After connectivity is established, verify telemetry appears in Plaspy dashboards and that event notifications are delivered as expected.

## Common Configuration Workflow

1. Access the official Gosafe configuration method or software for the GTU50 (manufacturer tool, mobile app, or SMS commands).
2. Locate the server or remote reporting settings in the device configuration.
3. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the IP 54.85.159.138.
4. Set the port to 8888 as required by Plaspy.
5. Choose UDP or TCP if the GTU50 requires a transport selection; either is supported by Plaspy.
6. Apply or save the configuration in the device tool and confirm settings were written.
7. Restart the device if the configuration tool or GTU50 firmware requires a reboot for changes to take effect.
8. Validate that the device reports to Plaspy by checking device visibility and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The GTU50 model configuration and commands can vary by firmware and by the manufacturer’s configuration tool. Because the GTU50 supports multiple configuration methods (desktop tool, mobile app, and SMS based commands), the exact commands or UI steps depend on the version you are using. In all cases, ensure the device is set to use the Plaspy endpoint d.plaspy.com or the IP 54.85.159.138 and port 8888, and select UDP or TCP if required by the device UI.

If you have vendor-provided SMS commands or a configuration script from Gosafe, use those tools to set:
- Server to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP

Refer to the official Gosafe configuration document or the installer tool for the precise command syntax for your firmware.

## Configuration Notes

- Firmware differences may change the exact menu names, command syntax, or steps in the Gosafe configuration tool; always check firmware release notes.
- Choosing TCP or UDP typically depends on installer preference and network behaviour; Plaspy accepts either and will detect the protocol automatically.
- Some GTU50 units can be configured via SMS commands as well as configuration software; SMS steps and command formats are vendor specific.
- All Plaspy devices use the same port 8888 so you do not need per device port mapping on the server side.
- After applying changes it is good practice to reboot the tracker and confirm a fresh connection to d.plaspy.com or 54.85.159.138 on port 8888.

## Why Use Plaspy with This Configuration

Using the GTU50 with Plaspy provides a straightforward way to collect real time location and event data for fleet management, stolen vehicle recovery, insurance telematics, and rental or inventory control. Directing the GTU50 to the shared Plaspy server endpoint simplifies deployment because Plaspy uses consistent server settings and automatic protocol detection across supported devices.

To learn more about Plaspy and how it handles device data and integrations visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and command reference from the manufacturer, consult the Gosafe website at https://gosafesystem.com/ to verify that configuration methods and behavior match your GTU50 hardware and firmware.
