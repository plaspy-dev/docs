---
slug: /teltonika/fmm130/protocol
id: fmm130-protocol
sidebar_label: Protocol
title: Teltonika - FMM130 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Teltonika FMM130 with Plaspy including connection settings and compatibility notes
keywords:
  - Teltonika FMM130 protocol
  - Teltonika FMM130 GPS
  - FMM130 Plaspy compatibility
  - GPS tracker communication
  - vehicle tracking Teltonika
  - NB IoT FMM130
  - LTE Cat M1 tracker
  - FMM130 fleet management
  - BLE sensor tracking
  - CAN bus telemetry
---

# Teltonika - FMM130 Protocol

This page provides a public, non sensitive overview of the communication protocol context for using the Teltonika FMM130 with Plaspy. It explains how the device reports telemetry and position data to Plaspy, the role of the tracker reporting protocol, and practical connection considerations for successful integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to its endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general protocol context rather than firmware level details.

## Protocol Overview

The tracker reporting protocol defines how the FMM130 conveys GNSS fixes, telemetry from CAN bus, BLE sensor readings, and digital input states so Plaspy can ingest and present those values. The protocol enables the device to identify itself, maintain a session with the server, and deliver usable telemetry for real time monitoring and historical reporting.

- Enables transmission of GNSS position updates and timestamps for location tracking
- Carries CAN derived parameters such as odometer and engine metrics to Plaspy
- Transports BLE sensor telemetry for environmental and cargo monitoring
- Conveys digital and analog input states for events and remote actions
- Provides the identification information required for Plaspy to associate data with an account

## How Plaspy Detects the Protocol

Plaspy is designed to accept reporting from many tracker models using a single shared endpoint and port and to automatically determine the protocol presented by an incoming device. In most cases, when a device is pointed at the Plaspy endpoint and correctly configured on the device side, no manual protocol selection inside Plaspy is required.

- Plaspy uses a single server endpoint and port for incoming tracker connections
- Devices configured to report to d.plaspy.com or to 54.85.159.138 can be accepted by the platform
- All devices in Plaspy use the same port and the platform handles protocol identification
- The user typically only needs to set the device reporting host and transport on the device
- Automatic detection simplifies onboarding multiple device models without per device protocol settings

## Transport and Connection Context

Connection context covers how the device reaches the Plaspy server and which transport options are commonly used. The FMM130 supports cellular transports and can be configured to use either UDP or TCP depending on device settings and network conditions.

- Devices may be configured to report using UDP or TCP on port 8888
- Plaspy accepts connections to its domain d.plaspy.com as well as direct connections to 54.85.159.138
- The platform uses port 8888 for all supported devices to simplify firewall and network configuration
- Transport choice can affect delivery behavior under different network conditions but is a device configuration setting
- Verify device APN and network permissions to ensure the tracker can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions may change packet timing, available telemetry fields, or optional features exposed by the device
- Hardware variants or regional product SKUs can alter supported cellular bands or sensor options that affect reporting
- Manufacturer configuration tools or FOTA updates can enable or disable protocol features relevant to integration
- TCP versus UDP transport selection is a device level configuration and may influence retransmission and session handling
- Always validate the device is pointed at d.plaspy.com or 54.85.159.138 and using port 8888 for Plaspy compatibility
- Confirm that BLE, CAN, and input/output features used in your deployment are enabled and supported by the current firmware

## Why Protocol Understanding Matters

Knowing how the FMM130 communicates helps with correct device setup, faster troubleshooting, and predictable behavior in production deployments. Understanding the protocol context reduces guesswork when devices fail to report or when telemetry fields are absent in Plaspy.

- Helps ensure the device is configured to send required telemetry to the Plaspy endpoint
- Aids in diagnosing connectivity issues related to transport, APN, or server addressing
- Enables planning for firmware updates and feature changes that might affect reporting
- Supports validation that BLE and CAN sensor data are being forwarded correctly to Plaspy
- Improves readiness for network changes by confirming devices use the standard Plaspy port and endpoint

## Why Use Plaspy with This Protocol

Using the Teltonika FMM130 with Plaspy provides a practical way to collect vehicle location, CAN bus telemetry, fuel monitoring signals, and BLE sensor readings into a single fleet management platform. For organizations needing real time visibility, the combination delivers a reliable telemetry path from device to dashboard, enabling alerts, geofencing, and historical reporting.

If you are evaluating integration or rolling out the FMM130 at scale, start by configuring the device to report to d.plaspy.com or to 54.85.159.138 on port 8888 and confirm transport choice matches your network needs. Learn more about how Plaspy can work with your fleet on the main Plaspy website at https://www.plaspy.com and verify the latest device specific protocol behavior and firmware details with the manufacturer at https://www.teltonika-gps.com/ for the most current information.
