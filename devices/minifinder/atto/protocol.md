---
slug: /minifinder/atto/protocol
id: atto-protocol
sidebar_label: Protocol
title: MiniFinder - ATTO Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for MiniFinder ATTO integration with Plaspy servers and shared connection settings
keywords:
  - MiniFinder ATTO protocol
  - MiniFinder ATTO GPS protocol
  - MiniFinder ATTO communication protocol
  - MiniFinder ATTO tracking protocol
  - MiniFinder tracker Plaspy
  - ATTO GPS tracker protocol
  - Pet tracker protocol
  - Plaspy device compatibility
  - MiniFinder integration
  - GPS tracker protocol guide
---

# MiniFinder - ATTO Protocol

This page describes the public protocol context for using the MiniFinder ATTO tracker with Plaspy. It focuses on how the device communicates with Plaspy in general, the shared connection settings Plaspy expects, and the practical points to consider when configuring and troubleshooting the tracker for use with the platform.

The MiniFinder ATTO is a compact pet and animal GPS tracker notable for long battery life, a lightweight trademarked design, and features such as smart sleep, real time tracking, geofence alerts, and waterproofing. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the ATTO governs how the tracker identifies itself, reports location and status, and receives configuration or command requests when applicable. For integration with Plaspy, the important public context is how the device delivers usable telemetry to Plaspy’s endpoint so that location, movement, and alerts can be processed by the platform.

- Transmits location and status updates so Plaspy can display real time and historical positions.
- Allows device identity and basic metadata to be communicated so Plaspy can associate reports with the correct asset.
- Supports periodic reporting and event driven messages (for example wake or geofence events) that Plaspy consumes for alerts and monitoring.
- Can be delivered preconfigured to a tracking system, simplifying initial setup with Plaspy.
- May expose configuration options via SMS or remote commands depending on the manufacturer’s public features.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many different tracker models and to identify the incoming protocol automatically when a device reports to the shared Plaspy endpoint. In most cases, a properly configured ATTO device that sends data to Plaspy will not require manual protocol selection inside the platform.

- Plaspy receives device traffic at the shared server endpoint d.plaspy.com and the public IP 54.85.159.138.
- All devices use the same network port on Plaspy, which simplifies configuration and routing on the device side.
- When an ATTO device sends data to Plaspy’s endpoint, the platform examines the incoming session and automatically selects the appropriate handling for the tracker.
- Users typically only need to ensure the device is pointed to Plaspy and that transport settings (UDP or TCP) match the device capabilities.
- If a tracker was preconfigured for Plaspy, standard setup steps are often minimal and focused on SIM, power, and mounting.

## Transport and Connection Context

Plaspy supports both of the common transports that trackers may use to send their reports. The practical connection context for an ATTO intended to report to Plaspy is therefore straightforward: point the device at the Plaspy endpoint and use the device transport it supports.

- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and chosen configuration.
- The Plaspy server domain d.plaspy.com and the address 54.85.159.138 are valid endpoints that devices can target.
- Plaspy listens on port 8888 for tracker reports; this is the same port used for all devices supported by Plaspy.
- Selecting UDP or TCP on the device should follow the ATTO’s documented options and the network conditions where the device operates.
- Ensure the device SIM and mobile network have data connectivity and that any carrier restrictions allow outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can introduce protocol changes or optional features; confirm firmware compatibility before wide deployment.
- Hardware revisions between device batches can affect available transports or behavior; check the specific unit documentation.
- Manufacturer-side configuration options such as preconfiguration or SMS commands may change how a device is set up for Plaspy.
- Transport selection (UDP versus TCP) should reflect both the device capability and reliability needs in the field.
- Validate that the tracker’s telemetry frequency and sleep modes meet your monitoring and battery life requirements.
- When in doubt, consult MiniFinder documentation or support for model specific configuration guidance.

## Why Protocol Understanding Matters

Understanding how the ATTO communicates helps ensure a smooth setup, reliable data flow, and predictable battery and alert behavior when used with Plaspy. Clear protocol awareness also speeds troubleshooting and informs decisions about reporting intervals, sleep strategy, and transport.

- Optimizes initial setup so devices report to Plaspy without needless retries or misconfiguration.
- Helps tune reporting intervals and sleep modes to balance location fidelity and battery life.
- Informs troubleshooting steps when devices are not visible in Plaspy or when alerts are missing.
- Aids planning for firmware updates or field replacement by highlighting compatibility considerations.
- Supports integration planning for geofences, alerts, and other behavior that depends on timely telemetry.

## Why Use Plaspy with This Protocol

Using the MiniFinder ATTO with Plaspy provides organizations and pet owners with a straightforward path to real time visibility, configurable alerts, and historical tracking. The ATTO’s small form factor, long battery life, and pet-focused features make it well suited for animal tracking, while Plaspy’s automatic protocol detection and shared endpoint approach reduce the configuration burden.

To learn more about Plaspy and how it handles device connections and reporting, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol information and firmware notes at the manufacturer site https://minifinder.se/.
