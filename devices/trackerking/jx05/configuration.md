---
slug: /trackerking/jx05/configuration
id: jx05-configuration
sidebar_label: Configuration
title: TrackerKing - JX05 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the TrackerKing JX05 for Plaspy with shared server settings and practical setup steps for GT06 protocol compatibility
keywords:
  - TrackerKing JX05 configuration
  - TrackerKing JX05 setup
  - JX05 Plaspy configuration
  - TrackerKing GPS tracker setup
  - JX05 server configuration
  - JX05 GT06 setup
  - asset tracker configuration
  - 2G GPS tracker setup
  - JX05 tracking platform
  - JX05 magnetic tracker configuration
---

# TrackerKing - JX05 Configuration

This page documents the public configuration context for using the TrackerKing JX05 with the Plaspy platform. It summarizes the practical settings and workflow needed to point the JX05 at Plaspy so the tracker can forward location and alarm messages into your Plaspy account. The guidance here is based on public compatibility information: the JX05 is a 2G GSM portable tracker that uses GT06 by default with JT808 and Tianqin mapping options available for backends.

Plaspy uses shared server settings across supported devices and automatically detects the incoming tracker protocol, which simplifies device onboarding. Exact manufacturer-side steps for the JX05 configuration can vary depending on firmware version, hardware revision, installation type, and the TrackerKing configuration tools you use, so review this page together with TrackerKing documentation when performing a live setup.

## Configuration Overview

This configuration process prepares the TrackerKing JX05 to communicate reliably with Plaspy so position and alarm events become visible in the platform and downstream workflows.

- Configure the tracker to report to the Plaspy server endpoint so telemetry reaches your Plaspy account.
- Ensure the tracker uses the shared Plaspy port and an appropriate transport (UDP or TCP) as required by the device.
- Select the GT06 protocol mapping or an alternative mapping supported by the device if your integration requires JT808 or Tianqin.
- Validate connectivity and event reporting so movement, vibration, geofence and low-battery alerts appear in Plaspy.
- Save and apply settings on the tracker, then confirm device visibility in the Plaspy interface.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the JX05. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so GT06 or other supported mappings are recognized by the platform

## Typical Requirements Before Setup

- A charged JX05 unit with a healthy internal battery ready for configuration and placement.
- An active 2G GSM SIM card installed and provisioned for data access as required by your carrier.
- Network coverage at the deployment site for 2G connectivity and successful server reporting.
- Access to TrackerKing configuration methods such as the official mobile app, web tool, or vendor provisioning tools.
- Plaspy account access and permission to view newly added devices in the platform.
- The Plaspy server details (d.plaspy.com or 54.85.159.138 and port 8888) available to enter when configuring the device.

## How This Tracker Connects to Plaspy

The JX05 sends location and alarm messages over 2G to the shared Plaspy server endpoint and port. Plaspy ingests the device messages (GT06 by default, with JT808 or Tianqin options available), maps events into the platform, and makes telemetry available for live tracking and alerts.

- The tracker reports position updates and event messages to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- You may configure the device to use UDP or TCP transport on port 8888 depending on what the tracker requires.
- Plaspy automatically detects the incoming protocol mapping so messages are parsed without custom port mappings.
- Movement, vibration, geofence, overspeed and low-battery events are forwarded to Plaspy for alerting and history.
- Once the tracker is registered and reporting, device telemetry becomes visible in Plaspy dashboards and reports.

## Common Configuration Workflow

Follow these practical steps when configuring a JX05 device to work with Plaspy. The exact UI or command method depends on the TrackerKing tools or firmware you are using.

1. Access the official TrackerKing configuration method or software such as the vendor mobile app, web portal, or provisioning tool.
2. In the device server settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888.
4. Choose UDP or TCP transport if the JX05 configuration requires a transport selection.
5. Select GT06 as the protocol mapping (or JT808/Tianqin mapping if your backend requires it).
6. Apply or save the configuration on the device using the manufacturer tool.
7. Restart the device if required by the firmware or recommended by the vendor.
8. Validate that the device reports to Plaspy and that location and alarm messages appear in your Plaspy account. Remember that Plaspy uses the same port for all devices and automatically detects the protocol.

## Example Configuration Commands

The JX05 can be configured using TrackerKing’s official tools, mobile app, or device provisioning methods. Exact command formats and steps vary by firmware and the vendor interface, so there are no universal commands included here.

If you expect to use SMS or remote command strings for configuration, refer to the TrackerKing user manual or configuration guide for the precise SMS command syntax and supported placeholders. Always confirm command formats against the current TrackerKing documentation before sending configuration commands to devices.

## Configuration Notes

- Firmware and hardware revisions may change the configuration UI or supported command syntax; verify the device firmware version before applying settings.
- The JX05 defaults to GT06 but also supports JT808 and Tianqin mappings; ensure you select the mapping that matches how you want Plaspy to interpret messages.
- UDP is a common choice for tracker telemetry; use TCP if the device or network requires a reliable transport, but both options are supported on port 8888 by Plaspy.
- Confirm APN and carrier settings on the SIM so the tracker can establish an outgoing data connection to d.plaspy.com.
- Always consult TrackerKing configuration instructions for any device-specific commands, reset procedures, or optional settings.

## Why Use Plaspy with This Configuration

Using the TrackerKing JX05 with Plaspy gives organizations centralized visibility of long‑standby asset trackers without the need for permanent wiring. The combination of a high capacity battery, magnet-mounted portability, and GT06 protocol compatibility makes the JX05 a practical choice for trailers, containers, construction equipment and other unattended assets. When correctly pointed to the shared Plaspy endpoint, the device’s location and alarm events become part of a unified telemetry stack for monitoring and operational response.

To learn more about Plaspy and how it integrates with devices like the TrackerKing JX05 visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer support, verify details on the TrackerKing website https://trackerking.cn/. Device specific setup methods, firmware behavior, and manufacturer details can change over time so check the manufacturer documentation to ensure your configuration is current.
