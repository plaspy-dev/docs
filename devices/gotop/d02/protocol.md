---
slug: /gotop/d02/protocol
id: d02-protocol
sidebar_label: Protocol
title: GOTOP - D02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the GOTOP D02 pet tracker and how it communicates with Plaspy for reliable location reporting and alerts
keywords:
  - GOTOP D02 protocol
  - GOTOP D02 GPS
  - GOTOP D02 Plaspy compatibility
  - GOTOP D02 communication
  - GOTOP pet tracker protocol
  - GOTOP D02 tracking protocol
  - GPS tracker protocol Plaspy
  - Plaspy device compatibility
  - GOTOP D02 waterproof tracker
  - GOTOP D02 real time tracking
---

# GOTOP - D02 Protocol

This page provides public protocol context for using the GOTOP D02 pet tracker with Plaspy. It describes how the device typically communicates with Plaspy servers and what role the tracker reporting protocol plays in delivering location, alerts, and status information to the platform. The D02 is a waterproof pet tracker that supports GPS, WiFi, LBS, and BeiDou positioning and offers features such as real time tracking, SMS location links, sound and light seek, and remote voice monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on high level, non sensitive protocol context and practical integration notes rather than firmware internals.

## Protocol Overview

The communication protocol for the GOTOP D02 governs how location data, status updates, alarms, and simple remote commands are sent from the device to a backend server such as Plaspy. In public terms, the protocol ensures the tracker can identify itself to the server, report regularly or on events, and carry small control or acknowledgement messages when supported by the device and network.

- Enables the D02 to report position fixes and positioning method indicators to the server.
- Carries device identity and session information so Plaspy can associate reports with the correct tracker.
- Transmits event notifications such as low battery, geo fence triggers, or SOS alerts for use in monitoring and alerts.
- Allows limited remote control signaling where the device supports remote configuration or voice monitoring features.
- Provides a predictable reporting cadence so Plaspy can calculate movement, geofencing, and activity metrics.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many tracker models and automatically detect the tracker protocol when data arrives at the shared Plaspy endpoint. In most cases, users do not need to manually select a protocol inside Plaspy if the device is pointed to the correct Plaspy address.

- Plaspy listens on the shared domain name d.plaspy.com and the public server IP 54.85.159.138.
- The Plaspy listening port is 8888 and this same port is used for all supported devices.
- Plaspy supports devices reporting over TCP or UDP on port 8888 and will accept connections on either transport.
- When the device sends its first reports to the Plaspy endpoint, Plaspy matches the incoming data to its supported protocol patterns and associates the device.
- Proper device configuration to report to d.plaspy.com or 54.85.159.138 on port 8888 is the usual requirement to enable automatic detection.

## Transport and Connection Context

The D02 can be configured to use either UDP or TCP transport depending on device firmware and network conditions. Transport choice affects delivery behavior but does not change the high level purpose of the protocol, which is to reliably move telemetry and event data from the tracker to Plaspy.

- Devices may be set to report to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138.
- Both UDP and TCP are supported on port 8888; select the transport supported by your device and network.
- All Plaspy devices use the same port value, simplifying configuration and firewall rules.
- Cellular network settings on the tracker must allow outbound GPRS or LTE data to the Plaspy endpoint.
- DNS resolution for d.plaspy.com or direct IP targeting are both valid approaches depending on device capabilities.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available events, and optional features; check the device firmware level when troubleshooting.
- Hardware revisions or regional SKUs may include slight differences in supported transports or feature flags that affect protocol behavior.
- Some features such as remote voice monitoring or recording depend on manufacturer firmware and may be optional in the protocol.
- Transport choice (UDP versus TCP) can influence reliability under poor network conditions; choose the option recommended for your device firmware.
- Always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to allow Plaspy to receive data.
- Cross check manufacturer release notes and configuration guides when encountering unexpected behavior.

## Why Protocol Understanding Matters

Understanding the D02 communication protocol at a high level helps with setup, troubleshooting, and ensuring reliable long term operation with Plaspy. Knowing the connection context and what the tracker reports enables faster resolution when a device does not appear online or when certain telemetry is missing.

- Helps confirm the device is sending data to the correct Plaspy endpoint and port.
- Assists in interpreting which events and telemetry the tracker is expected to report.
- Guides transport selection and firewall configuration for reliable delivery.
- Supports effective communication with manufacturer support by using common protocol terms.
- Enables predictable behavior for geofencing, low battery alerts, and activity reports.

## Why Use Plaspy with This Protocol

Using the GOTOP D02 with Plaspy provides a straightforward path to centralize pet tracking, alerts, and activity monitoring. Plaspy’s automatic protocol detection and unified port simplify device onboarding so teams can focus on configuring alerts, geofences, and reporting intervals rather than low level integration.

If you want to learn more about how Plaspy works with the GOTOP D02 and other devices, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and configuration instructions, please verify information with the manufacturer at https://www.gotop.cc/ since protocol support and firmware behavior can change over time.
