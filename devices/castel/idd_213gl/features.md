---
slug: /castel/idd_213gl/features
id: idd_213gl-features
sidebar_label: Features
title: Castel - IDD-213GL Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of Castel IDD 213GL capabilities and Plaspy compatibility for tracking and diagnostics
keywords:
  - Castel IDD 213GL features
  - Castel IDD 213GL GPS tracker
  - Castel GPS tracker features
  - IDD 213GL diagnostic tracker
  - OBD II J1939 J1708 tracker
  - vehicle diagnostics tracker Castel
  - IDD 213GL Plaspy compatibility
  - fleet management Castel tracker
  - real time tracking Castel
  - driving behavior monitoring Castel
---

# Castel - IDD-213GL Features

This page describes the public feature context for using the Castel IDD-213GL with Plaspy. It highlights the device capabilities that are relevant for remote tracking and vehicle diagnostics when connected to the Plaspy platform and explains how those capabilities translate into operational visibility and reporting inside Plaspy.

Exact feature availability can vary by firmware version, hardware revision, vehicle make and model, installation type, and how the manufacturer implements particular protocols. Use the details below as a practical summary and consult manufacturer documentation for device specific technical references.

## Feature Overview

The IDD-213GL is an intelligent on board diagnostic tracker that combines GPS location with vehicle ECU data collection. It supports a broad set of vehicle protocols, collects diagnostic and performance metrics, and provides driving behavior insights that are useful for fleet oversight and service workflows.

- Plug and play OBD style installation for quick deployment in compatible vehicles
- Support for OBD II EOBD as well as heavy vehicle protocols J1939 and J1708
- Real time location reporting paired with vehicle diagnostic data such as speed and RPM
- Collection of diagnostic trouble codes and freeze frame data for remote troubleshooting
- Aggregated mileage and fuel consumption statistics to support fleet efficiency analysis
- Monitoring of driving behavior events including speeding, hard acceleration and hard deceleration

## Core Features of Castel - IDD-213GL

- OBD II, EOBD, J1939 and J1708 protocol compatibility for broad vehicle support
- Plug and Play installation mode designed for quick connection to vehicle diagnostic port
- Reading of live vehicle parameters such as vehicle speed, RPM and engine coolant temperature
- Retrieval of diagnostic trouble codes and freeze frame snapshots from the ECU
- Mileage and fuel consumption statistics for operational reporting
- Driving behavior monitoring including speeding events, hard acceleration and hard deceleration, and idle engine detection
- Internal backup battery to provide unplug notification and basic continuity when external power is removed
- Modes suitable for passenger cars and heavy duty vehicles to match different fleet types

## How These Features Work with Plaspy

When used with Plaspy, the IDD-213GL sends its location and diagnostic data to the Plaspy backend so that teams can monitor vehicle health and movement from a central interface. Plaspy automatically detects supported tracker protocols and ingests the device data into reporting and map views.

- Real time location updates and stored GPS points appear in Plaspy mapping and history
- Diagnostic parameters and trouble codes are surfaced as telemetry or events to support remote diagnostics
- Driving behavior events and idle detection are available for monitoring and driver performance review
- Mileage and fuel statistics can be reviewed in Plaspy reports to support utilization and cost analysis
- Unplug and ignition events are visible in Plaspy to help detect tampering or power issues
- Plaspy supports standard transport options and can accept device traffic addressed to the Plaspy server domain for processing

## Typical Use Cases

- Fleet management teams tracking vehicle location and engine diagnostics for maintenance planning
- Service shops and car dealers capturing vehicle fault codes and freeze frame data during inspections
- Insurance programs that require driving behavior and mileage data for risk assessment and telematics
- Mixed fleets that include passenger and heavy duty vehicles using the same device model across asset types
- Remote monitoring of vehicle performance to prioritize repairs and reduce downtime
- Operational reporting where fuel consumption and mileage statistics inform scheduling and routing

## Feature Availability Notes

- Some diagnostics and parameters depend on the vehicle ECU exposing those values over OBD or heavy vehicle protocols; availability can vary by make and model
- Firmware version and hardware revisions can change what data items are reported and how events are detected
- Installation method, such as direct OBD plug versus a different wiring arrangement, can affect which signals are available
- Regional network variants and telematics settings may influence data transmission methods and behavior
- Always check the device firmware release notes and the manufacturer documentation for the most current behavior and supported parameter lists

## Why Use Plaspy with These Features

Using the Castel IDD-213GL with Plaspy provides a practical combination of vehicle level diagnostics and location tracking in a single device feed. This pairing helps organizations gain consolidated visibility into vehicle health and movement, enabling faster triage of faults, better-informed maintenance decisions, and improved operational oversight across mixed fleets.

To learn more about how Plaspy can process and present data from devices such as the IDD-213GL, visit https://www.plaspy.com. For the most up to date device specific technical information, firmware notes, and implementation details verify the manufacturer documentation at http://www.castelecom.com/ since features and firmware behavior can change over time.
