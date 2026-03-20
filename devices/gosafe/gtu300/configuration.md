---
slug: /gosafe/gtu300/configuration
id: gtu300-configuration
sidebar_label: Configuration
title: Gosafe - GTU300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe GTU300 with Plaspy including server settings, setup workflow and integration notes
keywords:
  - Gosafe GTU300 configuration
  - Gosafe GTU300 setup
  - GTU300 Plaspy configuration
  - GTU300 server configuration
  - Gosafe GPS tracker setup
  - Plaspy tracker configuration
  - GTU300 fleet tracking setup
  - Gosafe GTU300 integration
  - GTU300 telemetry configuration
  - Gosafe tracker Plaspy
---

# Gosafe - GTU300 Configuration

This page describes the public configuration context for using the Gosafe GTU300 with Plaspy. It summarizes the shared server settings and practical steps needed to point a GTU300 at Plaspy for real-time location and telemetry delivery. Use this guide alongside the GTU300 manufacturer documentation and installation practices for device-specific wiring and safety considerations.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol, while the exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use. The GTU300 supports multiple transports and connectivity fallbacks, and this guide focuses on the public Plaspy endpoint and workflow required to integrate the device into the Plaspy platform.

## Configuration Overview

Preparing a GTU300 for use with Plaspy is primarily about directing its data to Plaspy's shared server endpoint and validating that the tracker can reach and report to the platform. The process typically involves entering the Plaspy server address, selecting the transport, ensuring cellular or fallback connectivity, and confirming that the device appears in Plaspy.

- Configure the device to report to Plaspy by setting the server endpoint and port.
- Choose the transport (UDP or TCP) if your GTU300 configuration tool requires a selection.
- Verify cellular connectivity, SIM/eSIM readiness, and any fallback options like GPRS or Wi‑Fi.
- Save and apply settings, then validate the tracker appears and reports correctly in Plaspy.
- Use manufacturer tools or SMS commands (when supported) to confirm device telemetry and status.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GTU300:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will automatically detect the correct tracker protocol for devices reporting to this endpoint.

## Typical Requirements Before Setup

- Access to the GTU300 manufacturer configuration method or software for your device build and firmware.
- A powered and installed GTU300 with a valid SIM or eSIM configured for data where required.
- Confirmed cellular connectivity or other transport fallbacks (GPRS, Wi‑Fi) available to the device.
- Recent firmware or OTA state that supports remote configuration and the transports you plan to use.
- Credentials and account access on your Plaspy instance so that you can validate device reports and visibility.
- Basic tools for testing connectivity such as a serial adapter, configuration app, or SMS-capable phone if manufacturer supports SMS provisioning.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GTU300 sends location and telemetry to the shared Plaspy endpoint so Plaspy can ingest position, events, and sensor data for dashboards and reporting. The GTU300’s multiple transport options and fallback mechanisms improve the odds of continuous reporting under varying network conditions.

- The device is pointed to d.plaspy.com (or 54.85.159.138) and port 8888 for reporting.
- The GTU300 can use UDP or TCP as its transport when configured; Plaspy accepts both.
- Plaspy automatically detects the tracker protocol once the device successfully connects and sends data.
- Telemetry such as GNSS location, ignition status, accelerometer events, and external sensor inputs flow into Plaspy for processing.
- Plaspy provides visibility, event notifications, and historical data based on the GTU300 reports.

## Common Configuration Workflow

1. Access the official Gosafe configuration method or software appropriate for your GTU300 firmware and hardware revision.
2. In the device server settings, enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device configuration requires explicit transport selection.
5. Apply or save the configuration within the manufacturer tool or send the configuration via the supported provisioning channel.
6. Restart or power-cycle the GTU300 if the manufacturer instructions indicate this is required to apply settings.
7. Validate that the device reports to Plaspy and appears in your Plaspy account or device list.

Follow any additional manufacturer guidance for deploying device wiring, CAN or 1‑Wire connections, and accessories when integrating the GTU300 into a vehicle.

## Example Configuration Commands

The exact command set or configuration steps vary by Gosafe firmware, the configuration utility you use, and whether you provision the device by software, USB, serial, or SMS. Because commands and formats differ across firmware revisions and vendor tools, consult the GTU300 user manual or configuration tool for exact command syntax.

When you configure the GTU300, you will typically enter the Plaspy server address (d.plaspy.com or 54.85.159.138) and port 8888, and select UDP or TCP as needed. Plaspy’s automatic protocol detection will handle the protocol identification after the device begins reporting.

## Configuration Notes

- Firmware differences and regional hardware variants can change available configuration methods; always verify the correct tool and firmware level before editing settings.
- Choosing TCP or UDP depends on your operational needs and network behavior; both are supported by the GTU300 and accepted by Plaspy.
- Dual SIM or eSIM configurations should be tested to ensure failover behavior meets your uptime requirements.
- OTA firmware updates are supported by the GTU300; keep firmware current to maintain compatibility and access to the latest provisioning features.
- If the manufacturer provides SMS provisioning commands, use them only as documented and consider confirming changes via the primary configuration tool.

## Why Use Plaspy with This Configuration

Using the GTU300 with Plaspy provides professional fleet teams with consistent visibility across vehicles, reliable event reporting, and the ability to collect diverse telemetry beyond location. The GTU300’s connectivity options and I/O interfaces let fleets send meaningful sensor and vehicle state data into Plaspy for alerts, analytics, and operational workflows.

To learn more about how Plaspy supports device integrations and fleet management, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details, verify the latest information on the Gosafe website https://gosafesystem.com/.
