---
slug: /lk_gps/lk120_4g/configuration
id: lk120_4g-configuration
sidebar_label: Configuration
title: LK-GPS - LK120-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK GPS LK120 4G with Plaspy server settings and practical setup steps
keywords:
  - LK GPS LK120 4G configuration
  - LK GPS LK120 4G setup
  - LK120 4G Plaspy integration
  - Plaspy server configuration
  - Plaspy GPS tracker setup
  - LK GPS tracker configuration
  - GPS tracker configuration guide
  - pet tracker LK120 4G
  - real time tracking configuration
  - geofence SOS setup
---

# LK-GPS - LK120-4G Configuration

This page covers the public configuration context for using the LK-GPS LK120-4G tracker with Plaspy. It summarizes the practical settings and workflow required to point the device at the Plaspy server so the tracker can deliver location, SOS and telemetry data to the platform. Content here relies on public integration facts and the device description including A GPS assisted fixes, frequent position updates, and SMS configurable parameters.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so devices can report without manual protocol selection on the server side. Manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. Use this guide to apply the public Plaspy settings and then consult LK GPS official documentation for any device specific commands or SMS formats.

## Configuration Overview

Preparing the LK120-4G to work with Plaspy focuses on configuring the device to report to Plaspy’s shared server endpoint and confirming reliable connectivity so the device becomes visible in the Plaspy platform. The goal is a straightforward reporting path from the tracker into Plaspy so live map visualization, geofence alerts and SOS events are delivered to your account.

- Enter the Plaspy server endpoint or IP on the tracker using the manufacturer configuration method.
- Verify the device uses the Plaspy port so reports reach the correct receiving port on the platform.
- Choose UDP or TCP transport on the tracker if the device requires a transport selection.
- Confirm SIM and network connectivity so the LK120-4G can send location and event messages.
- Validate the device appears in Plaspy and that position updates, SOS and telemetry are received.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the LK120-4G. These values are the shared endpoint Plaspy uses for all supported devices and are required for correct reporting.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged LK120-4G unit powered on and accessible for configuration.
- An active SIM card with data and SMS enabled if the device uses GSM LTE connectivity.
- Access to the official LK GPS configuration method such as the vendor app, web tool, or SMS command interface.
- The device IMEI and any required registration details for your Plaspy account.
- Reliable cellular coverage at the installation location for timely GPS and GSM connectivity.
- A Plaspy account where you can verify the device once it reports to the server.

## How This Tracker Connects to Plaspy

When configured, the LK120-4G sends its location and event telemetry to Plaspy using the shared server endpoint and port. Plaspy receives those messages, applies automatic protocol detection, and surfaces live position, SOS alerts, and history in the platform.

- The device is configured to report to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138.
- All reports are sent to port 8888 which Plaspy uses for every supported device.
- Transport can be UDP or TCP depending on the tracker configuration option; Plaspy accepts either.
- Plaspy automatically detects the tracker protocol so no special protocol selection is required on the server side.
- Position updates, SOS events, and telemetry arrive in Plaspy and are available for map display, alerts, and history logging.

## Common Configuration Workflow

1. Access the official LK GPS configuration method or software as provided by the manufacturer (app, web tool, or SMS commands).
2. Enter the Plaspy server endpoint either by domain d.plaspy.com or by IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 so traffic is sent to the Plaspy receiving port.
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Apply or save the configuration using the manufacturer tool or by sending the required SMS command.
6. Restart the device if the manufacturer instructions require a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking device visibility and live updates in your Plaspy account.

## Example Configuration Commands

The LK120-4G supports SMS and vendor software configuration methods but exact public commands vary by firmware and regional SKU. Because manufacturer command syntax and tools differ, the precise SMS strings or web UI fields are not reproduced here. Use the LK GPS official documentation or the vendor configuration app to apply the server domain or IP, set port 8888, and select UDP or TCP as required.

If you have manufacturer-provided SMS commands or a configuration tool, apply the steps in the Common Configuration Workflow and verify the device reports to d.plaspy.com or 54.85.159.138 on port 8888. For device specific SMS templates and placeholders consult LK GPS documentation.

## Configuration Notes

- Behavior may vary across firmware versions and hardware revisions; always confirm the correct SMS syntax or app settings against current LK GPS documentation.
- Choose UDP or TCP based on the device UI requirement; Plaspy accepts both and detects the protocol automatically.
- The Plaspy server endpoint d.plaspy.com and IP 54.85.159.138 with port 8888 are the shared settings used for all supported devices.
- Ensure the SIM APN and carrier settings are correct so the tracker can establish a data connection before attempting to send reports.
- Register or identify the device IMEI in your Plaspy account if required by your Plaspy onboarding flow so the incoming reports are associated with the correct device.

## Why Use Plaspy with This Configuration

Using the LK120-4G with Plaspy provides a practical way to centralize live location, SOS, geofence alerts and route history for pet and personal tracking. The shared Plaspy server settings simplify integration because the tracker only needs to point to the standardized endpoint and port, and Plaspy will detect the protocol automatically and process incoming telemetry.

To learn more about Plaspy and how it presents live tracking, alerts and history for compatible devices visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes and SMS command formats consult the official LK GPS documentation at https://www.lk-gps.com to ensure you apply the correct commands and procedures.
