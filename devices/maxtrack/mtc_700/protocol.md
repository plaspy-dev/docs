---
slug: /maxtrack/mtc_700/protocol
id: mtc_700-protocol
sidebar_label: Protocol
title: Maxtrack - MTC-700 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Maxtrack MTC 700 tracker and how it communicates with Plaspy for integration and configuration
keywords:
  - Maxtrack MTC-700 protocol
  - MTC-700 Plaspy compatibility
  - Maxtrack GPS tracker protocol
  - MTC-700 communication protocol
  - Maxtrack tracking protocol
  - vehicle tracking MTC-700
  - Plaspy tracker integration
  - MTC-700 telemetry
  - Maxtrack Lua tracker
  - MTC-700 satellite fallback
---

# Maxtrack - MTC-700 Protocol

This page covers the public protocol context for using the Maxtrack MTC-700 family of trackers with Plaspy. It explains, in non sensitive terms, how the tracker communicates with Plaspy and what aspects of the device reporting behavior are relevant when pointing MTC-700 devices to the Plaspy endpoint. The content focuses on protocol context rather than implementation internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. The MTC-700 family offers rich features such as embedded Lua customization, Wi Fi connectivity on certain models, dual SIM support, telemetry modes including CAN and accelerometer telemetry, SMS fallback, satellite modem compatibility, jamming detection, black box logging, and multiple physical interfaces that can affect how the device reports to a server.

## Protocol Overview

The tracker reporting protocol defines how the MTC-700 conveys identification, position, telemetry, and event data to a remote server so the platform can parse and present usable information for monitoring and operations. This page explains the public role of that protocol in relation to Plaspy rather than device internal mechanics.

- Enables the tracker to identify itself and deliver position and telemetry data that Plaspy can consume for tracking and analytics.
- Carries event reports such as ignition, jamming detection, sensor triggers, and black box records so operational events are visible in Plaspy.
- Supports multiple transport modes and fallback paths such as GPRS reporting and SMS fallback so data can reach the server under varying network conditions.
- Works alongside device customization features like embedded actions and Lua scripts that can change what and when data is reported.
- Provides the foundation for reliable telemetry and remote configuration when devices are pointed to the Plaspy endpoint.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports on a shared endpoint and port and applies automatic protocol detection so most devices can report without manual protocol selection inside the platform. When an MTC-700 is configured correctly to report to Plaspy, the platform will recognize the device protocol from the incoming connection and data characteristics.

- Plaspy server domain is d.plaspy.com so trackers can be pointed to that host name for reporting.
- Plaspy server IP is 54.85.159.138 which can be used where a numeric host is required.
- The port is 8888 and all devices in Plaspy use the same port for incoming tracker connections.
- Plaspy automatically detects the tracker protocol so users typically do not need to select a protocol manually inside the platform once the device reports to the Plaspy endpoint.
- If a device supports both UDP and TCP, ensure it is set to use one of the supported transports and the correct host and port so Plaspy can receive and detect the protocol.

## Transport and Connection Context

Connection context describes how the MTC-700 establishes transport to Plaspy rather than the internal packet format. The device may be configured to use different transports and hosts depending on the operational setup and firmware capabilities.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the server destination when configuring reporting.
- All devices in Plaspy use the same port, simplifying firewall and network planning for fleets.
- Some MTC-700 configurations can fall back to SMS or use an external satellite modem where GPRS is unavailable; those alternate channels are outside the primary TCP/UDP reporting path but important for continuity.
- Verify transport selection in device settings to match network policies and the Plaspy endpoint requirements.

## Protocol Compatibility Notes

- Firmware differences across MTC-700 revisions can change available reporting options, default transports, and feature sets relevant to protocol behavior.
- Hardware revisions and model variants such as Wi Fi capable models or satellite enabled variants can affect how connectivity and reporting are implemented.
- Manufacturer side configuration and optional modules like Lua scripts or macros may alter what data is sent and when, which affects compatibility with platform expectations.
- Transport selection between UDP and TCP should match what the device firmware supports and how the device is configured to report to Plaspy.
- SMS fallback and satellite reporting are device level features that can supplement GPRS reporting but require separate configuration and testing.
- Always validate device configuration against the latest manufacturer documentation to confirm the exact reporting commands and supported options.

## Why Protocol Understanding Matters

Understanding how the MTC-700 communicates with Plaspy helps ensure reliable setup, faster troubleshooting, and better long term operation of your tracking solution. Knowledge of transport choices, firmware effects, and the role of embedded customization leads to predictable device behavior on the platform.

- Helps confirm the device is pointed to the correct Plaspy endpoint and transport so data flows reliably.
- Makes it easier to diagnose connectivity issues by checking host, IP, and port settings before examining higher level data behaviors.
- Guides configuration of embedded actions, Lua scripts, and telemetry modes so reported data matches operational needs.
- Clarifies how fallback methods such as SMS or satellite interact with primary GPRS reporting to maintain continuity.
- Reduces trial and error by aligning expectations between device capabilities and Plaspy automatic protocol detection.

## Why Use Plaspy with This Protocol

Using the Maxtrack MTC-700 with Plaspy can deliver robust visibility for logistics, fleet operations, and critical monitoring use cases where advanced telemetry, custom logic, and fallback communications matter. Plaspy’s shared endpoint model and automatic protocol detection simplify onboarding so fleets can focus on configuration and operational rules rather than low level integration details.

To learn more about Plaspy and how it works with GPS trackers such as the MTC-700, visit https://www.plaspy.com. For the most current device specific protocol details and firmware behavior please verify information on the manufacturer website https://maxtrack.com.br as protocol support and device implementation may change over time.
