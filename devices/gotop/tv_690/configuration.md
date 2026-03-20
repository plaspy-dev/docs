---
slug: /gotop/tv_690/configuration
id: tv_690-configuration
sidebar_label: Configuration
title: GOTOP - TV-690 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for GOTOP TV 690 to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP TV-690 configuration
  - GOTOP TV-690 setup
  - GOTOP TV-690 server configuration
  - GOTOP GPS tracker configuration
  - Plaspy tracker setup
  - GOTOP TV-690 Plaspy
  - personal tracker TV-690 setup
  - GPS platform setup GOTOP
  - TV-690 tracking software configuration
  - GOTOP tracking setup
---

# GOTOP - TV-690 Configuration

This page documents the public configuration context for connecting the GOTOP TV-690 personal positioning tracker with the Plaspy platform. It focuses on the practical server and workflow details you will need to point the TV-690 at Plaspy so the device can report position and status to the platform. This content is intended as a practical companion to the device manual and Plaspy compatibility notes.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when data arrives at the platform. Exact manufacturer-side configuration steps for the TV-690 can vary by firmware version, hardware revision, installation style, and vendor configuration tools, so follow the device manual or vendor instructions for device-specific controls while using the Plaspy settings shown here.

## Configuration Overview

The goal of this configuration is to prepare the TV-690 to reliably send location and status information to Plaspy over the mobile data network. You will point the tracker at Plaspy's shared server endpoint and confirm transport and connectivity so the device becomes visible and manageable in the Plaspy platform.

- Point the TV-690 to the Plaspy server endpoint so data is delivered to the platform.
- Ensure the device has an active SIM and mobile data access so GPRS reporting can reach Plaspy.
- Set the device transport to UDP or TCP and use the shared Plaspy port to match platform expectations.
- Apply and save the configuration on the tracker and restart if needed to enable reporting.
- Verify the device appears in Plaspy after configuration and that periodic position updates are received.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the TV-690. Plaspy uses the same port for all supported devices and the platform automatically detects the tracker protocol when data arrives.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- A powered and operational GOTOP TV-690 with physical access to its configuration method.
- An active SIM card installed with data service enabled and any required APN configured for mobile data.
- Access to the official GOTOP configuration method such as SMS commands, a configuration tool, or vendor software as provided by the manufacturer.
- Basic knowledge of the tracker credentials or access codes required to change server settings.
- A Plaspy account or organizational access so you can confirm the device registers and reports after configuration.
- A short testing window to validate live reporting after applying settings.

## How This Tracker Connects to Plaspy

The TV-690 uses its GSM/GPRS radio to send position and device messages to a configured server. For Plaspy integration, the tracker is configured to report to the shared Plaspy server endpoint and port so the platform receives and interprets the incoming telemetry.

- The tracker sends GPS fixes and status messages over GPRS to d.plaspy.com or 54.85.159.138 on port 8888.
- You can select UDP or TCP as the transport on the device if the configuration menu requires a choice.
- Plaspy automatically detects the tracker protocol at the platform side so the device can be processed without a custom per-device endpoint.
- Once the device reports, Plaspy will surface location updates and basic operational data for monitoring and historical review.
- SMS position replies remain useful for quick ad hoc location checks, but continuous reporting for Plaspy uses the IP data path.

## Common Configuration Workflow

1. Access the official GOTOP TV-690 configuration method or software recommended by the manufacturer.
2. Locate the server or APN server settings section in the device configuration interface.
3. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888 as Plaspy uses this same port for all supported devices.
5. Choose UDP or TCP if the device requires transport selection.
6. Apply or save the configuration on the tracker and restart the device if the tool or manual directs you to do so.
7. Validate that the device is reporting to Plaspy by checking for incoming messages and position updates in the Plaspy platform.

## Example Configuration Commands

The TV-690 supports manufacturer-provided configuration methods that may include SMS commands, a USB or serial configuration tool, or vendor software. Exact command sets and syntax vary by firmware and vendor tool; consult the GOTOP documentation or vendor for the precise commands for your unit.

If your device supports SMS configuration, a typical approach is to send configuration commands or use vendor tools to set the server host and port to the Plaspy values listed earlier. Because command formats differ by firmware, do not rely on generic command examples without confirming them against the GOTOP manual.

## Configuration Notes

- Firmware and hardware revisions can change menu names, command syntax, and available transport options. Always check the device manual for your unit.
- Choose UDP or TCP based on the configuration options presented by the device; Plaspy accepts either and will auto detect the protocol.
- SMS-based configuration is often available for quick setup or recovery, but persistent reporting to Plaspy requires correct server and port configuration for GPRS data reporting.
- Remember that Plaspy uses the same port 8888 for all devices, which simplifies server configuration across different tracker models.
- If you encounter connectivity issues, verify the SIM data plan, APN settings, and that the tracker can reach external IP addresses before rechecking Plaspy connectivity.

## Why Use Plaspy with This Configuration

Configuring the GOTOP TV-690 to report to Plaspy gives organizations and caregivers a centralized way to monitor location and operational status without having to manage custom server endpoints per device. Using Plaspy's shared server endpoint and automatic protocol detection reduces configuration complexity and helps get devices reporting faster.

Learn more about Plaspy and how it can collect and display location data from the TV-690 by visiting https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and manufacturer guidance verify current information at the GOTOP website https://www.gotop.cc/.
