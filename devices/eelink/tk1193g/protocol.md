---
slug: /eelink/tk1193g/protocol
id: tk1193g-protocol
sidebar_label: Protocol
title: EElink - TK119‑3G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for EElink TK119‑3G integration with Plaspy for reliable device communication and deployment
keywords:
  - EElink TK119‑3G protocol
  - EElink TK119‑3G GPS protocol
  - EElink TK119‑3G for Plaspy
  - Plaspy device integration
  - vehicle tracker protocol
  - fleet tracking protocol
  - EElink protocol compatibility
  - TK119‑3G GPS tracker
  - tracker protocol guide
  - GPS tracker Plaspy
---

# EElink - TK119‑3G Protocol

This page describes the public protocol context for using the EElink TK119‑3G tracker with Plaspy. It summarizes how the tracker communicates position, events, and telemetry to the Plaspy platform in non sensitive terms, and explains the role of the reporting protocol in successful device integration and monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this page focuses on public connection and compatibility guidance rather than device internals.

## Protocol Overview

The protocol used by the TK119‑3G is the device reporting method that carries location, status, and alarm data from the unit to the Plaspy platform. In general terms, the protocol defines how the tracker identifies itself, reports GPS and LBS position, and delivers event and telemetry records so Plaspy can process them into live tracking, alerts, and historical reports.

- Enables regular position updates and event messages such as ACC on off, overspeed, and crash or vibration alerts.
- Carries telemetry for peripheral inputs like RS232 connected fuel sensors and optional relay control states.
- Supplies the identifying fields and timestamps Plaspy needs to associate reports with a registered device.
- Supports fallback positioning via LBS and AGPS assistance that improve continuity in poor GNSS conditions.
- Allows the platform to receive status messages such as power loss and backup battery alerts for tamper detection.

## How Plaspy Detects the Protocol

Plaspy receives inbound traffic on a shared endpoint and automatically determines the tracker protocol so most users do not need to select a protocol manually inside Plaspy. Proper device configuration to point at the Plaspy endpoint is typically the only required step to allow automatic detection and onboarding.

- Plaspy listens on the shared server endpoint d.plaspy.com and the public IP 54.85.159.138.
- All devices in Plaspy use the same port which simplifies device configuration across models.
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint.
- When a tracker is configured to report to Plaspy, no manual protocol selection is usually necessary in the platform.
- If detection does not occur, checking device reporting settings and firmware behavior is the recommended first step.

## Transport and Connection Context

Transport choices determine how the TK119‑3G sends reports over the cellular network to Plaspy. The tracker can be configured to use either UDP or TCP on the common Plaspy port depending on model support and the selected reporting mode. This section describes the public connection options relevant to integration.

- Devices may be configured to point to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- The TK119‑3G can use UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy uses port 8888 for all supported devices to maintain a consistent endpoint for incoming reports.
- Choosing UDP typically favors low latency while TCP can provide reliable delivery depending on device firmware.
- Verify the tracker is configured to report to the correct host and transport so Plaspy can receive and detect the protocol.

## Protocol Compatibility Notes

- Firmware revisions can change which messages or fields the tracker sends. Always confirm the firmware level when diagnosing compatibility.
- Hardware revisions or optional accessories such as RS232 peripherals and relays may affect the telemetry available to Plaspy.
- Manufacturer side settings and default reporting behavior can vary by region or distributor supplied configurations.
- Transport protocol selection between UDP and TCP may affect delivery and behavior so confirm the selected transport matches the device setup.
- Plaspy detects the protocol automatically but correct network addressing and transport must be configured on the device.
- For device specific commands, advanced features, or firmware changelogs consult the manufacturer documentation.

## Why Protocol Understanding Matters

A practical understanding of how the TK119‑3G reports to Plaspy helps with initial setup, troubleshooting, and ensuring reliable long term operation of a fleet. Knowing the connection expectations and common variations reduces time to resolve problems and improves data quality for monitoring and reporting.

- Helps validate device is sending location and event messages to the correct Plaspy endpoint.
- Speeds troubleshooting when telemetry or alarms are not appearing in Plaspy by focusing checks on transport and firmware.
- Clarifies which inputs and sensors the device will report to Plaspy so monitoring rules can be configured appropriately.
- Informs decisions about using UDP or TCP based on network behavior and device firmware support.
- Supports planning for firmware updates and hardware revisions to avoid unexpected changes in device reporting.

## Why Use Plaspy with This Protocol

Using the TK119‑3G with Plaspy provides operators reliable location and event reporting for fleet visibility, anti‑theft workflows, and driver safety programs. Plaspy ingests position, ACC state, alarm events, and peripheral telemetry from the tracker to power live monitoring, alerts, and historical analysis that support dispatch, compliance, and incident response.

Plaspy is designed to accept reports from EElink trackers with minimal manual setup by using a consistent server endpoint and port. To learn more about Plaspy and how it handles device onboarding and fleet management, visit https://www.plaspy.com. Protocol support, firmware behavior, and specific device implementation details can change over time so verify current technical details and firmware notes on the manufacturer website https://www.eelink.com.cn/.
