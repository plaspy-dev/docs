---
slug: /appello/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: Appello - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Appello TK102 and how the tracker communicates with Plaspy for reliable integration and monitoring
keywords:
  - Appello TK102 protocol
  - Appello TK102 GPS protocol
  - TK102 communication protocol
  - TK102 tracking protocol
  - Appello GPS tracker compatibility
  - TK102 Plaspy compatibility
  - Appello TK102 GPRS tracker
  - TK102 vehicle tracking
  - Plaspy device protocol
  - GPS tracker protocol documentation
---

# Appello - TK102 Protocol

This page describes the public protocol context for using the Appello TK102 tracker with Plaspy. It focuses on how the tracker communicates in general terms, what connection settings are used to reach Plaspy, and what to consider when integrating the device. The hardware and radio characteristics of the TK102 such as GSM GPRS support, dual band operation, and the New Star NS 1315 GPS chip provide the platform for location reporting and are the basis for the device behavior referenced here.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior on any given TK102 can vary by firmware version, hardware revision, and manufacturer implementation, so this page emphasizes public, non sensitive protocol context and integration guidance rather than firmware specific commands or internal packet formats.

## Protocol Overview

The protocol for the TK102 is the set of messages and transport choices the device uses to report location, status, and events to a tracking server. In practice this means the tracker formats GPS, network, and status data and sends it to the configured Plaspy endpoint so the platform can interpret and present the information.

- Enables the tracker to report GPS position and movement events to Plaspy for mapping and alerts
- Identifies the device to the server so Plaspy can associate incoming data with the correct asset
- Carries status and telemetry that Plaspy uses for battery, signal, and location quality indicators
- Uses a supported transport to deliver messages reliably to the server endpoint
- Works in combination with device firmware and configuration to determine reporting intervals and behavior

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single shared server endpoint and infers the tracker protocol used by each device. In most cases users do not need to select a protocol inside Plaspy if the TK102 is configured to report to the correct Plaspy endpoint.

- Plaspy listens on a shared server domain and IP so devices report to a single destination for all supported models
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol
- When the TK102 is pointed to the Plaspy endpoint and uses the configured transport, Plaspy will match and process the device messages
- Manual selection of a protocol in the platform is typically unnecessary when device reporting is configured correctly

## Transport and Connection Context

Connection choices determine how the TK102 reaches Plaspy. The tracker can be configured to use either UDP or TCP depending on device capabilities and user configuration, and it should be pointed at the Plaspy server endpoint to enable reliable ingestion.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Plaspy server domain d.plaspy.com and the IP address 54.85.159.138 are public connection targets for device reporting
- All devices in Plaspy use the same port which simplifies device setup and firewall configuration
- Choose UDP for simpler low overhead reporting or TCP when a persistent connection is desired and supported by the device
- Ensure the device APN and GSM settings allow outbound data to the configured endpoint so messages reach Plaspy

## Protocol Compatibility Notes

- Firmware revisions on the TK102 can change message timing, supported transports, or optional fields that affect integration
- Different hardware batches or clones may implement similar reporting behavior with small variations in message content
- Transport selection matters for delivery behavior and should match what the device firmware supports and what your network allows
- Manufacturer settings and default reporting servers may need to be updated to point to the Plaspy endpoint
- Validate that the device is reporting to the Plaspy domain or IP and on the shared port used by Plaspy
- Always cross check device behavior against official manufacturer documentation for model specific variations

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth setup, faster troubleshooting, and more reliable long term operation with Plaspy. Knowing which transport and endpoint to use, and what variations to expect across firmware, reduces integration friction.

- Helps verify that the device is reporting to Plaspy and not an incorrect or legacy endpoint
- Speeds troubleshooting when position updates, telemetry, or status reports do not appear as expected
- Guides configuration choices for APN, transport, and reporting intervals that affect battery life and data usage
- Aids in identifying firmware related differences that affect message content or timing
- Supports informed decisions about network and firewall rules to permit device traffic to Plaspy

## Why Use Plaspy with This Protocol

Using the Appello TK102 with Plaspy provides a straightforward way to gain location visibility and operational oversight. The TK102 hardware capabilities combined with Plaspy's automatic protocol detection and unified connection settings make it practical to deploy these trackers for vehicle, asset, or personal monitoring where compact size and reliable GPS performance are required.

To learn more about Plaspy and how it handles device connectivity and monitoring, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific information on the manufacturer website http://www.cnjeo.com/.
