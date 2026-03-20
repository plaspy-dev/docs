---
slug: /flextrack/lommy_power/protocol
id: lommy_power-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Power Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Flextrack Lommy Power connectivity and Plaspy compatibility
keywords:
  - Flextrack Lommy Power protocol
  - Flextrack Lommy Power GPS protocol
  - Lommy Power communication protocol
  - Lommy Power tracking protocol
  - Plaspy device compatibility
  - Plaspy protocol detection
  - GPS tracker protocol integration
  - heavy equipment telemetry protocol
  - wired asset tracker protocol
  - vehicle tracking protocol
---

# Flextrack - Lommy Power Protocol

This page describes the public protocol context for using the Flextrack Lommy Power tracker with Plaspy. It explains how the device communicates relevant telemetry to Plaspy and what to expect from the shared connection settings used by the platform. Content here focuses on high level, non sensitive details that help with integration and troubleshooting.

Lommy Power is a compact wired tracker built for continuous real time tracking of heavy machinery and equipment. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and Flextrack implementation. For firmware specific commands and the latest manufacturer notes consult the official Flextrack documentation.

## Protocol Overview

At a high level, the Lommy Power communication protocol is the set of behaviors the device uses to identify itself and deliver GNSS and telemetry to a remote server so a platform like Plaspy can normalize and present usable data. The protocol covers how the unit reports position, motion, ignition state and operating hours so those values can be turned into alerts, geofence events, and reports.

- Enables identification of the device and delivery of periodic and event driven GNSS positions to the backend platform.
- Carries telemetry such as ignition status, motion events from the accelerometer, and operating hour measurements derived from battery current.
- Supports configurable reporting modes so the device sends frequent updates when active and reduced updates when idle to balance data usage and timeliness.
- Allows the platform to correlate timestamps, location, and sensor inputs for geofencing, utilization metrics, and anti theft workflows.
- Provides the transportable payloads that Plaspy ingests and normalizes for visualization and reporting without exposing internal firmware specifics.

## How Plaspy Detects the Protocol

Plaspy receives device data on a single shared endpoint and port and uses that connection to identify which protocol a device is using. When Lommy Power is configured to report to Plaspy, the platform detects the device protocol automatically so users normally do not need to select a protocol manually inside Plaspy if the tracker is pointed to the Plaspy endpoint.

- Plaspy listens on the shared server endpoint d.plaspy.com and the public IP 54.85.159.138 for incoming device connections.
- All devices supported by Plaspy use the same port so configuration is consistent across different models.
- Plaspy automatically detects the tracker protocol when the device sends its initial messages to the ingestion endpoint.
- In most deployments the installer only needs to set the device APN and reporting target to point at the Plaspy endpoint; Plaspy does the protocol identification.
- If a device is not detected automatically, standard checks include verifying the reporting address and transport settings on the tracker and confirming firmware compatibility with the manufacturer.

## Transport and Connection Context

Connection context covers how Lommy Power reaches Plaspy rather than implementation level packet formats. The tracker can use cellular data paths to deliver telemetry and supports multiple reporting transports depending on configuration and network availability.

- Devices may be configured to use UDP or TCP on port 8888 to reach Plaspy ingestion endpoints.
- Lommy Power can also send telemetry via SMS in fallback scenarios depending on device configuration and operator preferences.
- The Plaspy ingestion endpoint is addressable as d.plaspy.com or directly by the IP 54.85.159.138 and listens on port 8888.
- All Plaspy supported devices use the same port for consistency across models and deployments.
- Choice of UDP versus TCP affects connection behavior and delivery guarantees at the transport layer but is selected on the device side based on coverage and operator needs.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change message content, reporting intervals, or available telemetry fields; always check the device firmware release notes.
- Manufacturer configuration options such as APN settings, transport selection, and reporting profiles influence how the device communicates with Plaspy.
- When switching devices or firmware, validate that the unit is correctly pointed at d.plaspy.com or 54.85.159.138 and is using port 8888.
- Some installations may prefer TCP over UDP for network reliability while others use UDP for lower overhead; confirm the chosen transport on the device.
- Plaspy normalizes incoming data, but specific sensor names or auxiliary inputs may vary by Lommy Power firmware and should be mapped during integration.
- For the most accurate and current compatibility details consult Flextrack documentation and firmware release notes.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure reliable setup, predictable behavior, and quicker troubleshooting when integrating Lommy Power with Plaspy. Knowing which transports and reporting modes the device supports reduces configuration errors and speeds deployment.

- Helps diagnose connectivity issues by checking transport, endpoint address, and port settings on the device.
- Clarifies expected reporting behavior so alarms, geofence events, and operating hour calculations can be validated.
- Enables informed choices about reporting intervals and data usage trade offs for cellular plans.
- Facilitates mapping of auxiliary inputs and telemetry fields to Plaspy rules and dashboards.
- Improves readiness for firmware upgrades by understanding potential changes in telemetry or message cadence.

## Why Use Plaspy with This Protocol

Using the Lommy Power tracker with Plaspy gives organizations centralized visibility of heavy equipment and machinery. Continuous wired power, multi constellation GNSS, and ruggedized design combine with Plaspy ingestion and normalization to deliver location, motion, ignition, and operating hour data for fleet management, anti theft monitoring, and operational reporting.

To learn more about how Plaspy can work with Lommy Power and other asset trackers visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer instructions verify information on the Flextrack site at https://flextrack.dk since protocol support and firmware implementations can change over time.
