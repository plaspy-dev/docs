---
slug: /thingsys/ls500/protocol
id: ls500-protocol
sidebar_label: Protocol
title: ThingSys - LS500 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the ThingSys LS500 and how it communicates with Plaspy using shared connection settings
keywords:
  - ThingSys LS500 protocol
  - ThingSys LS500 GPS protocol
  - LS500 tracking protocol
  - ThingSys LS500 communication
  - LS500 GPS tracker Plaspy
  - ThingSys GPS protocol compatibility
  - LS500 vehicle speed limiter protocol
  - ThingSys LS500 integration
  - Plaspy device protocol
  - vehicle GPS protocol ThingSys
---

# ThingSys - LS500 Protocol

This page describes the public protocol context for using the ThingSys LS500 with Plaspy. It focuses on how the LS500 communicates in general terms, what connection settings are required to report to Plaspy, and what to consider when integrating the device. The content is intended to help fleet managers, integrators, and technicians prepare a device for reporting to Plaspy without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the notes here are general guidance grounded in the LS500 device description rather than firmware internals.

## Protocol Overview

The communication protocol for the LS500 governs how the device sends position, status, and event information to a remote server and how it receives remote commands or configuration when allowed. In the context of Plaspy, the protocol acts as the transport of structured telemetry and control messages that Plaspy uses to populate location, speed limiting status, and other vehicle telemetry.

- Enables the LS500 to report GPS fixes, speed and status to a remote endpoint for fleet monitoring.
- Provides identification and session data so the receiving server can associate reports with a specific device.
- Transports device status indicators that help Plaspy present speed limiter and operational state to users.
- Supports both reporting and optional remote configuration flows when the device and operator allow it.
- Allows the LS500 to integrate with external sensors and connectivity modules while forwarding consolidated telemetry to Plaspy.

## How Plaspy Detects the Protocol

Plaspy accepts device reports on a shared endpoint and automatically identifies the tracker protocol based on the incoming messages and expected device behaviors. For most installations, once the LS500 is configured to send data to the Plaspy endpoint, no manual protocol selection in Plaspy is required.

- Plaspy uses a single server endpoint for device reporting at d.plaspy.com and also accepts direct connections to 54.85.159.138.
- All devices report to the same port on Plaspy, which simplifies device configuration and onboarding.
- The standard reporting port for Plaspy is 8888 and the LS500 may be configured to use that port.
- Plaspy can accept data over TCP or UDP depending on the device configuration and network conditions.
- If the LS500 is configured to point to the Plaspy endpoint and the device sends valid reports, Plaspy will detect and process the protocol automatically.

## Transport and Connection Context

Connection context covers how the LS500 establishes network transport to deliver telemetry to Plaspy. The LS500 supports GSM GPRS connectivity and may be set to use either UDP or TCP for transport. Proper transport and address configuration are essential for reliable reporting to Plaspy.

- The LS500 may be configured to use UDP or TCP on port 8888 depending on device support and site preferences.
- Devices can be pointed to the hostname d.plaspy.com or the numeric server address 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices to simplify device setup across models.
- Choose UDP for low overhead and latency sensitive reporting or TCP when a connection oriented transport is preferred by the device firmware and network.
- Verify APN, SIM service, and GSM signal availability so the LS500 can maintain a connection to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, or supported transports; always note the LS500 firmware level when troubleshooting.
- Hardware revisions and optional modules such as Bluetooth or additional I/O can alter how the device reports auxiliary data to the server.
- Manufacturer configuration commands or settings at the device side determine whether the device uses UDP or TCP and what server address is used.
- Network conditions and mobile operator restrictions can affect delivery of messages; validate SIM and APN settings for the deployment region.
- Confirm any region specific firmware or localization options that ThingSys may publish for the LS500.
- Use the official device manual from ThingSys to verify exact configuration strings and firmware specific behaviors before wide deployment.

## Why Protocol Understanding Matters

Understanding how the LS500 communicates with Plaspy helps ensure predictable onboarding, reliable telemetry delivery, and faster troubleshooting when issues occur. Even when Plaspy auto detects the protocol, knowing the transport and reporting behavior reduces integration risk and operational downtime.

- Helps validate that the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 and is using the intended transport.
- Speeds up troubleshooting when telemetry is missing by narrowing checks to APN, SIM state, transport type, and firmware version.
- Ensures configuration changes such as transport selection or server address updates are applied consistently across a fleet.
- Supports planning for firmware upgrades and hardware revisions that can change reporting behavior.
- Improves coordination between field technicians and Plaspy support by using common, verifiable connection settings.

## Why Use Plaspy with This Protocol

Using the ThingSys LS500 together with Plaspy provides organizations with consolidated vehicle visibility, speed limiting telemetry, and the ability to monitor operational parameters from a single platform. Plaspy’s automatic protocol detection and uniform port usage simplify on boarding for large fleets and mixed device deployments.

If you want to learn more about how Plaspy works with devices like the ThingSys LS500 and to review platform capabilities, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions refer to ThingSys official documentation at https://www.thingsys.com/; protocol support and firmware behavior can change over time so verify current information with the manufacturer.
