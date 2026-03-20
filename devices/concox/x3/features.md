---
slug: /concox/x3/features
id: x3-features
sidebar_label: Features
title: Concox - X3 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the Concox X3 GPS tracker and how its real time tracking and telematics integrate with Plaspy
keywords:
  - Concox X3
  - Concox X3 features
  - Concox X3 GPS tracker
  - X3 features Plaspy
  - X3 GPS capabilities
  - Concox vehicle tracker
  - X3 driving behavior
  - Plaspy compatible trackers
  - vehicle telematics X3
  - X3 GNSS tracking
---

# Concox - X3 Features

This page summarizes the public feature context for using the Concox X3 tracker with Plaspy. It focuses on user-facing capabilities and explains how the X3’s position reporting, I/O signals, event telemetry, and voice monitoring appear within Plaspy dashboards and workflows for operational monitoring and fleet management.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation type, regional variant, and manufacturer implementation. Where specific capabilities depend on a particular firmware or configuration, this page describes practical, non-sensitive functions and recommends checking manufacturer documentation for device-level details.

## Feature Overview

The Concox X3 is a compact vehicle tracker designed for real-time vehicle location and event reporting into Plaspy. It combines multi-constellation GNSS positioning with cellular connectivity and flexible I/O to support location tracking, driving behavior detection, and security workflows.

- High-accuracy GNSS using GPS, BDS, and LBS for precise vehicle positions suitable for map visualization and route monitoring.
- Cellular connectivity for continuous telemetry upload to Plaspy and remote visibility of vehicle status.
- Flexible accessory interfaces including RS232 and TTL, plus digital inputs and multiple outputs for integration with vehicle systems and alarms.
- Driving behavior detection and a built-in accelerometer for harsh acceleration, harsh braking, cornering, and collision event reporting.
- External microphone and two-way communication support to provide in-cab voice context for incidents and driver communications.

## Core Features of Concox - X3

- Multi-constellation GNSS positioning (GPS + BDS + LBS) for reliable fixes and improved accuracy.
- Driving behavior analytics including harsh acceleration, harsh braking, harsh cornering, and collision detection.
- Vehicle I/O support: ACC ignition input, SOS and auxiliary inputs, and relay/output controls for remote actions.
- RS232 and TTL accessory interfaces for integration with external devices and sensors.
- External microphone support and two-way voice capability for in-cab monitoring and incident verification.
- Wide vehicle power input range and an internal backup battery to maintain reporting during transient power events.
- Compact form factor designed for vehicle installations with LED indicators for GNSS, cellular, and power status.

## How These Features Work with Plaspy

Plaspy ingests the X3’s live telemetry and event data so operators can monitor vehicles, trigger automated notifications, and use Plaspy workflows for operational response. Plaspy automatically detects many tracker protocols and surfaces the X3’s status and events in map and reporting views.

- Real-time location updates and historical position trails available on Plaspy maps for route review and asset tracking.
- Digital input reporting such as ACC/ignition and SOS shown as status events to support trip detection and incident workflows.
- Relay and output control surfaced in Plaspy to enable remote immobilizer or cut-off actions where installations and safety policies permit.
- Driving behavior and collision events delivered to Plaspy as alerts for safety monitoring and driver coaching workflows.
- Voice monitoring and two-way communication support appear as supplemental context for incidents when deployed and enabled.
- Plaspy can correlate X3 I/O signals with other platform data to populate operational reports and alerts relevant to fleet management.

## Typical Use Cases

- Anti-theft response with relay-based cut-off combined with Plaspy alerts to secure a vehicle after an incident.
- Driver safety programs that use harsh driving event reports to identify coaching opportunities and reduce risk.
- Real-time logistics and delivery tracking to monitor vehicle locations, ETAs, and custody events.
- Incident verification using in-cab voice monitoring and two-way communication to collect context for accidents or disputes.
- Mixed-asset telematics where X3 vehicle telemetry is consolidated in Plaspy alongside other data sources for unified oversight.

## Feature Availability Notes

- Exact functions such as available inputs, outputs, and event definitions can differ by firmware version and hardware revision.
- Some features require specific installation wiring or external accessories to be present and properly configured.
- Regional cellular band variants and SIM provisioning can affect network coverage and telemetry delivery.
- Remote management capabilities and firmware update methods are not fully specified in this summary; consult manufacturer resources for details.
- Always confirm the installed device revision and firmware level before relying on a specific feature in production workflows.

## Why Use Plaspy with These Features

Pairing the Concox X3 with Plaspy gives fleet operators centralized visibility of vehicle location, status inputs, and event-driven telemetry in a single platform. Plaspy turns the X3’s position, I/O signals, and incident events into map visualizations, alerts, and reports that support faster response, better driver oversight, and improved operational control.

Learn more about how Plaspy can display and act on X3 telemetry by visiting https://www.plaspy.com. For the most current and device specific technical details, firmware notes, and installation instructions, verify feature availability with the manufacturer at https://www.iconcox.com/ as device features and firmware behavior may change over time.
