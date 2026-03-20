---
slug: /xirgo/xt21/features
id: xt21-features
sidebar_label: Features
title: Xirgo - XT21 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of Xirgo XT21 GPS tracker compatibility with Plaspy for asset tracking, digital inputs, and battery monitoring
keywords:
  - Xirgo XT21 features
  - Xirgo XT21 GPS tracker
  - XT21 Plaspy
  - XT21 battery monitoring
  - XT21 digital inputs
  - asset tracking XT21
  - trailer tracking XT21
  - remote asset telematics
  - low power GPS tracker
  - XT21 LTE tracking
---

# Xirgo - XT21 Features

This page describes the public feature context for using the Xirgo XT21 GPS tracker with Plaspy. It summarizes the XT21’s practical capabilities for asset and fleet monitoring and explains how its core signals map into Plaspy for live visibility, alerts, and reporting.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation wiring, and the manufacturer implementation. For device-specific technical details and the latest firmware notes, consult the official Xirgo documentation.

## Feature Overview

The XT21 is a compact, low-power GPS tracker designed for remote assets where power is intermittent or limited. It provides dependable position reporting and a small set of telemetry signals that Plaspy can use for location awareness, event detection, and battery state monitoring.

- Real-time GPS tracking over LTE for consistent position updates where cellular coverage exists
- Low-power design suited to trailers, portable equipment, and field assets with intermittent power
- Two all-purpose digital inputs for event detection such as door, tamper, or keyed ignition signals when wired
- Internal analog input for battery voltage monitoring to track asset power state and enable low-voltage alerts
- Cost-effective, compact module focused on essential telemetry without added complexity

## Core Features of Xirgo - XT21

- Integrated GPS engine for position fixes and location reporting
- LTE cellular connectivity for real-time telemetry transmission
- Two all-purpose digital inputs for external event sensing and simple wired detectors
- One internal analog input dedicated to monitoring battery voltage
- Low-power design optimized for environments with minimal or intermittent power
- Compact form factor suitable for discreet installations on trailers and portable assets
- Compatibility with Plaspy for out-of-box telemetry ingestion and mapping

## How These Features Work with Plaspy

Plaspy ingests XT21 position data and telemetry to present live maps, historical playback, and event-driven alerts. When an XT21 device is connected to Plaspy, its location, input events, and battery voltage readings become actionable elements in monitoring and reporting workflows.

- Live location and history: XT21 position updates appear on Plaspy maps and in route playback for operational oversight
- Event mapping: digital input changes are represented as events in Plaspy and can trigger notifications or workflow rules
- Battery monitoring: analog voltage readings are available to Plaspy for low-battery alerts and uptime analytics
- Unified telematics: XT21 data can be combined in Plaspy with other telematics feeds for consolidated reporting and dashboards
- Automatic protocol detection: Plaspy recognizes and ingests XT21 telemetry so device data appears in the platform with minimal setup

## Typical Use Cases

- Trailer and container tracking to monitor location history and detect unexpected moves
- Monitoring high-value portable equipment where power may be intermittent
- Rental fleet visibility for utilization tracking and confirming return locations
- Remote field and construction assets where simple telemetry and event detection are required
- Anti-theft workflows using location data plus digital input tamper or door signals

## Feature Availability Notes

- Firmware and hardware revisions can change how inputs behave, reporting intervals, and available telemetry
- Installation choices and wiring determine which digital inputs are active and what events can be detected
- Regional cellular variants and carrier support may affect LTE availability and reporting performance
- Manufacturer configuration and firmware settings may enable or disable specific reporting behaviors
- Verify the exact XT21 model SKU and documentation to confirm supported signals for your deployment

## Why Use Plaspy with These Features

Using the Xirgo XT21 with Plaspy gives organizations a straightforward way to turn basic but essential tracker signals into operational insight. Plaspy consolidates location, input events, and battery-voltage telemetry from XT21 devices into maps, alerts, and reports that support security, utilization tracking, and maintenance planning without requiring complex device setups.

To learn more about how Plaspy can use XT21 telemetry for live monitoring and reporting, visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer guidance, please consult Xirgo’s official documentation at https://xirgo.com/. Device features and firmware behavior can change over time, so verifying details with the manufacturer is recommended.
