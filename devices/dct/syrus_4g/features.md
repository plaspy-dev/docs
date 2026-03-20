---
slug: /dct/syrus_4g/features
id: syrus_4g-features
sidebar_label: Features
title: DCT - Syrus 4G Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the DCT Syrus 4G GPS tracker and how its capabilities integrate with Plaspy for fleet visibility
keywords:
  - DCT Syrus 4G features
  - Syrus 4G GPS tracker
  - DCT Syrus 4G Plaspy compatibility
  - Syrus 4G telematics gateway
  - Syrus 4G GNSS tracking
  - Syrus 4G CAN telemetry
  - Syrus 4G BLE sensors
  - Syrus 4G edge computing
  - Syrus 4G satellite backup
  - fleet tracking with Plaspy
---

# DCT - Syrus 4G Features

This page provides a public, non sensitive feature overview of the DCT Syrus 4G telematics gateway and how its capabilities are used with Plaspy. It covers the primary, user facing functions that make the Syrus 4G suitable for enterprise fleet management and industrial IoT, and explains how those functions integrate into Plaspy for consolidated fleet visibility.

Exact feature availability can vary by firmware version, hardware revision, installed accessories, and manufacturer implementation. The descriptions below use the Syrus 4G public specifications as the basis; for device specific technical detail please refer to official DCT documentation.

## Feature Overview

The Syrus 4G is an enterprise grade telematics gateway designed for resilient, large scale vehicle and industrial deployments. It combines multi constellation GNSS positioning, redundant cellular connectivity, rich vehicle interfaces, local edge compute, and radio options to keep assets visible and telemetry flowing in demanding environments.

- Reliable real time positioning with multi constellation GNSS for consistent location updates across regions
- Dual cellular modems with resilient connectivity and optional satellite backup for broad coverage
- Rich vehicle interfaces including dual CAN and serial ports for deep telemetry and diagnostics
- Bluetooth BLE support for local sensor integration and driver devices
- Local edge processing and onboard storage to reduce bandwidth and enable preprocessing of telemetry
- Remote device management, OTA updates, and developer SDKs to simplify integration and operations

## Core Features of DCT - Syrus 4G

- Multi constellation GNSS for accurate real time tracking across coverage areas
- Dual cellular modems with eSIM and backup eSIM support for resilient mobile connectivity
- Optional satellite accessory for extended reach in areas without cellular service
- Vehicle I O including dual CAN J1939 and J1708 plus serial interfaces and Ethernet for telemetry integration
- Bluetooth BLE 4.2 support for local sensors and driver devices
- Onboard edge compute and local storage for preprocessing and data buffering
- Secure element and tamper resistant design for device authentication and trusted telemetry
- Remote management, OTA, and SDKs for integration, configuration, and lifecycle management

## How These Features Work with Plaspy

Syrus 4G forwards processed telemetry and position data to Plaspy where it appears in live dashboards, historical playback, and telemetry reports. Plaspy is built to ingest structured device data and present it for operational decision making, and the Syrus 4G is designed to preprocess and reliably forward those payloads.

- Real time location updates and status appear in Plaspy dashboards for live fleet monitoring
- CAN derived telemetry and diagnostic codes can be mapped into Plaspy for maintenance and analytics
- BLE sensor inputs and local device events are forwarded to Plaspy as structured telemetry when configured
- Edge preprocessing reduces cloud bandwidth by aggregating or filtering messages before sending to Plaspy
- Plaspy can accept device reports over TCP or UDP on port 8888 and automatically detects the tracker protocol for streamlined onboarding
- Remote device state and OTA progress reported by the Syrus 4G can be reflected in Plaspy for operational oversight

## Typical Use Cases

- Real time fleet tracking and route monitoring for logistics and field service operations
- Remote diagnostics and preventive maintenance workflows using CAN derived engine and fault data
- Anti theft and tamper detection combined with secure device authentication and live tracking
- Fuel and engine telemetry analytics for efficiency programs when vehicle bus signals are available
- Sensorized asset monitoring using BLE sensors for temperature or driver related devices
- Industrial gateway deployments that require edge preprocessing and reliable connectivity into cloud fleet systems

## Feature Availability Notes

- Some features require specific firmware, hardware variants, or optional accessories such as the satellite module or particular radio modules
- Vehicle interface availability and signal names depend on the vehicle wiring and installation choices made by integrators
- Bluetooth, CAN, serial, and Ethernet use may vary by regional model and regulatory configuration
- Remote management and OTA functions depend on Syrus Cloud or manufacturer service availability and entitlements
- Always confirm the exact feature set and supported interfaces for your purchased unit and firmware revision with the manufacturer

## Why Use Plaspy with These Features

Using the Syrus 4G with Plaspy combines a rugged, enterprise grade telematics gateway with a platform designed for centralized fleet visibility and telemetry reporting. The gateway’s redundancy, rich I O, and edge processing capabilities help ensure that the most relevant events and telemetry reach Plaspy reliably, enabling operators to monitor vehicles in real time and to use diagnostics data for maintenance planning.

To learn more about how Plaspy can surface Syrus 4G telemetry and improve operational visibility visit https://www.plaspy.com. For the most current and detailed device specifications, firmware notes, and accessory options verify information with DCT at https://www.digitalcomtech.com/ as device features and firmware behavior can change over time.
