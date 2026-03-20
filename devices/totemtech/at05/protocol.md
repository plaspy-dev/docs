---
slug: /totemtech/at05/protocol
id: at05-protocol
sidebar_label: Protocol
title: Totemtech - AT05 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Totemtech AT05 GPS tracker and how it communicates with Plaspy for reliable tracking and integration
keywords:
  - Totemtech AT05 protocol
  - AT05 GPS tracker
  - AT05 Plaspy compatibility
  - Totemtech GPS protocol
  - AT05 communication protocol
  - vehicle tracking AT05
  - fleet management AT05
  - Plaspy tracker protocol
  - AT05 OTA firmware
  - Totemtech tracker integration
---

# Totemtech - AT05 Protocol

This page provides a public protocol overview for using the Totemtech AT05 GPS tracker with Plaspy. It focuses on the communication context and how the device reports location, movement, and alarm information to the Plaspy platform without exposing sensitive or proprietary implementation details. The content is intended to help technical users understand what to expect when integrating an AT05 with Plaspy.

The Totemtech AT05 is a versatile tracker that supports features such as simultaneous reporting to two servers, a 3 axis digital accelerometer for movement status, OTA firmware updates, a wide DC power input range with over voltage protection, GPRS and SMS command support, real time and history traces, multiple alarm types, and configurable I O ports. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker reporting protocol defines how the AT05 communicates position, status, sensor, and alarm data to a remote server. In general terms the protocol lets the device identify itself, negotiate transport behavior, and deliver the telemetry and event messages that Plaspy consumes for tracking and alerting.

- Enables the AT05 to send GPS position and movement state to a remote endpoint for processing.
- Communicates alarm and digital input state so events such as SOS, over speed, or power loss are captured.
- Supports reporting of accelerometer movement status for tamper and motion detection use cases.
- Allows the device to report in real time and to send history traces for later review.
- Accommodates dual server reporting so the device can deliver data to Plaspy and another endpoint simultaneously.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and uses automatic identification to associate incoming telemetry with the correct device record. When an AT05 is configured to report to Plaspy it typically requires no manual protocol selection inside the Plaspy platform as long as the device sends its data to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138 and the platform listens on port 8888.
- Devices can be configured to use UDP or TCP when reporting to Plaspy on port 8888.
- All devices supported by Plaspy use the same port to simplify device setup.
- Plaspy automatically detects the tracker protocol for devices that report correctly to the platform endpoint.
- Users typically only need to set the device to point at the Plaspy endpoint and ensure transport matches device capability.

## Transport and Connection Context

The AT05 can be configured to send data over cellular GPRS using either UDP or TCP depending on the device configuration and firmware. Understanding the transport and destination settings helps ensure reliable delivery of telemetry to Plaspy.

- The AT05 may be set to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy accepts device traffic on port 8888 and the device can use UDP or TCP to that port.
- Choose UDP or TCP on the device based on desired delivery characteristics and device support.
- Ensure the device APN and GPRS settings allow outbound connections to the Plaspy endpoint.
- Network firewalls and carrier restrictions can affect connectivity so validate outbound port access for 8888.

## Protocol Compatibility Notes

- Compatibility can vary with different firmware versions; newer or older firmware may change reporting behavior.
- Hardware revisions and configuration options on the AT05 can affect which transport and reporting features are available.
- Manufacturer side settings such as dual server reporting should be configured carefully so one server points to Plaspy.
- When using SMS command fallback, verify command formats against manufacturer documentation to avoid conflicting behaviors.
- Transport selection (UDP vs TCP) affects delivery and should be chosen according to reliability needs and device capabilities.
- Always validate the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy ingestion.

## Why Protocol Understanding Matters

Understanding the communication protocol helps with initial setup, troubleshooting connectivity issues, and maintaining reliable tracking over time. Knowing how the AT05 reports data and what Plaspy expects reduces configuration errors and speeds resolution when events or telemetry are not appearing as expected.

- Helps confirm the device is correctly pointed at the Plaspy endpoint and using port 8888.
- Assists in choosing the appropriate transport mode UDP or TCP for your environment.
- Makes it easier to interpret device reports and alarm conditions when diagnosing issues.
- Supports planning for OTA firmware updates and how changes might affect reporting behavior.
- Enables informed choices about dual server setups and redundancy for critical tracking.

## Why Use Plaspy with This Protocol

Using the Totemtech AT05 with Plaspy provides a practical way to collect location, movement, and alarm data from assets for operational visibility and fleet oversight. The AT05 hardware capabilities such as accelerometer based movement detection, OTA updates, and dual server reporting pair well with Plaspy's automatic protocol detection and centralized ingestion to simplify device onboarding.

If you want to learn more about Plaspy and how it handles GPS tracker integrations visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance consult the manufacturer at http://www.totemtek.com/ as device behavior and protocol support can change with new firmware and hardware revisions.
