---
slug: /concox/wetrack2/protocol
id: wetrack2-protocol
sidebar_label: Protocol
title: Concox - WeTrack2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox WeTrack2 showing how the tracker communicates with Plaspy for reliable real time fleet tracking
keywords:
  - Concox WeTrack2 protocol
  - Concox WeTrack2 GPS protocol
  - WeTrack2 Plaspy compatibility
  - WeTrack2 communication protocol
  - WeTrack2 tracking protocol
  - Concox tracker Plaspy
  - vehicle GPS tracker WeTrack2
  - WeTrack2 fleet tracking
  - Concox GPS protocol
  - Plaspy device compatibility
---

# Concox - WeTrack2 Protocol

This page describes the public protocol context for using the Concox WeTrack2 tracker with Plaspy. It focuses on how the device communicates with Plaspy in general terms, what connection settings are required, and practical considerations for integrating the tracker into a live fleet environment without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation choices. Use this guide to understand transport and reporting context for WeTrack2 and to plan configuration or troubleshooting steps before consulting official manufacturer documentation for firmware specific details.

## Protocol Overview

The tracker reporting protocol is the set of rules the WeTrack2 uses to identify itself and send telemetry to a remote server such as Plaspy. In practical terms the protocol determines how location, ignition state, movement events, and other telemetry are packaged and transmitted so the platform can convert those messages into usable location updates and alerts.

- Enables the WeTrack2 to send GNSS positions, status updates, and event triggers to the server for real time tracking and history.
- Carries ignition ACC, movement, and alarm signals that Plaspy uses to generate alerts and operational workflows.
- Provides a consistent identity and session context so Plaspy can associate incoming reports with the correct device and account.
- Supports local buffering and delayed upload behavior so data recorded during short outages is delivered once connectivity is restored.
- Works over standard network transport to reach Plaspy servers where the platform parses messages into dashboard metrics and reports.

## How Plaspy Detects the Protocol

Plaspy accepts connections on a single shared endpoint and automatically identifies the incoming tracker protocol so most users do not need to pick a protocol option manually. When a WeTrack2 is configured to report to Plaspy, the system inspects the incoming connection context and reported device identity to route and interpret messages appropriately.

- Plaspy server domain is d.plaspy.com which is a valid reporting endpoint for compatible devices.
- Plaspy server IP is 54.85.159.138 and can be used as an alternative endpoint for device configuration.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Because Plaspy automatically detects the tracker protocol, users normally only need to ensure the device points to the correct Plaspy endpoint and that transport settings match the device configuration.

## Transport and Connection Context

Plaspy accepts telemetry from WeTrack2 devices over standard IP transport. The tracker itself supports common cellular connectivity and is intended to report telemetry to a single Plaspy endpoint, where the platform receives, processes, and stores the data for dashboards and alerts.

- Devices may be configured to report to the domain d.plaspy.com or directly to the IP 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888; selection depends on the device firmware and operator preference.
- All devices in Plaspy use the same port which simplifies device provisioning and centralizes inbound traffic.
- Typical configuration steps on the device side involve setting the server address and selecting the transport protocol supported by the tracker.
- Local buffering on board the WeTrack2 preserves records during brief network interruptions so reports are delivered when connectivity resumes.

## Protocol Compatibility Notes

- Firmware variations can change message timing, optional fields, or supported transports between device revisions.
- Hardware revisions or region specific builds may alter available features such as supported GNSS constellations or GPIO behavior.
- Manufacturer configuration options can enable or disable specific telemetry fields or change the device reporting interval.
- Transport choice between UDP and TCP can affect delivery characteristics such as retransmission and session handling.
- Confirm device reporting settings point to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy ingestion.
- Validate device compatibility against the latest official Concox documentation when planning fleet rollouts or updates.

## Why Protocol Understanding Matters

A practical understanding of the WeTrack2 communication protocol helps ensure reliable device onboarding, faster troubleshooting, and better long term operation with Plaspy. Knowing the communication boundaries and what to check when data is missing or malformed saves time for administrators and service teams.

- Simplifies device provisioning by ensuring the correct server address and transport are applied before deployment.
- Speeds troubleshooting by focusing checks on transport settings, firmware version, and whether the device is successfully reaching d.plaspy.com or 54.85.159.138 on port 8888.
- Helps interpret behavior around buffering and delayed uploads so historical gaps are explained and handled correctly.
- Enables planning around firmware updates or hardware revisions that could affect message content or available telemetry.
- Improves security posture by encouraging operators to verify device configuration and network routes rather than guessing protocol internals.

## Why Use Plaspy with This Protocol

Using WeTrack2 with Plaspy provides a straightforward path to real time visibility, alerting, and historical reporting for scooters, motorcycles, light vehicles, and industrial equipment. The combination of WeTrack2 hardware features such as ignition detection, remote immobilizer support, GNSS sensitivity, and onboard buffering with Plaspy’s unified ingestion endpoint helps teams maintain situational awareness and respond to incidents more quickly.

To learn more about how Plaspy works with a wide range of trackers, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify device specific information and the latest firmware guidance on the manufacturer website https://www.iconcox.com/ before finalizing deployments.
