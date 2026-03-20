---
slug: /aoya/a14/protocol
id: a14-protocol
sidebar_label: Protocol
title: AoYa - A14 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for AoYa A14 GPS tracker and how it communicates with Plaspy for tracking and setup
keywords:
  - AoYa A14
  - AoYa A14 protocol
  - AoYa GPS tracker
  - A14 GPS protocol
  - A14 tracker Plaspy
  - Plaspy compatibility
  - vehicle tracking
  - fleet tracking integration
  - GPS communication protocol
  - tracker setup Plaspy
---

# AoYa - A14 Protocol

This page describes the public protocol context for using the AoYa A14 GPS tracker with Plaspy. It explains how the device typically communicates with a tracking server, what role the communication protocol plays in delivering location and status data, and which Plaspy connection settings are relevant for basic integration. The goal is to provide a clear, non sensitive overview that helps with setup and troubleshooting without exposing proprietary details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the correct endpoint. Exact protocol behavior on the A14 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general communication concepts and the Plaspy connection context rather than device internals.

## Protocol Overview

The protocol used by the A14 describes how the tracker packages and transmits telemetry, identification, and status information from the device to a remote server and how configuration or command exchanges can be initiated. On-network components such as GPS, cellular modem, and the emergency battery allow the tracker to produce usable telemetry even in low power or transitional conditions.

- Enables the tracker to report position data derived from GPS AGPS and LBS sources to a remote server.
- Carries device identity and status information so the server can associate incoming data with a particular A14 unit.
- Transports periodic telemetry as well as event driven messages for motion, SOS, or power changes in ways defined by the manufacturer.
- Allows remote configuration when the device supports server side or SMS based settings, enabling changes of reporting interval and connection target.
- Supports reliable message delivery over the cellular network using either UDP or TCP depending on device configuration.
- Works together with the tracker hardware such as the UBLOX GPS receiver and the cellular modem to provide continuous tracking and emergency reporting.

## How Plaspy Detects the Protocol

Plaspy receives data from many different tracker models and automatically determines the incoming protocol when a device is correctly configured to report to the Plaspy endpoint. In most cases the user does not need to choose a protocol within Plaspy if the device is pointing at the Plaspy server and using the supported transport settings.

- Plaspy listens on a shared endpoint to receive device reports and applies automatic protocol detection.
- The Plaspy server endpoint used for device reporting is d.plaspy.com.
- Plaspy is reachable at the public IP 54.85.159.138 for deployments that use numeric addressing.
- All devices supported by Plaspy use the same server port for incoming data.
- Devices can be configured to send data over UDP or TCP to the Plaspy endpoint depending on device capabilities.
- If a tracker is configured to report to d.plaspy.com on the correct port, Plaspy will attempt to identify and parse the incoming protocol automatically.

## Transport and Connection Context

The A14 can send telemetry over the cellular network using standard transport protocols. Plaspy accepts incoming connections on a single port for all devices and supports both domain and numeric addressing so trackers can be configured using either method.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and the desired behavior.
- Plaspy accepts reports addressed to the domain d.plaspy.com as well as to the numeric address 54.85.159.138.
- Port 8888 is the shared port used by Plaspy for all supported tracker devices.
- Choosing UDP can reduce overhead for frequent small reports while TCP provides connection oriented delivery when supported by the tracker.
- Ensure the device APN and GSM data settings are correct so the tracker can reach the Plaspy endpoint over GPRS or cellular data.

## Protocol Compatibility Notes

- Firmware variations in AoYa A14 units can change how messages are formatted or which features are available; verify behavior for your firmware build.
- Hardware revisions or regional variants can affect cellular band support and available transport modes.
- Some configuration options are controlled by manufacturer defaults and may require an SMS or direct configuration step to point the device to d.plaspy.com or the numeric IP.
- Selection between UDP and TCP should match the capabilities and recommended configuration for your particular unit.
- Plaspy automatic detection simplifies setup but correct APN and server target settings on the device are still required.
- Always validate compatibility on a sample device before wide deployment to confirm expected reporting intervals and event behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps you set up devices correctly, interpret incoming telemetry, and troubleshoot connectivity issues with Plaspy. Even though Plaspy performs automatic protocol detection, awareness of transport and configuration details reduces setup time and operational surprises.

- Ensures the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can receive and identify messages.
- Helps diagnose connectivity problems by checking transport mode, APN, and whether the tracker uses UDP or TCP.
- Guides expectations around telemetry frequency, event reporting, and how the device identifies itself to the server.
- Supports planning for firmware updates or hardware changes that can alter device behavior over time.
- Enables more efficient collaboration with manufacturer support when device specific questions arise.

## Why Use Plaspy with This Protocol

Using the AoYa A14 with Plaspy provides a practical way to turn raw device telemetry into actionable location and status information for fleet operators, vehicle owners, and monitoring teams. The A14 design with GPS AGPS and LBS capabilities, compact form factor, and emergency battery make it suitable for automotive tracking where continuous location visibility and occasional offline resilience are needed.

If you are evaluating integration, Plaspy simplifies receiving and parsing tracker reports by providing a single, shared endpoint and automatic protocol detection. To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation can change over time and users should verify the latest device specific information with the manufacturer at http://www.aoyagps.com/.
