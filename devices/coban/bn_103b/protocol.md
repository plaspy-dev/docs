---
slug: /coban/bn_103b/protocol
id: bn_103b-protocol
sidebar_label: Protocol
title: Coban - BN-103B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Coban BN-103B GPS tracker and how it communicates with Plaspy
keywords:
  - Coban BN-103B protocol
  - Coban BN-103B GPS protocol
  - Coban BN-103B Plaspy compatibility
  - BN-103B GPS tracker
  - GPS tracker communication
  - vehicle tracking protocol
  - Plaspy device integration
  - fleet telemetry protocol
  - tracker reporting protocol
  - GNSS telemetry compatibility
---

# Coban - BN-103B Protocol

This page documents the public protocol context for using the Coban BN-103B vehicle GPS tracker with Plaspy. It focuses on how the device typically reports location and event information to Plaspy and what aspects of the tracker protocol are relevant for successful integration. The intent is to provide clear, non-sensitive guidance about connectivity and practical considerations rather than reproduce manufacturer documentation or private protocol internals.

The BN-103B is compatible with Plaspy and supports TCP, UDP and SMS reporting as described in the device overview. Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when devices are pointed to the Plaspy ingestion endpoint. Public Plaspy settings include the server domain d.plaspy.com and the server IP 54.85.159.138 on port 8888. Devices may be configured to use either UDP or TCP on port 8888 when reporting to Plaspy, and exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation.

## Protocol Overview

The tracker reporting protocol is the mechanism the BN-103B uses to identify itself and deliver GNSS positions, telemetry and alarm events to a server such as Plaspy. For Plaspy integration, the protocol lets the device transmit periodic location updates, event-driven messages, and status indicators that the platform maps to vehicles and assets.

- Enables the BN-103B to send GNSS coordinates, speed, heading and timestamp information to Plaspy.
- Carries alarm and input states such as SOS, door, shock, overspeed, low battery and power disconnection.
- Delivers device state markers like ignition or ACC status and battery level for trip and health monitoring.
- Supports both persistent connections and datagram reporting depending on device configuration and network conditions.
- Allows remote configuration and control commands when the device supports platform-based setup and command channels.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and uses automatic detection to interpret incoming messages from a wide range of trackers. In most cases, once a BN-103B is configured to report to Plaspy, no manual protocol selection is required inside the platform.

- Plaspy exposes a single ingestion endpoint reachable at d.plaspy.com or 54.85.159.138 and listens on port 8888.
- All devices supported by Plaspy use the same port, and the platform’s ingestion layer performs protocol identification for incoming connections.
- Devices can report via TCP or UDP to the Plaspy endpoint; using the correct transport and endpoint is the primary setup requirement.
- Automatic detection means Plaspy will map incoming messages to the BN-103B reporting behavior when the device is pointed to the Plaspy server.
- Users typically only need to ensure the device reporting settings match Plaspy’s endpoint and transport mode; advanced changes are handled at the device or firmware level.

## Transport and Connection Context

Connection setup is a core part of successful integration. The BN-103B supports reporting over TCP, UDP and SMS, and network transport selection affects reliability, latency and how Plaspy receives messages. Keep transport and endpoint configuration consistent with Plaspy requirements during onboarding.

- The device may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Plaspy’s publicly known server domain is d.plaspy.com and the server IP is 54.85.159.138; the platform listens on port 8888.
- Choosing TCP can simplify message delivery in some cellular environments while UDP is useful for lighter weight datagram reporting where supported.
- SMS reporting can be available as an alternate channel for devices that support it, but network data reporting is the typical path for real time telemetry in Plaspy.
- Ensure APN and reporting server settings on the tracker match the Plaspy endpoint and transport to avoid connectivity issues.

## Protocol Compatibility Notes

- Firmware revisions on the BN-103B can alter message timing, supported fields or event behavior; verify the device firmware when investigating differences.
- Hardware revisions or optional accessories may add or change telemetry channels such as analog fuel sensors or external microphones.
- Manufacturer side configuration commands and remote setup options are subject to the BN-103B user manual and may vary by region or firmware.
- Transport selection (TCP versus UDP) should match the device configuration and network behavior for best results.
- Plaspy’s automatic protocol detection reduces manual mapping, but correct device reporting destination and transport remain essential.
- Always validate critical features like immobilizer control or alarm persistence with both Plaspy and device documentation if you depend on them operationally.

## Why Protocol Understanding Matters

Understanding how the BN-103B communicates helps installers and fleet administrators achieve reliable tracking, faster troubleshooting and better long term operation with Plaspy. Knowing which channels carry critical data and how device behavior changes with firmware makes integration smoother.

- Simplifies initial setup by ensuring APN, server address and transport match Plaspy expectations.
- Helps diagnose connectivity issues by isolating network transport, endpoint and device configuration factors.
- Supports informed decisions about transport choice for reliability versus bandwidth efficiency.
- Improves alarm handling and event mapping within Plaspy when you know which inputs produce which messages.
- Aids lifecycle planning by anticipating firmware or hardware changes that could affect telemetry fields or reporting cadence.

## Why Use Plaspy with This Protocol

Using the BN-103B with Plaspy gives fleet operators an accessible path to real time location, event alerts and telemetry aggregation without requiring per device port changes or manual protocol selection. Plaspy’s shared endpoint and automatic detection streamline onboarding for TCP or UDP reporting devices, helping teams get vehicles visible and monitored quickly.

To learn more about how Plaspy supports GPS trackers like the Coban BN-103B and to review platform capabilities, visit https://www.plaspy.com. Protocol support, firmware behavior and manufacturer implementation details can change over time, so please verify the latest device specific protocol information on the manufacturer site https://www.coban.net/.
