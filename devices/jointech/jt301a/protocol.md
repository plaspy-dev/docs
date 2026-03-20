---
slug: /jointech/jt301a/protocol
id: jt301a-protocol
sidebar_label: Protocol
title: Jointech - JT301A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Jointech JT301A integration with Plaspy for scheduled LBS reporting and sensor events
keywords:
  - Jointech JT301A protocol
  - Jointech JT301A GPS protocol
  - Jointech JT301A communication protocol
  - Jointech JT301A tracking protocol
  - JT301A Plaspy integration
  - JT301A LBS tracker
  - asset tracker protocol
  - container tracking protocol
  - Plaspy device compatibility
  - fleet asset monitoring
---

# Jointech - JT301A Protocol

This page describes the public protocol context for using the Jointech JT301A asset tracker with Plaspy. It focuses on how the JT301A reports scheduled location and sensor status to Plaspy, the role of the device communication protocol in that integration, and practical notes to help teams plan deployment and troubleshooting. Details here are intended to be non-sensitive and suitable for public documentation.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can still vary by device firmware, hardware revision, and manufacturer implementation, so this page emphasizes connection context and practical guidance rather than device internals.

## Protocol Overview

The device protocol defines how the JT301A packages and transmits scheduled LBS position updates, door open and illumination sensor events, and basic device health telemetry for Plaspy ingestion. In practice the protocol lets the tracker identify itself to the platform, report periodic status, and trigger alerts when sensors detect events that matter for logistics and asset security.

- Enables periodic LBS location updates and timed telemetry reporting for long duration battery life.
- Transmits door open and illumination events so Plaspy can generate alerts and historical events.
- Communicates battery and simple device health indicators to support maintenance and scheduling.
- Provides an identification layer so Plaspy can associate incoming messages with the correct asset record.
- Supports operation over common transports so the JT301A can reach Plaspy from a variety of cellular networks.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and port and inspects incoming connections to determine the tracker protocol automatically. For most JT301A deployments users do not need to select a protocol manually inside Plaspy provided the device is configured to report to the Plaspy endpoint.

- Plaspy uses a shared server endpoint to accept tracker reports and automatically detects the tracker protocol.
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138, using port 8888 for device traffic.
- All devices in Plaspy use the same port which simplifies device configuration across mixed fleets.
- If the JT301A is properly pointed at the Plaspy endpoint, protocol selection inside Plaspy is typically not required.
- Automatic detection allows Plaspy to ingest JT301A telemetry alongside other device types in a single platform.

## Transport and Connection Context

Connection context matters when configuring JT301A devices to report to Plaspy. The tracker may be able to use either UDP or TCP on the standard Plaspy port depending on its configuration and firmware capabilities. Pointing the tracker to the Plaspy endpoint and port ensures messages reach the platform for protocol detection and processing.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and carrier behavior.
- The Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 are valid endpoints to configure on the tracker.
- Port 8888 is used by Plaspy for all supported devices which simplifies mass configuration.
- Choose UDP for lower overhead when supported by the tracker and network, or TCP where reliable delivery is preferred and supported.
- Ensure that carrier APN and firewall rules allow outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Compatibility can depend on firmware version and hardware revision; verify the JT301A firmware supports the reporting modes you plan to use.
- Manufacturer-side configuration options may change over time so confirm settings for transport and server endpoints before deployment.
- Some carriers or regional models may impose constraints on transport or ports; validate connectivity in the target region.
- While Plaspy automatically detects the protocol, proper device configuration to point at d.plaspy.com or 54.85.159.138 on port 8888 is required.
- Combining JT301A LBS feeds with GPS devices in Plaspy is a common architecture for mixed tracking needs, but test message routing and event mapping during rollout.
- Always cross reference device capabilities with the manufacturer documentation for the specific hardware revision you have.

## Why Protocol Understanding Matters

A clear, practical understanding of the JT301A communication protocol and connection context aids successful setup, reliable reporting, and efficient troubleshooting when integrating devices with Plaspy. Knowing how the tracker reaches the platform and what data it is expected to deliver helps teams reduce time to value and avoid common connectivity pitfalls.

- Ensures devices are configured to send to the correct Plaspy endpoint and transport so reports arrive reliably.
- Helps interpret device events and sensor reports in Plaspy dashboards and alerts.
- Reduces troubleshooting time by clarifying whether issues are network, configuration, or firmware related.
- Supports planning for mixed fleets where timed LBS devices and continuous GPS trackers coexist.
- Improves maintenance scheduling by understanding how device health telemetry maps to expected behavior.

## Why Use Plaspy with This Protocol

Using the JT301A with Plaspy provides a cost effective option for long duration asset visibility where scheduled LBS reporting and basic sensor events are sufficient. Plaspy ingests timed location updates, door open and illumination events, and battery telemetry so logistics teams can maintain awareness of asset status and receive actionable alerts without the data and power cost of continuous GPS for every asset.

Plaspy is designed to accept tracker reports at a single common endpoint which simplifies deployment across mixed device fleets. To learn more about how Plaspy supports device integrations and fleet visibility visit https://www.plaspy.com. Protocol support and device behavior can change with firmware and hardware revisions, so please verify the latest JT301A protocol and configuration details with the manufacturer at https://www.jointcontrols.com/ before large scale rollouts.
