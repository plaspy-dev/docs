---
slug: /megastek/mt80q/protocol
id: mt80q-protocol
sidebar_label: Protocol
title: Megastek - MT80Q Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Megastek MT80Q wearable and how it communicates with Plaspy for tracking and alerts
keywords:
  - Megastek MT80Q protocol
  - MT80Q GPS tracker
  - Megastek wearable tracking
  - MT80Q Plaspy compatibility
  - GPRS tracking protocol
  - personal tracking watch protocol
  - fall detection tracker protocol
  - APN auto query tracker
  - Plaspy device integration
  - historical track logging
---

# Megastek - MT80Q Protocol

This page covers the public protocol context for using the Megastek MT80Q Personal Tracking Watch with Plaspy. It explains how the device reports location and telemetry over GSM GPRS networks and what role the tracker communication protocol plays in successful integration with the Plaspy platform.

The MT80Q combines a Ublox GNSS module, GPRS data logging, automatic APN query, and event reporting features such as SOS and fall detection. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware revision, hardware version, or manufacturer implementation. This page is intended to explain the communication context rather than provide firmware specific or private implementation details.

## Protocol Overview

The tracker communication protocol is the set of behaviors and message exchanges that allow the MT80Q to identify itself, report position and status, and deliver event notifications to a platform like Plaspy. In public terms the protocol enables reliable telemetry, event delivery, and historical track upload from the device to the cloud.

- Enables the MT80Q to report GNSS location, battery and signal status, and event alerts to a remote server.
- Carries event-driven messages such as SOS, fall detection, belt on/off, and low battery for immediate handling by Plaspy.
- Supports periodic position updates and historical track logging so Plaspy can reconstruct routes and display past movements.
- Works over standard GPRS data connections with automatic APN query to simplify initial setup and network registration.
- Allows the device to be recognized and associated with an account on Plaspy so alerts and telemetry appear in the platform UI.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared endpoint and determines the appropriate handling for each connected device automatically. When an MT80Q is configured to report to the Plaspy endpoint, the platform will detect and process incoming messages without requiring the user to manually select a protocol in most cases.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices in Plaspy use the same port, and the platform automatically detects the tracker protocol used by each device.
- When the MT80Q is pointed to the Plaspy endpoint and begins sending GPRS reports, Plaspy matches and ingests those reports into the platform.
- Users typically only need to configure the device APN and reporting target; Plaspy will handle protocol detection on arrival.
- Automatic detection reduces configuration steps and helps common wearables like the MT80Q integrate quickly.

## Transport and Connection Context

The MT80Q communicates over GSM GPRS and may use either UDP or TCP for device reporting depending on firmware and configuration. Plaspy accepts both transport modes on its standard port so setup can be aligned to the device's supported transport.

- The MT80Q may be configured to use UDP or TCP to send data to the Plaspy endpoint on port 8888.
- Devices can point to the domain d.plaspy.com or directly to the server IP 54.85.159.138 when configuring the reporting target.
- Plaspy uses port 8888 for all supported devices, so a single port is used across the fleet for incoming telemetry.
- Transport choice (UDP vs TCP) affects delivery characteristics but both are supported by Plaspy on the shared port.
- Ensure the device SIM has active GPRS data and correct APN settings so the MT80Q can establish the chosen transport to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available event types, or the exact format the device uses to report; verify firmware notes when troubleshooting.
- Hardware revisions or regional variants of the MT80Q can introduce differences in supported transport modes or feature sets.
- Manufacturer-side configuration options such as APN query behavior, reporting intervals, and alarm thresholds affect what Plaspy receives.
- Selecting UDP or TCP on the device should be based on the device firmware capabilities and network conditions; Plaspy supports both on the shared port.
- Validate compatibility against the official Megastek documentation for device specific details before large scale deployment.
- When in doubt, confirm the device is configured to point to d.plaspy.com or the known Plaspy IP and using port 8888.

## Why Protocol Understanding Matters

A practical understanding of the MT80Q communication protocol helps with reliable setup, faster troubleshooting, and predictable platform behavior. Knowing what the device is expected to send and how Plaspy receives it reduces integration time and improves event response.

- Helps verify that the device is correctly pointed to the Plaspy endpoint and using the expected transport and APN settings.
- Aids in diagnosing missed reports or delayed events by checking GPRS connectivity, SIM provisioning, and transport mode.
- Clarifies why certain events such as SOS or fall detection appear as they do in Plaspy and how to map them to alerts.
- Supports decisions about reporting frequency and power management to balance battery life and update timeliness.
- Encourages testing historical track uploads and event delivery to ensure data fidelity for reporting and audits.

## Why Use Plaspy with This Protocol

Using the MT80Q with Plaspy provides organizations with a straightforward way to collect wearable telemetry, monitor personal safety events, and review historical movements on a centralized platform. The device’s GPRS data logger, APN auto query, and focused safety features combine with Plaspy’s automatic protocol detection to simplify onboarding and day to day monitoring.

Plaspy’s shared endpoint and single-port model mean less configuration overhead when deploying multiple devices. To learn more about Plaspy and how it handles device connectivity and fleet telemetry, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, please verify information with the manufacturer at https://www.megastek.com/; protocol support and firmware behavior can change over time and should be confirmed against official Megastek documentation.
