---
slug: /nvs/navitrek_um_02/protocol
id: navitrek_um_02-protocol
sidebar_label: Protocol
title: NVS - Navitrek UM-02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for NVS Navitrek UM 02 and how it communicates with Plaspy for fleet tracking
keywords:
  - NVS Navitrek UM 02 protocol
  - Navitrek UM 02 GPS protocol
  - NVS GPS tracker protocol
  - Navitrek protocol Plaspy
  - Navitrek UM 02 communication protocol
  - Navitrek UM 02 tracking protocol
  - NVS fleet tracking Plaspy
  - GPS tracker Plaspy integration
  - GLONASS GPS Navitrek
  - Navitrek UM 02 GPRS SMS support
---

# NVS - Navitrek UM-02 Protocol

This page covers the public protocol context for using the NVS Navitrek UM-02 tracker with Plaspy. It explains the general communication role the device plays when reporting location and event information to a remote tracking platform. The Navitrek UM-02 is an autonomous search device that transmits location via GPRS and can also use SMS channels; its internal GLONASS/GPS receiver series NV08C from ZAO KB NAVIS provides the position data the device sends.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol to simplify onboarding. For Plaspy the known server endpoint is d.plaspy.com and the server IP 54.85.159.138 using port 8888. Devices may be configured to use UDP or TCP on port 8888, and all devices in Plaspy use the same port. Exact protocol behavior and available commands can vary by firmware version, hardware revision, and manufacturer implementation, so users should confirm device specific details with official NVS documentation when needed.

## Protocol Overview

The tracker reporting protocol is the set of rules and formats the Navitrek UM-02 uses to send telemetry, position fixes, and event information to a remote server. In the context of Plaspy the protocol determines how the tracker identifies itself, how location and status are represented, and how the server acknowledges or records received reports.

- Enables the Navitrek UM-02 to transmit GPS or GLONASS position data and basic device status to Plaspy over mobile data
- Provides a mechanism for the device to identify itself so Plaspy can associate messages with the correct asset
- Carries event types such as movement, tamper, or low battery so the platform can generate alerts and logs
- Supports configuration and reporting behaviors that vary with firmware and manufacturer settings
- May fall back to SMS for alerts or configuration where GPRS connectivity is not available, depending on device setup

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections on a single public endpoint and to automatically determine which tracker protocol is in use for each device session. This removes the need for users to select a protocol manually inside the platform when the device is configured to report to Plaspy.

- Plaspy receives device traffic at d.plaspy.com and at the public IP 54.85.159.138 on port 8888
- Devices can be configured to use either UDP or TCP transport to reach Plaspy on port 8888
- All devices in Plaspy use the same port, which simplifies firewall and network configuration
- When the Navitrek UM-02 is pointed to the Plaspy endpoint and correctly configured, Plaspy will detect the tracker protocol automatically
- Users typically need only set the device server settings and APN on the tracker side for successful detection

## Transport and Connection Context

Connection behavior is a combination of the tracker capabilities, mobile network configuration, and the server endpoint used. The Navitrek UM-02 commonly uses GPRS for IP based reporting and can also leverage SMS channels for specific alerts or fallback messaging if supported.

- The device may use UDP or TCP on port 8888 depending on its configuration and firmware capabilities
- Tracker server settings can point to the domain d.plaspy.com or the server IP 54.85.159.138 to reach Plaspy
- Ensure the device APN and mobile data settings allow outbound connections to the public internet for GPRS reporting
- Firewall rules should permit outbound and inbound traffic on port 8888 for the chosen transport protocol
- SMS is a separate channel and is useful for certain alerts, but IP based reporting is required for normal Plaspy integration

## Protocol Compatibility Notes

- Firmware revisions can change message behavior and supported features even within the same model
- Hardware revisions or optional modules can affect available inputs, outputs, and event reporting
- Manufacturer side settings can enable or disable transports or specific message types
- Transport selection between UDP and TCP can affect delivery characteristics; use the transport supported by the device firmware and network
- Always validate APN, server address, and port settings against official device documentation before large scale deployment
- For features beyond basic location reporting consult NVS documentation to confirm implementation details

## Why Protocol Understanding Matters

A basic understanding of how the Navitrek UM-02 communicates helps with first time setup, troubleshooting intermittent reporting, and ensuring reliable long term operation with Plaspy. Knowing what the tracker can and cannot report also helps you design workflows and alerts that match operational needs.

- Speeds up initial device setup by clarifying server, port, and APN configuration needs
- Helps diagnose connectivity problems by narrowing the issue to transport, APN, or firmware behavior
- Improves event configuration so alerts and rules in Plaspy align with device capabilities
- Supports planning for firmware updates and hardware replacements by anticipating protocol changes
- Assists with network planning such as firewall rules and NAT traversal for consistent reporting

## Why Use Plaspy with This Protocol

Using the Navitrek UM-02 with Plaspy provides a straightforward path to centralized tracking and fleet visibility. Plaspy’s single endpoint approach and automatic protocol detection reduce configuration overhead and make it easier to register and monitor devices that report over GPRS. For organizations managing assets or vehicles, this combination lets teams focus on operations rather than low level protocol details.

To learn more about Plaspy and how it supports GPS trackers like the Navitrek UM-02 visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes with the manufacturer at https://www.nvs-ts.ru/ since protocol support and firmware features can change over time.
