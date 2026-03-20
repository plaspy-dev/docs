---
slug: /lk_gps/lk106/configuration
id: lk106-configuration
sidebar_label: Configuration
title: LK-GPS - LK106 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK GPS LK106 tracker with Plaspy compatibility and server setup details for quick integration
keywords:
  - LK GPS LK106 configuration
  - LK106 Plaspy setup
  - LK106 server configuration
  - LK GPS tracker configuration
  - LK106 tracking software configuration
  - Plaspy tracker setup
  - personal tracker integration
  - GPS tracker server settings
  - LK106 SMS configuration
  - real time tracking setup
---

# LK-GPS - LK106 Configuration

This page documents the public configuration context for using the LK-GPS LK106 with the Plaspy platform. It summarizes the Plaspy server settings you will use, describes the typical integration workflow, and explains what to check before attempting to register and operate the device with Plaspy. The focus here is practical setup guidance based on public compatibility information and the LK106 device description.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on connection. Manufacturer-side configuration steps for the LK106 can vary by firmware, hardware revision, installation type, and vendor tools. Use this page to prepare the LK106 for Plaspy and then follow the vendor documentation or configuration tool for device-specific commands or SMS setup when required.

## Configuration Overview

The goal of configuration is to point the LK106 at Plaspy and confirm that it reports position and event data reliably. This prepares the device for live monitoring and alerting within the Plaspy environment.

- Configure the device to send its data to the Plaspy server endpoint and port.
- Ensure the LK106 has an active SIM with data and SMS enabled as needed for fallback configuration.
- Validate transport selection (UDP or TCP) on the device if required by its configuration tool.
- Save and apply settings, reboot the tracker if requested by the manufacturer tool, and confirm that Plaspy receives data.
- Verify SOS, geofence, and movement alert functionality forwards events to Plaspy for monitoring.

## Plaspy Server Settings

Use the following public Plaspy connection settings when configuring the LK106. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device as required
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- An LK106 unit charged and powered according to the manufacturer instructions.
- A SIM card inserted with active mobile data and SMS enabled for fallback configuration and alerts.
- Access to the official LK-GPS configuration method, app, or SMS command format provided by the manufacturer.
- A Plaspy account or the ability to register the device on the Plaspy platform for visibility and alerts.
- Network reachability from the device to d.plaspy.com or 54.85.159.138 on port 8888.

## How This Tracker Connects to Plaspy

The LK106 sends location and event data to the shared Plaspy server endpoint and port so Plaspy can display live positions, trigger rules, and forward notifications. The tracker typically uses mobile data for continuous reporting and SMS as a fallback for configuration or emergency alerts in areas with limited data coverage.

- Device data is addressed to d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP as the transport if the LK106 configuration requires an explicit selection.
- Plaspy receives position updates and makes them visible in the platform dashboards.
- SOS alarms, geofence enter/leave notifications, and movement alerts are forwarded to Plaspy rules and notifications.
- Battery level and status reports are delivered to Plaspy for monitoring and alerting.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software as provided by LK-GPS or your vendor (app, web tool, or SMS command set).
2. Locate the server or platform settings area in the device configuration interface.
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
4. Set the port to 8888 as required by Plaspy and note that Plaspy uses the same port for all devices.
5. Choose UDP or TCP if the device requires transport selection; Plaspy will automatically detect the tracker protocol on connect.
6. Apply or save the configuration through the manufacturer tool or with the device SMS command if supported.
7. Restart or power-cycle the device if the manufacturer instructions require it.
8. Validate that the device reports to Plaspy by checking for initial position updates and event messages in your Plaspy account.

## Example Configuration Commands

No specific LK106 public commands are included on this page. Exact configuration commands and methods depend on the manufacturer tool, firmware version, or SMS command format provided by LK-GPS. Follow the LK-GPS configuration guide or vendor tool to set the server to d.plaspy.com or 54.85.159.138 and the port to 8888, and to select UDP or TCP if necessary.

If your vendor supplies SMS commands for configuration, those commands will typically follow an order such as set server, set port, set transport, save settings, and reboot. Preserve any placeholders the vendor documentation uses (for example APN related placeholders) and replace them with your network values when applying configuration.

## Configuration Notes

- LK106 firmware versions and vendor configuration apps can differ. Confirm the exact steps in the LK-GPS manual for your firmware revision.
- When given the choice, UDP is commonly used for lightweight tracking traffic, while TCP may help with reliable delivery in some networks; Plaspy accepts either and auto detects protocol.
- SMS configuration is useful as a fallback in areas with limited data connectivity; however, SMS command formats vary by manufacturer.
- Always save or apply settings in the vendor tool and reboot the device if the manufacturer recommends doing so for settings to take effect.
- Verify device IMEI and registration details as required by Plaspy so the device appears correctly in your account after first contact.

## Why Use Plaspy with This Configuration

Using the LK-GPS LK106 with Plaspy provides a straightforward way to bring compact personal and small asset tracking into a centralized monitoring platform. With Plaspy ingesting the LK106 telemetry, you can view live positions, receive SOS and geofence alerts, and monitor battery status across web and mobile interfaces for operational awareness and timely response.

To learn more about Plaspy and how it handles device connections and visibility, visit https://www.plaspy.com. For the latest LK106 device specific setup details, firmware behavior, and manufacturer instructions verify information at the LK-GPS official website https://www.lk-gps.com.
