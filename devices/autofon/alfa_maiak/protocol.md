---
slug: /autofon/alfa_maiak/protocol
id: alfa_maiak-protocol
sidebar_label: Protocol
title: AutoFon - Альфа-Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the AutoFon Альфа-Маяк tracker and how it communicates with Plaspy using GPRS and SMS
keywords:
  - AutoFon Альфа-Маяк protocol
  - AutoFon Альфа-Маяк GPS protocol
  - Alfa Beacon Plaspy
  - AutoFon tracker protocol
  - Alfa Маяк compatibility Plaspy
  - GPS tracker communication
  - GPRS SMS tracker
  - vehicle tracking Alfa Beacon
  - Plaspy device compatibility
  - AvtoFon Alfa Beacon protocol
---

# AutoFon - Альфа-Маяк Protocol

This page documents the public protocol context for using the AutoFon Альфа‑Маяк (Alfa Beacon) tracker with Plaspy. It describes how the device reports location and status over GSM channels and how those reports are received by Plaspy, without exposing private parser or firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects tracker protocols when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior and available message types can vary by firmware version, hardware revision, and manufacturer configuration, so this page focuses on public, implementation‑safe details relevant to integration and troubleshooting.

## Protocol Overview

The tracker uses standard GSM reporting channels to deliver position and status data that Plaspy can ingest for real time monitoring and event handling. The communication protocol governs how the device identifies itself, how position and telemetry are formatted for delivery, and how the tracker indicates events such as SOS or low battery.

- Enables the Alfa Beacon to report GNSS fixes, battery and device status, and event alerts to a remote monitoring server.
- Provides a consistent method for Plaspy to receive location updates via GPRS and SMS channels.
- Determines what identification or device ID the tracker sends so Plaspy can associate reports with the correct asset.
- Supports buffered delivery behavior so unsent messages can be retried after connectivity is restored.
- Influences remote configuration and firmware update paths when those features are enabled over GPRS.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and automatically detects the incoming tracker protocol based on the device behavior and message stream. In most deployments users do not need to select a protocol inside Plaspy when the tracker is configured to report to the Plaspy server address.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138.
- Plaspy receives device traffic on port 8888 and all devices supported by Plaspy use the same port.
- A device configured to send data to d.plaspy.com or 54.85.159.138 on port 8888 will be processed by Plaspy.
- Plaspy can accept device connections over UDP or TCP on port 8888 depending on device configuration.
- If a tracker is sending data to the Plaspy endpoint, protocol selection inside the platform is typically handled automatically.

## Transport and Connection Context

The Alfa Beacon uses GSM for connectivity and can deliver reports via SMS or GPRS. When using GPRS to report directly to a server, the device may be configured to connect to Plaspy over the internet using standard TCP or UDP on the shared Plaspy port.

- The device may be pointed at d.plaspy.com or the numeric IP 54.85.159.138 for server delivery.
- Transport can be UDP or TCP on port 8888 depending on tracker settings and network conditions.
- SMS reporting is an alternative path the device can use to send location links or alerts when GPRS is not available.
- Buffered storage on the device holds a small number of unsent GPRS packets and retries delivery when connectivity returns.
- Remote configuration and firmware updates for the Alfa Beacon are performed over GPRS when enabled by the manufacturer or service profile.

## Protocol Compatibility Notes

- Firmware variations can change message content, frequency options, and available telemetry fields; verify firmware level before assuming behavior.
- Different hardware revisions or factory configurations may enable or disable features such as remote audio or buffered packet depth.
- Transport choice (UDP vs TCP) can affect delivery characteristics; configure the device to match the intended transport type for your deployment.
- Manufacturer provisioning, including built in SIM or APN settings, can influence how the device connects to GPRS and the Plaspy endpoint.
- SMS reporting modes coexist with GPRS delivery; know which channel the device is set to use for critical alerts.
- Always validate compatibility with the latest AvtoFon documentation and release notes for device specific details.

## Why Protocol Understanding Matters

Understanding how the Alfa Beacon communicates helps ensure successful setup, accurate data ingestion, and more effective troubleshooting when pairing the device with Plaspy. Clear knowledge of connection expectations and reporting behavior reduces integration time and helps maintain long term reliability.

- Helps confirm the device is pointed at the correct server address and transport mode for Plaspy.
- Simplifies diagnosing missed reports by distinguishing SMS from GPRS delivery and transport issues.
- Assists in setting appropriate reporting intervals to balance battery autonomy and tracking needs.
- Enables informed decisions about remote configuration and firmware updates over GPRS.
- Supports planning for use cases such as SOS alerts and buffered delivery during intermittent connectivity.

## Why Use Plaspy with This Protocol

Pairing the AutoFon Альфа‑Маяк (Alfa Beacon) with Plaspy provides a practical solution for organizations that need discreet, low maintenance asset tracking. The device’s compact form factor, long battery life, dual GNSS positioning, and support for SMS and GPRS reporting match well with Plaspy’s centralized ingestion and monitoring model for location and event data.

Plaspy’s single shared endpoint model and automatic protocol detection simplify fleet scale deployments because devices can be directed to d.plaspy.com or 54.85.159.138 on port 8888 without manual protocol selection. To learn more about Plaspy and how it can work with devices like the Alfa Beacon visit https://www.plaspy.com. For the most current and device specific protocol and firmware details check the manufacturer documentation at https://www.autofon.ru/ as protocol support and firmware behavior can change over time.
