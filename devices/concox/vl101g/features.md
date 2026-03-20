---
slug: /concox/vl101g/features
id: vl101g-features
sidebar_label: Features
title: Concox - VL101G Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for Concox VL101G GPS tracker and how it works with Plaspy for fleet tracking and vehicle telematics
keywords:
  - Concox VL101G
  - Concox VL101G features
  - VL101G GPS tracker
  - VL101G Plaspy
  - Concox vehicle tracker
  - dual frequency GNSS
  - LTE Cat 1 tracker
  - vehicle telematics
  - driving behavior analytics
  - vehicle immobilizer
---

# Concox - VL101G Features

This page provides a public, feature-oriented summary of the Concox VL101G and how its capabilities map to Plaspy for fleet tracking and vehicle telematics. It is intended to describe the main operational features you can expect to use with Plaspy, and how those features support monitoring, security, and fleet workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, installation wiring and configuration, and the manufacturer's implementation choices. For device-level configuration, firmware specifics, and installation guidance consult the official Concox documentation and release notes.

## Feature Overview

The VL101G is a rooftop ready 4G GNSS vehicle terminal built for professional fleet use. It combines high-accuracy positioning, resilient cellular uplink, vehicle-focused inputs and outputs, and onboard data continuity features to provide continuous tracking and telematics for vehicles deployed in demanding conditions.

- High precision dual frequency GNSS (L1 + L5) with GPS BDS GLONASS and Galileo support for improved positioning in marginal signals.
- LTE Cat 1 cellular with GSM 2G fallback and Micro SIM slot for broad uplink coverage and dependable reporting.
- Vehicle-oriented I O and serial compatibility for ignition detection, telemetry channels, and remote control use cases.
- Onboard storage and a backup battery to preserve logs and positions during temporary power loss or connectivity gaps.
- Built-in motion sensors (accelerometer and gyroscope) to generate driving behavior events for coaching and risk scoring.
- Rugged IP66 enclosure and extended temperature range suited to rooftop and exposed vehicle installations.

## Core Features of Concox - VL101G

- Dual frequency GNSS L1 + L5 supporting GPS BDS GLONASS and Galileo for enhanced position accuracy.
- Inertial navigation system to maintain positional continuity in weak signal environments.
- LTE Cat 1 cellular connectivity with GSM 2G fallback and Micro SIM support for network resilience.
- Vehicle inputs and outputs plus TTL and RS232 compatibility to capture ignition and external telemetry and to support relay control.
- Relay control capability suitable for remote engine cut-off or immobilizer workflows where supported by installation.
- Onboard storage for buffered logging of position and event data during connectivity loss.
- Industrial grade backup battery to maintain basic operation and logging during main power interruptions.
- Integrated accelerometer and gyroscope for detection of harsh driving events used in telematics reporting.

## How These Features Work with Plaspy

Plaspy ingests the VL101G telemetry and position streams to present real-time location, historical tracks, and event data in dashboards and reports. Plaspy automatically detects the tracker protocol during registration and supports typical UDP or TCP reporting modes, enabling rapid device onboarding and visibility.

- Real-time GNSS fixes and position updates displayed on Plaspy maps for live tracking and route history.
- Ignition and digital input events mapped to start/stop and tamper indicators in Plaspy dashboards and alerts.
- Driving behavior events derived from built-in accelerometer and gyroscope sent to Plaspy as telematics events for scoring and analysis.
- Relay or digital output events surfaced in Plaspy incident workflows to support immobilizer and recovery actions when configured.
- Onboard buffering and backup battery preserve logs so Plaspy receives historical data once connectivity is restored.

## Typical Use Cases

- Continuous fleet monitoring for routing, dispatch, and utilization reporting across vehicle fleets.
- Rental and leasing telemetry to enforce contracts, monitor usage, and detect tampering.
- Usage based insurance programs that rely on high fidelity driving events and accurate position history.
- Anti theft and recovery operations combining movement alerts, ignition status, and remote immobilization.
- Driver coaching and safety improvement programs using harsh event detection and scorecards.
- Maintenance planning and operational diagnostics using vehicle telemetry and event history.

## Feature Availability Notes

- Firmware differences and software configuration can enable or disable specific telemetry channels and event reports.
- Hardware revisions and regional variants can affect supported cellular bands and available I O wiring options.
- Installation wiring and the choice to enable relay or external peripherals determine whether remote immobilizer and some telemetry features are available.
- Built-in sensors and precision depend on antenna placement and rooftop or exposed mounting practices.
- Always consult the manufacturer datasheet and installation guide for exact hardware specifications and regional compliance information.

## Why Use Plaspy with These Features

Pairing the VL101G with Plaspy gives organizations a practical way to turn vehicle-level telemetry into operational insights. Plaspy consolidates GNSS position, sensor events, and input/output state into a single fleet view, enabling faster incident response, improved route visibility, and structured telematics reporting for safety and efficiency programs.

To learn more about how Plaspy can work with Concox devices and to review platform capabilities visit https://www.plaspy.com. For the most current device specifications firmware notes and installation instructions confirm details on the manufacturer site https://www.iconcox.com/
