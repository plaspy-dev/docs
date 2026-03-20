---
slug: /gotop/d05/protocol
id: d05-protocol
sidebar_label: Protocol
title: GOTOP - D05 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP D05 GPS tracker integration with Plaspy including connection and compatibility context
keywords:
  - GOTOP D05 protocol
  - GOTOP D05 GPS protocol
  - GOTOP D05 tracking protocol
  - GOTOP D05 communication
  - GOTOP D05 Plaspy compatibility
  - GOTOP GPS tracker protocol
  - Plaspy device protocol
  - fleet tracking GOTOP D05
  - asset tracking D05
  - D05 integration guide
---

# GOTOP - D05 Protocol

This page provides a public protocol overview for the GOTOP D05 and how it communicates with Plaspy. It focuses on the high level connection and reporting context needed to understand how the tracker sends location and event data to Plaspy without exposing private implementation details.

The D05 is a Plaspy compatible 4G tracker built for long standby and continuous tracking. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware, hardware revision, and manufacturer implementation. Always review manufacturer documentation for firmware specific details.

## Protocol Overview

The D05 uses its on-board cellular modem and GNSS receiver to produce telemetry and event reports that are transmitted to a remote server. The protocol exchanged between the device and Plaspy defines how the tracker identifies itself, when it reports position or alarms, and which telemetry fields are included in each report. This page keeps the discussion at a practical level so you can plan integration and troubleshooting with Plaspy.

- The protocol determines how the tracker identifies device ID and session details to the server so telemetry can be attributed correctly.
- Reporting rules in the device control when position fixes, movement alarms, and sensor events are sent to Plaspy.
- Encrypted data transmission from the D05 helps protect telemetry in transit while still allowing Plaspy to ingest and display live data.
- The protocol maps raw GNSS and sensor measurements into the fields Plaspy uses for mapping, alerts, and historical playback.
- Firmware and configuration influence which events and optional data (for example Wi‑Fi assistance or extended telemetry) are included in reports.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared endpoint and port and uses automatic detection to identify the reporting protocol. In most deployments you do not need to select a protocol manually inside Plaspy if the D05 is configured to send data to the Plaspy endpoint correctly. This simplifies onboarding for mixed fleets and multi model installations.

- Plaspy’s public server endpoint is d.plaspy.com which resolves to 54.85.159.138 for network routing.
- Plaspy listens on port 8888 and all devices supported by Plaspy use the same port for reporting.
- The D05 may be configured to transmit to d.plaspy.com or directly to 54.85.159.138 depending on network setup and preferences.
- Plaspy automatically detects the tracker protocol when the device connects and begins reporting.
- When a D05 is properly configured to report to the Plaspy endpoint, manual protocol selection in the platform is typically not required.

## Transport and Connection Context

Connection transport and addressing are part of the practical integration details. The D05 supports mobile data reporting over LTE with fallback to 2G and can be configured to use either UDP or TCP depending on device support and configuration choices. Understanding transport options helps ensure reliable delivery and correct network firewall settings.

- The D05 may be configured to send telemetry using UDP or TCP on port 8888.
- Plaspy accepts connections on port 8888 for all supported devices so firewall rules only need to allow that single port.
- Devices can point to the domain d.plaspy.com or the IP address 54.85.159.138 when configuring the server target.
- TCP may be preferred for reliable delivery of larger telemetry payloads while UDP is common for compact periodic reports, depending on device settings.
- Ensure the SIM plan allows outbound data and that APN settings on the D05 are correct for your cellular provider.

## Protocol Compatibility Notes

- Firmware variations across D05 units can change which fields are reported and how frequently reports are emitted.
- Hardware revisions or optional features like Wi‑Fi assistance can affect first fix behavior and additional telemetry availability.
- Manufacturer side configuration or custom builds may alter default transport selection between UDP and TCP.
- Confirm the D05 is configured to report to d.plaspy.com or 54.85.159.138 and that port 8888 is used if you have custom provisioning tools.
- Validate alarm and sensor mappings (moving alarm, light sensor alarm) against current manufacturer documentation when enabling event-driven alerts.
- When integrating at scale, pilot a small set of devices first to confirm behavior across your intended firmware revisions.

## Why Protocol Understanding Matters

A practical understanding of the D05 communication protocol helps streamline setup, reduces troubleshooting time, and improves long term reliability in Plaspy. Knowing which transport and report behaviors to expect makes it easier to diagnose connectivity, configuration, and data mapping issues.

- Faster onboarding because you can confirm the D05 is pointed at d.plaspy.com or 54.85.159.138 and using port 8888.
- Quicker troubleshooting when transport choice (UDP vs TCP) or firmware differences affect reporting.
- Better alert tuning by understanding how movement and light sensor events are reported to Plaspy.
- Informed decisions on battery and reporting intervals to balance real time visibility with ultra long standby performance.
- Improved network planning by ensuring carrier and firewall settings permit outbound connections to the Plaspy endpoint.

## Why Use Plaspy with This Protocol

Using the GOTOP D05 with Plaspy provides a practical solution for organizations that need persistent visibility, event notifications, and historical playback across fleets and high value assets. The D05’s long battery life and robust GNSS performance make it suitable for long term deployments where maintenance is infrequent, and Plaspy brings centralized maps, alerts, and reporting to turn device telemetry into operational insights.

If you want to learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notices, and manufacturer guidance for the GOTOP D05, please verify information on the official GOTOP website https://www.gotop.cc/ as protocol support and firmware behavior can change over time.
