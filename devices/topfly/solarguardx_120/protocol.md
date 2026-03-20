---
slug: /topfly/solarguardx_120/protocol
id: solarguardx_120-protocol
sidebar_label: Protocol
title: TopFly - SolarGuardX 120 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the SolarGuardX 120 with Plaspy including connection context and compatibility guidance
keywords:
  - TopFly SolarGuardX 120 protocol
  - TopFly SolarGuardX 120 GPS protocol
  - SolarGuardX 120 Plaspy compatibility
  - SolarGuardX communication protocol
  - SolarGuardX tracking protocol
  - TopFly GPS tracker protocol
  - Plaspy device protocol
  - asset security telemetry protocol
  - BLE asset tracker protocol
  - solar powered lock protocol
---

# TopFly - SolarGuardX 120 Protocol

This page covers the public protocol context for integrating the TopFly SolarGuardX 120 with Plaspy. It describes how the device communicates in general terms, what role the communication protocol plays in a Plaspy deployment, and which connection settings are used to report telemetry and events to the Plaspy platform.

SolarGuardX 120 is a rugged, solar powered sub-lock that delivers tamper, battery and lock state telemetry alongside GPS tracker feeds when used in a Plaspy workflow. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available fields can vary by firmware version, hardware revision, and manufacturer implementation, so use this page for public context and verify device specific details with the manufacturer as needed.

## Protocol Overview

The communication protocol for SolarGuardX 120 enables the unit to report security telemetry and state events into Plaspy alongside location feeds from GPS trackers. In public terms the protocol is the mechanism the device uses to identify itself, transmit event and status data, and allow remote monitoring and coordinated operations.

- Carries key telemetry such as tamper alerts, battery and solar charge status, lock open/close events, and diagnostic flags to the backend.
- Provides identity and session information so Plaspy can associate events with the correct asset and GPS tracker feed.
- Delivers event timestamps and state changes that Plaspy can correlate with GPS position for alerting and historical reporting.
- Supports remote diagnostics and firmware management signals available through gateway or USB pathways as part of device lifecycle workflows.
- Enables master/slave lock coordination metadata so Plaspy can present synchronized access events and audit trails.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a single public endpoint and uses that shared entry point to identify and handle supported tracker protocols automatically. When SolarGuardX 120 or an associated gateway forwards telemetry to Plaspy using the standard connection settings, no manual protocol selection is normally required inside the Plaspy platform.

- Plaspy listens on a single port for all supported devices and automatically detects the tracker protocol.
- Devices configured to report to d.plaspy.com or the Plaspy server IP will be routed to the same detection and processing path.
- Users typically configure the device endpoint and transport on the device or gateway; Plaspy handles protocol identification on receipt.
- Automatic detection reduces the need for manual protocol mapping when devices are correctly pointed at the Plaspy endpoint.
- If you use gateways or mobile collectors for BLE telemetry, forward those gateways to the Plaspy endpoint so events are associated consistently.

## Transport and Connection Context

SolarGuardX 120 telemetry can be delivered to Plaspy over the network using standard transport options supported by the device and its gateway. The public connection parameters for reporting to Plaspy are intentionally uniform to simplify deployments and centralize protocol handling.

- Plaspy public server domain is d.plaspy.com and the server IP address is 54.85.159.138 for direct routing.
- The port used for all device reporting to Plaspy is 8888 and this same port applies to all devices supported by Plaspy.
- Devices and gateways may be configured to use either UDP or TCP on port 8888 depending on the device support and deployment requirements.
- When SolarGuardX 120 telemetry is collected via BLE gateways, those gateways should forward events to the Plaspy address and port to ensure proper ingestion.
- Consistent port and endpoint usage helps centralize detection, logging, and correlation of telemetry with GPS position data.

## Protocol Compatibility Notes

- Firmware revisions can change the set of available telemetry fields and event semantics; always check firmware release notes.
- Hardware revisions and optional accessory configurations (for example gateway models) may alter supported transports or data availability.
- Manufacturer side settings or configurable reporting intervals can affect how frequently events and status are sent to Plaspy.
- Transport selection (UDP vs TCP) is driven by device capability and network conditions; confirm which transport the deployed unit supports.
- BLE telemetry often requires a gateway or mobile collector to associate lock events with the GPS tracker; validate gateway compatibility.
- Validate compatibility against official manufacturer documentation and current firmware notes before large scale rollouts.

## Why Protocol Understanding Matters

Understanding the communication protocol used by SolarGuardX 120 helps ensure a reliable integration with Plaspy, makes troubleshooting faster, and supports predictable long term behavior across firmware and hardware updates.

- Faster setup by ensuring devices and gateways are pointed to the Plaspy endpoint and using the correct transport.
- Improved troubleshooting by narrowing issues to network, transport, or firmware rather than higher level platform configuration.
- Better event correlation so security telemetry aligns with GPS tracker position and operational workflows.
- More reliable alerting and historical reporting when transmission behavior and event semantics are understood.
- Informed decisions about firmware updates, gateway selection, and deployment topology that affect telemetry continuity.

## Why Use Plaspy with This Protocol

Using SolarGuardX 120 together with Plaspy provides organizations a unified way to combine physical security telemetry and access control events with GPS location and fleet management data. This integration can improve situational awareness for logistics, reduce response time for tamper or theft events, and provide synchronized multi-lock auditing for coordinated access workflows.

To learn more about how Plaspy can accept and correlate telemetry from compatible devices visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance verify the official TopFly documentation at https://www.topflytech.com/ since protocol support and firmware implementations can change over time.
