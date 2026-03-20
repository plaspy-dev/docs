---
slug: /totemtech/at07/features
id: at07-features
sidebar_label: Features
title: Totemtech - AT07 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Totemtech AT07 GPS tracker and how it works with Plaspy for reliable tracking and monitoring
keywords:
  - Totemtech AT07
  - Totemtech AT07 features
  - AT07 GPS tracker
  - Totemtech GPS tracker
  - AT07 capabilities
  - AT07 functions
  - Totemtech AT07 Plaspy
  - GPS tracker features
  - vehicle tracking AT07
  - asset tracking Totemtech
---

# Totemtech - AT07 Features

This page describes the public feature context for using the Totemtech AT07 GPS tracker with Plaspy. It summarizes the practical capabilities of the device that are relevant to Plaspy users and explains how reported data and events are typically surfaced inside the Plaspy platform. The goal is to help fleet managers, integrators, and technical evaluators understand what the AT07 provides without exposing sensitive implementation details.

Exact feature availability for any AT07 unit can vary depending on firmware version, hardware revision, how the device is installed, and manufacturer configuration choices. Where functionality depends on sensors, external wiring, or regional settings, those dependencies are called out and users are encouraged to confirm details with official Totemtech documentation.

## Feature Overview

The Totemtech AT07 is a versatile tracker designed to provide continuous position reporting, movement detection, local data storage, and remote configuration. Its combination of dual server reporting, movement sensing, and over-the-air firmware updates makes it useful for a wide range of vehicle and asset monitoring scenarios.

- Dual server reporting lets the device send data to two destinations so tracking information can be duplicated or forwarded to a management server and a backup.
- 3-axis digital accelerometer provides movement status and activity detection to support motion alerts and movement-based reporting.
- Over-the-air firmware upgrade capability reduces the need for physical access to the device for software updates.
- Wide DC power input range with over-voltage protection supports installation in many vehicle and equipment power environments.
- GPRS and SMS command support enables remote configuration and management of the device.
- Onboard flash memory lets the device store several thousand data points for temporary buffering if real-time connectivity is interrupted.

## Core Features of Totemtech - AT07

- Simultaneous data transmission to two servers for redundancy and parallel reporting.
- 3-axis digital accelerometer for movement status monitoring and movement event detection.
- Firmware upgrade via OTA to deliver updates and feature improvements remotely.
- Support for DC 9 V to 50 V power input with built-in over-voltage protection for robust vehicle installations.
- Remote command support via GPRS and SMS to adjust reporting behavior and settings.
- 16 MB flash memory capable of storing roughly 4000 recorded data points for offline buffering.
- Fuel and oil level detection capability intended for fuel monitoring workflows when a compatible sensor is installed.
- Voice monitoring function with a built-in microphone plus user-definable I/O ports that can be configured as digital input, digital output, or analog input.

## How These Features Work with Plaspy

Plaspy automatically detects many tracker protocols and presents incoming device data as locations, events, and status updates in the platform. When an AT07 is configured to report to Plaspy, typical visibility and operational benefits include location history, movement events, and buffered data reconciliation after connectivity gaps.

- Plaspy displays position updates and history sent by the tracker so you can monitor routes and recent location points.
- Movement status derived from the accelerometer can appear as activity events or be used to trigger alerts inside Plaspy.
- Offline data stored in the device flash memory can be uploaded to Plaspy when connectivity resumes, allowing reconstructed tracks.
- Fuel level messages and configured analog inputs can be represented in Plaspy as telemetry values or custom sensor readings when the device is set up accordingly.
- Remote commands supported by the tracker (sent via GPRS or SMS) are reflected in device configuration actions and can change reporting behavior shown in Plaspy.
- Plaspy detects device protocol automatically, making initial integration simpler for compatible Totemtech devices.

## Typical Use Cases

- Fleet vehicle tracking with movement-based alerts to detect unauthorized motion or starts and stops.
- Asset monitoring where redundant reporting helps ensure tracking continuity if one server path is unavailable.
- Remote equipment monitoring with local data buffering to preserve recent telemetry during temporary network outages.
- Fuel monitoring and consumption oversight when the AT07 is connected to an appropriate fuel level sensor.
- Situations requiring periodic firmware updates where OTA reduces the need for physical device access.
- Remote audio monitoring where permitted by law and enabled by device configuration and local regulations.
- Installation scenarios requiring wide input voltage tolerance and over-voltage protection for diverse vehicle types.

## Feature Availability Notes

- Feature presence and behavior can vary by firmware version and regional hardware revisions; not every unit will expose all listed functions.
- Some functions, such as fuel level detection and voice monitoring, depend on correct external sensor wiring and configuration at installation.
- Over-the-air firmware updates require compatible firmware images and may be managed by the device vendor rather than through Plaspy.
- Regulatory and privacy rules affect the legality and availability of voice monitoring in some jurisdictions; confirm local compliance before use.
- Manufacturer documentation and release notes are the authoritative source for changes to feature behavior or limits.

## Why Use Plaspy with These Features

Using the Totemtech AT07 with Plaspy provides a centralized way to view location, movement status, and telemetry coming from the device. Plaspy's device detection, event handling, and history visualization make it straightforward to incorporate AT07-reported data into daily operations, reporting, and alerting workflows. The combination of dual-server reporting and local data storage helps maintain continuity of records for operational oversight.

Learn more about how Plaspy can manage device data and provide visibility for your trackers at https://www.plaspy.com. For the most current and device specific technical details, firmware notes, and installation guidance please verify specifications on the Totemtech official site http://www.totemtek.com/ .
