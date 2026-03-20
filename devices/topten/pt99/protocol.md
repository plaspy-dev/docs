---
slug: /topten/pt99/protocol
id: pt99-protocol
sidebar_label: Protocol
title: TopTen - PT99 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TopTen PT99 integration with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - TopTen PT99 protocol
  - TopTen PT99 GPS protocol
  - PT99 Plaspy compatibility
  - PT99 tracking protocol
  - PT99 communication protocol
  - TopTen GPS tracker protocol
  - PT99 device integration
  - Plaspy device compatibility
  - vehicle tracking PT99
  - asset tracker PT99
---

# TopTen - PT99 Protocol

This page documents the public protocol context for using the TopTen PT99 personal asset GPS tracker with the Plaspy platform. It focuses on how the tracker communicates in general terms, what connection points Plaspy provides, and what to check during integration. The goal is to explain device communication without reproducing manufacturer proprietary details.

Plaspy accepts connections from supported trackers using shared connection settings and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. The PT99 may behave differently depending on firmware version, hardware revision, or manufacturer configuration, so exact command behavior and message timing can vary between units.

## Protocol Overview

The PT99 reporting protocol defines how the device identifies itself and transmits location and status information to a remote server. For integration purposes, the important public aspects are how the device establishes a connection, how often it reports, and which transport options it supports.

- Enables periodic and on demand reporting of GPS coordinates and related telemetry to a remote server
- Carries identity and status information so the server can associate reports with a specific PT99 device
- Supports alarms and event reports such as SOS, vibration, and low battery notifications to trigger notifications in the platform
- Allows configuration commands to be sent to the device via remote control channels supported by the manufacturer
- Works with hybrid location methods including GPS and cell based location to improve coverage in weak signal areas

## How Plaspy Detects the Protocol

Plaspy uses a unified endpoint and port for device reporting and performs automatic protocol detection for incoming device traffic. That means when a PT99 is configured to report to Plaspy, the platform will identify the device protocol from the incoming messages and route data to the correct parser and device record.

- Plaspy listens on the shared endpoint d.plaspy.com and on the public address 54.85.159.138
- All devices in Plaspy use the same port making initial setup consistent across models
- Devices may be configured to use either UDP or TCP on port 8888 to report to Plaspy
- When a PT99 reports to the Plaspy endpoint, manual protocol selection in the platform is typically not required
- Proper device configuration at the device side is the usual requirement to ensure reports reach d.plaspy.com on port 8888

## Transport and Connection Context

Understanding how the PT99 connects to the server helps ensure reliable reporting and successful integration. The PT99 can use common transport options and must be configured to point to the Plaspy endpoint for automatic detection to work.

- The PT99 may be configured to send data via UDP or TCP depending on the tracker firmware and settings
- Point the device to d.plaspy.com or to the server address 54.85.159.138 so reports reach Plaspy
- All Plaspy devices use the same port so configuring port 8888 on the tracker aligns with platform expectations
- Network reliability and mobile carrier behavior can affect how quickly reports arrive at Plaspy
- For remote configuration and command responses, verify the tracker supports the chosen transport protocol

## Protocol Compatibility Notes

- Firmware revisions can add or change features that affect message content or available events
- Hardware revisions may alter supported transports or peripheral behaviors such as sensors and alarms
- Manufacturer configuration options determine which events and reporting modes are active by default
- Selecting UDP versus TCP on the device can change delivery characteristics and retry behavior
- Always validate a device after firmware updates to confirm it still reports correctly to Plaspy
- Refer to the manufacturer documentation for firmware specific behavior that could affect integration

## Why Protocol Understanding Matters

Knowing how the PT99 communicates with Plaspy helps with initial setup, troubleshooting, and long term reliability. A clear understanding of the high level protocol behavior can reduce integration time and improve operational confidence.

- Ensures correct server and port settings so the device reaches d.plaspy.com on port 8888
- Helps interpret device events such as SOS, vibration alarm, and low battery in the platform
- Informs choices about transport selection that match network conditions and delivery needs
- Assists with diagnosing missing reports or incorrect telemetry after firmware changes
- Improves planning for power saving modes and reporting intervals to meet operational requirements

## Why Use Plaspy with This Protocol

Using the TopTen PT99 with Plaspy gives organizations a way to centralize location reporting, alerts, and device status for asset protection and operational visibility. Plaspy’s unified endpoint and automatic protocol detection simplify the setup so many PT99 units can be brought online without manual protocol configuration in the platform.

To learn more about Plaspy and how it handles device integrations, please visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific information on the manufacturer site at http://www.t10.cn.
