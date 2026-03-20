---
slug: /topten/pg99/features
id: pg99-features
sidebar_label: Features
title: TopTen - PG99 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of TopTen PG99 GPS tracker and how its long standby and anti theft functions work with Plaspy
keywords:
  - TopTen PG99
  - TopTen PG99 features
  - TopTen PG99 GPS tracker
  - PG99 Plaspy compatibility
  - PG99 long standby
  - PG99 anti theft
  - PG99 working modes
  - PG99 A GPS LBS
  - PG99 vibration alarm
  - asset tracking PG99
---

# TopTen - PG99 Features

This page covers the public feature context for using the TopTen PG99 GPS tracker with Plaspy. It summarizes the tracker capabilities described in manufacturer materials and explains how those capabilities are commonly used and represented inside the Plaspy platform for location awareness and operational monitoring.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Where relevant this page points to practical uses and caveats, but users should consult the device documentation for device specific configuration and the latest technical details.

## Feature Overview

The TopTen PG99 is positioned as a versatile asset and anti theft tracker with multiple power and reporting modes to balance visibility and long battery life. It supports on demand and scheduled tracking, provides physical address text information when available, and includes several alarm types for security monitoring.

- Four selectable working modes to adapt reporting and power draw for different deployments
- Deep sleep extreme power save mode for multi year standby use in long standby applications
- Track on command, by time interval, or by clock for flexible reporting schedules
- Real time address information and Google Maps link support when the device supplies location text
- Multiple alarm types including vibration shock alarm, battery low alarm, and over speed alert
- A GPS aided positioning capability with LBS fallback when GPS reception is weak

## Core Features of TopTen - PG99

- Multiple working modes including a deep sleep mode designed for extreme power saving
- Track on demand, scheduled time interval tracking, and clock based tracking options
- Arm and disarm control via SMS, platform command, or phone call according to device documentation
- Real time physical address information such as city and street when provided by the device
- Location reports that include latitude, longitude, speed, direction, and odometer data
- Vibration shock alarm for tamper or movement detection and battery low level alarm
- Over speed alert for basic movement threshold notifications
- LBS fallback for position when GPS signal is weak or unavailable

## How These Features Work with Plaspy

Plaspy receives the tracking and alarm messages sent by the PG99 and presents them as location points, events, and history records for operational oversight. Plaspy automatically detects common tracker protocols and maps incoming reports into the platform interface so teams can monitor movement and alarms without manual packet handling.

- Location points plotted on Plaspy maps with historical playback where the device supplies coordinates
- Alarm events such as vibration alarm, battery low, and over speed are recorded and surfaced in event lists
- Address text and Google Maps links provided by the device are visible when the tracker includes them in reports
- Scheduled and on demand tracking reports appear in Plaspy as periodic updates and can be used to build geolocation timelines
- LBS fallback positions and GPS fixes are presented together so operators can see best available location information

## Typical Use Cases

- Long term asset tracking where extreme standby life and periodic location checks are required
- Anti theft monitoring for equipment and vehicles using vibration alarm and remote arming features
- Remote assets in locations with intermittent GPS reception relying on LBS fallback for approximate positioning
- Periodic location verification by fleet managers using scheduled or clock based reporting
- Situations that require physical address information for rapid identification of locations

## Feature Availability Notes

- Feature availability can depend on device firmware and hardware revision; some behaviors may change between releases
- Installation choices and physical placement affect GPS reception and the usefulness of address text reporting
- Regional variants or mobile network differences can influence LBS behavior and SMS based control
- Manufacturer configuration options and default settings may need to be adjusted for optimal Plaspy use
- Review the device firmware changelog and settings to confirm which tracking modes and alarms are active

## Why Use Plaspy with These Features

Using the TopTen PG99 with Plaspy provides a practical way to turn the device's tracking and alarm capabilities into operational insights. Plaspy consolidates incoming location reports and event notifications so teams can view live positions, review history, and respond to alarms from a single platform. The combination of multiple working modes and extreme power save options makes the PG99 suitable for assets that need long standby life while still providing actionable location updates when required.

To learn more about Plaspy and how it can integrate with devices like the TopTen PG99 visit https://www.plaspy.com. For the most current device specifications, firmware details, and manufacturer guidance verify information on the official TopTen site http://www.t10.cn. Device features and firmware behavior can change over time so consult manufacturer documentation for the latest, device specific details.
