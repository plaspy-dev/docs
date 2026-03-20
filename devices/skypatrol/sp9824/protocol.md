---
slug: /skypatrol/sp9824/protocol
id: sp9824-protocol
sidebar_label: Protocol
title: SkyPatrol - SP9824 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for SkyPatrol SP9824 integration with Plaspy for GPS tracking and telemetry
keywords:
  - SkyPatrol SP9824 protocol
  - SP9824 GPS protocol
  - SkyPatrol protocol Plaspy
  - SP9824 communication protocol
  - SP9824 tracking protocol
  - SkyPatrol asset tracker protocol
  - Plaspy device compatibility
  - GPS tracker protocol guide
  - asset tracking protocol SP9824
  - cold chain tracker protocol
---

# SkyPatrol - SP9824 Protocol

This page summarizes the public protocol context for using the SkyPatrol SP9824 tracker with Plaspy. It focuses on how the device communicates telemetry and location to the Plaspy platform in broad, non sensitive terms and explains the role of the reporting protocol in successful integration. The SP9824 is a long life portable asset tracker with onboard light and temperature sensors and tamper detection, and this document describes how those capabilities are conveyed to Plaspy without exposing manufacturer internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, or manufacturer implementation, so this page stays at a high level while outlining the key connection facts you need to configure and troubleshoot the SP9824 for use with Plaspy.

## Protocol Overview

The communication protocol defines how the SP9824 sends location, sensor readings, and alert events to a server such as Plaspy. For an asset tracker like the SP9824 this includes periodic position updates plus environmental and tamper events that Plaspy turns into map positions, notifications, and historical records.

- Carries GNSS location fixes that Plaspy uses to plot assets on live maps and reports
- Transports sensor telemetry such as temperature and light values for condition monitoring
- Signals tamper or movement events so Plaspy can generate alerts and event logs
- Includes device identity and timestamp information so Plaspy can correlate messages with the correct asset
- Enables long term telemetry with power optimized reporting patterns suitable for up to seven years of battery life in field conditions

## How Plaspy Detects the Protocol

Plaspy accepts device connections on a single shared endpoint and port and automatically identifies the tracker protocol when messages arrive. In most cases the user does not need to select a protocol in Plaspy if the SP9824 is configured to report to the Plaspy endpoint using the supported transport and address.

- Plaspy uses a shared server endpoint reachable as d.plaspy.com
- The Plaspy server is also reachable by IP at 54.85.159.138 for direct routing scenarios
- Plaspy listens on a single common port used by all supported devices, simplifying configuration
- When the SP9824 reports to the Plaspy endpoint the platform automatically detects the protocol in use
- Proper device configuration to point at the Plaspy endpoint is typically sufficient for protocol detection

## Transport and Connection Context

Connection context covers the transport protocol and addressing the SP9824 should use to reach Plaspy. The SP9824 may be configured to use either UDP or TCP depending on device support and deployment needs. Use the appropriate transport that your device firmware and connectivity environment support.

- Devices may be configured to report to the domain d.plaspy.com
- Devices may also report directly to the Plaspy server IP 54.85.159.138 where DNS is not used
- The SP9824 can use UDP or TCP on port 8888 depending on device support and configuration
- Plaspy uses the same port 8888 for all devices it supports
- Choose UDP or TCP according to network reliability and device firmware guidance

## Protocol Compatibility Notes

- Firmware versions can change message timing and available telemetry fields; verify behavior for your firmware release
- Hardware revisions or SKU variants may expose different sensor sets or power management options
- Manufacturer configuration tools or provisioning procedures can affect transport selection and server addressing
- In mixed deployments confirm whether devices are set to use UDP or TCP and that network firewalls allow outbound traffic
- Always validate that the SP9824 is configured to point to d.plaspy.com or the Plaspy server IP and the shared port
- When in doubt, consult manufacturer documentation to confirm supported transports and configuration commands

## Why Protocol Understanding Matters

A practical understanding of the SP9824 communication protocol helps ensure reliable onboarding, accurate telemetry, and straightforward troubleshooting when using Plaspy. Knowing what the device sends and how it connects reduces setup time and increases operational confidence.

- Ensures the device is configured to report to the correct Plaspy endpoint and port
- Helps diagnose connectivity issues such as firewall blocking or incorrect transport selection
- Clarifies expected telemetry types so Plaspy dashboards and alert rules are configured correctly
- Supports long term reliability planning by aligning reporting intervals with battery life expectations
- Aids in validating that tamper and sensor events are received and handled by Plaspy

## Why Use Plaspy with This Protocol

Using the SkyPatrol SP9824 with Plaspy gives organizations a low maintenance asset tracking solution that integrates long life battery performance with environmental sensing and tamper detection. Plaspy ingests the SP9824 location and telemetry to provide live maps, notifications for tamper and threshold events, and historical reporting that supports cold chain monitoring, cargo protection, and static asset oversight.

To learn more about how Plaspy handles device integrations and to review platform features, visit https://www.plaspy.com. Protocol support and device firmware behavior can change over time, so please verify the latest device specific protocol and firmware details with the manufacturer at https://www.skypatrol.com/ to ensure the most current compatibility information.
