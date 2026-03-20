---
slug: /noran/nr016/protocol
id: nr016-protocol
sidebar_label: Protocol
title: Noran - NR016 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Noran NR016 and how it communicates with Plaspy for real time tracking and fleet management
keywords:
  - Noran NR016 protocol
  - Noran NR016 GPS
  - NR016 Plaspy compatibility
  - Noran tracking protocol
  - NR016 communication protocol
  - Noran GPS tracker Plaspy
  - vehicle tracking NR016
  - NR016 telemetry and alarms
  - Noran fleet tracking
  - NR016 anti theft tracking
---

# Noran - NR016 Protocol

This page provides a public protocol context for using the Noran NR016 tracker with the Plaspy fleet platform. It describes how the device communicates to Plaspy in broad, non sensitive terms and highlights the connection settings and operational considerations that matter during integration and deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly pointed to the platform. Exact on device protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on the communication role and practical integration guidance rather than any device internals.

## Protocol Overview

The NR016 uses cellular and satellite positioning to report location, alarms, and sensor telemetry to a server endpoint. The device protocol defines how the tracker identifies itself, how location and event data are packaged for transmission, and how alarm events and telemetry are reported so Plaspy can display and act on them.

- Carries GPS coordinates and hybrid base station locating for consistent position updates to the server.
- Reports alarm and sensor events such as SOS, vibration, ACC, door and trunk status, and low battery notifications.
- Sends telematics and I/O state for relay control, immobilization, and external sensor inputs so Plaspy can trigger alerts and actions.
- Enables regular position and heartbeat reporting so Plaspy can maintain device presence and history.
- Supports transport over the mobile data network to reach the configured endpoint for ingestion into Plaspy dashboards.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and port and is designed to automatically determine the tracker protocol when a properly configured device reports in. In most cases users do not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP for device reporting is 54.85.159.138.
- Plaspy listens on port 8888 and all devices supported by Plaspy use the same port.
- Devices may be configured to use UDP or TCP on port 8888 depending on device support and settings.
- When the NR016 is pointed at the Plaspy endpoint and the device is reachable, Plaspy will detect the device protocol automatically for ingestion.

## Transport and Connection Context

Connection behavior is determined by the NR016 configuration and the mobile network. The tracker sends its reports over cellular GPRS/3G data to the configured server address or IP; Plaspy provides a single, shared entry point for those reports so installers can point devices to a known endpoint.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Transport may be UDP or TCP on port 8888 based on device capability and installer choice.
- All devices that report to Plaspy use port 8888 so firewall and network rules can be simplified.
- Use a stable APN and reliable cellular coverage to ensure reports reach the Plaspy endpoint.
- Test connectivity from the device to d.plaspy.com or 54.85.159.138 to validate reporting during installation.

## Protocol Compatibility Notes

- Firmware differences across NR016 units can change exactly which messages and telemetry fields are sent; confirm the firmware level when validating behavior.
- Hardware revisions or optional accessories (microphone, external vibration sensor, additional I/O) can affect which inputs and alarms are available to Plaspy.
- Some devices allow switching transport between UDP and TCP; choose the mode that matches the installed firmware and network environment.
- Manufacturer configuration via SMS or local setup tools may be required to point the device to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol when reporting to the shared port, but device-side reporting must be configured correctly for detection to succeed.
- Always validate key features like SOS, immobilizer commands, and I/O mappings after installation to ensure expected behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps installers, integrators, and fleet operators set expectations for setup, troubleshooting, and long term reliability when the NR016 is used with Plaspy. Clear knowledge of how the tracker reports and what it reports reduces downtime and improves incident response.

- Ensures correct server address and transport configuration so devices reach Plaspy reliably.
- Helps verify that alarms and telemetry (ACC, door, vibration, SOS) map to Plaspy alerts and dashboards.
- Guides troubleshooting steps when telemetry is missing or reports are intermittent.
- Informs decisions on firmware updates or hardware changes that may alter message content.
- Aids planning for firewall and network rules by knowing that Plaspy uses a single shared port.

## Why Use Plaspy with This Protocol

The NR016 is designed for vehicle security and fleet telematics, and when it reports to Plaspy its location updates, alarms, and I/O telemetry become actionable in a centralized system. Organizations managing cars, taxis, buses, or light commercial fleets benefit from combining the NR016’s vehicle focused inputs and anti theft features with Plaspy’s maps, alerting, and reporting.

If you want to learn more about Plaspy and how it integrates with devices such as the Noran NR016, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes on the manufacturer site http://www.norantracker.com/ as protocol support and firmware behavior can change over time.
