---
slug: /concox/eg02_intelligent_motorbike_tracker/protocol
id: eg02_intelligent_motorbike_tracker-protocol
sidebar_label: Protocol
title: Concox - EG02 Intelligent Motorbike Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for Concox EG02 Intelligent Motorbike Tracker compatibility with Plaspy server settings
keywords:
  - Concox EG02 protocol
  - Concox EG02 GPS protocol
  - EG02 tracker protocol
  - EG02 Plaspy compatibility
  - motorbike tracker protocol
  - micro mobility GPS tracker
  - EG02 communication protocol
  - Concox tracker Plaspy
  - GPS tracker protocol guide
  - vehicle tracking protocol
---

# Concox - EG02 Intelligent Motorbike Tracker Protocol

This page describes the public protocol context for using the Concox EG02 Intelligent Motorbike Tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general terms, the connection settings used by the service, and practical compatibility considerations for fleet and micro mobility deployments. The EG02 is a compact, plug-and-play GPS tracker designed for e-scooters, e-bikes and light electric vehicles, and this document explains how its reporting and event telemetry align with Plaspy’s ingestion model.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior can vary between firmware versions, hardware revisions, and manufacturer implementations, so this page provides public, implementation-agnostic context to help with setup and troubleshooting while encouraging verification against manufacturer documentation.

## Protocol Overview

The communication protocol is the mechanism the EG02 uses to report GNSS/LBS positions, alarms, and status events to a fleet server such as Plaspy. In practice the protocol defines how the tracker opens a data channel to Plaspy, identifies itself, and transmits telemetry that Plaspy can interpret and present on dashboards and alerts. This page keeps the protocol discussion general and focuses on the aspects relevant to integration and reliable data flow.

- Enables the tracker to establish a data session with Plaspy and send position and event telemetry for live monitoring.
- Carries device identity and status information so Plaspy can associate incoming messages with the correct asset record.
- Transports alarm and event signals such as unauthorized movement, power loss, and geo-fence triggers for alerting and automation.
- Works over cellular data links; the EG02 supports GPRS TCP/IP reporting and can fall back to SMS for command management where network conditions require.
- Allows Plaspy to receive historical and real time data for playback, reporting, and operational workflows.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and port and includes automatic protocol detection so most devices only need to be pointed at the Plaspy server. When an EG02 is configured to report to the Plaspy endpoint, the platform will use characteristics of the incoming connection to determine the correct handling for that device without requiring manual protocol selection in many cases.

- Devices should be configured to report to d.plaspy.com or directly to 54.85.159.138 using the Plaspy settings.
- Plaspy listens on port 8888 for device data and accepts both UDP and TCP connections there.
- All devices in Plaspy use the same port, simplifying device configuration and onboarding.
- Automatic detection removes the need for users to manually select a protocol inside the platform when the tracker is properly pointed to the Plaspy endpoint.
- If a device uses SMS as a secondary control channel, those command paths are separate from the TCP/UDP data path and are handled outside the primary TCP/IP ingestion stream.

## Transport and Connection Context

Connection context covers the transport layer choices and addressing that direct the EG02 to send its telemetry to Plaspy. The EG02 supports GPRS based TCP/IP reporting and can also receive and act on SMS commands depending on configuration and network availability. When configuring devices, understanding the transport and endpoint details is the practical step that ensures data arrives at Plaspy.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and provisioning choices.
- Set the device reporting address to d.plaspy.com or to the Plaspy server IP 54.85.159.138 if a numeric host is required.
- Port 8888 is the shared ingestion port used by Plaspy for all supported trackers.
- TCP provides session oriented delivery while UDP may be used where lower latency or simpler connectivity is desired; the device model and firmware determine available transport options.
- Ensure your SIM data plan and APN settings are properly configured so the EG02 can establish outbound GPRS connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and command behavior; always confirm compatibility against the device firmware notes.
- Hardware revisions or different EG02 batches may introduce small differences in default settings or available features.
- Manufacturer-side configuration and OEM branding can alter default reporting servers, intervals, or feature sets; verify that devices are pointed to d.plaspy.com or 54.85.159.138.
- Transport selection (UDP vs TCP) should be validated during deployment because both options are supported but behavior may vary by firmware.
- Where SMS command and control are used, confirm how those commands interact with Plaspy-managed remote actions such as immobilizer or siren control.
- Always cross-check Plaspy onboarding instructions with the vendor documentation to confirm any device-specific parameters or required SMS templates.

## Why Protocol Understanding Matters

Knowing how the device protocol behaves helps ensure smooth onboarding, accurate telemetry, and reliable remote control. A practical grasp of the communication context reduces setup time and speeds troubleshooting when devices fail to report or events are not appearing in Plaspy.

- Helps diagnose connectivity problems by distinguishing transport, DNS, or APN issues from protocol-level parsing or firmware behavior.
- Supports correct configuration of device reporting address and transport so telemetry reaches d.plaspy.com or 54.85.159.138 on port 8888.
- Informs decisions about choosing UDP or TCP for a particular deployment based on network conditions and requirements.
- Makes it easier to validate that alarms, immobilizer controls, and geo-fence events are sent and interpreted by Plaspy as expected.
- Aids long term maintenance planning by highlighting firmware and hardware dependencies that affect protocol behavior.

## Why Use Plaspy with This Protocol

Using the Concox EG02 with Plaspy provides a straightforward path to centralized tracking, alerting, and fleet management for micro mobility and light EV fleets. The EG02’s plug-and-play form factor, GNSS and LBS positioning, and built-in anti-theft capabilities map to Plaspy’s live monitoring, event workflows, and historical reporting so operators can manage scooters and light vehicles efficiently.

If you want to learn more about how Plaspy integrates with devices like the Concox EG02 and to review deployment guides and platform capabilities, visit https://www.plaspy.com. For the most current device protocol details, firmware notes, and manufacturer implementation guidance, verify the latest documentation on the Concox site at https://www.iconcox.com/ since protocol support and firmware behavior can change over time.
