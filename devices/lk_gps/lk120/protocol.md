---
slug: /lk_gps/lk120/protocol
id: lk120-protocol
sidebar_label: Protocol
title: LK-GPS - LK120 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the LK GPS LK120 and Plaspy integration covering connection settings and compatibility
keywords:
  - LK-GPS LK120 protocol
  - LK-GPS LK120 GPS protocol
  - LK-GPS LK120 Plaspy integration
  - LK120 tracking protocol
  - LK120 communication protocol
  - LK-GPS wearable tracker protocol
  - LK120 SOS geofence tracking
  - LK-GPS Plaspy compatibility
  - GPS tracker LK120 protocol
  - LK120 2G 4G tracker protocol
---

# LK-GPS - LK120 Protocol

This page presents the public protocol context for using the LK-GPS LK120 tracker with Plaspy. It explains how the device communicates at a high level, the connection settings Plaspy accepts, and practical considerations that matter when integrating a wearable 2G/4G tracker into a centralized tracking platform. Content here focuses on observable, non-sensitive protocol and connection details useful for setup and troubleshooting.

The LK120 is a compact wearable tracker designed for pets and personal carry with real-time tracking, geofence alerts, and an SOS button delivered over cellular networks. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device sends data to the platform. Exact protocol behavior and available features can vary with firmware version, hardware revision, and manufacturer implementation, so confirm model and firmware specific details with the device maker when needed.

## Protocol Overview

At a high level the tracker protocol defines how the LK120 reports location, status, and events to a remote server so Plaspy can ingest and present usable telemetry. The protocol is the bridge between device-generated GPS and status data and Plaspy’s mapping, alerting, and reporting features. This page does not document proprietary packet formats or parser internals but describes the role the protocol plays in a successful integration.

- Enables periodic or event driven transmission of GPS coordinates, timestamps, and status flags to Plaspy
- Carries event notifications such as SOS presses, geofence entry and exit, movement alerts, and low battery warnings
- Conveys identifying information so Plaspy can associate incoming messages with the correct device record
- Supports delivery over common transport layers so devices can reach Plaspy from cellular networks
- Provides the telemetry elements Plaspy uses to power live maps, event histories, and alert workflows

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and port and applies automatic detection to identify the incoming tracker protocol. When an LK120 is configured to report to Plaspy, users generally do not need to select a protocol manually inside Plaspy. Proper device configuration toward the Plaspy endpoint is the typical requirement for automatic detection to work.

- Plaspy accepts device reports at the domain d.plaspy.com and at the public IP 54.85.159.138
- Plaspy uses port 8888 for all supported devices so a single outbound port simplifies device configuration
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and regional requirements
- If the tracker sends its identifying and telemetry fields to the Plaspy endpoint, the platform will detect the protocol automatically
- Manual protocol selection in the platform is rarely required when the device is pointed correctly and uses supported transport settings

## Transport and Connection Context

Connection context focuses on how the LK120 reaches Plaspy rather than on packet internals. The tracker uses cellular connectivity to send telemetry and event reports to a remote server. For Plaspy integration you should ensure the device points to the supported Plaspy endpoint and uses the correct transport as allowed by the device and SIM/network environment.

- The LK120 may be configured to use UDP or TCP on port 8888 to send reports to Plaspy
- Devices can be pointed to the Plaspy server domain d.plaspy.com or directly to the IP 54.85.159.138 depending on device configuration options
- Plaspy uses the same port 8888 for all supported devices to simplify setup across different tracker models
- Network considerations such as carrier NAT, firewall rules, and APN settings can affect connectivity and should be validated during setup
- Ensure the device SIM and cellular plan allow outbound data to the Plaspy endpoint and that any APN authentication is correct

## Protocol Compatibility Notes

- Firmware variations between LK120 production batches can change which features are present or how specific events are reported
- Hardware revisions and regional device variants may enable or disable cellular bands, affecting network availability and behavior
- Manufacturer configuration menus sometimes offer both domain and IP targets; pick the option recommended by the device manual for Plaspy integration
- Transport choice of UDP versus TCP may influence delivery characteristics such as latency and reliability depending on network conditions
- Confirm that the device firmware version in use is known to interoperate with cloud platforms like Plaspy if specific features are required
- Validate geofence, SOS, and low battery reporting formats against manufacturer documentation to ensure Plaspy can map those events correctly

## Why Protocol Understanding Matters

Understanding how the LK120 communicates with Plaspy helps ensure reliable reporting, smooth onboarding, and faster troubleshooting when events are missing or behavior differs from expectations. A practical awareness of connection context, event types, and transport options reduces setup time and improves long term reliability.

- Facilitates correct device configuration so messages reach Plaspy at d.plaspy.com or 54.85.159.138 on port 8888
- Helps diagnose connectivity issues related to UDP versus TCP selection and carrier network behavior
- Makes it easier to confirm whether an observed event corresponds to a device capability or a firmware-specific behavior
- Supports informed decisions when updating device firmware or changing hardware variants
- Reduces time to resolution when geofence alerts, SOS events, or battery reports do not appear in Plaspy

## Why Use Plaspy with This Protocol

Using the LK-GPS LK120 with Plaspy gives organizations and owners centralized visibility into wearable trackers for pets and personal safety. Plaspy ingests the LK120’s location and event data so users receive live, historical, and event-driven views that support recovery, safety, and operational workflows. The combination of a small wearable tracker and a cloud platform is well suited for shelters, small asset monitoring, pet owners, and field teams that need low-friction telemetry.

Plaspy accepts reports at d.plaspy.com and at 54.85.159.138 on port 8888 and automatically detects the tracker protocol when the device is pointed to that endpoint. To learn more about Plaspy and how it works with devices like the LK120, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer documentation can change over time so verify the latest device specific details and firmware notes with the manufacturer at https://www.lk-gps.com.
