---
slug: /cantrack/tk08al/protocol
id: tk08al-protocol
sidebar_label: Protocol
title: CanTrack - TK08AL Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for CanTrack TK08AL compatibility with Plaspy real time tracking and device communication
keywords:
  - cantrack tk08al protocol
  - cantrack tk08al gps protocol
  - cantrack tk08al tracking protocol
  - cantrack gps protocol
  - plaspy compatible trackers
  - vehicle tracking protocol
  - gps tracker communication
  - cantrack tk08al compatibility
  - fleet management tracker protocol
  - tk08al integration plaspy
---

# CanTrack - TK08AL Protocol

This page describes the public protocol context for using the CanTrack TK08AL tracker with Plaspy. It focuses on how the device communicates general telemetry and event data to the Plaspy platform so fleet operators and integrators can understand connection expectations without exposing private parsing or proprietary internals. The TK08AL is a 4G hard wired vehicle tracker with LTE Cat 1 connectivity, RFID driver identification, power cut detection with backup battery, and configurable telemetry behaviors that make it suitable for fleet and anti theft use cases.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides public, high level guidance while recommending you validate device specific details against the manufacturer documentation.

## Protocol Overview

The TK08AL uses standard tracker reporting behavior to send GPS positions, movement and ignition events, alarms, and driver identification events to a remote server. In practice, the device implements common GT class reporting conventions and can operate over mobile data with fallback to legacy networks to keep telemetry flowing.

- Enables location updates and device events to be sent from the vehicle to a centralized server for mapping and alerts.
- Carries vehicle state like ignition, movement, SOS, and power cut so Plaspy can present status and trigger workflows.
- Transmits driver identification events from the built in RFID interface or an external reader connected via RS485 for audit and authorization logs.
- Supports local buffering to preserve telemetry records during temporary network loss and then upload when connectivity resumes.
- Uses configurable reporting behaviors such as periodic updates, movement triggered updates, and low power modes to balance timeliness and battery life.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a shared endpoint and automatically identifies the tracker reporting format so users generally do not need to select a protocol manually inside the platform. Proper device configuration to report to the Plaspy endpoint is the typical prerequisite for automatic detection.

- Plaspy accepts connections at the domain d.plaspy.com and the server IP 54.85.159.138 on the standard platform port 8888.
- The device may be configured to use either UDP or TCP to send reports to Plaspy on port 8888.
- All devices reporting to Plaspy use the same port, which simplifies device configuration and onboarding.
- When a TK08AL is pointed at the Plaspy endpoint and network permits, Plaspy will detect the device protocol automatically and ingest telemetry into the platform.
- Users normally only need to verify server address and transport settings on the device; Plaspy handles protocol selection for ingestion when data arrives.

## Transport and Connection Context

Connection setup for the TK08AL is primarily a matter of pointing the device at the right server and choosing the supported transport. The tracker supports LTE Cat 1 primary connectivity with GSM/GPRS fallback and can be configured to report over TCP or UDP according to the deployment needs.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and chosen network behavior.
- The Plaspy endpoint is reachable at d.plaspy.com and at the IP 54.85.159.138 for environments that require numeric addressing.
- All Plaspy supported devices share the same platform port 8888, simplifying bulk device provisioning and firewall rules.
- TK08AL connectivity can fall back to GPRS where LTE coverage is not available to maintain report delivery.
- Typical device configuration channels available on the TK08AL include USB configuration, SMS, or server side settings as provided by the manufacturer.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and supported commands; verify firmware release notes when diagnosing behavior differences.
- Hardware revisions and optional accessories such as external RFID readers or immobilizer relay wiring can affect which telemetry and control features are present.
- The device may support different transports; ensure the chosen transport mode (UDP or TCP) is consistent with network and firewall policies.
- Manufacturer configuration methods (SMS, USB, or remote configuration) can vary by region and firmware build; consult the official manual for exact commands.
- Local data buffering behavior affects how and when historical records are uploaded after connectivity is restored.
- Plaspy’s automatic protocol detection simplifies platform setup, but initial server and transport values on the device must be correct.

## Why Protocol Understanding Matters

Understanding the TK08AL communication protocol and transport context helps administrators set up devices correctly, diagnose telemetry issues, and ensure consistent operation across fleet deployments. Knowing the basics of how the tracker reports and what events it can send makes integration with Plaspy smoother and reduces time spent on configuration and troubleshooting.

- Ensures correct server address and transport settings so devices can reach Plaspy and be automatically detected.
- Helps interpret event behavior such as SOS, ignition, power cut, and driver ID events when reviewing platform logs.
- Guides firewall and network configuration by clarifying that all Plaspy devices use the same port and that TCP or UDP may be used.
- Supports planning for firmware updates and compatibility testing to maintain stable telemetry over time.
- Enables informed choices about reporting intervals, buffering, and low power modes to balance data timeliness and device battery life.

## Why Use Plaspy with This Protocol

Using the CanTrack TK08AL together with Plaspy gives operators consolidated visibility into vehicle location, driver authorization events, and safety or anti theft alarms. The device’s LTE connectivity, local buffering, RFID driver identification, and optional immobilizer outputs make it a practical fit for organizations that need reliable real time position updates and event driven workflows.

To learn more about Plaspy and how it integrates device telemetry, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest and most specific information on the manufacturer website https://www.cantrackgps.com/.
