---
slug: /sinotrack/st_907l/protocol
id: st_907l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-907L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the SinoTrack ST 907L and how it communicates with Plaspy for real time tracking and fleet control
keywords:
  - SinoTrack ST 907L protocol
  - ST 907L GPS protocol
  - SinoTrack protocol Plaspy
  - ST 907L communication protocol
  - SinoTrack tracking protocol
  - ST 907L integration guide
  - Plaspy device compatibility
  - GPS tracker ST 907L
  - SinoTrack fleet tracking
  - ST 907L telemetry
---

# SinoTrack - ST-907L Protocol

This page provides a public, non sensitive overview of the communication protocol context for the SinoTrack Relay ST-907L when used with Plaspy. It focuses on how the device reports location and telemetry to the Plaspy platform and what to consider when configuring the unit for reliable, real time tracking and fleet management.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The ST-907L is a compact GNSS tracker with SIMCOM 7670SA positioning, 4G LTE and 2G GSM connectivity, and features such as remote immobilizer and power loss backup that produce the telemetry Plaspy consumes.

## Protocol Overview

The device protocol is the set of conventions the ST-907L uses to identify itself and send position, alarm and telemetry reports to a remote server. For integration with Plaspy the protocol's role is limited to enabling consistent, parseable messages so the platform can display live locations, alerts, and historical data.

- Allows the tracker to regularly report GNSS fixes and basic telemetry such as battery and event status.
- Conveys alarm and event signals like vibration, power off, low battery, and immobilizer triggers for immediate handling.
- Provides identifiers that let Plaspy associate each incoming message with the correct device record.
- Transports periodic and event driven position updates so Plaspy can build live maps and route history.
- Enables remote control commands when supported by the device and authorized by the platform.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single, shared endpoint and inspects incoming reports to determine the tracker protocol automatically. In most deployments a properly configured ST-907L will begin reporting to Plaspy without manual protocol selection in the user interface.

- Plaspy listens on the same port for all supported devices, so no separate port per model is required.
- Devices that are set to report to the Plaspy endpoint are typically recognized automatically when messages arrive.
- Users normally only need to configure the device to report to the Plaspy address and confirm transport settings.
- If a device uses multiple transport modes, Plaspy will accept connections and process reports from the chosen transport.
- For unusual or custom firmware variants, verification against device logs and manufacturer guidance can help resolve detection edge cases.

## Transport and Connection Context

Connection settings determine how the ST-907L reaches the Plaspy servers. The device may be configured to use either UDP or TCP on port 8888, and it can point to the Plaspy domain or the platform IP address depending on provisioning needs.

- Plaspy accepts tracker reports on port 8888 for all devices in the platform.
- The Plaspy server domain for reporting is d.plaspy.com.
- As an alternate target trackers can point to the Plaspy server IP 54.85.159.138.
- The ST-907L supports configuration to use UDP or TCP transport depending on device firmware and network requirements.
- Choosing UDP can reduce overhead for frequent position reports while TCP can provide a more reliable session for command acknowledgements where supported.

## Protocol Compatibility Notes

- Firmware versions may alter message frequency, field sets, or optional telemetry fields; always check the device firmware note for differences.
- Hardware revisions and regional variants (for LTE bands) can affect available network connectivity and therefore reporting behavior.
- Manufacturer side settings or default server addresses can differ from unit to unit; confirm the reporting server on the device itself.
- Transport selection between UDP and TCP is made on the device and must match the intended configuration to reach Plaspy on port 8888.
- Some advanced features such as immobilizer commands require matching device support and correct wiring or external relays.
- When in doubt, validate messages and behaviour against the official SinoTrack documentation and release notes.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure the ST-907L provides reliable position and event data to Plaspy and simplifies troubleshooting when reports are missing or incomplete. Clear knowledge of how the tracker speaks to the server reduces deployment time and supports stable, long term monitoring.

- Speeds initial setup by clarifying required server and transport settings for the device.
- Helps distinguish device side issues from network or server configuration problems during diagnosis.
- Informs expectations about which telemetry fields are available from a given firmware or hardware revision.
- Clarifies the conditions under which remote controls and alarms can be accepted and acted on by Plaspy.
- Supports planning for fallbacks such as switching transport modes or verifying APN and carrier compatibility.

## Why Use Plaspy with This Protocol

Pairing the ST-907L with Plaspy gives organizations a centralized way to view live location, route history, alarms, and basic telemetry from a compact tracker that is designed for motorcycles and cars. Plaspy’s platform ingests the ST-907L reports so teams can manage geofences, respond to anti theft events, and analyze mileage and utilization across a mixed fleet.

Plaspy receives tracker data on a consistent endpoint and port, and the platform automatically detects the tracker protocol when the device is configured to report to the Plaspy server. To learn more about Plaspy and how it works with devices like the ST-907L visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol information on the manufacturer site https://www.sinotrackgps.com/.
