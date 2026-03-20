---
slug: /itriangle/ts101_basic/features
id: ts101_basic-features
sidebar_label: Features
title: iTriangle - TS101 BASIC Features
sidebar_class_name: menu_item_tracker
description: A public features overview of the iTriangle TS101 BASIC GPS tracker and how its capabilities work with the Plaspy platform
keywords:
- iTriangle TS101 BASIC
- TS101 BASIC features
- iTriangle GPS tracker
- TS101 Plaspy compatibility
- GPS tracker features
- vehicle tracking device
- fleet management tracker
- multi constellation GNSS
- onboard storage tracking
- Bluetooth sensor tracker
---

# iTriangle - TS101 BASIC Features

This page describes the public feature context for the iTriangle TS101 BASIC GPS tracker and how its capabilities are presented when used with the Plaspy platform. It focuses on practical, non sensitive information about the tracker, what it reports, and how those signals map to visibility and operational workflows inside Plaspy.

Exact feature availability may vary by firmware version, hardware revision, regional model, installation approach, and manufacturer implementation. Where specific behavior matters for your deployment, consult the device documentation and your provisioning workflow to confirm functions such as connectivity options, I O wiring, and supported firmware features.

## Feature Overview

The TS101 BASIC is a compact vehicle tracker designed for continuous position reporting, basic telemetry collection, and resilient operation in fleet and transport contexts. It combines multi constellation GNSS positioning with practical I O and local storage to maintain tracking continuity across common vehicle scenarios.

- Real time tracking and reporting compatible with Plaspy for live location views and historical playback
- Multi constellation GNSS support for improved location availability in challenging reception conditions
- Onboard storage for up to 6,000 records to bridge temporary network outages and ensure sync to Plaspy when connectivity returns
- Wide 9–32V DC input plus an internal backup battery to preserve telemetry during power interruptions
- Integrated motion detection and tamper alerts via internal accelerometer for anti theft monitoring and event visibility
- IP65 rated enclosure and compact form factor suited to vehicle installations

## Core Features of iTriangle - TS101 BASIC

- Multi constellation GNSS support including GPS, GLONASS, Galileo, and BeiDou for broader satellite availability
- Real time telemetry reporting and compatibility with the Plaspy platform for location and event ingestion
- Onboard record storage supporting up to 6,000 tracking points to avoid data loss during coverage gaps
- Wide voltage input range and an internal backup battery to sustain basic telemetry when main power is removed
- Internal accelerometer for motion detection and tamper event reporting
- Practical I O set including ignition monitoring, one analog input, two digital inputs, one digital output, and RS232 debug interface
- Bluetooth Classic support for local sensor or beacon pairing to extend telemetry when used with compatible accessories
- OTA FOTA remote firmware and configuration update capability subject to provisioning and supported workflows

## How These Features Work with Plaspy

When connected and provisioned for Plaspy, the TS101 BASIC supplies position fixes, I O events, and onboard stored points that Plaspy uses to provide location awareness, event monitoring, and reporting. Plaspy automatically recognizes common tracker reporting formats and surfaces the data needed for operational oversight.

- Real time location updates appear in Plaspy maps and live tracking views for dispatch and monitoring
- Ignition state, digital input events, and motion/tamper alerts are ingested as events that can trigger rules and notifications in Plaspy
- Stored records are uploaded and reconciled by Plaspy after connectivity is restored, enabling complete trip reconstruction
- Remote configuration and OTA workflows supported by the device can be coordinated through Plaspy where provisioning and access permit
- Bluetooth paired sensor data and analog input telemetry can be exposed in Plaspy when the device is configured to forward that data

## Typical Use Cases

- Fleet management for live vehicle tracking, route replay, and operational oversight
- Anti theft and security monitoring using motion detection, tamper alerts, and remote digital output control
- School transport monitoring with ignition and event logging for trip verification and incident reporting
- Logistics and delivery visibility that relies on onboard storage to preserve tracking continuity during coverage gaps
- Sensor augmented telemetry using Bluetooth or the analog input to extend vehicle data available to Plaspy
- Remote device maintenance and firmware updates using OTA FOTA capabilities coordinated through Plaspy

## Feature Availability Notes

- Feature behavior can vary by firmware level and manufacturer firmware changes; confirm exact behavior for your firmware release
- Regional variants such as 2G GSM band configurations may change supported network bands and affect cellular connectivity
- Hardware revisions and optional accessory support can affect which I O and sensor functions are present on a given unit
- Installation wiring and vehicle interfaces determine how ignition monitoring and digital inputs should be used and interpreted
- OTA FOTA, remote configuration, and Bluetooth sensor integration depend on provisioning and supported workflows in your management environment
- Always refer to manufacturer documentation for the definitive list of supported features and configuration commands

## Why Use Plaspy with These Features

Pairing the TS101 BASIC with Plaspy gives operators a practical way to convert device signals into operational intelligence. Plaspy aggregates live position data, I O events, motion alerts, and stored records so fleets can maintain continuity, respond to incidents, and analyze historical activity across vehicles. For organizations that require simple, robust tracking with straightforward I O and remote management capabilities, the TS101 BASIC provides a reliable telemetry source that Plaspy can ingest and present.

To learn more about how Plaspy supports devices like the TS101 BASIC and to explore platform capabilities, visit https://www.plaspy.com. For the latest device specifications, firmware notes, and manufacturer details, verify current information on the official iTriangle website https://www.itriangle.net/.
