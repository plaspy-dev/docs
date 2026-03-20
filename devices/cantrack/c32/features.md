---
slug: /cantrack/c32/features
id: c32-features
sidebar_label: Features
title: CanTrack - C32 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the CanTrack C32 GPS tracker and how its functions integrate with Plaspy for vehicle monitoring and remote control
keywords:
  - CanTrack C32
  - CanTrack C32 features
  - CanTrack C32 GPS tracker
  - C32 GPS tracker
  - CanTrack C32 Plaspy
  - vehicle GPS tracker C32
  - motorcycle tracker C32
  - E bike tracker C32
  - C32 real time tracking
  - C32 OTA updates
---

# CanTrack - C32 Features

This page provides a public features overview for the CanTrack C32 and how its capabilities map to Plaspy for fleet and vehicle monitoring. It focuses on non-sensitive, user-facing functionality and explains what to expect when using the C32 with Plaspy for location awareness, alarms, and remote operations.

Exact feature availability can vary by device firmware, hardware revision, installation method, and manufacturer implementation. Use this page as a general guide and consult the manufacturer documentation for device specific behavior and configuration details.

## Feature Overview

The CanTrack C32 is a compact tracker designed for cars, motorcycles, scooters, and E-bikes. It emphasizes wide voltage tolerance and practical tracking features for vehicle monitoring and fleet use, with remote update capabilities for maintenance.

- Real time location reporting for continuous vehicle visibility
- Wide input voltage support suitable for cars motorcycles and E bikes
- Remote engine control options including cut and resume functions where enabled
- Alarms and status reporting such as power removal ignition and vibration events
- Over the air remote firmware updates for easier maintenance
- Local data buffering so position and event data can be stored if coverage is interrupted

## Core Features of CanTrack - C32

- Compatibility with a wide voltage range allowing use across multiple vehicle types
- Real time GPS tracking for live position updates
- Remote cut fuel or resume fuel capability as an optional control feature
- Power removal detection plus ignition and vibrate alarm reporting
- Angle upload location support for reporting orientation related events
- Onboard data memory for temporary storage of position and event records
- Support for remote firmware upgrades using OTA methods
- External voltage monitoring for detecting supply status

## How These Features Work with Plaspy

Plaspy receives and interprets the C32's reported positions and events so fleet managers and vehicle owners can monitor status on a map and receive alerts. Plaspy is designed to detect the tracker protocol automatically and accept common TCP or UDP transport methods, which simplifies initial setup.

- Live position updates appear on Plaspy maps for continuous tracking
- Device alarms such as power removal ignition and vibration are surfaced as events in the Plaspy interface
- Historical position and buffered records from the C32 are available for playback and incident review
- Where remote control is enabled by the device and installation, Plaspy can expose engine cut or resume controls to authorized users
- OTA capability on the device simplifies firmware distribution and Plaspy can report device connectivity that supports remote maintenance workflows

## Typical Use Cases

- Fleet vehicle tracking for position visibility and route monitoring
- Motorcycle and scooter tracking for theft deterrence and recovery
- E bike monitoring for location awareness and basic status reporting
- Remote immobilization or recovery workflows when optional cut features are deployed
- Maintenance programs that rely on OTA updates and remote device oversight
- Situational awareness where power removal and vibration alarms indicate tampering

## Feature Availability Notes

- Some features may be optional or require specific hardware revisions or accessory wiring during installation
- Firmware level can affect how features behave for alarms remote control and data buffering
- Regional device variants and local regulations may change available functions or operational modes
- Manufacturer configuration and installation choices determine whether remote control functions are enabled
- Always check the device serial specific documentation for precise behavior and supported commands

## Why Use Plaspy with These Features

Using the CanTrack C32 with Plaspy gives organizations consolidated visibility and event tracking across mixed vehicle fleets. Plaspy aggregates location updates and device events so operators can monitor activity, respond to alarms, and manage remote control actions when they are permitted by the device and installation.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device feature details firmware behavior and manufacturer guidance at https://www.cantrackgps.com/ to ensure your deployment matches current specifications.
