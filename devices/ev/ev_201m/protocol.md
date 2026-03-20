---
slug: /ev/ev_201m/protocol
id: ev_201m-protocol
sidebar_label: Protocol
title: EV - EV-201M Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the EV EV-201M GPS tracker and how it communicates with Plaspy for pet tracking and telemetry
keywords:
  - EV EV-201M protocol
  - EV-201M GPS protocol
  - EV-201M tracking protocol
  - EV-201M Plaspy compatibility
  - Plaspy tracker protocol
  - GPS tracker EV-201M
  - EV pet tracker protocol
  - LTE-M NB IoT tracker protocol
  - EV tracker communication
  - EV-201M telemetry protocol
---

# EV - EV-201M Protocol

This page describes the public protocol context for using the EV-201M tracker with the Plaspy platform. It focuses on how the device communicates location, telemetry, and events to Plaspy in general, non-sensitive terms so integrators and technical users can understand what to expect when configuring and connecting the tracker.

The EV-201M is a compact 4G LTE-M / NB GPS tracker designed for pet tracking with IP67 waterproofing, an 800 mAh battery, BLE assisted features, and live tracking down to 10 second intervals outdoors when enabled. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker protocol is the device's method for packaging GNSS positions, telemetry and events and delivering them to a cloud endpoint where Plaspy ingests and presents the data. Public protocol context helps explain what kinds of data are transmitted, how the device identifies itself, and what behaviors Plaspy expects for reliable reporting.

- Transmits GNSS fixes and position timestamps to Plaspy so locations can be mapped and history maintained.
- Reports device telemetry such as battery level, movement or activity events, and BLE status for richer monitoring.
- Delivers event notifications like manual location requests from the device button and geo-fence triggers to Plaspy.
- Allows configurable reporting intervals and live tracking modes that affect how often position updates are sent.
- Enables Plaspy to correlate device identity with incoming data so location and alerts appear under the correct tracker in the platform.

## How Plaspy Detects the Protocol

Plaspy accepts tracker connections on a single shared endpoint and port and automatically detects the device protocol when data arrives. In most cases, users do not need to select a protocol inside Plaspy if the EV-201M is configured to report to the Plaspy endpoint with the correct transport settings.

- Plaspy’s public endpoint for tracker reporting is d.plaspy.com and the equivalent server IP is 54.85.159.138.
- Plaspy listens for device traffic on port 8888 and all devices supported by Plaspy use this same port.
- Plaspy automatically detects the tracker protocol when the device sends reporting data to the platform.
- If the EV-201M is configured to point to d.plaspy.com or 54.85.159.138 on port 8888, devices typically appear in Plaspy without manual protocol selection.
- Proper device identification and consistent telemetry improve automatic detection and mapping within Plaspy.

## Transport and Connection Context

Connection transport determines how the EV-201M delivers data to Plaspy over the cellular network. The EV-201M may be configured to use either UDP or TCP depending on module support and device configuration; both transports are supported when reporting to Plaspy’s shared port.

- Devices may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Trackers can point to the domain d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- The same port 8888 is used by all devices in Plaspy, simplifying configuration across models.
- Transport choice (UDP vs TCP) can affect delivery characteristics such as retransmission and latency but is determined by device firmware and settings.
- Cellular connectivity and APN configuration on the SIM/profile remain important to ensure the tracker can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior and available telemetry fields; always check the device firmware level during integration.
- Hardware revisions and regional variants may alter supported cellular bands or BLE functionality that indirectly affect reporting.
- Manufacturer-side settings or provisioning tools may require the device to be configured to send to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy ingestion.
- Transport selection (UDP versus TCP) depends on device support and should match the device configuration used to reach Plaspy.
- BLE assisted features and activity timelines may be transmitted as auxiliary telemetry and can vary by firmware.
- Validate compatibility and latest behavior using the manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth setup, reliable reporting, and faster troubleshooting for EV-201M trackers used with Plaspy. Knowing what the tracker sends and how it connects reduces guesswork when events or telemetry do not appear as expected.

- Facilitates correct device configuration to point to d.plaspy.com or 54.85.159.138 on port 8888 using the preferred transport.
- Helps diagnose connectivity issues by confirming whether the device is reaching the Plaspy endpoint and using the expected transport.
- Enables tuning of reporting intervals and live tracking settings to balance battery life and timeliness of updates.
- Improves interpretation of telemetry such as battery and BLE events when reviewing device behavior in Plaspy.
- Supports planning for firmware update impacts, hardware revisions, and mixed device deployments.

## Why Use Plaspy with This Protocol

Using the EV-201M with Plaspy provides pet owners and organizations a unified view of location, telemetry, and alerts alongside other assets. Plaspy consolidates live tracking, geo-fence notifications, and activity history from the EV-201M so users can monitor pets in real time and analyze location history and activity timelines.

To learn more about how Plaspy works with compatible trackers and to confirm device setup and best practices, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance for the EV-201M, please verify information with the manufacturer at http://www.eviewltd.com/ as protocol support and firmware behavior can change over time.
