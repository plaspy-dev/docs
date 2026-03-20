---
slug: /autofon/termo/protocol
id: termo-protocol
sidebar_label: Protocol
title: AutoFon - Термо Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for AutoFon Термо integration with Plaspy compatible telematics and fleet workflows
keywords:
  - AutoFon Термо protocol
  - AutoFon Термо GPS protocol
  - AutoFon Термо communication
  - AutoFon Термо tracking protocol
  - AutoFon heater controller Plaspy
  - AutoFon Термо compatibility
  - Plaspy device protocol
  - Plaspy compatible heater module
  - vehicle tracking protocol Plaspy
  - GSM heater controller protocol
---

# AutoFon - Термо Protocol

This page provides a public protocol context for using the AutoFon Термо heater controller with Plaspy. It describes how the device can be integrated into Plaspy-managed telematics workflows, the role of the device communication protocol in that integration, and practical considerations for installers and fleet managers. AutoFon Термо is a GSM based heater module intended to control aftermarket auxiliary parking heaters and is commonly paired with a Plaspy-compatible GPS tracker to deliver a complete telematics and control solution.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to Plaspy. Plaspy’s public endpoint is reachable at d.plaspy.com and also at the IP address 54.85.159.138 using port 8888. Devices may be configured to report using either UDP or TCP on port 8888. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non-sensitive protocol context rather than device internals.

## Protocol Overview

The communication protocol enables the AutoFon Термо and companion GPS trackers to exchange status, telemetry, and control events with Plaspy so heater actions and vehicle telemetry can be logged and acted on. For the Terмо unit specifically, the protocol context centers on GSM signaling for remote commands and event reporting that Plaspy can associate with vehicle records when used alongside a GPS tracker.

- Enables the device to report status and heater events that Plaspy can display and log
- Allows the pairing of heater control events with GPS telemetry when a Plaspy compatible tracker is present
- Provides a consistent channel for remote commands, scheduled events, and local overrides to be recorded in fleet workflows
- Acts as the bridge between the GSM based heater controller and Plaspy’s cloud services without exposing firmware internals
- Supports event-level visibility such as timer starts, manual overrides, and remote triggers when event logging is available

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at the shared endpoint and port and determines the appropriate device handling for each connection. In most cases, when a device is configured to send data to Plaspy’s endpoint, the platform will identify the reporting format and process the device messages without requiring manual protocol selection by the user.

- Plaspy listens on a single, shared port for all supported devices to simplify configuration
- The public Plaspy endpoint is d.plaspy.com and can also be reached at 54.85.159.138
- Port 8888 is used for device reporting and may be used with either UDP or TCP depending on device capabilities
- When a device reports to the Plaspy endpoint, the platform automatically associates incoming telemetry with the correct device type where possible
- Users generally only need to configure their device to report to the Plaspy endpoint and port; manual protocol selection inside Plaspy is typically not required

## Transport and Connection Context

Connection setup is a practical consideration for installers and integrators. AutoFon Термо itself is a GSM controller for heaters and typically communicates via SMS or call for control, while telemetry and event reporting that integrate with Plaspy rely on a companion GPS tracker or telemetry-capable device configured to send data to Plaspy. Network transport to Plaspy uses the same public settings for all devices to reduce setup complexity.

- Devices may be configured to report to d.plaspy.com or to the IP 54.85.159.138
- The transport layer uses port 8888 for all Plaspy supported devices to maintain uniform configuration
- Reporting may use UDP or TCP on port 8888 depending on the tracker or telemetry device configuration
- Since AutoFon Термо primarily uses GSM for heater control, pairing with a Plaspy compatible GPS tracker enables combined GPS and heater event reporting
- Keep firewall and carrier settings in mind so that connections to the Plaspy endpoint and port are permitted

## Protocol Compatibility Notes

- AutoFon Термо is primarily a GSM heater controller and not a standalone GNSS tracker; combined setups with Plaspy are common
- Manufacturer firmware revisions and hardware revisions can change available features and reporting behavior
- Transport selection between UDP and TCP can affect delivery semantics; confirm supported transports for the specific GPS/telemetry unit in use
- Some implementations rely on companion devices to forward heater events to Plaspy rather than the Terмо unit sending TCP or UDP data directly
- The AutoFon manufacturer has indicated the unit is discontinued and currently out of stock; confirm device availability and firmware with the manufacturer
- Always validate compatibility and recommended configuration against official AutoFon documentation and installer guidance

## Why Protocol Understanding Matters

A practical understanding of the communication protocol helps installers and fleet managers achieve reliable integration, reduce commissioning time, and improve operational visibility. Knowing what the platform expects and how the device reports events allows faster troubleshooting and predictable behavior in production fleets.

- Ensures devices are pointed to the correct Plaspy endpoint and port to begin reporting
- Reduces time diagnosing why heater events or telemetry are not visible in Plaspy
- Helps determine whether a companion GPS tracker is required to associate heater events with location
- Guides decisions about UDP versus TCP based on device and network behaviour
- Supports long term reliability by aligning firmware and hardware choices with Plaspy integration needs

## Why Use Plaspy with This Protocol

Using AutoFon Термо together with Plaspy provides a practical way to combine remote heater control and scheduled preheating with fleet telematics. For fleets operating in cold climates, the combination of heater control events and GPS based telemetry helps ensure vehicles are warmed and operational at the right times while allowing central visibility into heater usage and schedules. Plaspy’s unified endpoint and automatic protocol detection simplify setup when devices are configured to report to the platform.

To learn more about how Plaspy can integrate heater control events and vehicle telemetry, visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer guidance about AutoFon Термо, verify details on the official AutoFon website https://www.autofon.ru/ since protocol support and device behavior can change over time.
