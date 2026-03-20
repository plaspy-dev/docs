---
slug: /lk_gps/lk800/configuration
id: lk800-configuration
sidebar_label: Configuration
title: LK-GPS - LK800 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK800 integration with Plaspy for reliable personal tracking and alerts
keywords:
  - LK-GPS LK800 configuration
  - LK800 Plaspy setup
  - LK-GPS tracker configuration
  - LK800 server configuration
  - LK800 GPS setup
  - Plaspy tracker integration
  - personal GPS tracker setup
  - LK800 tracking software
  - GPS tracker Plaspy compatibility
  - LK-GPS platform setup
---

# LK-GPS - LK800 Configuration

This page documents the public configuration context for using the LK800 personal GPS tracker with Plaspy. It collects the practical server and workflow information you need to point an LK800 device at Plaspy so location, SOS alerts, fall detection, and other supported events appear in your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform side. Manufacturer-side setup steps for the LK800 can vary by firmware, hardware revision, installation type, and the vendor tools used to program the device, so use the guidance below together with LK-GPS official documentation and your device configuration tool.

## Configuration Overview

This configuration prepares the LK800 to send its location and event messages to the Plaspy backend so the device becomes visible and manageable from the Plaspy interface.

- Configure the LK800 to report to the Plaspy server endpoint so telemetry and alerts are routed to your Plaspy account.
- Select the transport option supported by the device (UDP or TCP) and match it to Plaspy’s port configuration.
- Validate cellular connectivity and APN parameters so the device can reach the Plaspy endpoint over 4G.
- Save and apply the configuration, then verify that the device appears and reports in Plaspy.
- Use manufacturer tools or SMS commands as provided by LK-GPS to perform the configuration and verification steps.

## Plaspy Server Settings

Use the following public Plaspy connection settings when configuring the LK800 device:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (choose whichever the device or installation requires)
- Plaspy automatically detects the tracker protocol so the server can accept messages in supported formats
- Note that all devices in Plaspy use the same port, 8888, for device connections

## Typical Requirements Before Setup

- An LK800 device with sufficient battery or connected to a stable power source for configuration.
- An active SIM card and a data plan provisioned for 4G data if your deployment uses cellular connectivity.
- Access to the official LK-GPS configuration method such as the vendor software, web tool, or supported SMS commands.
- APN and carrier settings for the SIM if required by the device firmware.
- A Plaspy account and the ability to confirm device reporting in the Plaspy platform.
- A network environment that allows outbound connections to the Plaspy server domain or IP on the required port.

## How This Tracker Connects to Plaspy

When configured, the LK800 sends periodic position reports and event messages to the Plaspy server endpoint so location, SOS, and fall-detection events are available for real-time monitoring and historical reporting.

- The device transmits GNSS fixes and event messages to d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Messages use either UDP or TCP depending on the transport selected during device setup.
- Plaspy ingests the tracker protocol automatically and maps incoming device messages into the user's Plaspy account for live maps and alerts.
- SOS and fall detection events are forwarded to configured contacts and platform alarms for rapid response.
- Device battery and status reports are delivered alongside location updates so administrators can monitor device health.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software provided by the manufacturer or vendor.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 to match the Plaspy endpoint.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Enter any required APN or SIM carrier parameters and save those settings if your device needs them.
6. Apply or save the configuration on the device and restart the tracker if the manufacturer instructions require a reboot.
7. Validate connectivity by confirming the LK800 reports to Plaspy and that location and event messages appear in your Plaspy account.

## Example Configuration Commands

The LK800 supports manufacturer-specific configuration methods that vary by firmware and tooling. Exact commands or SMS strings may differ depending on your device firmware and the vendor tool you use, so consult the official LK-GPS documentation for exact command syntax.

If you are using SMS-based configuration or a vendor configuration tool, follow the LK-GPS instructions to set server domain or IP, port 8888, and transport to UDP or TCP. Plaspy will receive the messages once those values are applied and the device has network connectivity.

## Configuration Notes

- Firmware differences can change the exact menu layout, SMS command set, or vendor tool behavior. Always confirm with LK-GPS documentation for your firmware revision.
- When offered, choose UDP or TCP based on your installation needs. UDP is commonly used for low-overhead reporting while TCP provides session reliability when supported.
- Because Plaspy automatically detects the incoming tracker protocol, you only need to set the correct destination and transport; the platform maps messages into the account.
- Keep APN credentials and SIM provisioning ready before attempting remote configuration to avoid intermittent connectivity during setup.
- Installer and vendor tools may provide verification commands or logs; use those to confirm successful outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Why Use Plaspy with This Configuration

Using the LK800 with Plaspy provides a straightforward way to add reliable personal tracking, SOS alerts, and fall detection into a centralized monitoring platform. Organizations and families gain real time visibility, configurable alerts, and historical route data so they can respond faster and maintain records of movement and incidents.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup, firmware notes, and command syntax with the manufacturer at https://www.lk-gps.com. Manufacturer specifications and configuration methods can change over time so always confirm current instructions on the LK-GPS website.
