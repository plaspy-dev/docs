---
slug: /gotop/d10/protocol
id: d10-protocol
sidebar_label: Protocol
title: GOTOP - D10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the GOTOP D10 GPS tracker and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - GOTOP D10 protocol
  - GOTOP D10 GPS protocol
  - GOTOP D10 communication protocol
  - GOTOP D10 tracking protocol
  - GOTOP GPS protocol
  - GOTOP D10 Plaspy compatibility
  - D10 GPS tracker protocol
  - vehicle tracking GOTOP D10
  - fleet tracking D10 protocol
  - tracker protocol Plaspy
---

# GOTOP - D10 Protocol

This page provides a public protocol overview for the GOTOP D10 GPS tracker and how it communicates with the Plaspy platform. It summarizes the role of the device reporting protocol in sending location, alarm events, and basic telemetry from the compact D10 tracker to a backend system, while avoiding sensitive implementation details. The D10 uses hybrid positioning (GPS, BeiDou BD, WiFi, and LBS) and cellular connectivity to deliver the events and location data that Plaspy ingests for dashboards and alerts.

Plaspy accepts data from compatible devices using shared connection settings across supported models and automatically detects the tracker protocol when devices are properly configured to report to the Plaspy endpoint. The D10 may behave differently across firmware versions, hardware revisions, and manufacturer configuration options, so observed message timing, optional fields, and available alarms can vary between units and firmware builds.

## Protocol Overview

At a high level, the device protocol is the on‑device reporting method the D10 uses to identify itself and to transmit positional and event data to a backend service. The protocol ensures that Plaspy receives enough context to map an incoming connection to a device and to translate telemetry into meaningful dashboard events.

- Enables the D10 to report GPS/BeiDou position fixes plus WiFi and LBS assisted location to Plaspy.
- Carries alarm and status events such as ignition, vibration, geofence, power failure, and low battery to the backend.
- Associates device identity (IMEI or similar device identifier) with incoming telemetry so Plaspy can attribute data to the correct asset.
- Provides periodic reporting and event driven messages that allow Plaspy to build location history and trigger alerts.
- Allows basic remote control interactions when supported by the device and permitted by operational policies, for example relay control for immobilizer features.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections at a unified ingest endpoint and automatically identifies the tracker protocol used by the device. In most installations the user does not need to manually select a protocol inside Plaspy provided the device is configured to report to the Plaspy endpoint and uses the supported transport settings.

- Plaspy listens on a single standard port for device connections and automatically detects protocol behavior from the incoming session.
- The Plaspy server domain for device reporting is d.plaspy.com and the server IP address is 54.85.159.138.
- Devices may be configured to use UDP or TCP toward the Plaspy ingest endpoint depending on device support and operator preference.
- All devices connected to Plaspy use the same port to simplify device configuration and ingestion.
- If a device is set to report to the Plaspy endpoint and uses the supported transport, Plaspy will generally recognize the device protocol without manual protocol selection.

## Transport and Connection Context

Transport refers to how the D10 carries its protocol data over the cellular network to Plaspy. The D10 supports standard cellular uplink for telemetry and offers flexible server configuration on the device so it can be pointed at Plaspy’s endpoint or an alternate backend for redundancy.

- The D10 can be configured to send data to d.plaspy.com or directly to 54.85.159.138 based on installer preference.
- The device may use UDP or TCP on port 8888 depending on the device configuration and network conditions.
- Plaspy uses port 8888 for all supported devices so installers can apply a consistent outbound configuration across mixed fleets.
- When configuring the D10, verify whether the device firmware expects UDP or TCP reporting and set the device accordingly for reliable delivery.
- Dual server or backup server fields on the D10 can be used for redundancy while still pointing primary reporting to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware differences across D10 units can change message frequency, available event types, and optional telemetry fields.
- Hardware revisions or regional variants may introduce minor differences in how certain alarms or peripheral inputs are reported.
- Transport selection (UDP versus TCP) affects delivery semantics; choose the transport that aligns with the device firmware and network reliability goals.
- Manufacturer dual server settings may be used to provide a backup endpoint but ensure the primary server points to Plaspy when integration is required.
- Verify which alarms and optional accessories (SOS button, relay, microphone) are enabled by default in the device firmware you have on hand.
- Always cross reference device behavior against the official GOTOP documentation for firmware specific notes and change logs.

## Why Protocol Understanding Matters

Understanding the D10’s communication protocol helps installers and operators achieve reliable device onboarding, accurate event reporting, and predictable long term operation with Plaspy. Clear knowledge about reporting intervals, supported alarms, and transport options reduces integration friction and accelerates troubleshooting.

- Ensures correct device server and transport settings so devices reach Plaspy successfully.
- Helps map incoming telemetry to the expected dashboard fields and alert rules in Plaspy.
- Reduces time to diagnose connectivity or reporting gaps by knowing what events the device should emit.
- Supports informed decisions about firmware updates, configuration changes, and accessory enablement.
- Aids in planning for redundancy and operational policies by understanding dual server and backup reporting behavior.

## Why Use Plaspy with This Protocol

Using the GOTOP D10 with Plaspy provides a compact tracking solution that integrates positional fixes, alarm events, and basic telemetry into a single management platform. For small vehicle fleets, scooters, and covert asset protection, the combined D10 hardware and Plaspy software allow operators to monitor live location, receive event alerts, and review history across mixed fleets with consistent backend handling.

If you want to learn more about how Plaspy handles device ingestion, features, and operational dashboards, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol information and firmware notes on the manufacturer website at https://www.gotop.cc/.
