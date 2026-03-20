---
slug: /cantrack/g200ny/protocol
id: g200ny-protocol
sidebar_label: Protocol
title: CanTrack - G200NY Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CanTrack G200NY and how it communicates with Plaspy for tracking and telemetry
keywords:
  - CanTrack G200NY protocol
  - CanTrack G200NY GPS protocol
  - CanTrack G200NY protocol for Plaspy
  - CanTrack G200NY communication protocol
  - CanTrack G200NY tracking protocol
  - G200NY Plaspy compatibility
  - livestock GPS tracker protocol
  - Plaspy device integration
  - G200NY telemetry protocol
  - CanTrack GPS tracker protocol
---

# CanTrack - G200NY Protocol

This page describes the public protocol context for using the CanTrack G200NY with Plaspy. It summarizes how the G200NY communicates location and telemetry to Plaspy in general terms, what connection points are required, and what to consider when integrating the device for livestock tracking and remote herd management. The technical details here are focused on publicly useful communication context rather than device internals.

Plaspy accepts device reports on a shared connection endpoint and automatically detects the tracker protocol. Devices compatible with Plaspy, including the G200NY, can be pointed to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 using port 8888. The G200NY supports reporting over cellular 4G with 2G fallback and uses GNSS plus assisted positioning to provide reliable location updates, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the G200NY defines how the tracker formats and sends telemetry such as GNSS coordinates, assisted positioning, movement and status events, and SOS alerts to a remote server. In Plaspy's context the protocol's role is to ensure the tracker can identify itself, deliver meaningful location and event data, and receive basic remote configuration and OTA update triggers when available.

- Enables periodic and event driven transmission of GNSS coordinates and assisted location data to the platform.
- Provides identity and status information so Plaspy can associate incoming reports with the correct device record.
- Carries event markers such as geo fence triggers, SOS alerts, movement detection, and battery status for alerting and historical records.
- Supports remote configuration and OTA update signaling where the manufacturer and firmware permit remote management.
- Operates over standard network transports so the tracker can reach Plaspy at the shared endpoint without per device port configuration.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a common endpoint and port and uses its detection pipeline to recognize the tracker protocol automatically. In practice this means a properly configured G200NY pointed at Plaspy will generally be recognized without manual protocol selection inside the platform.

- Point the device to d.plaspy.com or to 54.85.159.138 and use port 8888 for reporting.
- Plaspy uses the same port for all supported devices so no per device port setup is required on the server side.
- Plaspy automatically detects the tracker protocol when device reports arrive at the shared endpoint.
- Users typically do not need to select a protocol inside Plaspy if the device is configured to send data to the Plaspy endpoint.
- Ensure the device uses the correct transport and reporting profile to help Plaspy identify and map incoming data to the device.

## Transport and Connection Context

Connection context covers the network transport and addressing a G200NY uses to reach Plaspy. The G200NY can use cellular data to deliver telemetry and may be configured to use either UDP or TCP transport depending on device support and configuration. Correct transport and destination settings are fundamental to successful integration.

- Devices may be configured to use UDP or TCP on port 8888 depending on firmware and settings.
- The tracker can point to the Plaspy domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy accepts reports on the same port for all devices making device side port changes unnecessary beyond setting the reporting port to 8888.
- Choose UDP for simpler, lower overhead reporting where supported, or TCP when reliable delivery and session handling are desired and supported by the device.
- Verify APN, SIM data allowance, and cellular coverage expectations for remote livestock deployments to maintain reliable connectivity.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and transport options; check the device firmware version when validating behavior.
- Hardware revisions or regional SKUs may alter supported bands and fallback behavior which can indirectly affect reporting consistency.
- Manufacturer-side configuration tools or provisioning services may expose different options for transport selection such as UDP or TCP.
- OTA firmware updates can add or change protocol features, so confirm post update behavior in a controlled test before rolling out widely.
- For reliable operation, validate that the device is set to report to d.plaspy.com or 54.85.159.138 on port 8888 and that transport (UDP or TCP) matches the device configuration.
- Test a small sample of units in representative field conditions before large scale deployment to confirm compatibility.

## Why Protocol Understanding Matters

Understanding how the G200NY communicates with Plaspy helps ensure reliable tracking, simplifies troubleshooting, and supports long term device management. Clear knowledge of transport choices, server endpoints, and how Plaspy detects protocols reduces integration time and operational surprises.

- Speeds initial setup by ensuring devices are pointed to the correct Plaspy endpoint and port.
- Makes troubleshooting connection issues faster by narrowing down transport, APN, and server reachability factors.
- Helps balance reporting frequency and battery life by selecting appropriate transmission modes in coordination with Plaspy settings.
- Supports planning for OTA updates and remote configuration by knowing which firmware features affect reporting.
- Improves deployment reliability in remote livestock settings by anticipating coverage and fallback behavior.

## Why Use Plaspy with This Protocol

Using the CanTrack G200NY with Plaspy gives ranch operators and field researchers a practical way to collect long duration GNSS and telemetry data from rugged trackers. Plaspy aggregates real time and historical location feeds, event alerts, and device status so teams can monitor herd movement, respond to SOS events, and manage devices at scale without frequent field visits.

To learn more about Plaspy and how it works with devices like the G200NY visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol and firmware information on the manufacturer site https://www.cantrackgps.com/ before planning large scale or critical deployments.
