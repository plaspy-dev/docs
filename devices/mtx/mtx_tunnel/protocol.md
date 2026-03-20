---
slug: /mtx/mtx_tunnel/protocol
id: mtx_tunnel-protocol
sidebar_label: Protocol
title: Mtx - MTX Tunnel Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Mtx MTX Tunnel GPS integration with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - Mtx MTX Tunnel
  - MTX Tunnel protocol
  - Mtx GPS protocol
  - MTX Tunnel Plaspy
  - GPS tracker protocol
  - vehicle tracking Plaspy
  - GPRS GPS gateway
  - Telnet RS232 gateway
  - MTX Tunnel compatibility
  - fleet tracking protocol
---

# Mtx - MTX Tunnel Protocol

This page documents the public protocol context for using the Mtx MTX Tunnel tracker with Plaspy. It focuses on how the device communicates with Plaspy in general, explains the role of the tracker reporting protocol, and summarizes the connection options that are commonly used for integration. The goal is to provide useful, non-sensitive information that helps with setup and understanding rather than exhaustive manufacturer internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior for the MTX Tunnel can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes general behavior and integration points rather than firmware specific internals.

## Protocol Overview

The MTX Tunnel tracker is designed to deliver GPS positions and telemetry over cellular data to a remote server, with additional features for RS232 tunneling, Telnet access, SMS control, and optional SSL. In integration terms, the tracker protocol is the set of messages and reporting behavior that let Plaspy receive location, status, and telemetry data and allow remote commands and diagnostics when supported.

- Enables periodic reporting of GPS positions and telemetry for fleet visibility and tracking.
- Carries device identity and status information so the Plaspy platform can associate incoming reports with the correct asset.
- Supports auxiliary data channels such as RS232 tunnels, Telnet access, and SMS control that can be used for remote configuration and extended telemetry.
- Allows fallbacks like GSM cell tracking when GPS coverage is weak, providing continuity of location reporting.
- Can operate over standard TCP or UDP connections to a remote endpoint and may include optional transport security such as SSL for encrypted links.

## How Plaspy Detects the Protocol

Plaspy receives inbound device reports on a single public endpoint and automatically identifies the tracker protocol from the incoming connection and messages. In most cases when the MTX Tunnel is configured to report to Plaspy, no manual protocol selection is required inside Plaspy.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting.
- The port used for device traffic is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen transport.
- Plaspy automatically detects the tracker protocol so users typically do not need to choose a protocol manually in the platform.
- Proper device configuration to point to the Plaspy endpoint is the usual prerequisite for automatic detection.

## Transport and Connection Context

Connection context covers how the MTX Tunnel opens a session to send reports and how engineers should point devices to Plaspy. The MTX Tunnel supports multiple transport modes and server targets; choosing the correct transport and endpoint is essential for reliable reporting.

- The device may use UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be configured to point to the domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy uses the same port for all supported devices, simplifying fleet level configuration.
- Depending on firmware and settings, the MTX Tunnel can operate in TCP Server mode, HTTP Get reporting, or GPRS gateway modes when integrated with remote servers.
- Optional SSL support may be available on the device for encrypted connections; use manufacturer guidance when enabling secure transport.

## Protocol Compatibility Notes

- Firmware version differences can change message timing, telemetry fields, and transport options; always check the device firmware release notes.
- Hardware revisions may affect available interfaces such as RS232 tunneling or I2C/SPI features and their behavior when forwarded over GPRS.
- Manufacturer configuration modes (for example TCP Server mode versus HTTP Get) alter how the device sends data and what the receiving server expects.
- Choosing TCP versus UDP affects delivery behavior and may influence how Plaspy processes repeated or lost reports.
- SMS control and Telnet access provide alternative management channels but are separate from the primary reporting protocol to Plaspy.
- Validate compatibility and configuration steps against the official MTX Tunnel documentation to confirm feature availability for your exact model and firmware.

## Why Protocol Understanding Matters

Understanding how the MTX Tunnel communicates helps ensure a smooth setup, predictable behavior, and efficient troubleshooting when integrating with Plaspy. Even when Plaspy automatically detects the protocol, knowing the device capabilities and transport choices reduces configuration errors and supports long term reliability.

- Helps you choose the correct transport mode and endpoint settings to ensure reliable reporting.
- Makes it easier to verify that the device is identifying itself and sending expected telemetry fields to Plaspy.
- Supports quick diagnosis of connectivity issues such as incorrect domain, IP, or transport selection.
- Informs decisions about enabling optional features like SSL, RS232 tunnels, or low power modes.
- Assists in planning firmware updates and validating that behavior changes will not disrupt Plaspy integration.

## Why Use Plaspy with This Protocol

Using the MTX Tunnel with Plaspy gives organizations a practical way to collect GPS positions and extended telemetry in a single platform. Plaspy's unified endpoint and automatic protocol detection reduce the per-device configuration burden for mixed fleets, while the platform's ability to accept reports over TCP or UDP on a single shared port simplifies deployment.

If you want to learn more about Plaspy and how it supports device integration, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and configuration instructions for the MTX Tunnel, verify information on the manufacturer website http://www.mtxtunnel.com/ since protocol support and firmware behavior can change over time.
