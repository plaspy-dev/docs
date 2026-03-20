---
slug: /trackerking/g109/configuration
id: g109-configuration
sidebar_label: Configuration
title: TrackerKing - G109 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for integrating the TrackerKing G109 with Plaspy using shared Plaspy server settings
keywords:
  - TrackerKing G109 configuration
  - TrackerKing G109 setup
  - TrackerKing G109 Plaspy
  - G109 GPS tracker configuration
  - G109 server configuration
  - TrackerKing GPS tracker setup
  - vehicle tracker G109 configuration
  - G109 tracking software configuration
  - G109 GPS platform setup
  - TrackerKing integration with Plaspy
---

# TrackerKing - G109 Configuration

This page describes the public configuration context for using the TrackerKing G109 with Plaspy. It focuses on the practical, platform-level values and workflow you need to point the G109 at Plaspy so the device can deliver real time location, alarms, and route history into the Plaspy platform. The content here is intended to help installers and fleet managers prepare the device for integration without replacing the official manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data reaches the platform. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use the shared Plaspy endpoint information below as the destination to enter in the TrackerKing configuration tool, and consult TrackerKing documentation for device-specific steps.

## Configuration Overview

Configuring the G109 for Plaspy means preparing the tracker to reliably connect to Plaspy's server endpoint and to report location and event data for use in the Plaspy dashboards. The focus is on setting the network destination, transport, and confirming the device can send data over 4G to the platform.

- Point the tracker to the Plaspy server endpoint so packets reach d.plaspy.com
- Choose the required transport type if the device requires a selection between UDP and TCP
- Set the shared port used by Plaspy so the device data is accepted and processed
- Validate connectivity by confirming the device appears in Plaspy and sends location updates
- Verify alarms and telemetry such as ignition state, overspeed, and power-loss reach Plaspy

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when device data is received
- All devices in Plaspy use the same port so the G109 should use port 8888 for compatibility

## Typical Requirements Before Setup

- A powered and accessible G109 with sufficient battery or vehicle power for configuration and testing
- An active 4G SIM with a data plan installed in the device and correct APN settings for the carrier
- Access to the official TrackerKing configuration method or software for the G109 (manufacturer tool, SMS commands, or USB/configuration interface as provided by TrackerKing)
- A Plaspy account or administrator access to confirm the device appears and to review incoming telemetry
- A test area with reliable 4G coverage to validate live reporting and history playback
- Basic information about the device location and installation point to confirm correct behavior after deployment

## How This Tracker Connects to Plaspy

When configured for Plaspy the G109 sends its telemetry and event messages to the shared Plaspy endpoint and port so the platform can ingest and display the data. Plaspy receives the packets, automatically determines the tracker protocol, and makes position and event data available in the Plaspy UI for monitoring and alerts.

- The G109 reports position updates to the Plaspy server endpoint d.plaspy.com using port 8888
- Transport can be UDP or TCP depending on the device configuration and installer preference
- Event notifications such as vibration alarm, geo-fence, overspeed, and power-failure are forwarded to Plaspy
- Ignition status, mileage/odometer data, and other supported telemetry are included in the device reports
- Plaspy automatically detects the tracker protocol so the device can be accepted without manual protocol selection on the platform side

## Common Configuration Workflow

1. Access the official TrackerKing configuration method or software for the G109 as provided by the manufacturer.
2. In the device server settings enter the Plaspy destination using either the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 to match Plaspy?s required port for all supported devices.
4. Choose UDP or TCP for transport if the G109 requires a transport selection.
5. Save or apply the configuration in the TrackerKing tool and confirm that settings were accepted.
6. Restart the device if the manufacturer instructions indicate a restart is required for settings to take effect.
7. Validate that the device reports to Plaspy by checking for incoming location updates and event messages in your Plaspy account.

## Example Configuration Commands

The exact commands and syntax for configuring the G109 depend on the TrackerKing configuration tool, firmware release, and the method supported by your unit (for example SMS commands, a USB configuration utility, or an online web tool). Because TrackerKing provides several configuration channels and firmware versions vary, follow the official TrackerKing documentation or configuration tool to apply the Plaspy server domain or IP and port values presented above.

If you have an official set of SMS commands or a configuration file from TrackerKing, apply the destination d.plaspy.com or 54.85.159.138 and port 8888 there, or consult TrackerKing support for the exact command format for your firmware.

## Configuration Notes

- Firmware differences can change the exact configuration commands and menu labels; always check the G109 firmware notes before applying settings.
- If the device offers both UDP and TCP transports, test both types during commissioning to confirm reliable delivery for your network conditions.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on receipt, so uniform port 8888 is required.
- Confirm APN and SIM data settings on the G109 before attempting to reach d.plaspy.com so the tracker can establish a 4G data connection.
- After initial configuration, verify alarms and telemetry streams such as ignition, vibration, and mileage in Plaspy to ensure full operational visibility.

## Why Use Plaspy with This Configuration

Using the TrackerKing G109 with Plaspy gives organizations a practical route to real time vehicle and motorcycle tracking, timely alarm delivery, and historical route playback for incident review. Pointing the G109 at Plaspy?s shared server endpoint simplifies integration and lets operators focus on commissioning, testing, and operational workflows rather than backend protocol management.

To learn more about Plaspy and how it handles device ingestion, visit https://www.plaspy.com. For the most current device specific configuration commands, firmware information, and installation guidance for the G109, verify details on the manufacturer site https://trackerking.cn/ as methods and firmware behavior can change over time.
