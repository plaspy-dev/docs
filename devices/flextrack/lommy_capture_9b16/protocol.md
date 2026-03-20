---
slug: /flextrack/lommy_capture_9b16/protocol
id: lommy_capture_9b16-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Capture 9B16 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Flextrack Lommy Capture 9B16 and how it communicates with Plaspy for reliable trailer and towed asset tracking
keywords:
  - Flextrack Lommy Capture 9B16 protocol
  - Flextrack Lommy Capture GPS protocol
  - Lommy Capture 9B16 Plaspy compatibility
  - Lommy Capture communication protocol
  - Flextrack tracking protocol
  - Plaspy device compatibility
  - trailer tracking protocol
  - batteryless tracker protocol
  - towed asset tracking protocol
  - GNSS tracker protocol
---

# Flextrack - Lommy Capture 9B16 Protocol

This page documents the public protocol context for using the Flextrack Lommy Capture 9B16 with Plaspy. It focuses on how the device communicates location, motion, and telemetry data to Plaspy for real time monitoring of trailers, caravans, and other towed assets while respecting manufacturer defined behavior and firmware differences.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides general guidance about the communication role and integration practices rather than firmware specific internals.

## Protocol Overview

The Lommy Capture 9B16 reporting protocol governs how the tracker identifies itself and delivers GNSS positions, motion events, and buffered telemetry to a cloud endpoint consumed by Plaspy. That reporting path enables Plaspy to translate raw device messages into usable location and activity records for monitoring, alerts, and historical analysis.

- Enables the device to report GNSS fixes and motion triggered events to a remote server for real time visibility.
- Carries device identification and status fields so Plaspy can associate incoming messages with the correct asset record.
- Supports adaptive reporting behavior so transmission frequency reflects harvested power, motion state, and connectivity.
- Allows local buffering of position and event data when cellular connectivity is unavailable so reports are forwarded when the device regains network access.
- Delivers telemetry over common transport channels so Plaspy can ingest updates and generate alarms or analytics without bespoke device side integration.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports on a single shared endpoint and port and applies automatic protocol detection to map incoming messages to the correct parsing and handling flow. In most cases a Lommy Capture device properly configured to report to Plaspy will not require manual protocol selection inside the Plaspy platform.

- Plaspy public server domain for device reporting is d.plaspy.com which devices can target when configured.
- Plaspy public server IP is 54.85.159.138 which is an alternative address devices may use.
- Plaspy accepts device connections on port 8888 and this same port is used for all devices supported by Plaspy.
- Devices may be configured to use UDP or TCP transport to reach the Plaspy endpoint depending on device settings and carrier behavior.
- Plaspy automatically detects the tracker protocol when a device connects and begins reporting, so manual protocol selection is usually not required for a correctly configured device.

## Transport and Connection Context

Connection context describes how the Lommy Capture 9B16 delivers telemetry to Plaspy and what configuration options are typically available. The device supports cellular uplink and has fallbacks and buffering designed for towed asset deployments where constant power is not guaranteed.

- The tracker can be configured to use UDP or TCP on port 8888 to send data to Plaspy, depending on device firmware and network conditions.
- Devices may point to the Plaspy reporting domain d.plaspy.com or to the server IP 54.85.159.138 as their destination.
- Plaspy uses the same port 8888 for all supported devices which simplifies device provisioning and firewall rules.
- SMS or other cellular fallback channels may be used by the device for basic alerts or when packet data service is unavailable, while primary telemetry is typically delivered over cellular data.
- Local flash buffering on the device retains position reports when connectivity is temporarily lost and forwards buffered reports when the connection is restored.

## Protocol Compatibility Notes

- Firmware versions can change message contents, reporting intervals, and transport behavior; confirm the firmware revision on installed devices when validating compatibility.
- Hardware revisions or manufacturing variants may affect power harvesting behavior, sensor sensitivity, or available configuration options.
- Some deployments may prefer UDP for lower overhead while others use TCP for delivery confirmation depending on carrier and infrastructure requirements.
- SMS reporting is a separate channel and may have different data formats and limits versus packet data reporting.
- Validate integration in a test environment before broad rollout to confirm that Plaspy automatically recognizes the device messages and that alarms and position history behave as expected.
- Always refer to manufacturer installation and wiring guidance for in-lamp mounting and vehicle lighting connections to ensure reliable power harvesting and signal integrity.

## Why Protocol Understanding Matters

A clear, practical grasp of the tracker reporting protocol helps installers, integrators, and fleet managers ensure reliable setup, reduce troubleshooting time, and maintain long term visibility for towed assets in Plaspy.

- Speeds up initial provisioning by confirming transport settings and target endpoint values before deployment.
- Helps diagnose connectivity issues by checking whether messages reach d.plaspy.com or 54.85.159.138 on port 8888 and whether UDP or TCP is in use.
- Clarifies how adaptive reporting tied to lighting circuits and motion sensors affects expected update cadence and batteryless operation.
- Guides expectations for buffered data behavior when the device experiences temporary signal loss.
- Enables more effective coordination between device firmware updates and Plaspy ingestion behavior during rollouts.

## Why Use Plaspy with This Protocol

Using the Lommy Capture 9B16 with Plaspy provides a practical way to add discreet, low maintenance tracking to trailers and other towed equipment. The combination of energy harvesting, motion optimized reporting, and multi constellation GNSS gives fleet teams reliable position visibility while minimizing physical maintenance.

Plaspy centralizes incoming reports and automatically maps device messages into location, activity, and alerting workflows suitable for operational monitoring and anti theft use cases. To learn more about Plaspy and how it supports device integrations like this one visit https://www.plaspy.com. For the most current device specific protocol documentation, firmware notes, and installation guidance please verify details with the manufacturer at https://flextrack.dk as implementation and firmware behavior can change over time.
