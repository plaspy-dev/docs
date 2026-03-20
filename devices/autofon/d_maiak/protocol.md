---
slug: /autofon/d_maiak/protocol
id: d_maiak-protocol
sidebar_label: Protocol
title: AutoFon - D-Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for AutoFon D‑Маяк and how it communicates with Plaspy for tracking and telemetry
keywords:
  - AutoFon D-Маяк protocol
  - AutoFon D-Маяк GPS protocol
  - AutoFon D-Маяк Plaspy compatibility
  - AutoFon D-Маяк communication
  - D‑Маяк tracking protocol
  - AutoFon beacon protocol
  - AutoFon GPS tracker communication
  - Plaspy tracker protocol
  - covert GPS tracker protocol
  - GPRS GPS tracker compatibility
---

# AutoFon - D-Маяк Protocol

This page describes the public protocol context for using the AutoFon D‑Маяк tracker with Plaspy. It focuses on how the device communicates with the Plaspy backend in non sensitive terms, what connection options are used, and what to consider when configuring the unit for real time tracking, alerts, and historical telemetry on Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this overview is intended to explain the communication role rather than provide firmware level specifics.

## Protocol Overview

The D‑Маяк communicates telemetry, event notifications, and status to a remote server so Plaspy can present location, alarms, and historical data. The public protocol context covers the reporting channel and how messages are used by a monitoring platform without revealing private parsing or vendor internals.

- The protocol allows the tracker to identify itself and send location updates and sensor events to a backend service for mapping and alerting.
- Messages carry movement and alarm information used by Plaspy to generate real time alerts such as SOS, impact, or unauthorized movement.
- Buffered telemetry from the device is forwarded to Plaspy after network recovery so event timelines remain continuous.
- The reporting mode can be configured for periodic updates, event driven reporting, or continuous reporting while moving to match operational needs.
- Transport selection and device network settings determine how the tracker reaches the Plaspy endpoint rather than changing core telemetry semantics.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and uses automated detection to associate incoming device messages with the correct tracker implementation. In most cases you do not need to manually select a protocol inside Plaspy if the device is pointed to the Plaspy endpoint.

- Plaspy listens on the shared server endpoint d.plaspy.com and on the public IP 54.85.159.138 to receive tracker reports.
- All devices use the same port for reporting to Plaspy which simplifies device setup and reduces configuration errors.
- Plaspy automatically detects the tracker protocol when messages arrive at the platform endpoint so manual protocol selection is typically unnecessary.
- If the device is configured to report to the platform endpoint and network connectivity is available, Plaspy will ingest telemetry and map it to the device record.
- Because detection relies on incoming message characteristics, firmware differences can affect how a specific unit is identified and parsed.

## Transport and Connection Context

The D‑Маяк can be set up to use common transport methods to reach the Plaspy server. Choosing the appropriate transport depends on device capabilities, network environment, and how the unit is configured during installation.

- The device may be configured to use either UDP or TCP on port 8888 to send reports to Plaspy depending on device support and installer preference.
- Plaspy accepts connections on port 8888 for all supported devices so there is a consistent destination for reports.
- Devices can be pointed to the domain d.plaspy.com or to the IP address 54.85.159.138 when configuring the reporting endpoint.
- Using a domain name allows for server endpoint changes without reconfiguring devices, while a direct IP can be useful in constrained networks.
- Network reliability and operator settings influence whether the tracker uses GPRS active sessions or SMS fallbacks for message delivery.

## Protocol Compatibility Notes

- Firmware version differences can change message timing, available telemetry fields, and optional behaviors that affect compatibility.
- Hardware revisions may alter available inputs or sensors and therefore the set of reported events.
- Manufacturer configuration options sometimes provide multiple reporting modes so confirm which mode is in use when validating Plaspy integration.
- Selection between UDP and TCP can affect message delivery semantics; choose the transport that matches device configuration and network reliability goals.
- Black box buffering and retransmission behavior vary by firmware and determine how much telemetry is preserved during outages.
- Always validate compatibility against official product documentation and release notes for device firmware.

## Why Protocol Understanding Matters

Knowing how the D‑Маяк communicates helps installers and operators set up reliable reporting, diagnose delivery issues, and make informed choices about reporting modes for battery life and responsiveness.

- Proper configuration of the reporting endpoint ensures devices reach the Plaspy server and are automatically detected.
- Understanding transport options helps balance reliability and battery consumption for covert installations.
- Awareness of firmware and hardware revision effects reduces troubleshooting time when telemetry patterns change.
- Recognizing what events the tracker can report enables meaningful alerting and rules within Plaspy.
- Verifying buffering and recovery behavior ensures historical continuity for incident investigation and recovery scenarios.

## Why Use Plaspy with This Protocol

Pairing the AutoFon D‑Маяк with Plaspy offers organizations a streamlined way to collect location and event telemetry from a discreet long life beacon. Plaspy ingests the tracker reports and converts them into map positions, timelines, and alert notifications that support recovery workflows and ongoing monitoring. The D‑Маяк’s configurable reporting modes, black box buffering, and event sensors make it a good fit for scenarios where endurance and reliable delivery matter.

To get started or learn more about how Plaspy works with trackers like the AutoFon D‑Маяк visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and should be verified with the manufacturer documentation at https://www.autofon.ru/ for the most current device specific information.
