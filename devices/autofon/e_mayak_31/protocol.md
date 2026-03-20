---
slug: /autofon/e_mayak_31/protocol
id: e_mayak_31-protocol
sidebar_label: Protocol
title: AutoFon - E-Mayak 3.1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context and integration notes for AutoFon E-Mayak 3.1 GPS tracker with Plaspy compatibility
keywords:
  - AutoFon E-Mayak 3.1 protocol
  - AutoFon E-Mayak 3.1 GPS protocol
  - AutoFon E-Mayak protocol Plaspy
  - E-Mayak 3.1 SMS tracker
  - AutoFon tracking protocol
  - Plaspy compatible devices
  - GPS tracker SMS integration
  - vehicle tracking AutoFon
  - asset tracking E-Mayak
  - tracker protocol guide
---

# AutoFon - E-Mayak 3.1 Protocol

This page provides public protocol context for integrating the AutoFon E-Mayak 3.1 tracker with the Plaspy platform. It focuses on the device communication approaches you are likely to encounter when adding this model to Plaspy and how Plaspy consumes and recognizes tracker reports in non-sensitive, practical terms.

The E-Mayak 3.1 is primarily an SMS first device that reports location and telemetry via SMS rather than continuous GPRS streaming. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are properly configured to report to the Plaspy endpoint. Exact behavior can vary with firmware version, hardware revision, and manufacturer implementation, so using the official manufacturer documentation for device specific details is recommended.

## Protocol Overview

The E-Mayak 3.1 communicates location, status, and basic telemetry using SMS messages and map links. In the context of Plaspy, the protocol role is to provide identifying information and usable position or status data that can be forwarded or mapped into the Plaspy platform for visualization, alerts, and logging.

- Sends GPS coordinates and standard SMS map links that can be parsed or forwarded into Plaspy workflows.
- Reports telemetry such as battery level, temperature, heartbeat SMS, and SIM balance alerts for basic monitoring.
- Uses sequential SMS numbering and status text that help correlate messages in Plaspy logs and dashboards.
- Supports SMS based commands and PIN protected configuration for remote device management.
- Operates in deep sleep and on-demand reporting modes to maximize battery life, which affects how and when messages arrive.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker reporting protocol when the device is configured to send data to the Plaspy endpoint. For SMS first devices like the E-Mayak 3.1, detection typically happens as Plaspy receives forwarded SMS content or coordinates entered via the supported input channels.

- Plaspy server endpoint is d.plaspy.com and the server IP is 54.85.159.138 which are the public Plaspy connection targets.
- Plaspy listens on port 8888 and all devices supported by Plaspy use the same port for networked reporting.
- Plaspy automatically detects the tracker protocol so users normally do not need to select a protocol manually if the device is reporting to the Plaspy endpoint.
- For SMS based devices, Plaspy accepts forwarded SMS text and map links through standard input channels so the platform can extract coordinates and telemetry.
- Properly formatted device identifiers and consistent message content will improve automatic detection and mapping into Plaspy device records.

## Transport and Connection Context

While the E-Mayak 3.1 is SMS centric and does not provide continuous IP telemetry in common configurations, Plaspy supports both UDP and TCP reporting on a shared port for trackers that do use IP transport. Understanding the available transport options helps when planning how the device will feed data into Plaspy.

- Plaspy accepts UDP or TCP connections on port 8888 depending on device support and configuration.
- Devices or SMS gateways that forward messages into Plaspy can target the domain d.plaspy.com or the IP address 54.85.159.138 on port 8888.
- The E-Mayak 3.1 typically integrates via SMS forwarding or manual map link input because it does not normally use continuous GPRS IP reporting.
- For devices that do support IP reporting, using the shared Plaspy port simplifies configuration across multiple device models.
- Confirm transport method when setting up an SMS to API gateway or when evaluating alternative forwarding solutions for SMS only devices.

## Protocol Compatibility Notes

- The E-Mayak 3.1 is SMS first and does not provide continuous GPRS telemetry in typical configurations; plan integration around SMS forwarding or manual entry methods.
- Firmware revisions and manufacturer configuration options can change message formats, available telemetry, and control commands over time.
- Hardware revisions or regional variants may alter supported bands, SMS content, or telemetry fields; verify the exact model labeling and serial data when troubleshooting.
- Transport selection matters for devices that support IP reporting; Plaspy uses the same port for all devices which reduces per device configuration complexity.
- If you rely on SMS to API gateways, validate that the gateway preserves original SMS content and identifiers needed for reliable device matching in Plaspy.
- Always cross check integration steps against the official manufacturer documentation for model specific behavior.

## Why Protocol Understanding Matters

Knowing how the E-Mayak 3.1 communicates helps ensure reliable setup, accurate mapping in Plaspy, and sensible troubleshooting when messages are delayed or missing. Understanding the communication model reduces integration friction and sets expectations about reporting cadence and telemetry availability.

- Helps determine whether SMS forwarding, gateway parsing, or manual link input is the best integration path for your workflow.
- Clarifies expected reporting intervals given the device deep sleep behavior and configurable heartbeat SMS settings.
- Makes it easier to correlate incoming messages to the correct device when messages include sequential numbers or owner identifiers.
- Assists with troubleshooting coverage issues by distinguishing GPS positioning from cellular LBS fallback reports.
- Supports operational decisions around alerting thresholds and telemetry-based maintenance actions.

## Why Use Plaspy with This Protocol

Using Plaspy with the AutoFon E-Mayak 3.1 is a practical choice when your use case values long battery life, discreet installations, and on-demand location checks. Plaspy can ingest SMS forwarded coordinates and telemetry or receive input through SMS gateway integrations, providing mapping, historical logs, and basic alerting that fit anti-theft recovery and low maintenance monitoring scenarios.

If you want to learn more about how Plaspy handles device integrations and the features available for SMS oriented trackers, please visit https://www.plaspy.com. For the most current device specific protocol notes, firmware behavior, and implementation details, verify information with the manufacturer at https://www.autofon.ru/ since protocol support and firmware behavior can change over time.
