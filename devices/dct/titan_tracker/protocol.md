---
slug: /dct/titan_tracker/protocol
id: titan_tracker-protocol
sidebar_label: Protocol
title: DCT - Titan Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for integrating DCT Titan Tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - DCT Titan Tracker protocol
  - DCT Titan Tracker GPS protocol
  - DCT Titan Tracker Plaspy compatibility
  - Titan Tracker communication protocol
  - Titan Tracker tracking protocol
  - DCT GPS tracker protocol
  - Plaspy device integration
  - Titan Tracker 3G 4G protocol
  - Titan Tracker SOS protocol
  - Fleet tracking Titan Tracker
---

# DCT - Titan Tracker Protocol

This page documents the public protocol context for using the DCT Titan Tracker with Plaspy. It focuses on how the device communicates with Plaspy in general, the shared connection settings Plaspy provides, and the kinds of telemetry and events the tracker typically reports for monitoring and operational workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol so users do not usually need to select a protocol manually inside the platform. Exact protocol behavior for the Titan Tracker can vary with firmware version, hardware revision, and manufacturer implementation, so this page is intended as a high level, public reference rather than a firmware specific guide.

## Protocol Overview

The communication protocol for the Titan Tracker defines the messages and events the device sends to a remote server and how those messages enable real time tracking, alerts, and device health reporting. When used with Plaspy the protocol conveys location, SOS and safety events, motion and impact telemetry from the accelerometer, and status updates that Plaspy aggregates into dashboards and alerts.

- Transports position updates and timestamped telemetry to Plaspy for live monitoring and historical playback.
- Carries SOS and panic activations plus optional vibration feedback confirmations for situational awareness and escalation.
- Reports accelerometer driven motion and impact events to trigger alerts and logging in monitoring workflows.
- Sends device connectivity and health indicators so Plaspy can surface battery, network fallback, and availability status.
- Works with Plaspy to link sensor events to notifications, geofencing, and operational rules without exposing firmware internals.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single, shared endpoint and port for all supported trackers and automatically identifies the device protocol based on the reporting device. In most cases, if the Titan Tracker is configured to report to the Plaspy endpoint, no manual protocol selection is required inside the Plaspy product.

- Plaspy accepts device connections at d.plaspy.com which resolves to the public server address.
- The Plaspy server reachable for device reporting is 54.85.159.138.
- Plaspy listens on port 8888 and all devices supported by Plaspy use the same port.
- Plaspy automatically detects the tracker protocol so proper reporting to the Plaspy endpoint is normally sufficient.
- Users typically configure the tracker to report to the Plaspy endpoint and transport and Plaspy handles protocol identification and ingestion.

## Transport and Connection Context

Titan Tracker models may be configured to use different transport types depending on SKU, firmware, and deployment requirements. The device reporting destination and transport type determine how the tracker establishes connectivity to Plaspy and how network fallbacks behave in practice.

- The Titan Tracker can be configured to use UDP or TCP on port 8888 depending on device support and chosen settings.
- Devices may be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138.
- All devices in Plaspy share the same port number 8888 which simplifies device configuration across models.
- Transport selection can affect message delivery characteristics such as retransmission behavior and latency.
- Confirm the device is configured to report to the Plaspy endpoint to enable automatic protocol detection and ingestion.

## Protocol Compatibility Notes

- Firmware differences across Titan Tracker SKUs and revisions may alter supported message types, event naming, or reporting intervals.
- Hardware revisions including 3G and 4G variants can affect network behavior and which transport modes are available.
- Manufacturer side configuration and the Pegasus Gateway IoT Platform may offer OTA configuration or device management features that interact with reporting.
- Choosing UDP versus TCP should reflect deployment needs for reliability versus latency and be validated for your operational context.
- Validate device settings against the latest manufacturer documentation to confirm which telemetry and events are available for a specific SKU and firmware.
- When in doubt, test a device in a controlled environment to confirm it reports expected events and location updates to the Plaspy endpoint.

## Why Protocol Understanding Matters

Understanding how the Titan Tracker communicates helps ensure a smooth deployment into Plaspy, reduces troubleshooting time, and supports predictable long term operations. Knowledge of the communication context aids configuration choices and clarifies how events and telemetry surface inside Plaspy.

- Ensures devices are configured to report to the correct Plaspy endpoint and transport so data is received reliably.
- Helps diagnose connectivity issues when devices do not appear in the Plaspy dashboard or alerts are missing.
- Clarifies what events and sensor data the tracker can provide so rules and notifications in Plaspy are meaningful.
- Informs decisions about transport selection and network fallback for different coverage scenarios.
- Supports planning for firmware updates or hardware changes that could change reporting behavior.

## Why Use Plaspy with This Protocol

Pairing the DCT Titan Tracker with Plaspy provides organizations with consolidated visibility into location, SOS alerts, motion and impact events, and device health across portable assets and mobile personnel. Plaspy’s ingestion of the Titan’s telemetry enables real time monitoring, escalation workflows, and historical reporting that supports fleet management, lone worker protection, and asset tracking.

If you want to learn more about how Plaspy handles device onboarding, protocol detection, and operational monitoring for devices like the Titan Tracker visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, supported SKUs and technical datasheets please verify with the manufacturer at https://www.digitalcomtech.com/ as implementations and firmware versions can change over time.
