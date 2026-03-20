---
slug: /lk_gps/lk100/configuration
id: lk100-configuration
sidebar_label: Configuration
title: LK-GPS - LK100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK-GPS LK100 showing how to point the tracker to Plaspy with shared server settings and practical setup steps
keywords:
  - LK-GPS
  - LK100
  - LK100 configuration
  - LK-GPS configuration
  - LK100 setup
  - Plaspy integration
  - Plaspy configuration
  - GPS tracker setup
  - pet tracker configuration
  - tracking platform setup
---

# LK-GPS - LK100 Configuration

This page documents the public configuration context for using the LK-GPS LK100 mini pet tracker with Plaspy. It describes the shared server settings Plaspy requires and explains the practical steps you will commonly perform on the manufacturer side to point the device at the platform. The technical details here focus on what must be entered in the tracker or manufacturer tool so the unit can deliver location and event data to Plaspy.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side configuration steps can vary by firmware revision, hardware revision, installation method, and the vendor configuration tool (for example a mobile app, web portal, or SMS commands). Use this guide to prepare the LK100 for Plaspy, and verify device-specific details with the manufacturer documentation.

## Configuration Overview

This configuration process prepares the LK100 to send location updates, alerts, and basic telemetry to the Plaspy platform so the device becomes visible and manageable in the fleet or pet tracking view. The goal is to configure the tracker with Plaspy server values, confirm transport settings, and validate that the tracker reports correctly to the platform.

- Enter the Plaspy server endpoint and identifiers provided here into the LK100 configuration method.
- Select the transport type if the device requires a choice between UDP and TCP.
- Set the port to the Plaspy shared port so the tracker can open a session to the platform.
- Save and apply the manufacturer configuration, then restart or reactivate the device if required.
- Validate connectivity by confirming the LK100 appears in Plaspy and sends periodic location updates and event alerts.

## Plaspy Server Settings

Plaspy requires the following public server settings for all supported devices. These values must be used when configuring the LK100 to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all devices it supports, and the platform will attempt to recognize the tracker protocol automatically.

## Typical Requirements Before Setup

- A charged LK100 with the manufacturer recommended battery and a powered state suitable for configuration.
- Access to the official LK-GPS configuration method or software such as the manufacturer's mobile app, web portal, or documented SMS commands.
- A network connection on the device so it can reach external servers and report to Plaspy.
- The device identifier or serial information provided with the unit for registration or platform records.
- Access to any account or management credentials required by the manufacturer tool to apply settings.
- A plan for testing the device in a controlled area to confirm updates before broad deployment.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the LK100 sends location and event information to the platform endpoint so the device is visible and trackable in the dashboard. The tracker will be set to report to the shared Plaspy endpoint and port and relies on the manufacturer configuration method to direct those messages.

- The LK100 is configured to send periodic location updates to d.plaspy.com or 54.85.159.138 using port 8888.
- Plaspy accepts connections over UDP or TCP and will automatically detect the correct protocol for incoming messages.
- SOS presses and geo-fence breaches reported by the LK100 will be forwarded to Plaspy when the device is pointed at the shared server.
- Two-way voice monitoring and other supported event reporting on the device will be relayed to the platform when connectivity is active.
- Successful configuration results in live visibility and historical route playback shown inside Plaspy.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software provided by the manufacturer (app, web portal, or documented SMS/command method).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 which is the shared Plaspy port.
4. Choose UDP or TCP if the device requires selection of a transport protocol.
5. Apply or save the configuration in the manufacturer tool.
6. Restart the device if the manufacturer instructions indicate a reboot or reinitialization is required.
7. Validate that the LK100 is reporting to Plaspy by checking for incoming location updates and events in the Plaspy platform.

## Example Configuration Commands

No public command set for the LK100 is included on this page. Exact configuration commands or message formats depend on the manufacturer tools and the LK100 firmware. Use the official LK-GPS configuration method to enter the Plaspy server settings shown above. If your vendor provides SMS or direct command strings for configuration, the relevant values you must supply are:

- Server domain d.plaspy.com or server IP 54.85.159.138
- Port 8888
- Transport UDP or TCP as required by the device

Consult the LK-GPS documentation or vendor configuration guide to see exact command syntax and sequence for your firmware version.

## Configuration Notes

- Manufacturer firmware differences may change configuration menus, field names, or command syntax; always check device documentation.
- Choose TCP or UDP according to any manufacturer recommendation; Plaspy supports both and will detect the protocol automatically on connection.
- Because Plaspy uses the same port for all devices, the port field should be set to 8888 as shown rather than a device specific port.
- Test configuration in a controlled environment to confirm location updates, SOS alerts, and geo-fence events appear in Plaspy before wide deployment.
- When possible, keep the device firmware updated according to the manufacturer to ensure compatibility with platform integrations.

## Why Use Plaspy with This Configuration

Configuring the LK100 to report to Plaspy offers a straightforward way to centralize pet tracking, event monitoring, and historical route review in a single platform. Organizations and pet owners benefit from consistent visibility, easy event alerting, and consolidated device management when trackers are directed to the shared Plaspy server endpoint.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and configuration tools for the LK100 consult the manufacturer at https://www.lk-gps.com. Manufacturer specifications and setup methods can change over time, so verify current details on the official LK-GPS documentation.
