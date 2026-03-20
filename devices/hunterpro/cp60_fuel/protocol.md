---
slug: /hunterpro/cp60_fuel/protocol
id: cp60_fuel-protocol
sidebar_label: Protocol
title: HunterPro - CP60-FUEL Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the HunterPro CP60 FUEL tracker with Plaspy for reliable fuel monitoring
keywords:
  - HunterPro CP60-FUEL protocol
  - CP60-FUEL GPS tracker
  - HunterPro fuel level protocol
  - CP60-FUEL Plaspy compatibility
  - fuel sensor tracker protocol
  - vehicle fuel monitoring protocol
  - fuel level telemetry
  - fleet fuel tracking
  - GPS tracker protocol Plaspy
  - tank calibration CP60-FUEL
---

# HunterPro - CP60-FUEL Protocol

This page describes the public protocol context for using the HunterPro CP60-FUEL tracker with the Plaspy platform. It focuses on high level communication and integration considerations rather than device internals. The CP60-FUEL is a fuel level tracker that uses a coaxial capacitor probe and electronics that convert probe capacity into digital pulses; this documentation explains how that reported data is transmitted to Plaspy in general terms.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and the manufacturer implementation, so verify device specific details with the vendor when needed.

## Protocol Overview

At a high level, the tracker reporting protocol defines how the CP60-FUEL identifies itself, conveys GPS and fuel level information, and maintains a connection to a server so platforms like Plaspy can ingest telemetry. The protocol translates the device measurements and diagnostic states into messages suitable for network transport and server processing.

- Carries device identity and status so Plaspy can attribute data to the correct tracker and vehicle.
- Sends fuel level readings derived from the coaxial capacitor probe after tank calibration mapping.
- Delivers GPS position and ancillary telemetry alongside fuel data for contextual reporting.
- Uses a network transport mechanism that the device and Plaspy agree upon to ensure reliable delivery.
- Enables the server to acknowledge or process incoming reports for real time monitoring and historical storage.

## How Plaspy Detects the Protocol

Plaspy accepts incoming data on a shared endpoint and automatically detects the tracker protocol without manual selection in most cases. When a CP60-FUEL is configured to report to the Plaspy endpoint, the platform will identify the sending device type and parse supported fields so data becomes immediately available.

- Plaspy listens on a single shared endpoint to simplify device configuration.
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.
- Users normally do not need to pick a protocol inside Plaspy if the device is pointed to the Plaspy endpoint.
- If a device is not reporting as expected, reviewing transport and device configuration is a first troubleshooting step.

## Transport and Connection Context

The CP60-FUEL may be configured to use either UDP or TCP transport depending on the device options and deployment needs. Plaspy supports both transports on its unified port so devices can be pointed to the same server address for consistent integration.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888.
- Plaspy uses the same port for all supported devices to reduce configuration errors.
- Selecting UDP vs TCP depends on device firmware capabilities and desired delivery characteristics.
- Ensure device network settings, APN, and firewall rules allow outbound traffic to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, fields, and available features that affect how the CP60-FUEL reports to Plaspy.
- Hardware revisions and probe installations may alter calibration behavior and the raw sensor output that the protocol conveys.
- The transport selection between UDP and TCP should match the device configuration and any intermediate network constraints.
- Plaspy’s automatic protocol detection covers common public reporting modes but uncommon custom firmware may require verification.
- Tank calibration on the CP60-FUEL is important to convert measured pulses into accurate fuel volume values.
- Always compare device settings and manufacturer release notes when diagnosing unexpected telemetry.

## Why Protocol Understanding Matters

Understanding the CP60-FUEL communication protocol helps ensure reliable installation, correct interpretation of fuel data, and efficient troubleshooting during deployment. Knowing which transport and server settings to use, and how calibration maps to reported values, reduces setup time and improves data quality in Plaspy.

- Speeds up initial setup by ensuring the device points to the correct Plaspy endpoint and transport.
- Improves troubleshooting when telemetry is missing, delayed, or appears inconsistent.
- Helps validate that tank calibration results are being transmitted and interpreted correctly.
- Reduces false alarms by clarifying how the tracker reports status changes and sensor pulses.
- Aids long term maintenance when firmware updates or fleet device rollouts occur.

## Why Use Plaspy with This Protocol

Using Plaspy with the HunterPro CP60-FUEL gives organizations clear visibility into fuel levels alongside location and vehicle status. The platform ingests the reported telemetry and makes it available for monitoring, alerts, and historical analysis so fleet managers can reduce fuel loss, plan refueling, and audit consumption trends.

Plaspy’s shared endpoint model and automatic protocol detection simplify device onboarding and let teams focus on calibration and operations rather than per device server settings. To learn more about Plaspy and how it supports fleet and fuel monitoring, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time; for the latest hardware and protocol specifics check the manufacturer documentation at http://hunterpro.com.tw/ .
