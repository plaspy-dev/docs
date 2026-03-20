---
slug: /glonasssoft/umka315/protocol
id: umka315-protocol
sidebar_label: Protocol
title: GLONASSsoft - UMKa315 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for GLONASSsoft UMKa315 tracker and Plaspy integration with shared connection settings and automatic detection
keywords:
  - GLONASSsoft UMKa315 protocol
  - UMKa315 GPS protocol
  - UMKa315 Wialon Combine
  - UMKa315 EGTS
  - UMKa315 Plaspy compatibility
  - UMKa315 communication protocol
  - UMKa315 tracking protocol
  - Plaspy device protocol
  - vehicle tracking UMKa315
  - BLE asset tracker UMKa315
---

# GLONASSsoft - UMKa315 Protocol

This page describes the public protocol context for using the GLONASSsoft UMKa315 tracker with Plaspy. It focuses on how the device communicates in broad terms, which connection settings are used to reach Plaspy, and what aspects of the tracker protocol matter for successful integration and ongoing operation. The information here is intended for system integrators, fleet managers, and technical users preparing devices for use with Plaspy.

Plaspy accepts telemetry from a wide range of devices using shared connection settings and automatic protocol detection. The UMKa315 supports efficient binary telemetry modes including Wialon Combine and EGTS, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. This page outlines public, non sensitive protocol context while recommending review of manufacturer documentation for firmware specific details.

## Protocol Overview

The UMKa315 communicates telemetry, location, sensor and event data in compact packet form suitable for low GPRS traffic and frequent updates. Its support for Wialon Combine binary protocol and EGTS helps reduce bandwidth use while preserving the information Plaspy needs for real time tracking, alerts and reporting.

- Enables regular GNSS position reporting and telemetry uploads to the server for real time tracking.
- Transmits device identity and session context so Plaspy can associate incoming data with the correct asset and account.
- Carries sensor and input states (ignition, door, analog sensors) that Plaspy maps to events and telemetry fields.
- Supports BLE identification and external BLE sensor data to extend device telemetry beyond GNSS and digital inputs.
- Uses compact binary formats to reduce GPRS traffic while maintaining high update frequency and event granularity.

## How Plaspy Detects the Protocol

Plaspy receives incoming telemetry on a shared endpoint and automatically detects the tracker protocol so users generally do not need to manually select a protocol inside Plaspy if devices are configured correctly to report. Proper device configuration to point to the Plaspy endpoint is the primary requirement for automatic detection and data ingestion.

- Plaspy public server domain for device reporting is d.plaspy.com.
- Plaspy public server IP for device reporting is 54.85.159.138.
- The Plaspy server listens on port 8888 for all device traffic and all devices supported by Plaspy use this same port.
- Devices may be configured to use either UDP or TCP transport to reach the Plaspy endpoint on port 8888, depending on device capability and chosen configuration.
- When a UMKa315 is pointed to the Plaspy endpoint and port, Plaspy will identify the incoming protocol and route data to the appropriate processing pipeline without manual protocol selection.

## Transport and Connection Context

Connection context is important to ensure device telemetry reaches Plaspy reliably. The UMKa315 supports common mobile data transports and can be configured to target the Plaspy endpoint using either DNS or direct IP addressing.

- Devices may point to the domain d.plaspy.com or to the IP 54.85.159.138 for device reporting.
- The UMKa315 may be configured to use UDP or TCP on port 8888 to send telemetry to Plaspy.
- Plaspy uses the same network port 8888 for all supported devices which simplifies deployment and firewall rules.
- Choose UDP or TCP based on device capability, network reliability, and operator preferences; both transports can be used to reach Plaspy on the required port.
- Ensure the SIM data plan and APN settings on the UMKa315 allow GPRS connections to the Plaspy endpoint for continuous telemetry.

## Protocol Compatibility Notes

- Support for Wialon Combine and EGTS is reported for the UMKa315, but firmware revisions can change which features or protocol variants are available.
- Hardware revisions and optional interfaces such as RS-485 or BLE behavior can affect which telemetry fields are present in reports.
- Transport selection (UDP vs TCP) is device configurable and can influence reliability under different mobile networks.
- Plaspy automatically detects the protocol, but correct device destination (domain or IP) and port must be configured on the tracker.
- Verify the mapping of discrete inputs, analog channels, and BLE sensors to Plaspy telemetry fields during initial setup and testing.
- Consult manufacturer release notes for firmware specific protocol changes that could affect integration.

## Why Protocol Understanding Matters

Having a practical understanding of the UMKa315 communication protocol helps reduce setup time, speeds troubleshooting, and improves long term reliability of device data in Plaspy. Knowing which protocols the device supports and how it transmits data lets integrators plan for data usage, event handling, and sensor mapping.

- Ensures devices are configured to send telemetry to the correct Plaspy endpoint and port so data is ingested automatically.
- Helps map device inputs and analog sensors to meaningful fields and alerts within Plaspy.
- Aids in diagnosing connectivity issues by confirming transport, APN, and endpoint settings.
- Supports planning for data cost and update frequency because Wialon Combine and EGTS reduce traffic compared with verbose formats.
- Improves confidence when rolling out firmware updates or hardware revisions by clarifying which protocol features are required for your deployment.

## Why Use Plaspy with This Protocol

Using the UMKa315 with Plaspy provides a practical combination for fleet and asset monitoring where compact hardware, efficient telemetry and BLE extensions are valuable. The UMKa315’s support for Wialon Combine and EGTS aligns well with Plaspy’s ingestion capabilities to deliver frequent position updates and rich sensor context while keeping data usage low.

Plaspy’s shared endpoint model and automatic protocol detection simplify device onboarding, while support for inputs, analog sensors, BLE identification, and offline black box logging enables versatile operational workflows for fleets, trailers and assets. To learn more about Plaspy, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol information and firmware notes directly with the manufacturer at https://glonasssoft.ru/.
