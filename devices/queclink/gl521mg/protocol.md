---
slug: /queclink/gl521mg/protocol
id: gl521mg-protocol
sidebar_label: Protocol
title: QuecLink - GL521MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for QuecLink GL521MG showing how the device communicates with Plaspy and connection context for integration
keywords:
  - QuecLink GL521MG
  - QuecLink GL521MG protocol
  - GL521MG GPS protocol
  - QuecLink asset tracker protocol
  - Plaspy device compatibility
  - GPS tracker communication
  - vehicle tracking protocol
  - cold chain asset tracking
  - QuecLink @Track
  - LTE Cat M1 tracker
---

# QuecLink - GL521MG Protocol

This page describes the public protocol context for using the QuecLink GL521MG tracker with Plaspy. It focuses on how the device communicates with Plaspy, the connection settings you will use to point the device to Plaspy, and practical compatibility considerations without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available commands can vary by firmware version, hardware revision, and manufacturer implementation, so this document explains the general communication context and integration guidance while encouraging verification against manufacturer documentation.

## Protocol Overview

The GL521MG transmits periodic position and sensor telemetry to a remote server using QuecLink's public reporting options. When integration is configured for Plaspy, the device sends standard telemetry that Plaspy ingests for real time tracking, alarms, and historical reporting. This page explains the role of the reporting protocol at a high level rather than revealing internal packet formats.

- Enables the tracker to identify itself and send GNSS position, battery, motion, and sensor readings to Plaspy.
- Carries alarm and event reports such as geofence triggers, tamper or motion alerts, and low battery notifications.
- Supports multiple transports so the device can use the best available network link for the deployment scenario.
- Provides structured telemetry that Plaspy maps into dashboards, alerts, and historical traces.
- Allows configurable reporting modes and scheduled reports to balance battery life and responsiveness.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections and telemetry at a single shared endpoint and port and automatically determines the tracker protocol used by the device. In most cases you do not need to manually select a protocol in Plaspy as long as the GL521MG is configured to report to the Plaspy connection settings.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 and can be used where DNS is not available.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol once a properly formatted report reaches the platform.
- If the device is configured to report to Plaspy and the transport is reachable, manual protocol selection is usually not required.

## Transport and Connection Context

The GL521MG supports multiple transport options for reporting and can be configured to use the transport that best matches the deployment and network availability. Plaspy accepts both major transport types on its shared port so the stationing of the device and carrier accessibility determine the best setup.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com as the reporting host or use the Plaspy server IP 54.85.159.138 in environments where DNS is restricted.
- All devices in Plaspy use the same port which simplifies fleet configuration and provisioning.
- Choose UDP for lower overhead reporting where network reliability is acceptable, or TCP when a connection-oriented transport is preferred by the device or carrier.
- Ensure APN and cellular settings on the GL521MG are provisioned so the device can reach the Plaspy endpoint from its network.

## Protocol Compatibility Notes

- QuecLink @Track support in the GL521MG provides common reporting that Plaspy can ingest, but specific command availability can depend on firmware build.
- Firmware updates or hardware revisions may change behavior, message frequency options, or supported alarm types; validate behavior after upgrades.
- Some deployments may prefer TCP or UDP based on carrier NAT and firewall behavior; test the chosen transport in your network environment.
- SMS fallback is supported by the device for limited reporting or configuration in environments without data coverage, though platform ingestion differs from IP transport.
- Validate sensor calibration and reported units for temperature, light, and accelerometer events with the manufacturer documentation when precise thresholds matter.
- Before large rollouts, run a small pilot to confirm that the device reports expected fields and alarms to Plaspy under real operational conditions.

## Why Protocol Understanding Matters

A clear grasp of the communication protocol helps ensure reliable device setup, quicker troubleshooting, and predictable long term behavior when the GL521MG is used with Plaspy. Understanding what the tracker sends and how Plaspy receives it reduces integration time and supports operational continuity.

- Simplifies initial provisioning by aligning device reporting settings with Plaspy connection details.
- Speeds troubleshooting by clarifying whether transport, APN, or device configuration is the cause of missing telemetry.
- Helps choose the right transport mode for battery life and network reliability trade offs.
- Ensures alarm and sensor thresholds are mapped correctly into Plaspy to avoid false positives or missed events.
- Reduces deployment risk by highlighting the need to confirm firmware specific behaviors before fleet scale rollout.

## Why Use Plaspy with This Protocol

Using the GL521MG with Plaspy gives organizations a practical path to collect location and environmental telemetry from a rugged, long standby tracker. The native support for QuecLink reporting over TCP, UDP, and SMS combined with Plaspy's automatic protocol detection makes it straightforward to ingest GNSS, temperature, motion, and alarm data into a single platform for monitoring and reporting.

To learn more about how Plaspy handles device connectivity and to review platform features, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and full manufacturer documentation confirm current information at https://www.queclink.com/.
