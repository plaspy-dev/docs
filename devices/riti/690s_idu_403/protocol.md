---
slug: /riti/690s_idu_403/protocol
id: 690s_idu_403-protocol
sidebar_label: Protocol
title: Riti - 690s (IDU-403) Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Riti 690s IDU-403 and how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - Riti 690s protocol
  - Riti 690s GPS protocol
  - Riti 690s Plaspy compatibility
  - Riti 690s tracking protocol
  - IDU-403 protocol
  - Riti GPS tracker protocol
  - Riti 690s communication
  - Plaspy device protocol
  - fleet tracking Riti
  - Riti telematics protocol
---

# Riti - 690s (IDU-403) Protocol

This page summarizes the public protocol context for using the Riti Locator 690s (IDU-403) with Plaspy. It focuses on how the device communicates with Plaspy for position reports, telemetry, and events without exposing firmware internals or private parser details. The information here is intended for fleet managers, integrators, and technical staff who need to understand connection behavior and integration considerations.

The Locator 690s ships with built in GNSS and multiple transport options and is Plaspy compatible out of the box. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so device level differences should be verified against official Riti documentation.

## Protocol Overview

At a high level, the tracker protocol defines how the Locator 690s identifies itself to a backend and delivers location, sensor, and event data. When integrated with Plaspy the protocol enables periodic location updates, event notifications from the G sensor, telemetry such as battery voltage and odometer, and buffered uploads after network outages.

- Allows the device to report GNSS fixes and supplemental location methods like A GPS and cell locate to a central backend.
- Transmits event records such as G sensor alerts, SOS triggers, and vehicle fault notifications for immediate handling.
- Carries telemetry values like per second odometer, battery voltage and other diagnostics that Plaspy uses for reports and alerts.
- Supports local buffering so stored records are uploaded when network connectivity is restored to preserve continuity.
- Uses common transport methods supported by the device for reliable delivery of telemetry to a backend endpoint.

## How Plaspy Detects the Protocol

Plaspy receives telemetry from many tracker models and automatically detects the reporting protocol when a device connects to the Plaspy endpoint. In most deployments the user does not need to select a protocol inside Plaspy if the device is configured to send data to the Plaspy server.

- Plaspy listens on a single shared server endpoint for device telemetry and automatically determines the protocol used by the incoming device.
- Plaspy server domain for device reporting is d.plaspy.com which resolves to a public server address.
- The platform uses a single shared port for all supported devices so port configuration is consistent across models.
- When the device is properly pointed at the Plaspy endpoint, detection occurs without manual protocol selection by the user.
- Proper device configuration and current firmware simplify automatic detection and reduce integration time.

## Transport and Connection Context

The Locator 690s supports multiple transport modes and can be configured to report to Plaspy over common network transports. Connection details are kept intentionally simple for integrators: point the device at the Plaspy endpoint and select the transport supported by the unit and the deployment.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and installation preferences.
- The device can be pointed to the Plaspy reporting host d.plaspy.com or the Plaspy server IP 54.85.159.138 as the destination.
- All devices use the same port within Plaspy so port 8888 is common across supported trackers for consistency.
- Transport selection (UDP versus TCP) typically affects delivery guarantees and behavior during poor network conditions; choose according to device capabilities and operational requirements.
- The Locator 690s also supports additional transports such as HTTP, FTP and SMS for other backend or fallback scenarios where those transports are appropriate.

## Protocol Compatibility Notes

- Firmware revisions may change available commands, event formats or telemetry fields; confirm the device firmware version when troubleshooting compatibility.
- Hardware revisions or optional accessories can add or remove features that affect what the device reports to Plaspy.
- Transport mode selected on the device must match the chosen connection method and network environment to ensure reliable delivery.
- Local buffer capacity and upload behavior can differ by firmware and should be validated for deployments with intermittent connectivity.
- Manufacturer side settings such as APN configuration, SIM behavior and remote update options influence live reporting and should be checked.
- Always validate device behavior against the official Riti documentation for model specific limits and supported features.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps ensure successful setup, efficient troubleshooting, and reliable long term operation within Plaspy. Knowing which transport the device uses and how it reports key events reduces downtime and improves the accuracy of alerts and reports.

- Speeds up initial setup by ensuring device reporting settings match Plaspy expectations.
- Helps diagnose network related issues such as packet loss, buffering or transport mismatches.
- Improves alert fidelity by confirming which event types and telemetry fields are available from the device.
- Supports planning for scale and data retention by understanding buffering and upload behavior.
- Enables informed choices about transport selection for delivery reliability in the deployment environment.

## Why Use Plaspy with This Protocol

Using the Locator 690s with Plaspy provides a straightforward path to live maps, route playback, event alerts and vehicle telemetry in a unified fleet management platform. The device’s per second odometer, G sensor events and local storage complement Plaspy features for monitoring, safety, and operational analytics.

Plaspy simplifies backend integration by offering a single shared endpoint and automatic protocol detection for supported devices. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific protocol, firmware behavior and implementation details verify information with the manufacturer at https://www.riti.com.tw/.
