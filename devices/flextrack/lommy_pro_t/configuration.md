---
slug: /flextrack/lommy_pro_t/configuration
id: lommy_pro_t-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Pro T Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Flextrack Lommy Pro T showing Plaspy server settings and practical setup steps for telemetry and GPS
keywords:
  - Flextrack Lommy Pro T configuration
  - Lommy Pro T setup
  - Flextrack Lommy Pro T Plaspy
  - Lommy Pro T server configuration
  - Lommy Pro T GPS tracker setup
  - Plaspy device configuration
  - cold chain tracker configuration
  - temperature monitoring GPS tracker
  - fleet management tracker setup
  - Lommy Pro T integration
---

# Flextrack - Lommy Pro T Configuration

This page provides the public configuration context for using the Flextrack Lommy Pro T with the Plaspy platform. It explains the practical server settings and setup steps that operators typically apply so the Lommy Pro T can stream temperature telemetry and GPS positioning to Plaspy for continuous cold chain monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side configuration steps for the Lommy Pro T can vary based on firmware revision, installation type, and the vendor tools you use, so treat this page as practical public guidance and consult the manufacturer for device specific details.

## Configuration Overview

This configuration process prepares the Lommy Pro T to communicate with Plaspy so temperature telemetry and location data appear in the platform for monitoring, alerts, and historical reporting.

- Point the device to the Plaspy server endpoint and set the correct transport and port so the tracker can open a data channel to the platform.
- Verify cellular connectivity and APN settings so the device can establish a reliable data session.
- Validate that periodic temperature and GPS reports are received by Plaspy and visible in the monitoring console.
- Enable any event reporting or alarm thresholds on the device and in Plaspy so excursions generate notifications.
- Confirm persistent power options and logging behavior so continuous cold chain documentation is maintained.

## Plaspy Server Settings

When configuring the Lommy Pro T for Plaspy, use the following public server settings:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support using UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will detect the correct protocol automatically for the Lommy Pro T.

## Typical Requirements Before Setup

- Ensure the Lommy Pro T has sufficient power from its internal battery or external supply during configuration.
- Confirm the device has a working cellular SIM and an active data plan appropriate for continuous telemetry.
- Have access to the official Flextrack configuration method or software for Lommy Pro T settings.
- Know the network APN and any operator credentials required so the device can connect to the cellular network.
- Be prepared to restart the device after changing server or transport settings so the new configuration takes effect.

## How This Tracker Connects to Plaspy

The Lommy Pro T sends temperature telemetry, alarms, and periodic location updates to Plaspy over the cellular network. The device is configured to report to the shared Plaspy server endpoint and port so data streams arrive in the platform for visualization and alerting.

- Periodic telemetry reports include timestamped temperature readings and device state updates sent to d.plaspy.com on port 8888.
- GPS location fixes and GSM-based position estimates are transmitted to Plaspy so the asset can be tracked on a live map.
- Event driven alarms such as temperature excursions are pushed to Plaspy for immediate notification and logging.
- Data can be sent over UDP or TCP depending on the device configuration and the installer preference; Plaspy will detect the protocol automatically.
- Once the tracker reports successfully, Plaspy archives telemetry for historical trails and compliance documentation.

## Common Configuration Workflow

1. Access the official Flextrack configuration method or software recommended for Lommy Pro T configuration.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 which is the port Plaspy uses for all devices.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Enter APN and any required network credentials so the device can establish a cellular data session.
6. Apply or save the configuration and restart the Lommy Pro T if the device requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy and that temperature and position updates appear in the platform.

## Example Configuration Commands

The Lommy Pro T manufacturer supplies device configuration tools and methods that can include SMS commands, a configuration app, or a desktop configuration utility. Exact configuration commands vary by firmware and vendor tool, so the method you use will depend on the Flextrack configuration interface provided with your device.

If your device or vendor documentation provides explicit SMS or command line examples, follow those published examples and substitute the Plaspy server values d.plaspy.com or 54.85.159.138 and port 8888. Plaspy will accept data over UDP or TCP and will detect the protocol automatically.

## Configuration Notes

- Firmware differences can change command syntax and available settings; always confirm the syntax with the Lommy Pro T documentation for your firmware version.
- Choose UDP for lower overhead or TCP for a connection oriented transport depending on your reliability and network characteristics; Plaspy supports both.
- Verify APN credentials and cellular availability before finalizing the Plaspy server settings to avoid missed telemetry.
- In installations that use external power from refrigeration units, confirm behavior around power transitions to ensure continuous logging.
- Keep a record of any configuration changes and device identifiers so you can map the device to the correct asset in Plaspy.

## Why Use Plaspy with This Configuration

Using the Lommy Pro T with Plaspy brings temperature telemetry and precise location context into one monitoring platform, enabling teams to detect excursions quickly, maintain regulatory documentation, and coordinate corrective actions. The combination of continuous logging and real-time alerts improves operational oversight for high value and temperature sensitive shipments.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest Lommy Pro T device specific setup instructions, firmware notes, and manufacturer support, verify details at the Flextrack website https://flextrack.dk as manufacturer methods and firmware behavior can change over time.
