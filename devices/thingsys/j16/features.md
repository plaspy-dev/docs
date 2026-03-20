---
slug: /thingsys/j16/features
id: j16-features
sidebar_label: Features
title: ThingSys - J16 Features
sidebar_class_name: menu_item_tracker
description: Overview of ThingSys J16 GPS tracker features and practical integration notes for use with Plaspy
keywords:
  - ThingSys J16 features
  - ThingSys J16 GPS tracker
  - J16 Plaspy compatibility
  - J16 GPS tracker features
  - ThingSys J16 capabilities
  - J16 vehicle tracker Plaspy
  - J16 telemetry features
  - J16 blind area storage
  - J16 ACC detection relay
  - ThingSys J16 variants
---

# ThingSys - J16 Features

This page describes the public feature context for the ThingSys J16 GPS tracker and how those capabilities are used with Plaspy. It focuses on user-facing functions, practical operating behavior, and how the tracker reports position and telemetry into Plaspy for monitoring and reporting.

Exact feature availability depends on the device firmware version, hardware revision, installed variant, and how the manufacturer implemented specific options. Review the manufacturer documentation and your device configuration to confirm which features are present on a particular unit before deployment.

## Feature Overview

The ThingSys J16 is a compact vehicle tracker designed for real-time location and telemetry reporting. It supports 4G LTE CAT1 with 2G fallback, multiple protocol profiles, and variants that provide ACC detection, relay control, microphone, and SOS functionality. The device includes message buffering for blind-area coverage and an internal backup battery to cover short power interruptions.

- 4G LTE CAT1 connectivity with 2G GSM fallback for wide cellular coverage and reliable tracking
- Two hardware variants: J16A with ACC detection and relay, J16B adding relay, microphone, and SOS
- TCP/IP reporting and support for common tracking modes such as GPRS tracking and SMS polling
- Blind-area message storage for offline buffering and automatic forwarding when connectivity restores
- Compact form factor and internal backup battery for short-term power-loss resilience

## Core Features of ThingSys - J16

- SIMCOM 7670SA based 4G LTE CAT1 module with 2G fallback to maintain connectivity in mixed coverage areas
- Two configurable variants to match deployment needs: ACC detection and relay control on J16A; relay, microphone, and SOS on J16B
- Default GT06/CRX3 protocol support with optional JT808, Tianqin, and Tianhe profiles available via SMS configuration
- TCP/IP communications for cloud reporting, plus support for GPRS tracking and SMS polling modes
- Motion/G-sensor and sleep power mode to reduce reporting when stationary and conserve energy
- Blind-area storage capable of holding thousands of messages for later upload after reconnection
- Wide vehicle voltage input range suitable for use across cars, buses, trucks, and motorcycles

## How These Features Work with Plaspy

Plaspy ingests the J16 data streams and presents them in the platform for monitoring, history, and operational workflows. The tracker can send location and telemetry over TCP/IP or GPRS, and Plaspy will interpret the supported protocols to display live position, events, and stored message uploads.

- Live location updates and telemetry appear in Plaspy mapping and history views for fleet oversight
- Ignition and ACC events reported by J16 variants can be used by Plaspy to drive alarms and business rules such as driver time tracking
- Blind-area stored messages are forwarded to Plaspy when the tracker regains connectivity, preserving continuity of historical data
- Relay control events (where a relay accessory is installed) can be reflected in Plaspy as actionable device controls or event records
- SOS and audio event indicators from J16B are represented in Plaspy event lists to support incident response workflows

## Typical Use Cases

- Fleet tracking and route monitoring across mixed vehicle types where wide voltage tolerance and cellular fallback are required
- Anti-theft monitoring with remote relay control available when paired with the appropriate relay accessory
- Vehicles operating in intermittent coverage areas that benefit from blind-area storage and later data upload
- Driver and vehicle event logging using ACC detection to capture ignition on/off events and motion events
- Emergency notification handling using the J16B SOS and microphone options where enabled

## Feature Availability Notes

- Variant differences matter: J16A and J16B provide different hardware features; check the device label or vendor order details
- Firmware and regional hardware revisions can change which protocol profiles or optional features are present or enabled
- Some features such as relay control require additional accessories or wiring during installation to be functional
- Blind-area storage capacity, battery runtime, and GNSS performance depend on actual device configuration and environmental factors
- Always confirm the active protocol and settings on a device before relying on a particular telemetry behavior in Plaspy

## Why Use Plaspy with These Features

Using the ThingSys J16 with Plaspy gives organizations a compact tracker that feeds location and event data into a fleet management platform. Plaspy consolidates position updates, ACC and relay events, offline message uploads, and SOS indicators into dashboards and reports that help with operational visibility, loss prevention, and incident handling.

To learn more about how Plaspy can work with the J16 and other compatible trackers visit https://www.plaspy.com. For the latest device specifications, firmware notes, and detailed manufacturer guidance, verify current information on the official ThingSys website https://www.thingsys.com/.
