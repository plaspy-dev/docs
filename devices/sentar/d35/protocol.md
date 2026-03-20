---
slug: /sentar/d35/protocol
id: d35-protocol
sidebar_label: Protocol
title: Sentar - D35 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the Sentar D35 kids GPS tracker with Plaspy including connection and compatibility context
keywords:
  - Sentar D35 protocol
  - Sentar D35 GPS tracker
  - Sentar D35 Plaspy compatibility
  - Sentar D35 communication
  - Sentar D35 tracking protocol
  - Sentar tracker protocol
  - Plaspy device compatibility
  - Plaspy GPS tracker
  - kids GPS smartwatch
  - real time tracking Plaspy
---

# Sentar - D35 Protocol

This page describes the public protocol context for using the Sentar D35 kids GPS tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in non sensitive, operational terms so implementers and care providers can understand the relationship between device reporting and platform ingestion.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so device-specific behavior should be validated against official manufacturer documentation.

## Protocol Overview

The protocol used by the D35 defines how the watch reports position, status, alerts, and multimedia metadata to a remote server and how the server can issue commands or configuration updates when supported. In general terms, the protocol ensures the device can be identified, authenticated where applicable, and provide usable telemetry for mapping and alerting.

- Enables periodic and event driven position reporting so Plaspy can plot location on maps and trigger notifications.
- Communicates device state and telemetry such as network connectivity, battery, and SOS events for operational visibility.
- Supports emergency alerting workflows by flagging priority messages for immediate handling by Plaspy.
- Carries metadata for multimedia or contextual data so photos, call events, and status logs can be correlated with location.
- Provides a consistent endpoint and transport behavior so Plaspy can ingest device messages reliably.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a single shared endpoint and automatically identifies the tracker protocol so users generally do not need to select a protocol manually within the platform. Proper device configuration to report to the Plaspy endpoint is the typical requirement for automatic detection and successful integration.

- Plaspy listens on a common endpoint for incoming tracker connections and uses that shared entry point to detect protocol patterns.
- All devices supported by Plaspy use the same port for reporting, which simplifies device configuration on the manufacturer side.
- When a D35 is configured to send data to the Plaspy endpoint, the platform will automatically match the incoming messages to the correct protocol handler.
- Users normally only need to point the device to Plaspy and ensure transport settings match device capabilities for detection to occur.
- Automatic detection reduces per-device setup steps while still requiring correct network and reporting settings on the tracker.

## Transport and Connection Context

Connection context covers how the D35 establishes a link to Plaspy for telemetry and alert delivery. Depending on the device firmware and configuration, the D35 may use different transport protocols and address formats to reach the Plaspy server.

- The D35 may be configured to use UDP or TCP for reporting to Plaspy, depending on device support and chosen settings.
- Plaspy accepts device connections on a single port used across all supported trackers to simplify configuration.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138 when a direct address is required.
- The standard Plaspy reporting port for all devices is 8888, and both UDP and TCP transports are supported by compatible firmware.
- Keep connection settings consistent with the device manual and verify network access (APN, SIM, and carrier) to ensure reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions on the D35 can change message cadence, fields, and available features; confirm compatibility for the specific firmware build in use.
- Hardware revisions or regional variants may expose different transport options or GNSS behavior; validate device capabilities before deployment.
- Manufacturer configuration must be set to direct reports to the Plaspy endpoint for automatic protocol detection to work correctly.
- Choice of UDP versus TCP can affect delivery characteristics; select the transport recommended by the device documentation for your use case.
- Some features such as multimedia upload, two way voice metadata, or advanced telemetry may depend on optional firmware features or cloud permissions.
- Always cross check Plaspy ingestion expectations against the official Sentar documentation for the most accurate device behaviors.

## Why Protocol Understanding Matters

Understanding the D35 communication protocol helps ensure reliable setup, effective troubleshooting, and consistent long term operation when used with Plaspy. Knowing which parts of the connection are standardized and which can vary lets administrators resolve issues faster and plan deployments with confidence.

- Speeds up initial setup by confirming server, domain, and transport settings before provisioning devices.
- Improves troubleshooting by narrowing issues to network, transport, or firmware layers rather than platform configuration.
- Helps anticipate how firmware updates may affect reporting cadence, feature availability, and alerting behavior.
- Enables informed decisions about transport (UDP vs TCP) based on desired reliability and network conditions.
- Assists in documenting operational procedures so caregivers and administrators understand expected device behavior.

## Why Use Plaspy with This Protocol

Using the Sentar D35 with Plaspy gives caregivers and organizations a consistent way to receive real time location, SOS alerts, and contextual telemetry from a child focused wearable. Plaspy’s platform ingests device reports and presents maps, timelines, and notification workflows that match the D35’s reporting capabilities, enabling practical monitoring and incident response.

To learn more about Plaspy and how the D35 can be used on the platform, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device and protocol information on the official Sentar website http://www.sentarsmart.com/ before large scale deployments.
