---
slug: /astra_telematics/at240/features
id: at240-features
sidebar_label: Features
title: Astra Telematics - AT240 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for using the Astra Telematics AT240 with Plaspy tracking and fleet management
keywords:
  - Astra Telematics AT240 features
  - AT240 GPS tracker
  - AT240 Plaspy compatibility
  - AT240 vehicle tracking
  - AT240 fleet management
  - AT240 Bluetooth Low Energy
  - AT240 CAN bus FMS
  - AT240 IP67 waterproof
  - Astra Telematics tracker capabilities
  - AT240 track and trace
---

# Astra Telematics - AT240 Features

This page provides a public overview of the Astra Telematics AT240 features as they relate to use with Plaspy. It summarizes the tracker capabilities that are relevant for Plaspy users, clarifies what Plaspy can display and monitor, and highlights practical considerations for integration and day to day operations.

Exact feature availability and behavior for any AT240 unit can vary by firmware version, hardware revision, optional accessories, and the type of installation. For device specific technical limits, configuration options, and the latest firmware notes consult the manufacturer documentation and release notes.

## Feature Overview

The AT240 is a compact, automotive style GPS tracker designed for vehicle tracking and fleet telematics. It combines position accuracy, vehicle integration options, and rugged sealing to support a variety of tracking deployments where reliable location and event reporting are required.

- Precise GNSS positioning driven by a SiRFStar IV GPS receiver for consistent location updates.
- Bluetooth Low Energy connectivity to support nearby device interaction and short range integrations.
- CANBus support including FMS compatibility for vehicle data integration where available.
- IP67 rated enclosure and integrated antennas for discreet installation and weather resistance.
- Onboard backup battery and internal memory to preserve data between comms or during power interruptions.

## Core Features of Astra Telematics - AT240

- SiRFStar IV GNSS receiver for accurate position fixes.
- Cortex M3 based processing for device control and event handling.
- Bluetooth Low Energy for local pairing and device level integrations.
- CANBus FMS support to read vehicle bus data when installed in compatible vehicles.
- IP67 rated sealing and integrated GPS and GSM antennas for durable, discreet installation.
- Internal backup battery to sustain reporting and safe shutdown sequences.
- Internal memory for temporary storage of events and positions.
- Multiple digital inputs and configurable event reporting to reflect installed sensors and triggers.

## How These Features Work with Plaspy

Plaspy receives and interprets location and event data from the AT240 so fleet operators can monitor vehicles and respond to events. Plaspy automatically detects common tracker protocols and accepts connections over standard transport modes used by the device.

- Location updates and stored position uploads are shown on Plaspy maps and history panels for operational visibility.
- Digital input events and internal device events can be surfaced as monitorable alerts or timeline entries inside Plaspy.
- CANBus derived data (where provided by the installation) appears in Plaspy as available telemetry fields for vehicle insight.
- Bluetooth related proximity or device pairing information can be used locally and reflected in device notes where supported.
- Plaspy accepts TCP or UDP connections from devices and will detect the AT240 protocol automatically for normal reporting into the platform at the Plaspy server endpoint.

## Typical Use Cases

- Fleet location tracking for route visibility, dispatching, and asset oversight.
- Track and trace for high value vehicles and equipment that require accurate location history.
- Vehicle recovery workflows supported by reliable position updates and stored memory uploads.
- Telematics reporting where CANBus FMS data is required for vehicle performance or status monitoring.
- Short range integrations using Bluetooth Low Energy for driver device pairing or local configuration.
- Installations requiring weather resistant enclosures and internal antennas for discrete mounting.

## Feature Availability Notes

- Specific telemetry fields and CANBus parameters available depend on the vehicle, wiring harness, and FMS implementation.
- Bluetooth Low Energy behavior and supported BLE profiles may vary by firmware and hardware revision.
- Some features such as digital input mapping, sleep modes, and event triggers are configurable and can differ by installer setup.
- Internal memory capacity and backup battery behavior can be affected by firmware and device age or revision.
- Regional variants and cellular banding may alter the communication behavior; verify the exact model sold for your region.

## Why Use Plaspy with These Features

Using the AT240 with Plaspy gives organizations a practical way to centralize location, event, and vehicle bus information into a single monitoring platform. Plaspy presents position history, event timelines, and available telemetry so teams can maintain operational oversight and respond faster to incidents or schedule deviations.

To learn more about how Plaspy can work with Astra Telematics devices and to review platform features visit https://www.plaspy.com. For the most current device feature set, firmware behavior, and manufacturer implementation details verify information on the Astra Telematics website https://astratelematics.com/ .
