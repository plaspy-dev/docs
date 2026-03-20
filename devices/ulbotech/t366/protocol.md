---
slug: /ulbotech/t366/protocol
id: t366-protocol
sidebar_label: Protocol
title: Ulbotech - T366 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Ulbotech T366 GPS tracker and Plaspy compatibility for reliable vehicle telemetry and tracking
keywords:
  - ulbotech t366
  - ulbotech t366 protocol
  - ulbotech t366 gps protocol
  - t366 gps tracker
  - t366 protocol plaspy
  - ulbotech gps tracker
  - obd gps protocol
  - vehicle tracking protocol
  - plaspy device compatibility
  - fleet tracking t366
---

# Ulbotech - T366 Protocol

This page provides the public protocol context for integrating the Ulbotech T366 OBD GPS tracker with the Plaspy platform. It explains how the tracker communicates in general terms, what connection settings Plaspy expects, and which aspects of device behavior are relevant to successful deployment without exposing firmware internals or private parser details. The T366 is an enhanced OBD tracker with GNSS, Wi Fi and GSM radios, OBD and CAN telemetry, and an integrated immobilizer that is designed for Plaspy compatible fleet monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so real world behavior may differ between units and over time. Plaspy accepts connections to its public endpoint and port for ingestion while handling protocol detection centrally to simplify device setup.

## Protocol Overview

The communication protocol used by an OBD tracker like the T366 defines how the device reports GNSS positions, OBD and CAN telemetry, and event alerts to a server. For Plaspy integration, the protocol must enable reliable delivery of location and vehicle data, support basic device identification, and allow for event and remote command workflows in a way the platform can interpret for mapping and alerting.

- Enables periodic and event driven transmission of GNSS positions, OBD and CAN telemetry, and status events to a remote server.
- Carries identifiers that let Plaspy associate incoming reports with a specific device and account.
- Supports multiple transport modes so the device can report over cellular data or Wi Fi as connectivity permits.
- Encodes telemetry and event types in a way that Plaspy can map to vehicle state, alerts, and historical records.
- Allows remote configuration and firmware management signaling when supported by the device and manufacturer.

## How Plaspy Detects the Protocol

Plaspy centralizes device ingestion so that most supported trackers can be pointed at a common endpoint and port and do not require manual protocol selection inside the platform. When a properly configured T366 reports to the Plaspy endpoint, Plaspy identifies the tracker data stream and assigns it to the correct device profile so telemetry appears in the platform with minimal user configuration.

- Plaspy exposes a shared ingestion endpoint d.plaspy.com and an IP address 54.85.159.138 for device reporting.
- All devices configured for Plaspy use the same port number 8888 for data reporting.
- Plaspy automatically detects the tracker protocol when the device connects to the shared endpoint and port.
- In most cases the user only needs to set the device to report to d.plaspy.com or 54.85.159.138 on port 8888 and choose the transport type supported by the device.
- Manual protocol selection inside Plaspy is typically unnecessary when the device is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

The T366 supports multiple transports and can switch between Wi Fi and GPRS to preserve continuous reporting while optimizing data use. For Plaspy deployments the important connection context is which endpoint and transport the device is sending to, and how the device is configured for fallback between networks.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138 depending on installer preference.
- The T366 may use UDP or TCP on port 8888 for reporting depending on device configuration and network conditions.
- Plaspy accepts both UDP and TCP on port 8888 so devices can use the transport best suited to connectivity and data requirements.
- Using the shared port simplifies provisioning because all Plaspy devices use port 8888 for ingestion.
- Ensure APN and cellular settings on the device are correct so GPRS reporting can reach the Plaspy endpoint, and verify Wi Fi settings when Wi Fi reporting is desired.

## Protocol Compatibility Notes

- Firmware revisions can change how a device implements reporting intervals, event triggers, or optional fields; always confirm behavior for the specific firmware installed.
- Hardware revisions or optional modules such as Wi Fi or additional sensors can alter available telemetry and transport behavior.
- Manufacturer configuration menus may expose transport, server, and reporting options; use those settings to point the device to d.plaspy.com or 54.85.159.138 on port 8888.
- Some installation environments or vehicle wiring variations can affect OBD and CAN data availability; validate expected signals during commissioning.
- Transport choice between UDP and TCP affects delivery semantics; pick the transport your deployment and device support best and ensure the device is set accordingly.
- Validate remote control features such as the immobilizer or engine cut configuration with up to date manufacturer guidance before enabling in production.

## Why Protocol Understanding Matters

Understanding how the T366 communicates with Plaspy helps ensure reliable reporting, accurate telemetry mapping, and efficient troubleshooting during deployment and operations. Clear knowledge of transport, identification fields, and firmware variability reduces integration time and helps maintain data quality over the life of the device.

- Ensures correct device provisioning so data arrives at Plaspy with proper device association.
- Helps troubleshoot connectivity issues by confirming transport, endpoint, and APN settings.
- Allows predictable handling of event types and telemetry fields so alerts and reports are accurate.
- Supports planning for firmware updates or remote management workflows that rely on stable reporting.
- Reduces integration time by aligning device settings with Plaspy ingestion expectations.

## Why Use Plaspy with This Protocol

Using the Ulbotech T366 with Plaspy provides fleet operators and service providers with a compact, plug in OBD solution that delivers GNSS accuracy, rich OBD and CAN telemetry, and remote immobilization capabilities. Plaspy ingests the tracker data for live location, historical playback, alerts, and fleet analytics so organizations can monitor vehicle health, safety events, and asset security from a single platform.

If you want to learn more about how Plaspy handles device ingest and fleet telemetry, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol and firmware information on the official manufacturer site at http://www.ulbotech.com/ before large scale deployment.
