---
slug: /sentar/v80/protocol
id: v80-protocol
sidebar_label: Protocol
title: Sentar - V80 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for the Sentar V80 child GPS watch and how it communicates with Plaspy servers for tracking and alerts
keywords:
  - Sentar V80 protocol
  - Sentar V80 GPS protocol
  - Sentar V80 tracking protocol
  - Sentar V80 communication
  - Sentar V80 Plaspy
  - Sentar child GPS watch protocol
  - V80 GPS tracker compatibility
  - V80 tracker protocol
  - Sentar tracker protocol
  - GPS tracker protocol Plaspy
---

# Sentar - V80 Protocol

This page describes the public protocol context for using the Sentar V80 tracker with Plaspy. It focuses on how the device communicates with Plaspy servers in general terms and what to consider when configuring the watch to report location and event data. The guidance here is intended for technical users who need to understand the communication role of the device without exposing sensitive parser or firmware internals.

The Sentar V80 1.22 child GPS watch uses multiple location technologies such as GPS, AGPS, LBS, and WiFi, and supports features like SOS alerts, two way voice, and geo fences. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior may differ between V80 units or after firmware updates.

## Protocol Overview

The device protocol governs how the V80 reports identity, position, status, and events to a remote server and how remote commands or acknowledgements are exchanged when supported. For integration with Plaspy, understanding the protocol at a high level helps ensure the device is configured to send useful data that Plaspy can ingest and display.

- The protocol defines the sequence and types of messages the watch sends for periodic location reports, SOS events, and two way call signalling.
- It carries identifying information so Plaspy can associate incoming messages with a specific device account.
- Location data from GPS AGPS LBS and WiFi is forwarded through the device protocol so Plaspy can resolve positions to maps and history.
- Event flags such as SOS, low battery, or geo fence crossings are transmitted alongside location information for alerting and rules.
- Transport details (TCP or UDP) and endpoint configuration determine how the device reaches the Plaspy servers while the protocol defines message semantics.

## How Plaspy Detects the Protocol

Plaspy is designed to receive tracker reports on a shared endpoint and automatically detect the tracker protocol so most users do not need to manually select a protocol inside the platform. Proper device configuration to report to Plaspy is typically the only requirement for automatic detection to work.

- Plaspy listens on a single shared endpoint for supported devices so one configuration is often sufficient.
- The Plaspy server endpoint for device reporting is d.plaspy.com and can also be reached at the public IP 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol when the device sends data to the Plaspy endpoint so manual protocol selection is rarely required.
- Ensure the device is configured to report to the Plaspy endpoint and that any required network settings on the device are correct for the device to reach the server.

## Transport and Connection Context

Transport and basic connection settings determine how the V80 sends messages to the Plaspy service. The watch may support different transport options and carrier setups; choosing the correct transport and endpoint is necessary for reliable communication.

- The device may be configured to use either UDP or TCP on port 8888 depending on device support and configuration.
- Devices can point to the Plaspy domain d.plaspy.com or the server IP 54.85.159.138; both resolve to the same Plaspy reporting endpoint.
- Plaspy uses port 8888 for all supported devices so the same outbound port should be set on the tracker.
- Network elements such as mobile operator NAT, firewalls, or APN restrictions can affect connectivity and should allow outbound traffic to the Plaspy endpoint on port 8888.
- Confirm that the tracker has an active SIM data connection and correct APN settings when cellular reporting is required.

## Protocol Compatibility Notes

- Firmware revisions can change how the V80 formats or sequences messages; verify compatibility after any firmware upgrade.
- Hardware revisions or variant models may implement slightly different message sets or optional features; check the specific model identifier.
- Manufacturer configuration options such as transport selection (TCP vs UDP) and reporting intervals affect how Plaspy receives and interprets data.
- Some features like two way voice or WiFi assisted location may require additional configuration or permissions from the mobile operator.
- Validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure Plaspy can receive data.
- When in doubt, consult the manufacturer documentation and confirm the device is sending regular reports to Plaspy before assuming full feature parity.

## Why Protocol Understanding Matters

A practical understanding of the V80 communication protocol helps ensure reliable operation, more efficient troubleshooting, and better long term availability of location and event data in Plaspy.

- Correct endpoint and transport settings reduce onboarding time and avoid missed reports.
- Awareness of firmware and hardware differences helps diagnose why a device may not report certain events.
- Understanding how location sources are combined clarifies position accuracy expectations in different environments.
- Knowledge of reporting intervals and event triggers allows tuning for battery life versus reporting frequency.
- Recognizing the role of cellular and network settings prevents connectivity surprises when devices move between carriers or regions.

## Why Use Plaspy with This Protocol

Using the Sentar V80 with Plaspy gives organizations and caregivers a unified place to view real time positions, history, and event alerts from child GPS watches alongside other tracked assets. Plaspy’s automatic protocol detection and single port reporting model simplify device onboarding so the V80 can begin sending location and SOS events with minimal manual configuration when the tracker is pointed at the Plaspy endpoint.

To learn more about Plaspy and how it handles device reporting, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at http://www.sentarsmart.com/
