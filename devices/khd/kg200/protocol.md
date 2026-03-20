---
slug: /khd/kg200/protocol
id: kg200-protocol
sidebar_label: Protocol
title: KHD - KG200 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the KHD KG200 GPS tracker and how it communicates with Plaspy for fleet and asset tracking
keywords:
  - KHD KG200 protocol
  - KHD KG200 GPS tracker
  - KG200 communication protocol
  - KG200 Plaspy compatibility
  - KHD GPS tracker protocol
  - vehicle tracking KG200
  - ship tracking KG200
  - KG200 GPRS communication
  - KG200 GSM tracker
  - Plaspy device compatibility
---

# KHD - KG200 Protocol

This page describes the public protocol context for using the KHD KG200 tracker with Plaspy. It focuses on how the device communicates with a remote backend in general terms, what role the tracker reporting protocol plays in successful integration, and how Plaspy receives data from KG200 devices for fleet and asset tracking.

The KHD KG200 is a GNSS tracker built for vehicle and ship tracking that reports location and status over GSM networks using GPRS or SMS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. This page explains the connection context and practical considerations without exposing private implementation details.

## Protocol Overview

The KG200 communication protocol is the set of rules the tracker uses to send position, status, and event data to a backend server and to receive configuration or command replies. For integration with Plaspy, protocol behavior determines how the device identifies itself, the cadence of reports, and which fields are included in each transmission.

- Enables the tracker to report GNSS positions, timestamps, and status updates to a remote server.
- Carries event notifications such as emergency alerts, geo-fence crossings, and schedule triggers.
- Provides a device identifier and context so the backend can associate incoming data with a specific asset.
- Supports transport over mobile networks so a tracker can reach the Plaspy endpoint from anywhere with cellular coverage.
- Allows remote configuration and acknowledgements when the tracker and backend support two way messaging.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared endpoint and port and uses that connection to identify which tracker protocol is in use. In most cases the KG200 only needs to be pointed at the Plaspy endpoint and the platform will detect the device automatically so manual protocol selection is not required.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- The listening port for Plaspy is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network configuration.
- Plaspy automatically detects the tracker protocol when properly reporting to the Plaspy endpoint.
- When the tracker is configured to report to d.plaspy.com or the IP above on port 8888, Plaspy will process the incoming data and associate it with the correct device record.

## Transport and Connection Context

KG200 devices typically use cellular transport to reach a backend, and the choice of UDP versus TCP affects connection reliability and behavior. For Plaspy integration, the important connection-level details are the server endpoint and the transport type the device is configured to use.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to the domain d.plaspy.com or to the IP address 54.85.159.138 for the Plaspy endpoint.
- All devices in Plaspy use the same port 8888 so no per device port mapping is required.
- GPRS data sessions carry the tracker reports from the KG200 over the mobile network to Plaspy.
- SMS can be an alternative reporting channel for some models or scenarios, but data-forwarding to Plaspy is typically done over GPRS.

## Protocol Compatibility Notes

- Firmware revisions can add, remove, or reorder report fields and supported features; always confirm behavior for your device firmware level.
- Hardware revisions or production variants sometimes change default transport settings or available peripherals.
- Manufacturer configuration tools often allow toggling between UDP and TCP and changing the target server name or IP.
- SMS based reporting and GPRS based reporting behave differently and may require different configuration on the device or backend.
- Plaspy automatically detects protocol when the device reports to the shared endpoint but validating device identification and initial packets is recommended.
- For production deployments validate that the KG200 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 and that the chosen transport is supported by your mobile operator.

## Why Protocol Understanding Matters

Understanding how the KG200 communicates helps administrators set up devices correctly, avoid common configuration mistakes, and troubleshoot connectivity or data quality issues with Plaspy. Clear knowledge of transport choices and manufacturer features reduces deployment time and increases operational reliability.

- Ensures the tracker is pointed at the correct Plaspy endpoint and using the supported transport.
- Helps diagnose dropped messages, intermittent reporting, or incorrect device identification.
- Supports informed choices about report intervals, event triggers, and battery or data usage.
- Makes it easier to test initial device onboarding and confirm that Plaspy is receiving usable location and event data.
- Aids in planning for firmware updates, hardware swaps, or scaling deployments across fleets.

## Why Use Plaspy with This Protocol

Using the KHD KG200 with Plaspy provides a practical path for organizations that need reliable visibility into vehicle and vessel movements. Plaspy’s centralized backend collects and normalizes incoming reports so teams can monitor locations, respond to emergency alerts, and analyze historical movement for operations and safety.

To learn more about Plaspy and how it works with a wide range of trackers including the KG200 visit https://www.plaspy.com. Note that protocol support, firmware behavior, and device implementation details may change over time so please verify the latest device specific protocol information with the manufacturer at http://www.khd.hk.
