---
slug: /arknav/rx_12/protocol
id: rx_12-protocol
sidebar_label: Protocol
title: ArkNav - RX-12 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for connecting the ArkNav RX 12 tracker to Plaspy with shared settings and transport context
keywords:
  - ArkNav RX 12 protocol
  - ArkNav RX 12 GPS protocol
  - ArkNav RX 12 communication protocol
  - ArkNav RX 12 tracking protocol
  - ArkNav GPS tracker
  - RX 12 Plaspy compatibility
  - Plaspy device protocol
  - vehicle tracking protocol
  - LTE M GPS tracker
  - fleet management tracker
---

# ArkNav - RX-12 Protocol

This page describes the public protocol context for using the ArkNav RX-12 tracker with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive, implementation neutral terms so integrators and fleet operators understand the connection, transport, and compatibility considerations for reliable deployments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by RX-12 firmware version, hardware revision, and manufacturer implementation, so this page provides general guidance while encouraging verification against ArkNav firmware and datasheets.

## Protocol Overview

The RX-12 reporting protocol is the mechanism by which the tracker identifies itself, reports GNSS position and telemetry, and delivers event driven updates to a backend such as Plaspy. For Plaspy compatibility, the public context focuses on what data types are sent and how the connection is established rather than low level binary format details.

- Enables the RX-12 to report GNSS fixes, accelerometer events, input/output states, and basic telemetry to Plaspy.
- Carries event driven reports for speed, motion, and ignition to reduce airtime and conserve power while ensuring timely updates.
- Lets the device include identifiers and status information so Plaspy can correlate incoming messages with a registered tracker.
- Supports remote management triggers such as OTA configuration and firmware update notifications handled by the manufacturer workflow.
- Provides a predictable channel for Plaspy to ingest position and sensor data for dashboards, alerts, and historical reports.

## How Plaspy Detects the Protocol

Plaspy accepts connections on a common endpoint and automatically identifies the tracker protocol based on the incoming device traffic and registration details. In most cases users do not need to pick a protocol manually inside Plaspy, provided the tracker is configured to send data to the Plaspy endpoint using the supported transport.

- Plaspy listens on a single port used by all devices to simplify device configuration and network rules.
- When the RX-12 reports to Plaspy using the published connection details, Plaspy will match the incoming stream to a supported protocol profile.
- Users typically set the device to report to d.plaspy.com or the Plaspy server IP and leave automatic detection to Plaspy.
- If a device does not appear, verify device reporting settings, APN and cellular coverage before investigating protocol settings.
- Automatic detection reduces manual setup steps but does not replace ensuring correct device credentials and manufacturer configuration.

## Transport and Connection Context

Connection context describes how the RX-12 reaches Plaspy rather than the internal framing of messages. The RX-12 supports common cellular transports and can be configured to use either UDP or TCP to reach the Plaspy listener depending on device settings and network requirements.

- Devices may be configured to send data over UDP or TCP on port 8888 depending on deployment needs.
- Plaspy accepts connections addressed to the domain d.plaspy.com or the server IP 54.85.159.138 on the shared port.
- All devices in Plaspy use the same port which simplifies firewall and NAT configuration for fleet rollouts.
- Transport selection can affect delivery behavior under poor coverage; choose UDP for lower overhead and TCP when delivery reliability is a higher priority.
- Ensure the RX-12 APN and SIM service plan allow the chosen transport and that the device is configured to target the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions on RX-12 units can alter available reporting options and event trigger logic; check the unit firmware level when validating behavior.
- Hardware revisions or regional variants may change supported cellular bands or power protection accessories and can affect OTA update flow.
- Manufacturer side configuration or carrier specific network behavior can influence how quickly messages arrive on the Plaspy side.
- Transport choice matters for delivery semantics; test both UDP and TCP in your environment to confirm expected behavior.
- Validate device identifiers and any required registration steps so Plaspy can associate incoming messages with the correct asset.
- Always compare observed device behavior to the ArkNav datasheet and firmware release notes for model specific details.

## Why Protocol Understanding Matters

A practical understanding of the RX-12 communication protocol helps ensure correct setup, efficient troubleshooting, and consistent long term operation with Plaspy. Knowing the role of transport, reporting triggers, and firmware variants reduces integration time and improves uptime for fleet services.

- Speeds initial device onboarding by aligning device reporting settings with Plaspy endpoint expectations.
- Helps prioritize diagnostic steps when a tracker stops reporting such as transport mismatches, APN issues, or firmware regressions.
- Guides testing of event driven reporting to balance timely updates against data usage for fleet cost control.
- Informs decisions about using TCP or UDP based on network reliability and application needs.
- Supports planning for OTA update workflows and tracking firmware compatibility across a mixed fleet.

## Why Use Plaspy with This Protocol

Using the RX-12 with Plaspy provides a practical combination of rugged, event driven hardware and a cloud platform that accepts a shared endpoint for many device types. Organizations benefit from real time location, event alerts, and telemetry ingestion without needing to manage protocol selection in most cases, because Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint.

To learn more about Plaspy and how it can integrate with ArkNav devices including the RX-12 visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions review the official ArkNav documentation at https://www.arknavgps.com.tw/ to confirm behavior for your firmware and deployment.
