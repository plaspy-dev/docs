---
slug: /gotop/c750/protocol
id: c750-protocol
sidebar_label: Protocol
title: GOTOP - C750 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the GOTOP C750 OBD GPS tracker and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - GOTOP C750
  - GOTOP C750 protocol
  - GOTOP C750 GPS protocol
  - GOTOP C750 communication
  - GOTOP C750 tracking protocol
  - C750 OBD tracker
  - Plaspy compatible tracker
  - fleet tracking C750
  - vehicle telemetry C750
  - GOTOP GPS tracker
---

# GOTOP - C750 Protocol

This page summarizes the public protocol context for using the GOTOP C750 OBD GPS tracker with Plaspy. It focuses on how the device sends location and event data to Plaspy, the role of shared connection settings, and the practical aspects of integrating C750 units without exposing sensitive implementation details.

The C750 is a plug and play OBD II tracker that uses GSM GPRS communications and a U‑Blox GNSS receiver for positioning. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. For the most current firmware specific details consult the manufacturer documentation.

## Protocol Overview

At a high level the tracker reporting protocol enables the C750 to establish a network link, identify itself, and deliver location plus event telemetry that Plaspy can ingest into dashboards and alert rules. The public protocol context covers the device reporting methods and the types of events and telemetry typically sent to the server rather than low level packet internals.

- Enables real time position reporting from the C750 to Plaspy for map display and history.
- Carries event notifications such as overspeed, geo fence breach, movement, vibration, and power cut.
- Transmits OBD relevant telemetry exposed by the vehicle when available so Plaspy can correlate vehicle state with location.
- Supports fallback reporting patterns such as GPRS continuous reporting and on demand SMS reporting for verification or configuration.
- Allows the device to present identifying information so Plaspy can match device records to incoming data streams.

## How Plaspy Detects the Protocol

Plaspy automatically detects tracker protocols when a device is configured to report to the Plaspy endpoint. In most deployments you do not need to manually select a protocol inside Plaspy if the C750 is pointed at the Plaspy server using the correct connection settings. Detection is performed at the platform level so setup focuses on correct network configuration at the device.

- Plaspy uses a shared server endpoint for device reporting at d.plaspy.com.
- The Plaspy server is also reachable at 54.85.159.138 for direct IP configuration.
- All devices report to the same Plaspy port which is 8888.
- The device may be configured to use either UDP or TCP on port 8888 depending on device support and network preferences.
- When the C750 is correctly pointed to the Plaspy endpoint, Plaspy attempts to identify the incoming device protocol automatically so manual protocol selection is normally unnecessary.

## Transport and Connection Context

Connection context describes how the tracer communicates over mobile networks to reach Plaspy. The C750 uses GSM GPRS for data transport and can report events to Plaspy continuously via GPRS or deliver on demand messages via SMS. For direct server reporting, configuring the device to point to Plaspy is typically required.

- Devices can be configured to send data to d.plaspy.com or directly to 54.85.159.138.
- The reporting port used by Plaspy is 8888 and this same port is used across all supported devices.
- The C750 supports reporting over UDP or TCP on port 8888 depending on device firmware and configuration options.
- Continuous tracking is normally done over GPRS while SMS is often used for on demand location queries or fallback notifications.
- Verify APN and GPRS settings on the device so outgoing connections to the Plaspy endpoint succeed in your network environment.

## Protocol Compatibility Notes

- Firmware revisions can change how a device formats or sequences reports; always confirm behavior for your firmware version.
- Hardware revisions or regional variants may alter supported transports or available events.
- Manufacturer side configuration options can affect whether the device uses TCP or UDP by default.
- OBD derived telemetry availability depends on vehicle OBD support and the device firmware mapping for OBD PIDs.
- SMS behavior and formats can vary and are useful for diagnostics but are separate from GPRS server reporting.
- Validate any large scale deployment with a small pilot group to confirm consistent reporting to Plaspy.

## Why Protocol Understanding Matters

Understanding the public protocol context helps ensure reliable setup and expedient troubleshooting when integrating the C750 with Plaspy. Knowing which transports the device can use, how it reports events, and what factors influence behavior reduces deployment friction and improves operational uptime.

- Confirms that devices are pointed to the correct Plaspy endpoint and port for automatic detection.
- Helps map device events such as overspeed or power cut to Plaspy alert rules and notification workflows.
- Guides decisions about transport selection between TCP and UDP based on network stability and carrier behavior.
- Informs firmware update planning so you can test protocol changes before wide rollout.
- Supports diagnostic steps like verifying APN settings and confirming the device can reach d.plaspy.com or 54.85.159.138.

## Why Use Plaspy with This Protocol

Pairing the GOTOP C750 with Plaspy gives organizations a streamlined path from plug and play installation to actionable location and event data. The C750’s OBD II form factor, GSM GPRS reporting, and backup battery for power cut reporting make it well suited for fleet visibility, anti theft monitoring, and simple telemetry collection. Plaspy’s shared endpoint approach and automatic protocol detection reduce configuration overhead and speed deployment across many vehicles.

To learn more about Plaspy visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://www.gotop.cc/ before large scale deployments.
