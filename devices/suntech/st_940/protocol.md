---
slug: /suntech/st_940/protocol
id: st_940-protocol
sidebar_label: Protocol
title: Suntech - ST 940 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Suntech ST 940 GPS tracker compatibility with Plaspy servers and shared connection settings
keywords:
  - Suntech ST 940 protocol
  - Suntech ST 940 GPS protocol
  - ST 940 communication
  - Suntech tracker Plaspy compatibility
  - Suntech GPS tracking protocol
  - ST940 protocol guide
  - Suntech ST 940 integration
  - vehicle tracking Suntech ST 940
  - asset tracker ST 940
  - Plaspy compatible trackers
---

# Suntech - ST 940 Protocol

This page covers the public protocol context and connection guidance for using the Suntech ST 940 tracker with Plaspy. It explains how the device communicates at a high level, what to expect when configuring reporting to Plaspy, and how the device role and capabilities interact with the platform. The content is focused on public, non sensitive protocol context rather than manufacturer confidential details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The ST 940 is a compact, long battery life device with a waterproof design and magnetic mounting, and those device characteristics shape reporting patterns and deployment choices even though they do not change the public communication endpoint and port used by Plaspy.

## Protocol Overview

The protocol is the set of rules a tracker follows to send location, status, and telemetry to a server so that a platform such as Plaspy can interpret and display the data. For the ST 940 this means the tracker will periodically or conditionally transmit its position and status to the Plaspy endpoint so the data can be recorded and used for monitoring and alerts.

- Enables the tracker to report position, timestamps, and basic status information to Plaspy
- Allows the device to identify itself so the platform can associate incoming reports with the correct asset
- Supports periodic and event driven reporting patterns that affect battery life and visibility
- Serves as the transport of telemetry used for alerts, geofencing, and location history
- Is influenced by firmware settings and hardware revision which shape reporting frequency and available fields

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single shared endpoint and automatically determines the tracker protocol without requiring manual selection in most cases. When an ST 940 is pointed to the Plaspy endpoint and the device uses expected reporting behavior, the platform identifies and maps the incoming messages to the correct device record.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138
- The port is 8888 and all devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol when the device reports to the platform
- Users typically do not need to choose a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint
- Device identity and regular reporting enable Plaspy to associate transmissions with the correct asset

## Transport and Connection Context

A tracker’s transport choice determines how messages are delivered to Plaspy but does not change the platform endpoint. The ST 940 may be configured to use either of the supported transports depending on device capabilities and configuration settings. Understanding the transport options helps when configuring network access or troubleshooting intermittent reporting.

- The device may be configured using UDP or TCP on port 8888
- Devices may be configured to point to d.plaspy.com or to 54.85.159.138
- Plaspy uses the same single port for all supported devices which simplifies firewall and network configuration
- Transport selection can affect message delivery characteristics and how retransmits are handled at the network layer
- Confirm network routing and any NAT or firewall rules that could affect device connectivity when deploying at scale

## Protocol Compatibility Notes

- Firmware versions on the ST 940 can change available fields and reporting behavior; always check the device firmware notes when troubleshooting
- Hardware revisions or regional variants may alter supported transport modes or default reporting intervals
- Manufacturer configuration options may allow switching between TCP and UDP or changing the destination address and port
- Plaspy’s shared endpoint and automatic detection reduce the need for manual protocol selection but do not eliminate the need to set the device to report to Plaspy
- When integrating many devices validate a sample device end to end before wider rollout
- For any advanced feature or command support consult the manufacturer documentation for firmware specific behavior

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable reporting, efficient battery use, and faster troubleshooting when an ST 940 is deployed with Plaspy. Even though Plaspy handles protocol detection, knowledge of the device reporting behavior enables better configuration choices and operational outcomes.

- Helps choose reporting intervals that balance visibility and battery life
- Makes it faster to diagnose connectivity issues related to transport or network settings
- Allows confirmation that the device is sending the expected identity and telemetry fields
- Improves planning for geofencing, alarm delivery, and historical data retention
- Supports coordinated firmware updates and rollout strategies across a fleet

## Why Use Plaspy with This Protocol

Using the Suntech ST 940 with Plaspy provides straightforward visibility into location and basic device status while leveraging Plaspy’s automatic protocol detection and shared connection settings. The platform’s single endpoint approach simplifies network configuration so devices only need to be pointed to the Plaspy server to begin reporting.

If you want to learn more about how Plaspy works with trackers like the Suntech ST 940 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify the manufacturer documentation at http://www.suntechint.com/ since protocol support and firmware behavior can change over time.
