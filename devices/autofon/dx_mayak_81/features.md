---
slug: /autofon/dx_mayak_81/features
id: dx_mayak_81-features
sidebar_label: Features
title: AutoFon - DX Mayak 8.1 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for AutoFon DX Mayak 8.1 GPS tracker and integration notes for use with Plaspy
keywords:
  - AutoFon DX Mayak 8.1 features
  - DX Mayak 8.1 GPS tracker
  - AutoFon tracker Plaspy compatibility
  - GLONASS GPS tracker
  - battery powered asset tracker
  - BLE presence locating
  - long battery life GPS tracker
  - GPRS SMS fallback tracker
  - vehicle anti theft tracker
  - IP67 rugged GPS tracker
---

# AutoFon - DX Mayak 8.1 Features

This page provides a public, feature-focused overview of the AutoFon DX Mayak 8.1 and explains how its capabilities map to Plaspy for tracking, telemetry, and alerting. It summarizes the device functions that are relevant to Plaspy users and highlights practical value for monitoring vehicles, cargo, and portable assets.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and installation method. The summary below uses the manufacturer description as its basis; verify device-specific options and limits with the manufacturer documentation when planning deployments.

## Feature Overview

The DX Mayak 8.1 is a compact, battery-powered tracker built for discreet anti-theft protection and long-term asset monitoring. It combines dual GNSS positioning, low-power interval tracking, event-driven alerts and BLE presence capabilities to balance long battery life with actionable telemetry.

- Compact, battery-powered design for concealed installation and multi-year standby operation.
- Dual GNSS positioning (GLONASS + GPS) with AGPS assistance for reliable location fixes.
- Low-power interval tracking and sleep modes to extend battery life for long deployments.
- Event-driven alerts for movement, crash and SOS to trigger immediate notification workflows.
- Rich telemetry with each report including battery level, temperature, satellite count and GSM signal.
- BLE presence and close-range locating to assist owners with nearby device discovery.

## Core Features of AutoFon - DX Mayak 8.1

- Plaspy compatibility for out of the box reporting to monitoring servers using standard GPRS messaging and SMS fallback.
- Dual GNSS receiver combining GLONASS and GPS with AGPS and logical position correction for improved fixes.
- Low-power design using replaceable cells and configurable interval tracking for extended operational life.
- Accelerometer-based motion, tilt and crash detection plus an internal SOS button for immediate alarms.
- BLE Low Energy module for owner presence tagging and smartphone-assisted close-range locating.
- Non-volatile packet storage with large buffer capacity to retain unsent messages and retransmit when connectivity returns.
- IP54 and IP67 enclosure options for durability in concealed or exposed installations.
- Micro-USB configuration and options for server-side updates and local configuration tools.

## How These Features Work with Plaspy

When integrated with Plaspy, the DX Mayak 8.1 reports location, telemetry and events into Plaspy dashboards and notification systems so operators can monitor asset status and respond to incidents. Plaspy automatically detects the tracker protocol and accepts reports to the Plaspy monitoring endpoint, simplifying initial setup.

- Real-time position updates and periodic interval reports appear on Plaspy maps for continuous location awareness.
- Movement, tilt, crash and SOS events generate alert records and can trigger notifications, escalation rules or workflows inside Plaspy.
- Telemetry fields like battery level, internal temperature, satellite count and GSM signal provide operational context on device health in Plaspy.
- Stored-packet retransmission preserves historical events and ensures Plaspy receives queued messages after network restoration.
- The device supports primary GPRS reporting with SMS fallback for redundancy, which Plaspy surfaces as event and status indicators.

## Typical Use Cases

- Discreet vehicle anti-theft protection with instant movement and SOS alerts reported to Plaspy.
- Long-term asset monitoring for trailers, equipment and containers where multi-year battery life is required.
- Recovery and close-range locating using BLE assistance and smartphone tagging when an asset is nearby.
- Fleet oversight for light vehicles and support equipment that need periodic position and telemetry reporting.
- Personal or vulnerable-person supervision where compact, low-profile tracking and emergency alerts are important.

## Feature Availability Notes

- Firmware and regional hardware variants may enable or disable specific functions such as reporting intervals, BLE features or telemetry fields.
- Some telemetry items and event thresholds are configurable; actual values depend on installed firmware and configuration settings.
- Installation method and mounting location affect GNSS reception and BLE range; subterranean or shielded placements may reduce satellite or BLE performance.
- SMS fallback and GPRS behavior depend on local GSM network availability and SIM provisioning.
- Manufacturer documentation is the authoritative source for exact measurements, battery life estimates and hardware revisions.

## Why Use Plaspy with These Features

Pairing the DX Mayak 8.1 with Plaspy gives organizations a practical way to turn the device's compact, low-power tracking into operational visibility. Plaspy consolidates position streams, telemetry and alarm events into maps, reports and notification workflows so teams can monitor device health, investigate incidents, and run recovery procedures from a single monitoring platform.

To learn more about how Plaspy works with compatible trackers visit https://www.plaspy.com. For the most current and detailed device specifications, firmware notes and manufacturer guidance, check the official AutoFon documentation at https://www.autofon.ru/ as device features and firmware behavior can change over time.
