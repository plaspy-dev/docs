---
slug: /xirgo/xt_4800/protocol
id: xt_4800-protocol
sidebar_label: Protocol
title: Xirgo - XT-4800 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo XT-4800 and how it communicates with Plaspy
keywords:
  - Xirgo XT-4800 protocol
  - Xirgo XT-4800 GPS protocol
  - XT-4800 tracking protocol
  - Xirgo tracker Plaspy compatibility
  - XT-4800 communication protocol
  - GPS tracker protocol guide
  - fleet tracking Xirgo XT-4800
  - asset tracking XT-4800
  - energy harvesting tracker protocol
  - XT-4800 TCP UDP FTP compatibility
---

# Xirgo - XT-4800 Protocol

This page summarizes the public protocol context for using the Xirgo XT-4800 with Plaspy. It focuses on how the tracker communicates with the Plaspy platform at a high level and what role the device reporting settings play in successful integration. The intent is to provide useful, non-sensitive information that helps fleet managers and integrators plan deployments and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes general communication concepts rather than firmware-specific internals. The XT-4800 itself is an energy harvesting, IP67 rated asset tracker with embedded cellular and GPS antennas and supports TCP, UDP, and FTP for data transport.

## Protocol Overview

The communication protocol of the XT-4800 defines how the device reports location, device health, and telemetry to a backend server such as Plaspy. At a high level the protocol enables the tracker to authenticate or identify itself, deliver time series location and status data, and receive configuration or control messages when supported by the device and manufacturer.

- Carries positional data and device telemetry from the XT-4800 to the server in a format the backend can interpret.
- Allows the device to include identifying information so Plaspy can associate incoming reports with the correct asset.
- Supports periodic or event driven reporting to balance reporting frequency against power use for long life deployments.
- Uses standard transport options available on the device such as TCP, UDP, or FTP to move data across the cellular network.
- Provides the basis for server side processing that converts device messages into map positions, alerts, and historical records.

## How Plaspy Detects the Protocol

Plaspy listens on a unified endpoint and port for incoming device connections and automatically identifies the tracker reporting protocol when a device sends data. This automatic detection means that when a device is pointed at the Plaspy endpoint using the correct connection settings, the platform will attempt to recognize and parse supported device messages without a manual protocol selection by the user.

- Plaspy’s public server endpoint is d.plaspy.com and the public IP address is 54.85.159.138.
- The platform uses port 8888 for device connections and all devices in Plaspy use the same port.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support.
- If the XT-4800 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will receive and process incoming reports.
- In most cases the user does not need to manually select a protocol inside Plaspy when the device is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection choices such as TCP versus UDP and the configured server host are transport level settings that determine how device messages are delivered to Plaspy. The XT-4800 supports common transport options and can be directed to the Plaspy endpoint by setting its server address and port in the device configuration.

- The XT-4800 may be configured to use UDP or TCP on port 8888 for reporting.
- Devices can point to the Plaspy hostname d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy uses port 8888 uniformly for all supported devices to simplify configuration and onboarding.
- Transport selection can affect message delivery characteristics such as retransmission and ordering, so choose the mode the device firmware supports and that fits your coverage/latency needs.
- Ensure that carrier or firewall rules allow outbound connections from the device to the chosen Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions may change message fields, reporting intervals, or transport behavior; confirm firmware details before large scale deployment.
- Hardware revisions and optional interfaces such as 1-Wire or Zigbee may alter available telemetry or reporting options.
- Manufacturer configuration tools may provide different naming or configuration layouts; always cross-check the device’s configuration guide.
- Transport selection (TCP versus UDP) should match what the firmware and your deployment require for reliability and power consumption.
- Differences between FTP support and real-time reporting modes can affect how historical telemetry is delivered to a backend.
- Validate device settings by sending test reports to the Plaspy endpoint and confirming they are received and parsed as expected.

## Why Protocol Understanding Matters

Understanding how the XT-4800 communicates helps ensure reliable reporting, efficient power use, and effective troubleshooting when integrating devices with Plaspy. Clear knowledge of connection settings and protocol behavior reduces setup friction and aids in diagnosing delivery or parsing issues.

- Ensures correct server hostname and port configuration so reports reach Plaspy reliably.
- Helps choose the appropriate transport mode for desired reliability and battery life.
- Guides troubleshooting steps when reports are not appearing in Plaspy or data fields look incorrect.
- Supports planning for firmware upgrades or hardware variants that may change protocol behavior.
- Improves operational visibility by aligning device reporting intervals with monitoring requirements.

## Why Use Plaspy with This Protocol

Using the Xirgo XT-4800 with Plaspy gives organizations a way to collect frequent, long-life location and telemetry for remote assets. Plaspy’s unified endpoint and automatic protocol detection reduce the configuration burden and allow the platform to ingest reports from devices that support common transports such as TCP, UDP, and FTP. For deployments that need durable, weatherproof trackers with energy harvesting and flexible connectivity, combining the XT-4800 with Plaspy provides a straightforward path to asset visibility.

To learn more about Plaspy and how it works with devices like the XT-4800 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and configuration guidance with the manufacturer at https://xirgo.com/
