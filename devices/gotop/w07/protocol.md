---
slug: /gotop/w07/protocol
id: w07-protocol
sidebar_label: Protocol
title: GOTOP - W07 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for GOTOP W07 and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - GOTOP W07 protocol
  - GOTOP W07 GPS protocol
  - GOTOP W07 communication protocol
  - GOTOP W07 tracking protocol
  - GOTOP GPS tracker protocol
  - W07 Plaspy compatibility
  - GOTOP W07 integration
  - GPS tracker protocol Plaspy
  - vehicle tracking GOTOP W07
  - asset tracking W07
---

# GOTOP - W07 Protocol

This page describes the public protocol context for using the GOTOP W07 GPS tracker with Plaspy. It explains at a high level how the device reports location and events into Plaspy and what communication settings are relevant for reliable integration. The content focuses on public, non sensitive details that help operators and integrators understand how the tracker interacts with the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary between firmware versions, hardware revisions, and manufacturer implementation choices, so this page stays at a protocol overview level while noting the Plaspy connection details you will commonly use.

## Protocol Overview

The W07 communicates GPS positions, event notifications, and basic telemetry to a remote server using cellular data and SMS. The protocol role is to carry identification, location coordinates, timestamps, and event markers (for example motion, geofence, or battery alerts) from the device to Plaspy so the platform can present live positions and historical routes.

- Enables the W07 to transmit periodic location updates and alarm messages to Plaspy for live tracking and route playback.
- Conveys device identity and status so Plaspy can associate reports with the correct asset or user.
- Delivers event types used by Plaspy to trigger alerts such as motion, geofence, overspeed, and power off.
- Supports both GPRS data reporting and SMS fallbacks depending on network and device configuration.
- Provides the basic telemetry that Plaspy ingests and converts into map breadcrumbs, timestamps, and notifications.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports at a common endpoint and automatically determines the tracker protocol for properly formatted device reports. In most cases an integrator does not need to select a protocol manually inside Plaspy if the W07 is configured to report to the Plaspy address and port.

- Plaspy’s public reporting endpoint is d.plaspy.com and the server IP is 54.85.159.138.
- The Plaspy server listens on port 8888 and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol when the device sends data to the Plaspy endpoint.
- If the W07 is pointed to the Plaspy endpoint using the correct transport and credentials, Plaspy will ingest location and event messages with no protocol selection required by the user.
- Use standard device configuration workflows to point the tracker to d.plaspy.com or the server IP so Plaspy can receive reports.

## Transport and Connection Context

The W07 supports reporting over cellular data and can be configured to send messages using UDP or TCP depending on device capability and chosen settings. For Plaspy deployments the key connection context is the shared Plaspy endpoint and port so devices can reliably deliver telemetry.

- Devices may be configured to use UDP or TCP on port 8888 to report to Plaspy.
- The W07 can point to d.plaspy.com or directly to 54.85.159.138 when configuring the server address.
- Plaspy uses the same port for all supported devices which simplifies device setup across different tracker models.
- Choose UDP or TCP according to network reliability and the tracker configuration options; both transports are accepted by the Plaspy endpoint.
- Ensure the device APN and GPRS settings are correctly configured for the SIM in use so reports can reach the Plaspy server.

## Protocol Compatibility Notes

- Firmware variations can change message timing, supported fields, and optional event types; always check the device firmware version when validating behavior.
- Hardware revisions may alter available sensors or power management features that affect what telemetry is reported.
- Some W07 deployments will primarily use GPRS for live updates while SMS can act as a fallback for critical alerts depending on configuration.
- Transport selection (UDP vs TCP) affects delivery behavior; validate your network environment and tracker settings for the chosen transport.
- Manufacturer settings and regional firmware builds can lead to minor protocol differences between devices sold in different markets.
- For definitive behavior, consult GOTOP documentation for the specific W07 firmware revision and configuration steps.

## Why Protocol Understanding Matters

Understanding how the W07 communicates with Plaspy helps accelerate setup, reduce integration time, and improve long term reliability of tracking and alert workflows. Even with Plaspy’s automatic detection, awareness of transport, reporting modes, and event semantics is practical for troubleshooting and optimizing deployments.

- Speeds initial setup by ensuring the device reports to the correct Plaspy endpoint and port.
- Helps diagnose missing reports by checking transport, APN, and whether the device is using GPRS or SMS.
- Improves battery life and reporting frequency decisions by selecting appropriate heartbeat and sleep settings with Plaspy in mind.
- Clarifies why certain events appear in Plaspy and how firmware changes may add or remove telemetry fields.
- Aids fleet administrators in validating that geofence, overspeed, and motion alerts are arriving as expected.

## Why Use Plaspy with This Protocol

Using the GOTOP W07 with Plaspy gives organizations concise, actionable visibility for small asset, personal, or light vehicle tracking. The W07’s compact waterproof form factor, combined with reliable GPS/LBS positioning and basic telemetry events, fits many use cases where discreet, mobile tracking and timely alerts are required.

Plaspy collects the W07’s location updates and alarm messages through the shared endpoint at d.plaspy.com (54.85.159.138) on port 8888, and automatically detects the tracker protocol so operators can view live locations and historical tracks without manual protocol selection. Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and implementation notes verify current information on the manufacturer site https://www.gotop.cc/ as device behavior and support can change over time.
