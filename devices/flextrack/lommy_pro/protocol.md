---
slug: /flextrack/lommy_pro/protocol
id: lommy_pro-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Pro Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Flextrack Lommy Pro compatibility with Plaspy servers and shared connection settings
keywords:
  - Flextrack Lommy Pro protocol
  - Lommy Pro Plaspy compatibility
  - Lommy Pro GPS protocol
  - Flextrack GPS communication
  - Lommy Pro telemetry reporting
  - Lommy Pro vehicle tracking
  - Lommy Pro connectivity
  - Plaspy tracker integration
  - Lommy Pro fleet tracking
  - Lommy Pro remote monitoring
---

# Flextrack - Lommy Pro Protocol

This page describes the public protocol context for using the Flextrack Lommy Pro tracker with the Plaspy platform. It covers how Lommy Pro reports GNSS positions and vehicle telemetry to Plaspy, the shared connection settings Plaspy expects, and practical notes to help with setup and validation. The goal is to explain the role of the device protocol in successful integration without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is reporting to the Plaspy endpoint. Lommy Pro supports common transport options such as UDP, TCP, FTP and SMS and its exact on‑the‑wire behavior can vary by firmware version, hardware revision, and manufacturer implementation. For Plaspy the public server endpoint information is d.plaspy.com with server IP 54.85.159.138 on port 8888 and devices may be configured to use UDP or TCP on that port.

## Protocol Overview

The Lommy Pro communication protocol governs how GNSS fixes, movement and vehicle telemetry are encoded and sent from the tracker to Plaspy so the platform can normalize data for live maps, history and alerts. The protocol also determines how the device identifies itself, reports status and receives simple remote commands or acknowledgements when applicable.

- Enables transmission of GNSS position, movement events, and vehicle telemetry such as CAN and analog inputs for Plaspy to ingest.
- Carries device identity and status information so Plaspy can associate incoming messages with the correct asset record.
- Supports multiple transports commonly offered by Lommy Pro including UDP, TCP, FTP and SMS for flexible connectivity.
- Interacts with power management and sleep modes so reporting intervals and payload contents can change depending on configuration.
- Works with Plaspy normalization so telemetry fields are converted into consistent dashboard metrics and alerts.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a shared endpoint and port and automatically determines the protocol used by each tracker. In most cases a properly configured device will start reporting to Plaspy and no manual protocol selection inside Plaspy is required.

- Plaspy listens on the same port for all supported devices, which simplifies device configuration and onboarding.
- Devices configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888 will be routed into Plaspy for automatic detection.
- Plaspy matches incoming data to devices using identifiers present in the tracker reports and then maps fields to platform telemetry.
- Users typically only need to ensure the device is pointed to the Plaspy endpoint and that the modem APN and SIM access are correct.
- When a device uses FTP or SMS as an alternative channel, Plaspy ingests the data through the corresponding supported ingestion workflows.

## Transport and Connection Context

Connection context focuses on the transport layer used by Lommy Pro and the destination settings to reach Plaspy. Lommy Pro is designed to operate over cellular networks with flexible transport options appropriate for battery backed or wired installations.

- Lommy Pro can be configured to use UDP or TCP on port 8888 depending on device support and operator conditions.
- Devices may be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 on port 8888.
- Plaspy uses the same port for all devices, which reduces per device configuration differences on the server side.
- FTP and SMS are available as alternative reporting methods for environments where TCP or UDP are not feasible.
- Ensure mobile network operator and firewall rules allow outbound traffic to the Plaspy endpoint and that APN and SIM provisioning are correct for data channels.

## Protocol Compatibility Notes

- Firmware revisions can change message content, timing, and feature availability; always verify the tracker firmware level when validating compatibility.
- Hardware revisions and optional accessories such as external sensors or RF beacons can affect which telemetry fields are present in reports.
- Transport selection (UDP versus TCP) can influence delivery behavior; choose the transport that matches the deployment needs and network reliability.
- Manufacturer configuration options such as sleep modes and movement sensing determine reporting intervals and battery life tradeoffs.
- When using the Plaspy domain name or direct IP, confirm DNS behavior and operator network routing to avoid misrouted traffic.
- Validate any manufacturer supplied configuration commands and APN settings against official Flextrack documentation before wide deployment.

## Why Protocol Understanding Matters

Understanding how Lommy Pro communicates with Plaspy helps ensure reliable tracking, accurate telemetry, and predictable alerting behavior across deployments. Clear protocol awareness reduces onboarding friction, improves troubleshooting, and supports long term operational stability.

- Helps verify correct device configuration for transport, APN and reporting endpoint so data reaches Plaspy reliably.
- Assists in troubleshooting intermittent reports by correlating device sleep modes, battery state, and network transport behavior.
- Supports planning for telemetry needs such as CAN signals, analog inputs, and sensor expansions so Plaspy can normalize fields correctly.
- Informs decisions about firmware updates and hardware revisions that may change message contents or supported features.
- Enables better coordination between field installers, fleet managers and Plaspy support when diagnosing device to server issues.

## Why Use Plaspy with This Protocol

Using Lommy Pro with Plaspy provides organizations with continuous location, movement and telemetry visibility suitable for fleet management, theft prevention and condition monitoring. Plaspy ingests GNSS fixes and vehicle telemetry from Lommy Pro and presents normalized location, event, and sensor data for dashboards, reports and alerting workflows.

Plaspy simplifies device onboarding by listening on a single port for all devices and automatically detecting the tracker protocol when the device reports to d.plaspy.com or 54.85.159.138 on port 8888. To learn more about Plaspy and how it can support Lommy Pro deployments visit https://www.plaspy.com. Please also verify the latest device specific protocol details, firmware behavior and manufacturer guidance on the Flextrack website at https://flextrack.dk since protocol support and firmware behavior can change over time.
