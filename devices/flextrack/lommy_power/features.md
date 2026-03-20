---
slug: /flextrack/lommy_power/features
id: lommy_power-features
sidebar_label: Features
title: Flextrack - Lommy Power Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Flextrack Lommy Power GPS tracker compatible with Plaspy for rugged equipment tracking and telemetry
keywords:
  - Flextrack Lommy Power features
  - Flextrack Lommy Power GPS tracker
  - Lommy Power Plaspy compatibility
  - Lommy Power capabilities
  - heavy equipment GPS tracker
  - operating hours tracking
  - multi constellation GNSS tracker
  - wired asset tracker
  - motion detection tracker
  - construction equipment tracking
---

# Flextrack - Lommy Power Features

This page provides a public feature overview of the Flextrack Lommy Power GPS tracker and how its capabilities are presented when used with Plaspy. It is written to help operators, fleet managers, and integrators understand the practical functions of the device and the value it brings to centralized monitoring on Plaspy.

Exact feature availability can vary by firmware version, hardware revision, installation method, and manufacturer implementation. The information below is based on the device description provided by Flextrack and is intended as a high level guide rather than a substitute for manufacturer documentation.

## Feature Overview

The Lommy Power is a compact, wired tracker designed for continuous, real-time monitoring of heavy machinery and equipment in harsh environments. It combines rugged hardware, multi-constellation GNSS, and cellular connectivity to deliver persistent location and basic telemetry to fleet platforms such as Plaspy.

- Continuous wired operation powered from machine battery for long term monitoring without internal battery maintenance.
- Multi constellation GNSS positioning for reliable location fixes in varied environments.
- Cellular connectivity with LTE and 2G fallback to maintain data flow in mixed coverage areas.
- Motion detection via a built in accelerometer to trigger movement reporting and theft alerts.
- Ignition and auxiliary input detection plus battery current measurement to report operating hours and start/stop events.

## Core Features of Flextrack - Lommy Power

- Wired power input supporting vehicle and equipment battery voltages to enable persistent tracking.
- IP65 rated enclosure and compact form factor suitable for outdoor and industrial installations.
- Multi constellation GNSS support including GPS, GLONASS, GALILEO, BEIDOU, and QZSS with SBAS assistance for improved position accuracy.
- Cellular communications with LTE Cat M1 and quad band 2G fallback and support for UDP and SMS reporting.
- Configurable power aware reporting logic that reduces transmissions when equipment is idle and increases update rate during movement or ignition events.
- Built in 3 axis accelerometer for movement detection and motion triggered reporting.
- Ignition and auxiliary input detection plus battery current measurement to calculate operating hours and utilization.
- Internal flash memory for brief offline storage when cellular is unavailable.

## How These Features Work with Plaspy

When Lommy Power devices send GNSS and telemetry to Plaspy, Plaspy normalizes the incoming data and makes it available for visualization, rules, and reporting. Plaspy automatically handles common tracker protocols so device telemetry appears in the platform without manual protocol selection.

- Real time location updates and history playback in Plaspy maps based on GNSS reports from the device.
- Start and stop events derived from ignition and auxiliary inputs feed utilization and maintenance reports.
- Operating hours based on battery current measurement are available for invoicing and service scheduling.
- Movement triggered reporting and accelerometer events generate geofence and theft alert workflows within Plaspy.
- Low rate and high rate reporting modes are reflected in Plaspy so users can balance telemetry granularity and data usage.

## Typical Use Cases

- Continuous monitoring of construction, agriculture, and forestry machinery to track location and utilization.
- Anti theft monitoring with movement detection, geofence alerts, and rapid notification through Plaspy.
- Operating hour reporting for billing, invoicing, and preventive maintenance scheduling.
- Remote sites where rugged hardware and wide temperature tolerance are required.
- Integrations where Lommy Power telemetry is combined with other sensor data in Plaspy for fuller asset visibility.

## Feature Availability Notes

- Firmware differences can change reporting intervals, supported inputs, and telemetry formatting; check the device firmware release notes for exact behavior.
- Hardware revisions or regional cellular variants may alter supported bands or environmental ratings.
- Installation type and wiring determine which inputs (ignition, auxiliary, current measurement) are available and how operating hours are calculated.
- Manufacturer configuration or provisioning may enable or disable specific features such as motion sensitivity or reporting modes.
- For any critical deployment check the latest product datasheet and installation guide from the manufacturer for detailed specifications.

## Why Use Plaspy with These Features

Using Lommy Power with Plaspy gives organizations continuous visibility into location, movement, and utilization of heavy equipment without the need for battery replacement cycles. Plaspy consolidates device telemetry, applies configurable rules and geofences, and produces reports that help teams manage fleets, plan maintenance, and respond to theft or misuse.

To learn more about how Plaspy can present and act on Lommy Power telemetry visit https://www.plaspy.com. For the latest device specific details, firmware notes, and installation guidance please verify information with the manufacturer at https://flextrack.dk as features and firmware behavior may change over time.
