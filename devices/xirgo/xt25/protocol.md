---
slug: /xirgo/xt25/protocol
id: xt25-protocol
sidebar_label: Protocol
title: Xirgo - XT25 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo XT25 showing how the tracker communicates with Plaspy and connection guidance
keywords:
  - Xirgo XT25 protocol
  - Xirgo XT25 GPS protocol
  - XT25 Plaspy compatibility
  - XT25 vehicle tracking
  - GPS tracker communication
  - fleet management protocol
  - OBD telematics XT25
  - LTE Cat M1 NB2 tracker
  - Bluetooth ELD pairing
  - anti theft telemetry
---

# Xirgo - XT25 Protocol

This page summarizes the public protocol context for using the Xirgo XT25 with Plaspy. It focuses on how the device reports location and telemetry to the Plaspy platform in general terms, what connection settings are used publicly, and practical considerations to get the device streaming data into Plaspy for tracking and reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device is pointed to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a public, integration oriented level while highlighting the connection facts needed to integrate XT25 devices with Plaspy.

## Protocol Overview

The XT25 communicates vehicle location, motion events, and basic vehicle telemetry to a backend server using the device reporting protocol implemented by Xirgo. In Plaspy this protocol provides the information Plaspy needs to display live locations, trigger events, and record historical telemetry while the device remains responsible for acquiring GNSS fixes, OBD signals, and sensor data on the vehicle.

- The protocol allows the device to identify itself and send periodic or event driven telemetry to a remote server for processing.
- Telemetry typically includes GPS fixes, motion events from the accelerometer, and vehicle signals available over OBD or wiring.
- The protocol mediates how the tracker requests acknowledgements, timestamps, and configured reporting intervals when supported by the device firmware.
- Plaspy ingests the transmitted data and maps common fields like location, speed, ignition state, and event timestamps into its tracking and reporting workflows.
- Firmware and configuration determine which optional interfaces are active such as Bluetooth sensor proxying, internal battery reporting, or external I/O signaling.

## How Plaspy Detects the Protocol

Plaspy receives data from devices at a shared endpoint and automatically determines which tracker protocol is being used so users normally do not have to select a protocol manually. If an XT25 is configured to report to Plaspy and networking is correct, Plaspy will detect and process the device messages according to the device behavior it observes.

- Plaspy listens on a single port for all supported devices and automatically detects the tracker protocol used by incoming connections.
- The Plaspy server endpoint for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for device reporting and this same port is used across all devices in the Plaspy fleet.
- When an XT25 points to the Plaspy endpoint and sends its first reports, Plaspy matches the incoming traffic to a known protocol profile for processing.
- Users typically need only configure the XT25 reporting host and transport; Plaspy handles downstream protocol identification.

## Transport and Connection Context

XT25 units can be configured to use either UDP or TCP transport to send telemetry depending on the device firmware and installer preference. To reach Plaspy, configure the device to report to the Plaspy endpoint on the shared port; this is the public connection context needed for integration.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138 as the Plaspy server address.
- Plaspy accepts both UDP and TCP connections from devices on port 8888.
- The same port 8888 is used for all devices reporting to Plaspy simplifying gateway and firewall configuration.
- Choose UDP for lower overhead and simpler retransmission behavior or TCP where ordered delivery and connection state are preferred, subject to what the XT25 firmware supports.
- Confirm cellular APN and network access so the XT25 can reach the Plaspy endpoint over the chosen transport.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can alter which telemetry fields are sent and how the device frames reports; validate the installed firmware on XT25 units when troubleshooting.
- Different regional firmware builds or network variants (for example carrier specific images) may enable or disable optional features like Bluetooth ELD pairing or certain OBD channels.
- Transport selection between UDP and TCP is configurable on many installations; ensure the XT25 is set to the transport supported by the deployment and allowed by network policies.
- External I/O expansions and optional internal battery reporting are device features that affect what data appears in Plaspy but do not change the fundamental reporting endpoint.
- Always cross check capabilities such as OBD PIDs and Bluetooth profiles against the manufacturer documentation for the exact model and firmware revision.
- Validate device timekeeping and GNSS fix behavior after installation to ensure event timestamps align with Plaspy reporting needs.

## Why Protocol Understanding Matters

A practical understanding of the XT25 communication protocol helps installers and fleet managers configure devices correctly, anticipate what data Plaspy will receive, and resolve connectivity or data mapping issues efficiently.

- Ensures the device is pointed to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can ingest reports.
- Helps select the correct transport mode UDP or TCP based on network reliability and feature needs.
- Aids in troubleshooting missing telemetry fields by checking firmware, enabled interfaces, and OBD compatibility.
- Supports planning for optional integrations such as Bluetooth sensors, external I/O for immobilizers, or internal battery alerts.
- Reduces deployment time by aligning device configuration with Plaspy expectations for reporting cadence and event notifications.

## Why Use Plaspy with This Protocol

Using the Xirgo XT25 with Plaspy gives fleets practical, compact hardware combined with a platform that automatically handles protocol detection and common data mapping. The XT25’s plug and play install options, OBD capability, integrated accelerometer, and optional Bluetooth make it well suited to mixed fleet deployments that require both real time visibility and event driven alerts.

If you want to learn more about how Plaspy works with devices like the XT25, visit https://www.plaspy.com to explore platform features and deployment guides. For the most current device specific protocol behavior, firmware details, and installation guidance refer to the manufacturer documentation at https://xirgo.com/ since protocol support and firmware behavior can change over time.
