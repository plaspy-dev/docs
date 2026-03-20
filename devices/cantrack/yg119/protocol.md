---
slug: /cantrack/yg119/protocol
id: yg119-protocol
sidebar_label: Protocol
title: CanTrack - YG119 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for the CanTrack YG119 and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - CanTrack YG119 protocol
  - CanTrack YG119 GPS protocol
  - YG119 communication protocol
  - YG119 tracking protocol
  - CanTrack Plaspy compatibility
  - pet tracker protocol
  - hunting dog GPS tracker
  - Plaspy device compatibility
  - real time tracking protocol
  - tracker reporting protocol
---

# CanTrack - YG119 Protocol

This page describes the public protocol context for using the CanTrack YG119 tracker with the Plaspy platform. It focuses on how the device reports position and status to Plaspy and the connection-level expectations that matter for reliable reporting, alerts, and historical telemetry without exposing private implementation details.

The YG119 is a compact rechargeable tracker built for hunting dogs and active pets. It provides movement or interval based reporting, remote voice listen, an audible buzzer, geo fence alerts, and low battery warnings. Plaspy uses a set of shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary with firmware versions, hardware revisions, and manufacturer configuration.

## Protocol Overview

At a high level the YG119 communication protocol defines how the tracker identifies itself, sends location and status updates, and reports events such as geo fence crossings or low battery alerts. For integration with Plaspy, the protocol must provide timely, parsable telemetry so the platform can present real time locations, notifications, and history to users.

- Carries GNSS fixes and device status so Plaspy can display live positions and historical tracks.
- Transmits event markers such as geo fence triggers, buzzer activations, and low battery warnings for alerting.
- Includes identity and session information that allows Plaspy to associate incoming data with the correct device record.
- Supports configurable reporting modes so movement triggered or interval uploads conserve battery while maintaining useful update rates.
- Operates over standard IP transport so the device can send data to Plaspy’s shared endpoint.

## How Plaspy Detects the Protocol

Plaspy is designed to receive device reports at a shared endpoint and automatically determine the tracker protocol used by a reporting device. When a YG119 is correctly pointed at Plaspy, the platform matches incoming data to known device identifiers and applies the appropriate handling without requiring manual protocol selection in most cases.

- Plaspy listens on a single common port for device traffic and maps incoming flows to device records.
- The platform automatically detects the tracker protocol from the incoming reporting behavior and device identity.
- Users typically do not need to select a specific protocol inside Plaspy when the device is configured to report to the Plaspy endpoint.
- Proper device configuration on the tracker side ensures Plaspy can associate messages with the YG119 and interpret events.
- If troubleshooting is required, verify the device is set to report to the correct Plaspy endpoint and that the device identifier matches the record in Plaspy.

## Transport and Connection Context

The YG119 transmits telemetry over the cellular link using standard IP transport. Plaspy accepts both common transport modes and uses a single port across all supported devices so configuration is consistent and straightforward for installers and users.

- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and carrier environment.
- Plaspy’s public server domain for device reporting is d.plaspy.com and the platform also accepts reports to the corresponding server IP 54.85.159.138.
- All devices in Plaspy use the same port so a single outbound port configuration can serve multiple tracker models.
- Choose UDP or TCP on the device according to the tracker documentation and network reliability considerations.
- Confirm APN and cellular connectivity settings on the device so IP transport to the Plaspy endpoint succeeds.

## Protocol Compatibility Notes

- Firmware revisions can change how events and fields are reported; verify the tracker firmware version when validating behavior.
- Hardware revisions or regional variants may alter supported bands, transport preferences, or available features.
- Manufacturer configuration menus may expose transport selection and reporting interval options that affect how often Plaspy receives updates.
- Some features such as remote voice listen and buzzer events are communicated as events rather than continuous streams and can differ in representation by firmware.
- Always validate a sample device end to end with Plaspy after configuration to confirm expected telemetry and alerts are received.
- For advanced integrations or custom telemetry needs, review both the device settings and Plaspy mapping to ensure fields are interpreted as intended.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure successful setup, predictable behavior in the field, and efficient troubleshooting when tracking matters most. Knowing what the tracker sends and how Plaspy receives it reduces setup time and improves operational reliability.

- Ensures correct device configuration so reports arrive at Plaspy promptly and are associated with the right device.
- Helps diagnose common issues such as missing location updates, incorrect event mapping, or intermittent connectivity.
- Supports informed choices about reporting intervals and movement detection to balance battery life and location freshness.
- Clarifies how device-side events appear in Plaspy so users can configure alerts and workflows appropriately.
- Aids long term maintenance by making firmware updates and hardware changes easier to evaluate for their impact on reporting.

## Why Use Plaspy with This Protocol

Using the CanTrack YG119 with Plaspy provides a practical solution for teams and owners who need real time visibility, reliable alerts, and historical tracking for pets and working animals. The YG119’s movement triggered and interval reporting, combined with Plaspy’s automatic protocol detection and single endpoint architecture, simplifies deployment and reduces configuration overhead for operators in the field.

To learn more about how Plaspy works with compatible trackers and to review platform features, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and regional variants consult the manufacturer documentation at https://www.cantrackgps.com/ since protocol support and device behavior can change over time and should be verified against official sources.
