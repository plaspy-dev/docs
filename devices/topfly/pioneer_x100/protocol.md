---
slug: /topfly/pioneer_x100/protocol
id: pioneer_x100-protocol
sidebar_label: Protocol
title: TopFly - Pioneer X100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopFly Pioneer X100 and how it communicates with Plaspy for fleet tracking and monitoring
keywords:
  - TopFly Pioneer X100 protocol
  - TopFly Pioneer X100 GPS protocol
  - TopFly Pioneer X100 Plaspy compatibility
  - Pioneer X100 tracking protocol
  - TopFly GPS tracker protocol
  - vehicle tracking Pioneer X100
  - Plaspy tracker integration
  - Pioneer X100 communication protocol
  - TopFly fleet management protocol
  - Pioneer X100 connectivity
---

# TopFly - Pioneer X100 Protocol

This page provides a public protocol overview for the TopFly Pioneer X100 when used with Plaspy. It focuses on the communication context and integration considerations that affect how the wired GNSS tracker reports location, events, and telemetry to the Plaspy platform. The Pioneer X100 is a compact LTE Cat 1 tracker with 2G fallback, multiple digital inputs and outputs, BLE 4.2 support for sensors, and features such as driver behavior detection and FOTA capable firmware. This document describes the safe, non sensitive aspects of how the device communicates with Plaspy and what to verify during setup.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available telemetry fields can vary by device firmware, hardware revision, SIM and network conditions, and manufacturer configuration. For device specific message formats, commands, or firmware behavior please consult the official TopFly documentation in addition to this general guidance.

## Protocol Overview

In general terms, the Pioneer X100 communication protocol defines how the tracker identifies itself, reports GNSS fixes, sends alarm events, and transmits telemetry such as digital input states and BLE sensor readings to a remote server. The protocol layer ensures that Plaspy receives timely, usable data for tracking, alerts, and analytics while the device manages local sensors, inputs, and power characteristics.

- Enables delivery of GNSS position reports and time stamped event messages to the Plaspy server.
- Carries telemetry for inputs and outputs, driver behavior alerts, and optional BLE sensor data used by fleet monitoring features.
- Allows the device to identify itself so Plaspy can associate reports with the correct asset and record.
- Supports status and diagnostic messages that help monitor connectivity, power state, and firmware update results.
- Provides a channel for remote configuration and management commands when supported by firmware.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many tracker models and automatically detect the device protocol when a tracker is correctly configured to report to the Plaspy endpoint. In most cases users do not need to select a specific protocol inside Plaspy once the device is pointed to the shared Plaspy server settings.

- Plaspy receives device reports through the shared endpoint d.plaspy.com and its public IP 54.85.159.138.
- All supported devices report to the same Plaspy port 8888 and Plaspy uses that unified entry point for incoming data.
- The Pioneer X100 may be configured to use either UDP or TCP on port 8888 depending on device settings and network requirements.
- When the device is configured correctly to address Plaspy, protocol selection in the Plaspy interface is typically not required.
- If a device does not appear in Plaspy, verify server address, transport selection, APN and SIM provisioning before adjusting platform settings.

## Transport and Connection Context

Connection and transport choices affect how the Pioneer X100 delivers data but do not change the high level purpose of the protocol. Plaspy supports both common transport modes and expects devices to use the shared port so that incoming messages can be routed and associated automatically.

- The Pioneer X100 supports reporting over TCP or UDP and should be configured to use port 8888 for Plaspy.
- Devices can be pointed at the Plaspy hostname d.plaspy.com or the public IP 54.85.159.138 depending on configuration preferences.
- All devices supported by Plaspy use the same port 8888 which simplifies device provisioning and network rules.
- Choose TCP when session reliability is important and UDP when lower latency or reduced overhead is preferred and the device firmware supports it.
- Network level items such as APN settings, firewall rules, and SIM data plan provisioning can impact transport behavior and must be validated during deployment.

## Protocol Compatibility Notes

- Firmware revisions can change message contents, available event types, and diagnostics; confirm the device firmware level when validating compatibility.
- Hardware revisions or optional features such as BLE sensors, Wi Fi, or IP67 variants may alter the set of telemetry the device reports.
- The Pioneer X100 supports multiple transmission options; ensure the selected transport mode (TCP or UDP) matches the device configuration and network policy.
- Manufacturer configuration commands and default server settings may differ by region or reseller; verify that the device is set to report to Plaspy endpoint values.
- Integration of BLE accessories or crash detection features may require additional device settings or firmware support to expose those data points to Plaspy.
- Always validate device reporting behavior in a controlled test before wide scale deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps administrators and integrators set up devices correctly, diagnose connectivity issues, and ensure that the data delivered to Plaspy is accurate and actionable. Knowledge of the protocol context speeds troubleshooting and helps align device configuration with operational requirements.

- Speeds initial provisioning by confirming server address, transport type, and port settings.
- Makes it easier to interpret alarm and telemetry messages when investigating incidents or connectivity problems.
- Helps determine whether a missing data point is due to configuration, firmware limitations, or network issues.
- Supports planning for firmware updates and optional features such as BLE sensors or crash analytics.
- Reduces deployment risk by clarifying what the device will and will not report to Plaspy under specific configurations.

## Why Use Plaspy with This Protocol

Using the Pioneer X100 with Plaspy gives organizations a consistent platform for fleet visibility, event alerting, and historical reporting. The tracker’s LTE Cat 1 connectivity with 2G fallback, combined with inputs, outputs, BLE sensor capability, and driver behavior detection, complements Plaspy’s ability to collect location and event data for monitoring, compliance, and operational analysis. Because Plaspy listens on a shared endpoint and port, adding this tracker to an existing Plaspy account typically follows the same workflow as other supported devices.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance for the Pioneer X100 please verify current documentation at https://www.topflytech.com/ as protocol support and firmware behavior can change over time.
