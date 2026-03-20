---
slug: /gotop/w10sa/protocol
id: w10sa-protocol
sidebar_label: Protocol
title: GOTOP - W10SA Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for GOTOP W10SA and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - GOTOP W10SA protocol
  - GOTOP W10SA GPS protocol
  - W10SA Plaspy compatibility
  - GOTOP tracking protocol
  - W10SA communication protocol
  - GOTOP GPS tracker protocol
  - Plaspy device integration
  - personal GPS tracker W10SA
  - W10SA telemetry
  - GOTOP W10SA tracking integration
---

# GOTOP - W10SA Protocol

This page describes the public protocol context for using the GOTOP W10SA personal GPS tracker with the Plaspy platform. It focuses on how the device reports telemetry and alerts to Plaspy in general terms so operators and integrators can understand connection expectations and high level compatibility points.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page emphasizes public, non sensitive protocol context while encouraging verification against manufacturer documentation for firmware specific details.

## Protocol Overview

The W10SA supports common tracker protocols and configurable server settings that let it deliver periodic location updates and alarm signals to a backend like Plaspy. The protocol defines how the device identifies itself, reports GPS positions and telemetry, and forwards alarm events so Plaspy can ingest and present usable tracking data.

- Enables device identification and session association so incoming telemetry maps to the correct asset in Plaspy
- Carries periodic GPS coordinates and basic telemetry such as battery status and alarm types for real time and historic views
- Transmits alarm notifications for events such as power loss, overspeed, vibration, and geofence triggers so Plaspy can raise alerts
- Supports multiple industry protocols including GT06, 808 and Tianqin as provided by the manufacturer for broad compatibility
- Uses configurable server IP and port settings so the device can be pointed at Plaspy or an intermediate gateway without changing firmware

## How Plaspy Detects the Protocol

Plaspy runs a shared ingestion endpoint and automatically determines the tracker protocol for devices that report to the platform. In most deployments the integrator only needs to configure the W10SA to send telemetry to the Plaspy endpoint and the platform handles protocol selection for ingestion.

- Plaspy uses a single public endpoint so devices are pointed to the same destination for telemetry
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138
- Plaspy receives telemetry on port 8888 and all devices in Plaspy use the same port
- Devices may be configured to use UDP or TCP and Plaspy accepts connections on the shared port
- When the device is correctly pointed to d.plaspy.com or 54.85.159.138 on port 8888 manual protocol selection inside Plaspy is typically not required

## Transport and Connection Context

Connection details determine how the W10SA reaches Plaspy but do not change the public role of the protocol itself. The W10SA supports configurable server IP and port, and operators should ensure the device uses a transport supported by their SIM and regional network.

- The device may be configured using UDP or TCP on port 8888 depending on device support and network conditions
- Point the W10SA to the Plaspy endpoint either by domain d.plaspy.com or by IP 54.85.159.138
- Plaspy accepts telemetry on port 8888 for all supported devices so a single port configuration suffices across a deployment
- Transport selection can affect delivery reliability and latency but does not change high level protocol semantics
- Ensure mobile network data and APN settings are correct so the tracker can open the configured transport to Plaspy

## Protocol Compatibility Notes

- Manufacturer firmware revisions can add or modify supported protocol variants even when the device advertises universal support
- Hardware revisions may alter available features such as alarms or power reporting that the protocol can carry
- The W10SA supports GT06 808 and Tianqin style protocols as publicized by the manufacturer which helps out of the box Plaspy integration
- Transport choice between UDP and TCP is configurable and should match network reliability and intended server behavior
- Confirm server IP and port have been set correctly on the device before troubleshooting protocol mapping
- Always validate feature support such as specific alarm types against the device manual for the installed firmware build
- If you use intermediate gateways or middleware, keep end to end transport and port mapping consistent with Plaspy settings

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a smooth setup, accurate data mapping in Plaspy, and reliable long term operation. Even when Plaspy automatically detects the protocol, knowing what the device can send aids configuration and troubleshooting.

- Speeds initial integration by ensuring the device points to d.plaspy.com or 54.85.159.138 on port 8888
- Helps operators verify that alarms and telemetry fields expected in Plaspy are supported by the device firmware
- Makes it easier to diagnose delivery problems related to transport, APN, or network limitations
- Assists in planning for feature gaps such as additional sensor inputs or remote commands that may not be available
- Improves change management when firmware or hardware revisions are introduced across a fleet

## Why Use Plaspy with This Protocol

Using the GOTOP W10SA with Plaspy provides a straightforward way to capture real time locations, alarm events, and historical route playback for people and small portable assets. Plaspy’s shared ingestion endpoint and automatic protocol detection reduce the amount of per device configuration required, letting operations teams scale deployments with predictable server settings.

To learn more about how Plaspy handles device telemetry and to evaluate fit for your deployment, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration instructions always refer to the manufacturer documentation at https://www.gotop.cc/ as protocol support and firmware behavior can change over time and should be verified with the official source.
