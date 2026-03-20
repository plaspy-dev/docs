---
slug: /eelink/tk319l/protocol
id: tk319l-protocol
sidebar_label: Protocol
title: EElink - TK319‑L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for the EElink TK319‑L and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - EElink TK319-L protocol
  - TK319-L GPS protocol
  - EElink tracking protocol
  - EElink Plaspy compatibility
  - TK319-L communication
  - GPS tracker protocol
  - vehicle tracking protocol
  - fleet management tracker
  - EELINK protocol 2.0
  - NB-IoT GPS tracker
---

# EElink - TK319‑L Protocol

This page summarizes the public protocol context for using the EElink TK319‑L GPS tracker with Plaspy. It focuses on how the device communicates in non sensitive terms, what connection settings Plaspy uses, and what integrators should consider when onboarding the TK319‑L into a fleet management deployment.

The TK319‑L is a compact tracker built for NB‑IoT and LTE Cat M1 networks with GSM fallback, offering GPS and LBS dual mode positioning plus vehicle inputs such as ACC detection and optional relay based immobilizer support. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The communication protocol for the TK319‑L defines how GNSS and LBS position reports, I O telemetry, and alarm events are packaged and delivered to a backend such as Plaspy. For this model the device implements EELINK protocol 2.0 for standardized exchange of location, I O status, and alarms, enabling Plaspy to map incoming data into dashboard fields and event rules.

- Transports device location and sensor telemetry from the tracker to Plaspy so location, speed, and alarm events are actionable.
- Conveys vehicle inputs such as ACC ignition status, SOS button events, and optional relay state for immobilization workflows.
- Encodes alarm types including crash, vibration, overspeed, low power, and power off so Plaspy can trigger alerts and reporting.
- Supports expansion telemetry from RS232 and GPIO peripherals so external sensors are visible in Plaspy reports.
- Is implemented in firmware and may vary in message frequency and optional fields depending on device configuration and manufacturer settings.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic at a shared endpoint and automatically identifies the device protocol so users normally do not need to pick a protocol manually in the platform. If the TK319‑L is configured to report to Plaspy using the standard settings, Plaspy will ingest location and event data and apply the appropriate field mapping for EELINK protocol 2.0.

- All Plaspy devices report to the same server endpoint so protocol handling is centralized.
- Plaspy server domain for tracker reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses a single common port for all supported devices which simplifies device configuration.
- When a properly configured TK319‑L sends packets to Plaspy, the platform will detect and interpret the EELINK protocol automatically.
- Manual protocol selection in Plaspy is generally unnecessary provided the device is pointed to the correct Plaspy endpoint and using the supported transport.

## Transport and Connection Context

Connection and transport choices affect how the TK319‑L reaches Plaspy. The device can be configured to use different radio modes and transport layers depending on firmware and deployment needs. Below are the public, non sensitive connection facts relevant to integration.

- Plaspy accepts device connections at d.plaspy.com and 54.85.159.138 on port 8888.
- The TK319‑L may be configured to use UDP or TCP on port 8888 depending on device support and network conditions.
- Using the shared Plaspy endpoint and port reduces configuration errors and keeps onboarding consistent across devices.
- Ensure the device APN and cellular settings allow outbound connections to the Plaspy endpoint on the specified port.
- Network level behavior such as NAT and carrier restrictions can influence whether UDP or TCP is preferable for a given deployment.

## Protocol Compatibility Notes

- EELINK protocol 2.0 is the published integration method for the TK319‑L, but firmware revisions can add or change optional fields and reporting behavior.
- Hardware revisions and regional model variants may enable or disable specific radio bands, peripherals, or alarm types that affect what data is reported.
- Transport selection between UDP and TCP can be constrained by carrier networks or NB‑IoT/Cat M1 profile limitations; validate on-device settings when possible.
- Plaspy automatically detects the tracker protocol, but the device must be pointed to d.plaspy.com or 54.85.159.138 on the correct port for automatic ingestion.
- Verify compatibility of peripheral functions such as relay immobilizer commands and RS232 sensor mappings against current manufacturer documentation.
- Always confirm the firmware version and release notes when troubleshooting unexpected behavior or missing telemetry fields.

## Why Protocol Understanding Matters

Knowing how the TK319‑L communicates helps administrators set up devices correctly, diagnose connectivity or data mapping issues, and plan for firmware or hardware differences that affect long term reliability.

- Ensures the device is configured to report to d.plaspy.com or 54.85.159.138 using port 8888 so Plaspy can receive data.
- Helps determine whether UDP or TCP is the better transport for your network and carrier environment.
- Aids in mapping device I O and alarm fields to Plaspy workflows for alerts, geofencing, and reporting.
- Speeds troubleshooting when telemetry is absent or fields appear inconsistent after firmware updates.
- Supports planning for peripheral integration such as fuel sensors or temperature probes using the RS232 and GPIO ports.

## Why Use Plaspy with This Protocol

Using the TK319‑L with Plaspy provides organizations a practical way to leverage NB‑IoT and LTE Cat M1 connectivity with a single platform for fleet visibility, alarms, and operational analytics. Plaspy ingests GNSS and LBS coordinates, vehicle inputs like ACC status, and alarm events so teams can monitor routes, respond to incidents, and automate workflows across mixed fleets.

Plaspy simplifies deployment by using a single reporting endpoint and port for all supported devices and by automatically detecting the tracker protocol when a device is properly pointed to the Plaspy endpoint. To learn more about Plaspy and how it supports devices like the TK319‑L visit https://www.plaspy.com. For the latest device specific protocol notes, firmware updates, and implementation details verify information with the manufacturer at https://www.eelink.com.cn/ .
