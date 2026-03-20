---
slug: /appello/master/protocol
id: master-protocol
sidebar_label: Protocol
title: Appello - Master Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for integrating the Appello Master GPS tracker with Plaspy shared connection settings
keywords:
  - Appello Master protocol
  - Appello Master GPS protocol
  - Appello Master protocol Plaspy
  - Appello Master communication protocol
  - Appello Master tracking protocol
  - Appello GPS tracker
  - Appello Master compatibility
  - Plaspy device protocol
  - vehicle tracking Appello Master
  - fleet tracking Appello Master
---

# Appello - Master Protocol

This page provides the public protocol context for using the Appello Master GPS tracker with the Plaspy platform. It describes how the tracker communicates with Plaspy in general terms, the connection settings Plaspy exposes publicly, and practical compatibility considerations for deployment and troubleshooting.

Plaspy uses a shared connection endpoint and port across supported devices and will automatically detect the tracker protocol when a device reports to the platform. Exact protocol behavior for the Appello Master can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non-sensitive protocol context rather than firmware internals.

## Protocol Overview

The Appello Master uses its cellular and GPS subsystems to assemble and transmit location and status information to remote servers. The communication protocol defines how the device identifies itself, conveys positional data, timestamps, and status indicators so Plaspy can present usable tracking information to fleet managers and integrators.

- Enables periodic and event driven transmission of GPS coordinates and device state to a remote server
- Carries identity and session information so Plaspy can associate incoming messages with a registered device
- Conveys device status attributes such as movement state, power input, and battery level in general terms
- Supports reliable delivery over common transport layers so Plaspy can ingest data consistently
- Allows server commands and responses where supported by the device and manufacturer implementation

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and port and includes automatic protocol detection for supported trackers. In most deployments the tracker is configured to report to the Plaspy endpoint and, once messages arrive, Plaspy identifies the device protocol without requiring manual protocol selection within the platform.

- Plaspy public endpoint is d.plaspy.com and the server IP is 54.85.159.138
- Plaspy listens on port 8888 for device reports and all devices supported by Plaspy use the same port
- Devices can be configured to use either UDP or TCP to send reports to Plaspy on port 8888
- When a properly configured device reports to d.plaspy.com or the server IP, Plaspy attempts to recognize the incoming protocol automatically
- In typical cases there is no need to pick a protocol manually inside Plaspy if the device is pointed to the correct Plaspy endpoint

## Transport and Connection Context

Connection context is an important part of reliable data delivery. The Appello Master communicates over cellular networks and can be configured to use different transport methods depending on device settings and manufacturer options. For Plaspy integration, focus on pointing the tracker at the correct server endpoint and transport to ensure messages reach Plaspy.

- The Appello Master may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Devices can target the Plaspy domain d.plaspy.com or directly use the server IP 54.85.159.138
- Plaspy uses the same port 8888 for all supported devices to simplify device configuration
- Transport choice (UDP vs TCP) can affect delivery behavior and should match the tracker configuration
- Network conditions, SIM/APN configuration, and operator behavior can influence how reliably the device reaches Plaspy

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional features; verify behavior after updates
- Hardware revisions and module variants can introduce small differences in supported transports or power management
- Manufacturer default settings may use a different server or port; update the device to point to d.plaspy.com or 54.85.159.138 on port 8888
- Some features or commands may be optional or dependent on the firmware build installed on the Master device
- Choose the transport (UDP or TCP) that matches the device configuration and operational requirements
- Always validate live reporting after configuration to confirm Plaspy is receiving and interpreting messages

## Why Protocol Understanding Matters

Understanding how the Appello Master reports data helps ensure correct setup, accurate tracking, and reliable long term operation with Plaspy. Knowledge of transport, server endpoint, and the influence of firmware and hardware helps teams troubleshoot connectivity and interpret device behavior.

- Simplifies initial device setup by confirming the correct endpoint and transport are used
- Aids troubleshooting when messages do not appear in Plaspy or device telemetry is inconsistent
- Helps plan firmware updates and validate behavior changes after upgrades
- Supports informed decisions about power management, reporting intervals, and battery life tradeoffs
- Enables better communication with the device manufacturer when seeking device specific behavior clarification

## Why Use Plaspy with This Protocol

Integrating the Appello Master with Plaspy gives organizations consistent visibility into vehicle and asset locations using a platform that accepts data on a single shared endpoint. Plaspy’s automatic protocol detection and unified port simplify device provisioning so fleets can scale tracking deployments without complex per-device configuration inside the server.

For more information about Plaspy and how it supports device integrations, please visit https://www.plaspy.com. Note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at http://www.cnjeo.com/.
