---
slug: /teltonika/fmc13a/protocol
id: fmc13a-protocol
sidebar_label: Protocol
title: Teltonika - FMC13A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the Teltonika FMC13A and how it communicates with Plaspy
keywords:
  - Teltonika FMC13A protocol
  - Teltonika FMC13A GPS protocol
  - FMC13A Plaspy compatibility
  - FMC13A tracking protocol
  - Teltonika vehicle tracker protocol
  - Fleet management protocol Plaspy
  - GPS tracker communication Plaspy
  - Teltonika CAN data tracking
  - FMC13A 4G LTE tracker
  - Teltonika protocol integration
---

# Teltonika - FMC13A Protocol

This page describes the public protocol context for using the Teltonika FMC13A with Plaspy. It focuses on how the tracker communicates with Plaspy in high level terms and what aspects of the device reporting behavior are relevant when integrating the FMC13A into a fleet management setup. The intent is to help technical users and administrators understand connection and protocol context without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available features can vary by FMC13A firmware version, hardware revision, and manufacturer implementation, so this page provides general guidance and practical notes to aid setup and troubleshooting.

## Protocol Overview

The communication protocol for the FMC13A governs how the tracker identifies itself, delivers GNSS and telemetry data, and transmits vehicle bus and sensor information to a remote server. For Plaspy integration, the protocol's role is to provide reliable, periodic or event driven messages that contain usable position and diagnostic data while allowing the platform to interpret device identity and capabilities.

- Enables the tracker to report GPS and multi GNSS position data that Plaspy can use for mapping and route analysis
- Carries telemetry and sensor values such as CAN bus readings, fuel meter inputs, and digital input states for use in fleet monitoring
- Provides device identification and status information so Plaspy can associate incoming messages with the correct asset
- Supports remote monitoring and control signals routed by the platform when the device and firmware expose control channels
- Transports periodic heartbeats and connectivity state updates used to maintain a reliable connection to Plaspy

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and port and uses that incoming data to determine the tracker protocol automatically. In most cases, users do not need to manually select a protocol in Plaspy as long as the FMC13A is configured to report to the Plaspy server and uses standard reporting modes provided by the manufacturer.

- Plaspy server endpoint for device reporting is d.plaspy.com and the server IP is 54.85.159.138
- The platform listens on port 8888 and all devices in Plaspy use the same port
- Devices can be configured to use UDP or TCP on port 8888 depending on device support and network preferences
- When the FMC13A sends valid reporting messages to the Plaspy endpoint, Plaspy identifies the device and matches the protocol automatically
- Proper APN and server address settings on the device are common prerequisites for detection and reporting

## Transport and Connection Context

Connection context covers the network transport and addressing used by the FMC13A when sending data to Plaspy. The tracker supports 4G LTE Cat 1 networks and will use whichever IP transport the installer configures or the firmware supports, so it is important to align device server settings with Plaspy connection details.

- The FMC13A may be configured to report via UDP or TCP on port 8888
- Devices may point to the domain d.plaspy.com or directly to 54.85.159.138 depending on installer preference
- Plaspy uses the same port 8888 for all supported devices which simplifies device provisioning
- Network level considerations such as carrier NAT, APN configuration, and firewall rules can affect connectivity to the Plaspy endpoint
- Choosing UDP or TCP can affect reliability and retransmission behavior based on your network environment

## Protocol Compatibility Notes

- Firmware variations across FMC13A units can change available reporting options and the exact fields included in messages
- Hardware revisions and optional accessories such as CAN adapters may expose additional telemetry that depends on device configuration
- The choice between UDP and TCP can be limited by carrier behavior or specific firmware builds on the tracker
- Manufacturer side configuration templates and the device configuration tool can affect how messages are formatted and which features are enabled
- Always validate that the FMC13A is set to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy compatibility
- If custom settings or nonstandard transport are used, confirm reporting behavior before wide deployment

## Why Protocol Understanding Matters

A practical understanding of the FMC13A communication protocol helps with reliable setup, faster troubleshooting, and better long term fleet operations when using Plaspy. Knowing what the tracker sends and how the platform receives it reduces integration time and helps ensure critical signals are captured.

- Speeds initial provisioning by ensuring correct server, APN, and transport settings
- Helps diagnose connectivity issues related to firewall, carrier, or APN restrictions
- Clarifies which vehicle and sensor data will be available to Plaspy based on firmware and accessory configuration
- Guides decisions about selecting UDP or TCP for your deployment based on network behaviors
- Supports informed firmware upgrade planning so features and reporting formats remain compatible

## Why Use Plaspy with This Protocol

Using the Teltonika FMC13A with Plaspy gives fleet operators consolidated visibility into vehicle location, CAN derived telemetry, fuel flow meter readings, and remote control options where supported by the device firmware. Plaspy's automatic protocol detection and consistent port usage simplify device rollout and reduce the need for per device manual configuration inside the platform.

If you want to learn more about Plaspy and how the platform handles device reporting and fleet monitoring, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and configuration guides for the Teltonika FMC13A consult the official Teltonika documentation at https://www.teltonika-gps.com/ as manufacturer behavior and firmware features can change over time.
