---
slug: /sentar/mini/protocol
id: mini-protocol
sidebar_label: Protocol
title: Sentar - Mini Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Sentar Mini GPS tracker compatibility with Plaspy including connection context and integration notes
keywords:
  - Sentar Mini protocol
  - Sentar Mini GPS
  - Sentar Mini Plaspy
  - Sentar Mini tracking
  - Sentar Mini communication protocol
  - Plaspy device compatibility
  - GPS tracker protocol
  - Mini GPS tracker protocol
  - Sentar tracker integration
  - Sentar Mini telemetry
---

# Sentar - Mini Protocol

This page describes the public protocol context for using the Sentar Mini 4G GPS Tracker with Plaspy. It focuses on how the device communicates telemetry and location data to Plaspy in general, non sensitive terms, and on practical integration considerations that help administrators and technicians onboard and operate the device reliably.

The Sentar Mini is a compact multi mode tracker (GPS, AGPS, LBS, WiFi) with global cellular support and IPX7 protection that reports location and device health to Plaspy. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Review the manufacturer documentation for firmware specific details when necessary.

## Protocol Overview

The device communication protocol defines how the Mini packages and sends location fixes, status telemetry, and diagnostic information to a remote server so Plaspy can ingest and present meaningful tracking data. This public overview explains the role of the protocol without exposing private implementation details.

- Enables periodic and event driven transmission of location and device telemetry to Plaspy for real time monitoring and history.
- Carries basic device identification and status so Plaspy can associate incoming messages with the correct tracker and account.
- Conveys positioning data from multiple sources (GPS, AGPS, WiFi, LBS) so Plaspy can select and display the best available fix.
- Transmits battery level, signal and connectivity indicators that Plaspy uses for alerts and device health reporting.
- Supports both continuous location streams and occasional check in messages depending on device settings and use case.

## How Plaspy Detects the Protocol

Plaspy receives incoming data at a shared ingestion endpoint and automatically detects the tracker protocol, so in most cases an administrator does not need to select a protocol manually within the platform if the device is configured to report to Plaspy correctly.

- Plaspy listens on a unified endpoint and port for all supported trackers and runs protocol detection on incoming connections.
- If the Mini is configured to report to the Plaspy endpoint the platform will identify the device messages and associate them with the linked device record automatically.
- Proper device identifier configuration on the tracker side is important so Plaspy can match messages to the correct account.
- For typical deployments users do not need to pick a protocol inside Plaspy once the device is pointing at the Plaspy endpoint.
- When issues occur, reviewing device configuration and the manufacturer documentation is the recommended first step.

## Transport and Connection Context

The Mini can send telemetry over the cellular network to Plaspy using common transport methods. These connection details are the public settings you will normally configure on the device so it reports to Plaspy.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct configuration options.
- The port used by Plaspy for device connections is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and your chosen configuration.
- Choose the transport supported by your Mini firmware and avoid mixing transport types for the same device to reduce configuration errors.
- Confirm APN and cellular settings on the tracker so it can reach d.plaspy.com or 54.85.159.138 from the network.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and configuration commands; always check the tracker firmware level when validating compatibility.
- Hardware revisions or variant SKUs may alter supported bands or available positioning modes and influence behavior reported to Plaspy.
- Manufacturer side configuration processes and default settings can differ between batches; ensure the device is set to report to the Plaspy domain or IP.
- Transport selection (UDP versus TCP) may impact delivery characteristics; pick the transport that matches the device firmware capabilities.
- Plaspy’s automatic protocol detection reduces the need for manual selection, but correct device identification fields are still required.
- For advanced or atypical deployments consult Sentar documentation to confirm if any device specific commands or settings are required.

## Why Protocol Understanding Matters

A practical understanding of the Mini communication protocol helps ensure reliable onboarding, troubleshooting, and long term stability when devices report into Plaspy. Knowing the general behavior of the protocol reduces guesswork and speeds resolution when devices are not appearing as expected.

- Helps verify the device is pointing to the correct endpoint and transport so data reaches Plaspy.
- Guides troubleshooting steps when location updates are missing or telemetry fields are incomplete.
- Allows administrators to anticipate how firmware or hardware revisions might change behavior and what to validate after updates.
- Supports configuring sensible reporting intervals and event triggers that match the use case and battery life expectations.
- Improves collaboration with the manufacturer by providing focused questions about specific firmware behaviors or message fields.

## Why Use Plaspy with This Protocol

Using the Sentar Mini with Plaspy gives organizations and families a straightforward path to continuous location visibility and device health monitoring without complex per device port management. Plaspy’s ingestion endpoint and automatic protocol detection simplify onboarding so the Mini’s multi mode positioning and telemetry can be used quickly for alerts, geofencing, and historical playback.

If you want to learn more about how Plaspy works with personal and small asset trackers, visit https://www.plaspy.com for platform details and deployment options. For the most current device and firmware specific protocol information verify details on the manufacturer website http://www.sentarsmart.com/ since protocol support and firmware behavior can change over time.
