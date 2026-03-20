---
slug: /teltonika/fmb930/protocol
id: fmb930-protocol
sidebar_label: Protocol
title: Teltonika - FMB930 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMB930 connectivity with Plaspy
keywords:
  - Teltonika FMB930 protocol
  - Teltonika FMB930 GPS protocol
  - FMB930 tracking protocol
  - Teltonika tracker protocol
  - FMB930 Plaspy compatibility
  - GPS tracker communication
  - BLE telemetry tracker
  - electric vehicle tracker
  - low power GPS tracker
  - vehicle fleet tracking
---

# Teltonika - FMB930 Protocol

This page describes the public protocol context for using the Teltonika FMB930 tracker with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive, high level terms so fleet managers and integrators can understand the connection and reporting behavior needed for successful deployment.

The FMB930 is a compact, low power tracker designed for electric two‑wheelers and light electric vehicles and supports GNSS location, 2G GSM reporting, and Bluetooth Low Energy telemetry for sensors. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker reporting protocol is the mechanism by which the FMB930 delivers GNSS, BLE telemetry, and device status to a telematics platform like Plaspy. In public terms this protocol covers identification, positioning updates, sensor telemetry forwarding, and basic device state reporting so Plaspy can present usable data to fleet workflows.

- Enables the device to identify itself and transmit GNSS position and time to Plaspy for real time mapping and historical playback.
- Carries BLE telemetry values received from paired sensors such as temperature, humidity, magnet, and motion so Plaspy can surface sensor readings.
- Reports device power state and low battery notifications relevant to long term idle intervals and ultra low power modes.
- Supports remote device management signals that allow firmware and configuration updates through compatible management services.
- Provides the basic metadata Plaspy needs to associate incoming messages with a specific device record for fleet management.

## How Plaspy Detects the Protocol

Plaspy receives device data on a single shared endpoint and automatically recognizes the reporting format used by each tracker. For most deployments the integrator needs only to point the device at the Plaspy endpoint; Plaspy will handle protocol identification and routing to the appropriate processing pipeline.

- Plaspy server domain is d.plaspy.com which devices may use as their reporting host.
- Plaspy server IP is 54.85.159.138 and devices can alternatively be configured to report directly to this address.
- The port is 8888 and all device connections to Plaspy use the same port for consistency across supported models.
- The device may be configured using UDP or TCP on port 8888 depending on device capability and chosen transport.
- Because Plaspy automatically detects the tracker protocol, users generally do not need to manually select a protocol inside Plaspy if the device is correctly pointed at the Plaspy endpoint.

## Transport and Connection Context

Understanding the transport and addressing context helps ensure devices reach Plaspy reliably. The FMB930 is typically configured to send its reporting traffic over the cellular network to the Plaspy endpoint where transport and IP resolution determine delivery characteristics.

- Devices may use either UDP or TCP on port 8888 based on device configuration and network considerations.
- Device DNS configuration can point the tracker at d.plaspy.com or at the numeric host 54.85.159.138.
- Using a domain name allows carrier networks to resolve to the current Plaspy infrastructure while direct IP use can be useful for constrained networks.
- All devices managed by Plaspy connect using the same TCP or UDP port 8888 to simplify firewall and NAT configuration.
- Ensure cellular APN and outbound port rules on your SIM provider are compatible with outbound TCP or UDP traffic to Plaspy.

## Protocol Compatibility Notes

- Protocol behavior can differ across firmware versions; always verify the device firmware level when validating features like BLE telemetry forwarding or advanced sleep modes.
- Hardware revisions or regional variants of the FMB930 may expose different I/O or power management behaviors that affect reporting frequency and telemetry.
- Transport selection (UDP versus TCP) may affect delivery guarantees; choose the transport that matches your reliability and power consumption trade offs.
- BLE sensor support depends on the tracker firmware and local BLE device compatibility; not all sensor models or profiles are guaranteed.
- Manufacturer remote management tools such as FOTA WEB can alter configuration or firmware remotely; confirm management workflows before large scale rollouts.
- Validate compatibility and behavior against the manufacturer documentation and release notes for the exact product code and firmware you are deploying.

## Why Protocol Understanding Matters

A clear understanding of the tracker communication protocol helps with initial setup, troubleshooting, and long term operational reliability when integrating FMB930 devices with Plaspy. Knowing what the device sends, how it connects, and what can vary by firmware reduces time to resolution for common issues.

- Simplifies device provisioning by ensuring the tracker is pointed at d.plaspy.com or 54.85.159.138 and using port 8888.
- Helps diagnose connectivity problems by distinguishing transport layer issues from protocol parsing or telemetry concerns.
- Guides configuration choices for reporting intervals and power management to match fleet operational needs.
- Enables planned use of BLE telemetry and remote management features that depend on firmware capabilities.
- Reduces unexpected behavior in the field by accounting for firmware and hardware revision differences before mass deployment.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB930 with Plaspy provides a compact, power efficient tracking solution for electric two‑wheelers and light EVs while allowing fleet managers to receive GNSS and BLE telemetry in a unified platform. Plaspy's automatic protocol detection and single port approach simplify integrations so you can focus on fleet operations rather than device-level parsing.

To learn more about how Plaspy handles device connections and fleet workflows visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer documentation please verify the current information at https://www.teltonika-gps.com/ as protocol support and firmware behavior can change over time.
