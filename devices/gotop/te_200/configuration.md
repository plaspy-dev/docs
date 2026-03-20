---
slug: /gotop/te_200/configuration
id: te_200-configuration
sidebar_label: Configuration
title: GOTOP - TE-200 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the GOTOP TE-200 showing Plaspy server settings and practical setup steps for tracking
keywords:
  - GOTOP TE-200 configuration
  - GOTOP TE-200 setup
  - TE-200 Plaspy
  - GOTOP tracker configuration
  - pet tracker configuration
  - GPRS tracker setup
  - GPS tracker setup
  - Plaspy server settings
  - tracker integration guide
  - TE-200 GPS setup
---

# GOTOP - TE-200 Configuration

This page documents the public configuration context for using the GOTOP TE-200 mini pet tracker with Plaspy. It focuses on the practical, platform-side settings and the typical steps required to point a TE-200 at Plaspy for real time tracking, telemetry, and event reporting. Use this guide together with your device manual and the manufacturer tools to complete setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device is pointed at the Plaspy endpoint. Exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools, so consult the official GOTOP configuration instructions for device-specific commands and options.

## Configuration Overview

Configuring the TE-200 for Plaspy prepares the device to send position, status, and alert messages to Plaspy where they appear on maps, timelines, and alert feeds. The TE-200 supports GPRS data reporting and SMS reporting, plus features such as two-way voice monitoring and configurable alarms that complement Plaspy visibility.

- Point the device to the Plaspy server endpoint so GPRS reports reach Plaspy
- Select the transport (UDP or TCP) and set the shared port used by Plaspy
- Ensure the device has an active SIM and data availability for GPRS reporting
- Validate the device appears in Plaspy and that events like geo-fence and low battery are reported
- Save and, if needed, restart the tracker to apply settings and initiate reporting

## Plaspy Server Settings

When configuring the TE-200 for Plaspy, use the following public Plaspy settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol after the device connects

Note: Plaspy uses the same port for all supported devices and will detect the correct protocol automatically once the TE-200 connects to the server endpoint.

## Typical Requirements Before Setup

- Charged device battery and functional power source for initial configuration
- Micro SIM installed with an active data plan for GPRS reporting or SMS capability enabled if using SMS reporting
- Access to the official GOTOP configuration method or software for the TE-200
- Device powered on and reachable by the configuration tool or SMS interface
- A Plaspy account or project configured to receive and identify the TE-200 once it begins reporting
- Basic knowledge of choosing TCP or UDP transports if the device requires a selection

## How This Tracker Connects to Plaspy

The TE-200 sends location and device status messages to Plaspy using its GPRS data connection or, if configured, SMS. By directing the TE-200 to the Plaspy server endpoint and the shared port, the device becomes visible on Plaspy dashboards and can deliver alerts and telemetry for monitoring and history.

- TE-200 transmits position updates and telemetry to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device settings; Plaspy accepts both
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required on the server side
- Motion, geo-fence, low battery, and other alarm events are sent to Plaspy for alerts and logging
- If coverage is lost, the TE-200 can buffer points and re-upload them to Plaspy when connectivity is restored

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the TE-200 (manufacturer web tool, desktop app, or SMS commands as provided by GOTOP).
2. In the device server settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 (Plaspy uses this same port for all devices).
4. Choose UDP or TCP if the TE-200 requires selecting a transport protocol.
5. Apply or save the configuration in the GOTOP configuration tool or send the appropriate SMS command to store settings.
6. Restart the TE-200 if the manufacturer instructions indicate a reboot is required to activate the new server settings.
7. Validate that the device reports to Plaspy by checking for an initial position or status update in your Plaspy project and confirming alerts appear as expected.

## Example Configuration Commands

The TE-200 manufacturer documentation and configuration tool define the exact commands or SMS strings used to set server and transport options. Because command formats vary by firmware and vendor tool, the precise commands are not included here. Use the official GOTOP configuration method or the TE-200 user manual to obtain the exact command syntax and examples for:

- Setting the server to d.plaspy.com or 54.85.159.138
- Setting the port to 8888
- Choosing UDP or TCP if required
- Saving settings and triggering a device restart

Refer to the GOTOP manual for step by step command examples and SMS strings specific to the TE-200 firmware version.

## Configuration Notes

- Firmware and hardware revisions may change command syntax and available configuration options; always confirm commands against the TE-200 documentation.
- If the device supports both GPRS and SMS reporting, choose GPRS for real time location over Plaspy and reserve SMS for fallback or emergency reporting.
- When given a choice, UDP is often used for efficient location reporting, while TCP can be selected if packet delivery confirmation is preferred; Plaspy accepts both transports on port 8888.
- Plaspy will automatically detect the tracker protocol once the TE-200 connects to d.plaspy.com or 54.85.159.138 on port 8888, so server-side protocol configuration is not required.
- Keep a note of any placeholders in manufacturer commands such as APN values and consult your mobile provider for correct APN credentials if required.

## Why Use Plaspy with This Configuration

Using the GOTOP TE-200 with Plaspy provides a compact, battery efficient option for pet and small asset tracking while delivering continuous visibility through Plaspy maps, timelines, and alert feeds. The TE-200’s GPRS and SMS reporting capabilities, internal log buffer, and alarms combine with Plaspy’s centralized endpoint and automatic protocol detection to provide a straightforward integration path for real time monitoring and historical reporting.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and command syntax for the GOTOP TE-200, verify details on the manufacturer site https://www.gotop.cc/. Manufacturer configuration methods and firmware behavior can change over time, so confirm current instructions with the official GOTOP documentation.
