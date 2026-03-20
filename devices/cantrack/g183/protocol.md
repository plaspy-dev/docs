---
slug: /cantrack/g183/protocol
id: g183-protocol
sidebar_label: Protocol
title: CanTrack - G183 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack G183 and Plaspy integration covering connection context and compatibility
keywords:
  - CanTrack G183 protocol
  - CanTrack G183 GPS protocol
  - CanTrack G183 protocol Plaspy
  - G183 tracking protocol
  - G183 GPS tracker communication
  - CanTrack OBD GPS protocol
  - vehicle diagnostics telematics protocol
  - Plaspy device compatibility
  - fleet tracking G183 protocol
  - G183 OBDII telematics
---

# CanTrack - G183 Protocol

This page provides a public overview of the communication protocol context for using the CanTrack G183 tracker with Plaspy. It explains the key connection and reporting considerations that matter for integrating location, OBD diagnostics, and event telemetry into the Plaspy platform without exposing firmware internals or private implementation details.

Plaspy accepts device reporting over a shared endpoint and port and automatically detects the tracker protocol when a device sends data to the Plaspy endpoint. Exact protocol behavior for the G183 can vary by firmware version, hardware revision, and manufacturer implementation, so the notes here are intended to help with setup and troubleshooting while encouraging verification against official manufacturer documentation.

## Protocol Overview

The G183 uses an onboard telematics reporting method to deliver GNSS position, OBD diagnostics, and event alarms to a server endpoint. In practical terms this means the device periodically or event driven sends structured telemetry from the vehicle to the cloud so Plaspy can ingest and present usable position, status, and diagnostic information.

- Enables real time and buffered delivery of position, mileage, fuel, and DTCs from the vehicle to Plaspy
- Allows the tracker to identify itself and its vehicle source so Plaspy can associate telemetry with an asset record
- Supports event reporting such as SOS, collision, tow, and plug or unplug events to trigger alerts and workflows
- Buffers events locally during temporary connectivity loss so Plaspy can reconstruct recent activity after a reconnect
- Integrates OBD level vehicle parameters and protocol aware diagnostic trouble code uploads for maintenance workflows

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a common endpoint and port and applies automatic protocol detection to identify the tracker reporting format. For most deployments the user does not need to manually select a protocol in Plaspy if the G183 is configured to report to the Plaspy endpoint.

- Plaspy listens on a single shared port for all supported devices and automatically detects the tracker protocol
- Devices reporting to the Plaspy server domain d.plaspy.com or to IP 54.85.159.138 on the Plaspy port are processed by the same endpoint
- When the G183 is configured to report to the Plaspy endpoint, protocol selection inside Plaspy is typically not required
- Automatic detection focuses on identifying incoming telemetry streams so Plaspy can route and parse device data for dashboards and APIs
- Proper device configuration and the correct reporting endpoint are the most common factors that determine successful automatic detection

## Transport and Connection Context

The G183 supports cellular reporting and can be configured to use either TCP or UDP transport depending on module capability and settings. For Plaspy integration the device should be pointed at the Plaspy endpoint and port used by all devices to ensure reliable delivery.

- The G183 may be configured to send telemetry over TCP or UDP on port 8888 depending on device settings and cellular module options
- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 which can be used as the reporting target
- Port 8888 is used for device reporting and is the same port for all devices supported by Plaspy
- Choose TCP for connection oriented delivery or UDP where lower overhead is preferred and device firmware supports it
- Ensure the device APN and SIM provisioning allow outbound connections to the chosen Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- Firmware revisions may alter default reporting formats, available fields, or transport behavior; always confirm the firmware release notes
- Hardware variants and cellular module options can influence supported transport modes and GNSS performance
- Manufacturer specific OBD protocol coverage affects which vehicle parameters and DTCs the tracker can read and forward
- Transport choice TCP versus UDP may impact delivery guarantees and how Plaspy processes instantaneous versus buffered data
- SMS reporting is often available as an alternate transport for specific messages but requires separate configuration and handling
- Validate compatibility against official CanTrack documentation for device specific limitations and recommended settings
- When integrating at scale, test a representative set of vehicle makes and firmware levels to identify edge cases early

## Why Protocol Understanding Matters

A practical understanding of the G183 communication behavior helps ensure successful setup, quicker troubleshooting, and more reliable long term operation within Plaspy. Knowing how the device reports, what transport it uses, and how Plaspy expects incoming data reduces integration friction and improves operational visibility.

- Helps confirm the device is pointed at the correct Plaspy endpoint and port so automatic detection can occur
- Guides transport selection to match network conditions and operational priorities for reliable telemetry delivery
- Supports troubleshooting of missing or incomplete data by isolating firmware or configuration differences
- Enables better testing plans for mixed fleets with multiple hardware revisions and firmware versions
- Improves alerting and workflow configuration in Plaspy by understanding which events the G183 can report

## Why Use Plaspy with This Protocol

Using the CanTrack G183 with Plaspy provides a streamlined route to combine OBD level diagnostics with real time location and event monitoring. For fleet operators and service providers this integration brings vehicle health, trip data, and alarm events into Plaspy dashboards and APIs without heavy custom engineering.

Plaspy simplifies device onboarding by accepting reports on a shared endpoint and port and automatically detecting the tracker protocol, which reduces manual configuration steps. To learn more about Plaspy and how it handles device connectivity and analysis, visit https://www.plaspy.com. For the most current device protocol and firmware details always verify information with the manufacturer at https://www.cantrackgps.com/ as firmware behavior and device implementation can change over time.
