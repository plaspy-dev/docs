---
slug: /cityeasy/302/protocol
id: 302-protocol
sidebar_label: Protocol
title: Cityeasy - 302 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Cityeasy 302 and how it communicates with Plaspy for vehicle tracking and alerts
keywords:
  - Cityeasy 302 protocol
  - Cityeasy 302 GPS protocol
  - Cityeasy 302 communication protocol
  - Cityeasy 302 tracking protocol
  - Cityeasy tracker Plaspy
  - Plaspy device compatibility
  - vehicle GPS protocol
  - car tracker protocol
  - LBS GPS tracking
  - IP67 GPS tracker
---

# Cityeasy - 302 Protocol

This page describes the public protocol context for using the Cityeasy 302 GPS tracker with Plaspy. It focuses on how the device communicates in general terms, the connection settings Plaspy expects, and practical considerations that help you get the tracker reporting reliably without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the information here is intended as a high level guide to integration and troubleshooting.

## Protocol Overview

The Cityeasy 302 communicates location, state, and event information to a remote server using the tracker reporting protocol built into the device. At a basic level the protocol defines how the tracker identifies itself, how it reports position and alerts, and how the server acknowledges or records those reports so a platform like Plaspy can present usable tracking data.

- Enables the device to send LBS and GPS based position updates for real time monitoring
- Transmits device alerts such as cut electric, over speed, vibration, geofence, and displacement
- Provides historical route reporting so past trips can be relayed to the platform
- Carries device identification so Plaspy can associate incoming reports with the correct asset
- Uses a network transport that the device can be configured to send to Plaspy for consistent ingestion

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections at a shared endpoint and port and uses automatic protocol detection to identify compatible trackers. In most cases you do not need to select a specific protocol in Plaspy if the Cityeasy 302 is configured to report to the Plaspy server address and port.

- Plaspy server domain for tracker reporting is d.plaspy.com
- Plaspy server public IP is 54.85.159.138
- Plaspy listens on port 8888 for device reports
- Plaspy automatically detects the tracker protocol when data arrives
- If the tracker is correctly pointed to the Plaspy endpoint, manual protocol selection in Plaspy is typically unnecessary

## Transport and Connection Context

Connection settings determine how the Cityeasy 302 reaches Plaspy. The device supports sending reports over standard internet transports and can be configured to reach the Plaspy endpoint by domain name or by IP address depending on network setup and installer preference.

- The tracker may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138 as the reporting destination
- All devices in Plaspy use the same port which simplifies server settings for large deployments
- Choosing UDP versus TCP is a device level option and can affect delivery characteristics depending on the mobile network
- Confirm the device is set to report to the Plaspy endpoint so automatic detection and data ingestion can proceed

## Protocol Compatibility Notes

- Firmware variations can change how the device formats or schedules reports; check firmware release notes when troubleshooting
- Hardware revisions or regional builds may alter supported transport options or default reporting behavior
- Manufacturer side settings and configuration tools can differ; always validate the device reporting destination and transport
- Some device behaviors such as alert thresholds or reporting intervals may be configurable and affect what Plaspy receives
- While Plaspy auto detects the protocol, a correctly configured device reporting to d.plaspy.com or 54.85.159.138 on port 8888 is essential for reliable connectivity
- When in doubt consult the device documentation and distributor resources to confirm compatibility details

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol helps ensure a smooth setup, faster troubleshooting, and reliable long term operation with Plaspy. Knowing which pieces of the communication stack are configurable or likely to vary between units reduces integration time and prevents common reporting issues.

- Helps verify the tracker is pointed to the correct server and port for Plaspy ingestion
- Makes it easier to interpret device alerts such as cut electric, over speed, vibration, geofence, and displacement
- Aids in diagnosing connectivity problems that stem from transport selection or network conditions
- Supports planning for maintenance such as firmware updates that may change reporting behavior
- Improves confidence when validating historical route relay and event accuracy in Plaspy

## Why Use Plaspy with This Protocol

Using the Cityeasy 302 with Plaspy provides a practical way to turn the tracker signals into actionable fleet and asset insights. Plaspy ingests position and event data from devices that report to the shared Plaspy endpoint, and presents that information through the platform to support monitoring, alerts, and historical route analysis.

If you want to learn more about how Plaspy handles device connectivity, reporting, and fleet monitoring visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol information on the manufacturer official website.
