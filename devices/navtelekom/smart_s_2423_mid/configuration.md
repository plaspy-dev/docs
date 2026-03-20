---
slug: /navtelekom/smart_s_2423_mid/configuration
id: smart_s_2423_mid-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2423 MID+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom SMART S-2423 MID+ with Plaspy server settings and setup workflow
keywords:
  - Navtelekom SMART S-2423 MID+ configuration
  - SMART S-2423 MID+ Plaspy setup
  - Navtelekom GPS tracker configuration
  - SMART S-2423 MID+ server configuration
  - Plaspy device setup
  - fleet tracking setup Navtelekom
  - GPS tracker Plaspy integration
  - vehicle tracking setup SMART S-2423
  - Navtelekom tracker configuration guide
  - Plaspy platform integration
---

# Navtelekom - SMART S-2423 MID+ Configuration

This page provides the public configuration context for using the Navtelekom SMART S-2423 MID+ with Plaspy. It focuses on the practical setup information you need to point the device at Plaspy so the tracker can report location and telemetry to the platform. Content here is intended to help installers and integrators prepare devices for enrollment in Plaspy.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps vary by firmware version, hardware revision, installation type, and the configuration tool used by the vendor. Use this guide together with the Navtelekom documentation and the NTC Configurator utility when preparing devices for Plaspy integration.

## Configuration Overview

The configuration process prepares the SMART S-2423 MID+ to communicate with Plaspy, verifies that the device can reach the Plaspy server, and enables the device to appear in the Plaspy platform for monitoring and reporting. Use the manufacturer configuration tool to set network parameters and server endpoints, then verify the device is visible in Plaspy.

- Point the tracker to the Plaspy server domain or IP so position and telemetry packets are routed to Plaspy.
- Choose the transport method supported by the device (UDP or TCP) and set the Plaspy port.
- Ensure cellular connectivity and any required APN or SIM settings are configured for data transmission.
- Save and apply configuration using the NTC Configurator or the device configuration method provided by Navtelekom.
- Verify the device registers and sends data so it becomes visible in Plaspy dashboards and reports.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Access to the NTC Configurator utility or the official Navtelekom configuration method for the SMART S-2423 MID+.
- A powered and functionally tested device with an active SIM card and data service if cellular reporting is required.
- Knowledge of the device IMEI or unique identifier so the device can be located in Plaspy after registration.
- Recent firmware shipped by the manufacturer or confirmed compatible firmware for integration tasks.
- A bench or vehicle test environment to validate GNSS lock and successful server communication.
- Credentials or access rights required by your integrator tools to modify device settings.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the SMART S-2423 MID+ sends position reports and attached telemetry to the Plaspy server endpoint so fleet operators can monitor assets in real time. The tracker uses the shared Plaspy endpoint and port and relies on the configured transport to deliver packets to the platform.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138.
- All devices use port 8888 to send data to Plaspy.
- You can select UDP or TCP on the device if the configuration requires explicit transport selection.
- Plaspy automatically detects the tracker protocol so no manual protocol mapping in the platform is required.
- Once packets are received, Plaspy processes position and telemetry for visibility, alerts, and reporting.

## Common Configuration Workflow

1. Open the official Navtelekom configuration tool such as the NTC Configurator or the manufacturer method recommended for the SMART S-2423 MID+.
2. Locate the server or TCP UDP settings section in the device profile.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the destination.
4. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
5. Choose UDP or TCP if the device requires you to select a transport protocol.
6. Apply or save the configuration and write the settings to the device.
7. Restart the device if the configuration tool or firmware requires a reboot for settings to take effect.
8. Validate that the device reports to Plaspy and appears in the platform by confirming incoming data and live position updates.

## Example Configuration Commands

The SMART S-2423 MID+ is typically configured with the official Navtelekom tools and the exact command set can vary by firmware and tool. Because manufacturer configuration commands differ across versions, use the NTC Configurator utility or the device user manual for precise command syntax. If you prefer command line or SMS methods documented by Navtelekom, reference the official configuration guide for the exact commands used to set server, port, and transport.

## Configuration Notes

- Firmware differences can change menu names and configuration flows in the NTC Configurator; confirm the firmware version before following a specific step sequence.
- Choose UDP for lower overhead or TCP for guaranteed delivery if the device requires an explicit transport choice; Plaspy accepts both on port 8888.
- If the device requires cellular APN settings, set APN values according to the SIM provider and verify data connectivity before pointing to the Plaspy server.
- Use the device IMEI or identifier to confirm the correct unit is visible in Plaspy after configuration and initial reporting.
- When possible, perform a bench test that includes GNSS fix verification and a short drive test to verify real-world reporting behavior.

## Why Use Plaspy with This Configuration

Using the SMART S-2423 MID+ with Plaspy gives fleet and telematics operators a straightforward way to centralize location, sensor, and driver behavior telemetry in one platform. With the device reporting to Plaspy’s shared server endpoint and port, integrators can reduce per-device server configuration complexity and rely on Plaspy’s automatic protocol detection to process incoming data.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the most current device specific configuration methods and firmware details consult the manufacturer documentation at https://www.navtelecom.ru/ since hardware revisions and setup procedures can change over time.
