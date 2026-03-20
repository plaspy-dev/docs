---
slug: /coban/tk103b/protocol
id: tk103b-protocol
sidebar_label: Protocol
title: Coban - TK103B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for using the Coban TK103B GPS tracker with Plaspy for setup transport and compatibility guidance
keywords:
  - Coban TK103B protocol
  - Coban TK103B GPS protocol
  - TK103B protocol
  - TK103B GPS tracker
  - Coban protocol Plaspy
  - GPS tracker protocol
  - vehicle tracking protocol
  - GPRS GPS tracker
  - fleet tracking Plaspy
  - device protocol compatibility
---

# Coban - TK103B Protocol

This page provides public protocol context for using the Coban TK103B GPS tracker with the Plaspy platform. It focuses on how the device communicates at a high level, what connection choices are common, and what to check when integrating TK103B units into Plaspy for tracking and monitoring. The content here is intended for administrators, integrators, and technical users configuring devices for reliable reporting.

The Coban TK103B is a vehicle tracker that supports SMS, GPRS, and internet data transmission and includes features such as dual SIM support, real time tracking, emergency alarms, geo fencing, and optional sensors. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact traffic and behavior can vary with firmware version, hardware revision, and manufacturer implementation. Confirm device settings and firmware when planning integration.

## Protocol Overview

The tracker protocol is the method the device uses to identify itself to a server, report location and sensor data, and deliver alerts and status updates to a fleet platform such as Plaspy. For Plaspy integration with TK103B units, the focus is on ensuring the device is configured to send its reports to the Plaspy endpoint and that the network transport used by the tracker is permitted by your connectivity plan.

- Carries the device identification data that allows the server to associate incoming reports with a specific unit.
- Transmits location, time, and status information so Plaspy can present usable tracking telemetry.
- Delivers alerts and event notifications such as SOS, overspeed, geo fence breaches, and low battery events.
- Supports multiple transport mechanisms (cellular data or SMS) so devices can report over the method best suited to the deployment.
- Enables remote commands and configuration when supported by the device firmware and when routed through a compatible server endpoint.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a consolidated endpoint and port, and it automatically detects the tracker protocol from incoming data patterns and identification fields. In most cases a correctly configured TK103B will begin reporting to Plaspy without requiring manual protocol selection inside the platform.

- Point the device to the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 for reporting.
- Plaspy listens on port 8888 for device connections and data from supported trackers.
- All devices in Plaspy use the same port, so a single network endpoint simplifies fleet setup.
- The user typically does not need to choose a protocol inside Plaspy when the tracker is configured to report to the Plaspy endpoint.
- Ensure the device is permitted to send data from its network and that APN settings and SIM configuration allow GPRS reporting.

## Transport and Connection Context

TK103B devices can send data over cellular GPRS and may be configured to use UDP or TCP depending on the unit and firmware. When integrating with Plaspy, confirm the device points at the Plaspy endpoint and that your network plan supports the chosen transport mode.

- Devices may be configured to report to d.plaspy.com or to the numeric address 54.85.159.138.
- Plaspy listens for both UDP and TCP on port 8888; configure the tracker for the transport it supports.
- The Plaspy server port is the same for all supported devices, making firewall and network configuration consistent across a mixed fleet.
- If a tracker supports SMS fallback, that can be used as an alternate reporting method for critical alerts when data is unavailable.
- Verify that the unit’s SIM, APN, and GPRS settings are correct so packets reach the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- Firmware revisions can change how a TK103B formats its reports or which transport modes are available; verify firmware release notes for protocol changes.
- Hardware variations and optional features such as fuel sensors or door control modules may affect which data fields are present in reports.
- Manufacturer configuration commands and behavior can vary by distributor or region; consult the device configuration guide when available.
- Testing a sample device on the live Plaspy endpoint before wide deployment helps confirm behavior and reporting cadence.
- Choose UDP or TCP in the device settings consistent with what the specific unit firmware supports and your network reliability needs.
- Confirm APN settings and dual SIM behavior so the tracker consistently uses the intended connectivity path.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure devices report reliably, alarms are delivered, and remote operations behave as expected. Even when a platform like Plaspy automatically detects the tracker protocol, knowing the general reporting behavior improves configuration and troubleshooting outcomes.

- Faster troubleshooting when devices do not appear in Plaspy because you can validate transport, endpoint, and APN settings.
- Better deployment planning by selecting firmware and hardware revisions known to align with your operational needs.
- Ensures critical alerts and events are captured and routed to Plaspy for timely action.
- Helps define firewall, NAT, and carrier configurations needed to allow tracker data to reach the Plaspy server.
- Improves long term reliability by understanding how sleep modes, reporting intervals, and firmware updates affect connectivity.

## Why Use Plaspy with This Protocol

Using the Coban TK103B with Plaspy provides organizations with a practical way to collect location and event data from vehicle assets while relying on a single, consistent server endpoint. Plaspy’s consolidated listening port and automatic protocol detection simplify onboarding for mixed fleets and reduce the configuration overhead often associated with large scale deployments.

To learn more about how Plaspy works with trackers like the Coban TK103B, visit https://www.plaspy.com. Please note that protocol behavior, firmware features, and manufacturer implementation can change over time; verify the latest device specific protocol information and firmware notes at the manufacturer site https://www.coban.net/ before finalizing large deployments.
