---
slug: /gotop/l16_pro/protocol
id: l16_pro-protocol
sidebar_label: Protocol
title: GOTOP - L16 PRO Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the GOTOP L16 PRO smartwatch tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - GOTOP L16 PRO protocol
  - GOTOP L16 PRO GPS protocol
  - GOTOP L16 PRO tracking protocol
  - GOTOP L16 PRO communication protocol
  - GOTOP L16 PRO Plaspy compatibility
  - GOTOP L16 PRO tracker Plaspy
  - GOTOP smartwatch GPS protocol
  - wearable GPS tracker protocol
  - Plaspy device compatibility
  - Plaspy GPS tracker protocol
---

# GOTOP - L16 PRO Protocol

This page describes the public protocol context for using the GOTOP L16 PRO smartwatch tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what communication settings are shared, and what to consider when configuring the device for reliable reporting and alerting to your Plaspy account.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior and telemetry contents can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a public, implementation neutral level while explaining the practical connectivity and compatibility considerations for L16 PRO devices.

## Protocol Overview

The tracker protocol is the on device reporting method that allows the L16 PRO to send location, sensor telemetry, and safety events to Plaspy. In practical terms the protocol defines how the watch identifies itself, how telemetry is reported, and how alerts such as SOS or geofence breaches are conveyed so Plaspy can store, display, and act on the data.

- Enables periodic and event driven reporting of GPS location and BLE assisted indoor positioning to Plaspy.
- Conveys sensor telemetry such as heart rate, SpO2, temperature, and accelerometer events for fall detection.
- Carries safety events and alarms including SOS, low battery, and geofence notifications for immediate alerting.
- Provides device identity and status information so Plaspy can associate messages with the correct tracker owner and profile.
- Supports remote monitoring workflows such as two way calling indicators and health telemetry timelines without exposing device internals.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol used by the reporting device. When an L16 PRO is configured to report to Plaspy, the system generally requires no manual protocol selection inside the platform provided the device is pointed to the Plaspy server and uses an accepted transport.

- Plaspy endpoint hostname d.plaspy.com and server IP 54.85.159.138 are used for device reporting.
- Plaspy listens on port 8888 and all supported devices use the same port value for reporting.
- Plaspy automatically detects the tracker protocol when messages arrive at the endpoint, simplifying setup for most users.
- Users typically only need to configure the L16 PRO to report to the Plaspy endpoint; no extra protocol chooser is required in Plaspy for properly configured devices.
- Confirm device reporting settings and APN/SIM configuration on the tracker to ensure messages reach the Plaspy endpoint.

## Transport and Connection Context

The L16 PRO may use either UDP or TCP for transport depending on device support and configuration. Plaspy supports both transports on a single, shared port to accommodate different device implementations and network conditions.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy accepts connections on port 8888 for all devices and transports.
- The L16 PRO can use UDP or TCP on port 8888; choose the transport supported by your firmware and network environment.
- Ensure APN and SIM or eSIM settings on the watch are correct so the device can establish a cellular session to the Plaspy endpoint.
- Network firewalls and carrier restrictions can affect UDP versus TCP behavior; consult carrier guidance when troubleshooting connectivity.

## Protocol Compatibility Notes

- Firmware differences across L16 PRO units can change how and when telemetry is reported; verify firmware release notes for behavior changes.
- Hardware revisions or sensor module variations may affect which telemetry fields the device transmits to Plaspy.
- Manufacturer side configuration options can alter transport preference or reporting intervals; check device configuration menus before deployment.
- Selecting UDP or TCP on the tracker depends on what the device firmware supports and local network conditions.
- Multi region cellular roaming and carrier compatibility can influence connectivity and should be validated for target deployment countries.
- Always validate device reporting to the Plaspy endpoint during commissioning to confirm messages arrive as expected.

## Why Protocol Understanding Matters

Understanding the L16 PRO communication protocol helps ensure reliable setup, effective troubleshooting, and predictable behavior when the device is used with Plaspy. Even without inspecting low level packet formats, knowing how the device reports and what the platform expects reduces misconfiguration and speeds up issue resolution.

- Helps confirm the device is pointed at d.plaspy.com or 54.85.159.138 and using port 8888.
- Aids in choosing UDP or TCP transport based on firmware support and network conditions.
- Makes it easier to interpret telemetry cadence, battery life impact, and alert timing in Plaspy.
- Improves commissioning workflows and reduces false negatives for SOS or geofence alerts.
- Supports coordination with manufacturer updates that may change telemetry fields or reporting rules.

## Why Use Plaspy with This Protocol

Using the GOTOP L16 PRO with Plaspy brings wearable GPS location and health telemetry into a centralized monitoring platform. Plaspy ingests location, SOS alerts, and sensor-driven health data so caregivers and administrators can create geofence rules, receive instant alerts, and review historical telemetry for operational insight.

Plaspy's shared endpoint approach and automatic protocol detection simplify deploying L16 PRO devices at scale. To learn more about how Plaspy works with wearable trackers like the L16 PRO visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and you should verify the latest device specific protocol information and firmware notes on the manufacturer site https://www.gotop.cc/.
