---
slug: /falcom/fox_en/protocol
id: fox_en-protocol
sidebar_label: Protocol
title: Falcom - FOX-EN Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for integrating the Falcom FOX-EN tracker with Plaspy using shared connection settings
keywords:
  - Falcom FOX-EN protocol
  - FOX-EN GPS protocol
  - Falcom FOX-EN Plaspy compatibility
  - FOX-EN communication protocol
  - FOX-EN tracking protocol
  - Falcom GPS tracker protocol
  - Plaspy device compatibility
  - vehicle tracking FOX-EN
  - FOX-EN geofencing
  - FOX-EN telemetry reporting
---

# Falcom - FOX-EN Protocol

This page describes the public protocol context for using the Falcom FOX-EN tracker with Plaspy. It focuses on how the device communicates in supported reporting modes and how that communication is handled by Plaspy. The goal is to provide practical, non-sensitive protocol context that helps integrators and fleet teams understand how the FOX-EN exchanges data with a server endpoint.

The Falcom FOX-EN is a flexible GPS tracker with features such as TCP reporting, SMS alerts, geofencing, sensor and actor integration, voice call capabilities, and a combined driver logbook and data logger. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device specifics should be validated against official Falcom documentation.

## Protocol Overview

The FOX-EN reporting protocol defines how the tracker identifies itself to a server endpoint, delivers location and status data, and transmits alerts or event messages. For Plaspy integration the relevant public aspects are the transport mode used to reach the Plaspy endpoint and the kinds of events the device can report, such as geofence violations, status updates, and sensor-triggered alerts.

- Enables the tracker to send location, status, and alert information to a remote server for processing.
- Allows the device to identify itself so Plaspy can associate incoming messages with a specific unit.
- Carries event and telemetry data used by Plaspy for history, geofence alerts, and operational monitoring.
- Supports different reporting transports and modes which may be chosen in device configuration.
- Provides a mechanism for the tracker to send urgent alerts and periodic status reports to the platform.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared endpoint and automatically determines the tracker protocol when a properly configured device reports to the service. This automatic detection means users normally do not need to select a protocol manually in Plaspy if the FOX-EN is correctly set to report to the Plaspy server.

- Plaspy listens for tracker traffic at the domain d.plaspy.com and the public IP 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device configuration and onboarding.
- The platform accepts device reports sent over TCP or UDP on port 8888 depending on tracker configuration.
- When the FOX-EN sends status or alert messages to the Plaspy endpoint, Plaspy associates the messages with the device and parses them for display.
- Proper device identification and consistent reporting intervals improve automatic detection and device mapping in Plaspy.

## Transport and Connection Context

Connection context covers how the FOX-EN reaches the Plaspy endpoint and which transport options are commonly used. The FOX-EN can be configured to report over TCP or UDP, and it also supports SMS and voice features that are complementary to IP reporting. Understanding the transport options helps ensure reliable delivery of telemetry to Plaspy.

- The device may be configured to use UDP or TCP to send reports to port 8888 on the Plaspy endpoint.
- Devices can point to the domain d.plaspy.com or directly to the IP 54.85.159.138 depending on deployment needs.
- Plaspy uses the same port for all supported devices, which reduces configuration complexity.
- TCP is commonly used where reliable delivery and session behavior are required, while UDP may be preferred for lower overhead in some setups.
- SMS reporting and voice call features are separate channels often used for alerts or remote commands and do not replace IP reporting to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change how fields are reported or which events are supported; confirm the device firmware level when validating behavior.
- Hardware revisions and optional modules may affect available sensors, actor control, or telemetry fields.
- Manufacturer configuration (for example selecting TCP versus UDP) impacts how the device must be pointed at the Plaspy endpoint.
- Some device features such as voice call or SMS alerts are outside the IP reporting protocol and may require separate configuration.
- Test any configuration changes in a controlled environment before wide deployment to confirm Plaspy receives the expected messages.
- Always cross check compatibility and configuration examples with the official Falcom documentation for model specific behavior.

## Why Protocol Understanding Matters

A practical understanding of the FOX-EN communication protocol helps ensure reliable setup, faster troubleshooting, and consistent data interpretation within Plaspy. Knowing which transport and reporting modes the device uses reduces misconfiguration and helps map device features to platform functionality.

- Speeds up initial device onboarding by ensuring correct server endpoint and transport settings.
- Helps diagnose connectivity issues by distinguishing TCP versus UDP problems and DNS or IP address resolution.
- Ensures alerts such as geofence violations and sensor events are delivered and interpreted correctly in Plaspy.
- Supports informed planning for firmware updates and feature rollouts that may change reporting behavior.
- Improves long term reliability by aligning device configuration with Plaspy expectations for reporting intervals and event formats.

## Why Use Plaspy with This Protocol

Using the Falcom FOX-EN with Plaspy provides a straightforward way to centralize location, status, and alert data for fleet management, security, and compliance workflows. The FOX-EN’s flexible reporting and sensor integration map well to Plaspy features like geofence monitoring, history logging, and event alerts, enabling operational visibility across vehicles and assets.

If you want to learn more about how Plaspy supports devices like the FOX-EN and to see platform capabilities in context, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance please verify information on the official Falcom site https://www.falcom.de.
