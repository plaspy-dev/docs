---
slug: /gotop/g23n/features
id: g23n-features
sidebar_label: Features
title: GOTOP - G23N Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the GOTOP G23N NB IoT GPS tracker and how it integrates with Plaspy for fleet tracking and remote controls
keywords:
  - GOTOP G23N
  - GOTOP G23N features
  - GOTOP G23N GPS tracker
  - G23N NB IoT
  - G23N Plaspy
  - NB IoT tracker
  - vehicle GPS tracker
  - fleet management tracker
  - GOTOP GPS features
  - G23N immobilizer output
---

# GOTOP - G23N Features

This page provides a public feature overview of the GOTOP G23N NB‑IoT GPS tracker and how its capabilities are presented and used within Plaspy. It summarizes the device functions relevant to tracking, telemetry, alarms, and remote control workflows when the G23N is integrated with Plaspy for fleet and vehicle monitoring.

Exact feature availability and behavior can vary by device firmware, hardware revision, regional variant, and the specifics of installation. This page uses the manufacturer description as the baseline for public capabilities but does not replace official manufacturer documentation or release notes for firmware behavior and implementation details.

## Feature Overview

The G23N is a compact vehicle grade tracker that focuses on low power NB‑IoT telemetry, multi‑constellation positioning, and practical vehicle inputs and outputs for anti‑theft and runtime monitoring. Its design targets discreet installations and long deployments where periodic reporting and event alerts are important.

- NB‑IoT connectivity using the Quectel BC26 module for low power wide area telemetry and long deployment life.
- Multi‑constellation GNSS positioning using GPS plus BDS and LBS to provide precise location reporting.
- Vehicle grade I O with ACC detection and a low output usable for remote power or fuel cut actions.
- Wide DC input range suitable for a variety of vehicle electrical systems to reduce installation complexity.
- Optional small backup battery and power loss alarm support to maintain short offline operation and signal tampering events.
- Compact weather tolerant housing and internal antennas for discreet mounting on cars, motorcycles, e‑bikes, and light commercial vehicles.

## Core Features of GOTOP - G23N

- NB‑IoT connectivity via the Quectel BC26 module for efficient telemetry and long battery life in periodic reporting scenarios.
- Multi‑constellation GNSS using GPS and BDS with LBS assistance for improved position availability and reported accuracy.
- Wide DC input range to support varied vehicle electrical systems and simplify installations across vehicle types.
- ACC detection input to report ignition or runtime states for monitoring and event rules.
- Low output dedicated for remote power or fuel cut style control to support anti‑theft interventions when authorized.
- Optional backup battery to provide short term operation and enable power loss notifications.
- UART‑TTL configuration interface for device setup and integration where physical access is available.
- Fast GNSS reacquisition performance noted for quick fixes after signal loss to help maintain route and stop accuracy.

## How These Features Work with Plaspy

When the G23N is integrated with Plaspy, its positioning, status, and alarm signals are surfaced in the Plaspy platform to provide operational visibility and event handling. Plaspy automatically detects supported tracker protocols and maps common device inputs and alarms to platform features for monitoring and response.

- Real time location markers and route history based on GNSS reports from the G23N streamed into Plaspy.
- Ignition and runtime visibility driven by ACC detection events shown in vehicle status and trip reports.
- Power loss and backup battery events flagged in Plaspy so operators can be alerted to tampering or external power removal.
- Remote low output control actions mapped to Plaspy functions for authorized immobilizer or cut interventions where configured.
- Periodic NB‑IoT telemetry and alarms visible in dashboards and reports for long deployment monitoring and incident review.

## Typical Use Cases

- Small to mid size fleet management requiring continuous tracking, runtime monitoring, and event reporting.
- Rental and financed vehicle monitoring with power loss alarms and remote immobilization options for security workflows.
- Taxis, passenger cars, motorcycles, and e‑bikes requiring compact installation and rapid GNSS reacquisition in urban conditions.
- Light commercial and delivery vehicles that benefit from a wide DC input range to support diverse vehicle electrical systems.
- Asset security deployments that need low maintenance NB‑IoT connectivity and short offline operation through a backup battery.
- Situations where straightforward physical I O and a configuration UART are preferred for integration and installation.

## Feature Availability Notes

- Exact availability of features such as alarm types, I O behavior, and backup battery support can vary depending on firmware version and hardware revision.
- Regional cellular band variants and NB‑IoT network availability may affect connectivity and telemetry behavior in different markets.
- Some behaviors and configuration options depend on how the device is installed and wired in a vehicle, so professional installation can affect feature performance.
- Manufacturer documentation and firmware release notes are the authoritative sources for the most current device specifics and supported commands.
- Plaspy maps commonly advertised inputs and alarms into platform features, but administrators should validate which events are sent by their specific device firmware.

## Why Use Plaspy with These Features

Using the GOTOP G23N with Plaspy gives organizations a unified view of location, ignition state, power events, and authorized remote control actions. Plaspy collects the tracker telemetry and presents it in dashboards, reports, and alerting rules that help operations teams monitor vehicle status, respond to incidents, and run routine oversight without needing separate systems for telemetry and control.

To learn more about Plaspy and how the G23N can be used in your tracking deployments visit https://www.plaspy.com. For the most current device specific feature descriptions, firmware behavior, and implementation details please consult the manufacturer documentation at https://www.gotop.cc/ before planning installations or operational workflows.
