---
slug: /dct/syrus_satcom_lite/protocol
id: syrus_satcom_lite-protocol
sidebar_label: Protocol
title: DCT - Syrus Satcom Lite Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating DCT Syrus Satcom Lite with Plaspy for satellite enabled GPS tracking and remote asset visibility
keywords:
  - DCT Syrus Satcom Lite protocol
  - DCT Syrus Satcom Lite GPS protocol
  - Syrus Satcom Lite Plaspy
  - satellite gps tracker protocol
  - remote asset tracking protocol
  - fleet tracking Plaspy compatibility
  - Pegasus IoT Cloud integration
  - satcom asset tracker protocol
  - satellite enabled GPS protocol
  - Syrus Satcom Lite tracking protocol
---

# DCT - Syrus Satcom Lite Protocol

This page explains the public protocol context for using the DCT Syrus Satcom Lite tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what role the reporting protocol plays, and what to consider when configuring remote satellite enabled GPS tracking into the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary with firmware version, hardware revision, and manufacturer implementation, so this page provides general guidance while recommending review of vendor documentation for device specific details.

## Protocol Overview

The Syrus Satcom Lite communication protocol governs how the tracker sends position updates, motion events, sensor telemetry, and alerts into a cloud backend such as Plaspy. At a public level the protocol enables the tracker to identify itself, report actionable telemetry, and support event driven workflows without exposing vendor proprietary internals.

- Enables reporting of GPS positions, motion detections, and configurable auxiliary sensor inputs for remote monitoring.
- Carries status and alert information so Plaspy can trigger notifications and rules based workflows.
- Provides persistent identification data so Plaspy can associate messages with the correct asset record.
- Supports configurable reporting intervals and emergency message forwarding to ensure critical events are prioritized.
- Bridges satellite transport into cloud ingestion so assets beyond cellular coverage appear in Plaspy dashboards.

## How Plaspy Detects the Protocol

Plaspy accepts device traffic on a single shared endpoint and automatically detects the protocol used by the tracker when properly configured to report to Plaspy. In most deployments the device simply needs to be pointed at the Plaspy endpoint using the correct transport and port, and Plaspy handles protocol selection on the server side.

- Plaspy uses a unified server endpoint to accept telemetry from many tracker models and automatically detects the protocol.
- Users typically do not need to manually select a protocol inside Plaspy if the device reports to the Plaspy endpoint.
- Proper device identification and reporting format allow Plaspy to map incoming messages to the correct asset and feature set.
- Automatic detection reduces setup steps for mixed fleets by removing per device protocol configuration in many cases.
- If a device is not detected automatically, verifying device reporting settings and manufacturer guidance is the recommended next step.

## Transport and Connection Context

Syrus Satcom Lite devices report telemetry over satellite links that ultimately forward data into IP transport to reach Plaspy. The device may be configured to use either UDP or TCP depending on device support and the chosen satellite routing; Plaspy accepts both transports on the shared port and endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138.
- Plaspy listens on port 8888 for device connections and ingestion.
- The device may be configured using UDP or TCP on port 8888 to send telemetry to Plaspy.
- All devices in Plaspy use the same port which simplifies fleet level configuration and routing.
- Ensure any satellite gateway or intermediate routing preserves the chosen transport and destination details when forwarding to Plaspy.

## Protocol Compatibility Notes

- Compatibility can depend on Syrus Satcom Lite firmware version and hardware revision; verify firmware notes for protocol changes.
- Manufacturer configuration options and satellite gateway behavior can affect which transport and reporting features are available.
- Transport selection between UDP and TCP may be constrained by satellite provider routing or gateway settings.
- Plaspy automatically detects the incoming protocol when the device reports to the Plaspy endpoint, but correct device addressing is required.
- Confirm which auxiliary inputs and motion reporting modes are enabled on the device to ensure Plaspy receives the telemetry your workflows depend on.
- Always validate compatibility and current behavior against the manufacturer documentation when planning deployments.

## Why Protocol Understanding Matters

Understanding how the Syrus Satcom Lite communicates helps ensure reliable delivery of location and alert data into Plaspy, shortens troubleshooting cycles, and supports predictable operational behavior for remote assets.

- Speeds up initial setup by confirming device reporting address, transport, and expected message cadence.
- Helps troubleshoot missing or delayed messages by checking transport, routing, and firmware differences.
- Enables informed decisions about reporting frequency to balance battery life and timeliness of updates.
- Clarifies which auxiliary sensors and motion events will be available in Plaspy dashboards and rules.
- Supports long term reliability by aligning device firmware and satellite routing with Plaspy ingestion expectations.

## Why Use Plaspy with This Protocol

Using the Syrus Satcom Lite with Plaspy extends real time visibility to assets operating beyond cellular coverage while preserving centralized monitoring, alerting, and historical analysis. Organizations gain actionable telemetry from motion events, comparative GPS reports, and auxiliary sensor inputs and can surface those signals in Plaspy for rules based notifications and operational oversight.

To learn more about Plaspy and how it can consolidate satellite delivered GPS and telemetry into a single operational view, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance from the manufacturer please verify information on the DCT website at https://www.digitalcomtech.com/ as device behavior and protocol support can change with firmware and hardware revisions.
