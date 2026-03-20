---
slug: /topfly/tlw2_6bl/protocol
id: tlw2_6bl-protocol
sidebar_label: Protocol
title: TopFly - TLW2-6BL Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the TopFly TLW2-6BL tracker with Plaspy using shared connection settings
keywords:
  - TopFly TLW2-6BL protocol
  - TopFly TLW2-6BL GPS protocol
  - TLW2-6BL Plaspy compatibility
  - TLW2-6BL communication protocol
  - TLW2-6BL tracking protocol
  - TopFly vehicle tracker protocol
  - Plaspy tracker integration
  - fleet GPS protocol TopFly
  - cold chain tracker protocol
  - BLE sensor telemetry TopFly
---

# TopFly - TLW2-6BL Protocol

This page covers the public protocol context for using the TopFly TLW2-6BL tracker with Plaspy. It describes how the device communicates common telemetry, GNSS position, buffered points and sensor data to the Plaspy platform using the shared connection settings Plaspy exposes. The information here focuses on public, non-sensitive aspects of device communication and is intended to help fleet managers, integrators and implementers understand how the tracker reports into Plaspy.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior can vary with firmware version, hardware revision and manufacturer implementation, so this page emphasizes general protocol context rather than firmware-specific frames or private parser details.

## Protocol Overview

The TLW2-6BL communication protocol enables the tracker to deliver location, telemetry and alarm data to Plaspy so that the platform can present real-time location, history and alerts. At a high level the protocol governs how the device identifies itself, reports GNSS fixes, uploads buffered points after coverage gaps, and sends telemetry from I/O and BLE sensors.

- Enables periodic and event-driven position reports so Plaspy can render live tracking and route playback.
- Carries vehicle telemetry such as ignition state, digital inputs, analog telemetry and accelerometer events for driving behavior and alarms.
- Uploads buffered location points after a connectivity outage to preserve continuous history and compliance records.
- Conveys BLE sensor telemetry from paired devices for use cases like temperature or door status monitoring in cold-chain workflows.
- Supports remote control and output commands for immobilizer, relays or sirens when the implementation and configuration allow.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at its public endpoint and automatically detects which tracker protocol is being used, so in most cases users do not need to select a protocol manually inside Plaspy. Proper device configuration to report to Plaspy is the primary step required for automatic detection and ingestion.

- Devices should be configured to report to the Plaspy server domain or IP address so traffic reaches the Plaspy endpoint.
- Plaspy accepts device reports on a single shared port for all supported devices and automatically determines the protocol used by the incoming connection.
- When a TLW2-6BL is pointed at the Plaspy endpoint and uses an allowed transport, Plaspy will ingest its telemetry without a manual protocol selection step.
- If a device is not appearing in Plaspy, verify the device is configured to report to the correct Plaspy endpoint and that the selected transport is supported.
- Automatic detection simplifies onboarding for integrators and fleet operators by reducing per-device configuration inside the platform.

## Transport and Connection Context

The TLW2-6BL may be configured to use UDP or TCP depending on device support and deployment needs, and must target Plaspy’s network endpoint for telemetry delivery. Plaspy exposes a single shared endpoint for device connections to streamline device onboarding and protocol detection.

- Plaspy server domain: d.plaspy.com.
- Plaspy server IP: 54.85.159.138.
- Plaspy listens on port 8888 and all devices in Plaspy use the same port for reporting.
- The TLW2-6BL can be configured to use UDP or TCP on port 8888 depending on the device configuration and firmware capabilities.
- Choose UDP for lower overhead and typical position reporting patterns or TCP where reliable delivery and session behavior are preferred, following the device capabilities and network conditions.
- Ensure the device’s APN and cellular settings allow outbound connections to the Plaspy endpoint to avoid blocking or NAT issues.

## Protocol Compatibility Notes

- Firmware variations can change message timing, available telemetry fields and buffering behavior; always note the device firmware level when validating compatibility.
- Hardware revisions or regional model variants may alter supported bands, BLE capabilities or I/O behavior that affect what data is reported to Plaspy.
- The transport mode (UDP vs TCP) is configurable and must match the device configuration; verify which transport your devices are set to use.
- Manufacturer-side configuration commands and default reporting endpoints can differ by batch or integrator programming; confirm device settings before deployment.
- Buffered upload behavior and maximum offline storage depend on the device firmware and should be validated for your reporting frequency and retention needs.
- When in doubt, perform a limited field test to confirm reporting cadence, alarm delivery and BLE sensor integration with your Plaspy tenant.

## Why Protocol Understanding Matters

Knowing how the TLW2-6BL communicates with Plaspy helps ensure reliable onboarding, accurate location reporting and predictable alarm behavior across a fleet. A clear protocol understanding reduces integration time and assists with troubleshooting connectivity, buffering and telemetry issues.

- Speeds up initial setup by ensuring devices are pointed to the correct Plaspy endpoint and transport.
- Helps diagnose missing or delayed reports by checking transport, APN and firmware behavior against expected protocol flows.
- Supports planning for buffer capacity and reporting frequency to meet compliance or route reconstruction requirements.
- Enables confident use of BLE sensor telemetry and I/O-based telemetry such as fuel or ignition where these inputs matter for operations.
- Reduces false alarms and improves response by understanding how the device signals alarms and state transitions.

## Why Use Plaspy with This Protocol

Using the TLW2-6BL with Plaspy gives fleet operators a practical way to combine high-precision GNSS, resilient cellular connectivity and vehicle-grade I/O into a single operational workflow. Plaspy’s platform ingests the device’s position, buffered history and telemetry so teams can monitor vehicles in real time, reconstruct routes after outages and act on alarms such as power loss, ignition changes or tamper events.

Plaspy’s shared connection model and automatic protocol detection simplify fleet-wide deployments by reducing per-device configuration inside the platform. To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and hardware revisions for the TLW2-6BL consult the manufacturer documentation at https://www.topflytech.com/ since protocol support and firmware behavior can change over time.
