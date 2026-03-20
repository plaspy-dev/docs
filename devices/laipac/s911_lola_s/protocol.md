---
slug: /laipac/s911_lola_s/protocol
id: s911_lola_s-protocol
sidebar_label: Protocol
title: Laipac - S911 LOLA S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Laipac S911 LOLA S and how it connects to Plaspy for real time safety tracking
keywords:
  - Laipac S911 LOLA S protocol
  - Laipac LOLA S GPS protocol
  - Laipac tracking protocol Plaspy
  - LOLA S Plaspy integration
  - S911 LOLA S communication
  - mPERS GPS tracker protocol
  - personal emergency tracker protocol
  - Plaspy device compatibility
  - real time location reporting
  - fall detection tracking protocol
---

# Laipac - S911 LOLA S Protocol

This page summarizes the public protocol context for the Laipac S911 LOLA S when used with Plaspy. It focuses on how the device reports location, status, and emergency events into the Plaspy platform without exposing private parser logic or manufacturer firmware internals. The S911 LOLA S is a compact mPERS device that provides 4G LTE GNSS position reporting, a dedicated SOS button, automatic fall detection, two way voice, and routine check in alerts, and those capabilities are delivered to monitoring platforms via its reporting protocol.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Exact behavior and available fields can differ by firmware version, hardware revision, or manufacturer configuration, so protocol behavior described here is intentionally general and intended to help with integration planning and troubleshooting.

## Protocol Overview

The tracker reporting protocol defines how the S911 LOLA S conveys GNSS coordinates, timestamps, SOS triggers, fall and check in events, and status information to a remote server such as Plaspy. The protocol enables the device to identify itself, send event driven and periodic updates, and allow a backend to translate those reports into actionable alerts and location history.

- Enables delivery of GNSS position and timestamped telemetry to an external server for real time monitoring.
- Carries event types such as SOS button presses, fall detection alerts, and automatic check ins so the platform can generate alarms and notifications.
- Transmits device status and metadata that help determine battery, connectivity, and accessory state for operational awareness.
- Supports identification data so Plaspy can associate incoming reports with the correct device record and customer account.
- Provides a consistent input stream that Plaspy can map to dashboards, alerting rules, and historical reports.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared network endpoint and port and automatically recognizes the tracker protocol used by the S911 LOLA S when the device is correctly pointed to the Plaspy target. In most cases you do not need to choose a specific protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Plaspy listens for incoming tracker traffic at the public domain d.plaspy.com.
- The Plaspy public server IP is 54.85.159.138 and the platform accepts connections on port 8888.
- Plaspy automatically detects the tracker protocol so devices using supported formats are handled without manual protocol selection.
- If a device is misconfigured or uses a nonstandard firmware variant, review device settings to confirm the reporting target matches Plaspy.
- When properly pointed at Plaspy, the S911 LOLA S events and position updates will be associated with the device in the Plaspy system.

## Transport and Connection Context

Connection context covers how the S911 LOLA S reaches the Plaspy endpoint and which transports are commonly used. The device can be configured to use either UDP or TCP and should be able to reach the shared Plaspy port. This section focuses on network and transport level considerations rather than protocol internals.

- The S911 LOLA S may be configured to report using UDP or TCP on port 8888 depending on device support and operator preference.
- Devices can be pointed by hostname to d.plaspy.com or by IP to 54.85.159.138 when configuring the reporting target.
- All devices in Plaspy use the same port number 8888 so firewall and NAT rules can be standardized across deployments.
- Choose UDP or TCP based on device configuration guidance and any network constraints such as firewall rules or NAT behavior.
- Ensure the mobile data plan and APN allow outbound connections to the Plaspy endpoint and that any intermediary firewalls permit traffic to port 8888.

## Protocol Compatibility Notes

- Firmware and software revisions can alter which event fields, frequencies, or optional features are reported by the S911 LOLA S.
- Hardware variants or region specific cellular models may change supported transports or voice behavior; verify the exact model revision when validating compatibility.
- Two way voice and SOS routing can involve additional operator or service settings outside of simple GNSS reporting; those features may require complementary configuration.
- Transport selection between UDP and TCP is configurable on many devices and can affect delivery behavior in lossy networks.
- Always confirm device reporting target values against manufacturer documentation and your Plaspy configuration to avoid misrouting.
- When in doubt, check for published firmware change logs and consult Laipac documentation for device specific behavior.

## Why Protocol Understanding Matters

Understanding the S911 LOLA S reporting protocol helps ensure reliable setup, accurate alerting, and smoother troubleshooting when the device is integrated with Plaspy. A clear view of how events and positions are delivered reduces diagnostic time and supports robust operational procedures.

- Faster resolution of reporting issues by confirming the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888.
- Better mapping of SOS, fall, and check in events into Plaspy alerting rules and response workflows.
- Improved planning for network requirements and firewall rules since all devices use the same port in Plaspy.
- Easier validation of firmware or hardware differences that affect available telemetry fields or reporting cadence.
- Enhanced confidence in long term deployments by knowing which elements are managed by the device and which are handled by Plaspy.

## Why Use Plaspy with This Protocol

Using the Laipac S911 LOLA S with Plaspy brings mPERS safety reporting together with broader operational telemetry so teams can monitor people and assets from a single platform. Plaspy ingests real time GNSS updates, emergency events, and status messages to present live location, event history, and configurable alerts that support caregivers, dispatchers, and security teams.

If you are evaluating deployment options, Plaspy reduces integration overhead by offering a shared listening endpoint and automatic protocol detection for compatible trackers. Learn more about Plaspy at https://www.plaspy.com. Protocol support and firmware behavior can change over time, so please verify the latest device specific details and firmware notes with the manufacturer at https://laipac.com/ before finalizing deployment decisions.
