---
slug: /cantrack/nb20/protocol
id: nb20-protocol
sidebar_label: Protocol
title: CanTrack - NB20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for integrating the CanTrack NB20 tracker with Plaspy real time tracking and connection settings
keywords:
  - CanTrack NB20 protocol
  - CanTrack NB20 GPS protocol
  - CanTrack NB20 Plaspy compatibility
  - NB20 GPS tracker protocol
  - NB20 communication protocol
  - CanTrack tracker protocol
  - Plaspy supported devices
  - pet tracker protocol
  - GPS tracking protocol CanTrack
  - NB20 connectivity details
---

# CanTrack - NB20 Protocol

This page covers the public protocol context for using the CanTrack NB20 tracker with the Plaspy platform. It explains how the device communicates with Plaspy in broad, non sensitive terms and what connection settings are used to deliver real time location, telemetry and alerts to the platform.

Plaspy uses shared connection settings across supported devices and automatically detects tracker protocols, but exact on device behavior can vary by firmware version, hardware revision, and manufacturer implementation. The NB20 is a multi technology pet tracker combining GPS GNSS, Bluetooth LE and Wi Fi positioning with Nano SIM or eSIM cellular uplink, and the guidance here describes how that uplink typically interacts with Plaspy without exposing private protocol internals.

## Protocol Overview

The communication protocol for the NB20 governs how the tracker sends identification, location, status, and alert information to a remote server so Plaspy can display live maps, generate notifications, and record history. This page focuses on the role of the protocol in enabling reliable reporting and platform integration rather than on internal packet formats or proprietary framing.

- Enables the NB20 to report periodic location and status updates to Plaspy for live tracking and history
- Carries device identification and state information so Plaspy can associate incoming data with the correct tracker
- Transports event notifications such as geo fence breaches, low battery alerts, and urgent tracking triggers to Plaspy
- Supports the use of multiple transports and connection settings so the tracker can adapt to network conditions
- Allows Plaspy to receive hybrid positioning updates that combine GNSS, Bluetooth, and Wi Fi assisted fixes for indoor and outdoor coverage

## How Plaspy Detects the Protocol

Plaspy accepts connections to a shared endpoint and port for all supported devices and automatically identifies the tracker protocol used by an incoming device. In most cases, when the NB20 is configured to report to the Plaspy endpoint, users do not need to select a protocol manually in the Plaspy interface.

- Plaspy listens on a single platform port so all devices use the same destination port for reporting
- The Plaspy server domain is d.plaspy.com which resolves to the public server endpoint
- The Plaspy server IP is 54.85.159.138 and the configured platform port is 8888
- Plaspy automatically detects the tracker protocol for incoming connections so manual protocol selection is typically unnecessary
- Proper device configuration to point to the Plaspy endpoint is the usual requirement for automatic detection

## Transport and Connection Context

Connection transport is a configuration choice on the NB20 and determines how the device opens sockets to the server. The NB20 supports cellular uplinks and can be set to use either UDP or TCP depending on network reliability, firmware options, and the user configuration.

- Devices may be configured to use UDP or TCP on port 8888 to report to Plaspy
- NB20 units can point to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138
- Plaspy uses the same port, 8888, for all supported trackers to simplify device setup
- Transport choice can affect delivery characteristics such as retransmission behavior and perceived latency
- Ensure the device SIM or eSIM data settings and APN are correctly configured so the tracker can establish an uplink to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware version differences can change which features or message types a device sends to Plaspy
- Hardware revisions and regional variants may alter available cellular bands or positioning behavior
- Manufacturer side configuration options, such as default transport or carrier settings, can affect connectivity to Plaspy
- Choosing UDP versus TCP on the device can influence reliability and battery consumption
- Validate SIM or eSIM configuration and APN settings when deploying NB20 devices with Plaspy
- Consult CanTrack documentation for device specific firmware notes that could impact protocol behavior

## Why Protocol Understanding Matters

Understanding the NB20 communication protocol at a platform level helps ensure a smooth setup, reliable operation, and efficient troubleshooting when using Plaspy. Even though Plaspy will automatically detect protocols, practical familiarity with how the device reports and which connection options it uses reduces setup time and improves operational reliability.

- Simplifies initial setup by ensuring the device points to the correct Plaspy endpoint and port
- Helps diagnose connectivity issues related to transport selection, APN, or carrier restrictions
- Clarifies why certain events such as geo fence alerts or urgent tracking appear in Plaspy
- Aids in planning battery and reporting interval trade offs for longer device life
- Supports coordinated firmware update and maintenance workflows using the device Bluetooth and OTA capabilities

## Why Use Plaspy with This Protocol

Using the NB20 with Plaspy gives pet owners and managers continuous visibility via a platform designed to ingest hybrid positioning data and deliver alerts, history playback, and live maps. The NB20’s small, water resistant form factor plus multi technology positioning makes it well suited for collar mounted pet tracking while Plaspy handles the server side aggregation and presentation of location and event information.

To learn more about Plaspy and how it works with compatible devices visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior and manufacturer guidance verify information on the official CanTrack website https://www.cantrackgps.com/ as device implementations and firmware features can change over time.
