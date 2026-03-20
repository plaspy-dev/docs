---
slug: /arknav/dx_3/configuration
id: dx_3-configuration
sidebar_label: Configuration
title: ArkNav - DX-3 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ArkNav DX-3 tracker with Plaspy compatibility and shared server settings
keywords:
  - ArkNav DX-3 configuration
  - ArkNav DX-3 setup
  - ArkNav DX-3 Plaspy
  - DX-3 configuration guide
  - Plaspy device setup
  - GPS tracker configuration
  - personal safety tracker setup
  - vulnerable person tracking
  - panic button tracker
  - two way voice tracker
---

# ArkNav - DX-3 Configuration

This page documents the public configuration context for using the ArkNav DX-3 with Plaspy. It explains the shared Plaspy server settings and the practical steps you will typically follow to point the DX-3 at Plaspy so events, panic alerts, Start Tracking sessions, and status updates are visible on the Plaspy platform.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and the vendor configuration tools you use, so this page focuses on the Plaspy-facing settings and the common workflow you will follow when integrating the DX-3.

## Configuration Overview

The goal of configuration is to prepare the DX-3 so it reliably communicates events and location to Plaspy while preserving the device behavior for privacy first tracking. Configuration typically ensures the device is reachable on the network, pointed at the Plaspy endpoint, and operating with the transport mode the device supports.

- Configure the tracker to send alarms and location to the Plaspy server endpoint.
- Set the shared Plaspy port so the DX-3 uses the same port Plaspy expects.
- Choose the transport protocol if the device requires UDP or TCP selection.
- Validate connectivity and confirm the device appears in Plaspy with expected event types.
- Test panic, man down, and Start Tracking flows so caregivers and operators see the alerts and location.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the DX-3. These are the values Plaspy requires for device reporting:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- Fully charged device battery or continuous power during configuration using the charging dock or charger.
- Access to the official ArkNav configuration method or software for the DX-3 such as the manufacturer tool or USB programming cable.
- An active network service as required by the device for voice and event reporting.
- A computer or mobile device capable of running the manufacturer configuration utility or connecting to the device for setup.
- Device serial number and any IDs required by your monitoring workflow or Plaspy onboarding process.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the DX-3 reports alarms, on demand tracking, and status updates to the shared Plaspy endpoint and port so platform users receive prompt notifications and location data.

- The tracker is set to report to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Panic and man-down alerts are transmitted immediately so Plaspy can route notifications to caregivers or operators.
- Start Tracking sessions send location updates while the user has tracking enabled, and those updates appear on the Plaspy live map.
- Battery and charger status are reported so Plaspy can notify teams about low power conditions.
- Two-way voice sessions can be initiated during alerts when network voice capability is available and supported.

## Common Configuration Workflow

1. Access the official ArkNav DX-3 configuration method or software supplied by the manufacturer or vendor.
2. In the device server settings enter the Plaspy endpoint either as the domain d.plaspy.com or as the IP 54.85.159.138.
3. Set the device port to 8888 so the tracker sends data to the Plaspy listening port.
4. Choose the transport mode UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration in the manufacturer tool and confirm the settings were accepted.
6. Restart the device if the manufacturer instructions indicate a reboot is required for settings to take effect.
7. Validate that the device reports to Plaspy by triggering a test event such as Start Tracking or a panic alert and confirming visibility on the Plaspy side.

## Example Configuration Commands

The DX-3 model configuration commands and exact command syntax depend on ArkNav manufacturer tools and firmware. Because manufacturers provide different configuration interfaces, the precise steps may be performed via a desktop configuration utility, USB to serial programming cable, or manufacturer supplied software. Refer to the ArkNav DX-3 configuration utility documentation for exact command syntax and examples.

If you have an ArkNav command set from the manufacturer, follow that sequence when entering the Plaspy endpoint and port values. Preserve any placeholders the manufacturer uses and replace them with your actual values when executing commands.

## Configuration Notes

- Firmware variations and hardware revisions can change configuration menus and supported transport options; always confirm the device firmware level before following a workflow.
- Choosing UDP versus TCP can affect delivery semantics; Plaspy supports both on port 8888 and will automatically detect the device protocol on connect.
- Plaspy uses the same port for all devices so you only need to set port 8888 for DX-3 reporting to Plaspy.
- Follow ArkNav documentation and vendor instructions when using the USB to serial programming cable or manufacturer software to avoid misconfiguration.
- Respect the device privacy behavior: the DX-3 shares continuous location only when Start Tracking is pressed or during an emergency session, which is part of the device design.

## Why Use Plaspy with This Configuration

Using the ArkNav DX-3 with Plaspy provides a straightforward way to bring privacy aware, personal safety tracking into a monitoring or caregiving workflow. Plaspy receives discrete event types such as panic and man-down plus on demand location updates and status information so operators can respond quickly without the need for continuous monitoring.

To learn more about Plaspy and supported tracker configurations visit https://www.plaspy.com. For the latest ArkNav DX-3 device specific setup details, firmware notes, and full technical specifications check the manufacturer site at https://www.arknavgps.com.tw/. Manufacturer specifications and configuration methods can change over time so verify the current documentation before deploying devices.
