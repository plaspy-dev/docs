---
slug: /castel/sat_802/protocol
id: sat_802-protocol
sidebar_label: Protocol
title: Castel - SAT-802 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Castel SAT-802 and how it communicates with Plaspy for global asset tracking
keywords:
  - Castel SAT-802
  - Castel SAT-802 protocol
  - Castel GPS tracker
  - SAT-802 GPRS Iridium
  - Castel tracker Plaspy
  - SAT-802 tracking protocol
  - Castel asset tracking
  - SAT-802 compatibility
  - Castel communication protocol
  - Castel vehicle tracking
---

# Castel - SAT-802 Protocol

This page describes the public protocol context for using the Castel SAT-802 tracker with Plaspy. It focuses on how the device communicates at a high level, what connection endpoints and transport options are relevant, and what to consider when integrating the SAT-802 into Plaspy for global asset tracking. The SAT-802 combines Iridium SBD and GPRS connectivity in a dual module design to provide near global coverage for high value asset monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. For Plaspy the server endpoint is d.plaspy.com (also reachable at 54.85.159.138) and Plaspy listens on port 8888. Devices may be configured to use either UDP or TCP on port 8888. Exact protocol behavior for the SAT-802 can vary by firmware version, hardware revision, and manufacturer implementation, so validate device level behavior against manufacturer documentation when needed.

## Protocol Overview

At a protocol level the SAT-802 uses its communication stack to choose an available channel, identify itself to a remote server, and transmit position and status information that fleet platforms like Plaspy can consume. The device’s dual channel design (GPRS first, Iridium as fallback) is intended to maximize reach while minimizing satellite usage when GSM is available.

- Enables the tracker to report position, timestamps, and status to a remote server for fleet monitoring.
- Carries device identification information that allows Plaspy to associate incoming messages with the correct asset.
- Supports two way data transmission so the platform can deliver configuration or control messages where the device and network allow.
- Selects the most appropriate transport channel based on coverage with GSM prioritized and Iridium available for global reach.
- Provides telemetry and heartbeat information that helps Plaspy maintain device availability and health status.

## How Plaspy Detects the Protocol

Plaspy receives device data at a shared endpoint and automatically determines the tracker protocol for most devices. If the SAT-802 is configured to report to the Plaspy endpoint, manual protocol selection inside Plaspy is typically not required.

- Plaspy accepts incoming tracker connections at d.plaspy.com and 54.85.159.138 on port 8888.
- All devices supported by Plaspy use the same port number, simplifying device configuration.
- Plaspy performs protocol detection on incoming streams so users generally only need to point the device to the Plaspy endpoint.
- Proper device identification and configuration on the SAT-802 ensures Plaspy can match reports to the correct asset record.
- If multiple transports are supported by the device, configure the primary transport to target the Plaspy endpoint to allow automatic detection.

## Transport and Connection Context

Connection setup for the SAT-802 depends on available networks and the device configuration. The tracker can use GSM GPRS when available and fall back to Iridium SBD for satellite delivery, and it can be set to use UDP or TCP to reach the Plaspy endpoint.

- The device may be configured to send data to d.plaspy.com or directly to 54.85.159.138.
- Plaspy listens on port 8888 for incoming device traffic; this port is shared across all Plaspy supported devices.
- The SAT-802 can use either UDP or TCP on port 8888 depending on the device settings and network conditions.
- Choose the transport supported by both the device and the network path to Plaspy to ensure reliable delivery.
- Network latency and MTU differences between GPRS and Iridium channels can affect message timing but not the fact that they are delivered to the same Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions may alter message timing, supported telemetry fields, or channel selection logic; confirm the device firmware level when troubleshooting.
- Hardware revisions can introduce variations in radio behavior or power profiles that affect connectivity choices between GSM and Iridium.
- Manufacturer side configuration or provisioning may enable or disable certain reporting features; check current Castel documentation for device level defaults.
- Transport preference (UDP vs TCP) should be confirmed in device settings and matched to any network constraints like NAT or firewall rules.
- Because the SAT-802 uses dual connectivity, behavior can differ when switching between GPRS and satellite and that may affect reporting cadence.
- Validate device identifiers and reporting format when onboarding a device to ensure Plaspy correctly associates incoming messages.

## Why Protocol Understanding Matters

Understanding how the SAT-802 communicates and how Plaspy receives that data helps with correct setup, faster troubleshooting, and more predictable operational behavior in the field. Knowing the connection points and the role of firmware and hardware variation reduces setup time and prevents common integration issues.

- Ensures the tracker is configured to report to d.plaspy.com or the Plaspy IP so automatic detection can occur.
- Helps diagnose connectivity failures by distinguishing between transport issues and device level behavior.
- Supports informed choices about transport mode selection based on coverage and latency needs.
- Assists in interpreting reported telemetry when device firmware changes alter fields or timing.
- Improves long term reliability by aligning device power and reporting profiles with expected platform capabilities.

## Why Use Plaspy with This Protocol

Using the Castel SAT-802 with Plaspy provides fleet and asset operators a straightforward way to combine global coverage with platform level visibility. Plaspy’s shared endpoint approach and automatic protocol detection reduce the configuration steps required to bring devices online and streamline monitoring across assets that may change networks between GSM and satellite.

If you want to learn more about how Plaspy works with devices like the Castel SAT-802 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions please verify information with Castel at http://www.castelecom.com/ since protocol support and firmware behavior can change over time.
