---
slug: /autofon/se/features
id: se-features
sidebar_label: Features
title: AutoFon - SE+ Маяк Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of AutoFon SE+ Маяк GPS tracker and how its capabilities work with Plaspy for location reporting and monitoring
keywords:
  - AutoFon SE+ Маяк features
  - AutoFon GPS tracker
  - SE+ Mayak capabilities
  - AutoFon Plaspy compatibility
  - GLONASS GPS tracker
  - GPRS location reporting
  - SOS micro button
  - built in microphone
  - movement and impact detection
  - black box data storage
---

# AutoFon - SE+ Маяк Features

This page provides a public feature overview for the AutoFon SE+ Маяк GPS tracker and explains how its documented capabilities map to monitoring and reporting when used with Plaspy. It focuses on observable, user-facing functions and practical uses rather than low level or private configuration details.

Exact feature availability can vary by firmware version, hardware revision, installation method, regional variant, and how the manufacturer implements functionality. For device-specific commands, firmware notes, and the latest technical details please consult the official AutoFon documentation.

## Feature Overview

The AutoFon SE+ Маяк is a compact tracker designed to determine and transmit location using GLONASS+GPS and to report either via SMS or GPRS to a selected monitoring server. Its small form factor and extended feature set make it suitable for a range of mobile and stationary tracking scenarios.

- Combined GLONASS and GPS navigation for improved location determination and positioning reliability.
- Dual reporting options: send coordinates by SMS to an owner or transmit via GPRS to a monitoring server.
- Built‑in microphone for remote audio monitoring of the device location subject to local laws and permissions.
- Movement, impact, and accident detection with adjustable sensitivity and reactivation intervals for event-driven reporting.
- SOS micro‑button to send an emergency signal and coordinate information.
- Onboard black box capable of storing a large number of GPRS packets for offline buffering and later upload.

## Core Features of AutoFon - SE+ Маяк

- GLONASS plus GPS navigation module for more accurate position fixes in a variety of conditions.
- GPRS reporting to a selected monitoring server or SMS reporting to designated phone numbers.
- Movement and impact sensors with configurable sensitivity and reactivation timing.
- Digital accelerometer based detection used for movement and impact event generation.
- Built‑in microphone for remote listening to the installation environment.
- SOS micro‑button for manual emergency alerts.
- Black box storage able to retain many GPRS packets when connectivity is interrupted.
- Support for remote firmware updates via GPRS to keep device behavior current.

## How These Features Work with Plaspy

Plaspy receives GPRS location and event reports from compatible devices and exposes location, status, and events in the platform for monitoring and operational use. When using AutoFon SE+ Маяк with Plaspy, GPRS reports can be directed to the Plaspy monitoring server and will be processed for display and event handling.

- GPRS location updates from the device are received by Plaspy and appear as position updates on maps and timelines.
- Movement, impact, accident, and SOS events reported by the device are presented as events in Plaspy for operator awareness and follow up.
- Black box packet uploads are useful for restoring missed telemetry after temporary connectivity loss and are processed by Plaspy when transmitted.
- Remote firmware update support over GPRS enables device maintenance workflows while the device is managed through Plaspy infrastructure.
- Plaspy automatically detects supported tracker protocols and accepts device reports sent to the Plaspy monitoring endpoint, allowing streamlined onboarding.

Note: The AutoFon SE+ Маяк can also send SMS messages directly to owners; SMS messages are separate from GPRS server reporting and are used for direct notifications or quick setup in many installations.

## Typical Use Cases

- Fleet and asset tracking for cars, motorcycles, and small vehicles where discreet installation is required.
- Tracking valuable cargo or equipment in transit with periodic position reporting and impact detection.
- Remote object protection for garages, cottages, kiosks, and other stationary assets.
- Personal tracking for people, children, or animals where compact size and SOS are important.
- Incident investigation or playback using stored black box packets to reconstruct routes after connectivity outages.
- Remote audio monitoring where permitted, for situational awareness at a guarded location.

## Feature Availability Notes

- Manufacturer firmware versions may enable, alter, or disable certain features; confirm supported commands and behaviors for your device firmware.
- Hardware revisions and optional expansion modules can change available interfaces or external control channels.
- Installation type and wiring affect which device functions are available or how sensors behave in practice.
- Regional or carrier differences may affect GPRS behavior, data plans, and SMS delivery.
- Always consult the official AutoFon documentation for device-specific limitations, wiring diagrams, and supported firmware updates.

## Why Use Plaspy with These Features

Using Plaspy with the AutoFon SE+ Маяк centralizes location reporting, event visibility, and device management across a fleet or set of monitored assets. Plaspy turns GPRS reports, stored black box packets, and event signals from the device into actionable information available on maps, timelines, and reporting tools for operators and managers.

If you want to explore how Plaspy can integrate with AutoFon devices and support remote monitoring and event handling, learn more about Plaspy at https://www.plaspy.com. For the most current and authoritative device specifications, firmware notes, and manufacturer guidance please verify details on the official AutoFon website https://www.autofon.ru/.
