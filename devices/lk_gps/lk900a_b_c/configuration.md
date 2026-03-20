---
slug: /lk_gps/lk900a_b_c/configuration
id: lk900a_b_c-configuration
sidebar_label: Configuration
title: LK-GPS - LK900A/B/C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK GPS LK900A B C tracker with Plaspy server settings and practical setup steps
keywords:
  - LK-GPS LK900A
  - LK-GPS LK900B
  - LK-GPS LK900C
  - LK900A configuration
  - LK900 setup Plaspy
  - LK900 server configuration
  - Plaspy configuration guide
  - GPS tracker setup
  - vehicle tracking configuration
  - asset tracker Plaspy
---

# LK-GPS - LK900A/B/C Configuration

This page describes the public configuration context for using the LK-GPS LK900A/B/C series with Plaspy. It summarizes the practical server settings and workflow to point the LK900 series tracker at Plaspy so location and event data are delivered to the platform. The guidance here is oriented to the publicly available integration values that Plaspy requires and to common manufacturer configuration steps that are typically available to installers.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this page to prepare the device and confirm the core Plaspy endpoint values, then follow the LK-GPS official configuration tool or SMS commands for device-specific instructions.

## Configuration Overview

This configuration prepares the LK900A/B/C to send GPS location and telemetry to Plaspy so the device becomes visible in the Plaspy web dashboard and mobile app. The steps focus on making sure the tracker can reach Plaspy's endpoint and that the device uses the correct transport and port.

- Configure the tracker to report to Plaspy using the shared server endpoint and port.
- Ensure cellular data and APN settings are valid for the installed SIM and region.
- Select the transport mode supported by the tracker, UDP or TCP, and set the port to Plaspy's port.
- Save and apply the device configuration using the manufacturer tool or supported SMS commands.
- Verify the tracker appears in Plaspy and reports position updates and event alerts.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol at the shared endpoint

These values are the public Plaspy settings to use when configuring LK-GPS devices for Plaspy integration.

## Typical Requirements Before Setup

- A charged LK900A/B/C device or powered installation ready for configuration and testing.
- A valid cellular SIM with active data service and the correct APN for the network.
- Access to the official LK-GPS configuration method such as the manufacturer software, SMS command set, or configuration tool provided by the vendor.
- Basic knowledge of choosing UDP or TCP transport if the device requires manual selection.
- Access to Plaspy account or provisioning workflow to register the device once it begins reporting.
- A test location and time window to validate live updates reach Plaspy after configuration.

## How This Tracker Connects to Plaspy

The LK900A/B/C sends GPS position and telemetry over the cellular network to the Plaspy cloud endpoint. Once configured to use the shared Plaspy server settings, location updates, event alerts, and history are visible on the Plaspy platform for monitoring and reporting.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP as the transport if the tracker requires a transport selection; both are supported by Plaspy on port 8888.
- Plaspy automatically detects the tracker protocol so the server can parse device data without per-device port changes.
- Events such as geofence triggers, movement detection, and low battery are sent to Plaspy and displayed in the platform.
- Plaspy ingests periodic or interval reports for history playback and operational analysis.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software provided by the manufacturer or vendor.
2. Locate the server or remote host setting in the device configuration interface.
3. Enter d.plaspy.com or alternatively 54.85.159.138 as the server address.
4. Set the server port to 8888.
5. Choose UDP or TCP if the device requires a transport selection and save the selection.
6. Apply or save the configuration and restart the device if the manufacturer recommends a reboot.
7. Validate that the device reports to Plaspy by checking the device list and recent position updates in the Plaspy platform.

## Example Configuration Commands

The exact commands and tools used to configure the LK900A/B/C vary by firmware and vendor. Manufacturer configuration is commonly performed via a desktop configuration tool, mobile app, or SMS command set. Because model specific commands are provided by LK-GPS or the reseller, consult the LK-GPS configuration guide for the exact syntax.

If your vendor provides SMS command configuration, the typical public flow is:
- Use the manufacturer SMS command to set server domain or IP.
- Use an SMS command to set the port to 8888.
- Use an SMS command to choose transport UDP or TCP if required.
- Use an SMS command to save and reboot the device.

Always refer to the official LK-GPS documentation or the vendor command list for exact command text and order.

## Configuration Notes

- Firmware and hardware revisions can change available configuration menus and SMS command syntax; verify the correct command set for your device version.
- If the device supports both UDP and TCP, choose the transport recommended by your installer or testing; Plaspy accepts both on the same port.
- Confirm cellular APN settings are correct for the installed SIM card before troubleshooting connectivity to d.plaspy.com.
- Plaspy uses the same port 8888 for all supported devices and performs automatic protocol detection at the server, so per-device port changes are not necessary.
- When testing, allow a short window for the device to register and send its first position after configuration and restart.

## Why Use Plaspy with This Configuration

Using the LK-GPS LK900A/B/C with Plaspy provides a straightforward way to deliver real-time location, geofence alerts, and telemetry to a single cloud endpoint. For fleets and asset operators, this configuration centralizes tracking data and event notifications so teams can monitor assets, analyse routes, and respond to incidents from the Plaspy platform.

Learn more about Plaspy at https://www.plaspy.com and verify device specific configuration and firmware guidance on the LK-GPS website https://www.lk-gps.com. Manufacturer configuration methods and firmware behavior can change over time, so always confirm the current instructions on LK-GPS official documentation.
