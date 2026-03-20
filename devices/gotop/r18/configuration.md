---
slug: /gotop/r18/configuration
id: r18-configuration
sidebar_label: Configuration
title: GOTOP - R18 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for GOTOP R18 tracker integration with Plaspy including server settings and workflow
keywords:
  - GOTOP R18 configuration
  - GOTOP R18 setup
  - R18 Plaspy configuration
  - GOTOP tracker Plaspy
  - R18 GPS tracker setup
  - vehicle tracker configuration
  - fleet tracker setup
  - GPS tracker server settings
  - R18 tracking integration
  - Plaspy device configuration
---

# GOTOP - R18 Configuration

This page covers the public configuration context for using the GOTOP R18 tracker with Plaspy. It explains the shared server settings Plaspy expects, the practical setup workflow, and what to confirm on the device before attempting integration. Use this guide as a technician oriented reference for preparing R18 units for connection to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same endpoint and port apply to most integrations. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so always confirm details with the device documentation and installer tools from GOTOP.

## Configuration Overview

Configuring the R18 for Plaspy ensures the device sends its GPS location, alarm events, and telemetry to the Plaspy endpoint so assets and vehicles become visible in the platform. The goal of the configuration process is to point the tracker at Plaspy, verify cellular connectivity, and confirm the device appears in the Plaspy device list and map.

- Configure the tracker to report to the Plaspy server endpoint so location and event data reach the platform.
- Verify cellular connectivity and APN settings on the R18 so data sessions can be established.
- Select the transport protocol (UDP or TCP) if the device requires it and set the shared Plaspy port.
- Apply and save configuration changes on the device, then restart if required to activate settings.
- Validate the device appears in Plaspy and that position updates and alarm events are received.

## Plaspy Server Settings

When configuring the R18 to work with Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming device connections

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to handle different tracker protocols.

## Typical Requirements Before Setup

- A powered and functional R18 unit with the required wiring and connectors installed.
- An active cellular SIM with a data plan and correct APN configured for the carrier in use.
- Access to the official GOTOP configuration method or software used for the R18 (manufacturer app, web tool, or SMS commands).
- Knowledge of the device firmware version and any vendor tool behavior that affects configuration.
- A short test route or stationary test location to validate GPS lock and device visibility in Plaspy.
- Credentials or account access to the Plaspy instance where the device will be registered and monitored.

## How This Tracker Connects to Plaspy

The R18 sends periodic location updates and event messages over its cellular link to the Plaspy server endpoint and port. Plaspy ingests those messages, normalizes the telemetry and alarm information, and presents them in maps, alerts, and reports for operations and security teams.

- The device is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport may be UDP or TCP depending on the R18 configuration method and installer preference.
- GPS location, alarm events (SOS, geo-fence, power-cut, speeding, etc.), and status telemetry are forwarded to Plaspy.
- Plaspy receives the incoming messages and automatically detects the tracker protocol for proper parsing.
- Once reporting, the R18 becomes visible in Plaspy for real-time tracking, historical playback, and event alerting.

## Common Configuration Workflow

1. Access the official GOTOP R18 configuration method or software provided by the manufacturer or vendor.
2. In the device configuration screens or command interface, enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the R18 requires you to select a transport protocol.
5. Save or apply the configuration changes in the manufacturer tool.
6. Restart the device if the vendor instructions require it to activate the new settings.
7. Validate that the device reports to Plaspy by checking the device list, map position, and event logs in the platform.

## Example Configuration Commands

The R18 can be configured through GOTOP tools or vendor interfaces and the exact commands or SMS strings can vary by firmware and regional variant. Because manufacturer tools and firmware differ, reference the official GOTOP configuration guide or vendor supplied command list for exact command syntax. If you use SMS or a terminal tool provided by GOTOP, use the manufacturer documentation for precise command formats.

If you have vendor supplied command examples, apply them in the order recommended by GOTOP and include server settings as shown in the Plaspy Server Settings section above.

## Configuration Notes

- Firmware variations can change available configuration commands and menu locations; always check the device firmware version before following a guide.
- Choosing TCP versus UDP may affect delivery characteristics; UDP is common for lightweight position reports while TCP can be used where guaranteed delivery is preferred and supported.
- Keep the device APN and SIM status validated before testing connectivity to Plaspy to avoid false negatives during validation.
- Installer tools from GOTOP may provide a test or heartbeat command you can use to confirm the tracker is reaching d.plaspy.com or 54.85.159.138 on port 8888.
- Document the device IMEI and assigned vehicle or asset details when adding the tracker to Plaspy for easier onboarding and troubleshooting.

## Why Use Plaspy with This Configuration

Using the GOTOP R18 with Plaspy gives organizations a straightforward way to collect GPS location, alarms, and telemetry from a compact, rugged tracker designed for vehicles and assets. Pointing the R18 at Plaspy enables continuous visibility, event alerting, and historical reporting that support fleet operations, anti theft workflows, and remote monitoring use cases.

To learn more about Plaspy, visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and manufacturer details, verify setup information on the GOTOP website https://www.gotop.cc/ since vendor instructions and firmware behavior can change over time.
