---
slug: /queclink/gv75mg/protocol
id: gv75mg-protocol
sidebar_label: Protocol
title: QuecLink - GV75MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the QuecLink GV75MG tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - QuecLink GV75MG protocol
  - QuecLink GV75MG GPS protocol
  - GV75MG Plaspy compatibility
  - GV75MG communication protocol
  - GV75MG tracking protocol
  - QuecLink GPS tracker protocol
  - Plaspy device protocol
  - vehicle tracker protocol
  - fleet management GPS protocol
  - GV75MG LTE tracker
---

# QuecLink - GV75MG Protocol

This page describes the public protocol context for using the QuecLink GV75MG with Plaspy. It focuses on how the device communicates with Plaspy at a high level, how Plaspy accepts device traffic, and which connection settings are commonly used. The content is intentionally protocol focused and does not expose private parsing or firmware internals.

The GV75MG is a rugged IP67 vehicle tracker purpose built for motorcycles, watercraft, quad bikes and other outdoor vehicles. Plaspy uses the same shared connection settings across supported devices and automatically detects the tracker protocol, but exact on-device behavior can vary with firmware version, hardware revision, and manufacturer configuration. Review manufacturer documentation for firmware specific details when needed.

## Protocol Overview

The protocol for the GV75MG defines the rules and formats the device uses to send GNSS positions, telemetry and alarm events to a remote server such as Plaspy. At a high level the protocol enables identification, buffered delivery, event reporting and remote control signals so Plaspy can present reliable location data and trigger alerts.

- Carries GNSS fixes, digital input and output status, and alarm events so Plaspy can ingest usable telemetry.
- Supports buffered message storage on the device to preserve messages during connectivity gaps and deliver them when the link is restored.
- Allows the device to identify itself so Plaspy can associate incoming messages with the correct asset record.
- Enables remote control actions initiated via the platform such as output switching when coordinated with device capabilities.
- Works over standard transport layers supported by the device so messages can be delivered reliably to Plaspy.

## How Plaspy Detects the Protocol

Plaspy accepts device traffic at a shared endpoint and automatically determines the tracker protocol so most users do not need to select a protocol manually. When a properly configured GV75MG reports to Plaspy, the platform maps the incoming messages to the correct device record and processing pipeline.

- Plaspy listens on a shared endpoint for device connections and uses the incoming traffic to detect the tracker protocol automatically.
- The Plaspy server endpoint for device reporting is d.plaspy.com and the public server IP for direct configuration is 54.85.159.138 using port 8888.
- All devices configured to report to Plaspy use the same port so device side configuration can be simplified.
- In many cases, if a GV75MG is correctly pointed at the Plaspy endpoint and the device is powered and registered on the network, Plaspy will detect and begin ingesting its messages without per device protocol selection.
- If you need assistance, validating device reporting to d.plaspy.com or 54.85.159.138 on port 8888 is a common first step during setup.

## Transport and Connection Context

The GV75MG supports multiple transport options and can be configured to use different channels depending on the deployment and local network availability. Understanding the transport context helps ensure reliable delivery of telemetry to Plaspy.

- The device may be configured to use either UDP or TCP on port 8888 depending on device settings and network conditions.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138 when configuring the reporting endpoint.
- Plaspy uses the same port 8888 for all supported devices which simplifies device provisioning and firewall rules.
- Transport selection may affect message delivery behavior during intermittent coverage; some deployments prefer TCP for delivery guarantees while others use UDP for lower overhead.
- The GV75MG also supports SMS as a fallback transport in scenarios where packet data is unavailable, though SMS usage and routing are typically configured separately from the main TCP or UDP reporting settings.

## Protocol Compatibility Notes

- The GV75MG is listed as compatible with Plaspy but exact behavior depends on device firmware and configuration options set by the installer.
- Firmware revisions and hardware variants can change available telemetry fields, alarm behavior and reporting intervals, so validate against the device firmware level.
- Manufacturer settings control whether the device reports over TCP, UDP or SMS and how buffered messages are transmitted when connectivity resumes.
- Network carrier behavior and regional cellular bands may affect which transport modes are practical in a given deployment.
- Buffered storage and retransmission features help prevent data loss; the GV75MG supports substantial on device buffering for temporary outages.
- Always compare the practical behavior observed in the field with manufacturer documentation for the specific unit and firmware revision.

## Why Protocol Understanding Matters

Knowing how the GV75MG communicates with Plaspy helps ensure a smooth setup, faster troubleshooting and more reliable operations over time. A clear grasp of the communication flow reduces configuration errors and enables operators to make informed choices about transport, reporting intervals and alarm handling.

- Helps verify the device is correctly pointed at the Plaspy endpoint and using the intended transport on port 8888.
- Assists with firewall and network configuration by knowing whether the unit uses TCP or UDP to reach d.plaspy.com or 54.85.159.138.
- Aids troubleshooting when messages are delayed or missing by focusing on transport and firmware differences rather than platform settings.
- Enables better planning for battery and power profiles when configuring reporting intervals and sleep modes for long standby operation.
- Supports correct mapping of digital inputs and alarms into Plaspy workflows so alerts and automation are reliable.

## Why Use Plaspy with This Protocol

Using the GV75MG with Plaspy gives organizations a practical solution for resilient, long standby tracking in harsh environments. The combination of waterproof design, high sensitivity GNSS, buffered messaging and low power cellular connectivity makes the GV75MG well suited for motorcycles, watercraft and other outdoor assets where reliability and long unattended operation are priorities. Plaspy ingests the device telemetry and provides real time location, historical playback, alerting and workflows that turn raw device events into operational insights.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device protocol details, firmware notes and model specific documentation verify information with the manufacturer at https://www.queclink.com/ as protocol support and firmware behavior can change over time.
