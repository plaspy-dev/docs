---
slug: /teltonika/tat100/protocol
id: tat100-protocol
sidebar_label: Protocol
title: Teltonika - TAT100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Teltonika TAT100 tracker with Plaspy and connection guidance
keywords:
  - Teltonika TAT100 protocol
  - TAT100 GPS protocol
  - Teltonika TAT100 Plaspy
  - TAT100 communication protocol
  - TAT100 tracking protocol
  - Teltonika asset tracker protocol
  - Plaspy device compatibility
  - GPS tracker communication
  - battery powered asset tracker
  - IP68 asset tracker
---

# Teltonika - TAT100 Protocol

This page describes the public protocol context for using the Teltonika TAT100 with Plaspy. It focuses on how the device reports location and telemetry to Plaspy and what to consider when configuring the tracker to send data to the platform. The content is intended to help fleet managers, integrators, and technical users understand the communication role without exposing implementation details.

The TAT100 is a compact, battery powered asset tracker built for long term deployments and rugged use. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so check device firmware and Teltonika documentation when planning deployments.

## Protocol Overview

The device protocol governs how the TAT100 encodes and sends position updates, telemetry, and device status so Plaspy can ingest and present the information. For the TAT100 this means periodic GNSS location reports and basic telemetry suitable for low power, battery based asset tracking. The protocol enables identification, timed reporting, and event driven messages that Plaspy uses to build map views, alerts, and history.

- Defines how the tracker identifies itself to the server so Plaspy can associate incoming data with the correct device record.
- Controls when and how location and telemetry are reported to balance update frequency against battery life.
- Transports movement events and device status updates that Plaspy translates into alerts and telemetry panels.
- Provides the structure that allows Plaspy to parse incoming reports without manual protocol selection when configured to the Plaspy endpoint.
- Supports configuration changes and reporting scenarios that can affect how frequently Plaspy receives updates.

## How Plaspy Detects the Protocol

Plaspy operates a shared network endpoint for device connections and automatically detects the tracker protocol from incoming reports. In most cases you do not need to tell Plaspy which protocol your tracker uses as long as the device is configured to send reports to the Plaspy server address and port.

- Plaspy uses a common server endpoint so devices report to a single address and port for ingestion.
- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct IP configuration.
- The port used by all devices in Plaspy is 8888 and Plaspy uses the same port for all supported devices.
- Devices may be configured to use either UDP or TCP to connect to the Plaspy endpoint on port 8888 depending on device capabilities and preference.
- When a properly configured device sends data to the Plaspy endpoint, Plaspy automatically detects the tracker protocol for processing.

## Transport and Connection Context

Connection context describes how the TAT100 reaches the Plaspy ingestion endpoint over the cellular network. The device uses standard cellular data to deliver reports, and transport selection is typically a configuration option on the tracker or managed by provisioning tools. This section focuses on the public connection facts relevant to sending data to Plaspy.

- Devices may point to the Plaspy domain d.plaspy.com or directly to IP 54.85.159.138 in device settings.
- The device may be configured using UDP or TCP on port 8888 to deliver reports to Plaspy.
- All devices in Plaspy use the same port, simplifying provisioning across mixed fleets and asset types.
- Transport selection can affect delivery characteristics such as retransmission behavior and overhead, so pick the mode supported and recommended for your SKU.
- Ensure the device APN and SIM plan allow outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware versions and feature sets can change how the device reports data and what telemetry fields are present.
- Hardware revisions or different SKUs may expose different configuration options such as micro USB provisioning or battery variants.
- Manufacturer side settings and remote configuration options can result in minor protocol differences between units.
- Transport choice, UDP versus TCP, can affect how messages are delivered but does not change higher level data semantics.
- Always validate a sample device reporting to the Plaspy endpoint before large scale deployment.
- Consult Teltonika documentation for SKU specific behaviors and any firmware release notes that affect reporting.

## Why Protocol Understanding Matters

Understanding the TAT100 communication protocol helps ensure successful setup, reliable reporting, and efficient use of battery life when integrating with Plaspy. Familiarity with the protocol context reduces troubleshooting time and supports better decisions about reporting rates and transport selection.

- Enables correct device configuration so reports reach Plaspy consistently and are associated with the proper asset.
- Helps choose reporting intervals and event triggers that balance visibility with battery longevity.
- Aids in diagnosing connectivity issues by confirming the device is pointed to the correct Plaspy endpoint and port.
- Clarifies which telemetry fields to expect in Plaspy and where to look for missing or unexpected data.
- Supports planning for mixed fleets where different devices or SKUs may behave slightly differently.

## Why Use Plaspy with This Protocol

Using the Teltonika TAT100 with Plaspy provides a practical solution for long term asset monitoring, container tracking, and backup tracking for fleet operations. The device hardware and configurable reporting are well suited to scenarios that require low maintenance and reliable location updates, while Plaspy handles ingestion, mapping, alerts, and historical playback to turn raw reports into operational insight.

To learn more about how Plaspy works with compatible trackers and to review deployment options, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol and firmware information on the manufacturer website https://www.teltonika-gps.com/.
