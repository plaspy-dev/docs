---
slug: /cantrack/tk100b/protocol
id: tk100b-protocol
sidebar_label: Protocol
title: CanTrack - TK100B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview and Plaspy compatibility details for the CanTrack TK100B GPS tracker
keywords:
  - CanTrack TK100B protocol
  - CanTrack TK100B GPS protocol
  - CanTrack TK100B Plaspy
  - TK100B communication protocol
  - TK100B tracking protocol
  - CanTrack GPS tracker protocol
  - Plaspy GPS tracker compatibility
  - vehicle tracking TK100B
  - fleet management TK100B
  - TK100B telemetry
---

# CanTrack - TK100B Protocol

This page provides a public protocol overview for using the CanTrack TK100B Accurate Pro with Plaspy. It focuses on the role of the device communication protocol in delivering location, telemetry, and remote control data to Plaspy while keeping the discussion at a general, implementation safe level.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available commands can vary by device firmware, hardware revision, and manufacturer implementation, so this page highlights transport and integration context without exposing firmware internals.

## Protocol Overview

The TK100B reports location and vehicle telemetry over GSM GPRS using TCP IP transport, enabling Plaspy to ingest position, status, and alert events for tracking, alerting, and remote control. The communication protocol defines how the unit identifies itself, how telemetry and alerts are encoded, and how bi directional controls such as relay commands are delivered and logged by a fleet platform.

- Enables periodic and event driven reporting of GNSS position, ignition state, SOS presses, and geo fence events to Plaspy.
- Carries accessory and input status such as ACC detection, external microphone or siren activation, and remote controller signals.
- Supports remote command workflows for relay based functions like engine cut and restore when invoked from the platform.
- Uses cellular TCP IP connectivity for reliable delivery of telemetry to a central Plaspy endpoint.
- Provides enough identification and telemetry fields for a fleet platform to correlate device state and historical tracking.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for all supported devices and will automatically detect the tracker protocol when the device reports to that endpoint. In most deployments the user does not need to select a protocol manually in Plaspy if the device is configured to report correctly to the Plaspy server.

- Plaspy server domain for device reporting is d.plaspy.com and the platform public IP used for reporting is 54.85.159.138.
- Plaspy uses port 8888 for device connections and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol when a properly configured device connects to the Plaspy endpoint.
- When the device is set up to report to the Plaspy endpoint, the platform typically processes incoming telemetry without manual protocol selection by the user.
- Ensure the tracker is configured to point to the Plaspy endpoint and that SIM and network connectivity permit TCP or UDP traffic as required.

## Transport and Connection Context

The TK100B uses cellular data to forward its telemetry to a remote server and supports standard TCP IP transport over GSM GPRS. Depending on device configuration and firmware options, the unit may use either TCP or UDP for reporting. Correct transport selection and destination settings are essential for reliable connectivity to Plaspy.

- Devices may be configured to use TCP or UDP to send telemetry to Plaspy on port 8888.
- The tracker can be configured to report to d.plaspy.com or directly to 54.85.159.138 as the destination for platform ingestion.
- Plaspy relies on the device reaching the shared port and endpoint to receive real time updates and alerts.
- Network level considerations such as operator APN settings, data plan status, and SMS command provisioning can affect reporting behavior.
- For hard wired installations ensure the tracker has stable power and correct wiring for ignition sensing and relay control to allow full telemetry reporting.

## Protocol Compatibility Notes

- Firmware revisions can introduce changes in how messages are formatted or which telemetry fields are transmitted; always check the device firmware level when validating behavior.
- Hardware revisions or optional accessory wiring may change available inputs or outputs and therefore the set of telemetry fields sent to Plaspy.
- Some deployments may require selecting TCP versus UDP in the device configuration to match local network or operator behavior.
- Manufacturer side configuration options and SMS command sets can affect how the device points to the Plaspy endpoint.
- Validate compatibility and supported features against the latest manufacturer documentation and release notes.
- Proper wiring of ACC, ignition, and relay circuits is necessary for reliable reporting of status and for remote immobilization features to operate correctly.

## Why Protocol Understanding Matters

A basic understanding of the communication protocol and transport context helps ensure a smooth setup, faster troubleshooting, and predictable long term operation within Plaspy. Knowing how the tracker reports, which transport it uses, and how it identifies itself makes it easier to confirm connectivity and interpret device events in the platform.

- Helps confirm the device is pointing to d.plaspy.com or 54.85.159.138 and using port 8888 as required by Plaspy.
- Assists technicians in choosing TCP or UDP during device setup to match network and device capabilities.
- Makes it easier to interpret incoming telemetry so alerts and remote commands are applied correctly in Plaspy.
- Speeds troubleshooting when devices are offline by isolating transport, APN, and power or wiring issues.
- Supports operational planning for fleet features such as geo fencing, SOS alerting, and remote immobilization.

## Why Use Plaspy with This Protocol

Using the CanTrack TK100B with Plaspy gives organizations a consolidated view of vehicle location, event alerts, and remote control actions. The device supplies rich telemetry such as ignition state, SOS triggers, geo fence breaches, and accessory inputs which Plaspy can present in dashboards, alert rules, and command workflows to support security and operational needs.

Plaspy centralizes TK100B telemetry and control over the shared reporting endpoint at d.plaspy.com on port 8888, letting operators monitor real time position, receive safety alerts, and execute remote relay commands where supported by the tracker. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific protocol support, firmware behavior, and manufacturer details on the official CanTrack site https://www.cantrackgps.com/ as implementations and firmware may change over time.
