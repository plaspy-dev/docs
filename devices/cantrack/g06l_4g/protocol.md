---
slug: /cantrack/g06l_4g/protocol
id: g06l_4g-protocol
sidebar_label: Protocol
title: CanTrack - G06L-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack G06L 4G GPS tracker and how it communicates with Plaspy for fleet tracking compatibility
keywords:
  - CanTrack G06L 4G protocol
  - CanTrack G06L-4G GPS protocol
  - G06L 4G communication protocol
  - G06L tracking protocol
  - CanTrack Plaspy compatibility
  - Plaspy device protocol
  - vehicle GPS tracker protocol
  - LTE tracker protocol
  - fleet tracking protocol
  - G06L telemetry compatibility
---

# CanTrack - G06L-4G Protocol

This page provides a public, high level overview of the communication protocol context for using the CanTrack G06L 4G GPS tracker with Plaspy. It explains how the device reports location and event data to the Plaspy platform, and what aspects of the tracker protocol are most relevant when configuring devices for reliable reporting. The G06L is a vehicle grade LTE Cat 1 tracker with GSM fallback, high sensitivity GNSS, local storage, battery backup and several event inputs that make it well suited for Plaspy enabled deployments.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device is correctly pointed at the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision and manufacturer implementation, so this page focuses on public, non sensitive protocol context and practical compatibility notes rather than device internals.

## Protocol Overview

The tracker protocol governs how the G06L packages and sends position, event and telemetry data from the device to a remote server such as Plaspy. In practice the protocol enables device identification, reporting intervals, event notification and the transfer of buffered data after network recovery.

- Defines how the tracker reports GNSS positions, timestamped events and basic telemetry to a remote server.
- Carries event notifications such as ignition status, movement alarms, SOS triggers and power cut alerts to the backend.
- Enables the transfer of locally stored records when connectivity is restored so historical routes and events are complete.
- Supports multiple transport choices and reporting intervals to balance timeliness and data usage.
- Works together with device configuration mechanisms like OTA updates and local USB configuration to manage behavior in the field.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and automatically detects the tracker protocol for supported devices. For most users this means that if the G06L is configured to report to the Plaspy endpoint, no manual protocol selection within Plaspy is required.

- Plaspy accepts device connections at the domain d.plaspy.com and the public IP 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device configuration and firewall rules.
- The device may be configured using UDP or TCP on port 8888 to report to Plaspy.
- When a properly configured device connects to the Plaspy endpoint, Plaspy automatically detects the tracker protocol used by that device.
- Users typically only need to ensure the device reports to the correct Plaspy endpoint and uses the supported transport and port.

## Transport and Connection Context

The G06L supports cellular data connectivity and can be configured to use either UDP or TCP to send reports to a backend server. For Plaspy deployments, the key transport and address settings are standardized so devices can be pointed to the correct endpoint without per device port variation.

- Devices may be pointed to d.plaspy.com or directly to 54.85.159.138 depending on network configuration or DNS preference.
- The device may be configured using UDP or TCP on port 8888 to send tracking and event reports.
- Plaspy uses the same port for all supported devices which reduces configuration complexity in large deployments.
- Transport selection can affect delivery characteristics such as retransmission behavior and latency depending on network conditions.
- Ensure carrier APN and SIM settings on the device are correct so the tracker can establish the chosen transport over cellular.

## Protocol Compatibility Notes

- Firmware versions from the manufacturer can introduce protocol variations, additional fields, or new event types; always note the firmware version when validating behavior.
- Hardware revisions or optional feature sets may change the available inputs and alarms that the device reports to Plaspy.
- Transport mode selection between UDP and TCP must match the device configuration for reliable delivery to Plaspy on port 8888.
- Local configuration options such as reporting intervals, buffered storage behavior and alarm thresholds affect how frequently and how much data the device sends.
- OTA firmware updates and USB configuration are common ways to adjust protocol behavior; confirm which methods are enabled for your units.
- Validate compatibility and feature availability against the manufacturer documentation for a given hardware and firmware combination.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the G06L helps ensure a successful installation, accurate data collection and efficient troubleshooting when integrating with Plaspy. Knowing what the device is expected to report and how it connects reduces configuration errors and improves operational reliability.

- Helps confirm devices are pointed to the correct Plaspy endpoint and using UDP or TCP on port 8888.
- Assists troubleshooting when reports do not appear in Plaspy by narrowing root causes to transport, SIM, APN or firmware differences.
- Guides configuration of reporting intervals and buffer sizes to balance timeliness and data costs for fleet deployments.
- Enables better interpretation of event types such as ignition, SOS and power cut alarms as delivered by the device.
- Supports planning for remote management workflows like OTA updates or mass configuration changes.

## Why Use Plaspy with This Protocol

Using the CanTrack G06L-4G with Plaspy provides a practical route to real time vehicle visibility, event driven notifications and historical route reconstruction for fleet and asset management. The combination of LTE connectivity with GSM fallback, local buffering and battery backed alerts helps maintain continuity of reporting so Plaspy can present accurate locations and alarms to dispatchers and fleet operators.

To learn more about Plaspy and how it supports device integrations like the CanTrack G06L-4G, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior and manufacturer implementation notes directly with CanTrack at https://www.cantrackgps.com/ because protocol support and firmware features can change over time.
