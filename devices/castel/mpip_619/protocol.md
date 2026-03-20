---
slug: /castel/mpip_619/protocol
id: mpip_619-protocol
sidebar_label: Protocol
title: Castel - MPIP-619 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Castel MPIP-619 GPS tracker and how it communicates with Plaspy for vehicle monitoring
keywords:
  - Castel MPIP-619 protocol
  - Castel MPIP-619 GPS protocol
  - Castel MPIP-619 protocol for Plaspy
  - Castel MPIP-619 communication protocol
  - Castel MPIP-619 tracking protocol
  - Castel vehicle tracker protocol
  - MPIP-619 Plaspy compatibility
  - GPS tracker Plaspy integration
  - vehicle tracking Plaspy Castel
  - Castel tracker protocol overview
---

# Castel - MPIP-619 Protocol

This page describes the public protocol context for using the Castel MPIP-619 tracker with Plaspy. It summarizes how the device communicates in typical deployments, what role the tracker reporting protocol plays, and which Plaspy connection settings are used for device integration. The goal is to provide clear, non sensitive protocol context that helps administrators and integrators set up and support the MPIP-619 with Plaspy.

The Castel MPIP-619 is a compact hard wired tracker built for motorcycles and vehicles, offering features such as real time positioning, remote engine cut off, SMS and GPRS configuration, SOS and speeding alarms, geofencing, and offline data storage. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact packet behavior and command availability can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

At a high level the MPIP-619 reporting protocol defines how the device identifies itself and delivers telemetry and alarm data to a remote server such as Plaspy. The protocol governs the types of messages sent by the tracker, the identification information it includes, and how events like SOS, geofence violations, or power changes are reported for processing on a platform.

- Transmits positional telemetry and basic diagnostics that Plaspy uses for real time location and history
- Includes device identity and session information so Plaspy can associate incoming messages with the correct asset
- Carries alarm and event notifications such as SOS, speeding, and geo fence triggers for immediate processing
- Supports delivery over IP using the device GPRS channel and can also work with SMS based configuration where supported
- Allows Plaspy to store offline data uploaded after temporary loss of connectivity so no events are missed

## How Plaspy Detects the Protocol

Plaspy accepts device connections on a single shared endpoint and port and automatically detects the tracker protocol for supported devices. When an MPIP-619 is configured to report to the Plaspy endpoint and can reach the network, Plaspy will match incoming messages to the appropriate protocol handler so manual protocol selection inside the platform is typically not required.

- Plaspy listens at the domain d.plaspy.com and the public server IP 54.85.159.138 for device reports
- All devices in Plaspy use the same port which simplifies device configuration and onboarding
- Plaspy automatically detects the tracker protocol from the incoming connection and payload metadata
- Proper device configuration to point at the Plaspy endpoint is the usual requirement for automatic detection
- If a device cannot reach the endpoint or uses a nonstandard transport, detection and onboarding can be impacted

## Transport and Connection Context

The MPIP-619 may be configured to use either UDP or TCP transport for its data reports depending on device settings and network behavior. Plaspy supports both transport modes on the unified port so devices can use whichever transport is appropriate for their firmware and network environment.

- Devices may be configured to report to d.plaspy.com or to the numeric address 54.85.159.138
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Plaspy accepts both UDP and TCP on the same port to simplify device setup
- Consistent port usage across devices reduces configuration errors when deploying mixed fleets
- For remote command or configuration via IP, confirm the device firmware supports the desired transport mode

## Protocol Compatibility Notes

- Firmware versions can change message content and behavior so protocol features may vary between firmware releases
- Hardware revisions or accessory modules connected to the MPIP-619 can alter available inputs and event reporting
- Manufacturer side settings or regional variants may produce subtle protocol differences even within the same model
- Transport selection of UDP versus TCP can affect delivery characteristics under certain network conditions
- SMS based configuration or fallbacks can coexist with GPRS reporting and may be used during provisioning
- Always validate compatibility and behavior against official Castel documentation for your device serial and firmware

## Why Protocol Understanding Matters

Understanding how the MPIP-619 communicates helps ensure a reliable setup, faster troubleshooting, and predictable long term operation when used with Plaspy. Knowing the public protocol context enables administrators to confirm correct server settings, interpret device events, and coordinate firmware or configuration updates.

- Verify device reports reach the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on the shared port
- Confirm whether a device instance uses UDP or TCP so network rules and firewalls allow the chosen transport
- Interpret incoming telemetry and alarms correctly when investigating missing locations or unexpected events
- Determine if a firmware update or hardware revision might change message behavior before rolling out to a fleet
- Plan for accessory signals and inputs that may affect event reporting and dashboard alerts in Plaspy

## Why Use Plaspy with This Protocol

Using the Castel MPIP-619 with Plaspy delivers centralized visibility for vehicle and motorcycle fleets by combining the device reporting capabilities with Plaspy processing, storage, and alerting. Plaspy consumes the telemetry and event data the MPIP-619 provides to present live location, historical trails, alarms, and basic diagnostics in a single platform, simplifying monitoring and operations.

To learn more about Plaspy and how it handles device onboarding and data, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information with Castel at http://www.castelecom.com/ before large scale deployments.
