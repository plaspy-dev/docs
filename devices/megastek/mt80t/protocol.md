---
slug: /megastek/mt80t/protocol
id: mt80t-protocol
sidebar_label: Protocol
title: Megastek - MT80T Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the MT80T wearable tracker and how it communicates with Plaspy using shared transport settings
keywords:
  - Megastek MT80T protocol
  - Megastek MT80T GPS protocol
  - MT80T Plaspy compatibility
  - MT80T tracking protocol
  - Megastek GPS tracker protocol
  - MT80T communication
  - TWIN MASK MT80T
  - wearable GPS protocol
  - personal tracker protocol
  - Plaspy device protocol
---

# Megastek - MT80T Protocol

This page describes the public protocol context for using the MT80T wearable GPS tracker with Plaspy. It focuses on the communication and transport context that administrators and integrators need to know when pointing MT80T devices at Plaspy for centralized monitoring, alerts and historical reporting. The MT80T is described in vendor materials as a medical grade wearable from TWIN MASK and it is compatible with Plaspy for location and telemetry streaming.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and message content can vary by firmware version, hardware revision and manufacturer implementation, so this page concentrates on the public transport and integration context rather than device internals.

## Protocol Overview

The MT80T communicates over a tracker reporting protocol that carries GNSS position, event triggers and sensor telemetry to a remote server. In the Plaspy integration this protocol is what allows the device to identify itself to Plaspy and deliver usable location and health data for real time monitoring and historical analysis.

- The protocol conveys core telemetry such as GNSS position, timestamps and events for ingestion by Plaspy.
- Health and event data from the MT80T such as heart rate, SpO2, fall alerts and SOS presses are included in device reports for rule based alerts.
- Identification and session information in device reports allow Plaspy to associate incoming data with the correct unit and account.
- The protocol operates over standard transport channels so devices can report to Plaspy from diverse cellular networks.
- Firmware and configuration choices on the device influence how frequently data is sent and which events generate immediate uploads.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and automatically detects the tracker protocol so users rarely need to select a protocol manually. As long as the MT80T is configured to report to the Plaspy endpoint and the transport is reachable, Plaspy will identify the incoming format and process messages for the connected device.

- Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- Plaspy listens on port 8888 for device connections and ingestion.
- Plaspy automatically detects the tracker protocol for supported devices when data arrives on the shared port.
- Users typically only need to configure the device APN and reporting endpoint to begin forwarding data to Plaspy.
- No per device port configuration inside Plaspy is required because all devices use the same Plaspy port.

## Transport and Connection Context

The MT80T may be configured to use either UDP or TCP as the transport protocol depending on device firmware and deployment needs. Typical device configuration points at the Plaspy host name or the public server IP so the tracker can route telemetry to the platform.

- Devices may point to d.plaspy.com or directly to 54.85.159.138 when configuring the reporting endpoint.
- The Plaspy listening port for all devices is 8888 and devices may use UDP or TCP on that port.
- Choose UDP for lower overhead and latency sensitive reporting where the network and firmware support it.
- Choose TCP for reliable delivery when device firmware and cellular network conditions favor session oriented transport.
- Ensure APN, SIM data plan and time sync options are correct on the MT80T so packets leave the device as expected.

## Protocol Compatibility Notes

- Firmware revisions can change message fields, reporting intervals and optional telemetry elements that the MT80T sends.
- Hardware revisions or different production batches may implement features differently; validate device behavior on a test unit before wide deployment.
- Some features such as two way voice or advanced medical telemetry may be carried separately from basic location reporting depending on device configuration.
- Transport selection between UDP and TCP affects behavior under poor network conditions and may change delivery characteristics.
- Always confirm which telemetry fields your version of the MT80T actually sends rather than assuming uniform behavior across all units.
- Validate compatibility against manufacturer documentation when configuring non standard features or vendor specific settings.

## Why Protocol Understanding Matters

Understanding the MT80T communication protocol helps ensure reliable setup, faster troubleshooting and predictable long term operation with Plaspy. Knowing transport and reporting constraints reduces integration time and helps administrators design appropriate alerting and monitoring rules.

- Faster identification of misconfigured APN or reporting endpoint settings on the device.
- Clear expectations for how often position and health telemetry will arrive at Plaspy based on firmware and configuration.
- Better troubleshooting when messages fail to arrive due to transport choice UDP versus TCP or network limitations.
- Informed decisions about data retention, alert thresholds and historical sampling based on device reporting behavior.
- Easier coordination with device vendors when firmware updates change message content or event behavior.

## Why Use Plaspy with This Protocol

Using the MT80T with Plaspy provides centralized visibility for both location and medical telemetry so teams can monitor vulnerable users, respond to SOS and fall alerts, and review historical tracks. Plaspy’s ingestion of device reports makes it possible to combine position data with event and sensor telemetry into unified dashboards and automated notifications that support care, safety and operational use cases.

If you want to learn more about Plaspy and how the platform handles device reporting and monitoring, visit https://www.plaspy.com. Protocol support, firmware behavior and manufacturer implementation details can change over time, so please verify the latest MT80T device specific protocol and firmware information on the manufacturer site https://www.megastek.com/.
