---
slug: /concox/at1/protocol
id: at1-protocol
sidebar_label: Protocol
title: Concox - AT1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox AT1 and Plaspy integration
keywords:
  - Concox AT1 protocol
  - Concox AT1 GPS protocol
  - AT1 Plaspy compatibility
  - Concox GPS tracker protocol
  - AT1 communication protocol
  - GPS tracker Plaspy integration
  - asset tracking protocol
  - vehicle tracking Concox
  - AT1 telemetry protocol
  - Concox AT1 tracking protocol
---

# Concox - AT1 Protocol

This page describes the public protocol context for using the Concox AT1 tracker with Plaspy. It focuses on how the device communicates with Plaspy in broad, non-sensitive terms and what to expect when integrating the AT1 into cloud telematics workflows. The content is meant to help technical integrators and fleet managers understand connection behavior and practical considerations without exposing manufacturer internal details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior for the AT1 can vary by firmware version, hardware revision, and manufacturer implementation, so this page presents general guidance grounded in the AT1 device description and Plaspy public connection facts.

## Protocol Overview

The AT1 reporting protocol is the mechanism by which the device delivers GNSS positions, LBS fallback data, event notifications, and telemetry to a telematics backend such as Plaspy. At a high level the protocol enables identification, data reporting, and basic acknowledgement flows that let Plaspy present live positions and events while the device buffers data when connectivity is poor.

- Allows the AT1 to deliver GNSS positions and LBS fallback data so Plaspy can reconstruct tracks and last known location.
- Carries event and sensor data such as tamper alerts, accelerometer triggers, and power status for alarm handling.
- Transmits telemetry details needed for diagnostics and device health monitoring on Plaspy dashboards.
- Supports local buffering on the AT1 so delayed reports and recorded audio can be forwarded to Plaspy when connectivity resumes.
- Provides the addressing information required for the AT1 to report to the Plaspy server endpoint and be identified by the platform.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single public endpoint and automatically determines the reporting protocol of connected devices. In most cases you do not need to manually select a protocol in Plaspy if the AT1 is configured to report to the platform endpoint and uses a supported transport.

- Plaspy server domain is d.plaspy.com which devices can target for telemetry delivery.
- Plaspy server IP is 54.85.159.138 and can be used as an alternate address when DNS is not available.
- The platform listens on port 8888 and all devices in Plaspy use the same port for reporting.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint and routes the messages to the appropriate handler.
- If the AT1 is properly configured to send to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will typically identify the device protocol without manual intervention.

## Transport and Connection Context

Connection transport and endpoint settings determine how the AT1 reaches the Plaspy server. The AT1 supports practical transport choices and local buffering to ensure telemetry reaches Plaspy even when cellular coverage is intermittent.

- The AT1 may be configured using UDP or TCP on port 8888 depending on device support and the selected configuration profile.
- Devices can point to the Plaspy domain d.plaspy.com or the numeric server address 54.85.159.138 when DNS or direct addressing is preferred.
- Plaspy uses the same port number 8888 for all supported devices to simplify device configuration and firewall rules.
- Choose UDP when you prefer lower overhead and the device firmware uses datagram reporting; choose TCP when session reliability is required and the device supports it.
- Ensure any network firewalls or APN settings on SIM plans allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware differences can change feature availability and exact message behavior; always confirm the firmware version on the AT1 when troubleshooting.
- Hardware revisions or regional variants of the AT1 may implement slightly different reporting behaviors or default transport settings.
- Manufacturer configuration commands and default APN settings can affect whether the device reports via UDP or TCP; verify settings before deployment.
- Local buffering and recorded audio delivery are subject to device storage limits and firmware handling of queued data.
- Some advanced features described by the device documentation may require specific firmware builds or configuration options to be enabled.
- Validate compatibility against the AT1 product documentation and any release notes provided by the manufacturer.

## Why Protocol Understanding Matters

A practical understanding of the AT1 communication protocol helps ensure reliable setup, faster troubleshooting, and predictable long term operation with Plaspy. Knowing how the device reports, buffers data, and selects transport can reduce integration time and improve operational visibility.

- Helps confirm that devices are pointing to the correct Plaspy endpoint and port so telemetry arrives consistently.
- Makes it easier to interpret why buffered data appears after connectivity resumes and how to size reporting intervals for battery life.
- Improves troubleshooting for missed events or missing telemetry by narrowing scope to firmware, transport, or network configuration.
- Guides configuration choices for UDP versus TCP based on coverage, battery life, and expected data reliability.
- Supports planning for firmware updates and testing to ensure continuity of features such as event reporting and audio forwarding.

## Why Use Plaspy with This Protocol

Using the Concox AT1 with Plaspy provides a practical path to combine rugged, long-life asset tracking hardware with a cloud telematics platform that ingests GNSS positions, LBS fallback, sensor events, and buffered telemetry. The AT1’s IP67 enclosure, magnetic mount, and extended battery life make it suited for redeployable assets and containers, while Plaspy presents the incoming data in dashboards, alerts, and historical reports.

To learn more about Plaspy and how the platform can ingest AT1 telemetry and events, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation can change over time, so please verify the latest device specific protocol details and firmware notes on the official manufacturer website https://www.iconcox.com/.
