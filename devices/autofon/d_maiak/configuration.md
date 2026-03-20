---
slug: /autofon/d_maiak/configuration
id: d_maiak-configuration
sidebar_label: Configuration
title: AutoFon - D-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon D-Маяк showing Plaspy server settings and practical setup steps for real time tracking
keywords:
  - AutoFon D-Маяк configuration
  - AutoFon D Beacon setup
  - D-Маяк Plaspy configuration
  - D-Маяк GPS tracker setup
  - AutoFon tracker server settings
  - Plaspy device integration
  - GPS tracker configuration guide
  - covert beacon setup
  - GPRS SMS reporting configuration
  - vehicle recovery tracker configuration
---

# AutoFon - D-Маяк Configuration

This page documents the public configuration context for using the AutoFon D‑Маяк with Plaspy. It summarizes the shared Plaspy server settings, common setup workflow, and practical validation steps you can use to point a D‑Маяк tracker at the Plaspy platform for real time tracking, alerts, and historical telemetry. The information here focuses on the public, manufacturer‑agnostic settings needed to integrate the device with Plaspy and on how the device typically communicates with the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can differ by firmware version, hardware revision, installation type, or vendor configuration tools. Before you apply any changes, review the D‑Маяк user guide and configuration tool from AutoFon, and treat this page as a practical companion to those official instructions.

## Configuration Overview

The goal of configuring a D‑Маяк for Plaspy is to prepare the unit to reliably send its telemetry to the Plaspy ingestion endpoint so the device becomes visible and manageable on your Plaspy dashboards. This process centers on setting the correct server endpoint, transport, and reporting mode while validating that GPRS and any fallback SMS reporting work as expected.

- Point the tracker to the Plaspy server endpoint so GPRS messages arrive at Plaspy.
- Select the transport method required by the device firmware, UDP or TCP, on the Plaspy port.
- Configure reporting intervals and event conditions so location and alarms are sent as needed.
- Validate connectivity and that Plaspy is receiving and decoding device messages.
- Ensure backup reporting behavior such as SMS fallback or the device black box buffer is configured per operational requirements.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These same server values apply to all devices configured for Plaspy. Use either the domain or the IP when entering server details in the manufacturer tool or SMS commands if the tracker requires a numeric endpoint.

## Typical Requirements Before Setup

- A powered and accessible D‑Маяк unit with firmware that supports remote GPRS reporting.
- Valid SIM card installed and active for GPRS data and SMS if fallback is required.
- Access to the official AutoFon configuration method such as the vendor web tool, desktop utility, or documented SMS command set.
- Basic knowledge of the device reporting mode you want to use (intervaled reporting, motion triggered, continuous while moving).
- A test plan to verify the device reaches Plaspy and that events such as SOS or alarms are forwarded.
- If available, a spare test SIM with data to validate GPRS reporting without impacting production resources.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the D‑Маяк sends its GPRS messages to the shared Plaspy server endpoint and port so Plaspy can ingest and display telemetry. SMS reporting can be configured as a fallback channel where supported. Plaspy handles protocol detection so the platform can parse the tracker messages once they arrive on the shared port.

- The device sends GPRS packets to d.plaspy.com or 54.85.159.138 using port 8888.
- Transport can be UDP or TCP depending on the device configuration and firmware option.
- Plaspy automatically detects the tracker protocol and decodes incoming messages for maps and event timelines.
- Event messages such as SOS, impact detection, and alarm inputs are forwarded to Plaspy as alerts.
- The D‑Маяк black box buffer helps ensure stored packets are uploaded to Plaspy after connectivity is restored.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software recommended for your D‑Маяк firmware and hardware revision.
2. In the server or GPRS settings, enter d.plaspy.com or alternatively enter 54.85.159.138.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device requires you to select the transport protocol.
5. Configure reporting intervals, movement reporting modes, and any event triggers you need for operation.
6. Apply or save the configuration in the manufacturer tool or send the SMS configuration commands if that method is used.
7. Restart the tracker if the procedure requires it or if changes do not apply immediately.
8. Validate that the device is reporting to Plaspy by checking that the unit appears on the Plaspy platform and that telemetry and events are being received.

## Example Configuration Commands

The exact commands and configuration strings for the D‑Маяк depend on the AutoFon firmware and the configuration method you choose. AutoFon devices commonly support configuration via the vendor desktop or web utility and via SMS command sets published by the manufacturer. Because manufacturer command syntax can change between firmware versions, reference the official AutoFon configuration documentation for the definitive command list.

If your installation uses SMS commands or a vendor tool, follow AutoFon documentation to format server, port, and transport parameters, using d.plaspy.com or 54.85.159.138 and port 8888 as the target. For example, the public workflow typically requires entering the server domain or IP, setting port 8888, and selecting UDP or TCP if prompted. Always verify exact command syntax in the official AutoFon manuals.

## Configuration Notes

- Firmware differences and hardware revisions can change available configuration options and exact command syntax; check AutoFon documentation for your device revision.
- Choose UDP or TCP based on the options exposed by the device firmware. Plaspy accepts both transports on the same port and will detect the protocol automatically.
- SMS based setup is a common alternative for initial provisioning or remote adjustments when GPRS is not available; use the manufacturer published SMS command set where available.
- The D‑Маяк black box buffer provides resilience during network outages, but test recovery behavior to ensure stored packets are uploaded to Plaspy as expected.
- Installer best practices include testing with a known good SIM and a controlled test environment before deploying the unit in a covert location.

## Why Use Plaspy with This Configuration

Using the AutoFon D‑Маяк with Plaspy gives organizations a compact, long life tracking option that forwards location and event telemetry into a single monitoring platform. For covert recovery, remote asset protection, or supplementary fleet telemetry, configuring the tracker to report to d.plaspy.com on port 8888 ensures device messages are received and decoded by Plaspy for maps, timelines, and alerts.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official command syntax consult the manufacturer at https://www.autofon.ru/. Manufacturer configuration methods and firmware behavior can change over time so verify current instructions on the official AutoFon site before applying configuration in production.
