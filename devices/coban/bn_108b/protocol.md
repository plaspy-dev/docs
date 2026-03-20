---
slug: /coban/bn_108b/protocol
id: bn_108b-protocol
sidebar_label: Protocol
title: Coban - BN-108B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Coban BN-108B GPS tracker and how it communicates with Plaspy for reliable tracking and alerts
keywords:
  - Coban BN-108B protocol
  - Coban BN-108B GPS protocol
  - BN-108B Plaspy compatibility
  - Coban tracker protocol
  - BN-108B tracking protocol
  - BN-108B communication protocol
  - Plaspy device protocol
  - GSM GPRS tracker Plaspy
  - portable GPS tracker BN-108B
  - asset tracker BN-108B
---

# Coban - BN-108B Protocol

This page covers the public protocol context for using the Coban BN-108B tracker with Plaspy. It explains how the tracker communicates in broad terms, what connection settings are commonly used, and how Plaspy ingests reporting from the device for live tracking, alerts, and historical playback.

The BN-108B is a Plaspy compatible portable 2G GPS tracker with a large 10,000 mAh battery, magnetic housing, and multiple reporting strategies including real time, Smart mode, and Power saving mode. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary with firmware, hardware revision, and manufacturer implementation. Users should verify device specific details when needed.

## Protocol Overview

The BN-108B communicates position, status, and event information from the device to a server endpoint so that Plaspy can present live locations, alerts, and telemetry to users. The protocol defines how the tracker identifies itself, reports GPS positions, and sends alarm or state events that Plaspy consumes and interprets for fleet and asset management features.

- Provides identification and session data so the server can associate messages with a specific BN-108B unit and customer account.
- Reports GPS coordinates and telemetry such as battery state, motion status, and alarm types for Plaspy to convert into map positions and events.
- Sends event notifications for alarms like external power disconnect, SOS, overspeed, and movement to enable immediate alerting.
- Supports multiple reporting modes so update frequency can balance accuracy and battery life for long term asset deployments.
- Uses standard transport methods supported by the device so messages can reach the Plaspy endpoint reliably over cellular networks.

## How Plaspy Detects the Protocol

Plaspy receives incoming telemetry at a shared endpoint and port and automatically detects the tracker protocol used by the BN-108B when data arrives. In most deployments the device is configured to report directly to the Plaspy endpoint and no manual protocol selection in Plaspy is required.

- Plaspy listens on a single port for all devices which simplifies device configuration and server routing.
- The BN-108B can be pointed to the Plaspy server domain d.plaspy.com or the IP address 54.85.159.138 when configuring the device.
- Plaspy automatically detects the tracker protocol when the device begins reporting to the shared endpoint.
- Because Plaspy handles protocol detection server side, users typically do not need to select a protocol option inside Plaspy if the tracker is properly configured.
- If a device is not reporting as expected, reviewing device reporting address and transport type is the first verification step.

## Transport and Connection Context

The BN-108B supports TCP, UDP, and SMS reporting, and can be configured to use either TCP or UDP to reach the Plaspy endpoint on the common port. Connection behavior depends on device settings and the selected reporting mode, so choosing the right transport helps meet reliability and battery life goals.

- Devices may be configured to use UDP or TCP on port 8888 to send telemetry to Plaspy.
- The tracker can be set to report to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices which reduces configuration complexity.
- TCP is often used where reliable delivery and session awareness are preferred, while UDP can be chosen for simpler, connectionless reporting depending on device support.
- SMS reporting is also supported by the BN-108B for configuration and fallback but telemetry ingestion to Plaspy is typically performed over TCP or UDP.

## Protocol Compatibility Notes

- Firmware variations across BN-108B units may change available features and exact reporting behavior, so confirm firmware version when validating compatibility.
- Hardware revisions and optional accessories can influence which telematics or alarms are reported to Plaspy.
- Transport selection TCP versus UDP can affect message delivery characteristics and should match what the device is configured to use.
- Manufacturer default settings may point devices to a different server address so update the reporting target to d.plaspy.com or 54.85.159.138 as required.
- Some features such as remote immobilization, Bluetooth arming, or voice monitoring require device side enablement and may vary by regional firmware.
- Always validate end to end reporting in a controlled test before wide deployment to confirm Plaspy is receiving the expected events and positions.

## Why Protocol Understanding Matters

Understanding how the BN-108B communicates helps streamline setup, troubleshoot issues, and maintain long term reliability when the device is managed through Plaspy. Clear knowledge of transport, reporting modes, and common event types reduces integration time and supports predictable behavior in production.

- Speeds up initial configuration by ensuring the device reports to the correct domain or IP and uses the supported port.
- Helps diagnose connectivity issues by narrowing whether a problem is transport, server address, or firmware related.
- Enables tuning of reporting modes to balance battery life against positional accuracy for specific use cases.
- Improves alarm handling by mapping device events to the corresponding Plaspy alerting workflows.
- Supports planning for firmware updates and hardware revisions that can change reporting semantics or available features.

## Why Use Plaspy with This Protocol

Using the BN-108B with Plaspy gives organizations a practical combination of long battery life, discreet installation, and flexible reporting modes that fit many asset tracking and anti theft scenarios. Plaspy ingests the tracker data, detects the device protocol automatically, and presents positions, alerts, and playback in a unified fleet management environment.

To learn more about how Plaspy works with devices like the BN-108B visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer documentation at https://www.coban.net/ as implementation details can change over time.
