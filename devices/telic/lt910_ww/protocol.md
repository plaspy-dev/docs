---
slug: /telic/lt910_ww/protocol
id: lt910_ww-protocol
sidebar_label: Protocol
title: Telic - LT910-WW Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Telic LT910 WW and how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - Telic LT910 WW protocol
  - Telic LT910 WW GPS protocol
  - Telic LT910 WW communication
  - Telic LT910 WW tracking
  - Telic LT910 WW Plaspy compatibility
  - Telic GPS tracker protocol
  - LT910 WW Plaspy integration
  - Vehicle tracking Telic LT910 WW
  - Fleet management Telic LT910 WW
  - Telic LT910 WW telemetry
---

# Telic - LT910-WW Protocol

This page provides a public, non sensitive overview of the communication protocol context for the Telic LT910-WW when used with Plaspy. It explains how the device can report telemetry and positional data to Plaspy, what to check during setup, and how protocol behavior affects integration without exposing proprietary or low level implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the LT910-WW can vary by firmware version, hardware revision, or manufacturer configuration. This page summarizes practical protocol context and connection options while recommending verification against the official manufacturer documentation for device or firmware specific details.

## Protocol Overview

The communication protocol for the LT910-WW governs how the terminal transmits telemetry, identification, and state information from the device to a cloud endpoint. For Plaspy integrations the protocol's public role is to enable reliable delivery of positional and sensor data so the platform can provide mapping, alerts, and historical reporting.

- Carries device identity and session information that allows Plaspy to associate incoming messages with a specific asset or installation.
- Transports GNSS position, timestamps, and sensor or I/O status when the LT910-WW is connected to external GNSS receivers or telemetry sources via RS232 or USB.
- Provides status and health information such as connectivity and power state that Plaspy can surface in dashboards and alerts.
- Supports operation over cellular links with automatic fallback between LTE, 3G, and 2G as provided by the Telit LE910C1 WW module in the unit.
- Enables control and command flows when vehicle control interfaces or remote actions are relayed via the terminal and interpreted by Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared, well known endpoint and automatically determines the tracker protocol so most users do not need to select a protocol manually. Proper device configuration to report to the Plaspy endpoint is typically the main requirement to enable automatic detection and onboarding.

- Plaspy listens at the public server domain d.plaspy.com and the server IP 54.85.159.138 on the platform port 8888.
- All devices in Plaspy use the same port which simplifies device configuration across models.
- Plaspy supports automatic protocol detection so a correctly configured LT910-WW reporting to the Plaspy endpoint will normally be recognized without manual protocol selection.
- If a device supports multiple transport options, configuring it to point at the Plaspy endpoint is the common step to enable detection and data ingestion.
- Users should ensure device identity (IMEI, serial, or other identifier) is consistent with any account or provisioning steps expected by their Plaspy tenant.

## Transport and Connection Context

Connection context covers how the LT910-WW establishes a link to Plaspy and which transport options are commonly available. The terminal is designed for wideband cellular connectivity and can be set to use different transport methods depending on deployment needs and firmware capabilities.

- The LT910-WW may be configured to use either UDP or TCP on port 8888 depending on device support and chosen configuration.
- Devices can be pointed at the Plaspy domain d.plaspy.com or the Plaspy server IP 54.85.159.138 as the destination.
- Plaspy’s single port approach means the same port 8888 is used for all supported devices, simplifying firewall and APN rules for deployments.
- Transport selection (UDP vs TCP) may affect message delivery characteristics; choose the transport that matches device firmware options and network conditions.
- Ensure that APN, SIM settings, and any network restrictions permit outbound traffic to the Plaspy endpoint to allow reliable reporting.

## Protocol Compatibility Notes

- Compatibility can depend on the LT910-WW firmware level and the Telit LE910C1 WW module version; verify firmware specifics with the device vendor.
- Hardware revisions and optional peripherals (external GNSS, CAN adapters, or USB sensors) can change the telemetry available to Plaspy.
- Transport choice between UDP and TCP should match what the device firmware supports and what your network environment permits.
- Manufacturer configuration settings, such as how the device sends identifiers or triggers position reports, can vary and should be reviewed against Plaspy onboarding expectations.
- For custom integrations that use external GNSS or serial feeds, validate that those feeds are correctly routed through the LT910-WW to Plaspy.
- Always confirm device network connectivity and SIM provisioning before relying on cloud ingestion to avoid avoidable onboarding delays.
- Consult Telic documentation for firmware specific notes and Plaspy documentation for recommended configuration examples.

## Why Protocol Understanding Matters

A practical understanding of the LT910-WW communication protocol helps ensure correct setup, reduces troubleshooting time, and improves long term reliability of tracking and telemetry in Plaspy. Knowing what the device sends and how it connects allows integrators to match device behavior with platform expectations and operational needs.

- Helps validate that device identity and reporting cadence meet Plaspy onboarding and asset mapping requirements.
- Enables quicker diagnosis of connectivity issues by narrowing focus to transport, APN, or device configuration rather than platform settings.
- Informs decisions about transport selection, data usage, and power management for different deployment scenarios.
- Supports planning for peripheral integration such as external GNSS receivers, CAN/OBD adapters, or analog sensors connected via RS232 or USB.
- Reduces integration risk by clarifying which parts of the solution are device side and which are platform side.

## Why Use Plaspy with This Protocol

The LT910-WW's rugged industrial design and wideband cellular support make it a practical choice for organizations that need resilient connectivity and flexible telemetry forwarding to a cloud platform. When paired with Plaspy, the terminal can act as a robust communications gateway for fleet tracking, remote asset monitoring, and control workflows that rely on consistent data delivery.

Plaspy’s automatic protocol detection and unified port usage simplify deployment at scale so integrators can focus on sensor integration and operational rules rather than per device protocol selection. To learn more about Plaspy and how it works with devices like the LT910-WW visit https://www.plaspy.com. For the most current firmware and device specific protocol details verify information with the manufacturer at https://www.telic.de. Protocol support, firmware behavior, and device implementation details can change over time so consulting the vendor documentation is recommended.
