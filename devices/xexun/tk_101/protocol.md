---
slug: /xexun/tk_101/protocol
id: tk_101-protocol
sidebar_label: Protocol
title: Xexun - TK-101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Xexun TK 101 tracker with Plaspy
keywords:
  - xexun tk 101 protocol
  - xexun tk 101 gps protocol
  - tk 101 tracking protocol
  - xexun tracker communication
  - plaspy tracker compatibility
  - plaspy integration guide
  - gps tracker protocol
  - vehicle tracking tk 101
  - fleet management tracker
  - tk 101 protocol overview
---

# Xexun - TK-101 Protocol

This page describes the public protocol context for using the Xexun TK-101 GPS tracker with the Plaspy platform. It covers how the device typically reports location and status to a remote server using GSM GPRS connectivity, and how those communications are interpreted at a high level by Plaspy. The TK-101 supports real time reporting, SMS or GPRS reporting, auto reporting, geofencing alerts, SOS monitoring, speed alerts, and low battery notifications that are relevant for integration.

Plaspy uses a shared connection endpoint and port for all supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive protocol context rather than device internals or proprietary message formats.

## Protocol Overview

The protocol used by the TK-101 enables the tracker to send position, movement, and alert information from the device to a remote server for processing and display. In general terms, the protocol defines how the tracker identifies itself, how reporting is initiated and scheduled, and which event types should be transmitted for monitoring and alerts.

- Provides device identification and session data so the platform can associate reports with a specific tracker
- Sends periodic position updates and event driven messages such as SOS, geofence breach, movement, and low battery
- Enables the use of GPRS as the primary data path with SMS usable for configuration or fallback reporting
- Supports last known location reporting when GPS fixes are unavailable to maintain continuity of tracking
- Carries metadata useful for monitoring such as speed, timestamps, and basic status indicators

## How Plaspy Detects the Protocol

Plaspy accepts connections at a single shared endpoint and port and contains logic to recognize the protocol used by each incoming device report. When a TK-101 is configured to report to the Plaspy endpoint, the platform will match incoming messages to a compatible handler without requiring manual protocol selection in most cases.

- Plaspy listens for device reports at the domain d.plaspy.com and the server IP 54.85.159.138
- All devices supported by Plaspy use the same port which simplifies device configuration and onboarding
- Devices may be configured to use either UDP or TCP on port 8888 and Plaspy will accept the configured transport
- When a device consistently reports to the Plaspy endpoint, the platform automatically detects the protocol pattern and associates data with the correct device
- Users typically do not need to select a protocol inside Plaspy if the tracker is correctly pointed at the Plaspy server

## Transport and Connection Context

The TK-101 can use GPRS to send data to a remote server, and the transport layer chosen at the device level affects how messages are delivered. Plaspy supports both common transport options on the standard Plaspy port so that device configuration is straightforward.

- Devices can be configured to send reports to d.plaspy.com or directly to the server IP 54.85.159.138
- The device may use UDP or TCP on port 8888 depending on the tracker settings and firmware capabilities
- Plaspy accepts connections on the same port for all supported devices which reduces configuration complexity
- Choosing UDP or TCP is done at the device configuration level and should match the device documentation for reliable reporting
- Network quality and operator GPRS behavior can influence message delivery and retry behavior

## Protocol Compatibility Notes

- Firmware revisions can change reporting intervals, available fields, and optional features; always note firmware level when validating behavior
- Hardware revisions or different production batches sometimes alter supported transport modes or optional features
- Manufacturer configuration commands and SMS setup options can affect whether the device uses GPRS or SMS for reporting
- Transport selection between UDP and TCP should follow the device documentation and the desired tradeoffs for reliability and latency
- Confirm that the device is configured to report to the Plaspy endpoint and port for automatic detection to succeed
- Validate geofence, SOS, and low battery alert behavior after configuration to ensure the tracker transmits the expected events

## Why Protocol Understanding Matters

Understanding how the TK-101 communicates helps ensure a smooth setup, accurate reporting, and predictable operation once the device is connected to Plaspy. Knowing the general protocol behavior makes troubleshooting faster and helps maintain reliable tracking in production deployments.

- Helps verify the device is correctly pointed at the Plaspy endpoint and using the expected transport
- Aids in diagnosing missing reports or intermittent connectivity by focusing on transport and configuration first
- Clarifies which events the tracker will send so alerts and automations in Plaspy can be configured appropriately
- Supports planning for firmware updates and knowing when behavior may change after an update
- Improves operational reliability by aligning device reporting intervals and battery management with monitoring needs

## Why Use Plaspy with This Protocol

Using the Xexun TK-101 with Plaspy gives organizations a straightforward path to bring device data into a managed tracking platform. The TK-101 provides the core tracking features many deployments require, and Plaspy accepts reports on a shared endpoint so onboarding is usually quick once device settings are updated to point to the platform.

Plaspy listens on the domain d.plaspy.com and at 54.85.159.138 on port 8888 using a shared port for all devices and automatically detects the tracker protocol when the device reports to the platform. To learn more about how Plaspy works with a wide range of tracker models and to review deployment options, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and setup instructions from the manufacturer, please verify information at https://www.xexun.com/ as vendor behavior can change over time.
