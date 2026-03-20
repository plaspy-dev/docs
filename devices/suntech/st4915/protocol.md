---
slug: /suntech/st4915/protocol
id: st4915-protocol
sidebar_label: Protocol
title: Suntech - ST4915 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Suntech ST4915 and how it communicates with Plaspy for reliable asset tracking and telemetry
keywords:
  - Suntech ST4915 protocol
  - Suntech ST4915 GPS protocol
  - Suntech ST4915 communication protocol
  - ST4915 tracker Plaspy
  - Suntech asset tracking
  - GPS tracker protocol
  - vehicle tracking ST4915
  - ST4915 telemetry
  - Plaspy compatible devices
  - IoT GPS tracker
---

# Suntech - ST4915 Protocol

This page documents the public protocol context for using the Suntech ST4915 tracker with Plaspy. It explains how the device reports GNSS positions and telemetry to Plaspy and which connection settings are used for reliable, long term asset monitoring without exposing implementation sensitive details.

Plaspy uses a shared connection endpoint and port across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by device firmware, hardware revision, and manufacturer implementation, so this page focuses on high level, public protocol context for integration and troubleshooting.

## Protocol Overview

The tracker protocol defines how the ST4915 conveys GNSS fixes, sensor telemetry, and event information to a remote server like Plaspy. In practice the protocol is the vehicle for location, motion, and input events and allows Plaspy to present those signals in maps, alerts, and reporting.

- Carries GNSS position data and basic telemetry such as battery state, accelerometer events, and digital input changes.
- Transmits event driven reports for motion, tamper, ignition, and door or panic inputs to enable alerts and automation.
- Delivers scheduled and adaptive reporting so device lifetime and reporting frequency can be balanced for multi year deployments.
- Permits optional contextual data such as Bluetooth or Wi Fi assisted fixes when available on the device variant.
- Supports transport over standard TCP or UDP so it can be routed to Plaspy servers using common IoT networks.
- Enables remote lifecycle features exposed by the device such as OTA firmware updates when supported by the manufacturer.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a shared endpoint and identifies the device protocol automatically so users do not normally need to select a protocol manually inside the platform. Proper device configuration to point to the Plaspy endpoint is the primary requirement for automatic detection.

- Plaspy’s inbound server domain is d.plaspy.com and is reachable for device reporting.
- Plaspy’s public server IP is 54.85.159.138 if direct IP pointing is required.
- All devices in Plaspy use the same port and the platform listens on port 8888 for device traffic.
- Plaspy automatically detects the tracker protocol when the ST4915 reports to the Plaspy endpoint using the supported transport.
- In most deployments the device owner configures the tracker to send data to the Plaspy endpoint and no additional protocol selection is necessary in Plaspy.
- If a device is not appearing, verify device reporting settings, transport selection, and network connectivity to d.plaspy.com or the listed IP.

## Transport and Connection Context

The ST4915 family supports standard IoT transports and can be configured to use either UDP or TCP depending on network and firmware options. Connection context is about where and how the device sends its reports rather than the internal packet structure.

- The ST4915 may be configured to use UDP or TCP on port 8888 depending on device support and provisioning.
- Devices can be pointed at the domain d.plaspy.com or at the IP address 54.85.159.138 if DNS is not available or direct IP is preferred.
- Plaspy uses the same port 8888 across all supported devices for simplified provisioning and firewall rules.
- Choice of UDP versus TCP affects delivery characteristics but both transports are accepted by Plaspy on the shared endpoint.
- Ensure APN and network settings on the device are correctly provisioned to allow LTE Cat M1, NB IoT, or 2G fallback connectivity to reach the Plaspy endpoint.
- For devices with optional Wi Fi or Bluetooth assistance, that data is carried through the same reporting mechanism when the device firmware supports it.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields, or transport defaults; always verify firmware release notes for device-specific behavior.
- Hardware variants such as the ST4915B with Bluetooth and Wi Fi may report additional contextual data that server parsers can surface when recognized.
- Different deployments may select UDP or TCP for reasons of delivery semantics and mobile network behavior; confirm which transport is active on the device.
- Manufacturer configuration tools or provisioning services may alter default server settings; double check the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy’s automatic detection covers common variants but unusual custom firmware or heavily modified devices may require additional validation.
- Always validate compatibility against official Suntech documentation for model and firmware specific differences.

## Why Protocol Understanding Matters

A clear understanding of the communication protocol improves setup success, reduces troubleshooting time, and helps tune device behavior to get the expected performance from Plaspy and the ST4915 in production deployments.

- Faster initial provisioning by knowing which transport and server values the device needs to report to Plaspy.
- More effective troubleshooting when reports do not arrive, by checking domain or IP, port, and transport configuration on the device.
- Better battery management through informed reporting interval choices and event driven reporting strategies that the protocol supports.
- Improved reliability of geofencing, alerts, and automation when telemetry mapping between device fields and Plaspy is understood.
- Easier planning for variants with optional sensors like BLE or Wi Fi because you can anticipate how that data will be forwarded to Plaspy.

## Why Use Plaspy with This Protocol

Using the Suntech ST4915 with Plaspy provides a robust solution for long life, low maintenance asset tracking. The combination of the ST4915 hardware and Plaspy’s shared endpoint approach simplifies deployment of large fleets of remote assets, letting organizations focus on monitoring and workflows rather than low level connectivity differences.

Plaspy’s platform accepts ST4915 reports over TCP or UDP to the shared Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888, automatically detecting the tracker protocol so you can quickly bring devices online and start using maps, alerts, and telemetry. To learn more about Plaspy visit https://www.plaspy.com and for the latest device specific protocol details, firmware notes, and official documentation please verify information at the manufacturer website http://www.suntechint.com/.
