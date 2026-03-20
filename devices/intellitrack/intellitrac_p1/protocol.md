---
slug: /intellitrack/intellitrac_p1/protocol
id: intellitrac_p1-protocol
sidebar_label: Protocol
title: Intellitrack - Intellitrac P1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Intellitrack Intellitrac P1 and how it communicates with the Plaspy platform
keywords:
  - Intellitrack Intellitrac P1 protocol
  - Intellitrack GPS protocol
  - Intellitrac P1 tracking protocol
  - Intellitrac P1 communication
  - Intellitrack Plaspy compatibility
  - Intellitrac P1 GPS tracker
  - personal GPS tracker protocol
  - Plaspy device integration
  - GPS tracker protocol guide
  - asset and personal tracking protocol
---

# Intellitrack - Intellitrac P1 Protocol

This page describes the public protocol context for using the Intellitrac P1 personal GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in broad, non sensitive terms so you can understand what to configure and what to expect when connecting an Intellitrac P1 to Plaspy for tracking and monitoring.

The Intellitrac P1 is a compact, waterproof personal tracker with an internal backup battery and built in motion and altitude sensing. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the information here is intended as a general integration guide rather than a firmware specific specification.

## Protocol Overview

The communication protocol for the Intellitrac P1 governs how the device reports position, motion, sensor readings, and device status to a remote server such as Plaspy. In practical terms, the protocol enables the tracker to identify itself, deliver periodic or event driven updates, and provide the telemetry needed for monitoring and alerts.

- Provides device identification and session information so Plaspy can associate reports with the correct tracker
- Transmits location updates and timing information suitable for mapping and replay in Plaspy
- Carries sensor data such as motion and height readings that support activity detection and context
- Conveys device status indicators including battery and connectivity state for operational monitoring
- Supports both regular reporting and event driven messages so the tracker can be efficient on power and data usage

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections at a common endpoint and automatically determines which tracker protocol is being used based on the reported traffic. In most cases a properly configured Intellitrac P1 will begin reporting to the Plaspy endpoint and require no manual protocol selection inside the platform.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138
- The platform listens on port 8888 and all devices in Plaspy use the same port
- Devices set to report to d.plaspy.com or to 54.85.159.138 on port 8888 will reach Plaspy
- The device may be configured using UDP or TCP on port 8888 depending on device capabilities and settings
- Because Plaspy automatically detects the tracker protocol, users typically do not need to choose a protocol manually when the tracker is correctly pointed at the Plaspy endpoint

## Transport and Connection Context

Connection context covers how the Intellitrac P1 reaches Plaspy over the mobile network and which transport options are commonly used. The tracker supports sending data over standard mobile IP networks and can be set to use UDP or TCP depending on the desired tradeoffs between latency and reliability.

- Devices may point to d.plaspy.com or directly to 54.85.159.138 as the server address
- Plaspy listens on port 8888 and uses that same port for all supported devices
- The device may be configured to use UDP or to use TCP on port 8888 depending on configuration and firmware support
- UDP can minimize overhead and latency while TCP provides additional delivery guarantees when needed
- Correct APN and SIM configuration on the device side is required for reliable delivery to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional features; always check the device firmware release notes
- Hardware revisions or regional variants may alter available sensors or radio behavior and affect what data is reported
- Transport selection between UDP and TCP can affect delivery and should be chosen based on network conditions and operational priorities
- Manufacturer side settings such as default reporting intervals or power saving modes may differ between shipments
- Validate compatibility for any fleet at scale by testing a sample device before broad deployment
- Consult the official manufacturer guidance for device specific configuration steps and limitations

## Why Protocol Understanding Matters

Understanding how the Intellitrac P1 communicates helps ensure accurate setup, reliable reporting, and faster troubleshooting when integrating with Plaspy. Knowing which transport, server endpoint, and expected message behavior apply reduces time spent diagnosing connectivity and data issues.

- Confirms the correct server address and port are configured so data reaches Plaspy
- Helps choose UDP or TCP transport to match network reliability and latency needs
- Aids troubleshooting when reports are missing by checking network, SIM, and device state
- Ensures sensor data such as motion and height are captured and interpreted correctly by Plaspy
- Supports planning for battery life and reporting intervals based on actual device behavior

## Why Use Plaspy with This Protocol

Using the Intellitrac P1 with Plaspy provides a straightforward path to turn delivered GPS and sensor data into actionable location intelligence. For organizations tracking people or valuable portable assets, Plaspy receives the device reports, automatically detects the protocol, and surfaces position and status data for monitoring, alerts, and historical analysis.

Plaspy is designed to accept reports at a shared endpoint so devices like the Intellitrac P1 can be integrated without per device port configuration. To learn more about how Plaspy handles device integrations and to explore platform capabilities, visit https://www.plaspy.com. Protocol support and device behavior can change with firmware and manufacturer updates, so please verify current device specific protocol details and firmware notes on the manufacturer site at https://www.systech-iot.com/.
