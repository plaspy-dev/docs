---
slug: /queclink/gl300/protocol
id: gl300-protocol
sidebar_label: Protocol
title: QuecLink - GL300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for QuecLink GL300 explaining how the tracker communicates with Plaspy and common connection settings
keywords:
  - QuecLink GL300 protocol
  - QuecLink GL300 GPS protocol
  - GL300 Plaspy compatibility
  - QuecLink GL300 tracking protocol
  - GL300 communication protocol
  - QuecLink GPS tracker protocol
  - QuecLink GL300 Plaspy
  - GL300 device protocol guide
  - QuecLink GL300 telemetry
  - QuecLink GL300 integration
---

# QuecLink - GL300 Protocol

This page covers the public protocol context for using the QuecLink GL300 tracker with Plaspy. It explains how the GL300, a compact water resistant GNSS locator with GPS and GLONASS support, interacts with Plaspy at a high level to deliver location and telemetry for dashboards, alerts, and historical playback. The intent is to provide useful, non-sensitive protocol context that helps with integration and troubleshooting while directing readers to manufacturer resources for device specific details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The GL300 is compatible with Plaspy, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For connection, Plaspy accepts device reports at the d.plaspy.com endpoint (IP 54.85.159.138) on port 8888; devices may be configured to use UDP or TCP on that same port. All devices in Plaspy use the same port and Plaspy will attempt automatic protocol detection for properly configured trackers.

## Protocol Overview

The communication protocol for the GL300 defines how the tracker identifies itself, reports GNSS positions, and delivers telemetry to a remote server such as Plaspy. This public overview focuses on the role of that protocol in enabling reliable, timely location updates and status reporting without diving into implementation specific details that vary by firmware.

- Carries device identity and status information so Plaspy can associate incoming reports with the correct tracker instance.
- Transports GNSS fixes and basic telemetry that Plaspy uses for live maps, geofencing, and historical route playback.
- Enables the tracker to send periodic or event driven updates, allowing Plaspy to maintain situational awareness for personnel or assets.
- Works over standard network transports so the GL300 can report to Plaspy using common carrier networks and configured endpoints.
- Interacts with device configuration settings on the GL300 to control reporting intervals, wake behavior, and power use as supported by the hardware and firmware.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many tracker models and to automatically detect the protocol used by an incoming device when that device is configured to report to the Plaspy endpoint. This reduces the need for manual protocol selection inside the platform for most deployments.

- Devices should be configured to report to d.plaspy.com or directly to 54.85.159.138 so Plaspy receives incoming data.
- All Plaspy devices use the same server port, 8888, simplifying device configuration across different models.
- Plaspy supports both UDP and TCP transports on port 8888; use the transport mode the GL300 firmware and deployment require.
- When a properly configured GL300 sends data to Plaspy, the platform attempts automatic identification of the tracker protocol so users typically do not need to select a protocol manually.
- If a device does not appear to be communicating, confirm endpoint, transport, and device firmware settings before contacting platform support.

## Transport and Connection Context

Connection context covers how the GL300 reaches Plaspy over the network and which endpoints and transports are commonly used. Keep in mind that exact options available may depend on device firmware and configuration utilities provided by the manufacturer.

- The GL300 may be configured to use either UDP or TCP on port 8888 depending on device support and the desired tradeoffs between reliability and latency.
- Plaspy accepts incoming reports at the domain d.plaspy.com and the public server IP 54.85.159.138 on port 8888.
- Because Plaspy uses a single port for all devices, configuring the GL300 to report to the Plaspy endpoint with the correct transport is generally sufficient for the platform to receive data.
- Network environments with NAT, firewalls, or carrier restrictions may require additional configuration to allow outbound tracker connections to the Plaspy endpoint.
- Verify that the GL300 firmware allows the chosen transport and that any APN or SIM profile settings on the device permit connections to external endpoints.

## Protocol Compatibility Notes

- The GL300 is compatible with Plaspy when configured to report to the Plaspy endpoint, but feature availability can vary with firmware revisions.
- Hardware revisions and optional configurations of the GL300 can affect which telemetry fields are present or how often the device reports.
- Transport mode selection (UDP versus TCP) is a device configuration choice that can impact delivery behavior depending on network conditions.
- Manufacturer side settings, such as default reporting intervals or sleep modes, influence what the protocol sends; check device configuration tools for adjustments.
- Always validate compatibility for the specific firmware build installed on the GL300 against your integration needs.
- Consult official QuecLink documentation for model specific configuration commands, firmware release notes, and known behavior differences.

## Why Protocol Understanding Matters

A practical understanding of the GL300 communication protocol helps with successful setup, predictable behavior in the field, and faster troubleshooting when location reports do not appear as expected. Knowing the connection context and common variables reduces integration friction and supports ongoing operations.

- Ensures correct endpoint and transport configuration so the tracker reaches the Plaspy platform reliably.
- Helps interpret what telemetry fields should be expected and which items may be absent due to firmware or hardware differences.
- Aids troubleshooting by narrowing down whether an issue is network, configuration, or device related.
- Supports decisions about reporting frequency, power use, and operational tradeoffs for long term deployments.
- Makes it easier to plan for scalability when deploying many GL300 devices to feed the Plaspy system.

## Why Use Plaspy with This Protocol

Using the QuecLink GL300 with Plaspy provides a straightforward path to bring rugged, water resistant GNSS tracking into a unified monitoring and reporting environment. Organizations that need personnel safety monitoring, event oversight, or remote asset visibility can benefit from the GL300’s durable design combined with Plaspy’s centralized ingestion and mapping capabilities.

Plaspy’s automatic protocol detection and unified port strategy reduce configuration complexity for deployments that include many different tracker models. To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the latest device and firmware specific protocol details, please verify current information with the manufacturer at https://www.queclink.com/. Protocol support and firmware behavior can change over time, so consult manufacturer documentation when planning or troubleshooting integrations.
