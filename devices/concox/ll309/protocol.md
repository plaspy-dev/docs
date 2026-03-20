---
slug: /concox/ll309/protocol
id: ll309-protocol
sidebar_label: Protocol
title: Concox - LL309 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for using Concox LL309 with Plaspy for GPS and environmental telemetry
keywords:
  - Concox LL309
  - LL309 protocol
  - Concox LL309 GPS tracker
  - LL309 communication
  - LL309 Plaspy compatibility
  - Concox GPS protocol
  - LL309 tracking protocol
  - cold chain tracker protocol
  - environmental telemetry tracker
  - Plaspy device integration
---

# Concox - LL309 Protocol

This page describes the public protocol context for using the Concox LL309 tracker with Plaspy. It focuses on how the device reports location and environmental telemetry to Plaspy rather than on low level packet layouts. The LL309 is a compact refrigerated cargo and parcel tracker with built in temperature and humidity sensing, LTE Cat.1 uplink, and offline caching, and this page explains how that telemetry is carried to the Plaspy platform in general terms.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. The LL309 may behave differently across firmware versions, hardware revisions, and manufacturer implementations, so the public context here explains transport and integration expectations while encouraging verification against the device firmware and manufacturer documentation.

## Protocol Overview

The LL309 communication protocol enables the tracker to identify itself, transmit GNSS coordinates, and send environmental telemetry and event states to a remote server. On a high level, the protocol defines the messages and event reports the device sends, how those messages are transported to Plaspy, and which fields carry telemetry and status information that Plaspy consumes for dashboards and rules.

- Enables the LL309 to report GNSS derived location and multi sensor telemetry such as temperature, humidity, tamper and battery status to Plaspy.
- Carries periodic position updates and event driven alerts so Plaspy can trigger notifications and rules for cold chain and anti theft workflows.
- Includes mechanisms for buffering and later upload so cached records are retained during offline periods and delivered when connectivity is restored.
- Supports both real time streaming and batch upload behavior depending on device configuration and network conditions.
- Works with Plaspy as the receiver of telemetry where the platform maps incoming fields to tracking, sensor and event items in the fleet view.

## How Plaspy Detects the Protocol

Plaspy receives telemetry on a single shared endpoint and port and performs automatic protocol identification for devices that are correctly configured to report to Plaspy. When an LL309 is pointed at the Plaspy endpoint and begins reporting, the platform will match the incoming data to a supported parsing routine so manual protocol selection is typically not required.

- Plaspy listens for inbound device connections and reports at d.plaspy.com and also accepts direct connections to 54.85.159.138.
- All devices supported by Plaspy use the same port, which simplifies device configuration and onboarding.
- Devices can be configured to use UDP or TCP and Plaspy accepts both transports on the shared port.
- If a device is configured to report to the Plaspy endpoint, users normally do not need to manually select a protocol inside Plaspy.
- Plaspy’s automatic detection reduces setup steps but correct device reporting settings are essential for seamless detection.

## Transport and Connection Context

The LL309 may send data over either UDP or TCP depending on its configuration and the cellular network behavior. For Plaspy integration, point the tracker to the Plaspy server address and use the shared port that Plaspy receives on to ensure the device can reach the platform and be automatically detected.

- Devices may be configured to report to d.plaspy.com or to the direct IP 54.85.159.138 for Plaspy ingestion.
- Plaspy accepts both UDP and TCP connections on the same port, which simplifies device-side settings.
- The shared port used by Plaspy is consistent across all supported devices to minimize configuration errors.
- For intermittent coverage scenarios, the LL309 caches records locally and uploads them when the device regains connectivity to the Plaspy endpoint.
- Local BLE, SMS or USB configuration methods on the LL309 are often used to set the Plaspy endpoint and transport selection during commissioning.

## Protocol Compatibility Notes

- Firmware releases can change message timing, fields, or optional telemetry; verify which firmware version is installed on the LL309 for expected behavior.
- Hardware revisions and regional variants may affect which bands, transports, or sensor options are available and how telemetry is encoded.
- Transport selection (UDP versus TCP) is a configuration decision that can affect delivery behavior and should be aligned with network conditions and SIM operator guidance.
- Local configuration via BLE or Type C export is useful to confirm that the device is set to report to d.plaspy.com or the Plaspy IP address and that the correct transport port is used.
- Validate any device specific command or reporting changes against the official Concox documentation when precise message behavior is required.
- Plaspy’s automatic detection works for standard reporting modes but atypical custom firmware or non standard reporting endpoints may require additional validation.

## Why Protocol Understanding Matters

Understanding how the LL309 communicates with Plaspy helps ensure reliable setup, accurate telemetry interpretation, and predictable behavior in production fleets. A practical grasp of the protocol and transport context reduces onboarding time and simplifies troubleshooting when alerts or telemetry appear different than expected.

- Ensures correct device configuration so the LL309 reports to d.plaspy.com or 54.85.159.138 using the shared Plaspy port.
- Helps diagnose connectivity issues by confirming whether the device is using UDP or TCP and whether cached data is being uploaded.
- Allows operators to verify that environmental telemetry fields such as temperature and humidity are arriving and mapping correctly in Plaspy.
- Supports planning for firmware updates, since changes can affect reporting cadence or available telemetry fields.
- Aids integration of alarm workflows by clarifying which events the tracker will send and how Plaspy will consume them.

## Why Use Plaspy with This Protocol

Using the Concox LL309 with Plaspy provides a streamlined path to combine precise location tracking with environmental telemetry for cold chain, parcel delivery, and high value asset protection. Plaspy ingests GNSS data and sensor readings, applies configurable rules and notifications, and preserves event history so operations teams can act on temperature excursions, tamper alerts, and low battery conditions.

Plaspy’s shared endpoint approach means LL309 devices only need to be configured to report to d.plaspy.com or the direct IP 54.85.159.138 on the platform port, and Plaspy will automatically detect the device protocol so you can focus on deployment rather than protocol selection. Learn more about Plaspy at https://www.plaspy.com and verify the latest device and protocol details on the manufacturer site https://www.iconcox.com/. Note that protocol support, firmware behavior, and manufacturer implementation details can change over time so confirm current information with the official Concox documentation.
