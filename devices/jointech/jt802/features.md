---
slug: /jointech/jt802/features
id: jt802-features
sidebar_label: Features
title: Jointech - JT802 Features
sidebar_class_name: menu_item_tracker
description: Feature overview of the Jointech JT802 valve slave lock and how it integrates with Plaspy for valve control monitoring access control and audit trails
keywords:
  - Jointech JT802 features
  - Jointech JT802 GPS tracker features
  - JT802 valve lock
  - JT802 Plaspy compatibility
  - Jointech valve slave lock
  - tanker valve control
  - intrinsic safety valve lock
  - Bluetooth offline unlocking
  - remote valve unlocking
  - fleet telemetry integration
---

# Jointech - JT802 Features

This page describes the public feature context for using the Jointech JT802 valve slave lock with Plaspy. It summarizes the device capabilities that are relevant to fleet operators, telemetry architects, and field teams when JT802 events and status are integrated into a Plaspy-enabled fleet management environment.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Operators should treat this content as a practical overview and confirm device specifics against manufacturer documentation and the deployed firmware in each installation.

## Feature Overview

The JT802 is a purpose built valve slave lock intended for multi-valve tanker installations and hazardous environments. When deployed with Jointech master locks and intrinsically safe handheld terminals, it provides auditable access control and status reporting that Plaspy can surface alongside GPS tracking and fleet telemetry.

- Slave valve lock that pairs with Jointech master locks such as JT701D and JT701L to scale multi-valve tanker systems.
- Remote online unlocking via the master lock path and Bluetooth based offline unlocking for field crews.
- Low power operation using a disposable lithium manganese battery for long service life between maintenance events.
- Intrinsic safety certification and compatibility with intrinsically safe handheld terminals for use in fuel and oil environments.
- Valve status, alarm events, and timing data reported into telemetry platforms for incident response and audit trails.
- Remote configuration of product parameters to simplify fleet rollouts and reduce onsite service visits.

## Core Features of Jointech - JT802

- Slave lock operation that works in concert with a Jointech master lock for centralized remote control.
- Bluetooth support for offline unlocking and pairing with intrinsically safe handheld terminals.
- Reporting of valve lock status and alarm events for telemetry and monitoring.
- Low power design powered by a disposable lithium manganese battery.
- Intrinsic safety certification suitable for hazardous fuel and oil handling environments.
- Remote parameter configuration to allow fleet level tuning and reduced field work.
- Positioning context derived from combined master lock and mobile phone positioning rather than an onboard GNSS module.

## How These Features Work with Plaspy

When integrated into a Plaspy-enabled fleet, JT802 events and status updates complement GPS tracker feeds to provide operational context and improved situational awareness.

- Valve status and alarm events are shown alongside vehicle position and route history to help correlate actions with location and timing.
- Remote online unlocking requests that flow through the master lock pathway can be reflected as control events and audit entries in Plaspy.
- Bluetooth offline unlocking performed by field crews appears as local access events that can be correlated with device and vehicle telemetry.
- Remote configuration changes are logged and can be tracked via Plaspy reporting for deployment management.
- Combined timing and location context from the master lock and handheld devices enables clearer incident investigation and route playback.

## Typical Use Cases

- Fuel distribution management where valve access timing and audit trails must be linked to route data and delivery records.
- Anti‑theft workflows that use alarm events and valve status to detect unauthorized activity and trigger response.
- Tanker transportation monitoring to correlate valve operations with GPS track playback for compliance and incident review.
- Secure logistics operations in hazardous zones where intrinsic safety and handheld interoperability are required.
- Fleet rollouts where remote configuration reduces the need for repeated field visits.

## Feature Availability Notes

- Firmware and software versions can change the presence, naming, and behavior of events and configuration options.
- Hardware revisions and regional product variants may alter certifications, battery type, or interface specifics.
- Installation method and the choice of Jointech master lock model influence which remote unlocking and reporting features are available.
- Bluetooth offline unlocking requires compatible intrinsically safe handheld terminals and correct pairing procedures.
- Always consult manufacturer release notes and installation guides for the precise capabilities of a given unit.

## Why Use Plaspy with These Features

Pairing the JT802 with Plaspy gives operators a unified operational view that combines access control events with vehicle location and telemetry. This layered visibility helps streamline incident response, auditability, and routine operations for tanker fleets where valve control is a critical part of safety and security workflows.

To learn more about how Plaspy can surface JT802 events alongside your fleet telemetry visit https://www.plaspy.com. For the latest device specifications, certification information, and firmware details verify current manufacturer documentation at https://www.jointcontrols.com/ as features and implementations can change over time.
