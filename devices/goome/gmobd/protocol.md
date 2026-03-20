---
slug: /goome/gmobd/protocol
id: gmobd-protocol
sidebar_label: Protocol
title: Goome - GMOBD Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Goome GMOBD and how the tracker communicates with Plaspy for vehicle monitoring and reporting
keywords:
  - Goome GMOBD protocol
  - Goome GMOBD GPS protocol
  - Goome GMOBD protocol for Plaspy
  - Goome OBD2 tracker protocol
  - GMOBD tracking protocol
  - Goome vehicle tracking
  - GMOBD communication protocol
  - Plaspy device compatibility
  - GPS tracker protocol guide
  - OBD2 GPS tracker Plaspy
---

# Goome - GMOBD Protocol

This page describes the public protocol context for using the Goome GMOBD GPS tracker with Plaspy. It focuses on high level communication and connection information that helps you understand how the GMOBD reports position, alerts, and status to the Plaspy platform without exposing sensitive implementation details.

Plaspy operates with shared connection settings for all supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so always validate device settings against manufacturer documentation and the deployed device firmware.

## Protocol Overview

The Goome GMOBD is an OBD2 based vehicle tracker with integrated GSM and satellite positioning. Its communication protocol governs how the device identifies itself, reports positions, sends alarms, and accepts remote configuration or queries through the network to a tracking server.

- Provides the channel for periodic and event driven position reports from the GMOBD to the platform.
- Carries device identity and status information that lets Plaspy associate incoming messages with the correct vehicle record.
- Delivers alarm and sensor events such as power off alerts, vibration alarms, and geo fence triggers to Plaspy.
- Enables remote command and configuration where supported by the device and manufacturer settings.
- Translates onboard sensors such as acceleration and OBD status into structured messages consumable by Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming data on a shared endpoint and port and uses the content and connection context to determine the correct tracker protocol automatically. In most cases, a GMOBD device that is configured to report to Plaspy will be detected without manual protocol selection inside the platform.

- Plaspy listens on a single port for all supported devices, which simplifies device setup.
- When a device connects and sends its initial message, Plaspy matches the incoming data against known protocol patterns and associates it with the account and device.
- Users typically do not need to pick a protocol manually if the GMOBD is configured to report to the Plaspy endpoint.
- Automatic detection reduces setup errors and speeds onboarding of mixed fleets with different tracker models.
- Detection behavior is designed to work across firmware and model variations, though extremely customized firmware may require verification.

## Transport and Connection Context

GMOBD devices can use either UDP or TCP depending on device capabilities and configuration. Plaspy exposes a stable public endpoint and a single port to receive reports from all supported trackers, making network configuration straightforward for fleet deployments.

- Plaspy server domain is d.plaspy.com for DNS based configuration.
- Plaspy server IP is 54.85.159.138 and may be used if DNS is not available.
- The port used by Plaspy is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies firewall and network rules.
- Ensure the tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 and that the chosen transport matches device settings.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional features; confirm the device firmware when validating behavior.
- Hardware revisions or variant SKUs for the GMOBD may alter supported sensors or reporting options used by the protocol.
- Manufacturer side service settings and cloud features can influence what remote commands or acknowledgements are available.
- Transport choice between UDP and TCP affects delivery characteristics and should match device configuration and network reliability expectations.
- When integrating at scale, validate a small sample of devices and firmware levels before deploying fleet wide.
- Always compare observed messages with the latest manufacturer documentation to confirm required fields and supported features.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable device onboarding, accurate location reporting, and effective troubleshooting when integrating GMOBD trackers with Plaspy. Even high level protocol familiarity reduces configuration mistakes and improves operational uptime.

- Helps verify the device is correctly addressing the Plaspy endpoint and using the proper transport.
- Speeds troubleshooting for data gaps, incorrect position fixes, or missing alarm events.
- Guides decisions about network firewall rules and carrier APN setups for fleet deployments.
- Clarifies how firmware updates or device replacements might impact reporting and feature availability.
- Supports safe and predictable fleet scaling by documenting the required device settings and supported behaviors.

## Why Use Plaspy with This Protocol

Using the Goome GMOBD with Plaspy provides a practical way to collect OBD2 based vehicle telemetry, real time locations, and alarm events into a single fleet management platform. For applications like car rental, small fleet management, and dispatch, combining GMOBD hardware features such as power off alarm, built in accelerometer, and real time tracking with Plaspy’s centralized data handling offers clear operational value.

Plaspy simplifies device configuration by accepting reports on a shared endpoint and port and automatically detecting the device protocol, reducing overhead for mixed fleets and multi model deployments. To learn more about Plaspy and how it can work with GMOBD devices, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and you should verify current device specific protocol information with the manufacturer at http://www.goomegpstracker.com.
