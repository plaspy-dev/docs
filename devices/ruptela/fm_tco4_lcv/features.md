---
slug: /ruptela/fm_tco4_lcv/features
id: fm_tco4_lcv-features
sidebar_label: Features
title: Ruptela - FM-Tco4 LCV Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the Ruptela FM Tco4 LCV and how it works with Plaspy for fleet visibility and fuel management
keywords:
  - Ruptela FM Tco4 LCV
  - FM Tco4 LCV features
  - Ruptela GPS tracker
  - FM Tco4 LCV Plaspy
  - fleet fuel monitoring
  - OBD II diagnostics
  - CANbus LCV data
  - driver identification
  - remote ignition blocking
  - vehicle tracking features
---

# Ruptela - FM-Tco4 LCV Features

This page provides a public, feature oriented overview of the Ruptela FM Tco4 LCV and how its capabilities are used with Plaspy for vehicle tracking and fleet monitoring. It focuses on practical, non confidential information about what the tracker can report and how those reports can be reflected in Plaspy for operational oversight.

Exact feature availability and behavior can vary by firmware version, hardware revision, how the unit is installed, and the vehicle manufacturer implementation. Users should treat this page as general guidance and consult the device maker and installation provider for implementation details specific to a vehicle or fleet.

## Feature Overview

The FM Tco4 LCV is designed for light commercial vehicles and provides integrated vehicle data through the on board computer plus traditional GPS tracking. In Plaspy, this combination enables location awareness together with vehicle condition and fuel information to support fleet efficiency and security.

- Reads CANbus LCV on board computer data for vehicle metrics and event context
- Reports fuel level and consumption data derived from the vehicle on board computer
- Captures OBD II engine error codes for early detection of maintenance needs
- Supports driver registration and identification to link trips to personnel
- Enables remote ignition blocking as an anti theft and access control measure

## Core Features of Ruptela - FM-Tco4 LCV

- CANbus LCV data reading to obtain vehicle parameters available through the on board computer
- Fuel level and consumption reporting using data from the vehicle without separate fuel sensors
- OBD II engine error code reading for basic diagnostic visibility
- Driver registration and identification for driver assignment and accountability
- Remote ignition blocking to help prevent unauthorized use
- Driver behaviour monitoring features such as Eco Drive indicators
- Internal geozone support for location based rules and triggers
- Antijamming features to improve signal reliability in environments with interference

## How These Features Work with Plaspy

Plaspy ingests device reports and exposes vehicle and event data in dashboards, reports, and alerts so fleet managers can act on information from the FM Tco4 LCV. Plaspy automatically detects the tracker protocol and receives device data for processing and visualization.

- Location and route information appear on Plaspy maps for real time and history review
- Fuel level and consumption data reported from the vehicle are shown in fuel monitoring views and used for fuel efficiency reports
- OBD II engine codes reported by the device can be surfaced in vehicle health or maintenance lists
- Driver registration events and identity are associated with trips to support accountability and reporting
- Remote ignition block events are visible in the platform as security actions or status changes
- Geozone entries and exits configured on the device or in Plaspy generate location based events for automation

## Typical Use Cases

- Monitoring fuel levels and consumption across a van fleet to reduce fuel cost and detect discrepancies
- Early detection of engine faults via OBD II code reporting to schedule preventive maintenance
- Assigning and tracking drivers for shift handovers and accountability on shared vehicles
- Enforcing vehicle access policies with remote ignition blocking in case of theft or misuse
- Tracking routes and mileage for operational reporting and route optimization
- Using eco driving indicators to coach drivers and reduce fuel consumption

## Feature Availability Notes

- Feature presence and exact data fields depend on the device firmware version and feature set enabled by Ruptela
- Vehicle make, model, and year affect what CANbus and OBD II data are available to the tracker
- Installation choices and wiring determine access to some vehicle signals and remote control functions
- Regional device variants or regulatory restrictions may affect functionality such as SMS control options
- For the most current and detailed technical behavior consult the official Ruptela documentation

## Why Use Plaspy with These Features

Using the Ruptela FM Tco4 LCV with Plaspy gives fleet operators a combined view of location, fuel, driver assignment, and basic vehicle health in a single platform. This integration supports operational decisions such as maintenance planning, fuel cost control, security responses, and driver oversight without managing multiple disconnected tools.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific and firmware details consult the manufacturer at https://ruptela.com/ to verify feature availability and implementation notes.
