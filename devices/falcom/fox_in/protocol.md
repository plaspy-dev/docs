---
slug: /falcom/fox_in/protocol
id: fox_in-protocol
sidebar_label: Protocol
title: Falcom - FOX-IN Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Falcom FOX IN tracker with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - Falcom FOX IN protocol
  - FOX IN GPS tracker
  - Falcom GPS protocol
  - FOX IN Plaspy compatibility
  - Falcom vehicle tracking
  - FOX IN communication protocol
  - Plaspy device compatibility
  - fleet management GPS protocol
  - FOX IN geofencing
  - Falcom tracker integration
---

# Falcom - FOX-IN Protocol

This page covers the public protocol context for using the Falcom FOX-IN tracker with Plaspy. It explains how the device communicates in general terms, what connection settings Plaspy expects, and how understanding the reporting protocol helps ensure reliable integration for fleet management, AVL, security, and recovery use cases.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. For Plaspy the server endpoint information is d.plaspy.com with an alternate route to 54.85.159.138 and the standard port is 8888. The FOX-IN can be configured to use UDP or TCP to report to that endpoint, and exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol governs how the FOX-IN communicates location, status, alerts, and diagnostic information to a remote server such as Plaspy. At a high level the protocol enables identification, periodic and event driven reporting, and basic interaction between the tracker and a server.

- Allows the FOX-IN to identify itself and associate reports with a specific device or asset
- Carries periodic position updates plus event and alert messages required by fleet and security workflows
- Transports sensor status and basic telematics values that Plaspy can surface for monitoring and reporting
- Supports configuration updates and remote commands when the device and server agree on transport and addressing
- Enables geofence related notifications for route and area monitoring when configured on the device

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and analyzes the incoming data to determine the device type and protocol family. Because Plaspy centralizes connection handling the platform typically detects the tracker protocol automatically when the tracker reports to the correct Plaspy endpoint.

- Plaspy listens on a single port for all devices to simplify device setup and reduce configuration errors
- Devices that report to d.plaspy.com or 54.85.159.138 on port 8888 can be recognized by Plaspy without manual protocol selection
- Users generally do not need to select a protocol inside Plaspy if the FOX-IN is configured to report to the Plaspy endpoint
- Automatic detection reduces friction when adding diverse devices from multiple manufacturers
- If a device does not appear online verify device reporting settings and firmware behavior against manufacturer guidance

## Transport and Connection Context

Transport choice affects how the FOX-IN establishes a connection to Plaspy and how messages are delivered. The device may be set to use UDP or TCP on port 8888 depending on the device configuration and network conditions. Both the domain name d.plaspy.com and the IP 54.85.159.138 are public Plaspy endpoints that trackers can target.

- FOX-IN devices can be configured to report via UDP or TCP depending on installer preference and device capability
- Plaspy uses port 8888 for all supported devices to streamline configuration and detection
- Target the domain d.plaspy.com or the IP 54.85.159.138 in device server settings when pointing the tracker to Plaspy
- Network considerations such as NAT, firewalls, and carrier grade NAT can affect device reachability
- Confirm transport mode on the tracker because the chosen transport can influence delivery behavior and retransmission characteristics

## Protocol Compatibility Notes

- Firmware revisions can alter message contents and available features so compatibility may vary between releases
- Hardware revisions and optional peripheral modules on the FOX-IN can add or change telemetry fields
- Manufacturer configurable options such as reporting intervals, alert thresholds, and transport selection affect how data appears in Plaspy
- Geofencing and advanced features often require both device configuration and server side rules to be enabled
- Use TCP when reliable delivery and ordered packets are required and UDP when lower overhead and latency are preferred where supported
- Always validate compatibility and recommended settings against the official Falcom documentation for the exact FOX-IN model and firmware

## Why Protocol Understanding Matters

Understanding how the FOX-IN reports and how Plaspy expects to receive data helps with successful deployment, troubleshooting, and long term reliability. Clear knowledge of the communication context reduces setup time and improves operational visibility.

- Ensures the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can receive data
- Helps diagnose common connectivity issues such as wrong transport mode or blocked ports
- Clarifies expectations for reporting frequency, event triggers, and how alerts will appear in the platform
- Supports planning for firmware updates and device lifecycle management that may change protocol behavior
- Improves integration quality when combining FOX-IN sensors and telematics with Plaspy dashboards and alerts

## Why Use Plaspy with This Protocol

Using the Falcom FOX-IN with Plaspy provides a straightforward path to integrate a versatile tracker into an operational tracking and fleet management workflow. FOX-IN capabilities such as autonomous operation, sensor interaction, geofencing, and event reporting map well to Plaspy features for monitoring, alerts, and historical reporting.

Plaspy centralizes device connections on d.plaspy.com and 54.85.159.138 using port 8888 and automatically detects the tracker protocol so installers and operators can focus on configuring device behavior rather than platform protocol settings. To learn more about Plaspy and how it can work with devices like the FOX-IN visit https://www.plaspy.com. Please verify the latest FOX-IN protocol details, firmware behavior, and device documentation on the manufacturer site https://www.falcom.de because protocol support and device implementations can change over time.
