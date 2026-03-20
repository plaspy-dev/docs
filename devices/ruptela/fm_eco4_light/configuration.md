---
slug: /ruptela/fm_eco4_light/configuration
id: fm_eco4_light-configuration
sidebar_label: Configuration
title: Ruptela - FM-ECO4 Light Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Ruptela FM-ECO4 Light for use with Plaspy using shared server settings and practical setup steps
keywords:
  - Ruptela FM-ECO4 Light configuration
  - Ruptela configuration guide
  - FM-ECO4 Light setup
  - Plaspy server configuration
  - GPS tracker setup
  - vehicle tracking configuration
  - fleet tracking with Plaspy
  - tracker protocol detection
  - Ruptela integration with Plaspy
  - GPS device visibility
---

# Ruptela - FM-ECO4 Light Configuration

This page documents the public configuration context for using the Ruptela FM-ECO4 Light with the Plaspy platform. It focuses on the practical server settings and workflow you will need to point the device to Plaspy so that vehicle location and status become visible in the platform. The guidance here is based on Plaspy's public server endpoints and the general capabilities described for the FM-ECO4 Light.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and the vendor tools you use. Use this guide to prepare and validate the FM-ECO4 Light for Plaspy, and consult Ruptela documentation for device-specific commands or configuration tools.

## Configuration Overview

Preparing the FM-ECO4 Light for Plaspy integration is about directing the device to the Plaspy server, choosing the appropriate transport, and confirming the unit reports successfully so vehicles appear in the platform. The following actions summarize the practical purpose of the configuration process.

- Configure the FM-ECO4 Light to send data to the Plaspy server endpoint so location and events are received centrally.
- Choose and set the transport method supported by the device (UDP or TCP) and set the shared Plaspy port.
- Validate cellular connectivity and any required APN or SIM settings so the tracker can reach the Internet.
- Apply the settings and restart the device if required by the manufacturer tool.
- Confirm the tracker reports to Plaspy and appears correctly in the platform with expected telemetry.

## Plaspy Server Settings

When configuring the FM-ECO4 Light for use with Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol when the device connects

Note: Plaspy uses the same port for all supported devices. Pointing the device at d.plaspy.com or 54.85.159.138 on port 8888 and selecting the appropriate transport is the required server-side configuration.

## Typical Requirements Before Setup

- Confirm the FM-ECO4 Light is powered and functional after installation.
- Ensure the device has a working SIM card and cellular network access if using the device over GSM.
- Obtain access to the Ruptela configuration method or software required to change server and transport settings.
- Note any APN or mobile operator settings required for data connectivity and have those values available.
- Have serial, USB, or the manufacturer's configuration tool ready if local configuration is needed.
- Be prepared to restart the device after applying configuration changes if the manufacturer documentation requires it.

## How This Tracker Connects to Plaspy

The FM-ECO4 Light sends its telemetry to Plaspy by opening a connection from the device to the shared Plaspy server endpoint and port. Plaspy then receives and interprets the tracker protocol automatically so the device becomes visible in the platform.

- The tracker is pointed at the Plaspy endpoint d.plaspy.com or the IP 54.85.159.138.
- The outgoing connection uses port 8888 which is the shared port for all Plaspy-supported devices.
- You may choose UDP or TCP on the device if the configuration requires transport selection.
- Once connected, Plaspy auto-detects the device protocol and begins ingesting reports for location and events.
- After successful reporting, the device and its assets become available for monitoring and historical playback in Plaspy.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software for the FM-ECO4 Light as described in the manufacturer documentation.
2. In the server settings, enter the Plaspy domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 as required by Plaspy for all supported devices.
4. Choose UDP or TCP for transport if the device requires an explicit selection.
5. Save or apply the configuration using the Ruptela tool or the device interface.
6. Restart the unit if the manufacturer recommends a reboot to apply changes.
7. Validate that the FM-ECO4 Light reports to Plaspy and that telemetry appears in the platform.

## Example Configuration Commands

The exact commands and steps to configure the FM-ECO4 Light depend on the Ruptela configuration tool or firmware and are provided in Ruptela documentation and utilities. Plaspy accepts data from the device when it is pointed to the Plaspy server and port mentioned above, but manufacturers may use different command formats, SMS strings, or desktop tools to apply settings.

If you need command examples specific to your firmware or tool, refer to Ruptela configuration manuals or the device web/PC utility to obtain the exact syntax and steps.

## Configuration Notes

- Firmware and hardware revisions can change the configuration interface and available options; always check the Ruptela documentation for your firmware version.
- If the device supports both UDP and TCP, choose the transport that matches your deployment requirements; Plaspy supports either and will auto-detect the protocol.
- Installer tools from Ruptela may provide GUI utilities, SMS commands, or direct serial/USB configuration. Use the method appropriate for your installation environment.
- Market-specific variants of the device may require different initialization steps or additional fields in the configuration tool.
- Keep APN and SIM operator settings handy when configuring cellular connectivity so the device can reach d.plaspy.com or 54.85.159.138.

## Why Use Plaspy with This Configuration

Using the Ruptela FM-ECO4 Light with Plaspy provides a straightforward way to centralize vehicle location, route, and event data for fleet monitoring and operational oversight. Pointing the device to the shared Plaspy server and port makes onboarding multiple trackers consistent and reduces per-device configuration complexity since Plaspy automatically detects the tracker protocol.

To learn more about Plaspy and the platform features, visit https://www.plaspy.com. For the most current device specific configuration steps, firmware details, and manufacturer guidance, verify information on the Ruptela website https://ruptela.com/ as methods and firmware behavior can change over time.
