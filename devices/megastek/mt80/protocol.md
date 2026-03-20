---
slug: /megastek/mt80/protocol
id: mt80-protocol
sidebar_label: Protocol
title: Megastek - MT80 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Megastek MT80 GPS watch integration with Plaspy including transport and compatibility notes
keywords:
  - Megastek MT80 protocol
  - Megastek MT80 GPS protocol
  - MT80 Plaspy compatibility
  - MT80 GPS tracker protocol
  - Megastek tracker protocol
  - MT80 health telemetry
  - GPS watch protocol
  - wearable GPS tracker protocol
  - MT80 GPRS TCP UDP
  - Plaspy device protocol
---

# Megastek - MT80 Protocol

This page covers the public protocol context for using the Megastek MT80 Series GPS watch with Plaspy. It focuses on how the tracker reports location, events, and health telemetry in ways that allow Plaspy to ingest and present that data, while avoiding device internals or private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by MT80 firmware, hardware variant, and manufacturer configuration, so treat the information below as general integration guidance rather than a firmware specific reference.

## Protocol Overview

The MT80 Series communicates telemetry and alarm events to server endpoints using standard reporting methods available on wearable cellular trackers. The device protocol defines how the watch identifies itself, reports position fixes, delivers health sensor values, and signals alarms so Plaspy can translate those messages into dashboard events and historical tracks.

- Enables device identification and session reporting so Plaspy can associate incoming data with the correct account and unit.
- Delivers location fixes, timestamps, and movement events used for live tracking and playback.
- Carries health telemetry fields such as skin temperature, SpO2, and heart rate from the MT80BLE variant or via phone gateway forwarding.
- Conveys alarm and event signals including SOS, two way voice events, geo fence alerts, low battery, and belt on/off or cut detection.
- Supports common transport options (cellular GPRS over TCP or UDP and SMS) so devices can report to a standard tracking endpoint.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports at a single shared endpoint and port and uses automated detection to recognize the tracker protocol. When an MT80 is configured correctly to report to Plaspy, users normally do not need to select a protocol manually inside the Plaspy platform.

- Plaspy listens for device reports at the shared server endpoint d.plaspy.com and also accepts connections to 54.85.159.138.
- All devices supported by Plaspy use the same server port and Plaspy automatically detects the tracker protocol on that port.
- If the MT80 is set to send data to d.plaspy.com or 54.85.159.138 using the supported transport, Plaspy will classify and process the incoming telemetry.
- Proper device credentials and identification fields reported by the MT80 help Plaspy link the device data to the correct account.
- Users should confirm the MT80 is configured to report using one of the supported transports and that the destination host and port match Plaspy settings.

## Transport and Connection Context

Transport selection is a configuration choice on the MT80 and depends on the regional hardware variant and deployment needs. Plaspy supports both TCP and UDP reporting on the same standard port so integrators can choose the best trade off for reliability and latency.

- The MT80 may be configured to use UDP or TCP for GPRS reporting; Plaspy accepts both transport types on port 8888.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the Plaspy IP 54.85.159.138 as the reporting destination.
- Plaspy uses port 8888 for all supported devices, providing a single consistent port for tracker reporting across models.
- SMS reporting is also commonly supported by MT80 variants for environments where packet data is not available.
- Some MT80 variants can forward health telemetry via a paired smartphone gateway, which then sends data to Plaspy over the chosen transport.

## Protocol Compatibility Notes

- Firmware differences across MT80 releases can change which telemetry fields are reported and which alarms are available; verify firmware level when troubleshooting.
- Hardware variants such as MT80BLE and MT804G may expose different sensors and forwarding options; confirm the exact model variant before integration.
- Transport selection (TCP vs UDP vs SMS) can affect delivery guarantees and latency; choose the transport appropriate for the deployment and network conditions.
- Manufacturer-side configuration options or customizations may alter reporting formats or field mappings; check device configuration prior to rollout.
- When using Bluetooth forwarding or phone gateway modes, ensure the paired phone app or gateway is configured to forward data reliably to the Plaspy endpoint.
- Always validate real device reports against Plaspy ingestion logs during initial setup to confirm fields and events arrive as expected.

## Why Protocol Understanding Matters

A clear, practical understanding of how the MT80 communicates helps ensure reliable setup, accurate troubleshooting, and predictable long term operation when integrated with Plaspy.

- Helps determine whether to use TCP, UDP, or SMS for a specific deployment and network environment.
- Makes it easier to map MT80 data fields such as location, health telemetry, and alarms to Plaspy event and reporting schemas.
- Speeds troubleshooting by focusing on configuration mismatches such as incorrect host, port, or transport.
- Supports better planning for battery and reporting interval trade offs tied to wearable power constraints and sensor sampling.
- Enables integrators to plan for firmware update impacts and to validate changes against expected behavior in Plaspy.

## Why Use Plaspy with This Protocol

Using the MT80 Series with Plaspy provides organizations with unified visibility into location, safety events, and health telemetry through a single platform. For care providers, lone worker programs, and supervised deployments, the combination of wearable sensors and Plaspy’s ingestion and event processing enables timely alerts, historical review, and operational oversight without requiring per device protocol selection.

If you want to learn more about how Plaspy handles device integrations and the features available for MT80 deployments, visit the Plaspy website at https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, please verify information on the manufacturer site https://www.megastek.com/ as behavior and supported fields can change with firmware and hardware revisions.
