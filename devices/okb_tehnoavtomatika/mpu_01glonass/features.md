---
slug: /okb_tehnoavtomatika/mpu_01glonass/features
id: mpu_01glonass-features
sidebar_label: Features
title: OKB Tehnoavtomatika - MPU-01GLONASS Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the OKB Tehnoavtomatika MPU 01GLONASS tracker and how it integrates with Plaspy for location and SMS aware tracking
keywords:
  - OKB Tehnoavtomatika MPU-01GLONASS
  - MPU-01GLONASS features
  - MPU 01 GLONASS tracker
  - GLONASS GPS tracker
  - GSM SMS tracking
  - Plaspy compatible trackers
  - vehicle tracking MPU-01GLONASS
  - asset tracking GLONASS
  - compact GPS tracker
  - tracker input output configuration
---

# OKB Tehnoavtomatika - MPU-01GLONASS Features

This page provides a public feature overview for the OKB Tehnoavtomatika MPU-01GLONASS tracker and explains how its capabilities relate to use with the Plaspy platform. It is intended to help technical buyers, integrators, and Plaspy users understand the device's practical functions and how those functions appear when the device reports into Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer configuration choices. Use this page as a general guide and verify device specific details and current firmware behavior on the manufacturer site when planning deployments.

## Feature Overview

The MPU-01GLONASS is a compact GLONASS/GPS tracking device designed for straightforward location reporting and basic input/output integration. It combines multi-constellation positioning with GSM message handling and configurable IO options to support a range of vehicle and asset tracking scenarios.

- Compact size and lightweight form factor at 90 × 50 × 16 mm and under 200 grams for flexible installation
- 24 channel GLONASS/GPS receiver NV08C-CSM for reliable position fixes in varied environments
- GSM 900 and 1800 band support for cellular communication and SMS message reception
- Ability to handover SMS messages to support simple remote interaction with the tracker
- Configurable IO options that allow different combinations of digital and analog inputs and at least one output for basic sensor or device integration

## Core Features of OKB Tehnoavtomatika - MPU-01GLONASS

- 24 channel GLONASS and GPS receiver NV08C-CSM for multi constellation positioning
- Compact mechanical dimensions suited to covert or space constrained installations
- Lightweight construction under 200 grams for portable asset installations
- GSM 900/1800 support enabling cellular connectivity and SMS message handling
- SMS reception and handover capability for simple remote commands or status messages
- Flexible configuration variants with supported combinations of digital inputs, analog input, and a digital output
- Designed for straightforward installation and integration into tracking setups

## How These Features Work with Plaspy

When the MPU-01GLONASS is used with Plaspy, its positioning and messaging capabilities become part of the platform's visibility and monitoring tools. Plaspy automatically detects supported tracker protocols and can receive the device's reports to display position and basic event information on maps and dashboards.

- Position fixes from the device appear in Plaspy as GNSS location updates shown on the map
- SMS capable devices can provide a secondary communication channel; message-based alerts or status messages may be captured depending on setup
- Flexible IO configurations allow simple external sensors or switches to be represented as events or digital inputs in Plaspy
- Compact and portable form factor enables rapid deployment of assets that Plaspy can track without complex installations
- Plaspy accepts common tracker connections and will auto detect protocol details so the MPU-01GLONASS can be configured to report to Plaspy endpoints such as d.plaspy.com using TCP or UDP as supported by the device

## Typical Use Cases

- Vehicle fleet tracking where compact installation and GNSS accuracy are needed
- Portable asset tracking for equipment that benefits from a lightweight tracker
- Remote monitoring scenarios that use SMS as a supplementary communication channel
- Simple telemetry or status monitoring using the device IO options for digital or analog inputs
- Situations that require multi constellation GNSS reception for improved position availability
- Installations where small footprint and ease of installation reduce deployment time

## Feature Availability Notes

- Firmware differences may enable or restrict particular functions such as SMS handover behavior or IO mappings
- Hardware revisions and regional variants can affect supported GSM bands, connector types, or available IO combinations
- Configuration options may vary depending on the factory or integrator settings used during installation
- SMS and cellular functions depend on local mobile network coverage and operator support in the deployment region
- Always confirm the exact IO configuration and supported modes for your unit before installation

## Why Use Plaspy with These Features

Using the MPU-01GLONASS with Plaspy provides a straightforward path to incorporate compact GLONASS and GPS tracking into a centralized monitoring workflow. Plaspy's platform capabilities for mapping, event visibility, and device management make it simpler to turn the MPU-01GLONASS position reports and IO events into operational insight for fleet managers and asset custodians.

Learn more about Plaspy on the main website https://www.plaspy.com and verify current device features and firmware behavior with the manufacturer at http://www.okb-ta.ru/. Device features, firmware behavior, and manufacturer implementation can change over time so checking official manufacturer documentation is recommended for the most current device specific details.
