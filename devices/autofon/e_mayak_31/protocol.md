---
slug: /autofon/e_mayak_31/protocol
id: e_mayak_31-protocol
sidebar_label: Protocol
title: AutoFon - E-Mayak 3.1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for AutoFon E-Mayak 3.1 and how the SMS based tracker communicates with Plaspy for mapping and reporting
keywords:
  - AutoFon E-Mayak 3.1 protocol
  - AutoFon E-Mayak GPS protocol
  - E-Mayak 3.1 SMS tracker
  - AutoFon Plaspy compatibility
  - E-Mayak tracking protocol
  - vehicle tracking E-Mayak
  - SMS GPS tracker protocol
  - covert GPS tracker E-Mayak
  - fleet tracking AutoFon
  - tracking protocol Plaspy
---

# AutoFon - E-Mayak 3.1 Protocol

This page covers the public protocol context for using the AutoFon E-Mayak 3.1 tracker with Plaspy. It focuses on how the device communicates in general terms and how those messages can be integrated into Plaspy workflows, without exposing private or firmware specific implementation details. The E-Mayak 3.1 is an SMS centric, low power tracker designed for long autonomous operation and covert placement; this documentation explains how that SMS model maps to Plaspy integration patterns.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior and available SMS message formats can vary with firmware version, hardware revision, and manufacturer implementation, so this page describes the general communication context and practical compatibility considerations rather than device internals.

## Protocol Overview

The E-Mayak 3.1 communicates primarily via SMS, sending location coordinates, basic telemetry, and status messages that can be used by Plaspy for mapping and reporting. In a Plaspy deployment these SMS-originated positions and alerts are translated into platform events and visual elements using SMS-to-API gateways or manual ingestion workflows.

- The device sends GPS coordinates and fallback cell tower location information via SMS for position reporting.
- Telemetry such as battery level, temperature, heartbeat messages, and SIM balance alerts are carried in SMS status updates.
- SMS map links and coordinate strings included in messages allow Plaspy to plot positions without continuous GPRS streams.
- PIN protected SMS control allows remote configuration and secure reporting relevant to Plaspy records.
- Sequential SMS identifiers and timestamped messages help correlate reports in Plaspy timelines and logs.

## How Plaspy Detects the Protocol

Plaspy is designed to accept device reports over a shared endpoint and automatically infer the tracker type when data arrives at the platform. For SMS-first trackers like the E-Mayak 3.1 integration usually relies on forwarding SMS content into Plaspy or converting map links into API calls for position ingestion, rather than a permanent socket session.

- Plaspy’s public server endpoint is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy listens on port 8888 for device data; this is the same port used for all devices supported by Plaspy.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and transport preference.
- When correctly pointed at the Plaspy endpoint, protocol detection is automatic and no manual protocol selection is typically required in Plaspy.
- Properly formatted SMS-to-API forwarding or manual ingestion ensures Plaspy can map SMS content to device identity and telemetry fields.

## Transport and Connection Context

Although the E-Mayak 3.1 is SMS focused, Plaspy supports a common network endpoint for all device communications and accepts both UDP and TCP transports on the same port. Understanding the transport and endpoint settings helps ensure the device or SMS gateway is configured so Plaspy receives usable messages.

- Plaspy accepts connections and messages on port 8888 for all supported devices.
- Devices or gateways may point to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- The E-Mayak 3.1 itself reports primarily via SMS; integration to Plaspy commonly uses SMS-to-API gateways that forward content to the Plaspy endpoint.
- Plaspy supports either UDP or TCP on port 8888 depending on how the forwarding gateway or device is configured.
- Using the shared Plaspy endpoint ensures consistent ingestion and automatic protocol recognition across different tracker models.

## Protocol Compatibility Notes

- Firmware variations can change SMS message wording, available telemetry fields, and control command behavior; always confirm the firmware level for a deployed device.
- Hardware revisions or regional device variants may alter supported message formats or communication features.
- Transport choice (direct TCP/UDP reporting versus SMS-to-API forwarding) affects how messages reach Plaspy; select the method that matches device capabilities and operational needs.
- Some workflows require manual or gateway-based SMS forwarding into Plaspy rather than direct IP reporting from the tracker.
- Validate device-originated map links and coordinate formats against Plaspy ingestion requirements to avoid parsing mismatches.
- Consult the manufacturer documentation to confirm which SMS commands and status messages are available for your device revision.

## Why Protocol Understanding Matters

Knowing the high level behavior of the E-Mayak 3.1 communication protocol helps ensure reliable setup, correct message ingestion, and predictable operation within Plaspy. Understanding what the device sends and how Plaspy receives it makes troubleshooting faster and supports better long term reliability for tracking and alerts.

- Ensures SMS forwarding or gateway configuration delivers correctly formatted messages to Plaspy.
- Helps correlate reported positions, heartbeat messages, and telemetry with device battery and lifecycle expectations.
- Makes it easier to diagnose missed reports caused by SIM balance, network coverage, or deep sleep behavior.
- Supports planning for alerting thresholds and reporting intervals that match the device’s low power design.
- Clarifies whether a use case requires an SMS-first workflow or a device with continuous GPRS telemetry.

## Why Use Plaspy with This Protocol

Using Plaspy with the AutoFon E-Mayak 3.1 is a practical option for organizations that need discreet, long‑life tracking and on‑demand location queries. Plaspy can ingest SMS-originated positions and telemetry through common SMS-to-API gateways or manual ingestion workflows to provide mapping, alerts, and historical reporting without requiring continuous GPRS telemetry from the device.

If you want to learn more about how Plaspy handles device integrations and available workflows, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions please verify information with the manufacturer at https://www.autofon.ru/ as protocol support and firmware behavior can change over time.
