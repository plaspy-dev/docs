---
slug: /trackerking/j14/configuration
id: j14-configuration
sidebar_label: Configuration
title: TrackerKing - J14 Configuration
sidebar_class_name: menu_item_tracker
description: Configure TrackerKing J14 for use with Plaspy real time tracking and event reporting using shared server settings
keywords:
  - TrackerKing J14 configuration
  - TrackerKing J14 setup
  - TrackerKing J14 Plaspy
  - J14 GPS tracker configuration
  - vehicle tracker configuration Plaspy
  - GPS tracker setup guide
  - J14 installation guide
  - TrackerKing GPS integration
  - fleet tracking J14
  - J14 server settings Plaspy
---

# TrackerKing - J14 Configuration

This page documents the public configuration context for using the TrackerKing J14 with Plaspy. It explains the shared server settings Plaspy expects, practical setup considerations, and a general workflow to prepare the J14 for reliable reporting to the Plaspy platform. The content is intended for integrators, fleet managers, and installers who need clear, nonproprietary guidance on getting a J14 online with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installer method, or vendor configuration tools. The J14 is a compact wired vehicle tracker with GPS and BDS positioning, a rugged IP65 enclosure, wide 9–90 V DC input, and a comprehensive alarm suite that supplies the position and event data Plaspy ingests.

## Configuration Overview

Preparing the J14 for Plaspy means configuring the device to send its GNSS fixes and alarm messages to Plaspy's shared server endpoint and validating the device is visible in the platform. The goal is to enable continuous, reliable reporting so Plaspy can provide live maps, event alerts, and historical playback.

- Enter the Plaspy server endpoint and port on the J14 using the manufacturer configuration tool.
- Choose the transport mode if the device requires TCP or UDP selection.
- Confirm the device is powered and operating within its supported voltage range for continuous reporting.
- Verify the device is reporting GNSS and alarm messages to Plaspy and that events appear in the platform.
- Perform an operational test of common alarms such as geofence and movement to confirm end to end visibility.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the J14. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- Device is installed and receiving vehicle power within the supported 9 to 90 V DC range.
- Access to the TrackerKing configuration method or official manufacturer software provided by the vendor or installer.
- Network connectivity for the device consistent with the manufacturer guidance for cellular or backend transport if applicable.
- A Plaspy account or access provided by your Plaspy administrator to confirm device reporting once configured.
- Note of device identifiers or tags used by your installer for later identification in Plaspy dashboards.
- A test plan to validate location updates and common alarm events after configuration.

## How This Tracker Connects to Plaspy

When configured, the J14 sends GNSS position fixes and alarm messages to the Plaspy server endpoint and port so the platform can display live location and trigger event workflows. Plaspy collects the device telemetry and automatically detects the communicating tracker protocol to interpret messages correctly.

- The device reports position fixes to the shared Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry includes event notifications such as geofence breaches, overspeed alerts, movement, and power cut events that appear in Plaspy dashboards.
- Data is received over either UDP or TCP depending on your choice during configuration and Plaspy auto detects the protocol.
- Plaspy ingests the J14 data for live tracking, alerting, and historical route playback to support fleet and recovery workflows.
- Administrators can validate device visibility in Plaspy once the J14 is reporting to the shared endpoint and port.

## Common Configuration Workflow

1. Access the official TrackerKing J14 configuration method or software provided by the manufacturer or installer.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 as required by Plaspy.
4. Choose UDP or TCP if the J14 configuration requires selecting a transport mode.
5. Apply or save the configuration using the manufacturer tool or SMS method if supported by the device.
6. Restart the J14 if the device firmware requires a reboot to apply network settings.
7. Validate that the device reports to Plaspy by checking the Plaspy dashboard or using any available manufacturer verification commands.
8. Perform functional checks for position updates and at least one alarm event to confirm end to end visibility.

## Example Configuration Commands

The J14 model configuration provided here does not include manufacturer commands in this public document. Exact configuration commands and tools vary by TrackerKing firmware, vendor tool, or regional firmware variant. Use the official TrackerKing configuration app or SMS command set supplied by your vendor for device specific commands and follow the order required by those tools.

If you have manufacturer provided commands from TrackerKing, apply them using the recommended method and ensure you point the device at d.plaspy.com or 54.85.159.138 and port 8888, then choose UDP or TCP if needed. Keep any placeholders in manufacturer commands such as APN or credentials intact when using vendor templates.

## Configuration Notes

- Firmware differences and regional variants can change the exact configuration interface and available commands. Confirm the version with your supplier before changing settings.
- Choose TCP or UDP according to your installation needs and the options presented by TrackerKing firmware. Plaspy automatically detects the protocol once data reaches the server.
- Test configurations in a controlled environment before wide deployment to verify alarms and position reporting appear correctly in Plaspy.
- Keep the manufacturer documentation handy for device specific procedures, especially for alarm behavior or input wiring during hardwired installations.
- When using SMS based configuration methods from the manufacturer, follow the exact SMS templates provided by TrackerKing to avoid misconfiguration.

## Why Use Plaspy with This Configuration

Using the TrackerKing J14 with Plaspy provides a straightforward path to continuous vehicle visibility, event driven alerts, and historical route playback for fleet management, recovery, and anti-theft operations. The J14's dual GNSS positioning and comprehensive alarm set supply the core telemetry Plaspy needs to power operational monitoring and incident response workflows.

To learn more about Plaspy and how it ingests device telemetry, visit https://www.plaspy.com. For the latest TrackerKing J14 device specific instructions, firmware notes, and official configuration tools, verify details on the manufacturer website https://trackerking.cn/ since configuration methods and firmware behavior can change over time.
