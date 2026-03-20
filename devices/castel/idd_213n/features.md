---
slug: /castel/idd_213n/features
id: idd_213n-features
sidebar_label: Features
title: Castel - IDD-213N Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Castel IDD 213N and how it integrates with Plaspy for vehicle diagnostics and tracking
keywords:
  - Castel IDD-213N
  - Castel IDD-213N features
  - Castel IDD-213N GPS tracker
  - IDD-213N Plaspy
  - vehicle diagnostics tracker
  - OBD II GPS tracker
  - fleet management device
  - driving behavior monitoring
  - 3G OBD tracker
  - vehicle tracking features
---

# Castel - IDD-213N Features

This page provides a public feature overview for the Castel IDD-213N and how its capabilities are used with Plaspy. It describes the device functions that are relevant to tracking and remote diagnostics, and explains the practical value those functions deliver inside the Plaspy platform. The content here focuses on user facing features and integration context rather than low level implementation details.

Exact feature availability for a specific IDD-213N unit can vary depending on firmware version, hardware revision, installation type, and manufacturer implementation. For device specific behavior, configuration options, and the most current technical details consult the official Castel documentation and release notes.

## Feature Overview

The Castel IDD-213N is an OBD compliant on board diagnostic and tracking device intended for passenger and commercial vehicle use. It combines ECU data capture with location reporting and cellular connectivity to provide remote diagnostic visibility and tracking for operational use.

- Plug and play OBD style connection for reading vehicle ECU data and diagnostic information.
- Real time location reporting suitable for mapping and tracking use cases.
- Support for multiple vehicle diagnostic protocols including OBD II EOBD, J1939, and J1708 for broad vehicle compatibility.
- 3G cellular connectivity in common bands for data uplink to a backend server.
- Collection of mileage and fuel consumption statistics for reporting and analysis.
- Driving behavior monitoring with events such as speeding, hard acceleration and hard deceleration, and idle engine detection.

## Core Features of Castel - IDD-213N

- OBD II and EOBD compliance for standardized access to vehicle diagnostic parameters.
- J1939 and J1708 compatibility for extended support of heavy duty and legacy vehicle networks.
- ECU diagnostic reads including vehicle speed, RPM, and engine coolant temperature as reported by the vehicle.
- Diagnostic trouble code (DTC) reading and freeze frame data capture for troubleshooting.
- Real time location capture and transmission for tracking and fleet oversight.
- 3G cellular modem support for data connectivity to backend services.
- Driving behavior and trip statistics including mileage and fuel consumption aggregation.

## How These Features Work with Plaspy

Plaspy receives device reports from compatible trackers like the IDD-213N and exposes location and diagnostic data through the platform for monitoring and historical analysis. Integration is designed to let fleet managers and service providers see vehicle state and events alongside positional information.

- The IDD-213N can send location and ECU-derived diagnostics into Plaspy for live map visibility and historical playback.
- Diagnostic trouble codes and freeze frame information reported by the device can be surfaced as events or status details in Plaspy.
- Mileage, fuel consumption, and trip summaries produced by the device can be included in Plaspy reporting and export functions.
- Driving behavior events such as speeding, hard acceleration, and long idling can be reflected as flagged events for review inside Plaspy.
- Plaspy automatically detects compatible tracker protocols and accepts connections to the Plaspy backend domain for straightforward device onboarding.

## Typical Use Cases

- Fleet management teams monitoring vehicle health and location to coordinate service and dispatch.
- Car rental operators tracking vehicle usage, mileage, and diagnostic alerts for maintenance planning.
- Vehicle insurance programs using driving behavior summaries and diagnostic information for risk analysis.
- Driving schools and training fleets observing driver behavior and trip statistics for coaching.
- Car service shops collecting freeze frame and DTC data remotely to prediagnose issues before workshop visits.

## Feature Availability Notes

- Feature presence depends on device firmware and hardware revision; not every unit may expose the same set of diagnostic parameters.
- Installation type and the vehicle wiring or ECU implementation can affect which OBD or protocol data points are available.
- Regional cellular network coverage and carrier support for 3G services can influence connectivity and telemetry frequency.
- Some advanced reporting or aggregated statistics require server side processing and may depend on Plaspy configuration.
- Always verify behavior for your specific deployment against the device configuration and manufacturer guidance.

## Why Use Plaspy with These Features

Using the Castel IDD-213N together with Plaspy provides a practical way to combine vehicle diagnostic visibility with location awareness. Plaspy brings the device reports into a unified view where operations teams can monitor vehicle health, respond to diagnostic alerts, and track assets in real time. The pairing is useful for organizations that need consolidated oversight of vehicle condition, driver behavior, and fleet location.

To learn more about Plaspy and how it works with devices like the Castel IDD-213N visit https://www.plaspy.com. For the most current and authoritative device specifications, firmware notes, and manufacturer guidance please verify details on the Castel website http://www.castelecom.com/. Device features and firmware behavior can change over time so always confirm the latest information with the manufacturer.
