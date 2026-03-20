---
slug: /navtelekom/smart_s_2423_mid/protocol
id: smart_s_2423_mid-protocol
sidebar_label: Protocol
title: Navtelekom - SMART S-2423 MID+ Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Navtelekom SMART S-2423 MID+ and Plaspy connectivity and compatibility
keywords:
  - Navtelekom SMART S-2423 MID+ protocol
  - Navtelekom GPS protocol
  - SMART S-2423 MID+ Plaspy compatibility
  - Navtelekom tracker protocol
  - SMART S-2423 MID+ communication
  - Plaspy device protocol
  - fleet tracking protocol
  - vehicle telemetry protocol
  - GPS tracker protocol Plaspy
  - Navtelekom tracking compatibility
---

# Navtelekom - SMART S-2423 MID+ Protocol

This page describes the public protocol context for using the Navtelekom SMART S-2423 MID+ tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, the connection settings to use, and the practical considerations for getting reliable position and telemetry reporting into the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this guidance stays at a public, non sensitive level while pointing to the key connection facts you need to configure and troubleshoot integration.

## Protocol Overview

The SMART S-2423 MID+ reporting protocol defines how the tracker sends identification, location, and telemetry data to a remote server so Plaspy can process and present it. The protocol's role is to reliably deliver time stamped GNSS positions, sensor inputs, and basic state information from the vehicle to a central endpoint where Plaspy ingests and maps data to the corresponding asset.

- Carries device identification and session context so Plaspy can associate reports with the correct asset and account.
- Transmits periodic or event driven position reports and movement telemetry for real time tracking and historical playback.
- Delivers sensor and I/O data such as accelerometer events, input states, and short range sensor readings for telemetry and alerts.
- Enables the platform to receive sufficient information to drive alerts, geofencing, route history, and simple remote control workflows as supported by the device.
- Works over common transport channels so integrators can choose connection style that fits their deployment and carrier environment.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol for incoming connections that target the shared Plaspy endpoint. When a SMART S-2423 MID+ is configured to report to Plaspy, the platform uses the incoming data characteristics to identify and process the device without requiring manual protocol selection in most cases.

- Point the device reporting target to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138 on the common Plaspy port.
- Use port 8888 for the device reporting connection; Plaspy uses the same port for all supported devices to simplify provisioning.
- Devices may be configured to use UDP or TCP on port 8888 depending on the tracker configuration and network conditions.
- When the device is correctly sending reports to the Plaspy endpoint, the system detects the tracker protocol automatically and begins parsing standard telemetry and position fields.
- If the device does not appear, verify network reachability, APN and SIM settings, and that the tracker is configured to target the Plaspy domain or IP and port.

## Transport and Connection Context

Transport options and the address used by the device are an important part of successful integration. The SMART S-2423 MID+ may be configured to send its reports over either UDP or TCP to the Plaspy listener on the shared port, and Plaspy accepts both transports on the same port to accommodate different device setups and carrier behavior.

- The device may be configured using UDP or TCP on port 8888 depending on device support and installer preference.
- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices supported by Plaspy use the same port to simplify fleet provisioning and firewall rules.
- Ensure that carrier APN settings, SIM status, and any on device APN or data profile are correct so the tracker can reach d.plaspy.com or the server IP.
- If using a firewall or private APN, allow outbound connections to the server domain or IP on port 8888 for the selected transport protocol.

## Protocol Compatibility Notes

- Firmware variations can alter the exact fields, report cadence, or optional telemetry the device sends, so behavior may differ between firmware releases.
- Hardware revisions and optional interfaces (for example RS-485 or 1-Wire attachments) can change which telemetry is available to forward to Plaspy.
- Transport selection (UDP vs TCP) is configurable and may impact message delivery characteristics under different network conditions.
- Manufacturer configuration tools such as the NTC Configurator are the recommended way to prepare devices for Plaspy reporting and to maintain current firmware.
- Confirm device APN and SIM settings as those affect the device ability to reach the Plaspy endpoint and be automatically detected.
- Always validate compatibility and the exact protocol behavior against the device documents provided by Navtelekom when planning large deployments.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol and the surrounding connection context helps ensure reliable delivery of position and telemetry to Plaspy, speeds up troubleshooting during installation, and improves long term operational stability.

- Ensures correct server target and port are configured so reports reach Plaspy without manual intervention.
- Helps troubleshoot connectivity issues such as blocked ports, incorrect APN, or transport mismatches between device and network.
- Clarifies what telemetry and sensor inputs a device will actually report to Plaspy based on firmware and hardware options.
- Supports reasonable expectations for reporting intervals, event triggering, and sensor mapping into Plaspy dashboards.
- Aids planning for large scale rollouts by identifying dependencies like SIM provisioning, configuration tooling, and firmware management.

## Why Use Plaspy with This Protocol

Using the SMART S-2423 MID+ with Plaspy gives fleet operators a straightforward path to consolidate GNSS positions, accelerometer based events, sensor inputs, and short range telemetry into a single telematics platform. Plaspy's shared endpoint approach and automatic protocol detection reduce the configuration overhead for mixed fleets and make it easier to bring new devices online quickly.

To learn more about Plaspy and how it handles device reporting, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://www.navtelecom.ru/ to ensure accurate configuration and compatibility.
