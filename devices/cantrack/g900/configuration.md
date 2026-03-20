---
slug: /cantrack/g900/configuration
id: g900-configuration
sidebar_label: Configuration
title: CanTrack - G900 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the CanTrack G900 to Plaspy with shared server settings and practical setup steps
keywords:
  - CanTrack G900 configuration
  - G900 setup guide
  - CanTrack G900 server configuration
  - G900 Plaspy setup
  - CanTrack GPS tracker configuration
  - vehicle tracking G900
  - fleet tracking G900
  - G900 platform setup
  - CanTrack tracker Plaspy compatibility
  - G900 installation guide
---

# CanTrack - G900 Configuration

This page covers the public configuration context for using the CanTrack G900 tracker with the Plaspy platform. It explains the shared Plaspy server settings you will apply to the device and provides practical setup guidance based on the G900 capabilities such as real time tracking, overspeed alarm, and power cut alarm.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this page to understand the required server values and recommended workflow before applying manufacturer configuration tools or SMS commands.

## Configuration Overview

The goal of this configuration is to prepare the G900 to communicate reliably with Plaspy so location and event data become visible in the platform. The instructions below are centered on the shared Plaspy endpoint and the practical steps you will follow when using CanTrack configuration tools or vendor software.

- Point the G900 to the Plaspy server endpoint so the device can deliver telemetry to Plaspy.
- Select the correct transport (UDP or TCP) and set the shared port used by Plaspy.
- Validate connectivity from the device to the Plaspy server and confirm protocol detection.
- Verify event reporting for alarms such as overspeed and power cut so alerts appear in Plaspy.
- Save and apply settings through the official CanTrack configuration method and confirm the device is visible on the platform.

## Plaspy Server Settings

When configuring the CanTrack G900 for Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so you do not need to specify a protocol inside Plaspy

All devices configured to use Plaspy use the same port, and Plaspy will detect the tracker protocol automatically after the device connects to the endpoint above.

## Typical Requirements Before Setup

- Power the device according to manufacturer guidance and confirm the tracker reports status.
- Active SIM with data allowed if the G900 uses GSM GPRS for uplink as specified by the device network capabilities.
- Access to the official CanTrack configuration method, software, or SMS commands used for your device firmware and region.
- Basic GSM network coverage at the installation location to permit device registration on the mobile network.
- A clear plan for transport selection (UDP or TCP) depending on installer preference or device firmware options.
- Ability to safely restart the device after applying settings if required.

## How This Tracker Connects to Plaspy

The G900 sends location and event data to the shared Plaspy endpoint so the device can be monitored within Plaspy in near real time. Apply the Plaspy server settings to allow the tracker to establish a session and deliver telemetry.

- The device reports position updates and event notifications to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy will automatically detect the device protocol once the tracker connects to the shared server and port.
- Telemetry will include real time tracking updates and event alerts like overspeed or power cut as produced by the tracker.
- Choosing UDP or TCP determines how the device transports packets to the Plaspy endpoint; both are accepted on port 8888.
- After configuration and a successful connection, the device becomes visible and manageable in Plaspy for monitoring and reporting.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or vendor software appropriate for your G900 firmware and region.
2. In the device or tool settings enter the server address d.plaspy.com or the server IP 54.85.159.138 as indicated by your installer guide.
3. Set the server port to 8888 to match Plaspy's shared port for all devices.
4. Choose UDP or TCP as the transport if the device or configuration tool requires selecting a transport.
5. Apply or save the configuration within the manufacturer tool or via the device command method.
6. Restart the G900 if the configuration method or firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by confirming connectivity and checking that the device appears in the platform.

## Example Configuration Commands

The G900 may be configured by the official CanTrack configuration tool or via SMS/command methods provided by the manufacturer. Exact commands and the command format depend on firmware version and the configuration channel used. Because manufacturer tools and command sets vary, follow the official CanTrack documentation or the configuration utility supplied with your device for the exact command syntax.

If you have specific commands from CanTrack for your firmware, include them in the vendor tool or SMS method in the order recommended by the manufacturer. For general guidance, enter the Plaspy server address and port as shown in the configuration workflow above.

## Configuration Notes

- Firmware differences and hardware revisions can change available settings and the exact configuration workflow; check the device firmware version before applying commands.
- TCP and UDP both work with Plaspy on port 8888. Choose the transport mode required by your installation or recommended by the manufacturer if either option is exposed.
- Because Plaspy detects protocols automatically, you do not need to configure protocol type on the Plaspy side; focus on sending correct server and port values from the device.
- Use the official CanTrack configuration tool or documented SMS command set for the most reliable results and to preserve device-specific options.
- Test event reporting for overspeed and power cut after configuration to confirm those alarms are received in Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the CanTrack G900 provides a straightforward way to centralize tracking and event visibility. The G900's real time location reporting, overspeed alarm, and power cut alarm can be forwarded to Plaspy so fleet managers and asset owners gain operational oversight and timely alerts.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and official commands, verify configuration steps on the CanTrack website https://www.cantrackgps.com/ as manufacturer specifications and setup methods can change over time.
