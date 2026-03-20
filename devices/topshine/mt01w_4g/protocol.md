---
slug: /topshine/mt01w_4g/protocol
id: mt01w_4g-protocol
sidebar_label: Protocol
title: TopShine - MT01W-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TopShine MT01W-4G GPS tracker showing how it communicates with Plaspy for fleet and video enabled deployments
keywords:
  - TopShine MT01W-4G protocol
  - TopShine MT01W-4G GPS protocol
  - TopShine MT01W-4G communication
  - MT01W-4G Plaspy compatibility
  - MT01W-4G tracking protocol
  - Plaspy device protocol
  - GPS tracker video telemetry
  - fleet tracking TopShine
  - vehicle tracker protocol
  - in vehicle video tracker
---

# TopShine - MT01W-4G Protocol

This page explains the public protocol context for integrating the TopShine MT01W-4G tracker with Plaspy. It covers the general communication role of the device, how Plaspy receives reports, and the transport settings commonly used to connect MT01W-4G units to Plaspy without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this document focuses on public, non sensitive context for successful integration and troubleshooting.

## Protocol Overview

The communication protocol for the MT01W-4G defines how the tracker sends position, telemetry, alarms, and status updates to a remote server and how the server can issue remote actions where supported. With the MT01W-4G, video streams and telemetry coexist on the device, and the protocol ensures that location and event data are delivered to the fleet platform for mapping, alerts, and historical playback.

- Enables the MT01W-4G to report GPS positions, telemetry and event alerts to Plaspy for real time monitoring.
- Carries device identification and status information so Plaspy can associate incoming reports with the correct vehicle and configuration.
- Transmits alarm events such as SOS, crash alerts, geo fence breaches, and fuel events to trigger platform notifications and workflows.
- Supports telemetry required for engine and driver status reporting used by Plaspy for analytics and operational insights.
- Works alongside the device video subsystem so that video and GPS traces are synchronized within the platform view.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports at a shared network endpoint and automatically determines which tracker protocol a device is using. When the MT01W-4G is configured to report to Plaspy, the user typically does not need to select a protocol inside the Plaspy interface as long as the device is sending data to the correct server and port.

- Plaspy uses a common server endpoint and port for all supported devices to simplify configuration.
- The platform inspects incoming connections to identify the reporting device and maps messages to the correct parser automatically.
- Correct device identification relies on the tracker sending the expected public identification fields as documented by the manufacturer.
- If a device is not detected automatically, checking transport settings and device configuration toward the Plaspy endpoint is the recommended first step.
- Plaspy provides logs and connection diagnostics to help verify that the MT01W-4G is reaching the platform when reporting to the shared endpoint.

## Transport and Connection Context

The MT01W-4G can be configured to use standard network transports to send telemetry and alarms. Plaspy accepts device reports over the same port for all devices, and the MT01W-4G may be pointed to the Plaspy domain or direct IP depending on deployment preferences and DNS availability.

- Devices report to the Plaspy server at d.plaspy.com or directly to 54.85.159.138.
- The common Plaspy port for device reporting is 8888 and all Plaspy devices use this same port.
- The MT01W-4G may be configured to use UDP or TCP on port 8888 depending on device support and chosen transport reliability.
- Selecting UDP or TCP depends on the environment and firmware options on the tracker; verify device settings before deployment.
- Network considerations such as carrier NAT, firewall rules, and APN settings can affect connectivity to d.plaspy.com or the server IP.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available fields, and optional features; confirm the tracker firmware when validating behavior.
- Hardware revisions or optional modules (for example video camera support or fuel sensors) may add or change telemetry fields exposed by the device.
- Transport selection between UDP and TCP can affect delivery characteristics; choose the transport that matches your reliability and latency needs.
- Manufacturer default reporting settings might point to the vendor platform; update the server address to d.plaspy.com or 54.85.159.138 and port 8888 for Plaspy integration.
- Plaspy automatically detects protocol on incoming connections, but correct device ID and reporting cadence are required for reliable detection.
- For advanced features such as remote commands or immobilization, ensure the device firmware supports the behavior and the feature is enabled.

## Why Protocol Understanding Matters

Understanding how the MT01W-4G communicates helps ensure reliable setup, faster troubleshooting, and predictable long term operation when the device is paired with Plaspy. Clear knowledge of the public protocol context reduces integration friction and aids in diagnosing connectivity or data mapping issues.

- Speeds initial provisioning by ensuring the tracker points to the correct Plaspy endpoint and transport.
- Helps isolate network issues such as carrier blocking, firewalling, or incorrect APN settings that can prevent reports from reaching Plaspy.
- Enables consistent mapping of device events to platform alerts so alarm and immobilization workflows behave as expected.
- Improves maintenance planning by clarifying which firmware or hardware changes could affect reporting and feature availability.
- Supports informed discussions with the device manufacturer when vendor specific behavior needs confirmation.

## Why Use Plaspy with This Protocol

Pairing the TopShine MT01W-4G with Plaspy gives fleet operators integrated visibility that combines GPS location, vehicle telemetry, and in vehicle video into a single operational view. This combination is useful for organizations that need synchronized evidence for incidents, driver monitoring, and actionable alerts to improve security and operational performance.

Plaspy simplifies device connectivity by using a shared server endpoint and port and by automatically detecting the tracker protocol when the MT01W-4G reports to the platform. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer documentation consult TopShine at https://www.gztopshine.com/.
