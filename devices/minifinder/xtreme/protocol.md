---
slug: /minifinder/xtreme/protocol
id: xtreme-protocol
sidebar_label: Protocol
title: MiniFinder - Xtreme Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for MiniFinder Xtreme and how it communicates with Plaspy for tracking and telemetry
keywords:
  - MiniFinder Xtreme protocol
  - MiniFinder Xtreme GPS protocol
  - MiniFinder Xtreme Plaspy compatibility
  - Xtreme tracking protocol
  - MiniFinder communication protocol
  - MiniFinder tracker protocol
  - Xtreme GPS tracker Plaspy
  - MiniFinder asset tracker protocol
  - Xtreme vehicle tracking protocol
  - MiniFinder Xtreme integration
---

# MiniFinder - Xtreme Protocol

This page describes the public protocol context for using the MiniFinder Xtreme tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what types of telemetry are typically delivered, and how protocol-level behavior impacts integration and daily operation. The goal is to provide clear, non sensitive protocol context to help with setup and troubleshooting while encouraging review of official manufacturer documentation.

The MiniFinder Xtreme is a rugged, magnetic GPS tracker with long battery life and motion and tamper sensors. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the correct backend. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so device-specific details should be validated with MiniFinder documentation when necessary.

## Protocol Overview

At a general level the Xtreme’s communication protocol defines how the tracker identifies itself, sends GNSS positions, and reports sensor events to Plaspy. The protocol ensures the telemetry produced by the device is transformed into actionable events and position data that Plaspy can display, alert on, and store for reporting.

- Reports typical telemetry such as GPS position, timestamp, battery status, motion or tamper events, and signal state for Plaspy to map and analyze.
- Provides device identity and session context so Plaspy can associate incoming messages with the correct asset record.
- Enables event driven reporting to reduce data transmission when the device is stationary and increase frequency on motion or alarms.
- Supports fallback to internal logging when coverage is interrupted so Plaspy can receive backlog data once connectivity resumes.
- Works with cellular transport to deliver telemetry to a central Plaspy endpoint for real time tracking and historical playback.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared backend endpoint and detects which tracker protocol is in use without requiring manual selection in most cases. As long as the device is configured to report to the Plaspy endpoint, protocol detection and parsing are handled automatically by the platform.

- Plaspy uses a single shared server endpoint for device reporting which simplifies device configuration.
- Plaspy automatically detects the tracker protocol so users typically do not need to choose a protocol inside Plaspy when the device is correctly configured to report to the Plaspy endpoint.
- Proper device identity and consistent reporting intervals help Plaspy associate messages quickly and reliably with the correct asset.
- If a tracker does not appear online, verify the device reporting settings, network coverage, and that the device is pointing to the Plaspy endpoint.

## Transport and Connection Context

Connection choices determine how the Xtreme reaches the Plaspy backend but do not change the public role of the protocol itself. The device may use UDP or TCP on the same port that Plaspy listens on for all devices, and it can be pointed at the Plaspy domain or the public IP address.

- Plaspy server domain is d.plaspy.com for device reporting and DNS based configuration.
- Plaspy server IP is 54.85.159.138 and can be used where a numeric endpoint is required.
- The port is 8888 which Plaspy uses as the listening port for device traffic.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration preferences.
- All devices in Plaspy use the same port which simplifies multi device deployments and configuration guides.

## Protocol Compatibility Notes

- Firmware variations can change message timing, available fields, and feature behavior; always note the firmware version during troubleshooting.
- Hardware revisions or model variants can introduce sensor or reporting differences that affect what telemetry is available to Plaspy.
- Manufacturer side settings such as default transport mode or APN configuration may need adjustment to ensure reliable reporting to the Plaspy endpoint.
- Choosing UDP or TCP can affect delivery characteristics in lossy mobile networks; match transport to your operational needs and device capabilities.
- Validate compatibility and recommended settings against official MiniFinder documentation and release notes for the Xtreme.
- When in doubt, confirm device reporting destination is set to the Plaspy endpoint and that the device has cellular connectivity.

## Why Protocol Understanding Matters

Understanding how the Xtreme communicates with Plaspy helps with correct setup, faster troubleshooting, and predictable operational behavior over time. Familiarity with the communication context reduces setup errors and improves confidence that telemetry will reach Plaspy reliably.

- Helps verify that the device is configured to report to the correct Plaspy endpoint and port.
- Supports troubleshooting of connectivity issues by narrowing scope to transport, APN, or firmware factors.
- Informs reasonable expectations for battery life based on event driven reporting versus frequent scheduled reporting.
- Aids in interpreting what events and telemetry will appear in Plaspy feeds and alerts.
- Makes it easier to plan deployments and maintenance cycles by anticipating how firmware updates might change behavior.

## Why Use Plaspy with This Protocol

Pairing the MiniFinder Xtreme with Plaspy gives organizations a practical path to real time visibility, alerting, and historical playback without requiring manual protocol selection within the platform. The Xtreme’s rugged design, long battery, and event sensors produce the position and event telemetry that Plaspy consumes to provide geofencing, alarm handling, and operational reporting.

To learn more about Plaspy features and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware guidance on the manufacturer site https://minifinder.se/.
