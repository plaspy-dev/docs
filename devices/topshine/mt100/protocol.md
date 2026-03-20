---
slug: /topshine/mt100/protocol
id: mt100-protocol
sidebar_label: Protocol
title: TopShine - MT100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for TopShine MT100 GPS tracker integration with Plaspy including connection settings and compatibility guidance
keywords:
  - TopShine MT100 protocol
  - TopShine MT100 GPS protocol
  - TopShine MT100 protocol for Plaspy
  - TopShine MT100 communication protocol
  - TopShine MT100 tracking protocol
  - MT100 driver identification
  - MT100 fleet tracking
  - Plaspy tracker compatibility
  - vehicle GPS protocol
  - fleet management GPS protocol
---

# TopShine - MT100 Protocol

This page summarizes the publicly shareable protocol context for using the TopShine MT100 GPS tracker with Plaspy. It explains how the device communicates with Plaspy in general terms, what connection settings are used for reporting, and what to check when verifying compatibility. The goal is to clarify the role of the tracker reporting protocol without exposing device internals.

The MT100 is a 4G vehicle tracker with driver identification and event logging features. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For device specific commands and low level details consult the manufacturer documentation.

## Protocol Overview

The MT100 reporting protocol is the set of rules and message behavior that allows the tracker to send position, telemetry, and driver ID events to a remote server. In the context of Plaspy, the protocol's role is to enable reliable transmission of location and event data that the platform can ingest, interpret, and present to fleet managers.

- Enables periodic and event driven position updates from the MT100 to Plaspy for live tracking and history.
- Carries driver identification events from RFID iButton or fingerprint readers so Plaspy can associate trips with individuals.
- Transmits alarms and sensor events such as SOS, power cut, door open, ignition state, and immobilizer actions for platform alerts.
- Provides telemetry for mileage, running time, and optional sensor data that Plaspy uses for reporting and analytics.
- Acts as the bridge between device hardware behavior and Plaspy services so fleet rules and notifications can be applied.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a common endpoint and automatically detects which tracker protocol is in use. In most cases a properly configured MT100 will begin sending reports to Plaspy without manual protocol selection inside the platform.

- Plaspy listens on a single shared server endpoint and port for all supported trackers and determines the appropriate handling automatically.
- Users typically set the device to report to the Plaspy endpoint and do not need to choose a protocol in the platform when the device is correctly configured.
- Proper device configuration and reporting behavior are the primary factors that let Plaspy recognize and process MT100 messages.
- If reports are not arriving, confirming device settings and network reachability to the Plaspy endpoint is the recommended first step.
- Consult device logs and the manufacturer release notes if behavior differs across firmware or hardware revisions.

## Transport and Connection Context

The MT100 can use standard IP transport methods to send data to Plaspy. Devices may be configured to use either UDP or TCP depending on the unit configuration and network conditions. Plaspy accepts connections to a single server address and port across its supported devices.

- The Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for tracker connections and all devices supported by Plaspy use the same port.
- Devices may be configured to send reports over UDP or TCP on port 8888 depending on device settings.
- Ensure any network firewalls or APN settings allow outbound connections from the MT100 to the Plaspy endpoint on the configured transport.
- Confirm the MT100 is set to report to the Plaspy domain or IP and that SIM network data is active for real time updates.

## Protocol Compatibility Notes

- Firmware variations can change message frequency, available fields, and optional feature behavior between releases.
- Hardware revisions or accessory configurations (for example fingerprint or fuel sensors) can affect which events are present in reports.
- Device transport selection between UDP and TCP should match what the device supports and what the network environment allows.
- Manufacturer side settings such as default reporting server and APN templates may need to be updated to point to the Plaspy endpoint.
- Always verify which features are supported by the specific MT100 unit and firmware when planning integration with Plaspy.
- Test devices in a controlled environment before large scale deployment to confirm expected behavior and reporting cadence.

## Why Protocol Understanding Matters

A practical understanding of how the MT100 communicates helps ensure reliable setup, effective troubleshooting, and predictable long term operation when paired with Plaspy. Knowing what to check and why helps fleet administrators reduce downtime and improve data quality.

- It speeds initial setup by focusing attention on server address, transport selection, and APN configuration.
- It reduces troubleshooting time by making it clear whether a connectivity, configuration, or firmware issue is likely.
- It helps interpret which device events will appear in Plaspy reports and which require additional accessories or configuration.
- It supports informed decisions about firmware upgrades and feature enablement to match operational needs.
- It clarifies expectations for data frequency, latency, and available telemetry in different network conditions.

## Why Use Plaspy with This Protocol

Using the MT100 with Plaspy provides fleets with consolidated visibility into vehicle location, driver identity, and critical events. The combination of MT100 hardware features such as driver identification, immobilizer control, and broad telemetry with Plaspy's ingestion and alerting capability supports operational oversight, safety workflows, and theft prevention measures.

Plaspy accepts MT100 reports on its shared endpoint and port and handles protocol detection automatically, simplifying device onboarding and centralizing data for monitoring and reporting. To learn more about Plaspy and how it works with devices like the TopShine MT100 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time and should be verified against the latest information on the manufacturer site https://www.gztopshine.com/
