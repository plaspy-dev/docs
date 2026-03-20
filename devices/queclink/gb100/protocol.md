---
slug: /queclink/gb100/protocol
id: gb100-protocol
sidebar_label: Protocol
title: QuecLink - GB100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the QuecLink GB100 and how it communicates with Plaspy for reliable fleet tracking and telemetry
keywords:
  - QuecLink GB100 protocol
  - QuecLink GB100 GPS protocol
  - QuecLink GB100 Plaspy compatibility
  - GB100 tracker protocol
  - GB100 vehicle tracking
  - GB100 telematics communication
  - Plaspy tracker support
  - QuecLink fleet tracking
  - GB100 telemetry compatibility
  - GPS tracker Plaspy integration
---

# QuecLink - GB100 Protocol

This page provides a public, high level view of the communication protocol context for the QuecLink GB100 when used with Plaspy. It focuses on how the device reports telemetry and events to Plaspy and what role the device protocol plays in delivering usable position and behavior data for dashboards, alerts, and analytics. The information here is intended for administrators, integrators, and technical evaluators who want to understand connection and protocol considerations without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by GB100 firmware release, hardware revision, and manufacturer configuration, so routine validation against device settings and manufacturer documentation is recommended.

## Protocol Overview

The GB100 device communicates vehicle position, speed, accelerometer events, and status telemetry to a back end platform using its reporting protocol. That protocol defines how the tracker identifies itself, which telemetry fields are delivered, and how messages are transported so Plaspy can ingest and present the data reliably.

- Provides device identity and telemetry payloads that allow Plaspy to associate messages with a vehicle and a customer account.
- Sends periodic position updates and event reports such as accelerometer alerts, power status, and geofence triggers for Plaspy processing.
- Supports retries and local buffering on the device so messages are preserved during temporary network outages and delivered to Plaspy when connectivity is restored.
- Enables configurable reporting intervals and event-driven messages so the tracker can balance data fidelity and network usage according to deployment needs.
- Works over standard IP transport so Plaspy can receive data in near real time for live maps, alerts, and analytics.

## How Plaspy Detects the Protocol

Plaspy exposes a single shared endpoint and port for device connectivity and automatically identifies the tracker protocol when telemetry arrives. This removes the need for most users to manually select a protocol inside Plaspy as long as the device is configured to report to the Plaspy endpoint.

- Plaspy’s public server endpoint is d.plaspy.com and the server IP is 54.85.159.138 for direct addressing.
- All devices report to the same Plaspy port and Plaspy uses that common port to receive data and detect the incoming protocol.
- When a GB100 is configured to point at the Plaspy endpoint and send telemetry, Plaspy will attempt to recognize the message format and associate the device automatically.
- Typical integration does not require manual protocol selection in Plaspy if the device configuration matches Plaspy’s endpoint and transport settings.
- If a device is not detected automatically, checking device server settings, transport mode, and firmware compatibility is a practical next step.

## Transport and Connection Context

The GB100 supports multiple transport methods and flexible server addressing so it can be configured to reach Plaspy from a variety of network environments. Connection context is primarily about how the device sends its messages rather than internal packet structure.

- The GB100 may be configured to use UDP or TCP on port 8888 depending on device settings and network policy.
- Devices intended for Plaspy should point to d.plaspy.com or the IP address 54.85.159.138 so telemetry reaches the Plaspy endpoint.
- Plaspy receives data on a single, shared port (8888) for all supported devices which simplifies device provisioning at scale.
- Transport selection (UDP vs TCP) affects delivery semantics and behavior during poor connectivity; choose the mode that matches deployment constraints and the device firmware capabilities.
- SMS or other fallback channels may be supported by the device for critical alerts if IP connectivity is unavailable, but IP transport to Plaspy is the primary channel for live telemetry.

## Protocol Compatibility Notes

- Firmware revisions can change available telemetry fields, default reporting behavior, and supported transport modes; verify the installed firmware version on the GB100.
- Hardware revisions or regional variants may affect antenna performance, GSM band support, and power monitoring behavior even when the high level protocol is similar.
- Manufacturer configuration tools and provisioning commands influence what the device reports and how often; use official QuecLink configuration guidance when targeting Plaspy.
- Transport choice (TCP vs UDP) should be validated on both the device side and in network environments such as mobile operator networks and firewalls.
- Plaspy’s shared port approach simplifies onboarding, but correct server address (d.plaspy.com or 54.85.159.138) and transport configuration are required for automatic detection.
- Confirm device buffering and retry behavior to ensure no telemetry loss during extended coverage gaps.

## Why Protocol Understanding Matters

Understanding the GB100 communication protocol helps administrators and integrators ensure reliable data flow, speed up troubleshooting, and optimize device configuration for fleet scale deployments. Clear protocol expectations reduce integration time and improve the consistency of telemetry arriving in Plaspy.

- Helps you validate that the device is configured to report to d.plaspy.com or the correct Plaspy IP and port 8888.
- Makes it easier to diagnose delivery issues by checking transport mode, network connectivity, and device buffering behavior.
- Guides decisions about reporting frequency and event thresholds to balance data volume and battery or data plan costs.
- Aids in assessing how firmware updates may change message content or behavior and what testing is needed before wide rollouts.
- Supports planning for fallback channels such as SMS if the deployment requires guaranteed notification under severe network conditions.

## Why Use Plaspy with This Protocol

Using the GB100 with Plaspy gives organizations access to real time location, driver behavior telemetry, and event data that are valuable for fleet operations, UBI programs, and asset monitoring. Plaspy’s ability to automatically detect compatible trackers and receive consistent telemetry over a shared endpoint reduces integration overhead for large scale deployments.

Learn more about how Plaspy can ingest GB100 telemetry and support dashboards, alerts, and analytics at https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and official configuration instructions verify information on the manufacturer site https://www.queclink.com/ since protocol support and firmware behavior can change over time.
