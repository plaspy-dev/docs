---
slug: /cantrack/g08l/protocol
id: g08l-protocol
sidebar_label: Protocol
title: CanTrack - G08L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CanTrack G08L and how it communicates with Plaspy for live tracking and fleet telemetry
keywords:
  - CanTrack G08L protocol
  - CanTrack G08L GPS protocol
  - G08L communication protocol
  - G08L tracking protocol
  - CanTrack Plaspy compatibility
  - Plaspy device protocol
  - GPS tracker protocol Plaspy
  - tail light GPS tracker protocol
  - fleet tracking G08L
  - covert GPS tracker protocol
---

# CanTrack - G08L Protocol

This page provides a public, high level overview of the communication protocol context for using the CanTrack G08L with Plaspy. It focuses on how the device reports GNSS, motion and status telemetry to Plaspy and what to consider when configuring connectivity for live tracking, alerts, and fleet telemetry. The G08L is a 4 inch smart tail light GPS tracker built around a Quectel BG95 LTE module with GPS and BeiDou positioning, an onboard G sensor, internal battery, and IP67 protection, and this guide explains how those telemetry streams are delivered to a cloud platform like Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary with firmware, hardware revision, and manufacturer implementation. For the G08L, the device may be set to report over the cellular link so Plaspy can ingest location, event and status messages for dashboards and alerts. Users should expect that minor protocol differences or firmware updates from the vendor can change message timing and available event types.

## Protocol Overview

The protocol for the G08L defines how the tracker identifies itself, reports position and sensor events, and signals device health to a backend service such as Plaspy. At a public documentation level we describe the protocol as the device reporting GNSS position, motion events, battery and status telemetry to a server endpoint so Plaspy can convert those inputs into map updates, alarms and reports.

- Enables reporting of GNSS and BeiDou positions for live location updates and historical tracks.
- Carries event messages from the built in G sensor for harsh driving and crash detection.
- Transmits device status such as battery level, power mode, and connectivity state to support remote maintenance.
- Provides the transportable telemetry that Plaspy ingests and maps to alerts, geo fences, and driver behavior reports.
- Supports OTA update triggers and status messages to coordinate firmware maintenance where vendor tooling and device firmware allow.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and uses that input to identify the device type and protocol family. In most cases you do not need to manually select a protocol in Plaspy if the G08L is correctly configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com for device reporting and management.
- Plaspy server IP is 54.85.159.138 and the port is 8888 so devices can point to either the domain or IP.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network preference.
- All devices in Plaspy use the same port which simplifies device provisioning and firewall rules.
- Plaspy automatically detects the tracker protocol when telemetry arrives at the shared endpoint so manual protocol selection is typically unnecessary.

## Transport and Connection Context

Connection choices determine how the G08L sends telemetry to Plaspy and what network settings need to be allowed on firewalls and cellular APNs. The G08L uses its LTE Cat M1 / Cat NB2 radio to reach the internet and then open a TCP or UDP session to the Plaspy endpoint for reporting.

- Devices may be configured to report to d.plaspy.com or to the server IP 54.85.159.138 based on installer preference.
- The device may be configured using UDP or TCP on port 8888 to deliver telemetry to Plaspy.
- Use of TCP typically provides reliable session delivery while UDP can be used where lower overhead is desired and device firmware supports it.
- Because Plaspy uses the same port for all devices, a single outbound firewall rule for port 8888 is sufficient for most fleets.
- Confirm APN and outbound IP requirements with your mobile operator to ensure the G08L can reach d.plaspy.com or 54.85.159.138 from the vehicle.

## Protocol Compatibility Notes

- Firmware versions can change message timing, the set of reported events, and optional fields; check device firmware release notes for specifics.
- Hardware revisions or manufacturing variants of the G08L may alter available sensors or default reporting behavior.
- Manufacturer configuration options may allow switching between UDP and TCP; verify the device is set to the transport Plaspy expects or that your network allows both.
- Some event types such as crash alarms or harsh driving reports depend on G sensor configuration and sensitivity parameters that are vendor controlled.
- OTA update behavior and remote maintenance capabilities are influenced by both the G08L firmware and the vendor backend tools.
- Validate compatibility and available telemetry fields against official manufacturer documentation when planning integrations or custom alerting.

## Why Protocol Understanding Matters

Understanding the G08L communication protocol helps ensure reliable onboarding, accurate telemetry in Plaspy, and faster troubleshooting when events do not appear as expected. Even with Plaspy detecting protocols automatically, visibility into what the device is configured to send and how it connects reduces downtime and supports consistent fleet operations.

- Confirms correct endpoint and transport settings so devices reliably reach Plaspy.
- Helps map reported fields to Plaspy alerts and dashboard widgets for accurate reporting.
- Speeds troubleshooting when location updates, battery reports, or sensor events are missing.
- Informs decisions about setting reporting intervals, power modes, and firmware update windows.
- Reduces integration surprises caused by firmware changes, regional variants, or manufacturer defaults.

## Why Use Plaspy with This Protocol

Using the G08L with Plaspy gives fleet managers and operators a discreet, tamper resistant way to collect continuous location and event telemetry from vehicles while preserving tail light functionality. Plaspy converts the incoming GNSS and sensor messages into live maps, geo fence alerts, driver behavior summaries, and operational dashboards that help teams optimize routes, respond to incidents, and plan maintenance.

If you want to learn more about how Plaspy works with trackers like the CanTrack G08L and to review service options, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and hardware revision information always verify specifications on the manufacturer site https://www.cantrackgps.com/ as vendor documentation may change over time.
