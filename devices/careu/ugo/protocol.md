---
slug: /careu/ugo/protocol
id: ugo-protocol
sidebar_label: Protocol
title: CAREU - Ugo Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CAREU Ugo GPS tracker and how it communicates with Plaspy servers for reliable vehicle telematics
keywords:
  - CAREU Ugo protocol
  - CAREU Ugo GPS protocol
  - CAREU Ugo Plaspy compatibility
  - Ugo OBD II tracker protocol
  - CAREU Ugo communication protocol
  - Ugo tracking protocol
  - Plaspy device protocol
  - vehicle tracking OBD II
  - fleet management Ugo
  - Plaspy compatible trackers
---

# CAREU - Ugo Protocol

This page describes the public protocol context for using the CAREU Ugo OBD II GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in safe, non sensitive terms so integrators and fleet managers understand the connection and reporting behavior needed for reliable telemetry delivery to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and reporting details can vary with firmware version, hardware revision, regional SKUs, and manufacturer implementation, so this page keeps the discussion at a connection and workflow level while highlighting practical configuration points for successful integration.

## Protocol Overview

The Ugo device uses a cellular GNSS enabled reporting workflow to forward location, OBD II telemetry, and motion events to a remote service. The communication protocol defines how the tracker identifies itself, reports position and sensor data, and accepts remote configuration commands. For integration with Plaspy, the protocol role is primarily to ensure timely, structured delivery of telemetry from vehicle to server.

- Enables periodic and event driven GNSS position reporting to a remote server for mapping and history.
- Carries OBD II telemetry and vehicle status fields that Plaspy can use for trip segmentation and diagnostics.
- Transmits accelerometer and motion events for driver behavior and impact alerting.
- Supports remote configuration and firmware updates initiated by the manufacturer or fleet management workflows.
- Provides the identifiers and session information Plaspy uses to map incoming reports to the correct vehicle and account.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and automatically determines the tracker protocol based on the incoming device traffic. In most cases, when the Ugo is configured to report to the Plaspy endpoint, no manual protocol selection is needed inside Plaspy.

- Plaspy listens on the shared server endpoint d.plaspy.com and IP 54.85.159.138 on port 8888.
- Devices may be configured to use either UDP or TCP on port 8888 when reporting to Plaspy.
- All devices in Plaspy use the same port, which simplifies device configuration and network policies.
- If the tracker is correctly pointed to the Plaspy endpoint, Plaspy will automatically detect the tracker protocol and associate incoming data with the appropriate device record.
- Typical setup steps are limited to pointing the tracker to the Plaspy endpoint and confirming the device identifier is registered or visible in Plaspy.

## Transport and Connection Context

Connection context covers how the Ugo establishes a transport channel to Plaspy and the choices available to integrators. Ugo supports modern cellular links and may fall back between network generations; at the transport layer it can use either UDP or TCP depending on device configuration or firmware settings.

- The device may be configured to use UDP or TCP on port 8888 to report to Plaspy.
- The Plaspy server endpoint is reachable at d.plaspy.com and at the server IP 54.85.159.138 for environments that require direct addressing.
- All Plaspy supported devices use port 8888, keeping firewall and NAT configuration consistent across deployments.
- The tracker will use the cellular data channel available to it, with Ugo variants supporting 4G LTE and fallback to 3G or 2G as needed.
- Transport selection may affect reliability characteristics such as retransmission behavior and latency; choose the transport mode supported by the device firmware and network conditions.

## Protocol Compatibility Notes

- Device firmware versions can change the set of reported fields and timing of messages; verify behavior for your firmware revision.
- Hardware revisions and regional SKUs may differ in cellular bands, logging capacity, or accessory support which can affect what telemetry is available.
- Some advanced features such as remote immobilization or accessory control may require additional configuration or optional hardware.
- Transport mode selection between UDP and TCP should match the device configuration and the fleet network design for best results.
- Remote configuration and FOTA behavior are manufacturer provided and can alter reporting parameters after updates.
- Confirm device identifiers and reporting intervals in Plaspy after provisioning to ensure data is being associated correctly.

## Why Protocol Understanding Matters

A practical understanding of the Ugo communication protocol helps with initial setup, ongoing operations, and troubleshooting. Knowing which data the tracker will send and how it connects to Plaspy reduces integration time and improves operational reliability.

- Speeds initial deployment by focusing on the correct endpoint and transport settings required by Plaspy.
- Helps diagnose connectivity issues by distinguishing network problems from device firmware or configuration issues.
- Enables informed choices about reporting intervals and event thresholds to balance battery life and data freshness.
- Improves response to firmware updates by anticipating changes in reported fields or message timing.
- Supports mapping of device identifiers to vehicles in Plaspy so telemetry and events are attributed correctly.

## Why Use Plaspy with This Protocol

Using the CAREU Ugo with Plaspy gives fleet operators a straightforward way to collect OBD II telemetry, GNSS position data, and motion events without complex installations. Plaspy aggregates incoming reports for live tracking, historical playback, alerts, and driver performance workflows, making Ugo a practical option for fleets that value fast deployment and rich vehicle telemetry.

If you want to learn more about Plaspy and how it works with devices like the CAREU Ugo visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and regional variants verify information on the manufacturer site https://www.systech-iot.com/ as firmware behavior and implementation details can change over time.
