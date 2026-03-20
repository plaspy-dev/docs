---
slug: /stars_nav/bts_100/protocol
id: bts_100-protocol
sidebar_label: Protocol
title: Stars Nav - BTS-100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Stars Nav BTS-100 integration with Plaspy real time tracking
keywords:
  - Stars Nav BTS-100 protocol
  - Stars Nav BTS-100 GPS protocol
  - BTS-100 communication protocol
  - BTS-100 tracking protocol
  - Stars Nav GPS tracker protocol
  - Plaspy device compatibility
  - Plaspy tracker protocol
  - Bluetooth SPP GPS streaming
  - GPS POI reminder protocol
  - Fleet tracking BTS-100
---

# Stars Nav - BTS-100 Protocol

This page describes the public protocol context for using the Stars Nav BTS-100 with Plaspy. It summarizes how the BTS-100 supplies position and basic telemetry to Plaspy compatible systems, the role of Bluetooth SPP streaming in local deployments, and how that local stream is commonly integrated into Plaspy workflows without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly pointed to the Plaspy endpoint. Exact behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on the public communication context needed for successful integration and troubleshooting rather than low level proprietary formats.

## Protocol Overview

The BTS-100 is a compact in vehicle GNSS receiver that streams NMEA like position and time information over Bluetooth Serial Port Profile to host devices. For Plaspy integration the BTS-100 typically provides longitude, latitude, speed, and UTC time which are then relayed into Plaspy for mapping, alerts, and reporting. This overview explains the protocol role in practical terms without describing proprietary framing or parser internals.

- Supplies continuous position and speed updates for real time ingestion by a Plaspy enabled gateway or paired host.
- Uses a standard Bluetooth SPP serial stream to deliver NMEA like sentences that host devices can read and forward.
- Enables local POI driven audible and LED alerts on the device while Plaspy retains historical telemetry and fleet level views.
- Supports configurable trace intervals so the frequency of updates to Plaspy can be tuned for real time or periodic reporting.
- Acts as a modular GPS source that Plaspy can combine with other vehicle sensors to create richer telematics records.

## How Plaspy Detects the Protocol

Plaspy receives tracker data at a single shared endpoint and automatically detects the protocol used by a reporting device. When a BTS-100 is paired to a gateway or host that forwards its Bluetooth SPP stream to Plaspy, the platform identifies the incoming protocol without requiring manual selection in most cases. This automatic detection simplifies onboarding for integrators and fleet teams.

- Plaspy listens on a shared server endpoint so devices forwarding data to Plaspy do not require different ports for each model.
- When the device is configured to report to the Plaspy endpoint, protocol detection is automatic and typically requires no manual protocol selection.
- Detection works for multiple reporting transports so gateways that accept Bluetooth SPP locally and forward data to Plaspy will be recognized.
- If a device is not being detected, verifying that the host or gateway is forwarding the BTS-100 stream to the Plaspy endpoint is the first troubleshooting step.
- Plaspy maintains a common port configuration for all devices which reduces setup complexity for deployments with mixed device models.

## Transport and Connection Context

The BTS-100 itself streams over Bluetooth SPP to a paired host. In a Plaspy deployment that host or gateway normally forwards location updates to Plaspy using the network transport supported by that host. Plaspy accepts device reports at a single domain and IP on a single port so integrators only need to ensure proper forwarding from the paired device or gateway.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for device reports and all devices supported by Plaspy use the same port.
- Devices and gateways may be configured to forward tracker data using either UDP or TCP on port 8888 depending on device support and network configuration.
- The BTS-100 delivers data locally over Bluetooth SPP and requires a host or gateway to relay that stream to Plaspy for centralized tracking.
- Ensure the forwarding host is configured to reach d.plaspy.com or 54.85.159.138 on port 8888 to allow reliable delivery to Plaspy.

## Protocol Compatibility Notes

- Firmware revision differences can change how the BTS-100 formats or timestamps NMEA like output; always verify behavior on the exact firmware you are using.
- Hardware revisions and optional flash configurations for POI storage may alter device capabilities or settings exposed via the PC utility.
- Manufacturer side configuration tools or default settings may affect how the device pairs to hosts and how trace intervals are reported to a gateway.
- Choosing UDP versus TCP for forwarding to Plaspy can affect delivery characteristics under varying network conditions.
- Confirm that the paired host or gateway supports Bluetooth SPP input and is capable of forwarding that stream to Plaspy on port 8888.
- Validate expected behavior against official Stars Nav documentation and any release notes for the BTS-100 you have in hand.

## Why Protocol Understanding Matters

Understanding the BTS-100 communication context helps with setup, reliable operations, and effective troubleshooting when integrating with Plaspy. Knowing the roles of Bluetooth SPP, the forwarding host, and the Plaspy endpoint reduces configuration time and helps isolate where issues occur between the device and the cloud.

- Helps ensure a paired host or gateway is correctly forwarding the BTS-100 stream to the Plaspy endpoint.
- Clarifies expectations for update frequency so trace intervals sent locally align with the reporting cadence needed in Plaspy.
- Makes firmware and configuration differences easier to diagnose when telemetry is missing or timestamps do not match server records.
- Supports planning for network behavior by choosing an appropriate transport to forward data to Plaspy on port 8888.
- Reduces integration friction by setting clear responsibilities for local POI handling versus centralized Plaspy processing.

## Why Use Plaspy with This Protocol

Using the BTS-100 as a GPS source with Plaspy provides a lightweight, practical solution for organizations that need reliable location visibility and driver awareness features. The BTS-100 delivers local POI alerts and steady position streaming while Plaspy provides centralized map visualization, historical telemetry retention, and fleet management workflows that complement the device features.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific information on the official Stars Nav website at http://www.starsnav.com/ before finalizing deployment plans.
