---
slug: /cantrack/tk100/features
id: tk100-features
sidebar_label: Features
title: CanTrack - TK100 Features
sidebar_class_name: menu_item_tracker
description: Practical feature overview of the CanTrack TK100 GPS tracker and how it works with Plaspy for vehicle tracking and anti theft workflows
keywords:
  - CanTrack TK100 features
  - CanTrack TK100 GPS tracker
  - CanTrack TK100 Plaspy
  - TK100 immobilizer
  - TK100 ignition reporting
  - vehicle GPS tracker TK100
  - TK100 SOS alarm
  - TK100 GPRS reporting
  - fleet tracking TK100
  - anti theft GPS tracker
---

# CanTrack - TK100 Features

This page describes the public feature context for using the CanTrack TK100 tracker with Plaspy. It highlights the tracker capabilities relevant to fleet management, anti theft workflows, and vehicle monitoring as they appear when the device is integrated into the Plaspy platform. Information here focuses on practical, user facing functions and how those functions are reflected in Plaspy dashboards and alerts.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and how the manufacturer implements functions. Plaspy automatically detects many tracker protocols and can ingest GPRS or SMS reports, but installers and operators should verify device settings and test telemetry after installation.

## Feature Overview

The TK100 is a hard wired vehicle tracker built to provide continuous position updates and basic telematics to a central platform. It supports GPRS and SMS reporting and includes anti theft controls and alarm reporting intended for vehicle and fleet use.

- Real time GPS location reporting for live map tracking and historical playback
- Ignition status reporting for trip detection and simple driver event segmentation
- Remote engine immobilization and SMS based circuit control for anti theft response
- SOS alarm reporting and two way voice call capability for emergency escalation
- Power cut detection with a small backup battery to surface tamper or disconnection events

## Core Features of CanTrack - TK100

- GPS positioning and continuous tracking via GPRS upload and optional SMS reporting
- Ignition ACC input reporting to indicate vehicle on off state
- Remote engine cut off and circuit control via SMS commands for anti theft interventions
- SOS emergency alarm and support for two way voice calling for driver safety
- Alarm event reporting such as overspeed and geo fence alerts as supported by device firmware
- Power cut or tamper detection and a built in backup battery for short outage reporting
- Remote configuration and parameter updates over GPRS and SMS

## How These Features Work with Plaspy

When connected to Plaspy, TK100 telemetry and events are displayed on live maps, included in history playback, and used to trigger notifications and reports. Plaspy ingests position, speed, ignition state, and alarm events and presents them in fleet dashboards that simplify monitoring and response.

- Live location and periodic position updates appear on Plaspy maps and vehicle lists
- Ignition status is available for trip segmentation, start stop visibility, and basic usage reports
- Alarm events such as SOS, power cut, overspeed, and geo fence triggers can generate Plaspy notifications
- Remote immobilization can be coordinated via the device reporting channel and operator workflows inside Plaspy
- SMS delivered reports and GPRS uploads are normalized by Plaspy so events from TK100 are usable in alerts and historical analysis

## Typical Use Cases

- Fleet management and dispatching with live position tracking and route history
- Anti theft protection where remote immobilization and SOS reporting assist recovery
- Motorcycle and e bike security using compact hard wired installation and tamper alerts
- Vehicle service and insurance tracking for mileage, incident logging, and theft investigations
- Delivery and logistics monitoring with geo fence and overspeed visibility for operational control

## Feature Availability Notes

- Feature presence and names can vary by firmware version and by regional hardware variants
- Some remote commands and SMS functions depend on network availability and the SIM configuration used in the device
- Installation wiring and the presence of ignition or cut off connections affect which inputs and outputs are available
- Plaspy will automatically detect many tracker protocols but installers should test reporting and alerts after provisioning
- For advanced or device specific configuration options consult the manufacturer documentation

## Why Use Plaspy with These Features

Using the TK100 with Plaspy provides a straightforward path from vehicle hardware to actionable operational visibility. Plaspy consolidates the TK100’s position and event data into centralized maps, notification rules, and historical reports so operators can monitor fleets, respond to alarms, and analyze movements without managing multiple point solutions.

To learn more about Plaspy and how it works with supported trackers visit https://www.plaspy.com. Device features, firmware behavior, and manufacturer implementation can change over time, so please verify the latest model details and instructions on the official manufacturer site https://www.cantrackgps.com/.
