---
slug: /concox/x3/protocol
id: x3-protocol
sidebar_label: Protocol
title: Concox - X3 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Concox X3 and how the tracker communicates with Plaspy for real time fleet tracking and monitoring
keywords:
  - Concox X3 protocol
  - Concox X3 GPS protocol
  - Concox X3 communication protocol
  - Concox X3 tracking protocol
  - Concox GPS tracker
  - X3 GPS tracker protocol
  - Plaspy compatible tracker
  - vehicle tracking protocol
  - fleet management tracking
  - Concox tracker compatibility
---

# Concox - X3 Protocol

This page describes the public protocol context for using the Concox X3 GPS tracker with Plaspy. It focuses on how the X3 communicates telemetry and event data to Plaspy and what aspects of the device connection and reporting are relevant for successful integration and operation in fleet tracking deployments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior, available features, and message timing can vary by firmware version, hardware revision, and manufacturer implementation, so this guide stays at a public, implementation neutral level while directing readers to official manufacturer documentation for the most current details.

## Protocol Overview

The tracker communication protocol defines how the X3 sends location, status and event information to a backend service such as Plaspy and how remote commands and control signals are acknowledged where supported. Understanding the protocol role helps operators confirm that telemetry, driving behavior events, and input/output signals are being delivered in a form that Plaspy can ingest and act upon.

- Carries GNSS positions and auxiliary telemetry such as ACC, SOS, inputs and outputs to the server for map visualization and reporting.
- Transmits driving behavior and sensor events that enable fleet safety workflows and alerts inside Plaspy.
- Enables remote control actions such as relay based immobilizer commands when the device and deployment allow remote outputs.
- Provides device identity and status information so Plaspy can associate incoming messages with the correct vehicle and configuration.
- Supplies timestamped events used by Plaspy to build histories, triggers, and automated alarms for geofences, movement, and power changes.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections at a shared endpoint and port and determines the tracker protocol from the incoming session and message characteristics. In most deployments the device only needs to be pointed at the Plaspy endpoint and use the platform port, and Plaspy will identify the protocol automatically.

- Plaspy listens on a single shared port for device traffic and applies automatic protocol detection on received connections.
- Users typically do not need to select a protocol inside Plaspy when the X3 is configured to report to the Plaspy endpoint.
- Detection is performed at the server side using observed connection attributes and message patterns rather than requiring user configuration of protocol type.
- Automatic detection helps streamline onboarding of mixed fleets with different device models that all report to the same Plaspy endpoint.

## Transport and Connection Context

Connection transport and addressing determine how the X3 reaches Plaspy and how reliable the session is for real time reporting. The X3 may be configured to use either UDP or TCP to send its telemetry to Plaspy depending on device configuration and network considerations.

- Devices may be configured to report to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy receives device traffic on port 8888 and the X3 can be set to use either UDP or TCP on that same port.
- All devices in Plaspy use the same port, which simplifies fleet level server configuration and onboarding.
- Choice of UDP or TCP can affect delivery characteristics and retry behavior depending on mobile network conditions and device firmware settings.
- Ensure APN and SIM settings on the X3 are correct so the device can establish outbound TCP or UDP sessions to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported event types, or optional fields that affect how data is interpreted by Plaspy.
- Hardware revisions or optional accessory configurations may add or remove I O points that appear in reports.
- Manufacturer side differences in configuration menus or default server settings may require adjusting the device to point at d.plaspy.com or the server IP.
- Selecting UDP versus TCP on the device matters for transport behavior and should match your operational requirements.
- Validate compatibility for specific features such as remote relay control, voice monitoring, or advanced sensor inputs against the device release notes.
- Always check the X3 device settings after firmware updates to confirm server address and transport settings remain correct.

## Why Protocol Understanding Matters

Knowing the communication protocol behavior helps simplify initial setup, diagnose connectivity issues, and ensure reliable long term operation when the X3 is used with Plaspy. Clear expectations about what the device reports and how the server expects to receive it reduce onboarding friction and improve incident response.

- Speeds troubleshooting when telemetry or events are not appearing in Plaspy by focusing on transport and server address settings.
- Helps align device configuration such as TCP versus UDP and APN parameters with operational needs.
- Clarifies which inputs and events the X3 can send so Plaspy users can map those signals into alerts and workflows.
- Supports planning for firmware updates and hardware changes by identifying features that may be affected.
- Improves confidence when configuring remote control features such as relay activation for immobilizer workflows.

## Why Use Plaspy with This Protocol

Using the Concox X3 with Plaspy gives fleet operators real time visibility into vehicle location, driving behavior, and critical inputs such as ACC and SOS. Plaspy ingests the X3 telemetry and event signals to populate maps, alerts and historical reports so teams can act on incidents, enforce policies, and run operational analyses across a fleet.

To learn more about Plaspy and how it manages device connectivity, visit https://www.plaspy.com. For device specific protocol, firmware, and implementation details confirm the latest information with the manufacturer at https://www.iconcox.com/ since protocol support and firmware behavior can change over time.
