---
slug: /wp/m7/protocol
id: m7-protocol
sidebar_label: Protocol
title: WP - M7 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the WP M7 GPS tracker and how it communicates with Plaspy for reliable tracking
keywords:
  - WP M7 protocol
  - WP M7 GPS protocol
  - WP M7 communication
  - WP M7 tracking protocol
  - WP M7 Plaspy compatibility
  - WP M7 device integration
  - WP M7 GPRS UDP TCP
  - WP M7 tracker setup
  - Plaspy device protocol
  - vehicle tracking WP M7
---

# WP - M7 Protocol

This page covers the public protocol context for using the WP M7 portable GPS tracker with Plaspy. It explains how the tracker reports location and status in broad terms and how those communications are handled by Plaspy without exposing private implementation details. The WP M7 combines GPS and GSM GPRS connectivity with SMS, GPRS, UDP, and TCP reporting options and features such as detached alert, motion reporting, and long standby battery life.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The guidance here focuses on the communication context required for successful integration into Plaspy rather than low level packet formats or proprietary commands.

## Protocol Overview

The tracker reporting protocol defines how the WP M7 transmits position, status, and alerts to a remote server and how the server can optionally send commands or configuration back to the device. In practice this means the device periodically or event driven sends data that Plaspy interprets to produce location, movement, and status updates for monitoring and reporting.

- Enables the WP M7 to send GPS position and status updates to a remote endpoint for tracking and alerts
- Carries event notifications such as detached tamper alerts, low battery warnings, and motion changes
- Supports multiple transports so the device can adapt to network conditions and operator preference
- Allows Plaspy to receive usable telemetry for mapping, geofencing, and reporting without requiring manual protocol selection
- Keeps device identification and basic status information visible to the platform so assets can be managed reliably

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and uses connection context and message behavior to identify incoming tracker communications automatically. When a properly configured WP M7 reports to Plaspy, the platform detects the correct handling for that device without the user needing to manually pick a protocol inside Plaspy in most cases.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting
- The port is 8888 and Plaspy uses the same port for all supported devices to simplify configuration
- Plaspy automatically detects the tracker protocol so a device that reports to the Plaspy endpoint will normally be processed without manual protocol selection
- Users typically configure the tracker to report to the Plaspy domain or IP and choose the transport type supported by the device
- Correct device identification on first contact helps Plaspy associate reports with the right asset record and apply relevant processing

## Transport and Connection Context

The WP M7 supports multiple transport options for sending data. When integrating with Plaspy it is important to set the device to use one of the supported transports and ensure the destination host and port point to the Plaspy endpoint. Transport selection can affect latency, reliability, and how the device recovers from network interruptions.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices may point to d.plaspy.com or 54.85.159.138 as the destination for reporting
- All devices in Plaspy use the same port which simplifies device side settings and fleet wide deployment
- Use TCP if you require connection oriented delivery and UDP when low overhead and lower latency are preferred and supported
- Ensure the device APN and mobile network settings allow GPRS data so the device can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware variations between production batches can change specific message behavior and available features
- Hardware revisions may alter supported transports or accessory inputs that affect telemetry reporting
- Manufacturer side configuration commands and default settings can differ so confirm device reporting destination and transport before deploying
- Some features reported by the device such as voice call tracking or radio beacon options may be optional and require enabling
- When using SMS fallback or dual reporting modes validate how the tracker chooses between SMS and GPRS reporting
- Always cross check compatibility with the latest manufacturer documentation for model specific command sets and firmware notes

## Why Protocol Understanding Matters

Understanding how the WP M7 communicates with Plaspy reduces setup time and simplifies troubleshooting, and it helps ensure reliable long term operation for fleet and asset tracking uses.

- Speeds initial setup by ensuring the device reports to the correct host and port and uses a supported transport
- Helps diagnose connectivity issues when devices do not appear in Plaspy or when reports stop arriving
- Clarifies how event reports such as tamper alerts and low battery notifications are delivered to the platform
- Supports planning for power management and reporting intervals to balance battery life and update frequency
- Informs decisions about OTA updates and firmware management when manufacturer updates change message behavior

## Why Use Plaspy with This Protocol

Using the WP M7 with Plaspy provides organizations with a single, managed platform to collect location and event data from portable trackers that are durable and long lived. The combination of the M7 hardware features such as IP67 rating, magnetic mounting, long standby battery, and multi transport reporting options makes it suitable for vehicle and asset tracking use cases where flexible reporting and dependable delivery are important.

If you want to learn more about how Plaspy handles device connectivity and to explore integration options, please visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specifics on the manufacturer site at http://www.wondeproud.com/ before large scale deployment.
