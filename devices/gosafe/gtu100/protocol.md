---
slug: /gosafe/gtu100/protocol
id: gtu100-protocol
sidebar_label: Protocol
title: Gosafe - GTU100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Gosafe GTU100 compatibility and communication with Plaspy
keywords:
  - Gosafe GTU100 protocol
  - Gosafe GTU100 GPS protocol
  - GTU100 Plaspy compatibility
  - Gosafe GTU100 communication protocol
  - GTU100 tracking protocol
  - Gosafe tracker protocol
  - Plaspy device compatibility
  - Vehicle GPS tracker protocol
  - Fleet tracking GTU100
  - GEM GICUS integration
---

# Gosafe - GTU100 Protocol

This page describes the public protocol context for using the Gosafe GTU100 tracker with Plaspy. It focuses on how the device communicates with Plaspy endpoints, what role the tracker reporting protocol plays in delivering usable telemetry, and practical points to consider when integrating the GTU100 into a Plaspy deployment.

Plaspy uses shared, platform level connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this page avoids device internals and concentrates on safe, public facing information that helps with setup and troubleshooting.

## Protocol Overview

The GTU100 communicates telemetry and event data from the vehicle to a server endpoint. The protocol describes how the tracker identifies itself, reports location and sensor data, and participates in ongoing sessions that allow Plaspy to ingest, display, and act on telemetry.

- Enables the tracker to transmit location, motion, and sensor telemetry to a remote server for processing.
- Carries device identity and status information so Plaspy can associate messages with the correct asset and Fleet record.
- Supports event reporting for ignition, crash detection, and external sensor inputs so Plaspy can generate alerts and historical reports.
- Works over standard cellular transports so messages reach Plaspy from both LTE and fallback networks.
- Integrates with the GTU100's onboard event manager and remote management features to support OTA updates and configuration workflows without exposing internal message formats.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming device connections on a single shared endpoint and automatically determine the device protocol when a properly configured tracker reports in. For most deployments, users do not need to manually select a protocol inside Plaspy if the GTU100 is pointed to the Plaspy endpoint using the correct transport and credentials.

- Plaspy listens on a single platform port for device traffic which is shared across supported trackers.
- When the GTU100 reports to the Plaspy endpoint, the platform identifies the device and associates messages with the correct account automatically.
- Typical deployments configure the tracker to send data to the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
- Plaspy automatically detects the tracker protocol so manual protocol selection in most cases is unnecessary.
- Proper device configuration and up to date firmware on the GTU100 improve the chance of seamless automatic detection.

## Transport and Connection Context

The GTU100 supports multiple cellular transports and can be configured to use either UDP or TCP for data delivery. When integrating with Plaspy, use the platform connection settings described here so the device can reach the Plaspy ingestion endpoint reliably.

- The GTU100 may be configured to send data via UDP or TCP on port 8888 depending on carrier and device settings.
- Plaspy accepts device traffic on port 8888 and the same port is used for all devices on the platform.
- Devices can be pointed at the Plaspy server domain d.plaspy.com or directly at the Plaspy server IP 54.85.159.138 if network policies require an IP address.
- Some deployments also rely on SMS as a secondary or fallback delivery path for specific commands and diagnostics, in addition to TCP and UDP.
- Network level considerations such as APN settings, firewall rules, and carrier NAT behavior can affect whether UDP or TCP is more reliable for a given installation.

## Protocol Compatibility Notes

- Firmware version differences can change message timing, event thresholds, or which fields are reported. Always confirm the GTU100 firmware revision when validating behavior.
- Hardware revisions and regional variants may have differences in supported bands, GNSS performance, or available I O that influence the telemetry the device can send.
- Manufacturer side features such as the Gosafe Event Manager GEM and the GICUS device manager can affect how events are preprocessed before being transmitted to Plaspy.
- Transport selection matters. Some carriers or deployments perform better with TCP while others prefer UDP for lower overhead; test both where possible.
- Validation against the device's official configuration guide is recommended to ensure the tracker is pointed to Plaspy correctly and uses the expected transport.
- Plaspy uses the same port for all supported devices which simplifies platform configuration but still requires correct device-side settings.

## Why Protocol Understanding Matters

Understanding how the GTU100 communicates with Plaspy helps ensure successful deployment, reliable telemetry, and faster troubleshooting when items deviate from expected behavior.

- Helps confirm the device is pointed at the correct Plaspy endpoint and transport so data flows to the platform.
- Allows targeted troubleshooting when telemetry is missing or intermittent by isolating network, transport, or firmware causes.
- Supports configuration choices like TCP versus UDP based on carrier behavior, latency needs, and message reliability requirements.
- Enables clearer coordination with the device manufacturer for firmware updates, event configuration, or managed features like GEM and GICUS.
- Improves long term reliability by highlighting the importance of keeping device firmware and configuration aligned with platform expectations.

## Why Use Plaspy with This Protocol

Using the GTU100 with Plaspy brings vehicle location, sensor telemetry, and event reporting into a unified fleet management platform. The GTU100's multi GNSS accuracy, resilient LTE Cat 1 connectivity with 2G 3G fallback, and onboard event processing make it well suited for fleets that need consistent tracking, crash detection, and integrated sensor data.

Plaspy simplifies integration by accepting device connections on a single shared port and automatically detecting the tracker protocol when the device is configured to report to the platform. To learn more about Plaspy and how it works with fleet grade trackers like the GTU100, visit https://www.plaspy.com. Please note that protocol behavior, firmware capabilities, and manufacturer implementation details can change over time, so verify the latest device specific protocol and firmware information on the manufacturer site https://gosafesystem.com/.
