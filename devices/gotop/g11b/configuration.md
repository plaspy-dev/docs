---
slug: /gotop/g11b/configuration
id: g11b-configuration
sidebar_label: Configuration
title: GOTOP - G11B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP G11B pet tracker showing Plaspy server settings and practical setup guidance
keywords:
  - GOTOP G11B configuration
  - GOTOP G11B setup
  - GOTOP G11B Plaspy
  - GOTOP tracker configuration
  - G11B GPS configuration
  - pet tracker setup
  - animal tracker configuration
  - GOTOP G11B server settings
  - Plaspy device setup
  - GPS tracker integration
---

# GOTOP - G11B Configuration

This page covers the public configuration context for using the GOTOP G11B tracker with Plaspy. It explains the shared server settings Plaspy requires, summarizes the practical steps to point a G11B at the Plaspy endpoint, and highlights what to confirm before integrating the device. The guidance here is focused on public setup information for connecting the G11B to the Plaspy platform for live monitoring of animals and small mixed deployments.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps for the G11B can vary by firmware version, hardware revision, installation type, and vendor tools, so use these public settings as the baseline and confirm device-specific procedures with GOTOP documentation or tools.

## Configuration Overview

The goal of the configuration process is to prepare the G11B so it reliably communicates location and status information to Plaspy. This includes applying the Plaspy server endpoint, ensuring the tracker has network access, and confirming the device appears in the Plaspy platform. The following practical items are typically addressed during setup:

- Enter the Plaspy server endpoint on the device or via GOTOP configuration tools so telemetry is routed to the platform.
- Choose the transport mode the device supports (UDP or TCP) when required by the device UI or SMS commands.
- Set the port used by Plaspy so the tracker transmits to the correct listening port.
- Validate connectivity and confirm the tracker shows telemetry and location updates in Plaspy.
- Test alarm and geofence event reporting so alerts arrive in the platform as expected.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the G11B to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the transport that the device supports
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to handle different tracker protocols.

## Typical Requirements Before Setup

- Ensure the G11B has sufficient battery charge or is connected to the intended power source for initial configuration and testing.
- Confirm the device has an active 4G SIM and network access if cellular connectivity is required for reporting.
- Have access to the official GOTOP configuration method such as the GOTOP app, web portal, or SMS command interface.
- Prepare device identifiers required by Plaspy or your administrator such as IMEI or device serial to register and match telemetry.
- Verify you have any vendor-provided firmware or setup notes handy in case of firmware-specific steps.
- Plan a short on-site test to validate live tracking, alarms, and geofence behavior after configuration.

## How This Tracker Connects to Plaspy

When configured, the GOTOP G11B forwards its GPS fixes, status updates, and alarm events to the Plaspy server endpoint and port so Plaspy can present live location, alerts, and history. The platform collects and displays telemetry in dashboards and maps for monitoring and review.

- The tracker is set to report to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
- All device connections use the shared Plaspy port 8888 so devices are routed consistently.
- Choose UDP or TCP transport on the device if the device requires a transport selection; Plaspy supports both.
- Plaspy automatically detects the tracker protocol, allowing different tracker message formats to be identified when the device connects.
- Once connected, the device’s location, movement alarms, and battery status are visible in Plaspy for monitoring and history playback.

## Common Configuration Workflow

1. Access the official GOTOP configuration method such as the GOTOP mobile app, GOTOP web portal, or SMS configuration interface.
2. Locate the server or remote reporting settings for the G11B in the manufacturer tool or SMS commands.
3. Enter the Plaspy server endpoint as either d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration in the GOTOP tool or send the SMS command to commit settings.
7. Restart the device if recommended by the manufacturer or required for settings to take effect.
8. Validate that the device reports to Plaspy by checking the Plaspy platform for the device’s first telemetry packets and location updates.

## Example Configuration Commands

The exact commands or menu paths used to configure the GOTOP G11B depend on GOTOP’s provided tools, firmware, and region. Methods can include SMS parameter commands, the GOTOP app, or web portal settings. Because manufacturer tools and command formats vary by firmware, consult the GOTOP user guide for precise command syntax and examples.

When using SMS or command-line approaches supplied by GOTOP, follow the manufacturer examples to set the server domain or IP and the port, for example by replacing placeholders with the values shown in this guide (d.plaspy.com or 54.85.159.138 and port 8888). If you receive a set of example commands from GOTOP documentation, apply them in the order specified by the manufacturer and verify results in Plaspy.

## Configuration Notes

- Firmware differences can change menu locations, SMS command formats, and available transport options; always check GOTOP release notes.
- If the device supports both UDP and TCP, choose based on the device’s recommended setting or network conditions; Plaspy supports both transports on port 8888.
- When using SMS configuration, ensure the device accepts SMS commands in your region and that command syntax matches the device firmware.
- Use the IMEI or device identifier to match the physical tracker to the Plaspy device record after configuration.
- If you see no telemetry after configuration, verify cellular connectivity, server entries (domain or IP), transport selection, and then restart the device before troubleshooting further.

## Why Use Plaspy with This Configuration

Routing GOTOP G11B telemetry into Plaspy centralizes animal location and event data so teams can monitor pets or livestock in one dashboard. This configuration lets organizations consolidate alerts, view history, and manage geofence events across mixed deployments while keeping the device’s SMS location features as a quick fallback.

To learn more about how Plaspy can work with the GOTOP G11B and other devices, visit https://www.plaspy.com. For the most current GOTOP device specifics, firmware notes, and command references verify device-specific setup details on the manufacturer site https://www.gotop.cc/.
