---
slug: /zilogic/fleet_pro/features
id: fleet_pro-features
sidebar_label: Features
title: Zilogic - Fleet Pro Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for Zilogic Fleet Pro GPS tracker compatibility with Plaspy and its main capabilities
keywords:
  - Zilogic Fleet Pro features
  - Zilogic Fleet Pro GPS tracker
  - Fleet Pro OBD II interface
  - Fleet Pro accelerometer
  - GPS tracker Plaspy compatibility
  - vehicle telematics tracker
  - Fleet Pro configurable reporting intervals
  - Fleet Pro digital inputs outputs
  - Fleet Pro analog inputs
  - vehicle tracking with Plaspy
---

# Zilogic - Fleet Pro Features

This page provides a concise, public-facing overview of the features and capabilities of the Zilogic Fleet Pro when used with Plaspy. It is intended to help fleet managers, integrators, and technical reviewers understand what the device can report and how those capabilities map to monitoring and oversight in the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, optional modules, installation method, and manufacturer implementation choices. For the most current and device-specific technical details consult the manufacturer documentation and release notes.

## Feature Overview

The Fleet Pro is positioned as a vehicle telematics tracker with a focus on practical fleet management data: location, driver behavior inputs, vehicle diagnostics via an optional interface, and flexible reporting. It combines connectivity and configurable reporting to balance real-time visibility with data usage controls.

- High-accuracy GPS location reporting for route and position awareness.
- Built-in accelerometer to monitor driving patterns and detect events related to motion.
- Optional OBD II interface to surface vehicle diagnostics and operational data when installed.
- Online and on-demand tracking over cellular channels including GPRS and SMS reporting.
- Configurable reporting intervals, with options as short as 30 seconds for higher fidelity tracking.
- Multiple physical I O options including digital inputs and outputs plus analog inputs for additional sensors.

## Core Features of Zilogic - Fleet Pro

- Built-in accelerometer for monitoring driving behavior and motion events.
- Optional OBD II interface for access to vehicle diagnostic information when fitted.
- GPS location tracking with emphasis on accuracy for route monitoring.
- Dual-band GSM/GPRS connectivity to send position and status updates.
- Support for online and on-demand tracking via cellular reporting channels.
- Configurable data transmission intervals to tune update frequency versus data use.
- Multiple I O options including digital inputs and outputs and analog inputs for external signals and sensors.
- Status LEDs to assist with installation verification and basic troubleshooting.

## How These Features Work with Plaspy

When connected to Plaspy, the Fleet Pro's telemetry and event data become part of a unified fleet view that supports monitoring, reporting, and historical review. Plaspy automatically detects many common tracker protocols and accepts tracker reports on the platform endpoint, allowing devices like Fleet Pro to report location and event data without per-device protocol selection.

- GPS position updates appear in Plaspy maps and historical tracks for route analysis.
- Accelerometer-derived motion events and driving pattern indicators can surface as event records or be used in behavior reporting inside Plaspy.
- OBD II data, when the Fleet Pro is fitted and configured to report it, can be displayed as vehicle diagnostic or performance metrics in Plaspy dashboards.
- Configurable reporting intervals from the device translate into update cadence inside Plaspy so users can balance near real-time tracking and bandwidth considerations.
- Digital and analog input states reported by the device are available as discrete or analog telemetry points for monitoring attached equipment or vehicle signals.
- Plaspy receives device messages on the platform endpoint and applies automatic protocol detection so trackers can be onboarded with minimal manual protocol configuration.

## Typical Use Cases

- Route tracking and historical trip review for commercial vehicle fleets.
- Driver behavior monitoring and coaching programs using accelerometer event data.
- Remote vehicle diagnostics and maintenance planning when the optional OBD II interface is in use.
- On-demand location checks for dispatch and asset coordination.
- Monitoring of vehicle auxiliary inputs such as door status, equipment power, or simple sensor signals via digital and analog inputs.
- Configurable alerting and reporting to manage fuel or operational efficiency where analog inputs are used to feed telemetry.

## Feature Availability Notes

- Optional features such as the OBD II interface may be an add-on or require specific hardware revisions and firmware that enable OBD data reporting.
- Accelerometer behavior and event thresholds can depend on firmware settings and may be configurable during installation or via manufacturer tools.
- Reporting intervals and supported minimums depend on device firmware and network conditions; while the device supports frequent reporting, practical use should consider data plans and network availability.
- Available I O functions and analog input ranges can vary by hardware variant and should be confirmed for each unit prior to deployment.
- Regional cellular bands and dual-band support may differ between production batches and should be checked against local carrier requirements.

## Why Use Plaspy with These Features

Using the Zilogic Fleet Pro with Plaspy gives organizations a clear path from device-level telematics to operational insight. Plaspy aggregates location, motion, and vehicle signals into a single dashboarded view so fleet managers can monitor vehicles in real time, review historical behavior, and generate reports for safety and efficiency programs. The combination of configurable reporting intervals and Plaspy visibility helps teams tune solutions for the right balance of timeliness and data cost.

To learn more about how Plaspy can work with Zilogic devices visit https://www.plaspy.com. For the most current, device specific technical details, firmware notes, and accessory options consult the manufacturer at https://zilogic.com/ since device features and firmware behavior can change over time.
