---
slug: /wp/ot_10/protocol
id: ot_10-protocol
sidebar_label: Protocol
title: WP - OT-10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the WP OT 10 tracker showing how it communicates with Plaspy using shared connection settings
keywords:
  - WP OT 10 protocol
  - OT 10 GPS tracker
  - WP OT 10 communication
  - OT 10 Plaspy compatibility
  - vehicle tracking protocol
  - OBDII GPS tracker protocol
  - GPS GLONASS tracker protocol
  - GPRS UDP TCP tracker
  - fleet tracking compatibility
  - device reporting protocol
---

# WP - OT-10 Protocol

This page describes the public protocol context for using the WP OT-10 tracker with Plaspy. It focuses on how the device communicates in general terms, the transport options it supports, and the role of the reporting protocol in delivering location, event, and diagnostic data to Plaspy. The OT-10 is an OBDII style GPS and GLONASS tracker that supports CS Data, SMS, and GPRS UDP/TCP reporting and is designed for quick installation and reliable fleet use.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior for the OT-10 can vary by firmware release, hardware revision, and manufacturer implementation, so this page provides public and non sensitive guidance while recommending verification against the manufacturer documentation for firmware specific details.

## Protocol Overview

The tracker reporting protocol defines how the OT-10 transmits identification, position, status, and event information from the vehicle to a remote server. For Plaspy integration the protocol's role is to ensure messages are delivered in a form that Plaspy can interpret and map to vehicle records, alerts, and location history without exposing low level packet details.

- Enables the OT-10 to send periodic and event driven location updates to a server endpoint.
- Carries device identity and status so Plaspy can associate incoming messages with the correct asset.
- Encodes configurable event reports such as geofence breaches, towing, idle, speeding, and power alerts.
- Supports remote device configuration and over the air updates when the device and manufacturer firmware permit.
- Works over common mobile data transports so messages reach Plaspy reliably from cellular networks.

## How Plaspy Detects the Protocol

Plaspy operates a unified reporting endpoint that receives tracker messages and determines the appropriate handling based on the incoming device data. In most cases a properly configured OT-10 will begin reporting to the Plaspy endpoint and the platform will detect the tracker protocol automatically, so manual protocol selection is not required within Plaspy.

- Plaspy uses a single endpoint for device reporting which simplifies device configuration.
- The Plaspy server domain is d.plaspy.com and the known server IP is 54.85.159.138.
- All devices in Plaspy use the same port which reduces configuration mistakes.
- When an OT-10 reports to the Plaspy endpoint Plaspy will automatically detect and apply the correct protocol handling.
- Users typically only need to configure the device to report to the Plaspy endpoint and confirm transport settings.

## Transport and Connection Context

The OT-10 can communicate over GPRS using UDP or TCP depending on the device settings and firmware support. For Plaspy the connection context is simple and consistent: devices should be pointed at the Plaspy endpoint using the shared port and either UDP or TCP as supported by the device.

- The device may be configured using UDP or TCP on port 8888 depending on device support and network considerations.
- Plaspy accepts OT-10 reports directed to d.plaspy.com or the server IP 54.85.159.138.
- All Plaspy supported devices share the same port which simplifies fleet wide configuration.
- Choose UDP for lower latency reporting where reliability is acceptable, or TCP where guaranteed delivery is preferred and supported by the tracker.
- Verify that the OT-10 firmware and operator APN settings allow outbound GPRS connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported events, and configuration commands; confirm the OT-10 firmware version before assuming behavior.
- Hardware revisions or optional configurations such as external battery or OBDII connectivity can alter available telemetry and reporting options.
- The device supports CS Data, SMS, and GPRS UDP/TCP; ensure the chosen transport is enabled and tested for your deployment.
- Over the air configuration and firmware upgrades are supported by the device when provided by the manufacturer, but availability depends on firmware and server settings.
- Network and operator settings including APN and data availability affect device reachability and should be validated during setup.
- Always cross check manufacturer release notes and configuration guides to confirm which events and fields are present in your device firmware.

## Why Protocol Understanding Matters

Understanding how the OT-10 communicates helps with successful setup, reliable operation, and faster troubleshooting when devices do not behave as expected. Awareness of the protocol capabilities and transport options also supports better planning for coverage, battery management, and event reporting requirements.

- Ensures correct endpoint and transport configuration so devices can reach Plaspy.
- Helps interpret event reporting choices like geofence, towing, or power loss alerts during deployment.
- Reduces time spent diagnosing missing or misattributed messages by knowing what the device is expected to send.
- Supports decisions about using UDP or TCP based on network reliability and reporting needs.
- Aids in planning firmware upgrade windows and validating that new firmware maintains required reporting behavior.

## Why Use Plaspy with This Protocol

Using the WP OT-10 with Plaspy gives organizations a straightforward path to vehicle visibility and event based monitoring. The OT-10’s support for GPS plus GLONASS positioning, configurable reporting events, and OBDII connectivity makes it suitable for fleet tracking, security, and operational oversight, while Plaspy provides the unified server endpoint and detection that simplifies integration across many device models.

To learn more about how Plaspy handles device reporting and to evaluate integration options, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol information and firmware guidance with the manufacturer at http://www.wondeproud.com/.
