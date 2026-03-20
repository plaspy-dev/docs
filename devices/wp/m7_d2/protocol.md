---
slug: /wp/m7_d2/protocol
id: m7_d2-protocol
sidebar_label: Protocol
title: WP - M7 D2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the WP M7 D2 GPS tracker and how it communicates with Plaspy for vehicle tracking integration
keywords:
  - WP M7 D2 protocol
  - WP M7 D2 GPS protocol
  - WP M7 D2 Plaspy compatibility
  - WP M7 D2 communication protocol
  - WP M7 D2 tracking protocol
  - Plaspy device integration
  - vehicle tracker protocol
  - GPS tracker communication
  - tracker transport UDP TCP
  - fleet tracking protocol
---

# WP - M7 D2 Protocol

This page provides a public, high level explanation of the communication context for the WP M7 D2 tracker when used with the Plaspy platform. It focuses on how the device reports location and status to Plaspy and what connection settings are used for successful integration without exposing private parsing details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this page describes the general communication context and practical compatibility considerations based on the M7 D2 feature set.

## Protocol Overview

The protocol used by the M7 D2 defines how the tracker transmits position, movement, alerts, and device state to a remote server. For integration with Plaspy the protocol's public role is to establish a transport connection, identify the device, and deliver telemetry in a form that the platform can interpret and map to vehicle events and location history.

- Enables the tracker to send location, movement, and alert reports to a remote server for processing.
- Carries identification and status information so Plaspy can associate incoming reports with the correct device record.
- Supports multiple transport methods available on the M7 D2 such as SMS, GPRS, UDP, and TCP for flexible connectivity.
- Provides the basis for motion reports, tamper or detached alerts, low battery notifications, and roaming related messages.
- Allows Plaspy to convert raw device reports into usable telemetry for mapping, alerts, and historical playback without exposing device internals.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared public endpoint and determines the incoming tracker protocol automatically so users generally do not need to select a protocol manually in the platform. When the M7 D2 is configured to report to Plaspy, the platform matches incoming connections and message characteristics to the correct handler for that device.

- Plaspy listens on a single public endpoint for device connections at d.plaspy.com and the corresponding server IP 54.85.159.138.
- All devices supported by Plaspy use the same listening port, making device configuration consistent.
- Plaspy automatically detects the tracker protocol from incoming traffic when a device sends reports to the Plaspy endpoint.
- In most cases you only need to point the M7 D2 to the Plaspy address and port; Plaspy will handle protocol identification.
- If a device uses SMS as a fallback, Plaspy can ingest position messages relayed via the platform routing or transcribed gateway pathways when available.

## Transport and Connection Context

The M7 D2 supports multiple transport options for reporting which gives flexibility in network conditions and deployment scenarios. For Plaspy integration, it is important to configure the device to use one of the supported IP transports and point it to the Plaspy endpoint so that reports reach the platform reliably.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices configured for IP reporting can point to d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices to simplify device configuration across models.
- UDP is commonly used for low overhead reporting while TCP may be chosen for more reliable delivery where the device supports it.
- Ensure outbound mobile data or GPRS settings on the tracker permit connections to the Plaspy endpoint and the chosen transport.

## Protocol Compatibility Notes

- Firmware revisions on the M7 D2 can change behavior such as message fields, reporting intervals, and supported transport features.
- Hardware or region variants may implement small differences in reporting or supported commands; validate the specific unit details.
- Transport selection (UDP vs TCP) can affect delivery characteristics; choose the transport that best matches network reliability and device capability.
- Manufacturer configured defaults (APN, server address format, roaming preferences) influence whether the device can reach the Plaspy endpoint.
- Always verify device ID formatting and reporting mode so Plaspy can associate incoming messages with the correct device record.
- Consult official manufacturer documentation for device specific firmware notes that affect protocol behavior before large scale deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure the M7 D2 is configured to reach Plaspy reliably and that the platform can interpret the device reports correctly. Clear knowledge of transport options, reporting modes, and common device behaviors reduces setup time and improves long term reliability.

- Speeds initial setup by confirming the correct server address and transport are used.
- Helps diagnose why a device may not appear in Plaspy if reports are not reaching the endpoint.
- Guides choices around transport (UDP vs TCP) and mobile data settings for different network environments.
- Supports planning for firmware updates and hardware revisions that can alter behavior.
- Improves response to alerts such as tamper or low battery by ensuring those reports are enabled and routed.

## Why Use Plaspy with This Protocol

Using the WP M7 D2 with Plaspy provides organizations with a straightforward path to gather location, movement, and alert data from a durable, long standby battery tracker. Plaspy’s shared endpoint approach and automatic protocol detection simplify device provisioning so teams can focus on operational monitoring rather than low level parsing.

If you are evaluating the M7 D2 for fleet or asset tracking, configure the tracker to report over IP to d.plaspy.com or to 54.85.159.138 on port 8888 using the transport that best fits your network conditions. Plaspy will automatically detect the tracker protocol and associate incoming reports with your account when the device is correctly configured.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the most current firmware behavior and device specific protocol details verify information on the manufacturer website http://www.wondeproud.com/ since protocol support and device implementation can change over time.
