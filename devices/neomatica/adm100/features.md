---
slug: /neomatica/adm100/features
id: adm100-features
sidebar_label: Features
title: Neomatica - ADM100 Features
sidebar_class_name: menu_item_tracker
description: Public overview of Neomatica ADM100 GPS tracker features and how it integrates with Plaspy for fleet tracking and telemetry
keywords:
  - Neomatica ADM100
  - ADM100 features
  - ADM100 GPS tracker
  - ADM100 Plaspy
  - Neomatica tracker
  - vehicle tracking
  - fleet tracking
  - GNSS tracker
  - GPRS tracker
  - RS-485 tracker
---

# Neomatica - ADM100 Features

This page summarizes the public feature context for using the Neomatica ADM100 GPS tracker with Plaspy. It highlights the practical capabilities the device reports and how those capabilities are commonly used inside Plaspy for live tracking, event visibility and historical route analysis.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation choices and the manufacturer's implementation. For device-specific configuration, firmware updates and the latest technical details consult Neomatica documentation and the ADM100 user manual.

## Feature Overview

The ADM100 is a compact, Plaspy-compatible vehicle tracker built for dependable position reporting, flexible input monitoring and scalable deployment. It combines GNSS reception with GSM data reporting and onboard route storage so units continue to capture useful information even when network coverage is intermittent.

- Real-time GNSS positioning (GPS/GLONASS) for continuous location, speed and heading reporting.
- Onboard non-volatile route storage of up to 16,000 points for later upload and playback.
- Built-in GSM GPRS reporting for continuous telemetry and remote firmware updates.
- Flexible I/O including analogue and pulse inputs for sensor and ignition event capture.
- RS-485 interface to connect additional telemetry equipment or external modules.
- Compact, wide-voltage design suitable for many vehicle types and mass deployment.

## Core Features of Neomatica - ADM100

- High-sensitivity GNSS receiver supporting GPS and GLONASS for reliable fixes in challenging reception areas.
- GPRS connectivity with support for remote firmware update and domain-name addressing.
- Non-volatile route memory storing up to 16,000 points to preserve tracks during network loss.
- Two analogue inputs and two pulse inputs for external sensor and pulse counting integration.
- Discrete inputs suitable for ignition or alarm state monitoring and event logging.
- RS-485 interface for integration with additional equipment or telemetry modules.
- Multiple configuration channels including USB, SMS and GPRS for flexible deployment workflows.
- Wide operating voltage range to accommodate standard vehicle electrical systems.

## How These Features Work with Plaspy

When the ADM100 is reporting to Plaspy, its position, event and input data become visible in the platform for monitoring, alerts and reporting. Plaspy ingests the device's telemetry and presents it on live maps, in trip reports and in historical playback so operators can act on location and event information.

- Live position, speed and heading updates displayed on Plaspy maps for real-time fleet visibility.
- Upload and playback of stored route history from the device memory to Plaspy for compliance and analysis.
- Analogue and pulse input events mapped to Plaspy data fields or custom sensors for fuel pulse or sensor monitoring.
- Discrete input events (for example ignition or alarm states) surfaced as events and logs for alerting and investigation.
- RS-485 connected devices and telemetry inputs can be exposed in Plaspy as additional telemetry channels when configured.
- Remote firmware update capability helps keep deployed units synchronized with backend expectations managed through Plaspy workflows.

## Typical Use Cases

- Fleet operations using live location and historical routes for dispatch and route optimization.
- Anti-theft monitoring and unauthorized movement detection with discrete input event logging.
- Telemetry and fuel monitoring using pulse and analogue inputs to collect sensor-based events.
- Tracking special machinery and mobile equipment where wide voltage tolerance and rugged GNSS reception are beneficial.
- Deployments in areas with intermittent coverage where onboard route storage preserves data until upload.
- Mass rollout scenarios that benefit from remote configuration and GPRS-based firmware management.

## Feature Availability Notes

- Feature presence and exact behavior depend on the installed firmware version and may change with updates.
- Hardware revisions or regional variants can alter available interfaces or supported bands.
- Some inputs or interfaces require proper installation and configuration to report expected values to Plaspy.
- RS-485 functionality and any connected telemetry modules may need additional configuration and mapping on both the device and Plaspy.
- Always verify details such as supported protocols and configuration steps against the manufacturer documentation.

## Why Use Plaspy with These Features

Using the ADM100 with Plaspy gives organizations a consistent way to centralize location, input events and route history from compact vehicle terminals. Plaspy turns the ADM100 telemetry into operational insights — live maps, trip playback and event logs — that support dispatch, recovery and compliance workflows without requiring constant site visits.

Learn more about how Plaspy supports deployed trackers and fleet monitoring at https://www.plaspy.com. For the most current device features, firmware behavior and manufacturer implementation details verify the ADM100 documentation at https://neomatica.com/
