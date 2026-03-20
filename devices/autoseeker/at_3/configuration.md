---
slug: /autoseeker/at_3/configuration
id: at_3-configuration
sidebar_label: Configuration
title: Autoseeker - AT-3 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Autoseeker AT-3 with Plaspy covering server settings setup workflow and prerequisites for live pet tracking
keywords:
  - Autoseeker AT-3 configuration
  - Autoseeker AT-3 setup
  - Autoseeker AT-3 Plaspy
  - AT-3 GPS tracker configuration
  - Autoseeker configuration guide
  - Plaspy device integration
  - Pet tracker configuration
  - GPS pet tracker setup
  - Autoseeker server configuration
  - Tracking platform setup
---

# Autoseeker - AT-3 Configuration

This page covers the public configuration context for using the Autoseeker AT-3 4G GPS Pet Tracker with the Plaspy platform. It focuses on the server settings and practical steps that are relevant when preparing an AT-3 to report location and telemetry to Plaspy for live maps, alerts, and history playback.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so follow the guidance here together with Autoseeker documentation and your vendor's instructions.

## Configuration Overview

Preparing an AT-3 for Plaspy means configuring the device to send GNSS fixes and telemetry to Plaspy's ingestion endpoint and validating that the device appears in the platform. The goal is reliable periodic reporting so Plaspy can present live location, alerts, and history.

- Point the tracker to the Plaspy server endpoint and confirm the transport setting if required.
- Ensure the device has a working cellular connection and active data service for periodic uploads.
- Save settings and, if needed, restart the device so the new server details take effect.
- Verify the device sends position updates and status messages that appear in Plaspy.
- Confirm alerts such as geofence events and low battery notifications are delivered correctly.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives
- Plaspy uses the same port 8888 for all supported devices

## Typical Requirements Before Setup

- A charged AT-3 with an active battery and physical access to the device for initial setup.
- An active cellular data SIM provisioned for data on a supported 4G network and adequate coverage in your area.
- The device IMEI or serial number available for registration and verification in Plaspy.
- Access to the official Autoseeker configuration method or software provided by the manufacturer or vendor.
- A Plaspy account and access to device registration or onboarding features on Plaspy.
- Basic testing tools such as a temporary geofence or short movement test to validate reporting after configuration.

## How This Tracker Connects to Plaspy

The AT-3 transmits GNSS position fixes and status telemetry over the cellular network to a Plaspy ingestion endpoint. Once configured to point to Plaspy, the tracker uses the configured transport and port to deliver messages that Plaspy ingests and decodes automatically.

- The tracker sends positioning and device status messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device configuration and network conditions.
- Plaspy automatically detects the tracker protocol and maps incoming data to the device record.
- Reported data becomes visible in Plaspy for live maps, notifications, and historical playback.
- Events such as geofence entry and exit or low battery are forwarded into Plaspy alerting where configured.

## Common Configuration Workflow

1. Confirm the AT-3 is powered, the SIM is installed and active, and you have the device IMEI or serial number handy.
2. Access the official Autoseeker configuration method or software provided by the manufacturer or vendor.
3. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the device port to 8888 as required by Plaspy.
5. Choose UDP or TCP if the device requires you to select a transport protocol.
6. Apply or save the configuration in the manufacturer tool and, if required, restart the tracker to activate the new settings.
7. Validate that the device reports to Plaspy by checking the device list and live map for incoming positions and status messages.

## Example Configuration Commands

The exact configuration commands and format depend on the Autoseeker configuration tool, firmware, or SMS command set provided by the manufacturer. Because manufacturer methods vary, follow the official Autoseeker instructions or vendor tool to set the server and port. Plaspy accepts data from the device when it is configured to send to d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP.

If you receive public manufacturer commands from Autoseeker that are intended for device configuration, apply them in the order the manufacturer specifies and preserve placeholders such as {{apn}} or similar as required by the device.

## Configuration Notes

- Firmware differences can change the exact menu names, SMS command syntax, or configuration sequence. Always match the instructions to the device firmware revision.
- Choosing UDP or TCP can affect delivery characteristics. UDP may be lighter weight while TCP ensures delivery; use the option that best matches your network and device guidance.
- Plaspy uses port 8888 for all devices, so you do not need to vary ports when adding multiple trackers to the platform.
- If you use SMS or vendor software to configure the AT-3, ensure commands reference d.plaspy.com or 54.85.159.138 and port 8888 exactly.
- After configuration, perform a short live test (move the device or trigger a status event) to confirm the device appears in Plaspy and that alerts are delivered.

## Why Use Plaspy with This Configuration

Integrating the Autoseeker AT-3 with Plaspy provides a straightforward path to centralized pet tracking, alerts, and history playback. For pet owners, shelters, and animal care operations this setup turns device location and telemetry into actionable insights through live maps, geofence notifications, and historical route review.

To learn more about Plaspy and how it handles device connectivity and alerts visit https://www.plaspy.com. For the latest device specific configuration methods firmware notes and manufacturer instructions verify details at the Autoseeker website https://autoseekergps.com/ .
