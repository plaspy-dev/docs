---
slug: /concox/pg201/protocol
id: pg201-protocol
sidebar_label: Protocol
title: Concox - PG201 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox PG201 and how the tracker communicates with Plaspy for location streaming and alert reporting
keywords:
  - Concox PG201 protocol
  - Concox PG201 GPS protocol
  - Concox PG201 Plaspy
  - PG201 tracking protocol
  - personal GPS tracker protocol
  - workforce tracking Concox
  - Plaspy device compatibility
  - SOS panic tracker protocol
  - GNSS LBS tracker protocol
  - personnel tracking protocol
---

# Concox - PG201 Protocol

This page describes the public protocol context for the Concox PG201 when used with the Plaspy platform. It focuses on how the device reports location, motion and alert telemetry to Plaspy and what to expect from the communication setup. The information here is intended for administrators and integrators who need to understand how the tracker talks to the cloud without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision and manufacturer configuration, so device reporting modes and timing may differ in practice.

## Protocol Overview

The PG201 reporting protocol defines how the device sends GNSS, cellular location assistance and alert events to a cloud endpoint for mapping and monitoring. In practical terms the protocol is the set of messages and behaviors the tracker uses to identify itself to Plaspy, transmit position and status updates, and notify the platform of SOS or geofence events.

- Allows the PG201 to transmit GNSS and LBS derived positions and motion telemetry to Plaspy for live maps and history.
- Carries status signals such as SOS alerts, low battery notifications and motion events that Plaspy can surface as notifications.
- Enables the tracker to identify itself and associate reports with an account or device record in Plaspy without manual protocol selection.
- Supports scheduled, period based and instant reporting modes that balance tracking granularity and battery life.
- Serves as the bridge between on device sensors and Plaspy workflows for workforce safety and lightweight fleet monitoring.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and applies protocol detection so most devices can be used without manual configuration inside the platform. When a properly configured PG201 points to the Plaspy endpoint, Plaspy will automatically recognize the reporting format and process location and alert data.

- Plaspy exposes a common server endpoint for devices to report to using the domain d.plaspy.com.
- The universal Plaspy server IP address is 54.85.159.138 which is reachable from carrier networks where allowed.
- Plaspy listens on port 8888 and all supported devices use this same port for reporting.
- Devices may be set to report using either UDP or TCP on port 8888 depending on device support and configuration.
- When a device correctly reports to d.plaspy.com or the Plaspy IP, the platform detects the incoming format and maps telemetry to the device record.
- In most cases you do not need to select a protocol inside Plaspy manually if the device is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Transport context covers how the PG201 is pointed at Plaspy and which network options it can use. The device communicates over cellular networks and can be configured to send its telemetry to the Plaspy server using common transport protocols.

- The device may be configured to send reports to the domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy listens on a single port 8888 for device messages and all devices supported by Plaspy use this same port.
- Depending on hardware and firmware the PG201 can use UDP or TCP on port 8888 for reporting.
- Transport selection can affect reliability and latency; choose the mode supported by the device and appropriate for the cellular network.
- Ensure the tracker SIM and carrier allow outbound traffic to the Plaspy server endpoint and port to avoid blocked reporting.

## Protocol Compatibility Notes

- Firmware variations can change message timing, available fields and feature behavior; verify firmware version when validating compatibility.
- Hardware revisions or regional variants of the PG201 may have slight differences in supported reporting modes or sensor behavior.
- Manufacturer configuration options such as reporting intervals, SOS behavior and geo fence parameters affect what Plaspy receives and how alerts are generated.
- Choose the transport protocol supported by your device firmware when configuring the tracker to report to Plaspy, either UDP or TCP on port 8888.
- Plaspy uses the same port for all devices and performs automatic protocol detection, simplifying platform setup.
- Always validate device settings with the official manufacturer documentation for the most current behavior.

## Why Protocol Understanding Matters

Knowing the basics of how the PG201 communicates helps ensure successful deployment, reliable alerts and efficient troubleshooting when integrating devices with Plaspy. A clear protocol context reduces configuration errors and speeds recovery when connectivity or reporting issues occur.

- Confirming transport and endpoint settings prevents common connectivity failures during setup.
- Understanding reporting modes helps balance battery life and tracking granularity for operational needs.
- Recognizing how alerts like SOS and geo fence notifications are transmitted aids in incident response planning.
- Awareness of firmware and hardware differences reduces wasted troubleshooting time when behaviors diverge.
- Proper documentation of device configuration and SIM carrier restrictions supports long term reliability.

## Why Use Plaspy with This Protocol

Using the Concox PG201 with Plaspy gives organizations a practical solution for personnel safety and basic operational oversight. The tracker streams GNSS and LBS location, motion telemetry and SOS alerts into Plaspy so managers can monitor live positions, receive timely notifications and keep incident records for follow up. This combination suits sanitation teams, lone worker protection, inspection crews and other workforce scenarios where compact, battery efficient tracking is required.

To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and manufacturer guidance verify information on the Concox website https://www.iconcox.com/. Protocol support and firmware behavior can change over time so checking the manufacturer documentation helps ensure accurate configuration and compatibility.
