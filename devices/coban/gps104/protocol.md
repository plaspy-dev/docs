---
slug: /coban/gps104/protocol
id: gps104-protocol
sidebar_label: Protocol
title: Coban - GPS104 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for using the Coban GPS104 tracker with Plaspy including connection settings and compatibility considerations
keywords:
  - Coban GPS104 protocol
  - Coban GPS104 GPS protocol
  - Coban GPS104 protocol for Plaspy
  - Coban GPS104 communication protocol
  - Coban GPS104 tracking protocol
  - Coban GPS104 compatibility Plaspy
  - Coban GPS104 GPRS tracking
  - Coban GPS104 TCP UDP settings
  - Coban tracker protocol Plaspy
  - GPS104 device integration
---

# Coban - GPS104 Protocol

This page provides public protocol context for using the Coban GPS104 tracker with the Plaspy platform. It explains how the tracker can communicate with Plaspy, which connection settings Plaspy expects, and practical considerations for integrating GPS104 devices into a fleet monitoring environment without exposing private implementation details.

The Coban GPS104 combines GSM GPRS connectivity and GPS satellite positioning and supports configurable reporting methods. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact behavior and available features on any individual GPS104 may vary with firmware version, hardware revision, and manufacturer configuration, so final verification against the device's official documentation is recommended.

## Protocol Overview

The protocol that a Coban GPS104 uses defines how the device identifies itself to a server, how location and status reports are encoded and sent, and how the device accepts remote configuration when applicable. In the context of Plaspy the protocol's public role is to deliver timely, usable telemetry over GPRS so the cloud platform can present location and event data to users.

- Enables the GPS104 to send position and status reports from the device to Plaspy
- Carries identifying information so Plaspy can associate messages with the correct device record
- Transmits alarm and sensor events such as SOS, low battery, and movement alerts in a readable form for Plaspy processing
- Supports switching between SMS and GPRS reporting methods where the tracker and network permit
- Allows remote configuration or parameter updates when the manufacturer and firmware expose that capability

## How Plaspy Detects the Protocol

Plaspy accepts inbound device traffic on a single shared endpoint and port and employs automatic detection so most properly configured devices start reporting with no manual protocol selection. When a GPS104 is pointed to the Plaspy endpoint and uses the supported transport, Plaspy will identify the message type and process incoming reports into the platform.

- Plaspy listens on the shared server endpoint d.plaspy.com
- The platform is reachable at IP address 54.85.159.138 as an alternative to the domain
- All devices in Plaspy use the same port which simplifies device configuration
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint
- In typical setups the user does not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint

## Transport and Connection Context

Transport selection affects how the Coban GPS104 sends data to Plaspy. GPS104 units commonly support both UDP and TCP reporting over GPRS and can be configured to use the transport that best fits network and application needs. Plaspy supports devices that use either transport when they target the shared Plaspy endpoint and port.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Devices can point to the domain d.plaspy.com or to the numeric IP address 54.85.159.138
- Plaspy expects device traffic on port 8888 and that same port is used for all supported devices
- Choice between UDP and TCP can affect delivery characteristics such as retransmission and session behavior
- Ensure the device APN and GPRS settings are correct so the tracker can reach the Plaspy endpoint over the cellular network

## Protocol Compatibility Notes

- Firmware revisions for the GPS104 can change which features and message formats are available
- Hardware revisions and regional variants may alter supported transports or optional sensors
- Manufacturer configuration options may allow switching between SMS and GPRS reporting modes
- Some features listed by the manufacturer depend on server side handling and compatible platform features
- Transport choice UDP versus TCP may be constrained by network or carrier behavior in a given region
- Always validate a specific device and firmware combination against current manufacturer documentation

## Why Protocol Understanding Matters

Understanding the communication protocol used by the GPS104 helps ensure reliable setup, accurate troubleshooting, and consistent long term operation when integrating with Plaspy. Knowing what the device sends and how it connects reduces time to resolve reporting or configuration issues and helps you choose correct network and server settings.

- Faster diagnosis of connectivity problems when you know whether the device is using TCP or UDP
- Better configuration of device APN and reporting intervals to minimize GPRS traffic while meeting monitoring requirements
- Clearer expectations around which device events and alarms will be forwarded to Plaspy
- Easier validation that a device is correctly identified and associated in the Plaspy platform
- Improved planning for firmware updates or hardware changes that might affect protocol behavior

## Why Use Plaspy with This Protocol

Using the Coban GPS104 with Plaspy gives organizations a practical route to vehicle and asset visibility through a cloud platform that accepts widely used tracker reporting methods. The GPS104’s mix of tracking features such as smart tracking, alarms, and remote parameter configuration can be mapped into Plaspy to provide monitoring, alerting, and historical position data.

If you want to evaluate Plaspy for your Coban GPS104 devices or get started with integration, learn more about the platform at https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol information and firmware notes at the manufacturer site https://www.coban.net/.
