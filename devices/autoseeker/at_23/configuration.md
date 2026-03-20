---
slug: /autoseeker/at_23/configuration
id: at_23-configuration
sidebar_label: Configuration
title: Autoseeker - AT-23 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Autoseeker AT 23 for use with Plaspy including required server settings and setup workflow
keywords:
  - Autoseeker AT-23 configuration
  - Autoseeker AT-23 setup for Plaspy
  - AT-23 server configuration
  - AT-23 GPS tracker configuration
  - Autoseeker tracker Plaspy integration
  - vehicle tracker AT-23 setup
  - AT-23 relay immobilizer configuration
  - 2G tracker configuration guide
  - fleet tracking AT-23 Plaspy
  - GPS tracker platform setup
---

# Autoseeker - AT-23 Configuration

This page documents the public configuration context for using the Autoseeker AT-23 tracker with Plaspy. It covers the server and connectivity settings Plaspy requires, what to check before you start, and a practical workflow to configure the device so it reports into Plaspy. The information here is focused on the common, public steps needed to point the AT-23 at Plaspy and validate that telematics and event data appear in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation method, and vendor configuration utilities. Use this page to prepare and apply the Plaspy settings, and consult the Autoseeker documentation or tools for device specific configuration screens or commands when needed.

## Configuration Overview

The goal of configuration is to prepare the AT-23 so it reliably sends location, relay state, and event messages to Plaspy for real time visibility and historical playback. Typical setup tasks involve pointing the device at the Plaspy endpoint, selecting a transport, saving the configuration, and confirming that data arrives in the platform.

- Configure the tracker to report to the Plaspy server endpoint so location and event messages reach the platform.
- Select the transport protocol supported by the device and Plaspy either UDP or TCP and set the shared Plaspy port.
- Validate cellular connectivity and SIM readiness so the AT-23 can reach the Plaspy server.
- Save and apply the settings on the tracker and, if necessary, restart the device to begin reporting.
- Confirm device visibility in Plaspy dashboards and verify event reporting such as relay actions, power alerts, and movement events.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

These values are the public Plaspy endpoint details to use when pointing the AT-23 at Plaspy. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device communicates with the server.

## Typical Requirements Before Setup

- Confirm the AT-23 is powered and wired correctly according to the Autoseeker installation guide.
- Install and activate a compatible 2G SIM card if required by your device and carrier.
- Have access to the manufacturer's configuration method such as a configuration tool, SMS commands, or web interface provided by Autoseeker.
- Know the Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888 before starting configuration.
- A test procedure to validate that the device appears in Plaspy after configuration, such as a test trip or triggering an event.

## How This Tracker Connects to Plaspy

When configured, the AT-23 sends its position, telemetry, and event data to the Plaspy server endpoint and port so operators can monitor assets from Plaspy dashboards. The device uses standard 2G cellular connectivity to forward messages to the configured host and Plaspy will identify the tracker protocol automatically once data arrives.

- The tracker reports GNSS position fixes and movement events to d.plaspy.com on port 8888.
- Relay state changes and immobilizer events are sent to Plaspy and recorded in the device timeline.
- Power and battery alerts are forwarded to the Plaspy server for monitoring and notifications.
- Plaspy receives data over UDP or TCP depending on the device configuration and will auto detect the protocol.
- Once reporting begins, Plaspy dashboards provide live mapping, history playback, and event-based alerts.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software appropriate for the AT-23 model and firmware.
2. In the device server or remote host settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the destination port to 8888 as Plaspy uses the same port for all devices.
4. If the device requires a transport selection choose either UDP or TCP according to installer preference or network conditions.
5. Apply or save the configuration in the Autoseeker tool or device interface.
6. Restart the AT-23 if required by the manufacturer for new network settings to take effect.
7. Validate that the device reports to Plaspy by checking the Plaspy dashboard for the device and confirming location and event messages arrive.

## Example Configuration Commands

The AT-23 documentation and vendor tools determine the exact configuration commands or menus. The method can vary by firmware and manufacturer toolset, so the command syntax is not universal. Use the Autoseeker configuration utility or the official device manual to apply the Plaspy server values d.plaspy.com or 54.85.159.138 and port 8888 and to choose UDP or TCP as needed.

If your device uses SMS based configuration or textual commands provided by Autoseeker, refer to the official Autoseeker command list for the exact syntax and order. Always preserve placeholders from manufacturer templates such as APN values when present and replace them with your carrier details.

## Configuration Notes

- Firmware differences can change where settings are presented and the exact command syntax required; always check the AT-23 firmware notes.
- Choosing UDP reduces connection overhead but TCP can provide more reliable delivery on networks that support it; Plaspy supports both and will auto detect the protocol.
- Installer practices vary by vehicle type and installation location; ensure antennas and power connections meet Autoseeker recommendations for reliable GNSS and cellular reception.
- Keep a record of the device IMEI and any provisioning identifiers so you can match the physical device to the Plaspy dashboard entry after configuration.
- Confirm optional backup battery state or power reporting settings if you rely on low power or tamper alerts in Plaspy.

## Why Use Plaspy with This Configuration

Using the AT-23 with Plaspy gives fleet managers and asset operators a straightforward route to combine compact vehicle tracking hardware and platform visibility. When the AT-23 is pointed at Plaspy using the shared server settings, the device provides location, relay status, and event messages that Plaspy can use for geofencing, history playback, and automated alerting to support operational monitoring and anti-theft workflows.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific configuration instructions, firmware behavior, and manufacturer details verify information on the Autoseeker site https://autoseekergps.com/
