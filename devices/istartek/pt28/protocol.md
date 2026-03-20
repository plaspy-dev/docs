---
slug: /istartek/pt28/protocol
id: pt28-protocol
sidebar_label: Protocol
title: iStartek - PT28 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the iStartek PT28 GPS watch and how it communicates with Plaspy for tracking and alerts
keywords:
  - iStartek PT28 protocol
  - PT28 GPS protocol
  - iStartek PT28 Plaspy
  - PT28 communication protocol
  - PT28 tracking protocol
  - iStartek GPS tracker protocol
  - personal GPS tracker protocol
  - GPS watch protocol
  - Plaspy device compatibility
  - Plaspy tracker protocol
---

# iStartek - PT28 Protocol

This page provides a public, non sensitive overview of the communication protocol context for the iStartek PT28 GPS watch when used with the Plaspy platform. It focuses on how the device reports location, events, and telemetry into Plaspy for real time monitoring, alerts, and historical review without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is reporting to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes general protocol roles and connection context rather than device internals.

## Protocol Overview

The PT28's reporting protocol is the means by which the watch sends position fixes, event notices, and telemetry to a remote platform like Plaspy. In practical terms the protocol enables the device to identify itself, transmit usable location and status data, and relay user events such as SOS or two way call alerts so Plaspy can present them to caregivers and operators.

- Carries positional data including multi mode fixes and AGPS assisted updates so Plaspy can display real time location and route history.
- Transmits event information such as SOS alerts, button presses, and telephony events so the platform can generate notifications.
- Sends supplemental telemetry like battery, heart rate, and step counts that Plaspy can store and surface in monitoring dashboards.
- Enables historical track uploads and periodic reporting so stored routes are available for review in Plaspy.
- Provides the device identity and context required for Plaspy to associate incoming data with the correct account and asset record.

## How Plaspy Detects the Protocol

Plaspy accepts connections from a wide range of supported trackers at a single shared endpoint and port, and the platform automatically determines the appropriate protocol handling for incoming device data. In most setups the user does not need to pick a protocol inside Plaspy if the PT28 is configured to report to the Plaspy endpoint correctly.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for device reporting.
- The port is 8888 and Plaspy uses this same port for all supported devices.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network conditions.
- Plaspy automatically detects the tracker protocol once the device is reporting to the Plaspy endpoint.
- When the PT28 reports its identity and regular position updates to the Plaspy endpoint, the platform will associate those messages with the corresponding device record for monitoring and alerts.

## Transport and Connection Context

Connection context describes how the PT28 reaches Plaspy rather than the internal structure of data frames. The watch typically uses cellular connectivity with Wi Fi and LBS as fallbacks to deliver position and event messages to the platform. Transport selection (UDP or TCP) and the server address are configured on the device or via the companion app.

- The device may use UDP or TCP on port 8888 depending on the PT28 firmware and configuration.
- Devices can be pointed to the Plaspy endpoint using the domain d.plaspy.com or the server IP 54.85.159.138.
- All devices in Plaspy use the same port, simplifying server side port configuration and addressing.
- Cellular data is the primary transport with Wi Fi and LBS used as fallback positioning sources rather than separate transport paths.
- Network reliability and chosen transport affect delivery characteristics; TCP provides connection oriented delivery while UDP is connectionless.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields, or optional features. Verify device firmware when assessing compatibility.
- Hardware revisions or region variants may expose different radios, bands, or optional sensors that affect what telemetry is reported.
- Manufacturer server behavior and optional companion app forwarding settings can affect whether the PT28 reports directly to third party platforms or through a manufacturer relay.
- Transport choice (UDP vs TCP) is configurable on many devices; ensure the device is configured to use port 8888 and point to d.plaspy.com or the Plaspy server IP.
- Some personal tracker features such as heart rate, step telemetry, or camera snapshots may be optional or require specific firmware/app settings to forward to Plaspy.
- Always validate device behavior in a controlled setup before wide deployment and consult official documentation for firmware specific details.

## Why Protocol Understanding Matters

Understanding how the PT28 communicates with Plaspy helps ensure reliable setup, predictable behavior, and quicker troubleshooting when things deviate from expectations. A clear grasp of the communication context also improves event mapping and confirms that critical alerts such as SOS are delivered and interpreted correctly by the platform.

- Helps confirm the device is configured to send data to d.plaspy.com or 54.85.159.138 on the required port so Plaspy receives updates.
- Clarifies whether the device is using UDP or TCP which can affect message delivery and retransmission behavior.
- Makes it easier to interpret telemetry fields and event types visible in Plaspy dashboards and reports.
- Aids in diagnosing connectivity issues related to cellular data, APN settings, or firewall rules on the network edge.
- Supports planning for firmware updates and feature rollouts that may change what the device reports to Plaspy.

## Why Use Plaspy with This Protocol

Using the PT28 with Plaspy provides a practical solution for organizations and caregivers that need continuous visibility, event awareness, and historical route data from personal wearable trackers. Plaspy ingests the device's location stream, SOS events, and available telemetry to enable monitoring, alerts, and reporting that support child safety, elderly care, and field personnel oversight.

Plaspy's approach simplifies deployment by using a shared endpoint and port and by automatically detecting the tracker protocol when a device reports to the platform. To learn more about how Plaspy can work with the PT28 and other devices visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol and firmware information with the manufacturer at https://istartek.com/ before finalizing deployments.
