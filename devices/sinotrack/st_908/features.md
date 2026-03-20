---
slug: /sinotrack/st_908/features
id: st_908-features
sidebar_label: Features
title: SinoTrack - ST-908 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the SinoTrack ST-908 GPS tracker and how it integrates with Plaspy for vehicle monitoring
keywords:
  - SinoTrack ST-908 features
  - SinoTrack ST-908 GPS tracker
  - ST-908 features
  - SinoTrack tracker Plaspy
  - GPS tracker vehicle tracking
  - real time location tracking
  - SOS alarm tracking
  - GPS positioning accuracy
  - SMS GPRS tracking
  - ST-908 camera connectivity
---

# SinoTrack - ST-908 Features

This page describes the public feature context for the SinoTrack ST-908 and how those features are typically used with Plaspy for vehicle tracking and monitoring. It summarizes capabilities that are relevant to Plaspy users and explains practical value without exposing device internals.

Exact availability and behavior of individual functions can vary by firmware version, hardware revision, installation method, and the manufacturer's configuration choices. Where appropriate this page notes variability and encourages verification against official manufacturer documentation.

## Feature Overview

The ST-908 is a compact, vehicle-oriented GPS tracker designed for continuous positioning and remote monitoring. It combines Sirf IV GPS positioning with SMS and GPRS reporting and includes inputs and outputs for common vehicle sensors and alerts.

- 24-hour satellite positioning with Sirf IV and position accuracy around 10 m CEP for reliable location tracking.
- Real-time tracking via GPRS and SMS location reporting for live visibility and fallback messaging.
- Built-in alarms such as over-speed alarm, SOS button, and main power on/off alarm to surface critical events.
- Multiple vehicle inputs including ACC, door sensor, shock sensor, and fuel sensor plus remote control of fuel and electricity.
- Break point storage for recording positions when GSM is unavailable and camera connectivity for taking photos.

## Core Features of SinoTrack - ST-908

- Sirf IV GPS module with stated position accuracy of approximately 10 m CEP.
- Continuous satellite positioning for around-the-clock location updates.
- SMS and GPRS reporting for location and event transmission to platforms and mobile devices.
- User-configurable alarms: over-speed, SOS, and main power on/off alarms.
- Multiple wired inputs for ACC, door, shock, and fuel sensors to monitor vehicle status.
- Remote control capability for fuel and electrical circuits as provided by the manufacturer.
- Break point storage to retain location records during GSM outages for later upload.

## How These Features Work with Plaspy

Plaspy receives and displays the ST-908's location and event reports to provide live tracking, history, and alerting. Plaspy's device detection and platform features make it straightforward to add the ST-908 and start monitoring location, alarms, and input states.

- Real-time vehicle location and historical tracks are visible in Plaspy when the ST-908 reports via GPRS.
- Alarm events such as SOS presses, over-speed alerts, and main power changes are surfaced as notifications and events in Plaspy.
- Discrete input state changes (ACC, door, shock, fuel sensor) are recorded as events to support operational monitoring.
- Break point storage behavior allows locations captured offline to appear in Plaspy once the device reconnects and uploads stored data.
- Plaspy automatically detects many tracker protocols, simplifying setup for supported SinoTrack devices and reducing manual configuration.

## Typical Use Cases

- Fleet location monitoring and route history for cars, trucks, and motorcycles.
- Rapid alerting for SOS and over-speed events to support driver safety and incident response.
- Remote visibility of vehicle power and door status for security or operational checks.
- Use of remote fuel or electrical control for theft response and recovery procedures where configured by the installer.
- Data continuity in areas with intermittent GSM coverage using break point storage and later upload.
- Periodic photo capture when camera connectivity is installed to document vehicle condition or surroundings.

## Feature Availability Notes

- Manufacturer firmware and hardware revisions may enable or disable specific functions; verify the exact feature set for your unit.
- Some features such as camera connectivity or microphone functions may require additional accessories or model variants.
- Remote control of fuel and electricity is a manufacturer-provided capability; installation method and wiring determine how it is used in practice.
- Break point storage relies on the device storing positions locally and uploading them when GSM is available; behavior depends on firmware.
- Certain monitoring features and preconfigured alarms may be adjusted via SMS commands or platform commands depending on the device firmware.

## Why Use Plaspy with These Features

Using the SinoTrack ST-908 with Plaspy gives organizations a practical way to unify location, event, and input data into a single monitoring platform. Plaspy presents live locations and historical trails, captures alarm and input events, and helps teams maintain operational oversight across vehicles and installations.

To learn more about Plaspy and how the ST-908 can be configured for your operations, visit https://www.plaspy.com. For the latest device specifications, firmware notes, and manufacturer details, verify current information at https://www.sinotrackgps.com/ as device features and firmware behavior may change over time.
