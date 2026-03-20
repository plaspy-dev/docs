---
slug: /concox/jm_vl02/features
id: jm_vl02-features
sidebar_label: Features
title: Concox - JM-VL02 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Concox JM-VL02 GPS tracker and how its vehicle telematics integrate with Plaspy for fleet management
keywords:
  - Concox JM-VL02 features
  - Concox JM-VL02 GPS tracker
  - JM-VL02 Plaspy compatibility
  - vehicle tracking Concox
  - JM-VL02 telemetry
  - fleet management Plaspy
  - JM-VL02 relay immobilizer
  - JM-VL02 ACC ignition detection
  - JM-VL02 accelerometer collision
  - Concox JM-VL02 rugged IP65
---

# Concox - JM-VL02 Features

This page provides a public feature overview for the Concox JM-VL02 GPS tracker and explains how those features relate to use with Plaspy. It focuses on the practical, non-sensitive capabilities of the device as described by the manufacturer and how Plaspy can ingest and present the device data for fleet visibility and operational oversight.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional model, installation method and manufacturer implementation. For device setup details, firmware notes and the most current specifications always consult the official Concox documentation in addition to Plaspy configuration guidance.

## Feature Overview

The JM-VL02 is a purpose-built vehicle tracker designed for commercial and industrial fleets. It combines resilient cellular connectivity, GNSS positioning and vehicle-focused I/O to provide location and state information suitable for anti-theft workflows, driver safety monitoring, and fleet operations.

- Multi-mode cellular connectivity with LTE Cat-M1 and NB2 plus GSM 2G fallback to maintain connections across coverage zones.
- Accurate GNSS positioning augmented with LBS for improved location continuity and fast time to first fix.
- Vehicle inputs and outputs including ACC or ignition detection, in-cabin SOS/panic button and relay output for remote cut-off and immobilization.
- Onboard accelerometer for detecting harsh driving events and collision-related alerts.
- Rugged IP65 enclosure suitable for construction, rental and public transport vehicle installations and expandable support for optional peripherals such as fuel sensors and RFID readers.

## Core Features of Concox - JM-VL02

- LTE Cat-M1 and NB2 cellular modem with GSM 2G fallback for broad coverage and connection resilience.
- GNSS positioning with GPS plus cellular LBS for reliable location reporting and fast TTFF.
- ACC or ignition detection to identify asset on and asset off states.
- SOS or panic button input for manual emergency alerts.
- Relay controlled remote cut-off to support immobilizer workflows and remote vehicle control.
- Onboard accelerometer for harsh acceleration, braking, cornering and collision detection events.
- IP65 rated compact enclosure for heavy duty vehicle use environments.
- Support for optional peripherals including fuel level sensors, temperature probes and RFID readers when required by the deployment.

## How These Features Work with Plaspy

When connected to Plaspy, the JM-VL02 reports location, telemetry and event data that Plaspy uses to populate live maps, event queues and historical reports. Plaspy automatically detects the device protocol and ingests its messages so fleet operators can monitor position and vehicle state from a central platform.

- Live location updates and map visualization combining GNSS and LBS derived positions for situational awareness.
- Event and alarm reporting for ACC state changes, SOS triggers, collision or harsh-driving events, and power disconnects.
- Remote relay control and immobilizer actions initiated from Plaspy to support anti-theft response and fleet control procedures.
- Telemetry and peripherals data such as fuel sensor inputs routed into Plaspy reporting when those optional sensors are connected.
- Historical route playback, alerts and summary reports to support dispatch, compliance and fleet performance analysis.

## Typical Use Cases

- Anti-theft and rapid recovery workflows using real-time tracking and remote relay cut-off.
- Construction and heavy machinery monitoring at remote sites where rugged IP65 hardware is required.
- Public transport oversight with live positions, SOS event handling and driver behavior monitoring.
- Rental and leasing operations using ignition detection and optional RFID integration for driver authentication and usage tracking.
- Fuel monitoring and anomaly detection when optional fuel sensors are attached.
- Driver safety programs that rely on accelerometer-driven harsh driving and collision alerts.

## Feature Availability Notes

- Firmware version and device configuration can enable or restrict specific features such as peripheral support, alarm thresholds and reporting intervals.
- Hardware revisions and regional variants may differ in carrier band support and certifications; verify the correct model for your region.
- Installation choices affect signal wiring for ACC, SOS and relay outputs; professional installation is recommended to ensure reliable I/O behavior.
- Optional sensors like fuel probes and RFID readers require proper wiring and configuration both on the device and in Plaspy to surface their data.
- Always confirm the latest capabilities, certifications and installation guidelines with Concox documentation before deployment.

## Why Use Plaspy with These Features

Using the Concox JM-VL02 with Plaspy brings vehicle location, ignition state, alarm events and peripheral telemetry into a centralized fleet management platform. Plaspy helps translate the device data into actionable workflows such as alerting for collisions, initiating immobilizer actions, tracking asset usage and generating historical reports for operations and compliance.

To learn more about how Plaspy can work with Concox devices and to explore platform features, visit https://www.plaspy.com. For the most current device specific information including firmware, regional variants and technical specifications, verify details with the manufacturer at https://www.iconcox.com/
