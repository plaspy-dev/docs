---
slug: /topshine/pt30/protocol
id: pt30-protocol
sidebar_label: Protocol
title: TopShine - PT30 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the TopShine PT30 tracker and Plaspy integration
keywords:
  - TopShine PT30 protocol
  - TopShine PT30 GPS protocol
  - TopShine PT30 protocol for Plaspy
  - TopShine PT30 communication protocol
  - TopShine PT30 tracking protocol
  - TopShine PT30 tracker compatibility
  - Plaspy device protocol
  - vehicle tracking TopShine PT30
  - PT30 GPS tracker protocol
  - TopShine PT30 GPRS tracking
---

# TopShine - PT30 Protocol

This page covers the public protocol context for using the TopShine PT30 tracker with Plaspy. It explains how the tracker reports location and status information to Plaspy in broad, non sensitive terms and what aspects of the tracker communication are relevant when integrating or troubleshooting the device on the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior may differ between units or firmware builds.

## Protocol Overview

The PT30 reporting protocol defines how the device sends position, status, and alert information to a remote server. In general terms the protocol gives the server the data needed to identify the device, record location points, and trigger alarms or responses based on events reported by the tracker.

- Enables the tracker to report GPS location and timestamped position data to a remote server.
- Carries basic device identification so the receiving platform can associate messages with a known unit.
- Conveys event and status messages such as SOS alerts, movement or geofence notifications, battery or power state, and periodic heartbeat reports.
- Supports both GPRS based reporting and SMS fallback for location delivery as provided by the device.
- Allows the receiving service to process and display location history and real time updates for monitoring and troubleshooting.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a single shared endpoint and automatically determines which protocol a device is using when correctly configured. In most cases there is no need to manually pick a protocol inside Plaspy if the device is pointed at the Plaspy server and uses a supported transport.

- Plaspy listens on a single port for all supported devices and uses protocol detection logic to identify incoming tracker messages.
- The Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- Plaspy uses the same port for all devices and recognizes the tracker protocol automatically when valid reports arrive.
- When a PT30 or other tracker is configured to report to the Plaspy endpoint it will normally be identified without manual protocol selection by the user.
- If a device does not show up, common causes include incorrect server address, transport mismatch, or firmware settings that prevent reporting to the endpoint.

## Transport and Connection Context

The PT30 supports GPRS reporting and can be configured to use TCP or UDP depending on the device configuration and firmware. For Plaspy integration the key connection details are shared and consistent across supported devices, so configuring the correct server address and transport is the primary setup step.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and user configuration.
- The Plaspy server endpoint for reporting is d.plaspy.com and the server IP 54.85.159.138 which accept connections on port 8888.
- All devices in Plaspy use the same port, so the port setting is uniform across device models.
- Choose TCP if your environment requires a connection oriented transport, or UDP when low overhead is preferred and device firmware is set accordingly.
- Ensure APN and GPRS settings on the PT30 are correct so the tracker can reach the Plaspy endpoint over the mobile network.

## Protocol Compatibility Notes

- Firmware revisions can alter available commands and report formats, so two PT30 devices with different firmware may behave differently.
- Hardware revisions or regional models might change default transport settings or outbound server requirements.
- Transport selection between TCP and UDP is device configurable and must match the chosen setting when pointing the device to Plaspy.
- Manufacturer settings such as APN, reporting interval, and alarm configuration affect how and when the device sends data to Plaspy.
- Always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy to receive data.
- When in doubt, consult the device configuration menus and the manufacturer documentation to confirm compatibility details.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure reliable reporting, accurate location history, and quicker resolution when problems arise. Even without deep protocol level detail, knowing how the device connects and what it reports makes setup and troubleshooting more efficient.

- It speeds up configuration by clarifying required server address and transport choices for Plaspy.
- It reduces downtime by making it easier to spot mismatches between device settings and Plaspy requirements.
- It improves troubleshooting of common issues such as missing updates, incorrect APN, or wrong transport mode.
- It helps operators plan for features that depend on firmware such as SOS, geofence, or power reporting.
- It supports informed decisions about device placement, reporting intervals, and power management for long term use.

## Why Use Plaspy with This Protocol

Using the TopShine PT30 with Plaspy provides organizations a practical way to consolidate location reporting and event monitoring into a single platform. Plaspy accepts PT30 reports on its shared endpoint and provides tools to visualize locations, receive alerts, and maintain device histories for operational oversight.

Plaspy is designed to accept reports on a uniform port and to detect tracker protocols automatically, simplifying onboarding for PT30 devices that are pointed to d.plaspy.com or 54.85.159.138 on port 8888. Learn more about Plaspy on the main website https://www.plaspy.com and verify current device protocol and firmware information on the manufacturer site https://www.gztopshine.com/. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time so always confirm the latest information with the manufacturer.
