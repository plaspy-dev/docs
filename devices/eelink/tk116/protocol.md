---
slug: /eelink/tk116/protocol
id: tk116-protocol
sidebar_label: Protocol
title: EElink - TK116 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for EElink TK116 GPS tracker compatibility with Plaspy real time tracking and device communication
keywords:
  - EElink TK116 protocol
  - EElink TK116 GPS protocol
  - EElink TK116 Plaspy compatibility
  - TK116 tracking protocol
  - EElink tracker communication
  - GPS tracker protocol Plaspy
  - fleet tracking TK116
  - vehicle tracking EElink TK116
  - Plaspy device protocol
  - TK116 telemetry protocol
---

# EElink - TK116 Protocol

This page describes the public protocol context for using the EElink TK116 GPS tracker with Plaspy. It focuses on how the device reports position, telemetry, and events to the Plaspy platform in general terms so integrators and fleet operators understand how the tracker communicates without exposing private implementation details.

The TK116 is a compact 2G tracker combining GPS and LBS positioning with AGPS assistance and common telemetry inputs such as ACC detection, crash and vibration alarms, optional relay, SOS button, and optional microphone. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker protocol defines how the TK116 sends location updates, status messages, and event alarms to a remote server so Plaspy can ingest and display the data. This page explains the role of that protocol in general, focusing on connectivity and the kinds of data Plaspy consumes rather than low level packet formats or proprietary internals.

- Transports telemetry and event messages from the TK116 to the remote Plaspy endpoint for real time ingestion.
- Identifies the device and provides the necessary fields for Plaspy to associate incoming data with a registered asset.
- Sends periodic position reports plus event driven messages such as ACC state changes, crash or vibration alarms, SOS presses, and power cut alerts.
- Enables remote commands and configuration where supported by the device and manufacturer provisioning.
- Supplies the telemetry elements Plaspy needs to generate alerts, geofence events, historical traces, and operational reports.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and automatically determines the tracker protocol so users typically do not need to select a protocol manually if the device is configured correctly. Detection and mapping happen on the Plaspy ingestion side and are designed to simplify onboarding across many common tracker models.

- Plaspy listens on a shared endpoint for device traffic and automatically detects the tracker protocol.
- Devices reporting to Plaspy should be configured to use the Plaspy endpoint d.plaspy.com or the server IP 54.85.159.138.
- Plaspy uses a single common port for all supported devices to reduce configuration complexity.
- When the TK116 is pointed at the Plaspy endpoint and uses an accepted transport, Plaspy will identify the device messages and route them to the correct device record.
- In most cases, users only need to ensure the device target and transport settings are correct; Plaspy handles protocol identification automatically.

## Transport and Connection Context

The TK116 supports 2G mobile connectivity to send its telemetry to a remote server. Depending on the device firmware and the installer configuration, the TK116 can be set to use either UDP or TCP transport to reach Plaspy on the shared port. The following points clarify the practical connection options relevant to integration.

- The TK116 may be configured to use UDP or TCP to communicate with the server depending on the device firmware and configuration options.
- Devices intended for use with Plaspy should be pointed to d.plaspy.com or the server IP 54.85.159.138.
- All Plaspy devices share the same port, so the TK116 should be set to use port 8888 on the device side.
- Using the correct transport and endpoint ensures messages arrive at Plaspy for automatic protocol detection and processing.
- Network considerations such as carrier NAT, firewall rules, and SMS provisioning may affect initial configuration but do not change Plaspy’s shared endpoint approach.

## Protocol Compatibility Notes

- TK116 is compatible with Plaspy when the device is configured to report to the Plaspy endpoint and the correct transport is selected.
- Manufacturer firmware updates can change message formats, field availability, or transport options; verify firmware notes if behavior changes after updates.
- Hardware revisions or optional features such as relay, microphone, or SOS may influence the set of available events and commands.
- Some operators prefer TCP for reliable delivery and UDP for lower overhead; confirm the device configuration matches your operational needs.
- Validate device reporting by checking that position and event messages appear in Plaspy after pointing the TK116 to the Plaspy endpoint.
- Always consult the official EElink documentation for device specific configuration commands and firmware related differences.

## Why Protocol Understanding Matters

A solid, practical understanding of the TK116 communication protocol helps with successful setup, faster troubleshooting, and reliable long term operation when the device is connected to Plaspy. Knowing what the device will and will not send makes it easier to confirm correct behavior and to configure Plaspy rules and alerts.

- Confirms that expected telemetry such as GPS position, LBS fallback, ACC status, and alarm events are being received.
- Helps diagnose connectivity problems related to transport type, endpoint settings, or carrier restrictions.
- Supports correct mapping of optional inputs like relay control, SOS events, and power cut alerts into Plaspy workflows.
- Reduces onboarding time by aligning device configuration with Plaspy’s shared endpoint and automatic detection approach.
- Informs decisions on firmware upgrades and feature enablement to maintain stable reporting.

## Why Use Plaspy with This Protocol

Using the TK116 with Plaspy provides a straightforward path to real time vehicle and motorcycle tracking, incident alerting, and operational reporting. The device’s compact form factor, AGPS assisted positioning, ACC detection, and alarms feed the telemetry Plaspy uses to generate location traces, notification rules, and fleet analytics that support day to day operations.

Plaspy’s shared endpoint model simplifies device onboarding by requiring devices to report to d.plaspy.com or 54.85.159.138 on the standard port 8888 while the platform automatically detects the tracker protocol. To learn more about Plaspy and how it integrates with devices such as the EElink TK116 visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes on the official EElink site https://www.eelink.com.cn/ since manufacturer details and firmware behavior can change over time.
