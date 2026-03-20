---
slug: /castel/idd_213e/protocol
id: idd_213e-protocol
sidebar_label: Protocol
title: Castel - IDD-213E Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for using the Castel IDD-213E GPS tracker with Plaspy server settings and connection context
keywords:
  - Castel IDD-213E protocol
  - Castel IDD-213E GPS protocol
  - Castel IDD-213E Plaspy
  - Castel GPS tracker protocol
  - IDD-213E tracking protocol
  - vehicle diagnostics tracking
  - OBD II GPS integration
  - fleet tracking Castel IDD-213E
  - 3G GPS tracker protocol
  - Plaspy tracker compatibility
---

# Castel - IDD-213E Protocol

This page describes the public protocol context for integrating the Castel IDD-213E with Plaspy. It focuses on how the device communicates with Plaspy in general terms, the connection settings you will commonly configure on the tracker, and the practical implications for tracking and telematics. It does not disclose private implementation details or vendor confidential formats.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior for the IDD-213E can vary depending on firmware version, hardware revision, and manufacturer implementation, so always verify device-specific details with Castel when needed.

## Protocol Overview

The communication protocol for the IDD-213E governs how the device reports GPS position, OBD diagnostic data, and alert events to a backend server. In Plaspy, the tracker sends its telemetry to a common endpoint where the platform identifies the incoming data and processes it for mapping, diagnostics, and alerting.

- Enables the IDD-213E to deliver GPS location and OBD diagnostic parameters to a remote server
- Carries telemetry such as speed, RPM, fuel and diagnostic trouble code summaries for fleet analysis
- Supports transmitting event notifications like speeding, harsh driving, idle alerts, and SMS alarms to the backend
- Allows the device to be identified by Plaspy so telemetry is associated with the correct vehicle record
- Facilitates real time and near real time monitoring when used over the device cellular connection

## How Plaspy Detects the Protocol

Plaspy provides a shared server endpoint and listens on a single port for all supported devices. When an IDD-213E is pointed at the Plaspy endpoint and sends its telemetry, Plaspy automatically identifies the tracker protocol and routes the data to the correct processing pipeline. In most cases, users do not need to manually pick a protocol inside Plaspy.

- Plaspy listens on a single port used by all devices to simplify device configuration
- Devices pointed to the Plaspy endpoint are automatically detected by the platform
- Proper device configuration to report to the Plaspy server is the primary requirement for detection
- Manual protocol selection in Plaspy is usually unnecessary when the device reports to the Plaspy endpoint
- Detection covers telemetry and common event types without exposing device internals

## Transport and Connection Context

The IDD-213E can be configured to send its data over the cellular network to a Plaspy endpoint using either UDP or TCP depending on device support and user preference. Plaspy accepts connections at a shared domain and IP address on the platform port, so you can configure the tracker to use the domain name or the numeric address if required by your provisioning process.

- The device may be configured to send data via UDP or TCP on port 8888
- Plaspy server domain to use is d.plaspy.com
- Plaspy server IP address available for configuration is 54.85.159.138
- Plaspy uses the same port for all supported devices to keep configurations consistent
- Choosing UDP or TCP depends on device firmware options and the desired tradeoffs between overhead and delivery behavior

## Protocol Compatibility Notes

- Firmware revisions can change how the IDD-213E formats and schedules telemetry; check firmware release notes for protocol changes
- Hardware revisions or regional variants may expose different configuration options or supported transport modes
- Manufacturer-side settings such as default reporting intervals and OBD parameter lists may differ between units
- Switching between UDP and TCP can affect reliability and latency depending on network conditions and device implementation
- Always validate that the device is configured to report to d.plaspy.com or the provided IP to ensure proper delivery
- For advanced OBD or vehicle bus features, confirm that the specific vehicle protocols supported by the device match your fleet needs

## Why Protocol Understanding Matters

Understanding how the IDD-213E communicates with Plaspy helps ensure a smooth setup, predictable data flow, and reliable diagnostics for fleet operations. Awareness of transport choices, firmware impact, and manufacturer settings reduces integration surprises and accelerates troubleshooting.

- Helps verify that the device is reporting to the correct Plaspy endpoint and port
- Makes it easier to diagnose missing telemetry or intermittent connections by checking transport and reporting settings
- Guides expectations about which OBD parameters and diagnostic items will be available in Plaspy
- Supports informed decisions about choosing UDP or TCP based on network reliability and data priorities
- Reduces time spent validating vehicle compatibility when deploying at scale

## Why Use Plaspy with This Protocol

Using the Castel IDD-213E with Plaspy gives fleets visibility into both vehicle location and OBD diagnostic data through a unified backend endpoint. The device's plug and play design, OBD II and heavy vehicle standard support, and cellular connectivity combine with Plaspy's automatic protocol detection and single port architecture to simplify large scale deployments.

If you are evaluating options for tracking, remote diagnostics, or driver behavior monitoring, configuring IDD-213E devices to report to the Plaspy endpoint can reduce configuration overhead and centralize data management. To learn more about how Plaspy handles device integration and fleet features, visit https://www.plaspy.com. Please also verify current device protocol details and firmware behavior with the manufacturer at http://www.castelecom.com/ since protocol support and implementation details can change over time.
