---
slug: /neomatica/adm_p50/protocol
id: adm_p50-protocol
sidebar_label: Protocol
title: Neomatica - ADM P50 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Neomatica ADM P50 with Plaspy for reliable tracking and alerts
keywords:
  - Neomatica ADM P50 protocol
  - Neomatica ADM P50 GPS protocol
  - ADM P50 Plaspy compatibility
  - ADM P50 tracking protocol
  - Neomatica GPS tracker protocol
  - ADM P50 communication protocol
  - Plaspy device integration
  - GPS asset tracker Plaspy
  - ADM P50 SOS tracker
  - Neomatica ADM P50 setup
---

# Neomatica - ADM P50 Protocol

This page describes the public protocol context for using the Neomatica ADM P50 tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in general terms, the connection settings commonly used, and considerations to help you connect, monitor, and troubleshoot the ADM P50 without exposing sensitive implementation details.

The ADM P50 is a compact battery powered GPS tracker built around a GPS GLONASS MT3333 chipset with energy optimized firmware and modes ranging from real time tracking to low frequency beacon mode. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Verify device specific behavior against Neomatica documentation when needed.

## Protocol Overview

The ADM P50 reporting protocol is the mechanism by which the device delivers location fixes, motion and event telemetry, and status updates to Plaspy. In public documentation terms, the protocol ensures the tracker can identify itself, send GNSS and fallback location data, and transmit discrete events such as SOS presses, accelerometer motion states, and battery reports for ingestion by Plaspy services.

- Provides identification and session information so Plaspy can associate data with the correct device and account.
- Transports GNSS coordinates and LBS fallback points used for real time location and historical route playback.
- Conveys event and telemetry messages such as SOS alerts, motion changes from the accelerometer, and low battery notifications.
- Supports periodic or event driven reporting modes to balance location accuracy and battery life in Plaspy.
- Enables pairing related signals such as Bluetooth tag events for indoor positioning to be reported to the platform.

## How Plaspy Detects the Protocol

Plaspy accepts connections to a single shared endpoint and port and performs automatic protocol detection for incoming device reports. When the ADM P50 is configured to report to Plaspy, the platform will identify the tracker protocol from the incoming connection and data pattern so manual protocol selection in the platform is typically not required.

- Point the device reporting host to Plaspy using the public server domain d.plaspy.com or the public IP address 54.85.159.138.
- Use port 8888 for device reporting, which Plaspy uses as the common port for all supported devices.
- Plaspy supports automatic detection of the tracker protocol when a properly configured ADM P50 reports to the shared endpoint.
- In most deployments users do not need to select a protocol inside Plaspy as long as the device is configured to send data to the Plaspy server.
- Confirm device reporting intervals and event settings on the ADM P50 to ensure the platform receives the desired telemetry and alerts.

## Transport and Connection Context

Transport choices determine how the ADM P50 delivers data to Plaspy but do not change the high level protocol purpose. The device may be configured to use either UDP or TCP on port 8888 depending on device capabilities and configuration choices. Both transport modes are commonly supported in battery powered trackers to balance reliability and power consumption.

- The ADM P50 may be configured using UDP or TCP on port 8888 to send data to Plaspy.
- Devices can be pointed to the Plaspy server using the DNS name d.plaspy.com or the IP address 54.85.159.138.
- All devices in Plaspy use the same port which simplifies deployment and firewall configuration.
- Choose UDP for lower overhead and potential battery savings, or TCP for increased delivery reliability depending on your operational needs and device firmware options.
- Ensure outbound traffic to the Plaspy endpoint is allowed from the device network and that APN and SIM settings on the ADM P50 are correctly configured.

## Protocol Compatibility Notes

- Firmware revisions can change message contents, available event types, or supported reporting modes; check the device firmware version when validating behavior.
- Hardware revisions or optional accessories such as the ADM34 Bluetooth tag may add new event classes or alter telemetry fields.
- Transport selection between UDP and TCP can affect delivery semantics but not the overall purpose of the protocol.
- Manufacturer settings like reporting intervals, power modes, and LBS fallback thresholds can change how often Plaspy receives updates.
- Always validate compatibility against official Neomatica documentation for the ADM P50 when planning deployments or upgrades.
- When in doubt, confirm device configuration parameters and firmware changelogs before large scale rollouts.

## Why Protocol Understanding Matters

Understanding the ADM P50 communication protocol at a high level helps ensure reliable onboarding, accurate telemetry interpretation, and effective troubleshooting when the device is used with Plaspy. Knowing what types of data the tracker can send and how it connects to Plaspy makes it easier to tune device settings to meet operational goals without diving into proprietary internals.

- Facilitates correct device configuration for reporting intervals, transport choice, and server addressing to match operational needs.
- Helps diagnose connectivity and telemetry issues by confirming the device is pointing to d.plaspy.com or 54.85.159.138 on port 8888.
- Improves battery life management by selecting appropriate reporting modes and understanding how event driven reports affect power.
- Ensures event types like SOS, motion, and Bluetooth tag signals are recognized and routed by Plaspy for alerts and mapping.
- Supports planning for firmware updates and feature changes by aligning expectations with manufacturer documentation.

## Why Use Plaspy with This Protocol

Using the ADM P50 with Plaspy provides organizations with compact, battery efficient personal and asset tracking integrated into a unified monitoring platform. Plaspy ingests GNSS and LBS location data, motion and event telemetry, and SOS alerts from the ADM P50 to deliver situational awareness, historical route playback, and configurable alerting for safety and asset protection workflows.

If you want to learn more about connecting Neomatica devices and how Plaspy handles device reporting, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration guides, verify information with the manufacturer at https://neomatica.com/. Protocol support and firmware behavior can change over time so checking the official Neomatica documentation is recommended before deployment.
