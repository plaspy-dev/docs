---
slug: /meitrack/t399l_t399e/protocol
id: t399l_t399e-protocol
sidebar_label: Protocol
title: Meitrack - T399L/T399E Protocol
sidebar_class_name: menu_item_tracker
description: Comprehensive protocol overview for Meitrack T399L T399E and Plaspy compatibility and connection context
keywords:
  - Meitrack T399L T399E protocol
  - Meitrack GPS protocol
  - T399L T399E tracking protocol
  - Plaspy device compatibility
  - Meitrack Plaspy integration
  - vehicle tracker communication
  - fleet tracking protocol
  - GNSS telemetry integration
  - T399L OTA FOTA
  - CAN RS232 RS485 telemetry
---

# Meitrack - T399L/T399E Protocol

This page describes the public protocol context for using the Meitrack T399L and T399E vehicle trackers with Plaspy. It focuses on how the device communicates usable telemetry and event data to Plaspy rather than low level packet internals. The T399 series is a rugged IP67 rated tracker designed for fleet, logistics and commercial vehicle monitoring and the information here explains the communication relationship between that hardware and the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available features can vary depending on firmware version, hardware revision and manufacturer implementation, so this page keeps the discussion at a public, practical level while highlighting the connection settings and operational implications for T399 deployments. The T399L model also supports OTA FOTA updates which can affect protocol behavior over time.

## Protocol Overview

The protocol used by the T399L/T399E is the mechanism that carries GNSS fixes, vehicle telemetry, peripheral inputs and event notifications from the tracker to Plaspy. In practical terms the protocol defines how the device identifies itself, how position and sensor data are reported, and how events such as alarms or driver inputs are conveyed to the server for processing and display.

- Carries GNSS position, speed, heading and time for real time tracking in Plaspy.
- Transports vehicle telemetry such as CAN bus parameters, fuel sensor readings, and I/O states.
- Conveys event notifications for harsh driving, collisions, geofence triggers and other alarms.
- Allows identification and basic device metadata so Plaspy can associate data with the correct fleet asset.
- Supports peripheral and sensor telemetry including Bluetooth sensors, RFID and external inputs so that environmental and access data reach Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a common endpoint and automatically determines the appropriate protocol handler for supported trackers. For most users this means no manual protocol selection is required inside Plaspy as long as the device is configured to report to the Plaspy endpoint.

- Plaspy server hostname is d.plaspy.com for device reporting.
- Plaspy server IP address is 54.85.159.138 for environments that require a numeric endpoint.
- Plaspy listens on port 8888 which is the same port used by all devices supported by Plaspy.
- Devices can be configured to use either UDP or TCP on port 8888 depending on device capabilities and network conditions.
- Plaspy automatically detects the tracker protocol when properly addressed to the platform endpoint and port.

## Transport and Connection Context

Connection choices determine how the tracker sends its protocol messages to Plaspy but do not change the general purpose of the protocol. The T399 series supports multi generation cellular connectivity and flexible transport selection, which helps deployments operate around different network constraints.

- The device may be configured to use UDP on port 8888 for low overhead reporting.
- The device may be configured to use TCP on port 8888 for reliable session oriented reporting.
- Devices can be pointed to the hostname d.plaspy.com or directly to the IP 54.85.159.138 when DNS is restricted.
- All Plaspy supported devices use the same port 8888 which simplifies server configuration and firewall rules.
- Transport selection can be influenced by carrier networks, firewall policies and device firmware options.

## Protocol Compatibility Notes

- Firmware version differences can change available telemetry fields, event naming and optional features.
- Hardware revisions or regional model variants may expose different peripheral interfaces or sensor support.
- Manufacturer side configuration defaults (for example default transport or reporting interval) can vary and should be checked before deployment.
- Choosing UDP or TCP affects delivery characteristics but does not alter the high level data types the tracker reports.
- Validate compatibility and feature availability against the device specific documentation from Meitrack for your exact model and firmware.
- Plaspy accepts reports at the shared endpoint and port and detects the protocol automatically when the device is correctly configured to report to Plaspy.

## Why Protocol Understanding Matters

Understanding how the tracker communicates with Plaspy helps ensure correct setup, faster troubleshooting and predictable long term operation of fleet systems. Awareness of how reports are delivered, which transport is used and how firmware affects output saves time during deployment and when investigating data anomalies.

- Ensures correct device configuration so position, telemetry and events arrive at Plaspy reliably.
- Helps narrow troubleshooting steps when data is missing or inconsistent, for example transport, network or device settings.
- Guides expectations for feature availability when planning integrations that rely on CAN, fuel sensors or Bluetooth peripherals.
- Supports maintenance planning since OTA FOTA and firmware updates can alter reporting behavior over time.
- Simplifies firewall and network configuration by relying on the single Plaspy endpoint and port.

## Why Use Plaspy with This Protocol

Using the Meitrack T399L or T399E with Plaspy provides fleet operators with a practical path to real time visibility, telemetry driven workflows and operational oversight. The combination of rugged hardware, multi generation cellular connectivity and broad peripheral support feeds the Plaspy platform with the position and sensor data needed for live tracking, safety alerts, fuel analytics and asset protection. Plaspy’s shared endpoint model and automatic protocol detection let you focus on deploying devices rather than manual protocol setup.

Learn more about how Plaspy handles device communications and fleet management at https://www.plaspy.com. For the most current firmware specific protocol details, transport options and device implementation notes verify the official Meitrack documentation at https://www.meitrack.com/ as manufacturer behavior can change with firmware and model revisions.
