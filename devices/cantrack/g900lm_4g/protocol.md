---
slug: /cantrack/g900lm_4g/protocol
id: g900lm_4g-protocol
sidebar_label: Protocol
title: CanTrack - G900LM-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack G900LM-4G and how it communicates with Plaspy for real time tracking and fleet management
keywords:
  - CanTrack G900LM-4G
  - CanTrack G900LM
  - G900LM-4G protocol
  - G900LM protocol
  - CanTrack GPS protocol
  - GT06 protocol
  - GPS tracker protocol
  - Plaspy compatibility
  - vehicle tracking protocol
  - fleet tracking Plaspy
---

# CanTrack - G900LM-4G Protocol

This page provides a public, non sensitive overview of the communication protocol context for the CanTrack G900LM-4G when used with the Plaspy platform. It is intended to clarify how the tracker reports telemetry and alarms to Plaspy and what aspects of the device communication are relevant to integration and deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly reporting to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so consider this a high level integration guide rather than a firmware specific manual.

## Protocol Overview

The protocol used by the G900LM-4G defines how the tracker identifies itself, packages location and status updates, and signals alarms to a remote server. In practical terms, the protocol enables the device to deliver GPS fixes, power and ignition status, and alarm events to Plaspy so those items can be shown on live maps and used in reports.

- Enables periodic and event driven telemetry such as location, speed, ignition state, and alarm events.
- Provides an identifier and session context so Plaspy can associate incoming data with the correct vehicle or asset.
- Carries status and diagnostic information that Plaspy uses for alerts, history, and device health monitoring.
- Allows for remote configuration and command interactions mediated by the platform when supported by device firmware.
- Supports alarm types commonly used in fleet scenarios including movement, power cut, and speed alerts.

## How Plaspy Detects the Protocol

Plaspy listens on a shared, public endpoint for incoming tracker reports, and it automatically detects the tracker protocol once data arrives from a device configured to report to the platform. In most deployments the user does not need to select a protocol inside Plaspy if the device is correctly configured to send to the Plaspy endpoint.

- Plaspy’s public server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- All devices use the same port on Plaspy which simplifies setup across mixed fleets.
- The device only needs to be pointed to the Plaspy endpoint and use the supported transport for Plaspy to receive messages.
- When the device is configured to report to Plaspy, protocol detection happens automatically and no manual protocol selection is usually required.
- If a device has multiple firmware modes or transport options, ensure it is set to the mode that corresponds to the manufacturer guidance for platform reporting.

## Transport and Connection Context

Connection choices affect how the tracker sends its protocol messages to Plaspy. The G900LM-4G can be configured to use common IP transports and should be directed at the Plaspy endpoint using the recommended settings for that device and deployment.

- The device may be configured using UDP or TCP on port 8888 depending on device support and local configuration.
- Devices may point to the domain d.plaspy.com or directly to the server IP 54.85.159.138 to reach Plaspy.
- Plaspy accepts tracker connections on port 8888 and uses the same port for all supported devices to simplify network settings.
- Choose UDP or TCP based on the device firmware capabilities, network reliability, and the commands you need to send from the platform.
- Verify APN and GSM configuration on the tracker so that it can reach the Plaspy endpoint from the vehicle cellular network.

## Protocol Compatibility Notes

- The G900LM-4G is commonly associated with GT06 series compatibility in manufacturer documentation, but exact behavior depends on firmware and regional variants.
- Firmware revisions can add, change, or remove fields and command support; always verify the device firmware version when troubleshooting.
- Hardware revisions or different wiring variants (for example 4 pin versus 8 pin) can affect available inputs and remote control behavior even if the core reporting protocol is the same.
- Transport selection between UDP and TCP can affect reliability and which remote commands are available or how acknowledgements are handled.
- Manufacturer regional variants or band variants may influence the configuration steps required to reach the platform.
- Validate compatibility and recommended settings against official CanTrack documentation for the specific model and firmware you are deploying.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps installers and fleet managers ensure reliable reporting, correct alarm mapping, and consistent behavior when the device is integrated with Plaspy. Clear protocol knowledge reduces setup time and simplifies troubleshooting when devices behave unexpectedly.

- Helps confirm that the device is correctly sending identification and telemetry so Plaspy can map readings to vehicles.
- Makes it easier to diagnose connectivity issues such as incorrect APN, server address, or transport selection.
- Informs decisions about reporting intervals, event filters, and alarm thresholds to optimize data usage and responsiveness.
- Clarifies which remote commands and configuration options are supported by the current firmware.
- Reduces time to resolution by focusing vendor or firmware support requests on the most relevant protocol behaviors.

## Why Use Plaspy with This Protocol

Using the G900LM-4G with Plaspy gives fleets a compact, hard wired tracker combined with a platform that consolidates real time location, alarms, and historical playback. Plaspy’s automatic protocol detection and unified port approach simplify device onboarding across a mixed set of models and firmware variants, which helps reduce deployment complexity for large rollouts.

If you want to learn more about Plaspy and how it supports trackers such as the G900LM-4G, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance, please verify information on the official CanTrack website https://www.cantrackgps.com/ as device implementations and firmware features can change over time.
