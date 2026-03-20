---
slug: /topshine/ca02/protocol
id: ca02-protocol
sidebar_label: Protocol
title: TopShine - CA02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the TopShine CA02 GPS tracker showing how it communicates with Plaspy for real time tracking
keywords:
  - TopShine CA02 protocol
  - TopShine CA02 GPS protocol
  - TopShine CA02 protocol for Plaspy
  - TopShine CA02 communication protocol
  - TopShine CA02 tracking protocol
  - TopShine CA02 compatibility
  - Plaspy compatible trackers
  - GPS tracker protocol
  - vehicle tracking protocol
  - fleet GPS protocol
---

# TopShine - CA02 Protocol

This page describes the public protocol context for using the TopShine CA02 GPS tracker and car security alarm with the Plaspy platform. It focuses on the high level communication and connection details needed for integration and troubleshooting rather than any private or firmware specific internals.

The CA02 is a Plaspy compatible in dash 2G GSM tracker with an integrated siren, shock sensor, central locking control, and relay driven immobilizer. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and how the manufacturer implements features such as alarms, immobilizer commands, and optional expansions.

## Protocol Overview

At a high level, the CA02 tracker protocol is the set of messages and connection behavior the device uses to report GPS position, alarm events, and status to a remote server and to receive remote control commands. In the Plaspy integration context the protocol enables secure delivery of location and telemetry to the platform so that events can be presented in the dashboard and mobile apps.

- Provides real time GPS position and movement updates to Plaspy so location and route history can be displayed.
- Delivers alarm and status events such as shock sensor triggers, door open, overspeed, geofence breaches, and GSM jamming detection for immediate notification.
- Supports remote control signals from the platform for functions like central locking and relay based engine or oil cut off.
- Allows optional telemetry such as fuel monitoring or other expansion module data to be forwarded alongside GPS data when available.
- Acts as the transportable interface between the device hardware and Plaspy so that telemetry becomes actionable monitoring and reporting.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many devices using a single shared endpoint and port. When a properly configured CA02 reports to Plaspy, the platform automatically detects the tracker protocol and routes data to the appropriate parsers and dashboard components. In most cases you do not need to select a protocol manually inside Plaspy if the device is correctly pointed to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138.
- Plaspy listens on port 8888 for device connections and all devices supported by Plaspy use the same port.
- The CA02 may be configured to use either UDP or TCP on port 8888 depending on device settings.
- When the device reports to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and associates incoming telemetry with the account device.

## Transport and Connection Context

Connection context describes how the CA02 sends data to Plaspy and how commands are returned. The CA02 uses cellular 2G GSM to reach the internet and then connects to the Plaspy endpoint to report GPS and alarm data. The transport can be TCP or UDP depending on configuration and firmware support.

- The device may be configured using UDP or TCP on port 8888 for reporting to Plaspy.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138.
- All Plaspy supported devices use the same reporting port 8888 for simplicity in deployment.
- Choice of UDP versus TCP can affect delivery characteristics and is controlled by the device configuration and network conditions.
- Ensure the cellular SIM and APN are provisioned so the CA02 can open outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions may change how events are encoded or which optional fields are present; always confirm behavior for the firmware revision in the unit.
- Hardware revisions or optional expansions such as fuel sensors or microphone modules can add telemetry that the platform must interpret.
- Manufacturer settings or regional product variants may alter available alarm types or the command set exposed by the device.
- Transport selection between UDP and TCP can be device configurable and may affect reliability on different networks.
- Confirm that the device is configured to report to d.plaspy.com or 54.85.159.138 and that it uses port 8888 to ensure Plaspy can receive data.
- Validate any custom manufacturer commands or SMS fallbacks against official documentation before relying on them in production.

## Why Protocol Understanding Matters

Understanding how the CA02 communicates with Plaspy helps ensure reliable installation, faster troubleshooting, and predictable long term operation. Knowledge of the connection and reporting behavior reduces downtime and improves the quality of telemetry available to fleet managers and vehicle owners.

- Helps confirm the device is pointed to the correct Plaspy endpoint and port so telemetry arrives consistently.
- Speeds diagnosis when events or location data are missing by narrowing focus to transport, SIM/APN, or configuration issues.
- Guides decisions about using UDP or TCP depending on network performance and reliability requirements.
- Allows integrators to verify that optional telemetry such as fuel or alarm expansions are being forwarded and interpreted by Plaspy.
- Informs testing and validation steps during installation so immobilizer and alarm actions behave as expected in the field.

## Why Use Plaspy with This Protocol

Using the TopShine CA02 with Plaspy gives organizations centralized visibility into vehicle location, alarm events, and immobilizer status while keeping configuration and reporting simple. For fleet managers and security focused deployments the combination of an integrated siren, shock sensor, and relay based engine cut off with Plaspy monitoring provides both deterrence and remote operational control.

To learn more about Plaspy and how the CA02 can be used in your deployment, visit https://www.plaspy.com. For device specific protocol details, firmware notes, and the latest manufacturer guidance verify current information at the TopShine website https://www.gztopshine.com/ since protocol support and firmware behavior can change over time.
