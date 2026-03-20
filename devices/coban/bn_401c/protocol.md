---
slug: /coban/bn_401c/protocol
id: bn_401c-protocol
sidebar_label: Protocol
title: Coban - BN-401C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Coban BN-401C and how it communicates with Plaspy for GPS tracking and alarm reporting
keywords:
  - Coban BN-401C protocol
  - BN-401C GPS protocol
  - Coban GPS tracker protocol
  - BN-401C Plaspy compatibility
  - GPS tracker communication
  - vehicle tracking protocol
  - motorcycle tracker BN-401C
  - Plaspy device protocol
  - tracker protocol overview
  - GPS telemetry integration
---

# Coban - BN-401C Protocol

This page documents the public protocol context for using the Coban BN-401C tracker with Plaspy. It focuses on how the device communicates in general terms, what connection settings are used to reach Plaspy, and the practical considerations that matter when integrating the BN-401C into a Plaspy deployment. The BN-401C is a compact tracker intended for motorcycles and small vehicles with multi network communications and a set of alarms and remote control capabilities that Plaspy can ingest.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Public Plaspy connection facts you should know include the Plaspy server domain d.plaspy.com, the public server IP 54.85.159.138, and the common port 8888. Devices may be configured to use UDP or TCP on port 8888 to reach Plaspy. Exact protocol behavior and message content can vary by firmware, hardware revision, and manufacturer implementation, so validate device specific details with official Coban guidance when needed.

## Protocol Overview

The BN-401C communication protocol enables the device to transmit GNSS fixes, status and alarm events, and to receive remote control commands when supported. In the context of Plaspy, the protocol's role is to deliver usable telemetry and event information that the platform can map into location history, alerts, and control actions.

- Transporting position reports and timestamps from the tracker to the server so Plaspy can display live location and trip history.
- Sending event notifications such as ACC ignition state, geo fence triggers, SOS, and power disconnects so Plaspy can generate alerts.
- Providing state information that lets Plaspy correlate alarm events with device status and telemetry for actionable dashboards.
- Enabling remote control or immobilization workflows via relay control when the tracker and wiring harness expose that capability.
- Allowing fallbacks like SMS reporting when IP connectivity is not available to maintain continuity of critical alerts.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a single public endpoint and automatically determines which tracker protocol is in use based on the incoming messages and the device behavior. This automatic detection reduces setup steps for most users so that the device can be integrated simply by pointing it to the Plaspy address.

- Plaspy listens at d.plaspy.com (54.85.159.138) on a single shared port 8888 for device connections.
- Devices may use TCP or UDP to send their reports to the Plaspy endpoint depending on device configuration.
- Because Plaspy auto detects the protocol, users typically do not need to manually select a protocol inside Plaspy when the device is correctly configured to report to the Plaspy endpoint.
- Initial device heartbeats or reporting messages that identify device status trigger the platform detection and mapping to telemetry fields.
- For deployments with multiple tracker models, Plaspy’s shared port approach simplifies server configuration since all devices use the same port.

## Transport and Connection Context

The BN-401C supports IP based reporting over cellular networks and can be configured to reach Plaspy using either UDP or TCP on the platform port. When setting up the device, point it to the Plaspy endpoint so reports and alerts arrive reliably.

- Devices may be configured to send data to d.plaspy.com or directly to 54.85.159.138.
- Plaspy accepts both UDP and TCP traffic on port 8888; choose the transport supported by your device and stable for your SIM network.
- All devices in Plaspy use the same port 8888, which simplifies network and firewall configuration for large fleets.
- If IP connectivity is unavailable, the BN-401C may also support SMS as an alternate reporting channel for critical alerts.
- Ensure the device APN and SIM settings are correct so the tracker can establish a data session to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message details and available telemetry fields; verify the device firmware version when assessing compatibility.
- Hardware revisions or optional accessory modules (for example different wiring harnesses or relays) can affect which telemetry or remote control features are available.
- Transport choice matters; some carriers or installations prefer TCP for reliability while others use UDP for lower overhead, so confirm which transport the device is set to use.
- Manufacturer configuration defaults may differ from installation expectations; review and adjust device reporting settings as part of commissioning.
- Validate feature availability such as immobilizer control, low battery reporting, and SOS behavior against Coban documentation for the BN-401C.
- Test each device in a controlled environment before widespread deployment to confirm that Plaspy receives the expected telemetry and events.

## Why Protocol Understanding Matters

A clear understanding of how the BN-401C reports data and how Plaspy consumes those messages helps ensure reliable setup, faster troubleshooting, and predictable behavior in production. Knowing the connection context and common variability across firmware or revisions reduces integration time and operational surprises.

- Ensures the tracker is configured to reach the correct Plaspy endpoint and transport for reliable reporting.
- Helps map device events such as ACC, SOS, and geo fence alerts to the correct Plaspy alert rules and workflows.
- Simplifies troubleshooting when expected reports do not arrive by focusing checks on APN, transport selection, and server reachability.
- Allows planners to anticipate behavior during power loss or offline periods using the BN-401C backup battery and smart power modes.
- Supports operational decisions about remote control features and safety procedures when using immobilization or relay functions.

## Why Use Plaspy with This Protocol

Using the BN-401C with Plaspy provides a compact, discreet tracking solution combined with a centralized platform for live maps, historical playback, and configurable alerts. For motorcycle fleets, shared vehicle programs, and individual anti-theft deployments, the combination of reliable cellular reporting and Plaspy’s alerting and reporting features delivers operational visibility and faster incident response.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://www.coban.net/.
