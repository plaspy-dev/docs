---
slug: /megastek/mt90n/protocol
id: mt90n-protocol
sidebar_label: Protocol
title: Megastek - MT90N Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for integrating the Megastek MT90N GPS tracker with Plaspy using shared connection settings
keywords:
  - Megastek MT90N protocol
  - MT90N GPS tracker
  - Megastek protocol Plaspy
  - MT90N communication protocol
  - MT90N tracking protocol
  - Megastek GPS Plaspy
  - personal GPS tracker protocol
  - NB IoT tracker protocol
  - MT90N compatibility
  - GPS tracker integration Plaspy
---

# Megastek - MT90N Protocol

This page describes the public protocol context for using the Megastek MT90N tracker with Plaspy. It focuses on how the device communicates location and telemetry to Plaspy in broad, non sensitive terms so integrators and administrators understand the role of the reporting protocol when the MT90N is connected to Plaspy for real time tracking, alerts and historical playback.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker reporting protocol when the device is configured to send to the Plaspy endpoint. Exact protocol behavior and available fields can vary with firmware version, hardware revision and manufacturer implementation, so this page provides general, safe guidance about transport and compatibility rather than firmware specific details.

## Protocol Overview

The MT90N reports position and telemetry to a remote server using cellular NB IoT connectivity, assisted positioning sources, and a TCP or UDP transport. The protocol implemented on the device determines how messages are framed, which event types are reported and which telemetry fields are available; Plaspy ingests those messages and converts them into usable tracking data and events.

- Enables the device to identify itself and send location fixes and status updates to Plaspy.
- Carries event notifications such as SOS presses, low battery alerts and geo fence transitions.
- Transports telemetry useful to Plaspy for real time display and historical track reconstruction.
- Works over standard packet transports so the device can use either TCP or UDP depending on configuration.
- Allows Plaspy to map incoming messages to tracking records without requiring manual protocol selection by the user.

## How Plaspy Detects the Protocol

Plaspy receives incoming messages on a common endpoint and automatically detects the tracker protocol used by the MT90N when the device is sending to the Plaspy server. For most deployments the user configures the device to report to the Plaspy endpoint and the platform picks the appropriate parser and mapping automatically.

- Plaspy uses a shared server endpoint to collect reports and performs automatic protocol identification.
- Devices configured to send to d.plaspy.com or the Plaspy server IP will be ingested by the platform.
- Users typically do not need to select a protocol manually inside Plaspy when the device is correctly pointed to the Plaspy endpoint.
- Plaspy supports the same listening port across all supported devices, simplifying configuration and deployments.
- Proper device configuration and matching APN or network settings on the SIM are required for successful reporting.

## Transport and Connection Context

The MT90N is capable of reporting over common packet transports and can be configured to use either UDP or TCP to send messages to Plaspy. Many installers point the device at the Plaspy domain or server IP and set the device transport to the network and use case that best matches their connectivity and reliability needs.

- Devices may be configured to report to d.plaspy.com as the Plaspy server domain.
- Plaspy server IP 54.85.159.138 is an alternate address that devices can use for reporting.
- The Plaspy listening port for all supported devices is 8888.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network conditions.
- Choosing TCP can improve delivery guarantees on unreliable links while UDP may reduce overhead on constrained networks.

## Protocol Compatibility Notes

- Firmware revisions can change message fields, event IDs and available telemetry so check device firmware level when validating behavior.
- Hardware revisions or regional variants may implement slightly different reporting sets or helper services such as assisted GPS or Wi Fi scanning.
- Transport selection matters for reliability and network compatibility; some carriers or NB IoT networks may prefer specific transports.
- Manufacturer configuration commands and APN handling can affect whether the device successfully reaches the Plaspy endpoint.
- Confirm which events the device sends by default and which require configuration, for example SOS behavior and reporting intervals.
- Always validate compatibility against the official manufacturer documentation for details specific to your MT90N unit.

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol helps administrators successfully set up devices, troubleshoot delivery or parsing issues and ensure reliable long term operation when using Plaspy. Even when Plaspy auto detects the protocol, knowledge of transport choices and firmware differences speeds diagnostics and reduces deployment time.

- Ensures correct device configuration so reports reach d.plaspy.com or the Plaspy server IP and port.
- Helps interpret which telemetry fields and events will be visible in Plaspy for alerts and historical analysis.
- Guides decisions about transport selection and reporting intervals to balance battery life and data freshness.
- Reduces troubleshooting time when a device appears offline by narrowing likely causes to network, APN or firmware variants.
- Supports safe scaling by documenting expected device behavior across firmware and regional variants.

## Why Use Plaspy with This Protocol

Using the Megastek MT90N with Plaspy provides organizations with a compact NB IoT capable tracker that supplies position, SOS alerts and telemetry into a single monitoring platform. The combination of u blox GNSS, Wi Fi and LBS assistance on the MT90N together with Plaspy ingestion enables practical personal safety, pet recovery and short term asset monitoring use cases with configurable reporting and geo fence alerts.

To learn more about how Plaspy handles incoming tracker data and to review deployment options, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and manufacturer configuration guides verify current information on the Megastek website at https://www.megastek.com/ since protocol support and firmware behavior can change over time.
