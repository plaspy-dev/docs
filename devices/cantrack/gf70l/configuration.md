---
slug: /cantrack/gf70l/configuration
id: gf70l-configuration
sidebar_label: Configuration
title: CanTrack - GF70L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide showing how to point a CanTrack GF70L tracker to Plaspy server settings for platform visibility and monitoring
keywords:
  - CanTrack GF70L configuration
  - CanTrack GF70L setup
  - CanTrack GF70L Plaspy
  - GF70L tracker configuration
  - CanTrack GPS tracker configuration
  - Plaspy server configuration
  - GPS asset tracker setup
  - GF70L platform setup
  - vehicle tracking GF70L
  - GF70L solar tracker setup
---

# CanTrack - GF70L Configuration

This page documents the public configuration context for using the CanTrack GF70L tracker with Plaspy. It summarizes the Plaspy server settings you need to apply on the device or in the vendor configuration tool, explains the typical setup workflow, and highlights practical notes to help confirm the tracker appears in Plaspy. Use this guide together with the device manual for detailed device-specific user interface steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol after the device sends data. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so follow the GF70L documentation when applying these shared Plaspy settings.

## Configuration Overview

The goal of configuration is to point your GF70L to Plaspy so the device can report location and status to the platform and appear in your Plaspy account. This involves updating the server endpoint and port on the tracker using the official CanTrack configuration tool or supported setup method, then verifying the device reports correctly.

- Configure the GF70L to send data to the Plaspy server endpoint.
- Choose the appropriate transport option (UDP or TCP) if required by the device.
- Confirm the device is powered, charged, and reachable during configuration.
- Save and apply the settings in the manufacturer tool and restart the device if needed.
- Validate the tracker shows up and reports events in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com should be entered as the destination host.
- Server IP 54.85.159.138 is the numeric endpoint that can be used where an IP is required.
- Port 8888 is the port Plaspy uses for all supported devices and must be configured on the tracker.
- Transport support for UDP or TCP is available; configure whichever the device requires.
- Plaspy automatically detects the tracker protocol after the device starts sending data to the server.

## Typical Requirements Before Setup

- The GF70L is charged and powered on so it can accept configuration and transmit status.
- Access to the official CanTrack GF70L configuration method such as the vendor web tool, mobile app, or SMS/software interface provided by the manufacturer.
- Knowledge of the Plaspy server settings: d.plaspy.com or 54.85.159.138 and port 8888.
- A network connectivity method enabled in the device and verified by a manufacturer test procedure.
- A working installation location for the tracker to ensure antennas and solar panels are positioned correctly during validation.
- Access to Plaspy account or provisioning details to confirm device visibility once reporting begins.

## How This Tracker Connects to Plaspy

When the GF70L is configured with Plaspy settings, it sends its periodic updates, alerts, and status messages to the Plaspy server endpoint and port configured on the device. Plaspy receives these messages and shows device location, event history, and alarms in the platform.

- The tracker sends messages to the shared Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- The device can be set to use UDP or TCP as the transport mechanism for those messages.
- Plaspy automatically detects the protocol and parses incoming data to attribute the device.
- Reported events such as movement, low battery, geofence transitions, and vibration alarms are forwarded to the platform.
- After configuration, the device becomes visible for operational monitoring and history playback in Plaspy.

## Common Configuration Workflow

1. Access the official CanTrack GF70L configuration method or software provided by the manufacturer.
2. In the device configuration screen, enter the Plaspy server host as d.plaspy.com or alternatively the server IP 54.85.159.138.
3. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose the transport option UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration in the manufacturer tool.
6. Restart the GF70L if the device requires a reboot to activate new server settings.
7. Validate that the device reports to Plaspy by checking device presence and recent telemetry in the Plaspy platform.

## Example Configuration Commands

This model configuration file does not include device-specific command strings. Exact command syntax and configuration steps vary by CanTrack firmware and the manufacturer configuration interface. Use the official CanTrack configuration tool or instructions in the GF70L manual to set the server host to d.plaspy.com (or 54.85.159.138) and port 8888, and select UDP or TCP as required by the device.

If you use a manufacturer-provided command line or SMS interface, follow the GF70L documentation for the exact command format and any placeholders required by that method.

## Configuration Notes

- Firmware differences and hardware revisions can change where and how server settings are entered; consult the GF70L manual for the exact UI or command syntax.
- Selecting TCP versus UDP may affect delivery behavior; choose the transport the device supports and test for reliable reporting.
- Solar charging and battery state can influence device reporting intervals during initial testing; ensure the unit has adequate power.
- Installer practices and mounting orientation can affect signal reception and should be validated during the first reporting cycle.
- Always confirm the final device identifier and reporting timestamps in Plaspy to ensure correct mapping to your account.

## Why Use Plaspy with This Configuration

Using the CanTrack GF70L with Plaspy provides a simple, shared-server configuration path so asset telemetry and event data appear in a single platform for monitoring and historical analysis. Pointing the GF70L to Plaspy using the same server and port values reduces the complexity of onboarding devices from multiple manufacturers.

To learn more about Plaspy and how it can support your fleet and asset tracking needs visit https://www.plaspy.com. For the latest device specific configuration steps, firmware notes, and installation guidance consult the manufacturer at https://www.cantrackgps.com/ since setup methods and firmware behavior can change over time.
