---
slug: /thingsys/ts_p4d/protocol
id: ts_p4d-protocol
sidebar_label: Protocol
title: ThingSys - TS-P4D Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for ThingSys TS P4D GPS tracker with Plaspy including connection context and detection guidance
keywords:
  - ThingSys TS P4D protocol
  - ThingSys TS P4D GPS protocol
  - ThingSys TS P4D protocol for Plaspy
  - ThingSys TS P4D communication protocol
  - ThingSys TS P4D tracking protocol
  - TS P4D Plaspy compatibility
  - GPS tracker protocol guide
  - fleet tracking protocol ThingSys
  - tracker protocol detection Plaspy
  - vehicle tracking ThingSys
---

# ThingSys - TS-P4D Protocol

This page provides public protocol context for using the ThingSys TS-P4D GPS tracker with the Plaspy platform. It explains the role of the tracker reporting protocol in device integration, how the tracker communicates with Plaspy at a high level, and practical considerations for configuring and validating connectivity without exposing private implementation details.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general communication context and practical guidance for successful integration.

## Protocol Overview

The tracker reporting protocol defines how the TS-P4D sends GNSS positions, movement and status telemetry, and event notifications to a remote server. In practice, the protocol enables the device to identify itself, deliver timely location and alarm data, and allow a backend service like Plaspy to normalize those inputs into maps, alerts and reports.

- Enables transmission of GNSS position, accelerometer movement events, battery state, and alarm flags to a remote server.
- Carries device identity and status details so Plaspy can associate incoming messages with the correct asset record.
- Supports periodic reporting and event driven messages to balance real time visibility and battery life for the TS P4D.
- Provides the data Plaspy needs to generate geofence alerts, route history, low battery notifications and other telematics features.
- Works over common transport methods so carriers and regional cellular settings can be accommodated.

## How Plaspy Detects the Protocol

Plaspy receives the device reports at a shared endpoint and port and automatically detects the tracker protocol when messages arrive. In most cases, if the TS P4D is configured to report to the Plaspy endpoint, no manual protocol selection in Plaspy is required.

- Plaspy listens on a single, consistent port for all devices which simplifies device configuration and onboarding.
- Devices reporting to Plaspy are identified by their unique device identity fields included in outgoing messages.
- Automatic detection reduces the need for users to choose a protocol profile when registering the tracker with Plaspy.
- Proper device configuration to point at the Plaspy endpoint is usually the primary step required for successful detection.
- If a device does not appear, check reporting settings, firmware version, and that the device is allowed to connect over the configured transport.

## Transport and Connection Context

The TS P4D may be configured to use either UDP or TCP for reporting, depending on the device firmware and user preference. Plaspy accepts both transport types on its public endpoint so installers can select the transport that best matches their network and reliability needs.

- The Plaspy server domain for device reporting is d.plaspy.com and the platform also accepts direct connections to the server IP 54.85.159.138.
- The device may be configured to use UDP or TCP to reach Plaspy on port 8888 depending on device support and network conditions.
- All devices in Plaspy use the same port which simplifies configuration across fleets and models.
- Choosing UDP favors lower overhead while TCP can offer additional delivery guarantees depending on cellular network behavior.
- Verify that cellular carriers and firewalls in your deployment allow outbound connections to the Plaspy endpoint on the configured transport.

## Protocol Compatibility Notes

- Firmware releases can change protocol behavior and available fields; check the device firmware version when validating compatibility.
- Hardware revisions or regional variants may implement reporting options or bands differently and affect which transport modes are available.
- Some features such as remote SMS commands or voice monitoring are provided by the device firmware and are separate from the reporting protocol to Plaspy.
- Transport selection between UDP and TCP can affect battery consumption and message delivery characteristics in the field.
- Confirm that the device is configured to point at d.plaspy.com or the server IP and that the reporting port is set consistently across devices.
- Always validate device behavior with a small pilot deployment before rolling out at scale.

## Why Protocol Understanding Matters

Understanding how the TS P4D communicates helps ensure a reliable integration with Plaspy, speeds up troubleshooting, and informs sensible decisions about reporting intervals and power management for deployed assets.

- Accelerates setup by clarifying which reporting settings must be configured on the device to reach Plaspy.
- Makes it easier to diagnose connectivity issues by narrowing checks to transport, endpoint, and firmware version.
- Helps balance reporting frequency and battery life by matching the device reporting profile to operational requirements.
- Supports consistent fleet wide configuration since Plaspy accepts the same port and automatically detects the protocol.
- Improves long term reliability by highlighting firmware update impacts and the need to revalidate settings after device upgrades.

## Why Use Plaspy with This Protocol

Using the TS P4D with Plaspy gives organizations consolidated visibility into location, movement, and device health for fleets and mobile assets. The combination of a rugged magnetic form factor, long life battery options, and Plaspy’s centralized ingestion and alerting makes it practical to manage dispersed assets with minimal wiring and maintenance.

Plaspy simplifies onboarding by providing a single endpoint and port for all devices and by automatically detecting the tracker protocol when the TS P4D is configured to report. To learn more about Plaspy and how it supports fleet and asset tracking, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance consult the manufacturer documentation at https://www.thingsys.com/ as product behavior may evolve over time.
