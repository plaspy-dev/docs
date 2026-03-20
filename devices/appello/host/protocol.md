---
slug: /appello/host/protocol
id: host-protocol
sidebar_label: Protocol
title: Appello - Host Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Appello Host tracker and Plaspy connectivity
keywords:
  - Appello Host protocol
  - Appello Host GPS
  - Appello Host tracking
  - Appello Host communication
  - Appello Host Plaspy compatibility
  - Appello GPS tracker protocol
  - pet GPS tracker protocol
  - tracker to server connection
  - GPS device protocol Plaspy
  - Host tracker Plaspy setup
---

# Appello - Host Protocol

This page covers the public protocol context for using the Appello Host tracker with Plaspy. It explains how the device communicates in broad terms and how Plaspy receives and interprets reports from the tracker, using public connection settings and general protocol concepts rather than device internals.

The Appello Host is part of the Appello 4P family, a compact pet GPS tracker designed for long battery life, waterproof outdoor use, and wireless charging via a power base. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, though exact behavior can vary with firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker protocol defines how the Appello Host reports location, status, and alerts to a remote server so platforms like Plaspy can present useful telemetry to users. Public protocol context focuses on message direction, connection method, and the kinds of data typically reported rather than low level packet formats.

- Enables the tracker to identify itself and report periodic location updates and status changes.
- Carries device telemetry such as positional data, movement alerts, battery and connectivity state for use in Plaspy.
- Supports lifecycle actions like registration, periodic reporting, and event notifications that Plaspy consumes.
- Provides the means for the device to reach the Plaspy endpoint so the platform can detect and parse incoming messages.
- Allows the power base and the small GPS unit to coordinate alerts when a pet leaves the power base range.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for all supported devices and uses the incoming connection and message characteristics to determine the tracker protocol. In most cases a properly configured Appello Host will report to Plaspy and no manual protocol selection is required in the platform.

- Plaspy server domain is d.plaspy.com which devices can be pointed to for reporting.
- Plaspy server IP is 54.85.159.138 and is available as an alternate target for device configuration.
- The port used by Plaspy is 8888 and this is the common port for all supported devices.
- Plaspy automatically detects the tracker protocol when properly routed to the Plaspy endpoint.
- Users typically do not need to choose a protocol in Plaspy if the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.

## Transport and Connection Context

Connection transport is a configuration-level choice on many trackers and determines how the device opens and maintains a session to Plaspy. For setup and troubleshooting it is helpful to know the acceptable transports and target endpoints used by the platform.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices can be set to send reports to d.plaspy.com or directly to 54.85.159.138 as the Plaspy server target.
- All devices in Plaspy use the same port, simplifying server-side routing and automatic detection.
- Transport selection can affect delivery characteristics such as latency and reliability but does not change the public role of the protocol.
- Verify device-side settings in the tracker configuration utility or manufacturer app to ensure the correct endpoint and transport are selected.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and optional features; check the device firmware version when validating compatibility.
- Hardware revisions and model variants may implement features differently even under the same model name.
- Manufacturer configuration tools sometimes expose transport and server fields; ensure they point at d.plaspy.com or 54.85.159.138 on port 8888.
- The device may support both UDP and TCP but behavior can differ based on the selected transport and network environment.
- Plaspy detects protocols automatically, but a device must be correctly configured to reach the Plaspy endpoint for detection to succeed.
- When in doubt, consult official manufacturer documentation to confirm supported firmware and configuration steps.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps administrators and integrators set up devices correctly, reduces setup time, and makes troubleshooting more efficient when issues arise with reporting or alerts.

- Ensures the tracker is pointed at the correct Plaspy endpoint so messages reach the platform reliably.
- Helps interpret device behavior when reports are missing or intermittent by considering transport and firmware differences.
- Simplifies configuration of transport options such as UDP or TCP so expected delivery characteristics match operational needs.
- Improves long term reliability by informing firmware update decisions and compatibility checks before wide scale deployment.
- Assists support teams in correlating device-side logs with incoming server records when diagnosing issues.

## Why Use Plaspy with This Protocol

Using the Appello Host tracker with Plaspy gives organizations and pet owners centralized visibility into location and alerting data from the device. Plaspy’s single endpoint approach and automatic protocol detection reduce the administrative overhead of integrating diverse trackers, while enabling consistent telemetry handling and alerting.

To learn more about Plaspy and how it can accept reports from Appello Host trackers, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer instructions consult the official Appello site at http://www.cnjeo.com/ as protocol support and firmware behavior can change over time and should be verified with the manufacturer.
