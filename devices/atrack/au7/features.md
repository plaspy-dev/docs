---
slug: /atrack/au7/features
id: au7-features
sidebar_label: Features
title: ATrack - AU7 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the ATrack AU7 tracker and how it can be used with Plaspy for vehicle tracking and fleet visibility
keywords:
  - ATrack AU7 features
  - AU7 GPS tracker
  - ATrack AU7 Plaspy
  - AU7 vehicle tracking
  - AU7 GPS GLONASS tracker
  - AU7 fleet tracking
  - AU7 geo fence support
  - AU7 FOTA firmware
  - AU7 1-Wire accessories
  - AU7 AES encryption
---

# ATrack - AU7 Features

This page provides a public, feature-focused overview of the ATrack AU7 and how its capabilities map to use with Plaspy. It is intended to describe the tracker features and practical functions that are relevant for Plaspy users, and to help teams understand how the device can be used for vehicle tracking and operational monitoring through the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional model, installation type, and specific manufacturer configuration. For device-specific commands, firmware notes, and the latest technical details consult the official ATrack documentation and firmware release notes.

## Feature Overview

The ATrack AU7 is a GPS/GLONASS vehicle tracker built for flexible connectivity and a range of accessory options. It combines multiple reporting and communication methods with configurable event detection and external sensor support, making it suitable for both basic position tracking and more advanced vehicle monitoring setups.

- Multi GNSS positioning with support for GPS and GLONASS for reliable location awareness.
- Multiple mobile network technologies supported to enable data reporting and remote communication.
- Configurable reporting and event logic to tailor data transmission and reduce communication cost.
- Support for external accessories and interfaces such as RS-232, CAN Bus interpreter, and 1-Wire devices for expanded telemetry and identification.
- Built-in motion and driving behavior detection with a 3-axis G-sensor and configurable event controls for harsh driving detection.

## Core Features of ATrack - AU7

- GPS and GLONASS satellite positioning for accurate location tracking.
- Cellular data communication options including CDMA, UMTS, and HSPA technologies.
- Flexible reporting modes and a custom reporting mechanism to define reporting intervals and triggers.
- External interfaces including RS-232, CAN Bus interpreter, and 1-Wire support for accessories like Dallas Key and temperature sensors.
- AES-128 encryption for securing transmitted data.
- Built-in 3-axis G-sensor and vehicle speed sensor (VSS) support for event detection and driving behavior monitoring.
- Geo-fence support for up to 64 user-defined zones with circular, rectangular, and polygonal shapes.
- Firmware upgrade over the air using FOTA via FTP and roaming preference settings.

## How These Features Work with Plaspy

Plaspy can receive and interpret the AU7’s reports to provide live location, event history, and operational visibility. The AU7’s configurable reporting and accessory support allow teams to surface the data they need inside Plaspy for monitoring and decision making.

- Position updates and history recorded in Plaspy for route playback and location timelines.
- Event notifications from G-sensor triggers, harsh driving detection, VSS events, and geo-fence transitions visible within Plaspy dashboards.
- Accessory and external input data such as 1-Wire driver identification and supported sensor inputs can be reflected as device attributes or events when reported by the device.
- Secure transmissions from the AU7 using AES-128 help maintain data privacy while reporting into Plaspy.
- Plaspy auto-detects many tracker protocols and accepts TCP or UDP reporting, enabling straightforward integration of AU7 devices into the platform.
- Use of Plaspy server addressing and unified port configuration simplifies device onboarding and centralizes incoming device data for operational use.

## Typical Use Cases

- Fleet location tracking and route history for daily operations and dispatching.
- Driver identification and basic access control using 1-Wire Dallas Key integration.
- Monitoring harsh driving events and motion-related alerts to support safety programs.
- Zone-based monitoring with multiple geo-fences for site entry and exit reporting.
- Remote device management and firmware updates using FOTA to maintain devices in the field.
- Integration of accessory data such as temperature sensors for applications that need environmental monitoring reported alongside location.

## Feature Availability Notes

- Feature availability may depend on the AU7 firmware version and the specific hardware revision in use.
- Some accessory functions require appropriate wiring, installation, and accessory models that are compatible with the AU7.
- Regional cellular band support and roaming behavior are determined by the device variant and SIM/network configuration.
- Certain advanced features and integrations such as CAN Bus interpreter, voice support, and wire-tap depend on manufacturer firmware options and local regulations.
- Always confirm the exact capabilities of a specific AU7 unit by reviewing the manufacturer’s device documentation and changelogs.

## Why Use Plaspy with These Features

Using the ATrack AU7 with Plaspy gives organizations a way to collect configurable, event-driven tracking data and display it in a single operational view. Plaspy helps turn reported positions, geo-fence events, motion alerts, and accessory inputs into actionable insights for fleet management, safety monitoring, and operational planning.

If you want to learn more about how Plaspy can work with the ATrack AU7 and other compatible devices, visit https://www.plaspy.com. For the most current device specifications, firmware details, and official technical documentation consult the manufacturer at https://www.atrack.com.tw/.
