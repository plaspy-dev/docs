---
slug: /gosafe/g797/configuration
id: g797-configuration
sidebar_label: Configuration
title: Gosafe - G797 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Gosafe G797 OBD2 tracker to Plaspy using shared server settings and automatic protocol detection
keywords:
  - Gosafe G797 configuration
  - Gosafe G797 setup
  - Gosafe G797 server configuration
  - G797 Plaspy setup
  - G797 tracker configuration
  - Gosafe OBD2 tracker setup
  - G797 GPS platform setup
  - G797 fleet tracking setup
  - G797 telemetry configuration
  - Plaspy device configuration
---

# Gosafe - G797 Configuration

This page provides the public configuration context for using the Gosafe G797 OBD2 GPS tracker with Plaspy. It covers the shared server settings Plaspy requires, the practical workflow to point a G797 at the Plaspy endpoint, and general considerations for validating connectivity and visibility in the Plaspy platform. It is written to help fleet engineers, integrators, and installers apply the publicly available settings needed for Plaspy integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this guidance together with the G797 manufacturer documentation and provisioning tools when available to complete the integration.

## Configuration Overview

This configuration process prepares the G797 to deliver GNSS position, OBD diagnostic data, and event telemetry to Plaspy so the device becomes visible and useful in a fleet or insurance telematics workflow.

- Point the G797 to the Plaspy server endpoint so recorded data is sent to the correct ingestion host.
- Choose the transport method supported by the device (UDP or TCP) on the shared Plaspy port.
- Validate connectivity from the device to Plaspy and confirm that reports are received by the platform.
- Ensure the device has an active cellular data connection and any required APN or SIM provisioning configured.
- Save and apply settings, then verify live position, OBD telemetry, and event reporting in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device reports

All devices in Plaspy use the same port, and the platform detects the device protocol automatically so you do not need to map protocols to separate ports.

## Typical Requirements Before Setup

- Physical access to the vehicle OBDII port to install the plug-and-play G797 device or an approved extension cable.
- An active SIM card with data service provisioned for the device if using cellular reporting via GPRS/EDGE or optional UMTS/LTE variants.
- Access to the manufacturer configuration method or software used for the G797 such as the provided USB provisioning tool or remote configuration utility.
- A Plaspy account or the required provisioning information from your Plaspy administrator to validate that the device appears in the platform.
- Device power and battery status confirmed and any manufacturer prerequisites completed before network configuration.

## How This Tracker Connects to Plaspy

The G797 sends GNSS location, OBD telemetry and sensor events to Plaspy over standard reporting channels so fleet managers can monitor vehicles and reconstruct events.

- GNSS position reports are transmitted over the cellular data link to the Plaspy server endpoint.
- OBD and CAN diagnostic values such as VIN, odometer sources, and PIDs are delivered to Plaspy for identification and analytics.
- Accelerometer and event data (for FNOL or harsh event detection) are reported to the same Plaspy endpoint on the configured transport.
- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Plaspy ingests the incoming stream and automatically detects the tracker protocol to present live tracking, telemetry, and event feeds.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the G797 (USB provisioning, GICUS, or the vendor's configuration utility).
2. Enter d.plaspy.com as the primary server domain or use 54.85.159.138 as the server IP if your provisioning tool requires an IP.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Configure any required APN or SIM parameters according to your mobile provider and save those settings in the device.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a restart.
7. Validate that the G797 reports to Plaspy by checking device connectivity and incoming messages in the Plaspy platform or via your Plaspy administrator tools.

## Example Configuration Commands

The exact configuration commands and syntax for the G797 depend on the manufacturer provisioning tool and firmware. When you use GICUS, USB provisioning, or the vendor configuration interface, follow the tool's command format to set server, port, and transport fields. Because commands vary by firmware and vendor software, review the G797 provisioning guide or the configuration utility help for exact command syntax.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and feature availability; always confirm the device firmware version before applying configuration steps.
- Choose UDP or TCP based on network conditions and the vendor recommendation; some operators prefer UDP for lower overhead, others use TCP for reliable delivery.
- Plaspy uses the same port 8888 for all devices and detects protocols automatically, so you do not need to create per-device ports.
- If SMS or other fallback reporting is supported by your G797 variant, use the manufacturer documentation to set SMS reporting parameters separately from the TCP/UDP server settings.
- For devices with optional UMTS or LTE variants, ensure the correct APN and SIM provisioning are applied for the target network.

## Why Use Plaspy with This Configuration

Using the Gosafe G797 with Plaspy provides a compact OBDII-based telematics solution that streams GNSS location, vehicle diagnostics, and sensor events into a single platform. This pairing helps organizations maintain live fleet visibility, improve incident response with event reconstruction, and integrate vehicle-derived telemetry into maintenance and analytics workflows.

Learn more about Plaspy and platform features at https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer details for the G797, verify current guidance on the official Gosafe website https://gosafesystem.com/ and consult the device documentation before deployment.
