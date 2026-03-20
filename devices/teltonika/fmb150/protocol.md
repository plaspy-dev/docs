---
slug: /teltonika/fmb150/protocol
id: fmb150-protocol
sidebar_label: Protocol
title: Teltonika - FMB150 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for using the Teltonika FMB150 with Plaspy for fleet tracking and CAN data integration
keywords:
 - Teltonika FMB150 protocol
 - FMB150 Plaspy compatibility
 - Teltonika FMB150 GPS protocol
 - FMB150 communication protocol
 - FMB150 tracking protocol
 - Teltonika vehicle tracking
 - GPS tracker protocol Plaspy
 - CAN data tracking FMB150
 - Teltonika FMB150 configuration
 - fleet tracking FMB150
---

# Teltonika - FMB150 Protocol

This page provides public protocol context for using the Teltonika FMB150 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what to expect during setup, and practical considerations for sending CAN, GNSS, and sensor data to the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page concentrates on safe, non sensitive details that help with integration and troubleshooting.

## Protocol Overview

The tracker reporting protocol is the set of transport and message conventions that let the FMB150 send location, CAN bus, and sensor readings to Plaspy. Protocols define how the device identifies itself, how telemetry is packaged for transmission, and how the server acknowledges or records received messages.

- Enables transmission of GNSS position, CAN bus diagnostics, and telemetry from the FMB150 to the tracking server.
- Carries device identity and session information so Plaspy can associate data with the correct asset.
- Lets Plaspy interpret incoming telemetry for mapping, alerts, and analytics without manual per device configuration.
- Supports additional sensor data such as BLE beacon readings, accelerometer events, and analog inputs when the device is configured to report them.
- Allows for remote configuration and firmware updates via manufacturer supported channels while standard reporting remains compatible with Plaspy.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and automatically identifies the incoming tracker protocol when a device connects and starts reporting. In most cases you do not need to select a protocol inside Plaspy if the tracker is correctly pointed at the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com which devices can be configured to report to.
- Plaspy server IP is 54.85.159.138 for cases where numeric addressing is required.
- The port is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol so manual protocol selection is typically not needed if the device is sending to the correct endpoint.

## Transport and Connection Context

Transport and connection settings determine how the FMB150 reaches Plaspy over the mobile network. The tracker supports common transport modes and can be pointed to either the Plaspy domain or its numeric server address depending on network or configuration needs.

- Devices may be configured to use either UDP or TCP on port 8888 based on device settings and network behavior.
- Devices can point to d.plaspy.com or to the numeric IP 54.85.159.138 when DNS resolution is not available.
- Plaspy maintains a single listening port for all supported devices, reducing configuration complexity.
- Network conditions, APN configuration, and operator behavior can influence whether TCP or UDP is preferable for reliable delivery.
- Use the device configuration tool or SMS/GPRS commands supported by Teltonika to set the reporting endpoint to Plaspy.

## Protocol Compatibility Notes

- Firmware versions can change message behavior and available fields; always check the device firmware release notes for changes that affect reporting.
- Hardware revisions may add or remove interfaces such as certain CAN buses or sensor inputs that affect the telemetry a device can send.
- Manufacturer side settings and optional features like BLE sensor reporting or CAN frame decoding may vary by region and model variant.
- Transport selection between UDP and TCP can affect delivery guarantees and battery consumption for the device.
- Confirm device configuration (server address, port, APN) is set to the Plaspy endpoint to ensure automatic protocol detection.
- Validate any advanced features such as EV CAN decoding or custom data fields against Teltonika documentation before relying on them in production.

## Why Protocol Understanding Matters

Knowing the communication protocol behavior helps ensure successful setup, robust data collection, and faster troubleshooting when something goes wrong. Even when Plaspy auto detects the protocol, understanding the general protocol role helps teams manage devices and expectations.

- Speeds initial setup by confirming correct server address and transport mode.
- Helps diagnose connectivity issues related to APN, TCP versus UDP, or DNS resolution.
- Guides expectations for what telemetry fields the server will receive from CAN, GNSS, and sensors.
- Supports planning for firmware upgrades when message formats or capabilities change.
- Improves incident response by clarifying whether a data gap is transport or device related.

## Why Use Plaspy with This Protocol

The Teltonika FMB150 provides rich vehicle and CAN data combined with BLE sensor support, which makes it well suited for fleet operations that need both tracking and diagnostics. Using the FMB150 with Plaspy gives organizations a single collection point for location, CAN-derived metrics, and sensor inputs so they can monitor vehicle health and behavior alongside position.

Plaspy’s shared endpoint approach simplifies onboarding and reduces per device configuration overhead. If your fleet uses FMB150 devices, pointing them to d.plaspy.com or 54.85.159.138 on port 8888 and allowing Plaspy to auto detect the protocol is usually sufficient to begin receiving telemetry. To learn more about Plaspy and how it handles device data, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance always verify with the manufacturer at https://www.teltonika-gps.com/
