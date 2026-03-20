---
slug: /bce/fm_500_light/protocol
id: fm_500_light-protocol
sidebar_label: Protocol
title: BCE - FM-500 Light+ Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for BCE FM 500 Light Plus and how the tracker communicates with Plaspy
keywords:
  - BCE FM 500 Light+ protocol
  - FM 500 Light+ GPS protocol
  - FM 500 Light+ communication protocol
  - FM 500 Light+ tracking protocol
  - BCE GPS tracker Plaspy
  - vehicle tracking BCE FM 500 Light+
  - asset tracker protocol
  - Plaspy device compatibility
  - GPS tracker integration
  - fleet management protocol
---

# BCE - FM-500 Light+ Protocol

This page provides a public protocol overview for the BCE FM-500 Light+ and how the device communicates with Plaspy for tracking and telemetry. It focuses on the high level communication context a user or integrator needs to know when pointing the FM-500 Light+ at Plaspy servers and does not disclose private or implementation sensitive details. The FM-500 Light+ is a compact object tracker with GPS GLONASS positioning, GSM reporting, multiple digital and analog inputs, outputs for remote control, and interfaces such as 1-Wire iButton RS-232 and EIA-485 that extend its sensor and control capabilities.

Plaspy uses shared connection settings across supported devices and automatically detects tracker protocols when devices report to the platform. Exact protocol behavior for the FM-500 Light+ can vary by firmware version hardware revision and manufacturer implementation so successful integration relies on correct device configuration and verifying any device specific options. The sections below explain the practical role of the tracker protocol and how it interacts with Plaspy without exposing device internals.

## Protocol Overview

The protocol in this context is the set of rules that govern how the FM-500 Light+ serializes and transmits location sensor and input state information to a backend service such as Plaspy. At a high level the protocol ensures the tracker can identify itself send usable telemetry and receive configuration or control interactions permitted by the device and network.

- Enables the FM-500 Light+ to transmit GPS or GLONASS coordinates and vehicle telemetry to Plaspy
- Carries digital and analog input states plus events from connected sensors and interfaces
- Provides the means for the server to correlate incoming data with a specific device identity
- Supports optional remote control or configuration flows exposed by the device within allowed manufacturer capabilities
- Acts as the bridge between on device sensors and Plaspy reporting and storage systems

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections from many tracker models and to recognize the format and behavior of common tracker reports automatically. When a properly configured FM-500 Light+ points to the Plaspy endpoint the platform identifies the device protocol and routes data to the correct processing pipeline without manual protocol selection in most cases.

- Plaspy uses a shared endpoint so devices report to a single host for parsing and ingestion
- Plaspy automatically detects the tracker protocol when the device connects and sends reports
- Users typically do not need to choose a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint
- Correct device identification depends on the device sending its identity information as part of its regular reports
- If automatic detection does not match expectations check device reporting configuration and firmware details

## Transport and Connection Context

Connection context covers how the FM-500 Light+ reaches Plaspy on the network. The device may use either UDP or TCP transport depending on its firmware and configuration. Plaspy accepts both transport types on a single shared port which simplifies device setup across many tracker models.

- Devices may be configured to use either UDP or TCP on port 8888 depending on device capabilities
- Plaspy accepts connections at the domain d.plaspy.com and the public IP 54.85.159.138
- All devices on Plaspy use the same port which is 8888 for reporting and command channels
- Choosing UDP or TCP can affect delivery semantics and behavior based on network conditions and device firmware
- Ensure the FM-500 Light+ reporting destination is set to the Plaspy endpoint to enable automatic detection

## Protocol Compatibility Notes

- Firmware revisions on the FM-500 Light+ can change available commands telemetry fields and transport options
- Hardware revisions and optional interface modules may alter the set of supported inputs outputs and sensor data
- Manufacturer side configuration options such as message intervals and event definitions affect what Plaspy receives
- Selecting UDP versus TCP on the device may be necessary to match network conditions or carrier recommendations
- Always verify which firmware version is installed when troubleshooting compatibility with Plaspy
- Consult manufacturer documentation for any vendor specific extensions or optional reporting modes

## Why Protocol Understanding Matters

Knowing how the FM-500 Light+ communicates helps ensure reliable setup faster troubleshooting and predictable long term operation with Plaspy. Awareness of the protocol scope and transport context reduces misconfiguration and helps you make informed choices around device settings and expected data.

- Helps validate that the device is correctly pointing to Plaspy and using the expected transport and port
- Speeds diagnosis when reports are missing delayed or appear incomplete in the platform
- Guides testing of sensor inputs external interfaces and remote output controls to confirm expected telemetry
- Informs decisions around reporting intervals power management and data usage for GSM connections
- Supports planning for firmware updates device lifecycle and integration changes over time

## Why Use Plaspy with This Protocol

Using the BCE FM-500 Light+ with Plaspy provides a practical path to integrate location telemetry sensor inputs and remote control capabilities into a single fleet or asset visibility platform. Plaspy accepts standard device reports routes them into device specific processing and presents location and event data in ways that support operational monitoring and reporting.

If you want to learn more about Plaspy and how it works with devices such as the FM-500 Light+ visit https://www.plaspy.com. Please verify the latest device specific protocol details firmware behavior and manufacturer implementation on the official BCE site at http://www.bce.en/ since protocol support and firmware behavior can change over time.
