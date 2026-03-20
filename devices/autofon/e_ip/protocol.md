---
slug: /autofon/e_ip/protocol
id: e_ip-protocol
sidebar_label: Protocol
title: AutoFon - E-Маяк IP Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for AutoFon E-Маяк IP integration with Plaspy for tracking and alarms
keywords:
  - AutoFon E-Маяк IP protocol
  - AutoFon E-Mayak IP GPS protocol
  - AutoFon E-Маяк IP Plaspy
  - E-Mayak IP tracking protocol
  - AutoFon GPS tracker communication
  - Plaspy compatible trackers
  - vehicle tracking E-Mayak IP
  - E-Маяк IP SMS protocol
  - long term asset tracking protocol
  - AutoFon protocol compatibility
---

# AutoFon - E-Маяк IP Protocol

This page describes the public protocol context for using the AutoFon E‑Маяк IP tracker with Plaspy. It focuses on high‑level communication and integration points that are useful when configuring the device to report location, alarms and telemetry into the Plaspy platform, using either SMS forwarding or IP‑based reporting where available.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to send to the Plaspy endpoint. Exact protocol behavior and available features can vary by device firmware, hardware revision and the manufacturer's implementation, so this page covers safe, broadly applicable protocol context rather than firmware‑specific command details.

## Protocol Overview

The E‑Маяк IP communicates position, alarm events and telemetry to remote servers and authorized numbers. Whether you forward SMS messages or enable the device's IP protocol mode, the protocol is the mechanism that lets the tracker identify itself, report useful data and maintain liveness with a monitoring service such as Plaspy.

- Enables the device to report GPS coordinates, alarm states and basic telemetry to a central endpoint.
- Carries event notifications such as SOS presses, motion/tipping alerts and impact/accident detections.
- Provides a way to include device identity and status so Plaspy can match incoming messages to the correct asset.
- Supports heartbeat or liveness messages so platforms can detect offline devices or battery depletion.
- Works alongside SMS forwarding for networks or deployments where GPRS is limited or not configured.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports on a shared endpoint and port and automatically determines the tracker protocol based on the data received. In most cases, you do not need to manually select a protocol in Plaspy when the device is configured to send to the Plaspy endpoint.

- Plaspy listens on the common endpoint d.plaspy.com and on the server IP 54.85.159.138.
- The Plaspy port for device reporting is 8888 and is the same for all supported devices.
- Devices can be configured to send their protocol messages to d.plaspy.com or directly to 54.85.159.138.
- When a properly formatted message arrives at Plaspy, the platform associates it with the correct device and presents position and event data automatically.
- For many users, correct device configuration to the Plaspy endpoint eliminates the need to pick a protocol inside the platform.

## Transport and Connection Context

The E‑Маяк IP offers flexible reporting methods depending on configuration and firmware capabilities. For IP‑based reporting to Plaspy, the device may use either UDP or TCP transport to deliver messages to the server endpoint.

- The device may be configured to use UDP or TCP on port 8888 for protocol messages.
- Configure the tracker to report to d.plaspy.com or to the numeric server address 54.85.159.138 as required by your deployment.
- Plaspy uses the same port (8888) for all devices, simplifying firewall and network settings.
- SMS forwarding remains an option where GPRS is not enabled or as a complementary reporting channel.
- Network reliability and operator restrictions can influence whether UDP or TCP is preferable for your site.

## Protocol Compatibility Notes

- Firmware versions can change available features and message behavior; validate compatibility with the installed firmware revision.
- Hardware revisions or optional modules can affect supported transports and telemetry fields.
- Manufacturer settings for reporting (SMS vs GPRS) determine whether the device sends messages to Plaspy by SMS forwarding or direct IP reporting.
- Transport choice (UDP vs TCP) should match the device configuration and any intermediate network constraints.
- Where precise protocol details are required, consult the device manual and manufacturer guidance to confirm exact message options.
- Plaspy's automatic detection reduces friction, but proper endpoint and transport configuration on the device side remain essential.

## Why Protocol Understanding Matters

Understanding how the E‑Маяк IP communicates helps ensure reliable setup, effective troubleshooting and consistent long‑term operation in Plaspy. Clear knowledge of the reporting paths and protocol behavior shortens integration time and improves operational confidence.

- Helps confirm the device is pointing to the correct Plaspy endpoint and transport (d.plaspy.com or 54.85.159.138 on port 8888).
- Makes it easier to interpret device liveness and battery/temperature telemetry sent to Plaspy.
- Supports faster diagnosis when alarms, SOS messages or motion alerts do not arrive as expected.
- Guides decisions about using SMS forwarding versus GPRS protocol reporting depending on coverage and power constraints.
- Reduces configuration errors by clarifying which settings control reporting destination and transport.

## Why Use Plaspy with This Protocol

Using Plaspy with the AutoFon E‑Маяк IP provides a practical way to centralize location, alarm and telemetry reporting for assets that need long battery life and discreet installation. Plaspy can ingest SMS forwarded messages or IP protocol reports and present them on maps, dashboards and alerting channels appropriate for fleet and asset monitoring.

If you want to learn more about how Plaspy supports tracker integration, visit https://www.plaspy.com to explore platform capabilities and deployment options. Please also verify the latest device protocol behavior, feature set and firmware notes with the manufacturer at https://www.autofon.ru/ since protocol support and implementation details can change over time.
