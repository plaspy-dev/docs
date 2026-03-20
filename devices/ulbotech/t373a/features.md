---
slug: /ulbotech/t373a/features
id: t373a-features
sidebar_label: Features
title: Ulbotech - T373A Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the Ulbotech T373A plug and play OBD II GPS tracker and its use with Plaspy
keywords:
  - Ulbotech T373A
  - T373A features
  - Ulbotech T373A GPS tracker
  - OBD II tracker
  - OBD2 GPS tracker
  - vehicle telemetry
  - fleet management tracker
  - Plaspy compatible tracker
  - engine immobilizer tracker
  - driver behaviour telematics
---

# Ulbotech - T373A Features

This page describes the public feature context for using the Ulbotech T373A tracker with Plaspy. It focuses on practical capabilities, what the device reports to Plaspy, and how those capabilities are typically used in fleet and vehicle monitoring workflows. The goal is to help fleet managers, integrators, and operators understand what to expect from the T373A when it is connected to the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and the manufacturer implementation. For device specific technical parameters, firmware release notes, or advanced configuration options consult the official Ulbotech documentation and the device firmware notes in addition to your Plaspy deployment guidance.

## Feature Overview

The T373A is a plug-and-play OBD-II tracker built for quick installation, real-time tracking and vehicle telemetry reporting. Designed for fleet operations and rental, insurance, and roadside assistance workflows, the device exposes key vehicle parameters and motion events while simplifying rollout with automatic network configuration and FOTA updates.

- Quick OBD-II installation for fast deployment without complex wiring
- Real-time GPS/GLONASS location and location assisted startup for consistent tracking
- Full OBD-II data reporting including engine and fuel related parameters
- Onboard engine-cut digital output for immobilizer workflows
- Bluetooth 2.0 support for pairing external peripherals and expanding telemetry
- Built-in accelerometer for driver behaviour and motion event detection

## Core Features of Ulbotech - T373A

- Plug-and-play OBD-II form factor for immediate installation on standard OBD-II ports
- GNSS receiver (u‑blox family) providing GPS and GLONASS position fixes for live tracking
- Multi band cellular connectivity for reliable data reporting over mobile networks
- Full OBD-II data and CANBUS support including RPM, speed, coolant temperature, fuel level and fuel consumption
- Onboard digital output for engine immobilizer (engine-cut) control
- Bluetooth 2.0 interface for compatible peripherals and accessories
- 3-axis accelerometer for motion sensing and driver behaviour analytics
- FOTA firmware update capability and auto APN/time zone detection for fleet scale maintenance

## How These Features Work with Plaspy

When the T373A is connected to Plaspy, the device streams location and vehicle telemetry to the Plaspy platform where data is normalized and presented for monitoring, alerting, and reporting. Plaspy ingests OBD-II parameters, accelerometer events, diagnostic codes and GPS positions so those signals can be used in live maps, event rules and scheduled reports.

- Real-time vehicle location and movement visibility on Plaspy live maps
- Ingested OBD-II parameters and diagnostic trouble codes shown in vehicle telemetry and maintenance reports
- Fuel level and consumption data available for fuel monitoring and operational reports
- Remote immobilizer status and engine-cut actions visible and controllable through Plaspy policies when enabled
- Driver behaviour events derived from the accelerometer surfaced as alerts and in driver scoring
- Bluetooth peripheral data available to Plaspy when paired and supported by the device firmware

## Typical Use Cases

- Fleet management and route oversight with live location, trip history and vehicle telemetry
- Anti-theft workflows using engine-cut output, movement detection and Plaspy alerts for rapid response
- Insurance and rental telematics for driver scoring, DTC reporting and usage based analytics
- Roadside assistance and dispatch with immediate vehicle location and basic diagnostics
- Fuel monitoring and operational efficiency programs using OBD-II fuel and consumption data
- Driver coaching programs using harsh driving and behavior events recorded by the accelerometer

## Feature Availability Notes

- Feature availability can depend on the device firmware version and the specific hardware revision shipped by the manufacturer.
- Some OBD-II parameters reported depend on the vehicle make, model and the supported OBD protocol implemented by that vehicle.
- Bluetooth peripheral support and the range of supported accessories can vary by firmware and may require specific pairing procedures.
- Remote immobilizer and engine-cut actions may require additional wiring, configuration, or local regulatory compliance depending on region.
- Regional cellular variants and operator support affect connectivity performance and should be checked before large scale deployment.

## Why Use Plaspy with These Features

Using the T373A with Plaspy brings OBD-II telemetry and GNSS location into a single platform where data is normalized, visualized and made actionable. Plaspy helps transform raw device signals into operational insight such as maintenance triggers, fuel usage trends, driver behaviour scoring, and anti-theft workflows, enabling more effective fleet oversight and faster response to events.

To learn more about Plaspy and how it can be used with compatible trackers like the Ulbotech T373A visit https://www.plaspy.com. Device features, firmware behavior, and manufacturer implementation can change over time, so verify the latest device specific details and technical documentation with Ulbotech at http://www.ulbotech.com/ before making deployment decisions.
