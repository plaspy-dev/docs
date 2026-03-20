---
slug: /riti/sls_012sf/protocol
id: sls_012sf-protocol
sidebar_label: Protocol
title: Riti - SLS-012SF Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the Riti SLS-012SF GPS tracker and how it communicates with Plaspy for fleet tracking and backend integration
keywords:
  - Riti SLS-012SF protocol
  - Riti SLS-012SF GPS protocol
  - SLS 012SF tracking protocol
  - Riti tracker compatibility
  - Riti GPS tracker Plaspy
  - vehicle tracking protocol
  - fleet management protocol
  - tracker communication Plaspy
  - SLS 012SF integration
  - Riti tracking protocol
---

# Riti - SLS-012SF Protocol

This page explains the public protocol context for using the Riti SLS-012SF GPS vehicle tracker with the Plaspy platform. It focuses on how the tracker communicates with a backend such as Plaspy, the connection settings commonly used, and practical guidance for integration without exposing private implementation details. The SLS-012SF is designed for fleet management, remote monitoring, and integration with many external sensors, and this document frames how that device reports to a backend.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a public and practical level while describing the key connection facts that matter for successful integration.

## Protocol Overview

The protocol used by the SLS-012SF governs how the tracker reports position, status, and sensor data to a backend server and how the backend can identify and organize device data for fleet monitoring. For integration with Plaspy, the protocol's role is to reliably transmit usable telemetry and identification while allowing the backend to process and display that information.

- Enables the tracker to report GPS position, timestamp, and basic device status to Plaspy for real time and historical tracking
- Carries auxiliary sensor and IO data from attached devices such as RFID readers, temperature sensors, and external inputs for contextual monitoring
- Allows the backend to identify the device so data is associated with the correct vehicle or asset in Plaspy
- Supports transport over standard mobile networks so the device can reach Plaspy servers from the field
- Provides the foundation for backend features like geofencing, alerts, and reporting without exposing firmware internals

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a single shared endpoint and port and performs automatic protocol detection so most properly configured trackers will be recognized without requiring manual protocol selection in the platform. This automatic detection is intended to simplify onboarding while keeping configuration on the device side as the primary requirement.

- Plaspy uses a shared server endpoint at d.plaspy.com to receive tracker reports
- The Plaspy server IP is 54.85.159.138 and the standard port for device reporting is 8888
- All devices in Plaspy use the same port, making onboarding consistent across models
- Plaspy automatically detects the tracker protocol when the device reports to the platform
- In most cases, users only need to configure the device to report to d.plaspy.com or 54.85.159.138 on the Plaspy port

## Transport and Connection Context

Connection context describes how the tracker reaches the Plaspy backend and which transport methods it can use. The SLS-012SF supports mobile data reporting and can be configured to use common transport protocols depending on device firmware and configuration options.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed to d.plaspy.com or directly to the server IP 54.85.159.138 for reporting
- All devices in Plaspy use the same port which simplifies device-side configuration
- Choice of UDP or TCP may affect delivery behavior under cellular network conditions and should follow manufacturer guidance
- Ensure the device APN and mobile network settings allow outbound connections to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change message content and available fields, so verify firmware level when validating compatibility
- Hardware revisions and optional external modules may alter available telemetry and input channels exposed by the device
- Manufacturer configuration settings determine whether the device uses UDP or TCP and which server address it reports to
- Network conditions and carrier restrictions can affect packet delivery; testing in the intended deployment environment is recommended
- Plaspy detects protocol automatically, but proper device configuration to point at the Plaspy endpoint is required
- Always cross check device behavior against the latest official manufacturer documentation before large deployments

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure devices report reliably, that data fields are mapped correctly in Plaspy, and that troubleshooting is effective when issues arise. A practical grasp of protocol and transport context saves time during onboarding and supports long term reliability.

- Helps confirm the device is sending the necessary position and sensor data expected by Plaspy
- Simplifies troubleshooting when devices are not appearing in the platform by checking transport and server settings
- Enables informed decisions about using UDP versus TCP for a specific deployment and network conditions
- Supports planning for firmware updates, hardware revisions, and feature availability across deployments
- Reduces integration time by aligning device reporting settings with the Plaspy endpoint and port

## Why Use Plaspy with This Protocol

Using the Riti SLS-012SF with Plaspy provides fleet operators and service teams a stable backend for collecting GPS and sensor data from vehicles and mobile assets. Plaspy's unified port and automatic protocol detection remove much of the guesswork in onboarding, allowing you to focus on operational workflows such as monitoring, alerts, and data analysis.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current and device specific protocol, firmware behavior, and configuration details, please verify information on the manufacturer website https://www.riti.com.tw/ as device implementation and firmware can change over time.
