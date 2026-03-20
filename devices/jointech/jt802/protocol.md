---
slug: /jointech/jt802/protocol
id: jt802-protocol
sidebar_label: Protocol
title: Jointech - JT802 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context and Plaspy compatibility for the Jointech JT802 valve slave lock
keywords:
  - Jointech JT802
  - JT802 protocol
  - Jointech JT802 GPS protocol
  - JT802 communication protocol
  - JT802 tracking protocol
  - Jointech valve lock protocol
  - Plaspy compatibility
  - fleet tracking
  - valve monitoring
  - tank truck telemetry
---

# Jointech - JT802 Protocol

This page describes the public protocol context for using the Jointech JT802 valve slave lock with Plaspy. It focuses on how the device communicates operational state, alarm events, and timing information into a Plaspy-enabled telemetry stack without exposing proprietary or sensitive implementation details. The JT802 is designed to work with Jointech master locks and intrinsically safe handheld terminals, and its event and status reporting augment GPS tracker feeds in fleet management workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. In practice this means configuration and behavior can vary by JT802 firmware, hardware revision, and manufacturer implementation, so exact message timing and content may differ between device builds and software versions. For connection details, Plaspy uses d.plaspy.com and the public server IP 54.85.159.138 on port 8888 and accepts UDP or TCP on that same port.

## Protocol Overview

The JT802 communication protocol enables the device to report valve lock status, alarm events, and timing context that can be correlated with GPS tracker data and master lock telemetry. The protocol's role is to reliably surface state changes and auditable events to cloud platforms like Plaspy so operators can monitor valve activity, respond to alarms, and review historical events alongside position data.

- Transmits device state and event notifications that Plaspy can ingest and surface in dashboards and logs.
- Associates valve lock events with timing information and master lock context for auditability.
- Enables alarm and status reporting so automated alerts and operator workflows can trigger in Plaspy.
- Supports remote control workflows when used alongside a compatible Jointech master lock and platform integrations.
- Works with Bluetooth-based offline unlocking workflows so field operations can be reconciled with cloud-synced event history.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and automatically determines the tracker protocol used by reporting devices. When the JT802 and its paired master lock are configured to send events to Plaspy, the platform will detect and map incoming messages so users do not typically need to select a protocol manually.

- Plaspy listens on d.plaspy.com and 54.85.159.138 to receive device reports.
- The common receiving port across all Plaspy devices is 8888.
- Devices may be configured to use UDP or TCP on port 8888 and will be detected by Plaspy when properly pointed to the platform endpoint.
- Manual protocol selection inside Plaspy is usually unnecessary if the device reports to the correct endpoint and port.
- Detection focuses on safely identifying message types and mapping valve events into Plaspy telemetry without exposing proprietary parsing details.

## Transport and Connection Context

Connection context is important when configuring JT802 devices to report to Plaspy. The JT802 functions as a valve slave device in a system that can relay event and status data into the cloud; how that data reaches Plaspy depends on the master lock and network path in your deployment.

- Devices may be configured to use UDP or TCP on port 8888 depending on hardware and network requirements.
- Plaspy accepts reports sent to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- All devices that report to Plaspy use the same port, simplifying fleet configuration and firewall rules.
- Choose the transport mode (UDP or TCP) that matches your master lock setup and network reliability expectations.
- Ensure network routing and firewalls allow outbound traffic from vehicle systems to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Compatibility can vary across JT802 firmware versions and hardware revisions; confirm device firmware when validating behavior.
- Manufacturer implementation details on how events are packaged and relayed may differ between master lock pairings.
- Transport selection (UDP vs TCP) can affect message delivery characteristics; choose the appropriate transport for your network and operational needs.
- Bluetooth offline unlocking flows are handled locally by handheld terminals and are reconciled to Plaspy when connectivity is available.
- Always validate compatibility and configuration steps against the official Jointech documentation for your specific JT802 firmware and master lock model.
- Plaspy automatically detects the incoming protocol, but correct endpoint and port configuration on the device side is required for successful integration.

## Why Protocol Understanding Matters

Understanding how the JT802 communicates helps fleet engineers and operators ensure reliable reporting, accurate event correlation, and predictable behavior in Plaspy. Knowing the relationship between the valve slave device, the master lock, and the platform allows faster troubleshooting and better alignment of operational processes.

- Ensures correct endpoint and port configuration so events arrive at Plaspy without delay.
- Helps determine whether UDP or TCP is the appropriate transport for your deployment and network conditions.
- Clarifies how firmware and hardware revisions might change event content or timing and when to update device configurations.
- Aids in correlating valve events with GPS tracker position and other fleet telemetry for accurate incident analysis.
- Supports planning for offline unlocking reconciliation and audit trail completeness in Plaspy.

## Why Use Plaspy with This Protocol

Pairing the Jointech JT802 with Plaspy gives tanker operators a unified view of valve access control, alarm events, and route history together with vehicle GPS feeds and other telemetry. This combined visibility supports anti-theft workflows, compliance reporting, and faster operational response by making valve events part of the same telemetry fabric used for vehicle tracking and fleet management.

To learn more about platform capabilities and how Plaspy can integrate JT802 event streams with GPS tracker data, visit https://www.plaspy.com. Please verify current protocol support, firmware behavior, and device implementation details with the manufacturer at https://www.jointcontrols.com/ as these items can change over time.
