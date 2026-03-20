---
slug: /reachfar/rf_v36/configuration
id: rf_v36-configuration
sidebar_label: Configuration
title: Reachfar - RF-V36 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup information for configuring a Reachfar RF-V36 wearable tracker to send data to Plaspy with shared server settings
keywords:
  - Reachfar RF-V36 configuration
  - Reachfar RF-V36 setup
  - RF-V36 Plaspy configuration
  - wearable GPS tracker configuration
  - eldercare GPS tracker setup
  - Plaspy tracker configuration
  - RF-V36 server settings
  - GPS watch configuration
  - RF-V36 tracking setup
  - Plaspy wearable integration
---

# Reachfar - RF-V36 Configuration

This page provides the public configuration context for using the Reachfar RF-V36 wearable GPS tracker with the Plaspy platform. It explains the shared Plaspy server settings you will point the device to, the practical steps installers typically follow, and what to check before integrating field devices into Plaspy for real time tracking, alerts, and telemetry visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, and Plaspy also uses the same port for all supported devices. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The RF-V36 is a wristwatch style tracker with GPS, indoor Wi‑Fi and assisted LBS positioning, a G-sensor, heart rate and blood pressure telemetry, SOS, and two-way audio, so confirm device specifics and firmware notes from the manufacturer when preparing a device for platform integration.

## Configuration Overview

This configuration process prepares the RF-V36 to communicate reliably with Plaspy and ensures the tracker appears in the Plaspy dashboard and mobile apps with the expected telemetry and event reporting. The focus is on applying the Plaspy server endpoint and port, selecting the appropriate transport, and validating that position and health telemetry are received.

- Point the device to the Plaspy server and port used by all supported devices.
- Select UDP or TCP transport on the device if required by the device configuration tool.
- Save and apply the manufacturer configuration so the RF-V36 begins reporting.
- Verify location updates, SOS alerts, and health telemetry reach Plaspy.
- Confirm geofence and reminder behavior is visible in the Plaspy platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered RF-V36 device with sufficient battery for initial configuration and testing.
- Access to the official Reachfar configuration method or software such as the companion app, web tool, or SMS commands provided by the manufacturer.
- Active cellular connectivity and a working SIM card with data and SMS if the device requires cellular transport for telemetry and remote commands.
- A Plaspy account or provisioning workflow ready to associate the device once it begins reporting.
- Current firmware on the RF-V36 or confirmation from the vendor about any firmware-specific configuration steps.
- Basic device identifiers such as the device IMEI or serial number for platform registration and validation.

## How This Tracker Connects to Plaspy

When configured, the RF-V36 sends location, telemetry, and event data to the shared Plaspy server endpoint and port so the device is visible to caregivers and monitoring teams in real time. Plaspy receives the device stream and matches the tracker protocol automatically so that reporting appears correctly in the platform.

- Periodic location updates (GPS outdoors and assisted LBS or Wi‑Fi indoors) are sent to d.plaspy.com on port 8888.
- Health telemetry such as heart rate and blood pressure is reported alongside location data to Plaspy for remote monitoring.
- SOS and alert events trigger immediate reporting to the Plaspy endpoint for notification workflows.
- Motion events from the G-sensor are transmitted to Plaspy and used to reduce false location jumps and produce more reliable tracking.
- Geofence and reminder events are reported so platform alarms and caregiver notifications can be generated.

## Common Configuration Workflow

1. Access the official Reachfar configuration method or software as provided by the device vendor (companion app, web tool, or SMS setup).
2. Locate the server or platform settings in the vendor tool and enter d.plaspy.com or alternatively use the server IP 54.85.159.138 if required by the tool.
3. Set the device port to 8888 to match Plaspy server configuration.
4. Choose UDP or TCP transport if the tracker requires a transport selection; either is accepted by Plaspy.
5. Save or apply the configuration in the Reachfar tool and confirm changes are accepted.
6. Restart the RF-V36 if the vendor instructions require a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by observing incoming location and telemetry in your Plaspy account or by confirming successful communication via device diagnostics.

## Example Configuration Commands

The RF-V36 manufacturer provides multiple configuration methods and the exact commands or UI steps depend on the vendor tool and firmware. Because manufacturer tools vary, exact SMS or command strings are not listed here. When using Reachfar tools:

- Use the official companion app or web configuration panel to set server domain or IP and port.
- If the device supports SMS configuration, refer to the Reachfar SMS command list in the device manual for the exact command syntax to set server and transport.
- Remember to use d.plaspy.com or 54.85.159.138 and port 8888 when specifying the Plaspy endpoint.

If you require SMS-style examples or raw configuration commands, consult the Reachfar device manual or vendor configuration PDF for the RF-V36. Manufacturer commands often include placeholders for APN or account parameters such as {{apn}} which you should replace with your network APN when present.

## Configuration Notes

- Firmware differences can change available configuration fields or the exact place to enter the server domain versus the server IP; always confirm the right method for your firmware revision.
- Choosing UDP or TCP may affect delivery characteristics; Plaspy supports both and will detect the protocol automatically, but check vendor notes for any transport-specific behavior.
- Plaspy uses the same port across supported devices which simplifies multi-device deployments and server-side routing.
- If using SMS-based configuration, keep messages concise and verify successful application by checking device reporting in Plaspy.
- The RF-V36 is listed as out of production on the public product page; verify support and firmware availability with the manufacturer before deploying new units.

## Why Use Plaspy with This Configuration

Using the RF-V36 with Plaspy gives caregivers and monitoring teams unified visibility into location, health telemetry, and critical alerts from a single wearable device. Plaspy’s platform ingests the RF-V36 data stream and provides real time tracking, configurable notifications for SOS and geofence events, and historical reporting for health and location trends.

To learn more about Plaspy and how it can integrate with compatible trackers like the RF-V36, visit https://www.plaspy.com. For the latest device specific setup, firmware behavior, and manufacturer guidance for the RF-V36, verify current information on the official Reachfar website https://www.reachfargps.com/ as methods and firmware can change over time.
