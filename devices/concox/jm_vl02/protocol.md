---
slug: /concox/jm_vl02/protocol
id: jm_vl02-protocol
sidebar_label: Protocol
title: Concox - JM-VL02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Concox JM-VL02 tracker with Plaspy for reliable fleet tracking and telemetry
keywords:
  - Concox JM-VL02 protocol
  - Concox JM-VL02 GPS protocol
  - Concox JM-VL02 communication protocol
  - Concox JM-VL02 tracking protocol
  - Concox GPS tracker protocol
  - JM-VL02 Plaspy compatibility
  - vehicle tracking protocol
  - fleet management protocol
  - GPS telemetry protocol
  - immobilizer and alarm protocol
---

# Concox - JM-VL02 Protocol

This page describes the public protocol context for using the Concox JM-VL02 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in high level terms so integrators and fleet operators understand the connection and reporting behavior used for real time tracking and vehicle telemetry.

The JM-VL02 is an industrial vehicle tracker with LTE Cat-M1 / NB2 and GSM 2G fallback, GNSS positioning, vehicle I/O (ACC/ignition, SOS, relay), and an onboard accelerometer. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The communication protocol for the JM-VL02 defines how the tracker reports position, telemetry, events, and basic control signals to a remote server so that a platform such as Plaspy can ingest and act on that data. This page avoids implementation specifics and instead explains the practical role of the protocol in a Plaspy deployment.

- Enables periodic and event driven delivery of GNSS positions and cellular derived location information to the backend.
- Conveys vehicle state and inputs such as ACC/ignition status, SOS button presses, digital input events, and relay state to support telematics and security workflows.
- Reports accelerometer derived events for harsh driving, collision detection, and other motion alerts that are useful for safety monitoring.
- Provides a path for remote commands and control signals initiated from a fleet platform when supported by the device and manufacturer firmware.
- Allows the tracker to identify itself so the platform can associate incoming data with the correct asset record.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections from a wide range of tracker models using a single shared endpoint and port. When a JM-VL02 or other compatible tracker reports to Plaspy, the platform identifies the device protocol automatically so users typically do not need to select a protocol manually inside Plaspy if the device is configured correctly.

- Plaspy expects trackers to report to the platform endpoint at d.plaspy.com or directly to the server IP 54.85.159.138.
- All devices in Plaspy use the same port, which simplifies device configuration across models.
- The device may be configured to send data using UDP or TCP on port 8888 depending on device configuration and network conditions.
- If the tracker is configured to point to the Plaspy endpoint and the network allows outbound connections, Plaspy will detect the protocol automatically and begin ingesting telemetry.
- For most deployments the user configures the device APN and server address only; Plaspy handles the protocol identification on arrival.

## Transport and Connection Context

Transport describes how the tracker reaches the Plaspy servers rather than the internal data format of messages. The JM-VL02 supports cellular connectivity modes designed to maximize coverage and continuity, and it can be configured to deliver data to Plaspy using the platform shared transport settings.

- Devices may be configured to use either UDP or TCP for reporting, both on port 8888.
- Trackers can point to the hostname d.plaspy.com or the server IP 54.85.159.138 when setting the reporting server.
- Port 8888 is used by all devices in Plaspy, which reduces configuration variation across a mixed fleet.
- Network considerations such as operator restrictions, APN settings, and firewall rules can affect transport behavior and should be validated during installation.
- Choosing UDP vs TCP may depend on local network reliability, device firmware options, and operator guidance.

## Protocol Compatibility Notes

- Manufacturer firmware revisions can change what events are reported, how often they are sent, and which optional features are supported.
- Hardware revisions or regional variants of the JM-VL02 may expose different I/O configurations or sensor behavior; verify physical pinouts and input wiring before deployment.
- Transport selection (UDP vs TCP) may need to be adjusted based on carrier behavior and desired delivery guarantees.
- Remote command capabilities such as relay control depend on firmware features and any server-side command protocols the manufacturer supports.
- Validate compatibility and recommended settings against official Concox documentation and release notes for the exact product SKU and firmware version.
- Test a sample device on the intended cellular network and Plaspy endpoint to confirm expected behavior before large scale rollout.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure accurate setup, predictable operation, and faster troubleshooting when integrating JM-VL02 devices with Plaspy. Knowing what the device will report and how it reaches the platform makes deployments more reliable and easier to maintain.

- Confirms that position, ignition, and input events arrive at Plaspy as expected for asset state and alarm workflows.
- Helps select appropriate transport settings and APN configuration for reliable delivery on the target cellular network.
- Aids in debugging missing or malformed telemetry by narrowing down device firmware, network, or configuration issues.
- Ensures remote control actions such as relay immobilization are mapped correctly and only invoked when supported and authorized.
- Supports long term maintenance planning by factoring firmware updates and hardware revisions into the device lifecycle.

## Why Use Plaspy with This Protocol

Using the JM-VL02 with Plaspy delivers a practical combination of rugged, vehicle oriented hardware and a platform designed to ingest location, telemetry, and event data. For fleets that need visibility into vehicle location, driver behavior, ignition state, and emergency events, this integration provides the core data streams required for dispatch, safety monitoring, and loss prevention.

Plaspy accepts connections from JM-VL02 devices at d.plaspy.com or 54.85.159.138 on port 8888 and will automatically detect the tracker protocol when devices are configured to report to that endpoint. To learn more about Plaspy and how it supports fleet telematics, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance for the JM-VL02, please verify information on the official Concox site https://www.iconcox.com/ since protocol support and firmware behavior may change over time.
