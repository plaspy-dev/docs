---
slug: /gosafe/gtu30/protocol
id: gtu30-protocol
sidebar_label: Protocol
title: Gosafe - GTU30 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Gosafe GTU30 tracker and how it communicates with Plaspy for real time fleet tracking and telemetry
keywords:
  - Gosafe GTU30 protocol
  - Gosafe GTU30 GPS protocol
  - Gosafe GTU30 Plaspy
  - GTU30 tracking protocol
  - Gosafe tracker protocol
  - vehicle tracking GTU30
  - fleet tracking Gosafe
  - Plaspy compatible trackers
  - GPS tracker protocol
  - GTU30 communication
---

# Gosafe - GTU30 Protocol

This page documents the public protocol context for using the Gosafe GTU30 tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in operational terms so fleet managers and integrators can understand the connection and reporting behavior without exposing sensitive implementation details.

The GTU30 is a compact, easy install GPS tracker with LTE CAT1 and 2G cellular connectivity, a 32 channel GNSS receiver, and an onboard accelerometer. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol, while exact behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The communication protocol for the GTU30 governs how the tracker reports GNSS fixes, accelerometer events, status updates, and power state to a backend server such as Plaspy. In practice the protocol enables reliable location updates, event driven alerts, and basic device identification needed for mapping and telemetry.

- Provides a consistent mechanism for the device to report GNSS position, time, and status to a server.
- Carries accelerometer and event driven telemetry used for crash detection and driving behavior reporting.
- Includes basic device identification and status fields so the platform can attribute data to the correct unit.
- Supports periodic and event triggered reporting to minimize data usage while preserving important events.
- Enables platform features such as trip detection, ignition state inference, and power loss alerts when integrated with Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and port and is designed to automatically detect the tracker protocol when a correctly configured device reports. This means a properly configured GTU30 typically does not require manual protocol selection inside Plaspy.

- Plaspy accepts tracker connections on the shared server domain d.plaspy.com.
- The Plaspy server is reachable at IP address 54.85.159.138 for devices that prefer numeric endpoints.
- All devices in Plaspy use the same port to report, which simplifies device configuration and onboarding.
- The listening port used by Plaspy for trackers is 8888.
- Plaspy automatically detects the tracker protocol when a device reports to the endpoint and port above, reducing manual setup steps.

## Transport and Connection Context

GTU30 devices can use different transport modes depending on configuration and cellular support. When integrating with Plaspy, ensure the device is pointed to the Plaspy endpoint and configured for the desired transport so reports arrive reliably.

- The GTU30 may be configured to communicate over UDP or TCP on port 8888 depending on the device configuration.
- Devices can be pointed to the domain d.plaspy.com or the numeric endpoint 54.85.159.138 if DNS is not available.
- All Plaspy supported devices use the same port number 8888 which simplifies fleet wide configuration.
- The GTU30 also supports SMS as a fallback reporting channel in some deployments, but TCP or UDP to the Plaspy endpoint is the primary real time path.
- Transport choice can affect latency and reliability so choose TCP or UDP based on coverage and device firmware capabilities.

## Protocol Compatibility Notes

- Firmware variations can change reporting intervals, enabled telemetry fields, and supported transports so verification on the installed firmware is recommended.
- Hardware revisions may alter available sensors or default configuration; check device labeling and firmware release notes.
- Manufacturer side configuration options can change how the GTU30 authenticates and identifies itself to a backend server.
- Selecting TCP versus UDP in device settings will affect connection behavior and should match your operational requirements.
- Confirm device server address is set to d.plaspy.com or 54.85.159.138 and port 8888 when onboarding.
- Validate any SMS fallback behavior independently since SMS routing is outside the Plaspy IP transport path.
- Consult the official Gosafe documentation for firmware specific behavior that could affect compatibility.

## Why Protocol Understanding Matters

A clear understanding of the GTU30 communication protocol helps ensure correct device setup, reliable telemetry ingestion, and efficient troubleshooting when devices are in the field. Knowing the connection context reduces onboarding time and prevents common misconfigurations.

- Ensures devices are configured to report to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can ingest data.
- Helps diagnose connectivity issues such as incorrect transport selection or DNS resolution problems.
- Clarifies the role of firmware and hardware revisions in available telemetry and reporting patterns.
- Guides decisions about reporting intervals and event thresholds to balance data usage and responsiveness.
- Aids planning for fallback behaviors such as SMS reporting or power loss operation.

## Why Use Plaspy with This Protocol

Using the GTU30 with Plaspy delivers a practical path to real time vehicle visibility, event alerts, and historical playback without complex per device configuration. Plaspy consolidates GNSS positions, accelerometer events, and device state into maps, reports, and alerting that are useful for fleet operations, anti theft workflows, and insurance telematics programs.

Plaspy is designed to accept GTU30 data when the device is pointed at the shared Plaspy endpoint and port. To learn more about how Plaspy can work with the GTU30 and other trackers, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation may change over time so verify the latest device specific details on the manufacturer website https://gosafesystem.com/
