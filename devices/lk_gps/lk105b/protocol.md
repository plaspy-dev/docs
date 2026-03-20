---
slug: /lk_gps/lk105b/protocol
id: lk105b-protocol
sidebar_label: Protocol
title: LK-GPS - LK105B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for LK GPS LK105B compatibility with Plaspy providing connection and detection context for reliable pet tracking
keywords:
  - LK GPS LK105B protocol
  - LK105B GPS tracker protocol
  - LK GPS protocol Plaspy
  - LK105B Plaspy compatibility
  - LK GPS tracking protocol
  - pet GPS protocol
  - GPS tracker communication
  - LK105B real time tracking
  - LK GPS configuration
  - LK105B troubleshooting
---

# LK-GPS - LK105B Protocol

This page describes the public protocol context for using the LK-GPS LK105B Mini Pet GPS Tracker with Plaspy. It summarizes how the device communicates in general terms, how Plaspy receives tracker reports, and what to consider when configuring the tracker for reliable position and alert delivery. The information here is intended to help technical users and fleet or asset managers understand integration points without exposing private implementation details.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the LK105B can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on the common, public aspects of device communication and practical compatibility considerations.

## Protocol Overview

The communication protocol for the LK105B governs how the tracker reports its location, movement events, and alerts to a server such as Plaspy. The protocol ensures the tracker identifies itself, transmits usable location and status information, and supports features that underpin real time tracking and historical playback on a platform.

- Enables periodic and event driven location reporting so Plaspy can display real time position and history.
- Carries device identifiers and status fields that allow the platform to associate data with the correct device.
- Delivers alert and SOS notifications that can be surfaced to users and operators in Plaspy.
- Supports transport over standard IP sockets so the tracker can send reports to a public Plaspy endpoint.
- Works with power management and movement detection features to balance reporting frequency and battery life.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a single shared endpoint and automatically determines which supported tracker protocol is present. In most cases users do not need to select a protocol manually inside Plaspy as long as the tracker is configured to report to the correct Plaspy endpoint and port.

- Devices should be configured to send reports to d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- Plaspy listens for incoming reports on port 8888 and uses that same port for every supported device.
- Trackers that support TCP or UDP can be configured to use either transport to reach the Plaspy endpoint.
- When a properly configured LK105B reports to the Plaspy endpoint, Plaspy will automatically detect the device protocol and process incoming data for that device.
- Manual protocol selection inside the platform is usually not required if device reporting is configured correctly.

## Transport and Connection Context

Connection context covers how the physical link is made between the LK105B and Plaspy servers. The tracker can use common IP transport methods and either the Plaspy domain or IP can be used to direct reports.

- The LK105B may be configured to use UDP or TCP on port 8888 depending on device support and configuration preferences.
- Trackers can point to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138 when configuring the reporting endpoint.
- Plaspy uses the same listening port 8888 for all supported devices to simplify configuration.
- Choose UDP for lightweight, lower overhead reporting or TCP where reliable delivery and connection state are preferred and supported by the device.
- Verify network settings such as APN and outbound firewall rules so the tracker can reach the Plaspy endpoint from the cellular network.

## Protocol Compatibility Notes

- Firmware versions can change message timing, field contents, and supported features. Always confirm the tracker firmware in use when troubleshooting.
- Hardware revisions or OEM variants of the LK105B may differ in supported transports or default configuration values.
- Some features such as SOS notifications, voice monitoring, and movement based sleep may be implemented differently by firmware release.
- Transport selection between UDP and TCP can affect delivery characteristics and should match the device capabilities and operational needs.
- Validate that the tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 before assuming compatibility.
- For certain behaviors or advanced features consult the manufacturer documentation for device specific commands and configuration options.
- Test a device in a controlled environment before deploying large numbers to confirm behavior with your carrier and Plaspy.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a robust integration with Plaspy, speeds up troubleshooting, and improves operational reliability. Awareness of how the device reports and how the platform ingests that data reduces setup time and prevents common misconfigurations.

- Ensures correct configuration of the tracker reporting endpoint and transport so messages reach Plaspy.
- Helps diagnose why position updates or alerts might be delayed or missing by checking firmware and transport settings.
- Aids in configuring reporting intervals and power management features to balance battery life and location freshness.
- Supports validation of SOS and alert behaviors so urgent messages are delivered to Plaspy and to users.
- Improves expectations around historical playback and the granularity of recorded routes.

## Why Use Plaspy with This Protocol

Using the LK-GPS LK105B with Plaspy lets organizations and pet owners centralize location, alerts, and historical routes in a single platform designed for monitoring and operational oversight. Plaspy’s automatic protocol detection and shared connection settings reduce the friction of getting devices online and reporting to a managed server.

If you want to learn more about how Plaspy works with devices like the LK105B, visit the Plaspy website at https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware information please verify current documentation on the manufacturer site https://www.lk-gps.com since protocol support and firmware behavior can change over time.
