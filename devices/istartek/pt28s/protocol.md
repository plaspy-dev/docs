---
slug: /istartek/pt28s/protocol
id: pt28s-protocol
sidebar_label: Protocol
title: iStartek - PT28S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the iStartek PT28S wearable GPS tracker and how it communicates with Plaspy for tracking and alerts
keywords:
  - iStartek PT28S protocol
  - iStartek PT28S GPS protocol
  - PT28S protocol Plaspy
  - PT28S communication protocol
  - PT28S tracking protocol
  - iStartek wearable GPS protocol
  - Plaspy tracker compatibility
  - GPS tracker communication Plaspy
  - personal safety tracker protocol
  - PT28S telemetry protocol
---

# iStartek - PT28S Protocol

This page provides public protocol context for using the iStartek PT28S 4G GPS Tracker Watch with the Plaspy platform. It explains how the device communicates with Plaspy in high level, non sensitive terms so integrators and operators understand the role of the tracker reporting protocol in everyday deployment and troubleshooting.

The PT28S is a rugged wearable that combines GPS, Beidou, Wi‑Fi and LBS positioning with global cellular connectivity, SOS and health telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior may differ slightly between productions or firmware updates.

## Protocol Overview

At a high level the device protocol is the set of rules the PT28S uses to identify itself and transmit location, telemetry and event data to Plaspy. The protocol governs how the watch reports position fixes, SOS events, health telemetry and basic state information so Plaspy can present timely, actionable data to users.

- Enables the PT28S to send periodic location updates and event driven messages such as SOS or fall alerts to the backend.
- Carries telemetry items like heart rate, step counts and remote monitoring signals alongside positional data.
- Provides identity and session information so Plaspy can associate incoming reports with the correct device record.
- Allows remote parameter updates and firmware control signals to be coordinated by management systems.
- Ensures Plaspy receives sufficient context to raise alerts, populate dashboards, and support historical playback.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections to a shared endpoint and port and applies automatic protocol detection so most properly configured devices appear without manual protocol selection. That means a PT28S that is pointed at the Plaspy endpoint and using the correct transport will generally be recognized by the platform.

- Plaspy’s public server endpoint is d.plaspy.com and the associated IP address is 54.85.159.138.
- Plaspy listens on port 8888 and all devices supported by Plaspy use that same port.
- Plaspy automatically detects the tracker protocol when the device reports to the shared endpoint and port.
- In typical setups the user does not need to choose a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint.
- If a device is not detected, common causes include incorrect server address, transport mismatch, or firmware configuration differences.

## Transport and Connection Context

Connection transport and destination are part of the deployment context for the PT28S. The device can be configured to report over either UDP or TCP depending on device support and the chosen setup. These decisions affect how data is delivered but do not change the high level protocol purpose.

- The PT28S may be configured to use UDP or TCP on port 8888 depending on the device settings and network environment.
- Devices intended for Plaspy reporting should be pointed to d.plaspy.com or directly to 54.85.159.138.
- Plaspy uses the same single port 8888 for all supported tracker devices to simplify configuration.
- Network conditions and carrier behavior can affect whether UDP or TCP is preferable for reliable reporting.
- When switching transport types, ensure the device firmware and SIM profile support the chosen transport mode.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry items, or optional fields; always confirm the tracker firmware level when assessing compatibility.
- Hardware revisions and regional product variants can alter supported GNSS, cellular bands, or sensor availability and therefore affect the data the device sends.
- Manufacturer side configuration or parameter defaults may enable different transports or reporting intervals out of the box.
- Selecting UDP versus TCP can impact delivery reliability and battery usage; choose based on coverage and device settings.
- Validate compatibility and recommended parameters against official iStartek documentation and release notes for the PT28S.
- Plaspy’s automatic detection reduces manual setup but correct server address and transport must be configured on the device.

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol helps ensure a smooth setup, predictable behavior in the field, and effective troubleshooting when events do not appear as expected in Plaspy. Knowledge of how the device communicates enables faster resolution of connectivity, reporting frequency, and telemetry visibility issues.

- Helps confirm the device is pointed at the correct Plaspy endpoint and transport for successful data delivery.
- Aids in interpreting why certain telemetry or events are present or missing in the platform.
- Supports informed decisions about configuration choices such as reporting intervals and transport selection.
- Enables better coordination with network operators when cellular connectivity or NAT issues impact delivery.
- Makes it easier to validate that remote parameter updates and firmware management are being applied as intended.

## Why Use Plaspy with This Protocol

Pairing the PT28S with Plaspy gives organizations a straightforward way to ingest wearable location and safety telemetry into a central monitoring environment. Plaspy aggregates position fixes, SOS events, and health signals so caregivers, operations teams, and safety managers can maintain continuous visibility, receive alerts, and review historical routes.

Plaspy’s shared endpoint and automatic protocol detection simplify deployments for multi device environments and reduce the need to manage separate ports or endpoints for each tracker model. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior and manufacturer implementation notes, please verify current information on the manufacturer site at https://istartek.com/ .
