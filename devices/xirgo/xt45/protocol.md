---
slug: /xirgo/xt45/protocol
id: xt45-protocol
sidebar_label: Protocol
title: Xirgo - XT45 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Xirgo XT45 tracker and Plaspy compatibility with connection and transport context
keywords:
  - Xirgo XT45 protocol
  - Xirgo XT45 GPS protocol
  - XT45 Plaspy compatibility
  - Xirgo tracker protocol
  - XT45 tracking protocol
  - XT45 communication protocol
  - Xirgo GPS tracker compatibility
  - Plaspy device protocol
  - Fleet tracking XT45
  - XT45 asset tracker
---

# Xirgo - XT45 Protocol

This page covers the public protocol context for using the Xirgo XT45 tracker with Plaspy. It describes how the device communicates in general terms, how connection and transport are handled, and what to expect when integrating the XT45 into a Plaspy deployment. The content focuses on public, non sensitive information to help technical users, integrators, and fleet managers understand the role of the tracker protocol in reliable telemetry and location reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are configured to report to the Plaspy endpoint. Exact protocol behavior and message timing can vary by firmware version, hardware revision, and manufacturer implementation, so consider this page a protocol orientation rather than a replacement for official Xirgo documentation.

## Protocol Overview

The tracker protocol is the set of rules the XT45 uses to send location, telemetry, and event data to a remote server so Plaspy can ingest and display it. For the XT45, the protocol enables the device to identify itself, transmit GPS fixes and supervisory I O states, and deliver event updates that power geofencing, alerts, and historical playback in Plaspy.

- Transmits GPS position fixes and timestamps so Plaspy can show live location and historical tracks.
- Sends supervisory input and output state changes such as ignition or digital inputs for event driven alerts.
- Provides telemetry suited to intermittent power environments so short reporting windows still yield usable data.
- Allows the device to identify itself and provide metadata required for device mapping and status in Plaspy.
- Supports remote control signals through supervisory outputs when paired with Plaspy workflows for immobilization or remote actions.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and automatically detects the tracker protocol used by the device. In most deployments you do not need to select a protocol inside Plaspy if the XT45 is pointed to the Plaspy address and using the supported transport. Proper configuration on the device side is usually sufficient for Plaspy to classify and ingest incoming messages.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 and can be used instead of the domain in device configuration.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen transport.
- Plaspy automatically detects the tracker protocol once the device reports to the Plaspy endpoint and begins sending telemetry.

## Transport and Connection Context

Connection context covers how the XT45 reaches Plaspy over the cellular network and which transport options are commonly used. Understanding transport and endpoint choices helps ensure reliable data flow from asset to cloud and reduces troubleshooting time during initial setup.

- The device may use UDP or TCP on port 8888 for reporting to Plaspy.
- Devices can be configured to point to d.plaspy.com or directly to 54.85.159.138 as the destination.
- All devices in Plaspy use the same port which simplifies configuration across mixed fleets.
- Choose UDP for lower overhead and occasional fire and forget updates or TCP for session oriented delivery where supported by the device.
- Network conditions, carrier NAT behavior, and device firmware can influence whether UDP or TCP works best for a specific installation.

## Protocol Compatibility Notes

- Firmware differences can change timing, message content, or optional telemetry fields; always confirm the firmware version in use.
- Hardware revisions may add or modify supervisory I O behavior and available telemetry channels.
- Manufacturer side settings such as default transport or server hostname may vary by SKU or regional firmware.
- Selecting UDP versus TCP on the device can affect delivery reliability depending on network and carrier characteristics.
- When integrating many units, verify that each device is correctly pointed to d.plaspy.com or 54.85.159.138 and set to port 8888.
- For control workflows that rely on supervisory outputs, validate that the specific hardware revision exposes the required outputs and that firmware supports remote actuation.

## Why Protocol Understanding Matters

A clear understanding of how the XT45 communicates helps ensure successful setup, reliable reporting, and practical troubleshooting when using Plaspy. Knowing the connection basics and factors that affect behavior reduces downtime and improves the quality of data feeding dashboards and alerts.

- Shortens time to first fix by ensuring the device is pointed to the correct Plaspy endpoint and port.
- Helps diagnose why intermittent updates occur by checking transport selection and firmware behavior.
- Improves alert fidelity by confirming that supervisory inputs are reported and mapped correctly in Plaspy.
- Enables predictable remote control workflows by validating the device supports required outputs and command flows.
- Supports fleet wide configuration best practices since Plaspy uses a single port and shared endpoint for all devices.

## Why Use Plaspy with This Protocol

Using the XT45 with Plaspy gives organizations resilient position and telemetry reporting for assets in challenging environments. The XT45’s focus on intermittent power operation, rugged housing, and supervisory I O makes it a practical choice for trailers, construction equipment, and remote machinery where reliable tracking and event reporting matter.

Plaspy turns the XT45 telemetry into actionable tools for operations and security: live mapping, geofencing, event driven alerts, and historical playback help teams maintain situational awareness and respond faster. To learn more about Plaspy and how it supports trackers like the XT45, visit https://www.plaspy.com. For the most current device protocol specifics, firmware behavior, and manufacturer documentation please verify details on the Xirgo website https://xirgo.com/ as device implementation and firmware can change over time.
