---
slug: /cantrack/g500m/protocol
id: g500m-protocol
sidebar_label: Protocol
title: CanTrack - G500M Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CanTrack G500M and how it communicates with Plaspy for reliable vehicle tracking
keywords:
  - CanTrack G500M protocol
  - CanTrack G500M GPS protocol
  - G500M tracker Plaspy
  - CanTrack OBD tracker
  - G500M communication protocol
  - vehicle tracking G500M
  - GPS tracker protocol Plaspy
  - G500M telemetry
  - Plug and play OBD tracker
  - fleet management G500M
---

# CanTrack - G500M Protocol

This page describes the public protocol context for using the CanTrack G500M Mini GPS Tracker with Plaspy. It focuses on how the G500M reports position, ignition state, and motion events to a backend platform and what aspects of that communication matter for a successful Plaspy integration. The G500M is a compact OBD plug and play tracker that uses GSM GPRS for TCP IP reporting and includes features such as ACC detection, G sensor events, local position storage, and scheduled timing reports.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Devices compatible with Plaspy can be configured to report to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 using the shared port 8888. The exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so it is important to validate device specific details against official manufacturer documentation.

## Protocol Overview

The device protocol defines how the G500M packages and transmits telemetry so backend systems like Plaspy can ingest location, status, and event data. For practical integration, the protocol ensures the tracker can identify itself, provide usable position updates, and deliver event notifications while supporting reliable reconnection and offline upload after coverage gaps.

- Enables reporting of GPS coordinates, ACC ignition state, and motion or collision events to Plaspy.
- Carries device identity and timing information so Plaspy can associate incoming messages with the correct vehicle record.
- Supports local storage and subsequent re upload of buffered positions when network connectivity returns.
- Provides event flags for alarms such as unplug or power on that Plaspy can surface as alerts.
- Uses standard IP transport so devices can target a Plaspy endpoint for centralized collection.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for device reports and applies automatic protocol detection to identify supported tracker messages. When a G500M is properly configured to report to Plaspy, the platform will typically detect the device protocol without requiring manual selection by the user.

- Plaspy accepts incoming connections on the shared port 8888 for all supported devices.
- Devices can be pointed to the Plaspy domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
- Plaspy automatically detects the tracker protocol when it receives traffic from a properly configured device.
- Most users do not need to manually choose a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.
- Proper device identity and consistent reporting intervals help Plaspy maintain an accurate device mapping.

## Transport and Connection Context

Connection context covers the transport layer choices the G500M may use to reach Plaspy and the practical configuration options available for device setup. Depending on device firmware and configuration, the G500M may use either UDP or TCP to deliver its telemetry to Plaspy on the common port.

- The G500M may be configured to use UDP or TCP on port 8888 depending on device support and provisioning.
- Devices can target the Plaspy server domain d.plaspy.com or the numeric address 54.85.159.138 for reporting.
- Plaspy uses the same port 8888 for all devices to simplify device configuration across models.
- TCP provides a connection oriented option while UDP may be used for smaller or lower overhead uplinks depending on firmware.
- Ensure APN and cellular settings on the device allow outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message features, available events, and default transport selection; check device firmware notes before deployment.
- Hardware revisions or regional variants of the G500M may implement slightly different reporting options or defaults.
- Manufacturer configuration commands and provisioning steps may be required to point the device to d.plaspy.com or 54.85.159.138 on port 8888.
- Some advanced features such as remote voice listening or specialized alarm behavior can depend on firmware and regional regulatory settings.
- Transport should be chosen according to device capabilities and operational requirements for reliability and latency.
- Always validate a device on a test unit before wide scale roll out to confirm Plaspy receives expected telemetry.

## Why Protocol Understanding Matters

A clear, practical understanding of the G500M reporting protocol helps ensure reliable setup, efficient troubleshooting, and consistent historical data within Plaspy. Knowing how and when the device reports, and what events it can generate, reduces ambiguity during commissioning and ongoing operations.

- Speeds up initial provisioning by confirming correct server domain IP and transport settings.
- Simplifies troubleshooting when telemetry stops by narrowing checks to transport, APN, and firmware behavior.
- Helps predict how offline storage and re upload behave after coverage gaps.
- Clarifies which events and inputs the device can report to Plaspy for alerts and automation.
- Supports informed decisions about device placement and configuration for best GPS reception and cellular coverage.

## Why Use Plaspy with This Protocol

Using the CanTrack G500M with Plaspy provides centralized visibility into vehicle location, ignition state, and event telemetry without complex wiring or extended installation. The OBD plug and play form factor combined with Plaspy ingestion of GSM GPRS reports makes the G500M a practical option for fleet managers, rental operators, and vehicle owners who want timely location updates, trip logging, and alerting in a managed platform.

To learn more about Plaspy and how it handles device reporting and fleet workflows visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol documentation on the manufacturer site https://www.cantrackgps.com/ before deployment.
