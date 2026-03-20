---
slug: /atrack/as1/protocol
id: as1-protocol
sidebar_label: Protocol
title: ATrack - AS1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the ATrack AS1 GPS tracker with Plaspy including connection context and compatibility notes
keywords:
  - ATrack AS1 protocol
  - ATrack AS1 GPS protocol
  - ATrack AS1 communication
  - AS1 Plaspy compatibility
  - ATrack AS1 tracking protocol
  - GPS tracker protocol guide
  - Plaspy device compatibility
  - vehicle tracking ATrack
  - asset tracking AS1
  - ATrack protocol guide
---

# ATrack - AS1 Protocol

This page documents the public protocol context for using the ATrack AS1 GPS tracker with Plaspy. It focuses on how the device communicates in a way that enables integration with Plaspy and what to consider during setup. The AS1 is a compact, IP67 rated asset tracker with GPS positioning, flexible cellular data options, long primary battery life, built in motion sensing, and support for SMS, TCP, and UDP reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Devices may be configured to send data to d.plaspy.com or to 54.85.159.138 using port 8888. The AS1 firmware, hardware revisions, and manufacturer implementation choices can affect exact message behavior, so the guidance here is intentionally high level and non sensitive.

## Protocol Overview

The AS1 reporting protocol defines how the tracker identifies itself, sends location and sensor data, and reports events so that Plaspy can display and process asset information. This section describes the general role of that protocol without exposing implementation specifics.

- Enables the AS1 to transmit GPS position, movement events from the 3 axis G sensor, and status information to a remote server.
- Carries device identifiers and timestamps so Plaspy can associate reports with the correct asset and timeline.
- Supports multiple transport methods so the device can use the best available network route for the deployment.
- Allows the device to send periodic location updates and event driven messages such as motion, geofence entry and exit, and battery alerts.
- Permits remote configuration and firmware upgrade mechanisms at the manufacturer level; those control flows are distinct from Plaspy ingestion.

## How Plaspy Detects the Protocol

Plaspy receives incoming tracker data on a consistent endpoint and uses that incoming traffic to identify and interpret the device protocol so users generally do not need to choose a protocol manually inside the platform.

- All devices in Plaspy use the same port so incoming traffic arrives on a single, consistent port for parsing.
- Plaspy accepts reports sent to d.plaspy.com or to the server IP 54.85.159.138 on port 8888.
- When an AS1 is configured to report to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and matches reports to the appropriate device record.
- Proper device configuration at the tracker side is typically the key step; once the device sends valid reports Plaspy will process them without extra configuration by the user.
- If device identifiers or reporting intervals vary by firmware, Plaspy uses the information provided in each incoming report to maintain correct association and timing.

## Transport and Connection Context

The AS1 supports multiple transport options and can be configured to use the alternative that best fits network availability and deployment constraints. Plaspy accepts the standard transports that the device offers.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices can point their reporting destination to d.plaspy.com or to 54.85.159.138; both endpoints are accepted by Plaspy.
- Plaspy listens on port 8888 for tracker reports and uses the same port for all supported devices to simplify device configuration.
- For deployments with intermittent connectivity, AS1 can also send alerts and fallback reports via SMS where supported by the device; Plaspy ingestion focuses on IP data streams.
- Network quality, APN settings, and carrier behavior can affect whether TCP or UDP is preferable for a particular installation.

## Protocol Compatibility Notes

- Firmware revisions can introduce differences in message content, available fields, or timing; always check the device firmware version when validating behavior.
- Hardware revisions or regional variants of the AS1 may enable or disable specific features such as certain radio bands or power management modes.
- Manufacturer side configuration options can change how often the device reports and which events are sent by default.
- Selecting TCP versus UDP at the tracker may influence delivery reliability and battery use; choose the transport that balances reliability and power for your use case.
- Remote features like FOTA are implemented by the manufacturer and may require specific server or FTP settings beyond the basic reporting endpoint.
- Validate compatibility against the ATrack official documentation when planning large scale deployments or automated provisioning.

## Why Protocol Understanding Matters

Understanding how the AS1 communicates with Plaspy helps ensure a smooth setup, reliable data delivery, and efficient troubleshooting when issues arise.

- Ensures the tracker is pointed to the correct Plaspy endpoint so reports are received and associated correctly.
- Helps diagnose connectivity issues by confirming whether the device is reporting via TCP or UDP to port 8888 at d.plaspy.com or 54.85.159.138.
- Guides decisions about reporting intervals and event thresholds to balance battery life and tracking granularity.
- Makes firmware change management safer by highlighting where message behavior could differ after an update.
- Aids in validating geofence and motion alert behavior by aligning device settings with Plaspy event handling expectations.

## Why Use Plaspy with This Protocol

Using the ATrack AS1 with Plaspy provides a practical way to gain real time visibility into mobile assets with a single, consistent ingestion endpoint. Plaspy’s support for the standard transports used by the AS1 and its automatic protocol detection simplify onboarding so teams can focus on operations rather than per device parser selection.

To learn more about how Plaspy works with trackers like the ATrack AS1 visit https://www.plaspy.com. For the most current and device specific protocol and firmware details verify information on the manufacturer website https://www.atrack.com.tw/ as protocol support and firmware behavior can change over time.
