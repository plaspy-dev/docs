---
slug: /arknav/ir_7/protocol
id: ir_7-protocol
sidebar_label: Protocol
title: ArkNav - IR-7 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for ArkNav IR 7 hybrid satellite GSM tracker and how it communicates with Plaspy
keywords:
  - ArkNav IR-7 protocol
  - ArkNav IR-7 GPS protocol
  - ArkNav IR-7 Plaspy
  - IR-7 tracking protocol
  - ArkNav tracker protocol
  - hybrid satellite GSM tracker
  - Iridium enabled tracker
  - fleet tracking ArkNav
  - vehicle tracking protocol
  - Plaspy device compatibility
---

# ArkNav - IR-7 Protocol

This page summarizes the public protocol context for using the ArkNav IR-7 tracker with Plaspy. It focuses on how the device communicates in general terms, what role the tracker reporting protocol plays in interoperability, and what to check when pointing an IR-7 at the Plaspy platform. The content is intended to help technical users and integrators understand connection expectations without exposing private implementation details.

The IR-7 is a hybrid satellite GSM tracker built for global coverage using the Iridium network alongside GSM connectivity. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always verify device specific behavior against the manufacturer documentation when planning deployments.

## Protocol Overview

The communication protocol of the IR-7 governs how the device identifies itself, reports position and status, and switches between available networks to ensure continuous reporting. The protocol enables Plaspy to receive telemetry that can be mapped into location updates, alerts, and sensor states for fleet and asset management.

- Enables device identification and session establishment so Plaspy can associate messages with a specific tracker.
- Carries telemetry such as GPS location, time stamping, power state, and sensor inputs for operational monitoring.
- Supports hybrid transport behavior to allow switching between GSM and Iridium satellite links depending on signal availability.
- Ensures message persistence and resend behavior so data reaches the server despite intermittent connectivity.
- Works together with device configuration controls to allow remote updates and reporting frequency adjustments.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when a device reports to the Plaspy endpoint and uses the same server settings for all supported devices. In most installations there is no need to manually select a protocol inside Plaspy if the IR-7 is configured to report to the platform endpoint.

- Plaspy receives device reports at the shared server domain d.plaspy.com and server IP 54.85.159.138.
- All devices in Plaspy use the same port for inbound device connections, which is 8888.
- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- When a properly configured IR-7 reports to the Plaspy endpoint, Plaspy will detect the reporting format and process the incoming data automatically.
- Users typically only need to confirm the device is pointed at the Plaspy endpoint and that network transport matches device capabilities.

## Transport and Connection Context

Connection and transport details determine how the IR-7 reaches the Plaspy servers. The IR-7 supports multiple communication paths and can be set to use whichever transport is most reliable for the deployment scenario. Keep the connection context in mind when provisioning devices and validating that messages arrive at Plaspy.

- The IR-7 may be configured to use either UDP or TCP on port 8888 when reporting to Plaspy.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or the numeric server address 54.85.159.138.
- Plaspy uses the same port for all supported trackers to simplify device configuration and routing.
- Hybrid operation means the tracker may switch from GSM GPRS to Iridium satellite reporting automatically when signal conditions change.
- Ensure firewall and network rules allow outbound connections to the Plaspy server on port 8888 for the chosen transport protocol.

## Protocol Compatibility Notes

- Firmware versions can alter message contents, available fields, and reporting behavior; verify compatibility for the exact firmware installed on each IR-7.
- Hardware revisions and optional modules can change available sensors, inputs, and transport capabilities that affect protocol behavior.
- Manufacturer configuration options may enable or disable certain reporting modes such as SMS, GPRS, or satellite, which affects how the device interacts with Plaspy.
- Choosing UDP or TCP affects delivery characteristics; select the transport that matches device configuration and network reliability.
- Always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 before relying on automatic detection.
- Confirm any site or carrier restrictions that could block satellite or cellular connections required for hybrid operation.

## Why Protocol Understanding Matters

A practical understanding of the IR-7 communication protocol and transport context makes device setup faster, reduces troubleshooting time, and improves long term reliability when using Plaspy. Knowing what the tracker sends and how it connects helps with diagnosis and configuration during deployment.

- Helps ensure correct server, transport, and network settings are applied so devices report successfully to Plaspy.
- Simplifies troubleshooting when messages are delayed, missing, or show unexpected fields.
- Clarifies how hybrid switching between GSM and Iridium affects reporting frequency and latency.
- Supports better planning for power usage, message retention, and retransmit behavior in remote deployments.
- Assists in validating that firmware updates or configuration changes preserve compatibility with Plaspy.

## Why Use Plaspy with This Protocol

Using the ArkNav IR-7 with Plaspy provides organizations with a practical way to combine global satellite reach and local GSM efficiency into a single monitoring workflow. Plaspy's automatic protocol detection and unified connection endpoint reduce configuration complexity so teams can focus on operational insights rather than low level connectivity details.

To learn more about Plaspy and how it supports hybrid trackers like the IR-7, visit https://www.plaspy.com. For the most current device specific protocol guidance, firmware notes, and hardware details consult the manufacturer documentation at https://www.arknavgps.com.tw/ as protocol support and device behavior can change over time.
