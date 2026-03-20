---
slug: /concox/wetrack140/protocol
id: wetrack140-protocol
sidebar_label: Protocol
title: Concox - WeTrack140 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Concox WeTrack140 and how it communicates with Plaspy for GPS tracking and telematics
keywords:
  - Concox WeTrack140 protocol
  - Concox WeTrack140 GPS protocol
  - WeTrack140 tracking protocol
  - WeTrack140 Plaspy compatibility
  - Concox GPS tracker protocol
  - WeTrack140 AIS140 protocol
  - vehicle tracking WeTrack140
  - fleet tracking Concox WeTrack140
  - Plaspy device protocol
  - Concox telematics protocol
---

# Concox - WeTrack140 Protocol

This page describes the public protocol context for using the Concox WeTrack140 with Plaspy. It focuses on how the device communicates with Plaspy for core tracking and telematics use cases and what to expect from the reporting behavior in everyday deployments. Where helpful, this document places those behaviors in the context of the WeTrack140 feature set including GNSS positioning, telematics inputs, remote cut off, panic button, and voice monitoring.

Plaspy accepts connections for all supported trackers using a shared endpoint and port, and Plaspy automatically detects the tracker protocol once the device is reporting to the platform. For the WeTrack140 this typically means configuring the device to report to d.plaspy.com or to the Plaspy server IP 54.85.159.138 on port 8888 using UDP or TCP depending on device settings. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so confirm device specific details with the manufacturer when needed.

## Protocol Overview

The communication protocol for the WeTrack140 defines how the tracker sends GNSS, status, and telematics data to a remote server and how the server responds when supported. In the context of Plaspy, the protocol role is to deliver timely location, speed, sensor states, events such as panic or cut off, and other vehicle status items so Plaspy can index, present, and act on that information.

- Enablement of real time GNSS position reporting and periodic position uploads for route playback and live tracking.
- Delivery of telematics and digital input states such as door open, ignition, and auxiliary sensors so Plaspy can present event context.
- Transmission of discrete events like panic button presses, remote cut off activations, and driving behavior alerts for immediate handling.
- Support for device identification and session establishment so Plaspy can associate incoming data with the correct vehicle and account.
- Use of a network transport that allows the tracker to push data to Plaspy without manual polling from the server side.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared server endpoint and automatically determines which supported protocol a device is using, so in most deployments there is no need to select a specific protocol inside Plaspy. Proper device configuration to report to the Plaspy endpoint is the primary requirement for automatic detection and successful ingestion.

- Plaspy listens on a single port for all devices which simplifies tracker configuration and onboarding.
- Devices should be configured to report to d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- The WeTrack140 can be set to use either UDP or TCP to communicate with the Plaspy endpoint depending on device and network preferences.
- When the device is correctly pointed to Plaspy, the platform will automatically detect the tracker reporting format and associate telemetry to the correct device record.
- Manual protocol selection inside Plaspy is rarely required when the tracker is correctly configured to report to the Plaspy server.

## Transport and Connection Context

Transport choices affect how the WeTrack140 sends data to Plaspy but do not change the overall purpose of the protocol. The device supports GSM based IP connectivity and can be configured to use either UDP or TCP on the Plaspy port. Knowing the connection context helps with firewall rules, network planning, and device configuration.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct IP routing.
- All devices supported by Plaspy use the same port, which is 8888, making firewall and NAT configuration straightforward.
- The WeTrack140 may be configured to use UDP or TCP on port 8888 depending on device settings and operator preference.
- Choose UDP for lower overhead where reliability is handled at the application level, or TCP when a connection oriented transport is required by the device firmware or network.
- Ensure outbound mobile network data for the device allows connectivity to d.plaspy.com or the Plaspy server IP on port 8888 so telemetry can reach Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change which features are available and how the device encodes particular telemetry or events; confirm the firmware shipped with your units.
- Hardware revisions and optional peripherals may add or remove inputs and outputs such as extra digital inputs, voice monitoring, or remote cut off wiring.
- Manufacturer implementation differences may affect timing, event thresholds, or optional fields included in reports; consult manufacturer notes for nuances.
- Transport selection between UDP and TCP may be constrained by firmware or by carrier network behaviors in your deployment region.
- Validation of compatibility should include powering a test device, configuring it to report to the Plaspy server, and confirming that Plaspy receives and interprets the expected telemetry and events.
- When integrating additional sensors or custom wiring, verify how those signals are represented in the device telemetry and how Plaspy maps them to inputs.

## Why Protocol Understanding Matters

Understanding the WeTrack140 communication protocol helps ensure reliable device setup, efficient troubleshooting, and predictable long term operation with Plaspy. Knowing how the tracker reports position and events allows fleet managers and integrators to align device configuration, server connectivity, and operational workflows.

- It reduces onboarding time by clarifying which settings must be changed on the device to report to Plaspy.
- It speeds troubleshooting when telemetry is not arriving by focusing checks on transport, DNS, and device event configuration.
- It helps validate that regulatory or operational events such as AIS140 reporting, panic events, and remote cut off signals are transmitted and received as expected.
- It informs network planning, including mobile data usage expectations and firewall rules for allowing traffic to d.plaspy.com or 54.85.159.138 on port 8888.
- It supports long term reliability by highlighting the importance of firmware management and periodic validation against the manufacturer documentation.

## Why Use Plaspy with This Protocol

Using the WeTrack140 with Plaspy gives organizations a practical path to consolidate real time GNSS tracking, telematics signals, and event driven controls into a single fleet management platform. Plaspy ingests the WeTrack140 telemetry to provide live location, route history, alerts, and dashboards that support fleet operations, compliance monitoring, and safety programs.

Plaspy simplifies device onboarding by providing a shared endpoint and port for all supported trackers and automatic protocol detection so fleets can focus on operational configuration rather than protocol details. To learn more about Plaspy and how it supports fleet tracking and telematics, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and official documentation for the WeTrack140, verify information with the manufacturer at https://www.iconcox.com/ as implementation details can change over time.
