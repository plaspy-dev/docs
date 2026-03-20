---
slug: /zilogic/fleet/features
id: fleet-features
sidebar_label: Features
title: Zilogic - Fleet Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Zilogic Fleet GPS tracker and how it integrates with Plaspy for fleet monitoring and device input and output management
keywords:
  - Zilogic Fleet
  - Zilogic Fleet features
  - Zilogic Fleet GPS tracker
  - Zilogic Fleet capabilities
  - Zilogic Fleet functions
  - Zilogic Fleet Plaspy
  - fleet GPS tracker
  - vehicle tracking device
  - RS232 GPS tracker
  - fleet management tracker
---

# Zilogic - Fleet Features

This page describes the public feature context for using the Zilogic BlackKite-Fleet tracker with Plaspy. It focuses on functional capabilities you can expect to see in Plaspy when the tracker reports location and status, and how those capabilities support fleet monitoring and operational oversight on the Plaspy platform.

Exact feature availability and behavior can vary by device firmware version, hardware revision, installation method, and manufacturer implementation. Use this page as a practical overview and review the device documentation and current firmware notes from the manufacturer for precise, up to date details.

## Feature Overview

The BlackKite-Fleet is designed for mobile asset and fleet management, providing accurate positioning and dedicated vehicle interfaces that report status and allow remote control in supported setups. In Plaspy, those reports appear as location history, input state events, and actionable controls where the device and configuration permit.

- High accuracy GPS positioning to support continuous vehicle location and route history.
- Dedicated inputs for vehicle ignition, battery status, and panic button to surface key vehicle events.
- Multiple digital inputs for monitoring in-vehicle signals such as door status, fare meter pulses, or other binary conditions.
- Digital output lines that can be used to control on-board electronics and, where enabled, immobilize a vehicle during unauthorized use.
- Analog inputs for monitoring parameters like fuel level, temperature, or load values when the device is wired to those sensors.
- RS232 serial interface to connect external devices such as RFID readers or third-party sensors that can augment fleet workflows.

## Core Features of Zilogic - Fleet

- Integrated high-precision GPS receiver for reliable location tracking and route logging.
- Dedicated ignition input for detecting vehicle on/off state.
- Dedicated battery monitoring interface for reporting vehicle power status.
- Panic button input for emergency signaling when wired and configured.
- Three configurable digital inputs for custom on/off status monitoring.
- Three digital outputs for controlling devices or immobilization in supported installations.
- Two analog inputs for reading variable sensor values such as fuel or temperature signals.
- RS232 serial port for external device connectivity and operator authentication peripherals.

## How These Features Work with Plaspy

The BlackKite-Fleet reports location and input/output state to Plaspy, where those messages are normalized into events, position records, and device state indicators. Plaspy automatically detects compatible tracker protocols and presents location and status information in the platform for monitoring and reporting.

- Location updates appear as live positions and historical tracks on Plaspy maps and reports.
- Ignition, battery, and panic inputs are shown as discrete events or device state changes for monitoring and alerting.
- Digital input changes can be tracked as custom events in Plaspy, enabling operational visibility for doors, fare meters, or other on/off conditions.
- Analog input readings reported by the tracker can be recorded in Plaspy for trending and basic metric monitoring when the device reports those values.
- Digital outputs controlled by the tracker can be reflected in Plaspy as remote control actions where device firmware and configuration permit external commands.
- Plaspy’s device management recognizes the tracker and surfaces available telemetry so fleet operators can configure monitoring and reporting workflows.

## Typical Use Cases

- Real time vehicle location tracking and route playback for fleet oversight.
- Monitoring ignition and battery status to detect vehicle usage patterns and power issues.
- Driver or fare meter event tracking in taxi and passenger transport operations.
- Remote disabling (immobilization) capability as an added security measure in theft or unauthorized use scenarios, when supported and configured.
- Collecting analog sensor data such as fuel or temperature to augment operational decision making.
- Integrating operator authentication workflows using RS232 connected peripherals like RFID readers.

## Feature Availability Notes

- Manufacturer firmware and hardware revision can change how inputs, outputs, and analog channels behave. Confirm behavior for your specific unit and firmware build.
- Some features require correct wiring and installer configuration; automotive installations vary by vehicle and installer practices.
- RS232-connected peripherals require compatible external devices and correct serial configuration to pass meaningful data to the tracker.
- Remote control of digital outputs depends on device firmware and the specific Plaspy setup; not all installations enable command-and-control for outputs.
- Plaspy automatically detects tracker protocol and accepts TCP or UDP connections for reporting where the device is configured to communicate with the Plaspy server.

## Why Use Plaspy with These Features

Pairing the Zilogic BlackKite-Fleet with Plaspy gives organizations a practical way to consolidate location, input state, and basic sensor metrics in a single fleet platform. Plaspy translates reported GPS positions and device events into maps, timelines, and alerts that help operations teams improve visibility, respond to incidents, and analyze vehicle usage patterns.

To learn more about how Plaspy supports fleet trackers and to review platform capabilities, visit https://www.plaspy.com. For the most current, device specific feature details, firmware notes, and technical documentation, consult the manufacturer at https://zilogic.com/ to verify implementation and any recent changes.
