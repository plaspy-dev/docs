---
slug: /zilogic/rtu/protocol
id: rtu-protocol
sidebar_label: Protocol
title: Zilogic - RTU Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Zilogic RTU and how the device reports to Plaspy for remote telemetry and cloud integration
keywords:
  - Zilogic RTU protocol
  - Zilogic RTU GPS protocol
  - Zilogic RTU MQTT
  - Zilogic RTU HTTP
  - Zilogic RTU Plaspy
  - RTU communication protocol
  - RTU tracking protocol
  - RTU ModBus integration
  - Plaspy device compatibility
  - fleet tracking RTU
---

# Zilogic - RTU Protocol

This page describes the public protocol context for using the Zilogic RTU tracker with Plaspy. It focuses on how the device can report telemetry and state to Plaspy using the RTU's cloud ready interfaces and the shared Plaspy endpoint. The goal is to explain connection context and compatibility considerations without exposing sensitive implementation details.

The Zilogic RTU (BlackKite RTU) supports HTTP and MQTT reporting, optional ModBus IO expansion, configurable reporting intervals, and optional GPS for location. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary with firmware, hardware revision, and the manufacturer implementation on the RTU.

## Protocol Overview

The tracker protocol defines how the RTU packages and transmits sensor readings, IO states, GPS data, and device status to a cloud endpoint. With the RTU this generally means using its supported transport methods to reach Plaspy and rely on the platform to interpret the incoming reports for visibility and monitoring.

- Enables device identification and registration with the cloud platform so Plaspy can attribute incoming data to the correct asset.
- Carries telemetry such as digital and analog input values, IO events, GPS coordinates when present, and device health indicators.
- Supports configurable reporting intervals to balance timeliness and cellular data usage for remote deployments.
- Allows occasional offline buffering in internal FLASH when network connectivity is unavailable, preserving up to the device specified retention window.
- Works together with optional interfaces such as ModBus or serial adapters to extend field sensor and actuator connectivity.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and automatically determines which supported tracker protocol is in use. In most cases, when the RTU is configured to report to Plaspy it will be recognized without manual protocol selection on the platform side.

- Plaspy automatically detects the tracker protocol when the device is sending to the Plaspy endpoint.
- The Plaspy server domain is d.plaspy.com which resolves to the platform endpoint.
- The Plaspy server IP is 54.85.159.138 for direct IP pointing if DNS is not used.
- The device may be configured using UDP or TCP on port 8888 depending on device firmware and configuration choices.
- All devices in Plaspy use the same port which simplifies device setup and reduces per device configuration.
- If the RTU is correctly set to report to d.plaspy.com or 54.85.159.138 on the platform port, manual protocol selection on Plaspy is typically unnecessary.

## Transport and Connection Context

Connection context explains how the RTU reaches Plaspy rather than the precise contents of each message. The RTU supports core Internet transports and can be configured to point at Plaspy using either a domain name or an IP address.

- The device may be configured using UDP or TCP on port 8888 based on your RTU firmware and network requirements.
- Devices can point to d.plaspy.com or to 54.85.159.138 if you prefer direct IP addressing for DNS independent routing.
- Plaspy uses the same port for all supported devices which reduces confusion when configuring fleets that mix models.
- Choose UDP for lower overhead and bursty telemetry where the RTU and network path are reliable, or TCP where ordered delivery and session continuity are preferred.
- Ensure APN and cellular settings on the RTU are correct so the device can reach the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- Firmware variations across production runs can change how the RTU formats or transmits data; always check firmware release notes for implications on cloud reporting.
- Hardware revisions and optional accessories such as ModBus modules or GPS add-ons may alter the set of available telemetry items the device can send.
- The RTU supports HTTP and MQTT reporting modes; confirm which transport mode you plan to use and validate it in the field.
- Transport selection (UDP versus TCP) is determined by device configuration and network environment and can affect delivery behavior.
- SMS alerts and local buffering are device features that complement cloud reporting but do not replace endpoint reachability to Plaspy.
- Validate compatibility against Zilogic documentation for your exact RTU model and firmware to ensure expected behavior.

## Why Protocol Understanding Matters

Understanding how the RTU communicates with Plaspy helps ensure successful deployments, predictable data flows, and efficient troubleshooting when issues arise. Knowledge of transport choices, reporting intervals, and optional interfaces reduces setup time and improves operational reliability.

- Helps diagnose connectivity issues by confirming the device is pointed at d.plaspy.com or 54.85.159.138 and using port 8888.
- Guides selection between UDP and TCP to match reliability and latency needs for your use case.
- Clarifies how optional ModBus, serial, or GPS features map into telemetry delivered to Plaspy.
- Informs decisions about reporting intervals to balance real time visibility with GPRS data costs.
- Makes firmware upgrade planning safer by anticipating protocol behavior changes that could impact cloud integrations.

## Why Use Plaspy with This Protocol

Using the Zilogic RTU with Plaspy gives organizations a straightforward path from field data to centralized visibility and control. The RTU's support for cloud ready HTTP and MQTT reporting, combined with Plaspy's automatic protocol detection and unified endpoint, simplifies large scale deployments and mixed device fleets.

If you want to learn more about how Plaspy supports remote telemetry and device management, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance for the Zilogic RTU, verify information on the manufacturer site https://zilogic.com/ as behavior and supported features can change with new firmware and hardware revisions.
