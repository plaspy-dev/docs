---
slug: /teltonika/fmc150/features
id: fmc150-features
sidebar_label: Features
title: Teltonika - FMC150 Features
sidebar_class_name: menu_item_tracker
description: Public overview of Teltonika FMC150 features and how the tracker integrates with Plaspy for GPS and CAN telemetry
keywords:
  - Teltonika FMC150
  - FMC150 features
  - Teltonika FMC150 GPS tracker
  - FMC150 CAN telemetry
  - FMC150 Plaspy compatibility
  - vehicle tracking FMC150
  - FMC150 EV telemetry
  - fleet management tracker
  - Teltonika FMC150 functions
  - FMC150 capabilities
---

# Teltonika - FMC150 Features

This page provides a public feature overview of the Teltonika FMC150 in the context of using the device with Plaspy. It focuses on the practical capabilities you can expect when the FMC150 streams GNSS position and CAN-derived telemetry into Plaspy for tracking, reporting, and operational workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional SKU, and installation method. For deployment planning or model-specific technical details, verify the latest manufacturer documentation and release notes from Teltonika.

## Feature Overview

The FMC150 is aimed at fleet and vehicle telematics applications where CAN-level vehicle data and reliable cellular connectivity are required. When paired with Plaspy, the device supplies location plus deep CAN-derived telemetry that helps teams monitor vehicle health, manage EV assets, and improve operational oversight.

- Streams GPS location together with CAN-derived vehicle telemetry into Plaspy for unified visibility.
- Built-in CAN processing and support for a large set of CAN parameters to capture engine and battery related metrics.
- EV-ready parameter packages available to surface electric vehicle specific data to fleet dashboards.
- Works with Bluetooth sensors and Teltonika accessories to extend identification and environmental data sent to Plaspy.
- Multiple hardware module and regional variants to match deployment requirements and cellular bands.

## Core Features of Teltonika - FMC150

- Built-in CAN bus data processor for direct CAN parameter reading and decoding.
- Support for more than 100 CAN parameters with configurable parameter packages.
- EV-specific parameter packages for electric vehicle telemetry when configured.
- 4G LTE Cat 1 connectivity with fallback options across regional SKUs for continuous data delivery.
- Compatibility with contactless CAN adapters and Teltonika accessory ecosystem.
- Bluetooth sensor pairing for beacon and sensor integration.
- Remote management and firmware update support through Teltonika provisioning tools.
- Multiple ordering and module variants to support different regional and deployment needs.

## How These Features Work with Plaspy

Plaspy ingests position fixes and CAN-derived telemetry from compatible trackers such as the FMC150 and maps that data into dashboards, alerts, and historical reports. Plaspy automatically detects the tracker protocol so incoming messages are translated into usable telemetry and events for monitoring and reporting.

- Real-time location updates shown on Plaspy maps alongside historical route playback.
- CAN-derived parameters mapped to dashboards and reports for engine, battery, and EV monitoring.
- Event and alert generation in Plaspy based on telemetry thresholds and configured rules.
- Bluetooth sensor and beacon data reported into Plaspy for proximity and auxiliary condition tracking.
- Telemetry used to support maintenance scheduling, fuel and consumption workflows, and operational audits.

## Typical Use Cases

- Fleet management and logistics where combined GPS and CAN telemetry enable route optimization and vehicle health tracking.
- Mixed fleet operations that include both ICE and electric vehicles, leveraging EV parameter packages for specialized metrics.
- Preventive maintenance programs driven by CAN-derived engine and battery data to reduce downtime.
- Rental and shared vehicle services that require detailed vehicle usage and diagnostics.
- Asset and cargo monitoring using Bluetooth beacons and sensors paired to the tracker.
- Anti-theft monitoring and recovery workflows supported by real-time location and historical movement data.

## Feature Availability Notes

- Feature sets may vary by firmware version and Teltonika software configuration; parameter availability is firmware dependent.
- Hardware revisions and regional module variants can change supported cellular bands, accessory compatibility, and packaging options.
- Some accessory integrations and extended CAN packages require additional configuration or licensed parameter sets.
- Installation wiring and vehicle make/model can affect which CAN parameters are available from a given vehicle bus.
- Use Teltonika provisioning tools and official documentation to confirm firmware capabilities before large scale deployment.

## Why Use Plaspy with These Features

Using the FMC150 with Plaspy offers teams a practical path to combine precise location tracking with deep vehicle telemetry. The ability to bring CAN-level data into a centralized platform helps operations teams monitor charging and battery metrics for EVs, track engine-related signals for preventive maintenance, and build reporting that supports fuel and performance analysis. Combined with accessory support, this pairing can extend visibility to cargo conditions and proximity-based workflows.

Learn more about how Plaspy can use FMC150 telemetry for fleet visibility and operational reporting at https://www.plaspy.com. Device features, firmware behavior, and manufacturer details may change over time, so verify the latest device-specific information on the Teltonika website at https://www.teltonika-gps.com/.
