---
slug: /ulbotech/s101/protocol
id: s101-protocol
sidebar_label: Protocol
title: Ulbotech - S101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Ulbotech S101 OBD II BLE adapter with Plaspy for telemetry forwarding and integration
keywords:
  - Ulbotech S101 protocol
  - Ulbotech S101 GPS protocol
  - S101 OBD II protocol
  - S101 Plaspy compatibility
  - Ulbotech S101 communication protocol
  - Ulbotech S101 tracking protocol
  - S101 OBD BLE Plaspy
  - OBD II telemetry Plaspy
  - vehicle telemetry S101
  - ELM327 S101 Plaspy
---

# Ulbotech - S101 Protocol

This page summarizes the public protocol and connection context for using the Ulbotech S101 OBD II BLE adapter with Plaspy. It focuses on how the S101 supplies OBD-II telemetry through a Bluetooth Low Energy gateway (for example a smartphone, tablet, or PC running a Plaspy-compatible app) and how that telemetry is forwarded into Plaspy for unified vehicle tracking and diagnostics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data is reported to the Plaspy endpoint. Exact behavior and available fields can vary by S101 firmware, hardware revision, mobile gateway app, and manufacturer implementation, so this page stays at a protocol overview level and emphasizes public, non sensitive details relevant to integration and troubleshooting.

## Protocol Overview

The S101 is an ELM327-based OBD-II BLE adapter that provides standardized OBD telemetry over Bluetooth Low Energy to a gateway device. That gateway runs a Plaspy-compatible app which forwards telemetry and diagnostic data into Plaspy so the platform can combine engine parameters with GPS position and fleet events.

- The adapter exposes standard OBD-II PIDs (engine RPM, coolant temperature, fuel trims, MAF, throttle position, fault codes) to a BLE gateway that aggregates and forwards data.
- BLE is used as the local transport between the S101 and a mobile or desktop gateway device; the gateway translates or packages telemetry for Plaspy ingestion.
- Plaspy receives telemetry at its public endpoint and associates OBD data with vehicle location and identity inside the platform.
- The protocol role is to reliably move vehicle diagnostics from the vehicle bus to Plaspy through the gateway without requiring cellular connectivity in the adapter itself.
- Differences in firmware and apps can affect sampling rate, available PIDs, and how diagnostic codes are presented when forwarded to Plaspy.

## How Plaspy Detects the Protocol

When telemetry and position are submitted to Plaspy, the platform uses the shared endpoint and port common to all supported devices. Plaspy is built to automatically detect incoming tracker and telemetry protocols so most users do not need to manually select a protocol inside Plaspy if the device or gateway is configured to report to the Plaspy endpoint.

- Plaspy receives telemetry at the public server address d.plaspy.com and at IP 54.85.159.138 on port 8888.
- Devices or gateway apps may be configured to send data over TCP or UDP to port 8888 depending on device capabilities and settings.
- All devices that send to Plaspy use the same port, which simplifies gateway configuration and onboarding.
- Because Plaspy automatically detects the tracker protocol, users typically only need to ensure the gateway reports to the correct host and port.
- If telemetry is not appearing, check gateway app settings for server host, transport selection (TCP or UDP), and any required authentication fields provided by the app.

## Transport and Connection Context

The S101 itself communicates locally over Bluetooth Low Energy. Network transport to Plaspy is handled by the gateway device and follows Plaspy’s shared connection settings. In practice this means the gateway forwards OBD telemetry to the Plaspy endpoint using a common port and selectable transport.

- Local transport: S101 uses Bluetooth 4.0 BLE to connect to a smartphone, tablet, or PC acting as the gateway.
- Plaspy endpoint: telemetry forwarded to d.plaspy.com (IP 54.85.159.138) on port 8888.
- Transport selection: gateway apps can typically send telemetry using either UDP or TCP on port 8888 depending on app and network environment.
- Single port usage: Plaspy uses the same port for all supported devices to simplify configuration and centralize traffic handling.
- Network considerations: ensure the gateway device has network connectivity and that firewall or NAT rules allow outbound TCP or UDP to port 8888 toward the Plaspy endpoint.

## Protocol Compatibility Notes

- The S101 is a BLE OBD-II adapter and is not a standalone cellular tracker; it relies on a Plaspy-compatible gateway to forward telemetry and location.
- Firmware and app differences can change which OBD PIDs are available, sampling frequency, and diagnostic code handling.
- Some vehicle models expose additional or fewer PIDs based on their OBD II implementation; availability may vary by vehicle and interface protocol.
- Transport (TCP vs UDP) is determined by the gateway configuration; choose the transport that matches the gateway app and network reliability needs.
- Validate compatibility and supported features against the manufacturer documentation and the Plaspy gateway app documentation for the best results.
- If you operate large fleets, pilot a small group of vehicles to confirm behavior across vehicle models and gateway devices before wide deployment.

## Why Protocol Understanding Matters

Understanding how the S101’s telemetry is collected, forwarded, and interpreted by Plaspy helps ensure successful setup, reliable reporting, and accurate diagnostics in production environments. Clear knowledge of the communication path reduces troubleshooting time and improves long term reliability.

- Ensures gateway devices are correctly configured to report to d.plaspy.com or 54.85.159.138 on port 8888 using the chosen transport.
- Helps diagnose missing telemetry by checking BLE pairing, gateway app logs, and outbound network connectivity to Plaspy.
- Clarifies expected telemetry cadence and which PIDs should be visible in Plaspy reports for each vehicle.
- Supports planning for fleet scale by understanding how BLE gateway coverage, phone battery, and app behavior impact telemetry continuity.
- Aids in coordinating firmware updates, gateway app versions, and vehicle compatibility checks to preserve data quality.

## Why Use Plaspy with This Protocol

Using the Ulbotech S101 with Plaspy lets fleet operators and individual users enrich GPS tracking with detailed OBD-II telemetry without adding cellular hardware to the vehicle. The S101’s low power draw and broad OBD-II support provide a practical, compact way to gather engine parameters and diagnostic codes that Plaspy can combine with location data for more actionable fleet insights.

If you want to learn more about how Plaspy integrates telemetry and tracking, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest S101 specifics and firmware behavior on the manufacturer website http://www.ulbotech.com/.
