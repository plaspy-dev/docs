---
slug: /concox/vl110c/protocol
id: vl110c-protocol
sidebar_label: Protocol
title: Concox - VL110C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox VL110C tracker compatibility with Plaspy including connection context and integration notes
keywords:
  - Concox VL110C protocol
  - Concox VL110C GPS protocol
  - VL110C Plaspy compatibility
  - VL110C communication protocol
  - VL110C tracking protocol
  - Concox GPS tracker protocol
  - Plaspy device integration
  - vehicle GNSS terminal protocol
  - fleet tracking VL110C
  - VL110C telemetry communication
---

# Concox - VL110C Protocol

This page describes the public protocol context for using the Concox VL110C vehicle GNSS terminal with Plaspy. It focuses on how the tracker communicates with Plaspy in general, what connection settings Plaspy exposes publicly, and practical considerations for successful integration without exposing device internals.

The VL110C is a compact 4G LTE Cat 1 tracker with GSM fallback, internal GNSS, IP65 protection, wide 9–90V input and a backup battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. This page explains the public-facing communication context and what to check when integrating VL110C devices with Plaspy.

## Protocol Overview

The communication protocol for VL110C devices governs how the tracker identifies itself, reports position and telemetry, and delivers events and alarms to a cloud endpoint. For integration with Plaspy the emphasis is on ensuring the device reports to the correct Plaspy endpoint and uses a supported transport so Plaspy can ingest location, alarms and driving behavior data.

- The protocol carries essential telemetry such as GNSS positions, ignition state, alarms, and event tags that Plaspy maps into tracking and reporting workflows.
- Identification and session data sent by the tracker allow Plaspy to associate incoming messages with a specific device record in the platform.
- Event reporting (for example ignition, relay state, jamming alerts) appears as structured telemetry that Plaspy uses for alerts and history.
- The protocol operation that matters for integration is the device ability to reach the Plaspy endpoint and reliably deliver messages over the selected transport.
- Differences in firmware, regional versions, and optional configuration channels (SMS, PC tools) can affect which messages the device sends and how often.

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many tracker models and automatically detect the protocol used by a device that is correctly reporting to the Plaspy endpoint. In most cases, device owners only need to configure the tracker to point at the Plaspy server and select the appropriate transport; Plaspy handles protocol identification on the server side.

- Plaspy uses a shared server endpoint and port for device reporting so devices can be pointed to a single destination.
- The public Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The common reporting port used by Plaspy is 8888 and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol when a device sends data to the Plaspy endpoint, so manual protocol selection in the platform is typically not required.
- If a device is not being detected, verify the device is configured to report to the Plaspy endpoint and that transport and APN settings are correct.

## Transport and Connection Context

Connection context is critical for reliable delivery. The VL110C supports cellular transports and can be configured to use either UDP or TCP to reach the Plaspy endpoint depending on device settings and carrier behavior. Understanding which transport the device is configured to use helps when troubleshooting connectivity or delayed telemetry.

- The VL110C may be configured to report to d.plaspy.com or directly to the IP address 54.85.159.138.
- Devices can use either UDP or TCP on port 8888 depending on their configuration and firmware capabilities.
- Plaspy accepts both UDP and TCP connections on the same port so device-side transport choice does not require different server endpoints.
- All devices in Plaspy use the same port 8888 so firewall and carrier rules need to allow outbound traffic to that destination port.
- When testing connectivity, ensure the device APN, SIM plan, and signal conditions allow outbound UDP or TCP sessions to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message frequency, supported event types, and optional fields; always note the device firmware when validating behavior.
- Hardware revisions or regional SKUs of the VL110C may include small differences in radio band support or peripheral wiring that affect installation and telemetry.
- Some configuration channels (SMS, USB/PC tool) are provided by the manufacturer and can be used to set the reporting server and transport before cloud onboarding.
- Transport choice (UDP vs TCP) can influence delivery characteristics; choose the transport that matches the device configuration and your operational requirements.
- Manufacturer default settings sometimes point to a different cloud; ensure the VL110C is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy ingestion.
- Validate device identifiers and IMEI reporting so Plaspy can map incoming telemetry to the correct device record.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure devices are configured correctly, that Plaspy receives the telemetry you expect, and that troubleshooting is efficient. A clear view of the public protocol context reduces configuration errors and speeds onboarding of new units into fleet workflows.

- Helps confirm the tracker is pointing to the correct Plaspy endpoint and using port 8888 so messages reach the platform.
- Speeds troubleshooting when devices appear offline by isolating transport, DNS, APN, or firewall issues.
- Clarifies which telemetry and events to expect in Plaspy dashboards based on known device features like GNSS, ignition input, and relay output.
- Supports planning for firmware updates or regional device variants that may change message formats or supported events.
- Improves operational reliability by ensuring device-level settings align with Plaspy ingestion expectations.

## Why Use Plaspy with This Protocol

Using the VL110C with Plaspy provides a straightforward path to real-time visibility and operational control for small vehicle fleets and equipment. The VL110C’s combination of LTE connectivity with 2G fallback, internal GNSS, backup battery and relay output map well to common fleet use cases that Plaspy supports such as live tracking, geofencing, immobilizer actions and alarm handling.

Plaspy’s shared endpoint design simplifies fleet-scale rollouts because each device is configured to report to the same server and port. To learn more about how Plaspy can work with VL110C devices and to review deployment options, visit https://www.plaspy.com. Protocol details, firmware behavior and manufacturer implementation can change over time, so please verify the latest device specific information on the manufacturer site at https://www.iconcox.com/.
