---
slug: /gotop/g07/protocol
id: g07-protocol
sidebar_label: Protocol
title: GOTOP - G07 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP G07 and how it communicates with Plaspy for tracking and alerts
keywords:
  - GOTOP G07 protocol
  - GOTOP G07 GPS protocol
  - GOTOP G07 communication protocol
  - GOTOP G07 tracking protocol
  - GOTOP tracker Plaspy compatibility
  - GOTOP G07 fleet tracking
  - GOTOP G07 device integration
  - Plaspy tracker protocol
  - Plaspy device compatibility
  - vehicle asset tracking protocol
---

# GOTOP - G07 Protocol

This page provides a public, non sensitive overview of the communication protocol context for the GOTOP G07 when used with Plaspy. It explains how the G07 reports location and telemetry to Plaspy and what aspects of the device communication are relevant when configuring, deploying, or troubleshooting the tracker on the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior on the G07 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, deployment relevant facts rather than firmware internals.

## Protocol Overview

The G07 communicates over cellular data to deliver position fixes, event alarms, and device status to a backend server. The protocol implemented on the device packages GNSS results, LBS fallback data, and alarm events so that Plaspy can ingest them for mapping, alerts, and history. This document focuses on the role of that protocol for reliable integration rather than on low level packet details.

- Enables the device to report GNSS position, LBS fallback, and alarm telemetry to Plaspy for live tracking and historical playback.
- Carries device identity and status information so Plaspy can associate incoming reports with the correct asset record.
- Delivers event notifications such as tamper, movement, overspeed, and low battery so Plaspy can trigger alerts and workflows.
- Provides periodic and event driven reporting so power optimized devices like the G07 can balance standby life with timely updates.

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports on a shared endpoint and port and automatically determines the incoming tracker protocol so users normally do not need to manually select protocol settings inside Plaspy. If a G07 is configured to send reports to the Plaspy endpoint, the platform will recognize and process supported telemetry types automatically.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address for reporting is 54.85.159.138.
- Plaspy uses a single common port for device connections which simplifies device configuration.
- Plaspy automatically detects the tracker protocol from incoming connections so manual protocol selection is usually unnecessary when the device points to the Plaspy endpoint.
- Ensure the device is configured to authenticate or identify itself according to the manufacturer guidance so Plaspy can map incoming data to the correct asset.

## Transport and Connection Context

The G07 can be set up to use standard cellular transport options to reach Plaspy. For deployment and connectivity planning, keep in mind the endpoint addresses and the transport modes the tracker supports so you can configure the device or the SIM profile accordingly.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and local configuration choices.
- Devices commonly point to d.plaspy.com or directly to the Plaspy IP 54.85.159.138 for reporting.
- All devices in Plaspy use the same port which streamlines provisioning and reduces configuration mistakes.
- Use the transport mode that best fits your network constraints and the device firmware recommendations for reliable delivery.
- Confirm mobile operator and APN settings on the SIM to ensure the G07 can establish outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions on the G07 can change which telemetry fields are reported and how alarms are encoded; always verify expected fields for your firmware build.
- Hardware revisions or regional SKUs may affect supported bands, transport behavior, or peripheral features such as the microphone or sensors.
- Manufacturer side configuration commands and default reporting intervals may differ between units or firmware; check device settings before deployment.
- Transport selection UDP versus TCP can impact delivery behavior and battery usage; choose based on coverage and device guidance.
- For complex deployments consider validating a small set of devices on the target mobile network before large scale roll out.
- Refer to the GOTOP manufacturer documentation for firmware specific details and any optional features or command sets.

## Why Protocol Understanding Matters

Understanding the device communication protocol helps ensure reliable reporting, accurate alerting, and efficient troubleshooting when the G07 is used with Plaspy. Clear knowledge of what the device sends and how Plaspy expects to receive it reduces setup time and improves operational confidence.

- Ensures correct device addressing and identification so incoming data is associated with the right asset in Plaspy.
- Helps tune reporting intervals and alarm thresholds to balance battery life and timeliness of events.
- Simplifies troubleshooting when reports are missing by clarifying transport and endpoint expectations.
- Enables informed decisions about using UDP or TCP based on network behavior and device firmware guidance.
- Supports planning for firmware updates or device replacement by highlighting potential protocol differences.

## Why Use Plaspy with This Protocol

Pairing the GOTOP G07 with Plaspy provides persistent location visibility and event monitoring for assets that require long standby times and rugged installation. The G07’s large internal battery options, hybrid GNSS plus LBS positioning, and comprehensive alarm set make it a practical device for rental fleets, container tracking, and remote asset oversight when integrated into Plaspy’s mapping and alerting workflows.

Plaspy accepts reports at d.plaspy.com or 54.85.159.138 on the shared port used by all devices and automatically detects supported tracker protocols, which simplifies device onboarding and reduces manual configuration. To learn more about Plaspy and how it integrates with compatible devices visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so please verify the latest device specific protocol information and firmware notes on the manufacturer website https://www.gotop.cc/.
