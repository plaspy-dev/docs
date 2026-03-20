---
slug: /reachfar/rf_v26/protocol
id: rf_v26-protocol
sidebar_label: Protocol
title: Reachfar - RF-V26+ Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Reachfar RF-V26+ animal GPS tracker and how it communicates with Plaspy for tracking and telemetry
keywords:
  - Reachfar RF-V26+ protocol
  - Reachfar RF-V26+ GPS protocol
  - RF-V26+ protocol Plaspy
  - Reachfar animal GPS protocol
  - RF V26 tracking protocol
  - Reachfar tracker Plaspy compatibility
  - RF V26 GPS tracker communication
  - Reachfar livestock tracking protocol
  - Plaspy supported trackers
  - RF V26 device protocol
---

# Reachfar - RF-V26+ Protocol

This page documents the public protocol context for using the Reachfar RF-V26+ animal GPS tracker with Plaspy. It describes how the tracker communicates in broad, non sensitive terms and explains the role of the reporting protocol for delivering location and status data into Plaspy. The RF-V26+ is a compact animal tracker designed for livestock use with a rugged waterproof enclosure and solar assisted charging, and this guidance assumes the device is reporting standard location and telemetry to a remote endpoint.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact behavior and fields reported by an RF-V26+ can vary with firmware version, hardware revision, and manufacturer implementation, so treat this page as protocol context rather than a firmware level specification. Plaspy accepts device traffic at the public endpoint d.plaspy.com and the server IP 54.85.159.138 on port 8888, and devices may be configured to send data over UDP or TCP to that same port.

## Protocol Overview

The tracker reporting protocol is the mechanism by which the RF-V26+ sends position, time, and status information from the device to a backend service such as Plaspy. In practice the protocol defines how the device identifies itself, how often it reports, and which telemetry fields are included in each report. For Plaspy integration the important aspects are reliable identification, consistent timestamped location samples, and basic telemetry such as battery or charging state when available.

- Enables the RF-V26+ to transmit location and status data to Plaspy for mapping and telemetry.
- Carries device identity information so Plaspy can associate incoming reports with the correct unit.
- Provides timestamped position samples used for live tracking and historical trails.
- Transmits status indicators such as battery level or charging state when that telemetry is provided by firmware.
- Supports the transport layer behavior that determines whether data is sent via UDP or TCP depending on device configuration.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many tracker models and to automatically determine the protocol used by an incoming device when it is pointed at the Plaspy endpoint. This automatic detection means users typically do not need to select a protocol in Plaspy if the device is configured to send its uplinks to the correct Plaspy address and port.

- Plaspy receives device uplinks on the shared endpoint d.plaspy.com and the public IP 54.85.159.138.
- Plaspy listens on port 8888 for device traffic and uses the same port for all devices.
- When the RF-V26+ is configured to report to that endpoint and port, Plaspy attempts protocol detection automatically.
- Device identity and consistent reporting help Plaspy match incoming messages to an asset record.
- Users normally only need to ensure the RF-V26+ reports to the Plaspy endpoint and that network egress from the device is permitted.

## Transport and Connection Context

Transport and connection context covers how the RF-V26+ reaches Plaspy rather than the internal packet format. The RF-V26+ may be configured to use either UDP or TCP to send uplinks depending on device firmware and deployment needs. To integrate with Plaspy, point the device at Plaspy’s public endpoint and port and choose the transport supported by the tracker and your network.

- Devices may be set to report to the DNS name d.plaspy.com or to the server IP 54.85.159.138.
- Plaspy accepts both UDP and TCP connections on port 8888 depending on what the device supports.
- All Plaspy devices use the same port 8888 so configuration steps are consistent across models.
- Network policies and firewalls must allow outbound connections to the Plaspy endpoint on the chosen transport.
- Selecting UDP or TCP can affect delivery behavior but does not change the high level fact that data is delivered to the Plaspy server for automatic protocol detection.

## Protocol Compatibility Notes

- Compatibility can vary by RF-V26+ firmware version and by any hardware revisions the manufacturer released.
- Some units may present different telemetry fields or reporting intervals depending on factory settings or customer configuration.
- Transport choice UDP versus TCP should align with the RF-V26+ firmware capabilities and the deployment network environment.
- Manufacturer configuration steps such as setting the server address and transport are necessary to ensure the device reports to Plaspy.
- Because product listings and firmware evolve, validate device settings and compatibility against the manufacturer documentation.
- The RF-V26+ was designed to provide position and status data suitable for Plaspy integration, but implementation details can differ across batches.

## Why Protocol Understanding Matters

Understanding the communication protocol helps with successful device setup, troubleshooting intermittent reports, and maintaining reliable long term tracking. Knowing what the tracker is expected to send and how Plaspy receives it reduces time spent diagnosing connectivity or configuration issues and improves operational uptime for animal monitoring.

- Ensures correct device configuration so reports arrive at d.plaspy.com on port 8888.
- Helps diagnose whether missing data is due to transport, network, or firmware settings.
- Clarifies what telemetry Plaspy can expect from an RF-V26+ unit for alerts and reporting.
- Informs decisions on transport selection and network firewall rules for reliable delivery.
- Supports planning for firmware updates or replacement units when feature changes affect integration.

## Why Use Plaspy with This Protocol

Pairing RF-V26+ trackers with Plaspy gives livestock managers and operations a straightforward route to convert on-animal GPS reports into live map views, history trails, and telemetry records for management and oversight. Plaspy’s automatic protocol detection and unified endpoint reduce configuration complexity and let teams focus on device placement and operational policies rather than protocol selection.

To learn more about Plaspy and how it handles device reporting and fleet telemetry, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer instructions for the RF-V26+, please verify current information on the Reachfar official site https://www.reachfargps.com/. Protocol support, firmware behavior, and manufacturer implementation details can change over time so confirming the most recent documentation is recommended.
