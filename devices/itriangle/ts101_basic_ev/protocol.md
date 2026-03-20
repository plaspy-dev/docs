---
slug: /itriangle/ts101_basic_ev/protocol
id: ts101_basic_ev-protocol
sidebar_label: Protocol
title: iTriangle - TS101 Basic EV Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for iTriangle TS101 Basic EV integration with Plaspy platform
keywords:
  - iTriangle TS101 Basic EV protocol
  - iTriangle TS101 protocol
  - TS101 Basic EV GPS protocol
  - iTriangle tracking protocol
  - Plaspy compatible tracker
  - vehicle tracking protocol
  - fleet tracking TS101
  - TS101 Basic EV integration
  - iTriangle GPS protocol
  - TS101 Plaspy compatibility
---

# iTriangle - TS101 Basic EV Protocol

This page describes the public protocol context for using the iTriangle TS101 Basic EV tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in general, what connection settings are used, and what to consider when integrating the device for real time tracking, event logging, and basic sensor telemetry.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary with firmware versions, hardware revisions, and manufacturer implementation choices, so this page offers practical integration context while encouraging verification against official manufacturer documentation.

## Protocol Overview

The tracker protocol defines how the TS101 Basic EV reports location, events, and I/O state to a remote server so Plaspy can ingest and present telemetry. This public overview explains the protocol role without exposing firmware internals or parsing specifics.

- Enables GNSS position reports and event telemetry to be sent from the TS101 Basic EV to the Plaspy server for live maps and historical playback.
- Carries device identity and status information so Plaspy can associate incoming messages with the correct vehicle and record.
- Transports accelerometer events, tamper alerts, and I/O states so Plaspy can trigger alerts and record sensor telemetry.
- Supports buffered storage reconciliation so Plaspy can recover data the device stored locally during temporary connectivity outages.
- Provides the connection framework for configuration channels such as TCP, UDP, SMS, or Bluetooth based commissioning when supported by the device.

## How Plaspy Detects the Protocol

Plaspy accepts reports from many tracker models on a single shared endpoint and automatically determines the protocol used by an incoming device session. In most cases the user does not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy server.

- Plaspy listens on a common port for all supported devices so device traffic targets the same server endpoint.
- The Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The shared reporting port used by all devices in Plaspy is 8888 and Plaspy will detect the tracker protocol when data arrives on that port.
- When a TS101 Basic EV is properly configured to report to Plaspy, manual protocol selection is typically unnecessary.
- If automatic detection does not behave as expected, checking device reporting settings and manufacturer guidance is the recommended next step.

## Transport and Connection Context

The TS101 Basic EV can use common transport modes to reach Plaspy depending on carrier support and device configuration. This section covers connection options and the addressing used to deliver telemetry to Plaspy.

- The device may be configured to use either UDP or TCP on port 8888 depending on device support and chosen configuration.
- Devices may be pointed to the Plaspy server by domain name d.plaspy.com or directly to the IP 54.85.159.138 when DNS is not available.
- Plaspy uses the same port 8888 for all supported devices to simplify device configuration and reduce configuration errors.
- Using TCP can provide session visibility while UDP is sometimes preferred for lightweight reporting depending on carrier conditions and device settings.
- Ensure the chosen transport is allowed by the mobile network and that APN settings are correct for reliable delivery.

## Protocol Compatibility Notes

- Firmware differences can change how and which telemetry fields are reported, so matching firmware notes to Plaspy expectations helps avoid misinterpretation.
- Hardware revisions and regional SKUs sometimes vary available features such as BLE, I/O mapping, or supported GNSS constellations.
- Transport selection between UDP and TCP affects behavior during poor network coverage and should be validated against your operational needs.
- Bluetooth and local configuration channels are useful for commissioning but do not replace proper server reporting settings.
- Manufacturer configuration commands or SMS interfaces may vary by firmware release and should be confirmed in official device manuals.
- Validate compatibility by comparing Plaspy connection requirements with the device configuration options documented by the manufacturer.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure the TS101 Basic EV works reliably with Plaspy and supports effective troubleshooting when issues arise. A clear view of reporting behavior reduces time to deploy and improves long term operational reliability.

- Helps verify the device is pointing to the correct Plaspy endpoint and port so telemetry arrives as expected.
- Aids troubleshooting when buffered records do not reconcile by clarifying how the device stores and retransmits data.
- Guides transport choice between UDP and TCP based on coverage, latency, and network behavior.
- Enables predictable configuration of alerts and dashboard fields in Plaspy by knowing which telemetry elements are available from the device.
- Assists fleet managers and integrators in validating feature support across firmware and hardware variants.

## Why Use Plaspy with This Protocol

Using Plaspy with the TS101 Basic EV offers centralized visibility for fleet operators and OEMs who need consistent tracking, event alerts, and basic sensor telemetry across vehicle types. Plaspy ingests GNSS position, accelerometer events, and I/O state so teams can monitor routes, reconcile buffered data, and act on movement or tamper alerts.

Plaspy provides a single endpoint for device reporting which simplifies deployment across large fleets. If you want to learn more about how Plaspy supports device integrations and fleet workflows visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer instructions verify information on the official iTriangle website https://www.itriangle.net/ as implementation details can change over time.
