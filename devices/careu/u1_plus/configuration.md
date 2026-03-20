---
slug: /careu/u1_plus/configuration
id: u1_plus-configuration
sidebar_label: Configuration
title: CAREU - U1 PLUS Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU U1 PLUS with Plaspy including required server settings and setup workflow
keywords:
  - CAREU U1 PLUS configuration
  - CAREU U1 PLUS setup
  - CAREU U1 PLUS Plaspy
  - CAREU U1 PLUS server configuration
  - CAREU U1 PLUS GPS tracker setup
  - Plaspy device configuration
  - Plaspy server settings
  - vehicle telematics configuration
  - fleet tracker setup
  - OBD II CAN integration
---

# CAREU - U1 PLUS Configuration

This page documents the public configuration context for using the CAREU U1 PLUS tracker with Plaspy. It explains the shared server settings Plaspy requires and the general workflow to prepare a U1 PLUS device so it can send location and vehicle telemetry to the Plaspy platform. Use this page as a practical reference for integration steps that are publicly available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps vary by firmware, hardware revision, installation type, and vendor tools. Always cross-check manufacturer instructions for model-specific behavior and firmware dependencies before applying configuration changes.

## Configuration Overview

The goal of configuring a CAREU U1 PLUS for Plaspy is to ensure the device can transmit GNSS positions and vehicle telemetry reliably to the Plaspy backend and be visible in the Plaspy platform. Configuration prepares the device networking, transport settings, and any manufacturer-specific parameters so Plaspy can ingest and normalize the device data.

- Point the tracker to Plaspy’s shared server endpoint so telematics packets arrive at the platform.
- Select the transport (UDP or TCP) required by the device or preferred for your deployment.
- Set the common Plaspy port so the backend accepts incoming telemetry from the tracker.
- Verify cellular connectivity and that the device can reach Plaspy by testing a single position or heartbeat.
- Confirm that OBD II / CAN and accessory sensor streams are enabled if you require engine or fuel data to be forwarded to Plaspy.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the CAREU U1 PLUS. Plaspy expects all supported devices to use the same port and it automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (configure the tracker to use UDP or TCP as required)
- Plaspy automatically detects the tracker protocol when data arrives on the configured port

## Typical Requirements Before Setup

- A powered and installed CAREU U1 PLUS unit with antenna and wiring appropriate for the vehicle.
- Active cellular connectivity with a data enabled SIM compatible with the device bands and network in your region.
- Access to the official CAREU configuration method or software provided by the manufacturer (web tool, desktop tool, Bluetooth app, or SMS configuration options).
- Knowledge of the device IMEI or unique identifier used by your fleet records so you can match the device in Plaspy after it reports.
- Current firmware information and access to firmware update tools if the device requires FOTA or an upgrade for specific features.
- Adequate cellular signal at the installation location to validate live telemetry transmission.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the CAREU U1 PLUS streams GNSS location and vehicle telemetry to the Plaspy backend over cellular links. Plaspy ingests position updates, CAN/OBD telemetry, accelerometer events, and sensor inputs so fleet managers receive consolidated, actionable data.

- The tracker is configured to report to the shared Plaspy server endpoint at d.plaspy.com or 54.85.159.138.
- Telemetry and position packets are sent to port 8888 on the Plaspy server.
- The device can use either UDP or TCP transport depending on configuration; Plaspy will accept either and detect the protocol automatically.
- CAN/OBD telemetry and sensor events are forwarded to Plaspy where they are normalized and correlated with location data.
- Plaspy provides visibility for real-time tracking, geofence events, and device alarms reported by the tracker.

## Common Configuration Workflow

Follow these practical steps when integrating a CAREU U1 PLUS with Plaspy. Exact menus and commands depend on CAREU’s configuration tool and firmware, so adapt as needed.

1. Access the official CAREU configuration method or software provided by the manufacturer (desktop tool, mobile app, Bluetooth configuration, or SMS/AT command interface).
2. In the device server or backend settings, enter the Plaspy server address as d.plaspy.com or alternatively use the server IP 54.85.159.138 if the tool requires an IP.
3. Set the device port to 8888. All devices configured for Plaspy use this same port.
4. If the device requires a transport selection, choose UDP or TCP per your site preference or the device’s supported option.
5. Apply or save the configuration in the CAREU tool and confirm settings were written to the device.
6. Restart or power cycle the tracker if required by the manufacturer for changes to take effect.
7. Validate that the device reports to Plaspy by sending a test position or checking for the first heartbeat in your Plaspy account; confirm the device identifier matches your records.

## Example Configuration Commands

The CAREU U1 PLUS may be configured via manufacturer tools, Bluetooth, or SMS/command interfaces depending on firmware. Exact public commands vary by firmware and model variant; the manufacturer documentation and configuration tools are the authoritative sources.

If you use SMS or AT command methods provided by CAREU, follow the command syntax in the official CAREU documentation. Because the U1 PLUS configuration commands depend on firmware and vendor utilities, this page does not publish a generic command set. Refer to CAREU configuration guides for command examples and use placeholders where required (for example an APN placeholder such as [apn] when setting mobile data parameters).

## Configuration Notes

- Firmware variations may change available configuration menus, supported transports, and command syntax; confirm the device firmware version before applying steps.
- TCP and UDP behave differently in lossy networks; choose UDP for lighter overhead and TCP if you require guaranteed packet delivery and the device/firmware supports it.
- Use the server domain d.plaspy.com when possible; if DNS is not available in your environment, the server IP 54.85.159.138 is an alternative.
- Port 8888 is the shared Plaspy port for all devices; do not change this value unless instructed by Plaspy support.
- Keep a record of device identifiers and installation notes so you can match incoming telemetry in Plaspy to physical units during validation.

## Why Use Plaspy with This Configuration

Configuring the CAREU U1 PLUS to report to Plaspy combines a robust vehicle-grade tracker with a platform designed to normalize telematics and present actionable fleet data. For organizations managing heavy trucks, mixed-network deployments, and multi-sensor telemetry, this pairing reduces integration effort and delivers consolidated visibility into location, engine metrics, fuel monitoring, and safety events.

To learn more about Plaspy and how it handles device onboarding and telematics ingestion, visit https://www.plaspy.com. For the most current device-specific setup details, firmware notes, and manufacturer tools for the CAREU U1 PLUS, verify the official CAREU documentation at https://www.systech-iot.com/ since device behavior and configuration methods can change over time.
