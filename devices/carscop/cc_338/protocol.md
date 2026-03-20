---
slug: /carscop/cc_338/protocol
id: cc_338-protocol
sidebar_label: Protocol
title: Carscop - CC-338 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the Carscop CC-338 and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - Carscop CC-338 protocol
  - Carscop CC-338 GPS protocol
  - Carscop CC-338 Plaspy compatibility
  - Carscop tracker protocol
  - CC-338 vehicle telematics protocol
  - Carscop GPS tracker integration
  - Plaspy device protocol
  - GPS tracker CANBUS telemetry
  - Fleet management tracker protocol
  - Car sharing GPS protocol
---

# Carscop - CC-338 Protocol

This page describes the public protocol context for using the Carscop CC-338 vehicle telematics tracker with Plaspy. It focuses on how the tracker communicates with Plaspy at a high level, the connection patterns you should be aware of, and practical considerations when integrating the device with a fleet or car sharing platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior can vary with firmware releases, hardware revisions, and manufacturer implementation choices, so this page sticks to public, non sensitive details and encourages verification with manufacturer documentation.

## Protocol Overview

The CC-338 communicates vehicle telemetry, location, and status to a server endpoint so a platform like Plaspy can process and present live data. The tracker’s communication protocol defines how the device identifies itself, how it reports position and CANBUS data, and how remote commands and configuration are delivered in a supported deployment.

- Enables regular position updates, status reports, and event notifications from the device to the server.
- Carries vehicle telemetry such as ignition state, door and alarm events, and CANBUS-derived diagnostics where available on the vehicle.
- Supports uplink of stored logs when connectivity returns, allowing last known position and buffered telemetry to be forwarded.
- Acts as the transport medium for remote control channels the device exposes, for example immobilizer or wired outputs, via a management platform.
- Provides enough identity and envelope information so the receiving platform can match packets to the correct vehicle record without manual selection.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared endpoint and port and applies automatic protocol detection when a properly configured device reports in. For most CC-338 deployments you do not need to select a protocol in Plaspy; simply ensure the device is configured to send data to the Plaspy endpoint.

- Plaspy’s public endpoint uses the domain d.plaspy.com for device reporting.
- The Plaspy server is also reachable at the public IP 54.85.159.138 for environments that require an IP target.
- Plaspy listens on port 8888 for device connections and uses the same port for all devices.
- Devices may send data over either UDP or TCP depending on device configuration and carrier behavior.
- When a CC-338 is pointed at the Plaspy endpoint, Plaspy automatically detects the tracker protocol so manual protocol selection is typically not required.

## Transport and Connection Context

Transport choices influence connection reliability, NAT traversal, and delivery guarantees. The CC-338 supports TCP/IP connectivity for private servers and common integration paths, and it can be configured to target Plaspy using either the domain name or the server IP depending on installer preference.

- The device may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Pointing the tracker to d.plaspy.com is the recommended domain-based option for production deployments.
- If DNS is restricted, the device can be directed to the Plaspy IP 54.85.159.138 instead of the domain.
- All Plaspy supported devices use the same port 8888 which simplifies firewall and network configuration.
- Select UDP when you need lighter stateless reporting and TCP when a persistent or reliable stream is preferred, subject to what the specific device firmware supports.

## Protocol Compatibility Notes

- Firmware revision can change behavior; newer firmware may add fields or alter reporting intervals.
- Hardware revisions or regional variants can affect which telemetry channels or control outputs are available.
- Manufacturer configuration options may allow transport selection (UDP versus TCP) and endpoint selection by domain or IP.
- CANBUS data availability depends on the connected vehicle and which parameters the vehicle exposes on its CAN interface.
- Validate integration with up to date manufacturer documentation and test devices on a staging Plaspy endpoint where possible.
- OTA updates or manufacturer server settings can alter the device reporting behavior; confirm settings after updates.

## Why Protocol Understanding Matters

A practical understanding of the CC-338 communication protocol improves setup success, reduces troubleshooting time, and helps maintain reliable fleet operations when the tracker is connected to Plaspy.

- Ensures the device is pointed at the correct Plaspy endpoint and transport so data arrives promptly.
- Helps diagnose connectivity issues by clarifying whether problems are network, transport, or device configuration related.
- Enables sensible expectations about which vehicle parameters will be available through CANBUS and which require firmware or vehicle support.
- Supports planning for offline scenarios and how the device will forward buffered logs to Plaspy when connectivity resumes.
- Informs decisions about whether UDP or TCP is preferable for a particular fleet or deployment environment.

## Why Use Plaspy with This Protocol

Pairing the Carscop CC-338 with Plaspy provides a streamlined path to real time location, telemetry, and remote control workflows for fleet and car sharing operations. The CC-338’s multi network cellular support, onboard logging, and OBD II CANBUS connectivity make it well suited to applications that need deep vehicle insight plus secure remote actions.

Plaspy’s shared endpoint approach and automatic protocol detection simplify device onboarding: point the CC-338 at d.plaspy.com or 54.85.159.138 using port 8888, and Plaspy will identify the tracker protocol and start processing reports once the device is configured correctly. Learn more about Plaspy and how it can support vehicle telematics deployments at https://www.plaspy.com. For the most current, device specific protocol and firmware details verify information with the manufacturer at http://www.carscop.com/.
