---
slug: /teltonika/fmm125/protocol
id: fmm125-protocol
sidebar_label: Protocol
title: Teltonika - FMM125 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FMM125 GPS tracker and Plaspy compatibility covering connection settings and integration notes
keywords:
  - Teltonika FMM125 protocol
  - Teltonika FMM125 GPS protocol
  - Teltonika FMM125 communication protocol
  - Teltonika FMM125 tracking protocol
  - FMM125 Plaspy
  - Teltonika FMM125 compatibility
  - GPS tracker protocol Plaspy
  - vehicle tracking FMM125
  - fleet management Teltonika FMM125
  - FMM125 telemetry integration
---

# Teltonika - FMM125 Protocol

This page describes the public protocol context for using the Teltonika FMM125 tracker with Plaspy. It summarizes how the device communicates at a high level, what connection settings Plaspy expects, and how protocol behavior relates to common integration tasks for fleet and telemetry use. Information here is focused on public, non sensitive integration details rather than firmware internals or binary protocol rules.

The FMM125 is Plaspy compatible out of the box and provides LTE Cat M1 and NB‑IoT cellular options with dual SIM and optional 2G fallback. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Devices may be configured to report to the Plaspy endpoint at d.plaspy.com or the server IP 54.85.159.138 on port 8888 using UDP or TCP. Exact message timing, telemetry fields, and behavior can vary by firmware version, hardware revision, and manufacturer configuration, so validate device specific details when deploying at scale.

## Protocol Overview

The device communication protocol governs how FMM125 reports location, external telemetry, and status to a server such as Plaspy. The protocol ensures the tracker can identify itself to the server, deliver GPS and sensor data, and provide status information needed for monitoring and fleet workflows.

- Allows the FMM125 to send periodic position updates and external telemetry fields to Plaspy for mapping and reporting.
- Carries device identifiers and status information that let Plaspy associate incoming messages with the correct vehicle record.
- Conveys telemetry from RS232, RS485, impulse inputs, and CAN adapter sources so fuel and vehicle data can be consumed by the platform.
- Supports transport over the network to the centralized Plaspy endpoint so data is available for real time alerts and historical reports.
- Enables continuity options such as cellular fallback and satellite modem attachments so Plaspy can receive data across mixed coverage scenarios.

## How Plaspy Detects the Protocol

Plaspy listens for incoming device connections on a single shared endpoint and port and will automatically detect the tracker protocol from the incoming data stream. In most deployments the device simply needs to be configured to report to the Plaspy endpoint and no manual protocol selection is required inside Plaspy.

- Plaspy accepts device traffic at d.plaspy.com and the server IP 54.85.159.138 on port 8888.
- All devices supported by Plaspy use the same port, which simplifies device provisioning and fleet scale deployment.
- Devices can be configured to use either UDP or TCP on port 8888 depending on device support and network conditions.
- When the FMM125 is pointed at the Plaspy endpoint and a device identifier is present, Plaspy maps incoming messages to the correct tracker record automatically.
- Typical setup steps are to configure APN and connectivity on the FMM125 and set the server address to d.plaspy.com or 54.85.159.138 with port 8888.

## Transport and Connection Context

Transport and connection choices determine how the FMM125 delivers data to Plaspy but do not change the public purpose of the protocol. Plaspy provides a single, consistent network endpoint so devices and integrators can use the same settings across a mixed fleet.

- The FMM125 may be configured to use UDP or TCP on port 8888 to send data to Plaspy.
- Devices should point to d.plaspy.com or the IP 54.85.159.138 and use port 8888 for reporting.
- Dual SIM, LTE Cat M1, NB‑IoT, and optional 2G fallback affect cellular availability and therefore delivery timing but not the fact that data goes to the Plaspy endpoint.
- Satellite modem attachments via RS232 can be used to forward telemetry when cellular is unavailable; transport selection for satellite links depends on the modem and integration method.
- Ensure APN, SIM provisioning, and any required device network settings are configured so the tracker can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change which telemetry fields are reported, message frequency options, and supported transports. Verify firmware release notes when you rely on a specific field.
- Hardware revisions or regional SKUs may alter supported radio bands and fallback behavior which affects connectivity rather than the high level protocol purpose.
- Integration of RS232, RS485, impulse inputs, and CAN adapters can change available telemetry sets; check how external peripherals are mapped in device configuration.
- Selecting UDP versus TCP will affect delivery semantics and may require different device settings and network allowances.
- Satellite modem integrations may alter how messages are forwarded to the Plaspy endpoint; confirm the modem to tracker wiring and forwarding approach.
- Always validate device behavior in a staging environment before wide rollout to ensure the reported fields match your Plaspy dashboards and alerts.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps ensure reliable delivery, accurate telemetry mapping, and faster troubleshooting during deployment and operations. Knowing the connection context and what to expect from a device reduces integration friction and improves long term reliability.

- Speeds up setup by knowing which network endpoint and port to configure on the device and which transport options are supported.
- Helps diagnose connectivity issues by distinguishing network problems from configuration or firmware behavior.
- Ensures telemetry from serial ports, impulse inputs, and CAN adapters is correctly interpreted by Plaspy for fuel and vehicle analytics.
- Informs decisions about failover and redundancy such as dual SIM and satellite fallback so data continuity is maintained.
- Reduces downtime by clarifying when manufacturer firmware changes might require revalidation of reported fields or settings.

## Why Use Plaspy with This Protocol

Using the Teltonika FMM125 with Plaspy gives fleet operators a practical, integrated solution for real time vehicle tracking, fuel monitoring, and broader telemetry collection. The FMM125 hardware is designed for professional telematics with serial and CAN interfaces, and Plaspy ingests the resulting location and sensor data into dashboards, reports, and alerting workflows to support operational decision making.

If you want to learn more about how Plaspy works with devices like the FMM125, visit https://www.plaspy.com. For the latest device specific protocol notes, firmware information, and manufacturer guidance verify details on the official Teltonika site at https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
