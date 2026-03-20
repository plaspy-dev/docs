---
slug: /topfly/torchx_310/features
id: torchx_310-features
sidebar_label: Features
title: TopFly - TorchX 310 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the TopFly TorchX 310 GPS tracker and how it integrates with Plaspy for fleet tracking and diagnostics
keywords:
  - TopFly TorchX 310
  - TorchX 310 features
  - TopFly GPS tracker
  - TorchX 310 Plaspy
  - OBD II GPS tracker
  - CAN bus telemetry
  - BLE 5.0 tracker
  - LTE Cat M1 tracker
  - vehicle diagnostics GPS
  - fleet tracking TopFly
---

# TopFly - TorchX 310 Features

This page describes the public feature context for using the TopFly TorchX 310 GPS tracker with Plaspy. It summarizes the device capabilities that are relevant to Plaspy users, focusing on practical functions and how telemetry and events from the tracker can be used within the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional model, and the specifics of each vehicle installation. For device specific technical details and the most current specifications, consult the manufacturer documentation.

## Feature Overview

The TorchX 310 is a plug-and-play OBD-II tracker designed to deliver vehicle location and CAN-derived telemetry into fleet platforms such as Plaspy. Its combination of OBD-II convenience, cellular connectivity, GNSS positioning, BLE accessory support, and onboard safety features makes it useful for fast deployments and operational monitoring.

- Plug-and-play OBD-II installation for quick rollout and minimal wiring changes
- CAN-bus reads including VIN, true odometer, fuel level and diagnostic trouble codes for accurate vehicle context
- Real-time GNSS tracking with configurable reporting intervals for live monitoring
- BLE 5.0 support for pairing external sensors and accessories to extend telemetry
- Cellular connectivity using LTE Cat M1 with NB2 and 2G fallback where applicable for broad coverage
- Large offline buffer to store location points when coverage is unavailable and forward them when connectivity resumes

## Core Features of TopFly - TorchX 310

- OBD-II plug-in form factor for simple vehicle installation
- CAN-bus telemetry capturing VIN, true odometer, fuel level, DTCs and ignition status
- Multi-constellation GNSS for reliable location data
- LTE Cat‑M1 cellular connectivity with NB2 and 2G fallback where applicable
- BLE 5.0 for accessory pairing such as temperature and door sensors or wireless key fobs
- Configurable high-frequency reporting with capability for short intervals down to 3 seconds
- Large onboard buffer capable of storing many thousands of location points for offline logging
- Driver safety features including crash detection, harsh driving event monitoring and an internal buzzer for in-cab alerts

## How These Features Work with Plaspy

Plaspy ingests the TorchX 310 telemetry to provide location awareness, diagnostic visibility and event reporting for fleet operations. Data reported by the tracker is presented in Plaspy dashboards, maps and alerting workflows so teams can act on vehicle state and driver behavior.

- Real-time location updates and configurable reporting intervals reflected on Plaspy live maps
- Vehicle identity and diagnostics such as VIN, odometer and DTCs available as telemetry fields in Plaspy
- Ignition and driving event signals (harsh acceleration, braking, crash events) surfaced as events for alerts and reports
- Buffered data upload ensures historical location points are forwarded to Plaspy after connectivity is restored
- BLE accessory telemetry can be forwarded into Plaspy when the device reports paired sensor data
- Plaspy automatically detects compatible tracker protocols and accepts common transports to ingest device data

## Typical Use Cases

- Fleet management and dispatching where OBD-II reads provide odometer and VIN verification alongside live location
- Usage based insurance and driver coaching programs leveraging harsh event detection and driving behavior alerts
- Anti-theft monitoring and tamper awareness using backup logging and in-cab alert indicators
- Cold chain or refrigerated transport monitoring by pairing BLE temperature and door sensors to vehicle telemetry
- Rapid deployment programs that need plug-and-play trackers to minimize installation time across large fleets

## Feature Availability Notes

- Feature set can vary by firmware version and may be expanded or altered through manufacturer firmware updates
- Regional device variants may differ in cellular band support and fallback options
- Some CAN parameters and DTC availability depend on vehicle make, model and OBD-II implementation
- BLE accessory compatibility and behavior depend on the specific sensor make and firmware
- Installation type and vehicle wiring can affect which OBD-II and CAN signals are available to the tracker

## Why Use Plaspy with These Features

Using the TorchX 310 with Plaspy gives organizations a practical pathway to combine vehicle-level CAN diagnostics with location tracking and event monitoring. Plaspy presents CAN-derived fields such as VIN, odometer and DTCs alongside GNSS position and driver event data, helping fleets maintain operational visibility, simplify diagnostics, and act on safety-related signals.

To learn more about how Plaspy can work with devices like the TorchX 310 visit https://www.plaspy.com. For the latest device specifications, firmware notes and manufacturer guidance verify feature details directly with TopFly at https://www.topflytech.com/
