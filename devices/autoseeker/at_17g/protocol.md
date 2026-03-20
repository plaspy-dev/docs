---
slug: /autoseeker/at_17g/protocol
id: at_17g-protocol
sidebar_label: Protocol
title: Autoseeker - AT-17G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Autoseeker AT-17G integration with Plaspy including connection details and compatibility guidance
keywords:
  - Autoseeker AT-17G protocol
  - Autoseeker GPS protocol
  - AT-17G Plaspy compatibility
  - AT-17G tracking protocol
  - AT-17G communication protocol
  - Plaspy device protocol
  - Plaspy GPS tracker
  - asset tracker protocol
  - 4G GPS tracker protocol
  - fleet management GPS protocol
---

# Autoseeker - AT-17G Protocol

This page provides a public, high level description of the communication context for using the Autoseeker AT-17G with Plaspy. It focuses on how the tracker reports location and telemetry into Plaspy and what role the device protocol plays in successful integration without exposing sensitive implementation specifics.

The AT-17G is a 4G GPS asset tracker built for long term deployments and covert mounting. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact message behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation. Review manufacturer guidance for the latest, device specific details.

## Protocol Overview

The tracker protocol is the set of rules and message behaviors that allow the AT-17G to transmit GPS fixes, event flags, and telemetry to a server such as Plaspy. In public terms, the protocol defines how the device identifies itself, reports position and status, and signals events like movement, geofence triggers, or low battery.

- Enables device identification so Plaspy can associate incoming data with the correct asset and account.
- Carries positional data and timestamps so Plaspy can render location, history, and playback.
- Transmits event and status indicators such as movement alerts, low battery, and remote audio availability to support alerting and workflows.
- Facilitates telemetry needed for maintenance planning and operational visibility without revealing packet internals.
- Works over standard network transports so the AT-17G can report securely and reliably when cellular coverage is available.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and uses automatic detection to identify incoming tracker traffic. For most users, this means devices only need to be configured to report to the Plaspy endpoint and Plaspy will match the incoming stream to the right protocol handler.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address that may be used for device configuration is 54.85.159.138
- Plaspy uses port 8888 for all supported tracker devices and that single port is shared across devices
- Devices may be configured to transmit to Plaspy using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once the device reports to the Plaspy endpoint
- In most deployments the user does not need to select a protocol manually inside Plaspy if the device is correctly pointed at the Plaspy endpoint

## Transport and Connection Context

Connection details determine how the AT-17G reaches Plaspy but do not expose protocol internals. The device relies on cellular data to reach the internet and then targets the Plaspy reporting endpoint. Depending on the tracker configuration and firmware capabilities, transport may be set to UDP or TCP.

- The AT-17G may be configured to report to d.plaspy.com or directly to 54.85.159.138
- Transport options supported by devices include UDP or TCP on port 8888
- Plaspy uses the same port 8888 for all devices to simplify configuration across models
- Choose UDP when lower overhead is preferred and TCP when reliable delivery or session behavior is required by the device firmware
- Ensure the device APN and cellular settings are correct so the tracker can establish outbound connections to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change message contents or available features; always check the device firmware level before assuming behavior
- Hardware revisions or optional accessories may expose additional inputs or telemetry that affect reported events
- Manufacturer configuration tools are the authoritative source for transport selection and server address settings
- Some features such as remote audio monitoring or ignition sensing may require explicit enabling and may depend on external wiring or accessories
- Devices configured to use TCP versus UDP may behave differently in lossy networks; select the transport that matches operational needs
- Validate device reporting in a controlled test before wide scale deployment to confirm Plaspy receives expected data

## Why Protocol Understanding Matters

Understanding how the AT-17G communicates helps streamline setup, reduces troubleshooting time, and supports long term reliability in Plaspy deployments. Clear knowledge of the protocol context improves onboarding and ensures the device delivers the telemetry your operations depend on.

- Speeds up device provisioning by ensuring correct server and transport settings from the start
- Helps diagnose connectivity issues by narrowing the problem to transport, APN, or device configuration
- Supports feature planning by clarifying which events and telemetry the device reports
- Improves operational reliability by aligning reporting frequency and work modes with battery and coverage expectations
- Enables safer integration of optional features like remote audio monitoring into Plaspy workflows

## Why Use Plaspy with This Protocol

The AT-17G combined with Plaspy offers a practical solution for organizations that need reliable location, eventing, and long battery life for high value assets. Plaspy ingests the OT-17G telemetry and exposes it through maps, alerts, and history playback so dispatchers, security teams, and fleet managers can act on real time information.

To learn more about how Plaspy can work with devices like the AT-17G, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions, review official manufacturer documentation at https://autoseekergps.com/ as protocol support and firmware behavior can change over time.
