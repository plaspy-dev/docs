---
slug: /dct/syrus_obdii_cat1/protocol
id: syrus_obdii_cat1-protocol
sidebar_label: Protocol
title: DCT - SYRUS OBDII-CAT1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the DCT SYRUS OBDII CAT1 with Plaspy including connection context and compatibility notes
keywords:
  - DCT SYRUS OBDII CAT1 protocol
  - SYRUS OBDII CAT1 GPS protocol
  - SYRUS OBDII CAT1 Plaspy
  - SYRUS OBDII CAT1 communication protocol
  - SYRUS OBDII CAT1 tracking protocol
  - Plaspy device integration
  - OBDII telematics protocol
  - vehicle diagnostics telemetry
  - OBDII plug and play tracker
  - fleet tracking protocol
---

# DCT - SYRUS OBDII-CAT1 Protocol

This page explains the public protocol context for using the DCT SYRUS OBDII-CAT1 tracker with Plaspy. It focuses on how the device reports GPS location, OBDII telemetry, and accelerometer events to Plaspy in general, non sensitive terms suitable for fleet operators and integrators. The information here is intended to help you understand how the tracker communicates with a cloud platform and what to check during deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact runtime behavior and available telemetry can vary by firmware version, hardware revision, and manufacturer configuration, so treat this guide as protocol context rather than a firmware level reference.

## Protocol Overview

The SYRUS OBDII-CAT1 tracker uses its reporting protocol to provide GNSS fixes, OBDII parameters, and motion events over cellular networks so a cloud platform like Plaspy can ingest and present that data. The protocol defines how the tracker identifies itself, when it reports updates, and which device telemetry is delivered to the platform.

- Enables periodic and event driven reporting of GPS location and vehicle telemetry to a remote server.
- Carries standard OBDII PID values and vehicle diagnostics that Plaspy can use for health and fuel monitoring.
- Transmits accelerometer derived driving events for harsh braking and impact awareness to support driver behavior analysis.
- Allows the tracker to identify itself to the cloud platform so Plaspy can associate incoming messages with the correct vehicle record.
- Supports remote device provisioning and configurable reporting intervals through the device firmware and manufacturer tooling.

## How Plaspy Detects the Protocol

Plaspy receives telemetry from many tracker models and automatically detects the tracker protocol when devices are configured to report to the Plaspy endpoint. In most deployments you do not need to manually select a protocol inside Plaspy if the device is pointed correctly and uses supported transport settings.

- Plaspy exposes a single, shared endpoint for device reporting to simplify deployments.
- The platform listens on port 8888 for incoming device connections and telemetry.
- Plaspy automatically determines the incoming tracker protocol and routes data into the appropriate ingestion pipeline.
- In typical setups the device is the only component that needs explicit configuration to point to the Plaspy endpoint.
- If a device sends valid, recognizable telemetry and identification, Plaspy will associate it to the correct device record without manual protocol selection.

## Transport and Connection Context

Connection context explains how the tracker reaches the Plaspy server and what transport options are commonly used. The SYRUS OBDII-CAT1 can operate over cellular networks and supports reporting via standard transport layers depending on device configuration and network availability.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and provisioning settings.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or directly to the IP address 54.85.159.138 as required by network or DNS policies.
- Port 8888 is the common port used by all devices supported by Plaspy which simplifies firewall and carrier configuration.
- Choose UDP for lighter weight reporting when supported or TCP for more reliable session based delivery depending on the tracker firmware options.
- Ensure outbound cellular data and firewall rules allow traffic to the Plaspy endpoint on port 8888 for successful reporting.

## Protocol Compatibility Notes

- Firmware versions and manufacturer provisioning templates can change available telemetry fields and reporting behavior between shipments.
- Hardware revisions may alter sensor capabilities or OBDII PID coverage so validate the specific device revision against expected diagnostics.
- Some carriers or regional variants can affect connectivity performance; testing on the target network is recommended before large scale rollout.
- Transport selection between UDP and TCP can affect delivery guarantees and should match the device configuration used in deployment.
- Confirm which standard OBDII PIDs are supported by the SYRUS OBDII-CAT1 firmware if you require specific engine parameters for monitoring.
- Always cross reference device behavior with the official manufacturer documentation to confirm supported features for your use case.

## Why Protocol Understanding Matters

A clear grasp of the device communication protocol helps ensure correct setup, faster troubleshooting, and reliable long term operation in Plaspy. Knowing how the tracker reports and what the platform expects reduces integration friction and supports consistent fleet visibility.

- Speeds initial deployment by clarifying which settings need to be configured on the tracker to reach Plaspy.
- Helps diagnose connectivity issues by narrowing down whether transport, DNS, or firmware behavior is the root cause.
- Enables appropriate firewall and carrier settings by documenting destination domain and port requirements.
- Guides expectations around available telemetry and reporting cadence based on firmware and device capabilities.
- Supports planning for scale by standardizing device configuration and ensuring consistent behavior across a fleet.

## Why Use Plaspy with This Protocol

Using the SYRUS OBDII-CAT1 with Plaspy provides fleet operators with a streamlined path to collect vehicle location, OBDII diagnostics, and event driven accelerometer data into a centralized environment for visualization and workflows. The plug and play nature of the device reduces installation time while Plaspy provides a shared ingestion point and platform services to turn raw telemetry into operational insights.

To learn more about Plaspy and how it works with a wide range of trackers visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions consult the manufacturer at https://www.digitalcomtech.com/ as protocol support and firmware behavior can evolve over time.
