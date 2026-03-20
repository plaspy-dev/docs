---
slug: /itriangle/bharat101/protocol
id: bharat101-protocol
sidebar_label: Protocol
title: iTriangle - Bharat101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the iTriangle Bharat101 tracker with Plaspy for reliable vehicle tracking and telemetry
keywords:
  - iTriangle Bharat101 protocol
  - Bharat101 GPS protocol
  - iTriangle GPS tracker Plaspy
  - Bharat101 tracking protocol
  - Bharat101 communication protocol
  - AIS 140 tracker protocol
  - NavIC GPS tracker protocol
  - Bharat101 Plaspy integration
  - fleet GPS tracker Bharat101
  - vehicle tracking Bharat101
---

# iTriangle - Bharat101 Protocol

This page describes the public protocol context for using the iTriangle Bharat101 GPS tracker with the Plaspy platform. It focuses on how the device communicates in general terms, which connection points you can configure, and what to expect when integrating Bharat101 units into Plaspy for fleet and vehicle telemetry.

The Bharat101 is an AIS 140 compliant tracker with built in NavIC alongside GPS, an embedded eSIM, BLE 4, and rugged IP65 protection. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, though exact protocol behavior can vary by firmware revision, hardware revision, and manufacturer implementation. Use this page as a protocol overview and refer to iTriangle documentation for device specific firmware details.

## Protocol Overview

The communication protocol for the Bharat101 governs how the tracker reports GNSS positions, motion and sensor events, and device status to a remote server such as Plaspy. The protocol enables the device to identify itself, report telemetry in a usable form for downstream systems, and support remote configuration and firmware updates when available.

- Provides real time position and motion reporting so Plaspy can display location, speed, and event state.
- Transmits sensor and I/O events such as accelerometer triggers, analog sensor readings, and digital input changes for telemetry and alerts.
- Supports multi server reporting so the device can send data to Plaspy along with other configured endpoints for redundancy or local systems.
- Enables remote configuration and OTA updates where supported by the device firmware to keep behavior current.
- Carries status and diagnostic information that helps Plaspy present device health and connectivity metrics.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and port and uses that incoming data to identify which tracker is reporting. For most deployments the user does not need to pick a protocol manually inside Plaspy if the Bharat101 is configured to report to the Plaspy endpoint.

- Plaspy accepts tracker connections on d.plaspy.com and the public server IP 54.85.159.138.
- All devices supported by Plaspy use the same port for reporting, which is 8888.
- The Bharat101 may be configured to use either UDP or TCP to send data to Plaspy on port 8888 depending on device configuration and network conditions.
- Plaspy automatically detects the tracker protocol when properly configured to send data to the Plaspy endpoint.
- Typically no manual protocol selection in Plaspy is required if the device is pointed to the Plaspy server and port.

## Transport and Connection Context

Connection context covers the transport choices and addressing that determine how the Bharat101 reaches Plaspy. These are configuration-level details you can set on the device or via manufacturer tools to ensure reliable delivery of telemetry.

- The device may be configured to use UDP or TCP as the transport protocol when sending data to Plaspy on port 8888.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy uses port 8888 for all supported devices to simplify configuration and endpoint management.
- Network-level considerations such as carrier firewalls, APN settings, and eSIM provisioning can affect whether TCP or UDP is preferable in a given deployment.
- Multi server reporting on the Bharat101 allows sending the same telemetry to Plaspy and to secondary endpoints for backup or local processing.

## Protocol Compatibility Notes

- Firmware revisions can change which messages or optional fields the device sends; verify firmware release notes when troubleshooting compatibility.
- Hardware revisions and regional variants may affect supported radios, sensor sets, or default configuration options.
- Manufacturer configuration channels such as USB, SMS, Bluetooth, or a remote configuration server can alter transport and reporting behavior.
- Transport selection between UDP and TCP can influence delivery reliability and network compatibility; test the chosen transport with your carrier and Plaspy.
- AIS 140 certification indicates compliance with specific regulatory requirements, but integration details may still vary by firmware.
- Always validate compatibility and recommended settings against the manufacturer documentation for your device batch.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps ensure a smooth setup, faster troubleshooting, and predictable long term operation when using Bharat101 devices with Plaspy. Knowing which connection options and report types are involved reduces integration time and supports reliable telemetry.

- Speeds up initial deployment by clarifying which server address and transport to configure on the device.
- Helps diagnose connectivity issues by narrowing whether the problem is transport, network, or device configuration related.
- Improves event mapping in Plaspy by aligning device event types and I/O signals with platform alert rules.
- Supports planning for firmware update and OTA strategies so devices remain compatible with platform features.
- Enables informed decisions about redundancy and multi server reporting to meet operational availability goals.

## Why Use Plaspy with This Protocol

Using the Bharat101 tracker with Plaspy gives organizations a path to combine AIS 140 grade hardware, indigenous NavIC positioning, and resilient cellular connectivity with a single fleet management platform. Plaspy accepts the device over a shared endpoint, automatically detects the tracker protocol, and surfaces location, motion, and I/O events for operations, safety, and compliance workflows.

If you want to learn more about how Plaspy works with devices like the Bharat101 and to review platform features, visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and implementation instructions please consult the manufacturer at https://www.itriangle.net/ as device support and firmware behavior can change over time.
