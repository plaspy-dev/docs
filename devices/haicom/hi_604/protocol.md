---
slug: /haicom/hi_604/protocol
id: hi_604-protocol
sidebar_label: Protocol
title: Haicom - HI-604 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Haicom HI-604 GPS tracker compatibility with Plaspy including connection and transport context
keywords:
  - Haicom HI-604
  - Haicom HI-604 protocol
  - Haicom HI-604 GPS tracker
  - Haicom HI-604 compatibility
  - Plaspy tracker protocol
  - GPS tracker protocol
  - vehicle tracking Plaspy
  - GPRS GPS tracker
  - asset tracking Haicom
  - tracking protocol guide
---

# Haicom - HI-604 Protocol

This page provides a public protocol reference for using the Haicom HI-604 tracker with Plaspy. It focuses on the communication and connection context needed for the device to report location and status to Plaspy without exposing sensitive implementation details. Use this as a high level guide to how the HI-604 interfaces with Plaspy for real time tracking and remote monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact behavior can vary by firmware version, hardware revision, and how the manufacturer implements reporting options on the HI-604, so configuration and feature availability may differ between units.

## Protocol Overview

The communication protocol for the HI-604 governs how the tracker sends position, status, and alert information from the device to a remote server and how configuration or control messages are delivered back to the device. For the HI-604 this includes leveraging cellular connectivity and onboard sensors to provide periodic or event driven updates that are consumable by Plaspy.

- Enables transmission of GPS location and time data to a remote server for mapping and playback.
- Conveys status and telemetry such as power, battery state, motion sensor events, and connectivity indicators.
- Supports configurable reporting intervals and event triggers so the tracker can operate in power saving or real time modes.
- Uses the device cellular link and relevant network transport to deliver messages to a central endpoint.
- Allows remote configuration and control through supported command channels provided by the manufacturer and consumed by the platform.

## How Plaspy Detects the Protocol

Plaspy receives tracker data at a single shared endpoint and port and applies automatic detection to identify the device protocol when properly configured. This design means most users do not need to pick a protocol manually within Plaspy as long as the HI-604 is set to report to the Plaspy server.

- Devices should be configured to report to d.plaspy.com or to the Plaspy server IP address 54.85.159.138.
- Plaspy listens on port 8888 for incoming device traffic and uses that shared port for all supported devices.
- The tracker can use either UDP or TCP transport to connect to Plaspy depending on device settings and network conditions.
- When the device is pointed at the Plaspy endpoint and sending data, Plaspy attempts to identify the incoming protocol automatically.
- Proper APN and cellular configuration on the tracker are typical prerequisites for successful reporting to the Plaspy endpoint.

## Transport and Connection Context

Connection choices affect how the HI-604 reaches Plaspy and how promptly messages are delivered. The HI-604 supports multiple cellular reporting methods and can be configured to use either of the common transports to communicate with a remote collector.

- The tracker may be configured to use UDP or TCP on port 8888 depending on model configuration and firmware capabilities.
- Devices can point to the hostname d.plaspy.com or directly to the IP address 54.85.159.138 when specifying the reporting server.
- Plaspy uses the same port number for all supported devices, simplifying device setup and firewall rules.
- Network stability, carrier behavior, and the chosen transport (UDP vs TCP) can influence delivery reliability and retransmission behavior.
- Ensure the tracker APN and cellular credentials are set correctly so the device can establish GPRS connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware variations between HI-604 units can change available reporting options and the exact message content sent to the server.
- Hardware revisions or batch differences may affect sensor behavior, battery management, and deep sleep modes that influence reporting frequency.
- Manufacturer configuration options may allow reporting over SMS, GPRS, or DTMF in addition to direct data reporting; confirm which channel is in use when integrating with Plaspy.
- Choice of UDP versus TCP should match device configuration and any network constraints such as NAT or carrier filtering.
- Always validate device configuration by sending test reports to d.plaspy.com or 54.85.159.138 and confirming they arrive at Plaspy on port 8888.
- When in doubt, consult manufacturer documentation for firmware specific notes that affect protocol behavior.

## Why Protocol Understanding Matters

Understanding the HI-604 communication protocol and connection context helps ensure reliable tracking, efficient troubleshooting, and predictable operational behavior when the device is used with Plaspy. Clear protocol awareness reduces integration time and improves long term system stability.

- Helps diagnose connectivity issues by confirming whether the device reaches d.plaspy.com or 54.85.159.138 on the expected port.
- Guides configuration choices such as TCP versus UDP and reporting intervals to match operational needs.
- Informs expectations about battery life when deep sleep and motion sensor features alter reporting cadence.
- Supports coordinated troubleshooting with carriers or the device manufacturer by referencing how the tracker is configured to report.
- Enables planning for firewall and network rules since Plaspy uses a single shared port for all devices.

## Why Use Plaspy with This Protocol

Using the Haicom HI-604 with Plaspy provides a practical way to centralize location, status, and alert data from a compact multi function tracker into a single fleet and asset management platform. The HI-604 offers flexible reporting options and environmental resilience that make it suitable for many tracking scenarios, while Plaspy handles protocol detection and centralized data ingestion.

To learn more about Plaspy and how it manages device communication, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and implementation guidance for the HI-604, verify information on the Haicom official website at http://www.haicom.com.tw/ because protocol support and firmware behavior can change over time.
