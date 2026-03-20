---
slug: /stars_nav/pt_33/configuration
id: pt_33-configuration
sidebar_label: Configuration
title: Stars Nav - PT-33 Configuration
sidebar_class_name: menu_item_tracker
description: Setup and server configuration guide for Stars Nav PT-33 personal tracker compatible with Plaspy tracking platform
keywords:
  - Stars Nav PT-33 configuration
  - PT-33 setup Plaspy
  - PT-33 server configuration
  - Stars Nav tracker configuration
  - PT-33 GPS platform setup
  - Plaspy device configuration
  - PT-33 tracking software configuration
  - personal tracker Plaspy integration
  - PT-33 telemetry setup
  - PT-33 geofence configuration
---

# Stars Nav - PT-33 Configuration

This page documents the public configuration context for using the Stars Nav PT-33 personal tracker with the Plaspy platform. It focuses on the practical server and workflow information needed to direct the PT-33 to Plaspy so that live location, alerts, and stored logs become visible in the Plaspy system. Information here is intended for technical users preparing devices for integration and for installers who need the shared Plaspy connection details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device establishes a connection. Exact manufacturer-side setup steps and available options can vary by PT-33 firmware version, hardware revision, installation type, and vendor tools, so always combine the shared Plaspy settings in this guide with the PT-33 official configuration methods from the manufacturer.

## Configuration Overview

The goal of this configuration process is to point the PT-33 to Plaspy and confirm reliable communication so the device reports location, alerts, and stored data to the platform. Setup centers on updating the device server/host and port, selecting the transport if required, saving the configuration in the device, and confirming that Plaspy receives the first reports.

- Configure the PT-33 to send data to the Plaspy server endpoint.
- Choose the transport protocol (UDP or TCP) when the device requires a selection.
- Save and apply the configuration using the Stars Nav configuration tool or supported method.
- Restart or power-cycle the device if the manufacturer recommends it to apply changes.
- Validate that Plaspy receives device messages and that the device appears in the Plaspy dashboard.

## Plaspy Server Settings

Use the following public Plaspy connection values when configuring the PT-33. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on connection.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and operational PT-33 device with access to the manufacturer configuration method.
- A working SIM and cellular connectivity if the device is a GSM cellular tracker, and the SIM has data enabled and registered on a network supported by the device.
- Access to the Stars Nav configuration software, SMS command list, or web/desktop tool recommended by the vendor.
- Basic device identifiers such as device IMEI or serial number to match the device in Plaspy after it connects.
- Ability to power cycle or restart the device after saving configuration changes.
- Administrative access to Plaspy to confirm that the device appears and begins reporting.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the PT-33 sends its GPS position reports, alert messages, and stored logs to the shared Plaspy endpoint and port. Plaspy ingests those reports, automatically determines the tracker protocol, and presents the device data in the platform for live tracking and historical review.

- The PT-33 is configured to report to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138.
- All device traffic is directed to port 8888, the shared Plaspy port used for supported trackers.
- The tracker may use UDP or TCP transport to send messages depending on the device configuration.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device instance.
- Once messages arrive, Plaspy processes position, alert, and stored record reports for visibility in maps, reports, and alerts.

## Common Configuration Workflow

1. Access the official Stars Nav PT-33 configuration method using the vendor tool, SMS commands, or the device web interface per the manufacturer documentation.
2. Enter the Plaspy server as d.plaspy.com or set the server IP to 54.85.159.138 in the device server/host field.
3. Set the device port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose UDP or TCP as the transport if the PT-33 requires a transport selection.
5. Apply or save the configuration changes in the device configuration tool.
6. Restart or power-cycle the PT-33 if the manufacturer documentation or tool instructs to do so to apply new settings.
7. Validate that the device reports to Plaspy by checking for incoming data in the Plaspy platform and confirming the device appears online.

## Example Configuration Commands

The PT-33 supports vendor-specific configuration methods such as SMS commands, a PC configuration utility, or a web interface. Exact commands and syntax vary by firmware and the manufacturer tool, so include the Plaspy server settings when using those methods. Because manufacturer firmware and command sets differ, consult the Stars Nav documentation for the precise command list.

When using a configuration interface that requests server and transport values, provide:
- Server: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

If you have an SMS-based configuration guide from Stars Nav, include the same values above in the corresponding SMS commands. Preserve any placeholders supplied by manufacturer examples such as [apn], [apnu], or [apnp] when present and replace them with your network operator APN credentials.

## Configuration Notes

- Firmware variations can change available command names and configuration menus; verify the PT-33 firmware version before applying settings.
- TCP and UDP both work with Plaspy; choose the transport required or recommended by your installation and device firmware. Plaspy will accept either on port 8888.
- Because Plaspy uses a shared port and automatic protocol detection, most setups require only the correct server host/IP and port.
- Keep a record of the device IMEI or serial so you can match the PT-33 to its Plaspy device entry after the initial connection.
- Refer to Stars Nav documentation for any SMS command formats, default behaviors, or optional reset steps when troubleshooting.

## Why Use Plaspy with This Configuration

Using the PT-33 with Plaspy gives organizations straightforward visibility of personal tracker data in a centralized platform. The PT-33’s compact design, large onboard route log, and panic button events map cleanly into Plaspy workflows so teams can monitor live locations, receive alerts, and access historical tracks for review and reporting.

To learn more about Plaspy and how compatible devices appear in the platform visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details always verify current information on the official Stars Nav website http://www.starsnav.com/
