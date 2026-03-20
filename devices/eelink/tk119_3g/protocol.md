---
slug: /eelink/tk119_3g/protocol
id: tk119_3g-protocol
sidebar_label: Protocol
title: EElink - TK119‑3G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for EElink TK119‑3G compatibility with Plaspy connection context and integration notes
keywords:
  - EElink TK119‑3G protocol
  - EElink TK119‑3G GPS protocol
  - EElink TK119‑3G Plaspy
  - EElink GPS tracker protocol
  - TK119‑3G communication protocol
  - vehicle tracking protocol
  - fleet tracking Plaspy
  - GPS tracker compatibility
  - Plaspy device protocol
  - telemetry and alarms
---

# EElink - TK119‑3G Protocol

This page explains the public protocol context for using the EElink TK119‑3G tracker with Plaspy. It focuses on how the device communicates with Plaspy in practical, non-sensitive terms so fleet administrators and integrators can understand connection and reporting behavior without exposing proprietary internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available messages can vary by firmware version, hardware revision and manufacturer implementation, so this guidance covers connection context, common protocol roles and compatibility considerations rather than device internals.

## Protocol Overview

The TK119‑3G reporting protocol allows the tracker to send position, event and telemetry data to a centralized server where Plaspy ingests and interprets the information for tracking, alerts and reporting. The protocol's public role is to reliably deliver location fixes and status events from the device over cellular networks to Plaspy.

- Carries location data and positioning mode information so Plaspy can display real time position and history.
- Transmits vehicle status and event signals such as ACC ignition, alarms and relay state for alerting and automation.
- Sends telemetry useful for diagnostics and integrations, including peripheral data from RS232 expansions.
- Provides a transportable stream of events that Plaspy maps into alerts, reports and control workflows.
- Enables the device to identify itself so Plaspy can associate incoming messages with the correct asset.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a common public endpoint and uses the incoming connection and message characteristics to determine the tracker protocol automatically. In most deployments you do not need to select a protocol manually inside Plaspy when the device is correctly pointed at the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting.
- The port is 8888 and all devices in Plaspy use the same port for device reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device support and user configuration.
- Plaspy automatically detects the tracker protocol when a device reports to the shared Plaspy endpoint.
- Typical setup requires configuring the tracker with the Plaspy server address and ensuring the correct transport (UDP or TCP) is selected on the device.

## Transport and Connection Context

Connection choices are part of the device setup but do not change the fact that all Plaspy devices use a single reporting port. The TK119‑3G can be pointed at a domain or an IP address and may use either UDP or TCP depending on how the unit is provisioned and what the mobile network supports.

- Devices may point to d.plaspy.com or 54.85.159.138 as the destination host for reporting.
- The port for reporting to Plaspy is 8888 and the device may be configured using UDP or TCP on port 8888.
- Using UDP can reduce overhead for frequent position updates while TCP provides connection reliability where supported by the device.
- Ensure mobile network APN and data routing allow outbound connections to the Plaspy endpoint on port 8888.
- Keep device time and GNSS assistance settings current to improve position reporting and event timestamps.

## Protocol Compatibility Notes

- Firmware versions can add, remove or alter message types and fields; always verify behavior against the device firmware release notes.
- Hardware revisions and optional modules such as the RS232 expansion or relay may influence available telemetry and control features.
- Manufacturer configuration tools and default settings can affect whether the device uses UDP or TCP; confirm transport selection during provisioning.
- Plaspy’s shared port approach reduces configuration complexity but requires the device to be correctly pointed to the Plaspy endpoint.
- Regional cellular bands and carrier behavior may affect message delivery latency and reliability.
- Validate compatibility and feature mapping with manufacturer documentation before wide deployment.

## Why Protocol Understanding Matters

Understanding how the TK119‑3G communicates helps ensure a smooth setup, reliable telemetry, and predictable alerting inside Plaspy. Knowing what the device reports and how it connects reduces troubleshooting time and improves operational confidence.

- Speeds initial provisioning by knowing where to point the device and which transport to select.
- Helps interpret device behavior during signal loss, power events or firmware changes.
- Improves alert tuning by matching device event types to Plaspy alert rules.
- Supports reliable integration of peripheral data such as RS232 telemetry into fleet workflows.
- Aids troubleshooting with carriers and hardware vendors when messages fail to arrive at the Plaspy endpoint.

## Why Use Plaspy with This Protocol

Using the TK119‑3G with Plaspy gives fleet operators a straightforward path for ingesting location, event and peripheral telemetry into a unified platform. The combination supports real time tracking, ignition and alarm monitoring, and control actions such as remote immobilization where the device and installation permit.

If you want to learn more about how Plaspy handles device reporting and fleet workflows, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and implementation guidance consult the manufacturer at https://www.eelink.com.cn/ since protocol support and device behavior can change over time.
