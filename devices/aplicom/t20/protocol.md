---
slug: /aplicom/t20/protocol
id: t20-protocol
sidebar_label: Protocol
title: Aplicom - T20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Aplicom T20 with Plaspy including connection and transport guidance for integrators
keywords:
  - Aplicom T20 protocol
  - Aplicom T20 GPS protocol
  - Aplicom T20 communication protocol
  - Aplicom T20 tracking protocol
  - Plaspy device compatibility
  - Plaspy tracker protocol
  - vehicle telematics integration
  - LTE M telematics gateway
  - CAN bus telemetry tracking
  - fleet tracking protocol
---

# Aplicom - T20 Protocol

This page covers the public protocol context for using the Aplicom T20 tracker with Plaspy. It explains how the T20 typically communicates telemetry and location information to the Plaspy platform and what integrators should know about connection settings and reporting behavior in a non sensitive, high level way.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The Aplicom T20 is a compact LTE‑M telematics gateway with dual CAN ports and multiple I O options, and this page describes how that device generally interfaces with Plaspy without delving into firmware specific internals.

## Protocol Overview

The protocol used by the T20 governs how the device identifies itself, reports position and telemetry, and sends event data to a remote server. For integration with Plaspy, the important public aspects are transport selection, endpoint configuration, and the presence of telemetry and event streams that Plaspy can consume.

- Enables the T20 to deliver location, CAN bus telemetry, and peripheral sensor events to Plaspy for mapping and reporting.
- Carries identification and session context so Plaspy can associate incoming messages with the correct device record.
- Transmits periodic and event driven updates so Plaspy receives both regular position fixes and on demand sensor or alarm events.
- Supports either connection oriented or connectionless transport depending on device and network configuration, allowing flexibility for different deployments.
- Works together with edge filtering or preprocessing on the T20 to reduce data volume when integrators use the Aplicom SDK.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a shared endpoint and automatically determines the tracker protocol without requiring users to manually pick a protocol when the device is correctly configured. Proper device endpoint and transport settings are the primary requirements for automatic detection and successful registration in Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The Plaspy listening port is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on the tracker configuration and network requirements.
- When a T20 is pointed at the Plaspy endpoint, Plaspy automatically detects the tracker protocol and associates incoming messages with the correct device.
- In most cases you will not need to select a protocol inside Plaspy manually if the T20 is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection choices and network behavior are part of the public integration surface for the T20. Whether the tracker uses UDP or TCP, and whether it resolves a host name or sends directly to an IP address, are configurable in device provisioning and matter for firewall and carrier settings.

- Devices may point to the Plaspy hostname d.plaspy.com or to the IP address 54.85.159.138 depending on installer preference or environment constraints.
- The device may be configured using UDP or TCP on port 8888 and the same port is used across all devices in Plaspy.
- TCP may be chosen where reliable delivery and session semantics are preferred; UDP may be chosen for simpler, lower overhead reporting depending on firmware capabilities.
- Ensure outbound cellular firewall and APN settings allow traffic to the Plaspy endpoint on port 8888.
- Consider network conditions for LTE‑M deployments where packet sizes and keepalive behavior affect device battery and data usage.

## Protocol Compatibility Notes

- Firmware variations can change which messages are sent, how often they are reported, and which peripheral events are supported.
- Different hardware revisions and regional variants may expose different I O options, GNSS behavior, or CAN signal mappings.
- Manufacturer configuration tools or SDK features may add edge filtering or summary reporting that alter the telemetry Plaspy receives.
- Transport selection between UDP and TCP is configured on the device and should match the intended deployment and network constraints.
- Always validate which telemetry channels and peripheral events are enabled on a specific device before assuming Plaspy will receive them.
- Confirm integration details against the manufacturer documentation for the exact T20 hardware and firmware revision in use.

## Why Protocol Understanding Matters

Understanding how the T20 communicates with Plaspy improves setup speed, reduces troubleshooting time, and helps maintain reliable fleet telemetry over the lifetime of a deployment.

- Helps installers choose the correct transport and endpoint so devices register with Plaspy quickly.
- Makes it easier to interpret connectivity issues versus telemetry or configuration problems.
- Guides decisions about edge preprocessing and how much raw CAN or sensor data is forwarded to Plaspy.
- Supports planning for firmware updates and configuration changes that may impact message timing or content.
- Enables integrators to document expected events and telemetry fields for downstream reporting and automation in Plaspy.

## Why Use Plaspy with This Protocol

Using the Aplicom T20 together with Plaspy provides an effective path for fleets and integrators to collect location, CAN bus diagnostics, and peripheral sensor events in a single telematics workflow. The T20’s LTE‑M connectivity and industrial interfaces make it a suitable choice for vehicle and mobile equipment tracking where low power, long term network support, and robust sensor handling are important.

If you want to learn more about how Plaspy works with devices like the Aplicom T20, visit https://www.plaspy.com to explore platform features and deployment options. For the latest device specific protocol details, firmware behavior, and manufacturer documentation verify current information on the Aplicom website https://www.aplicom.com/ as implementation and firmware features can change over time.
