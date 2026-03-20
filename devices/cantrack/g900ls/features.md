---
slug: /cantrack/g900ls/features
id: g900ls-features
sidebar_label: Features
title: CanTrack - G900LS Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the CanTrack G900LS GPS tracker and its compatibility with Plaspy for real time tracking and alerts
keywords:
  - CanTrack G900LS
  - G900LS features
  - CanTrack GPS tracker
  - G900LS Plaspy compatibility
  - vehicle tracking
  - 4G GPS tracker
  - fleet management tracker
  - real time tracking
  - remote immobilizer
  - backup battery
---

# CanTrack - G900LS Features

This page provides a public feature overview for the CanTrack G900LS and how its capabilities map into Plaspy for tracking, monitoring, and remote control. It is written to help fleet operators, vehicle owners, and integrators understand what the device can report and how those reports appear in Plaspy without exposing private implementation details.

Exact feature availability and behaviour can vary by firmware version, hardware revision, specific wiring or installation, and manufacturer configuration. For device specific setup, firmware change notes, and the most current technical specifications consult the manufacturer documentation and product datasheets.

## Feature Overview

The G900LS is a hard wired 4G GPS tracker intended for professional vehicle installations. It delivers frequent position updates, vehicle status telemetry, and configurable alarms so dispatchers and operations teams can monitor assets from Plaspy in near real time.

- Real time GPS position updates and historical route logging for operational visibility and audits.
- Vehicle status telemetry including ignition ACC detection and movement or speed triggered alarms.
- Power cut detection with a built in backup battery to support short autonomous operation and tamper alerts.
- Optional remote relay control for immobilization workflows and theft response where hardware supports it.
- Flexible installation options with 4 pin and 8 pin harnesses to fit different vehicle wiring and service scenarios.

## Core Features of CanTrack - G900LS

- Global 4G LTE connectivity with GSM fallback to maintain reporting across regions.
- High accuracy GNSS receiver with multi channel tracking and sub 5 meter CEP location performance.
- Ignition ACC status reporting for trip detection and runtime logging.
- Event driven alarms including movement, speed alerts, power cut detection, and angle change reports.
- Built in backup battery to report power loss and provide short duration autonomous operation.
- Optional relay output for remote fuel or power cut control where the device is equipped and installed.
- 4 pin and 8 pin wiring harness variants to accommodate different installation requirements.
- Remote management by platform commands and SMS for APN, server configuration, status queries, and configurable upload intervals.

## How These Features Work with Plaspy

Plaspy receives position and telemetry from the G900LS so operations teams can combine live tracking with rules, geofences, and reporting. Plaspy automatically detects the tracker protocol and surfaces device events alongside map and reporting tools to support decision making.

- Live location shown on Plaspy maps and historical traces available for playback and reports.
- Telemetry fields such as ignition status and movement feed Plaspy rules and alert triggers.
- Event driven alarms like power cut and movement generate alerts for dispatch and security workflows.
- Remote immobilizer or relay control commands can be issued from Plaspy where the device and installation support remote control.
- Configurable upload intervals and alarm enablement let you balance update frequency and data usage from within Plaspy.

## Typical Use Cases

- Fleet management for route oversight, dispatch coordination, and usage reporting.
- Anti theft operations combining movement and power cut alarms with remote relay control.
- Logistics and delivery verification using accurate position history and event logs.
- Rental and leasing oversight with ignition monitoring and configurable reporting intervals.
- Vehicle monitoring and recovery workflows that use speed and movement events to prioritize responses.

## Feature Availability Notes

- Hardware variants and wiring harness choice influence which inputs and relay functions are present on each unit.
- Firmware releases can add, refine, or change telemetry fields, alarm behavior, and remote command support.
- Regional cellular band variants affect network coverage and should be checked before deployment in a new market.
- Remote relay control and some platform commands require both device hardware support and correct installation.
- Always confirm device capabilities and firmware compatibility against the manufacturer documentation before finalizing operational procedures.

## Why Use Plaspy with These Features

Pairing the CanTrack G900LS with Plaspy gives organizations a unified way to view positions, monitor vehicle status, and act on alarms from a single platform. Plaspy aggregates real time location and event data so dispatchers and fleet managers can apply rules, generate reports, and execute remote commands as part of normal operations.

To learn more about how Plaspy can work with the G900LS and other compatible devices visit https://www.plaspy.com. For the latest device specifications, firmware notes, and installation guidance verify details with the manufacturer at https://www.cantrackgps.com/
