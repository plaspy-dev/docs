---
slug: /sentar/d50/protocol
id: d50-protocol
sidebar_label: Protocol
title: Sentar - D50 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Sentar D50 wearable tracker and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - Sentar D50 protocol
  - Sentar D50 GPS protocol
  - Sentar D50 protocol for Plaspy
  - Sentar D50 communication protocol
  - Sentar D50 tracking protocol
  - D50 wearable tracker protocol
  - Plaspy device protocol
  - Plaspy tracker compatibility
  - GPS tracker protocol guide
  - Sentar tracker integration
---

# Sentar - D50 Protocol

This page provides a public, high level overview of the communication protocol context for the Sentar D50 4G Kids Smart Watch when used with Plaspy. It focuses on how the device reports location, event, and telemetry data to Plaspy and what to expect during setup and routine operation. The content here is intended for technical users and administrators who need an accurate, non sensitive description of device to platform communication.

Plaspy uses shared connection settings across supported trackers and automatically detects the tracker protocol once the device is reporting to the platform. Exact runtime behavior can vary by firmware version, hardware revision and manufacturer implementation, so while Plaspy simplifies integration, device behavior may differ between firmware builds or production batches.

## Protocol Overview

The D50 communicates position, status and event information over the cellular network so Plaspy can display location, alerts and telemetry in near real time. The protocol carried over that connection defines how the watch identifies itself, how periodic updates and SOS alerts are reported, and how event-driven messages (for example calls or captured images) are flagged for ingestion by the platform.

- Enables periodic position updates from GPS plus LBS and WiFi fallback so Plaspy receives usable location data.
- Transports event messages such as SOS alerts, battery and online status notifications, and call or photo events to Plaspy.
- Carries an identity element so Plaspy can associate incoming reports with the correct device record.
- Supports both periodic telemetry and immediate event reporting to reflect real world device behavior.
- Works over standard network connections so Plaspy can ingest data without specialized routing from carriers.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming tracker data and automatically determines the device protocol when data arrives. In most cases, end users only need to configure the D50 to report to the Plaspy endpoint and Plaspy will handle protocol selection without manual per device protocol entry.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy also listens on a public IP address that devices can target as an alternative to the domain.
- The platform uses the same listening port across all supported devices, so Plaspy automatically detects the tracker protocol when data is received on that port.
- Users typically do not need to select a protocol inside Plaspy if the D50 is configured to report to the Plaspy endpoint.
- Plaspy supports automatic protocol detection to simplify onboarding of diverse tracker models.

## Transport and Connection Context

Connection choices such as transport protocol and target host are configuration options on the D50 and influence how the watch delivers its messages to Plaspy. The platform supports both commonly used transports and multiple addressing options so devices can be pointed at the most appropriate endpoint for the deployment.

- The D50 may be configured to use UDP or TCP for reporting depending on device support and carrier behavior.
- Plaspy receives device traffic on port 8888 which is used consistently for all supported devices.
- Devices can point to the Plaspy reporting domain d.plaspy.com or to the platform IP address as an alternative.
- Using the domain name is recommended for flexibility with infrastructure changes, while the IP address is available for legacy or constrained configurations.
- Ensure the device APN and SIM carrier allow outbound connections to the Plaspy endpoint to avoid connectivity issues.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or event behavior; validate which firmware the device is running when troubleshooting.
- Hardware revisions and manufacturing batches sometimes introduce small protocol variations that affect optional features such as camera events or extended telemetry.
- Transport selection between UDP and TCP can affect delivery semantics; choose the transport supported and documented for your firmware build.
- Manufacturer configuration interfaces may use different commands or default servers; confirm D50 reporting settings point to the Plaspy endpoint.
- Confirm SIM and carrier settings allow the device to reach external servers and that APN credentials are correct for mobile data use.
- When integrating many devices, test a small group before large scale deployment to catch unexpected compatibility differences.

## Why Protocol Understanding Matters

Knowing how the D50 communicates with Plaspy helps administrators ensure reliable device reporting, troubleshoot connectivity or data gaps, and plan device provisioning and firmware updates. A practical understanding reduces onboarding time and improves operational stability when managing many wearables across carriers and locations.

- Helps diagnose why a device might not appear in Plaspy or why updates are delayed.
- Informs correct device configuration choices such as transport protocol and server address.
- Guides firmware update decisions when a new release changes reporting behavior.
- Supports network policy planning so firewall and carrier rules allow outbound device traffic.
- Clarifies what data Plaspy expects from the device for mapping, alerts and telemetry.

## Why Use Plaspy with This Protocol

Using the Sentar D50 with Plaspy gives caregivers and administrators a dependable way to receive real time location, SOS alerts, and status telemetry from a wearable designed for child safety. Plaspy consolidates position data from GPS, LBS and WiFi fallback, surfaces event-driven alerts like emergency button presses, and logs device status so administrators can act quickly and keep accurate records.

To learn more about Plaspy and how it supports device integrations like the Sentar D50 visit https://www.plaspy.com. Protocol support, firmware behavior and device implementation details can change over time so please verify the latest device specific protocol information on the manufacturer website http://www.sentarsmart.com/ before large scale deployment.
