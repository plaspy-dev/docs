---
slug: /astra_telematics/at202/protocol
id: at202-protocol
sidebar_label: Protocol
title: Astra Telematics - AT202 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the Astra Telematics AT202 with Plaspy for reliable tracking and telemetry
keywords:
  - Astra Telematics AT202
  - AT202 protocol
  - AT202 GPS tracker
  - Astra Telematics protocol
  - AT202 Plaspy compatibility
  - AT202 communication protocol
  - AT202 tracking protocol
  - AT202 CANBus integration
  - vehicle telematics AT202
  - fleet tracking AT202
---

# Astra Telematics - AT202 Protocol

This page describes the public protocol context for using the Astra Telematics AT202 with Plaspy. It summarizes how the device communicates with Plaspy using shared connection endpoints and what aspects of the tracker reporting behavior are most relevant to integration, monitoring, and troubleshooting. The guidance here focuses on public, non-sensitive protocol context rather than implementation specifics.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when an AT202 reports to the platform. Exact protocol behavior and message details can vary with firmware version, hardware revision, regional variants, and manufacturer configuration, so review device firmware notes and vendor documentation when validating advanced features.

## Protocol Overview

The AT202 reporting protocol is the device-level communication mechanism that carries GNSS fixes, CANBus telemetry, digital I/O events, ADC values, and auxiliary sensor streams from the tracker to Plaspy. In productive deployments the protocol’s role is to reliably move position and event data over the cellular link to the Plaspy server so the platform can parse, normalize, and present fleet insights.

- Transports GNSS position, speed, heading, and timestamps for real time tracking and history.
- Conveys CANBus channels and serial inputs so Plaspy can convert raw telemetry into vehicle KPIs.
- Delivers digital input and output events used for door, ignition, immobilizer, and sensor triggers.
- Reports ADC sensor values and external sensor streams for fuel or analog monitoring.
- Includes health and status information such as battery backup state, cellular connectivity, and accelerometer events for tamper detection.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared ingestion endpoint and determines the appropriate protocol handling automatically. When the AT202 is configured to report to Plaspy, the platform will use its built-in detection and routing to recognize the device feed and map incoming telemetry to the correct parsers and data schemas.

- Plaspy’s public ingestion domain is d.plaspy.com and the public server IP is 54.85.159.138.
- All Plaspy devices use the same port for reporting, which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol when an AT202 sends data to the Plaspy endpoint; manual selection inside Plaspy is typically not required if the device is pointed correctly.
- Proper device reporting configuration (domain or IP and transport) is essential for automatic detection to succeed.
- If telemetry does not appear, review device APN and reporting target settings as a first troubleshooting step before changing platform protocol settings.

## Transport and Connection Context

The AT202 supports multi-network cellular connectivity and can be configured to use either UDP or TCP for data reporting. Understanding the basic transport and endpoint options helps ensure the device reaches Plaspy reliably across different network conditions and firmware configurations.

- The AT202 may be configured to use UDP or TCP on port 8888 depending on device support and settings.
- Devices can be pointed at the Plaspy ingestion domain d.plaspy.com or the public server IP 54.85.159.138.
- Plaspy uses the same port for all supported devices, which reduces configuration differences across a mixed fleet.
- Cellular network options on the AT202 include GPRS, LTE‑M, and NB‑IoT; network selection can affect connectivity patterns and reporting intervals.
- Device-side settings such as APN, connection retries, and low‑power reporting modes influence how frequently data reaches the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry channels, or optional fields; always check the AT202 firmware notes for behavior changes.
- Hardware variants or regional cellular band differences may affect which transport modes or networks are available.
- Manufacturer configuration choices (for example default transport, reporting intervals, or enabled I/O channels) influence what data the device sends to Plaspy.
- Correct APN and SIM provisioning are required for cellular reporting; ensure carrier settings permit the selected transport.
- Selecting UDP versus TCP on the device can affect delivery behavior under poor connectivity; choose the transport supported by your deployment and firmware.
- Validate important I/O mappings (CANBus channels, ADC scaling, digital input polarity) against the device documentation to ensure Plaspy receives meaningful telemetry.

## Why Protocol Understanding Matters

A practical understanding of the AT202 communication protocol helps ensure smooth onboarding, reliable event delivery, and efficient troubleshooting. Knowing which data the device reports and how it reaches Plaspy reduces integration time and supports consistent operational monitoring.

- Speeds initial setup by ensuring the AT202 points to d.plaspy.com or 54.85.159.138 and uses port 8888 as required by Plaspy.
- Helps diagnose connectivity issues by clarifying whether problems are transport, APN, or device configuration related.
- Supports accurate mapping of CANBus and sensor channels so Plaspy can present correct vehicle KPIs.
- Reduces ambiguity around low power or backup battery reporting and how those states appear in Plaspy.
- Improves lifecycle management by highlighting when firmware or hardware changes may require configuration updates.

## Why Use Plaspy with This Protocol

Using the Astra Telematics AT202 with Plaspy provides organizations a robust path to capture location, vehicle telemetry, and event data in a single platform. The combination of multi‑constellation GNSS, broad cellular coverage, and a rich I/O set lets fleet operators gather accurate position fixes, engine and sensor telemetry, and driver events for operational insight and alerts.

Plaspy’s shared ingestion endpoint simplifies device configuration across mixed fleets, and automatic protocol detection removes the need for manual protocol selection when an AT202 is properly pointed at the platform. To learn more about how Plaspy can work with the AT202 and other trackers, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer device details can change over time, so verify the latest AT202 documentation and firmware notes at the manufacturer site https://astratelematics.com/.
