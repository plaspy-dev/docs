---
slug: /ulbotech/t301/protocol
id: t301-protocol
sidebar_label: Protocol
title: Ulbotech - T301 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Ulbotech T301 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - Ulbotech T301 protocol
  - Ulbotech T301 GPS protocol
  - T301 Plaspy compatibility
  - Ulbotech T301 tracking protocol
  - T301 communication protocol
  - Ulbotech GPS tracker T301
  - T301 fleet tracking Plaspy
  - Ulbotech vehicle tracker protocol
  - T301 telemetry protocol
  - Plaspy supported trackers
---

# Ulbotech - T301 Protocol

This page describes the public protocol context for using the Ulbotech T301 tracker with Plaspy. It focuses on how the device reports position and telemetry to the Plaspy endpoint and what role the device communication protocol plays in practical deployment. The T301 is an economical, entry level GPS tracker built around a u blox GNSS module and a quad band GSM modem, offering ACC ignition detection, SOS alert, a 3 axis accelerometer, an internal immobilizer and an analog AD input for fuel or temperature telemetry — all features commonly used when integrating with Plaspy for live monitoring and reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. For the T301 this means the tracker can be configured to report to d.plaspy.com or to the Plaspy server IP 54.85.159.138 on port 8888, and it may use either UDP or TCP on that port depending on device configuration. Exact protocol behavior observed on a specific T301 unit can vary with firmware version, hardware revision, and manufacturer implementation, so verify device specific details before wide scale deployment.

## Protocol Overview

The T301 communication protocol governs how position fixes, status changes, sensor readings, and events are packaged and sent over the mobile network to Plaspy. At a high level the protocol enables the device to identify itself, transmit usable telemetry, and support remote commands or configuration updates when supported by the firmware and modem.

- Transmits GNSS fixes and timestamped telemetry so Plaspy can display real time location and history.
- Carries discrete event flags such as ACC ignition, SOS button press, and immobilizer state for immediate alerting.
- Sends analog AD input values for fuel or temperature monitoring that Plaspy can convert into reports.
- Includes motion and harsh event data from the 3 axis accelerometer to support driver behavior insights.
- Allows for configuration and remote commands when the tracker firmware exposes command channels over GPRS.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and port and uses automated detection to interpret the tracker protocol when a properly configured device connects. In most deployments users do not need to manually select a protocol inside Plaspy if the tracker is reporting to the Plaspy endpoint.

- Devices should be pointed to the Plaspy endpoint d.plaspy.com or the IP 54.85.159.138 for reliable delivery.
- Plaspy listens on port 8888 for all supported trackers and automatically detects the protocol in use.
- The platform supports both incoming TCP and UDP reports on the shared port so device transport choice is flexible.
- Once the tracker is identified, Plaspy maps incoming telemetry to the platform event model for dashboards and alerts.
- Proper device configuration and mobile network connectivity are the most common factors in successful detection.

## Transport and Connection Context

T301 units use cellular data to reach Plaspy and can be set up to use either UDP or TCP for their uplink depending on the tracker configuration and network conditions. Plaspy operates a single common port for all tracker connections which simplifies device setup and reduces port configuration errors.

- The device may be configured to send data via UDP or TCP on port 8888 according to the unit configuration.
- Trackers can be pointed to the DNS name d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy uses port 8888 for all supported devices so the same outbound destination port is used across models.
- Cellular reliability, APN settings, and correct destination configuration on the T301 are essential for stable connectivity.
- Firewalls or network filters should allow outbound TCP or UDP to the listed Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware versions can change message content and available features; confirm the firmware level when validating behavior.
- Hardware revisions or regional variants may alter supported I O pins, sensor inputs, or command channels.
- Transport selection between UDP and TCP affects delivery characteristics but not the shared destination port used by Plaspy.
- Manufacturer side configuration commands and default reporting settings may vary by unit or reseller pre configuration.
- Verify that the tracker is configured to report to d.plaspy.com or the Plaspy server IP on port 8888 for automatic detection.
- Cross check any custom integrations or third party gateways to ensure they preserve the required destination and transport.

## Why Protocol Understanding Matters

Understanding how the T301 communicates with Plaspy helps ensure a reliable deployment, faster troubleshooting, and clearer expectations for available telemetry. Knowledge of the communication context reduces setup time and helps teams interpret live data and event behavior.

- Ensures correct destination and transport settings so devices reliably reach Plaspy.
- Helps troubleshoot connectivity issues by narrowing whether the problem is network, configuration, or firmware related.
- Clarifies which telemetry fields and events will appear in Plaspy based on device features and firmware.
- Aids planning for remote commands, immobilizer control, and firmware updates that may rely on the protocol.
- Supports operational decisions around sampling intervals, data usage, and battery backup behavior.

## Why Use Plaspy with This Protocol

Using the Ulbotech T301 with Plaspy provides a focused solution for organizations that need dependable real time location, essential telemetry, and practical anti theft controls without unnecessary complexity. Plaspy ingests the T301 telemetry so fleets can monitor vehicle position, receive ACC and SOS events, track fuel or analog inputs, and act on immobilizer commands when available.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and implementation details can change over time so verify the latest device specific documentation and firmware notes on the manufacturer site http://www.ulbotech.com/ before large scale rollouts.
