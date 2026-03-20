---
slug: /globalsat/gtr_388/features
id: gtr_388-features
sidebar_label: Features
title: GlobalSat - GTR-388 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the GlobalSat GTR 388 tracker and how it works with Plaspy for vehicle and eBike tracking
keywords:
  - GlobalSat GTR-388
  - GTR 388 features
  - GlobalSat GPS tracker
  - GTR-388 GPS tracker features
  - GTR-388 Plaspy compatibility
  - eBike GPS tracker
  - motorcycle tracker GlobalSat
  - LTE GPS tracker
  - AGPS motion sensor
  - waterproof GPS tracker
---

# GlobalSat - GTR-388 Features

This page provides a public feature overview for the GlobalSat GTR-388 series (including the GTR-388C1 variant) and explains how those features are used when the tracker is connected to Plaspy. It is written to help fleet managers, eBike and motorcycle owners, and technical integrators understand the practical capabilities of the device and what to expect when operating the tracker with Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional model variant, and the specifics of an installation. Where practical, this page describes the general capabilities present in the GTR-388 series; consult the manufacturer for device specific implementation details and the installed firmware for final behavior.

## Feature Overview

The GlobalSat GTR-388C1 is a compact, weather resistant GPS tracker designed for motorcycles, eBikes, scooters, and small vehicles. It emphasizes reliable cellular connectivity across multiple network generations, precise location reception, and flexible I/O for simple telemetry or event reporting.

- Multi generation cellular support with Cat 1 LTE plus fallback to 3G and 2G for broader coverage.
- High sensitivity GPS reception and AGPS assistance for faster and more reliable position fixes.
- Built in motion sensor to detect movement and support motion based reporting.
- Multiple I O points including digital inputs, an analog input, and a digital output for external control.
- Compact, waterproof IPX7 enclosure and waterproof connector for exposed vehicle installations.

## Core Features of GlobalSat - GTR-388

- Cat 1 LTE connectivity with fallback to 3G and 2G networks for resilient reporting.
- Dual band UMTS HSDPA WCDMA and dual band GSM GPRS EDGE support as described by the manufacturer.
- High sensitivity GPS receiver with AGPS support for improved fix performance.
- Built in motion sensor for motion detection and motion triggered events.
- Multiple I O ports: digital inputs (including an input for an optional emergency button), an analog input, and a digital output for relay control.
- Support for common communication methods including SMS, TCP, UDP, and HTTP for flexible integration.
- Over the air firmware update capability to simplify field firmware maintenance.
- Compact footprint with weatherproof IPX7 design and waterproof cable connector for rugged installations.

## How These Features Work with Plaspy

Plaspy receives and interprets the tracker’s publicly reported data so users can monitor and manage devices from the Plaspy platform. The GTR-388’s multi network support and standard communication methods help maintain reporting continuity across varied coverage areas and installations.

- Location data from the GTR-388 appears in Plaspy as live positions and historical tracks, based on the device’s reporting schedule.
- Motion sensor activity can be surfaced as movement events or used to control power state visibility inside Plaspy.
- Digital and analog I O events report into Plaspy so state changes and simple external signals can be monitored.
- Network fallback behavior helps keep a device visible in Plaspy when primary networks are unavailable.
- OTA firmware capability reduces the need for physical access; Plaspy can reflect device online status and typical telemetry that indicates whether a device is reporting normally.
- The device’s support for common transport methods makes initial integration straightforward and allows Plaspy to automatically detect and handle compatible trackers.

## Typical Use Cases

- Real time location tracking for motorcycles, eBikes, and scooters.
- Theft deterrence and recovery workflows using movement detection and location history.
- Basic fleet visibility for small vehicle fleets and delivery riders.
- Remote monitoring of vehicle presence and simple I O events for auxiliary equipment.
- Easy installation projects where a compact, waterproof tracker is required.

## Feature Availability Notes

- Certain features and behaviors depend on the device firmware version and the hardware revision in the specific unit.
- Regional cellular band support and 2G/3G network availability vary by country and operator; fallback behavior depends on local networks.
- I O pin functions can be configured differently by installers; available I O wiring and usage may vary with kit or region.
- Over the air firmware update availability depends on the device configuration and manufacturer support for a given firmware release.
- Always verify installed firmware capabilities and configuration after physical installation to confirm expected behavior.

## Why Use Plaspy with These Features

Using Plaspy together with the GlobalSat GTR-388 gives organizations a practical way to convert the device’s core telemetry into operational awareness. Plaspy surfaces location, motion, and I O state in a single interface so teams can monitor vehicle activity, review historical movement, and react to simple events without managing low level device communications.

If you want to learn more about Plaspy and how it supports trackers like the GlobalSat GTR-388, visit https://www.plaspy.com. For the most current device specific specifications and firmware information, please verify details with the manufacturer at https://www.globalsat.com.tw/ since device features and firmware behavior can change over time.
