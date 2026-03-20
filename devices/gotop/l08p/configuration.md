---
slug: /gotop/l08p/configuration
id: l08p-configuration
sidebar_label: Configuration
title: GOTOP - L08P Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP L08P showing Plaspy server settings, setup workflow, and practical integration notes
keywords:
  - GOTOP L08P configuration
  - GOTOP L08P setup
  - GOTOP L08P server configuration
  - Plaspy device configuration
  - Plaspy GPS tracker setup
  - GPS smartwatch configuration
  - L08P Plaspy integration
  - wearable GPS tracker setup
  - device configuration guide
  - tracking platform setup
---

# GOTOP - L08P Configuration

This page documents the public configuration context for using the GOTOP L08P watch tracker with Plaspy. It focuses on the practical server settings and workflow required so the device can report location and telemetry to Plaspy. Use this guide alongside manufacturer references when applying settings to devices in the field.

Plaspy uses shared server settings across supported devices and automatically detects the correct tracker protocol when a device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools. The L08P supports 4G/3G/2G cellular (eSIM and nano‑SIM), 2.4 GHz WiFi, multi-constellation GNSS, BLE, and OTA updates, which gives several connectivity options when pointing the device to Plaspy.

## Configuration Overview

This configuration process prepares the L08P to communicate reliably with Plaspy so location, health telemetry, and emergency events are visible in the platform. The focus is on setting the device server endpoint, validating transport configuration, and ensuring connectivity so Plaspy can automatically recognise the device protocol.

- Configure the tracker to report to Plaspy's shared server endpoint and port.
- Select and validate transport (UDP or TCP) and save the device configuration.
- Ensure cellular or WiFi connectivity and that any required SIM or eSIM data plan is active.
- Verify the device appears in Plaspy and that position and telemetry updates are received.
- Use manufacturer tools or the device web/app interface and refer to official GOTOP documentation when needed.

## Plaspy Server Settings

When configuring the L08P for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and the same port is used for all supported devices

These values are the public Plaspy endpoint details for device reporting and must be entered on the device or in the manufacturer's configuration tool.

## Typical Requirements Before Setup

- A powered L08P with sufficient battery charge and physical access to the watch for configuration.
- An active cellular data plan on the nano‑SIM or eSIM if using cellular reporting, or access to a known WiFi network for WiFi reporting.
- Access to the manufacturer configuration method such as the GOTOP mobile app, web portal, or provisioning tool.
- Basic account access to Plaspy or the team responsible for device onboarding so you can verify the device appears in the platform.
- Up-to-date firmware where possible; note that some options can vary between firmware releases.

## How This Tracker Connects to Plaspy

The L08P sends GNSS positions, health telemetry, and event alerts to the Plaspy server endpoint so caregivers and monitoring teams can view real-time status and history. Configure the device to target Plaspy and validate connectivity so the platform can process and present incoming data.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport may be set to UDP or TCP depending on the device configuration interface; Plaspy supports both.
- Plaspy automatically detects the device protocol when data arrives on the shared port and routes telemetry to the correct account.
- Location updates, SOS alarms, and other telemetry are forwarded to Plaspy for event handling and alerting.
- Successful integration enables location history, alarm delivery, and remote device monitoring via Plaspy.

## Common Configuration Workflow

Follow these practical, public steps when preparing an L08P for Plaspy:

1. Access the official manufacturer configuration method or software provided by GOTOP (mobile app, web portal, or provisioning tool).
2. In the device server or reporting settings enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the reporting port to 8888 to match Plaspy's shared device port.
4. Choose UDP or TCP if the device interface requires selecting a transport protocol.
5. Apply or save the configuration on the device or within the manufacturer tool.
6. Restart the device if the manufacturer recommends or requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking for initial position updates and telemetry in the Plaspy platform.

## Example Configuration Commands

The L08P model configuration can be performed via GOTOP's provisioning tools or mobile application. Exact command strings and their format vary by firmware and the manufacturer's configuration interface, so there are no universal public command lines to include here. When using a manufacturer tool, enter the Plaspy server domain d.plaspy.com (or 54.85.159.138) and port 8888, select UDP or TCP as required, save the settings, and then confirm connectivity.

If you have manufacturer-provided SMS or console commands from GOTOP documentation, apply them in the order specified by GOTOP and substitute placeholders as documented by the vendor. Always retain any placeholders such as [apn] or similar exactly as provided in vendor instructions and replace them with your network APN values where required.

## Configuration Notes

- Firmware differences can change the exact menu names and steps in the GOTOP configuration app or provisioning tool; check device firmware release notes.
- Choosing UDP or TCP depends on the device interface and network environment; both transports are supported by Plaspy on the same port.
- For large deployments, standardise settings and firmware to reduce variation between units and simplify onboarding to Plaspy.
- Use OTA update functionality where available to keep devices on supported firmware, and consult manufacturer documentation for specific OTA workflows.
- Always verify connectivity after initial configuration by checking that the device is visible in Plaspy and that telemetry and location data are updating.

## Why Use Plaspy with This Configuration

Connecting the GOTOP L08P to Plaspy enables continuous visibility of location, health telemetry, and emergency events in a single monitoring platform. For organisations managing caregiving, lone worker safety, or remote health monitoring, the pairing delivers real-time tracking, alarm routing, and historical playback that support operational decisions and rapid response.

To learn more about Plaspy and how it handles device onboarding, integrations, and monitoring, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer details for the GOTOP L08P, verify current information on the official GOTOP website https://www.gotop.cc/.
