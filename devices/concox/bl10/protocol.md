---
slug: /concox/bl10/protocol
id: bl10-protocol
sidebar_label: Protocol
title: Concox - BL10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox BL10 and how it communicates with Plaspy for fleet tracking and lock telemetry
keywords:
  - Concox BL10 protocol
  - Concox BL10 GPS protocol
  - Concox BL10 communication protocol
  - Concox BL10 tracking protocol
  - Concox BL10 Plaspy compatibility
  - Concox BL10 tracker protocol
  - Concox BL10 GNSS lock
  - Concox BL10 bike lock tracker
  - Plaspy device protocol
  - Plaspy compatible trackers
---

# Concox - BL10 Protocol

This page describes the public protocol context for using the Concox BL10 smart bike lock and hidden GPS tracker with the Plaspy platform. It covers how the BL10 reports location, events, and device state at a high level so operators and integrators understand the role of the tracker protocol when directing data into Plaspy for fleet monitoring and lock management.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. The BL10 is Plaspy compatible out of the box, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. This page focuses on public and practical communication details rather than firmware internals or private command frames.

## Protocol Overview

The BL10 communication protocol enables secure, ongoing reporting of GNSS position, lock state, tamper events, and short range telemetry to a remote fleet server. At a high level, the protocol defines how the device identifies itself, when it pushes updates, and what event types are sent so Plaspy can present those events in the dashboard and trigger rules.

- Enables periodic and event driven reporting of GPS and auxiliary positioning such as LBS and BLE derived locations for more resilient coverage.
- Transmits device state information such as lock status, battery level, tamper or vibration alerts, and connectivity indicators.
- Provides the identity and necessary metadata so Plaspy can associate messages with the correct asset in a fleet.
- Supports short range BLE events like unlocks or iBeacon proximity notifications that are reconciled with location and usage data.
- Allows operators to receive geofence triggers and tamper notifications through the Plaspy platform for rapid response.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming reports from many tracker models while minimizing per device configuration. When a properly configured BL10 reports to the Plaspy endpoint, the platform will use the shared endpoint information to identify the incoming protocol and route messages to the appropriate processing logic.

- Plaspy listens on a single shared endpoint so devices reporting to that endpoint are detected automatically.
- Devices configured to report to d.plaspy.com or the equivalent server IP are routed into the platform for protocol identification.
- Operators typically do not need to select a protocol inside Plaspy manually when the BL10 is configured to report to the Plaspy endpoint.
- Automatic detection helps streamline rollouts of mixed fleets by removing a manual per device protocol selection step.
- If communications are not reaching Plaspy, verifying device reporting settings and network connectivity is the first troubleshooting step.

## Transport and Connection Context

Connection context covers how the BL10 reaches the Plaspy server and which transport options are commonly used. The BL10 can be configured to use either UDP or TCP depending on device settings and network requirements, and Plaspy accepts both transports on the shared port.

- BL10 devices may be configured to report to the domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- Plaspy accepts device reports over UDP or TCP on port 8888, and devices may use either transport depending on configuration.
- All devices in Plaspy use the same port so operators can standardize outbound settings for mixed fleets.
- Choosing UDP or TCP can depend on desired delivery behavior and network conditions at deployment locations.
- Ensure device APN and SIM provisioning allow outbound connections to the Plaspy endpoint and that any carrier firewalls permit the selected transport.

## Protocol Compatibility Notes

- Firmware versions can change the exact set of events, field names, or reporting cadence supported by a BL10 device.
- Hardware revisions or regional variants may alter supported transports, BLE features, or power management behavior.
- Manufacturer side configuration options such as positioning modes or power profiles can affect what the device reports and when.
- Transport choice between UDP and TCP can impact delivery characteristics and should be validated during testing.
- Always validate expected positioning behavior and event types against in field trials before large scale deployment.
- For the most current protocol specifics and firmware release notes consult the device manufacturer.

## Why Protocol Understanding Matters

Understanding how the BL10 communicates with Plaspy helps operators set devices correctly, speed up troubleshooting, and design workflows that rely on predictable event delivery and location accuracy.

- Ensures the device is configured to report to d.plaspy.com or the correct server IP so Plaspy receives data immediately.
- Helps diagnose connectivity issues by confirming transport selection TCP or UDP and verifying network paths to port 8888.
- Guides expectations around update cadence, geofence timing, and battery impact of different reporting modes.
- Enables sensible test plans for firmware updates and regional device variants before fleet wide rollouts.
- Improves incident response by clarifying what events the BL10 will emit for tamper, vibration, or unlock actions.

## Why Use Plaspy with This Protocol

Using the BL10 with Plaspy gives micromobility operators a unified way to collect location, lock state, and event telemetry across a bike fleet. The BL10 pairs an integrated locking mechanism with GNSS and short range BLE features to reduce theft and simplify recovery, while Plaspy consolidates those signals into live maps, geofence rules, and alerting workflows useful for daily operations.

To learn more about Plaspy and how the platform handles device reporting and fleet management visit https://www.plaspy.com. For the latest BL10 firmware notes and detailed device specific protocol documentation verify current implementation and firmware behavior at the manufacturer site https://www.iconcox.com/. Protocol support and device behavior can change over time so checking manufacturer documentation ensures you have the most up to date information.
