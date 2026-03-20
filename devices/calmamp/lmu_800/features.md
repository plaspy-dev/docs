---
slug: /calmamp/lmu_800/features
id: lmu_800-features
sidebar_label: Features
title: CalmAmp - LMU-800 Features
sidebar_class_name: menu_item_tracker
description: Overview of CalmAmp LMU-800 GPS tracker features and how it works with Plaspy for vehicle tracking
keywords:
  - CalmAmp LMU-800
  - LMU-800 features
  - CalmAmp LMU-800 GPS tracker
  - vehicle tracking
  - backup battery tracker
  - PEG programmable events
  - PULS firmware updates
  - Plaspy compatible trackers
  - fleet management
  - stolen vehicle recovery
---

# CalmAmp - LMU-800 Features

This page provides public feature context for using the CalmAmp LMU-800 tracker with Plaspy. It summarizes the LMU-800 capability set that is relevant for Plaspy users, explains how the device's capabilities translate into operational value inside Plaspy, and highlights practical considerations for deployment and monitoring.

Exact feature availability and behaviour can vary by firmware version, hardware revision, installation type, and manufacturer implementation. The LMU-800 is described as a compact vehicle tracker with superior GPS performance, an internal 200 mAh backup battery, ultra-low power sleep modes, a 3-axis accelerometer, the PEG programmable event engine, and PULS for over the air device management. Users should treat this page as a feature overview and consult manufacturer documentation for device specific details.

## Feature Overview

The LMU-800 is positioned as a small form factor vehicle tracker optimized for reliable tracking in automotive installations. It combines continuous location reporting with motion sensing and a backup power source to maintain visibility when external power is removed.

- Compact, easy to install unit suitable for 12 or 24 volt vehicle electrical systems
- Superior GPS performance for consistent location accuracy and tracking
- Internal 200 mAh backup battery to maintain reports during external power loss
- Ultra low power sleep modes to extend operational availability when parked
- 3-axis accelerometer for motion detection and event generation
- PEG programmable event generator and PULS management for flexible customisation and remote updates

## Core Features of CalmAmp - LMU-800

- Internal 200 mAh backup battery that supports continued tracking during power interruptions
- Ultra low power sleep modes to reduce current draw when the vehicle is stationary
- 3-axis accelerometer used for motion sensing and movement based events
- PEG programmable event generator for defining exception rules based on motion, location, time, and inputs
- PULS programming and updates system enabling over the air configuration and firmware updates
- Compact form factor designed for straightforward installation in automobiles
- Designed for compatibility with both 12 volt and 24 volt vehicle systems

## How These Features Work with Plaspy

Plaspy receives and displays the telemetry and events that the LMU-800 reports. In practice, the LMU-800’s telemetry and alerts are visible inside Plaspy as location updates, motion events, power status indicators, and custom event types defined by the device.

- Location reports feed into Plaspy maps and history for position tracking and route reconstruction
- Motion events from the 3-axis accelerometer appear as movement or activity indicators inside Plaspy
- Backup battery activity and power loss reports help Plaspy maintain continuity of tracking when external power is removed
- PEG generated exception alerts can be reflected in Plaspy as device events or notifications when the device reports those conditions
- PULS based firmware and configuration changes occur via the manufacturer system while Plaspy continues to display device connectivity and reported status
- Plaspy automatically detects the tracker protocol and accepts standard device reports so setup is typically straightforward

## Typical Use Cases

- Stolen vehicle recovery and post-theft location visibility using continuous reporting and backup battery support
- Vehicle finance and asset monitoring where persistent tracking during power tampering is required
- Auto rental and fleet management to track vehicle location, motion, and service intervals
- Small commercial fleets seeking a compact tracker with motion sensing and programmable alerts
- Applications that need low power parked monitoring and reliable start-up tracking when vehicle power is restored

## Feature Availability Notes

- Firmware versions can change behaviour for event generation, power management, and reporting intervals
- Hardware revisions and production variants may affect battery capacity, accelerometer behaviour, or available inputs
- Installation type and wiring influence power loss detection and the effectiveness of motion sensing
- PEG rule availability and the exact set of programmable conditions depend on the device firmware and CalAmp configuration
- PULS based programming and updates are provided through the manufacturer solution and may require device provisioning

## Why Use Plaspy with These Features

Using Plaspy with the CalmAmp LMU-800 centralises tracking data and event visibility so organisations can monitor location, motion, and power status from a single platform. Plaspy presents location history, event timelines, and alerting based on the LMU-800’s reported telemetry, helping operations teams maintain oversight across vehicles and react to exceptions reported by the device.

If you want to learn more about Plaspy and how it works with compatible trackers like the CalmAmp LMU-800 visit https://www.plaspy.com. For the most current device specific feature descriptions, firmware behaviour, and manufacturer implementation details please verify the latest information at http://www.calamp.com/
