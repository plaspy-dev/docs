---
slug: /coban/gps_405/protocol
id: gps_405-protocol
sidebar_label: Protocol
title: Coban - GPS-405 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for using the Coban GPS-405 with Plaspy including connection settings and compatibility guidance
keywords:
  - Coban GPS-405 protocol
  - Coban GPS-405 GPS protocol
  - Coban GPS-405 Plaspy
  - GPS-405 tracking protocol
  - Coban vehicle tracker protocol
  - GPS tracker communication
  - Coban GPS-405 compatibility
  - fleet tracking Coban GPS-405
  - vehicle tracking protocol Plaspy
  - tracker protocol documentation
---

# Coban - GPS-405 Protocol

This page covers the public protocol context for using the Coban GPS-405 tracker with the Plaspy platform. It explains how the device communicates in general terms, what connection settings Plaspy expects, and which aspects of the tracker behavior are important for successful integration and day to day operation. The goal is to provide clear, non-sensitive protocol guidance that helps vehicle managers and integrators connect GPS-405 devices to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device reports to the Plaspy endpoint. Exact protocol behavior for a GPS-405 unit can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, device-level communication context rather than firmware internals. For device specific command sets or low level packet details consult the manufacturer documentation.

## Protocol Overview

The device protocol defines how the GPS-405 reports location and telematics to a remote server and how that server can identify and act on those reports. In the context of Plaspy, the protocol covers the basic exchange of identification, positional data, status events, and optional remote control requests in a way that the platform can process for tracking and alerts.

- Provides vehicle identification and session information so Plaspy can associate incoming reports with the correct asset.
- Delivers periodic and event driven location updates for real time tracking and historical playback.
- Conveys status events used by Plaspy for alarms and notifications such as geofence, overspeed, power disconnect, and SOS alerts.
- Carries basic telemetry and I/O state so platform features like remote cut off or door monitoring can be represented in the UI.
- Enables heartbeat or keepalive messages so the platform can detect connectivity and device health over time.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single, shared endpoint and automatically determines the appropriate protocol handling for supported trackers. In most cases, when a GPS-405 is configured to report to Plaspy, the platform recognizes the device and maps incoming messages to the correct device record without manual protocol selection.

- Plaspy listens on the public endpoint d.plaspy.com and the host IP 54.85.159.138 for device connections.
- The platform uses port 8888 for device traffic; all devices supported by Plaspy use the same port to simplify configuration.
- Devices can connect over TCP or UDP to report to Plaspy, and the server accepts both transports on port 8888.
- When a GPS-405 is pointed to the Plaspy endpoint and begins reporting, users typically do not need to choose a protocol inside Plaspy manually.
- Ensure the tracker is configured to report to d.plaspy.com or directly to 54.85.159.138 using the correct transport and APN settings for the SIM in use.

## Transport and Connection Context

Connection context covers the network transport choices and server addressing that the GPS-405 must use to communicate with Plaspy. The GPS-405 supports multiple cellular bands and common transport options, so choosing the correct transport and server address is an important step for reliable reporting.

- The GPS-405 can be configured to use TCP or UDP depending on device support and configuration preferences.
- Plaspy accepts device traffic on port 8888 for both TCP and UDP, and that same port is used for all devices on the platform.
- Devices may be configured to send reports to the DNS name d.plaspy.com or directly to the IP address 54.85.159.138.
- Confirm the device APN, SIM data plan, and cellular registration before troubleshooting protocol level issues.
- Network factors such as operator NAT, firewall rules, and IP data restrictions can affect device connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- The GPS-405 is compatible with Plaspy when configured to report to the Plaspy endpoint, but behavior can vary across firmware and hardware revisions.
- Some GPS-405 units include a TCP UDP switch feature that changes the transport used by the device; set this consistently with the chosen Plaspy transport.
- Manufacturer firmware updates can add, change, or deprecate event reporting behaviors and baud or reporting intervals, so verify the tracker firmware if behavior differs from expectations.
- Differences in accessory wiring, external sensors, or optional modules (for example Wi Fi camera or temperature sensors) can alter which data fields are reported.
- Always validate a device on a test account or test asset in Plaspy before mass deployment to confirm that alarms, geofence events, and remote commands behave as expected.
- Refer to Coban documentation for device specific initialization commands and supported features to ensure compatibility.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable setup, faster troubleshooting, and predictable behavior in production tracking. A clear view of how the GPS-405 reports and how Plaspy receives those reports reduces configuration time and improves operational confidence.

- Allows accurate device provisioning so assets appear correctly in Plaspy with the right identity and settings.
- Speeds up troubleshooting by narrowing issues to transport, APN, or firmware when connectivity or events do not show up in the platform.
- Helps plan firmware upgrade and maintenance windows because protocol or event changes can affect reporting.
- Improves alarm tuning by knowing which device events are available and how often they are reported.
- Supports better lifecycle management for fleets by aligning device capabilities with monitoring and control policies.

## Why Use Plaspy with This Protocol

Using Plaspy with the Coban GPS-405 gives organizations a straightforward way to centralize vehicle visibility, alarms, and operational oversight. The platform accepts GPS-405 reports on a shared and well known endpoint, simplifying device configuration and reducing deployment overhead for mixed fleets.

Plaspy listens for GPS-405 and other tracker traffic at d.plaspy.com and 54.85.159.138 on port 8888, accepts both UDP and TCP, and automatically detects the tracker protocol so devices typically start reporting with minimal manual selection. To learn more about how Plaspy works and other supported devices, visit https://www.plaspy.com. Please verify current device specific protocol details, firmware behavior, and manufacturer guidance on the official Coban site at https://www.coban.net/ as implementations can change over time.
