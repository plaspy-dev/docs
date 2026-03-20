---
slug: /cantrack/gf200ls/protocol
id: gf200ls-protocol
sidebar_label: Protocol
title: CanTrack - GF200LS Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CanTrack GF200LS and how it communicates with Plaspy for tracking and telemetry
keywords:
  - CanTrack GF200LS protocol
  - CanTrack GF200LS GPS
  - GF200LS Plaspy compatibility
  - GF200LS communication protocol
  - GF200LS tracking protocol
  - CanTrack GPS tracker protocol
  - GF200LS asset tracker protocol
  - Plaspy device protocol
  - GF200LS long life tracker
  - GF200LS asset tracking
---

# CanTrack - GF200LS Protocol

This page summarizes the public protocol context for using the CanTrack GF200LS with Plaspy. It focuses on how the tracker reports positions and events to Plaspy, the connection settings you typically configure on the device, and general compatibility considerations. The material here is intended for technical users and fleet managers who want to understand how the device communicates with Plaspy without exposing sensitive implementation details.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. The GF200LS can be configured to report over cellular GPRS/TCP using LTE or 2G, and reporting behavior can vary with firmware, hardware revision, and manufacturer configuration. Plaspy accepts incoming reports on d.plaspy.com (54.85.159.138) and uses port 8888; devices may be set to use UDP or TCP on port 8888 as supported by the unit.

## Protocol Overview

The GF200LS communication protocol is the mechanism the tracker uses to send location, status, and event data to a remote server such as Plaspy. In practice this covers how the device connects over cellular data, identifies itself to the server, and packages position and alert information so the receiving platform can ingest and display it.

- Enables position reporting and event delivery from the device to Plaspy for live and historical tracking.
- Carries device identity and status metadata so Plaspy can associate reports with the correct unit and account.
- Transports tamper events, battery and power state, and reporting mode indicators that integrate with Plaspy alerts and workflows.
- Allows the device to be configured with APN and server settings so it reliably reaches the Plaspy endpoint.
- Supports multiple reporting modes (real time, interval, clock) that trade off update frequency and battery life for long deployments.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port and automatically detects the protocol a device is using when it connects to that endpoint. For most users, properly configuring the GF200LS to report to Plaspy is sufficient; manual protocol selection inside Plaspy is typically not required.

- Plaspy accepts reports on d.plaspy.com and its public IP 54.85.159.138 using port 8888.
- All devices in Plaspy use the same port, simplifying server-side configuration and device setup.
- Plaspy automatically detects the tracker protocol when a device begins reporting to the shared endpoint.
- If the GF200LS is pointed to the Plaspy endpoint and network settings are correct, the device will be recognized without additional configuration on the platform.
- Users should ensure APN and server/port settings on the GF200LS match the Plaspy connection settings to allow automatic detection.

## Transport and Connection Context

Connection setup determines how the GF200LS reaches Plaspy but does not change the high level purpose of the protocol. The device supports cellular data reporting and can be configured to use either UDP or TCP according to installer preference and device firmware capabilities.

- The GF200LS may be configured to use UDP or TCP on port 8888 depending on device support and desired behavior.
- Devices can be set to report to the Plaspy domain d.plaspy.com or the server IP 54.85.159.138.
- Plaspy uses port 8888 for all devices, which simplifies provisioning across a fleet of different tracker models.
- Transport choice (UDP vs TCP) affects connection characteristics but not the overall goal of delivering positions and events to Plaspy.
- Ensure the device APN, server address, and transport protocol are correct so reports reach the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- Manufacturer firmware revisions can change message timing, fields included in reports, and supported commands; verify firmware when troubleshooting.
- Hardware revisions or variants of the GF200LS family may differ in available reporting modes or peripheral inputs.
- Some features such as tamper reporting or advanced telemetry may require specific firmware settings or configuration commands provided by the manufacturer.
- Transport selection (UDP versus TCP) and APN configuration on the device affect how the tracker communicates with Plaspy and with mobile networks.
- Plaspy’s shared port and automatic protocol detection reduce per-device configuration, but proper device APN and server settings are still required.
- Always validate behavior in a test unit or controlled environment before wide deployment.

## Why Protocol Understanding Matters

A basic understanding of the GF200LS communication protocol helps installers and operators set up devices correctly, diagnose connectivity issues, and choose reporting modes that match operational needs. Knowing how the device speaks to Plaspy reduces setup time and improves reliability in the field.

- Helps ensure APN and server settings point to d.plaspy.com or 54.85.159.138 with port 8888 so reports arrive at Plaspy.
- Makes it easier to choose reporting modes that balance battery life and visibility for specific use cases.
- Supports faster troubleshooting when expected events or positions are not appearing in Plaspy.
- Guides testing of firmware changes or hardware revisions before large scale rollout.
- Clarifies which device-reported events (for example tamper or low battery) should trigger Plaspy alerts and operational responses.

## Why Use Plaspy with This Protocol

Using the GF200LS with Plaspy provides a practical solution for organizations that need long-term, low-maintenance asset tracking. The GF200LS long-standby design combined with Plaspy’s centralized ingestion and visualization helps teams monitor dispersed or rarely accessed assets, receive tamper alerts, and review historical movement with minimal onsite maintenance.

To learn more about Plaspy and how it handles device protocols and fleet data, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer device details can change over time; verify current device specific protocol and firmware information with the manufacturer at https://www.cantrackgps.com/.
