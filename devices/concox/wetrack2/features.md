---
slug: /concox/wetrack2/features
id: wetrack2-features
sidebar_label: Features
title: Concox - WeTrack2 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for Concox WeTrack2 GPS tracker compatibility with Plaspy, real time tracking and anti theft features
keywords:
  - Concox WeTrack2
  - WeTrack2 features
  - WeTrack2 GPS tracker
  - Concox tracker features
  - WeTrack2 Plaspy compatibility
  - GPS tracker features
  - vehicle tracking WeTrack2
  - scooter tracker Concox
  - anti theft GPS tracker
  - fleet tracking WeTrack2
---

# Concox - WeTrack2 Features

This page provides a public, non-sensitive feature overview of the Concox WeTrack2 and how its capabilities relate to using the device with Plaspy. It focuses on practical functions you can expect to see in Plaspy dashboards, alerts, and reports when the WeTrack2 is deployed for scooters, motorcycles, light vehicles, or industrial equipment.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Use this page as a technical feature summary rather than a definitive installation or configuration guide, and consult official manufacturer documentation for device specific details.

## Feature Overview

The WeTrack2 is a compact, rugged GNSS tracker designed for reliable real-time tracking and basic anti-theft control across a wide range of light vehicles and equipment. It balances precise positioning with a low power profile and includes onboard buffering and a backup battery to help maintain reporting during brief network interruptions.

- Compact IP65 rated enclosure suited for outdoor and exposed vehicle installations.
- Wide input voltage support 9–90 VDC to cover scooters, golf carts, motorcycles and diverse industrial assets.
- Precise GNSS positioning with GPS plus BDS and LBS support and sub 2.5 meter CEP accuracy for route monitoring.
- Ignition (ACC) detection and remote immobilizer support via an external relay for fuel or power cut-off.
- Low-power design with a 270 mAh Li-Polymer backup battery and local data buffering for continuity of reports.
- Onboard event detection including accelerometer based driving-event alerts and over-speed notifications.

## Core Features of Concox - WeTrack2

- GNSS positioning with combined GPS and BDS support and high sensitivity for reliable fixes.
- Sub 2.5 meter positional accuracy suitable for precise location and route replay.
- Ignition (ACC) input reporting to indicate vehicle on/off state.
- Remote immobilizer control via an external relay interface for fuel or power cut-off operations.
- IP65 rated enclosure for dust and water resistance in outdoor use.
- Wide operating voltage range 9–90 VDC for flexible vehicle and equipment fitment.
- Onboard backup battery and local storage for data buffering during short communication outages.
- Accelerometer based event detection for movement, driving events, and related alerts.

## How These Features Work with Plaspy

Plaspy ingests position, status, and event information from compatible trackers like the WeTrack2 and converts these inputs into live tracking, alerts, and historical reports. Plaspy automatically detects supported tracker protocols so incoming telemetry appears in platform dashboards with minimal manual protocol setup.

- Live GNSS positions and historical track playback visible on Plaspy maps and dashboards.
- Ignition status reported as vehicle on/off events to trigger workflows, runtime reports, and idle tracking.
- Movement and driving-event alerts from the device available as Plaspy notifications and timeline events.
- Remote immobilizer actions reflected in Plaspy controls where supported by the deployment for anti-theft response.
- Buffered data and backup battery behavior help preserve continuity of position and event reporting inside Plaspy during brief network interruptions.

## Typical Use Cases

- Stolen vehicle recovery for motorcycles and scooters using real-time tracking and remote immobilizer control.
- Fleet oversight for light vehicles and utility carts where voltage flexibility and compact size are important.
- Shared vehicle and scooter platforms needing compact hardware with continuous telemetry and event alerts.
- Industrial equipment tracking where wide voltage tolerance and rugged enclosure reduce installation complexity.
- Small commercial fleets requiring ignition reporting, route monitoring, and incident visibility.

## Feature Availability Notes

- Feature support can differ by firmware release; particular behaviors and menu options may change after updates.
- Hardware revisions and regional variants may affect cellular bands, connectors, or available interfaces.
- Installation wiring and use of external peripherals (for example a relay) determine whether immobilizer and ignition detection work as intended.
- Manufacturer documentation is the authoritative source for exact electrical specifications, connector pinouts, and configuration commands.
- Verify battery, storage, and event detection capabilities on the specific unit and firmware version you deploy.

## Why Use Plaspy with These Features

Using the Concox WeTrack2 with Plaspy combines compact, rugged tracking hardware and a platform designed for live visibility, alerting, and reporting. For operators who need reliable location, ignition status, and anti-theft controls, this pairing delivers continuous oversight and straightforward integration for day to day fleet operations and incident response.

Learn more about Plaspy and how it can present WeTrack2 telemetry on centralized dashboards at https://www.plaspy.com. For the most current device level details, firmware notes, and official specifications consult the manufacturer at https://www.iconcox.com/ as implementation and firmware behavior can change over time.
