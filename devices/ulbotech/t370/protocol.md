---
slug: /ulbotech/t370/protocol
id: t370-protocol
sidebar_label: Protocol
title: Ulbotech - T370 Protocol
sidebar_class_name: menu_item_tracker
description: Protocol overview for Ulbotech T370 and how it communicates with Plaspy using shared connection settings
keywords:
  - Ulbotech T370 protocol
  - Ulbotech T370 GPS protocol
  - Ulbotech T370 Plaspy
  - T370 tracking protocol
  - OBD GPS tracker protocol
  - vehicle tracker protocol
  - GPS tracker Plaspy compatibility
  - u‑blox MAX‑7 tracking
  - Telit xE910 connectivity
  - fleet management GPS protocol
---

# Ulbotech - T370 Protocol

This page outlines the public protocol context for using the Ulbotech T370 OBD GPS tracker with Plaspy. It focuses on the communication and connection aspects that matter for integration, explaining how the device reports location, telemetry, and OBD-sourced data to a Plaspy endpoint without exposing private or implementation specific details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, or manufacturer implementation, so this page describes the general communication context and practical considerations for successful setup with Plaspy.

## Protocol Overview

The T370 uses a standard reporting style over cellular networks to send GNSS fixes, movement events, OBD parameters and device status to a remote server. Its protocol role is to reliably identify the device, transmit timely location and telemetry, and allow Plaspy to consume those messages for dashboards, alerts and reports.

- Provides periodic and event driven location and telemetry reports that Plaspy consumes for tracking and analytics.
- Includes device identification and status fields so Plaspy can match incoming messages to the correct vehicle and device record.
- Transmits OBD-sourced parameters where available to enrich vehicle state, fuel or diagnostic workflows in Plaspy.
- Supports accelerometer and movement event reporting for driver behavior and crash detection use cases.
- Enables remote management signals such as status updates and outputs that can be used in Plaspy workflows.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming device reports and uses established detection routines to identify the tracker protocol automatically. When the T370 is configured to report to Plaspy, the platform typically recognizes the device without requiring manual protocol selection in the Plaspy interface.

- Plaspy server domain for device reporting is d.plaspy.com and the known server IP is 54.85.159.138.
- The common reporting port used by all devices in Plaspy is 8888 and Plaspy uses the same port for supported trackers.
- Plaspy automatically detects the tracker protocol when messages arrive on the shared endpoint and port.
- Users normally do not need to select a protocol manually inside Plaspy if the device is pointed to the Plaspy endpoint and properly configured.
- Correct device identification on first reports speeds up automatic parsing and assignment in Plaspy.

## Transport and Connection Context

The T370 supports commonly used cellular transport options and can be configured to report to Plaspy using either UDP or TCP on the shared Plaspy port. Connection choices are often controlled by device configuration, firmware capabilities and the mobile network environment.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and network conditions.
- The T370 can point at the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138 for reporting.
- All devices in Plaspy use the same port, so the port number need not vary between different tracker models.
- Transport selection may affect delivery semantics but does not change Plaspy automatic protocol detection.
- Ensure APN and SIM settings are correctly provisioned so the device can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware variations across T370 units can change message cadence, available fields, or optional telemetry elements.
- Hardware revisions or different Telit xE910 modem variants may influence supported network bands and transport behavior.
- Manufacturer side configuration or build options may enable or disable specific OBD parameters or event reporting.
- Choosing UDP versus TCP can affect message reliability and should match the device configuration documented by Ulbotech.
- Validate compatibility and feature availability against the device firmware release notes when planning deployments.
- When in doubt, confirm expected reporting behavior by checking first reports from a test device pointed at d.plaspy.com on port 8888.

## Why Protocol Understanding Matters

Understanding how the T370 communicates with Plaspy helps ensure a smooth deployment, reliable data flow and faster troubleshooting when issues arise. Awareness of the communication context reduces integration friction and supports long term operational reliability.

- Helps confirm the device is sending the expected GNSS, accelerometer and OBD fields to Plaspy.
- Makes it easier to verify correct server, IP and port configuration on the device side.
- Speeds up troubleshooting when reports are missing or telemetry appears incomplete.
- Allows operators to plan firmware upgrades, transport selection and APN settings with fewer surprises.
- Supports clear expectations for what Plaspy will receive and how that data can be used in dashboards and rules.

## Why Use Plaspy with This Protocol

Using the Ulbotech T370 with Plaspy provides a straightforward way to collect vehicle location, OBD telemetry and movement events for fleet monitoring, theft protection and driver behavior analysis. The T370’s OBD plug and built in sensors make it convenient for rapid deployments, while Plaspy consumes the device data for real time visibility, geofence alerts, scoring and remote workflows.

To learn more about Plaspy and how the platform works with devices like the T370, visit https://www.plaspy.com. Please note that protocol support, firmware behavior and device implementation details can change over time; verify the latest device specific protocol information and firmware notes on the manufacturer site http://www.ulbotech.com/ before large scale deployments.
