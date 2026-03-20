---
slug: /lk_gps/lk100/protocol
id: lk100-protocol
sidebar_label: Protocol
title: LK-GPS - LK100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the LK100 pet tracker and Plaspy compatibility with connection guidance
keywords:
  - LK-GPS LK100 protocol
  - LK100 GPS tracker protocol
  - LK100 communication protocol
  - LK100 tracking protocol
  - Plaspy LK100 compatibility
  - LK-GPS tracker Plaspy
  - pet tracker LK100 protocol
  - LK100 real time tracking
  - LK100 A GPS LBS
  - LK100 geofence alerts
---

# LK-GPS - LK100 Protocol

This page provides a public protocol overview for the LK-GPS LK100 Mini Pet GPS Tracker and how it communicates with the Plaspy platform. It focuses on the communication context that matters for integration and device reporting without exposing implementation specifics. The intent is to help operators, integrators, and technical users understand what to check when sending LK100 data to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact behavior of message timing and optional features can vary by firmware version, hardware revision, and manufacturer configuration, so this page emphasizes common, non sensitive protocol context and practical connection advice.

## Protocol Overview

The LK100 reporting protocol is the method the tracker uses to identify itself and deliver location and status data to a remote server. For Plaspy, that protocol provides the telemetry and alerts needed for real time tracking and platform features such as history playback, SOS notification, and geofence alerts.

- The protocol conveys periodic location updates and status signals that Plaspy uses for mapping and alerts.
- Identification data in reports allows Plaspy to associate each incoming message with a specific LK100 device.
- Telemetry may include GPS derived positions, LBS assisted fixes, battery and movement status, and event flags such as SOS or geofence breaches.
- Transport-agnostic reporting lets the tracker use either UDP or TCP as configured by the device or operator.
- Plaspy consumes the incoming reports to provide real time tracking, historical routes, and notification workflows without requiring users to expose internal device details.

## How Plaspy Detects the Protocol

Plaspy receives tracker messages at a unified endpoint and uses automatic detection to identify the tracker protocol in incoming connections. In most cases the user does not need to select a protocol inside Plaspy as long as the device is configured to report to the Plaspy endpoint.

- Plaspy listens on a single public endpoint so devices can point their server address to d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and the shared port used by all devices is 8888.
- Devices may be configured to send data over UDP or TCP depending on device capabilities and settings.
- When a properly configured device reports to the Plaspy endpoint, the platform will automatically detect the tracker protocol and route messages to the correct processing pipeline.
- Manual protocol selection in Plaspy is typically unnecessary when the tracker is pointed to the Plaspy endpoint and properly configured.

## Transport and Connection Context

Connection details determine how the LK100 delivers its reports to Plaspy. The LK100 can be set up to use either UDP or TCP and should be configured to target the Plaspy endpoint and port used by the platform.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and operator preference.
- Plaspy’s public server domain for tracker reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138 and the platform accepts connections on port 8888.
- All devices supported by Plaspy use the same port for reporting which simplifies device configuration and firewall rules.
- Confirm device settings such as server address, transport type, and reporting interval to ensure messages reach Plaspy reliably.

## Protocol Compatibility Notes

- Compatibility can vary by firmware version; newer or older firmware may change message timing or optional fields.
- Hardware revisions or regional variants from the manufacturer can alter available features such as two way audio or LBS fallback behavior.
- Transport selection between UDP and TCP can affect delivery characteristics and should be chosen based on network reliability and device capability.
- Ensure the device is configured to send reports to the Plaspy endpoint d.plaspy.com or directly to the IP 54.85.159.138 on port 8888.
- Validate SOS, geofence, and low battery alert behavior after configuration since event reporting may be implemented differently between firmware releases.
- When in doubt, check the manufacturer documentation for the exact firmware build installed on your devices to confirm message features.

## Why Protocol Understanding Matters

Understanding how the LK100 communicates with Plaspy helps ensure a smooth setup, accurate tracking, and reliable alerting over time. Clear protocol awareness reduces troubleshooting time and supports consistent operational monitoring.

- Correct server, transport, and port settings prevent common reporting failures and help devices reach Plaspy reliably.
- Awareness of firmware and hardware differences helps when testing features like SOS, two way communication, and geofencing.
- Knowing that Plaspy uses a unified port and automatic protocol detection simplifies configuration and onboarding.
- Understanding the kinds of telemetry the tracker sends enables administrators to configure useful alerts and reporting intervals in Plaspy.
- Being informed about LBS fallback and A GPS behavior helps manage expectations for position accuracy in challenging environments like indoors or tunnels.

## Why Use Plaspy with This Protocol

Using the LK100 with Plaspy provides a straightforward way to collect real time location and event data for pet safety and operational visibility. Plaspy accepts LK100 reports on a single platform endpoint, normalizes incoming data, and presents it in tools for live tracking, history review, and alerting.

If you want to learn more about how Plaspy can work with the LK100 and other devices, visit https://www.plaspy.com. For the latest firmware specific behavior, protocol details, and manufacturer configuration guidance, please verify information on the official LK GPS website https://www.lk-gps.com.
