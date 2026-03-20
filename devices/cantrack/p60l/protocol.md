---
slug: /cantrack/p60l/protocol
id: p60l-protocol
sidebar_label: Protocol
title: CanTrack - P60L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the CanTrack P60L with Plaspy for reliable real time tracking and telemetry
keywords:
  - CanTrack P60L protocol
  - CanTrack P60L GPS protocol
  - CanTrack P60L protocol for Plaspy
  - CanTrack P60L communication protocol
  - CanTrack P60L tracking protocol
  - P60L Plaspy integration
  - Plaspy compatible tracker
  - personal GPS tracker protocol
  - GNSS telemetry integration
  - SOS and voice tracker protocol
---

# CanTrack - P60L Protocol

This page describes the public protocol context for using the CanTrack P60L personal GPS tracker with the Plaspy platform. It focuses on how the device communicates at a high level, what role the tracker reporting protocol plays in delivering location, alerts, voice events, and telemetry to Plaspy, and what to check when configuring a P60L device for real time operations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly pointed at the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides general guidance while encouraging verification against the device maker documentation.

## Protocol Overview

The communication protocol of the P60L governs how GNSS positions, SOS events, voice-triggered information, temperature telemetry, and stored log uploads are sent from the tracker to the platform. At a high level the protocol enables the tracker to identify itself, report useful telemetry in real time or in batches, and support remote configuration pathways supported by Plaspy.

- Carries real time location updates and positional metadata so Plaspy can map and time stamp device fixes.
- Transmits event notifications such as SOS presses, power or movement alerts, and voice session indicators.
- Delivers environmental telemetry like onboard temperature readings for monitoring and alert thresholds.
- Supports offline logging uploads so stored location history is transmitted when connectivity is restored.
- Enables remote commands and configuration mechanisms exposed by the device for operational management.
- Works together with transport settings so Plaspy receives usable device data regardless of the underlying network layer.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for device traffic and applies automatic protocol detection to identify incoming tracker messages. When a P60L is configured to report to Plaspy, the platform typically recognizes the device protocol automatically and begins processing location and event data without manual selection of a protocol by the user.

- Plaspy receives device connections at the domain d.plaspy.com and the public IP 54.85.159.138.
- All devices supported by Plaspy use the same port, which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol once the device sends traffic to the Plaspy endpoint.
- In most cases users do not need to manually pick a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint.
- Proper device identification on first contact allows Plaspy to map incoming telemetry to the correct device record.

## Transport and Connection Context

The P60L can send its telemetry over IP using cellular connectivity, and the transport used for delivery may vary by device configuration and firmware capabilities. Plaspy supports both UDP and TCP transports for device reporting on the shared port, so ensure the P60L is configured to use one of those transports when targeting Plaspy.

- Devices may be configured to report to d.plaspy.com or to the numeric endpoint 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen settings.
- Plaspy uses the same port for all supported devices which reduces configuration errors during deployment.
- Choose transport mode (UDP or TCP) according to network reliability and device command/response needs.
- Verify that SIM and APN settings on the P60L are correct so the device can open the selected transport to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware differences across P60L releases can change available telemetry fields, event naming, or reporting frequency; always check device firmware notes.
- Hardware revisions or optional features (for example voice or temperature variants) may add or omit specific data elements.
- Manufacturer side settings and SMS configuration commands may influence whether the device reports via UDP or TCP and what endpoint it uses.
- Offline logging and batch upload behavior can vary with firmware and available storage settings.
- When integrating at scale, validate a sample device end to end before widescale deployment to confirm transport and event handling.
- For device specific command lists, FOTA behaviors, and feature flags consult the CanTrack documentation and changelogs.

## Why Protocol Understanding Matters

Understanding the P60L communication protocol is practical for reliable setup, effective troubleshooting, and ensuring long term data quality in Plaspy. Knowing what the device will send, when it sends it, and how it reports events helps administrators and integrators make informed configuration choices.

- Helps confirm that SOS, voice events, and temperature telemetry are delivered and processed by Plaspy.
- Aids in diagnosing connectivity issues by checking transport, endpoint, and APN settings on the device.
- Supports correct configuration for offline logging behavior and upload intervals to preserve history.
- Improves alert tuning by understanding how often the device reports position and telemetry.
- Enables smoother large scale rollouts by informing device provisioning and firmware update strategies.

## Why Use Plaspy with This Protocol

Using the CanTrack P60L with Plaspy gives organizations a practical route to real time visibility, incident response, and environmental telemetry in one workflow. The P60L combines accurate GNSS positioning, voice capability, SOS emergency signaling, and temperature sensing, and Plaspy ingests these streams so teams can act on alerts, map device locations, and review historical telemetry.

To learn more about Plaspy and how it handles device integration and fleet workflows visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer instructions verify information on the official CanTrack site https://www.cantrackgps.com/ as protocol support and firmware behavior can change over time.
