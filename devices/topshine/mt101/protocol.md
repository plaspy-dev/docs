---
slug: /topshine/mt101/protocol
id: mt101-protocol
sidebar_label: Protocol
title: TopShine - MT101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the TopShine MT101 and how it communicates with Plaspy for reliable motorcycle tracking
keywords:
  - TopShine MT101 protocol
  - TopShine MT101 GPS protocol
  - TopShine MT101 protocol for Plaspy
  - TopShine MT101 communication protocol
  - TopShine MT101 tracking protocol
  - TopShine GPS tracker protocol
  - MT101 protocol Plaspy
  - motorcycle GPS tracker protocol
  - fleet management MT101
  - MT101 compatibility Plaspy
---

# TopShine - MT101 Protocol

This page provides public protocol context for using the TopShine MT101 tracker with Plaspy. It explains how the device communicates in general terms, what role the tracker reporting protocol plays in reliable tracking, and which Plaspy connection settings are relevant for making the device report to the platform. The goal is to help technical integrators and administrators understand how the MT101 exchanges position and status information with Plaspy without exposing private implementation specifics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by MT101 firmware version, hardware revision, and manufacturer implementation, so this page focuses on public and practical connection context rather than device internals.

## Protocol Overview

The tracker reporting protocol is the set of messages and behaviour the MT101 uses to identify itself, deliver location and event data, and receive remote commands or acknowledgements when supported. At a high level, the protocol enables reliable data transfer from the device to a backend server and helps Plaspy present usable location, status, and alert information to end users.

- Enables the MT101 to report GPS position, status, and alarms to a remote server
- Carries device identity so Plaspy can associate incoming messages with the correct asset
- Conveys runtime information used by Plaspy for mapping, geo fencing, and alerting
- Allows optional remote interactions where supported such as engine cut control or remote configuration
- Serves as the basis for automatic protocol detection and parsing on the Plaspy platform

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and port and applies automatic protocol detection to recognize compatible trackers. When an MT101 is configured to report to Plaspy, the platform typically identifies the device protocol without requiring manual selection by the user, provided the tracker is correctly pointed to the Plaspy endpoint.

- Plaspy uses a common server endpoint d.plaspy.com for incoming tracker connections
- The platform is also reachable by the public server IP 54.85.159.138
- Plaspy accepts connections on port 8888 and automatically detects the tracker protocol
- Users normally do not need to choose a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint
- Plaspy supports both TCP and UDP transports so devices can use either transport to report data

## Transport and Connection Context

Connection and transport choices determine how the MT101 sends its tracking reports to Plaspy. The MT101 can be configured to use the cellular network to transmit data over TCP or UDP depending on the device settings and network conditions. For Plaspy integration, use the shared endpoint and port so the platform can receive and process reports.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Devices may be pointed to the domain d.plaspy.com or to the IP address 54.85.159.138
- All devices supported by Plaspy use the same port for reporting which simplifies device setup
- Choose the transport mode (UDP or TCP) according to the tracker configuration and network reliability needs
- Ensure the MT101 has network access and correct APN settings so it can reach d.plaspy.com over the cellular network

## Protocol Compatibility Notes

- Firmware revisions can change message content and behaviour so verify the MT101 firmware level when troubleshooting
- Hardware revisions and optional features such as relay or microphone can affect which protocol fields are used or reported
- Manufacturer configuration options may allow toggling between UDP and TCP or changing report intervals
- Network environment and dual SIM behavior can influence which carrier and IP path the device uses to reach Plaspy
- Always validate that the device is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888
- Confirm which optional features are active on a given unit when expecting specific event reports

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure devices are configured correctly, makes troubleshooting faster, and supports long term reliability of tracking data in Plaspy. Knowledge of the protocol and transport context reduces ambiguity when devices do not appear online or when reported data seems inconsistent.

- Ensures the MT101 is pointed to the correct Plaspy endpoint and port for reliable reporting
- Helps diagnose common issues such as blocked ports, incorrect APN, or wrong transport selection
- Supports validation that device identity and report cadence match expectations in Plaspy
- Makes it easier to confirm whether optional features will surface events in the platform
- Aids in planning for firmware updates and hardware changes that can affect integration

## Why Use Plaspy with This Protocol

Using the TopShine MT101 with Plaspy gives organizations a practical way to collect location, status, and alarm data for motorcycles and other light vehicles. Plaspy’s shared endpoint and automatic protocol detection reduce setup friction, allowing administrators to focus on configuration and operational workflows rather than protocol selection.

If you want to learn more about Plaspy and how it works with trackers like the TopShine MT101 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details may change over time and you should verify the latest device specific protocol information on the manufacturer website https://www.gztopshine.com/
