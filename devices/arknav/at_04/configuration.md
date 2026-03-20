---
slug: /arknav/at_04/configuration
id: at_04-configuration
sidebar_label: Configuration
title: ArkNav - AT-04 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ArkNav AT-04 GPS tracker and Plaspy server settings for reliable integration
keywords:
  - ArkNav AT-04 configuration
  - ArkNav AT-04 setup
  - ArkNav AT-04 server configuration
  - AT-04 Plaspy setup
  - Plaspy GPS tracker configuration
  - ArkNav GPS tracker setup
  - AT-04 tracking software configuration
  - ArkNav AT-04 integration
  - GPS tracker configuration guide
  - asset tracking AT-04
---

# ArkNav - AT-04 Configuration

This page covers the public configuration context for using the ArkNav AT-04 Compact GPS Tracker with Plaspy. It describes the practical server settings and integration steps you will typically apply so the device can report location and motion data to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps for the AT-04 can vary by firmware, hardware revision, installation type, and vendor configuration tools, so use this guide for the public Plaspy-facing details and consult the official ArkNav documentation for device-specific procedures.

## Configuration Overview

The goal of configuring an AT-04 for Plaspy is to point the tracker at Plaspy's shared server endpoint, ensure the device has an active connectivity path, and validate that updates arrive in Plaspy. Once configured, the AT-04 can provide periodic or event-driven position reports that Plaspy ingests for real-time monitoring and historical reporting.

- Configure the tracker to send data to the Plaspy server endpoint and port.
- Confirm the device has a working SIM and cellular connectivity for GSM based reporting and SMS features.
- Validate transport selection (UDP or TCP) if the device requires it and save the configuration.
- Restart or reboot the device if required by the manufacturer to apply changes.
- Verify that position reports appear in Plaspy and that motion or timer reports behave as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Fully charged device battery or connected power source for configuration and testing.
- Active SIM card installed with required cellular service for GSM reporting and SMS if used.
- Access to the official ArkNav configuration method such as the Prolific USB to serial programming port or vendor configuration tools.
- A Plaspy account or provisioning access so you can validate the device appears on the platform.
- Basic tools for connecting the device to a PC or programming adapter if local provisioning is required.
- Patience to verify firmware-dependent behavior because reporting modes and menus can differ by firmware version.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AT-04 sends its location and motion data to the shared Plaspy server endpoint and port where Plaspy ingests the messages and associates them with your account.

- The tracker reports position fixes and motion events to d.plaspy.com or 54.85.159.138 using port 8888.
- Transport can be UDP or TCP depending on the device configuration; Plaspy detects the protocol automatically.
- Plaspy receives periodic timer reports or movement-activated updates according to the AT-04 reporting profile.
- SMS or call-to-request features on the AT-04 can supplement server uploads for ad hoc location queries.
- Once Plaspy receives reports, the platform displays live position, history, and any supported motion alerts.

## Common Configuration Workflow

1. Access the official ArkNav configuration method or vendor software using the device programming port or supported configuration tool.
2. Enter the Plaspy server address either as d.plaspy.com or as the server IP 54.85.159.138 in the server setting field.
3. Set the device port to 8888 to match the Plaspy endpoint.
4. Choose UDP or TCP for transport if the device requires an explicit selection.
5. Apply or save the configuration changes in the manufacturer tool or device menu.
6. Restart the tracker when required by the manufacturer to ensure the new server settings are active.
7. Validate that the device is reporting to Plaspy by checking for incoming positions and telemetry in your Plaspy account.

## Example Configuration Commands

The AT-04 can be provisioned using ArkNav configuration tools or the USB to serial programming port. Exact commands and menus vary by tooling and firmware, so follow the manufacturer instructions for the AT-04 model you have. Common manufacturer workflows will ask you to set the server hostname or IP and the port to the Plaspy values shown above.

If you are using a command line or text based provisioning tool provided by ArkNav or a third party, the fields you will typically set are:
- Server or Hostname: d.plaspy.com (or 54.85.159.138)
- Port: 8888
- Transport: UDP or TCP (if required by the device)

Refer to ArkNav configuration tools for the exact syntax and order required for your firmware version.

## Configuration Notes

- Firmware variations can change menu names, field order, and available transport options; confirm the workflow for your specific firmware revision.
- Choose TCP when you need connection oriented delivery and UDP when lower overhead is preferred, but remember Plaspy will accept either and detects protocol automatically.
- If you rely on SMS or call location requests for ad hoc verification, ensure the SIM has SMS enabled and the device phone functions are correctly provisioned.
- Use the Prolific USB to serial programming port only with the recommended drivers and cables from ArkNav to avoid communication issues.
- All devices configured for Plaspy must use port 8888; this port is shared across supported devices for consistent ingestion.

## Why Use Plaspy with This Configuration

Configuring the ArkNav AT-04 to report to Plaspy provides a straightforward path to integrate compact, low-power tracking into centralized monitoring and alerting workflows. Organizations benefit from having the tracker report to a single, shared Plaspy endpoint where location and motion data become part of live dashboards, history, and automated alerts that aid operational decisions.

Learn more about Plaspy and view platform capabilities at https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official provisioning tools for the ArkNav AT-04, verify current information on the manufacturer website https://www.arknavgps.com.tw/ as setup methods and firmware behavior can change over time.
