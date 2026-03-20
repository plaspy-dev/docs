---
slug: /gotop/g60/protocol
id: g60-protocol
sidebar_label: Protocol
title: GOTOP - G60 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for GOTOP G60 integration with Plaspy for GPS reporting and event telemetry
keywords:
  - GOTOP G60 protocol
  - GOTOP G60 GPS protocol
  - GOTOP G60 protocol for Plaspy
  - GOTOP G60 communication protocol
  - GOTOP G60 tracking protocol
  - GOTOP tracker Plaspy compatibility
  - GOTOP G60 GPRS SMS reporting
  - magnetic asset tracker protocol
  - vehicle tracker protocol Plaspy
  - fleet tracking G60
---

# GOTOP - G60 Protocol

This page describes the public protocol context for using the GOTOP G60 tracker with Plaspy. It focuses on how the device communicates with Plaspy in broad, non sensitive terms so fleet managers and integrators can understand reporting methods, connection targets, and practical considerations for setup and troubleshooting.

The G60 is a Plaspy compatible 4G magnetic asset and vehicle tracker that reports position and telemetry via SMS or GPRS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior in the field may differ between units or after firmware updates.

## Protocol Overview

The G60 reporting protocol is the mechanism the tracker uses to send location, alarms, and status to a backend platform such as Plaspy. In public terms, the protocol defines how the device packages identifying information and telemetry for delivery over cellular networks so Plaspy can ingest and present usable location and event data.

- Enables the G60 to report GPS fixes, base station fallback positions, and event telemetry such as vibration and low battery.
- Carries identifying information so Plaspy can associate incoming messages with the correct device record.
- Supports both GPRS data reporting and SMS based fallbacks to maintain visibility when data connectivity is variable.
- Facilitates remote parameter queries and status checks initiated via SMS when configuration over GPRS is not available.
- Determines the minimum data Plaspy needs to provide tracking, route playback, and alerting without exposing device internals.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming reports from many tracker models without requiring end users to manually pick a protocol. When a G60 or similar device is configured to report to the Plaspy endpoint, the platform automatically detects the tracker protocol and routes the data to the proper processing pipeline.

- Plaspy listens on a single shared endpoint to simplify device configuration for integrators and field technicians.
- Devices configured to report to d.plaspy.com or the Plaspy server IP will reach the same ingestion point for automatic protocol detection.
- Users typically do not need to select a protocol inside Plaspy if the device is correctly pointed to the Plaspy endpoint.
- Automatic detection reduces setup steps and helps onboard units that use either SMS or GPRS reporting.
- If a device is not appearing, verify the device is configured to use the correct Plaspy reporting target and transport mode.

## Transport and Connection Context

Connection context defines how the G60 delivers its protocol messages to Plaspy. The device supports cellular reporting and can be configured to use different transport protocols depending on the device firmware and configuration preferences.

- The G60 can report over GPRS or SMS with GPRS used as the primary data channel and SMS as a fallback option.
- Devices may be configured to use either UDP or TCP for GPRS reporting on port 8888.
- Plaspy’s server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices supported by Plaspy use the same port, which simplifies provisioning and firewall rules.
- Selection between UDP and TCP depends on the tracker configuration and carrier behavior in the deployment region.

## Protocol Compatibility Notes

- Firmware versions can change message timing, supported transport, and available fields; always check device firmware when validating behavior.
- Hardware revisions or regional variants may alter radio band support and in some cases message options available to Plaspy.
- Device-side transport choice between UDP and TCP can affect delivery characteristics; confirm the intended transport when provisioning.
- SMS reporting behavior and command sets are often manufacturer defined and may vary from device to device.
- For deployments using base station fallback positioning, expect different accuracy and reporting cadence compared with GPS fixes.
- Validate compatibility by testing a sample device in your intended network and monitoring how Plaspy ingests its messages.

## Why Protocol Understanding Matters

Knowing how the G60 communicates helps teams set expectations for setup time, battery life, and reliability, and it makes troubleshooting more efficient when devices are not reporting as expected.

- Ensures correct endpoint and transport configuration so devices reliably reach Plaspy.
- Helps balance reporting interval and battery life by understanding how often the device sends data.
- Informs decisions about using GPRS as primary transport with SMS fallback for resilience in low coverage areas.
- Guides firmware management and testing to avoid regressions when manufacturer updates change protocol behavior.
- Aids integration planning for alerting, route playback, and telemetric dashboards in Plaspy.

## Why Use Plaspy with This Protocol

Pairing the GOTOP G60 with Plaspy provides a practical solution for organizations that need discreet, long endurance tracking with the operational features of a modern fleet platform. The G60’s magnetic mount and rugged IP65 enclosure make it suitable for covert installation on containers, cargo, and rental vehicles while reporting position and events to Plaspy for real time visibility and historical analysis.

Plaspy simplifies connectivity by using a shared ingestion endpoint and a single port for all devices, and it automatically detects the tracker protocol when a device is pointed to the Plaspy reporting target. To learn more about Plaspy and how it handles device integration and fleet telemetry visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware details on the manufacturer site https://www.gotop.cc/
